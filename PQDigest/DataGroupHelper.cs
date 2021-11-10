//******************************************************************************************************
//  DataGroupHelper.cs - Gbtc
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

using FaultData.DataAnalysis;
using Gemstone.Data;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using OpenXDA.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PQDigest
{
    public class DataGroupHelper
    {
        private readonly IConfiguration m_configuration;
        private IMemoryCache m_memoryCache;

        public DataGroupHelper(IConfiguration configuration, IMemoryCache memoryCache)
        {
            m_configuration = configuration;
            m_memoryCache = memoryCache;
        }

        public DataGroup QueryDataGroup(int eventID, Meter meter)
        {
            string target = $"DataGroup-{eventID}";

            try
            {
                bool isSafe = s_mutex.WaitOne();
                if (isSafe)
                {
                    DataGroup dataGroup = m_memoryCache.GetOrCreate(target, task =>
                    {
                        task.SlidingExpiration = TimeSpan.FromMinutes(10.0D);
                        using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
                        {
                            List<byte[]> data = ChannelData.DataFromEvent(eventID, connection);
                            return ToDataGroup(meter, data);
                        }
                    });
                    return dataGroup;
                }
                else
                    return null;

            }
            finally {
                s_mutex.ReleaseMutex();
            }
        }


        public DataGroup ToDataGroup(Meter meter, List<byte[]> data)
        {
            DataGroup dataGroup = new DataGroup();
            dataGroup.FromData(meter, data);
            VIDataGroup vIDataGroup = new VIDataGroup(dataGroup);
            return vIDataGroup.ToDataGroup();
        }

        public VICycleDataGroup QueryVICycleDataGroup(int eventID, Meter meter)
        {
            string target = $"VICycleDataGroup-{eventID}";

            VICycleDataGroup viCycleDataGroup = m_memoryCache.GetOrCreate(target, task =>
            {
                task.SlidingExpiration = TimeSpan.FromMinutes(10.0D);
                using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
                {
                    DataGroup dataGroup = QueryDataGroup(eventID, meter);
                    double freq = connection.ExecuteScalar<double?>("SELECT Value FROM Setting WHERE Name = 'SystemFrequency'") ?? 60.0D;
                    return Transform.ToVICycleDataGroup(new VIDataGroup(dataGroup), freq);
                }
            });

            return viCycleDataGroup;
        }


        public List<double[]> Downsample(List<double[]> series, int maxSampleCount)
        {
            List<double[]> data = new List<double[]>();
            DateTime epoch = new DateTime(1970, 1, 1);
            double startTime = series.First()[0];
            double endTime = series.Last()[0];
            int step = (int)(endTime * 1000 - startTime * 1000) / maxSampleCount;
            if (step < 1)
                step = 1;

            series = series.Where(x => x[0] >= startTime && x[0] <= endTime).ToList();

            int index = 0;

            for (double n = startTime * 1000; n <= endTime * 1000; n += 2 * step)
            {
                double[] min = null;
                double[] max = null;

                while (index < series.Count() && series[index][0] * 1000 < n + 2 * step)
                {
                    if (min == null || min[1] > series[index][1])
                        min = series[index];

                    if (max == null || max[1] <= series[index][1])
                        max = series[index];

                    ++index;
                }

                if (min != null)
                {
                    if (min[0] < max[0])
                    {
                        data.Add(min);
                        data.Add(max);
                    }
                    else if (min[0] > max[0])
                    {
                        data.Add(max);
                        data.Add(min);
                    }
                    else
                    {
                        data.Add(min);
                    }
                }
            }

            return data;

        }


        #region [ Static ]
        private static Mutex s_mutex;
        static DataGroupHelper()
        {
            s_mutex = new Mutex();
        }

        #endregion
    }
}
