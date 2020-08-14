//******************************************************************************************************
//  Legend.tsx - Gbtc
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
//  08/05/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { PQDigest } from '../../global';
import Button from './Button';

const FrequencyLegend = (props: {
    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
    CompareData: boolean,
    GetColor: (key: string) => string
}) => {
    const [showLegend, setShowLegend] = React.useState<boolean>(false);
    const [all, setAll] = React.useState<boolean>(false);
    return (
        <div style={{ position: 'relative', zIndex: 1000 }}>
            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 150, right: 0, top: 40, backgroundColor: 'white' }}>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))
                        setAll(!all);
                    }}>All</button>
                </div>
                <div className="btn-group" >
                    <Button Key={`VA`} Path={props.Paths.find(x => x.Key == `VA`)} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <Button Key={`VB`} Path={props.Paths.find(x => x.Key == `VB`)} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <Button Key={`VC`} Path={props.Paths.find(x => x.Key == `VC`)} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group" >
                    <Button Key={`Average`} Path={props.Paths.find(x => x.Key == `Average`)} CallBack={(path) => props.CallBack(path)} />
                </div>
            </div>
        </div>
    );

}

export default FrequencyLegend;
