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
import EventCountsByMonth from '../Home/EventCountsByMonth';
import EventCountTable from '../Home/EventCountTable';
import MagDurChart from '../Home/MagDurChart';
import { PQDigest } from '../global';
import moment from 'moment';
import CollectionWidgetRouter from '../../../EventWidgets/TSX/CollectionWidgetWrapper';
import { OpenXDA } from '@gpa-gemstone/application-typings';

const Home = () => {

    const filter = React.useMemo(() => ({
        TimeFilter: {
            StartTime: moment.utc().subtract(30, 'days').format(OpenXDA.Consts.DateTimeFormat),
            EndTime: moment.utc().format(OpenXDA.Consts.DateTimeFormat),
        }
    }), []);

    const filterYear = React.useMemo(() => ({
        TimeFilter: {
            StartTime: moment.utc().subtract(1, 'years').format(OpenXDA.Consts.DateTimeFormat),
            EndTime: moment.utc().format(OpenXDA.Consts.DateTimeFormat),
        }
    }), []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="container-fluid d-flex h-100 flex-column">
                <div className="row h-50">
                    <div className="col-6 h-100 p-0">
                        <CollectionWidgetRouter
                            Widget={{
                                ID: 0,
                                CategoryID: 0,
                                Name: 'PQHealthIndex',
                                Type: 'PQHealthIndex',
                                Setting: null,
                            }}
                            Title="EPRI PQ Health Index - Last 30 Days"
                            EventFilter={{
                            // ToDo: this is 10 years in this demo, it should be 30 days. 30 days has no data for demo...
                            TimeFilter: {
                                StartTime: moment.utc().subtract(10, 'years').format(OpenXDA.Consts.DateTimeFormat),
                                EndTime: moment.utc().format(OpenXDA.Consts.DateTimeFormat),
                            }
                            }} HomePath={homePath} Roles={[]} />
                    </div>
                    <div className="col-6 h-100 p-0">
                        <CollectionWidgetRouter
                            Widget={{
                                ID: 0,
                                CategoryID: 0,
                                Name: 'EventCountChart',
                                Type: 'EventCountChart',
                                Setting: null
                            }}
                            Title="Historical Event Counts - Last Year"
                            EventFilter={filterYear}
                            HomePath={homePath}
                            Roles={[]}
                        />
                    </div>
                </div>
                <div className="row h-50">
                    <div className="col-6 h-100 p-0">
                        <CollectionWidgetRouter
                            Widget={{
                                ID: 0,
                                CategoryID: 0,
                                Name: 'MagDurChart',
                                Type: 'MagDurChart',
                                Setting: null
                            }}
                            Title="Magnitude Duration Chart - Last 30 Days"
                            EventFilter={filter}
                            HomePath={homePath}
                            Roles={[]}
                        />
                    </div>
                    <div className="col-6 h-100 p-0">
                        <CollectionWidgetRouter
                            Widget={{
                                ID: 0,
                                CategoryID: 0,
                                Name: 'EventCountTable',
                                Type: 'EventCountTable',
                                Setting: null
                            }}
                            Title="Meter Activity - Last 30 Days"
                            EventFilter={filter}
                            HomePath={homePath}
                            Roles={[]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;