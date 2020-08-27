//******************************************************************************************************
//  PQIChart.tsx - Gbtc
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
//  07/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { scaleLinear, min, max, line } from 'd3';
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

export interface Point {
    Magnitude: number,
    Duration: number
}

interface MagDurCurve {
    Name: string,
    Visible: boolean,
    Color: string,
    Path: string
}

const PQIChart = (props: { Width: number, Height: number, EventID: number, Points: Point[], Curve: Point[] }) => {

    const margin = { top: 15, right: 30, bottom: 40, left: 50 };
    const svgWidth = props.Width - margin.left - margin.right;
    const svgHeight = props.Height - margin.top - margin.bottom;
    const xmax = (props.Curve.length > 0 ? max(props.Curve.map(a => a.Duration)):3)
    const x = scaleLinear().range([margin.left, svgWidth + margin.left]).domain([0, xmax]);
    const y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([0,1.1]);

    React.useEffect(() => {
    }, []);


    function BuildXAxis() {
        let ticks = []
        for (let i = x.domain()[0]; i <= x.domain()[1]; i++) {
            ticks.push(
                <g key={i} className="tick" transform={`translate(${x(i)},${svgHeight})`} style={{ opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 }}>
                    <path stroke='black' d={`M 0,6 V -${svgHeight - margin.top}`} strokeWidth={0.25}></path>
                    <text fill="black" fontSize="small" y="20" textAnchor='middle'>{i}</text>
                </g>
            );

        }
        return ticks;
    }

    function BuildYAxis() {
        let yticks = [];
        for (let i = y.domain()[0]; i <= y.domain()[1]; i = 0.5 + i) {
            yticks.push(
                <g key={i} className="tick" transform={`translate(${margin.left},${y(i)})`} style={{ opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1}}>
                    <path stroke='black' d={`M -6,0 H ${svgWidth}`} strokeWidth={0.25}></path>
                    <text fill="black" fontSize="small" x="-15" dy="0.32em" textAnchor='middle'>{i.toFixed(1)}</text>
                </g>);

        }
        return yticks;
    }

    function GetPath(data: Point[]): string {
        let linefunc = line<Point>().x(d => x(d.Duration)).y(d => y(d.Magnitude));
        return linefunc(data)
    }

    function BuildMadDurCircles(data: Point[]) {
        let circles = data.map((point, index) => <circle key={index} className="dot" r={3} cx={x(point.Duration)} cy={y(point.Magnitude)} fill='blue' />);
        return circles;
    }

    try {
        return (
            <div style={{ height: props.Height, width: props.Width }}>
                <svg id="PQIChart" width={props.Width} height={props.Height} style={{ fill: 'none', shapeRendering: 'crispEdges' }}>

                    {/* Draw chart data first */}
                    <g>
                        <path d={GetPath(props.Curve)} stroke='red' />
                        {BuildMadDurCircles(props.Points)}
                    </g>

                    {/* XAxis ticks*/}
                    {BuildXAxis()}
                    <text fill="black" fontSize="small" x={svgWidth / 2} y={svgHeight + margin.top + 20}>Duration (s)</text>
                    {/* YAxis ticks and Labels*/}
                    {BuildYAxis()}
                    <text fill="black" fontSize="small" transform={`rotate(-90 0,0)`} y={margin.left - 35} x={-svgHeight / 2 - margin.bottom}>Per Unit Voltage</text>
                    {/* Chart borders */}
                    <path stroke='black' d={`M ${margin.left} ${margin.top} H ${svgWidth + margin.left} V ${svgHeight} H ${margin.left} V ${margin.top}`} />

                </svg>

            </div>
        )
    }
    catch (err) {
        return err;
    }
}

export default PQIChart;