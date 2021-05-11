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
import { scaleLinear, line, extent, axisBottom, axisLeft, format as d3Format } from 'd3';
import { select } from 'd3-selection';
import moment from 'moment';

interface XDADictionary {
    VAN: [number, number][],
    VBN: [number, number][],
    VCN: [number, number][],
    IAN: [number, number][],
    IBN: [number, number][],
    ICN: [number, number][],
    ING: [number, number][],

}

const EventSearchPreviewD3Chart = (props: { EventID: number, MeasurementType: 'Current' | 'Voltage' | 'TripCoilCurrent', DataType: 'Time' | 'Statistic' | 'Trending', Margin: { Left: number, Right: number, Top: number, Bottom: number }, Width: number, Height: number }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        return GetData();
    }, [props.EventID]);

    function GetData() {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Data?eventId=${props.EventID}` +
                `&pixels=${Math.floor(props.Width)}` +
                `&type=${props.MeasurementType}` +
                `&dataType=${props.DataType}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(data => DrawChart(data));


        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }




    function DrawChart(data: XDADictionary) {
        select(ref.current).selectAll('svg').remove()
        const svg = select(ref.current)
            .append('svg')
            .attr('width', props.Width)
            .attr('height', props.Height)

        let x = scaleLinear().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
        let y = scaleLinear().rangeRound([props.Height - props.Margin.Top, props.Margin.Bottom]);

        if (props.DataType == 'Trending') {
            let yextent = extent([].concat(...Object.keys(data).map(key => data[key].map(d => d[1]))))
            let xextent = extent([].concat(...Object.keys(data).map(key => data[key].map(d => d[0]))))
            y.domain(yextent);
            x.domain(xextent);
        }
        else {
            let yextent = extent([].concat(...Object.keys(data).map(key => data[key].map(d => d[1]))))
            let xextent = extent([].concat(...Object.keys(data).map(key => data[key].map(d => d[0]))))

            yextent = [1.20 * yextent[0], 1.20 * yextent[1]]
            y.domain(yextent);
            x.domain(xextent);
        }

        const xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (props.Height - props.Margin.Bottom) + ")")
            .call(axisBottom(x));


        const yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", `translate(${props.Margin.Left},0)`)
            .call(axisLeft(y).ticks(Math.floor(props.Height / 50) + 1).tickFormat((value: number) => d3Format("~s")(value)));

        const text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text(props.MeasurementType == "Voltage" ? "Voltage" : "Current");
        text.attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + (props.Margin.Left / 3) + ")").style("text-anchor", "middle");

        let linefunc = line<[number, number]>().x(d => x(d[0])).y(d => y(d[1]));

        svg.selectAll("g.line").remove();
        svg.selectAll("g.line")
            .data(Object.keys(data))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", (d: keyof XDADictionary) => getColor(d))
            .attr("d", (d: keyof XDADictionary) => {
                return linefunc(data[d]);
            })
    }


    function getColor(label) {
        if (label.indexOf('VA') >= 0) return '#A30000';
        if (label.indexOf('VB') >= 0) return '#0029A3';
        if (label.indexOf('VC') >= 0) return '#007A29';
        if (label.indexOf('VN') >= 0) return '#c3c3c3';
        if (label.indexOf('IA') >= 0) return '#FF0000';
        if (label.indexOf('IB') >= 0) return '#0066CC';
        if (label.indexOf('IC') >= 0) return '#33CC33';
        if (label.indexOf('IR') >= 0) return '#c3c3c3';

        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);

            return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
        }
    }


    return <div ref={ref} style={{ height: props.Height, position: 'relative', top: 0 }}></div>;
}

export default EventSearchPreviewD3Chart;