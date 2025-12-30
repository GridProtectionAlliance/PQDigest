//******************************************************************************************************
//  EventController.cs - Gbtc
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
//  12/30/2023 - G. Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using System.Data;
using System.Linq;
using Gemstone.Configuration;
using Gemstone.Data;
using Microsoft.AspNetCore.Mvc;
using PQDigest.Security;
using SystemCenter.Model;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/Event")]
    public class EventMeterController : Controller
    {
        [HttpGet, Route("Previous/One/{eventID:int}")]
        public ActionResult GetPreviousOneMeter(int eventID) =>
            GetOneMeter(eventID, false);

        [HttpGet, Route("Next/One/{eventID:int}")]
        public ActionResult GetNextOneMeters(int eventID) =>
            GetOneMeter(eventID, true);

        private ActionResult GetOneMeter(int eventID, bool isNext)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Settings.Default))
            {
                if (!HttpContext.User.IsCustomerAuthorized(eventID, connection))
                    return Unauthorized();

                DataTable table = connection.RetrieveData($@"
                    SELECT
	                    TOP 1
	                    e2.*,
	                    DATEDIFF(SECOND, e2.StartTime, e1.StartTime) as Difference
                    FROM
	                    Event e1 JOIN
	                    Event e2 ON e1.MeterID = e2.MeterID AND e2.ID != {{0}}
                    WHERE 
	                    e1.ID = {{0}} AND e1.StartTime {(isNext ? "<" : ">=")} e2.StartTime
                    ORDER BY
	                    Difference ASC
                ", eventID);
                return Ok(table);
            }
        }

        [HttpGet, Route("Previous/All/{eventID:int}")]
        public ActionResult GetPreviousAllMeters(int eventID) =>
            GetAllMeters(eventID, false);

        [HttpGet, Route("Next/All/{eventID:int}")]
        public ActionResult GetNextAllMeters(int eventID) =>
            GetAllMeters(eventID, true);

        private ActionResult GetAllMeters(int eventID, bool isNext)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Settings.Default))
            {
                Customer customer = HttpContext.User.GetCustomer(connection);
                if (!customer.IsCustomerAuthorized(eventID, connection))
                    return Unauthorized();

                DataTable meters = connection.RetrieveData(@"SELECT MeterID FROM CustomerMeter WHERE CustomerID = {0}", customer.ID);
                if (meters.Rows.Count == 0) return Ok(new DataTable());

                return Ok(connection.RetrieveData($@"
                    SELECT
	                    TOP 1
	                    e2.*,
	                    DATEDIFF(SECOND, e2.StartTime, e1.StartTime) as Difference
                    FROM
	                    Event e1 JOIN
	                    Event e2 ON e1.MeterID IN ({string.Join(",", meters.Select().Select(row => row["MeterID"]))}) AND e2.ID != {{0}}
                    WHERE 
	                    e1.ID = {{0}} AND e1.StartTime {(isNext ? "<" : ">=")} e2.StartTime
                    ORDER BY
	                    Difference ASC
                    ", eventID));
            }
        }
    }
}