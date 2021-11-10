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

export default Button;
