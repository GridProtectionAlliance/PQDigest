//******************************************************************************************************
//  RapidVoltageChangeController.cs - Gbtc
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
//  08/06/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using FaultData.DataAnalysis;
using Gemstone.Data;
using Gemstone.Data.Model;
using MathNet.Numerics.Statistics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using OpenXDA.Model;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/Event/Analytic/[controller]")]
    [ApiController]
    public class RapidVoltageChangeController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
		private IMemoryCache m_memoryCache;
        private DateTime m_epoch = new DateTime(1970, 1, 1);


        public RapidVoltageChangeController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
			m_memoryCache = memoryCache;
		}

		[HttpGet, Route("{eventID:int}/{pixels:int}")]
        public ActionResult Get(int eventID, int pixels) {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {

                Event evt = new TableOperations<Event>(connection).QueryRecordWhere("ID = {0}", eventID);
                if (evt == null) return BadRequest("Must provide a valid EventID");
                Meter meter = new TableOperations<Meter>(connection).QueryRecordWhere("ID = {0}", evt.MeterID);
                meter.ConnectionFactory = () => new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]);

                Dictionary<string, IEnumerable<double[]>> returnData = new Dictionary<string, IEnumerable<double[]>>();
                DataGroupHelper dataGroupHelper = new DataGroupHelper(m_configuration, m_memoryCache);
                VICycleDataGroup vICycleDataGroup = dataGroupHelper.QueryVICycleDataGroup(eventID, meter);


                Dictionary<string, List<double[]>> returnList = new Dictionary<string, List<double[]>>();

                foreach (CycleDataGroup dg in vICycleDataGroup.CycleDataGroups)
                {
                    if (dg.RMS.SeriesInfo.Channel.MeasurementType.Name == "Voltage")
                    {
                        string name = "V" + dg.RMS.SeriesInfo.Channel.Phase.Name;
                        returnList.Add(name, GetRapidVoltageChangeSeries(dg.RMS));
                    }
                }

                return Ok(returnList);
            }

        }

        private List<double[]> GetRapidVoltageChangeSeries(DataSeries dataSeries)
        {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                double nominalVoltage = connection.ExecuteScalar<double?>("SELECT VoltageKV * 1000 FROM Asset WHERE ID = {0}", dataSeries.SeriesInfo.Channel.AssetID) ?? 1;

                double lastY = 0;
                double lastX = 0;

                return dataSeries.DataPoints.Select((point, index) => {
                    double x = point.Time.Subtract(m_epoch).TotalMilliseconds;
                    double y = point.Value;

                    if (index == 0)
                    {
                        lastY = y;
                    }

                    double[] arr = new double[] { x, (y - lastY) * 100 / nominalVoltage };

                    lastY = y;
                    lastX = x;
                    return arr;
                }).ToList();
            }

        }

    }

}
