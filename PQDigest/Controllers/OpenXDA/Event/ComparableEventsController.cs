//******************************************************************************************************
//  ComparableEventsController.cs - Gbtc
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
//  08/12/2020 - Billy Ernest
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
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Graph;
using Newtonsoft.Json;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/Event/[controller]")]
    [ApiController]
    public class ComparableEventsController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public ComparableEventsController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        [HttpGet, Route("{eventID:int}")]
        public ActionResult Get(int eventID) {
            using (AdoDataConnection sCConnection = new AdoDataConnection(m_configuration["SystemCenter:ConnectionString"], m_configuration["SystemCenter:DataProviderString"]))
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
                DataTable meters = sCConnection.RetrieveData(@"SELECT OpenXDAMeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);

                return Ok(connection.RetrieveData(@"
                    SELECT
		                Meter.Name as Meter,
		                e2.ID,
	                    DATEDIFF(MILLISECOND, e1.StartTime, e2.StartTime) as Difference
                    FROM
	                    Event e1 JOIN
	                    Event e2 ON e1.MeterID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"]))+ @") AND e2.ID != {0} JOIN
		                Meter ON e2.MeterID = Meter.ID
                    WHERE 
	                    e1.ID = 11 AND (e2.StartTime BETWEEN e1.StartTime AND e1.EndTime OR e2.EndTime BETWEEN e1.StartTime AND e1.EndTime)
                    ORDER BY
	                    Difference ASC
                    ", eventID));
            }
        }
    }
}
