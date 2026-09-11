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

import { bisect } from 'd3';
import { useGetContainerPosition } from '@gpa-gemstone/helper-functions';
import { RadioButtons, Select, ToolTip } from '@gpa-gemstone/react-forms';
import _ from 'lodash';
import queryString from "querystring";
import React from 'react';
import { PQDigest } from '../global';
import BrowseEvents from './BrowseEvents';
import ComparableEvents from './ComparableEvents';
import Info from './Info';
import Legend from './Legend';
import PolarChart from './PolarChart';
import WaveformViewerD3Chart from './WaveformViewerD3Chart';
import { ErrorIcon, LoadingIcon, NoDataIcon } from './ChartIcons';

import moment from 'moment';
import { createBrowserHistory } from 'history';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';

export interface IDataIV {
    Key: string,
    Show: boolean,
    Color: string,
    Data: [number, number][]
}

type PlotStatus = 'uninitiated' | 'loading' | 'idle' | 'error';

const WaveformViewer = () => {
    const history = createBrowserHistory();
    const waveformRef = React.useRef<HTMLDivElement | null>(null);
    const pointsRef = React.useRef<HTMLDivElement | null>(null);
    const waveformsBodyRef = React.useRef<HTMLDivElement | null>(null);
    const analyticBodyRef = React.useRef<HTMLDivElement | null>(null);
    const polarBodyRef = React.useRef<HTMLDivElement | null>(null);
    const { width: waveformWidth } = useGetContainerPosition(waveformRef);
    const { width: pointsWidth } = useGetContainerPosition(pointsRef);
    const { height: waveformsBodyHeight } = useGetContainerPosition(waveformsBodyRef);
    const { height: analyticBodyHeight } = useGetContainerPosition(analyticBodyRef);
    const { height: polarBodyHeight } = useGetContainerPosition(polarBodyRef);

    const [eventID, setEventID] = React.useState<number | undefined>(undefined);

    const [compareEventID, setCompareEventID] = React.useState<number>(0);

    const [voltageData, setVoltageData] = React.useState<IDataIV[]>([]);
    const [currentData, setCurrentData] = React.useState<IDataIV[]>([]);
    const [analyticData, setAnaltyicData] = React.useState<IDataIV[]>([]);

    const [compareVoltageData, setCompareVoltageData] = React.useState<IDataIV[]>([]);
    const [compareCurrentData, setCompareCurrentData] = React.useState<IDataIV[]>([]);
    const [compareAnaltyicData, setCompareAnaltyicData] = React.useState<IDataIV[]>([]);

    const [voltageStatus, setVoltageStatus] = React.useState<PlotStatus>('uninitiated');
    const [currentStatus, setCurrentStatus] = React.useState<PlotStatus>('uninitiated');
    const [analyticStatus, setAnalyticStatus] = React.useState<PlotStatus>('uninitiated');

    const [analytic, setAnalytic] = React.useState<PQDigest.Analtyic>('Frequency');
    const [harmonic, setHarmonic] = React.useState<number>(5);
    const [chartAction, setChartAction] = React.useState<PQDigest.ChartAction>('Click');

    const [hover, setHover] = React.useState<number>(-1);
    const [buttonHover, setButtonHover] = React.useState<'None' | 'Reset' | 'ExportCSV'>('None');
    const [click, setClick] = React.useState<number>(-1);
    const [extents, setExtents] = React.useState<PQDigest.D3Extent>({ X: { Min: null, Max: null }, Y: { Min: null, Max: null } });

    React.useEffect(() => {
        const query = queryString.parse(history.location.search.substring(1));
        const eventIDKey = Object.keys(query).find(key => key.toLowerCase() === 'eventid');
        setEventID(eventIDKey != null ? parseInt(query[eventIDKey].toString()) : undefined);
    }, []);

    React.useEffect(() => {
        if (eventID == null) return;

        setCurrentStatus('loading');
        let handle1 = GetWaveformData('Current', eventID);
        handle1.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey('Current', key), Show: ShowPath('Current', key), Color: GetColor(key), Data: data[key] } });
            setCurrentData(returnData);
            setCurrentStatus('idle');
        });
        handle1.fail(() => {
            setCurrentStatus('error');
        });

        setVoltageStatus('loading');
        let handle2 = GetWaveformData('Voltage', eventID);
        handle2.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey('Voltage', key), Show: ShowPath('Voltage', key), Color: GetColor(key), Data: data[key] } });
            setVoltageData(returnData);
            setVoltageStatus('idle');
        });
        handle2.fail(() => {
            setVoltageStatus('error');
        });


        return function () {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();

        }
    }, [eventID]);

    React.useEffect(() => {
        if (eventID == null) return;

        setAnalyticStatus('loading');
        let handle = GetAnalyticData(analytic, eventID);
        handle.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey(analytic, key), Show: ShowPath(analytic, key), Color: GetColor(key), Data: data[key] } });
            setAnaltyicData(returnData);
            setAnalyticStatus('idle');
        });
        handle.fail(() => {
            setAnalyticStatus('error');
        });

        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }, [eventID, analytic, harmonic]);

    React.useEffect(() => {
        if (compareEventID == 0) {
            setCompareVoltageData([]);
            setCompareCurrentData([]);
            setCompareAnaltyicData([]);
            return;
        }

        let handle1 = GetWaveformData('Current', compareEventID);
        handle1.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey('Current', key), Show: false, Color: GetCompareColor(key), Data: data[key] } });
            setCompareCurrentData(returnData)
        });

        let handle2 = GetWaveformData('Voltage', compareEventID);
        handle2.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey('Voltage', key), Show: false, Color: GetCompareColor(key), Data: data[key] } });
            setCompareVoltageData(returnData)
        });


        return function () {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();

        }
    }, [compareEventID]);

    React.useEffect(() => {
        let handle = GetAnalyticData(analytic, compareEventID);
        handle.done(data => {
            let returnData = Object.keys(data).map(key => { return { Key: GetKey(analytic, key), Show: false, Color: GetCompareColor(key), Data: data[key] } });
            setCompareAnaltyicData(returnData)
        });

        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }, [compareEventID, analytic, harmonic]);

    function GetWaveformData(type: 'Current' | 'Voltage', id: number): JQuery.jqXHR<object> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Waveform/${id}/${type}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetAnalyticData(type: string, id: number): JQuery.jqXHR<object> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Analytic/${type}/${id}${(type == 'SpecifiedHarmonic' ? '/' + harmonic : '')}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function HandleReset() {
        setExtents({ X: { Min: null, Max: null }, Y: { Min: null, Max: null } });
    }

    function HandleChartAction(value: number | PQDigest.D3Extent) {
        if (chartAction == 'Click' && typeof (value) == 'number') {
            setClick(value);
        }
        else if (typeof (value) == 'object')
            setExtents(value);
    }

    function HandleExportCSV() {
        if (eventID == null) return;

        var req = new XMLHttpRequest();
        req.open("GET", `${homePath}api/OpenXDA/Event/CSV/${eventID}`, true);
        req.responseType = "blob";
        req.onload = function (event) {
            var blob = req.response;
            var fileName = req.getResponseHeader("fileName") //if you have the fileName header available
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
        };

        req.send();
    }

    if (eventID == null) return null;

    return (
        <div className="row flex-nowrap w-100 m-0" style={{ height: "100%" }}>
            <div className="col-auto d-flex flex-column h-100" style={{ padding: '0px 2px 0px 0px' }}>
                <div className="card d-flex flex-column" style={{ flex: '3 1 0', minHeight: 0 }}>
                    <div className="card-header">Info</div>
                    <div className="card-body" style={{ padding: 0, flex: 1, minHeight: 0, overflowY: 'hidden' }}>
                        <Info EventID={eventID} />
                    </div>
                </div>
                <div className="card d-flex flex-column" style={{ flex: '1 1 0', minHeight: 0 }}>
                    <div className="card-header">Browse Events</div>
                    <div className="card-body" style={{ padding: 0, flex: 1, minHeight: 0, overflowY: 'hidden' }}>
                        <BrowseEvents EventID={eventID} />
                    </div>
                </div>
                <div className="card d-flex flex-column" style={{ flex: '2 1 0', minHeight: 0 }}>
                    <div className="card-header">Compare</div>
                    <div className="card-body" style={{ padding: 0, flex: 1, minHeight: 0, overflowY: 'hidden' }}>
                        <ComparableEvents
                            EventID={eventID}
                            ComparableEventID={compareEventID}
                            OnChange={(id) => setCompareEventID(id)}
                        />
                    </div>
                </div>
            </div>
            <div ref={waveformRef} className="col d-flex flex-column h-100" style={{ padding: '0px 2px 0px 0px', minWidth: 0 }}>
                <div className="card d-flex flex-column" style={{ flex: '2 1 0', minHeight: 0 }}>
                    <div className="card-header" style={{ paddingBottom: 9, paddingTop: 9 }}>
                        <div className="row align-items-center">
                            <div className="col">Waveforms</div>
                            <div className="col-auto d-flex align-items-center">
                                <RadioButtons
                                    Record={{ Action: chartAction }}
                                    Field="Action"
                                    Label=""
                                    Setter={(record) => setChartAction(record.Action)}
                                    Options={[
                                        { Label: 'Click', Value: 'Click' },
                                        { Label: 'Pan', Value: 'Pan' },
                                        { Label: 'Zoom', Value: 'ZoomX' }
                                    ]}
                                    Position="horizontal"
                                    Style={{ marginBottom: 0 }}
                                />
                                <button
                                    className='btn btn-primary'
                                    onClick={HandleReset}
                                    data-tooltip='WaveformReset'
                                    onMouseEnter={() => setButtonHover('Reset')}
                                    onMouseLeave={() => setButtonHover('None')}
                                >
                                    <ReactIcons.Refresh Size={16}/>
                                </button>
                                <ToolTip Show={buttonHover == 'Reset'} Position='top' Target='WaveformReset'>
                                    Reset
                                </ToolTip>
                                <button
                                    className='btn btn-primary'
                                    onClick={HandleExportCSV}
                                    data-tooltip='WaveformExportCSV'
                                    onMouseEnter={() => setButtonHover('ExportCSV')}
                                    onMouseLeave={() => setButtonHover('None')}
                                >
                                    <ReactIcons.ShareArrow Size={16}/>
                                </button>
                                <ToolTip Show={buttonHover == 'ExportCSV'} Position='top' Target='WaveformExportCSV'>
                                    Export CSV
                                </ToolTip>
                            </div>
                        </div>
                    </div>
                    <div ref={waveformsBodyRef} className="card-body" style={{ padding: 0, flex: 1, minHeight: 0, overflowY: 'hidden' }}>
                        <div style={{ height: waveformsBodyHeight / 2, position: 'relative' }}>
                            <PlotState Status={voltageStatus} HasData={HasPlotData(voltageData)} Height={waveformsBodyHeight / 2}>
                                <Legend Type='Voltage' Paths={voltageData} CompareData={false} GetColor={GetColor} CallBack={(path) => {
                                    let newPaths = _.clone(voltageData);
                                    let newPath = newPaths.find(x => x.Key == path.Key);
                                    newPath.Show = !path.Show;
                                    setVoltageData(newPaths);
                                }} />
                                <Legend Type='Voltage' Paths={compareVoltageData} CompareData={true} GetColor={GetCompareColor} CallBack={(path) => {
                                    let newPaths = _.clone(compareVoltageData);
                                    let newPath = newPaths.find(x => x.Key == path.Key);
                                    newPath.Show = !path.Show;
                                    setCompareVoltageData(newPaths);
                                }} />

                                <WaveformViewerD3Chart
                                    EventID={eventID}
                                    Data={voltageData}
                                    CompareData={compareVoltageData}
                                    ChartAction={chartAction}
                                    Extent={extents}
                                    Units="Volts"
                                    DataType="Time"
                                    Height={waveformsBodyHeight / 2}
                                    Width={waveformWidth - 4}
                                    Margin={{ Top: 10, Bottom: 30, Left: 50, Right: 1 }}
                                    Hover={hover}
                                    SetHover={(value) => setHover(value)}
                                    Click={click}
                                    HandleChartAction={HandleChartAction}
                                />
                            </PlotState>
                        </div>
                        <div style={{ height: waveformsBodyHeight / 2, position: 'relative' }}>
                            <PlotState Status={currentStatus} HasData={HasPlotData(currentData)} Height={waveformsBodyHeight / 2}>
                                <Legend Type='Current' Paths={currentData} CompareData={false} GetColor={GetColor} CallBack={(path) => {
                                    let newPaths = _.clone(currentData);
                                    let newPath = newPaths.find(x => x.Key == path.Key);
                                    newPath.Show = !path.Show;
                                    setCurrentData(newPaths);
                                }} />
                                <Legend Type='Current' Paths={compareCurrentData} CompareData={true} GetColor={GetCompareColor} CallBack={(path) => {
                                    let newPaths = _.clone(compareCurrentData);
                                    let newPath = newPaths.find(x => x.Key == path.Key);
                                    newPath.Show = !path.Show;
                                    setCompareCurrentData(newPaths);
                                }} />

                                <WaveformViewerD3Chart
                                    EventID={eventID}
                                    Data={currentData}
                                    CompareData={compareCurrentData}
                                    ChartAction={chartAction}
                                    Extent={extents}
                                    Units="Amps"
                                    DataType="Time"
                                    Height={waveformsBodyHeight / 2}
                                    Width={waveformWidth - 4}
                                    Margin={{ Top: 10, Bottom: 30, Left: 50, Right: 1 }}
                                    Hover={hover}
                                    SetHover={(value) => setHover(value)}
                                    Click={click}
                                    HandleChartAction={HandleChartAction}
                                />
                            </PlotState>
                        </div>
                    </div>
                </div>
                <div className="card d-flex flex-column" style={{ flex: '1 1 0', minHeight: 0 }}>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-auto">
                                <Select
                                    Record={{ Analytic: analytic }}
                                    Field="Analytic"
                                    Label=""
                                    Setter={(record) => setAnalytic(record.Analytic)}
                                    Options={[
                                        { Label: 'Power', Value: 'Power' },
                                        { Label: 'Frequency', Value: 'Frequency' },
                                        { Label: 'Rapid Voltage Change', Value: 'RapidVoltageChange' },
                                        { Label: 'Specified Harmonic', Value: 'SpecifiedHarmonic' },
                                        { Label: 'Symmetrical Components', Value: 'SymmetricalComponents' },
                                        { Label: 'Total Harmonic Distortion', Value: 'THD' },
                                        { Label: 'Unbalance', Value: 'Unbalance' }
                                    ]}
                                    Style={{ marginBottom: 0, width: 200 }}
                                />
                            </div>
                            {analytic == 'SpecifiedHarmonic' ?
                                <div className="col-auto">
                                    <Select
                                        Record={{ Harmonic: harmonic }}
                                        Field="Harmonic"
                                        Label=""
                                        Setter={(record) => setHarmonic(record.Harmonic)}
                                        Options={Array.from(Array(40), (x, i) => ({ Label: i.toString(), Value: i }))}
                                        Style={{ marginBottom: 0 }}
                                    />
                                </div>
                                : null}
                        </div>
                    </div>
                    <div ref={analyticBodyRef} className="card-body" style={{ padding: 0, flex: 1, minHeight: 0, overflowY: 'hidden' }}>
                        <div style={{ height: analyticBodyHeight, position: 'relative' }}>
                            <PlotState Status={analyticStatus} HasData={HasPlotData(analyticData)} Height={analyticBodyHeight}>
                                <Legend Type={analytic} Paths={analyticData} CompareData={false} GetColor={GetColor} CallBack={(path) => {
                                    let newPaths = _.clone(analyticData);
                                    let newPath = newPaths.find(x => x.Key == path.Key);
                                    newPath.Show = !path.Show;
                                    setAnaltyicData(newPaths);
                                }} />
                                <Legend Type={analytic} Paths={compareAnaltyicData} CompareData={true} GetColor={GetCompareColor} CallBack={(path) => {
                                    let newPaths = _.clone(compareAnaltyicData);
                                    let newPath = newPaths.find(x => x.Key == path.Key);
                                    newPath.Show = !path.Show;
                                    setCompareAnaltyicData(newPaths);
                                }} />

                                <WaveformViewerD3Chart EventID={eventID} Data={analyticData} CompareData={compareAnaltyicData} ChartAction={chartAction} Extent={extents} Units={GetUnits(analytic)} DataType="Time" Height={analyticBodyHeight} Width={waveformWidth - 4} Margin={{ Top: 10, Bottom: 30, Left: 50, Right: 1 }} Hover={hover} SetHover={(value) => setHover(value)} Click={click} HandleChartAction={HandleChartAction} />
                            </PlotState>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={pointsRef} className="col-auto d-flex flex-column h-100" style={{ padding: '0px 2px 0px 0px' }}>
                <div className="card d-flex flex-column" style={{ flex: '1 1 0', minHeight: 0 }}>
                    <div className="card-header">{click < 0 ? 'Click to get values ...' : 'Values at ' + moment(click).utc().format('MM/DD/YYYY HH:mm:ss.SSSS') + ' (CST)'}</div>
                    <div className="card-body" style={{ padding: 0, flex: 1, minHeight: 0, overflowY: 'auto' }}>
                        <table className="table">
                            <tbody>
                                {voltageData.filter(x => x.Show).map(x => {
                                    try {
                                        return <tr key={x.Key}><td>{x.Key}</td><td>{x.Data[bisect(x.Data.map(x => x[0]), click)][1].toFixed(2)}</td></tr>
                                    }
                                    catch { return null }
                                })}
                                {currentData.filter(x => x.Show).map(x => {
                                    try {
                                        return <tr key={x.Key}><td>{x.Key}</td><td>{x.Data[bisect(x.Data.map(x => x[0]), click)][1].toFixed(2)}</td></tr>
                                    }
                                    catch { return null }
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card d-flex flex-column" style={{ flex: '1 1 0', minHeight: 0 }}>
                    <div className="card-header">Phasor</div>
                    <div ref={polarBodyRef} className="card-body" style={{ padding: 0, flex: 1, minHeight: 0, overflowY: 'hidden' }}>
                        <PlotState Status={GetCombinedStatus(voltageStatus, currentStatus)} HasData={HasPlotData(voltageData) && HasPlotData(currentData)} Height={polarBodyHeight}>
                            <PolarChart
                                Height={polarBodyHeight}
                                Width={pointsWidth - 5}
                                Time={click}
                                VoltageData={voltageData}
                                CurrentData={currentData}
                            />
                        </PlotState>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PlotState = (props: { Status: PlotStatus, HasData: boolean, Height: number, children: React.ReactNode }) => {
    if (props.Status === 'loading' || props.Status === 'uninitiated')
        return <LoadingIcon Size={props.Height * 0.5} />;

    if (props.Status === 'error') return <ErrorIcon />;
    if (!props.HasData) return <NoDataIcon />;

    return <>{props.children}</>;
}

function GetCombinedStatus(...statuses: PlotStatus[]): PlotStatus {
    if (statuses.some(status => status === 'error')) return 'error';
    if (statuses.some(status => status === 'loading' || status === 'uninitiated')) return 'loading';
    return 'idle';
}

function HasPlotData(data: IDataIV[]): boolean {
    return data.some(series => series.Data.length > 0);
}

function GetUnits(type: PQDigest.Analtyic): string {
    if (type == 'Frequency') return 'Hz';
    else if (type == 'Power') return 'kW/kVA/kVAr';
    else if (type == 'RapidVoltageChange') return 'V';
    else if (type == 'SpecifiedHarmonic') return 'V/A/Degs';
    else if (type == 'SymmetricalComponents') return 'kV';
    else if (type == 'THD') return '%';
    else if (type == 'Unbalance') return '%';
    else return '';
}

function ShowPath(type: 'Voltage' | 'Current' | PQDigest.Analtyic, label: string): boolean {
    if (type == 'Voltage' || type == 'Current' || type == 'RapidVoltageChange') {
        if (label.match(/^[VI][ABC]N$/g) != null) return true;
    }
    else if (type == 'Frequency' && label == 'Average') return true;
    else if (type == 'Power') {
        if (label.match(/Active Power/g) != null) return true;
    }
    else if (type == 'SpecifiedHarmonic') {
        if (label.match(/V[ABC]N Mag/g) != null) return true;
    }
    else if (type == 'SymmetricalComponents' && label.indexOf('Voltage') >= 0) return true;
    else if (type == 'THD' && label.indexOf('V') >= 0) return true;
    else if (type == 'Unbalance' && label.indexOf('S2/S1 Voltage') >= 0) return true;

    return false;
}

function GetKey(type: 'Voltage' | 'Current' | PQDigest.Analtyic, label: string): string {
    const prefix = type == 'Voltage' ? 'V' : 'I';
    if ((type == 'Voltage' || type == 'Current') && label == `${prefix}AN`) return `Wf-${prefix}AN`;
    if ((type == 'Voltage' || type == 'Current') && label == `${prefix}BN`) return `Wf-${prefix}BN`;
    if ((type == 'Voltage' || type == 'Current') && label == `${prefix}CN`) return `Wf-${prefix}CN`;
    if ((type == 'Voltage' || type == 'Current') && label == `${prefix}AB`) return `Wf-${prefix}AB`;
    if ((type == 'Voltage' || type == 'Current') && label == `${prefix}BC`) return `Wf-${prefix}BC`;
    if ((type == 'Voltage' || type == 'Current') && label == `${prefix}CA`) return `Wf-${prefix}CA`;
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
    if (label == `AN Active Power`) return `AN-W`;
    if (label == `BN Active Power`) return `BN-W`;
    if (label == `CN Active Power`) return `CN-W`;
    if (label == `Total Active Power`) return `Total-W`;
    if (label == `AN Apparent Power`) return `AN-VA`;
    if (label == `BN Apparent Power`) return `BN-VA`;
    if (label == `CN Apparent Power`) return `CN-VA`;
    if (label == `Total Apparent Power`) return `Total-VA`;
    if (label == `AN Reactive Power`) return `AN-VAR`;
    if (label == `BN Reactive Power`) return `BN-VAR`;
    if (label == `CN Reactive Power`) return `CN-VAR`;
    if (label == `Total Reactive Power`) return `Total-VAR`;
    if (label == `AN Power Factor`) return `AN-PF`;
    if (label == `BN Power Factor`) return `BN-PF`;
    if (label == `CN Power Factor`) return `CN-PF`;
    if (label == `Total Power Factor`) return `Total-PF`;

    else return label;
}

function GetColor(label) {
    if (label.indexOf('VA') >= 0) return '#A30000';
    if (label.indexOf('VB') >= 0) return '#0029A3';
    if (label.indexOf('VC') >= 0) return '#007A29';
    if (label.indexOf('VN') >= 0) return '#c3c3c3';
    if (label.indexOf('IA') >= 0) return '#FF0000';
    if (label.indexOf('IB') >= 0) return '#0066CC';
    if (label.indexOf('IC') >= 0) return '#33CC33';
    if (label.indexOf('AN') >= 0) return '#FF0000';
    if (label.indexOf('BN') >= 0) return '#0066CC';
    if (label.indexOf('CN') >= 0) return '#33CC33';
    if (label.indexOf('NG') >= 0) return '#c3c3c3';
    if (label.indexOf('RES') >= 0) return '#ffc107';
    if (label.indexOf('Average') >= 0) return '#9A52A4';
    if (label.indexOf('Total') >= 0) return '#9A52A4';
    if (label.indexOf('S0') >= 0) return '#A30000';
    if (label.indexOf('S2') >= 0) return '#007A29';
    if (label.indexOf('S1') >= 0) return '#0029A3';

    else {
        var ranNumOne = Math.floor(Math.random() * 256).toString(16);
        var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
        var ranNumThree = Math.floor(Math.random() * 256).toString(16);

        return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
    }
}

function GetCompareColor(label) {
    if (label.indexOf('VA') >= 0) return '#E3A909';
    if (label.indexOf('VB') >= 0) return '#9800A3';
    if (label.indexOf('VC') >= 0) return '#707A00';
    if (label.indexOf('VN') >= 0) return '#c3c3c3';
    if (label.indexOf('IA') >= 0) return '#FF8000';
    if (label.indexOf('IB') >= 0) return '#CF12E0';
    if (label.indexOf('IC') >= 0) return '#FFFF00';
    if (label.indexOf('AN') >= 0) return '#FF8000';
    if (label.indexOf('BN') >= 0) return '#CF12E0';
    if (label.indexOf('CN') >= 0) return '#FFFF00';
    if (label.indexOf('NG') >= 0) return '#636161';
    if (label.indexOf('RES') >= 0) return '#07FFFF';
    if (label.indexOf('Average') >= 0) return '#A45289';
    if (label.indexOf('Total') >= 0) return '#A45289';
    if (label.indexOf('S0') >= 0) return '#E3A909';
    if (label.indexOf('S1') >= 0) return '#9800A3';
    if (label.indexOf('S2') >= 0) return '#707A00';

    else {
        var ranNumOne = Math.floor(Math.random() * 256).toString(16);
        var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
        var ranNumThree = Math.floor(Math.random() * 256).toString(16);

        return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
    }
}

export default WaveformViewer;
