using Gemstone.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace PQDigest.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SystemController : ControllerBase
{
    [HttpGet, Route("version")]
    [Authorize]
    public IActionResult GetVersion()
    {
        Version assemblyVersion = AssemblyInfo.EntryAssembly.Version;
        string version = $"{assemblyVersion.Major}.{assemblyVersion.Minor}.{assemblyVersion.Build}";

#if DEBUG
        version += " (Debug)";
#elif DEVELOPMENT
        version += " (Dev)";
#endif

        return Ok(version);
    }
}
