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
import { PQDigest, OpenXDA, Lightning } from '../global';
import _ from 'lodash';
import Table from '@gpa-gemstone/react-table';
import queryString from "querystring";
import { createBrowserHistory } from "history"
import { ExportToCsv } from '../ExportCSV';

import ESRIMap from './ESRIMap';

type ToleranceUnit = 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
const Lightning = (props: {}) => {
    const history = createBrowserHistory();

    const qs = queryString.parse(location.search.substring(1));
    const [date, setDate] = React.useState<string>(qs.date == undefined ? moment().format("YYYY-MM-DDTHH:mm") : qs.date)
    const [tolerance, setTolerance] = React.useState<number>(qs.tolerance == undefined ? 1 : parseInt(qs.tolerance as string))
    const [toleranceUnits, setToleranceUnits] = React.useState<ToleranceUnit>(qs.units == undefined ? 'minute' : qs.units as ToleranceUnit)

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

    return (
        <div style={{ height: "100%", width: '100%' }}>
            <div className="row" style={{ height: 75, margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="card">
                        <div className="card-body" style={{ height: 75 }}>
                            <div className="row">                               
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
                            <ESRIMap DateTime={date} Strikes={strikes} Height={(window.innerHeight) - 226} Width={window.innerWidth / 2} Bounds={bounds} SetBounds={setBounds }/>
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
                                cols={[
                                    { key: 'DisplayTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                    { key: 'Amplitude', label: 'Amplitude', headerStyle: { width: '25%' }, rowStyle: { width: '25%' } },
                                    { key: 'Latitude', label: 'Lat', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                    { key: 'Longitude', label: 'Lon', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                    { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },

                                ]}
                                tableClass="table table-hover"
                                data={strikes}
                                sortField={"DisplayTime"}
                                ascending={true}
                                onSort={null}
                                onClick={null}
                                theadStyle={{ fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }}
                                tbodyStyle={{ display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 340, width: '100%' }}
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