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
import VoltageLegend from './VoltageLegend';
import CurrentLegend from './CurrentLegend';
import FrequencyLegend from './FrequencyLegend';
import PowerLegend from './PowerLegend';
import RapidVoltageChangeLegend from './RapidVoltageChangeLegend';
import SpecifiedHarmonicLegend from './SpecifiedHarmonicLegend';
import SymmetricalComponentsLegend from './SymmetricalComponentsLegend';
import THDLegend from './THDLegend';
import UnbalanceLegend from './UnbalanceLegend';

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


export default Legend;
