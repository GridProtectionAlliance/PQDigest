//******************************************************************************************************
//  EventSearchPreviewD3Chart.tsx - Gbtc
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
//  02/20/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import { scaleLinear, select, axisBottom } from 'd3';

const EventSearchPreviewD3ChartAxis = (props: { EventID: number, Width: number, Height: number, DataType: 'Trending' | 'Time' }) => {
    //const margin = { top: 15, right: 20, bottom: 60, left: 40 };
    //const svgHeight = props.Height - margin.top - margin.bottom;
    const svgHeight = props.Height;
    const svgWidth = props.Width;

    const [hidden, setHidden] = React.useState<boolean>(true);
    const [xAxisTicks, setXAxisTicks] = React.useState<Array<JSX.Element>>([]);

    React.useEffect(() => {
        return GetData();
    }, [props.EventID]);

    function GetData() {
        let handle = $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Event/Data?eventId=${props.EventID}` +
                `&pixels=${svgWidth}` +
                `&type=Voltage` +
                `&dataType=${props.DataType}`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        })

        handle.done(data => DrawChart(data));


        return function () {
            if (handle.abort != undefined) handle.abort();
        }
    }


    function defaultTickFormatter(value, axis) {

        var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
        var formatted = "" + Math.round(value * factor) / factor;

        // If tickDecimals was specified, ensure that we have exactly that
        // much precision; otherwise default to the value's own precision.

        if (axis.tickDecimals != null) {
            var decimal = formatted.indexOf(".");
            var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
            if (precision < axis.tickDecimals) {
                return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
            }
        }

        return formatted;
    };
    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }



    function DrawChart(data) {
        if (Object.keys(data).length == 0) {
            setHidden(true);
            return;
        }
        setHidden(false);

        let series = data[Object.keys(data)[0]];
        let x = scaleLinear().rangeRound([0, svgWidth]).domain([series[0][0], series[series.length - 1][0]]);

        let ticks = [];
        let span = x.domain()[1] - x.domain()[0];
        for (let i = x.domain()[0] + span / 7; i < x.domain()[1]; i += span/7) {
            ticks.push(
                <g key={i} className="tick" transform={`translate(${x(i)},${0})`} style={{ opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 }}>
                    <path d={`M 0,6 V -6`} style={{ stroke: 'black' }} strokeWidth={0.5}></path>
                    <text y="20" textAnchor='middle'>{moment('1970-01-01T00:00:00').add(i, 'milliseconds').format(props.DataType == 'Time' ? 'ss.SSS' : 'HH')}</text>
                </g>
            );

        }
        setXAxisTicks(ticks);

    }

    return (
        <div style={{ height: svgHeight /*, margin: '0x', padding: '0px'*/ }} hidden={hidden}>
            <svg width={svgWidth} height={svgHeight} >
                {xAxisTicks}
            </svg>

        </div>
    );
}

export default EventSearchPreviewD3ChartAxis;