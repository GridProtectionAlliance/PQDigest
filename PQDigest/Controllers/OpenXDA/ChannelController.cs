//******************************************************************************************************
//  ChannelController.cs - Gbtc
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
using Newtonsoft.Json;
using OpenXDA.Model;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/[controller]")]
    [ApiController]
    public class ChannelController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private readonly ILogger<ChannelController> m_logger;
        public ChannelController(IConfiguration configuration, ILogger<ChannelController> logger)
        {
            m_configuration = configuration;
            m_logger = logger;
        }

        [Route("{id:int}")]
        public IActionResult Get(int id) {
            try
            {
                using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
                {
                    return Ok(connection.RetrieveData(@"
                        SELECT 
                            Channel.ID,
                            Channel.Name,
                            MeasurementType.Name as MeasurementType,
                            MeasurementCharacteristic.Name as MeasurementCharacteristic,
                            Phase.Name as Phase
                        FROM
                            Channel JOIN
                            MeasurementType ON Channel.MeasurementTypeID = MeasurementType.ID JOIN
                            MeasurementCharacteristic ON Channel.MeasurementCharacteristicID = MeasurementCharacteristic.ID JOIN
                            Phase ON Channel.PhaseID = Phase.ID
                        WHERE
                            Channel.MeterID = {0} AND MeasurementCharacteristic.Name != 'Instantaneous'
                        ORDER BY 
                            Channel.Name
                    ", id));
                }

            }
            catch (Exception ex) {
                
                m_logger.LogError(ex.Message);
                return StatusCode(500, ex);
            }
        }

    }
}
