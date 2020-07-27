//******************************************************************************************************
//  EventCountsByMonthController.cs - Gbtc
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
//  06/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
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
    public class EventCountsByMonthController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private IMemoryCache m_memoryCache;

        public class Data
        {
            public string Month { get; set; }
            public int Sag { get; set; }
            public int Swell { get; set; }
            public int Transient { get; set; }
            public int Interruption { get; set; }
            public int Fault { get; set; }
            public int Total { get; set; }

        }

        public EventCountsByMonthController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
            m_memoryCache = memoryCache;
        }
        public ActionResult Get() {
#if DEBUG
            List<Data> returnobj = new List<Data>() {
               new Data(){ Month = "May", Sag = 10, Swell = 2, Transient = 8, Interruption = 1, Fault = 1, Total = 22 },
               new Data(){ Month = "Jun", Sag = 9, Swell = 1, Transient = 8, Interruption = 0, Fault = 2, Total = 20 },
               new Data(){ Month = "Jul", Sag = 8, Swell = 1, Transient = 6, Interruption = 0, Fault = 0, Total = 15 },
               new Data(){ Month = "Aug", Sag = 9, Swell = 1, Transient = 7, Interruption = 0, Fault = 1, Total = 18 },
               new Data(){ Month = "Sep", Sag = 10, Swell = 2, Transient = 6, Interruption = 1, Fault = 0, Total = 19 },
               new Data(){ Month = "Oct", Sag = 11, Swell = 3, Transient = 5, Interruption = 0, Fault = 0, Total = 19 },
               new Data(){ Month = "Nov", Sag = 12, Swell = 1, Transient = 4, Interruption = 0, Fault = 0, Total = 17 },
               new Data(){ Month = "Dec", Sag = 11, Swell = 1, Transient = 5, Interruption = 0, Fault = 2, Total = 19 },
               new Data(){ Month = "Jan", Sag = 10, Swell = 0, Transient = 6, Interruption = 0, Fault = 3, Total = 19 },
               new Data(){ Month = "Feb", Sag = 8, Swell = 0, Transient = 7, Interruption = 0, Fault = 1, Total = 16 },
               new Data(){ Month = "Mar", Sag = 10, Swell = 1, Transient = 7, Interruption = 0, Fault = 1, Total = 19 },
               new Data(){ Month = "Apr", Sag = 9, Swell = 2, Transient = 8, Interruption = 1, Fault = 1, Total = 21 }
            };
            return Ok(returnobj);
#else
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                DateTime end = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddSeconds(-1);
                DateTime start = end.AddMonths(-12).AddSeconds(1);

                DataTable table = connection.RetrieveData(@"
                    DECLARE @startDate Date = {0}
                    DECLARE @endDAte Date = {1}

                    ;WITH EventCTE AS (
	                    SELECT
		                    COUNT(Event.ID) as Count,
		                    EventType.Name as EventType,
		                    CONVERT(varchar(3), DATENAME(month,Cast(Event.StartTime as Date))) as Month,
		                    Month(Event.StartTime) as MonthInt,
		                    Year(Event.StartTime) as Year
	                    FROM
		                    Event JOIN
		                    EventType ON Event.EventTypeID = EventType.ID	
	                    WHERE
		                    EventType.Name IN ('Sag', 'Swell', 'Transient', 'Interruption', 'Fault') AND 
		                    Event.StartTime BETWEEN @startDate AND @endDAte
	                    GROUP BY
		                    CONVERT(varchar(3), DATENAME(month,Cast(Event.StartTime as Date))), EventType.Name, Month(Event.StartTime), Year(Event.StartTime)
                    )
                    SELECT
	                    Month, Sag, Swell, Transient, Interruption, Fault, (Sag + Swell + Transient + Interruption + Fault) as Total
                    FROM
	                    EventCTE
                    PIVOT
                    (
	                    SUM(EventCTE.Count) FOR EventType
	                    IN (Sag, Swell, Transient, Interruption, Fault)
                    ) pvt
                    ORDER BY Year, MonthInt
                ", start, end);

                if (table.Rows.Count == 0)
                {
                    List<Data> returnobj = new List<Data>() {
                       new Data(){ Month = "May", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Jun", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Jul", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Aug", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Sep", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Oct", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Nov", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Dec", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Jan", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Feb", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Mar", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 },
                       new Data(){ Month = "Apr", Sag = 0, Swell = 0, Transient = 0, Interruption = 0, Fault = 0, Total = 0 }
                    };
                    return Ok(returnobj);

                }

                else
                    return Ok(table);
            }

#endif
        }
    }
}
