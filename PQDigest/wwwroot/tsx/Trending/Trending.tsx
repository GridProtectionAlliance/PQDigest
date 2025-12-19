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

import { Application, HIDS, OpenXDA } from '@gpa-gemstone/application-typings';
import { ReadOnlyControllerFunctions_Gemstone } from '@gpa-gemstone/common-pages';
import { SpacedColor } from '@gpa-gemstone/helper-functions';
import { DateRangePicker, MultiCheckBoxSelect, Select } from '@gpa-gemstone/react-forms';
import { Line, Plot } from '@gpa-gemstone/react-graph';
import { Column, Table } from '@gpa-gemstone/react-table';
import { createBrowserHistory } from "history";
import _ from 'lodash';
import moment from 'moment';
import 'moment-timezone';
import queryString from "querystring";
import React from 'react';
import stats from 'stats-lite';
import ExportCSV from './ExportCSV';

const MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';

const MeterController = new ReadOnlyControllerFunctions_Gemstone<OpenXDA.Types.Meter>(`${homePath}api/OpenXDA/Meter`);

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
        const meterHandle = MeterController.GetAll("Name", true);
        meterHandle.done((data: OpenXDA.Types.Meter[]) => setMeters(data));

        return () => {
            if (meterHandle?.abort != null) meterHandle.abort();
        }
    }, []);

    React.useEffect(() => {
        history.listen(() => {
            setTrendFilter(filter => ({ ...filter, StartDate: qs.startDate as string, EndDate: qs.endDate as string }));
        });

        return () => {
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
                                            moment.utc(trendFilter.StartDate, MomentDateTimeFormat) <= moment.utc(trendFilter.EndDate, MomentDateTimeFormat)}
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
                                />)
                    }
                </div>
            </div>
        </div>
    )
}

interface IChartSeries {
    [key: string]: {
        Min: [number, number][],
        Max: [number, number][],
        Avg: [number, number][],
        Color: string
    }
}

interface IHover {
    [key: string]: number
}

interface ITableData {
    Name: string,
    Min: number | string,
    Max: number | string,
    Avg: number | string,
    StDev: number | string,
    CP99: number | string,
    CP95: number | string,
    CP50: number | string,
    CP05: number | string,
    CP01: number | string,
    Outliers: number | string,
    Count: number | string
}

interface IChartProps {
    Name: string,
    Channels: OpenXDA.Types.Channel[],
    StartDate: string,
    EndDate: string,
    ShowStats: 'stats' | 'cp',
    Hover: number,
    SetHover: (hov: number) => void
}
const svgHeight = 300;

const Chart = (props: IChartProps) => {
    const containerRef = React.useRef<HTMLTableSectionElement | undefined>(undefined);
    const [data, setData] = React.useState<IChartSeries>({});
    const [hover, setHover] = React.useState<IHover>({});
    const [status, setStatus] = React.useState<Application.Types.Status>('uninitiated');
    const [tableData, setTableData] = React.useState<ITableData[]>([]);
    const [dataLimits, setDataLimits] = React.useState<[number, number]>([0, 1]);
    const [channels, setChannels] = React.useState<OpenXDA.Types.Channel[]>(props.Channels);
    const [width, setWidth] = React.useState<number>(300);

    React.useEffect(() => {
        let resizeObserver: ResizeObserver;
        const intervalHandle = setInterval(() => {
            if (containerRef?.current == null) return;
            resizeObserver = new ResizeObserver(
                _.debounce(() => {
                    if (containerRef.current == null) return;

                    setWidth(containerRef.current?.getBoundingClientRect().width ?? 300);
                }, 100)
            );
            resizeObserver.observe(containerRef.current);
            clearInterval(intervalHandle);
        }, 10);

        return () => {
            clearInterval(intervalHandle);
            if (resizeObserver != null && resizeObserver.disconnect != null) resizeObserver.disconnect();
        };
    }, []);

    React.useEffect(() => {
        let channelsjson = JSON.stringify(channels);
        let propsChannelsjson = JSON.stringify(props.Channels);
        if (channelsjson != propsChannelsjson)
            setChannels(props.Channels);
    }, [props.Channels]);

    React.useEffect(() => {
        if (channels.length === 0)
            return;

        let abort = false;
        let handle = $.ajax({
            type: "POST",
            url: `${homePath}api/PQDigest/HIDS/QueryPoints`,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                Channels: channels.map(channel => channel.ID),
                StartTime: moment.utc(props.StartDate, MomentDateTimeFormat).format(OpenXDA.Consts.DateTimeFormat),
                StopTime: moment.utc(props.EndDate, MomentDateTimeFormat).format(OpenXDA.Consts.DateTimeFormat),
            }),
            dataType: 'text',
            cache: false,
            async: true
        });

        handle.then(allData => {
            const newPoints: string[] = allData.split("\n");
            const organizedData: IChartSeries = {};

            newPoints.forEach(jsonPoint => {
                let point: HIDS.Types.IPQData | undefined = undefined;
                try {
                    if (jsonPoint !== "") point = JSON.parse(jsonPoint);
                }
                catch {
                    console.error("Failed to parse point: " + jsonPoint);
                }
                if (point !== undefined) {
                    const timeStamp = moment.utc(point.Timestamp, HIDS.Consts.DateTimeFormat).valueOf();
                    if (organizedData.hasOwnProperty(point.Tag)) {
                        organizedData[point.Tag].Min.push([timeStamp, point.Minimum]);
                        organizedData[point.Tag].Max.push([timeStamp, point.Maximum]);
                        organizedData[point.Tag].Avg.push([timeStamp, point.Average]);
                    } else {
                        organizedData[point.Tag] = {
                            Min: [[timeStamp, point.Minimum]],
                            Max: [[timeStamp, point.Maximum]],
                            Avg: [[timeStamp, point.Average]],
                            Color: ""
                        };
                    }
                }
            });

            let lowerTemporalBound = Number.MAX_SAFE_INTEGER;
            let upperTemporalBound = Number.MIN_SAFE_INTEGER;

            const dataDict: IChartSeries = {};

            Object.keys(organizedData).forEach(tag => {
                const index = props.Channels.findIndex(chan => chan.ID === Number("0x" + tag));
                if (index >= 0) {
                    const firstTimeStamp = organizedData[tag].Min[0][0];
                    const lastTimeStamp = organizedData[tag].Min[organizedData[tag].Min.length - 1][0];
                    if (firstTimeStamp < lowerTemporalBound)
                        lowerTemporalBound = firstTimeStamp;
                    if (lastTimeStamp > upperTemporalBound)
                        upperTemporalBound = lastTimeStamp;

                    const key = `${props.Channels[index].Name} - ${props.Channels[index].Phase}`;
                    dataDict[key] = organizedData[tag];
                    dataDict[key].Color = getColor(key);
                }
            });
            let tblData: ITableData[] = [];
            // No data
            if (lowerTemporalBound === Number.MAX_SAFE_INTEGER || upperTemporalBound === Number.MIN_SAFE_INTEGER)
                setDataLimits([0, 1]);
            else {
                setDataLimits([lowerTemporalBound, upperTemporalBound]);
                tblData = Object.keys(dataDict).flatMap((key) => {

                    return ['Min', 'Avg', 'Max'].map(fieldKey => {
                        const dataArray = dataDict[key][fieldKey].map(d => d[1]);
                        const avg = stats.mean(dataArray);
                        const stDev = stats.stdev(dataArray);
                        const lowerBound = avg - 3 * stDev;
                        const upperBound = avg + 3 * stDev;

                        return {
                            Name: `${key} - ${fieldKey}`,
                            Min: formatText(Math.min(...dataArray)),
                            Max: formatText(Math.max(...dataArray)),
                            Avg: formatText(avg),
                            StDev: formatText(stDev),
                            CP99: formatText(stats.percentile(dataArray, 0.99)),
                            CP95: formatText(stats.percentile(dataArray, 0.95)),
                            CP50: formatText(stats.percentile(dataArray, 0.5)),
                            CP05: formatText(stats.percentile(dataArray, 0.05)),
                            CP01: formatText(stats.percentile(dataArray, 0.01)),
                            Outliers: dataArray.filter(d => d < lowerBound || d > upperBound).length,
                            Count: dataArray.length
                        };
                    });

                });
            }
            setTableData(tblData);
            const newHover: IHover = {};
            tblData.forEach(datum => newHover[datum.Name] = NaN);
            setHover(newHover);
            setData(dataDict);
            setStatus('idle');
        }, () => {
            if (!abort)
                setStatus('error');
        });

        return () => {
            if (handle.abort != undefined) {
                abort = true;
                handle.abort();
            }
        }
    }, [channels, props.StartDate, props.EndDate]);

    return (
        <div className="card">
            <div className="card-header">{props.Name}</div>
            <div className="card-body" style={{ padding: 0, position: 'relative' }}>
                <div className="row">
                    <div ref={containerRef} className='col-6' style={{ height: svgHeight }}>
                        <Plot
                            height={svgHeight}
                            width={width}
                            showBorder={false}
                            showGrid={true}
                            yDomain={'AutoValue'}
                            legendWidth={150}
                            defaultTdomain={dataLimits}
                            legend={'right'}
                            Tlabel={'Time'}
                            showMouse={'vertical'}
                            zoom={false}
                            pan={false}
                            useMetricFactors={true}
                        >
                            {Object.keys(data).flatMap((s) => [
                                <Line
                                    showPoints={false}
                                    lineStyle={':'}
                                    color={getColor(s)}
                                    data={data[s].Min}
                                    legend={formKey(s, 'Min')}
                                    key={s + 'min'}
                                    onHover={(_, y) => setHover(hov => ({ ...hov, [formKey(s, 'Min')]: y }))}
                                />,
                                <Line
                                    showPoints={false}
                                    lineStyle={'-'}
                                    color={getColor(s)}
                                    data={data[s].Avg}
                                    legend={formKey(s, 'Avg')}
                                    key={s + 'avg'}
                                    onHover={(_, y) => setHover(hov => ({ ...hov, [formKey(s, 'Avg')]: y }))}
                                />,
                                <Line
                                    showPoints={false}
                                    lineStyle={':'}
                                    color={getColor(s)}
                                    data={data[s].Max}
                                    legend={formKey(s, 'Max')}
                                    key={s + 'max'}
                                    onHover={(_, y) => setHover(hov => ({ ...hov, [formKey(s, 'Max')]: y }))}
                                />
                            ])}
                        </Plot>
                    </div>
                    <div className='col-6' style={{ height: svgHeight, display: 'flex', flexDirection: 'column' }}>
                        <Table<ITableData>
                            Data={tableData}
                            SortKey={''}
                            Ascending={false}
                            OnSort={() => { }}
                            KeySelector={(_, index) => index}
                        >
                            <Column<ITableData>
                                Key={'Name'}
                                Field={'Name'}
                                AllowSort={false}
                                RowStyle={{ width: '20%' }}
                                HeaderStyle={{ width: '20%' }}
                            >Phase</Column>
                            <Column<ITableData>
                                Key={'Hover'}
                                AllowSort={false}
                                Content={(row) => formatText(hover?.[row.item.Name] ?? NaN)}
                            >{""}</Column>
                            {props.ShowStats === 'stats' ?
                                <Column<ITableData>
                                    Key={'Min'}
                                    Field={'Min'}
                                    AllowSort={false}
                                >Min</Column> :
                                <Column<ITableData>
                                    Key={'CP99'}
                                    Field={'CP99'}
                                    AllowSort={false}
                                >CP99</Column>
                            }
                            {props.ShowStats === 'stats' ?
                                <Column<ITableData>
                                    Key={'Avg'}
                                    Field={'Avg'}
                                    AllowSort={false}
                                >Avg</Column> :
                                <Column<ITableData>
                                    Key={'CP95'}
                                    Field={'CP95'}
                                    AllowSort={false}
                                >CP95</Column>
                            }
                            {props.ShowStats === 'stats' ?
                                <Column<ITableData>
                                    Key={'Max'}
                                    Field={'Max'}
                                    AllowSort={false}
                                >Max</Column> :
                                <Column<ITableData>
                                    Key={'CP50'}
                                    Field={'CP50'}
                                    AllowSort={false}
                                >CP50</Column>
                            }
                            {props.ShowStats === 'stats' ?
                                <Column<ITableData>
                                    Key={'StDev'}
                                    Field={'StDev'}
                                    AllowSort={false}
                                >StDev</Column> :
                                <Column<ITableData>
                                    Key={'CP05'}
                                    Field={'CP05'}
                                    AllowSort={false}
                                >CP05</Column>
                            }
                            {props.ShowStats === 'stats' ?
                                <Column<ITableData>
                                    Key={'Count'}
                                    Field={'Count'}
                                    AllowSort={false}
                                >Count</Column> :
                                <Column<ITableData>
                                    Key={'CP01'}
                                    Field={'CP01'}
                                    AllowSort={false}
                                >CP01</Column>
                            }
                            {props.ShowStats === 'stats' ?
                                <Column<ITableData>
                                    Key={'Outliers'}
                                    Field={'Outliers'}
                                    AllowSort={false}
                                >Outliers</Column> :
                                <></>
                            }
                        </Table>
                    </div>
                </div>
            </div>
        </div>

    );
}

const formKey = (key: string, field: string) => `${key} - ${field}`;

function getColor(label) {
    if (label.toUpperCase().indexOf('AN') >= 0) return '#A30000';   // darker red
    if (label.toUpperCase().indexOf('BN') >= 0) return '#0029A3';
    if (label.toUpperCase().indexOf('CN') >= 0) return '#007A29';
    if (label.toUpperCase().indexOf('NG') >= 0) return '#c3c3c3';   // grey
    if (label.toUpperCase().indexOf('AB') >= 0) return '#FF0000';   // brighter red
    if (label.toUpperCase().indexOf('BC') >= 0) return '#0066CC';
    if (label.toUpperCase().indexOf('CA') >= 0) return '#33CC33';   // grey
    if (label.toUpperCase().indexOf('RES') >= 0) return '#c3c3c3';  // grey
    if (label.toUpperCase().indexOf('ALL') >= 0) return '#c3c3c3';  // grey

    return SpacedColor(1, 0.5);
}

function formatText(num: number) {
    if (Number.isNaN(num)) return "NaN";
    if (num >= 10) return num.toFixed(0);
    if (num >= 0) return num.toFixed(2);
    if (num >= 0.0001) return num.toFixed(4);
    if (num >= 0.000001) return num.toFixed(6);
    return num;
}

export default Trending;