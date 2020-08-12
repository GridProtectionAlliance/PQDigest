//******************************************************************************************************
//  ComparableEvents.tsx - Gbtc
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

const ComparableEvents = (props: { EventID: number, ComparableEventID: number, OnChange: (id: number) => void }) => {
    const [comparableEvents, setComparableEvents] = React.useState<{ID: number, Meter: string, Difference: number}[]>([]);

    React.useEffect(() => {
        let handle1 = GetComparableEvents();
        handle1.done(events => setComparableEvents(events));

        return () => {
            if (handle1.abort != undefined) handle1.abort();
        }
    }, [props.EventID]);

    function GetComparableEvents(): JQuery.jqXHR<{ID: number, Meter: string, Difference: number}[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/ComparableEvents/${props.EventID}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }


    try {
        return (
            <select className="form-control" value={props.ComparableEventID} onChange={(evt) => props.OnChange(parseInt(evt.target.value))}>
                <option value="0">None</option>
                {
                    comparableEvents.map(ces => <option key={ces.ID} value={ces.ID}>{ces.Meter} ({ces.Difference} ms)</option>)
                } 
            </select>
        );
    }
    catch {
        return null;
    }
}



export default ComparableEvents;