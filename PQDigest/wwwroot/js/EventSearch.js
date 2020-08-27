(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EventSearch"],{

/***/ "./tsx/EventSearch/EventSearch.tsx":
/*!*****************************************!*\
  !*** ./tsx/EventSearch/EventSearch.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventSearch_EventSearchPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventSearch/EventSearchPreview */ "./tsx/EventSearch/EventSearchPreview.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "../node_modules/history/es/index.js");
/* harmony import */ var _ExportCSV__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ExportCSV */ "./tsx/ExportCSV.tsx");
/* harmony import */ var _MagDurChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MagDurChart */ "./tsx/MagDurChart.tsx");
/* harmony import */ var _MultiSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MultiSelect */ "./tsx/MultiSelect.tsx");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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









var EventSearch = function (props) {
    var history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
    var qs = querystring__WEBPACK_IMPORTED_MODULE_4___default.a.parse(location.search.substring(1));
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), types = _a[0], setTypes = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.startDate == undefined ? moment().subtract(30, 'days').format("YYYY-MM-DD") : qs.startDate), 2), startDate = _b[0], setStartDate = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.endDate == undefined ? moment().format("YYYY-MM-DD") : qs.endDate), 2), endDate = _c[0], setEndDate = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), meters = _d[0], setMeters = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.returnLimit == undefined ? 100 : parseInt(qs.returnLimit)), 2), returnLimit = _e[0], setReturnLimit = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), events = _f[0], setEvents = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('StartTime'), 2), sortField = _g[0], setSortField = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), ascending = _h[0], setAscending = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.eventID == undefined ? 0 : parseInt(qs.eventID)), 2), eventID = _j[0], setEventID = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), showEventList = _k[0], setShowEventList = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle1 = GetTypes();
        handle1.done(function (data) {
            var b64string = (qs.types == undefined ? '' : qs.types);
            var ids = atob(b64string).split(',').map(function (a) { return parseInt(a); });
            if (qs.types == undefined)
                data.forEach(function (value) { return value.Selected = true; });
            else
                data.forEach(function (value) { return value.Selected = ids.indexOf(value.ID) >= 0; });
            setTypes(data);
        });
        var handle2 = GetMeters();
        handle2.done(function (data) {
            var b64string = (qs.meters == undefined ? '' : qs.meters);
            var ids = atob(b64string).split(',').map(function (a) { return parseInt(a); });
            if (qs.meters == undefined)
                data.forEach(function (value) { return value.Selected = true; });
            else
                data.forEach(function (value) { return value.Selected = ids.indexOf(value.ID) >= 0; });
            setMeters(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
            if (handle2.abort != undefined)
                handle2.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (meters.length == 0 || types.length == 0)
            return;
        history.push({ pathname: homePath + 'EventSearch', search: "?eventID=" + eventID + "&startDate=" + startDate + "&endDate=" + endDate + "&returnLimit=" + returnLimit + "&types=" + btoa(types.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; }).toString()) + "&meters=" + btoa(meters.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; }).toString()) });
        var handle1 = GetEventSearch();
        handle1.done(function (data) {
            setEvents(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [types, startDate, endDate, meters, returnLimit, eventID]);
    function GetTypes() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/EventType",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetMeters() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Meter",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetEventSearch() {
        return $.ajax({
            type: "POST",
            url: homePath + "api/OpenXDA/EventSearch",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                StartDate: startDate,
                EndDate: endDate,
                Count: returnLimit,
                Meters: meters.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; }),
                Types: types.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; })
            }),
            cache: true,
            async: true
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: "100%", width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: 75, margin: 5 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: 75 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control", style: { border: '0px', width: 100 } }, "Return #"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: returnLimit, className: "form-control", onChange: function (e) { return setReturnLimit(parseInt(e.target.value)); } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "100"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "250"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "500"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1000"))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control", style: { border: '0px', width: 100 } }, "Meters"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiSelect__WEBPACK_IMPORTED_MODULE_8__["default"], { Options: meters.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                                var newMeters = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(meters);
                                                $.each(options, function (index, option) {
                                                    newMeters.find(function (meter) { return meter.ID == option.Value; }).Selected = !option.Selected;
                                                });
                                                setMeters(newMeters);
                                            } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control", style: { border: '0px', width: 100 } }, "Type"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiSelect__WEBPACK_IMPORTED_MODULE_8__["default"], { Options: types.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                                var newTypes = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(types);
                                                $.each(options, function (index, option) {
                                                    newTypes.find(function (type) { return type.ID == option.Value; }).Selected = !option.Selected;
                                                });
                                                setTypes(newTypes);
                                            } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control", style: { border: '0px', width: 100 } }, "Start Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: startDate, type: "date", onChange: function (e) { return setStartDate(e.target.value); } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control", style: { border: '0px', width: 100 } }, "End Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: endDate, type: "date", onChange: function (e) { return setEndDate(e.target.value); } }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                        "Events",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: "form-control", value: showEventList.toString(), onChange: function (evt) { return setShowEventList(evt.target.value == 'true'); }, style: { width: 115, position: 'absolute', top: 5, right: 115 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'true' }, "List"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'false' }, "Mag/Dur")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-primary", style: { position: 'absolute', top: 5, right: 5 }, onClick: function () { return Object(_ExportCSV__WEBPACK_IMPORTED_MODULE_6__["ExportToCsv"])(events, 'EventSearch.csv'); } }, "Export CSV")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 275, padding: 0 } }, showEventList ?
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3___default.a, { cols: [
                                { key: 'StartTime', label: 'Date', headerStyle: { width: '25%' }, rowStyle: { width: '25%' }, content: function (item, key, style) { return item[key] != undefined ? moment(item[key]).format('MM/DD/YYYY HH:mm:ss') : ''; } },
                                //{ key: 'StartTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => moment(item[key]).format('HH:mm:ss') },
                                { key: 'MeterName', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'EventType', label: 'Type', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'PerUnitMagnitude', label: 'Mag (pu)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key] != undefined ? item[key].toFixed(2) : ''; } },
                                { key: 'DurationSeconds', label: 'Dur (s)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key] != undefined ? item[key].toFixed(2) : ''; } },
                                { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                            ], tableClass: "table table-hover", data: events, sortField: sortField, ascending: ascending, onSort: function (d) {
                                if (d.col == sortField) {
                                    var ordered = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.orderBy(events, [sortField], [(!ascending ? 'asc' : 'desc')]);
                                    setEvents(ordered);
                                    setAscending(!ascending);
                                }
                                else {
                                    setAscending(ascending);
                                    setSortField(d.col);
                                    var ordered = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.orderBy(events, [d.col], [(ascending ? 'asc' : 'desc')]);
                                    setEvents(ordered);
                                }
                            }, onClick: function (data) { setEventID(data.row.ID); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID == eventID; } }) :
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MagDurChart__WEBPACK_IMPORTED_MODULE_7__["default"], { Height: (window.innerHeight) - 275, Width: window.innerWidth / 2 - 20, Points: events.map(function (a) { return Object.create({ EventID: a.ID, Magnitude: a.PerUnitMagnitude, Duration: a.DurationSeconds }); }), OnSelect: function (evt, point) { return setEventID(point.EventID); } })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 226, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearch_EventSearchPreview__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: eventID, Height: window.innerHeight - 226, Width: window.innerWidth / 2 })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearch);


/***/ }),

/***/ "./tsx/EventSearch/EventSearchPreview.tsx":
/*!************************************************!*\
  !*** ./tsx/EventSearch/EventSearchPreview.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OpenSEE_EventSearchOpenSEE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenSEE/EventSearchOpenSEE */ "./tsx/EventSearch/OpenSEE/EventSearchOpenSEE.tsx");
/* harmony import */ var _TrenDAP_EventSearchTrenDAP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrenDAP/EventSearchTrenDAP */ "./tsx/EventSearch/TrenDAP/EventSearchTrenDAP.tsx");
/* harmony import */ var _PQI_EventSearchPQI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PQI/EventSearchPQI */ "./tsx/EventSearch/PQI/EventSearchPQI.tsx");
//******************************************************************************************************
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var EventSearchPreview = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('Data'), 2), control = _a[0], setControl = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.EventID < 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No Event Selected ... ") :
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            (control == 'Data' ?
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchOpenSEE__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, Width: props.Width, Height: props.Height / 3 - 1 }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrenDAP_EventSearchTrenDAP__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Width: props.Width, Height: props.Height / 3 - 1 }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQI_EventSearchPQI__WEBPACK_IMPORTED_MODULE_3__["default"], { EventID: props.EventID, Width: props.Width, Height: props.Height / 3 - 1 }))
                : null),
            (control == 'PQI' ?
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQI_EventSearchPQI__WEBPACK_IMPORTED_MODULE_3__["default"], { EventID: props.EventID, Width: props.Width, Height: props.Height }))
                : null))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearchPreview);


/***/ }),

/***/ "./tsx/EventSearch/OpenSEE/EventSearchOpenSEE.tsx":
/*!********************************************************!*\
  !*** ./tsx/EventSearch/OpenSEE/EventSearchOpenSEE.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSearchOpenSEE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventSearchPreviewD3Chart */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx");
/* harmony import */ var _EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSearchPreviewD3ChartAxis */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx");
//******************************************************************************************************
//  EventSearchOpenSEE.tsx - Gbtc
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
//  03/03/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



function EventSearchOpenSEE(props) {
    var margin = { Top: 0, Right: 20, Bottom: 0, Left: 35 };
    //const svgWidth = props.Width - margin.left - margin.right;
    //const svgHeight = props.Height - margin.top - margin.bottom - 65;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'WaveformViewer?EventID=' + props.EventID, target: "_blank" }, "View Waveform")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Voltage', DataType: 'Time', Margin: margin, Height: props.Height / 3, Width: props.Width - 10 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Current', DataType: 'Time', Margin: margin, Width: props.Width - 10, Height: props.Height / 3 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Margin: margin, Width: props.Width - 10, Height: 40, DataType: 'Time' }))));
}


/***/ }),

/***/ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx":
/*!***************************************************************!*\
  !*** ./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var EventSearchPreviewD3Chart = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), paths = _a[0], setPaths = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        setPaths([]);
        return GetData();
    }, [props.EventID]);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Event/Data?eventId=" + props.EventID +
                ("&pixels=" + props.Width) +
                ("&type=" + props.MeasurementType) +
                ("&dataType=" + props.DataType),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(function (data) { return DrawChart(data); });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }
    function DrawChart(data) {
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([props.Height - props.Margin.Top, props.Margin.Bottom]);
        var yextent = [0, 0];
        var xextent = [9007199254740991, -9007199254740990];
        Object.keys(data).forEach(function (key, index, keys) {
            var newyexent = Object(d3__WEBPACK_IMPORTED_MODULE_1__["extent"])(data[key], function (d) { return d[1]; });
            var newxexent = Object(d3__WEBPACK_IMPORTED_MODULE_1__["extent"])(data[key], function (d) { return d[0]; });
            if (parseFloat(newyexent[0].toString()) < yextent[0])
                yextent[0] = parseFloat(newyexent[0].toString());
            if (parseFloat(newyexent[1].toString()) > yextent[1])
                yextent[1] = parseFloat(newyexent[1].toString());
            if (parseFloat(newxexent[0].toString()) < xextent[0])
                xextent[0] = parseFloat(newxexent[0].toString());
            if (parseFloat(newxexent[1].toString()) > xextent[1])
                xextent[1] = parseFloat(newxexent[1].toString());
        });
        yextent = [1.20 * yextent[0], 1.20 * yextent[1]];
        y.domain(yextent);
        x.domain(xextent);
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return x(d[0]); }).y(function (d) { return y(d[1]); });
        var newPaths = [];
        $.each(Object.keys(data), function (index, key) {
            newPaths.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { key: key, fill: 'none', strokeLinejoin: 'round', strokeWidth: '1.5', stroke: getColor(key), d: linefunc(data[key]) }));
        });
        setPaths(newPaths);
    }
    function getColor(label) {
        if (label.indexOf('VA') >= 0)
            return '#A30000';
        if (label.indexOf('VB') >= 0)
            return '#0029A3';
        if (label.indexOf('VC') >= 0)
            return '#007A29';
        if (label.indexOf('VN') >= 0)
            return '#c3c3c3';
        if (label.indexOf('IA') >= 0)
            return '#FF0000';
        if (label.indexOf('IB') >= 0)
            return '#0066CC';
        if (label.indexOf('IC') >= 0)
            return '#33CC33';
        if (label.indexOf('IR') >= 0)
            return '#c3c3c3';
        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);
            return "#" + (ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne) + (ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo) + (ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree);
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height /*, margin: '0x', padding: '0px'*/ } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: props.Width, height: props.Height, style: { fill: 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M " + props.Margin.Left + " " + props.Margin.Top + " H " + (props.Width - props.Margin.Right) + " V " + props.Height + " H " + props.Margin.Left + " V " + props.Margin.Top, style: { shapeRendering: 'crispEdges' } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", transform: "rotate(-90 0,0)", y: props.Margin.Left - 15, x: -(props.Height + 35) / 2 }, props.MeasurementType == "Voltage" ? "Voltage" : "Amps"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, paths))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearchPreviewD3Chart);


/***/ }),

/***/ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx":
/*!*******************************************************************!*\
  !*** ./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var EventSearchPreviewD3ChartAxis = function (props) {
    //const margin = { top: 15, right: 20, bottom: 60, left: 40 };
    //const svgHeight = props.Height - margin.top - margin.bottom;
    var svgHeight = props.Height;
    var svgWidth = props.Width;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), hidden = _a[0], setHidden = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), xAxisTicks = _b[0], setXAxisTicks = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        return GetData();
    }, [props.EventID]);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Event/Data?eventId=" + props.EventID +
                ("&pixels=" + svgWidth) +
                "&type=Voltage" +
                ("&dataType=" + props.DataType),
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
        handle.done(function (data) { return DrawChart(data); });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
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
    }
    ;
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
        var series = data[Object.keys(data)[0]];
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([0, svgWidth]).domain([series[0][0], series[series.length - 1][0]]);
        var ticks = [];
        var span = x.domain()[1] - x.domain()[0];
        for (var i = x.domain()[0] + span / 7; i < x.domain()[1]; i += span / 7) {
            ticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", transform: "translate(" + x(i) + "," + 0 + ")", style: { opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M 0,6 V -6", strokeWidth: 0.5 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, moment('1970-01-01T00:00:00').add(i, 'milliseconds').format(props.DataType == 'Time' ? 'ss.SSS' : 'HH:ss'))));
        }
        setXAxisTicks(ticks);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: svgHeight /*, margin: '0x', padding: '0px'*/ }, hidden: hidden },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: svgWidth, height: svgHeight, style: { fill: 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M " + props.Margin.Left + " " + (props.Margin.Top + 1) + " H " + (props.Width - props.Margin.Right), style: { shapeRendering: 'crispEdges' } }),
            xAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: svgWidth / 2, y: svgHeight - 10 }, "Time"))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearchPreviewD3ChartAxis);


/***/ }),

/***/ "./tsx/EventSearch/PQI/EventSearchPQI.tsx":
/*!************************************************!*\
  !*** ./tsx/EventSearch/PQI/EventSearchPQI.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSearchPQI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PQIChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PQIChart */ "./tsx/EventSearch/PQI/PQIChart.tsx");
//******************************************************************************************************
//  EventSearchPQI.tsx - Gbtc
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
//  07/02/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


function EventSearchPQI(props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), components = _a[0], setComponents = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({ TestCurveID: 0 }), 2), component = _b[0], setComponent = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), points = _c[0], setPoints = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), curve = _d[0], setCurve = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        setComponent({ TestCurveID: 0 });
        setComponents([]);
        setPoints([]);
        setCurve([]);
        var handle1 = GetComponents();
        handle1.done(function (data) {
            setComponents(data);
            if (data.length != 0)
                setComponent(data[0]);
        });
        var handle2 = GetDisturbances();
        handle2.done(function (data) {
            setPoints(data.map(function (d) { return Object.create({ Duration: d.DurationSeconds, Magnitude: d.PerUnitMagnitude }); }));
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.EventID]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (component.TestCurveID == 0) {
            setComponents([]);
            return;
        }
        var handle1 = GetComponentCurve();
        handle1.done(function (data) {
            setCurve(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [component]);
    function GetComponents() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/PQI/Components/" + props.EventID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetComponentCurve() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/PQI/Component/Curve/" + component.CurveDB + "/" + component.TestCurveID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetDisturbances() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/PQI/Distrubances/" + props.EventID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    try {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                "PQI - Ride-through Curves",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: component.TestCurveID, className: 'form-control', style: { width: 200, position: 'absolute', right: 6, top: 4 }, onChange: function (evt) { return setComponent(components.find(function (x) { return x.TestCurveID == evt.target.value; })); } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: '0', hidden: component.TestCurveID != 0 }, "None Available"),
                    components.map(function (comp, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { key: index, value: comp.TestCurveID }, comp.Title); }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQIChart__WEBPACK_IMPORTED_MODULE_1__["default"], { Height: props.Height - 50, Width: props.Width, EventID: props.EventID, Points: points, Curve: curve }))));
    }
    catch (err) {
        return err;
    }
}


/***/ }),

/***/ "./tsx/EventSearch/PQI/PQIChart.tsx":
/*!******************************************!*\
  !*** ./tsx/EventSearch/PQI/PQIChart.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  PQIChart.tsx - Gbtc
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
//  07/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


var PQIChart = function (props) {
    var margin = { top: 15, right: 30, bottom: 40, left: 50 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom;
    var xmax = (props.Curve.length > 0 ? Object(d3__WEBPACK_IMPORTED_MODULE_1__["max"])(props.Curve.map(function (a) { return a.Duration; })) : 3);
    var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().range([margin.left, svgWidth + margin.left]).domain([0, xmax]);
    var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([0, 1.1]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    }, []);
    function BuildXAxis() {
        var ticks = [];
        for (var i = x.domain()[0]; i <= x.domain()[1]; i++) {
            ticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", transform: "translate(" + x(i) + "," + svgHeight + ")", style: { opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M 0,6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, i)));
        }
        return ticks;
    }
    function BuildYAxis() {
        var yticks = [];
        for (var i = y.domain()[0]; i <= y.domain()[1]; i = 0.5 + i) {
            yticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", transform: "translate(" + margin.left + "," + y(i) + ")", style: { opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M -6,0 H " + svgWidth, strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: "-15", dy: "0.32em", textAnchor: 'middle' }, i.toFixed(1))));
        }
        return yticks;
    }
    function GetPath(data) {
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return x(d.Duration); }).y(function (d) { return y(d.Magnitude); });
        return linefunc(data);
    }
    function BuildMadDurCircles(data) {
        var circles = data.map(function (point, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { key: index, className: "dot", r: 3, cx: x(point.Duration), cy: y(point.Magnitude), fill: 'blue' }); });
        return circles;
    }
    try {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height, width: props.Width } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { id: "PQIChart", width: props.Width, height: props.Height, style: { fill: 'none', shapeRendering: 'crispEdges' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: GetPath(props.Curve), stroke: 'red' }),
                    BuildMadDurCircles(props.Points)),
                BuildXAxis(),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: svgWidth / 2, y: svgHeight + margin.top + 20 }, "Duration (s)"),
                BuildYAxis(),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", transform: "rotate(-90 0,0)", y: margin.left - 35, x: -svgHeight / 2 - margin.bottom }, "Per Unit Voltage"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }))));
    }
    catch (err) {
        return err;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (PQIChart);


/***/ }),

/***/ "./tsx/EventSearch/TrenDAP/EventSearchTrenDAP.tsx":
/*!********************************************************!*\
  !*** ./tsx/EventSearch/TrenDAP/EventSearchTrenDAP.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSearchTrenDAP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OpenSEE/EventSearchPreviewD3Chart */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx");
/* harmony import */ var _OpenSEE_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OpenSEE/EventSearchPreviewD3ChartAxis */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx");
//******************************************************************************************************
//  EventSearchTrenDAP.tsx - Gbtc
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
//  07/02/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



function EventSearchTrenDAP(props) {
    var margin = { Top: 0, Right: 20, Bottom: 0, Left: 35 };
    //const svgWidth = props.Width - margin.left - margin.right;
    //const svgHeight = props.Height - margin.top - margin.bottom - 65;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'TrenDAP?eventid=' + props.EventID, target: "_blank" }, "View Trending Data")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Voltage', DataType: 'Trending', Margin: margin, Width: props.Width - 10, Height: props.Height / 3 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Current', DataType: 'Trending', Margin: margin, Width: props.Width - 10, Height: props.Height / 3 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Margin: margin, Width: props.Width - 10, Height: 40, DataType: 'Trending' }))));
}


/***/ }),

/***/ "./tsx/ExportCSV.tsx":
/*!***************************!*\
  !*** ./tsx/ExportCSV.tsx ***!
  \***************************/
/*! exports provided: ExportToCsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportToCsv", function() { return ExportToCsv; });
//******************************************************************************************************
//  ExportCSV.ts - Gbtc
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
//  07/01/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
function ExportToCsv(data, filename) {
    if (data.length < 1)
        return;
    var rows = [Object.keys(data[0])];
    $.each(data, function (index, value) {
        rows.push(Object.keys(value).map(function (key) { return value[key]; }));
    });
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            }
            ;
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };
    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }
    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    }
    else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


/***/ }),

/***/ "./tsx/MagDurChart.tsx":
/*!*****************************!*\
  !*** ./tsx/MagDurChart.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



var MagDurChart = function (props) {
    var margin = { top: 15, right: 20, bottom: 60, left: 40 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({ X: { Lower: 0.00001, Upper: 1000000 }, Y: { Lower: 0, Upper: 2.5 } }), 2), domains = _a[0], setDomains = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), xAxisTicks = _b[0], setXAxisTicks = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), yAxisTicks = _c[0], setYAxisTicks = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurCurveData = _d[0], setMagDurCurveData = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurCurves = _e[0], setMagDurCurves = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurCircles = _f[0], setMagDurCircles = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle1 = GetMagDurCurves();
        handle1.done(function (data) {
            setMagDurCurveData(data);
            BuildMagDurCurve(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        BuildYAxis();
        BuildXAxis();
        BuildMadDurCircles(props.Points);
        BuildMagDurCurve(magDurCurveData);
    }, [domains, props.Points]);
    function GetMagDurCurves() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MagDurCurves",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function xAxisText(value) {
        if (value < 0.0000001)
            return (value * 1000000000).toFixed(0) + 'n';
        if (value < 0.001)
            return (value * 1000000).toFixed(0) + 'µ';
        if (value > 1000 && value < 1000000)
            return (value / 1000).toFixed(0) + 'k';
        if (value > 100000)
            return (value / 1000000).toFixed(0) + 'M';
        if (value < 1)
            return value.toPrecision(1).toString();
        return value.toString();
    }
    function BuildXAxis() {
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);
        var i = parseFloat(Math.pow(10, Math.floor(Math.log(domains.X.Lower) / Math.log(10))).toPrecision(1));
        var ticks = [];
        var logDomain = x.domain().map(function (l) { return Math.log(l) / Math.log(10); });
        var ldDiff = logDomain[1] - logDomain[0];
        for (; i <= domains.X.Upper; i = i * 10) {
            ticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", transform: "translate(" + x(i) + "," + svgHeight + ")", style: { opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M 0,6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, xAxisText(i)),
                (ldDiff < 5 ?
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, ([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(function (num) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', key: num, d: "M " + (x(num * i) - x(i)) + ",6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }); }))
                    : null)));
        }
        setXAxisTicks(ticks);
    }
    function BuildYAxis() {
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        var step = (y.domain()[1] - y.domain()[0] <= 1.5 ? 0.1 : 0.5);
        var yticks = [];
        for (var i = Math.floor(domains.Y.Lower); i <= domains.Y.Upper; i = step + i) {
            yticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", transform: "translate(" + margin.left + "," + y(i) + ")", style: { opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M -6,0 H " + svgWidth, strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: "-15", dy: "0.32em", textAnchor: 'middle' }, i.toFixed(1))));
        }
        setYAxisTicks(yticks);
    }
    function BuildMagDurCurve(data) {
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return x(d.DurationSeconds); }).y(function (d) { return y(d.PerUnitMagnitude); });
        var mdcs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.groupBy(data, function (d) { return d.ID; });
        var mdcss = Object.keys(mdcs).map(function (key) { return { Name: mdcs[key][0].Name, Visible: mdcs[key][0].Visible, Color: mdcs[key][0].Color, Path: linefunc(mdcs[key]) }; });
        setMagDurCurves(mdcss);
    }
    function BuildMadDurCircles(data) {
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);
        var circles = data.filter(function (point) { return point.Magnitude >= domains.Y.Lower && point.Magnitude <= domains.Y.Upper && point.Duration >= domains.X.Lower && point.Duration <= domains.X.Upper; }).map(function (point, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { key: index, className: "dot", r: 3, cx: x(point.Duration), cy: y(point.Magnitude), fill: 'blue', style: { cursor: 'pointer' }, onClick: function (evt) { return props.OnSelect(evt, point); } }); });
        setMagDurCircles(circles);
    }
    function handleZoom(evt) {
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);
        // use event.nativeEvent.offsetX and Y
        var zoomLocationY = evt.nativeEvent.offsetY;
        var zoomLocationX = evt.nativeEvent.offsetX;
        // event.deltaY positive is wheel down or out and negative is wheel up or in
        if (evt.deltaY < 0) {
            var domainXLength = (x.range()[1] - x.range()[0]) * 0.75;
            var domainYLength = (y.range()[1] - y.range()[0]) * 0.75;
            //console.log('handleZoom', { X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) }, Y: { Lower: zoomLocationY - domainYLength / 2, Upper: zoomLocationY + domainYLength / 2 } });
            setDomains({
                X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) },
                Y: { Lower: y.invert(zoomLocationY - domainYLength / 2), Upper: y.invert(zoomLocationY + domainYLength / 2) }
            });
        }
        else {
            var domainXLength = (x.range()[1] - x.range()[0]) * 1.25;
            var domainYLength = (y.range()[1] - y.range()[0]) * 1.25;
            //console.log('handleZoom', { X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) }, Y: { Lower: zoomLocationY - domainYLength / 2, Upper: zoomLocationY + domainYLength / 2 } });
            setDomains({
                X: { Lower: x.invert(zoomLocationX - domainXLength / 2), Upper: x.invert(zoomLocationX + domainXLength / 2) },
                Y: { Lower: y.invert(zoomLocationY - domainYLength / 2), Upper: y.invert(zoomLocationY + domainYLength / 2) }
            });
        }
    }
    function handleDrag(evt) {
        evt.preventDefault();
        if (evt.nativeEvent.offsetX < margin.left || evt.nativeEvent.offsetX > svgWidth + margin.left)
            return;
        if (evt.nativeEvent.offsetY < margin.top || evt.nativeEvent.offsetY > svgHeight + margin.top)
            return;
        evt.persist();
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([domains.Y.Lower, domains.Y.Upper]);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([domains.X.Lower, domains.X.Upper]);
        $('#magDurChart').on('mousemove', function (e) {
            setDomains({
                X: {
                    Lower: x.invert(x(domains.X.Lower) + evt.clientX - e.clientX),
                    Upper: x.invert(x(domains.X.Upper) + evt.clientX - e.clientX)
                },
                Y: {
                    Lower: y.invert(y(domains.Y.Lower) + evt.clientY - e.clientY),
                    Upper: y.invert(y(domains.Y.Upper) + evt.clientY - e.clientY)
                }
            });
        });
    }
    function stopDrag(evt) {
        evt.preventDefault();
        $('#magDurChart').off('mousemove');
    }
    function resetZoom(evt) {
        setDomains({ X: { Lower: 0.00001, Upper: 1000000 }, Y: { Lower: 0, Upper: 2.5 } });
    }
    function hideReset() {
        return domains.X.Lower == 0.00001 && domains.X.Upper == 1000000 && domains.Y.Lower == 0 && domains.Y.Upper == 2.5;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height, width: props.Width, position: 'relative' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { position: 'absolute', top: 20, right: 25 }, className: "btn", onClick: resetZoom, hidden: hideReset() }, "Reset"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { id: "magDurChart", width: props.Width, height: props.Height, style: { fill: 'none', shapeRendering: 'crispEdges' }, onWheel: handleZoom, onMouseDown: handleDrag, onMouseUp: stopDrag },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null,
                magDurCurves.map(function (mdc, index) { return (mdc.Visible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { key: index, d: mdc.Path, stroke: mdc.Color }) : null); }),
                magDurCircles),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: 0, y: 0, width: props.Width, height: margin.top, fill: 'white', stroke: 'white' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: 0, y: props.Height - margin.bottom - margin.top, width: props.Width, height: margin.bottom + margin.top, fill: 'white', stroke: 'white' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: 0, y: 0, width: margin.left, height: props.Height, fill: 'white', stroke: 'white' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: props.Width - margin.right, y: 0, width: margin.right, height: props.Height, fill: 'white', stroke: 'white' }),
            magDurCurves.map(function (mdc, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { style: { cursor: 'pointer', opacity: (mdc.Visible ? 1 : 0.25) }, key: index, x: margin.left + 10 + 20 * index, y: svgHeight + 40, width: 15, height: 15, fill: mdc.Color, onClick: function (event) {
                    mdc.Visible = !mdc.Visible;
                    var update = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(magDurCurves);
                    setMagDurCurves(update);
                    var mdcd = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(magDurCurveData);
                    mdcd.filter(function (x) { return x.Name == mdc.Name; }).forEach(function (x) { return x.Visible = mdc.Visible; });
                    setMagDurCurveData(mdcd);
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, mdc.Name)); }),
            xAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: svgWidth / 2, y: svgHeight + margin.top + 20 }, "Duration (s)"),
            yAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", transform: "rotate(-90 0,0)", y: margin.left - 25, x: -svgHeight / 2 - margin.bottom }, "Per Unit Voltage"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }))));
};
/* harmony default export */ __webpack_exports__["default"] = (MagDurChart);


/***/ }),

/***/ "./tsx/MultiSelect.tsx":
/*!*****************************!*\
  !*** ./tsx/MultiSelect.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//******************************************************************************************************
//  MultiSelect.tsx - Gbtc
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
//  07/17/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var MultiSelect = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), 2), show = _a[0], setShow = _a[1];
    var multiSelect = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    function HandleShow(evt) {
        if (!multiSelect.current.contains(evt.target))
            setShow(false);
        else
            setShow(true);
    }
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        return function () {
        };
    }, [props.Options]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        document.addEventListener('mousedown', HandleShow, false);
        return function () {
            document.removeEventListener('mousedown', HandleShow, false);
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: multiSelect, style: { position: 'relative', display: 'inline-block', width: 'inherit' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { border: '1px solid #ced4da', padding: '.375rem .75rem', fontSize: '1rem', borderRadius: '.25rem' }, className: "btn form-control dropdown-toggle", onClick: HandleShow },
            props.Options.filter(function (x) { return x.Selected; }).length != props.Options.length ? props.Options.filter(function (x) { return x.Selected; }).length : 'All ',
            " Selected"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { maxHeight: window.innerHeight * .75, overflowY: 'auto', padding: '10 5', display: show ? 'block' : 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 401, minWidth: '100%' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: 'table', style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { onClick: function (evt) {
                            evt.preventDefault();
                            props.OnChange(evt, props.Options.filter(function (x) { return x.Selected == (props.Options.filter(function (x) { return x.Selected; }).length == props.Options.length); }));
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", checked: props.Options.filter(function (x) { return x.Selected; }).length == props.Options.length, onChange: function () { return null; } })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "All")),
                    props.Options.map(function (f, i) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: i, onClick: function (evt) { return props.OnChange(evt, [f]); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", checked: f.Selected, onChange: function () { return null; } })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, f.Text)); }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (MultiSelect);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9PcGVuU0VFL0V2ZW50U2VhcmNoT3BlblNFRS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvRXZlbnRTZWFyY2hQUUkudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvUFFJQ2hhcnQudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9UcmVuREFQL0V2ZW50U2VhcmNoVHJlbkRBUC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V4cG9ydENTVi50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L01hZ0R1ckNoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTXVsdGlTZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsMEJBQTBCO0FBQzFCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURB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QUFDLENBQUMsQ0FBQyxDQUFDLEVBQUosQ0FBSSxDQUFDLENBQUM7WUFFN0MsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxRyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEIsSUFBSSxRQUFRLEdBQUcsK0NBQUksRUFBb0IsQ0FBQyxDQUFDLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBUCxDQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBUCxDQUFPLENBQUMsQ0FBQztRQUV4RSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxxRUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUM7UUFDMUksQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsUUFBUSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUMvQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDL0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUMvQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDL0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUMvQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO2FBRTFDO1lBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0QsT0FBTyxNQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBRyxDQUFDO1NBQ3pMO0lBQ0wsQ0FBQztJQUdELE9BQU8sQ0FD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QyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMxRSxNQUFNLENBQUMsSUFBSSxDQUNQLGtFQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUUsZUFBYSxNQUFNLENBQUMsSUFBSSxTQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBRyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxSSxxRUFBTSxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxjQUFZLFFBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxHQUFTO2dCQUMxRSxxRUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxRQUFRLElBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBUSxDQUNsRyxD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QUMsVUFBQyxLQUFLLEVBQUUsS0FBSyxJQUFLLDhFQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFDLEdBQUcsSUFBSyxZQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsR0FBSSxFQUFuTCxDQUFtTCxDQUFDLENBQUM7UUFDbFksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEdBQUc7UUFDbkIsSUFBSSxDQUFDLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLEdBQUcsbURBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVoSCxzQ0FBc0M7UUFDdEMsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFP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QUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQUksQ0FBSzt3QkFBQSw2RUFBWSxDQUFLO29CQUMxSixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssMEVBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssWUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3Qjt3QkFBRTs0QkFBSSxzRUFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQUksQ0FBSzt3QkFBQSx1RUFBSyxDQUFDLENBQUMsSUFBSSxDQUFNLENBQUssRUFBM0osQ0FBMkosQ0FBQyxDQUNyTCxDQUVKLENBQ04sQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBQ2MsMEVBQVcsRUFBQyIsImZpbGUiOiJFdmVudFNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoVGFibGUgZnJvbSAnLi4vRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2hUYWJsZSc7XHJcbmltcG9ydCBFdmVudFNlYXJjaFByZXZpZXcgZnJvbSAnLi4vRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2hQcmV2aWV3JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoTWFnRHVyIGZyb20gJy4uL0V2ZW50U2VhcmNoL0V2ZW50U2VhcmNoTWFnRHVyJztcclxuaW1wb3J0IHsgUFFEaWdlc3QsIE9wZW5YREEgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcbmltcG9ydCB7IEV4cG9ydFRvQ3N2IH0gZnJvbSAnLi4vRXhwb3J0Q1NWJztcclxuaW1wb3J0IE1hZ0R1ckNoYXJ0IGZyb20gJy4uL01hZ0R1ckNoYXJ0JztcclxuaW1wb3J0IE11bHRpU2VsZWN0IGZyb20gJy4uL011bHRpU2VsZWN0JztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgcXMgPSBxdWVyeVN0cmluZy5wYXJzZShsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcclxuICAgIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5FdmVudFR5cGVbXT4oW10pXHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihxcy5zdGFydERhdGUgPT0gdW5kZWZpbmVkID8gbW9tZW50KCkuc3VidHJhY3QoMzAsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSA6IHFzLnN0YXJ0RGF0ZSlcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocXMuZW5kRGF0ZSA9PSB1bmRlZmluZWQgPyBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIDogcXMuZW5kRGF0ZSlcclxuICAgIGNvbnN0IFttZXRlcnMsIHNldE1ldGVyc10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLk1ldGVyW10+KFtdKTtcclxuICAgIGNvbnN0IFtyZXR1cm5MaW1pdCwgc2V0UmV0dXJuTGltaXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy5yZXR1cm5MaW1pdCA9PSB1bmRlZmluZWQgPyAxMDA6IHBhcnNlSW50KHFzLnJldHVybkxpbWl0IGFzIHN0cmluZykpO1xyXG4gICAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuRXZlbnRTZWFyY2hbXT4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIE9wZW5YREEuRXZlbnRTZWFyY2g+KCdTdGFydFRpbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFtldmVudElELCBzZXRFdmVudElEXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocXMuZXZlbnRJRCA9PSB1bmRlZmluZWQgPyAwIDogcGFyc2VJbnQocXMuZXZlbnRJRCBhcyBzdHJpbmcpKTtcclxuICAgIGNvbnN0IFtzaG93RXZlbnRMaXN0LCBzZXRTaG93RXZlbnRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRUeXBlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogT3BlblhEQS5FdmVudFR5cGVbXSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYjY0c3RyaW5nID0gKHFzLnR5cGVzID09IHVuZGVmaW5lZCA/ICcnOiBxcy50eXBlcylcclxuICAgICAgICAgICAgbGV0IGlkcyA9IGF0b2IoYjY0c3RyaW5nIGFzIHN0cmluZykuc3BsaXQoJywnKS5tYXAoYSA9PiBwYXJzZUludChhKSlcclxuICAgICAgICAgICAgaWYocXMudHlwZXMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gdHJ1ZSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gaWRzLmluZGV4T2YodmFsdWUuSUQpID49IDApXHJcblxyXG4gICAgICAgICAgICBzZXRUeXBlcyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBHZXRNZXRlcnMoKTtcclxuICAgICAgICBoYW5kbGUyLmRvbmUoKGRhdGE6IE9wZW5YREEuTWV0ZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYjY0c3RyaW5nID0gKHFzLm1ldGVycyA9PSB1bmRlZmluZWQgPyAnJyA6IHFzLm1ldGVycylcclxuICAgICAgICAgICAgbGV0IGlkcyA9IGF0b2IoYjY0c3RyaW5nIGFzIHN0cmluZykuc3BsaXQoJywnKS5tYXAoYSA9PiBwYXJzZUludChhKSlcclxuICAgICAgICAgICAgaWYgKHFzLm1ldGVycyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSB0cnVlKVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSBpZHMuaW5kZXhPZih2YWx1ZS5JRCkgPj0gMClcclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVycyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUyLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMi5hYm9ydCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobWV0ZXJzLmxlbmd0aCA9PSAwIHx8IHR5cGVzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiBob21lUGF0aCArICdFdmVudFNlYXJjaCcsIHNlYXJjaDogYD9ldmVudElEPSR7ZXZlbnRJRH0mc3RhcnREYXRlPSR7c3RhcnREYXRlfSZlbmREYXRlPSR7ZW5kRGF0ZX0mcmV0dXJuTGltaXQ9JHtyZXR1cm5MaW1pdH0mdHlwZXM9JHtidG9hKHR5cGVzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpLnRvU3RyaW5nKCkpfSZtZXRlcnM9JHtidG9hKG1ldGVycy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKS50b1N0cmluZygpKX1gfSlcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRFdmVudFNlYXJjaCgpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogT3BlblhEQS5FdmVudFNlYXJjaFtdKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEV2ZW50cyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSwgW3R5cGVzLCBzdGFydERhdGUsIGVuZERhdGUsIG1ldGVycywgcmV0dXJuTGltaXQsIGV2ZW50SURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRUeXBlcygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5FdmVudFR5cGVbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50VHlwZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWV0ZXJzKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLk1ldGVyW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RXZlbnRTZWFyY2goKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuRXZlbnRTZWFyY2hbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudFNlYXJjaGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgU3RhcnREYXRlOiBzdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBFbmREYXRlOiBlbmREYXRlLFxyXG4gICAgICAgICAgICAgICAgQ291bnQ6IHJldHVybkxpbWl0LFxyXG4gICAgICAgICAgICAgICAgTWV0ZXJzOiBtZXRlcnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRCksXHJcbiAgICAgICAgICAgICAgICBUeXBlczogdHlwZXMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRClcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogNzUsIG1hcmdpbjogNSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e2hlaWdodDogNzV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3tib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwfX0+UmV0dXJuICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cmV0dXJuTGltaXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtlID0+IHNldFJldHVybkxpbWl0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjI1MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjUwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwIH19Pk1ldGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3QgT3B0aW9ucz17bWV0ZXJzLm1hcCh0ID0+IE9iamVjdC5jcmVhdGUoeyBUZXh0OiB0Lk5hbWUsIFZhbHVlOiB0LklELCBTZWxlY3RlZDogdC5TZWxlY3RlZCB9KSl9IE9uQ2hhbmdlPXsoZXZ0LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdNZXRlcnMgPSBfLmNsb25lRGVlcChtZXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gob3B0aW9ucywgKGluZGV4LCBvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld01ldGVycy5maW5kKG1ldGVyID0+IG1ldGVyLklEID09IG9wdGlvbi5WYWx1ZSkuU2VsZWN0ZWQgPSAhb3B0aW9uLlNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlcnMobmV3TWV0ZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4Jywgd2lkdGg6IDEwMCB9fT5UeXBlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdCBPcHRpb25zPXt0eXBlcy5tYXAodCA9PiBPYmplY3QuY3JlYXRlKHsgVGV4dDogdC5OYW1lLCBWYWx1ZTogdC5JRCwgU2VsZWN0ZWQ6IHQuU2VsZWN0ZWQgfSkpfSBPbkNoYW5nZT17KGV2dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHlwZXMgPSBfLmNsb25lRGVlcCh0eXBlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VHlwZXMuZmluZCh0eXBlID0+IHR5cGUuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFR5cGVzKG5ld1R5cGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4Jywgd2lkdGg6IDEwMCB9fT5TdGFydCBEYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c3RhcnREYXRlfSB0eXBlPVwiZGF0ZVwiIG9uQ2hhbmdlPXtlID0+IHNldFN0YXJ0RGF0ZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwIH19PkVuZCBEYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW5kRGF0ZX0gdHlwZT1cImRhdGVcIiBvbkNoYW5nZT17ZSA9PiBzZXRFbmREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogXCJjYWxjKDEwMCUgLSA4MHB4KVwiLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtzaG93RXZlbnRMaXN0LnRvU3RyaW5nKCl9IG9uQ2hhbmdlPXtldnQgPT4gc2V0U2hvd0V2ZW50TGlzdChldnQudGFyZ2V0LnZhbHVlID09ICd0cnVlJyl9IHN0eWxlPXt7d2lkdGg6IDExNSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogNSwgcmlnaHQ6IDExNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3RydWUnPkxpc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdmYWxzZSc+TWFnL0R1cjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiA1IH19IG9uQ2xpY2s9eygpID0+IEV4cG9ydFRvQ3N2KGV2ZW50cywgJ0V2ZW50U2VhcmNoLmNzdicpfT5FeHBvcnQgQ1NWPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCkgLSAyNzUsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0V2ZW50TGlzdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE9wZW5YREEuRXZlbnRTZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnU3RhcnRUaW1lJywgbGFiZWw6ICdEYXRlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcyNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbVtrZXldICE9IHVuZGVmaW5lZCA/IG1vbWVudChpdGVtW2tleV0pLmZvcm1hdCgnTU0vREQvWVlZWSBISDptbTpzcycpOicnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiAnU3RhcnRUaW1lJywgbGFiZWw6ICdUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBtb21lbnQoaXRlbVtrZXldKS5mb3JtYXQoJ0hIOm1tOnNzJykgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWV0ZXJOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0V2ZW50VHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdQZXJVbml0TWFnbml0dWRlJywgbGFiZWw6ICdNYWcgKHB1KScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW1ba2V5XSAhPSB1bmRlZmluZWQgPyhpdGVtW2tleV0gYXMgbnVtYmVyKS50b0ZpeGVkKDIpOicnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0R1cmF0aW9uU2Vjb25kcycsIGxhYmVsOiAnRHVyIChzKScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW1ba2V5XSAhPSB1bmRlZmluZWQgPyhpdGVtW2tleV0gYXMgbnVtYmVyKS50b0ZpeGVkKDIpOicnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShldmVudHMsIFtzb3J0RmllbGRdLCBbKCFhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFdmVudHMob3JkZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShldmVudHMsIFtkLmNvbF0sIFsoYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRzKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyBzZXRFdmVudElEKGRhdGEucm93LklEKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT0gZXZlbnRJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hZ0R1ckNoYXJ0IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCkgLSAyNzV9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMH0gUG9pbnRzPXtldmVudHMubWFwKGEgPT4gT2JqZWN0LmNyZWF0ZSh7IEV2ZW50SUQ6IGEuSUQsIE1hZ25pdHVkZTogYS5QZXJVbml0TWFnbml0dWRlLCBEdXJhdGlvbjogYS5EdXJhdGlvblNlY29uZHMgfSkpfSBPblNlbGVjdD17KGV2dCwgcG9pbnQpID0+IHNldEV2ZW50SUQocG9pbnQuRXZlbnRJRCl9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMHB4IDBweCAzcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkV2ZW50IFByZXZpZXc8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjI2LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlldyBFdmVudElEPXtldmVudElEfSBIZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAtIDIyNn0gV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VhcmNoOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzI5LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hPcGVuU0VFIGZyb20gJy4vT3BlblNFRS9FdmVudFNlYXJjaE9wZW5TRUUnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hUcmVuREFQIGZyb20gJy4vVHJlbkRBUC9FdmVudFNlYXJjaFRyZW5EQVAnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQUUkgZnJvbSAnLi9QUUkvRXZlbnRTZWFyY2hQUUknO1xyXG5cclxuY29uc3QgRXZlbnRTZWFyY2hQcmV2aWV3ID0gKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbnRyb2wsIHNldENvbnRyb2xdID0gUmVhY3QudXNlU3RhdGUgPCAnRGF0YScgfCAnUFFJJz4oJ0RhdGEnKTtcclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICB7cHJvcHMuRXZlbnRJRCA8IDEgPyA8c3Bhbj5ObyBFdmVudCBTZWxlY3RlZCAuLi4gPC9zcGFuPiA6XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtjb250cm9sfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29udHJvbChldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7IHdpZHRoOiAxMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDEwMCwgcmlnaHQ6IDYsIHRvcDogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXRhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UFFJPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIHsoY29udHJvbCA9PSAnRGF0YScgPyBcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hPcGVuU0VFIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLzMgLSAxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hUcmVuREFQIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLyAzIC0gMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUFFJIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQvMyAtIDF9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICB7KGNvbnRyb2wgPT0gJ1BRSScgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFBRSSBFdmVudElEPXtwcm9wcy5FdmVudElEfSBXaWR0aD17cHJvcHMuV2lkdGh9IEhlaWdodD17cHJvcHMuSGVpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICA8Lz4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaFByZXZpZXc7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoT3BlblNFRS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMDMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgZnJvbSAnLi9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzIGZyb20gJy4vRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hPcGVuU0VFKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgbWFyZ2luID0geyBUb3A6IDAsIFJpZ2h0OiAyMCwgQm90dG9tOiAwLCBMZWZ0OiAzNSB9O1xyXG4gICAgLy9jb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICAvL2NvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tIC0gNjU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPjxhIGhyZWY9eyBob21lUGF0aCArICdXYXZlZm9ybVZpZXdlcj9FdmVudElEPScgKyBwcm9wcy5FdmVudElEfSB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IFdhdmVmb3JtPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0IC0gNTAsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNZWFzdXJlbWVudFR5cGU9J1ZvbHRhZ2UnIERhdGFUeXBlPSdUaW1lJyBNYXJnaW49e21hcmdpbn0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLyAzfSBXaWR0aD17cHJvcHMuV2lkdGggLSAxMH0vPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdDdXJyZW50JyBEYXRhVHlwZT0nVGltZScgTWFyZ2luPXttYXJnaW59IFdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9e3Byb3BzLkhlaWdodC8zfS8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWFyZ2luPXttYXJnaW59IFdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9ezQwfSBEYXRhVHlwZT0nVGltZScvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIGxpbmUsIGV4dGVudCB9IGZyb20gJ2QzJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgPSAocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBNZWFzdXJlbWVudFR5cGU6ICdDdXJyZW50JyB8ICdWb2x0YWdlJyB8ICdUcmlwQ29pbEN1cnJlbnQnLCBEYXRhVHlwZTogJ1RpbWUnIHwgJ1N0YXRpc3RpYycgfCAnVHJlbmRpbmcnLCBNYXJnaW46IHsgTGVmdDogbnVtYmVyLCBSaWdodDogbnVtYmVyLCBUb3A6IG51bWJlciwgQm90dG9tOiBudW1iZXIgfSwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwYXRocywgc2V0UGF0aHNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRQYXRocyhbXSk7XHJcbiAgICAgICAgcmV0dXJuIEdldERhdGEoKTtcclxuICAgIH0sIFtwcm9wcy5FdmVudElEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudC9EYXRhP2V2ZW50SWQ9JHtwcm9wcy5FdmVudElEfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZwaXhlbHM9JHtwcm9wcy5XaWR0aH1gICtcclxuICAgICAgICAgICAgICAgIGAmdHlwZT0ke3Byb3BzLk1lYXN1cmVtZW50VHlwZX1gICtcclxuICAgICAgICAgICAgICAgIGAmZGF0YVR5cGU9JHtwcm9wcy5EYXRhVHlwZX1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiBEcmF3Q2hhcnQoZGF0YSkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KGRhdGEpIHtcclxuXHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3Byb3BzLk1hcmdpbi5MZWZ0LCBwcm9wcy5XaWR0aCAtIHByb3BzLk1hcmdpbi5SaWdodF0pO1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtwcm9wcy5IZWlnaHQgLSBwcm9wcy5NYXJnaW4uVG9wLCBwcm9wcy5NYXJnaW4uQm90dG9tXSk7XHJcblxyXG4gICAgICAgIGxldCB5ZXh0ZW50ID0gWzAsIDBdO1xyXG4gICAgICAgIGxldCB4ZXh0ZW50ID0gWzkwMDcxOTkyNTQ3NDA5OTEsIC05MDA3MTk5MjU0NzQwOTkwXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXksIGluZGV4LCBrZXlzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXd5ZXhlbnQgPSBleHRlbnQoZGF0YVtrZXldLCBkID0+IGRbMV0pO1xyXG4gICAgICAgICAgICBsZXQgbmV3eGV4ZW50ID0gZXh0ZW50KGRhdGFba2V5XSwgZCA9PiBkWzBdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG5ld3lleGVudFswXS50b1N0cmluZygpKSA8IHlleHRlbnRbMF0pIHlleHRlbnRbMF0gPSBwYXJzZUZsb2F0KG5ld3lleGVudFswXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChuZXd5ZXhlbnRbMV0udG9TdHJpbmcoKSkgPiB5ZXh0ZW50WzFdKSB5ZXh0ZW50WzFdID0gcGFyc2VGbG9hdChuZXd5ZXhlbnRbMV0udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobmV3eGV4ZW50WzBdLnRvU3RyaW5nKCkpIDwgeGV4dGVudFswXSkgeGV4dGVudFswXSA9IHBhcnNlRmxvYXQobmV3eGV4ZW50WzBdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG5ld3hleGVudFsxXS50b1N0cmluZygpKSA+IHhleHRlbnRbMV0pIHhleHRlbnRbMV0gPSBwYXJzZUZsb2F0KG5ld3hleGVudFsxXS50b1N0cmluZygpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB5ZXh0ZW50ID0gWzEuMjAgKiB5ZXh0ZW50WzBdLCAxLjIwICogeWV4dGVudFsxXV1cclxuICAgICAgICB5LmRvbWFpbih5ZXh0ZW50KTtcclxuICAgICAgICB4LmRvbWFpbih4ZXh0ZW50KTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxbbnVtYmVyLCBudW1iZXJdPigpLngoZCA9PiB4KGRbMF0pKS55KGQgPT4geShkWzFdKSk7XHJcblxyXG4gICAgICAgIGxldCBuZXdQYXRocyA9IFtdO1xyXG4gICAgICAgICQuZWFjaChPYmplY3Qua2V5cyhkYXRhKSwgKGluZGV4LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbmV3UGF0aHMucHVzaCg8cGF0aCBrZXk9e2tleX0gZmlsbD0nbm9uZScgc3Ryb2tlTGluZWpvaW49J3JvdW5kJyBzdHJva2VXaWR0aD0nMS41JyBzdHJva2U9e2dldENvbG9yKGtleSl9IGQ9e2xpbmVmdW5jKGRhdGFba2V5XSl9IC8+KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRQYXRocyhuZXdQYXRocyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IobGFiZWwpIHtcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVkEnKSA+PSAwKSByZXR1cm4gJyNBMzAwMDAnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWQicpID49IDApIHJldHVybiAnIzAwMjlBMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ1ZDJykgPj0gMCkgcmV0dXJuICcjMDA3QTI5JztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVk4nKSA+PSAwKSByZXR1cm4gJyNjM2MzYzMnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJQScpID49IDApIHJldHVybiAnI0ZGMDAwMCc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lCJykgPj0gMCkgcmV0dXJuICcjMDA2NkNDJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignSUMnKSA+PSAwKSByZXR1cm4gJyMzM0NDMzMnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJUicpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtT25lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1Ud28gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVRocmVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCMkeyhyYW5OdW1PbmUubGVuZ3RoID4gMSA/IHJhbk51bU9uZSA6IFwiMFwiICsgcmFuTnVtT25lKX0keyhyYW5OdW1Ud28ubGVuZ3RoID4gMSA/IHJhbk51bVR3byA6IFwiMFwiICsgcmFuTnVtVHdvKX0keyhyYW5OdW1UaHJlZS5sZW5ndGggPiAxID8gcmFuTnVtVGhyZWUgOiBcIjBcIiArIHJhbk51bVRocmVlKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0IC8qLCBtYXJnaW46ICcweCcsIHBhZGRpbmc6ICcwcHgnKi8gfX0+XHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgYm9yZGVycyAqL31cclxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNICR7cHJvcHMuTWFyZ2luLkxlZnR9ICR7cHJvcHMuTWFyZ2luLlRvcH0gSCAke3Byb3BzLldpZHRoIC0gcHJvcHMuTWFyZ2luLlJpZ2h0fSBWICR7cHJvcHMuSGVpZ2h0fSBIICR7cHJvcHMuTWFyZ2luLkxlZnR9IFYgJHtwcm9wcy5NYXJnaW4uVG9wfWB9IHN0eWxlPXt7IHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcyd9fSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiICB0cmFuc2Zvcm09e2Byb3RhdGUoLTkwIDAsMClgfSB5PXtwcm9wcy5NYXJnaW4uTGVmdCAtIDE1fSB4PXstKHByb3BzLkhlaWdodCArIDM1KSAvIDJ9Pntwcm9wcy5NZWFzdXJlbWVudFR5cGUgPT0gXCJWb2x0YWdlXCIgPyBcIlZvbHRhZ2VcIiA6IFwiQW1wc1wifTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXRoc31cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMjAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBzZWxlY3QsIGF4aXNCb3R0b20gfSBmcm9tICdkMyc7XHJcblxyXG5jb25zdCBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyA9IChwcm9wczogeyBFdmVudElEOiBudW1iZXIsIE1hcmdpbjogeyBMZWZ0OiBudW1iZXIsIFJpZ2h0OiBudW1iZXIsIFRvcDogbnVtYmVyLCBCb3R0b206IG51bWJlciB9LCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciwgRGF0YVR5cGU6ICdUcmVuZGluZycgfCAnVGltZScgfSkgPT4ge1xyXG4gICAgLy9jb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAyMCwgYm90dG9tOiA2MCwgbGVmdDogNDAgfTtcclxuICAgIC8vY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQ7XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoO1xyXG5cclxuICAgIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFt4QXhpc1RpY2tzLCBzZXRYQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEdldERhdGEoKTtcclxuICAgIH0sIFtwcm9wcy5FdmVudElEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudC9EYXRhP2V2ZW50SWQ9JHtwcm9wcy5FdmVudElEfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZwaXhlbHM9JHtzdmdXaWR0aH1gICtcclxuICAgICAgICAgICAgICAgIGAmdHlwZT1Wb2x0YWdlYCArXHJcbiAgICAgICAgICAgICAgICBgJmRhdGFUeXBlPSR7cHJvcHMuRGF0YVR5cGV9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZShkYXRhID0+IERyYXdDaGFydChkYXRhKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBkZWZhdWx0VGlja0Zvcm1hdHRlcih2YWx1ZSwgYXhpcykge1xyXG5cclxuICAgICAgICB2YXIgZmFjdG9yID0gYXhpcy50aWNrRGVjaW1hbHMgPyBNYXRoLnBvdygxMCwgYXhpcy50aWNrRGVjaW1hbHMpIDogMTtcclxuICAgICAgICB2YXIgZm9ybWF0dGVkID0gXCJcIiArIE1hdGgucm91bmQodmFsdWUgKiBmYWN0b3IpIC8gZmFjdG9yO1xyXG5cclxuICAgICAgICAvLyBJZiB0aWNrRGVjaW1hbHMgd2FzIHNwZWNpZmllZCwgZW5zdXJlIHRoYXQgd2UgaGF2ZSBleGFjdGx5IHRoYXRcclxuICAgICAgICAvLyBtdWNoIHByZWNpc2lvbjsgb3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIHZhbHVlJ3Mgb3duIHByZWNpc2lvbi5cclxuXHJcbiAgICAgICAgaWYgKGF4aXMudGlja0RlY2ltYWxzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGRlY2ltYWwgPSBmb3JtYXR0ZWQuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgICAgIHZhciBwcmVjaXNpb24gPSBkZWNpbWFsID09IC0xID8gMCA6IGZvcm1hdHRlZC5sZW5ndGggLSBkZWNpbWFsIC0gMTtcclxuICAgICAgICAgICAgaWYgKHByZWNpc2lvbiA8IGF4aXMudGlja0RlY2ltYWxzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByZWNpc2lvbiA/IGZvcm1hdHRlZCA6IGZvcm1hdHRlZCArIFwiLlwiKSArIChcIlwiICsgZmFjdG9yKS5zdWJzdHIoMSwgYXhpcy50aWNrRGVjaW1hbHMgLSBwcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkO1xyXG4gICAgfTtcclxuICAgIC8vIHJvdW5kIHRvIG5lYXJieSBsb3dlciBtdWx0aXBsZSBvZiBiYXNlXHJcbiAgICBmdW5jdGlvbiBmbG9vckluQmFzZShuLCBiYXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2UgKiBNYXRoLmZsb29yKG4gLyBiYXNlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIERyYXdDaGFydChkYXRhKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEhpZGRlbih0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRIaWRkZW4oZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgc2VyaWVzID0gZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV07XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoWzAsIHN2Z1dpZHRoXSkuZG9tYWluKFtzZXJpZXNbMF1bMF0sIHNlcmllc1tzZXJpZXMubGVuZ3RoIC0gMV1bMF1dKTtcclxuXHJcbiAgICAgICAgbGV0IHRpY2tzID0gW107XHJcbiAgICAgICAgbGV0IHNwYW4gPSB4LmRvbWFpbigpWzFdIC0geC5kb21haW4oKVswXTtcclxuICAgICAgICBmb3IgKGxldCBpID0geC5kb21haW4oKVswXSArIHNwYW4gLyA3OyBpIDwgeC5kb21haW4oKVsxXTsgaSArPSBzcGFuLzcpIHtcclxuICAgICAgICAgICAgdGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3goaSl9LCR7MH0pYH0gc3R5bGU9e3sgb3BhY2l0eTogaSA8IHguZG9tYWluKClbMF0gfHwgaSA+IHguZG9tYWluKClbMV0gPyAwIDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9J2JsYWNrJyBkPXtgTSAwLDYgViAtNmB9IHN0cm9rZVdpZHRoPXswLjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgeT1cIjIwXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57bW9tZW50KCcxOTcwLTAxLTAxVDAwOjAwOjAwJykuYWRkKGksICdtaWxsaXNlY29uZHMnKS5mb3JtYXQocHJvcHMuRGF0YVR5cGUgPT0gJ1RpbWUnID8gJ3NzLlNTUycgOiAnSEg6c3MnKX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRYQXhpc1RpY2tzKHRpY2tzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogc3ZnSGVpZ2h0IC8qLCBtYXJnaW46ICcweCcsIHBhZGRpbmc6ICcwcHgnKi8gfX0gaGlkZGVuPXtoaWRkZW59PlxyXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPXtzdmdXaWR0aH0gaGVpZ2h0PXtzdmdIZWlnaHR9IHN0eWxlPXt7IGZpbGw6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSdibGFjaycgZD17YE0gJHtwcm9wcy5NYXJnaW4uTGVmdH0gJHtwcm9wcy5NYXJnaW4uVG9wICsgMX0gSCAke3Byb3BzLldpZHRoIC0gcHJvcHMuTWFyZ2luLlJpZ2h0fWB9IHN0eWxlPXt7IHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcycgfX0gLz5cclxuICAgICAgICAgICAgICAgIHt4QXhpc1RpY2tzfVxyXG4gICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiIHg9e3N2Z1dpZHRoIC8gMn0geT17c3ZnSGVpZ2h0IC0gMTB9PlRpbWU8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFBRSS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMDIvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQUUlDaGFydCwgeyBQb2ludCB9IGZyb20gJy4vUFFJQ2hhcnQnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50U2VhcmNoUFFJKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgW2NvbXBvbmVudHMsIHNldENvbXBvbmVudHNdID0gUmVhY3QudXNlU3RhdGU8YW55W10+KFtdKTtcclxuICAgIGNvbnN0IFtjb21wb25lbnQsIHNldENvbXBvbmVudF0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KHtUZXN0Q3VydmVJRDogMH0pO1xyXG4gICAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IFJlYWN0LnVzZVN0YXRlPFBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFtjdXJ2ZSwgc2V0Q3VydmVdID0gUmVhY3QudXNlU3RhdGU8UG9pbnRbXT4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcG9uZW50KHsgVGVzdEN1cnZlSUQ6IDAgfSk7XHJcbiAgICAgICAgc2V0Q29tcG9uZW50cyhbXSk7XHJcbiAgICAgICAgc2V0UG9pbnRzKFtdKTtcclxuICAgICAgICBzZXRDdXJ2ZShbXSk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tcG9uZW50cyhkYXRhKTtcclxuICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggIT0gMClcclxuICAgICAgICAgICAgICAgIHNldENvbXBvbmVudChkYXRhWzBdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBHZXREaXN0dXJiYW5jZXMoKTtcclxuICAgICAgICBoYW5kbGUyLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9pbnRzKGRhdGEubWFwKGQgPT4gT2JqZWN0LmNyZWF0ZSh7RHVyYXRpb246IGQuRHVyYXRpb25TZWNvbmRzLCBNYWduaXR1ZGU6IGQuUGVyVW5pdE1hZ25pdHVkZX0pKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5FdmVudElEXSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb21wb25lbnQuVGVzdEN1cnZlSUQgPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRDb21wb25lbnRzKFtdKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0Q29tcG9uZW50Q3VydmUoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGE6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEN1cnZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbXBvbmVudF0pXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0Q29tcG9uZW50cygpOiBKUXVlcnkuanFYSFI8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvUFFJL0NvbXBvbmVudHMvJHtwcm9wcy5FdmVudElEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0Q29tcG9uZW50Q3VydmUoKTogSlF1ZXJ5LmpxWEhSPGFueVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1BRSS9Db21wb25lbnQvQ3VydmUvJHtjb21wb25lbnQuQ3VydmVEQn0vJHtjb21wb25lbnQuVGVzdEN1cnZlSUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXREaXN0dXJiYW5jZXMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuRGlzdHVyYmFuY2VbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9QUUkvRGlzdHJ1YmFuY2VzLyR7cHJvcHMuRXZlbnRJRH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlBRSSAtIFJpZGUtdGhyb3VnaCBDdXJ2ZXNcclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2NvbXBvbmVudC5UZXN0Q3VydmVJRH0gY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogNiwgdG9wOiA0IH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDb21wb25lbnQoY29tcG9uZW50cy5maW5kKHggPT4geC5UZXN0Q3VydmVJRCA9PSBldnQudGFyZ2V0LnZhbHVlKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJyBoaWRkZW49e2NvbXBvbmVudC5UZXN0Q3VydmVJRCAhPSAwfT5Ob25lIEF2YWlsYWJsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLm1hcCgoY29tcCwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2NvbXAuVGVzdEN1cnZlSUR9Pntjb21wLlRpdGxlfTwvb3B0aW9uPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0IC0gNTAsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBRSUNoYXJ0IEhlaWdodD17cHJvcHMuSGVpZ2h0IC0gNTB9IFdpZHRoPXtwcm9wcy5XaWR0aH0gRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gUG9pbnRzPXtwb2ludHN9IEN1cnZlPXtjdXJ2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJldHVybiBlcnIgXHJcbiAgICB9XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUFFJQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgbWluLCBtYXgsIGxpbmUgfSBmcm9tICdkMyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbnRlcmZhY2UgaURhdGEge1xyXG4gICAgSUQ6IG51bWJlcixcclxuICAgIE5hbWU6IHN0cmluZywgXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBlclVuaXRNYWduaXR1ZGU6IG51bWJlciwgXHJcbiAgICBEdXJhdGlvblNlY29uZHM6IG51bWJlcixcclxuICAgIExvYWRPcmRlcjogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gICAgTWFnbml0dWRlOiBudW1iZXIsXHJcbiAgICBEdXJhdGlvbjogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBNYWdEdXJDdXJ2ZSB7XHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBhdGg6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBQUUlDaGFydCA9IChwcm9wczogeyBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciwgRXZlbnRJRDogbnVtYmVyLCBQb2ludHM6IFBvaW50W10sIEN1cnZlOiBQb2ludFtdIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAzMCwgYm90dG9tOiA0MCwgbGVmdDogNTAgfTtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG4gICAgY29uc3QgeG1heCA9IChwcm9wcy5DdXJ2ZS5sZW5ndGggPiAwID8gbWF4KHByb3BzLkN1cnZlLm1hcChhID0+IGEuRHVyYXRpb24pKTozKVxyXG4gICAgY29uc3QgeCA9IHNjYWxlTGluZWFyKCkucmFuZ2UoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFswLCB4bWF4XSk7XHJcbiAgICBjb25zdCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oWzAsMS4xXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRYQXhpcygpIHtcclxuICAgICAgICBsZXQgdGlja3MgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSB4LmRvbWFpbigpWzBdOyBpIDw9IHguZG9tYWluKClbMV07IGkrKykge1xyXG4gICAgICAgICAgICB0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eChpKX0sJHtzdmdIZWlnaHR9KWB9IHN0eWxlPXt7IG9wYWNpdHk6IGkgPCB4LmRvbWFpbigpWzBdIHx8IGkgPiB4LmRvbWFpbigpWzFdID8gMCA6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSdibGFjaycgZD17YE0gMCw2IFYgLSR7c3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcH1gfSBzdHJva2VXaWR0aD17MC4yNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiB5PVwiMjBcIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPntpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aWNrcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFlBeGlzKCkge1xyXG4gICAgICAgIGxldCB5dGlja3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0geS5kb21haW4oKVswXTsgaSA8PSB5LmRvbWFpbigpWzFdOyBpID0gMC41ICsgaSkge1xyXG4gICAgICAgICAgICB5dGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke3koaSl9KWB9IHN0eWxlPXt7IG9wYWNpdHk6IGkgPCB5LmRvbWFpbigpWzBdIHx8IGkgPiB5LmRvbWFpbigpWzFdID8gMCA6IDF9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9J2JsYWNrJyBkPXtgTSAtNiwwIEggJHtzdmdXaWR0aH1gfSBzdHJva2VXaWR0aD17MC4yNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiB4PVwiLTE1XCIgZHk9XCIwLjMyZW1cIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPntpLnRvRml4ZWQoMSl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geXRpY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldFBhdGgoZGF0YTogUG9pbnRbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxQb2ludD4oKS54KGQgPT4geChkLkR1cmF0aW9uKSkueShkID0+IHkoZC5NYWduaXR1ZGUpKTtcclxuICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZER1ckNpcmNsZXMoZGF0YTogUG9pbnRbXSkge1xyXG4gICAgICAgIGxldCBjaXJjbGVzID0gZGF0YS5tYXAoKHBvaW50LCBpbmRleCkgPT4gPGNpcmNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkb3RcIiByPXszfSBjeD17eChwb2ludC5EdXJhdGlvbil9IGN5PXt5KHBvaW50Lk1hZ25pdHVkZSl9IGZpbGw9J2JsdWUnIC8+KTtcclxuICAgICAgICByZXR1cm4gY2lyY2xlcztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCB9fT5cclxuICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJQUUlDaGFydFwiIHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IHN0eWxlPXt7IGZpbGw6ICdub25lJywgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIERyYXcgY2hhcnQgZGF0YSBmaXJzdCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD17R2V0UGF0aChwcm9wcy5DdXJ2ZSl9IHN0cm9rZT0ncmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7QnVpbGRNYWREdXJDaXJjbGVzKHByb3BzLlBvaW50cyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogWEF4aXMgdGlja3MqL31cclxuICAgICAgICAgICAgICAgICAgICB7QnVpbGRYQXhpcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiB4PXtzdmdXaWR0aCAvIDJ9IHk9e3N2Z0hlaWdodCArIG1hcmdpbi50b3AgKyAyMH0+RHVyYXRpb24gKHMpPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBZQXhpcyB0aWNrcyBhbmQgTGFiZWxzKi99XHJcbiAgICAgICAgICAgICAgICAgICAge0J1aWxkWUF4aXMoKX1cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAwLDApYH0geT17bWFyZ2luLmxlZnQgLSAzNX0geD17LXN2Z0hlaWdodCAvIDIgLSBtYXJnaW4uYm90dG9tfT5QZXIgVW5pdCBWb2x0YWdlPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNICR7bWFyZ2luLmxlZnR9ICR7bWFyZ2luLnRvcH0gSCAke3N2Z1dpZHRoICsgbWFyZ2luLmxlZnR9IFYgJHtzdmdIZWlnaHR9IEggJHttYXJnaW4ubGVmdH0gViAke21hcmdpbi50b3B9YH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQUUlDaGFydDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hUcmVuREFQLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgZnJvbSAnLi4vT3BlblNFRS9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzIGZyb20gJy4uL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hUcmVuREFQKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgbWFyZ2luID0geyBUb3A6IDAsIFJpZ2h0OiAyMCwgQm90dG9tOiAwLCBMZWZ0OiAzNSB9O1xyXG4gICAgLy9jb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICAvL2NvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tIC0gNjU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPjxhIGhyZWY9e2hvbWVQYXRoICsgJ1RyZW5EQVA/ZXZlbnRpZD0nICsgcHJvcHMuRXZlbnRJRH0gdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBUcmVuZGluZyBEYXRhPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0IC0gNTAsIHBhZGRpbmc6MCB9fT5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nVm9sdGFnZScgRGF0YVR5cGU9J1RyZW5kaW5nJyBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17cHJvcHMuSGVpZ2h0IC8zfSAvPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdDdXJyZW50JyBEYXRhVHlwZT0nVHJlbmRpbmcnIE1hcmdpbj17bWFyZ2lufVdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvIDN9IC8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWFyZ2luPXttYXJnaW59IFdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9ezQwfSBEYXRhVHlwZT0nVHJlbmRpbmcnLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAxLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwb3J0VG9Dc3Y8VD4oZGF0YTogVFtdLCBmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHJvd3MgPSBbT2JqZWN0LmtleXMoZGF0YVswXSldO1xyXG4gICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICByb3dzLnB1c2goT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVmFsdWUgPSByb3dbal0udG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbCArPSAnLCc7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjc3ZGaWxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2RmlsZV0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNYWdEdXJDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNjYWxlTG9nLCBzY2FsZUxpbmVhciwgbWF4LCBsaW5lLCBldmVudCwgem9vbVRyYW5zZm9ybSwgem9vbSwgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBlclVuaXRNYWduaXR1ZGU6IG51bWJlcixcclxuICAgIER1cmF0aW9uU2Vjb25kczogbnVtYmVyLFxyXG4gICAgTG9hZE9yZGVyOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgICBFdmVudElEOiBudW1iZXIsXHJcbiAgICBNYWduaXR1ZGU6IG51bWJlcixcclxuICAgIER1cmF0aW9uOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hZ0R1ckN1cnZlIHtcclxuICAgIE5hbWU6IHN0cmluZyxcclxuICAgIFZpc2libGU6IGJvb2xlYW4sXHJcbiAgICBDb2xvcjogc3RyaW5nLFxyXG4gICAgUGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IE1hZ0R1ckNoYXJ0ID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyLCBQb2ludHM6IFBvaW50W10sIE9uU2VsZWN0OiAoZXZ0OiBhbnksIHBvaW50OiBQb2ludCkgPT4gdm9pZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNjAsIGxlZnQ6IDQwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICBjb25zdCBbZG9tYWlucywgc2V0RG9tYWluc10gPSBSZWFjdC51c2VTdGF0ZTx7IFg6IHsgTG93ZXI6IG51bWJlciwgVXBwZXI6IG51bWJlciB9LCBZOiB7IExvd2VyOiBudW1iZXIsIFVwcGVyOiBudW1iZXIgfSB9Pih7IFg6IHsgTG93ZXI6IDAuMDAwMDEsIFVwcGVyOiAxMDAwMDAwIH0sIFk6IHsgTG93ZXI6IDAsIFVwcGVyOiAyLjUgfSB9KTtcclxuICAgIGNvbnN0IFt4QXhpc1RpY2tzLCBzZXRYQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW3lBeGlzVGlja3MsIHNldFlBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbbWFnRHVyQ3VydmVEYXRhLCBzZXRNYWdEdXJDdXJ2ZURhdGFdID0gUmVhY3QudXNlU3RhdGU8aURhdGFbXT4oW10pO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlcywgc2V0TWFnRHVyQ3VydmVzXSA9IFJlYWN0LnVzZVN0YXRlPE1hZ0R1ckN1cnZlW10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJDaXJjbGVzLCBzZXRNYWdEdXJDaXJjbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldE1hZ0R1ckN1cnZlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogaURhdGFbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIEJ1aWxkTWFnRHVyQ3VydmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQnVpbGRZQXhpcygpO1xyXG4gICAgICAgIEJ1aWxkWEF4aXMoKTtcclxuICAgICAgICBCdWlsZE1hZER1ckNpcmNsZXMocHJvcHMuUG9pbnRzKTtcclxuICAgICAgICBCdWlsZE1hZ0R1ckN1cnZlKG1hZ0R1ckN1cnZlRGF0YSk7XHJcbiAgICB9LCBbZG9tYWlucywgcHJvcHMuUG9pbnRzXSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWdEdXJDdXJ2ZXMoKTogSlF1ZXJ5LmpxWEhSPGlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWFnRHVyQ3VydmVzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB4QXhpc1RleHQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMC4wMDAwMDAxKSByZXR1cm4gKHZhbHVlICogMTAwMDAwMDAwMCkudG9GaXhlZCgwKSArICduJztcclxuICAgICAgICBpZiAodmFsdWUgPCAwLjAwMSkgcmV0dXJuICh2YWx1ZSAqIDEwMDAwMDApLnRvRml4ZWQoMCkgKyAnwrUnO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAgJiYgdmFsdWUgPCAxMDAwMDAwKSByZXR1cm4gKHZhbHVlIC8gMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMDApIHJldHVybiAodmFsdWUgLyAxMDAwMDAwKS50b0ZpeGVkKDApICsgJ00nO1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHJldHVybiB2YWx1ZS50b1ByZWNpc2lvbigxKS50b1N0cmluZygpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFhBeGlzKCkge1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSBwYXJzZUZsb2F0KE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKGRvbWFpbnMuWC5Mb3dlcikgLyBNYXRoLmxvZygxMCkpKS50b1ByZWNpc2lvbigxKSk7XHJcbiAgICAgICAgbGV0IHRpY2tzID0gW11cclxuICAgICAgICBsZXQgbG9nRG9tYWluID0geC5kb21haW4oKS5tYXAobCA9PiBNYXRoLmxvZyhsKSAvIE1hdGgubG9nKDEwKSk7XHJcbiAgICAgICAgbGV0IGxkRGlmZiA9IGxvZ0RvbWFpblsxXSAtIGxvZ0RvbWFpblswXTtcclxuICAgICAgICBmb3IgKDsgaSA8PSBkb21haW5zLlguVXBwZXI7IGkgPSBpICogMTApIHtcclxuICAgICAgICAgICAgdGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3goaSl9LCR7c3ZnSGVpZ2h0fSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNIDAsNiBWIC0ke3N2Z0hlaWdodCAtIG1hcmdpbi50b3B9YH0gIHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiICB5PVwiMjBcIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPnt4QXhpc1RleHQoaSl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGREaWZmIDwgNSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0pLm1hcChudW0gPT4gPHBhdGggc3Ryb2tlPSdibGFjaycga2V5PXtudW19IGQ9e2BNICR7LypNYXRoLmxvZyhudW0gKiBpKSAvIE1hdGgubG9nKDEwKSAtIE1hdGgubG9nKGkpIC8gTWF0aC5sb2coMTApKi94KG51bSAqIGkpIC0geChpKX0sNiBWIC0ke3N2Z0hlaWdodCAtIG1hcmdpbi50b3B9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9IC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0WEF4aXNUaWNrcyh0aWNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRZQXhpcygpIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCBzdGVwID0gKHkuZG9tYWluKClbMV0gLSB5LmRvbWFpbigpWzBdIDw9IDEuNSA/IDAuMSA6IDAuNSk7XHJcbiAgICAgICAgbGV0IHl0aWNrcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKGRvbWFpbnMuWS5Mb3dlcik7IGkgPD0gZG9tYWlucy5ZLlVwcGVyOyBpID0gc3RlcCArIGkpIHtcclxuICAgICAgICAgICAgeXRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHt5KGkpfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeS5kb21haW4oKVswXSB8fCBpID4geS5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNIC02LDAgSCAke3N2Z1dpZHRofWB9IHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiICB4PVwiLTE1XCIgZHk9XCIwLjMyZW1cIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPntpLnRvRml4ZWQoMSl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRZQXhpc1RpY2tzKHl0aWNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRNYWdEdXJDdXJ2ZShkYXRhOiBpRGF0YVtdKSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8aURhdGE+KCkueChkID0+IHgoZC5EdXJhdGlvblNlY29uZHMpKS55KGQgPT4geShkLlBlclVuaXRNYWduaXR1ZGUpKTtcclxuICAgICAgICBsZXQgbWRjcyA9IF8uZ3JvdXBCeShkYXRhLCAoZCkgPT4gZC5JRCk7XHJcbiAgICAgICAgbGV0IG1kY3NzID0gT2JqZWN0LmtleXMobWRjcykubWFwKChrZXkpID0+IHsgcmV0dXJuIHsgTmFtZTogbWRjc1trZXldWzBdLk5hbWUsIFZpc2libGU6IG1kY3Nba2V5XVswXS5WaXNpYmxlLCBDb2xvcjogbWRjc1trZXldWzBdLkNvbG9yLCBQYXRoOiBsaW5lZnVuYyhtZGNzW2tleV0pIH0gfSk7XHJcbiAgICAgICAgc2V0TWFnRHVyQ3VydmVzKG1kY3NzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZER1ckNpcmNsZXMoZGF0YTogUG9pbnRbXSkge1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG4gICAgICAgIGxldCBjaXJjbGVzID0gZGF0YS5maWx0ZXIocG9pbnQgPT4gcG9pbnQuTWFnbml0dWRlID49IGRvbWFpbnMuWS5Mb3dlciAmJiBwb2ludC5NYWduaXR1ZGUgPD0gZG9tYWlucy5ZLlVwcGVyICYmIHBvaW50LkR1cmF0aW9uID49IGRvbWFpbnMuWC5Mb3dlciAmJiBwb2ludC5EdXJhdGlvbiA8PSBkb21haW5zLlguVXBwZXIpLm1hcCgocG9pbnQsIGluZGV4KSA9PiA8Y2lyY2xlIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRvdFwiIHI9ezN9IGN4PXt4KHBvaW50LkR1cmF0aW9uKX0gY3k9e3kocG9pbnQuTWFnbml0dWRlKX0gZmlsbD0nYmx1ZScgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KGV2dCkgPT4gcHJvcHMuT25TZWxlY3QoZXZ0LCBwb2ludCl9IC8+KTtcclxuICAgICAgICBzZXRNYWdEdXJDaXJjbGVzKGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVpvb20oZXZ0KSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcblxyXG4gICAgICAgIC8vIHVzZSBldmVudC5uYXRpdmVFdmVudC5vZmZzZXRYIGFuZCBZXHJcbiAgICAgICAgbGV0IHpvb21Mb2NhdGlvblkgPSBldnQubmF0aXZlRXZlbnQub2Zmc2V0WTtcclxuICAgICAgICBsZXQgem9vbUxvY2F0aW9uWCA9IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRYO1xyXG5cclxuICAgICAgICAvLyBldmVudC5kZWx0YVkgcG9zaXRpdmUgaXMgd2hlZWwgZG93biBvciBvdXQgYW5kIG5lZ2F0aXZlIGlzIHdoZWVsIHVwIG9yIGluXHJcbiAgICAgICAgaWYgKGV2dC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5YTGVuZ3RoID0gKHgucmFuZ2UoKVsxXSAtIHgucmFuZ2UoKVswXSkgKiAwLjc1O1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWUxlbmd0aCA9ICh5LnJhbmdlKClbMV0gLSB5LnJhbmdlKClbMF0pICogMC43NTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGFuZGxlWm9vbScsIHsgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSwgWTogeyBMb3dlcjogem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyLCBVcHBlcjogem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyIH0gfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREb21haW5zKHtcclxuICAgICAgICAgICAgICAgIFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sXHJcbiAgICAgICAgICAgICAgICBZOiB7IExvd2VyOiB5LmludmVydCh6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIpLCBVcHBlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRvbWFpblhMZW5ndGggPSAoeC5yYW5nZSgpWzFdIC0geC5yYW5nZSgpWzBdKSAqIDEuMjU7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5ZTGVuZ3RoID0gKHkucmFuZ2UoKVsxXSAtIHkucmFuZ2UoKVswXSkgKiAxLjI1O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoYW5kbGVab29tJywgeyBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LCBZOiB7IExvd2VyOiB6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIsIFVwcGVyOiB6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIgfSB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldERvbWFpbnMoe1xyXG4gICAgICAgICAgICAgICAgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSxcclxuICAgICAgICAgICAgICAgIFk6IHsgTG93ZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiksIFVwcGVyOiB5LmludmVydCh6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWcoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChldnQubmF0aXZlRXZlbnQub2Zmc2V0WCA8IG1hcmdpbi5sZWZ0IHx8IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRYID4gc3ZnV2lkdGggKyBtYXJnaW4ubGVmdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChldnQubmF0aXZlRXZlbnQub2Zmc2V0WSA8IG1hcmdpbi50b3AgfHwgZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFkgPiBzdmdIZWlnaHQgKyBtYXJnaW4udG9wKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV2dC5wZXJzaXN0KCk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcblxyXG4gICAgICAgICQoJyNtYWdEdXJDaGFydCcpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXREb21haW5zKHtcclxuICAgICAgICAgICAgICAgIFg6IHtcclxuICAgICAgICAgICAgICAgICAgICBMb3dlcjogeC5pbnZlcnQoeChkb21haW5zLlguTG93ZXIpICsgZXZ0LmNsaWVudFggLSBlLmNsaWVudFgpLFxyXG4gICAgICAgICAgICAgICAgICAgIFVwcGVyOiB4LmludmVydCh4KGRvbWFpbnMuWC5VcHBlcikgKyBldnQuY2xpZW50WCAtIGUuY2xpZW50WClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG93ZXI6IHkuaW52ZXJ0KHkoZG9tYWlucy5ZLkxvd2VyKSArIGV2dC5jbGllbnRZIC0gZS5jbGllbnRZKSxcclxuICAgICAgICAgICAgICAgICAgICBVcHBlcjogeS5pbnZlcnQoeShkb21haW5zLlkuVXBwZXIpICsgZXZ0LmNsaWVudFkgLSBlLmNsaWVudFkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BEcmFnKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJyNtYWdEdXJDaGFydCcpLm9mZignbW91c2Vtb3ZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRab29tKGV2dCkge1xyXG4gICAgICAgIHNldERvbWFpbnMoeyBYOiB7IExvd2VyOiAwLjAwMDAxLCBVcHBlcjogMTAwMDAwMCB9LCBZOiB7IExvd2VyOiAwLCBVcHBlcjogMi41IH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVJlc2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb21haW5zLlguTG93ZXIgPT0gMC4wMDAwMSAmJiBkb21haW5zLlguVXBwZXIgPT0gMTAwMDAwMCAmJiBkb21haW5zLlkuTG93ZXIgPT0gMCAmJiBkb21haW5zLlkuVXBwZXIgPT0gMi41XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMjAsIHJpZ2h0OiAyNSB9fSBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXtyZXNldFpvb219IGhpZGRlbj17aGlkZVJlc2V0KCl9PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdmcgaWQ9XCJtYWdEdXJDaGFydFwiIHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IHN0eWxlPXt7IGZpbGw6ICdub25lJywgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJ319IG9uV2hlZWw9e2hhbmRsZVpvb219IG9uTW91c2VEb3duPXtoYW5kbGVEcmFnfSBvbk1vdXNlVXA9e3N0b3BEcmFnfT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRHJhdyBjaGFydCBkYXRhIGZpcnN0ICovfVxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAge21hZ0R1ckN1cnZlcy5tYXAoKG1kYywgaW5kZXgpID0+IChtZGMuVmlzaWJsZSA/IDxwYXRoIGtleT17aW5kZXh9IGQ9e21kYy5QYXRofSBzdHJva2U9e21kYy5Db2xvcn0vPiA6IG51bGwpKX1cclxuICAgICAgICAgICAgICAgICAgICB7bWFnRHVyQ2lyY2xlc31cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRHJhdyB3aGl0ZSByZWN0YW5nbGVzIGFyb3VuZCB0aGUgYm9yZGVyIHNvIGRhdGEgd29uJ3Qgc2hvdyBvdXRzaWRlIGNoYXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17MH0gd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e21hcmdpbi50b3B9IGZpbGw9J3doaXRlJyBzdHJva2U9J3doaXRlJyAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17cHJvcHMuSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSAtIG1hcmdpbi50b3B9IHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXttYXJnaW4uYm90dG9tICsgbWFyZ2luLnRvcH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17bWFyZ2luLmxlZnR9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9e3Byb3BzLldpZHRoIC0gbWFyZ2luLnJpZ2h0fSB5PXswfSB3aWR0aD17bWFyZ2luLnJpZ2h0fSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IExlZ2VuZCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIG1hZ0R1ckN1cnZlcy5tYXAoKG1kYywgaW5kZXgpID0+IDxyZWN0IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvcGFjaXR5OiAobWRjLlZpc2libGUgPyAxIDogMC4yNSkgfX0ga2V5PXtpbmRleH0geD17bWFyZ2luLmxlZnQgKyAxMCArIDIwICogaW5kZXh9IHk9e3N2Z0hlaWdodCArIDQwfSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e21kYy5Db2xvcn0gb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kYy5WaXNpYmxlID0gIW1kYy5WaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZURlZXAobWFnRHVyQ3VydmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVzKHVwZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZGNkID0gXy5jbG9uZURlZXAobWFnRHVyQ3VydmVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWRjZC5maWx0ZXIoeCA9PiB4Lk5hbWUgPT0gbWRjLk5hbWUpLmZvckVhY2goeCA9PiB4LlZpc2libGUgPSBtZGMuVmlzaWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1hZ0R1ckN1cnZlRGF0YShtZGNkKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19Pjx0aXRsZT57bWRjLk5hbWV9PC90aXRsZT48L3JlY3Q+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyB0aWNrcyovfVxyXG4gICAgICAgICAgICAgICAge3hBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgIHg9e3N2Z1dpZHRoIC8gMn0geT17c3ZnSGVpZ2h0ICsgbWFyZ2luLnRvcCArIDIwfT5EdXJhdGlvbiAocyk8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICB7LyogWUF4aXMgdGlja3MgYW5kIExhYmVscyovfVxyXG4gICAgICAgICAgICAgICAge3lBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgMCwwKWB9IHk9e21hcmdpbi5sZWZ0IC0gMjV9IHg9ey1zdmdIZWlnaHQgLyAyIC0gbWFyZ2luLmJvdHRvbX0+UGVyIFVuaXQgVm9sdGFnZTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSdibGFjaycgZD17YE0gJHttYXJnaW4ubGVmdH0gJHttYXJnaW4udG9wfSBIICR7c3ZnV2lkdGggKyBtYXJnaW4ubGVmdH0gViAke3N2Z0hlaWdodH0gSCAke21hcmdpbi5sZWZ0fSBWICR7bWFyZ2luLnRvcH1gfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdEdXJDaGFydDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTXVsdGlTZWxlY3QudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzE3LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTXVsdGlTZWxlY3QgPSAocHJvcHM6IHsgT3B0aW9uczogeyBWYWx1ZTogbnVtYmVyLCBUZXh0OiBzdHJpbmcsIFNlbGVjdGVkOiBib29sZWFuIH1bXSwgT25DaGFuZ2U6IChldnQ6IGFueSwgT3B0aW9uczogeyBWYWx1ZTogbnVtYmVyLCBUZXh0OiBzdHJpbmcsIFNlbGVjdGVkOiBib29sZWFuIH1bXSkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBtdWx0aVNlbGVjdCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVTaG93KGV2dCkge1xyXG4gICAgICAgIGlmICghbXVsdGlTZWxlY3QuY3VycmVudC5jb250YWlucyhldnQudGFyZ2V0KSlcclxuICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRTaG93KHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk9wdGlvbnNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIEhhbmRsZVNob3csIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXttdWx0aVNlbGVjdH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLHdpZHRoOidpbmhlcml0JyB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2NlZDRkYScsIHBhZGRpbmc6ICcuMzc1cmVtIC43NXJlbScsIGZvbnRTaXplOiAnMXJlbScsIGJvcmRlclJhZGl1czogJy4yNXJlbScgfX0gY2xhc3NOYW1lPVwiYnRuIGZvcm0tY29udHJvbCBkcm9wZG93bi10b2dnbGVcIiBvbkNsaWNrPXtIYW5kbGVTaG93fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCAhPSBwcm9wcy5PcHRpb25zLmxlbmd0aCA/IHByb3BzLk9wdGlvbnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubGVuZ3RoIDogJ0FsbCAnfSBTZWxlY3RlZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAqIC43NSwgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmc6ICcxMCA1JywgZGlzcGxheTogc2hvdyA/ICdibG9jaycgOiAnbm9uZScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgYm94U2hhZG93OiAnMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMiknLCB6SW5kZXg6IDQwMSwgbWluV2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJyBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk9uQ2hhbmdlKGV2dCwgcHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkID09IChwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aH0gb25DaGFuZ2U9eygpID0+IG51bGx9IC8+PC90ZD48dGQ+QWxsPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuT3B0aW9ucy5tYXAoKGYsIGkpID0+IDx0ciBrZXk9e2l9IG9uQ2xpY2s9eyhldnQpID0+IHByb3BzLk9uQ2hhbmdlKGV2dCwgW2ZdKX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtmLlNlbGVjdGVkfSBvbkNoYW5nZT17KCkgPT4gbnVsbH0gLz48L3RkPjx0ZD57Zi5UZXh0fTwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpU2VsZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=