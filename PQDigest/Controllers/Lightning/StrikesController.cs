﻿//******************************************************************************************************
//  StrikesController.cs - Gbtc
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
//  10/28/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.IO;
using System.Net;

namespace PQDigest.Controllers
{
    [Route("api/Lightning/[controller]")]
    [ApiController]
    public class StrikesController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public StrikesController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        public class PostData
        {
            public string DateTime { get; set; }
            public string Units { get; set; }
            public double Tolerance { get; set; }
            public double NELat { get; set; }
            public double NELng { get; set; }
            public double SWLat { get; set; }
            public double SWLng { get; set; }
        }

        [HttpPost("")]
        public ActionResult Post([FromBody] PostData postData) {
            using (AdoDataConnection lightningConnection = new AdoDataConnection(m_configuration["Lightning:ConnectionString"], m_configuration["Lightning:DataProviderString"]))
            {

                DataTable data = lightningConnection.RetrieveData(@"
                    DECLARE @EndOfPeriod DATETIME2 = DATEADD("+ postData.Units + @",{1}, CAST({0} as DATETIME2));
                    DECLARE @BeginningOfPeriod DATETIME2 = DATEADD(" + postData.Units + @",-{1}*2, @EndOfPeriod);

                    SELECT DisplayTime, Amplitude, Latitude, Longitude, 'Weatherbug' as Service
                    FROM TX_Lightning.LIGHTNING_WEATHERBUG
                    WHERE 
	                    eventtime >= @BeginningOfPeriod and eventtime < @EndOfPeriod AND
	                    Latitude BETWEEN {2} and {3} AND 
	                    Longitude BETWEEN {4} AND {5}
                ", postData.DateTime.Replace("T", " "), postData.Tolerance, postData.SWLat, postData.NELat, postData.SWLng, postData.NELng);
                return Ok(data);

            }
        }

    }
}
