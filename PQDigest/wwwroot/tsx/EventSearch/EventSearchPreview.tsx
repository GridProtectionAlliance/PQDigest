//******************************************************************************************************
//  EventSearchPreview.tsx - Gbtc
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
//  06/29/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import WidgetRouter from '../../../EventWidgets/TSX/WidgetWrapper';
import { Alert, LoadingIcon } from '@gpa-gemstone/react-interactive'
import { ReadOnlyControllerFunctions_Gemstone } from '@gpa-gemstone/common-pages';
import { PQDigest } from '../global';
import { Application } from '@gpa-gemstone/application-typings';

const WidgetController = new ReadOnlyControllerFunctions_Gemstone<PQDigest.IWidget>(`${homePath}api/PQDigest/EventWidgets`);

const EventSearchPreview = (props: { ID: number, Width: number, Height: number }) => {

    const [widgets, setWidgets] = React.useState<PQDigest.IWidget[]>([]);
    const [status, setStatus] = React.useState<Application.Types.Status>('uninitiated');

    React.useEffect(() => {
        setStatus("loading");

        const handle = WidgetController.GetAll("ID", true);
        handle.then(obj => {
            setWidgets(obj);
            setStatus("idle");
        }, () => setStatus("error"));

        return () => { if (handle?.abort == null) handle.abort(); }
    }, []);

    if (props.ID < 0)
        return <Alert Class='alert-info'
            Style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, fontSize: '1.5em' }}
            ShowX={false}>
            No Event Selected. Please select an event on the left.
     </Alert>

    if (status === 'error')
        return <Alert Class='alert-danger'
            Style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, fontSize: '1.5em' }}
            ShowX={false}>
            Error retrieving widget information.
     </Alert>


    //#ToDO Add Note Slices to Event Store
    return (
        <>
            <LoadingIcon Show={status === 'loading' || status === 'uninitiated'} Size={150} />
            {widgets.map(w =>
                <WidgetRouter
                    Widget={w}
                    EventID={props.ID}
                    Height={props.Height / 3 - 1}
                    DisturbanceID={0}
                    FaultID={0}
                    HomePath={homePath}
                    Roles={[]}
                    Store={undefined}
                />
            )}          
        </>
    );
}

export default EventSearchPreview;