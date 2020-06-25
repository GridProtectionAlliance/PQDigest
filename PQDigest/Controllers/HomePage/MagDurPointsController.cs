//******************************************************************************************************
//  MagDurPointsController.cs - Gbtc
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
//  06/24/2020 - Billy Ernest
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
using Gemstone.Numeric.Random;
namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MagDurPointsController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public MagDurPointsController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        public ActionResult Get() {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["SystemSettings:ConnectionString"], m_configuration["SystemSettings:DataProviderString"]))
            {

                NormalRandomNumberGenerator magRandomGenerator = new NormalRandomNumberGenerator(142343, 1, 0.25);
                IEnumerable<NormalRandomNumber> magRVs = magRandomGenerator.Next(100);
                NormalRandomNumberGenerator durRandomGenerator = new NormalRandomNumberGenerator(13345132, 1, 5);
                IEnumerable<NormalRandomNumber> durRVs = durRandomGenerator.Next(100);
                return Ok(magRVs.Zip(durRVs).Select(x => new { Magnitude = x.First.Value, Duration = Math.Pow(10, x.Second.Value) }));
            }
        }
    }
}
