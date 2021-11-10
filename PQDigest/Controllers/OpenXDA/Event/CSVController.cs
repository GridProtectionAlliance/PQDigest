//******************************************************************************************************
//  CSVController.cs - Gbtc
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
//  08/17/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
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
    public class CSVController : ControllerBase
    {
        private readonly IConfiguration m_configuration;
        private IMemoryCache m_memoryCache;

        public CSVController(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
            m_memoryCache = memoryCache;
        }

        [HttpGet, Route("{eventID:int}")]
        public FileStreamResult Get(int eventID) {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
                DateTime epoch = new DateTime(1970, 1, 1);

                Event evt = new TableOperations<Event>(connection).QueryRecordWhere("ID = {0}", eventID);
                string fileName = $"Event_{eventID}.csv";

                if (evt == null) throw new Exception("Needs valid EventID");
                Meter meter = new TableOperations<Meter>(connection).QueryRecordWhere("ID = {0}", evt.MeterID);
                meter.ConnectionFactory = () => new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]);

                Dictionary<string, List<string>> returnData = new Dictionary<string, List<string>>();
                DataGroupHelper dataGroupHelper = new DataGroupHelper(m_configuration, m_memoryCache);
                DataGroup dataGroup = dataGroupHelper.QueryDataGroup(eventID, meter); ;
                foreach (var series in dataGroup.DataSeries)
                {
                    if (!returnData.ContainsKey("Timestamps"))
                        returnData.Add("Timestamps", series.DataPoints.Select(x => x.Time.ToString("MM/dd/yyyyTHH:mm:ss.fffffffK")).ToList());

                    List<string> data = series.DataPoints.Select(dp => dp.Value.ToString() ).ToList();
                    if (series.SeriesInfo.Channel.MeasurementType.Name == "Voltage" && series.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous")
                        returnData.Add("V" + series.SeriesInfo.Channel.Phase.Name, data);
                    else if (series.SeriesInfo.Channel.MeasurementType.Name == "Current" && series.SeriesInfo.Channel.MeasurementCharacteristic.Name == "Instantaneous")
                        returnData.Add( "I" + series.SeriesInfo.Channel.Phase.Name, data);


                }

                VICycleDataGroup viCycleDataGroup = dataGroupHelper.QueryVICycleDataGroup(eventID, meter); ;

                foreach (CycleDataGroup cdg in viCycleDataGroup.CycleDataGroups)
                {
                    List<string> rmsPoints = cdg.RMS.DataPoints.Select(dp => dp.Value.ToString()).ToList();
                    returnData.Add((cdg.RMS.SeriesInfo.Channel.MeasurementType.Name == "Voltage" ? "V" : "I") + cdg.RMS.SeriesInfo.Channel.Phase.Name + " RMS", rmsPoints);
                    List<string> ampPoints = cdg.Peak.DataPoints.Select(dp => dp.Value.ToString()).ToList();
                    returnData.Add((cdg.RMS.SeriesInfo.Channel.MeasurementType.Name == "Voltage" ? "V" : "I") + cdg.Peak.SeriesInfo.Channel.Phase.Name + " Amplitude",ampPoints);
                    List<string> phPoints = cdg.Phase.DataPoints.Select(dp => (dp.Value * 180 / Math.PI).ToString()).ToList();
                    returnData.Add((cdg.RMS.SeriesInfo.Channel.MeasurementType.Name == "Voltage"  ? "V" : "I") + cdg.Phase.SeriesInfo.Channel.Phase.Name + " Phase", phPoints);

                }


                string file = string.Join(",", returnData.Keys) + "\n";

                for (int i = 0; i < returnData.First().Value.Count(); ++i)
                {
                    file += string.Join(",", returnData.Keys.Select(key => {
                        if (i < returnData[key].Count())
                            return returnData[key][i];
                        else return "";
                    })) + '\n';
                }

				byte[] fileBytes = Encoding.ASCII.GetBytes(file);
                Response.Headers.Add("fileName", fileName);
                return new FileStreamResult(new MemoryStream(fileBytes), "text/csv") { 
                    FileDownloadName = fileName,
                };
            }
        }
    }
}
