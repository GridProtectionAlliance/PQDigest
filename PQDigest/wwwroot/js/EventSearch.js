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
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ "../node_modules/history/es/index.js");
/* harmony import */ var _ExportCSV__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ExportCSV */ "./tsx/ExportCSV.tsx");
/* harmony import */ var _MagDurChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MagDurChart */ "./tsx/MagDurChart.tsx");
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
    var history = Object(history__WEBPACK_IMPORTED_MODULE_6__["createBrowserHistory"])();
    var qs = querystring__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search.substring(1));
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
    }, [types, startDate, endDate, meters, returnLimit]);
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Return #"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: returnLimit, className: "form-control", onChange: function (e) { return setReturnLimit(parseInt(e.target.value)); } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "100"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "250"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "500"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1000"))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Meters"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["MultiCheckBoxSelect"], { Options: meters.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                                var newMeters = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(meters);
                                                $.each(options, function (index, option) {
                                                    newMeters.find(function (meter) { return meter.ID == option.Value; }).Selected = !option.Selected;
                                                });
                                                setMeters(newMeters);
                                            } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Type"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["MultiCheckBoxSelect"], { Options: types.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                                var newTypes = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(types);
                                                $.each(options, function (index, option) {
                                                    newTypes.find(function (type) { return type.ID == option.Value; }).Selected = !option.Selected;
                                                });
                                                setTypes(newTypes);
                                            } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Start Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: startDate, type: "date", onChange: function (e) { return setStartDate(e.target.value); } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "End Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: endDate, type: "date", onChange: function (e) { return setEndDate(e.target.value); } }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                        "Events",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-danger", style: { position: 'absolute', top: 5, right: 120 }, onClick: function () { return setShowEventList(!showEventList); } },
                            "View as ",
                            (showEventList ? 'Mag/Dur' : 'List')),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-primary", style: { position: 'absolute', top: 5, right: 5 }, onClick: function () { return Object(_ExportCSV__WEBPACK_IMPORTED_MODULE_7__["ExportToCsv"])(events, 'EventSearch.csv'); } }, "Export CSV")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 275, padding: 0 } }, showEventList ?
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3___default.a, { cols: [
                                { key: 'StartTime', label: 'Date', headerStyle: { width: '25%' }, rowStyle: { width: '25%' }, content: function (item, key, style) { return item[key] != undefined ? moment(item[key]).format('MM/DD/YYYY HH:mm:ss') : ''; } },
                                //{ key: 'StartTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => moment(item[key]).format('HH:mm:ss') },
                                { key: 'MeterName', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'EventType', label: 'Type', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'Phase', label: 'Phase', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
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
                            }, onClick: function (data) { setEventID(data.row.ID); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 340, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID == eventID; } }) :
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MagDurChart__WEBPACK_IMPORTED_MODULE_8__["default"], { Height: (window.innerHeight) - 275, Width: window.innerWidth / 2 - 20, Points: events.map(function (a) { return Object.create({ EventID: a.ID, Magnitude: a.PerUnitMagnitude, Duration: a.DurationSeconds }); }), OnSelect: function (evt, point) { return setEventID(point.EventID); } })))),
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
                ("&pixels=" + Math.floor(props.Width)) +
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
                ("&pixels=" + Math.floor(svgWidth)) +
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: component.TestCurveID, className: 'form-control', style: { width: 200, position: 'absolute', right: 6, top: 4 }, onChange: function (evt) {
                        var c = components.find(function (x) { return x.TestCurveID == evt.target.value; });
                        setComponent(c == undefined ? { TestCurveID: 0 } : c);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: '0' }, "NERC PRC-024-2"),
                    components.map(function (comp, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { key: index, value: comp.TestCurveID }, comp.Title); }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQIChart__WEBPACK_IMPORTED_MODULE_1__["default"], { Height: props.Height - 50, Width: props.Width, Points: points, Curve: curve }))));
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
    var chart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    var margin = { top: 15, right: 30, bottom: 40, left: 50 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom;
    var xmax = (props.Curve.length > 0 ? d3__WEBPACK_IMPORTED_MODULE_1__["max"](props.Curve.map(function (a) { return a.Duration; })) : 4);
    var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([margin.left, svgWidth + margin.left]).domain([0, xmax]);
    var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().rangeRound([svgHeight, margin.top]).domain([0, 1.3]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](chart.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](chart.current)
            .append('svg').attr('width', props.Width).attr('height', props.Height);
        var clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "clip")
            .append("svg:rect")
            .attr("width", svgWidth)
            .attr("height", svgHeight - margin.top)
            .attr("x", margin.left)
            .attr("y", margin.top);
        var scatter = svg.append('g')
            .attr("clip-path", "url(#clip)")
            .attr('id', 'chartdata');
        svg.selectAll("g.xaxis").remove();
        var xg = svg.append("g")
            .classed("xaxis", true)
            .attr("transform", "translate(0," + (props.Height - margin.bottom - margin.top) + ")");
        var xAxis = xg.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).tickSize(-(svgHeight - margin.top)));
        xg.append('text').text('Duration(s)').attr('x', (svgWidth - margin.right) / 2 + margin.left).attr('y', margin.bottom / 2).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll("g.yaxis").remove();
        var yg = svg.append("g")
            .classed("yaxis", true)
            .attr("transform", "translate(" + margin.left + ",0)");
        var yAxis = yg.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(8).tickSize(-(svgWidth)));
        yg.append('text').text('Per Unit Voltage').attr('transform', 'rotate(-90 0,0)').attr('x', -(svgHeight - margin.bottom) / 2 + margin.top).attr('y', -margin.left * 3 / 4).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");
        var lineFunc = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (xd) { return x(xd.Duration); }).y(function (yd) { return y(yd.Magnitude); });
        var lines = scatter.selectAll('path')
            .data([props.Curve])
            .enter()
            .append('path')
            .attr('stroke', 'red')
            .attr('fill', 'none')
            .attr('d', function (d) { return lineFunc(d); });
        if (props.Curve.length === 0) {
            var lines_1 = scatter.selectAll('g.line')
                .data([[
                    { Magnitude: 0, Duration: 0 },
                    { Magnitude: 0, Duration: 0.15 },
                    { Magnitude: 0.45, Duration: 0.15 },
                    { Magnitude: 0.45, Duration: 0.3 },
                    { Magnitude: 0.65, Duration: 0.3 },
                    { Magnitude: 0.65, Duration: 2 },
                    { Magnitude: 0.75, Duration: 2 },
                    { Magnitude: 0.75, Duration: 3 },
                    { Magnitude: 0.90, Duration: 3 },
                    { Magnitude: 0.90, Duration: 4 }
                ], [
                    { Magnitude: 1.2, Duration: 0 },
                    { Magnitude: 1.2, Duration: 0.20 },
                    { Magnitude: 1.175, Duration: 0.20 },
                    { Magnitude: 1.175, Duration: 0.50 },
                    { Magnitude: 1.15, Duration: 0.50 },
                    { Magnitude: 1.15, Duration: 1 },
                    { Magnitude: 1.10, Duration: 1 },
                    { Magnitude: 1.10, Duration: 4 }
                ]])
                .enter()
                .append('g')
                .attr('class', 'line')
                .append('path')
                .attr('class', 'line')
                .attr('stroke', 'red')
                .attr('fill', 'none')
                .attr('d', function (d) {
                return lineFunc(d);
            });
        }
        var circles = scatter.selectAll('g.points')
            .data([props.Points])
            .enter()
            .append('g').attr('class', 'points')
            .selectAll('circle')
            .data(function (d) { return d; })
            .enter()
            .append('circle')
            .attr('r', 5)
            .style('cursor', 'pointer')
            .attr('fill', 'blue')
            .attr('cx', function (d) { return x(d.Duration); })
            .attr('cy', function (d) { return y(d.Magnitude); });
    }, [props.Points, props.Curve]);
    function GetPath(data) {
        var linefunc = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) { return x(d.Duration); }).y(function (d) { return y(d.Magnitude); });
        return linefunc(data);
    }
    function BuildMadDurCircles(data) {
        var circles = data.map(function (point, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { key: index, className: "dot", r: 3, cx: x(point.Duration), cy: y(point.Magnitude), fill: 'blue' }); });
        return circles;
    }
    try {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: chart, style: { height: props.Height, width: props.Width } }));
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



var MagDurChart = function (props) {
    var margin = { top: 15, right: 20, bottom: 60, left: 40 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom;
    var chart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurCurveData = _a[0], setMagDurCurveData = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('ITIC'), 2), curve = _b[0], setCurve = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        Promise.all([GetMagDurCurves()]).then(function (data) {
            setMagDurCurveData(data[0]);
            Initialize(data[0]);
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        Initialize(magDurCurveData);
    }, [curve, props.Points]);
    function GetMagDurCurves() {
        return new Promise(function (res, rej) { return $.ajax({
            type: "GET",
            url: homePath + "api/MagDurCurves",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(function (d) { return res(d); }); });
    }
    function resetZoom(evt) {
        Initialize(magDurCurveData);
    }
    function Initialize(curves) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var margin = { top: 15, right: 20, bottom: 60, left: 40 };
        var svgWidth = props.Width - margin.left - margin.right;
        var svgHeight = props.Height - margin.top - margin.bottom;
        var data = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.groupBy(curves.filter(function (d) { return d.Name.includes(curve); }), 'Name');
        var XHigh = __spread(new Set((_b = (_a = data[Object.keys(data)[0]]) === null || _a === void 0 ? void 0 : _a.map(function (d) { return d.XHigh; })) !== null && _b !== void 0 ? _b : [100]))[0];
        var XLow = __spread(new Set((_d = (_c = data[Object.keys(data)[0]]) === null || _c === void 0 ? void 0 : _c.map(function (d) { return d.XLow; })) !== null && _d !== void 0 ? _d : [0.000001]))[0];
        var YHigh = __spread(new Set((_f = (_e = data[Object.keys(data)[0]]) === null || _e === void 0 ? void 0 : _e.map(function (d) { return d.YHigh; })) !== null && _f !== void 0 ? _f : [5]))[0];
        var YLow = __spread(new Set((_h = (_g = data[Object.keys(data)[0]]) === null || _g === void 0 ? void 0 : _g.map(function (d) { return d.YLow; })) !== null && _h !== void 0 ? _h : [0]))[0];
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](chart.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](chart.current)
            .append('svg').attr('width', props.Width).attr('height', props.Height);
        var clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "clip")
            .append("svg:rect")
            .attr("width", svgWidth)
            .attr("height", svgHeight - margin.top)
            .attr("x", margin.left)
            .attr("y", margin.top);
        var scatter = svg.append('g')
            .attr("clip-path", "url(#clip)")
            .attr('id', 'chartdata');
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().rangeRound([svgHeight, margin.top]).domain([YLow, YHigh]);
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"]().rangeRound([margin.left, svgWidth + margin.left]).domain([XLow, XHigh]);
        svg.selectAll("g.xaxis").remove();
        var xg = svg.append("g")
            .classed("xaxis", true)
            .attr("transform", "translate(0," + (props.Height - margin.bottom - margin.top) + ")");
        var xAxis = xg.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).tickSize(-(svgHeight - margin.top)).tickFormat(function (value) {
            if (Math.log10(value) === Math.floor(Math.log10(value)))
                return d3__WEBPACK_IMPORTED_MODULE_1__["format"](".0s")(value);
            else
                return '';
        }));
        xg.append('text').text('Duration(s)').attr('x', (svgWidth - margin.right) / 2 + margin.left).attr('y', margin.bottom / 2).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll("g.yaxis").remove();
        var yg = svg.append("g")
            .classed("yaxis", true)
            .attr("transform", "translate(" + margin.left + ",0)");
        var yAxis = yg.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(8).tickSize(-(svgWidth)));
        yg.append('text').text('Per Unit Voltage').attr('transform', 'rotate(-90 0,0)').attr('x', -(svgHeight - margin.bottom) / 2 + margin.top).attr('y', -margin.left * 3 / 4).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");
        var lineFunc = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (xd) { return x(xd.DurationSeconds); }).y(function (yd) { return y(yd.PerUnitMagnitude); });
        var lines = scatter.selectAll('g.lines')
            .data([data])
            .enter()
            .append('g')
            .attr('class', 'lines')
            .selectAll('path')
            .data(function (d) { return Object.keys(d); })
            .enter()
            .append('path')
            .attr('stroke', 'red')
            .attr('fill', 'none')
            .attr('d', function (d) { return lineFunc(data[d]); });
        var circles = scatter.selectAll('g.points')
            .data([props.Points])
            .enter()
            .append('g').attr('class', 'points')
            .selectAll('circle')
            .data(function (d) { return d; })
            .enter()
            .append('circle')
            .attr('r', 5)
            .style('cursor', 'pointer')
            .attr('fill', 'blue')
            .attr('cx', function (d) { return x(d.Duration); })
            .attr('cy', function (d) { return y(d.Magnitude); })
            .on('click', function (d) { return props.OnSelect(d3__WEBPACK_IMPORTED_MODULE_1__["event"], d); });
        var zoom = d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]().on('zoom', function () {
            var transform = d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform;
            var updatedX = transform.rescaleX(x);
            var updatedY = transform.rescaleY(y);
            xAxis.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](updatedX).tickSize(-(svgHeight - margin.top)).tickFormat(function (value) {
                if (Math.log10(value) === Math.floor(Math.log10(value)))
                    return d3__WEBPACK_IMPORTED_MODULE_1__["format"](".0s")(value);
                else
                    return '';
            }));
            yAxis.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](updatedY).tickSize(-(svgWidth)));
            svg.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");
            circles.attr('cx', function (d) { return updatedX(d.Duration); }).attr('cy', function (d) { return updatedY(d.Magnitude); });
            var upLineFunc = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (xd) { return updatedX(xd.DurationSeconds); }).y(function (yd) { return updatedY(yd.PerUnitMagnitude); });
            lines.attr('d', function (d) { return upLineFunc(data[d]); });
        });
        svg.call(zoom);
        svg.append('use').attr('xlink:href', '#chartdata');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: chart, style: { height: props.Height, width: props.Width } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { textAlign: 'center' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check form-check-inline" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-check-input", type: "radio", value: curve, checked: curve === 'ITIC', onChange: function (evt) { return setCurve('ITIC'); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" }, "ITIC")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check form-check-inline" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-check-input", type: "radio", value: curve, checked: curve === 'SEMI', onChange: function (evt) { return setCurve('SEMI'); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" }, "SEMI F47")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check form-check-inline" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-check-input", type: "radio", value: curve, checked: curve === 'I & II', onChange: function (evt) { return setCurve('I & II'); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" }, "IEEE 1668 Recommended Type I & II")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check form-check-inline" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-check-input", type: "radio", value: curve, checked: curve === 'III', onChange: function (evt) { return setCurve('III'); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" }, "IEEE 1668 Recommended Type III")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check form-check-inline" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-check-input", type: "radio", value: curve, checked: curve === 'NERC', onChange: function (evt) { return setCurve('NERC'); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" }, "NERC PRC-024-2"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { position: 'absolute', top: 95, left: svgWidth - margin.right }, onClick: resetZoom }, "Reset")));
};
/* harmony default export */ __webpack_exports__["default"] = (MagDurChart);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9PcGVuU0VFL0V2ZW50U2VhcmNoT3BlblNFRS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvRXZlbnRTZWFyY2hQUUkudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvUFFJQ2hhcnQudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9UcmVuREFQL0V2ZW50U2VhcmNoVHJlbkRBUC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V4cG9ydENTVi50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L01hZ0R1ckNoYXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4RywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUM5RTtB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RTdDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUcsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxCLElBQUksUUFBUSxHQUFHLCtDQUFJLEVBQW9CLENBQUMsQ0FB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QUFRLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLEdBQUk7Z0JBQ2pJLHNFQUFPLFNBQVMsRUFBQyxrQkFBa0IscUJBQXVCLENBQ3hELENBQ0o7UUFDTix1RUFBUSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsR0FBSSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsWUFBZ0IsQ0FDbEgsQ0FDVDtBQUNMLENBQUM7QUFFYywwRUFBVyxFQUFDIiwiZmlsZSI6IkV2ZW50U2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3IGZyb20gJy4uL0V2ZW50U2VhcmNoL0V2ZW50U2VhcmNoUHJldmlldyc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCB7IE11bHRpQ2hlY2tCb3hTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCJcclxuaW1wb3J0IHsgRXhwb3J0VG9Dc3YgfSBmcm9tICcuLi9FeHBvcnRDU1YnO1xyXG5pbXBvcnQgTWFnRHVyQ2hhcnQgZnJvbSAnLi4vTWFnRHVyQ2hhcnQnO1xyXG5cclxuY29uc3QgRXZlbnRTZWFyY2ggPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBxcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xyXG4gICAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLkV2ZW50VHlwZVtdPihbXSlcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLnN0YXJ0RGF0ZSA9PSB1bmRlZmluZWQgPyBtb21lbnQoKS5zdWJ0cmFjdCgzMCwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIDogcXMuc3RhcnREYXRlKVxyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihxcy5lbmREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIikgOiBxcy5lbmREYXRlKVxyXG4gICAgY29uc3QgW21ldGVycywgc2V0TWV0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuTWV0ZXJbXT4oW10pO1xyXG4gICAgY29uc3QgW3JldHVybkxpbWl0LCBzZXRSZXR1cm5MaW1pdF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLnJldHVybkxpbWl0ID09IHVuZGVmaW5lZCA/IDEwMDogcGFyc2VJbnQocXMucmV0dXJuTGltaXQgYXMgc3RyaW5nKSk7XHJcbiAgICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5FdmVudFNlYXJjaFtdPihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgT3BlblhEQS5FdmVudFNlYXJjaD4oJ1N0YXJ0VGltZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW2V2ZW50SUQsIHNldEV2ZW50SURdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy5ldmVudElEID09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChxcy5ldmVudElEIGFzIHN0cmluZykpO1xyXG4gICAgY29uc3QgW3Nob3dFdmVudExpc3QsIHNldFNob3dFdmVudExpc3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldFR5cGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBPcGVuWERBLkV2ZW50VHlwZVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiNjRzdHJpbmcgPSAocXMudHlwZXMgPT0gdW5kZWZpbmVkID8gJyc6IHFzLnR5cGVzKVxyXG4gICAgICAgICAgICBsZXQgaWRzID0gYXRvYihiNjRzdHJpbmcgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcChhID0+IHBhcnNlSW50KGEpKVxyXG4gICAgICAgICAgICBpZihxcy50eXBlcyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSB0cnVlKVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSBpZHMuaW5kZXhPZih2YWx1ZS5JRCkgPj0gMClcclxuXHJcbiAgICAgICAgICAgIHNldFR5cGVzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldE1ldGVycygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YTogT3BlblhEQS5NZXRlcltdKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiNjRzdHJpbmcgPSAocXMubWV0ZXJzID09IHVuZGVmaW5lZCA/ICcnIDogcXMubWV0ZXJzKVxyXG4gICAgICAgICAgICBsZXQgaWRzID0gYXRvYihiNjRzdHJpbmcgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcChhID0+IHBhcnNlSW50KGEpKVxyXG4gICAgICAgICAgICBpZiAocXMubWV0ZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IHRydWUpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IGlkcy5pbmRleE9mKHZhbHVlLklEKSA+PSAwKVxyXG5cclxuICAgICAgICAgICAgc2V0TWV0ZXJzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChtZXRlcnMubGVuZ3RoID09IDAgfHwgdHlwZXMubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ0V2ZW50U2VhcmNoJywgc2VhcmNoOiBgP2V2ZW50SUQ9JHtldmVudElEfSZzdGFydERhdGU9JHtzdGFydERhdGV9JmVuZERhdGU9JHtlbmREYXRlfSZyZXR1cm5MaW1pdD0ke3JldHVybkxpbWl0fSZ0eXBlcz0ke2J0b2EodHlwZXMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRCkudG9TdHJpbmcoKSl9Jm1ldGVycz0ke2J0b2EobWV0ZXJzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpLnRvU3RyaW5nKCkpfWB9KVxyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldEV2ZW50U2VhcmNoKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBPcGVuWERBLkV2ZW50U2VhcmNoW10pID0+IHtcclxuICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LCBbdHlwZXMsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbWV0ZXJzLCByZXR1cm5MaW1pdF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldFR5cGVzKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLkV2ZW50VHlwZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnRUeXBlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuTWV0ZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL01ldGVyYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRFdmVudFNlYXJjaCgpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5FdmVudFNlYXJjaFtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50U2VhcmNoYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBTdGFydERhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIEVuZERhdGU6IGVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICBDb3VudDogcmV0dXJuTGltaXQsXHJcbiAgICAgICAgICAgICAgICBNZXRlcnM6IG1ldGVycy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKSxcclxuICAgICAgICAgICAgICAgIFR5cGVzOiB0eXBlcy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiA3NSwgbWFyZ2luOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiA3NX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiIHN0eWxlPXt7Ym9yZGVyOiAnMHB4Jywgd2lkdGg6IDEwMH19PlJldHVybiAjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3JldHVybkxpbWl0fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBzZXRSZXR1cm5MaW1pdChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yNTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj41MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xMDAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwIH19Pk1ldGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlDaGVja0JveFNlbGVjdCBPcHRpb25zPXttZXRlcnMubWFwKHQgPT4gT2JqZWN0LmNyZWF0ZSh7IFRleHQ6IHQuTmFtZSwgVmFsdWU6IHQuSUQsIFNlbGVjdGVkOiB0LlNlbGVjdGVkIH0pKX0gT25DaGFuZ2U9eyhldnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld01ldGVycyA9IF8uY2xvbmVEZWVwKG1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWV0ZXJzLmZpbmQobWV0ZXIgPT4gbWV0ZXIuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVycyhuZXdNZXRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcsIHdpZHRoOiAxMDAgfX0+VHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlDaGVja0JveFNlbGVjdCBPcHRpb25zPXt0eXBlcy5tYXAodCA9PiBPYmplY3QuY3JlYXRlKHsgVGV4dDogdC5OYW1lLCBWYWx1ZTogdC5JRCwgU2VsZWN0ZWQ6IHQuU2VsZWN0ZWQgfSkpfSBPbkNoYW5nZT17KGV2dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHlwZXMgPSBfLmNsb25lRGVlcCh0eXBlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VHlwZXMuZmluZCh0eXBlID0+IHR5cGUuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFR5cGVzKG5ld1R5cGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwIH19PlN0YXJ0IERhdGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtzdGFydERhdGV9IHR5cGU9XCJkYXRlXCIgb25DaGFuZ2U9e2UgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4Jywgd2lkdGg6IDEwMCB9fT5FbmQgRGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VuZERhdGV9IHR5cGU9XCJkYXRlXCIgb25DaGFuZ2U9e2UgPT4gc2V0RW5kRGF0ZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gODBweClcIiwgbWFyZ2luOiAnNXB4IDVweCA1cHggNXB4ICcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4IDBweCAwcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAyfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiAxMjAgfX0gb25DbGljaz17KCkgPT4gc2V0U2hvd0V2ZW50TGlzdCghc2hvd0V2ZW50TGlzdCl9PlZpZXcgYXMgeyhzaG93RXZlbnRMaXN0PyAnTWFnL0R1cicgOiAnTGlzdCcpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiA1LCByaWdodDogNSB9fSBvbkNsaWNrPXsoKSA9PiBFeHBvcnRUb0NzdihldmVudHMsICdFdmVudFNlYXJjaC5jc3YnKX0+RXhwb3J0IENTVjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjc1LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFdmVudExpc3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxPcGVuWERBLkV2ZW50U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1N0YXJ0VGltZScsIGxhYmVsOiAnRGF0ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzI1JScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW1ba2V5XSAhPSB1bmRlZmluZWQgPyBtb21lbnQoaXRlbVtrZXldKS5mb3JtYXQoJ01NL0REL1lZWVkgSEg6bW06c3MnKTonJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy97IGtleTogJ1N0YXJ0VGltZScsIGxhYmVsOiAnVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gbW9tZW50KGl0ZW1ba2V5XSkuZm9ybWF0KCdISDptbTpzcycpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ldGVyTmFtZScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdFdmVudFR5cGUnLCBsYWJlbDogJ1R5cGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUGhhc2UnLCBsYWJlbDogJ1BoYXNlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1BlclVuaXRNYWduaXR1ZGUnLCBsYWJlbDogJ01hZyAocHUpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbVtrZXldICE9IHVuZGVmaW5lZCA/KGl0ZW1ba2V5XSBhcyBudW1iZXIpLnRvRml4ZWQoMik6JycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRHVyYXRpb25TZWNvbmRzJywgbGFiZWw6ICdEdXIgKHMpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbVtrZXldICE9IHVuZGVmaW5lZCA/KGl0ZW1ba2V5XSBhcyBudW1iZXIpLnRvRml4ZWQoMik6JycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtldmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KGV2ZW50cywgW3NvcnRGaWVsZF0sIFsoIWFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV2ZW50cyhvcmRlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KGV2ZW50cywgW2QuY29sXSwgWyhhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFdmVudHMob3JkZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhKSA9PiB7IHNldEV2ZW50SUQoZGF0YS5yb3cuSUQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNjAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IGlubmVySGVpZ2h0IC0gMzQwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gaXRlbS5JRCA9PSBldmVudElEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFnRHVyQ2hhcnQgSGVpZ2h0PXsod2luZG93LmlubmVySGVpZ2h0KSAtIDI3NX0gV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBQb2ludHM9e2V2ZW50cy5tYXAoYSA9PiBPYmplY3QuY3JlYXRlKHsgRXZlbnRJRDogYS5JRCwgTWFnbml0dWRlOiBhLlBlclVuaXRNYWduaXR1ZGUsIER1cmF0aW9uOiBhLkR1cmF0aW9uU2Vjb25kcyB9KSl9IE9uU2VsZWN0PXsoZXZ0LCBwb2ludCkgPT4gc2V0RXZlbnRJRChwb2ludC5FdmVudElEKX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAwcHggMHB4IDNweCcsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8yIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+RXZlbnQgUHJldmlldzwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCkgLSAyMjYsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3IEV2ZW50SUQ9e2V2ZW50SUR9IEhlaWdodD17d2luZG93LmlubmVySGVpZ2h0IC0gMjI2fSBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2g7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUHJldmlldy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjkvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFdmVudFNlYXJjaE9wZW5TRUUgZnJvbSAnLi9PcGVuU0VFL0V2ZW50U2VhcmNoT3BlblNFRSc7XHJcbmltcG9ydCBFdmVudFNlYXJjaFRyZW5EQVAgZnJvbSAnLi9UcmVuREFQL0V2ZW50U2VhcmNoVHJlbkRBUCc7XHJcbmltcG9ydCBFdmVudFNlYXJjaFBRSSBmcm9tICcuL1BRSS9FdmVudFNlYXJjaFBRSSc7XHJcblxyXG5jb25zdCBFdmVudFNlYXJjaFByZXZpZXcgPSAocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29udHJvbCwgc2V0Q29udHJvbF0gPSBSZWFjdC51c2VTdGF0ZSA8ICdEYXRhJyB8ICdQUUknPignRGF0YScpO1xyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIHtwcm9wcy5FdmVudElEIDwgMSA/IDxzcGFuPk5vIEV2ZW50IFNlbGVjdGVkIC4uLiA8L3NwYW4+IDpcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2NvbnRyb2x9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDb250cm9sKGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgd2lkdGg6IDEwMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHpJbmRleDogMTAwLCByaWdodDogNiwgdG9wOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5QUUk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgeyhjb250cm9sID09ICdEYXRhJyA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaE9wZW5TRUUgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRofSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvMyAtIDF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFRyZW5EQVAgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRofSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvIDMgLSAxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQUUkgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRofSBIZWlnaHQ9e3Byb3BzLkhlaWdodC8zIC0gMX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgIHsoY29udHJvbCA9PSAnUFFJJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUFFJIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsKX1cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgIDwvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VhcmNoUHJldmlldzsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hPcGVuU0VFLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMy8wMy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBmcm9tICcuL0V2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgZnJvbSAnLi9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFNlYXJjaE9wZW5TRUUocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IFRvcDogMCwgUmlnaHQ6IDIwLCBCb3R0b206IDAsIExlZnQ6IDM1IH07XHJcbiAgICAvL2NvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIC8vY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20gLSA2NTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+PGEgaHJlZj17IGhvbWVQYXRoICsgJ1dhdmVmb3JtVmlld2VyP0V2ZW50SUQ9JyArIHByb3BzLkV2ZW50SUR9IHRhcmdldD1cIl9ibGFua1wiPlZpZXcgV2F2ZWZvcm08L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nVm9sdGFnZScgRGF0YVR5cGU9J1RpbWUnIE1hcmdpbj17bWFyZ2lufSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvIDN9IFdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfS8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNZWFzdXJlbWVudFR5cGU9J0N1cnJlbnQnIERhdGFUeXBlPSdUaW1lJyBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17cHJvcHMuSGVpZ2h0LzN9Lz5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17NDB9IERhdGFUeXBlPSdUaW1lJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzIwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgbGluZSwgZXh0ZW50IH0gZnJvbSAnZDMnO1xyXG5cclxuY29uc3QgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCA9IChwcm9wczogeyBFdmVudElEOiBudW1iZXIsIE1lYXN1cmVtZW50VHlwZTogJ0N1cnJlbnQnIHwgJ1ZvbHRhZ2UnIHwgJ1RyaXBDb2lsQ3VycmVudCcsIERhdGFUeXBlOiAnVGltZScgfCAnU3RhdGlzdGljJyB8ICdUcmVuZGluZycsIE1hcmdpbjogeyBMZWZ0OiBudW1iZXIsIFJpZ2h0OiBudW1iZXIsIFRvcDogbnVtYmVyLCBCb3R0b206IG51bWJlciB9LCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3BhdGhzLCBzZXRQYXRoc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGhzKFtdKTtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50L0RhdGE/ZXZlbnRJZD0ke3Byb3BzLkV2ZW50SUR9YCArXHJcbiAgICAgICAgICAgICAgICBgJnBpeGVscz0ke01hdGguZmxvb3IocHJvcHMuV2lkdGgpfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZ0eXBlPSR7cHJvcHMuTWVhc3VyZW1lbnRUeXBlfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZkYXRhVHlwZT0ke3Byb3BzLkRhdGFUeXBlfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IERyYXdDaGFydChkYXRhKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YSkge1xyXG5cclxuICAgICAgICBsZXQgeCA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbcHJvcHMuTWFyZ2luLkxlZnQsIHByb3BzLldpZHRoIC0gcHJvcHMuTWFyZ2luLlJpZ2h0XSk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3Byb3BzLkhlaWdodCAtIHByb3BzLk1hcmdpbi5Ub3AsIHByb3BzLk1hcmdpbi5Cb3R0b21dKTtcclxuXHJcbiAgICAgICAgbGV0IHlleHRlbnQgPSBbMCwgMF07XHJcbiAgICAgICAgbGV0IHhleHRlbnQgPSBbOTAwNzE5OTI1NDc0MDk5MSwgLTkwMDcxOTkyNTQ3NDA5OTBdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSwgaW5kZXgsIGtleXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld3lleGVudCA9IGV4dGVudChkYXRhW2tleV0sIGQgPT4gZFsxXSk7XHJcbiAgICAgICAgICAgIGxldCBuZXd4ZXhlbnQgPSBleHRlbnQoZGF0YVtrZXldLCBkID0+IGRbMF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobmV3eWV4ZW50WzBdLnRvU3RyaW5nKCkpIDwgeWV4dGVudFswXSkgeWV4dGVudFswXSA9IHBhcnNlRmxvYXQobmV3eWV4ZW50WzBdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG5ld3lleGVudFsxXS50b1N0cmluZygpKSA+IHlleHRlbnRbMV0pIHlleHRlbnRbMV0gPSBwYXJzZUZsb2F0KG5ld3lleGVudFsxXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChuZXd4ZXhlbnRbMF0udG9TdHJpbmcoKSkgPCB4ZXh0ZW50WzBdKSB4ZXh0ZW50WzBdID0gcGFyc2VGbG9hdChuZXd4ZXhlbnRbMF0udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobmV3eGV4ZW50WzFdLnRvU3RyaW5nKCkpID4geGV4dGVudFsxXSkgeGV4dGVudFsxXSA9IHBhcnNlRmxvYXQobmV3eGV4ZW50WzFdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHlleHRlbnQgPSBbMS4yMCAqIHlleHRlbnRbMF0sIDEuMjAgKiB5ZXh0ZW50WzFdXVxyXG4gICAgICAgIHkuZG9tYWluKHlleHRlbnQpO1xyXG4gICAgICAgIHguZG9tYWluKHhleHRlbnQpO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPFtudW1iZXIsIG51bWJlcl0+KCkueChkID0+IHgoZFswXSkpLnkoZCA9PiB5KGRbMV0pKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1BhdGhzID0gW107XHJcbiAgICAgICAgJC5lYWNoKE9iamVjdC5rZXlzKGRhdGEpLCAoaW5kZXgsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBuZXdQYXRocy5wdXNoKDxwYXRoIGtleT17a2V5fSBmaWxsPSdub25lJyBzdHJva2VMaW5lam9pbj0ncm91bmQnIHN0cm9rZVdpZHRoPScxLjUnIHN0cm9rZT17Z2V0Q29sb3Ioa2V5KX0gZD17bGluZWZ1bmMoZGF0YVtrZXldKX0gLz4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFBhdGhzKG5ld1BhdGhzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWQScpID49IDApIHJldHVybiAnI0EzMDAwMCc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ1ZCJykgPj0gMCkgcmV0dXJuICcjMDAyOUEzJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVkMnKSA+PSAwKSByZXR1cm4gJyMwMDdBMjknO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWTicpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lBJykgPj0gMCkgcmV0dXJuICcjRkYwMDAwJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignSUInKSA+PSAwKSByZXR1cm4gJyMwMDY2Q0MnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJQycpID49IDApIHJldHVybiAnIzMzQ0MzMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lSJykgPj0gMCkgcmV0dXJuICcjYzNjM2MzJztcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1PbmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVR3byA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtVGhyZWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgIyR7KHJhbk51bU9uZS5sZW5ndGggPiAxID8gcmFuTnVtT25lIDogXCIwXCIgKyByYW5OdW1PbmUpfSR7KHJhbk51bVR3by5sZW5ndGggPiAxID8gcmFuTnVtVHdvIDogXCIwXCIgKyByYW5OdW1Ud28pfSR7KHJhbk51bVRocmVlLmxlbmd0aCA+IDEgPyByYW5OdW1UaHJlZSA6IFwiMFwiICsgcmFuTnVtVGhyZWUpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLyosIG1hcmdpbjogJzB4JywgcGFkZGluZzogJzBweCcqLyB9fT5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBzdHlsZT17eyBmaWxsOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSdibGFjaycgZD17YE0gJHtwcm9wcy5NYXJnaW4uTGVmdH0gJHtwcm9wcy5NYXJnaW4uVG9wfSBIICR7cHJvcHMuV2lkdGggLSBwcm9wcy5NYXJnaW4uUmlnaHR9IFYgJHtwcm9wcy5IZWlnaHR9IEggJHtwcm9wcy5NYXJnaW4uTGVmdH0gViAke3Byb3BzLk1hcmdpbi5Ub3B9YH0gc3R5bGU9e3sgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJ319IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgMCwwKWB9IHk9e3Byb3BzLk1hcmdpbi5MZWZ0IC0gMTV9IHg9ey0ocHJvcHMuSGVpZ2h0ICsgMzUpIC8gMn0+e3Byb3BzLk1lYXN1cmVtZW50VHlwZSA9PSBcIlZvbHRhZ2VcIiA/IFwiVm9sdGFnZVwiIDogXCJBbXBzXCJ9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhdGhzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIHNlbGVjdCwgYXhpc0JvdHRvbSB9IGZyb20gJ2QzJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzID0gKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgTWFyZ2luOiB7IExlZnQ6IG51bWJlciwgUmlnaHQ6IG51bWJlciwgVG9wOiBudW1iZXIsIEJvdHRvbTogbnVtYmVyIH0sIFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyLCBEYXRhVHlwZTogJ1RyZW5kaW5nJyB8ICdUaW1lJyB9KSA9PiB7XHJcbiAgICAvL2NvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgLy9jb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodDtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGg7XHJcblxyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW3hBeGlzVGlja3MsIHNldFhBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50L0RhdGE/ZXZlbnRJZD0ke3Byb3BzLkV2ZW50SUR9YCArXHJcbiAgICAgICAgICAgICAgICBgJnBpeGVscz0ke01hdGguZmxvb3Ioc3ZnV2lkdGgpfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZ0eXBlPVZvbHRhZ2VgICtcclxuICAgICAgICAgICAgICAgIGAmZGF0YVR5cGU9JHtwcm9wcy5EYXRhVHlwZX1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKGRhdGEgPT4gRHJhd0NoYXJ0KGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUaWNrRm9ybWF0dGVyKHZhbHVlLCBheGlzKSB7XHJcblxyXG4gICAgICAgIHZhciBmYWN0b3IgPSBheGlzLnRpY2tEZWNpbWFscyA/IE1hdGgucG93KDEwLCBheGlzLnRpY2tEZWNpbWFscykgOiAxO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBcIlwiICsgTWF0aC5yb3VuZCh2YWx1ZSAqIGZhY3RvcikgLyBmYWN0b3I7XHJcblxyXG4gICAgICAgIC8vIElmIHRpY2tEZWNpbWFscyB3YXMgc3BlY2lmaWVkLCBlbnN1cmUgdGhhdCB3ZSBoYXZlIGV4YWN0bHkgdGhhdFxyXG4gICAgICAgIC8vIG11Y2ggcHJlY2lzaW9uOyBvdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgdmFsdWUncyBvd24gcHJlY2lzaW9uLlxyXG5cclxuICAgICAgICBpZiAoYXhpcy50aWNrRGVjaW1hbHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbCA9IGZvcm1hdHRlZC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgICAgdmFyIHByZWNpc2lvbiA9IGRlY2ltYWwgPT0gLTEgPyAwIDogZm9ybWF0dGVkLmxlbmd0aCAtIGRlY2ltYWwgLSAxO1xyXG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uIDwgYXhpcy50aWNrRGVjaW1hbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocHJlY2lzaW9uID8gZm9ybWF0dGVkIDogZm9ybWF0dGVkICsgXCIuXCIpICsgKFwiXCIgKyBmYWN0b3IpLnN1YnN0cigxLCBheGlzLnRpY2tEZWNpbWFscyAtIHByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XHJcbiAgICB9O1xyXG4gICAgLy8gcm91bmQgdG8gbmVhcmJ5IGxvd2VyIG11bHRpcGxlIG9mIGJhc2VcclxuICAgIGZ1bmN0aW9uIGZsb29ySW5CYXNlKG4sIGJhc2UpIHtcclxuICAgICAgICByZXR1cm4gYmFzZSAqIE1hdGguZmxvb3IobiAvIGJhc2UpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KGRhdGEpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgc2V0SGlkZGVuKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhpZGRlbihmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCBzZXJpZXMgPSBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbMCwgc3ZnV2lkdGhdKS5kb21haW4oW3Nlcmllc1swXVswXSwgc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXVswXV0pO1xyXG5cclxuICAgICAgICBsZXQgdGlja3MgPSBbXTtcclxuICAgICAgICBsZXQgc3BhbiA9IHguZG9tYWluKClbMV0gLSB4LmRvbWFpbigpWzBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB4LmRvbWFpbigpWzBdICsgc3BhbiAvIDc7IGkgPCB4LmRvbWFpbigpWzFdOyBpICs9IHNwYW4vNykge1xyXG4gICAgICAgICAgICB0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eChpKX0sJHswfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNIDAsNiBWIC02YH0gc3Ryb2tlV2lkdGg9ezAuNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiB5PVwiMjBcIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPnttb21lbnQoJzE5NzAtMDEtMDFUMDA6MDA6MDAnKS5hZGQoaSwgJ21pbGxpc2Vjb25kcycpLmZvcm1hdChwcm9wcy5EYXRhVHlwZSA9PSAnVGltZScgPyAnc3MuU1NTJyA6ICdISDpzcycpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFhBeGlzVGlja3ModGlja3MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzdmdIZWlnaHQgLyosIG1hcmdpbjogJzB4JywgcGFkZGluZzogJzBweCcqLyB9fSBoaWRkZW49e2hpZGRlbn0+XHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9J2JsYWNrJyBkPXtgTSAke3Byb3BzLk1hcmdpbi5MZWZ0fSAke3Byb3BzLk1hcmdpbi5Ub3AgKyAxfSBIICR7cHJvcHMuV2lkdGggLSBwcm9wcy5NYXJnaW4uUmlnaHR9YH0gc3R5bGU9e3sgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAge3hBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgeD17c3ZnV2lkdGggLyAyfSB5PXtzdmdIZWlnaHQgLSAxMH0+VGltZTwvdGV4dD5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXM7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUFFJLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBRSUNoYXJ0LCB7IFBvaW50IH0gZnJvbSAnLi9QUUlDaGFydCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hQUUkocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBbY29tcG9uZW50cywgc2V0Q29tcG9uZW50c10gPSBSZWFjdC51c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gICAgY29uc3QgW2NvbXBvbmVudCwgc2V0Q29tcG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oe1Rlc3RDdXJ2ZUlEOiAwfSk7XHJcbiAgICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gUmVhY3QudXNlU3RhdGU8UG9pbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2N1cnZlLCBzZXRDdXJ2ZV0gPSBSZWFjdC51c2VTdGF0ZTxQb2ludFtdPihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDb21wb25lbnQoeyBUZXN0Q3VydmVJRDogMCB9KTtcclxuICAgICAgICBzZXRDb21wb25lbnRzKFtdKTtcclxuICAgICAgICBzZXRQb2ludHMoW10pO1xyXG4gICAgICAgIHNldEN1cnZlKFtdKTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb21wb25lbnRzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldERpc3R1cmJhbmNlcygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb2ludHMoZGF0YS5tYXAoZCA9PiBPYmplY3QuY3JlYXRlKHtEdXJhdGlvbjogZC5EdXJhdGlvblNlY29uZHMsIE1hZ25pdHVkZTogZC5QZXJVbml0TWFnbml0dWRlfSkpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRDb21wb25lbnRDdXJ2ZSgpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgc2V0Q3VydmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29tcG9uZW50XSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRDb21wb25lbnRzKCk6IEpRdWVyeS5qcVhIUjxhbnlbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9QUUkvQ29tcG9uZW50cy8ke3Byb3BzLkV2ZW50SUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRDb21wb25lbnRDdXJ2ZSgpOiBKUXVlcnkuanFYSFI8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvUFFJL0NvbXBvbmVudC9DdXJ2ZS8ke2NvbXBvbmVudC5DdXJ2ZURCfS8ke2NvbXBvbmVudC5UZXN0Q3VydmVJRH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERpc3R1cmJhbmNlcygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5EaXN0dXJiYW5jZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1BRSS9EaXN0cnViYW5jZXMvJHtwcm9wcy5FdmVudElEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+UFFJIC0gUmlkZS10aHJvdWdoIEN1cnZlc1xyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Y29tcG9uZW50LlRlc3RDdXJ2ZUlEfSBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgc3R5bGU9e3sgd2lkdGg6IDIwMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiA2LCB0b3A6IDQgfX0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmZpbmQoeCA9PiB4LlRlc3RDdXJ2ZUlEID09IGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb21wb25lbnQoYyA9PSB1bmRlZmluZWQgPyB7IFRlc3RDdXJ2ZUlEOiAwfTogYylcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+TkVSQyBQUkMtMDI0LTI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5tYXAoKGNvbXAsIGluZGV4KSA9PiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjb21wLlRlc3RDdXJ2ZUlEfT57Y29tcC5UaXRsZX08L29wdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQUUlDaGFydCBIZWlnaHQ9e3Byb3BzLkhlaWdodCAtIDUwfSBXaWR0aD17cHJvcHMuV2lkdGh9IFBvaW50cz17cG9pbnRzfSBDdXJ2ZT17Y3VydmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKXtcclxuICAgICAgICByZXR1cm4gZXJyIFxyXG4gICAgfVxyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFBRSUNoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsIFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQZXJVbml0TWFnbml0dWRlOiBudW1iZXIsIFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICAgIE1hZ25pdHVkZTogbnVtYmVyLFxyXG4gICAgRHVyYXRpb246IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFnRHVyQ3VydmUge1xyXG4gICAgTmFtZTogc3RyaW5nLFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQYXRoOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgUFFJQ2hhcnQgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsUG9pbnRzOiBQb2ludFtdLCBDdXJ2ZTogUG9pbnRbXSB9KSA9PiB7XHJcbiAgICBjb25zdCBjaGFydCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDMwLCBib3R0b206IDQwLCBsZWZ0OiA1MCB9O1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcbiAgICBjb25zdCB4bWF4ID0gKHByb3BzLkN1cnZlLmxlbmd0aCA+IDAgPyBkMy5tYXgocHJvcHMuQ3VydmUubWFwKGEgPT4gYS5EdXJhdGlvbikpOjQpXHJcbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oWzAsIHhtYXhdKTtcclxuICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbMCwxLjNdKTtcclxuICAgIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkMy5zZWxlY3QoY2hhcnQuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoY2hhcnQuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJykuYXR0cignd2lkdGgnLCBwcm9wcy5XaWR0aCkuYXR0cignaGVpZ2h0JywgcHJvcHMuSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGNsaXAgPSBzdmcuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJzdmc6Y2xpcFBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImNsaXBcIilcclxuICAgICAgICAgICAgLmFwcGVuZChcInN2ZzpyZWN0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHN2Z0hlaWdodCAtIG1hcmdpbi50b3ApXHJcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBtYXJnaW4ubGVmdClcclxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG1hcmdpbi50b3ApO1xyXG5cclxuICAgICAgICBsZXQgc2NhdHRlciA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjY2xpcClcIilcclxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2NoYXJ0ZGF0YScpO1xyXG5cclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcueGF4aXNcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcInhheGlzXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAocHJvcHMuSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSAtIG1hcmdpbi50b3ApICsgXCIpXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHhnLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrU2l6ZSgtKHN2Z0hlaWdodCAtIG1hcmdpbi50b3ApKSk7XHJcbiAgICAgICAgeGcuYXBwZW5kKCd0ZXh0JykudGV4dCgnRHVyYXRpb24ocyknKS5hdHRyKCd4JywgKHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0KSAvIDIgKyBtYXJnaW4ubGVmdCkuYXR0cigneScsIG1hcmdpbi5ib3R0b20gLyAyKS5hdHRyKCdmaWxsJywgJ2JsYWNrJykuc3R5bGUoJ2ZvbnQtc2l6ZScsICdzbWFsbCcpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy55YXhpc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwieWF4aXNcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwwKWApXHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0geWcuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyg4KS50aWNrU2l6ZSgtKHN2Z1dpZHRoKSkpO1xyXG4gICAgICAgIHlnLmFwcGVuZCgndGV4dCcpLnRleHQoJ1BlciBVbml0IFZvbHRhZ2UnKS5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MCAwLDApJykuYXR0cigneCcsIC0oc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgLyAyICsgbWFyZ2luLnRvcCkuYXR0cigneScsIC1tYXJnaW4ubGVmdCAqIDMgLyA0KS5hdHRyKCdmaWxsJywgJ2JsYWNrJykuc3R5bGUoJ2ZvbnQtc2l6ZScsICdzbWFsbCcpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdsaW5lJykuc3R5bGUoXCJzdHJva2VcIiwgXCJsaWdodGdyZXlcIikuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjgpLnN0eWxlKFwic2hhcGUtcmVuZGVyaW5nXCIsIFwiY3Jpc3BFZGdlc1wiKS5zdHlsZShcInotaW5kZXhcIiwgXCIwXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmVGdW5jID0gZDMubGluZTxQb2ludD4oKS54KHhkID0+IHgoeGQuRHVyYXRpb24pKS55KHlkID0+IHkoeWQuTWFnbml0dWRlKSk7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBzY2F0dGVyLnNlbGVjdEFsbCgncGF0aCcpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5DdXJ2ZV0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JlZCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAgICAgICAuYXR0cignZCcsIChkKSA9PiBsaW5lRnVuYyhkKSk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5DdXJ2ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzY2F0dGVyLnNlbGVjdEFsbCgnZy5saW5lJylcclxuICAgICAgICAgICAgICAgIC5kYXRhKFtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAsIER1cmF0aW9uOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAsIER1cmF0aW9uOiAwLjE1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAuNDUsIER1cmF0aW9uOiAwLjE1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAuNDUsIER1cmF0aW9uOiAwLjMgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMC42NSwgRHVyYXRpb246IDAuMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjY1LCBEdXJhdGlvbjogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjc1LCBEdXJhdGlvbjogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjc1LCBEdXJhdGlvbjogMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjkwLCBEdXJhdGlvbjogMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjkwLCBEdXJhdGlvbjogNCB9XHJcbiAgICAgICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMiwgRHVyYXRpb246IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMS4yLCBEdXJhdGlvbjogMC4yMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAxLjE3NSwgRHVyYXRpb246IDAuMjAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMS4xNzUsIER1cmF0aW9uOiAwLjUwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTUsIER1cmF0aW9uOiAwLjUwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTUsIER1cmF0aW9uOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTAsIER1cmF0aW9uOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTAsIER1cmF0aW9uOiA0IH1cclxuICAgICAgICAgICAgICAgICAgICBdXSlcclxuICAgICAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5lJylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmUnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZWQnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIChkKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVGdW5jKGQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaXJjbGVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cucG9pbnRzJylcclxuICAgICAgICAgICAgLmRhdGEoW3Byb3BzLlBvaW50c10pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxyXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsdWUnKVxyXG4gICAgICAgICAgICAuYXR0cignY3gnLCBkID0+IHgoZC5EdXJhdGlvbikpXHJcbiAgICAgICAgICAgIC5hdHRyKCdjeScsIGQgPT4geShkLk1hZ25pdHVkZSkpO1xyXG5cclxuICAgIH0sIFtwcm9wcy5Qb2ludHMsIHByb3BzLkN1cnZlXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIEdldFBhdGgoZGF0YTogUG9pbnRbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gZDMubGluZTxQb2ludD4oKS54KGQgPT4geChkLkR1cmF0aW9uKSkueShkID0+IHkoZC5NYWduaXR1ZGUpKTtcclxuICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZER1ckNpcmNsZXMoZGF0YTogUG9pbnRbXSkge1xyXG4gICAgICAgIGxldCBjaXJjbGVzID0gZGF0YS5tYXAoKHBvaW50LCBpbmRleCkgPT4gPGNpcmNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkb3RcIiByPXszfSBjeD17eChwb2ludC5EdXJhdGlvbil9IGN5PXt5KHBvaW50Lk1hZ25pdHVkZSl9IGZpbGw9J2JsdWUnIC8+KTtcclxuICAgICAgICByZXR1cm4gY2lyY2xlcztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtjaGFydH0gc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCB9fT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBRSUNoYXJ0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFRyZW5EQVAudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBmcm9tICcuLi9PcGVuU0VFL0V2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgZnJvbSAnLi4vT3BlblNFRS9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFNlYXJjaFRyZW5EQVAocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IFRvcDogMCwgUmlnaHQ6IDIwLCBCb3R0b206IDAsIExlZnQ6IDM1IH07XHJcbiAgICAvL2NvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIC8vY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20gLSA2NTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+PGEgaHJlZj17aG9tZVBhdGggKyAnVHJlbkRBUD9ldmVudGlkPScgKyBwcm9wcy5FdmVudElEfSB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IFRyZW5kaW5nIERhdGE8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCwgcGFkZGluZzowIH19PlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdWb2x0YWdlJyBEYXRhVHlwZT0nVHJlbmRpbmcnIE1hcmdpbj17bWFyZ2lufSBXaWR0aD17cHJvcHMuV2lkdGggLSAxMH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLzN9IC8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNZWFzdXJlbWVudFR5cGU9J0N1cnJlbnQnIERhdGFUeXBlPSdUcmVuZGluZycgTWFyZ2luPXttYXJnaW59V2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17cHJvcHMuSGVpZ2h0IC8gM30gLz5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17NDB9IERhdGFUeXBlPSdUcmVuZGluZycvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFeHBvcnRDU1YudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMDEvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeHBvcnRUb0NzdjxUPihkYXRhOiBUW10sIGZpbGVuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICB2YXIgcm93cyA9IFtPYmplY3Qua2V5cyhkYXRhWzBdKV07XHJcbiAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHJvd3MucHVzaChPYmplY3Qua2V5cyh2YWx1ZSkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV0gfSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHByb2Nlc3NSb3cgPSBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgdmFyIGZpbmFsVmFsID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGlubmVyVmFsdWUgPSByb3dbal0gPT09IG51bGwgPyAnJyA6IHJvd1tqXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAocm93W2pdIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5uZXJWYWx1ZSA9IHJvd1tqXS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5uZXJWYWx1ZS5yZXBsYWNlKC9cIi9nLCAnXCJcIicpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnNlYXJjaCgvKFwifCx8XFxuKS9nKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1wiJyArIHJlc3VsdCArICdcIic7XHJcbiAgICAgICAgICAgIGlmIChqID4gMClcclxuICAgICAgICAgICAgICAgIGZpbmFsVmFsICs9ICcsJztcclxuICAgICAgICAgICAgZmluYWxWYWwgKz0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmluYWxWYWwgKyAnXFxuJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNzdkZpbGUgPSAnJztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNzdkZpbGUgKz0gcHJvY2Vzc1Jvdyhyb3dzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3ZGaWxlXSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xyXG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFIDEwK1xyXG4gICAgICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7IC8vIGZlYXR1cmUgZGV0ZWN0aW9uXHJcbiAgICAgICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE1hZ0R1ckNoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8yMy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpUG9pbnQge1xyXG4gICAgRXZlbnRJRDogbnVtYmVyLFxyXG4gICAgTWFnbml0dWRlOiBudW1iZXIsXHJcbiAgICBEdXJhdGlvbjogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBNYWdEdXJDdXJ2ZSB7XHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBhdGg6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgaUN1cnZlIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFhIaWdoOiBudW1iZXIsXHJcbiAgICBYTG93OiBudW1iZXIsXHJcbiAgICBZTG93OiBudW1iZXIsXHJcbiAgICBZSGlnaDogbnVtYmVyLFxyXG4gICAgUGVyVW5pdE1hZ25pdHVkZTogbnVtYmVyLFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgTWFnRHVyQ2hhcnQgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsIFBvaW50czogaVBvaW50W10sIE9uU2VsZWN0OiAoZXZ0OiBhbnksIHBvaW50OiBpUG9pbnQpID0+IHZvaWQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcbiAgICBjb25zdCBjaGFydCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFttYWdEdXJDdXJ2ZURhdGEsIHNldE1hZ0R1ckN1cnZlRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxpQ3VydmVbXT4oW10pO1xyXG4gICAgY29uc3QgW2N1cnZlLCBzZXRDdXJ2ZV0gPSBSZWFjdC51c2VTdGF0ZTwnSVRJQycgfCAnU0VNSScgfCAnSSAmIElJJyB8ICdJSUknIHwgJ05FUkMnPignSVRJQycpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW0dldE1hZ0R1ckN1cnZlcygpXSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVEYXRhKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKGRhdGFbMF0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZShtYWdEdXJDdXJ2ZURhdGEpO1xyXG4gICAgfSwgW2N1cnZlLCBwcm9wcy5Qb2ludHNdKVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1hZ0R1ckN1cnZlcygpOiBQcm9taXNlPGlDdXJ2ZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWFnRHVyQ3VydmVzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKGQgPT4gcmVzKGQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRab29tKGV2dCkge1xyXG4gICAgICAgIEluaXRpYWxpemUobWFnRHVyQ3VydmVEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBJbml0aWFsaXplKGN1cnZlczogaUN1cnZlW10pIHtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAyMCwgYm90dG9tOiA2MCwgbGVmdDogNDAgfTtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcbiAgICAgICAgbGV0IGRhdGEgPSBfLmdyb3VwQnkoY3VydmVzLmZpbHRlcihkID0+IGQuTmFtZS5pbmNsdWRlcyhjdXJ2ZSkpLCAnTmFtZScpO1xyXG5cclxuICAgICAgICBjb25zdCBYSGlnaCA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLlhIaWdoKSA/PyBbMTAwXSldWzBdO1xyXG4gICAgICAgIGNvbnN0IFhMb3cgPSBbLi4ubmV3IFNldChkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXT8ubWFwKGQgPT4gZC5YTG93KSA/PyBbMC4wMDAwMDFdKV1bMF07XHJcbiAgICAgICAgY29uc3QgWUhpZ2ggPSBbLi4ubmV3IFNldChkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXT8ubWFwKGQgPT4gZC5ZSGlnaCkgPz8gWzVdKV1bMF07XHJcbiAgICAgICAgY29uc3QgWUxvdyA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLllMb3cpID8/IFswXSldWzBdO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QoY2hhcnQuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoY2hhcnQuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJykuYXR0cignd2lkdGgnLCBwcm9wcy5XaWR0aCkuYXR0cignaGVpZ2h0JywgcHJvcHMuSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGNsaXAgPSBzdmcuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJzdmc6Y2xpcFBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImNsaXBcIilcclxuICAgICAgICAgICAgLmFwcGVuZChcInN2ZzpyZWN0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHN2Z0hlaWdodCAtIG1hcmdpbi50b3ApXHJcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBtYXJnaW4ubGVmdClcclxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG1hcmdpbi50b3ApO1xyXG5cclxuICAgICAgICBsZXQgc2NhdHRlciA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjY2xpcClcIilcclxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2NoYXJ0ZGF0YScpO1xyXG5cclxuICAgICAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtZTG93LCBZSGlnaF0pO1xyXG4gICAgICAgIGxldCB4ID0gZDMuc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbWExvdywgWEhpZ2hdKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcueGF4aXNcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcInhheGlzXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAocHJvcHMuSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSAtIG1hcmdpbi50b3ApICsgXCIpXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHhnLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrU2l6ZSgtKHN2Z0hlaWdodCAtIG1hcmdpbi50b3ApKS50aWNrRm9ybWF0KCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpID09PSBNYXRoLmZsb29yKE1hdGgubG9nMTAodmFsdWUgYXMgbnVtYmVyKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KFwiLjBzXCIpKHZhbHVlKVxyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAnJztcclxuICAgICAgICB9KSlcclxuICAgICAgICB4Zy5hcHBlbmQoJ3RleHQnKS50ZXh0KCdEdXJhdGlvbihzKScpLmF0dHIoJ3gnLCAoc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHQpIC8gMiArIG1hcmdpbi5sZWZ0KS5hdHRyKCd5JywgbWFyZ2luLmJvdHRvbSAvIDIpLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKS5zdHlsZSgnZm9udC1zaXplJywgJ3NtYWxsJyk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLnlheGlzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHlnID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJ5YXhpc1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LDApYClcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSB5Zy5jYWxsKGQzLmF4aXNMZWZ0KHkpLnRpY2tzKDgpLnRpY2tTaXplKC0oc3ZnV2lkdGgpKSk7XHJcbiAgICAgICAgeWcuYXBwZW5kKCd0ZXh0JykudGV4dCgnUGVyIFVuaXQgVm9sdGFnZScpLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTkwIDAsMCknKS5hdHRyKCd4JywgLShzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSAvIDIgKyBtYXJnaW4udG9wKS5hdHRyKCd5JywgLW1hcmdpbi5sZWZ0ICogMyAvIDQpLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKS5zdHlsZSgnZm9udC1zaXplJywgJ3NtYWxsJyk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2xpbmUnKS5zdHlsZShcInN0cm9rZVwiLCBcImxpZ2h0Z3JleVwiKS5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDAuOCkuc3R5bGUoXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJjcmlzcEVkZ2VzXCIpLnN0eWxlKFwiei1pbmRleFwiLCBcIjBcIilcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGQzLmxpbmU8aUN1cnZlPigpLngoeGQgPT4geCh4ZC5EdXJhdGlvblNlY29uZHMpKS55KHlkID0+IHkoeWQuUGVyVW5pdE1hZ25pdHVkZSkpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cubGluZXMnKVxyXG4gICAgICAgICAgICAuZGF0YShbZGF0YV0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGluZXMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgICAgICAgICAgLmRhdGEoZCA9PiBPYmplY3Qua2V5cyhkKSBhcyBzdHJpbmdbXSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdkJywgKGQpID0+IGxpbmVGdW5jKGRhdGFbZF0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHNjYXR0ZXIuc2VsZWN0QWxsKCdnLnBvaW50cycpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5Qb2ludHNdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncG9pbnRzJylcclxuICAgICAgICAgICAgLnNlbGVjdEFsbCgnY2lyY2xlJylcclxuICAgICAgICAgICAgLmRhdGEoZCA9PiBkKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgICAgICAuYXR0cigncicsIDUpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdibHVlJylcclxuICAgICAgICAgICAgLmF0dHIoJ2N4JywgZCA9PiB4KGQuRHVyYXRpb24pKVxyXG4gICAgICAgICAgICAuYXR0cignY3knLCBkID0+IHkoZC5NYWduaXR1ZGUpKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZCA9PiBwcm9wcy5PblNlbGVjdChkMy5ldmVudCwgZCkpO1xyXG5cclxuICAgICAgICBsZXQgem9vbSA9IGQzLnpvb20oKS5vbignem9vbScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGQzLmV2ZW50LnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRYID0gdHJhbnNmb3JtLnJlc2NhbGVYKHgpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFkgPSB0cmFuc2Zvcm0ucmVzY2FsZVkoeSk7XHJcbiAgICAgICAgICAgIHhBeGlzLmNhbGwoZDMuYXhpc0JvdHRvbSh1cGRhdGVkWCkudGlja1NpemUoLShzdmdIZWlnaHQgLSBtYXJnaW4udG9wKSkudGlja0Zvcm1hdCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmxvZzEwKHZhbHVlIGFzIG51bWJlcikgPT09IE1hdGguZmxvb3IoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KFwiLjBzXCIpKHZhbHVlIGFzIG51bWJlcilcclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHlBeGlzLmNhbGwoZDMuYXhpc0xlZnQodXBkYXRlZFkpLnRpY2tTaXplKC0oc3ZnV2lkdGgpKSk7XHJcbiAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2xpbmUnKS5zdHlsZShcInN0cm9rZVwiLCBcImxpZ2h0Z3JleVwiKS5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDAuOCkuc3R5bGUoXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJjcmlzcEVkZ2VzXCIpLnN0eWxlKFwiei1pbmRleFwiLCBcIjBcIilcclxuXHJcbiAgICAgICAgICAgIGNpcmNsZXMuYXR0cignY3gnLCBkID0+IHVwZGF0ZWRYKGQuRHVyYXRpb24pKS5hdHRyKCdjeScsIGQgPT4gdXBkYXRlZFkoZC5NYWduaXR1ZGUpKTtcclxuICAgICAgICAgICAgY29uc3QgdXBMaW5lRnVuYyA9IGQzLmxpbmU8aUN1cnZlPigpLngoeGQgPT4gdXBkYXRlZFgoeGQuRHVyYXRpb25TZWNvbmRzKSkueSh5ZCA9PiB1cGRhdGVkWSh5ZC5QZXJVbml0TWFnbml0dWRlKSlcclxuICAgICAgICAgICAgbGluZXMuYXR0cignZCcsIGQgPT4gdXBMaW5lRnVuYyhkYXRhW2RdKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3ZnLmNhbGwoem9vbSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZCgndXNlJykuYXR0cigneGxpbms6aHJlZicsICcjY2hhcnRkYXRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17Y2hhcnR9IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCB3aWR0aDogcHJvcHMuV2lkdGggfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e2N1cnZlfSBjaGVja2VkPXtjdXJ2ZSA9PT0gJ0lUSUMnfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q3VydmUoJ0lUSUMnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPklUSUM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtjdXJ2ZX0gY2hlY2tlZD17Y3VydmUgPT09ICdTRU1JJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdTRU1JJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiA+U0VNSSBGNDc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtjdXJ2ZX0gY2hlY2tlZD17Y3VydmUgPT09ICdJICYgSUknfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q3VydmUoJ0kgJiBJSScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+SUVFRSAxNjY4IFJlY29tbWVuZGVkIFR5cGUgSSAmIElJPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnSUlJJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdJSUknKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPklFRUUgMTY2OCBSZWNvbW1lbmRlZCBUeXBlIElJSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e2N1cnZlfSBjaGVja2VkPXtjdXJ2ZSA9PT0gJ05FUkMnfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q3VydmUoJ05FUkMnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPk5FUkMgUFJDLTAyNC0yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiA5NSwgbGVmdDogc3ZnV2lkdGggLSAgbWFyZ2luLnJpZ2h0IH19IG9uQ2xpY2s9e3Jlc2V0Wm9vbX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFnRHVyQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==