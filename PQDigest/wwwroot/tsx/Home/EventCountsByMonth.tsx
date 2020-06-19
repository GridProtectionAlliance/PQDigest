//******************************************************************************************************
//  EventCountsByMonth.tsx - Gbtc
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
//  06/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { scaleOrdinal, scaleLinear, select, axisBottom, max, line } from 'd3';
interface iData {
    month: string,
    sag: number, 
    swell: number, 
    transient: number,
    interruption: number,
    fault: number,
    total: number
}
const EventCountsByMonth = (props: { Width: number, Height: number }) => {
    let margin = { top: 20, right: 30, bottom: 50, left: 30 };
    let svgWidth = props.Width - margin.left - margin.right;
    let svgHeight = props.Height - margin.top - margin.bottom;

    const [totalPath, setTotalPath] = React.useState<string>('');
    const [paths, setPaths] = React.useState<Array<JSX.Element>>([]);
    const [hidden, setHidden] = React.useState<boolean>(false);
    const [axisPaths, setAxisPaths] = React.useState<Array<JSX.Element>>([]);
    const [axisTicks, setAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [yaxisTicks, setYAxisTicks] = React.useState<Array<JSX.Element>>([]);

    React.useEffect(() => {
        //setHidden(true);
        setPaths([]);
        return GetData();
    }, []);

    function GetData() {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/EventCountsByMonth`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((data: Array<iData>) => DrawChart(data));


        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }

    function DrawChart(data: Array<iData>) {

        //let series = data[Object.keys(data)[0]];
        //let x = scaleOrdinal().rangeRound([margin.left, svgWidth + margin.left]).domain(data.map(x => x.month));
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([0, max(data.map(x => x.total))]);

        let yticks = [];
        for (let i = 0; i < y.domain()[1]; i = i + 5) {
            yticks.push(
                <g key={i} className="tick" opacity="1" transform={`translate(${margin.left},${y(i)})`}>
                    <line stroke="gray" x2="-6"></line>
                    <text fill="gray" x="-30" dy="0.32em">{i}</text>
                </g>);

        }
        setYAxisTicks(yticks);

        let ticks = data.map((x, index) => {
            return (
                <g key={index} className="tick" opacity="1" transform={`translate(${margin.left + svgWidth * (index + 1) / 12},${svgHeight})`}>
                    <line y2="6" stroke="gray" strokeWidth={2}></line>
                </g>
            )
        });
        setAxisTicks(ticks);

        let labels = data.map((x, index) => {
            return (
                <g key={index} className="tick" opacity="1" transform={`translate(${margin.left + (svgWidth * ((index + 0.25)) / 12)},${svgHeight})`}>
                    <text y2="6" fill="gray" dy="1em">{x.month}</text>
                </g>
            )
        });

        setAxisPaths(labels);

        let linefunc = line<iData>().x(d => margin.left + (svgWidth * ((data.map(datum => datum.month).indexOf(d.month) + 0.5)) / 12)).y(d => y(d.total));
        setTotalPath(linefunc(data));

        let boxes = data.map((x, index) => {
            return (
                <g key={index} onClick={() => { }}>
                    <rect x={margin.left + (svgWidth * ((data.map(datum => datum.month).indexOf(x.month) + 0.35)) / 12)} y={y(x.sag)} width={20} height={svgHeight - y(x.sag)} fill={getColor('sag')}/>
                    <rect x={margin.left + (svgWidth * ((data.map(datum => datum.month).indexOf(x.month) + 0.35)) / 12)} y={y(x.sag) - (svgHeight - y(x.swell))} width={20} height={svgHeight - y(x.swell)} fill={getColor('swell')}/>
                    <rect x={margin.left + (svgWidth * ((data.map(datum => datum.month).indexOf(x.month) + 0.35)) / 12)} y={y(x.sag) - (svgHeight - y(x.swell)) - (svgHeight - y(x.transient))} width={20} height={svgHeight - y(x.transient)} fill={getColor('Transient')}/>
                    <rect x={margin.left + (svgWidth * ((data.map(datum => datum.month).indexOf(x.month) + 0.35)) / 12)} y={y(x.sag) - (svgHeight - y(x.swell)) - (svgHeight - y(x.transient)) - (svgHeight - y(x.fault))} width={20} height={svgHeight - y(x.fault)} fill={getColor('Fault')}/>
                    <rect x={margin.left + (svgWidth * ((data.map(datum => datum.month).indexOf(x.month) + 0.35)) / 12)} y={y(x.sag) - (svgHeight - y(x.swell)) - (svgHeight - y(x.transient)) - (svgHeight - y(x.fault)) - (svgHeight - y(x.interruption))} width={20} height={svgHeight - y(x.interruption)} fill={getColor('Interruption')}/>
                </g>
            )
        });

        setPaths(boxes);


    }

    function getColor(type: string) {
        if (type.toLowerCase() == "sag") return 'purple';
        if (type.toLowerCase() == "swell") return 'green';
        if (type.toLowerCase() == "transient") return 'orange';
        if (type.toLowerCase() == "interruption") return 'red';
        if (type.toLowerCase() == "fault") return 'blue';
        else return '#000000';
    }

    return (
        <div style={{ height: props.Height, width: props.Width, textAlign: 'center' /*, margin: '0x', padding: '0px'*/ }} hidden={hidden}>
            <svg width={props.Width} height={props.Height}>
                {/* Chart header */}
                <text y={15} x={props.Width / 2 - 125} stroke="gray">Historical Event Counts by Month</text>

                {/* Chart borders */}
                <line x1={margin.left} x2={svgWidth + margin.right} y1={svgHeight} y2={svgHeight} stroke="gray" strokeWidth={2} />
                <line x1={margin.left} x2={svgWidth + margin.right} y1={margin.top} y2={margin.top} stroke="gray" strokeWidth={2} />
                <line x1={margin.left} x2={margin.left} y1={margin.top} y2={svgHeight} stroke="gray" strokeWidth={2} />
                <line x1={svgWidth + margin.right} x2={svgWidth + margin.right} y1={margin.top} y2={svgHeight} stroke="gray" strokeWidth={2} />

                {/* Chart Legend */}
                <rect x={margin.left + 10} y={svgHeight + 25} width={15} height={15} fill={getColor('sag')} />
                <text y={svgHeight + 38} x={margin.left + 30} stroke="gray">Sag</text>
                <rect x={margin.left + 70} y={svgHeight + 25} width={15} height={15} fill={getColor('swell')} />
                <text y={svgHeight + 38} x={margin.left + 90} stroke="gray">Swell</text>
                <rect x={margin.left + 140} y={svgHeight + 25} width={15} height={15} fill={getColor('transient')} />
                <text y={svgHeight + 38} x={margin.left + 160} stroke="gray">Transient</text>
                <rect x={margin.left + 240} y={svgHeight + 25} width={15} height={15} fill={getColor('fault')} />
                <text y={svgHeight + 38} x={margin.left + 260} stroke="gray">Fault</text>
                <rect x={margin.left + 320} y={svgHeight + 25} width={15} height={15} fill={getColor('interruption')} />
                <text y={svgHeight + 38} x={margin.left + 340} stroke="gray">Interruption</text>

                {paths}
                <path fill='none' strokeLinejoin='round' strokeWidth='3' stroke='darkblue' d={totalPath} />

                <g className="tick" opacity="1" transform={`translate(${margin.left},${svgHeight})`}>
                    <line y2="6" stroke="gray" strokeWidth={2}></line>
                </g>
                {axisTicks}
                {yaxisTicks}
                <g>{axisPaths}</g>
            </svg>

        </div>
    )
}

export default EventCountsByMonth;