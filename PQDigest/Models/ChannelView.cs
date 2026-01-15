//******************************************************************************************************
//  ChannelView.cs - Gbtc
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
//  12/23/2025 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Linq;
using Gemstone.Configuration;
using Gemstone.Console;
using Gemstone.Data;
using Gemstone.Data.Model;
using PQDigest.Security;

namespace PQDigest.Models
{
    [TableName("PQDigest.ChannelView"), UseEscapedName]
    [RootQueryRestriction("Trend = {0}", true)]
    public class TrendChannelView : ChannelView 
    {
        [ClaimRestriction(SecurityHelperMethods.ClaimKey)]
        public static RecordRestriction GetCustomerRestriction(params object[] claimValues)
        {
            if ((claimValues?.Length ?? 0) != 1)
                throw new ArgumentException($"{nameof(TrendChannelView)} model accepts one and only one claim value for the {SecurityHelperMethods.ClaimKey} claim.");

            return new RecordRestriction(@"
                MeterID IN (
                    SELECT MeterID FROM CustomerMeter WHERE CustomerID = (
                        SELECT ID FROM Customer WHERE CustomerKey = {0}
                    )
                ) OR 
                AssetID IN (
                    SELECT AssetID FROM CustomerAsset WHERE CustomerID = (
                        SELECT ID FROM Customer WHERE CustomerKey = {0}
                    )
                )", claimValues);
        }
    }

    public class ChannelView
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Trend { get; set; }
        public int AssetID { get; set; }
        public string AssetKey { get; set; }
        public string AssetName { get; set; }
        public int MeterID { get; set; }
        public string MeterKey { get; set; }
        public string MeterName { get; set; }
        public string MeterShortName { get; set; }
        public string Phase { get; set; }
        public string MeasurementType { get; set; }
        public string MeasurementCharacteristic { get; set; }
        public string ChannelGroup { get; set; }
        public string ChannelGroupType { get; set; }
        public string Unit { get; set; }
    }
}
