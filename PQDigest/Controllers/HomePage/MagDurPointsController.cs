//******************************************************************************************************
//  MagDurPointsController.cs - Gbtc
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
//  06/24/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gemstone.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PQDigest.Models;
using Gemstone.Numeric.Random;
using System.Data;
using System.Security.Claims;
using Microsoft.Graph;
using Newtonsoft.Json;

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MagDurPointsController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public MagDurPointsController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        public ActionResult Get() {
            using (AdoDataConnection sCConnection = new AdoDataConnection(m_configuration["SystemCenter:ConnectionString"], m_configuration["SystemCenter:DataProviderString"]))
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
//#if DEBUG 
//                NormalRandomNumberGenerator magRandomGenerator = new NormalRandomNumberGenerator(142343, 1, 0.25);
//                IEnumerable<NormalRandomNumber> magRVs = magRandomGenerator.Next(100);
//                NormalRandomNumberGenerator durRandomGenerator = new NormalRandomNumberGenerator(13345132, 1, 5);
//                IEnumerable<NormalRandomNumber> durRVs = durRandomGenerator.Next(100);
//                return Ok(magRVs.Zip(durRVs).Select(x => new { PerUnitMagnitude = x.First.Value, DurationSeconds = Math.Pow(10, x.Second.Value) }));
//#else
                DateTime end = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day).AddDays(1).AddSeconds(-1);
                DateTime start = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day).AddDays(-30);
                string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
                DataTable meters = sCConnection.RetrieveData(@"SELECT OpenXDAMeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);

                if (meters.Rows.Count == 0) return Ok(new DataTable());

                DataTable table = connection.RetrieveData(@"
                    DECLARE @startDate Date = {0}
                    DECLARE @endDAte Date = {1}

                    ;With WorstSeverityCode as (
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
	                    (CAST(Disturbance.StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(Disturbance.EndTime as Date) BETWEEN @StartDate AND @EndDate) AND
                        Event.MeterID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + @")
                    )
                    SELECT
                       Event.ID, Event.StartTime, Meter.Name as MeterName, EventType.Name as EventType, WorstSeverityRecord.PerUnitMagnitude, WorstSeverityRecord.DurationSeconds
                    FROM
	                    Event INNER HASH JOIN
	                    Meter ON Meter.ID = Event.MeterID INNER HASH JOIN 
	                    WorstSeverityRecord ON Event.ID = WorstSeverityRecord.EventID AND WorstSeverityRecord.Ranking = 1 INNER HASH JOIN 
	                    EventType ON WorstSeverityRecord.EventTypeID = EventType.ID 
                    WHERE
	                    (CAST(Event.StartTime as date) BETWEEN @StartDate AND @EndDate OR CAST(Event.EndTime as Date) BETWEEN @StartDate AND @EndDate)
                ", start, end);

                return Ok(table);
//#endif
            }
        }
    }
}
