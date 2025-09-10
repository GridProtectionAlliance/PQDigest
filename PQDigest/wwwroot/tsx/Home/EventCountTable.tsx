//******************************************************************************************************
//  EventCountTable.tsx - Gbtc
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
//  06/22/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { Table, Column } from '@gpa-gemstone/react-table';
import _ from 'lodash';
import moment from 'moment';

interface Meter {
    ID: number,
    Name: string,
    Total: number,
    Sag: number,
    Swell: number,
    Interruption: number,
    Transient: number,
    Fault: number
}

const EventCountTable = () => {
    const [data, setData] = React.useState<Array<Meter>>([]);
    const [sortField, setSortField] = React.useState<keyof Meter>('Name');
    const [ascending, setAscending] = React.useState<boolean>(true);

    React.useEffect(() => {
        return GetData();
    }, []);

    function GetData() {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/EventCountsTable`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done((data: Array<Meter>) => setData(data));


        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }


    return (
        <Table<Meter>
            Data={data}
            SortKey={sortField}
            Ascending={ascending}
            OnSort={(d) => {
                if (d.colField == sortField) {
                    let ordered = _.orderBy(data, [sortField], [(!ascending ? 'asc' : 'desc')]);
                    setData(ordered);
                    setAscending(!ascending);
                }
                else {
                    setAscending(ascending);
                    setSortField(d.colField);
                    let ordered = _.orderBy(data, [d.colField], [(ascending ? 'asc' : 'desc')]);
                    setData(ordered);
                }
            }}
            OnClick={(data) => { window.open(`${homePath}EventSearch?startDate=${moment().subtract(30, 'days').format("YYYY-MM-DD")}&endDate=${moment().format("YYYY-MM-DD")}&returnLimit=100&meters=${btoa(data.row.ID.toString())}`) }}
            KeySelector={item => item.ID }
        >
            <Column<Meter>
                Key="Name"
                Field="Name"
            >Meter</Column>
            <Column<Meter>
                Key="Total"
                Field="Total"
                HeaderStyle={{ width: '12%' }}
                RowStyle={{ width: '12%' }}
            >Total</Column>
            <Column<Meter>
                Key="Sag"
                Field="Sag"
                HeaderStyle={{ width: '12%' }}
                RowStyle={{ width: '12%' }}
            >Sag</Column>
            <Column<Meter>
                Key="Swell"
                Field="Swell"
                HeaderStyle={{ width: '12%' }}
                RowStyle={{ width: '12%' }}
            >Swell</Column>
            <Column<Meter>
                Key="Interruption"
                Field="Interruption"
                HeaderStyle={{ width: '12%' }}
                RowStyle={{ width: '12%' }}
            >Int.</Column>
            <Column<Meter>
                Key="Transient"
                Field="Transient"
                HeaderStyle={{ width: '12%' }}
                RowStyle={{ width: '12%' }}
            >Trans.</Column>
            <Column<Meter>
                Key="Fault"
                Field="Fault"
                HeaderStyle={{ width: '12%' }}
                RowStyle={{ width: '12%' }}
            >Fault</Column>
        </Table>);
}

export default EventCountTable;