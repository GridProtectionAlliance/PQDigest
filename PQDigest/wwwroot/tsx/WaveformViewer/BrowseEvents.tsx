//******************************************************************************************************
//  BrowseEvents.tsx - Gbtc
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
//  08/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';

const BrowseEvents = (props: { EventID: number }) => {
    const [all, setAll] = React.useState<boolean>(false);
    const [nextID, setNextID] = React.useState<number>(null);
    const [backID, setBackID] = React.useState<number>(null);

    React.useEffect(() => {
        let handle1 = GetEventID(false, all);
        let handle2 = GetEventID(true, all);
        handle1.done(next => setNextID(next == undefined || next.length == 0 ? null : next[0]['ID']));
        handle2.done(back => setBackID(back == undefined || back.length == 0 ? null : back[0]['ID']));

        return () => {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();
        }
    }, [props.EventID, all]);

    function GetEventID(n: boolean, a: boolean ): JQuery.jqXHR<object[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/${n ? 'Next': 'Previous'}Event/${a? 'AllMeters':'Meter'}/${props.EventID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }


    try {
        return (
            <div>
                
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" style={{marginLeft: -15}} className="form-check-input" checked={all} onChange={() => setAll(!all)}/>All Meters
                  </label>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><a href={backID == null ? null : `${homePath}WaveformViewer?EventID=${backID}`}>Previous</a></td>
                            <td><a href={nextID == null ? null : `${homePath}WaveformViewer?EventID=${nextID}`}>Next</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    catch {
        return null;
    }
}



export default BrowseEvents;