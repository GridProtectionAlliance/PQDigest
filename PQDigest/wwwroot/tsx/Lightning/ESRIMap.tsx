//******************************************************************************************************
//  TVAESRIMap.tsx - Gbtc
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
//  02/27/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { basemapLayer, Basemaps } from 'esri-leaflet';
import { MapContainer, CircleMarker, TileLayer, WMSTileLayer, useMapEvents } from 'react-leaflet';
import { Lightning, OpenXDA } from '../global';
import moment from 'moment';
import 'moment-timezone';
import _ from 'lodash';

type bounds = [[number, number], [number, number]];

const ESRIMap: React.FunctionComponent<{ DateTime: string, Strike: Lightning.Strike, Strikes: Lightning.Strike[], Locations: OpenXDA.Location[], Width: number, Height: number, Bounds: bounds, SetBounds: (bounds: bounds) => void, SetStrike: (strike)=> void }> = (props) => {
    const [radar, setRadar] = React.useState<boolean>(false);
    const [baseMap, setBaseMap] = React.useState<Basemaps>('Streets');

    let time = moment(props.DateTime);
    let minutes = (time.minutes() - time.minutes() % 5).toString();
    let timestring = time.tz('America/Chicago').utc().format('YYYY-MM-DDTHH') + ':' + (minutes.length == 1 ? `0${minutes}` : minutes);
    let bm = basemapLayer(baseMap);

    return (
        <div className="card">
            <div className="card-header">ESRI Map
                <div className="form-check" style={{ position: 'absolute', right: 250, top: 10 }} >
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" checked={radar} onChange={() => setRadar(!radar)}/>Show Radar
                  </label>
                </div>
                <select className="form-control" style={{width: 200, position: 'absolute', right: 5, top: 5}}  value={baseMap} onChange={(evt) => setBaseMap(evt.target.value as Basemaps)}>
                    <option value='Streets'>Streets</option>
                    <option value='Topographic'>Topographic</option>
                    <option value='NationalGeographic'>NationalGeographic</option>
                    <option value='Oceans'>Oceans</option>
                    <option value='Gray'>Gray</option>
                    <option value='DarkGray'>DarkGray</option>
                    <option value='Imagery'>Imagery</option>
                    <option value='ImageryClarity'>ImageryClarity</option>
                    <option value='ImageryFirefly'>ImageryFirefly</option>
                    <option value='ShadedRelief'>ShadedRelief</option>
                    <option value='Terrain'>Terrain</option>
                    <option value='USATopo'>USATopo</option>
                    <option value='Physical'>Physical</option>

                </select>
            </div>
            <div className="card-body" style={{ padding: 0}}>

                <MapContainer bounds={props.Bounds} style={{ height: props.Height - 50, width: props.Width - 12 }}>
                    <MapBoundSetter Bounds={props.Bounds} SetBounds={props.SetBounds} />
                    <TileLayer
                        url={bm['_url']}
                        attribution={bm.options.attribution}
                        subdomains={bm.options.subdomains}
                    />

                {(radar ? 
                    <WMSTileLayer url={`https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi?time=${timestring}`}
                        layers='nexrad-n0r-wmst'
                        format='image/png'
                        transparent={true}
                        opacity={0.5}
                        attribution="Weather data © 2016 IEM Nexrad"

                        /> : null)
                    }
                    {props.Strikes.map((s, index) =>
                        <CircleMarker
                            key={index}
                            center={[s.Latitude, s.Longitude]}
                            //style={{ cursor: 'pointer' }}
                            radius={(props.Strike?.DisplayTime == s.DisplayTime && s.Amplitude == props.Strike?.Amplitude && s.Latitude == props.Strike?.Latitude && s.Longitude == props.Strike?.Longitude ? 5 : 3)}
                            color={(props.Strike?.DisplayTime == s.DisplayTime && s.Amplitude == props.Strike?.Amplitude && s.Latitude == props.Strike?.Latitude && s.Longitude == props.Strike?.Longitude ? 'black' : 'red')}
                            weight={1}
                            fillColor="red"
                            fillOpacity={1}
                            eventHandlers={{
                                click: () => props.SetStrike(s)
                            }}
                        />)
                    }
                    {/*props.Locations.map((s, index) => <CircleMarker key={index} center={[s.Latitude, s.Longitude]} style={{display: 'none'} }/>)*/}

                </MapContainer>
            </div>
        </div>
        );
}

const MapBoundSetter: React.FunctionComponent<{ Bounds: bounds, SetBounds: (bounds: bounds) => void }> = (props) => {
    const map = useMapEvents({
        moveend: () => {
            const newBoundsRaw = map.getBounds();
            const southWest = newBoundsRaw.getSouthWest();
            const northEast = newBoundsRaw.getNorthEast();
            const newBounds: bounds = [[southWest.lat, southWest.lng], [northEast.lat, northEast.lng]];
            if (!_.isEqual(newBounds, props.Bounds))
                props.SetBounds(newBounds);
        }
    });
    return null;
}

 export default ESRIMap;