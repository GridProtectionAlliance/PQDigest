//******************************************************************************************************
//  LightningController.cs - Gbtc
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
//  12/31/2025 - Gabriel Santos
//      Refactored and moved functionality to openXDA.
//
//******************************************************************************************************

using System;
using System.Data;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Gemstone.Data;
using Gemstone.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using openXDA.APIAuthentication;

namespace PQDigest.Controllers
{
    [Route("api/Lightning")]
    [ApiController]
    public class LightningController : ControllerBase
    {
        protected XDAAPI API { get; set; }

        /// <summary>
        /// Dependency injection constructor.
        /// </summary>
        /// <param name="retriever">An <see cref="IAPICredentialRetriever"/> that is responsible for retriving credentials used to make API calls to XDA.</param>
        public LightningController(IAPICredentialRetriever retriever)
        {
            API = new XDAAPI(retriever);
        }

        /// <summary>
        /// Gets strike information for a timespan by redirecting a request to XDA.
        /// </summary>
        /// <param name="postData">Post data of the request.</param>
        /// <param name="cancellationToken">Token to cancel the request.</param>
        [HttpPost, Route("Strikes")]
        public async Task ForwardRequest(JObject postData, CancellationToken cancellationToken)
        {
            if (!API.TryRefreshSettings())
                throw new InvalidOperationException("Unable to refresh XDA API helper.");

            StringContent content = null;
            if (postData is not null)
                content = new StringContent(postData.ToString(), Encoding.UTF8, "application/json");

            HttpResponseMessage response = await API
                .GetResponseTask("api/Lightning/Strikes", content)
                .ConfigureAwait(false);

            await Response.SetValues(response, cancellationToken);
        }
    }
}
