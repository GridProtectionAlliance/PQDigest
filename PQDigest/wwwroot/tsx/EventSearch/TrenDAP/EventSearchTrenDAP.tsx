//******************************************************************************************************
//  EventSearchTrenDAP.tsx - Gbtc
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
//  07/02/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import moment from 'moment';
import React from 'react';
import { OpenXDA } from '../../global';
import EventSearchPreviewD3Chart from '../OpenSEE/EventSearchPreviewD3Chart';
import EventSearchPreviewD3ChartAxis from '../OpenSEE/EventSearchPreviewD3ChartAxis';
const MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss'
const MomentDateFormat = 'YYYY-MM-DD';
const MomentTimeZone = 'America/Chicago';

export default function EventSearchTrenDAP(props: { Event: OpenXDA.EventSearch, Width: number, Height: number }) {
    const topmargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    const bottommargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    const margin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };

    let height = props.Height - 50;
    return (
        <div className="card">
            <div className="card-header"><a href={`${homePath}Trending?dateRange=custom&meterID=${props.Event.MeterID}&startDate=${moment(props.Event.StartTime).format(MomentDateFormat)}&endDate=${moment(props.Event.StartTime).add(1, 'day').format(MomentDateFormat)}`} target="_blank">View Trending Data</a></div>
            <div className="card-body" style={{ height: props.Height - 50, padding:0 }}>
                <EventSearchPreviewD3Chart Event={props.Event} MeasurementType='Voltage' DataType='Trending' Margin={topmargin} Width={props.Width} Height={height / 2} Axis={true} />
                <EventSearchPreviewD3Chart Event={props.Event} MeasurementType='Current' DataType='Trending' Margin={bottommargin} Width={props.Width} Height={height/ 2} Axis={true}/>
            </div>
        </div>
    )
}