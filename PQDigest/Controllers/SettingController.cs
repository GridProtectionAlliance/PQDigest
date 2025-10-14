using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gemstone.Configuration;
using Gemstone.Data;
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using openXDA.Model;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public SettingController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        [Route("{name}")]
        public ActionResult Get(string name)
        {
            using (AdoDataConnection connection = new AdoDataConnection(Settings.Default))
            {
                return Ok(new TableOperations<Setting>(connection).QueryRecordWhere("Name = {0}", name));
            }
        }
    }
}
