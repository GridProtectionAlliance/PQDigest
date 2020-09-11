//******************************************************************************************************
//  EventSearchController.cs - Gbtc
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
using System.Threading.Tasks;
using Gemstone.Data;
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/[controller]")]
    [ApiController]
    public class EventSearchController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public EventSearchController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

		public class EventSearchPostData
        {
			public DateTime StartDate { get; set; }
			public DateTime EndDate { get; set; }
			public int Count { get; set; }
			public int[] Meters { get; set; }
			public int[] Types { get; set; }
		}
		public ActionResult Post([FromBody] EventSearchPostData postData) {
			using (AdoDataConnection sCConnection = new AdoDataConnection(m_configuration["SystemCenter:ConnectionString"], m_configuration["SystemCenter:DataProviderString"]))
			using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
				string username = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "preferred_username")?.Value;
				DataTable meters = sCConnection.RetrieveData(@"SELECT OpenXDAMeterID FROM CustomerAccessPQDigest WHERE CustomerID = (SELECT ID FROM Customer WHERE AccountName = {0})", username.Split('@')[0]);
				if (meters.Rows.Count == 0) return Ok(new DataTable());

				return Ok(connection.RetrieveData(@"
					DECLARE @StartDate Date = {0};
					DECLARE @EndDate Date = {1};
					DECLARE @top INT = {2};

					With WorstSeverityCode as (
					SELECT 
						EventID,
						MAX(DisturbanceSeverity.SeverityCode) as SeverityCode
					FROM 
						Disturbance INNER HASH JOIN
						DisturbanceSeverity ON Disturbance.ID = DisturbanceSeverity.DisturbanceID INNER HASH JOIN
						Event ON Disturbance.EventID = Event.ID 
					WHERE
						PhaseID = (SELECT ID FROM Phase WHERE Name = 'Worst') AND 
						(CAST(StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(EndTime as Date) BETWEEN @StartDate AND @EndDate) AND
                        Event.MeterID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + @")
					GROUP BY
						EventID
					), WorstSeverityRecord as (
					SELECT 
						Disturbance.*, DisturbanceSeverity.SeverityCode, row_number() over (Partition By Disturbance.EventID Order By Disturbance.EventTypeID) as Ranking 
					FROM 
						Disturbance INNER HASH JOIN
						DisturbanceSeverity ON Disturbance.ID = DisturbanceSeverity.DisturbanceID INNER HASH JOIN
						WorstSeverityCode ON Disturbance.EventID = WorstSeverityCode.EventID AND DisturbanceSeverity.SeverityCode = WorstSeverityCode.SeverityCode INNER HASH JOIN
						Event ON Disturbance.EventID = Event.ID 
					WHERE
						PhaseID = (SELECT ID FROM Phase WHERE Name = 'Worst') AND 
						(CAST(StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(EndTime as Date) BETWEEN @StartDate AND @EndDate) AND
                        Event.MeterID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + @")
					)
					SELECT
						TOP (@top) Event.ID, Event.StartTime, Meter.Name as MeterName, EventType.Name as EventType, WorstSeverityRecord.PerUnitMagnitude, WorstSeverityRecord.DurationSeconds
					FROM
						Event INNER HASH JOIN
						Meter ON Meter.ID = Event.MeterID INNER HASH JOIN 
						EventType ON Event.EventTypeID = EventType.ID LEFT HASH JOIN
						WorstSeverityRecord ON Event.ID = WorstSeverityRecord.EventID AND WorstSeverityRecord.Ranking = 1
					WHERE
						(CAST(Event.StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(Event.EndTime as Date) BETWEEN @StartDate AND @EndDate) AND " +
					 $" Event.EventTypeID IN (${(postData.Types.Length > 0 ? string.Join(",", postData.Types): "0")}) AND " +
					 $" Event.MeterID IN (${(postData.Meters.Length > 0 ? string.Join(",", postData.Meters) : "0")}) " 
					   , postData.StartDate, postData.EndDate, postData.Count));
            }
        }

		[HttpPost("csv")]
		public ActionResult PostCSV([FromBody] EventSearchPostData postData)
		{
			using (AdoDataConnection sCConnection = new AdoDataConnection(m_configuration["SystemCenter:ConnectionString"], m_configuration["SystemCenter:DataProviderString"]))
			using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
			{
				string username = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "preferred_username")?.Value;
				DataTable meters = sCConnection.RetrieveData(@"SELECT OpenXDAMeterID FROM CustomerAccessPQDigest WHERE CustomerID = (SELECT ID FROM Customer WHERE AccountName = {0})", username.Split('@')[0]);
				if (meters.Rows.Count == 0) return Ok(new DataTable());

				DataTable table = connection.RetrieveData(@"
					DECLARE @StartDate Date = {0};
					DECLARE @EndDate Date = {1};
					DECLARE @top INT = {2};

					With WorstSeverityCode as (
					SELECT 
						EventID,
						MAX(DisturbanceSeverity.SeverityCode) as SeverityCode
					FROM 
						Disturbance INNER HASH JOIN
						DisturbanceSeverity ON Disturbance.ID = DisturbanceSeverity.DisturbanceID INNER HASH JOIN
						Event ON Disturbance.EventID = Event.ID 
					WHERE
						PhaseID = (SELECT ID FROM Phase WHERE Name = 'Worst') AND 
						(CAST(StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(EndTime as Date) BETWEEN @StartDate AND @EndDate) AND
                        Event.MeterID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + @")
					GROUP BY
						EventID
					), WorstSeverityRecord as (
					SELECT 
						Disturbance.*, DisturbanceSeverity.SeverityCode, row_number() over (Partition By Disturbance.EventID Order By Disturbance.EventTypeID) as Ranking 
					FROM 
						Disturbance INNER HASH JOIN
						DisturbanceSeverity ON Disturbance.ID = DisturbanceSeverity.DisturbanceID INNER HASH JOIN
						WorstSeverityCode ON Disturbance.EventID = WorstSeverityCode.EventID AND DisturbanceSeverity.SeverityCode = WorstSeverityCode.SeverityCode INNER HASH JOIN
						Event ON Disturbance.EventID = Event.ID 
					WHERE
						PhaseID = (SELECT ID FROM Phase WHERE Name = 'Worst') AND 
						(CAST(StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(EndTime as Date) BETWEEN @StartDate AND @EndDate) AND
                        Event.MeterID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + @")
					)
					SELECT
						TOP (@top) Event.ID, Event.StartTime, Meter.Name as MeterName, EventType.Name as EventType, WorstSeverityRecord.PerUnitMagnitude, WorstSeverityRecord.DurationSeconds
					FROM
						Event INNER HASH JOIN
						Meter ON Meter.ID = Event.MeterID INNER HASH JOIN 
						EventType ON Event.EventTypeID = EventType.ID LEFT HASH JOIN
						WorstSeverityRecord ON Event.ID = WorstSeverityRecord.EventID AND WorstSeverityRecord.Ranking = 1
					WHERE
						(CAST(Event.StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(Event.EndTime as Date) BETWEEN @StartDate AND @EndDate) AND " +
					 $" Event.EventTypeID IN (${(postData.Types.Length > 0 ? string.Join(",", postData.Types) : "0")}) AND " +
					 $" Event.MeterID IN (${(postData.Meters.Length > 0 ? string.Join(",", postData.Meters) : "0")}) "
					   , postData.StartDate, postData.EndDate, postData.Count);
				MemoryStream memoryStream = new MemoryStream();
				TextWriter writer = new StreamWriter(memoryStream);

				writer.WriteLine(string.Join(",", table.Columns.Cast<DataColumn>().Select(x => x.ColumnName)));
				foreach (DataRow row in table.Rows)
                {
					writer.WriteLine(string.Join(",", table.Columns.Cast<DataColumn>().Select(x => row[x.ColumnName].ToString())));
				}

				return Ok(new FileStreamResult(memoryStream, "text/csv") { FileDownloadName = "EventSearch.csv"});
			}
		}

	}
}
