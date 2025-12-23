//******************************************************************************************************
//  ChannelController.cs - Gbtc
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

using Gemstone.Data;
using Gemstone.Data.Model;
using Gemstone.Web.APIController;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using openXDA.Model;
using PQDigest.Models;
using PQDigest.Security;
using SystemCenter.Model;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/TrendChannel")]
    public class TrendChannelController : ReadOnlyModelController<ChannelView>
    {
        protected override TableOperations<ChannelView> CreateTableOperation(AdoDataConnection connection)
        {
            Customer customer = HttpContext.User.GetCustomer(connection);
            string sql = @"
                Trend = 1 AND 
                (
                    MeterID IN (Select MeterID FROM CustomerMeter WHERE CustomerID = {0}) OR 
                    AssetID IN (Select AssetID FROM CustomerAsset WHERE CustomerID = {0})
                )";
            RecordRestriction claimsRestriction = new RecordRestriction(sql, customer.ID);
            TableOperations<ChannelView> operations = new TableOperations<ChannelView>(connection);
            operations.RootQueryRestriction += claimsRestriction;
            return operations;
        }
    }
}
