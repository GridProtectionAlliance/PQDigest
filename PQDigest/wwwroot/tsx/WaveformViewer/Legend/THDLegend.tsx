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


const THDLegend = (props: {
    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
    CompareData: boolean,
    GetColor: (key: string) => string
}) => {

    const [all, setAll] = React.useState<boolean>(false);
    const [v, setV] = React.useState<boolean>(true);
    const [i, setI] = React.useState<boolean>(false);
    const [a, setA] = React.useState<boolean>(false);
    const [b, setB] = React.useState<boolean>(false);
    const [c, setC] = React.useState<boolean>(false);
    const [showLegend, setShowLegend] = React.useState<boolean>(false);

    return (
        <div style={{ position: 'relative', zIndex: 1000 }}>
            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

                        setV(!all);
                        setI(!all);
                        setA(!all);
                        setB(!all);
                        setC(!all);

                        setAll(!all);
                    }}>All</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: v ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/V[ABC]N/g) != null && x.Show == v).forEach(x => props.CallBack(x))
                        setV(!v);
                    }}>V</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: i ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/I[ABC]N/g) != null && x.Show == i).forEach(x => props.CallBack(x))
                        setI(!i);
                    }}>I</button>
                </div>
                <div className="btn-group" >
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: a ? 1 : 0.5, backgroundColor: props.GetColor('VAN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/[VI]AN/g) != null && x.Show == a).forEach(x => props.CallBack(x))
                        setA(!a);
                    }}>A</button>
                    <Button Key={'VAN'} Path={props.Paths.find(x => x.Key == 'VAN')} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={'IAN'} Path={props.Paths.find(x => x.Key == 'IAN')} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: b ? 1 : 0.5, backgroundColor: props.GetColor('VBN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/[VI]BN/g) != null && x.Show == b).forEach(x => props.CallBack(x))
                        setB(!b);
                    }}>B</button>
                    <Button Key={'VBN'} Path={props.Paths.find(x => x.Key == 'VBN')} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={'IBN'} Path={props.Paths.find(x => x.Key == 'IBN')} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: c ? 1 : 0.5, backgroundColor: props.GetColor('VCN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/[VI]CN/g) != null && x.Show == c).forEach(x => props.CallBack(x))
                        setC(!c);
                    }}>C</button>
                    <Button Key={'VCN'} Path={props.Paths.find(x => x.Key == 'VCN')} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={'ICN'} Path={props.Paths.find(x => x.Key == 'ICN')} CallBack={(path) => props.CallBack(path)} />
                </div>
            </div>
        </div>
    );

}


export default THDLegend;
