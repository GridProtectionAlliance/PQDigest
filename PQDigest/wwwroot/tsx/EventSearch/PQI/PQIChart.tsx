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
import * as d3 from 'd3';
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

const PQIChart = (props: { Width: number, Height: number,Points: Point[], Curve: Point[] }) => {
    const chart = React.useRef(null);
    const margin = { top: 15, right: 30, bottom: 40, left: 50 };
    const svgWidth = props.Width - margin.left - margin.right;
    const svgHeight = props.Height - margin.top - margin.bottom;
    const xmax = (props.Curve.length > 0 ? d3.max(props.Curve.map(a => a.Duration)):4)
    const x = d3.scaleLinear().range([margin.left, svgWidth + margin.left]).domain([0, xmax]);
    const y = d3.scaleLinear().rangeRound([svgHeight, margin.top]).domain([0,1.3]);
    
    React.useEffect(() => {
        d3.select(chart.current).selectAll('svg').remove();
        const svg = d3.select(chart.current)
            .append('svg').attr('width', props.Width).attr('height', props.Height);

        let clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "pqiclip")
            .append("svg:rect")
            .attr("width", svgWidth)
            .attr("height", svgHeight - margin.top)
            .attr("x", margin.left)
            .attr("y", margin.top);

        let scatter = svg.append('g')
            .attr("clip-path", "url(#pqiclip)")
            .attr('id', 'chartdata');


        svg.selectAll("g.xaxis").remove();
        const xg = svg.append("g")
            .classed("xaxis", true)
            .attr("transform", "translate(0," + (props.Height - margin.bottom - margin.top) + ")");

        const xAxis = xg.call(d3.axisBottom(x).tickSize(-(svgHeight - margin.top)));
        xg.append('text').text('Duration(s)').attr('x', (svgWidth - margin.right) / 2 + margin.left).attr('y', margin.bottom / 2).attr('fill', 'black').style('font-size', 'small');

        svg.selectAll("g.yaxis").remove();
        const yg = svg.append("g")
            .classed("yaxis", true)
            .attr("transform", `translate(${margin.left},0)`)

        const yAxis = yg.call(d3.axisLeft(y).ticks(8).tickSize(-(svgWidth)));
        yg.append('text').text('Per Unit Voltage').attr('transform', 'rotate(-90 0,0)').attr('x', -(svgHeight - margin.bottom) / 2 + margin.top).attr('y', -margin.left * 3 / 4).attr('fill', 'black').style('font-size', 'small');

        svg.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0")

        const lineFunc = d3.line<Point>().x(xd => x(xd.Duration)).y(yd => y(yd.Magnitude));
        const lines = scatter.selectAll('path')
            .data([props.Curve])
            .enter()
            .append('path')
            .attr('stroke', 'red')
            .attr('fill', 'none')
            .attr('d', (d) => lineFunc(d));

        if (props.Curve.length === 0) {
            const lines = scatter.selectAll('g.line')
                .data([[
                    { Magnitude: 0, Duration: 0 },
                    { Magnitude: 0, Duration: 0.15 },
                    { Magnitude: 0.45, Duration: 0.15 },
                    { Magnitude: 0.45, Duration: 0.3 },
                    { Magnitude: 0.65, Duration: 0.3 },
                    { Magnitude: 0.65, Duration: 2 },
                    { Magnitude: 0.75, Duration: 2 },
                    { Magnitude: 0.75, Duration: 3 },
                    { Magnitude: 0.90, Duration: 3 },
                    { Magnitude: 0.90, Duration: 4 }
                ], [
                    { Magnitude: 1.2, Duration: 0 },
                    { Magnitude: 1.2, Duration: 0.20 },
                    { Magnitude: 1.175, Duration: 0.20 },
                    { Magnitude: 1.175, Duration: 0.50 },
                    { Magnitude: 1.15, Duration: 0.50 },
                    { Magnitude: 1.15, Duration: 1 },
                    { Magnitude: 1.10, Duration: 1 },
                    { Magnitude: 1.10, Duration: 4 }
                    ]])
                .enter()
                .append('g')
                .attr('class', 'line')
                .append('path')
                .attr('class', 'line')
                .attr('stroke', 'red')
                .attr('fill', 'none')
                .attr('d', (d) => {

                   return lineFunc(d)
                });

        }

        const circles = scatter.selectAll('g.points')
            .data([props.Points])
            .enter()
            .append('g').attr('class', 'points')
            .selectAll('circle')
            .data(d => d)
            .enter()
            .append('circle')
            .attr('r', 5)
            .style('cursor', 'pointer')
            .attr('fill', 'blue')
            .attr('cx', d => x(d.Duration))
            .attr('cy', d => y(d.Magnitude));

    }, [props.Points, props.Curve]);


    function GetPath(data: Point[]): string {
        let linefunc = d3.line<Point>().x(d => x(d.Duration)).y(d => y(d.Magnitude));
        return linefunc(data)
    }

    function BuildMadDurCircles(data: Point[]) {
        let circles = data.map((point, index) => <circle key={index} className="dot" r={3} cx={x(point.Duration)} cy={y(point.Magnitude)} fill='blue' />);
        return circles;
    }

    try {
        return (
            <div ref={chart} style={{ height: props.Height, width: props.Width }}>
            </div>
        )
    }
    catch (err) {
        return err;
    }
}

export default PQIChart;