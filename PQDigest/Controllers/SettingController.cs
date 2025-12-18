using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly string m_defaultLogo = "Image/GPA_Horizontal.png";
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

        [HttpGet, Route("Logo")]
        public IActionResult GetLogo()
        {
            string webRoot = Path.GetDirectoryName(AssemblyInfo.EntryAssembly.Location);

            #if DEBUG
            webRoot = Path.Combine(webRoot, "..", "..", "..", "wwwroot");
            #else
            webRoot = Path.Combine(webRoot, "wwwroot");
            #endif

            /*
            // ToDo: use claim to lookup base64/url representation in DB, return that if available.
            using (AdoDataConnection connection = new AdoDataConnection(Settings.Default)) 
            {
                logo = await new TableOperations<LogoClaim>(connection).QueryRecordWhere("Claim query here", HttpContext.User.Claims.Claim)?.Logo ?? DefaultLogo;
            }
            */

            return Ok(ConvertImageToBase64(Path.Combine(webRoot, m_defaultLogo)));
        }

        private string ConvertImageToBase64(string filePath)
        {
            byte[] imageBytes = System.IO.File.ReadAllBytes(filePath);
            return Convert.ToBase64String(imageBytes);
        }
    }
}
