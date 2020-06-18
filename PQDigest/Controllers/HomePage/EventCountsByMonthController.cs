//******************************************************************************************************
//  EventCountsByMonthController.cs - Gbtc
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
//  06/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PQDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventCountsByMonthController : ControllerBase
    {
        public ActionResult Get() {
            List<dynamic> returnobj = new List<dynamic>() {
               new { Month = "May", Sag = 10, Swell = 2, Transient = 8, Interruption = 1, Fault = 1, Total = 22 },
               new { Month = "Jun", Sag = 9, Swell = 1, Transient = 8, Interruption = 0, Fault = 2, Total = 20 },
               new { Month = "Jul", Sag = 8, Swell = 1, Transient = 6, Interruption = 0, Fault = 0, Total = 15 },
               new { Month = "Aug", Sag = 9, Swell = 1, Transient = 7, Interruption = 0, Fault = 1, Total = 18 },
               new { Month = "Sep", Sag = 10, Swell = 2, Transient = 6, Interruption = 1, Fault = 0, Total = 19 },
               new { Month = "Oct", Sag = 11, Swell = 3, Transient = 5, Interruption = 0, Fault = 0, Total = 19 },
               new { Month = "Nov", Sag = 12, Swell = 1, Transient = 4, Interruption = 0, Fault = 0, Total = 17 },
               new { Month = "Dec", Sag = 11, Swell = 1, Transient = 5, Interruption = 0, Fault = 2, Total = 19 },
               new { Month = "Jan", Sag = 10, Swell = 0, Transient = 6, Interruption = 0, Fault = 3, Total = 19 },
               new { Month = "Feb", Sag = 8, Swell = 0, Transient = 7, Interruption = 0, Fault = 1, Total = 16 },
               new { Month = "Mar", Sag = 10, Swell = 1, Transient = 7, Interruption = 0, Fault = 1, Total = 19 },
               new { Month = "Apr", Sag = 9, Swell = 2, Transient = 8, Interruption = 1, Fault = 1, Total = 21 }
            };
            return Ok(returnobj);
        }
    }
}
