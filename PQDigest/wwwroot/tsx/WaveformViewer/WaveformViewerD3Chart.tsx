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

const WaveformViewerD3Chart = (props: {
    EventID: number,
    Data: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CompareData: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    Units: string,
    DataType: 'Time' | 'Statistic' | 'Trending',
    Margin: { Left: number, Right: number, Top: number, Bottom: number },
    Width: number,
    Height: number,
    Hover: number,
    SetHover: (number) => void,
    Click: number,
    SetClick: (number) => void

}) => {


    const chart = React.useRef(null);


    function OnHover(evt: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        evt.preventDefault();
        props.SetHover(evt.nativeEvent.offsetX);
    }

    function OnClick(evt: React.MouseEvent<SVGSVGElement, MouseEvent>) {
        evt.preventDefault();
        props.SetClick(x.invert(evt.nativeEvent.offsetX));
    }


    let x = scaleLinear().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
    let y = scaleLinear().rangeRound([props.Height - props.Margin.Bottom, props.Margin.Top]);

    let yextent = [1000000, -1000000];
    let xextent = [9007199254740991, -9007199254740990];

    $.each(props.Data.filter(x => x.Show), (index, value) => {
        let newyexent = extent(value.Data, d => d[1]);
        let newxexent = extent(value.Data, d => d[0]);

        if (parseFloat(newyexent[0].toString()) < yextent[0]) yextent[0] = parseFloat(newyexent[0].toString())
        if (parseFloat(newyexent[1].toString()) > yextent[1]) yextent[1] = parseFloat(newyexent[1].toString())
        if (parseFloat(newxexent[0].toString()) < xextent[0]) xextent[0] = parseFloat(newxexent[0].toString())
        if (parseFloat(newxexent[1].toString()) > xextent[1]) xextent[1] = parseFloat(newxexent[1].toString())
    });

    $.each(props.CompareData.filter(x => x.Show), (index, value) => {
        let newyexent = extent(value.Data, d => d[1]);
        let newxexent = extent(value.Data, d => d[0]);

        if (parseFloat(newyexent[0].toString()) < yextent[0]) yextent[0] = parseFloat(newyexent[0].toString())
        if (parseFloat(newyexent[1].toString()) > yextent[1]) yextent[1] = parseFloat(newyexent[1].toString())
        //if (parseFloat(newxexent[0].toString()) < xextent[0]) xextent[0] = parseFloat(newxexent[0].toString())
        //if (parseFloat(newxexent[1].toString()) > xextent[1]) xextent[1] = parseFloat(newxexent[1].toString())
    });

    let yspan  = yextent[1] - yextent[0];

    //yextent = [(yextent[0] < 0 ? 1.20 * yextent[0] : 0.8 * yextent[0]), 1.20 * yextent[1]]
    yextent = [yextent[0] - yspan/10, yextent[1] + yspan/10]

    y.domain(yextent);
    x.domain(xextent);

    let linefunc = line<[number, number]>().x(d => x(d[0])).y(d => y(d[1]));

    let newPaths = [];
    $.each(props.Data.filter(x => x.Show), (index, value) => {
            newPaths.push( <path key={value.Key} fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke={value.Color} d={linefunc(value.Data)} />);
    });

    let comparePaths = [];
    $.each(props.CompareData.filter(x => x.Show), (index, value) => {
        comparePaths.push(<path key={value.Key} fill='none' strokeLinejoin='round' strokeWidth='1.5' stroke={value.Color} d={linefunc(value.Data)} />);
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
            <svg width={props.Width} height={props.Height} onMouseOver={OnHover} onMouseDown={OnClick} style={{ fill: 'none', stroke: 'black', strokeWidth: '1px',  fontWeight: 'lighter', fontSize: 'small'}}>
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

            </svg>
    );
}

export default WaveformViewerD3Chart;

