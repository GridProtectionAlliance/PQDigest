//******************************************************************************************************
//  Home.tsx - Gbtc
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
import { PQDigest } from '../global';
import moment from 'moment';
import CollectionWidgetRouter from '../../../EventWidgets/TSX/CollectionWidgetWrapper';
import { OpenXDA, Application } from '@gpa-gemstone/application-typings';
import { ReadOnlyControllerFunctions_Gemstone } from '@gpa-gemstone/common-pages';
import { LayoutGrid, Alert, LoadingIcon } from '@gpa-gemstone/react-interactive';


const WidgetController = new ReadOnlyControllerFunctions_Gemstone<PQDigest.IHomeScreenWidget>(`${homePath}api/PQDigest/HomePageWidget`);

const Home = () => {
    const [widgets, setWidgets] = React.useState<PQDigest.IHomeScreenWidget[]>([]);
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

    const collectionRouters = React.useMemo(() => 
        widgets.map((w, i) => <CollectionWidgetRouter
            Widget={w}
            EventFilter={{
                TimeFilter: {
                    StartTime: moment.utc().subtract(w.TimeFrame, 'days').format(OpenXDA.Consts.DateTimeFormat),
                    EndTime: moment.utc().format(OpenXDA.Consts.DateTimeFormat),
                }
            }}
            HomePath={homePath}
            Roles={[]}
            key={w.ID}
        />)
    , [widgets]);

    return (
         <div className="row h-100" style={{ overflow: "hidden" }}>
                <div className="col-12 p-0 h-100">
                <LoadingIcon Show={status === 'loading' || status === 'uninitiated'} Size={150} />
                {status === 'error' ?
                    <div className="row" style={{ padding: "5px 0 0 0" }}>
                        <Alert Class='alert-danger'>Error retrieving widget information.</Alert>
                    </div> :
                    <></>
                }
                {status === 'idle' ?
                    <LayoutGrid RowsPerPage={2} ColMax={2}>
                        {collectionRouters}
                    </LayoutGrid>
             : null}
            </div>
        </div>
    )
}

export default Home;