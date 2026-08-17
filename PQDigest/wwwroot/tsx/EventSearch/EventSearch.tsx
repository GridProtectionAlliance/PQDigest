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
import { ReadOnlyControllerFunctions_Gemstone, TimeFilter } from '@gpa-gemstone/common-pages';
import { MultiCheckBoxSelect, ToggleSwitch } from '@gpa-gemstone/react-forms';
import _ from 'lodash';
import moment from 'moment';
import queryString from "querystring";
import React from 'react';
import CollectionWidgetRouter from '../../../EventWidgets/TSX/CollectionWidgetWrapper';
import { EventWidget } from '../../../EventWidgets/TSX/global';
import EventSearchPreview from '../EventSearch/EventSearchPreview';

const EventTypeController = new ReadOnlyControllerFunctions_Gemstone<OpenXDA.Types.EventType>(`${homePath}api/OpenXDA/EventType`);
const MeterController = new ReadOnlyControllerFunctions_Gemstone<OpenXDA.Types.Meter>(`${homePath}api/OpenXDA/Meter`);

const EventSearch = () => {
    const qs = queryString.parse(location.search.substring(1));

    const [selectedWidget, setSelectedWidget] = React.useState<EventWidget.IWidgetView>({
        ID: 0,
        Name: 'EventTable',
        Type: 'EventTable',
        Setting: null
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

    React.useEffect(() => {
        const typeHandle = EventTypeController.GetAll("ID", true);
        typeHandle.done((data: OpenXDA.Types.EventType[]) => {
            let b64string = (qs.types == undefined ? '' : qs.types)
            let ids = atob(b64string as string).split(',').map(a => parseInt(a))
            if (qs.types == undefined)
                data.forEach(value => value.Selected = true)
            else
                data.forEach(value => value.Selected = ids.indexOf(value.ID) >= 0)

            setTypes(data);
        });

        return () => {
            if (typeHandle.abort != undefined) typeHandle.abort();
        }
    }, []);

    React.useEffect(() => {
        const meterHandle = MeterController.GetAll("Name", true);
        meterHandle.done((data: OpenXDA.Types.Meter[]) => {
            let b64string = (qs.meters == undefined ? '' : qs.meters)
            let ids = atob(b64string as string).split(',').map(a => parseInt(a))
            if (qs.meters == undefined)
                data.forEach(value => value.Selected = true)
            else
                data.forEach(value => value.Selected = ids.indexOf(value.ID) >= 0)

            setMeters(data);
        });

        return () => {
            if (meterHandle.abort != undefined) meterHandle.abort();
        }
    }, []);

    return (
        <div style={{ height: "100%", width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="row" style={{ margin: 5 }}>
                <div className="col" style={{ padding: 0 }}>
                    <div className="row">
                        <div className="col-3">
                            <MultiCheckBoxSelect Label="Meters" Options={meters.map(t => ({ Label: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(_evt, options) => {
                                let newMeters = _.cloneDeep(meters);
                                $.each(options, (_, option) => {
                                    newMeters.find(meter => meter.ID == option.Value).Selected = !option.Selected
                                });
                                setMeters(newMeters);
                                setFilt(oldFilt => ({ ...oldFilt, MeterFilter: newMeters.filter(item => item.Selected) }));
                            }} />
                        </div>
                        <div className="col-3">
                            <MultiCheckBoxSelect Label="Type" Options={types.map(t => ({ Label: t.Name, Value: t.ID, Selected: t.Selected }))} OnChange={(_evt, options) => {
                                let newTypes = _.cloneDeep(types);
                                $.each(options, (_, option) => {
                                    newTypes.find(type => type.ID == option.Value).Selected = !option.Selected
                                });
                                setTypes(newTypes)
                                setFilt(oldFilt => ({ ...oldFilt, TypeFilter: newTypes.filter(item => item.Selected) }));
                            }}
                            />
                        </div>
                        <div className="col-6">
                            <TimeFilter
                                filter={{ start: filt.TimeFilter.StartTime, end: filt.TimeFilter.EndTime }}
                                setFilter={(start, end) => setFilt(oldFilt => ({ ...oldFilt, TimeFilter: { StartTime: start, EndTime: end } }))}
                                showQuickSelect={true}
                                dateTimeSetting="startEnd"
                                timeZone="UTC"
                                format="date"
                                showHelpMessage={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ flex: 1, margin: '5px 5px 5px 5px', overflow: 'hidden' }}>
                <div className="col-6 h-100 d-flex flex-column" style={{ padding: '0px 2px 0px 0px' }}>
                    <div className="row m-0 flex-shrink-0">
                        <div className="col d-flex justify-content-end">
                            <ToggleSwitch<{ UseMagDur: boolean }>
                                Record={{ UseMagDur: selectedWidget.Type === "MagDurChart" }}
                                Field="UseMagDur"
                                Label={selectedWidget.Type === "MagDurChart" ? "List" : "Mag/Dur"}
                                Setter={(record) => setSelectedWidget(widget => ({
                                    ...widget,
                                    ID: record.UseMagDur ? 2 : 1,
                                    Type: record.UseMagDur ? "MagDurChart" : "EventTable",
                                    Name: record.UseMagDur ? "MagDurChart" : "EventTable"
                                }))}
                            />
                        </div>
                    </div>
                    <div style={{ flex: 1, minHeight: 0 }}>
                        <CollectionWidgetRouter
                            Widget={selectedWidget}
                            Callback={setSelectedEvent}
                            EventID={selectedEvent}
                            EventFilter={filt}
                            HomePath={homePath}
                            WidgetAuthorization={
                                {
                                    Notes: {
                                        Create: false,
                                        Update: false,
                                        Delete: false
                                    },
                                    EventInfo: {
                                        Create: false,
                                        Update: false,
                                        Delete: false
                                    }
                                }
                            }
                        />
                    </div>
                </div>
                <div className="col-6 h-100" style={{ padding: '0px 0px 0px 3px', overflowY: 'auto', overflowX: 'hidden' }}>
                    <EventSearchPreview ID={selectedEvent} Height={window.innerHeight - 226} Width={window.innerWidth / 2} />
                </div>
            </div>
        </div>
    )
}


export default EventSearch;
