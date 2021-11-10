//******************************************************************************************************
//  HIDSController.cs - Gbtc
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
using System.Security.Claims;
using System.Data;
using HIDS;

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HIDSController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private IMemoryCache m_memoryCache;

        public HIDSController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
            m_memoryCache = memoryCache;
        }

        public class PostData { 
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public int[] Channels { get; set; }
        }

        [HttpPost("")]
        public ActionResult Post([FromBody] PostData postData)
        {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                DateTime epoch = new DateTime(1970, 1, 1);                
                Dictionary<string, IEnumerable<double[]>> returnData = new Dictionary<string, IEnumerable<double[]>>();

                    
                using (API hids = new API())
                {

                    string host = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.Host'") ?? "http://localhost:8086";
                    string tokenID = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.TokenID'") ?? "";
                    string pointBucket = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.PointBucket'") ?? "point_bucket";
                    string orgID = connection.ExecuteScalar<string>("SELECT Value FROM Setting WHERE Name = 'HIDS.OrganizationID'") ?? "gpa";

                    hids.TokenID = tokenID;
                    hids.PointBucket = pointBucket;
                    hids.OrganizationID = orgID;
                    hids.Connect(host);

                    List<Point> points = hids.ReadPointsAsync((t) =>
                    {
                        t.FilterTags(postData.Channels.Select(c => c.ToString("x8")));
                        t.Range(postData.StartDate,postData.EndDate);
                    }).ToListAsync().Result;

                    foreach (int channelID in postData.Channels) {
                        Channel channel =  new TableOperations<Channel>(connection).QueryRecordWhere("ID = {0}", channelID);
                        channel.ConnectionFactory = () => new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]);
                        returnData.Add($"{channel.Phase.Name}", points.Where(p => p.Tag == channel.ID.ToString("x8")).Select((p,index) => new[] { (p.Timestamp - epoch).TotalMilliseconds, p.Minimum, p.Average, p.Maximum }));
                    }
                }

                return Ok(returnData);
            }

        }

    }
}
