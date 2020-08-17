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
import { PQDigest } from '../global';

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


    let xTicks = [];
    let span = x.domain()[1] - x.domain()[0];
    for (let i = x.domain()[0]; i < x.domain()[1]; i += span / 7) {
        xTicks.push(
            <g key={i} className="tick" transform={`translate(${x(i)},${props.Height - props.Margin.Bottom})`} style={{ opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 }}>
                <path d={`M 0,6 V -6`} style={{ stroke: 'black' }} strokeWidth={0.5}></path>
                <text y="20" textAnchor='middle'>{moment('1970-01-01T00:00:00').add(i, 'milliseconds').format(props.DataType == 'Time' ? 'ss.SSS' : 'HH:ss')}</text>
            </g>
        );

    }

    let yTicks = [];
    let ySpan = (y.domain()[0] < 0 ? y.domain()[1] : y.domain()[1] - y.domain()[0]);
    let yMin = (y.domain()[0] < 0 ? 0 : y.domain()[0]);
    let divisor = 1;
    if (ySpan > 1000000) divisor = 1000000
    if (ySpan > 1000) divisor = 1000

    for (let i = yMin; i < y.domain()[1]; i += ySpan / (y.domain()[0] < 0 ? 3 : 6)) {
        yTicks.push(
            <g key={i}>
                <g key={i + 'pos'} className="tick" transform={`translate(${props.Margin.Left},${y(i)})`} style={{ opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 }}>
                    <path d={`M 6, 0 H -6`} style={{ stroke: 'black' }} strokeWidth={0.5}></path>
                    <text x="-15" dy="0.32em" textAnchor='middle'>{(i / divisor).toFixed(0) + (divisor == 1000 ? 'k' : '') + (divisor == 1000000 ? 'M' : '')}</text>
                </g>
                {(y.domain()[0] < 0 && i != 0 ?
                    <g key={i + 'neg'} className="tick" transform={`translate(${props.Margin.Left},${y(-i)})`} style={{ opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 }}>
                        <path d={`M 6, 0 H -6`} style={{ stroke: 'black' }} strokeWidth={0.5}></path>
                        <text x="-15" dy="0.32em" textAnchor='middle'>{-(i / divisor).toFixed(0) + (divisor == 1000 ? 'k' : '') + (divisor == 1000000 ? 'M' : '')}</text>

                    </g> : null)}
            </g>
        );

    }


    return (
            <svg ref={chart} width={props.Width} height={props.Height} onMouseOver={OnHover} onMouseDown={HandleChartAction} onMouseUp={StopDrag} style={{ fill: 'none', stroke: 'black', strokeWidth: '1px',  fontWeight: 'lighter', fontSize: 'small'}}>
                {/* Chart borders */}
                <path d={`M ${props.Margin.Left} ${props.Margin.Top} H ${props.Width - props.Margin.Right} V ${props.Height - props.Margin.Bottom} H ${props.Margin.Left} V ${props.Margin.Top}`} style={{ shapeRendering: 'crispEdges'}} />
                <text transform={`rotate(-90 0,0)`} y={15} x={-(props.Height + 35) / 2}>{props.Units}</text>
                {newPaths}
                {comparePaths}

                {xTicks}
                {yTicks}

                <path d={`M ${props.Hover},${props.Margin.Top} V ${props.Height- props.Margin.Bottom}`} style={{ stroke: 'black', opacity: props.Hover < props.Margin.Left? 0: 1 }} strokeWidth={0.5}></path>
                <path d={`M ${x(props.Click)},${props.Margin.Top} V ${props.Height - props.Margin.Bottom}`} style={{ stroke: 'red', opacity: x(props.Click) < props.Margin.Left ? 0 : 1 }} strokeWidth={1}></path>

                <text x={props.Width / 2} y={props.Height - 5}>Time</text>

                <rect x={Math.min(xStart, xEnd)} y={props.Margin.Top} width={Math.abs(xEnd - xStart)} height={props.Height - props.Margin.Top - props.Margin.Bottom} style={{ stroke: 'grey', fill: 'grey', opacity: 0.5 }}></rect>
            </svg>
    );
}

export default WaveformViewerD3Chart;

