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
import leaflet from 'leaflet';
import { Map, CircleMarker, TileLayer, WMSTileLayer, GeoJSON } from 'react-leaflet';
import { BasemapLayer } from 'esri-leaflet';
import proj4 from 'proj4';
import 'proj4leaflet';
import { Lightning, OpenXDA } from '../global';
import L from 'leaflet';


const ESRIMap: React.FunctionComponent<{ DateTime: string, Strikes: Lightning.Strike[], Locations: OpenXDA.Location[],Width: number, Height: number, Bounds: [[number,number],[number,number]], SetBounds: (bounds) => void }> = (props) => {
    const [radar, setRadar] = React.useState<boolean>(false);
    const [baseMap, setBaseMap] = React.useState<leaflet.esri.Basemaps>('Streets');

    let bounds: any = [[34, -87], [36, -85]];


    let time = moment(props.DateTime);
    let minutes = (time.minutes() - time.minutes() % 5).toString();
    let timestring = time.utc().format('YYYY-MM-DDTHH') + ':' + (minutes.length == 1 ? `0${minutes}` : minutes);
    let bm = leaflet.esri.basemapLayer(baseMap);

    return (
        <div className="card">
            <div className="card-header">ESRI Map
                <div className="form-check" style={{ position: 'absolute', right: 250, top: 10 }} >
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" checked={radar} onChange={() => setRadar(!radar)}/>Show Radar
                  </label>
                </div>
                <select className="form-control" style={{width: 200, position: 'absolute', right: 5, top: 5}}  value={baseMap} onChange={(evt) => setBaseMap(evt.target.value as leaflet.esri.Basemaps)}>
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

                <Map bounds={props.Bounds} style={{ height: props.Height - 50, width: props.Width - 12 }} onMoveEnd={(evt) => {
                    let bounds = evt.target.getBounds();
                    let newBounds = [[bounds._southWest.lat, bounds._southWest.lng], [bounds._northEast.lat, bounds._northEast.lng]];
                    if (newBounds !== props.Bounds)
                        props.SetBounds(newBounds);
                }}>
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
                    {props.Strikes.map((s, index) => <CircleMarker key={index} center={[s.Latitude, s.Longitude]} radius="3" color='red' weight="1" fillColor="red" fillOpacity="1" />)}
                    {/*props.Locations.map((s, index) => <CircleMarker key={index} center={[s.Latitude, s.Longitude]} style={{display: 'none'} }/>)*/}

                </Map>
            </div>
        </div>
        );
}

 export default ESRIMap;