//******************************************************************************************************
//  ChartIcons.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//******************************************************************************************************

import * as React from 'react';
import { ReactIcons } from '@gpa-gemstone/gpa-symbols';

const iconContainerStyle: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
};

export const LoadingIcon = (props: { Size: number }) => (
    <div style={iconContainerStyle}>
        <ReactIcons.SpiningIcon Size={props.Size} />
    </div>
);

export const NoDataIcon = () => (
    <div style={iconContainerStyle}>
        <div style={{ width: '250px' }}>
            <div style={{ width: '5em', margin: 'auto' }}>
                <i className="fa fa-exclamation-triangle fa-5x"></i>
            </div>
            <p style={{ textAlign: 'center' }}>No Data Available</p>
        </div>
    </div>
);

export const ErrorIcon = () => (
    <div style={iconContainerStyle}>
        <div style={{ width: '250px', margin: 'auto' }}>
            <div style={{ width: '5em', margin: 'auto' }}>
                <ReactIcons.CircledX Size={'5rem'} Color={'red'} />
            </div>
            <p style={{ textAlign: 'center' }}>PQDigest encountered an error when loading the waveform.</p>
        </div>
    </div>
);
