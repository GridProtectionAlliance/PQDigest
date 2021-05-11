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
import { PQDigest } from '../global';
import CurrentLegend from './Legend/CurrentLegend';
import FrequencyLegend from './Legend/FrequencyLegend';
import PowerLegend from './Legend/PowerLegend';
import RapidVoltageChangeLegend from './Legend/RapidVoltageChangeLegend';
import SpecifiedHarmonicLegend from './Legend/SpecifiedHarmonicLegend';
import SymmetricalComponentsLegend from './Legend/SymmetricalComponentsLegend';
import THDLegend from './Legend/THDLegend';
import UnbalanceLegend from './Legend/UnbalanceLegend';
import VoltageLegend from './Legend/VoltageLegend';

const Legend = (props: {
    Type: 'Voltage' | 'Current' | PQDigest.Analtyic,
    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
    CompareData: boolean,
    GetColor: (key: string) => string
}) => {
    if (props.Paths.length == 0) return null;
    else if (props.Type == 'Voltage') return <VoltageLegend {...props} />
    else if (props.Type == 'Current') return <CurrentLegend {...props} />
    else if (props.Type == 'Frequency') return <FrequencyLegend {...props} />
    else if (props.Type == 'Power') return <PowerLegend {...props} />
    else if (props.Type == 'RapidVoltageChange') return <RapidVoltageChangeLegend {...props} />
    else if (props.Type == 'SpecifiedHarmonic') return <SpecifiedHarmonicLegend {...props} />
    else if (props.Type == 'SymmetricalComponents') return <SymmetricalComponentsLegend {...props} />
    else if (props.Type == 'THD') return <THDLegend {...props} />
    else if (props.Type == 'Unbalance') return <UnbalanceLegend {...props} />

    return null;
}

//const VoltageLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {

//    const [all, setAll] = React.useState<boolean>(false);
//    const [wf, setWf] = React.useState<boolean>(false);
//    const [rms, setRMS] = React.useState<boolean>(false);
//    const [amp, setAmp] = React.useState<boolean>(false);
//    const [ph, setPh] = React.useState<boolean>(false);
//    const [an, setAn] = React.useState<boolean>(false);
//    const [bn, setBn] = React.useState<boolean>(false);
//    const [cn, setCn] = React.useState<boolean>(false);
//    const [ab, setAb] = React.useState<boolean>(false);
//    const [bc, setBc] = React.useState<boolean>(false);
//    const [ca, setCa] = React.useState<boolean>(false);
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);

//    const prefix = 'V';
//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setWf(!all);
//                        setRMS(!all);
//                        setAmp(!all);
//                        setPh(!all);
//                        setAn(!all);
//                        setBn(!all);
//                        setCn(!all);
//                        setAb(!all);
//                        setBc(!all);
//                        setCa(!all);

//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: wf ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('wf') >= 0 && x.Show == wf).forEach(x => props.CallBack(x))
//                        setWf(!wf);
//                    }}>Wf</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: rms ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('rms') >= 0 && x.Show == rms).forEach(x => props.CallBack(x))
//                        setRMS(!rms);
//                    }}>RMS</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: amp ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('amp') >= 0 && x.Show == amp).forEach(x => props.CallBack(x))
//                        setAmp(!amp);
//                    }}>Amp</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ph ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('ph') >= 0 && x.Show == ph).forEach(x => props.CallBack(x))
//                        setPh(!ph);
//                    }}>Ph</button>
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: an ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'AN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('an') >= 0 && x.Show == an).forEach(x => props.CallBack(x))
//                        setAn(!an);
//                    }}>{prefix}AN</button>
//                    <Button Key={`Wf-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}AN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'BN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('bn') >= 0 && x.Show == bn).forEach(x => props.CallBack(x))
//                        setBn(!bn);
//                    }}>{prefix}BN</button>
//                    <Button Key={`Wf-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}BN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: cn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'CN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('cn') >= 0 && x.Show == cn).forEach(x => props.CallBack(x))
//                        setCn(!cn);
//                    }}>{prefix}CN</button>
//                    <Button Key={`Wf-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}CN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ab ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}AB`) }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('ab') >= 0 && x.Show == ab).forEach(x => props.CallBack(x))
//                        setAb(!ab);
//                    }}>{prefix}AB</button>
//                    <Button Key={`Wf-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}AB`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}AB`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}AB`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bc ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}BC`) }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('bc') >= 0 && x.Show == bc).forEach(x => props.CallBack(x))
//                        setBc(!bc);
//                    }}>{prefix}BC</button>
//                    <Button Key={`Wf-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}BC`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}BC`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}BC`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ca ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}CA`) }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('ca') >= 0 && x.Show == ca).forEach(x => props.CallBack(x))
//                        setCa(!ca);
//                    }}>{prefix}CA</button>
//                    <Button Key={`Wf-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}CA`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}CA`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}CA`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const CurrentLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {

//    const [all, setAll] = React.useState<boolean>(false);
//    const [wf, setWf] = React.useState<boolean>(false);
//    const [rms, setRMS] = React.useState<boolean>(false);
//    const [amp, setAmp] = React.useState<boolean>(false);
//    const [ph, setPh] = React.useState<boolean>(false);
//    const [an, setAn] = React.useState<boolean>(false);
//    const [bn, setBn] = React.useState<boolean>(false);
//    const [cn, setCn] = React.useState<boolean>(false);
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);
//    const [ng, setNg] = React.useState<boolean>(false);
//    const [res, setRes] = React.useState<boolean>(false);

//    const prefix = 'I';
//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setWf(!all);
//                        setRMS(!all);
//                        setAmp(!all);
//                        setPh(!all);
//                        setAn(!all);
//                        setBn(!all);
//                        setCn(!all);
//                        setRes(!all);
//                        setNg(!all);
//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: wf ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('wf') >= 0 && x.Show == wf).forEach(x => props.CallBack(x))
//                        setWf(!wf);
//                    }}>Wf</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: rms ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('rms') >= 0 && x.Show == rms).forEach(x => props.CallBack(x))
//                        setRMS(!rms);
//                    }}>RMS</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: amp ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('amp') >= 0 && x.Show == amp).forEach(x => props.CallBack(x))
//                        setAmp(!amp);
//                    }}>Amp</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ph ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('ph') >= 0 && x.Show == ph).forEach(x => props.CallBack(x))
//                        setPh(!ph);
//                    }}>Ph</button>
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: an ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'AN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('an') >= 0 && x.Show == an).forEach(x => props.CallBack(x))
//                        setAn(!an);
//                    }}>{prefix}AN</button>
//                    <Button Key={`Wf-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}AN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}AN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}AN`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'BN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('bn') >= 0 && x.Show == bn).forEach(x => props.CallBack(x))
//                        setBn(!bn);
//                    }}>{prefix}BN</button>
//                    <Button Key={`Wf-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}BN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}BN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}BN`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: cn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'CN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('cn') >= 0 && x.Show == cn).forEach(x => props.CallBack(x))
//                        setCn(!cn);
//                    }}>{prefix}CN</button>
//                    <Button Key={`Wf-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}CN`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}CN`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}CN`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ng ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}NG`) }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('ng') >= 0 && x.Show == ng).forEach(x => props.CallBack(x))
//                        setNg(!ng);
//                    }}>{prefix}NG</button>
//                    <Button Key={`Wf-${prefix}NG`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}NG`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}NG`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}NG`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}NG`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: res ? 1 : 0.5, backgroundColor: props.GetColor(`${prefix}RES`) }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('res') >= 0 && x.Show == res).forEach(x => props.CallBack(x))
//                        setRes(!res);
//                    }}>{prefix}RES</button>
//                    <Button Key={`Wf-${prefix}RES`} Path={props.Paths.find(x => x.Key == `Wf-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`RMS-${prefix}RES`} Path={props.Paths.find(x => x.Key == `RMS-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Amp-${prefix}RES`} Path={props.Paths.find(x => x.Key == `Amp-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Ph-${prefix}RES`} Path={props.Paths.find(x => x.Key == `Ph-${prefix}RES`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const FrequencyLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);
//    const [all, setAll] = React.useState<boolean>(false);
//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 150, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))
//                        setAll(!all);
//                    }}>All</button>
//                </div>
//                <div className="btn-group" >
//                    <Button Key={`VA`} Path={props.Paths.find(x => x.Key == `VA`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <Button Key={`VB`} Path={props.Paths.find(x => x.Key == `VB`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <Button Key={`VC`} Path={props.Paths.find(x => x.Key == `VC`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group" >
//                    <Button Key={`Average`} Path={props.Paths.find(x => x.Key == `Average`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const PowerLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);
//    const [all, setAll] = React.useState<boolean>(false);
//    const [active, setActive] = React.useState<boolean>(true);
//    const [apparent, setApparent] = React.useState<boolean>(false);
//    const [reactive, setReactive] = React.useState<boolean>(false);
//    const [powerFactor, setPowerFactor] = React.useState<boolean>(false);
//    const [an, setAn] = React.useState<boolean>(false);
//    const [bn, setBn] = React.useState<boolean>(false);
//    const [cn, setCn] = React.useState<boolean>(false);
//    const [total, setTotal] = React.useState<boolean>(false);

//    const prefix = 'I';
//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setActive(!all);
//                        setApparent(!all);
//                        setReactive(!all);
//                        setPowerFactor(!all);
//                        setAn(!all);
//                        setBn(!all);
//                        setCn(!all);
//                        setTotal(!all);
//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: active ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('w') >= 0 && x.Show == active).forEach(x => props.CallBack(x))
//                        setActive(!active);
//                    }}>W</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: apparent ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/-VA[^R]?$/g) != null && x.Show == apparent).forEach(x => props.CallBack(x))
//                        setApparent(!apparent);
//                    }}>VA</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: reactive ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/-VAR$/g) != null && x.Show == reactive).forEach(x => props.CallBack(x))
//                        setReactive(!reactive);
//                    }}>VAR</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: powerFactor ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('pf') >= 0 && x.Show == powerFactor).forEach(x => props.CallBack(x))
//                        setPowerFactor(!powerFactor);
//                    }}>PF</button>
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: an ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'AN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('an') >= 0 && x.Show == an).forEach(x => props.CallBack(x))
//                        setAn(!an);
//                    }}>AN</button>
//                    <Button Key={`AN-W`} Path={props.Paths.find(x => x.Key == `AN-W`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`AN-VA`} Path={props.Paths.find(x => x.Key == `AN-VA`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`AN-VAR`} Path={props.Paths.find(x => x.Key == `AN-VAR`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`AN-PF`} Path={props.Paths.find(x => x.Key == `AN-PF`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: bn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'BN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('bn') >= 0 && x.Show == bn).forEach(x => props.CallBack(x))
//                        setBn(!bn);
//                    }}>BN</button>
//                    <Button Key={`BN-W`} Path={props.Paths.find(x => x.Key == `BN-W`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`BN-VA`} Path={props.Paths.find(x => x.Key == `BN-VA`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`BN-VAR`} Path={props.Paths.find(x => x.Key == `BN-VAR`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`BN-PF`} Path={props.Paths.find(x => x.Key == `BN-PF`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: cn ? 1 : 0.5, backgroundColor: props.GetColor(prefix + 'CN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('cn') >= 0 && x.Show == cn).forEach(x => props.CallBack(x))
//                        setCn(!cn);
//                    }}>CN</button>
//                    <Button Key={`CN-W`} Path={props.Paths.find(x => x.Key == `CN-W`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`CN-VA`} Path={props.Paths.find(x => x.Key == `CN-VA`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`CN-VAR`} Path={props.Paths.find(x => x.Key == `CN-VAR`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`CN-PF`} Path={props.Paths.find(x => x.Key == `CN-PF`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: total ? 1 : 0.5, backgroundColor: props.GetColor(`Total`) }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.toLowerCase().indexOf('total') >= 0 && x.Show == total).forEach(x => props.CallBack(x))
//                        setTotal(!total);
//                    }}>Total</button>
//                    <Button Key={`Total-W`} Path={props.Paths.find(x => x.Key == `Total-W`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Total-VA`} Path={props.Paths.find(x => x.Key == `Total-VA`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Total-VAR`} Path={props.Paths.find(x => x.Key == `Total-VAR`)} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={`Total-PF`} Path={props.Paths.find(x => x.Key == `Total-PF`)} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const RapidVoltageChangeLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {

//    const [all, setAll] = React.useState<boolean>(false);
//    const [ln, setLn] = React.useState<boolean>(true);
//    const [ll, setLl] = React.useState<boolean>(false);
//    const [a, setA] = React.useState<boolean>(false);
//    const [b, setB] = React.useState<boolean>(false);
//    const [c, setC] = React.useState<boolean>(false);
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);

//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setLn(!all);
//                        setLl(!all);
//                        setA(!all);
//                        setB(!all);
//                        setC(!all);

//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ln ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/V[ABC]N/g) != null && x.Show == ln).forEach(x => props.CallBack(x))
//                        setLn(!ln);
//                    }}>LN</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: ll ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/V[ABC][ABC]/g) != null && x.Show == ll).forEach(x => props.CallBack(x))
//                        setLl(!ll);
//                    }}>LL</button>
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: a ? 1 : 0.5, backgroundColor: props.GetColor('VAN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/VA[BN]/g) != null && x.Show == a).forEach(x => props.CallBack(x))
//                        setA(!a);
//                    }}>A</button>
//                    <Button Key={'VAN'} Path={props.Paths.find(x => x.Key == 'VAN')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'VAB'} Path={props.Paths.find(x => x.Key == 'VAB')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: b ? 1 : 0.5, backgroundColor: props.GetColor('VBN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/VB[CN]/g) != null && x.Show == b).forEach(x => props.CallBack(x))
//                        setB(!b);
//                    }}>B</button>
//                    <Button Key={'VBN'} Path={props.Paths.find(x => x.Key == 'VBN')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'VBC'} Path={props.Paths.find(x => x.Key == 'VBC')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: c ? 1 : 0.5, backgroundColor: props.GetColor('VCN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/VC[AN]/g) != null && x.Show == c).forEach(x => props.CallBack(x))
//                        setC(!c);
//                    }}>C</button>
//                    <Button Key={'VCN'} Path={props.Paths.find(x => x.Key == 'VCN')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'VCA'} Path={props.Paths.find(x => x.Key == 'VCA')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const SpecifiedHarmonicLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {

//    const [all, setAll] = React.useState<boolean>(false);
//    const [vMag, setVMag] = React.useState<boolean>(true);
//    const [vAng, setVAng] = React.useState<boolean>(false);
//    const [iMag, setIMag] = React.useState<boolean>(false);
//    const [iAng, setIAng] = React.useState<boolean>(false);
//    const [a, setA] = React.useState<boolean>(false);
//    const [b, setB] = React.useState<boolean>(false);
//    const [c, setC] = React.useState<boolean>(false);
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);

//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setVMag(!all);
//                        setVAng(!all);
//                        setIMag(!all);
//                        setIAng(!all);
//                        setA(!all);
//                        setB(!all);
//                        setC(!all);

//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: vMag ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/V[ABC]N Mag/g) != null && x.Show == vMag).forEach(x => props.CallBack(x))
//                        setVMag(!vMag);
//                    }}>V Mag</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: vAng ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/V[ABC][ABC] Ang/g) != null && x.Show == vAng).forEach(x => props.CallBack(x))
//                        setVAng(!vAng);
//                    }}>V Ang</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: iMag ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/I[ABC]N Mag/g) != null && x.Show == iMag).forEach(x => props.CallBack(x))
//                        setIMag(!iMag);
//                    }}>I Mag</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: iAng ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/I[ABC][ABC] Ang/g) != null && x.Show == iAng).forEach(x => props.CallBack(x))
//                        setIAng(!iAng);
//                    }}>I Ang</button>

//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: a ? 1 : 0.5, backgroundColor: props.GetColor('VAN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/[VI]AN/g) != null && x.Show == a).forEach(x => props.CallBack(x))
//                        setA(!a);
//                    }}>A</button>
//                    <Button Key={'VAN Mag'} Path={props.Paths.find(x => x.Key == 'VAN Mag')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'VAN Ang'} Path={props.Paths.find(x => x.Key == 'VAN Ang')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'IAN Mag'} Path={props.Paths.find(x => x.Key == 'IAN Mag')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'IAN Ang'} Path={props.Paths.find(x => x.Key == 'IAN Ang')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: b ? 1 : 0.5, backgroundColor: props.GetColor('VBN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/[VI]BN/g) != null && x.Show == b).forEach(x => props.CallBack(x))
//                        setB(!b);
//                    }}>B</button>
//                    <Button Key={'VBN Mag'} Path={props.Paths.find(x => x.Key == 'VBN Mag')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'VBN Ang'} Path={props.Paths.find(x => x.Key == 'VBN Ang')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'IBN Mag'} Path={props.Paths.find(x => x.Key == 'IBN Mag')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'IBN Ang'} Path={props.Paths.find(x => x.Key == 'IBN Ang')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: c ? 1 : 0.5, backgroundColor: props.GetColor('VCN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/[VI]CN/g) != null && x.Show == c).forEach(x => props.CallBack(x))
//                        setC(!c);
//                    }}>C</button>
//                    <Button Key={'VCN Mag'} Path={props.Paths.find(x => x.Key == 'VCN Mag')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'VCN Ang'} Path={props.Paths.find(x => x.Key == 'VCN Ang')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'ICN Mag'} Path={props.Paths.find(x => x.Key == 'ICN Mag')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'ICN Ang'} Path={props.Paths.find(x => x.Key == 'ICN Ang')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const SymmetricalComponentsLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {

//    const [all, setAll] = React.useState<boolean>(false);
//    const [v, setV] = React.useState<boolean>(true);
//    const [i, setI] = React.useState<boolean>(false);
//    const [s0, setS0] = React.useState<boolean>(false);
//    const [s1, setS1] = React.useState<boolean>(false);
//    const [s2, setS2] = React.useState<boolean>(false);
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);

//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setV(!all);
//                        setI(!all);
//                        setS0(!all);
//                        setS1(!all);
//                        setS2(!all);

//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: v ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/Voltage/g) != null && x.Show == v).forEach(x => props.CallBack(x))
//                        setV(!v);
//                    }}>V</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: i ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/Current/g) != null && x.Show == i).forEach(x => props.CallBack(x))
//                        setI(!i);
//                    }}>I</button>
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s0 ? 1 : 0.5, backgroundColor: props.GetColor('VAN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/S0/g) != null && x.Show == s0).forEach(x => props.CallBack(x))
//                        setS0(!s0);
//                    }}>S0</button>
//                    <Button Key={'V S0'} Path={props.Paths.find(x => x.Key == 'Voltage S0')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'I S0'} Path={props.Paths.find(x => x.Key == 'Current S0')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s1 ? 1 : 0.5, backgroundColor: props.GetColor('VBN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/S1/g) != null && x.Show == s1).forEach(x => props.CallBack(x))
//                        setS1(!s1);
//                    }}>S1</button>
//                    <Button Key={'V S1'} Path={props.Paths.find(x => x.Key == 'Voltage S1')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'I S1'} Path={props.Paths.find(x => x.Key == 'Current S1')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s2 ? 1 : 0.5, backgroundColor: props.GetColor('VCN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/S2/g) != null && x.Show == s2).forEach(x => props.CallBack(x))
//                        setS2(!s2);
//                    }}>S2</button>
//                    <Button Key={'V S2'} Path={props.Paths.find(x => x.Key == 'Voltage S2')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'I S2'} Path={props.Paths.find(x => x.Key == 'Current S2')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const THDLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {

//    const [all, setAll] = React.useState<boolean>(false);
//    const [v, setV] = React.useState<boolean>(true);
//    const [i, setI] = React.useState<boolean>(false);
//    const [a, setA] = React.useState<boolean>(false);
//    const [b, setB] = React.useState<boolean>(false);
//    const [c, setC] = React.useState<boolean>(false);
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);

//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setV(!all);
//                        setI(!all);
//                        setA(!all);
//                        setB(!all);
//                        setC(!all);

//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: v ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/V[ABC]N/g) != null && x.Show == v).forEach(x => props.CallBack(x))
//                        setV(!v);
//                    }}>V</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: i ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/I[ABC]N/g) != null && x.Show == i).forEach(x => props.CallBack(x))
//                        setI(!i);
//                    }}>I</button>
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: a ? 1 : 0.5, backgroundColor: props.GetColor('VAN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/[VI]AN/g) != null && x.Show == a).forEach(x => props.CallBack(x))
//                        setA(!a);
//                    }}>A</button>
//                    <Button Key={'VAN'} Path={props.Paths.find(x => x.Key == 'VAN')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'IAN'} Path={props.Paths.find(x => x.Key == 'IAN')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: b ? 1 : 0.5, backgroundColor: props.GetColor('VBN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/[VI]BN/g) != null && x.Show == b).forEach(x => props.CallBack(x))
//                        setB(!b);
//                    }}>B</button>
//                    <Button Key={'VBN'} Path={props.Paths.find(x => x.Key == 'VBN')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'IBN'} Path={props.Paths.find(x => x.Key == 'IBN')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: c ? 1 : 0.5, backgroundColor: props.GetColor('VCN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/[VI]CN/g) != null && x.Show == c).forEach(x => props.CallBack(x))
//                        setC(!c);
//                    }}>C</button>
//                    <Button Key={'VCN'} Path={props.Paths.find(x => x.Key == 'VCN')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'ICN'} Path={props.Paths.find(x => x.Key == 'ICN')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const UnbalanceLegend = (props: {
//    Paths: { Key: string, Show: boolean, Color: string, Data: [number, number][] }[],
//    CallBack: (path: { Key: string, Show: boolean, Color: string, Data: [number, number][] }) => void,
//    CompareData: boolean,
//    GetColor: (key: string) => string
//}) => {

//    const [all, setAll] = React.useState<boolean>(false);
//    const [v, setV] = React.useState<boolean>(true);
//    const [i, setI] = React.useState<boolean>(false);
//    const [s0s1, setS0s1] = React.useState<boolean>(false);
//    const [s2s1, setS2s1] = React.useState<boolean>(false);
//    const [showLegend, setShowLegend] = React.useState<boolean>(false);

//    return (
//        <div style={{ position: 'relative', zIndex: 1000 }}>
//            <button className="btn btn-primary btn-sm dropdown-toggle" style={{ position: 'absolute', width: 86, right: (props.CompareData ? 86 : 0) }} onClick={() => setShowLegend(!showLegend)}>{props.CompareData ? 'Compare' : 'Legend'}</button>

//            <div className="btn-group-vertical" style={{ display: showLegend ? 'block' : 'none', position: 'absolute', width: 400, right: 0, top: 40, backgroundColor: 'white' }}>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: all ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Show == all).forEach(x => props.CallBack(x))

//                        setV(!all);
//                        setI(!all);
//                        setS0s1(!all);
//                        setS2s1(!all);

//                        setAll(!all);
//                    }}>All</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: v ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/Voltage/g) != null && x.Show == v).forEach(x => props.CallBack(x))
//                        setV(!v);
//                    }}>V</button>
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: i ? 1 : 0.5 }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/Current/g) != null && x.Show == i).forEach(x => props.CallBack(x))
//                        setI(!i);
//                    }}>I</button>
//                </div>
//                <div className="btn-group" >
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s0s1 ? 1 : 0.5, backgroundColor: props.GetColor('VAN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/S0/g) != null && x.Show == s0s1).forEach(x => props.CallBack(x))
//                        setS0s1(!s0s1);
//                    }}>S0/S1</button>
//                    <Button Key={'V S0/S1'} Path={props.Paths.find(x => x.Key == 'S0/S1 Voltage')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'I S0/S1'} Path={props.Paths.find(x => x.Key == 'S0/S1 Current')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//                <div className="btn-group">
//                    <button type="button" className="btn btn-primary btn-sm" style={{ opacity: s2s1 ? 1 : 0.5, backgroundColor: props.GetColor('VCN') }} onClick={(evt) => {
//                        props.Paths.filter(x => x.Key.match(/S2/g) != null && x.Show == s2s1).forEach(x => props.CallBack(x))
//                        setS2s1(!s2s1);
//                    }}>S2/S1</button>
//                    <Button Key={'V S2/S1'} Path={props.Paths.find(x => x.Key == 'S2/S1 Voltage')} CallBack={(path) => props.CallBack(path)} />
//                    <Button Key={'I S2/S1'} Path={props.Paths.find(x => x.Key == 'S2/S1 Current')} CallBack={(path) => props.CallBack(path)} />
//                </div>
//            </div>
//        </div>
//    );

//}

//const Button = (props: { Path: { Key: string, Show: boolean, Color: string, Data: [number,number][] }, Key: string, CallBack: (path) => void }) => {
//    return (
//        <button
//            type="button"
//            className="btn btn-primary btn-sm"
//            style={{
//                backgroundColor: props.Path == undefined ? 'black' : props.Path.Color,
//                opacity: props.Path == undefined || props.Path.Show ? 1 : 0.5
//            }}
//            disabled={props.Path == undefined}
//            onClick={(evt) => props.CallBack(props.Path)}>{props.Key}</button>
//    )
//}

export default Legend;
