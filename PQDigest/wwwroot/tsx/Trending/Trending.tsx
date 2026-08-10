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

import { OpenXDA } from '@gpa-gemstone/application-typings';
import { DateRangePicker, MultiCheckBoxSelect, Select } from '@gpa-gemstone/react-forms';
import { axisBottom, axisLeft, brushX, format as d3Format, extent, line, scaleLinear, scaleUtc } from 'd3';
import { select } from 'd3-selection';
import { createBrowserHistory } from "history";
import _ from 'lodash';
import moment from 'moment';
import 'moment-timezone';
import queryString from "querystring";
import React from 'react';
import stats from 'stats-lite';
import ExportCSV from './ExportCSV';

const MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
const MomentTimeZone = 'America/Chicago';

interface TrendingFilter {
    ShowStats: 'stats' | 'cp',
    StartDate: string,
    EndDate: string,
    MeterID?: number
}

const Trending = () => {
    const history = createBrowserHistory();
    const qs = queryString.parse(history.location.search.substring(1));

    const [meters, setMeters] = React.useState<OpenXDA.Types.Meter[]>([]);
    const [channels, setChannels] = React.useState<{ Channel: OpenXDA.Types.Channel, Selected: boolean }[]>([]);
    const [trendFilter, setTrendFilter] = React.useState<TrendingFilter>(() => ({
        ShowStats: 'stats',
        StartDate: qs.startDate == undefined ? moment().subtract(30, 'days').format(MomentDateTimeFormat) : qs.startDate as string,
        EndDate: qs.endDate == undefined ? moment().format(MomentDateTimeFormat) : qs.endDate as string
    }));
    const [hover, setHover] = React.useState<number>(0);

    const meter = React.useMemo(() => {
        if (meters.length == 0 || trendFilter?.MeterID == null) return;

        let index = meters.findIndex(m => m.ID === trendFilter.MeterID);
        if (index >= 0)
            return meters[index];
        else
            return meters[0];
    }, [meters, trendFilter?.MeterID]);

    React.useEffect(() => {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Meter`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
        handle.done((data: OpenXDA.Types.Meter[]) => setMeters(data));

        history.listen(() => {
            setTrendFilter(filter => ({ ...filter, StartDate: qs.startDate as string, EndDate: qs.endDate as string }))
            console.log('listening');
        });

        return function () {
            if (handle?.abort != null) handle.abort();
            history.listen = null;
        }
    }, []);

    React.useEffect(() => {
        if (meter != undefined) {
            let handle = GetChannels(meter.ID);
            handle.done((data: OpenXDA.Types.Channel[]) => setChannels(data.map(d => ({ Channel: d, Selected: GetDefault(d) }))));

            return function () {
                if (handle.abort != undefined) handle.abort();
            }
        }
    }, [meter]);

    React.useEffect(() => {
        let nqs = {
            startDate: trendFilter.StartDate,
            endDate: trendFilter.EndDate
        }

        if (trendFilter?.MeterID != null)
            nqs['meterID'] = meter.ID;
        else if (qs.meterID != undefined)
            nqs['meterID'] = qs.meterID;

        window.history.pushState({}, '', `${window.location.origin}${window.location.pathname}?${queryString.stringify(nqs)}`)
    }, [trendFilter.StartDate, trendFilter.EndDate, meter]);

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
        <div style={{ height: "100%", width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="row" style={{ margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="card">
                        <div className="card-body" style={{ height: '145px' }}>
                            <div className="row">
                                <div className="col-2">
                                    <Select<TrendingFilter>
                                        Options={meters.map(m => ({ Label: m.Name, Value: m.ID }))}
                                        Setter={setTrendFilter}
                                        Field='MeterID'
                                        Label="Meter"
                                        Record={trendFilter}
                                    />
                                </div>
                                <div className="col-2">
                                    <MultiCheckBoxSelect Label="Channels" Options={channels.map(t => ({ Label: t.Channel.Name, Value: t.Channel.ID, Selected: t.Selected }))} OnChange={(evt, options) => {
                                        let newChannels = _.cloneDeep(channels);
                                        $.each(options, (_index, option) => {
                                            newChannels.find(type => type.Channel.ID == option.Value).Selected = !option.Selected
                                        });
                                        setChannels(newChannels)
                                    }} />
                                </div>
                                <div className="col-6">
                                    <DateRangePicker<TrendingFilter>
                                        FromField="StartDate"
                                        ToField="EndDate"
                                        Label="Date Range"
                                        Type="date"
                                        Valid={() => trendFilter.StartDate != null && trendFilter.EndDate != null &&
                                            moment(trendFilter.StartDate, MomentDateTimeFormat) <= moment(trendFilter.EndDate, MomentDateTimeFormat)}
                                        Feedback="Date range is required, and start may not be after end."
                                        Record={trendFilter}
                                        Format={MomentDateTimeFormat}
                                        Setter={setTrendFilter}
                                    />
                                </div>

                                <div className='col-1'>
                                    <Select<TrendingFilter>
                                        Options={[{ Label: "Stats", Value: "stats" }, { Label: "CP", Value: "cp" }]}
                                        Setter={setTrendFilter}
                                        Field='ShowStats'
                                        Label="Summary"
                                        Record={trendFilter}
                                    />
                                </div>
                                <div className='col-1' style={{ paddingTop: 30 }}>
                                    <ExportCSV Meter={meter} Channels={channels.filter(c => c.Selected).map(c => c.Channel)} StartDate={trendFilter.StartDate} EndDate={trendFilter.EndDate} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ flex: 1, overflowY: 'auto', margin: '5px 5px 5px 5px ' }}>
                <div className="col" style={{ padding: '0px 2px 0px 0px' }}>
                    {
                        [...new Set(channels.filter(c => c.Selected).map(c => c.Channel.MeasurementType + ' ' + c.Channel.MeasurementCharacteristic))]
                            .map(k =>
                                <Chart
                                    key={k}
                                    ShowStats={trendFilter.ShowStats}
                                    Name={k}
                                    Channels={channels.filter(c => c.Selected && (c.Channel.MeasurementType + ' ' + c.Channel.MeasurementCharacteristic) == k).map(c => c.Channel)}
                                    StartDate={trendFilter.StartDate}
                                    EndDate={trendFilter.EndDate}
                                    Hover={hover}
                                    SetHover={setHover}
                                    SetZoom={(s, e) => setTrendFilter(filter => ({ ...filter, StartDate: s, EndDate: e }))}
                                />)
                    }
                </div> 
            </div>
        </div>
    )
}

interface ChartSeries {
    Channel: OpenXDA.Types.Channel, Field: 'min' | 'max' | 'avg', Selected: boolean, Data: { TimeStamp: string, Value: number }[], Min: number, Max: number, Avg: number, StDev: number, CP99: number, CP95: number, CP50: number, CP05: number, CP01: number, Outliers: number, DataPoints: number
}

const Chart = (props: { Name: string, Channels: OpenXDA.Types.Channel[], StartDate: string, EndDate: string, ShowStats: 'stats' | 'cp', Hover: number, SetHover: (hov: number) => void, SetZoom: (startDate: string, endDate: string) => void }) => {  
    const svgHeight = 300;
    const svgWidth = window.innerWidth * 2 / 3;
    const margin = { top: 40, right: 0, bottom: 40, left: 50 };
    const ref = React.useRef(null);
    const [data, setData] = React.useState<object>({});
    const [channels, setChannels] = React.useState<OpenXDA.Types.Channel[]>(props.Channels);
    const [hoverData, setHoverData] = React.useState<object>({});

    React.useEffect(() => {
        let channelsjson = JSON.stringify(channels);
        let propsChannelsjson = JSON.stringify(props.Channels);
        if (channelsjson != propsChannelsjson)
            setChannels(props.Channels);
    }, [props.Channels]);

    React.useEffect(() => {
        if (channels.length > 0)
            return GetData();
    }, [channels, props.StartDate, props.EndDate]);


    React.useEffect(() => {
        if (Object.keys(data).length > 0)
            return DrawChart(data);
    }, [data]);

    React.useEffect(() => {
        if (props.Hover < margin.left) return;
        else if (props.Hover > svgWidth - margin.right) return;

        const svg = select(ref.current).select('svg');
        svg.selectAll("g.hover-line").remove();
        svg.append("g")
            .classed("hover-line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke",'red')
            .attr("d", `M ${props.Hover} ${svgHeight - margin.bottom} V ${margin.top}`)

        let x = scaleUtc().rangeRound([margin.left, svgWidth - margin.right]);
        x.domain([moment.utc(props.StartDate, MomentDateTimeFormat), moment.utc(props.EndDate, MomentDateTimeFormat)]);
        let ts = moment.utc(x.invert(props.Hover)).format(MomentDateTimeFormat);

        let hovDict = {};
        $.each(Object.keys(data), (i, key) => {
            let length = data[key].Data.length;
            let mult = (props.Hover - margin.left - margin.right) / (svgWidth - margin.left - margin.right);
            let index = Math.floor(mult * length);
            //console.log(ts, data[key].Data[index].TimeStamp);

            hovDict[key] = data[key].Data[index].Value;
        });
        setHoverData(hovDict);

    }, [props.Hover]);


    function GetData() {
        const query = `
            from(bucket: "${bucket}")
            |> range(start: ${moment.tz(props.StartDate, MomentTimeZone).utc().format(MomentDateTimeFormat)}Z, stop: ${moment.tz(props.EndDate, MomentTimeZone).utc().format(MomentDateTimeFormat)}Z)
            |> filter(fn: (r) => ${props.Channels.map(c => ("000000000000000" + c.ID.toString(16)).substr(-8)).map(c => 'r.tag == "' + c + '"').join(' or ')})
        `;

        let handle = $.ajax({
            beforeSend: request => {
                request.setRequestHeader('Authorization', `Token ${token}`);
            },
            type: "POST",
            url: `${host}/api/v2/query?org=${org}`,
            contentType: "application/json; encoding=utf-8",
            data: JSON.stringify({ query, type: 'flux'}),
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
            let dict = {};
            for (; i < rows.length; i++) {
                let row = rows[i].split(',');
                if (row[tagIndex] == undefined || row[tagIndex] == "tag" || row[fieldIndex] == "flags" ) continue;
                else if (dict.hasOwnProperty(row[tagIndex] + '-' + row[fieldIndex])) {
                    dict[row[tagIndex] + '-' + row[fieldIndex]].Data.push({ TimeStamp: moment.utc(row[timeIndex]).tz(MomentTimeZone).format(MomentDateTimeFormat) + 'Z', Value: parseFloat(row[valueIndex]) });

                }
                else {
                    dict[row[tagIndex] + '-' + row[fieldIndex]] = {
                        Channel: props.Channels.find(c => ("000000000000000" + c.ID.toString(16)).substr(-8) == row[tagIndex]),
                        Field: row[fieldIndex],
                        Selected: true,
                        Data: [{ TimeStamp: moment.utc(row[timeIndex]).tz(MomentTimeZone).format(MomentDateTimeFormat) + 'Z', Value: parseFloat(row[valueIndex]) }],
                        Max: 0,
                        Min: 0,
                        Avg: 0,
                        StDev: 0
                    } as ChartSeries;
                }
            }

            let hovDict = {};
            $.each(Object.keys(dict), (i, key) => {
                dict[key].Min = Math.min(...dict[key].Data.map(d => d.Value));
                dict[key].Max = Math.max(...dict[key].Data.map(d => d.Value));
                dict[key].Avg = stats.mean(dict[key].Data.map(d => d.Value));
                dict[key].StDev = stats.stdev(dict[key].Data.map(d => d.Value));
                dict[key].CP99 = stats.percentile(dict[key].Data.map(d => d.Value),0.99);
                dict[key].CP95 = stats.percentile(dict[key].Data.map(d => d.Value), 0.95);
                dict[key].CP50 = stats.percentile(dict[key].Data.map(d => d.Value), 0.5);
                dict[key].CP05 = stats.percentile(dict[key].Data.map(d => d.Value), 0.05);
                dict[key].CP01 = stats.percentile(dict[key].Data.map(d => d.Value), 0.01);

                let lowerBound = dict[key].Avg - 3 * dict[key].StDev;
                let upperBound = dict[key].Avg + 3 * dict[key].StDev;

                dict[key].Outliers = dict[key].Data.filter(d => d.Value < lowerBound || d.Value > upperBound).length;
                dict[key].DataPoints = dict[key].Data.length;
                hovDict[key] = dict[key].Data[0].Value;
            });
            setData(dict);
            setHoverData(hovDict);
        });


        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }

    function DrawChart(data: object) {
        let x = scaleUtc().rangeRound([margin.left, svgWidth - margin.right]);
        let y = scaleLinear().rangeRound([svgHeight - margin.top, margin.bottom]);


        select(ref.current).selectAll('svg').remove()
        const svg = select(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('user-select', 'none')
            .on('mousemove', (d: MouseEvent) => props.SetHover(d.offsetX))
            .on('mousedown', (d: MouseEvent) => OnXZoom(d, svg, x));

        let yextent = extent([].concat(...Object.keys(data).filter(key => data[key].Selected).map(key => data[key].Data.map(d => d.Value))));
        y.domain(yextent);
        x.domain([moment.utc(props.StartDate, MomentDateTimeFormat), moment.utc(props.EndDate, MomentDateTimeFormat)]);

        const xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(axisBottom(x));


        const yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", `translate(${margin.left},0)`)
            .call(axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat((value: number) => d3Format("~s")(value)));

        let linefunc = line<{ TimeStamp:string, Value: number, Field: string }>().x(d => x(moment.utc(d.TimeStamp))).y(d => y(d.Value));

        svg.selectAll("g.min-line").remove();
        svg.selectAll("g.min-line")
            .data(Object.keys(data).filter(key => data[key].Field == 'min' && data[key].Selected))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", 4)
            .attr("stroke", (d: string) => getColor(data[d].Channel.Phase))
            .attr("d", (d: string) => {
                return linefunc(data[d].Data);
            })

        svg.selectAll("g.avg-line").remove();
        svg.selectAll("g.avg-line")
            .data(Object.keys(data).filter(key => data[key].Field == 'avg' && data[key].Selected))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", (d: string) => getColor(data[d].Channel.Phase))
            .attr("d", (d: string) => {
                return linefunc(data[d].Data);
            })


        svg.selectAll("g.max-line").remove();
        svg.selectAll("g.max-line")
            .data(Object.keys(data).filter(key => data[key].Field == 'max' && data[key].Selected))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", (d) => 2)
            .attr("stroke", (d: string) => getColor(data[d].Channel.Phase))
            .attr("d", (d: string) => {
                return linefunc(data[d].Data);
            })
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

    function getlabel(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0) return 'Max';
        else if (label.toUpperCase().indexOf('MIN') >= 0) return 'Min';
        else return 'Avg';
    }

    function getDashArray(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0) return 2;
        else if (label.toUpperCase().indexOf('MIN') >= 0) return 4;
        else return null;
    }

    function getLine(tag, measurement) {
        let path = "M 0 17  C 10 0, 20 0, 25 10 S 32 25, 45 17";
        if (measurement.Selected)
            return <svg height={25} width={50} onClick={() => {
                let newData = { ...data };
                newData[tag].Selected = false;
                setData(newData);
            }}>
                <path d={path} stroke={getColor(measurement.Channel.Phase)} strokeDasharray={getDashArray(measurement.Field)} strokeWidth={1.5} fill="transparent" />
            </svg>;
        else
            return <svg height={25} width={50} onClick={() => {
                let newData = { ...data };
                newData[tag].Selected = true;
                setData(newData);

            }}>
                <path d={path} stroke={getColor(measurement.Channel.Phase)} strokeDasharray={getDashArray(measurement.Field)} strokeWidth={1.5} fill="transparent" opacity={0.2}/>
            </svg>;

    }

    function formatText(num: number) {
        if (num >= 10) return num.toFixed(0);
        else if (num >= 0) return num.toFixed(2);
        else if (num >= 0.0001) return num.toFixed(4);
        else if (num >= 0.000001) return num.toFixed(6);
        else return num;

    }

    function OnXZoom(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
        const start = evt.offsetX;
        const brush = brushX()
            .extent([[margin.left, margin.top + 0.5], [svgWidth - margin.right, svgHeight - margin.bottom + 0.5]])

        const br = svg.append('g').call(brush)
        br.call(brush.move, [start, start + 1]);
        svg.on('mousemove.brush', (e: MouseEvent) => {
            br.call(brush.move, [start, e.offsetX]);
        })
        svg.on('mouseup.brush', (e: MouseEvent) => {
            const min = Math.min(start, e.offsetX);
            const max = Math.max(start, e.offsetX);
            props.SetZoom(moment(scale.invert(min)).format(MomentDateTimeFormat), moment(scale.invert(max)).format(MomentDateTimeFormat));
            br.remove();
            svg.on('mousemove.brush', null);
            svg.on('mouseup.brush', null);
        });
    }

    return (
        <div className="card">
            <div className="card-header">{props.Name }</div>
            <div className="card-body" style={{padding:0, position: 'relative'}}>
                <div ref={ref} className='pull-left' style={{ height: 300, width: 'calc(100% - 400px)', position: 'absolute', top: 0, left: 0 }}></div>
                <div className='pull-right' style={{ height: 300, maxHeight: 300, overflowY: 'auto', width: window.innerWidth / 3 - 75, position: 'relative', right: 0 }}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Phase</th>
                                <th></th>
                                <th>Hover</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Min</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Avg</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Max</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>StDev</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP99</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP95</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP50</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP05</th>
                                <th style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>CP01</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Counts</th>
                                <th style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>Outliers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map(key =>
                                <tr key={key}>
                                    <td>{data[key].Channel.Phase}-{getlabel(key)}</td>
                                    <td>{getLine(key, data[key])}</td>
                                    <td>{formatText(hoverData[key])}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].Min)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].Avg)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].Max)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].StDev)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5}}>{formatText(data[key].CP99)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP95)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP50)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP05)}</td>
                                    <td style={{ display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 }}>{formatText(data[key].CP01)}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{data[key].DataPoints}</td>
                                    <td style={{ display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 }}>{data[key].Outliers}</td>
                                </tr>)}
                       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default Trending;