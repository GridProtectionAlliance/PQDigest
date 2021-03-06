﻿//******************************************************************************************************
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
import { scaleLinear, line, extent, axisLeft, axisBottom,select } from 'd3';
import _ from 'lodash';
import { PQDigest } from '../global';
import moment from 'moment';

const WaveformViewerD3Chart = (props: {
    EventID: number,
    Data: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CompareData: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    Units: string,
    ChartAction: PQDigest.ChartAction,
    DataType: 'Time' | 'Statistic' | 'Trending',
    Extent: PQDigest.D3Extent,
    Margin: { Left: number, Right: number, Top: number, Bottom: number },
    Width: number,
    Height: number,
    Hover: number,
    SetHover: (number: number) => void,
    Click: number,
    HandleChartAction: (value: number | PQDigest.D3Extent) => void
}) => {

    const chart = React.useRef(null);
    const [xStart, setXStart] = React.useState<number>(null)
    const [xEnd, setXEnd] = React.useState<number>(null)

    function OnHover(evt: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        evt.preventDefault();
        props.SetHover(evt.nativeEvent.offsetX);
    }

    function HandleChartAction(evt: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        evt.preventDefault();
        if (props.ChartAction == 'Click')
            props.HandleChartAction(x.invert(evt.nativeEvent.offsetX));
        else if (props.ChartAction == 'Pan')
            OnPan(evt)
        else if (props.ChartAction == 'ZoomX')
            OnZoom(evt)


    }

    function OnPan(evt: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        evt.persist();
        $(chart.current).on('mousemove', (e) => {
            props.HandleChartAction({
                X: {
                    Min: x.invert(x.range()[0] + evt.clientX - e.clientX),
                    Max: x.invert(x.range()[1] + evt.clientX - e.clientX)
                }, Y: props.Extent.Y
            });
        });
    }

    function StopDrag(evt) {
        evt.preventDefault();
        $(chart.current).off('mousemove');
        if (props.ChartAction == "ZoomX") {
            props.HandleChartAction({
                X: {
                    Min: Math.min(x.invert(xStart), x.invert(xEnd)),
                    Max: Math.max(x.invert(xStart), x.invert(xEnd))
                },Y: props.Extent.Y
            });

            setXStart(null);
            setXEnd(null);

        }

    }

    function OnZoom(evt: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        evt.persist();
        setXStart(evt.nativeEvent.offsetX);
        $(chart.current).on('mousemove', (e) => {
            setXEnd(e.offsetX);
        });
    }

    let x = scaleLinear().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
    let y = scaleLinear().rangeRound([props.Height - props.Margin.Bottom, props.Margin.Top]);

    let yextent = [1000000, -1000000];
    let xextent = [0, 1];

    if (props.Data.length > 0)
        xextent = [props.Data[0].Data[0][0], props.Data[0].Data[props.Data[0].Data.length - 1][0]];

    if (props.Extent.X.Min != null)
        xextent = [props.Extent.X.Min, xextent[1]];

    if (props.Extent.X.Max != null)
        xextent = [xextent[0], props.Extent.X.Max];


    $.each(props.Data.filter(x => x.Show), (index, value) => {
        let newyexent = extent(value.Data.filter(y => y[0] >= xextent[0] && y[0] <= xextent[1]), d => d[1]);

        if (newyexent[0] != undefined && parseFloat(newyexent[0].toString()) < yextent[0]) yextent[0] = parseFloat(newyexent[0].toString())
        if (newyexent[1] != undefined && parseFloat(newyexent[1].toString()) > yextent[1]) yextent[1] = parseFloat(newyexent[1].toString())
    });

    $.each(props.CompareData.filter(x => x.Show), (index, value) => {
        let newyexent = extent(value.Data.filter(y => y[0] >= xextent[0] && y[0] <= xextent[1]), d => d[1]);

        if (newyexent[0] != undefined && parseFloat(newyexent[0].toString()) < yextent[0]) yextent[0] = parseFloat(newyexent[0].toString())
        if (newyexent[1] != undefined && parseFloat(newyexent[1].toString()) > yextent[1]) yextent[1] = parseFloat(newyexent[1].toString())
    });

    let yspan  = yextent[1] - yextent[0];

    yextent = [yextent[0] - yspan/10, yextent[1] + yspan/10]

    y.domain(yextent);
    x.domain(xextent);

    let linefunc = line<[number, number]>().x(d => x(d[0])).y(d => y(d[1]));

    let newPaths = [];
    $.each(props.Data.filter(x => x.Show), (index, value) => {
            newPaths.push( <path key={value.Key} fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke={value.Color} d={linefunc(value.Data.filter(d => d[0] >= x.domain()[0] && d[0] <= x.domain()[1]))} />);
    });

    let comparePaths = [];
    $.each(props.CompareData.filter(x => x.Show), (index, value) => {
        comparePaths.push(<path key={value.Key} fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke={value.Color} d={linefunc(value.Data.filter(d => d[0] >= x.domain()[0] && d[0] <= x.domain()[1]))} />);
    });

    const svg = select(chart.current);
    svg.selectAll("g.axis").remove();
    svg.append("g")
        .classed("axis",true)
        .attr("transform", "translate(0," + (props.Height - props.Margin.Bottom) + ")")
        .call(axisBottom(x).ticks(10).tickFormat((value, index) => {
            if (index == 0)
                return moment(value as number).format("HH:mm:ss.SSS")
            else
                return moment(value as number).format("ss.SSS")
        }))
    svg.append("g")
        .classed("axis", true)
        .attr("transform", `translate(${props.Margin.Left},0)`)
        .call(axisLeft(y).ticks(8))

    return (
        <svg ref={chart} width={props.Width} height={props.Height} onMouseOver={OnHover} onMouseDown={HandleChartAction} onMouseUp={StopDrag} style={{ fill: 'none'}}>
            {/* Chart borders */}
            <path  stroke='black' strokeWidth='0.5px' d={`M ${props.Margin.Left} ${props.Margin.Top} H ${props.Width - props.Margin.Right} V ${props.Height - props.Margin.Bottom} H ${props.Margin.Left} V ${props.Margin.Top}`} style={{ shapeRendering: 'crispEdges'}} />
            {/*<text fill="black" fontSize="small" transform={`rotate(-90 0,0)`} y={15} x={-(props.Height + 35) / 2}>{props.Units}</text>*/}
            <text fill="black" fontSize="small" y={props.Height - 15} x='10'>{props.Units}</text>
            {newPaths}
            {comparePaths}

            {/*yTicks*/}

            <path stroke='black' d={`M ${props.Hover},${props.Margin.Top} V ${props.Height- props.Margin.Bottom}`} style={{ stroke: 'black', opacity: props.Hover < props.Margin.Left? 0: 1 }} strokeWidth={0.5}></path>
            <path stroke='black' d={`M ${x(props.Click)},${props.Margin.Top} V ${props.Height - props.Margin.Bottom}`} style={{ stroke: 'red', opacity: x(props.Click) < props.Margin.Left ? 0 : 1 }} strokeWidth={1}></path>

            <text fill="black" fontSize="small" x={props.Width / 2} y={props.Height - 5}>Time</text>

            <rect stroke='black' x={Math.min(xStart, xEnd)} y={props.Margin.Top} width={Math.abs(xEnd - xStart)} height={props.Height - props.Margin.Top - props.Margin.Bottom} style={{ stroke: 'grey', fill: 'grey', opacity: 0.5 }}></rect>
        </svg>
    );
}

export default WaveformViewerD3Chart;

