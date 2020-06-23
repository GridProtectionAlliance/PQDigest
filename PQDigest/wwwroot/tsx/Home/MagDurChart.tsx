//******************************************************************************************************
//  MagDurChart.tsx - Gbtc
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
//  06/23/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { scaleLog, scaleLinear, max, line } from 'd3';
import _ from 'lodash';

interface iData {
    ID: number,
    Name: string, 
    Visible: boolean,
    Color: string,
    PerUnitMagnitude: number, 
    DurationSeconds: number,
    LoadOrder: number
}

interface MagDurCurve {
    Name: string,
    Visible: boolean,
    Color: string,
    Path: string
}

const MagDurChart = (props: { Width: number, Height: number }) => {
    let margin = { top: 15, right: 20, bottom: 40, left: 30 };
    let svgWidth = props.Width - margin.left - margin.right;
    let svgHeight = props.Height - margin.top - margin.bottom;

    const [xAxisTicks, setXAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [yAxisTicks, setYAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [magDurCurves, setMagDurCurves] = React.useState<MagDurCurve[]>([]);

    React.useEffect(() => {
        BuildYAxis();
        BuildXAxis();

        let handle1 = GetMagDurCurves();
        handle1.done((data: iData[]) => BuildMagDurCurve(data));

        return function () {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, []);

    function GetMagDurCurves(): JQuery.jqXHR<iData[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MagDurCurves`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function xAxisText(value: number): string {
        if (value < 0.001) return (value * 1000000).toFixed(0) + 'µ';
        if (value > 1000 && value < 1000000) return (value / 1000).toFixed(0) + 'k';
        if (value > 100000) return (value / 1000000).toFixed(0) + 'M';
        if (value < 1) return value.toPrecision(1).toString()
        return value.toString()
    }

    function BuildXAxis() {
        let x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([0.00001, 1000000]);
        let ticks = []
        for (let i = x.domain()[0]; i <= x.domain()[1]; i = i * 10) {
            ticks.push(
                <g key={i} className="tick" opacity="1" transform={`translate(${x(i)},${svgHeight})`} style={{}}>
                    <path d={`M 0,6 V -${svgHeight - margin.top}`} strokeWidth={0.25}></path>
                    <text y="20" textAnchor='middle'>{xAxisText(i)}</text>

                </g>
            );

        }
        setXAxisTicks(ticks);
    }

    function BuildYAxis() {
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([0, /*max(data.map(x => x.magnitude))*/2]);
        let yticks = [];
        for (let i = y.domain()[0]; i <= y.domain()[1]; i++) {
            yticks.push(
                <g key={i} className="tick" opacity="1" transform={`translate(${margin.left},${y(i)})`}>
                    <path d={`M -6,0 H ${svgWidth}`} strokeWidth={0.25}></path>
                    <text x="-15" dy="0.32em" textAnchor='middle'>{i}</text>
                </g>);

        }
        setYAxisTicks(yticks);
    }

    function BuildMagDurCurve(data: iData[]) {
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([0, /*max(data.map(x => x.magnitude))*/2]);
        let x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([0.00001, 1000000]);
        let linefunc = line<iData>().x(d => x(d.DurationSeconds)).y(d => y(d.PerUnitMagnitude));
        let mdcs = _.groupBy(data, (d) => d.ID);
        let mdcss = Object.keys(mdcs).map((key) => { return { Name: mdcs[key][0].Name, Visible: mdcs[key][0].Visible, Color: mdcs[key][0].Color, Path: linefunc(mdcs[key].filter(d => d.PerUnitMagnitude >= y.domain()[0] && d.PerUnitMagnitude <= y.domain()[1] && d.DurationSeconds >= x.domain()[0] && d.DurationSeconds <= x.domain()[1])) } });
        setMagDurCurves(mdcss);
    }

    function DrawChart(data: Array<iData>) {

        //let series = data[Object.keys(data)[0]];

    }


    return (
        <div style={{ height: props.Height, width: props.Width, textAlign: 'center' }}>
            <svg width={props.Width} height={props.Height} style={{ fill: 'none', stroke: 'black', strokeWidth: '1px', shapeRendering: 'crispEdges', fontFamily: 'sans-serif', fontSize: 'small' }}>
                {/* Chart borders */}
                <path d={`M ${margin.left} ${margin.top} H ${svgWidth + margin.left} V ${svgHeight} H ${margin.left} V ${margin.top}`} />

                {/* XAxis ticks*/}
                {xAxisTicks}

                {/* YAxis ticks and Labels*/}
                {yAxisTicks}
                {
                    magDurCurves.map(mdc => (mdc.Visible ? <path key={mdc.Name} d={mdc.Path} stroke={mdc.Color} />:null))
                }
            </svg>

        </div>
    )
}

export default MagDurChart;