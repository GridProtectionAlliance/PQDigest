//******************************************************************************************************
//  EventCountsTableController.cs - Gbtc
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
//  06/23/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Gemstone.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventCountsTableController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private IMemoryCache m_memoryCache;

        public class TableData
        {
            public int ID { get; set; }
            public string Name { get; set; }
            public int Sag { get; set; }
            public int Swell { get; set; }
            public int Transient { get; set; }
            public int Interruption { get; set; }
            public int Fault { get; set; }
            public int Total { get; set; }

        }

        public EventCountsTableController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
            m_memoryCache = memoryCache;
        }

        public ActionResult Get() {

#if DEBUG
            List<TableData> returnobj = new List<TableData>() {
               new TableData(){ ID=37, Name = "Meter 1", Sag = 10, Swell = 2, Transient = 8, Interruption = 1, Fault = 1, Total = 22 },
               new TableData(){ ID=38, Name = "Meter 2", Sag = 9, Swell = 1, Transient = 8, Interruption = 0, Fault = 2, Total = 20 },
               new TableData(){ ID=39, Name = "Meter 3", Sag = 8, Swell = 1, Transient = 6, Interruption = 0, Fault = 0, Total = 15 },
               new TableData(){ ID=47, Name = "Meter 4", Sag = 9, Swell = 1, Transient = 7, Interruption = 0, Fault = 1, Total = 18 },
               new TableData(){ ID=49, Name = "Meter 5", Sag = 10, Swell = 2, Transient = 6, Interruption = 1, Fault = 0, Total = 19 },
               new TableData(){ ID=50, Name = "Meter 6", Sag = 11, Swell = 3, Transient = 5, Interruption = 0, Fault = 0, Total = 19 },
               new TableData(){ ID=52, Name = "Meter 7", Sag = 12, Swell = 1, Transient = 4, Interruption = 0, Fault = 0, Total = 17 },
               new TableData(){ ID=53, Name = "Meter 8", Sag = 11, Swell = 1, Transient = 5, Interruption = 0, Fault = 2, Total = 19 },
               new TableData(){ ID=56, Name = "Meter 9", Sag = 10, Swell = 0, Transient = 6, Interruption = 0, Fault = 3, Total = 19 },
            };


            return Ok(returnobj);

#else
            using (AdoDataConnection sCConnection = new AdoDataConnection(m_configuration["SystemCenter:ConnectionString"], m_configuration["SystemCenter:DataProviderString"]))
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                DateTime end = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day).AddDays(1).AddSeconds(-1);
                DateTime start = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day).AddDays(-30);
                string username = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "preferred_username")?.Value;
                DataTable meters = sCConnection.RetrieveData(@"SELECT OpenXDAMeterID FROM CustomerAccessPQDigest WHERE CustomerID = (SELECT ID FROM Customer WHERE AccountName = {0})", username.Split('@')[0]);

                DataTable table = connection.RetrieveData(@"
                    DECLARE @startDate Date = {0}
                    DECLARE @endDAte Date = {1}

                    ;WITH EventCTE AS (
	                    SELECT
		                    COUNT(Event.ID) as Count,
		                    EventType.Name as EventType,
                            Meter.ID as ID,
		                    Meter.Name as Meter
	                    FROM
		                    Meter CROSS JOIN
		                    EventType LEFT JOIN
		                    Event ON Event.MeterID =  Meter.ID AND  Event.EventTypeID = EventType.ID AND Event.StartTime BETWEEN @startDate AND @endDAte
	                    WHERE
		                    EventType.Name IN ('Sag', 'Swell', 'Transient', 'Interruption', 'Fault') AND
                            Meter.ID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + @")
	                    GROUP BY
		                    Meter.Name, EventType.Name, Meter.ID
                    )
                    SELECT
                        ID,
	                    Meter as Name, 
	                    COALESCE(Sag, 0) as Sag, 
	                    COALESCE(Swell, 0) as Swell, 
	                    COALESCE(Transient, 0) as Transient, 
	                    COALESCE(Interruption, 0) as Interruption, 
	                    COALESCE(Fault, 0) as Fault, 
	                    (COALESCE(Sag, 0) + COALESCE(Swell, 0) + COALESCE(Transient, 0) + COALESCE(Interruption, 0) + COALESCE(Fault, 0)) as Total
                    FROM
	                    EventCTE
                    PIVOT
                    (
	                    SUM(EventCTE.Count) FOR EventType
	                    IN (Sag, Swell, Transient, Interruption, Fault)
                    ) pvt
                    ORDER BY Meter
                ", start, end);

                return Ok(table);
            }

#endif

        }
    }
}
