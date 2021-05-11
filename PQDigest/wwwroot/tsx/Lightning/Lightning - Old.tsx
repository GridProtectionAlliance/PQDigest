//******************************************************************************************************
//  Lightning.tsx - Gbtc
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
import { PQDigest, OpenXDA } from '../global';
import _ from 'lodash';
import Table from '@gpa-gemstone/react-table';
import queryString from "querystring";
import { createBrowserHistory } from "history"
import { ExportToCsv } from '../ExportCSV';
import { MultiCheckBoxSelect } from '@gpa-gemstone/react-forms';
import moment from 'moment';

import ESRIMap from './ESRIMap - Old';

type ToleranceUnit = 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years';
const Lightning = (props: {}) => {
    const history = createBrowserHistory();

    const qs = queryString.parse(location.search.substring(1));
    const [date, setDate] = React.useState<string>(qs.startDate == undefined ? moment().format("YYYY-MM-DDTHH:mm") : qs.date as string)
    const [tolerance, setTolerance] = React.useState<number>(qs.tolerance == undefined ? 1 : parseInt(qs.tolerance as string))
    const [toleranceUnits, setToleranceUnits] = React.useState<ToleranceUnit>(qs.toleranceUnits == undefined ? 'minutes' : qs.toleranceUnits as ToleranceUnit)
    const [radius, setRadius] = React.useState<number>(qs.radius == undefined ? 20 : parseInt(qs.radius as string))

    const [meters, setMeters] = React.useState<OpenXDA.Meter[]>([]);
    const [sortField, setSortField] = React.useState<keyof OpenXDA.EventSearch>('StartTime');
    const [ascending, setAscending] = React.useState<boolean>(true);

    const [lines, setLines] = React.useState<GeoJSON.FeatureCollection<GeoJSON.Polygon>>(null)
    const [buffers, setBuffers] = React.useState<GeoJSON.GeometryCollection>(null);
    const [strikes, setStrikes] = React.useState<any>(null);

    React.useEffect(() => {

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
            //if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();

        }
    }, []);

    React.useEffect(() => {
        let handle = GetLines();
        handle.done(data => {
            setLines(data);
        });


        return () => {
            if (handle.abort != undefined) handle.abort();
        }
    }, [meters]);

    React.useEffect(() => {
        if (lines == null) return;

        let handle1 = GetBuffers();

        handle1.done(data => {
            setBuffers(data);
        });

        return () => {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [lines]);

    React.useEffect(() => {
        if (buffers == null) return;

        let handle2 = GetStrikes();
        handle2.done(d => {
            setStrikes(d)
        });
        return () => {
            if (handle2 != null && handle2.abort != undefined) handle2.abort();

        }
    }, [buffers]);

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

    function GetLines(): JQuery.jqXHR<GeoJSON.FeatureCollection<GeoJSON.Polygon>> {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/ESRI/Line`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Meters: meters.map(meter => meter.ID) }),
            cache: true,
            async: true
        });
    }

    function GetBuffers(): JQuery.jqXHR<GeoJSON.GeometryCollection> {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/ESRI/Buffer`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Radius: radius, LineJSON: JSON.stringify({ geometryType: "esriGeometryPolyline", geometries: lines.features.map(a => { return { paths: [a.geometry.coordinates] } }) }) }),
            cache: true,
            async: true
        });
    }

    function GetStrikes(): JQuery.jqXHR<GeoJSON.FeatureCollection> {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/ESRI/Lightning`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ BufferJSON: JSON.stringify(buffers.geometries[0]), TimeExtent: GetTimeExtent() }),
            cache: true,
            async: true
        });
    }

    function GetTimeExtent(): string {
        let adjustedDate = date;
        //if (moment(date)._d.toTimeString().indexOf('Eastern'))
        //    adjustedDate = moment(date).add(-1, 'hours').format("YYYY-MM-DDTHH:mm");
        let startTime = moment(adjustedDate).add(-tolerance, toleranceUnits);
        let endTime = moment(adjustedDate).add(tolerance, toleranceUnits);

        return `${startTime.utc().format('x')},${endTime.utc().format('x')}`;
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
                                            <div className="col form-control" style={{ border: '0px' }}>Meters</div>
                                            <div className="col">
                                                <MultiCheckBoxSelect Options={meters.map(t => Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(evt, options) => {
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
                                        <div className="col form-control" style={{ border: '0px' }}>Date</div>
                                        <div className="col">
                                            <input className="form-control" value={date} type="datetime-local" onChange={e => setDate(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col form-control" style={{ border: '0px' }}>Tolerance</div>
                                        <div className="col">
                                            <input className="form-control" value={tolerance} type="number" onChange={e => setTolerance(parseFloat(e.target.value))} />
                                        </div>
                                        <div className="col">
                                            <select className="form-control" value={toleranceUnits} onChange={e => setToleranceUnits(e.target.value as ToleranceUnit)}>
                                                <option value='minutes'>Minute(s)</option>
                                                <option value='hours'>Hour(s)</option>
                                                <option value='days'>Day(s)</option>
                                                <option value='weeks'>Week(s)</option>
                                                <option value='months'>Month(s)</option>
                                                <option value='years'>Year(s)</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col form-control" style={{ border: '0px' }}>Radius (mi)</div>
                                            <div className="col">
                                                <input className="form-control" value={radius} type="number" onChange={e => setRadius(parseFloat(e.target.value))} />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' }}>
                <div className="col" style={{ padding: '0px 0px 0px 3px', width: window.innerWidth / 2 }}>
                    <div className="card">
                        {/*<div className="card-header">Event Preview</div>*/}
                        <div className="card-body" style={{ height: (window.innerHeight) - 226, padding: 0 }}>
                            <ESRIMap DateTime={date} Strikes={strikes} Lines={lines} Buffers={buffers} Height={(window.innerHeight) - 226} Width={window.innerWidth / 2} />
                        </div>
                    </div>
                </div>

                <div className="col" style={{ padding: '0px 2px 0px 0px', width: window.innerWidth / 2 }}>
                    <div className="card">
                        <div className="card-header">
                            Strikes
                            <button className="btn btn-primary" style={{ position: 'absolute', top: 5, right: 5 }} onClick={() => ExportToCsv([], 'EventSearch.csv')}>Export CSV</button>
                        </div>
                        <div className="card-body" style={{ height: (window.innerHeight) - 275, padding: 0 }}>
                            <Table<{ AMPLITUDE: number, DISPLAYTIME: string, LATITUDE: number, LONGITUDE}>
                                cols={[
                                    { key: 'DISPLAYTIME', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                    { key: 'AMPLITUDE', label: 'Amplitude', headerStyle: { width: '25%' }, rowStyle: { width: '25%' } },
                                    { key: 'LATITUDE', label: 'Lat', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                    { key: 'LONGITUDE', label: 'Lon', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                    { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

                                ]}
                                tableClass="table table-hover"
                                data={(strikes != null ? strikes.features.map(s => s.attributes) : [])}
                                sortField={"DISPLAYTIME"}
                                ascending={true}
                                onSort={null}
                                onClick={null}
                                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                                tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 300, width: '100%' }}
                                rowStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }}
                                selected={() => false}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lightning;