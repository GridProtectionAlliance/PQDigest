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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import queryString from "querystring";
import { createBrowserHistory } from "history"


const PQDigest: React.FunctionComponent = (props: {}) => {
    const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './Home/Home'));
    const Trending = React.lazy(() => import(/* webpackChunkName: "Trending" */ './Trending/Trending'));
    const MeterAvailability = React.lazy(() => import(/* webpackChunkName: "MeterAvailability" */ './MeterAvailability/MeterAvailability'));
    const Lightning = React.lazy(() => import(/* webpackChunkName: "Lightning" */ './Lightning/Lightning'));
    const EventSearch = React.lazy(() => import(/* webpackChunkName: "EventSearch" */ './EventSearch/EventSearch'));
    const WaveformViewer = React.lazy(() => import(/* webpackChunkName: "WaveformViewer" */ './WaveformViewer/WaveformViewer'));

    const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0); // integer state for resize renders
    React.useEffect(() => {
        window.addEventListener('resize', (evt) => forceUpdate());

        return function cleanup() {
            window.removeEventListener('resize', (evt) => { });
        }
    }, []);

    return (
        <Router>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3" style={{ height: 75 }}>
                <div className="container-fluid">
                    <a className="col-sm-3 col-md-2 mr-0" style={{ textAlign: 'center' }} href={ homePath}><img style={{ width: 400, margin: 0 }} src={`${homePath}Image/PQDigest.png`} /></a>
                    <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <a className={"nav-link " + (location.pathname == `${homePath}` ? "active" : "")} href={`${homePath}` }><span><img style={{ height: 36 }} src={`${homePath}Image/home.png`} /></span>Home</a>
                            </li>
                            <li className="nav-item">
                                <button className={"nav-link " + (location.pathname == `${homePath}Trending` ? "active" : "")} onClick={() => window.location.href = homePath + "Trending"} style={{ border: 'none', backgroundColor: 'white' }} disabled={true}><span><img style={{ height: 36 }} src={`${homePath}Image/trending.png`} /></span>Trending</button>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (location.pathname == `${homePath}EventSearch` ? "active" : "")} href={`${homePath}EventSearch`}><span><img style={{ height: 36 }} src={`${homePath}Image/search.png`} /></span>Find Events</a>
                            </li>
                            <li className="nav-item">
                                <button className={"nav-link " + (location.pathname == `${homePath}Lightning` ? "active" : "")} onClick={() => window.location.href = homePath + "Lightning"} style={{ border: 'none', backgroundColor: 'white' }} disabled={false}><span><img style={{ height: 36 }} src={`${homePath}Image/lightning.png`} /></span>Lightning</button>
                            </li>
                            <li className="nav-item">
                                <button className={"nav-link " + (location.pathname == `${homePath}MeterAvailability` ? "active" : "")} onClick={() => window.location.href = homePath + "MeterAvailability"} style={{ border: 'none', backgroundColor: 'white' }} disabled={true}><span><img style={{ height: 36 }} src={`${homePath}Image/availability.png`} /></span>Meter Availability</button>
                            </li>
                            {isAuthenticated?
                                <li className="nav-item">
                                    <a style={{ marginTop: 4 }} className="nav-link" href={`${homePath}MicrosoftIdentity/Account/SignOut`} onClick={() => { isAuthenticated = false }}>Sign out</a>
                                </li>
                                :
                                <ul className="nav-item">
                                    <li><a style={{ marginTop: 4 }} className="nav-link" href={`${homePath}MicrosoftIdentity/Account/SignIn`}>Sign in</a></li>
                                </ul>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid" style={{ top: 75, position: 'absolute', width: '100%', height: 'calc(100% - 135px)', overflow: 'hidden' }}>
                <div className="row" style={{ height: '100%' }}>
                    <div className="col" style={{ width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' }}>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Route exact path={`${homePath}`}><Home/></Route>
                            <Route path={`${homePath}Trending`}><Trending/></Route>
                            <Route path={`${homePath}EventSearch`}><EventSearch/></Route>
                            <Route path={`${homePath}Lightning`}><Lightning/></Route>
                            <Route path={`${homePath}MeterAvailability`}><MeterAvailability /></Route>
                            <Route children={(match, ...rest) => {
                                if (match.location.pathname != `${homePath}WaveformViewer`) return null; 
                                let qs = queryString.parse(location.search);
                                return <WaveformViewer EventID={parseInt(qs['?EventID'] as string)} />
                            }}/>
                        </React.Suspense>
                    </div>

                </div>
            </div>
            <footer className="border-top footer text-muted">
                <div className="container-fluid">
                    &copy; 2020 - PQDigest
                </div>
            </footer>


        </Router>
    )
}

ReactDOM.render(<PQDigest />, document.getElementById('window'));
