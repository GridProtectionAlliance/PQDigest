//******************************************************************************************************
//  PQDigest.tsx - Gbtc
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
//  06/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import { Application, Page } from '@gpa-gemstone/react-interactive';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EventSearch from './EventSearch/EventSearch';
import Home from './Home/Home';
import Lightning from './Lightning/Lightning';
import MeterAvailability from './MeterAvailability/MeterAvailability';
import Trending from './Trending/Trending';
import WaveformViewer from './WaveformViewer/WaveformViewer';
import { Provider } from 'react-redux';
import store from './Store';

const PQDigest: React.FunctionComponent = () => {
    return (
        <Application
            HomePath={homePath}
            DefaultPath={"Home"}
            Logo={`${homePath}Image/PQDigest.png`}
            OnSignOut={() => { window.location.href = `${homePath}MicrosoftIdentity/Account/SignOut`; }}
            SidebarUI={<>&copy; 2020 - PQDigest</>}
            AllowCollapsed={false}
        >
            <Page Name={'Home'} Label={'Home'} Icon={<img style={{ maxHeight: 36 }} src={`${homePath}Image/home.png`} />}>
                <Home />
            </Page>
            <Page Name={'Trending'} Label={'Trending'} Icon={<img style={{ height: 36 }} src={`${homePath}Image/trending.png`} />}>
                <Trending />
            </Page>
            <Page Name={'EventSearch'} Label={'Find Events'} Icon={<img style={{ height: 36 }} src={`${homePath}Image/search.png`} />}>
                <EventSearch />
            </Page>
            <Page Name={'Lightning'} Label={'Lightning'} Icon={<img style={{ height: 36 }} src={`${homePath}Image/lightning.png`} />}>
                <Lightning />
            </Page>
            <Page Name={'MeterAvailability'} Label={'Meter Availability'} Icon={<img style={{ height: 36 }} src={`${homePath}Image/availability.png`} />}>
                <MeterAvailability />
            </Page>
            <Page Name={'WaveformViewer'}>
                <WaveformViewer />
            </Page>
        </Application>);
}
    /*
        {isAuthenticated?
            <li className="nav-item">
                <a style={{ marginTop: 4 }} className="nav-link" href={`${homePath}MicrosoftIdentity/Account/SignOut`} onClick={() => { isAuthenticated = false }}>Sign out</a>
            </li>
            :
            <ul className="nav-item">
                <li><a style={{ marginTop: 4 }} className="nav-link" href={`${homePath}MicrosoftIdentity/Account/SignIn`}>Sign in</a></li>
            </ul>
        }
    */

ReactDOM.render(<Provider store={store}><PQDigest /></Provider>, document.getElementById('window'));
