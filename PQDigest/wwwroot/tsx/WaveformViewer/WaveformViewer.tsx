//******************************************************************************************************
//  WaveformViewer.tsx - Gbtc
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
//  07/30/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { OpenXDA } from '../global';
import WaveformViewerD3Chart from './WaveformViewerD3Chart';

const WaveformViewer = (props: { EventID: number }) => {
    const infoWidth = 300;
    const pointsWidth = 500;
    const waveformWidth = window.innerWidth - infoWidth - pointsWidth - 10;
    const [info, setInfo] = React.useState<OpenXDA.Event.Info>(null);
    React.useEffect(() => {
        let handle = GetEventInfo();
        handle.done((data: OpenXDA.Event.Info[]) => {
            setInfo(data[0]);
        });
        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }, []);

    function GetEventInfo(): JQuery.jqXHR<OpenXDA.Event.Info[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Info/${props.EventID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    return (
        <div className="row" style={{height: "100%", margin: '5px 5px 5px 5px '}}>
            <div className="" style={{ padding: '0px 2px 0px 0px', width: infoWidth }}>
                <div className="card">
                    <div className="card-header">Info</div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 127) - 70, height: (window.innerHeight - 127) - 70, overflowY: 'hidden' }}>
                        {(info != null ? 
                            <table className="table">
                                <tbody>
                                    <tr><td>Meter</td><td>{info.Meter}</td></tr>
                                    <tr><td>Time</td><td>{moment(info.StartTime).format('MM/DD/YYYY HH:mm')}&nbsp;(CST)</td></tr>
                                    <tr><td>Type</td><td>{info.EventType}</td></tr>
                                    <tr><td>Phase</td><td>{info.Phase}</td></tr>
                                    <tr><td>Duration</td><td>{info.Duration}</td></tr>
                                    <tr><td>Magnitude</td><td>{info.Magnitude}</td></tr>
                                    <tr><td>Depth</td><td>{info.SagDepth}</td></tr>
                                </tbody>
                            </table>
                        : null)}
                    </div>
                </div>

            </div>
            <div className="" style={{ padding: '0px 2px 0px 0px', width: waveformWidth }}>
                <div className="card">
                    <div className="card-header">Waveforms</div>
                    <div className="card-body" style={{ padding: 0, maxHeight: 2*(window.innerHeight - 246)/3, height: 2*(window.innerHeight - 246)/3, overflowY: 'hidden' }}>
                        <WaveformViewerD3Chart EventID={props.EventID} MeasurementType="Voltage" DataType="Time" Height={(window.innerHeight - 246) / 3} Width={waveformWidth - 4} Margin={{ Top: 1, Bottom: 1, Left: 1, Right: 1 }} />
                        <WaveformViewerD3Chart EventID={props.EventID} MeasurementType="Current" DataType="Time" Height={(window.innerHeight - 246) / 3} Width={waveformWidth - 4} Margin={{ Top: 1, Bottom: 1, Left: 1, Right: 1 }} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Analytics</div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 246) / 3, height: (window.innerHeight - 246) / 3, overflowY: 'hidden' }}>
                    </div>
                </div>
            </div>
            <div className="" style={{ padding: '0px 2px 0px 0px', width: pointsWidth }}>
                <div className="card">
                    <div className="card-header">Points</div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 246)/2, height: (window.innerHeight - 246)/2, overflowY: 'hidden' }}>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Phasor</div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 246)/2, height: (window.innerHeight - 246)/2, overflowY: 'hidden' }}>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WaveformViewer;