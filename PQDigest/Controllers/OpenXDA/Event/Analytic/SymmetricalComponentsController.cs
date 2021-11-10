//******************************************************************************************************
//  SymmetricalComponentsController.cs - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  08/06/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using FaultData.DataAnalysis;
using Gemstone.Data;
using Gemstone.Data.Model;
using MathNet.Numerics.Statistics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using OpenXDA.Model;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/Event/Analytic/[controller]")]
    [ApiController]
    public class SymmetricalComponentsController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
		private IMemoryCache m_memoryCache;
        private DateTime m_epoch = new DateTime(1970, 1, 1);


        public SymmetricalComponentsController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
			m_memoryCache = memoryCache;
		}

		[HttpGet, Route("{eventID:int}/{pixels:int}")]
        public ActionResult Get(int eventID, int pixels) {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {

                Event evt = new TableOperations<Event>(connection).QueryRecordWhere("ID = {0}", eventID);
                if (evt == null) return BadRequest("Must provide a valid EventID");
                Meter meter = new TableOperations<Meter>(connection).QueryRecordWhere("ID = {0}", evt.MeterID);
                meter.ConnectionFactory = () => new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]);

                Dictionary<string, IEnumerable<double[]>> returnData = new Dictionary<string, IEnumerable<double[]>>();
                DataGroupHelper dataGroupHelper = new DataGroupHelper(m_configuration, m_memoryCache);
                DataGroup dataGroup = dataGroupHelper.QueryDataGroup(eventID, meter); ;
                VICycleDataGroup vICycleDataGroup = dataGroupHelper.QueryVICycleDataGroup(eventID, meter);
                double systemFrequency = connection.ExecuteScalar<double?>("SELECT Value FROM Setting WHERE Name = 'SystemFrequency'") ?? 60.0;


                Dictionary<string, List<double[]>> returnList = new Dictionary<string, List<double[]>>();

                if (vICycleDataGroup.VA != null && vICycleDataGroup.VB != null && vICycleDataGroup.VC != null)
                {
                    var va = vICycleDataGroup.VA.RMS.DataPoints;
                    var vaPhase = vICycleDataGroup.VA.Phase.DataPoints;
                    var vb = vICycleDataGroup.VB.RMS.DataPoints;
                    var vbPhase = vICycleDataGroup.VB.Phase.DataPoints;
                    var vc = vICycleDataGroup.VC.RMS.DataPoints;
                    var vcPhase = vICycleDataGroup.VC.Phase.DataPoints;

                    IEnumerable<SequenceComponents> sequencComponents = va.Select((point, index) => {
                        DataPoint vaPoint = point;
                        DataPoint vaPhasePoint = vaPhase[index];
                        Complex vaComplex = Complex.FromPolarCoordinates(vaPoint.Value, vaPhasePoint.Value);

                        DataPoint vbPoint = vb[index];
                        DataPoint vbPhasePoint = vbPhase[index];
                        Complex vbComplex = Complex.FromPolarCoordinates(vbPoint.Value, vbPhasePoint.Value);

                        DataPoint vcPoint = vc[index];
                        DataPoint vcPhasePoint = vcPhase[index];
                        Complex vcComplex = Complex.FromPolarCoordinates(vcPoint.Value, vcPhasePoint.Value);

                        SequenceComponents sequenceComponents = CalculateSequenceComponents(vaComplex, vbComplex, vcComplex);

                        return sequenceComponents;
                    });

                    returnList.Add("Voltage S0", sequencComponents.Select((point, index) => new double[] { va[index].Time.Subtract(m_epoch).TotalMilliseconds, point.S0.Magnitude }).ToList());
                    returnList.Add("Voltage S1", sequencComponents.Select((point, index) => new double[] { va[index].Time.Subtract(m_epoch).TotalMilliseconds, point.S1.Magnitude }).ToList());
                    returnList.Add("Voltage S2", sequencComponents.Select((point, index) => new double[] { va[index].Time.Subtract(m_epoch).TotalMilliseconds, point.S2.Magnitude }).ToList());

                }


                if (vICycleDataGroup.IA != null && vICycleDataGroup.IB != null && vICycleDataGroup.IC != null)
                {

                    var ia = vICycleDataGroup.IA.RMS.DataPoints;
                    var iaPhase = vICycleDataGroup.IA.Phase.DataPoints;
                    var ib = vICycleDataGroup.IB.RMS.DataPoints;
                    var ibPhase = vICycleDataGroup.IB.Phase.DataPoints;
                    var ic = vICycleDataGroup.IC.RMS.DataPoints;
                    var icPhase = vICycleDataGroup.IC.Phase.DataPoints;

                    IEnumerable<SequenceComponents> sequencComponents = ia.Select((point, index) => {
                        DataPoint iaPoint = point;
                        DataPoint iaPhasePoint = iaPhase[index];
                        Complex iaComplex = Complex.FromPolarCoordinates(iaPoint.Value, iaPhasePoint.Value);

                        DataPoint ibPoint = ib[index];
                        DataPoint ibPhasePoint = ibPhase[index];
                        Complex ibComplex = Complex.FromPolarCoordinates(ibPoint.Value, ibPhasePoint.Value);

                        DataPoint icPoint = ic[index];
                        DataPoint icPhasePoint = icPhase[index];
                        Complex icComplex = Complex.FromPolarCoordinates(icPoint.Value, icPhasePoint.Value);

                        SequenceComponents sequenceComponents = CalculateSequenceComponents(iaComplex, ibComplex, icComplex);

                        return sequenceComponents;
                    });

                    returnList.Add("Current S0", sequencComponents.Select((point, index) => new double[] { ia[index].Time.Subtract(m_epoch).TotalMilliseconds, point.S0.Magnitude }).ToList());
                    returnList.Add("Current S1", sequencComponents.Select((point, index) => new double[] { ia[index].Time.Subtract(m_epoch).TotalMilliseconds, point.S1.Magnitude }).ToList());
                    returnList.Add("Current S2", sequencComponents.Select((point, index) => new double[] { ia[index].Time.Subtract(m_epoch).TotalMilliseconds, point.S2.Magnitude }).ToList());

                }

                return Ok(returnList);
            }

        }

        private class SequenceComponents
        {
            public Complex S0 { get; set; }
            public Complex S2 { get; set; }
            public Complex S1 { get; set; }

        }

        private static SequenceComponents CalculateSequenceComponents(Complex an, Complex bn, Complex cn)
        {
            double TwoPI = 2.0D * Math.PI;
            double Rad120 = TwoPI / 3.0D;
            Complex a = new Complex(Math.Cos(Rad120), Math.Sin(Rad120));
            Complex aSq = a * a;

            SequenceComponents sequenceComponents = new SequenceComponents();

            sequenceComponents.S0 = (an + bn + cn) / 3.0D;
            sequenceComponents.S1 = (an + a * bn + aSq * cn) / 3.0D;
            sequenceComponents.S2 = (an + aSq * bn + a * cn) / 3.0D;

            return sequenceComponents;
        }



    }

}
