//******************************************************************************************************
//  EventSearch.tsx - Gbtc
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
//  06/18/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import { OpenXDA } from '@gpa-gemstone/application-typings';
import { DateRangePicker, MultiCheckBoxSelect } from '@gpa-gemstone/react-forms';
import _ from 'lodash';
import moment from 'moment';
import queryString from "querystring";
import React from 'react';
import CollectionWidgetRouter from '../../../EventWidgets/TSX/CollectionWidgetWrapper';
import { EventWidget } from '../../../EventWidgets/TSX/global';
import EventSearchPreview from '../EventSearch/EventSearchPreview';

const EventSearch = (props: {}) => {
    const qs = queryString.parse(location.search.substring(1));

    const [selectedWidget, setSelectedWidget] = React.useState<EventWidget.IWidgetView>({
        ID: 0,
        CategoryID: 0,
        Name: 'EventTable',
        Type: 'EventTable',
        Setting: null,
        CategoryName: '',
    });

    const [types, setTypes] = React.useState<OpenXDA.Types.EventType[]>([]);
    const [meters, setMeters] = React.useState<OpenXDA.Types.Meter[]>([]);

    const [selectedEvent, setSelectedEvent] = React.useState<number>(-1);

    const [filt, setFilt] = React.useState<EventWidget.ICollectionFilter>(() => ({
        TimeFilter: {
            StartTime: qs.startDate == undefined ? moment.utc().subtract(30, 'days').format(OpenXDA.Consts.DateTimeFormat) : qs.startDate as string,
            EndTime: qs.endDate == undefined ? moment.utc().format(OpenXDA.Consts.DateTimeFormat) : qs.endDate as string
        }
    }));

    function GetTypes(): JQuery.jqXHR<OpenXDA.Types.EventType[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/EventType`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    function GetMeters(): JQuery.jqXHR<OpenXDA.Types.Meter[]> {
        return $.ajax({
            type: "GET",
            url: `${homePath}api/OpenXDA/Meter`,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }

    React.useEffect(() => {
        let handle1 = GetTypes();
        handle1.done((data: OpenXDA.Types.EventType[]) => {
            let b64string = (qs.types == undefined ? '' : qs.types)
            let ids = atob(b64string as string).split(',').map(a => parseInt(a))
            if (qs.types == undefined)
                data.forEach(value => value.Selected = true)
            else
                data.forEach(value => value.Selected = ids.indexOf(value.ID) >= 0)

            setTypes(data);
        });

        let handle2 = GetMeters();
        handle2.done((data: OpenXDA.Types.Meter[]) => {
            let b64string = (qs.meters == undefined ? '' : qs.meters)
            let ids = atob(b64string as string).split(',').map(a => parseInt(a))
            if (qs.meters == undefined)
                data.forEach(value => value.Selected = true)
            else
                data.forEach(value => value.Selected = ids.indexOf(value.ID) >= 0)

            setMeters(data);
        });

        return function () {
            if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined) handle2.abort();

        }
    }, []);

    return (
        <div style={{ height: "100%", width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="row" style={{ margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="card">
                        <div className="card-body" style={{height: '145px'}}>
                            <div className="row">
                                <div className="col-2">
                                    <MultiCheckBoxSelect Label="Meters" Options={meters.map(t => ({ Label: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(_evt, options) => {
                                        let newMeters = _.cloneDeep(meters);
                                        $.each(options, (_, option) => {
                                            newMeters.find(meter => meter.ID == option.Value).Selected = !option.Selected
                                        });
                                        setMeters(newMeters);
                                        setFilt(oldFilt => ({ ...oldFilt, MeterFilter: newMeters.filter(item => item.Selected) }));
                                    }} />
                                </div>
                                <div className="col-2">
                                    <MultiCheckBoxSelect Label="Type" Options={types.map(t => ({ Label: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(_evt, options) => {
                                        let newTypes = _.cloneDeep(types);
                                        $.each(options, (_, option) => {
                                            newTypes.find(type => type.ID == option.Value).Selected = !option.Selected
                                        });
                                        setTypes(newTypes)
                                        setFilt(oldFilt => ({ ...oldFilt, TypeFilter: newTypes.filter(item => item.Selected) }));
                                    }} />
                                </div>
                                <div className="col-6">
                                    <DateRangePicker<{StartTime: string, EndTime: string}>
                                        FromField="StartTime"
                                        ToField="EndTime"
                                        Label="Date Range"
                                        Type="date"
                                        Valid={() => filt.TimeFilter.StartTime != null && filt.TimeFilter.EndTime != null &&
                                            moment.utc(filt.TimeFilter.StartTime, OpenXDA.Consts.DateTimeFormat) <= moment.utc(filt.TimeFilter.EndTime, OpenXDA.Consts.DateTimeFormat)}
                                        Feedback="Date range is required, and start may not be after end."
                                        Record={filt.TimeFilter}
                                        Format={OpenXDA.Consts.DateTimeFormat}
                                        Setter={(newTimeFilt) => setFilt(oldFilt => ({ ...oldFilt, TimeFilter: newTimeFilt }))}
                                    />
                                </div>
                                <div className="col-2">
                                    <div className="row">
                                        <button className={"btn btn-info"} onClick={() => {
                                            if (selectedWidget.Type === "EventTable")
                                                setSelectedWidget(widget => ({ ...widget, ID: 2, Type: "MagDurChart", Name: "MagDurChart" }));
                                            else 
                                                setSelectedWidget(widget => ({ ...widget, ID: 1, Type: "EventTable", Name: "EventTable" }));
                                        }}>{`Show ${(selectedWidget.Type === "EventTable" ? "MagDur Chart" : "Event List")}`}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ flex: 1, margin: '5px 5px 5px 5px', overflow: 'hidden' }}>
                <div className="col-6 h-100" style={{ padding: '0px 2px 0px 0px' }}>
                    <CollectionWidgetRouter
                        Widget={selectedWidget}
                        Callback={setSelectedEvent}
                        EventID={selectedEvent}
                        EventFilter={filt}
                        HomePath={homePath}
                        Roles={[]}
                    />
                </div>
                <div className="col-6 h-100" style={{ padding: '0px 0px 0px 3px' }}>
                    <div className="card h-100" style={{overflowY: 'auto', overflowX: 'hidden'} }>
                        {/*<div className="card-header">Event Preview</div>*/}
                        <div className="card-body" style={{ padding: 0 }}>
                            <EventSearchPreview ID={selectedEvent} Height={window.innerHeight - 226} Width={window.innerWidth / 2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventSearch;