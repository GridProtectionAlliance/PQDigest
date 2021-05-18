//******************************************************************************************************
//  EventSearchOpenSEE.tsx - Gbtc
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
//  03/03/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import React from 'react';
import { OpenXDA } from '../../global';
import EventSearchPreviewD3Chart from './EventSearchPreviewD3Chart';
import EventSearchPreviewD3ChartAxis from './EventSearchPreviewD3ChartAxis';

export default function EventSearchOpenSEE(props: { Event: OpenXDA.EventSearch, Width: number, Height: number }) {
    const topmargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    const bottommargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    const margin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };

    let height = props.Height - 50;
    return (
        <div className="card">
            <div className="card-header"><a href={ homePath + 'WaveformViewer?EventID=' + props.Event.ID} target="_blank">View Waveform</a></div>
            <div className="card-body" style={{ height: props.Height - 50, padding: 0 }}>
                <EventSearchPreviewD3Chart Event={props.Event} MeasurementType='Voltage' DataType='Time' Margin={topmargin} Height={height / 2} Width={props.Width} Axis={true }/>
                <EventSearchPreviewD3Chart Event={props.Event} MeasurementType='Current' DataType='Time' Margin={bottommargin} Width={props.Width} Height={height / 2} Axis={true}/>
            </div>
        </div>
    )
}