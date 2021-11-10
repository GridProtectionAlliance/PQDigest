//******************************************************************************************************
//  ExportCSV.tsx - Gbtc
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
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  05/17/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import { OpenXDA } from '@gpa-gemstone/application-typings';
const MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss'
const MomentDateFormat = 'YYYY-MM-DD';

const ExportCSV = (props: { Meter: OpenXDA.Types.Meter, Channels: OpenXDA.Types.Channel[], StartDate: string, EndDate: string}) => {

    function GetData() {
        const query = `
            from(bucket: "${bucket}")
            |> range(start: ${moment.tz(props.StartDate, 'America/Chicago').utc().format(MomentDateTimeFormat)}Z, stop: ${moment.tz(props.EndDate, 'America/Chicago').utc().format(MomentDateTimeFormat)}Z)
            |> filter(fn: (r) => ${props.Channels.map(c => ("000000000000000" + c.ID.toString(16)).substr(-8)).map(c => 'r.tag == "' + c + '"').join(' or ')})
        `;

        return $.ajax({
            beforeSend: request => {
                request.setRequestHeader('Authorization', `Token ${token}`);
            },
            type: "POST",
            url: `${host}/api/v2/query?org=${org}`,
            contentType: "application/json; encoding=utf-8",
            data: JSON.stringify({ query, type: 'flux' }),
            cache: true,
            async: true
        });
    }

    function Process(data: string) {
        let rows = data.split('\r\n');
        let i = 0;
        let header = rows[i++].split(',');
        let tagIndex = header.indexOf('tag');
        let timeIndex = header.indexOf('_time');
        let valueIndex = header.indexOf('_value');
        let fieldIndex = header.indexOf('_field');
        let dict = {};
        for (; i < rows.length; i++) {
            let row = rows[i].split(',');
            if (row[tagIndex] == undefined || row[tagIndex] == "tag" || row[fieldIndex] == "flags") continue;
            let channel = props.Channels.find(c => ("000000000000000" + c.ID.toString(16)).substr(-8) == row[tagIndex]);
            let field = row[fieldIndex];
            let timeStamp = row[timeIndex];

            let channelName = `${channel.MeasurementType} ${channel.MeasurementCharacteristic} ${channel.Phase} ${field}`;


            if (dict.hasOwnProperty(timeStamp)) {
                dict[timeStamp][channelName] = parseFloat(row[valueIndex]);
            }
            else {
                dict[timeStamp] = { [channelName]: parseFloat(row[valueIndex]) };
            }
        }

        return dict;

    }

    function ExportToCsv(fileName: string, data: object) {
        if (Object.keys(data).length < 1) return;


        let headers = ['time', ...Object.keys(data[Object.keys(data)[0]])];
        let rows = [headers];
        $.each(Object.keys(data), function (index, timeStamp) {
            rows.push(headers.map((header) => {
                if (header == 'time')
                    return moment.utc(timeStamp).tz('America/Chicago').format(MomentDateTimeFormat);
                else
                    return data[timeStamp][header]
            }));
        });

        const processRow = function (row) {
            let finalVal = '';
            for (let j = 0; j < row.length; j++) {
                let innerValue = row[j] == undefined ? '' : row[j].toString();
                if (row[j] instanceof Date) {
                    innerValue = row[j].toLocaleString();
                };
                let result = innerValue.replace(/"/g, '""');
                if (result.search(/("|,|\n)/g) >= 0)
                    result = '"' + result + '"';
                if (j > 0)
                    finalVal += ',';
                finalVal += result;
            }
            return finalVal + '\n';
        };

        let csvFile = '';
        for (let i = 0; i < rows.length; i++) {
            csvFile += processRow(rows[i]);
        }

        let blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, fileName);
        } else {
            let link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                let url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }


    return <button className='btn btn-primary' onClick={async () => {
        let data = await GetData();
        let dict = Process(data);
        ExportToCsv(`${props.Meter.Name}_${props.StartDate}_${props.EndDate}.csv`, dict);
    }}> Export CSV</button >;
}

export default ExportCSV;