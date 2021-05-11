//******************************************************************************************************
//  Trending.tsx - Gbtc
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
import { OpenXDA } from '@gpa-gemstone/application-typings';
import _ from 'lodash';
import Table from '@gpa-gemstone/react-table';
import { MultiCheckBoxSelect, Select } from '@gpa-gemstone/react-forms';
import queryString from "querystring";
import { createBrowserHistory } from "history"
import { ExportToCsv } from '../ExportCSV';
import moment from 'moment';
import { scaleLinear, line, extent, axisBottom, axisLeft, format as d3Format, scaleUtc } from 'd3';
import { select } from 'd3-selection';

type DateRange = '1 day' | '3 days' | '7 days' | '1 month' | '3 months' | '6 months' | 'Year to date' | '1 year' | 'custom'
const DateRanges: DateRange[] = ['1 day', '3 days', '7 days', '1 month', '3 months', '6 months', 'Year to date', '1 year', 'custom'];

const Trending = (props: {}) => {

    const history = createBrowserHistory();

    const qs = queryString.parse(location.search.substring(1));
    const [startDate, setStartDate] = React.useState<string>(qs.startDate == undefined ? moment().subtract(30, 'days').format("YYYY-MM-DD") : qs.startDate as string)
    const [endDate, setEndDate] = React.useState<string>(qs.endDate == undefined ? moment().format("YYYY-MM-DD") : qs.endDate as string)
    const [meters, setMeters] = React.useState<OpenXDA.Types.Meter[]>([]);
    const [meter, setMeter] = React.useState<OpenXDA.Types.Meter>(undefined);
    const [channels, setChannels] = React.useState<{ Channel: OpenXDA.Types.Channel, Selected: boolean }[]>([]);
    const [dateRange, setDateRange] = React.useState<DateRange>(qs.dateRange == undefined ? '7 days' : qs.dateRange as DateRange);

    React.useEffect(() => {
        let handle = GetMeters();
        handle.done((data: OpenXDA.Types.Meter[]) => setMeters(data));

        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }, []);

    React.useEffect(() => {
        if (meters.length > 0 && meter == undefined) {
            setMeter(meters[0]);
        }
    },[meters]);

    React.useEffect(() => {
        if (meter != undefined) {
            let handle = GetChannels(meter.ID);
            handle.done((data: OpenXDA.Types.Channel[]) => setChannels(data.map(d => ({ Channel: d, Selected: GetDefault(d)}))));

            return function () {
                if (handle.abort != undefined) handle.abort();
            }
        }
    }, [meter]);

    React.useEffect(() => {
        window.history.pushState({}, '', `${window.location.origin}${window.location.pathname}?${queryString.stringify({ startDate, endDate,dateRange })}`)
    }, [startDate, endDate]);

    React.useEffect(() => {
        let ed = moment() as moment.Moment;
        let sd = ed;
        if (dateRange == '1 day')
            sd = moment().subtract(1, 'days');
        else if (dateRange == '3 days')
            sd = moment().subtract(3, 'days');
        else if (dateRange == '7 days')
            sd = moment().subtract(7, 'days');
        else if (dateRange == '1 month')
            sd = moment().subtract(1, 'months');
        else if (dateRange == '3 months')
            sd = moment().subtract(3, 'months');
        else if (dateRange == '6 months')
            sd = moment().subtract(6, 'months');
        else if (dateRange == '1 year')
            sd = moment().subtract(1, 'year');
        else if (dateRange == 'Year to date')
            sd = moment().date(1).month('January');
        else return;
        setStartDate(sd.format("YYYY-MM-DD"));
        setEndDate(ed.format("YYYY-MM-DD"));

    }, [dateRange])

    function GetMeters(): JQuery.jqXHR<OpenXDA.Types.Meter[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Meter`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetChannels(id: number): JQuery.jqXHR<OpenXDA.Types.Channel[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Channel/${id}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetDefault(channel: OpenXDA.Types.Channel) {
        if (channel.MeasurementCharacteristic == 'RMS') return true;
        else return false;
    }

    return (
        <div style={{ height: "100%", width: '100%' }}>
            <div className="row" style={{ height: 75, margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="card">
                        <div className="card-body" style={{ height: 75 }}>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="form-control text-right" style={{ border: '0px', width: 100 }}>Meters</div>
                                        <div className="col">
                                            <select className='form-control' value={meter?.ID ?? 0} onChange={(evt) => setMeter(meters.find(m => m.ID.toString() === evt.target.value)) }>
                                                {meters.map((m, i) => <option key={i} value={m.ID}>{m.Name }</option>)}
                                             </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="form-control text-right" style={{ border: '0px', width: 100 }}>Channels</div>
                                        <div className="col">
                                            <MultiCheckBoxSelect Options={channels.map(t => Object.create({ Text: t.Channel.Name, Value: t.Channel.ID, Selected: t.Selected }))} OnChange={(evt, options) => {
                                                let newChannels = _.cloneDeep(channels);
                                                $.each(options, (index, option) => {
                                                    newChannels.find(type => type.Channel.ID == option.Value).Selected = !option.Selected
                                                });
                                                setChannels(newChannels)
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="form-control text-right" style={{ border: '0px', width: 110 }}>Date Range</div>
                                        <div className="col">
                                            <select className='form-control' value={dateRange} onChange={(evt) =>setDateRange(evt.target.value as DateRange)}>
                                                {DateRanges.map((dr, i) => <option key={i} value={dr}>{dr}</option>)}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <input className="form-control" value={startDate} type="date" onChange={e => setStartDate(e.target.value)} disabled={dateRange != 'custom' }/>
                                        </div>
                                        <div className="col-1">
                                            <span>{'-'}</span>
                                        </div>

                                        <div className="col">
                                            <input className="form-control" value={endDate} type="date" onChange={e => setEndDate(e.target.value)} disabled={dateRange != 'custom'}/>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-1'><button className='btn btn-primary'>Export CSV</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ maxHeight: "calc(100% - 80px)", overflowY: 'auto', margin: '5px 5px 5px 5px ' }}>
                <div className="col" style={{ padding: '0px 2px 0px 0px' }}>
                    {[...new Set(channels.filter(c => c.Selected).map(c => c.Channel.MeasurementType + ' ' + c.Channel.MeasurementCharacteristic))].map(k => <Chart key={k} Name={k} Channels={channels.filter(c => c.Selected && (c.Channel.MeasurementType + ' ' + c.Channel.MeasurementCharacteristic) == k).map(c => c.Channel)} StartDate={startDate} EndDate={endDate} />) }
                </div> 
            </div>
        </div>
    )
}

const Chart = (props: { Name: string, Channels: OpenXDA.Types.Channel[], StartDate: string, EndDate: string }) => {  
    const svgHeight = 300;
    const svgWidth = window.innerWidth - 40;
    const margin = { top: 40, right: 150, bottom: 40, left: 50 };
    const ref = React.useRef(null);

    React.useEffect(() => {
        if(props.Channels.length > 0)
            return GetData();
    }, [props.Channels, props.StartDate, props.EndDate]);

    function GetData() {
        let handle = $.ajax({
            type: "POST",
            url: `${homePath}api/HIDS`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Channels: props.Channels.map(c => c.ID), StartDate: props.StartDate, EndDate: props.EndDate}),
            cache: true,
            async: true
        }).done(data => DrawChart(data));


        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }

    function DrawChart(data) {
        select(ref.current).selectAll('svg').remove()
        const svg = select(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)

        let x = scaleUtc().rangeRound([margin.left, svgWidth - margin.right]);
        let y = scaleLinear().rangeRound([svgHeight - margin.top, margin.bottom]);

        let yextent = extent([].concat(...Object.keys(data).map(key => data[key].map(d => d[1]))))
        let xextent = extent([].concat(...Object.keys(data).map(key => data[key].map(d => d[0]))))
        y.domain(yextent);
        x.domain(xextent);

        const xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(axisBottom(x));


        const yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", `translate(${margin.left},0)`)
            .call(axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => d3Format("~s")(value)));

        //const text = svg.append("g")
        //    .classed('yaxis', true)
        //    .append("text")
        //    .text(props.MeasurementType == "Voltage" ? "Voltage" : "Amps");
        //text.attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")").style("text-anchor", "middle");
        let minfunc = line<[number, number,number,number]>().x(d => x(d[0])).y(d => y(d[1]));
        let avgfunc = line<[number, number, number, number]>().x(d => x(d[0])).y(d => y(d[2]));
        let maxfunc = line<[number, number, number, number]>().x(d => x(d[0])).y(d => y(d[3]));

        svg.selectAll("g.min-line").remove();
        svg.selectAll("g.min-line")
            .data(Object.keys(data))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", 4)
            .attr("stroke", (d: string) => getColor(d))
            .attr("d", (d: string) => {
                return minfunc(data[d]);
            })

        svg.selectAll("g.avg-line").remove();
        svg.selectAll("g.avg-line")
            .data(Object.keys(data))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", (d: string) => getColor(d))
            .attr("d", (d: string) => {
                return avgfunc(data[d]);
            })


        svg.selectAll("g.max-line").remove();
        svg.selectAll("g.max-line")
            .data(Object.keys(data))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", (d) => 2)
            .attr("stroke", (d: string) => getColor(d))
            .attr("d", (d: string) => {
                return maxfunc(data[d]);
            })

        // Add one dot in the legend for each name.
        const legendrow = svg.selectAll("g.legend-row")
            .data([].concat(...Object.keys(data).map(key => [key + '-Max', key + '-Avg', key + '-Min'])))
            .enter()
                .append("g")
                .classed("legend-row", true)
                .attr('transform', (d, i) => `translate(${svgWidth - 100},${i*25})`)

            legendrow.append("line")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
                .attr("stroke-dasharray", (d) => getDashArray(d))
            .attr("x0", 0)
            .attr("x1", 20)
            .attr("stroke", (d: string) => getColor(d))


    }


    function getColor(label) {
        if (label.toUpperCase().indexOf('AN') >= 0) return '#A30000';   // darker red
        else if (label.toUpperCase().indexOf('BN') >= 0) return '#0029A3';   
        else if (label.toUpperCase().indexOf('CN') >= 0) return '#007A29';
        else if (label.toUpperCase().indexOf('NG') >= 0) return '#c3c3c3';   // grey
        else if (label.toUpperCase().indexOf('AB') >= 0) return '#FF0000';   // brighter red
        else if (label.toUpperCase().indexOf('BC') >= 0) return '#0066CC';
        else if (label.toUpperCase().indexOf('CA') >= 0) return '#33CC33';   // grey
        else if (label.toUpperCase().indexOf('RES') >= 0) return '#c3c3c3';  // grey
        else if (label.toUpperCase().indexOf('ALL') >= 0) return '#c3c3c3';  // grey
        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);

            return `#${(ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne)}${(ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo)}${(ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree)}`;
        }
    }

    function getDashArray(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0) return 2;
        else if (label.toUpperCase().indexOf('MIN') >= 0) return 4;
        else return null;
    }



    return (
        <div className="card">
            <div className="card-header">{props.Name }</div>
            <div className="card-body" style={{padding:0}}>
                <div ref={ref} style={{ height: 300, position: 'relative', top: 0 }}></div>
            </div>
        </div>

    );
}

export default Trending;