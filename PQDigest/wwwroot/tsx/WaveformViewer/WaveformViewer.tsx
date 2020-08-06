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
import Legend from './Legend';
import _ from 'lodash';
import { bisect } from 'd3';
import PolarChart from './PolarChart';

type Analtyic = 'Power' | 'Frequency' | 'RapidVoltageChange' | 'SpecifiedHarmonic' | 'SymmetricalComponents' | 'THD' | 'Unbalance' 
const WaveformViewer = (props: { EventID: number }) => {
    const infoWidth = 300;
    const pointsWidth = 500;
    const waveformWidth = window.innerWidth - infoWidth - pointsWidth - 10;

    const [info, setInfo] = React.useState<OpenXDA.Event.Info>(null);

    const [voltageData, setVoltageData] = React.useState<{ Key: string, Show: boolean, Color: string, Data: [number, number][] }[]>([]);
    const [currentData, setCurrentData] = React.useState<{ Key: string, Show: boolean, Color: string, Data: [number, number][] }[]>([]);
    const [analtyicData, setAnaltyicData] = React.useState<{ Key: string, Show: boolean, Color: string, Data: [number, number][] }[]>([]);

    const [analtyic, setAnalytic] = React.useState<Analtyic>('Frequency');
    const [harmonic, setHarmonic] = React.useState<number>(5);

    const [hover, setHover] = React.useState<number>(-1);
    const [click, setClick] = React.useState<number>(-1);


    React.useEffect(() => {
        let handle = GetEventInfo();
        handle.done((data: OpenXDA.Event.Info[]) => {
            setInfo(data[0]);
        });

        let handle2 = GetWaveformData('Current');
        handle2.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey('I', key), Show: ShowPath(key), Color: GetColor(key), Data: data[key] } });
            setCurrentData(returnData)
        });

        let handle3 = GetWaveformData('Voltage');
        handle3.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey('V', key), Show: ShowPath(key), Color: GetColor(key), Data: data[key] } });
            setVoltageData(returnData)
        });


        return function () {
            if (handle.abort != undefined) handle.abort();
            if (handle2.abort != undefined) handle2.abort();
            if (handle3.abort != undefined) handle3.abort();

        }
    }, [props.EventID]);

    React.useEffect(() => {
        let handle4 = GetAnalyticData(analtyic);
        handle4.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: key, Show: true, Color: GetColor(key), Data: data[key] } });
            setAnaltyicData(returnData)
        });

        return function () {
            if (handle4.abort != undefined) handle4.abort();
        }
    }, [analtyic, harmonic]);


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

    function GetWaveformData(type: 'Current' | 'Voltage'): JQuery.jqXHR<object> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Waveform/${props.EventID}/${type}/${waveformWidth}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetAnalyticData(type: string): JQuery.jqXHR<object> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Analytic/${type}/${props.EventID}${(type == 'SpecifiedHarmonic'? '/' + harmonic: '')}/${waveformWidth}`,
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
                    <div className="card-body" style={{ padding: 0, maxHeight: 2 * (window.innerHeight - 246) / 3, height: 2 * (window.innerHeight - 246) / 3, overflowY: 'hidden' }}>
                        <div style={{ height: (window.innerHeight - 246) / 3, position: 'relative' }}>
                            <Legend Type='Voltage' Paths={voltageData} CallBack={(path) => {
                                let newPaths = _.clone(voltageData);
                                let newPath = newPaths.find(x => x.Key == path.Key);
                                newPath.Show = !path.Show;
                                setVoltageData(newPaths);
                            }} />
                            <WaveformViewerD3Chart EventID={props.EventID} Data={voltageData} Units="Volts" DataType="Time" Height={(window.innerHeight - 246) / 3} Width={waveformWidth - 4} Margin={{ Top: 10, Bottom: 30, Left: 50, Right: 1 }} Hover={hover} SetHover={(value) => setHover(value)} Click={click} SetClick={(value) => setClick(value)} />
                        </div>
                        <div style={{ height: (window.innerHeight - 246) / 3, position: 'relative' }}>
                            <Legend Type='Current' Paths={currentData} CallBack={(path) => {
                                let newPaths = _.clone(currentData);
                                let newPath = newPaths.find(x => x.Key == path.Key);
                                newPath.Show = !path.Show;
                                setCurrentData(newPaths);
                            }} />
                            <WaveformViewerD3Chart EventID={props.EventID} Data={currentData} Units="Amps" DataType="Time" Height={(window.innerHeight - 246) / 3} Width={waveformWidth - 4} Margin={{ Top: 10, Bottom: 30, Left: 50, Right: 1 }} Hover={hover} SetHover={(value) => setHover(value)} Click={click} SetClick={(value) => setClick(value)} />
                        </div>


                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Analytics
                        <select value={analtyic} onChange={(evt) => setAnalytic(evt.target.value as Analtyic)} style={{position: 'absolute', right: 0}}>
                            <option value="Power">Power</option>
                            <option value="Frequency">Frequency</option>
                            <option value="RapidVoltageChange">Rapid Voltage Change</option>
                            <option value="SpecifiedHarmonic">Specified Harmonic</option>
                            <option value="SymmetricalComponents">Symmetrical Components</option>
                            <option value="THD">Total Harmonic Distortion</option>
                            <option value="Unbalance">Unbalance</option>
                        </select>
                    </div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 246) / 3, height: (window.innerHeight - 246) / 3, overflowY: 'hidden' }}>
                        <div style={{ height: (window.innerHeight - 246) / 3, position: 'relative' }}>
                            <Legend Type='Analytic' Paths={analtyicData} CallBack={(path) => {
                                let newPaths = _.clone(analtyicData);
                                let newPath = newPaths.find(x => x.Key == path.Key);
                                newPath.Show = !path.Show;
                                setAnaltyicData(newPaths);
                            }} />
                            <WaveformViewerD3Chart EventID={props.EventID} Data={analtyicData} Units="Hz" DataType="Time" Height={(window.innerHeight - 246) / 3} Width={waveformWidth - 4} Margin={{ Top: 10, Bottom: 30, Left: 50, Right: 1 }} Hover={hover} SetHover={(value) => setHover(value)} Click={click} SetClick={(value) => setClick(value)} />
                        </div>


                    </div>
                </div>
            </div>
            <div className="" style={{ padding: '0px 2px 0px 0px', width: pointsWidth }}>
                <div className="card">
                    <div className="card-header">{click < 0 ? 'Click to get values ...' : 'Values at ' + moment.utc(click).format('MM/DD/YYYY HH:mm:ss.SSSS') + ' (CST)'}</div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 246) / 2, height: (window.innerHeight - 246) / 2, overflowY: 'auto' }}>
                        <table className="table">
                            <tbody>
                                {voltageData.filter(x => x.Show).map(x => {
                                    try {
                                        return <tr key={x.Key}><td>{x.Key}</td><td>{x.Data[bisect(x.Data.map(x => x[0]), click)][1].toFixed(2)}</td></tr>
                                    }
                                    catch{ return null }
                                })}
                                {currentData.filter(x => x.Show).map(x => {
                                    try {
                                        return <tr key={x.Key}><td>{x.Key}</td><td>{x.Data[bisect(x.Data.map(x => x[0]), click)][1].toFixed(2)}</td></tr>
                                    }
                                    catch{ return null }
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">Phasor</div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 246)/2, height: (window.innerHeight - 246)/2, overflowY: 'hidden' }}>
                        <PolarChart Height={(window.innerHeight - 246) / 2} Width={pointsWidth - 5} Time={click} VoltageData={voltageData} CurrentData={currentData}/>
                    </div>
                </div>


            </div>

        </div>
    )
}

function ShowPath(label): boolean {
    if (label.indexOf('RMS') >= 0) return false;
    else if (label.indexOf('Amp') >= 0) return false;
    else if (label.indexOf('Ph') >= 0) return false;
    else if (label.indexOf('N') < 0) return false;
    else return true;
}

function GetKey(prefix: string, label: string): string {
    if (label == `${prefix}AN`) return `Wf-${prefix}AN`;
    if (label == `${prefix}BN`) return `Wf-${prefix}BN`;
    if (label == `${prefix}CN`) return `Wf-${prefix}CN`;
    if (label == `${prefix}AB`) return `Wf-${prefix}AB`;
    if (label == `${prefix}BC`) return `Wf-${prefix}BC`;
    if (label == `${prefix}CA`) return `Wf-${prefix}CA`;
    if (label == `${prefix}NG`) return `Wf-${prefix}NG`;
    if (label == `${prefix}RES`) return `Wf-${prefix}RES`;
    if (label == `${prefix}AN RMS`) return `RMS-${prefix}AN`;
    if (label == `${prefix}BN RMS`) return `RMS-${prefix}BN`;
    if (label == `${prefix}CN RMS`) return `RMS-${prefix}CN`;
    if (label == `${prefix}AB RMS`) return `RMS-${prefix}AB`;
    if (label == `${prefix}BC RMS`) return `RMS-${prefix}BC`;
    if (label == `${prefix}CA RMS`) return `RMS-${prefix}CA`;
    if (label == `${prefix}NG RMS`) return `RMS-${prefix}NG`;
    if (label == `${prefix}RES RMS`) return `RMS-${prefix}RES`;
    if (label == `${prefix}AN Phase`) return `Ph-${prefix}AN`;
    if (label == `${prefix}BN Phase`) return `Ph-${prefix}BN`;
    if (label == `${prefix}CN Phase`) return `Ph-${prefix}CN`;
    if (label == `${prefix}AB Phase`) return `Ph-${prefix}AB`;
    if (label == `${prefix}BC Phase`) return `Ph-${prefix}BC`;
    if (label == `${prefix}CA Phase`) return `Ph-${prefix}CA`;
    if (label == `${prefix}NG Phase`) return `Ph-${prefix}NG`;
    if (label == `${prefix}RES Phase`) return `Ph-${prefix}RES`;
    if (label == `${prefix}AN Amplitude`) return `Amp-${prefix}AN`;
    if (label == `${prefix}BN Amplitude`) return `Amp-${prefix}BN`;
    if (label == `${prefix}CN Amplitude`) return `Amp-${prefix}CN`;
    if (label == `${prefix}AB Amplitude`) return `Amp-${prefix}AB`;
    if (label == `${prefix}BC Amplitude`) return `Amp-${prefix}BC`;
    if (label == `${prefix}CA Amplitude`) return `Amp-${prefix}CA`;
    if (label == `${prefix}NG Amplitude`) return `Amp-${prefix}NG`;
    if (label == `${prefix}RES Amplitude`) return `Amp-${prefix}RES`;

    else return `${prefix}`;
}

function GetColor(label) {
    if (label.indexOf('VA') >= 0) return '#A30000';
    if (label.indexOf('VB') >= 0) return '#0029A3';
    if (label.indexOf('VC') >= 0) return '#007A29';
    if (label.indexOf('VN') >= 0) return '#c3c3c3';
    if (label.indexOf('IA') >= 0) return '#FF0000';
    if (label.indexOf('IB') >= 0) return '#0066CC';
    if (label.indexOf('IC') >= 0) return '#33CC33';
    if (label.indexOf('NG') >= 0) return '#c3c3c3';
    if (label.indexOf('RES') >= 0) return '#ffc107';
    else {
        var ranNumOne = Math.floor(Math.random() * 256).toString(16);
        var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
        var ranNumThree = Math.floor(Math.random() * 256).toString(16);

        return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
    }
}

export default WaveformViewer;