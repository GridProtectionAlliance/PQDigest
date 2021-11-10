//******************************************************************************************************
//  HomeController.cs - Gbtc
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
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Gemstone.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.Identity.Web;
using Newtonsoft.Json;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            using (AdoDataConnection connection = new AdoDataConnection(_configuration["OpenXDA:ConnectionString"], _configuration["OpenXDA:DataProviderString"]))
            {
                ViewData["org"] = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.OrganizationID'");
                ViewData["host"] = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.Host'");
                ViewData["token"] = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.TokenID'");
                ViewData["bucket"] = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.PointBucket'");
            }

            return View();
        }

        public IActionResult WaveformViewer()
        {
            return WaveformViewer();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}
