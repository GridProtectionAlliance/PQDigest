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
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Gemstone.Configuration;
using Gemstone.Data;
using Gemstone.Data.Model;
using Gemstone.Web;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using openXDA.APIAuthentication;
using openXDA.Model;
using PQDigest.Security;
using SystemCenter.Model;

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

        public class PostData
        {
            public string StartTime { get; set; }
            public string StopTime { get; set; }
            public List<int> Channels { get; set; }
        }

        [Route("QueryPoints"), HttpPost]
        public async Task ForwardQueryPoints([FromBody] PostData postData, CancellationToken token)
        {
            if (!API.TryRefreshSettings())
                throw new InvalidOperationException("Unable to refresh XDA API helper.");

            RestrictPostData(postData);

            StringContent content = null;
            if (postData is not null)
                content = new StringContent(JObject.FromObject(postData).ToString(), Encoding.UTF8, "application/json");

            HttpResponseMessage response = await API
                .GetResponseTask("api/HIDS/QueryPoints", content)
                .ConfigureAwait(false);

            await Response.SetValues(response, token);
        }

        private void RestrictPostData(PostData postData)
        {
            using (AdoDataConnection connection = new(Settings.Default))
            {
                // Restrict Channels based on channels on either allowed asset or meter
                Customer customer = HttpContext.User.GetCustomer(connection);
                string sql = $@"
                ID IN ({string.Join(",", postData.Channels.Select((_, index) => $"{{{index+ 1}}}"))}) AND
                Trend = 1 AND 
                (
                    MeterID IN (Select MeterID FROM CustomerMeter WHERE CustomerID = {{0}}) OR 
                    AssetID IN (Select AssetID FROM CustomerAsset WHERE CustomerID = {{0}})
                )";
                object[] sqlParams = postData.Channels
                    .Prepend(customer.ID)
                    .Select<int, object>(id => id)
                    .ToArray();
                IEnumerable<Channel> restrictedChannels = new TableOperations<Channel>(connection).QueryRecordsWhere(sql, sqlParams);
                postData.Channels = restrictedChannels.Select(channel => channel.ID).ToList();
            }
        }
    }
}