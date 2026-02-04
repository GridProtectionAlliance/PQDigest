//******************************************************************************************************
//  HelperMethods.tsx - Gbtc
//
//  Copyright © 2025, Grid Protection Alliance.  All Rights Reserved.
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
//  12/26/2020 - Gabriel Santos
//       Generated original version of source code.
//
//******************************************************************************************************

using System.Security.Claims;
using Gemstone.Data;
using Gemstone.Data.Model;
using Microsoft.Extensions.Logging;
using openXDA.Model;
using SystemCenter.Model;

namespace PQDigest.Security
{
    public static class SecurityHelperMethods
    {
        /// <summary>
        /// Claim key which is expecte to store the customer key of the claim principal.
        /// </summary>
        public const string ClaimKey = "Gemstone.Company";

        /// <summary>
        /// Gets the <see cref="Customer"/> key <see langword="string"/> from the <see cref="ClaimsPrincipal"/>.
        /// </summary>
        /// <returns>A <see langword="string"/> key value that represents the customer.</returns>
        public static string GetCustomer(this ClaimsPrincipal principal)
        {
            Claim customerKey = principal.FindFirst(ClaimKey);
            return customerKey.Value;
        }
        /// <summary>
        /// Gets the <see cref="Customer"/> from the <see cref="ClaimsPrincipal"/>.
        /// </summary>
        /// <param name="connection">AdoDataConnection to look in.</param>
        /// <returns>A <see cref="Customer"/> object.</returns>
        public static Customer GetCustomer(this ClaimsPrincipal principal, AdoDataConnection connection)
        {
            string key = principal.GetCustomer();
            return new TableOperations<Customer>(connection).QueryRecordWhere("CustomerKey = {0}", key);
        }

        /// <summary>
        /// Tells if the <see cref="Customer"/> is auhorized to view the <see cref="Event"/>.
        /// </summary>
        /// <param name="eventID">A <see langword="int"/> that represents the event being authorized for.</param>
        /// <param name="connection">The <see cref="AdoDataConnection"/> that performs lookups.</param>
        /// <returns>A <see langword="bool"/> that represents authorization success.</returns>
        public static bool IsCustomerAuthorized(this Customer customer, int eventID, AdoDataConnection connection)
        {
            Event evt = new TableOperations<Event>(connection).QueryRecordWhere(@"
                (
                    MeterID in (
                        SELECT MeterID
                        FROM CustomerMeter
                        WHERE CustomerID = {0}
                    ) OR
                    AssetID in (
                        SELECT AssetID
                        FROM CustomerAsset
                        WHERE CustomerID = {0}
                    )
                )
                AND
                ID = {1}
            ", customer.ID, eventID);
            return !(evt is null);
        }

        /// <summary>
        /// Tells if a <see cref="Customer"/> defined in the <see cref="ClaimsPrincipal"/> provided is auhorized to view the <see cref="Event"/>.
        /// </summary>
        /// <param name="eventID">A <see langword="int"/> that represents the event being authorized for.</param>
        /// <param name="connection">The <see cref="AdoDataConnection"/> that performs lookups.</param>
        /// <returns>A <see langword="bool"/> that represents authorization success.</returns>
        public static bool IsCustomerAuthorized(this ClaimsPrincipal principal, int eventID, AdoDataConnection connection)
        {
            Customer customer = principal.GetCustomer(connection);
            return customer.IsCustomerAuthorized(eventID, connection);
        }
    }
}
