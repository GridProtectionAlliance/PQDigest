//******************************************************************************************************
//  Meter.cs - Gbtc
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
//  01/12/2026 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using Gemstone.Data.Model;
using openXDA.Model;
using PQDigest.Security;

namespace PQDigest.Models
{
    [TableName("Meter")]
    public class MeterView : Meter
    {
        [ClaimRestriction(SecurityHelperMethods.ClaimKey)]
        public static RecordRestriction GetCustomerRestriction(params object[] claimValues)
        {
            if ((claimValues?.Length ?? 0) != 1)
                throw new ArgumentException($"{nameof(MeterView)} model accepts one and only one claim value for the {SecurityHelperMethods.ClaimKey} claim.");

            return new RecordRestriction(@"
                ID IN (
                    SELECT MeterID FROM CustomerMeter WHERE CustomerID = (
                        SELECT ID FROM Customer WHERE CustomerKey = {0}
                    )
                )", claimValues);
        }
    }
}
