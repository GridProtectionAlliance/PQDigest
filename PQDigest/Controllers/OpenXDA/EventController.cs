//******************************************************************************************************
//  MeterController.cs - Gbtc
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
//  06/30/2020 - Billy Ernest
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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using OpenXDA.Model;
using PQDigest.Models;
using System.Net.Http;
using Gemstone.Numeric.Random;
using System.Security.Claims;
using System.Data;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private IMemoryCache m_memoryCache;

        public EventController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
            m_memoryCache = memoryCache;
        }

        [HttpGet("Count")]
        public ActionResult GetCount()
        {
            using (AdoDataConnection sCConnection = new AdoDataConnection(m_configuration["SystemCenter:ConnectionString"], m_configuration["SystemCenter:DataProviderString"]))
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
                DataTable meters = sCConnection.RetrieveData(@"SELECT OpenXDAMeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);
                if (meters.Rows.Count == 0) return Ok(new DataTable());

                return Ok(connection.ExecuteScalar<int>(@"
                SELECT
	                COUNT(*)
                FROM
	                Event
                WHERE
	                StartTime BETWEEN DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0) AND GETDATE() AND 
	                MeterID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + @")
                      "));
            }
        }


        [HttpGet("Data")]
        public ActionResult GetData(int eventId, string type, string dataType, int pixels, string startDate, string endDate)
        {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                DateTime epoch = new DateTime(1970, 1, 1);

                Event evt = new TableOperations<Event>(connection).QueryRecordWhere("ID = {0}", eventId);
                if (evt == null) return BadRequest("Must provide a valid EventID");
                Meter meter = new TableOperations<Meter>(connection).QueryRecordWhere("ID = {0}", evt.MeterID);
                meter.ConnectionFactory = () => new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]);

                int calcCycle = connection.ExecuteScalar<int?>("SELECT CalculationCycle FROM FaultSummary WHERE EventID = {0} AND IsSelectedAlgorithm = 1", evt.ID) ?? -1;
                double systemFrequency = connection.ExecuteScalar<double?>("SELECT Value FROM Setting WHERE Name = 'SystemFrequency'") ?? 60.0;
                
                Dictionary<string, IEnumerable<double[]>> returnData = new Dictionary<string, IEnumerable<double[]>>();
                DataGroupHelper dataGroupHelper = new DataGroupHelper(m_configuration, m_memoryCache);
                if (dataType == "Time")
                {
                    DataGroup dataGroup = dataGroupHelper.QueryDataGroup(eventId, meter); ;
                    bool hasVoltLN = dataGroup.DataSeries.Select(x => x.SeriesInfo.Channel.Phase.Name).Where(x => x.Contains("N")).Any();
                    foreach (var series in dataGroup.DataSeries)
                    {
                        List<double[]> data = series.DataPoints.Select(dp => new double[2] { (dp.Time - epoch).TotalMilliseconds, dp.Value }).ToList();
                        if (type == "Voltage")
                        {
                            if (series.SeriesInfo.Channel.MeasurementType.Name == "Voltage" && series.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && series.SeriesInfo.Channel.Phase.Name.Contains("N"))
                            {
                                returnData.Add("V" + series.SeriesInfo.Channel.Phase.Name, data);
                            }
                            else if (series.SeriesInfo.Channel.MeasurementType.Name == "Voltage" && series.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous" && !hasVoltLN)
                            {
                                returnData.Add("V" + series.SeriesInfo.Channel.Phase.Name, data);
                            }

                        }
                        else
                        {
                            if (series.SeriesInfo.Channel.MeasurementType.Name == "Current" && series.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous")
                            {
                                returnData.Add("I" + series.SeriesInfo.Channel.Phase.Name, data);
                            }
                        }

                    }

                }
                else if(dataType == "Trending")
                {
                    MovingAverageRandomNumberGenerator generator = new MovingAverageRandomNumberGenerator((type=="Voltage" ? 1234 : 4321), 1, new[] { 0.2}, 50, 2);
                    DateTime start = new DateTime(evt.StartTime.Year, evt.StartTime.Month, evt.StartTime.Day, evt.StartTime.Hour,0,0).AddHours(-3);
                    returnData.Add($"{(type == "Voltage" ? "V" : "I")}AN", generator.Next(36).Select((rv, index) => new[] { (start - epoch).TotalMilliseconds + index * 600000, rv.Value }));
                    returnData.Add($"{(type == "Voltage" ? "V" : "I")}BN", generator.Next(36).Select((rv, index) => new[] { (start - epoch).TotalMilliseconds + index * 600000, rv.Value }));
                    returnData.Add($"{(type == "Voltage" ? "V" : "I")}CN", generator.Next(36).Select((rv, index) => new[] { (start - epoch).TotalMilliseconds + index * 600000, rv.Value }));

                }

                return Ok(returnData);
            }

        }
    }
}
