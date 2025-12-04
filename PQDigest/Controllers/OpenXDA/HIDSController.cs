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
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Gemstone.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using openXDA.APIAuthentication;

namespace PQDigest.Controllers.OpenXDA
{
    /// <summary>
    /// Controller that handles fetching HIDS trending data from XDA.
    /// </summary>
    [Route("api/PQDigest/HIDS")]
    public class HIDSController : Controller
    {
        protected XDAAPI API { get; set; }

        public HIDSController(IAPICredentialRetriever retriever)
        {
            API = new XDAAPI(retriever);
        }

        [Route("QueryPoints"), HttpPost]
        public async Task ForwardQueryPoints([FromBody] JObject postData, CancellationToken token)
        {
            if (!API.TryRefreshSettings())
                throw new InvalidOperationException("Unable to refresh XDA API helper.");

            StringContent content = null;
            if (postData is not null)
                content = new StringContent(postData.ToString(), Encoding.UTF8, "application/json");

            HttpResponseMessage response = await API
                .GetResponseTask("api/HIDS/QueryPoints", content)
                .ConfigureAwait(false);

            await Response.SetValues(response, token);
        }
    }
}