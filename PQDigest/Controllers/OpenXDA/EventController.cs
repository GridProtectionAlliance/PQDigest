//******************************************************************************************************
//  HIDSController.cs - Gbtc
//
//  Copyright © 2023, Grid Protection Alliance.  All Rights Reserved.
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
//  11/24/2023 - G. Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Gemstone.Configuration;
using Gemstone.Data;
using Gemstone.Data.Model;
using Gemstone.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using openXDA.APIAuthentication;
using openXDA.Model;
using PQDigest.Security;
using SystemCenter.Model;

namespace PQDigest.Controllers.OpenXDA
{
    /// <summary>
    /// Controller that handles fetching HIDS trending data from XDA.
    /// </summary>
    [Route("api/PQDigest/Event")]
    public class EventController : Controller
    {

        [HttpGet, Route("PreviousEvent/One/{eventID:int}")]
        public ActionResult GetOneMeter(int eventID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Settings.Default))
            {
                DataTable table = connection.RetrieveData(@"
                    SELECT
	                    TOP 1
	                    e2.*,
	                    DATEDIFF(SECOND, e2.StartTime, e1.StartTime) as Difference
                    FROM
	                    Event e1 JOIN
	                    Event e2 ON e1.MeterID = e2.MeterID AND e2.ID != {0}
                    WHERE 
	                    e1.ID = {0} AND e1.StartTime >= e2.StartTime
                    ORDER BY
	                    Difference ASC
                ", eventID);
                return Ok(table);
            }
        }

        [HttpGet, Route("PreviousEvent/All/{eventID:int}")]
        public ActionResult GetAlLMeters(int eventID)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Settings.Default))
            {
                string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
                DataTable meters = connection.RetrieveData(@"SELECT MeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);
                if (meters.Rows.Count == 0) return Ok(new DataTable());

                return Ok(connection.RetrieveData(@"
                    SELECT
	                    TOP 1
	                    e2.*,
	                    DATEDIFF(SECOND, e2.StartTime, e1.StartTime) as Difference
                    FROM
	                    Event e1 JOIN
	                    Event e2 ON e1.MeterID IN (" + string.Join(",", meters.Select().Select(row => row["MeterID"])) + @") AND e2.ID != {0}
                    WHERE 
	                    e1.ID = {0} AND e1.StartTime >= e2.StartTime
                    ORDER BY
	                    Difference ASC
                    ", eventID));
            }
        }
    }
}