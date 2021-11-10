//******************************************************************************************************
//  WaveformController.cs - Gbtc
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
//  08/03/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


using System;
using System.Collections.Generic;
using System.Linq;
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
    public class FrequencyController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
		private IMemoryCache m_memoryCache;
        private DateTime m_epoch = new DateTime(1970, 1, 1);


        public FrequencyController(IConfiguration configuration, IMemoryCache memoryCache)
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
                VIDataGroup vIDataGroup = new VIDataGroup(dataGroup) ;
                double systemFrequency = connection.ExecuteScalar<double?>("SELECT Value FROM Setting WHERE Name = 'SystemFrequency'") ?? 60.0;


                Dictionary<string, List<double[]>> returnList = new Dictionary<string, List<double[]>>();

                returnList.Add("VA", GenerateFrequency(systemFrequency, vIDataGroup.VA));
                returnList.Add("VB", GenerateFrequency(systemFrequency, vIDataGroup.VB));
                returnList.Add("VC", GenerateFrequency(systemFrequency, vIDataGroup.VC));
                returnList.Add("Average", GenerateFrequency(systemFrequency, vIDataGroup.VC));

                return Ok(returnList);
            }

        }

        private List<double[]> GenerateFrequency(double systemFrequency, DataSeries dataSeries)
        {
            int samplesPerCycle = Transform.CalculateSamplesPerCycle(dataSeries.SampleRate, systemFrequency);
            DateTime epoch = new DateTime(1970, 1, 1);

            double thresholdValue = 0;

            var crosses = dataSeries.DataPoints.Zip(dataSeries.DataPoints.Skip(1), (Point1, Point2) => new { Point1, Point2 }).Where(obj => obj.Point1.Value * obj.Point2.Value < 0 || obj.Point1.Value == 0).Select(obj => {
                double slope = (obj.Point2.Value - obj.Point1.Value) / (obj.Point2.Time - obj.Point1.Time).Ticks;
                DateTime interpolatedCrossingTime = epoch.AddTicks((long)Math.Round((thresholdValue - obj.Point1.Value) / slope + obj.Point1.Time.Subtract(m_epoch).Ticks));
                return new DataPoint { Time = interpolatedCrossingTime, Value = thresholdValue };

            }).ToList();

            List<double[]> points = crosses.Zip(crosses.Skip(2), (Point1, Point2) => {
                double frequency = 1 / (Point2.Time - Point1.Time).TotalSeconds;
                return new double[] { Point1.Time.Subtract(epoch).TotalMilliseconds, frequency };

            }).ToList();

            return points;
        }

        private List<double[]> AvgFilter(List<double[]> Va, List<double[]> Vb, List<double[]> Vc)
        {
            double n_signals = 1.0D;
            // for now assume Va is not null
            List<double[]> returnDataPoints = Va.Select(point => new double[] { point[0], point[1] }).ToList();

            if (Vb != null)
            {
                returnDataPoints = returnDataPoints.Zip(Vb, (point1, point2) => { return new double[] { point1[0], point1[1] + point2[1] }; }).ToList();
                n_signals = n_signals + 1.0D;
            }
            if (Vc != null)
            {
                returnDataPoints = returnDataPoints.Zip(Vc, (point1, point2) => { return new double[] { point1[0], point1[1] + point2[1] }; }).ToList();
                n_signals = n_signals + 1.0D;
            }

            returnDataPoints = returnDataPoints.Select(point => new double[] { point[0], point[1] / n_signals }).ToList();

            return MedianFilt(returnDataPoints);
        }

        private List<double[]> MedianFilt(List<double[]> input)
        {
            List<double[]> outputDataPoints = new List<double[]>();
            List<double[]> inputData = input.OrderBy(point => point[0]).ToList();

            // Edges stay constant
            outputDataPoints.Add(inputData[0]);

            outputDataPoints.AddRange(inputData.Skip(1).Take(inputData.Count - 2).Select((value, index) =>
                new double[] { value[0],
                    Statistics.Median(new double[] { value[1],inputData[index][1],inputData[index+2][1] })
                }));

            outputDataPoints.Add(inputData.Last());

            return outputDataPoints;
        }



    }

}
