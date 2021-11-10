//******************************************************************************************************
//  THDController.cs - Gbtc
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
    public class THDController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
		private IMemoryCache m_memoryCache;
        private DateTime m_epoch = new DateTime(1970, 1, 1);


        public THDController(IConfiguration configuration, IMemoryCache memoryCache)
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
                double systemFrequency = connection.ExecuteScalar<double?>("SELECT Value FROM Setting WHERE Name = 'SystemFrequency'") ?? 60.0;
                DataGroup dataGroup = dataGroupHelper.QueryDataGroup(eventID, meter); ;


                Dictionary<string, List<double[]>> returnList = new Dictionary<string, List<double[]>>();

                List<DataSeries> vAN = dataGroup.DataSeries.Where(x => x.SeriesInfo.Channel.MeasurementType.Name == "Voltage" && x.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && x.SeriesInfo.Channel.Phase.Name == "AN").ToList();
                List<DataSeries> iAN = dataGroup.DataSeries.Where(x => x.SeriesInfo.Channel.MeasurementType.Name == "Current" && x.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && x.SeriesInfo.Channel.Phase.Name == "AN").ToList();
                List<DataSeries> vBN = dataGroup.DataSeries.Where(x => x.SeriesInfo.Channel.MeasurementType.Name == "Voltage" && x.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && x.SeriesInfo.Channel.Phase.Name == "BN").ToList();
                List<DataSeries> iBN = dataGroup.DataSeries.Where(x => x.SeriesInfo.Channel.MeasurementType.Name == "Current" && x.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && x.SeriesInfo.Channel.Phase.Name == "BN").ToList();
                List<DataSeries> vCN = dataGroup.DataSeries.Where(x => x.SeriesInfo.Channel.MeasurementType.Name == "Voltage" && x.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && x.SeriesInfo.Channel.Phase.Name == "CN").ToList();
                List<DataSeries> iCN = dataGroup.DataSeries.Where(x => x.SeriesInfo.Channel.MeasurementType.Name == "Current" && x.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && x.SeriesInfo.Channel.Phase.Name == "CN").ToList();

                returnList.Add("VAN", GenerateTHD(systemFrequency, vAN.First()));
                returnList.Add("VBN", GenerateTHD(systemFrequency, vBN.First()));
                returnList.Add("VCN", GenerateTHD(systemFrequency, vCN.First()));
                returnList.Add("IAN", GenerateTHD(systemFrequency, iAN.First()));
                returnList.Add("IBN", GenerateTHD(systemFrequency, iBN.First()));
                returnList.Add("ICN", GenerateTHD(systemFrequency, iCN.First()));

                return Ok(returnList);
            }

        }

        private List<double[]> GenerateTHD(double systemFrequency, DataSeries dataSeries)
        {
            int samplesPerCycle = Transform.CalculateSamplesPerCycle(dataSeries.SampleRate, systemFrequency);

            double[][] dataArr = new double[(dataSeries.DataPoints.Count - samplesPerCycle)][];
            for (int i = 0; i < dataSeries.DataPoints.Count - samplesPerCycle; i++)
            {

                double[] points = dataSeries.DataPoints.Skip(i).Take(samplesPerCycle).Select(point => point.Value / samplesPerCycle).ToArray();
                FFT fft = new FFT(systemFrequency * samplesPerCycle, points);


                double rmsHarmSum = fft.Magnitude.Where((value, index) => index != 1).Select(value => Math.Pow(value, 2)).Sum();
                double rmsHarm = fft.Magnitude[1];
                double thdValue = 100 * Math.Sqrt(rmsHarmSum) / rmsHarm;

                dataArr[i] = new double[] { dataSeries.DataPoints[i].Time.Subtract(m_epoch).TotalMilliseconds, thdValue };
            }

            return dataArr.ToList(); ;
        }


    }

}
