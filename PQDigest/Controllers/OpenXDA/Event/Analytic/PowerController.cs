//******************************************************************************************************
//  PowerController.cs - Gbtc
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
    public class PowerController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
		private IMemoryCache m_memoryCache;
        private DateTime m_epoch = new DateTime(1970, 1, 1);


        public PowerController(IConfiguration configuration, IMemoryCache memoryCache)
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
                VICycleDataGroup vICycleDataGroup = dataGroupHelper.QueryVICycleDataGroup(eventID, meter);
                double systemFrequency = connection.ExecuteScalar<double?>("SELECT Value FROM Setting WHERE Name = 'SystemFrequency'") ?? 60.0;


                Dictionary<string, List<double[]>> returnList = new Dictionary<string, List<double[]>>();

                List<Complex> powerPointsAN = null;
                List<Complex> powerPointsBN = null;
                List<Complex> powerPointsCN = null;

                if (vICycleDataGroup.IA != null && vICycleDataGroup.VA != null)
                {
                    List<DataPoint> voltagePointsMag = vICycleDataGroup.VA.RMS.DataPoints;
                    List<DataPoint> voltagePointsAng = vICycleDataGroup.VA.Phase.DataPoints;
                    List<Complex> voltagePoints = voltagePointsMag.Select((vMagPoint, index) => Complex.FromPolarCoordinates(vMagPoint.Value, voltagePointsAng[index].Value)).ToList();

                    List<DataPoint> currentPointsMag = vICycleDataGroup.IA.RMS.DataPoints;
                    List<DataPoint> currentPointsAng = vICycleDataGroup.IA.Phase.DataPoints;
                    List<Complex> currentPoints = currentPointsMag.Select((iMagPoint, index) => Complex.Conjugate(Complex.FromPolarCoordinates(iMagPoint.Value, currentPointsAng[index].Value))).ToList();

                    powerPointsAN = voltagePoints.Select((vPoint, index) => currentPoints[index] * vPoint).ToList();
                    returnList.Add("AN Reactive Power", powerPointsAN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Imaginary}).ToList());
                    returnList.Add("AN Active Power", powerPointsAN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real }).ToList());
                    returnList.Add("AN Apparent Power", powerPointsAN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Magnitude }).ToList());
                    returnList.Add("AN Power Factor", powerPointsAN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real / iPoint.Magnitude }).ToList());
                }

                if (vICycleDataGroup.IB != null && vICycleDataGroup.VB != null)
                {
                    List<DataPoint> voltagePointsMag = vICycleDataGroup.VB.RMS.DataPoints;
                    List<DataPoint> voltagePointsAng = vICycleDataGroup.VB.Phase.DataPoints;
                    List<Complex> voltagePoints = voltagePointsMag.Select((vMagPoint, index) => Complex.FromPolarCoordinates(vMagPoint.Value, voltagePointsAng[index].Value)).ToList();

                    List<DataPoint> currentPointsMag = vICycleDataGroup.IB.RMS.DataPoints;
                    List<DataPoint> currentPointsAng = vICycleDataGroup.IB.Phase.DataPoints;
                    List<Complex> currentPoints = currentPointsMag.Select((iMagPoint, index) => Complex.Conjugate(Complex.FromPolarCoordinates(iMagPoint.Value, currentPointsAng[index].Value))).ToList();

                    powerPointsBN = voltagePoints.Select((vPoint, index) => currentPoints[index] * vPoint).ToList();
                    returnList.Add("BN Reactive Power", powerPointsBN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Imaginary }).ToList());
                    returnList.Add("BN Active Power", powerPointsBN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real }).ToList());
                    returnList.Add("BN Apparent Power", powerPointsBN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Magnitude }).ToList());
                    returnList.Add("BN Power Factor", powerPointsBN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real / iPoint.Magnitude }).ToList());
                }

                if (vICycleDataGroup.IC != null && vICycleDataGroup.VC != null)
                {
                    List<DataPoint> voltagePointsMag = vICycleDataGroup.VC.RMS.DataPoints;
                    List<DataPoint> voltagePointsAng = vICycleDataGroup.VC.Phase.DataPoints;
                    List<Complex> voltagePoints = voltagePointsMag.Select((vMagPoint, index) => Complex.FromPolarCoordinates(vMagPoint.Value, voltagePointsAng[index].Value)).ToList();

                    List<DataPoint> currentPointsMag = vICycleDataGroup.IC.RMS.DataPoints;
                    List<DataPoint> currentPointsAng = vICycleDataGroup.IC.Phase.DataPoints;
                    List<Complex> currentPoints = currentPointsMag.Select((iMagPoint, index) => Complex.Conjugate(Complex.FromPolarCoordinates(iMagPoint.Value, currentPointsAng[index].Value))).ToList();

                    powerPointsCN = voltagePoints.Select((vPoint, index) => currentPoints[index] * vPoint).ToList();
                    returnList.Add("CN Reactive Power", powerPointsCN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Imaginary }).ToList());
                    returnList.Add("CN Active Power", powerPointsCN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real }).ToList());
                    returnList.Add("CN Apparent Power", powerPointsCN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Magnitude }).ToList());
                    returnList.Add("CN Power Factor", powerPointsCN.Select((iPoint, index) => new double[] { voltagePointsMag[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real / iPoint.Magnitude }).ToList());
                }

                if (powerPointsAN != null && powerPointsAN.Any() && powerPointsBN != null && powerPointsBN.Any() && powerPointsCN != null && powerPointsCN.Any())
                {
                    IEnumerable<Complex> powerPoints = powerPointsAN.Select((pPoint, index) => pPoint + powerPointsBN[index] + powerPointsCN[index]).ToList();
                    returnList.Add("Total Reactive Power", powerPointsAN.Select((iPoint, index) => new double[] {  vICycleDataGroup.VC.RMS.DataPoints[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Imaginary}).ToList());
                    returnList.Add("Total Active Power", powerPointsAN.Select((iPoint, index) => new double[] { vICycleDataGroup.VC.RMS.DataPoints[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real }).ToList());
                    returnList.Add("Total Apparent Power", powerPointsAN.Select((iPoint, index) => new double[] { vICycleDataGroup.VC.RMS.DataPoints[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Magnitude }).ToList());
                    returnList.Add("Total Power Factor", powerPointsAN.Select((iPoint, index) => new double[] { vICycleDataGroup.VC.RMS.DataPoints[index].Time.Subtract(m_epoch).TotalMilliseconds, iPoint.Real / iPoint.Magnitude }).ToList());
                }


                return Ok(returnList);
            }

        }
    }

}
