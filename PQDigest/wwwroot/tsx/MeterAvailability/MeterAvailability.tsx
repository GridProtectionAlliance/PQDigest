//******************************************************************************************************
//  MeterAvailability.tsx - Gbtc
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
import { InfluxDB } from '@influxdata/influxdb-client';
import { OpenXDA } from '@gpa-gemstone/application-typings';
import Table from '@gpa-gemstone/react-table';
import moment from 'moment';
import 'moment-timezone';
import _ from 'lodash';

interface Channel extends OpenXDA.Types.Channel { Tag: string, Data?: [], MeterID: number }
interface Meter extends OpenXDA.Types.Meter { FirstTime: string, LastTime: string }

const MeterAvailability = (props: {}) => {
    const [sortField, setSortField] = React.useState<keyof Meter>('Name');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [data, setData] = React.useState<Meter[]>([]);

    function GetMeters(): JQuery.jqXHR<Meter[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Meter`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetChannels(): JQuery.jqXHR<Channel[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Meter/Channels`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    async function QueryInflux() {
        let meters = await GetMeters();
        let channels = await GetChannels();

        const client = new InfluxDB({ url: host, token: token });
        const queryApi = client.getQueryApi(org);

        const query = `
        first = from(bucket: "${bucket}")
            |> range(start: -200y)
            |> filter(fn: (r) => r._field == "avg")
            |> first()
        last = from(bucket: "${bucket}")
            |> range(start: -200y)
            |> filter(fn: (r) => r._field == "avg")
            |> last()

        join(tables: {first:first, last: last}, on: ["tag"])
        `;

        let points = await queryApi.collectRows<{ tag: string, _time_first: string, _time_last: string, }>(query);
        $.each(meters, (index, meter) => {
            let channelIDs = channels.filter(c => c.MeterID == meter.ID).map(c => c.Tag);
            let filtered = points.filter(p => channelIDs.indexOf(p.tag) >= 0);
            filtered.sort((a, b) => {
                if (a._time_first < b._time_first) return 1;
                else if (a._time_first == b._time_first) return 0;
                else return -1;
            });
            meter.FirstTime = filtered[0]._time_first;
            filtered.sort((a, b) => {
                if (a._time_last < b._time_last) return 1;
                else if (a._time_last == b._time_last) return 0;
                else return -1;
            });

            meter.LastTime = filtered[0]._time_last;
        })
        setData(_.orderBy(meters, [sortField], [ascending ? "asc" : "desc"]));
    }

    React.useEffect(() => {
        QueryInflux()
    }, []);

    React.useEffect(() => {
        setData(_.orderBy(data, [sortField], [ascending ? "asc" : "desc"]));
    }, [sortField, ascending]);


    return <Table<Meter>
        cols={[
            { key: 'ID', label: 'ID', headerStyle: { width: '10%' }, rowStyle: { width: '10%' } },
            { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
            { key: 'FirstTime', label: 'First Data Logged (CST)', headerStyle: { width: '20%' }, rowStyle: { width: '20%' }, content: (item, key, style) => moment.utc(item.FirstTime).tz('America/Chicago').format('MM/DD/YY HH:mm') },
            { key: 'LastTime', label: 'Last Data Logged (CST)', headerStyle: { width: '20%' }, rowStyle: { width: '20%' }, content: (item, key, style) => moment.utc(item.LastTime).tz('America/Chicago').format('MM/DD/YY HH:mm') },
            {
                key: undefined, label: 'Difference/Status', headerStyle: { width: '10%' }, rowStyle: { width: '10%' }, content: (item, key, style) => {
                    if (moment.utc(item.LastTime).diff(moment.utc(item.FirstTime), 'hour') <= 48)
                        return moment.utc(item.LastTime).diff(moment.utc(item.FirstTime), 'hour') + ' Hours'

                    style.backgroundColor = 'red';
                    if (moment.utc(item.LastTime).diff(moment.utc(item.FirstTime), 'days') <= 7)
                        return moment.utc(item.LastTime).diff(moment.utc(item.FirstTime), 'days') + ' Days - OOS'
                    else if (moment.utc(item.LastTime).diff(moment.utc(item.FirstTime), 'weeks') <= 52)
                        return moment.utc(item.LastTime).diff(moment.utc(item.FirstTime), 'weeks') + ' Weeks - OOS'
                    else return moment.utc(item.LastTime).diff(moment.utc(item.FirstTime), 'years') + ' Years - OOS'



                }
            },
            { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

        ]}
        tableClass="table table-hover"
        data={data}
        sortField={sortField}
        ascending={ascending}
        onSort={(d) => {
            if (d.col == sortField) {
                //let ordered = _.orderBy(events, [sortField], [(!ascending ? 'asc' : 'desc')]);
                //setEvents(ordered);
                setAscending(!ascending);
            }
            else {
                setAscending(ascending);
                setSortField(d.col);
                //let ordered = _.orderBy(events, [d.col], [(ascending ? 'asc' : 'desc')]);
                //setEvents(ordered);
            }
        }}
        onClick={(data) => { }}
        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: innerHeight -200, width: '100%' }}
        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
        selected={(item) =>false}
        
        />
}

export default MeterAvailability;