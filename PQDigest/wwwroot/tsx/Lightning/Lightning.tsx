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
import { OpenXDA, Lightning } from '../global';
import _ from 'lodash';
import { Table, Column } from '@gpa-gemstone/react-table';
import queryString from "querystring";
import { createBrowserHistory } from "history"
import { ExportToCsv } from '../ExportCSV';

import ESRIMap from './ESRIMap';
import L from 'leaflet';
import moment from 'moment';

type ToleranceUnit = 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
const Lightning = (props: {}) => {
    const history = createBrowserHistory();

    const qs = queryString.parse(location.search.substring(1));
    const [date, setDate] = React.useState<string>(qs.date == undefined ? moment().format("YYYY-MM-DDTHH:mm") : qs.date as string)
    const [tolerance, setTolerance] = React.useState<number>(qs.tolerance == undefined ? 1 : parseInt(qs.tolerance as string))
    const [toleranceUnits, setToleranceUnits] = React.useState<ToleranceUnit>(qs.units == undefined ? 'minute' : qs.units as ToleranceUnit)
    const [locations, setLocations] = React.useState<OpenXDA.Location[]>([]);
    const [strike, setStrike] = React.useState<Lightning.Strike>(null)

    const [bounds, setBounds] = React.useState<[[number, number], [number, number]]>([
        [
            qs.swlat == undefined ? 34.9647481 : parseFloat(qs.swlat as string),
            qs.swlng == undefined ? -85.410478099 : parseFloat(qs.swlng as string)
        ],
        [
            qs.nelat == undefined ? 35.1505122 : parseFloat(qs.nelat as string),
            qs.nelng == undefined ? -85.1770186266 : parseFloat(qs.nelng as string)
        ]
    ]);
    const [strikes, setStrikes] = React.useState<Lightning.Strike[]>([]);

    React.useEffect(() => {
        let handle2 = GetLocations();
        handle2.done((data: OpenXDA.Location[]) => {
            setLocations(data);
            let json: GeoJSON.FeatureCollection<GeoJSON.Point> = {
                type: "FeatureCollection",
                features: data.map(location => {
                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [location.Longitude, location.Latitude]
                        },
                        properties: {}

                    }
                })
            };
            let b = L.geoJSON(json).getBounds();
            setBounds([[b.getSouthWest().lat, b.getSouthWest().lng], [b.getNorthEast().lat, b.getNorthEast().lng]]);
        });
        return function () {
            if (handle2.abort != undefined) handle2.abort();

        }

    }, []);
    React.useEffect(() => {
        history.push({
            pathname: homePath + 'Lightning',
            search: `?date=${date}&tolerance=${tolerance}&units=${toleranceUnits}&nelat=${bounds[1][0]}&swlat=${bounds[0][0]}&nelng=${bounds[1][1]}&swlng=${bounds[0][1]}`
        })

        let handle = GetStrikes();
        handle.done(s => setStrikes(s));

        return function () {
            if (handle.abort != undefined) handle.abort();

        }
    }, [bounds, tolerance, toleranceUnits]);



    function GetStrikes(): JQuery.jqXHR<Lightning.Strike[]> {
        return $.ajax({
            type: "POST",
            url: `${homePath}api/Lightning/Strikes`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                DateTime: date,
                Units: toleranceUnits,
                Tolerance: tolerance,
                NELat: bounds[1][0],
                NELng: bounds[1][1],
                SWLat: bounds[0][0],
                SWLng: bounds[0][1]
            }),
            cache: true,
            async: true
        });
    }

    function GetLocations(): JQuery.jqXHR<OpenXDA.Location[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Location`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
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
                                        <div className="col form-control text-right" style={{ border: '0px' }}>Date (CST)</div>
                                        <div className="col">
                                            <input className="form-control" value={date} type="datetime-local" onChange={e => setDate(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col form-control text-right" style={{ border: '0px' }}>Time Window (+/-)</div>
                                        <div className="col">
                                            <input className="form-control" value={tolerance} type="number" onChange={e => setTolerance(parseFloat(e.target.value))} />
                                        </div>
                                        <div className="col">
                                            <select className="form-control" value={toleranceUnits} onChange={e => setToleranceUnits(e.target.value as ToleranceUnit)}>
                                                <option value='minute'>Minute(s)</option>
                                                <option value='hour'>Hour(s)</option>
                                                <option value='day'>Day(s)</option>
                                                <option value='week'>Week(s)</option>
                                                <option value='month'>Month(s)</option>
                                                <option value='year'>Year(s)</option>
                                            </select>
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
                        <div className="card-body" style={{ height: (window.innerHeight) - 226, padding: 0 }}>
                            <ESRIMap DateTime={date} Strike={strike} SetStrike={setStrike}Strikes={strikes} Locations={locations} Height={(window.innerHeight) - 226} Width={window.innerWidth / 2} Bounds={bounds} SetBounds={setBounds }/>
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
                            <Table<Lightning.Strike>
                                Data={strikes}
                                SortKey={"DisplayTime"}
                                Ascending={true}
                                OnSort={null}
                                OnClick={(data) => setStrike(data.row)}
                                Selected={(data) => data.DisplayTime == strike?.DisplayTime && data.Amplitude == strike?.Amplitude && data.Latitude == strike?.Latitude && data.Longitude == strike?.Longitude}
                                KeySelector={(_, index) => index /* If we add sorting here, we will need to change this key selector. */ }
                            >
                                <Column<Lightning.Strike>
                                    Key="DisplayTime"
                                    Field="DisplayTime"
                                >Time (CST)</Column>
                                <Column<Lightning.Strike>
                                    Key="Amplitude"
                                    Field="Amplitude"
                                    HeaderStyle={{ width: '25%' }}
                                    RowStyle={{ width: '25%' }}
                                >Amplitude (kA)</Column>
                                <Column<Lightning.Strike>
                                    Key="Latitude"
                                    Field="Latitude"
                                    HeaderStyle={{ width: '12%' }}
                                    RowStyle={{ width: '12%' }}
                                >Lat</Column>
                                <Column<Lightning.Strike>
                                    Key="Longitude"
                                    Field="Longitude"
                                    HeaderStyle={{ width: '12%' }}
                                    RowStyle={{ width: '12%' }}
                                >Lon</Column>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lightning;