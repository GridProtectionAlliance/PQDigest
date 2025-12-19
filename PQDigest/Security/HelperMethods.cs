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
        public static Customer GetCustomer(this ClaimsPrincipal principal, AdoDataConnection connection)
        {
            Claim customerKey = principal.FindFirst(ClaimTypes.GroupSid);
            return new TableOperations<Customer>(connection).QueryRecordWhere("CustomerKey = {0}", customerKey.Value);
        }
    }
}
