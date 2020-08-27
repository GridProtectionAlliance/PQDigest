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

import React from 'react';
import EventSearchPreviewD3Chart from '../OpenSEE/EventSearchPreviewD3Chart';
import EventSearchPreviewD3ChartAxis from '../OpenSEE/EventSearchPreviewD3ChartAxis';

export default function EventSearchTrenDAP(props: { EventID: number, Width: number, Height: number }) {
    const margin = { Top: 0, Right: 20, Bottom: 0, Left: 35 };
    //const svgWidth = props.Width - margin.left - margin.right;
    //const svgHeight = props.Height - margin.top - margin.bottom - 65;

    return (
        <div className="card">
            <div className="card-header"><a href={homePath + 'TrenDAP?eventid=' + props.EventID} target="_blank">View Trending Data</a></div>
            <div className="card-body" style={{ height: props.Height - 50, padding:0 }}>
                <EventSearchPreviewD3Chart EventID={props.EventID} MeasurementType='Voltage' DataType='Trending' Margin={margin} Width={props.Width - 10} Height={props.Height /3} />
                <EventSearchPreviewD3Chart EventID={props.EventID} MeasurementType='Current' DataType='Trending' Margin={margin}Width={props.Width - 10} Height={props.Height / 3} />
                <EventSearchPreviewD3ChartAxis EventID={props.EventID} Margin={margin} Width={props.Width - 10} Height={40} DataType='Trending'/>
            </div>
        </div>
    )
}