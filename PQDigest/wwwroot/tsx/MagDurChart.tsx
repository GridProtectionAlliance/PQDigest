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
import { scaleLog, scaleLinear, max, line, event, zoomTransform, zoom, select } from 'd3';
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

const MagDurChart = (props: { Width: number, Height: number, Points: Point[] }) => {

    const margin = { top: 15, right: 20, bottom: 60, left: 40 };
    const svgWidth = props.Width - margin.left - margin.right;
    const svgHeight = props.Height - margin.top - margin.bottom;

    const [domains, setDomains] = React.useState<{ X: { Lower: number, Upper: number }, Y: { Lower: number, Upper: number } }>({ X: { Lower: 0.00001, Upper: 1000000 }, Y: { Lower: 0, Upper: 2.5 } });
    const [xAxisTicks, setXAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [yAxisTicks, setYAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [magDurCurveData, setMagDurCurveData] = React.useState<iData[]>([]);
    const [magDurCurves, setMagDurCurves] = React.useState<MagDurCurve[]>([]);
    const [magDurCircles, setMagDurCircles] = React.useState<JSX.Element[]>([]);

    React.useEffect(() => {

        let handle1 = GetMagDurCurves();
        handle1.done((data: iData[]) => {
            setMagDurCurveData(data);
            BuildMagDurCurve(data);
        });



        return function () {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, []);

    React.useEffect(() => {
        BuildYAxis();
        BuildXAxis();
        BuildMadDurCircles(props.Points);
        BuildMagDurCurve(magDurCurveData);
    }, [domains, props.Points])

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
        if (value < 0.0000001) return (value * 1000000000).toFixed(0) + 'n';
        if (value < 0.001) return (value * 1000000).toFixed(0) + 'µ';
        if (value > 1000 && value < 1000000) return (value / 1000).toFixed(0) + 'k';
        if (value > 100000) return (value / 1000000).toFixed(0) + 'M';
        if (value < 1) return value.toPrecision(1).toString()
        return value.toString()
    }

    function BuildXAxis() {
        let x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);

        let i = parseFloat(Math.pow(10, Math.floor(Math.log(domains.X.Lower) / Math.log(10))).toPrecision(1));
        let ticks = []
        let logDomain = x.domain().map(l => Math.log(l) / Math.log(10));
        let ldDiff = logDomain[1] - logDomain[0];
        for (; i <= domains.X.Upper; i = i * 10) {
            ticks.push(
                <g key={i} className="tick" transform={`translate(${x(i)},${svgHeight})`} style={{ opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 }}>
                    <path d={`M 0,6 V -${svgHeight - margin.top}`}  strokeWidth={0.25}></path>
                    <text y="20" textAnchor='middle'>{xAxisText(i)}</text>
                    {(ldDiff < 5 ?
                        <g>
                            {([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(num => <path key={num} d={`M ${/*Math.log(num * i) / Math.log(10) - Math.log(i) / Math.log(10)*/x(num * i) - x(i)},6 V -${svgHeight - margin.top}`} strokeWidth={0.25} />)}
                        </g>
                        : null)}
                </g>
            );

        }
        setXAxisTicks(ticks);
    }

    function BuildYAxis() {
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        let step = (y.domain()[1] - y.domain()[0] <= 1.5 ? 0.1 : 0.5);
        let yticks = [];
        for (let i = Math.floor(domains.Y.Lower); i <= domains.Y.Upper; i = step + i) {
            yticks.push(
                <g key={i} className="tick" transform={`translate(${margin.left},${y(i)})`} style={{ opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 }}>
                    <path d={`M -6,0 H ${svgWidth}`} strokeWidth={0.25}></path>
                    <text x="-15" dy="0.32em" textAnchor='middle'>{i.toFixed(1)}</text>
                </g>);

        }
        setYAxisTicks(yticks);
    }

    function BuildMagDurCurve(data: iData[]) {
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        let x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);

        let linefunc = line<iData>().x(d => x(d.DurationSeconds)).y(d => y(d.PerUnitMagnitude));
        let mdcs = _.groupBy(data, (d) => d.ID);
        let mdcss = Object.keys(mdcs).map((key) => { return { Name: mdcs[key][0].Name, Visible: mdcs[key][0].Visible, Color: mdcs[key][0].Color, Path: linefunc(mdcs[key]) } });
        setMagDurCurves(mdcss);
    }

    function BuildMadDurCircles(data: Point[]) {
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        let x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);
        let circles = data.filter(point => point.Magnitude >= domains.Y.Lower && point.Magnitude <= domains.Y.Upper && point.Duration >= domains.X.Lower && point.Duration <= domains.X.Upper).map((point, index) => <circle key={index} className="dot" r={3} cx={x(point.Duration)} cy={y(point.Magnitude)} fill='blue' />);
        setMagDurCircles(circles);
    }

    function handleZoom(evt) {
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        let x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);

        // use event.nativeEvent.offsetX and Y
        let zoomLocationY = evt.nativeEvent.offsetY;
        let zoomLocationX = evt.nativeEvent.offsetX;

        // event.deltaY positive is wheel down or out and negative is wheel up or in
        if (evt.deltaY < 0) {
            let domainXLength = (x.range()[1] - x.range()[0]) * 0.75;
            let domainYLength = (y.range()[1] - y.range()[0]) * 0.75;
            //console.log('handleZoom', { X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) }, Y: { Lower: zoomLocationY - domainYLength / 2, Upper: zoomLocationY + domainYLength / 2 } });

            setDomains({
                X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) },
                Y: { Lower: y.invert(zoomLocationY - domainYLength / 2), Upper: y.invert(zoomLocationY + domainYLength / 2) }
            });
        }
        else {
            let domainXLength = (x.range()[1] - x.range()[0]) * 1.25;
            let domainYLength = (y.range()[1] - y.range()[0]) * 1.25;
            //console.log('handleZoom', { X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) }, Y: { Lower: zoomLocationY - domainYLength / 2, Upper: zoomLocationY + domainYLength / 2 } });

            setDomains({
                X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) },
                Y: { Lower: y.invert(zoomLocationY - domainYLength / 2), Upper: y.invert(zoomLocationY + domainYLength / 2) }
            });
        }
    }

    function handleDrag(evt) {
        evt.preventDefault();

        if (evt.nativeEvent.offsetX < margin.left || evt.nativeEvent.offsetX > svgWidth + margin.left) return;
        if (evt.nativeEvent.offsetY < margin.top || evt.nativeEvent.offsetY > svgHeight + margin.top) return;

        evt.persist();
        let y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        let x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);

        $('#magDurChart').on('mousemove', (e) => {
            setDomains({
                X: {
                    Lower: x.invert(x(domains.X.Lower) + evt.clientX - e.clientX),
                    Upper: x.invert(x(domains.X.Upper) + evt.clientX - e.clientX)
                },
                Y: {
                    Lower: y.invert(y(domains.Y.Lower) + evt.clientY - e.clientY),
                    Upper: y.invert(y(domains.Y.Upper) + evt.clientY - e.clientY)
                }
            });
        });
    }

    function stopDrag(evt) {
        evt.preventDefault();
        $('#magDurChart').off('mousemove');
    }

    function resetZoom(evt) {
        setDomains({ X: { Lower: 0.00001, Upper: 1000000 }, Y: { Lower: 0, Upper: 2.5 } });
    }

    function hideReset(): boolean {
        return domains.X.Lower == 0.00001 && domains.X.Upper == 1000000 && domains.Y.Lower == 0 && domains.Y.Upper == 2.5
    }
    return (
        <div style={{ height: props.Height, width: props.Width, position: 'relative' }}>
            <button style={{ position: 'absolute', top: 20, right: 25 }} className="btn" onClick={resetZoom} hidden={hideReset()}>Reset</button>
            <svg id="magDurChart" width={props.Width} height={props.Height} style={{ fill: 'none', stroke: 'black', strokeWidth: '1px', shapeRendering: 'crispEdges', fontFamily: 'sans-serif', fontSize: 'small' }} onWheel={handleZoom} onMouseDown={handleDrag} onMouseUp={stopDrag}>

                {/* Draw chart data first */}
                <g>
                    {magDurCurves.map((mdc, index) => (mdc.Visible ? <path key={index} d={mdc.Path} stroke={mdc.Color} /> : null))}
                    {magDurCircles}
                </g>

                {/* Draw white rectangles around the border so data won't show outside chart */}
                <rect x={0} y={0} width={props.Width} height={margin.top} fill='white' stroke='white' />
                <rect x={0} y={props.Height - margin.bottom - margin.top} width={props.Width} height={margin.bottom + margin.top} fill='white' stroke='white' />
                <rect x={0} y={0} width={margin.left} height={props.Height} fill='white' stroke='white' />
                <rect x={props.Width - margin.right} y={0} width={margin.right} height={props.Height} fill='white' stroke='white' />

                {/* Chart Legend */
                    magDurCurves.map((mdc, index) => <rect style={{ cursor: 'pointer', opacity: (mdc.Visible ? 1 : 0.25) }} key={index} x={margin.left + 10 + 20 * index} y={svgHeight + 40} width={15} height={15} fill={mdc.Color} onClick={(event) => {
                        mdc.Visible = !mdc.Visible;
                        let update = _.cloneDeep(magDurCurves);
                        setMagDurCurves(update);
                        let mdcd = _.cloneDeep(magDurCurveData);
                        mdcd.filter(x => x.Name == mdc.Name).forEach(x => x.Visible = mdc.Visible);
                        setMagDurCurveData(mdcd);


                    }}><title>{mdc.Name}</title></rect>)
                }

                {/* XAxis ticks*/}
                {xAxisTicks}
                <text x={svgWidth / 2} y={svgHeight + margin.top + 20}>Duration (s)</text>
                {/* YAxis ticks and Labels*/}
                {yAxisTicks}
                <text transform={`rotate(-90 0,0)`} y={margin.left - 25} x={-svgHeight / 2 - margin.bottom}>Per Unit Voltage</text>
                {/* Chart borders */}
                <path d={`M ${margin.left} ${margin.top} H ${svgWidth + margin.left} V ${svgHeight} H ${margin.left} V ${margin.top}`} />

            </svg>

        </div>
    )
}

export default MagDurChart;