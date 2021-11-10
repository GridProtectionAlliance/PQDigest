//******************************************************************************************************
//  EventSearchPQI.tsx - Gbtc
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
//  07/02/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import PQIChart, { Point } from './PQIChart';
import { OpenXDA } from '../../global';

export default function EventSearchPQI(props: { EventID: number, Width: number, Height: number }) {
    const [components, setComponents] = React.useState<any[]>([]);
    const [component, setComponent] = React.useState<any>({TestCurveID: 0});
    const [points, setPoints] = React.useState<Point[]>([]);
    const [curve, setCurve] = React.useState<Point[]>([]);

    React.useEffect(() => {
        setComponent({ TestCurveID: 0 });
        setComponents([]);
        setPoints([]);
        setCurve([]);

        let handle1 = GetComponents();
        handle1.done((data: any[]) => {
            setComponents(data);
        });

        let handle2 = GetDisturbances();
        handle2.done((data) => {
            setPoints(data.map(d => Object.create({Duration: d.DurationSeconds, Magnitude: d.PerUnitMagnitude})));
        });

        return function () {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [props.EventID])

    React.useEffect(() => {
        let handle1 = GetComponentCurve();
        handle1.done((data: any[]) => {
            setCurve(data);
        });


        return function () {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [component])

    function GetComponents(): JQuery.jqXHR<any[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/PQI/Components/${props.EventID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetComponentCurve(): JQuery.jqXHR<any[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/PQI/Component/Curve/${component.CurveDB}/${component.TestCurveID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetDisturbances(): JQuery.jqXHR<OpenXDA.Disturbance[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/PQI/Distrubances/${props.EventID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }


    try {
        return (
            <div className="card">
                <div className="card-header">PQI - Ride-through Curves
                <select value={component.TestCurveID} className='form-control' style={{ width: 200, position: 'absolute', right: 6, top: 4 }} onChange={(evt) => {
                        let c = components.find(x => x.TestCurveID == evt.target.value);
                        setComponent(c == undefined ? { TestCurveID: 0}: c)
                    }}>
                        <option value='0'>NERC PRC-024-2</option>
                        {
                            components.map((comp, index) => <option key={index} value={comp.TestCurveID}>{comp.Title}</option>)
                        }
                    </select>
                </div>
                <div className="card-body" style={{ height: props.Height - 50, padding: 0 }}>
                    <PQIChart Height={props.Height - 50} Width={props.Width} Points={points} Curve={curve} />
                </div>
            </div>
        )
    }
    catch(err){
        return err 
    }
}