//******************************************************************************************************
//  LocationController.cs - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/06/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Claims;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Gemstone.Configuration;
using Gemstone.Data;
using Gemstone.Data.Model;
using Gemstone.Web.APIController;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Newtonsoft.Json;
using openXDA.Model;
using PQDigest.Models;
using PQDigest.Security;
using SystemCenter.Model;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/Location")]
    public class LocationController : ReadOnlyModelController<Location>
    {
        protected override TableOperations<Location> CreateTableOperation(AdoDataConnection connection)
        {
            Customer customer = HttpContext.User.GetCustomer(connection);
            string sql = "ID IN (SELECT LocationID FROM Meter WHERE ID IN (Select MeterID FROM CustomerMeter WHERE CustomerID = {0}))";
            RecordRestriction claimsRestriction = new RecordRestriction(sql, customer.ID);
            TableOperations<Location> operations = new TableOperations<Location>(connection)
            {
                RootQueryRestriction = claimsRestriction
            };
            return operations;
        }
    }
}
