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
import EventSearchTable from '../EventSearch/EventSearchTable';
import EventSearchPreview from '../EventSearch/EventSearchPreview';
import EventSearchMagDur from '../EventSearch/EventSearchMagDur';
import { PQDigest, OpenXDA } from '../global';
import _ from 'lodash';
import Table from '@gpa-gemstone/react-table';
import queryString from "querystring";
import { createBrowserHistory } from "history"

const EventSearch = (props: {}) => {
    const history = createBrowserHistory();

    const qs = queryString.parse(location.search.substring(1));
    const [types, setTypes] = React.useState<OpenXDA.EventType[]>([])
    const [startDate, setStartDate] = React.useState<string>(qs.startDate == undefined ? moment().subtract(30, 'days').format("YYYY-MM-DD") : qs.startDate)
    const [endDate, setEndDate] = React.useState<string>(qs.endDate == undefined ? moment().format("YYYY-MM-DD") : qs.endDate)
    const [meters, setMeters] = React.useState<OpenXDA.Meter[]>([]);
    const [returnLimit, setReturnLimit] = React.useState<number>(qs.returnLimit == undefined ? 100: parseInt(qs.returnLimit as string));
    const [events, setEvents] = React.useState<OpenXDA.EventSearch[]>([]);
    const [sortField, setSortField] = React.useState<keyof OpenXDA.EventSearch>('StartTime');
    const [ascending, setAscending] = React.useState<boolean>(true);
    const [eventID, setEventID] = React.useState<number>(qs.eventID == undefined ? null : parseInt(qs.eventID as string));

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

        history.push({ pathname: homePath + 'EventSearch', search: `?startDate=${startDate}&endDate=${endDate}&returnLimit=${returnLimit}&types=${btoa(types.filter(x => x.Selected).map(x => x.ID).toString())}&meters=${btoa(meters.filter(x => x.Selected).map(x => x.ID).toString())}`})

        let handle1 = GetEventSearch();
        handle1.done((data: OpenXDA.EventSearch[]) => {
            setEvents(data);
        });


        return function () {
            if (handle1.abort != undefined) handle1.abort();
        }


    }, [types, startDate, endDate, meters, returnLimit]);

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
                StartDate: startDate,
                EndDate: endDate,
                Count: returnLimit,
                Meters: meters.filter(x => x.Selected).map(x => x.ID),
                Types: types.filter(x => x.Selected).map(x => x.ID)
            }),
            cache: true,
            async: true
        });
    }

    return (
        <div style={{ height: "100%", width: '100%' }}>
            <div className="row" style={{ height: 75, margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="card">
                        <div className="card-body" style={{height: 75}}>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col form-control" style={{border: '0px'}}>Return #</div>
                                        <div className="col">
                                            <select value={returnLimit} className="form-control" onChange={e => setReturnLimit(parseInt(e.target.value))}>
                                                <option>100</option>
                                                <option>250</option>
                                                <option>500</option>
                                                <option>1000</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col form-control" style={{ border: '0px' }}>Meters</div>
                                        <div className="col">
                                            <MultiSelect Options={meters.map(t => Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(evt, options) => {
                                                let newMeters = _.cloneDeep(meters);
                                                $.each(options, (index, option) => {
                                                    newMeters.find(meter => meter.ID == option.Value).Selected = !option.Selected
                                                });
                                                setMeters(newMeters)
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col form-control" style={{ border: '0px' }}>Type</div>
                                        <div className="col">
                                            <MultiSelect Options={types.map(t => Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(evt, options) => {
                                                let newTypes = _.cloneDeep(types);
                                                $.each(options, (index, option) => {
                                                    newTypes.find(type => type.ID == option.Value).Selected = !option.Selected
                                                });
                                                setTypes(newTypes)
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col form-control" style={{ border: '0px' }}>Start Date</div>
                                        <div className="col">
                                            <input className="form-control" value={startDate} type="date" onChange={e => setStartDate(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col form-control" style={{ border: '0px' }}>End Date</div>
                                        <div className="col">
                                            <input className="form-control" value={endDate} type="date" onChange={e => setEndDate(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' }}>
                <div className="col" style={{ padding: '0px 2px 0px 0px' }}>
                    <div className="card">
                        <div className="card-header">Events</div>
                        <div className="card-body" style={{ height: (window.innerHeight) - 275, padding:0 }}>
                            <Table<OpenXDA.EventSearch>
                                cols={[
                                    { key: 'StartTime', label: 'Date', headerStyle: { width: '25%' }, rowStyle: { width: '25%' }, content: (item, key, style) => moment(item[key]).format('MM/DD/YYYY HH:mm:ss')},
                                    //{ key: 'StartTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => moment(item[key]).format('HH:mm:ss') },
                                    { key: 'MeterName', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                    { key: 'EventType', label: 'Type', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                    { key: 'PerUnitMagnitude', label: 'Mag (pu)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: (item, key, style ) => (item[key] as number).toFixed(2)},
                                    { key: 'DurationSeconds', label: 'Dur (s)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: (item, key, style) => (item[key] as number).toFixed(2) },
                                    { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

                                ]}
                                tableClass="table table-hover"
                                data={events}
                                sortField={sortField}
                                ascending={ascending}
                                onSort={(d) => {
                                    if (d.col == sortField) {
                                        let ordered = _.orderBy(events, [sortField], [(!ascending ? 'asc' : 'desc')]);
                                        setEvents(ordered);
                                        setAscending(!ascending);
                                    }
                                    else {
                                        setAscending(ascending);
                                        setSortField(d.col);
                                        let ordered = _.orderBy(events, [d.col], [(ascending ? 'asc' : 'desc')]);
                                        setEvents(ordered);
                                    }
                                }}
                                onClick={(data) => { setEventID(data.row.ID)}}
                                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                                tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 300, width: '100%' }}
                                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                selected={(item) => item.ID == eventID}
                            />
                        </div>
                    </div>
                </div>
                <div className="col" style={{ padding: '0px 0px 0px 3px' }}>
                    <div className="card">
                        <div className="card-header">Event Preview</div>
                        <div className="card-body" style={{ height: (window.innerHeight) - 275 }}>
                            <EventSearchPreview  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MultiSelect = (props: { Options: { Value: number, Text: string, Selected: boolean }[], OnChange: (evt: any, Options: { Value: number, Text: string, Selected: boolean }[]) => void }) => {
    const [show, setShow] = React.useState<boolean>(false);
    const multiSelect = React.useRef(null);

    function HandleShow(evt) {
        if (!multiSelect.current.contains(evt.target))
            setShow(false);
        else
            setShow(true);

    }

    React.useEffect(() => {
        return function () {
        }
    }, [props.Options]);

    React.useEffect(() => {
        document.addEventListener('mousedown', HandleShow, false);
        return function () {
            document.removeEventListener('mousedown', HandleShow, false);
        }
    }, []);


    return (
        <div ref={multiSelect} style={{ position: 'relative', display: 'inline-block' }}>
            <button style={{ border: '1px solid #ced4da', padding: '.375rem .75rem', fontSize: '1rem', borderRadius: '.25rem' }} className="btn form-control dropdown-toggle" onClick={HandleShow}>{props.Options.filter(x => x.Selected).length != props.Options.length ? props.Options.filter(x => x.Selected).length : 'All ' } Selected</button>
            <div style={{ maxHeight: window.innerHeight*.75, overflowY: 'auto',padding: '10 5', display: show ? 'block' : 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }}>
                <table className='table' style={{margin: 0}}>
                    <tbody>
                        <tr onClick={(evt) => {
                            evt.preventDefault()
                            props.OnChange(evt, props.Options.filter(x => x.Selected == (props.Options.filter(x => x.Selected).length == props.Options.length)));
                        }}><td><input type="checkbox" checked={props.Options.filter(x => x.Selected).length == props.Options.length} onChange={() => null}/></td><td>All</td></tr>
                        {props.Options.map((f, i) => <tr key={i} onClick={(evt) => props.OnChange(evt, [f])}><td><input type="checkbox" checked={f.Selected} onChange={()=> null}/></td><td>{f.Text}</td></tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default EventSearch;