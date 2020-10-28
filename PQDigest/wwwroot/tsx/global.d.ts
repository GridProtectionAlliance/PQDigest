//******************************************************************************************************
//  global.d.ts - Gbtc
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
//  06/15/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { namespace } from "d3";

declare global {
    var homePath: string;
    var controllerViewPath: string;
    var userName: string;
    var isAuthenticated: boolean;

    interface String {
        countOccurrences: (chars: string) => number
    }

    namespace moment {
        function utc(timestamp: string): any;
    }
    function moment(inp?: any, format?: any, strict?: boolean): any;
    function moment(inp?: any, format?: any, language?: string, strict?: boolean): any;

}

export namespace PQDigest {
    interface Setting {
        ID: number,
        Name: string,
        Value: string,
        DefaultValue: string
    }

    type Analtyic = 'Power' | 'Frequency' | 'RapidVoltageChange' | 'SpecifiedHarmonic' | 'SymmetricalComponents' | 'THD' | 'Unbalance' 
    type ChartAction = 'Click' | 'Pan' | 'ZoomX' | 'ZoomY' | 'ZoomXY';
    interface D3Extent { X: { Min: number, Max: number }, Y: { Min: number, Max: number } }
}

export namespace OpenXDA {

    type EventTypeName = 'Sag' | 'Swell' | 'Transient' | 'Fault' | 'Interruption'
    interface EventType { ID: number, Name: EventTypeName, Description: string, Selected?: boolean }
    interface Meter { ID: number, AssetKey: string, Alias: string, Make: string, Model: string, Name: string, ShortName: string, TimeZone: string, LocationID: number, Description: string, Selected?: boolean }
    interface EventSearch { ID: number, StartTime: string, MeterName: string, EventType: string, PerUnitMagnitude: number, DurationSeconds: number }

    interface Disturbance { ID: number, EventID: number, PhaseID: number, Magnitude: number, PerUnitMagnitude: number, DurationSeconds: number }

    namespace Event {
       interface Info { Meter: string, StartTime: string, Phase: string, EventType: string, Duration: string, Magnitude: string, SagDepth: string}
    }

}

export namespace Lightning {
    interface Strike { DisplayTime: string, Amplitude: number, Latitude: number, Longitude: number}
}