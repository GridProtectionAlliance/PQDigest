//******************************************************************************************************
//  PolarChart.tsx - Gbtc
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
//  08/06/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import React from 'react';
import { bisect, max } from 'd3';

const PolarChart = (props: { Width: number, Height: number, Time: number, VoltageData: any, CurrentData: any }) => {
    try {
        const chartHeight = props.Height - 150;
        if (props.VoltageData.length == 0 || props.CurrentData.length == 0) return null;
        let vData = props.VoltageData.map(x => {
            let data = x.Data[bisect(x.Data.map(x => x[0]), props.Time)];
            return { Key: x.Key, Value: data != undefined ? data[1] : undefined, Color: x.Color }
        });
        let vMax = parseFloat(max(vData.filter(x => x.Key.indexOf('RMS-V') >= 0).map(x => x.Value)).toString());
        let iData = props.CurrentData.map(x => {
            let data = x.Data[bisect(x.Data.map(x => x[0]), props.Time)];
            return { Key: x.Key, Value: data != undefined ? data[1] : undefined, Color: x.Color }
        });
        let iMax = parseFloat(max(iData.filter(x => x.Key.indexOf('RMS-I') >= 0).map(x => x.Value)).toString());


        return (
            <>
                <svg width={props.Width} height={chartHeight}>
                    <circle cx={props.Width / 2} cy={chartHeight / 2} r={chartHeight * 0.3} stroke="lightgrey" strokeWidth="1" fill='white' fillOpacity="0" />
                    <circle cx={props.Width / 2} cy={chartHeight / 2} r={chartHeight * 0.45} stroke="lightgrey" strokeWidth="1" fill='white' fillOpacity="0" />
                    <line x1={props.Width / 2} y1="0" x2={props.Width / 2} y2={chartHeight} style={{ stroke: 'lightgrey', strokeWidth: 2 }} />
                    <line x1={props.Width / 2 - chartHeight / 2} y1={chartHeight / 2} x2={props.Width / 2 + chartHeight / 2} y2={chartHeight / 2} style={{ stroke: 'lightgrey', strokeWidth: 2 }} />
                    {/*voltageData.filter(x => x.Key.indexOf('Wf') >=0).map((value,index,array) =>
                                    <path d={DrawVectorSVG(, 0.9 / 150, value.ang)} style={{ stroke: GetColor('VAN'), strokeWidth: 3 }} />
                                    )
                                */}

                    {vData.find(x => x.Key == 'RMS-VAN') != undefined && vData.find(x => x.Key == 'Ph-VAN') != undefined ?
                        <path d={DrawVectorSVG(props.Width / 2, chartHeight / 2, chartHeight / 2, vData.find(x => x.Key == 'RMS-VAN').Value, vMax, vData.find(x => x.Key == 'Ph-VAN').Value)} style={{ stroke: vData.find(x => x.Key == 'Ph-VAN').Color, strokeWidth: 3 }} />

                        : null}
                    {vData.find(x => x.Key == 'RMS-VBN') != undefined && vData.find(x => x.Key == 'Ph-VBN') != undefined ?
                        <path d={DrawVectorSVG(props.Width / 2, chartHeight / 2, chartHeight / 2, vData.find(x => x.Key == 'RMS-VBN').Value, vMax, vData.find(x => x.Key == 'Ph-VBN').Value)} style={{ stroke: vData.find(x => x.Key == 'Ph-VBN').Color, strokeWidth: 3 }} />

                        : null}
                    {vData.find(x => x.Key == 'RMS-VCN') != undefined && vData.find(x => x.Key == 'Ph-VCN') != undefined ?
                        <path d={DrawVectorSVG(props.Width / 2, chartHeight / 2, chartHeight / 2, vData.find(x => x.Key == 'RMS-VCN').Value, vMax, vData.find(x => x.Key == 'Ph-VCN').Value)} style={{ stroke: vData.find(x => x.Key == 'Ph-VCN').Color, strokeWidth: 3 }} />

                        : null}
                    {iData.find(x => x.Key == 'RMS-IAN') != undefined && iData.find(x => x.Key == 'Ph-IAN') != undefined ?
                        <path d={DrawVectorSVG(props.Width / 2, chartHeight / 2, chartHeight / 2, iData.find(x => x.Key == 'RMS-IAN').Value, iMax, iData.find(x => x.Key == 'Ph-IAN').Value)} style={{ stroke: iData.find(x => x.Key == 'Ph-IAN').Color, strokeWidth: 3 }} />

                        : null}
                    {iData.find(x => x.Key == 'RMS-IBN') != undefined && iData.find(x => x.Key == 'Ph-IBN') != undefined ?
                        <path d={DrawVectorSVG(props.Width / 2, chartHeight / 2, chartHeight / 2, iData.find(x => x.Key == 'RMS-IBN').Value, iMax, iData.find(x => x.Key == 'Ph-IBN').Value)} style={{ stroke: iData.find(x => x.Key == 'Ph-IBN').Color, strokeWidth: 3 }} />

                        : null}
                    {iData.find(x => x.Key == 'RMS-ICN') != undefined && iData.find(x => x.Key == 'Ph-ICN') != undefined ?
                        <path d={DrawVectorSVG(props.Width / 2, chartHeight / 2, chartHeight / 2, iData.find(x => x.Key == 'RMS-ICN').Value, iMax, iData.find(x => x.Key == 'Ph-ICN').Value)} style={{ stroke: iData.find(x => x.Key == 'Ph-ICN').Color, strokeWidth: 3 }} />

                        : null}

                </svg>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>VAN</th>
                            <th>VBN</th>
                            <th>VCN</th>
                            <th>IAN</th>
                            <th>IBN</th>
                            <th>ICN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mag</td>
                            <td>{vData.find(x => x.Key == 'RMS-VAN') != undefined ? vData.find(x => x.Key == 'RMS-VAN').Value.toFixed(0) : ''}</td>
                            <td>{vData.find(x => x.Key == 'RMS-VBN') != undefined ? vData.find(x => x.Key == 'RMS-VBN').Value.toFixed(0) : ''}</td>
                            <td>{vData.find(x => x.Key == 'RMS-VCN') != undefined ? vData.find(x => x.Key == 'RMS-VCN').Value.toFixed(0) : ''}</td>
                            <td>{iData.find(x => x.Key == 'RMS-IAN') != undefined ? iData.find(x => x.Key == 'RMS-IAN').Value.toFixed(0) : ''}</td>
                            <td>{iData.find(x => x.Key == 'RMS-IBN') != undefined ? iData.find(x => x.Key == 'RMS-IBN').Value.toFixed(0) : ''}</td>
                            <td>{iData.find(x => x.Key == 'RMS-ICN') != undefined ? iData.find(x => x.Key == 'RMS-ICN').Value.toFixed(0) : ''}</td>
                        </tr>
                        <tr>
                            <td>Ang</td>
                            <td>{vData.find(x => x.Key == 'Ph-VAN') != undefined ? vData.find(x => x.Key == 'Ph-VAN').Value.toFixed(0) : ''}</td>
                            <td>{vData.find(x => x.Key == 'Ph-VBN') != undefined ? vData.find(x => x.Key == 'Ph-VBN').Value.toFixed(0) : ''}</td>
                            <td>{vData.find(x => x.Key == 'Ph-VCN') != undefined ? vData.find(x => x.Key == 'Ph-VCN').Value.toFixed(0) : ''}</td>
                            <td>{iData.find(x => x.Key == 'Ph-IAN') != undefined ? iData.find(x => x.Key == 'Ph-IAN').Value.toFixed(0) : ''}</td>
                            <td>{iData.find(x => x.Key == 'Ph-IBN') != undefined ? iData.find(x => x.Key == 'Ph-IBN').Value.toFixed(0) : ''}</td>
                            <td>{iData.find(x => x.Key == 'Ph-ICN') != undefined ? iData.find(x => x.Key == 'Ph-ICN').Value.toFixed(0) : ''}</td>
                        </tr>

                    </tbody>
                </table>


            </>
        );
    }
    catch {
        return null;
    }
}

function DrawVectorSVG(x0: number, y0: number, radius: number, mag: number, max: number, angle: number): string {
    if (mag == undefined || max == undefined || angle == undefined) return '';
    var x = (mag/max) * Math.cos(angle * Math.PI/180);
    var y = (mag / max) * Math.sin(angle * Math.PI / 180);
    return `M ${x0} ${y0} L ${x0 + radius*x} ${y0 - radius*y} Z`
}


export default PolarChart;