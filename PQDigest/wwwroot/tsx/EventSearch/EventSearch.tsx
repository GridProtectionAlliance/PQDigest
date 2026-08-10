//******************************************************************************************************
//  EventSearch.tsx - Gbtc
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
import EventSearchPreview from '../EventSearch/EventSearchPreview';
import { OpenXDA } from '../global';
import _ from 'lodash';
import { Table, Column } from '@gpa-gemstone/react-table';
import { DateRangePicker, MultiCheckBoxSelect, Select } from '@gpa-gemstone/react-forms';
import queryString from "querystring";
import { createBrowserHistory } from "history"
import { ExportToCsv } from '../ExportCSV';
import MagDurChart from '../MagDurChart';
import moment from 'moment';


interface EventFilter {
    ReturnLimit: number,
    StartDate: string,
    EndDate: string
}

const momentFormat = "YYYY-MM-DD";

const EventSearch = (props: {}) => {
    const history = createBrowserHistory();
    const qs = queryString.parse(location.search.substring(1));
    const [eventFilter, setEventFilter] = React.useState<EventFilter>(() => ({
        ReturnLimit: qs.returnLimit == undefined ? 100 : parseInt(qs.returnLimit as string),
        EndDate: qs.endDate == undefined ? moment().format(momentFormat) : qs.endDate as string,
        StartDate: qs.startDate == undefined ? moment().subtract(30, 'days').format(momentFormat) : qs.startDate as string
    }));

    const [types, setTypes] = React.useState<OpenXDA.EventType[]>([])
    const [meters, setMeters] = React.useState<OpenXDA.Meter[]>([]);
    const [events, setEvents] = React.useState<OpenXDA.EventSearch[]>([]);
    const [eventCounts, setEventCounts] = React.useState<number>(0);

    const [sortField, setSortField] = React.useState<keyof OpenXDA.EventSearch>('StartTime');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [eventID, setEventID] = React.useState<number>(qs.eventID == undefined ? 0 : parseInt(qs.eventID as string));
    const [showEventList, setShowEventList] = React.useState<boolean>(true);

    React.useEffect(() => {
        let handle1 = GetTypes();
        handle1.done((data: OpenXDA.EventType[]) => {
            let b64string = (qs.types == undefined ? '': qs.types)
            let ids = atob(b64string as string).split(',').map(a => parseInt(a))
            if(qs.types == undefined)
                data.forEach(value => value.Selected = true)
            else
                data.forEach(value => value.Selected = ids.indexOf(value.ID) >= 0)

            setTypes(data);
        });

        let handle2 = GetMeters();
        handle2.done((data: OpenXDA.Meter[]) => {
            let b64string = (qs.meters == undefined ? '' : qs.meters)
            let ids = atob(b64string as string).split(',').map(a => parseInt(a))
            if (qs.meters == undefined)
                data.forEach(value => value.Selected = true)
            else
                data.forEach(value => value.Selected = ids.indexOf(value.ID) >= 0)

            setMeters(data);
        });

        return function () {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();

        }
    }, []);

    React.useEffect(() => {
        
        if (meters.length == 0 || types.length == 0) return;

        history.push({ pathname: homePath + 'EventSearch', search: `?eventID=${eventID}&startDate=${eventFilter.StartDate}&endDate=${eventFilter.EndDate}&returnLimit=${eventFilter.ReturnLimit}&types=${btoa(types.filter(x => x.Selected).map(x => x.ID).toString())}&meters=${btoa(meters.filter(x => x.Selected).map(x => x.ID).toString())}`})

        let handle1 = GetEventSearch();
        handle1.done((data: OpenXDA.EventSearch[]) => {
            setEvents(data);
        });
        let handle2= GetEventSearchCount();
        handle2.done((data: number) => {
            setEventCounts(data);
        });


        return function () {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();

        }


    }, [types, eventFilter, meters, sortField, ascending]);

    function GetTypes(): JQuery.jqXHR<OpenXDA.EventType[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/EventType`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetMeters(): JQuery.jqXHR<OpenXDA.Meter[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Meter`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetEventSearch(): JQuery.jqXHR<OpenXDA.EventSearch[]> {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/EventSearch`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                StartDate: eventFilter.StartDate,
                EndDate: eventFilter.EndDate,
                Count: eventFilter.ReturnLimit,
                SortField: sortField,
                Ascending: ascending,
                Meters: meters.filter(x => x.Selected).map(x => x.ID),
                Types: types.filter(x => x.Selected).map(x => x.ID)
            }),
            cache: true,
            async: true
        });
    }

    function GetEventSearchCount(): JQuery.jqXHR<number> {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/OpenXDA/EventSearch/count`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                StartDate: eventFilter.StartDate,
                EndDate: eventFilter.EndDate,
                Count: eventFilter.ReturnLimit,
                SortField: sortField,
                Ascending: ascending,
                Meters: meters.filter(x => x.Selected).map(x => x.ID),
                Types: types.filter(x => x.Selected).map(x => x.ID)
            }),
            cache: true,
            async: true
        });
    }

    return (
        <div style={{ height: "100%", width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="row" style={{ margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="card">
                        <div className="card-body" style={{height: '145px'}}>
                            <div className="row">
                                <div className="col-2">
                                    <Select<EventFilter>
                                        Options={[{ Label: "100", Value: 100 }, { Label: "250", Value: 250 }, { Label: "500", Value: 500 }, { Label: "1000", Value: 1000 }]}
                                        Setter={setEventFilter}
                                        Field='ReturnLimit'
                                        Label="Return #"
                                        Record={eventFilter}
                                    />
                                </div>
                                <div className="col-2">
                                    <MultiCheckBoxSelect Label="Meters" Options={meters.map(t => ({ Label: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(_evt, options) => {
                                        let newMeters = _.cloneDeep(meters);
                                        $.each(options, (index, option) => {
                                            newMeters.find(meter => meter.ID == option.Value).Selected = !option.Selected
                                        });
                                        setMeters(newMeters)
                                    }} />
                                </div>
                                <div className="col-2">
                                    <MultiCheckBoxSelect Label="Type" Options={types.map(t => ({ Label: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(_evt, options) => {
                                        let newTypes = _.cloneDeep(types);
                                        $.each(options, (index, option) => {
                                            newTypes.find(type => type.ID == option.Value).Selected = !option.Selected
                                        });
                                        setTypes(newTypes)
                                    }} />
                                </div>
                                <div className="col-6">
                                    <DateRangePicker<EventFilter>
                                        FromField="StartDate"
                                        ToField="EndDate"
                                        Label="Date Range"
                                        Type="date"
                                        Valid={() => eventFilter.StartDate != null && eventFilter.EndDate != null &&
                                            moment(eventFilter.StartDate, momentFormat) <= moment(eventFilter.EndDate, momentFormat)}
                                        Feedback="Date range is required, and start may not be after end."
                                        Record={eventFilter}
                                        Format={momentFormat}
                                        Setter={setEventFilter}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ flex: 1, margin: '5px 5px 5px 5px', overflow: 'hidden' }}>
                <div className="col-6 h-100" style={{ padding: '0px 2px 0px 0px' }}>
                    <div className="card h-100" style={{ display: 'flex', flexDirection: "column"}}>
                        <div className="card-header">
                            Events (Showing { events?.length ?? 0} of { eventCounts})
                            <button className="btn btn-danger" style={{ position: 'absolute', top: 5, right: 120 }} onClick={() => setShowEventList(!showEventList)}>View as {(showEventList? 'Mag/Dur' : 'List')}</button>
                            <button className="btn btn-primary" style={{ position: 'absolute', top: 5, right: 5 }} onClick={() => ExportToCsv(events, 'EventSearch.csv')}>Export CSV</button>
                        </div>
                        <div className="card-body p-0" style={{ flex: 1, overflow: 'hidden', display: 'flex' }}>
                            {showEventList ?
                                <Table<OpenXDA.EventSearch>
                                    Data={events}
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
                                    OnClick={data => setEventID(data.row.ID)}
                                    Selected={item => item.ID == eventID}
                                    KeySelector={item => item.ID }
                                >
                                    <Column<OpenXDA.EventSearch>
                                        Key="StartTime"
                                        Field="StartTime"
                                        HeaderStyle={{ width: '25%' }}
                                        RowStyle={{ width: '25%' }}
                                        Content={row => row.item[row.key] != undefined ? moment(row.item[row.key]).format('MM/DD/YYYY HH:mm:ss') : '' }
                                    >Date</Column>
                                    <Column<OpenXDA.EventSearch>
                                        Key="MeterName"
                                        Field="MeterName"
                                    >Meter</Column>
                                    <Column<OpenXDA.EventSearch>
                                        Key="EventType"
                                        Field="EventType"
                                        HeaderStyle={{ width: '12%' }}
                                        RowStyle={{ width: '12%' }}
                                    >Type</Column>
                                    <Column<OpenXDA.EventSearch>
                                        Key="Phase"
                                        Field="Phase"
                                        HeaderStyle={{ width: '12%' }}
                                        RowStyle={{ width: '12%' }}
                                    >Phase</Column>
                                    <Column<OpenXDA.EventSearch>
                                        Key="PerUnitMagnitude"
                                        Field="PerUnitMagnitude"
                                        HeaderStyle={{ width: '12%' }}
                                        RowStyle={{ width: '12%' }}
                                        Content={row => row.item[row.key] != undefined ? (row.item[row.key] as number).toFixed(2) : ''}
                                    >Mag (pu)</Column>
                                    <Column<OpenXDA.EventSearch>
                                        Key="DurationSeconds"
                                        Field="DurationSeconds"
                                        HeaderStyle={{ width: '12%' }}
                                        RowStyle={{ width: '12%' }}
                                        Content={row => row.item[row.key] != undefined ? (row.item[row.key] as number).toFixed(2) : ''}
                                    >Dur (s)</Column>
                                </Table> :
                                <MagDurChart Height={(window.innerHeight) - 275} Width={window.innerWidth / 2 - 20} Points={events} OnSelect={(_evt, point) => setEventID(point.ID)}/>}
                        </div>
                    </div>
                </div>
                <div className="col-6 h-100" style={{ padding: '0px 0px 0px 3px' }}>
                    <div className="card h-100">
                        {/*<div className="card-header">Event Preview</div>*/}
                        <div className="card-body" style={{ padding: 0 }}>
                            <EventSearchPreview Event={events.find(e => e.ID == eventID)} Height={window.innerHeight - 226} Width={window.innerWidth / 2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventSearch;