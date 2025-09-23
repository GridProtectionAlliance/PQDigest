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
using System.Data;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using FaultData.DataAnalysis;
using Gemstone.Data;
using Gemstone.Data.Model;
using HIDS;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using openXDA.Model;

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
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
                DataTable meters = connection.RetrieveData(@"SELECT MeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);
                if (meters.Rows.Count == 0) return Ok(new DataTable());

                return Ok(connection.ExecuteScalar<int>(@"
                SELECT
	                COUNT(*)
                FROM
	                Event
                WHERE
	                StartTime BETWEEN DATEADD(month, DATEDIFF(month, 0, GETDATE()), 0) AND GETDATE() AND 
	                MeterID IN (" + string.Join(",", meters.Select().Select(row => row["MeterID"])) + @")
                      "));
            }
        }


        [HttpGet("Data")]
        public ActionResult GetData(int eventId, string type, string dataType)
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
                else throw new NotImplementedException("Endpoint moved to QueryHids/ByEvent");

                return Ok(returnData);
            }
        }
        
        [HttpPost("QueryHids/ByEvent")]
        public IActionResult QueryPoints([FromBody] JObject data, CancellationToken token)
        {
            DateTime evtStart;
            DateTime evtEnd;
            IEnumerable<Channel> channels;
            int eventID = data["EventID"].ToObject<int>();
            string type = data["MeasurementType"].ToObject<string>();


            using (AdoDataConnection connection = DatabaseConnectionFactory.CreateDbConnection("OpenXDA"))
            {
                Event evt = new TableOperations<Event>(connection).QueryRecordWhere("ID = {0}", eventID);
                evtStart = new DateTime(evt.StartTime.Year, evt.StartTime.Month, evt.StartTime.Day, evt.StartTime.Hour, 0, 0).AddHours(-3);
                evtEnd = evtStart.AddHours(6);
                channels = new TableOperations<Channel>(connection).QueryRecordsWhere(
                    @"MeterID = {0}  
                    AND MeasurementTypeID = (SELECT ID FROM MeasurementType Where Name = {1})
                    AND MeasurementCharacteristicID = (SELECT ID FROM MeasurementCharacteristic Where Name = 'RMS')
                    AND PhaseID IN (SELECT ID FROM Phase Where Name IN ('AN', 'BN', 'CN'))", evt.MeterID, type);
                if (!channels.Any()) return Ok("");
            }

            void BuildQuery(IQueryBuilder builder)
            {
                if (channels.Any())
                {
                    IEnumerable<string> tags = channels
                        .Select(channel => ToTag(channel.ID));

                    builder.FilterTags(tags);
                }
                builder.Range(API.FormatTimestamp(evtStart), API.FormatTimestamp(evtEnd));
            }
            Stream pointStream = PointStream.QueryPoints(CreateHIDSConnectionAsync, BuildQuery);


            return new FileStreamResult(pointStream, "text/plain");
        }

        // These functions also exist in XDA, would it be worth migrating them to net standard 2.1 such that they may be resued instead of rewritten?
        private async Task<API> CreateHIDSConnectionAsync()
        {
            string host;
            string tokenID;
            string pointBucket;
            string orgID;
            using (AdoDataConnection connection = DatabaseConnectionFactory.CreateDbConnection("OpenXDA"))
            {
                host = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.Host'");
                tokenID = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.TokenID'");
                pointBucket = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.PointBucket'");
                orgID = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.OrganizationID'");
            }

            API hids = new API();
            if (string.IsNullOrEmpty(host))
                throw new ArgumentException("Unable to configure connection to HIDS: Host not specified.");

            if (!string.IsNullOrEmpty(tokenID))
                hids.TokenID = tokenID;

            if (!string.IsNullOrEmpty(pointBucket))
                hids.PointBucket = pointBucket;

            if (!string.IsNullOrEmpty(orgID))
                hids.OrganizationID = orgID;

            await hids.ConnectAsync(host);
            return hids;
        }

        public static string ToTag(int channelID) =>
            channelID.ToString("x8");

        public static int ToChannelID(string tag) =>
            Convert.ToInt32(tag, 16);
    }
}
