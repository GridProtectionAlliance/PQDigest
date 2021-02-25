//******************************************************************************************************
//  Info.tsx - Gbtc
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
//  08/12/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


import React from 'react';
import { OpenXDA } from '../global';

const Info = (props: { EventID: number }) => {
    const [info, setInfo] = React.useState<OpenXDA.Event.Info>(null);

    React.useEffect(() => {
        let handle1 = GetEventInfo();
        handle1.done(info => setInfo(info[0]));

        return () => {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [props.EventID]);

    function GetEventInfo(): JQuery.jqXHR<OpenXDA.Event.Info[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Info/${props.EventID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }


    try {
        if (info == null) return null;

        return (
            <table className="table">
                <tbody>
                    <tr><td>Meter</td><td>{info.Meter}</td></tr>
                    <tr><td>Time</td><td>{moment(info.StartTime).format('MM/DD/YYYY HH:mm')}&nbsp;(CST)</td></tr>
                    <tr><td>Type</td><td>{info.EventType}</td></tr>
                    <tr><td>Phase</td><td>{info.Phase}</td></tr>
                    <tr><td>Duration</td><td>{info.Duration}</td></tr>
                    {/*<tr><td>Magnitude</td><td>{info.Magnitude}</td></tr>*/}
                    <tr><td>Magnitude</td><td>{info.SagDepth}</td></tr>
                </tbody>
            </table>
        );
    }
    catch {
        return null;
    }
}



export default Info;