using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Gemstone.Configuration;
using Gemstone.Data;
using Gemstone.Data.Model;
using Gemstone.Reflection;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using openXDA.Model;
using PQDigest.Models;
using SystemCenter.Model;

namespace PQDigest.Security
{
    public static class HelperMethods
    {
        /// <summary>
        /// Gets the <see cref="Customer"/> key <see langword="string"/> from the <see cref="ClaimsPrincipal"/>.
        /// </summary>
        /// <returns>A <see langword="string"/> key value that represents the customer.</returns>
        public static string GetCustomer(this ClaimsPrincipal principal)
        {
            Claim customerKey = principal.FindFirst(ClaimTypes.GroupSid);
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
    }
}
