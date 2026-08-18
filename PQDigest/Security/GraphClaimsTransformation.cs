//******************************************************************************************************
//  GraphClaimsTransformation.cs - Gbtc
//
//  Copyright � 2026, Grid Protection Alliance.  All Rights Reserved.
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
//  08/18/2026 - Copilot
//       Generated original version of source code.
//
//******************************************************************************************************

using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.Graph.Models;

namespace PQDigest.Security
{
    /// <summary>
    /// Populates the <see cref="SecurityHelperMethods.ClaimKey"/> claim from a custom Azure AD / Entra ID
    /// user attribute (directory extension) looked up via Microsoft Graph for the signed-in user.
    /// </summary>
    public class GraphClaimsTransformation : IClaimsTransformation
    {
        private readonly GraphServiceClient m_graphClient;
        private readonly ILogger<GraphClaimsTransformation> m_logger;
        private readonly string m_companyAttribute;

        public GraphClaimsTransformation(GraphServiceClient graphClient, IConfiguration configuration, ILogger<GraphClaimsTransformation> logger)
        {
            m_graphClient = graphClient;
            m_logger = logger;
            m_companyAttribute = configuration["GraphApi:CompanyAttribute"] ?? "extension_CompanyKey";
        }

        public async Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal)
        {
            ClaimsIdentity? identity = principal.Identity as ClaimsIdentity;

            // Already mapped (transformation can run more than once per request) or no authenticated identity to enrich
            if (identity is null || !identity.IsAuthenticated || principal.HasClaim(claim => claim.Type == SecurityHelperMethods.ClaimKey))
                return principal;

            try
            {
                User? user = await m_graphClient.Me.GetAsync(request =>
                {
                    request.QueryParameters.Select = new[] { "id", m_companyAttribute };
                });

                if (user?.AdditionalData != null && user.AdditionalData.TryGetValue(m_companyAttribute, out object? value) && value is not null)
                    identity.AddClaim(new Claim(SecurityHelperMethods.ClaimKey, value.ToString()!));
                else
                    m_logger.LogWarning("Graph user attribute '{Attribute}' was not found for the signed-in user; '{ClaimKey}' claim was not set.", m_companyAttribute, SecurityHelperMethods.ClaimKey);
            }
            catch (System.Exception ex)
            {
                m_logger.LogError(ex, "Failed to look up '{Attribute}' from Microsoft Graph for the signed-in user.", m_companyAttribute);
            }

            return principal;
        }
    }
}
