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
import {format, scaleLog, scaleLinear, max, line, event, zoomTransform, zoom, select, axisBottom, axisLeft} from 'd3';
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
    ID:number,
    PerUnitMagnitude: number,
    DurationSeconds: number
}

interface MagDurCurve {
    Name: string,
    Visible: boolean,
    Color: string,
    Path: string
}

const MagDurChart = (props: { Width: number, Height: number }) => {

    const margin = { top: 15, right: 20, bottom: 60, left: 40 };
    const svgWidth = props.Width - margin.left - margin.right;
    const svgHeight = props.Height - margin.top - margin.bottom;
    const chart = React.useRef(null);
    const [domains, setDomains] = React.useState<{ X: { Lower: number, Upper: number }, Y: { Lower: number, Upper: number } }>({ X: { Lower: 0.001, Upper: 10 }, Y: { Lower: 0, Upper: 1.5 } });
    const [xAxisTicks, setXAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [yAxisTicks, setYAxisTicks] = React.useState<Array<JSX.Element>>([]);
    const [magDurCurveData, setMagDurCurveData] = React.useState<iData[]>([]);
    const [magDurCurves, setMagDurCurves] = React.useState<MagDurCurve[]>([]);
    const [magDurData, setMagDurData] = React.useState<Point[]>([]);
    const [magDurCircles, setMagDurCircles] = React.useState<JSX.Element[]>([]);

    React.useEffect(() => {

        let handle1 = GetMagDurCurves();
        handle1.done((data: iData[]) => {
            setMagDurCurveData(data);
            BuildMagDurCurve(data);
        });

        let handle2 = GetMagDurPoints();
        handle2.done((data: Point[]) => {
            setMagDurData(data);
            BuildMadDurCircles(data);

        }); 


        return function () {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();
        }
    }, []);

    React.useEffect(() => {
        BuildYAxis();
        BuildXAxis();
        BuildMadDurCircles(magDurData);
        BuildMagDurCurve(magDurCurveData);
    }, [domains])

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

    function GetMagDurPoints(): JQuery.jqXHR<Point[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MagDurPoints`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function xAxisText(value: number): string {
        if (value < 0.0000001) return (value * 1000000000).toFixed(0) + 'n';
        if (value < 0.001) return (value * 1000000).toFixed(0) + 'µ';
        if (value < 0.1) return (value * 100).toFixed(0) + 'm';
        if (value > 1000 && value < 1000000) return (value / 1000).toFixed(0) + 'k';
        if (value > 100000) return (value / 1000000).toFixed(0) + 'M';
        if (value < 1) return value.toPrecision(1).toString()
        return value.toString()
    }

    function BuildXAxis() {
        const x = scaleLog().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);

        const svg = select(chart.current);
        svg.selectAll("g.xaxis").remove();
        svg.append("g")
            .classed("xaxis", true)
            .attr("transform", "translate(0," + (props.Height - margin.bottom - margin.top) + ")")
            .call(axisBottom(x).ticks(5).tickFormat((value) => format(".0s")(value)))

        const grids = svg.append("g")
            .attr("class", "xaxis")
            .attr("transform", "translate(0," + (props.Height - margin.bottom - margin.top) + ")")
            
            .call(axisBottom(x).ticks(5).tickSize(-(svgHeight - margin.top)).tickFormat(() => "")
        )
        grids.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");
    }

    function BuildYAxis() {
        const y = scaleLinear().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        const svg = select(chart.current);
        svg.selectAll("g.yaxis").remove();
        svg.append("g")
            .classed("yaxis", true)
            .attr("transform", `translate(${margin.left},0)`)
            .call(axisLeft(y).ticks(8))
        const grids = svg.append("g")
            .attr("class", "yaxis")
            .attr("transform", `translate(${margin.left},0)`)

            .call(axisLeft(y).ticks(8).tickSize(-(svgWidth)).tickFormat(() => "")
            )
        grids.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");

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
        let circles = data.filter(point => point.PerUnitMagnitude >= domains.Y.Lower && point.PerUnitMagnitude <= domains.Y.Upper && point.DurationSeconds >= domains.X.Lower && point.DurationSeconds <= domains.X.Upper).map((point, index) => <circle key={index} className="dot" style={{ cursor: 'pointer' }} r={3} cx={x(point.DurationSeconds)} cy={y(point.PerUnitMagnitude)} fill='blue' onClick={(evt) => handleClick(point) } />);
        setMagDurCircles(circles);
    }

    function handleClick(point: Point) {
        window.open(homePath + 'WaveformViewer?EventID=' + point.ID);
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

        $(chart.current).on('mousemove', (e) => {
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
        $(chart.current).off('mousemove');
    }

    function resetZoom(evt) {
        setDomains({ X: { Lower: 0.00001, Upper: 1000000 }, Y: { Lower: 0, Upper: 2.5 } });
    }

    function hideReset():boolean {
        return domains.X.Lower == 0.00001 && domains.X.Upper == 1000000 && domains.Y.Lower == 0 && domains.Y.Upper == 2.5
    }


    return (
        <div style={{ height: props.Height, width: props.Width }}>
            <button style={{ position: 'absolute', top: 10, left: svgWidth }} onClick={resetZoom} hidden={hideReset()}>Reset</button>
            <svg ref={chart} width={props.Width} height={props.Height} style={{ fill: 'none', shapeRendering: 'crispEdges'}} onWheel={handleZoom} onMouseDown={handleDrag} onMouseUp={stopDrag}>

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
                    magDurCurves.map((mdc, index) => <rect stroke='black' style={{ cursor: 'pointer', opacity: (mdc.Visible ? 1 : 0.25) }} key={index} x={margin.left + 10 + 20 * index} y={svgHeight + 40} width={15} height={15} fill={mdc.Color} onClick={(event) => {
                        mdc.Visible = !mdc.Visible;
                        let update = _.cloneDeep(magDurCurves);

                        setMagDurCurves(update);
                    }}><title>{mdc.Name}</title></rect>)
                }
                
                <text fill="black" fontSize="small" x={svgWidth/2} y={svgHeight + margin.top + 20}>Duration (s)</text>
                <text fill="black" fontSize="small" transform={`rotate(-90 0,0)`} y={margin.left - 25} x={-svgHeight/2 - margin.bottom}>Per Unit Voltage</text>

            </svg>

        </div>
    )
}

export default MagDurChart;