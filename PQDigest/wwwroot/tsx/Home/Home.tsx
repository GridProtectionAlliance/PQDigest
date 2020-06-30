﻿//******************************************************************************************************
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

const Home = (props: {}) => {
    const [mailTo, setMailTo] = React.useState<string>('');
    React.useEffect(() => {
        let handle = GetMailto();
        handle.done((data: PQDigest.Setting) => {
            setMailTo(`mailto:${data.Value}`);
        });
        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }, []);

    function GetMailto(): JQuery.jqXHR<PQDigest.Setting> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/Setting/Email.Mailto`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    return (
        <div className="row" style={{height: "100%", margin: '5px 5px 5px 5px '}}>
            <div className="col" style={{ padding: '0px 2px 0px 0px' }}>
                <div className="card">
                    <div className="card-header">
                        Welcome, User
                    </div>
                    <div className="card-body" style={{ height: (window.innerHeight - 127) / 2 - 52 }}>
                        <br />
                        <p>So far this month there have been xx events recorded from your yy power quality meters.</p>
                        <br />
                        <p><a href="">List of last 100 events from all meters over last 365 days</a></p>
                        <p><a href="">List of all meter activity over last 30 days</a></p>
                        <p>Any questions? Please contact: <a href={mailTo}>The PQ Team</a></p>
                    </div>
                </div>

            <div className="card">
                <div className="card-header">
                    Magnitude Duration - Last 30 Days
                </div>
                <div className="card-body" style={{ padding: 0 }}>
                    <MagDurChart Width={window.innerWidth / 2 - 20} Height={(window.innerHeight - 127) / 2 - 70} />
                </div>
            </div>

            </div>
            <div className="col" style={{ padding: '0px 0px 0px 3px' }}>
                <div className="card">
                    <div className="card-header">
                        Historical Event Counts 
                  </div>
                    <div className="card-body" style={{ padding: 0 }}>
                        <EventCountsByMonth Width={window.innerWidth / 2 - 20} Height={(window.innerHeight - 127) / 2 - 53}  />
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        Meter Activity - Last 30 Days
                  </div>
                    <div className="card-body" style={{ padding: 0, maxHeight: (window.innerHeight - 127) / 2 - 70, overflowY: 'hidden'}}>
                        <EventCountTable Width={window.innerWidth / 2 - 20} Height={(window.innerHeight - 127) / 2 - 70} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;