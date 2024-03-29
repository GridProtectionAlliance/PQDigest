﻿//******************************************************************************************************
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
using Microsoft.Graph;
using Newtonsoft.Json;
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
			public string SortField { get; set; }
			public bool Ascending { get; set; }
			public int Count { get; set; }
			public int[] Meters { get; set; }
			public int[] Types { get; set; }
		}

		private string SQLQuery(int[] types, DataTable meters, bool ascending, string sortField ) => $@"
			DECLARE @StartDate Date = {{0}};
			DECLARE @EndDate Date = {{1}};
			DECLARE @top INT = {{2}};

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
					(CAST(Disturbance.StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(Disturbance.EndTime as Date) BETWEEN @StartDate AND @EndDate) AND
					Event.MeterID IN ({string.Join(",", meters.Select().Select(row => row["MeterID"]))})
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
					PhaseID <> (SELECT ID FROM Phase WHERE Name = 'Worst') AND 
					(CAST(Disturbance.StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(Disturbance.EndTime as Date) BETWEEN @StartDate AND @EndDate) AND
					Event.MeterID IN ({string.Join(",", meters.Select().Select(row => row["MeterID"]))})
			)
			SELECT
				TOP (@top) Event.ID, Event.StartTime,Meter.ID as MeterID, Meter.Name as MeterName, EventType.Name as EventType, WorstSeverityRecord.PerUnitMagnitude, WorstSeverityRecord.DurationSeconds, Phase.Name as Phase
			FROM
				Event INNER HASH JOIN
				Meter ON Meter.ID = Event.MeterID INNER HASH JOIN 
				EventType ON Event.EventTypeID = EventType.ID LEFT HASH JOIN
				WorstSeverityRecord ON Event.ID = WorstSeverityRecord.EventID AND WorstSeverityRecord.Ranking = 1 LEFT HASH JOIN
				Phase ON WorstSeverityRecord.PhaseID = Phase.ID
			WHERE
				(CAST(Event.StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(Event.EndTime as Date) BETWEEN @StartDate AND @EndDate) AND 
				Event.EventTypeID IN ({(types.Length > 0 ? string.Join(",", types) : "0")}) AND
				Event.MeterID IN ({(meters.Rows.Count > 0 ? string.Join(",", meters.Select().Select(row => row["MeterID"])) : "0")})
			ORDER BY
				{sortField} {(ascending ? "ASC" : "DESC")}

		";

		public ActionResult Post([FromBody] EventSearchPostData postData) {
			using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
				string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
				DataTable meters = connection.RetrieveData(@"SELECT MeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);
				if (meters.Rows.Count == 0) return Ok(new DataTable());

				return Ok(connection.RetrieveData(SQLQuery(postData.Types, meters, postData.Ascending, postData.SortField), postData.StartDate, postData.EndDate, postData.Count));
            }
        }

		[HttpPost("count")]
		public ActionResult PostCount([FromBody] EventSearchPostData postData)
		{
			using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
			{
				string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
				DataTable meters = connection.RetrieveData(@"SELECT MeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);
				if (meters.Rows.Count == 0) return Ok(new DataTable());

				DataTable table = connection.RetrieveData(SQLQuery(postData.Types, meters, postData.Ascending, postData.SortField), postData.StartDate, postData.EndDate, 10000000);

				return Ok(table.Rows.Count);
			}
		}

		[HttpPost("csv")]
		public ActionResult PostCSV([FromBody] EventSearchPostData postData)
		{
			using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
			{
				string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
				DataTable meters = connection.RetrieveData(@"SELECT MeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);
				if (meters.Rows.Count == 0) return Ok(new DataTable());

				DataTable table = connection.RetrieveData(SQLQuery(postData.Types, meters, postData.Ascending, postData.SortField), postData.StartDate, postData.EndDate, 10000000);

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
