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

import { OpenXDA } from '@gpa-gemstone/application-typings';
import { ReadOnlyControllerFunctions_Gemstone } from '@gpa-gemstone/common-pages';
import { Column, Table } from '@gpa-gemstone/react-table';
import { InfluxDB } from '@influxdata/influxdb-client';
import _ from 'lodash';
import moment from 'moment';
import 'moment-timezone';
import React from 'react';

interface Channel extends OpenXDA.Types.Channel { Tag: string, Data?: [], MeterID: number }
interface Meter extends OpenXDA.Types.Meter { FirstTime: string, LastTime: string }

const MeterController = new ReadOnlyControllerFunctions_Gemstone<OpenXDA.Types.Meter>(`${homePath}api/OpenXDA/Meter`);

const MeterAvailability = (props: {}) => {
    const [sortField, setSortField] = React.useState<keyof Meter>('Name');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [data, setData] = React.useState<Meter[]>([]);

    // ToDo: need to make a channels controller to handle this, one constrained by meter
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
        const meters = await MeterController.GetAll("Name", true) as Meter[];
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


    return (
        <Table<Meter>
            Data={data}
            SortKey={sortField}
            Ascending={ascending}
            OnSort={(d) => {
                if (d.colField == sortField) {
                    setAscending(!ascending);
                }
                else {
                    setAscending(ascending);
                    setSortField(d.colField);
                }
            }}
            KeySelector={item => item.ID}
        >
            <Column<Meter>
                Key="ID"
                Field="ID"
                HeaderStyle={{ width: '10%' }}
                RowStyle={{ width: '10%' }}
            >ID</Column>
            <Column<Meter>
                Key="Name"
                Field="Name"
            >Meter</Column>
            <Column<Meter>
                Key="FirstTime"
                Field="FirstTime"
                HeaderStyle={{ width: '20%' }}
                RowStyle={{ width: '20%' }}
                Content={row => moment.utc(row.item.FirstTime).tz('America/Chicago').format('MM/DD/YY HH:mm')}
            >First Data Logged (CST)</Column>
            <Column<Meter>
                Key="LastTime"
                Field="LastTime"
                HeaderStyle={{ width: '20%' }}
                RowStyle={{ width: '20%' }}
                Content={row => moment.utc(row.item.LastTime).tz('America/Chicago').format('MM/DD/YY HH:mm')}
            >Last Data Logged (CST)</Column>
            <Column<Meter>
                Key="Diff"
                AllowSort={false}
                HeaderStyle={{ width: '10%' }}
                RowStyle={{ width: '10%' }}
                Content={row => {
                    if (moment.utc().diff(moment.utc(row.item.LastTime), 'hour') <= 48)
                        return moment.utc().diff(moment.utc(row.item.LastTime), 'hour') + ' Hours';

                    row.style.backgroundColor = 'red';
                    if (moment.utc().diff(moment.utc(row.item.LastTime), 'days') <= 7)
                        return moment.utc().diff(moment.utc(row.item.LastTime), 'days') + ' Days - OOS';
                    else if (moment.utc().diff(moment.utc(row.item.LastTime), 'weeks') <= 52)
                        return moment.utc().diff(moment.utc(row.item.LastTime), 'weeks') + ' Weeks - OOS';
                    else return moment.utc().diff(moment.utc(row.item.LastTime), 'years') + ' Years - OOS';
                }}
            >Difference/Status</Column>
        </Table>);
}

export default MeterAvailability;