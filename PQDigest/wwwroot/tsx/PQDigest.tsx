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

import { Application as ApplicationTypes, OpenXDA } from '@gpa-gemstone/application-typings';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';
import { Alert, Application, Page } from '@gpa-gemstone/react-interactive';
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
import { LIB_VERSION } from './version';

const PQDigest: React.FunctionComponent = () => {
    const [logo, setLogo] = React.useState<string | null>(null);
    const [customer, setCustomer] = React.useState<OpenXDA.Types.Customer | null>(null);
    const [customerError, setCustomerError] = React.useState<string | null>(null);
    const [backendVersion, setBackendVersion] = React.useState<string>('0.0.0');
    const [getBackendVersionStatus, setGetBackendVersionStatus] = React.useState<ApplicationTypes.Types.Status>('uninitiated');

    React.useEffect(() => {
        const handle = $.ajax({
            type: "GET",
            url: `${homePath}api/Setting/Logo`,
            contentType: "application/json; charset=utf-8",
            dataType: 'text',
            cache: true,
            async: true
        });

        handle.done(l => setLogo("data:image/png;base64, " + l));

        return () => {
            if (handle?.abort != null)
                handle.abort();
        }
    }, []);

    React.useEffect(() => {
        const handle = $.ajax({
            type: 'GET',
            url: `${homePath}api/Setting/CustomerInfo`,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: true
        });

        handle.done(data => setCustomer(data));
        handle.fail(response => setCustomerError(response.responseText));

        return () => {
            if (handle.abort != null)
                handle.abort();
        }
    }, []);

    React.useEffect(() => {
        setGetBackendVersionStatus('loading');
        const handle = getBackendVersion();

        handle.done(data => {
            setBackendVersion(data);
            setGetBackendVersionStatus('idle');
        });
        handle.fail(() => setGetBackendVersionStatus('error'));

        return () => {
            if (handle.abort != null)
                handle.abort();
        }
    }, []);

    const versionUI = React.useMemo(() => (
        <div className="row m-0">
            <div className="col-12 p-0">
                <p className="text-center">
                    {getBackendVersionStatus === 'error' ?
                        'Version: n/a' :
                        getBackendVersionStatus === 'loading' ? <ReactIcons.SpiningIcon /> : `Version: ${backendVersion}`}
                </p>
                <p className="text-center">
                    UI Version: {LIB_VERSION}
                </p>
            </div>
        </div>
    ), [backendVersion, getBackendVersionStatus]);

    if (customerError != null)
        return (
            <Alert Class='alert-danger' Style={{
                alignItems: 'center',
                bottom: 0,
                display: 'flex',
                fontWeight: 'bold',
                justifyContent: 'center',
                left: 0,
                margin: 0,
                position: 'fixed',
                right: 0,
                textAlign: 'center',
                top: 0
            }}>
                {customerError}
            </Alert>
        );

    return (
        <Application
            HomePath={homePath}
            DefaultPath={"Home"}
            Logo={`${homePath}Image/PQDigestLogo.png`}
            OnSignOut={() => { window.location.href = `${homePath}MicrosoftIdentity/Account/SignOut`; }}
            SidebarUI={
                <div style={{ width: '100%', textAlign: 'center' }}>
                    {logo != null ?
                        <img style={{ maxHeight: 150, maxWidth: "100%" }} src={logo} /> :
                        <></>
                    }
                    {customer != null ? <p className="text-center">{customer.Name}</p> : <></>}
                    {versionUI}
                    <span>&copy; 2026 - PQ Digest</span>
                </div>
            }
            AllowCollapsed={true}
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
        </Application>
    );
}

const getBackendVersion = () => {
    return $.ajax({
        type: 'GET',
        url: `${homePath}api/System/Version`,
        contentType: 'application/json; charset=utf-8',
        dataType: 'text',
        cache: false,
        async: true
    });
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
