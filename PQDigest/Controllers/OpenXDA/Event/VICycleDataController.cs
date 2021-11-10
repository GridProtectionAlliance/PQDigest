//******************************************************************************************************
//  VICycleDataController.cs - Gbtc
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
//  08/03/2020 - Billy Ernest
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

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/Event/[controller]")]
    [ApiController]
    public class VICycleDataController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private IMemoryCache m_memoryCache;

        public VICycleDataController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
            m_memoryCache = memoryCache;
        }

        [HttpGet, Route("{eventID:int}/{type}/{pixels:int}")]
        public ActionResult Get(int eventID, string type, int pixels)
        {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                DateTime epoch = new DateTime(1970, 1, 1);

                Event evt = new TableOperations<Event>(connection).QueryRecordWhere("ID = {0}", eventID);
                if (evt == null) return BadRequest("Must provide a valid EventID");
                Meter meter = new TableOperations<Meter>(connection).QueryRecordWhere("ID = {0}", evt.MeterID);
                meter.ConnectionFactory = () => new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]);

                Dictionary<string, IEnumerable<double[]>> returnData = new Dictionary<string, IEnumerable<double[]>>();
                DataGroupHelper dataGroupHelper = new DataGroupHelper(m_configuration, m_memoryCache);
                VICycleDataGroup viCycleDataGroup = dataGroupHelper.QueryVICycleDataGroup(eventID, meter); ;

                foreach (CycleDataGroup cdg in viCycleDataGroup.CycleDataGroups.Where(ds => ds.RMS.SeriesInfo.Channel.MeasurementType.Name == type))
                {
                    List<double[]> rmsPoints = cdg.RMS.DataPoints.Select(dp => new double[2] { (dp.Time - epoch).TotalMilliseconds, dp.Value }).ToList();
                    returnData.Add((type == "Voltage" ? "V" : "I") + cdg.RMS.SeriesInfo.Channel.Phase.Name + " RMS", dataGroupHelper.Downsample(rmsPoints, pixels));
                    List<double[]> ampPoints = cdg.Peak.DataPoints.Select(dp => new double[2] { (dp.Time - epoch).TotalMilliseconds, dp.Value }).ToList();
                    returnData.Add((type == "Voltage" ? "V" : "I") + cdg.Peak.SeriesInfo.Channel.Phase.Name + " Amplitude", dataGroupHelper.Downsample(ampPoints, pixels));
                    List<double[]> phPoints = cdg.Phase.DataPoints.Select(dp => new double[2] { (dp.Time - epoch).TotalMilliseconds, dp.Value }).ToList();
                    returnData.Add((type == "Voltage" ? "V" : "I") + cdg.Phase.SeriesInfo.Channel.Phase.Name + " Phase", dataGroupHelper.Downsample(phPoints, pixels));

                }

                return Ok(returnData);
            }

        }
    }
}
