//******************************************************************************************************
//  LocationController.cs - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/06/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Claims;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Gemstone.Data;
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Newtonsoft.Json;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private readonly ILogger<LocationController> m_logger;
        public LocationController(IConfiguration configuration, ILogger<LocationController> logger)
        {
            m_configuration = configuration;
            m_logger = logger;
        }

        public IActionResult Get() {
            try
            {
                using (AdoDataConnection sCConnection = new AdoDataConnection(m_configuration["SystemCenter:ConnectionString"], m_configuration["SystemCenter:DataProviderString"]))
                using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
                {
                    string orgId = (User.Identity as ClaimsIdentity).Claims.FirstOrDefault(c => c.Type == "org_id")?.Value;
                    DataTable meters = sCConnection.RetrieveData(@"SELECT OpenXDAMeterID FROM CompanyMeter WHERE CompanyID = (SELECT ID FROM Company WHERE CompanyID = {0})", orgId);
                    if (meters.Rows.Count == 0) return Ok(new DataTable());

                    return Ok(connection.RetrieveData(@"
                        SELECT 
                            * 
                        FROM 
                            Location 
                        WHERE 
                            ID IN  (SELECT LocationID FROM Meter WHERE ID IN (" + string.Join(",", meters.Select().Select(row => row["OpenXDAMeterID"])) + "))").Select().OrderBy(x=> x["Name"]).CopyToDataTable());
                }

            }
            catch (Exception ex) {
                
                m_logger.LogError(ex.Message);
                return StatusCode(500, ex);
            }
        }
    }
}
