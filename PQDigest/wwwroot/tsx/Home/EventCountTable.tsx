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
import Table from '@gpa-gemstone/react-table';
import _ from 'lodash';

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

const EventCountTable = (props: { Width: number, Height: number}) => {
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


    return <Table<Meter>
        cols={[
            { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
            { key: 'Total', label: 'Total', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Sag', label: 'Sag', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Swell', label: 'Swell', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Interruption', label: 'Int', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Transient', label: 'Trans', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Fault', label: 'Fault', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

        ]}
        tableClass="table table-hover"
        data={data}
        sortField={sortField}
        ascending={ascending}
        onSort={(d) => {
            if (d.col == sortField) {
                let ordered = _.orderBy(data, [sortField], [(!ascending ? 'asc' : 'desc')]);
                setData(ordered);
                setAscending(!ascending);
            }
            else {
                setAscending(ascending);
                setSortField(d.col);
                let ordered = _.orderBy(data, [d.col], [(ascending ? 'asc' : 'desc')]);
                setData(ordered);
            }
        }}
        onClick={(data) => { window.open(`${homePath}EventSearch?startDate=${moment().subtract(30, 'days').format("YYYY-MM-DD")}&endDate=${moment().format("YYYY-MM-DD")}&returnLimit=100&meters=${btoa(data.row.ID.toString())}`)}}
        theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
        tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: props.Height - 60, width: '100%' }}
        rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
        selected={(item) => false}
    />
;

}

export default EventCountTable;