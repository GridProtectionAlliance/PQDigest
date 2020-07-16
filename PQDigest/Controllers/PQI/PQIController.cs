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
using System.Linq;
using System.Threading.Tasks;
using FaultData.DataAnalysis;
using Gemstone.Data;
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using OpenXDA.Model;
using PQDigest.Models;
using System.Net.Http;
using Gemstone.Numeric.Random;
using System.Data;

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PQIController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public PQIController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        [HttpGet("Components/{eventID:int}")]
        public ActionResult GetComponents(int eventID) {
            using (AdoDataConnection pqiConnection = new AdoDataConnection(m_configuration["IndustrialPQ:ConnectionString"], m_configuration["IndustrialPQ:DataProviderString"]))
            using (AdoDataConnection upqiConnection = new AdoDataConnection(m_configuration["UserIndustrialPQ:ConnectionString"], m_configuration["UserIndustrialPQ:DataProviderString"]))
            using (AdoDataConnection xdaConnection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                int facilityID = xdaConnection.ExecuteScalar<int>("SELECT FacilityID FROM MeterFacility WHERE MeterID = (SELECT MeterID FROM Event WHERE ID = {0})", eventID);
                DataTable pqiTable = pqiConnection.RetrieveData(@"
                    select 
	                    asec.Title,
	                    tc.TestCurveID,
                        ac.CurveDB
                    From 
	                    UserIndustrialPQ.dbo.FacilityAudit fa JOIN
	                    UserIndustrialPQ.dbo.AuditSection asec on asec.FacilityAuditID = fa.FacilityAuditID JOIN
	                    UserIndustrialPQ.dbo.AuditCurve ac on ac.AuditSectionID = asec.AuditSectionID JOIN
	                    IndustrialPQ.dbo.TestCurve tc on ac.CurveID = tc.TestCurveID JOIN
	                    IndustrialPQ.dbo.Component com on tc.ComponentID = com.ComponentID
                    WHERE
	                    fa.FacilityID = {0} AND ac.CurveDB = 'EPRI'
                ", facilityID);
                DataTable upqiTable = upqiConnection.RetrieveData(@"
                    select 
	                    asec.Title,
	                    tc.TestCurveID,
                        ac.CurveDB
                    From 
	                    UserIndustrialPQ.dbo.FacilityAudit fa JOIN
	                    UserIndustrialPQ.dbo.AuditSection asec on asec.FacilityAuditID = fa.FacilityAuditID JOIN
	                    UserIndustrialPQ.dbo.AuditCurve ac on ac.AuditSectionID = asec.AuditSectionID JOIN
	                    UserIndustrialPQ.dbo.TestCurve tc on ac.CurveID = tc.TestCurveID JOIN
	                    UserIndustrialPQ.dbo.Component com on tc.ComponentID = com.ComponentID
                    WHERE
	                    fa.FacilityID = {0} AND ac.CurveDB = 'USER'
                ", facilityID);

                pqiTable.Merge(upqiTable);

                return Ok(pqiTable);
            }
        }

        [HttpGet("Component/Curve/{curveDB}/{curveID:int}")]
        public ActionResult GetComponentCurve(string curveDB, int curveID)
        {
            string database = curveDB == "EPRI" ? "IndustrialPQ" : "UserIndustrialPQ";
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration[database + ":ConnectionString"], m_configuration[database + ":DataProviderString"]))
            {
                DataTable table = connection.RetrieveData(@"
	                select X as Duration,Y/100 as Magnitude from UserIndustrialPQ.dbo.TestCurvePoint WHERE TestCurveID = {0} ORDER BY X ASC
                ", curveID);
                return Ok(table);
            }
        }


        [HttpGet("Distrubances/{eventID:int}")]
        public ActionResult GetDistrubances(int eventID)
        {
            using (AdoDataConnection xdaConnection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                DataTable distrubances = xdaConnection.RetrieveData(@"
                    select * from Disturbance where eventid = {0} AND PhaseID = (SELECT ID FROM Phase WHERE Name = 'Worst')
                ", eventID);

                return Ok(distrubances);
            }
        }

    }
}
