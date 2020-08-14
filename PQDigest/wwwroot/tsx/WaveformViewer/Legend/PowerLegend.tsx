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

const PowerLegend = (props: {
    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
    CompareData: boolean,
    GetColor: (key: string) => string
}) => {
    const [showLegend, setShowLegend] = React.useState<boolean>(false);
    const [all, setAll] = React.useState<boolean>(false);
    const [active, setActive] = React.useState<boolean>(true);
    const [apparent, setApparent] = React.useState<boolean>(false);
    const [reactive, setReactive] = React.useState<boolean>(false);
    const [powerFactor, setPowerFactor] = React.useState<boolean>(false);
    const [an, setAn] = React.useState<boolean>(false);
    const [bn, setBn] = React.useState<boolean>(false);
    const [cn, setCn] = React.useState<boolean>(false);
    const [total, setTotal] = React.useState<boolean>(false);

    const prefix = 'I';
    return (
        <div style={{ position: 'relative', zIndex: 1000 }}>
            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

                        setActive(!all);
                        setApparent(!all);
                        setReactive(!all);
                        setPowerFactor(!all);
                        setAn(!all);
                        setBn(!all);
                        setCn(!all);
                        setTotal(!all);
                        setAll(!all);
                    }}>All</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: active ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('w') >= 0 && x.Show == active).forEach(x => props.CallBack(x))
                        setActive(!active);
                    }}>W</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: apparent ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/-VA[^R]?$/g) != null && x.Show == apparent).forEach(x => props.CallBack(x))
                        setApparent(!apparent);
                    }}>VA</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: reactive ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.match(/-VAR$/g) != null && x.Show == reactive).forEach(x => props.CallBack(x))
                        setReactive(!reactive);
                    }}>VAR</button>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: powerFactor ? 1 : 0.5 }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('pf') >= 0 && x.Show == powerFactor).forEach(x => props.CallBack(x))
                        setPowerFactor(!powerFactor);
                    }}>PF</button>
                </div>
                <div className="btn-group" >
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: an ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'AN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('an') >= 0 && x.Show == an).forEach(x => props.CallBack(x))
                        setAn(!an);
                    }}>AN</button>
                    <Button Key={`AN-W`} Path={props.Paths.find(x => x.Key == `AN-W`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`AN-VA`} Path={props.Paths.find(x => x.Key == `AN-VA`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`AN-VAR`} Path={props.Paths.find(x => x.Key == `AN-VAR`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`AN-PF`} Path={props.Paths.find(x => x.Key == `AN-PF`)} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'BN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('bn') >= 0 && x.Show == bn).forEach(x => props.CallBack(x))
                        setBn(!bn);
                    }}>BN</button>
                    <Button Key={`BN-W`} Path={props.Paths.find(x => x.Key == `BN-W`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`BN-VA`} Path={props.Paths.find(x => x.Key == `BN-VA`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`BN-VAR`} Path={props.Paths.find(x => x.Key == `BN-VAR`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`BN-PF`} Path={props.Paths.find(x => x.Key == `BN-PF`)} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: cn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'CN') }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('cn') >= 0 && x.Show == cn).forEach(x => props.CallBack(x))
                        setCn(!cn);
                    }}>CN</button>
                    <Button Key={`CN-W`} Path={props.Paths.find(x => x.Key == `CN-W`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`CN-VA`} Path={props.Paths.find(x => x.Key == `CN-VA`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`CN-VAR`} Path={props.Paths.find(x => x.Key == `CN-VAR`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`CN-PF`} Path={props.Paths.find(x => x.Key == `CN-PF`)} CallBack={(path) => props.CallBack(path)} />
                </div>
                <div className="btn-group" >
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: total ? 1 : 0.5, backgroundColor: props.GetColor(`Total`) }} onClick={(evt) => {
                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('total') >= 0 && x.Show == total).forEach(x => props.CallBack(x))
                        setTotal(!total);
                    }}>Total</button>
                    <Button Key={`Total-W`} Path={props.Paths.find(x => x.Key == `Total-W`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`Total-VA`} Path={props.Paths.find(x => x.Key == `Total-VA`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`Total-VAR`} Path={props.Paths.find(x => x.Key == `Total-VAR`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`Total-PF`} Path={props.Paths.find(x => x.Key == `Total-PF`)} CallBack={(path) => props.CallBack(path)} />
                </div>
            </div>
        </div>
    );

}
export default PowerLegend;
