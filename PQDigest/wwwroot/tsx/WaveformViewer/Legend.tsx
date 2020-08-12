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

const Legend = (props: {
    Type: 'Voltage' | 'Current' | 'Analytic',
    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
    CompareData: boolean,
    GetColor: (key: string) => string
}) => {

    const [all, setAll] = React.useState<boolean>(false);
    const [wf, setWf] = React.useState<boolean>(false);
    const [rms, setRMS] = React.useState<boolean>(false);
    const [amp, setAmp] = React.useState<boolean>(false);
    const [ph, setPh] = React.useState<boolean>(false);
    const [an, setAn] = React.useState<boolean>(false);
    const [bn, setBn] = React.useState<boolean>(false);
    const [cn, setCn] = React.useState<boolean>(false);
    const [ng, setNg] = React.useState<boolean>(false);
    const [res, setRes] = React.useState<boolean>(false);
    const [ab, setAb] = React.useState<boolean>(false);
    const [bc, setBc] = React.useState<boolean>(false);
    const [ca, setCa] = React.useState<boolean>(false);
    const [showLegend, setShowLegend] = React.useState<boolean>(false);

    const prefix = props.Type == 'Voltage' ? 'V' : 'I';
    if (props.Paths.length == 0) return null;
    return (
        <div style={{position:'relative', zIndex: 1000}}>
            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData? 'Compare' : 'Legend'}</button>

        <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
            <div className="btn-group">
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

                    setWf(!all);
                    setRMS(!all);
                    setAmp(!all);
                    setPh(!all);
                    setAn(!all);
                    setBn(!all);
                    setCn(!all);
                    setAb(!all);
                    setBc(!all);
                    setCa(!all);

                    setAll(!all);
                }}>All</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: wf ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('wf') >= 0 && x.Show == wf).forEach(x => props.CallBack(x))
                    setWf(!wf);
                }}>Wf</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: rms ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('rms') >= 0 && x.Show == rms).forEach(x => props.CallBack(x))
                    setRMS(!rms);
                }}>RMS</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: amp ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('amp') >= 0 && x.Show == amp).forEach(x => props.CallBack(x))
                    setAmp(!amp);
                }}>Amp</button>
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ph ? 1 : 0.5 }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('ph') >= 0 && x.Show == ph).forEach(x => props.CallBack(x))
                    setPh(!ph);
                }}>Ph</button>
            </div>
            <div className="btn-group" >
                <button type="button" className="btn btn-primary btn-sm" style={{ opacity: an ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'AN') }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('an') >= 0 && x.Show == an).forEach(x => props.CallBack(x))
                    setAn(!an);
                }}>{prefix}AN</button>
                <Button Key={`Wf-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}AN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'BN') }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('bn') >= 0 && x.Show == bn).forEach(x => props.CallBack(x))
                    setBn(!bn);
                }}>{prefix}BN</button>
                <Button Key={`Wf-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}BN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group">
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: cn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'CN') }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('cn') >= 0 && x.Show == cn).forEach(x => props.CallBack(x))
                    setCn(!cn);
                }}>{prefix}CN</button>
                <Button Key={`Wf-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}CN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Voltage'}>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ab ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}AB`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('ab') >= 0 && x.Show == ab).forEach(x => props.CallBack(x))
                    setAb(!ab);
                }}>{prefix}AB</button>
                <Button Key={`Wf-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}AB`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Voltage'}>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bc ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}BC`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('bc') >= 0 && x.Show == bc).forEach(x => props.CallBack(x))
                    setBc(!bc);
                }}>{prefix}BC</button>
                <Button Key={`Wf-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}BC`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Voltage'}>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ca ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}CA`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('ca') >= 0 && x.Show == ca).forEach(x => props.CallBack(x))
                    setCa(!ca);
                }}>{prefix}CA</button>
                <Button Key={`Wf-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}CA`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Current'}>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ng ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}NG`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('ng') >= 0 && x.Show == ng).forEach(x => props.CallBack(x))
                    setNg(!ng);
                }}>{prefix}NG</button>
                <Button Key={`Wf-${prefix}NG`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`RMS-${prefix}NG`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Amp-${prefix}NG`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
                <Button Key={`Ph-${prefix}NG`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
            </div>
            <div className="btn-group" hidden={props.Type != 'Current'}>
                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: res ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}RES`) }} onClick={(evt) => {
                    props.Paths.filter(x => x.Key.toLowerCase().indexOf('res') >= 0 && x.Show == res).forEach(x => props.CallBack(x))
                    setRes(!res);
                }}>{prefix}RES</button>
                    <Button Key={`Wf-${prefix}RES`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`RMS-${prefix}RES`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`Amp-${prefix}RES`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
                    <Button Key={`Ph-${prefix}RES`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
            </div>


            </div>
        </div>
    );
}

const Button = (props: { Path: { Key: string, Show: boolean, Color: string, Data: [number,number][] }, Key: string, CallBack: (path) => void }) => {
    return (
        <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{
                backgroundColor: props.Path == undefined ? 'black' : props.Path.Color,
                opacity: props.Path == undefined || props.Path.Show ? 1 : 0.5
            }}
            disabled={props.Path == undefined}
            onClick={(evt) => props.CallBack(props.Path)}>{props.Key}</button>
    )
}

export default Legend;
