//******************************************************************************************************
//  MagDurChart.tsx - Gbtc
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
//  06/23/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import _ from 'lodash';
import { Plot, Line, Circle } from '@gpa-gemstone/react-graph';

interface iData {
    ID: number,
    Name: string,
    Visible: boolean,
    Color: string,
    PerUnitMagnitude: number,
    DurationSeconds: number,
    LoadOrder: number
}

export interface Point {
    EventID: number,
    PerUnitMagnitude: number,
    DurationSeconds: number
}

const MagDurChart = (props: { Width: number, Height: number, Points?: Point[], OnSelect?: (evt: any, point: Point) => void }) => {
    const [curves, setCurves] = React.useState<any>([]);
    const [points, setPoints] = React.useState<Point[]>([]);

    React.useEffect(() => {

        let handle1 = GetMagDurCurves();
        let handle2 = GetMagDurPoints();

        handle1.done((data: iData[]) => {
            let cs = [...new Set(data.map(a => a.Name))].map(a => {
                let c = data.filter(b => b.Name === a);
                return { Color: c[0].Color, Data: c, Visible: c[0].Visible, Name: a }
            });

            setCurves(cs);
        });

        handle2.done((data: Point[]) => {
            setPoints(data);
        });


        return function () {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();

        }
    }, []);


    function GetMagDurCurves(): JQuery.jqXHR<iData[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MagDurCurves`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }


    function GetMagDurPoints(): JQuery.jqXHR<Point[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/MagDurPoints`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    return (
        <Plot height={props.Height} width={props.Width} showBorder={false}
            defaultTdomain={[0.00001, 1000]}
            defaultYdomain={[0, 5]}
            Tmax={1000}
            Tmin={0.00001}
            Ymax={9999}
            Ymin={0}
            legend={'bottom'}
            Tlabel={'Duration (s)'}
            Ylabel={'Magnitude (pu)'}
            showMouse={false}
            showGrid={true}
            yDomain={'Manual'}
            zoom={true} pan={false}
            useMetricFactors={false} XAxisType={'log'}
        >
            {
                points.map((p) =>
                    <Circle
                        data={[p['DurationSeconds'], p['PerUnitMagnitude']]}
                        color={'blue'}
                        radius={5}
                    />
            )}
            {
                curves.map(mdc =>
                    <Line
                        key={mdc.Name}
                        legend={mdc.Name}
                        showPoints={false}
                        color={mdc.Color}
                        lineStyle={'long-dash'}
                        data={mdc.Data}
                    />
            )}
        </Plot>
    );
}

export default MagDurChart;