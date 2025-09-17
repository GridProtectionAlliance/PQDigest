//******************************************************************************************************
//  Startup.cs - Gbtc
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
//  06/09/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text.RegularExpressions;
using Gemstone.Data;
using Gemstone.Web;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Identity.Web;
using Microsoft.Identity.Web.UI;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;
using PQDigest.Models;

namespace PQDigest
{
    public static class DatabaseConnectionFactory
    {
        private static IConfiguration m_configuration { get; set; }
        private static ConcurrentDictionary<string, ConnectionFactory> m_connectionFactories = new ConcurrentDictionary<string, ConnectionFactory>();
        public const string DefaultCategory = "OpenXDA";

        private class ConnectionFactory
        {
            #region [ Members ]

            // Constants
            private const string DefaultConnectionStringSettingName = "ConnectionString";
            private const string DefaultDataProviderStringSettingName = "DataProviderString";

            #endregion

            #region [ Constructors ]

            public ConnectionFactory(string settingsCategory)
                : this(settingsCategory, DefaultConnectionStringSettingName, DefaultDataProviderStringSettingName) { }

            public ConnectionFactory(string settingsCategory, string connStringSetting, string dataStringSetting)
            {
                SettingsCategory = settingsCategory;
                ConnStringSettingName = connStringSetting;
                DataStringSettingName = dataStringSetting;
                LoadSettings();
            }

            #endregion

            #region [ Properties ]

            private string SettingsCategory { get; }
            private string ConnStringSettingName { get; }
            private string DataStringSettingName { get; }
            public string ConnectionString { get; set; } = null;
            public string DataProviderString { get; set; } = null;

            #endregion

            #region [ Methods ]

            public AdoDataConnection CreateDbConnection() =>
                new AdoDataConnection(ConnectionString, DataProviderString);

            public void LoadSettings()
            {
                ConnectionString = m_configuration[ConnStringSettingName];
                if (ConnectionString is null)
                    throw new ArgumentNullException($"Could not retrieve setting {ConnStringSettingName} of category {SettingsCategory} for db connection...");

                DataProviderString = m_configuration[DataStringSettingName];
                if (DataProviderString is null)
                    throw new ArgumentNullException($"Could not retrieve setting {DataStringSettingName} of category {SettingsCategory} for db connection...");
            }

            #endregion
        }

        /// <summary>
        /// Reloads system configuration from configuration sources.
        /// </summary>
        public static void ReloadConfiguration(IConfiguration configuration = null)
        {
            if (configuration is not null)
                m_configuration = configuration;

            foreach (var factory in m_connectionFactories)
                factory.Value.LoadSettings();
        }

        /// <summary>
        /// Creates a db connection to the database, using timeout settings.
        /// </summary>
        public static AdoDataConnection CreateDbConnection(string? settingsCategory = null)
        {
            string category = settingsCategory ?? DefaultCategory;

            ConnectionFactory factory = m_connectionFactories
                .GetOrAdd(category, (category) => new ConnectionFactory(category));

            AdoDataConnection connection = factory.CreateDbConnection();

            return connection;
        }
    }
}
