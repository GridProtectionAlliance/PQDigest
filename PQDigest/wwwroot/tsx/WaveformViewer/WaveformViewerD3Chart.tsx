//******************************************************************************************************
//  EventSearchPreviewD3Chart.tsx - Gbtc
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
//  02/20/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { scaleLinear, line, extent } from 'd3';
import _ from 'lodash';

const WaveformViewerD3Chart = (props: { EventID: number, MeasurementType: 'Current' | 'Voltage' | 'Analytic', DataType: 'Time' | 'Statistic' | 'Trending', Margin: { Left: number, Right: number, Top: number, Bottom: number }, Width: number, Height: number }) => {

    const [paths, setPaths] = React.useState < { Key: string, Path: JSX.Element, Show: boolean, Color: string }[]>([]);
    const [showLegend, setShowLegend] = React.useState<boolean>(false);

    const chart = React.useRef(null);
    const prefix = props.MeasurementType == 'Voltage' ? 'V' : 'I';

    React.useEffect(() => {
        setPaths([]);
        return GetData();
    }, [props.EventID]);

    function GetData() {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Waveform/${props.EventID}/${props.MeasurementType}/${props.Width}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(data => DrawChart(data));


        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }


    function DrawChart(data) {

        let x = scaleLinear().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
        let y = scaleLinear().rangeRound([props.Height - props.Margin.Top, props.Margin.Bottom]);

        let yextent = [0, 0];
        let xextent = [9007199254740991, -9007199254740990];
        Object.keys(data).forEach((key, index, keys) => {
            let newyexent = extent(data[key], d => d[1]);
            let newxexent = extent(data[key], d => d[0]);

            if (parseFloat(newyexent[0].toString()) < yextent[0]) yextent[0] = parseFloat(newyexent[0].toString())
            if (parseFloat(newyexent[1].toString()) > yextent[1]) yextent[1] = parseFloat(newyexent[1].toString())
            if (parseFloat(newxexent[0].toString()) < xextent[0]) xextent[0] = parseFloat(newxexent[0].toString())
            if (parseFloat(newxexent[1].toString()) > xextent[1]) xextent[1] = parseFloat(newxexent[1].toString())
        });

        yextent = [1.20 * yextent[0], 1.20 * yextent[1]]
        y.domain(yextent);
        x.domain(xextent);

        let linefunc = line<[number, number]>().x(d => x(d[0])).y(d => y(d[1]));

        let newPaths = [] as { Key: string, Path: JSX.Element, Show: boolean, Color: string }[];
        $.each(Object.keys(data), (index, key) => {
            let path = paths.find(x => x.Key == GetKey(key));
            if (path == undefined)
                newPaths.push({ Key: GetKey(key), Color: GetColor(key), Show: true, Path: <path key={key} fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke={GetColor(key)} d={linefunc(data[key])} /> });
            else {
                path.Path = <path key={key} fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke={path.Color} d={linefunc(data[key])} />;
                newPaths.push(path);
            }
        });
        setPaths(newPaths);
    }

    function GetKey(label): string {
        if (label == `${prefix}AN`) return `Wf-${prefix}AN`;
        if (label == `${prefix}BN`) return `Wf-${prefix}BN`;
        if (label == `${prefix}CN`) return `Wf-${prefix}CN`;
        if (label == `${prefix}AB`) return `Wf-${prefix}AB`;
        if (label == `${prefix}BC`) return `Wf-${prefix}BC`;
        if (label == `${prefix}CA`) return `Wf-${prefix}CA`;
        if (label == `${prefix}AN RMS`) return `RMS-${prefix}AN`;
        if (label == `${prefix}BN RMS`) return `RMS-${prefix}BN`;
        if (label == `${prefix}CN RMS`) return `RMS-${prefix}CN`;
        if (label == `${prefix}AB RMS`) return `RMS-${prefix}AB`;
        if (label == `${prefix}BC RMS`) return `RMS-${prefix}BC`;
        if (label == `${prefix}CA RMS`) return `RMS-${prefix}CA`;
        if (label == `${prefix}AN Phase`) return `Ph-${prefix}AN`;
        if (label == `${prefix}BN Phase`) return `Ph-${prefix}BN`;
        if (label == `${prefix}CN Phase`) return `Ph-${prefix}CN`;
        if (label == `${prefix}AB Phase`) return `Ph-${prefix}AB`;
        if (label == `${prefix}BC Phase`) return `Ph-${prefix}BC`;
        if (label == `${prefix}CA Phase`) return `Ph-${prefix}CA`;
        if (label == `${prefix}AN Amplitude`) return `Amp-${prefix}AN`;
        if (label == `${prefix}BN Amplitude`) return `Amp-${prefix}BN`;
        if (label == `${prefix}CN Amplitude`) return `Amp-${prefix}CN`;
        if (label == `${prefix}AB Amplitude`) return `Amp-${prefix}AB`;
        if (label == `${prefix}BC Amplitude`) return `Amp-${prefix}BC`;
        if (label == `${prefix}CA Amplitude`) return `Amp-${prefix}CA`;
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
        if (label.indexOf('IR') >= 0) return '#c3c3c3';

        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);

            return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
        }
    }

    return (
        <div style={{ height: props.Height, position: 'relative' /*, margin: '0x', padding: '0px'*/ }}>
            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', right: 0 }} onClick={()=> setShowLegend(!showLegend)}>Legend</button>
            <Legend Show={showLegend} Type={props.MeasurementType} Paths={paths} CallBack={(path) => {
                let newPaths = _.clone(paths);
                let newPath = newPaths.find(x => x.Key == path.Key);
                newPath.Show = !path.Show;
                setPaths(newPaths);
            }} />
            <svg width={props.Width} height={props.Height} style={{ fill: 'none', stroke: 'black', strokeWidth: '1px',  fontFamily: 'sans-serif', fontSize: 'small'}}>
                {/* Chart borders */}
                <path d={`M ${props.Margin.Left} ${props.Margin.Top} H ${props.Width - props.Margin.Right} V ${props.Height} H ${props.Margin.Left} V ${props.Margin.Top}`} style={{ shapeRendering: 'crispEdges'}} />
                <text transform={`rotate(-90 0,0)`} y={props.Margin.Left - 15} x={-(props.Height + 35) / 2}>{props.MeasurementType == "Voltage" ? "Voltage" : "Amps"}</text>
                <g>
                    {paths.filter(x => x.Show).map(x => x.Path)}
                </g>
            </svg>

        </div>
    );
}

export default WaveformViewerD3Chart;

const Legend = (props: {
    Show: boolean,
    Type: 'Voltage' | 'Current' | 'Analytic',
    Paths: { Key: string, Path: JSX.Element, Show: boolean, Color: string }[],
    CallBack: (path: { Key: string, Path: JSX.Element, Show: boolean, Color: string }) => void
}) => {

    const [all, setAll] = React.useState<boolean>(true);
    const [wf, setWf] = React.useState<boolean>(true);
    const [rms, setRMS] = React.useState<boolean>(true);
    const [amp, setAmp] = React.useState<boolean>(true);
    const [ph, setPh] = React.useState<boolean>(true);
    const [an, setAn] = React.useState<boolean>(true);
    const [bn, setBn] = React.useState<boolean>(true);
    const [cn, setCn] = React.useState<boolean>(true);
    const [ab, setAb] = React.useState<boolean>(true);
    const [bc, setBc] = React.useState<boolean>(true);
    const [ca, setCa] = React.useState<boolean>(true);

    function getColor(label) {
        if (label.indexOf('VA') >= 0) return '#A30000';
        if (label.indexOf('VB') >= 0) return '#0029A3';
        if (label.indexOf('VC') >= 0) return '#007A29';
        if (label.indexOf('VN') >= 0) return '#c3c3c3';
        if (label.indexOf('IA') >= 0) return '#FF0000';
        if (label.indexOf('IB') >= 0) return '#0066CC';
        if (label.indexOf('IC') >= 0) return '#33CC33';
        if (label.indexOf('IR') >= 0) return '#c3c3c3';

        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);

            return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
        }
    }

    const prefix = props.Type == 'Voltage' ? 'V' : 'I';
    if (props.Paths.length == 0) return null;
    return (
        <div className="btn-group-vertical" style={{ display: props.Show ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white'}}>
            <div className="btn-group">
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

                    setWf(!all);
                    setRMS(!all);
                    setAmp(!all);
                    setPh(!all);
                    setAn(!all);
                    setBn(!all);
                    setCn(!all);
                    setAb(!all);
                    setBc(!all);
                    setCa(!all);

                    setAll(!all);
                }}>All</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: wf ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('wf') >= 0 && x.Show == wf).forEach(x => props.CallBack(x))
                    setWf(!wf);
                }}>Wf</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: rms ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('rms') >= 0 && x.Show == rms).forEach(x => props.CallBack(x))
                    setRMS(!rms);
                }}>RMS</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: amp ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('amp') >= 0 && x.Show == amp).forEach(x => props.CallBack(x))
                    setAmp(!amp);
                }}>Amp</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ph ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('ph') >= 0 && x.Show == ph).forEach(x => props.CallBack(x))
                    setPh(!ph);
                }}>Ph</button>
            </div>
            <div className="btn-group" >
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: an ? 1 : 0.5, backgroundColor: getColor(prefix + 'AN') }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('an') >= 0 && x.Show == an).forEach(x => props.CallBack(x))
                    setAn(!an);
                }}>{prefix}AN</button>
                <Button Key={`Wf-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}AN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bn ? 1 : 0.5, backgroundColor: getColor(prefix + 'BN') }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('bn') >= 0 && x.Show == bn).forEach(x => props.CallBack(x))
                    setBn(!bn);
                }}>{prefix}BN</button>
                <Button Key={`Wf-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}BN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: cn ? 1 : 0.5, backgroundColor: getColor(prefix + 'CN') }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('cn') >= 0 && x.Show == cn).forEach(x => props.CallBack(x))
                    setCn(!cn);
                }}>{prefix}CN</button>
                <Button Key={`Wf-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}CN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Voltage'}>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ab ? 1 : 0.5, backgroundColor: getColor(`${prefix}AB`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('ab') >= 0 && x.Show == ab).forEach(x => props.CallBack(x))
                    setAb(!ab);
                }}>{prefix}AB</button>
                <Button Key={`Wf-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}AB`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Voltage'}>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bc ? 1 : 0.5, backgroundColor: getColor(`${prefix}BC`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('bc') >= 0 && x.Show == bc).forEach(x => props.CallBack(x))
                    setBc(!bc);
                }}>{prefix}BC</button>
                <Button Key={`Wf-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}BC`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Voltage'}>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ca ? 1 : 0.5, backgroundColor: getColor(`${prefix}CA`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('ca') >= 0 && x.Show == ca).forEach(x => props.CallBack(x))
                    setCa(!ca);
                }}>{prefix}CA</button>
                <Button Key={`Wf-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}CA`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
            </div>
        </div>
    );
}

const Button = (props: { Path: { Key: string, Path: JSX.Element, Show: boolean, Color: string }, Key: string, CallBack: (path) => void}) => {
    return (
        <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{
                backgroundColor: props.Path == undefined ? 'black' : props.Path.Color,
                opacity: props.Path == undefined || props.Path.Show ? 1 : 0.5
            }}
            disabled={props.Path == undefined}
            onClick={(evt) => props.CallBack(props.Path)}>{props.Key}</button>
    )
}