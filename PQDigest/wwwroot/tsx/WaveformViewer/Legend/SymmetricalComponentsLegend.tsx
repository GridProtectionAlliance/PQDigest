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

const SymmetricalComponentsLegend = (props: {
    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
    CompareData: boolean,
    GetColor: (key: string) => string
}) => {

    const [all, setAll] = React.useState<boolean>(false);
    const [v, setV] = React.useState<boolean>(true);
    const [i, setI] = React.useState<boolean>(false);
    const [s0, setS0] = React.useState<boolean>(false);
    const [s1, setS1] = React.useState<boolean>(false);
    const [s2, setS2] = React.useState<boolean>(false);
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
                        setS0(!all);
                        setS1(!all);
                        setS2(!all);

                        setAll(!all);
                    }}>All</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: v ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/Voltage/g) != null && x.Show == v).forEach(x => props.CallBack(x))
                        setV(!v);
                    }}>V</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: i ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/Current/g) != null && x.Show == i).forEach(x => props.CallBack(x))
                        setI(!i);
                    }}>I</button>
                </div>
                <div className="btn-group" >
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s0 ? 1 : 0.5, backgroundColor: props.GetColor('VAN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/S0/g) != null && x.Show == s0).forEach(x => props.CallBack(x))
                        setS0(!s0);
                    }}>S0</button>
                    <Button Key={'V S0'} Path={props.Paths.find(x => x.Key == 'Voltage S0')} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={'I S0'} Path={props.Paths.find(x => x.Key == 'Current S0')} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s1 ? 1 : 0.5, backgroundColor: props.GetColor('VBN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/S1/g) != null && x.Show == s1).forEach(x => props.CallBack(x))
                        setS1(!s1);
                    }}>S1</button>
                    <Button Key={'V S1'} Path={props.Paths.find(x => x.Key == 'Voltage S1')} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={'I S1'} Path={props.Paths.find(x => x.Key == 'Current S1')} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s2 ? 1 : 0.5, backgroundColor: props.GetColor('VCN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/S2/g) != null && x.Show == s2).forEach(x => props.CallBack(x))
                        setS2(!s2);
                    }}>S2</button>
                    <Button Key={'V S2'} Path={props.Paths.find(x => x.Key == 'Voltage S2')} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={'I S2'} Path={props.Paths.find(x => x.Key == 'Current S2')} CallBack={(path) => props.CallBack(path)} />
                </div>
            </div>
        </div>
    );

}

export default SymmetricalComponentsLegend;
