//******************************************************************************************************
//  MagDurCurvesController - Copy.cs - Gbtc
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
using System.Linq;
using System.Threading.Tasks;
using Gemstone.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MagDurCurvesController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public MagDurCurvesController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        public ActionResult Get() {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["SystemSettings:ConnectionString"], m_configuration["SystemSettings:DataProviderString"]))
            {

                return Ok(connection.RetrieveData(@"
                    SELECT
	                    MagDurCurve.ID,
	                    MagDurCurve.Name,
	                    MagDurCurve.Visible,
	                    MagDurCurve.Color,
	                    MagDurCurvePoint.PerUnitMagnitude,
	                    MagDurCurvePoint.DurationSeconds,
	                    MagDurCurvePoint.LoadOrder
                    FROM
	                    MagDurCurve JOIN
	                    MagDurCurvePoint ON MagDurCurve.ID = MagDurCurvePoint.VoltageCurveID       
                    ORDER BY
	                    MagDurCurve.ID, MagDurCurvePoint.LoadOrder

                "));
            }
        }
    }
}
