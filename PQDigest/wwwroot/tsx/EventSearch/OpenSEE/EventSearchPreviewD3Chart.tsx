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
import { scaleLinear, line, extent, axisBottom, axisLeft, format as d3Format, scaleUtc, scaleTime } from 'd3';
import { select } from 'd3-selection';
import moment from 'moment';
import 'moment-timezone';
import { OpenXDA } from '@gpa-gemstone/application-typings';
import { OpenXDA as PQDigestXDA } from '../../global';
import Constants from '../../constants';
interface XDADictionary {
    VAB: [number, number][],
    VBC: [number, number][],
    VCA: [number, number][],
    VAN: [number, number][],
    VBN: [number, number][],
    VCN: [number, number][],
    IAN: [number, number][],
    IBN: [number, number][],
    ICN: [number, number][],
    ING: [number, number][],

}

const EventSearchPreviewD3Chart = (props: { Event: PQDigestXDA.EventSearch, MeasurementType: 'Current' | 'Voltage' | 'TripCoilCurrent', DataType: 'Time' | 'Statistic' | 'Trending', Margin: { Left: number, Right: number, Top: number, Bottom: number }, Width: number, Height: number, Axis: boolean }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (props.DataType == 'Trending') {
            let handle = GetChannels().done(channels => GetData2(channels));
            return () => {
                if (handle.abort !== undefined) handle.abort();
            }
        }
        else {
            return GetData();
        }
       
    }, [props.Event.ID]);

    function GetData() {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Data?eventId=${props.Event.ID}` +
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

    function GetChannels(): JQuery.jqXHR<OpenXDA.Types.Channel[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Channel/${props.Event.MeterID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }


    function GetData2(channels: OpenXDA.Types.Channel[]) {
        let startDate = moment.tz(props.Event.StartTime, Constants.Moment.TimeZone).utc().format(Constants.Moment.DateFormat);
        let endDate = moment.tz(props.Event.StartTime, Constants.Moment.TimeZone).utc().add(1, 'day').format(Constants.Moment.DateFormat);

        const query = `
            from(bucket: "${bucket}")
            |> range(start: ${startDate}, stop: ${endDate})
            |> filter(fn: (r) => r._field == "avg")
            |> filter(fn: (r) => ${channels.filter(c => c.MeasurementCharacteristic == 'RMS' && c.MeasurementType == props.MeasurementType && ['AN', 'BN', 'CN'].indexOf(c.Phase) >= 0).map(c => ("000000000000000" + c.ID.toString(16)).substr(-8)).map(c => 'r.tag == "' + c + '"').join(' or ')})
        `;

        let handle = $.ajax({
            beforeSend: request => {
                request.setRequestHeader('Authorization', `Token ${token}`);
            },
            type: "POST",
            url: `${host}/api/v2/query?org=${org}`,
            contentType: "application/json; encoding=utf-8",
            data: JSON.stringify({ query, type: 'flux' }),
            cache: true,
            async: true
        }).done((data: string) => {
            let rows = data.split('\r\n');
            let i = 0;
            let header = rows[i++].split(',');
            let tagIndex = header.indexOf('tag');
            let timeIndex = header.indexOf('_time');
            let valueIndex = header.indexOf('_value');
            let fieldIndex = header.indexOf('_field');
            let dict = {} as XDADictionary;
            for (; i < rows.length; i++) {
                let row = rows[i].split(',');
                if (row[tagIndex] == undefined || row[tagIndex] == "tag" || row[fieldIndex] == "flags") continue;

                let channel = channels.find(c => ("000000000000000" + c.ID.toString(16)).substr(-8) == row[tagIndex]);
                let channelName = (props.MeasurementType == "Voltage" ? 'V' : 'I') + channel.Phase;
                if (dict.hasOwnProperty(channelName)) {
                    dict[channelName].push([moment(row[timeIndex]),parseFloat(row[valueIndex])]);

                }
                else {
                    dict[channelName] = [[moment(row[timeIndex]), parseFloat(row[valueIndex])]];
                }
            }

            DrawChart(dict);
            
        });


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

        let x = scaleUtc().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
        let y = scaleLinear().rangeRound([props.Height - props.Margin.Bottom, props.Margin.Top]);

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

        if (props.Axis) {
            const xAxis = axisBottom(x);
            if (props.DataType == 'Time')
                xAxis.tickFormat((tick) => {
                    return moment(tick as number).format('mm:ss.SS')
                })

            svg.append("g").classed('xaxis', true)
                .attr("transform", "translate(0," + (props.Height - props.Margin.Bottom) + ")")
                .call(xAxis);

        }

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