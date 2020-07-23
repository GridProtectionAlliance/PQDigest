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
//  07/23/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Net;

namespace PQDigest.Controllers
{
    [Route("api/ESRI/[controller]")]
    [ApiController]
    public class LightningController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public LightningController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        public class PostData
        {
            public string BufferJSON { get; set; }
            public string TimeExtent { get; set; }
        }

        [HttpPost("")]
        public ActionResult Post([FromBody] PostData postData) {
            using (AdoDataConnection xdaConnection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
#if DEBUG
                return Ok("{\"displayFieldName\":\"DATASOURCE\",\"fieldAliases\":{\"AMPLITUDE\":\"AMPLITUDE\",\"LONGITUDE\":\"LONGITUDE\",\"LATITUDE\":\"LATITUDE\",\"DISPLAYTIME\":\"DISPLAYTIME\"},\"geometryType\":\"esriGeometryPoint\",\"spatialReference\":{\"wkid\":102100,\"latestWkid\":3857},\"fields\":[{\"name\":\"AMPLITUDE\",\"type\":\"esriFieldTypeDouble\",\"alias\":\"AMPLITUDE\"},{\"name\":\"LONGITUDE\",\"type\":\"esriFieldTypeDouble\",\"alias\":\"LONGITUDE\"},{\"name\":\"LATITUDE\",\"type\":\"esriFieldTypeDouble\",\"alias\":\"LATITUDE\"},{\"name\":\"DISPLAYTIME\",\"type\":\"esriFieldTypeString\",\"alias\":\"DISPLAYTIME\",\"length\":54}],\"features\":[{\"attributes\":{\"AMPLITUDE\":-10.135999999999999,\"LONGITUDE\":-85.042429999999996,\"LATITUDE\":35.083509999999997,\"DISPLAYTIME\":\"07/19/2020 13:50:21.633\"},\"geometry\":{\"x\":-9466880.0033999998,\"y\":4175235.6185000017}}]}");
#else


                WebRequest webRequest = WebRequest.Create($"{m_configuration["ARCGIS:Proxy"]}?{m_configuration["ARCGIS:Host"]}{m_configuration["ARCGIS:LightningEndpoint"]}");
                webRequest.Method = "POST";
                using (StreamWriter writer = new StreamWriter(webRequest.GetRequestStream())) {
                    string json = 
                        "{" + 
                            "\"inSR\": \"4326\", "+
                            "\"geometryType\":\"esriGeometryPolygon\"," +
                            "\"outFields\":\"AMPLITUDE,LONGITUDE,LATITUDE,DISPLAYTIME\"," +
                            "\"f\":\"json\"," +
                            "\"returnGeometry\":\"true\"," +
                            "\"spacialRel\":\"esriSpatialRelIntersects\"," +
                            "\"geometries\":\""+ postData.BufferJSON + "\"," +
                            "\"time\":\"" + postData.TimeExtent + "\"" +

                        "}";

                    writer.Write(json);
                }

                HttpWebResponse response = (HttpWebResponse)webRequest.GetResponse();
                Stream dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream);
                string responseData = reader.ReadToEnd();

                reader.Close();
                dataStream.Close();
                response.Close();

                return Ok(responseData);


#endif
            }
        }

    }
}
