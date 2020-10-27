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
import { OpenXDA } from '../global';
import L from 'leaflet';


const ESRIMap: React.FunctionComponent<{ DateTime: string, Strikes: any, Lines: GeoJSON.FeatureCollection<GeoJSON.Polygon>, Buffers: GeoJSON.GeometryCollection, Width: number, Height: number }> = (props) => {
    const [radar, setRadar] = React.useState<boolean>(false);
    const [baseMap, setBaseMap] = React.useState<leaflet.esri.Basemaps>('Streets');


    function  Poly(geometry): any {
        var outPut = {
            "type": "FeatureCollection",
            "features": []
        };
        //first we check for some easy cases, like if their is only one ring
        if (geometry.rings.length === 1) {
            outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "Polygon", "coordinates": geometry.rings }});
        } else {
            /*if it isn't that easy then we have to start checking ring direction, basically the ring goes clockwise its part of the polygon, if it goes counterclockwise it is a hole in the polygon, but geojson does it by haveing an array with the first element be the polygons and the next elements being holes in it*/
            var ccc = Dp(geometry.rings);
            var d = ccc[0];
            var dd = ccc[1];
            var r = [];
            if (dd.length === 0) {
                /*if their are no holes we don't need to worry about this, but do need to stuck each ring inside its own array*/
                var l2 = d.length;
                var i3 = 0;
                while (l2 > i3) {
                    r.push([d[i3]]);
                    i3++;
                }
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "MultiPolygon", "coordinates": r } });
            } else if (d.length === 1) {
                /*if their is only one clockwise ring then we know all holes are in that poly*/
                dd.unshift(d[0]);
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "Polygon", "coordinates": dd } });

            } else {
                /*if their are multiple rings and holes we have no way of knowing which belong to which without looking at it specially, so just dump the coordinates and add  a hole field, this may cause errors*/
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "MultiPolygon", "coordinates": d, "holes": dd } });
            }

        }

        return outPut
    }

    function Dp(a) {
        //returns an array of 2 arrays, the first being all the clockwise ones, the second counter clockwise
        var d = [];
        var dd = [];
        var l = a.length;
        var ii = 0;
        while (l > ii) {
            if (C(a[ii])) {
                d.push(a[ii]);
            } else {
                dd.push(a[ii]);
            }
            ii++;
        }
        return [d, dd];
    }

    function C(a) {
        //return true if clockwise
        var l = a.length - 1;
        var i = 0;
        var o = 0;

        while (l > i) {
            o += (a[i][0] * a[i + 1][1] - a[i + 1][0] * a[i][1]);

            i++;
        }
        return o <= 0;
    }

    let bounds: any = [[34, -87], [36, -85]];
    if(props.Lines != null) bounds = L.geoJSON(props.Lines).getBounds();
    let buffers = null;
    if (props.Buffers != null) {
        buffers = Poly(props.Buffers.geometries[0]);
        buffers.style = function (feature) {
            return { stroke: feature.properties.color, opacity: feature.properties.opacity, strokeWidth: 1, fill: 'black' };
        };
    }


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

                <Map bounds={bounds} style={{ height: props.Height - 50, width: props.Width - 12 }} >
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
                {/*(props.Lines != null ?
                    <GeoJSON data={props.Lines} /> :
                    null)*/}
                {/*(props.Buffers != null ?
                    <GeoJSON data={buffers} style={function (feature) {
                            return { stroke: true, color: 'black', weight: 1, fillColor: 'black' };
                        }}/> :
                    null)*/}
                    {(props.Strikes != null ? props.Strikes.features.map((s, index) => <CircleMarker key={index} center={[s.attributes.LATITUDE, s.attributes.LONGITUDE]} radius="5" color='red' weight="1" fillColor="red" fillOpacity="1" />) : null)}

                </Map>
            </div>
        </div>
        );
}

 export default ESRIMap;