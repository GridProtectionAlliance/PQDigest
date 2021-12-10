//******************************************************************************************************
//  InfoController.cs - Gbtc
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
//  07/31/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gemstone.Data;
using Gemstone.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PQDigest.Models;

namespace PQDigest.Controllers
{
    [Route("api/OpenXDA/Event/[controller]")]
    [ApiController]
    public class InfoController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public InfoController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        [HttpGet, Route("{eventID:int}")]
        public ActionResult Get(int eventID) {
            using (AdoDataConnection connection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
				try
				{
					return Ok(connection.RetrieveData(@"
					With WorstSeverityCode as (
					SELECT 
						EventID,
						MAX(DisturbanceSeverity.SeverityCode) as SeverityCode
					FROM 
						Disturbance INNER HASH JOIN
						DisturbanceSeverity ON Disturbance.ID = DisturbanceSeverity.DisturbanceID
					WHERE
						PhaseID = (SELECT ID FROM Phase WHERE Name = 'Worst') AND 
						EventID = {0}
					GROUP BY
						EventID
					), WorstSeverityRecord as (
					SELECT 
						Disturbance.*, DisturbanceSeverity.SeverityCode, row_number() over (Partition By Disturbance.EventID Order By Disturbance.EventTypeID) as Ranking 
					FROM 
						Disturbance INNER HASH JOIN
						DisturbanceSeverity ON Disturbance.ID = DisturbanceSeverity.DisturbanceID INNER HASH JOIN
						WorstSeverityCode ON Disturbance.EventID = WorstSeverityCode.EventID AND DisturbanceSeverity.SeverityCode = WorstSeverityCode.SeverityCode
					WHERE
						PhaseID IN (SELECT ID FROM Phase WHERE Name != 'Worst') AND Disturbance.EventID = {0}
					)
					SELECT 	
						Meter.Name as Meter,
						Event.StartTime,
						Phase.Name as Phase,
						EventType.Name as EventType,
						CAST(ROUND(WorstSeverityRecord.DurationCycles, 2) as VARCHAR(20)) + ' cycles' as Duration,
						CAST(WorstSeverityRecord.Magnitude as VARCHAR(20)) + ' Amps (RMS)' as Magnitude,
						CAST(ROUND((1 - WorstSeverityRecord.PerUnitMagnitude) * 100,1) as VARCHAR(20)) + '%' as SagDepth
					FROM
						Event JOIN
						Meter ON Event.MeterID = Meter.ID LEFT JOIN
						WorstSeverityRecord ON Ranking = 1 LEFT JOIN
						Phase ON WorstSeverityRecord.PhaseID = Phase.ID LEFT JOIN
						EventType ON WorstSeverityRecord.EventTypeID = EventType.ID
					WHERE	
						Event.ID = {0}
                ", eventID));

				}
				catch (Exception ex) {
					return StatusCode(500, ex);
				}
            }
        }
    }
}
