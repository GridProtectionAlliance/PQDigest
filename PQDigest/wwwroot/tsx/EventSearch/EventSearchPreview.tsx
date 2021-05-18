﻿//******************************************************************************************************
//  EventSearchPreview.tsx - Gbtc
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
//  06/29/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import EventSearchOpenSEE from './OpenSEE/EventSearchOpenSEE';
import EventSearchTrenDAP from './TrenDAP/EventSearchTrenDAP';
import EventSearchPQI from './PQI/EventSearchPQI';
import { OpenXDA } from '../global';

const EventSearchPreview = (props: { Event: OpenXDA.EventSearch, Width: number, Height: number }) => {
    if (props.Event ==  undefined) return <span>No Event Selected ... </span>;
    else
    return (
        <>
            <EventSearchOpenSEE Event={props.Event} Width={props.Width} Height={props.Height / 3 - 1} />
            <EventSearchTrenDAP Event={props.Event} Width={props.Width} Height={props.Height / 3 - 1} />            
            <EventSearchPQI EventID={props.Event.ID} Width={props.Width} Height={props.Height/3 - 1} />
        </>
    );
}

export default EventSearchPreview;