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
import { max, scaleLinear } from 'd3';
import moment from 'moment';
import React from 'react';
interface iData {
    Year: number,
    Month: string,
    Sag: number, 
    Swell: number, 
    Transient: number,
    Interruption: number,
    Fault: number,
    Total: number
}
const EventCountsByMonth = (props: { Width: number, Height: number }) => {
    let margin = { top: 15, right: 20, bottom: 40, left: 30 };
    let svgWidth = props.Width - margin.left - margin.right;
    let svgHeight = props.Height - margin.top - margin.bottom;

    const [paths, setPaths] = React.useState<Array<JSX.Element>>([]);
    const [axisPaths, setAxisPaths] = React.useState<Array<JSX.Element>>([]);
    const [axisTicks, setAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [yaxisTicks, setYAxisTicks] = React.useState<Array<JSX.Element>>([]);

    React.useEffect(() => {
        setPaths([]);

        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/EventCountsByMonth`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((data: Array<iData>) => DrawChart(data));


        return () => {
            if (handle?.abort != null) handle.abort();
        }
    }, []);

    function DrawChart(data: Array<iData>) {
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([0, max(data.map(x => x.Total))]);

        let yticks = [];
        for (let i = 0; i <= y.domain()[1]; i = i + (Math.floor(y.domain()[1] / 10) == 0 ? 1 : Math.floor(y.domain()[1] / 10) )) {
            yticks.push(
                <g key={i} className="tick" opacity="1" transform={`translate(${margin.left},${y(i)})`}>
                    <path stroke='black' d={`M -7 0 H ${svgWidth}`} strokeWidth={0.25}></path>
                    <text fill="black" fontSize="small"  x="-15" dy="0.32em" textAnchor='middle'>{i}</text>
                </g>);

        }
        setYAxisTicks(yticks);

        let ticks = data.map((x, index) => {
            return (
                <g key={index} className="tick" opacity="1" transform={`translate(${margin.left + svgWidth * (index + 1) / 12},${svgHeight})`}>
                    <line stroke='black' y2="6"></line>
                </g>
            )
        });
        setAxisTicks(ticks);

        let labels = data.map((x, index) => {
            return (
                <g key={index} className="tick" opacity="1" transform={`translate(${margin.left + (svgWidth * ((index + 0.25)) / 12)},${svgHeight})`}>
                    <text fill="black" fontSize="small"  y2="6" dy="1em">{x.Month}</text>
                </g>
            )
        });

        setAxisPaths(labels);

        let boxes = data.map((x, index) => {
            return (
                <g style={{ cursor: 'pointer' }} key={index} onClick={() => {
                    let start = moment(x.Year.toString() + "-" + x.Month + '-1', 'YYYY-MMM-D');
                    let end = moment(x.Year.toString() + "-" + x.Month + '-1', 'YYYY-MMM-D');
                    end.add(1, 'month');
                    end.add(-1, 'second');
                    window.location.href = `${homePath}EventSearch?startDate=${start.format('YYYY-MM-DD')}&endDate=${end.format('YYYY-MM-DD')}`;
                }}>
                    <rect stroke='black' x={margin.left + (svgWidth * ((data.map(datum => datum.Month).indexOf(x.Month) + 0.35)) / 12)} y={y(x.Sag)} width={20} height={svgHeight - y(x.Sag)} fill={getColor('sag')}/>
                    <rect stroke='black' x={margin.left + (svgWidth * ((data.map(datum => datum.Month).indexOf(x.Month) + 0.35)) / 12)} y={y(x.Sag) - (svgHeight - y(x.Swell))} width={20} height={svgHeight - y(x.Swell)} fill={getColor('swell')}/>
                    <rect stroke='black' x={margin.left + (svgWidth * ((data.map(datum => datum.Month).indexOf(x.Month) + 0.35)) / 12)} y={y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient))} width={20} height={svgHeight - y(x.Transient)} fill={getColor('Transient')}/>
                    <rect stroke='black' x={margin.left + (svgWidth * ((data.map(datum => datum.Month).indexOf(x.Month) + 0.35)) / 12)} y={y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)) - (svgHeight - y(x.Fault))} width={20} height={svgHeight - y(x.Fault)} fill={getColor('Fault')}/>
                    <rect stroke='black' x={margin.left + (svgWidth * ((data.map(datum => datum.Month).indexOf(x.Month) + 0.35)) / 12)} y={y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)) - (svgHeight - y(x.Fault)) - (svgHeight - y(x.Interruption))} width={20} height={svgHeight - y(x.Interruption)} fill={getColor('Interruption')}/>
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
        <div style={{ height: props.Height, width: props.Width, textAlign: 'center' }}>

            <svg width={props.Width} height={props.Height} style={{fill: 'none',shapeRendering: 'crispEdges'}}>

                {/* Chart borders */}
                <path stroke='black' d={`M ${margin.left} ${margin.top} H ${svgWidth + margin.left} V ${svgHeight} H ${margin.left} V ${margin.top}`}/>

                {/* XAxis ticks*/}
                <g className="tick" opacity="1" transform={`translate(${margin.left},${svgHeight})`}>
                    <line stroke='black' y2="6"></line>
                </g>
                {axisTicks}

                {/* YAxis ticks and Labels*/}
                {yaxisTicks}

                {/* XAxis Labels*/}
                <g>{axisPaths}</g>

                {/* Chart Legend */}
                <rect stroke='black' x={margin.left + 10} y={svgHeight + 25} width={15} height={15} fill={getColor('sag')} />
                <text fill="black" fontSize="small"  y={svgHeight + 38} x={margin.left + 30} >Sag</text>
                <rect stroke='black' x={margin.left + 70} y={svgHeight + 25} width={15} height={15} fill={getColor('swell')} />
                <text fill="black" fontSize="small"  y={svgHeight + 38} x={margin.left + 90} >Swell</text>
                <rect stroke='black' x={margin.left + 140} y={svgHeight + 25} width={15} height={15} fill={getColor('transient')} />
                <text fill="black" fontSize="small"  y={svgHeight + 38} x={margin.left + 160} >Transient</text>
                <rect stroke='black' x={margin.left + 240} y={svgHeight + 25} width={15} height={15} fill={getColor('fault')} />
                <text fill="black" fontSize="small"  y={svgHeight + 38} x={margin.left + 260} >Fault</text>
                <rect stroke='black' x={margin.left + 320} y={svgHeight + 25} width={15} height={15} fill={getColor('interruption')} />
                <text fill="black" fontSize="small"  y={svgHeight + 38} x={margin.left + 340} >Interruption</text>

                {/* Stacked Bars */}
                {paths}

                {/* Line Above Stacked Bars 
                <path fill='none' strokeLinejoin='round' strokeWidth='3' stroke='darkblue' d={totalPath} />
                */}
            </svg>

        </div>
    )
}

export default EventCountsByMonth;