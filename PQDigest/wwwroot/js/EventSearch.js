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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Return #"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: returnLimit, className: "form-control", onChange: function (e) { return setReturnLimit(parseInt(e.target.value)); } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "100"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "250"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "500"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1000"))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Meters"),
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Type"),
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Start Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: startDate, type: "date", onChange: function (e) { return setStartDate(e.target.value); } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "End Date"),
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
                                { key: 'StartTime', label: 'Date', headerStyle: { width: '25%' }, rowStyle: { width: '25%' }, content: function (item, key, style) { return moment(item[key]).format('MM/DD/YYYY HH:mm:ss'); } },
                                //{ key: 'StartTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => moment(item[key]).format('HH:mm:ss') },
                                { key: 'MeterName', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'EventType', label: 'Type', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'PerUnitMagnitude', label: 'Mag (pu)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key].toFixed(2); } },
                                { key: 'DurationSeconds', label: 'Dur (s)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key].toFixed(2); } },
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'WaveformViewer?EventID=' + props.EventID, target: "_blank" }, "View in OpenSEE")),
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: props.Width, height: props.Height, style: { fill: 'none', stroke: 'black', strokeWidth: '1px', fontFamily: 'sans-serif', fontSize: 'small' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M " + props.Margin.Left + " " + props.Margin.Top + " H " + (props.Width - props.Margin.Right) + " V " + props.Height + " H " + props.Margin.Left + " V " + props.Margin.Top, style: { shapeRendering: 'crispEdges' } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { transform: "rotate(-90 0,0)", y: props.Margin.Left - 15, x: -(props.Height + 35) / 2 }, props.MeasurementType == "Voltage" ? "Voltage" : "Amps"),
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M 0,6 V -6", style: { stroke: 'black' }, strokeWidth: 0.5 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: "20", textAnchor: 'middle' }, moment('1970-01-01T00:00:00').add(i, 'milliseconds').format(props.DataType == 'Time' ? 'ss.SSS' : 'HH:ss'))));
        }
        setXAxisTicks(ticks);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: svgHeight /*, margin: '0x', padding: '0px'*/ }, hidden: hidden },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: svgWidth, height: svgHeight, style: { fill: 'none', stroke: 'black', strokeWidth: '1px', fontFamily: 'sans-serif', fontSize: 'small' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M " + props.Margin.Left + " " + (props.Margin.Top + 1) + " H " + (props.Width - props.Margin.Right), style: { shapeRendering: 'crispEdges' } }),
            xAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { x: svgWidth / 2, y: svgHeight - 10 }, "Time"))));
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
        var handle1 = GetComponents();
        handle1.done(function (data) {
            setComponents(data);
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
        if (component == null)
            return;
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            "PQI - Ride-through Curves",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: component.TestCurveID, className: 'form-control', style: { width: 200, position: 'absolute', right: 6, top: 4 }, onChange: function (evt) { return setComponent(components.find(function (x) { return x.TestCurveID == evt.target.value; })); } }, components.map(function (comp, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { key: index, value: comp.TestCurveID }, comp.Title); }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQIChart__WEBPACK_IMPORTED_MODULE_1__["default"], { Height: props.Height - 50, Width: props.Width, EventID: props.EventID, Points: points, Curve: curve }))));
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M 0,6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: "20", textAnchor: 'middle' }, i)));
        }
        return ticks;
    }
    function BuildYAxis() {
        var yticks = [];
        for (var i = y.domain()[0]; i <= y.domain()[1]; i = 0.5 + i) {
            yticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", transform: "translate(" + margin.left + "," + y(i) + ")", style: { opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M -6,0 H " + svgWidth, strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { x: "-15", dy: "0.32em", textAnchor: 'middle' }, i.toFixed(1))));
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height, width: props.Width } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { id: "PQIChart", width: props.Width, height: props.Height, style: { fill: 'none', stroke: 'black', strokeWidth: '1px', shapeRendering: 'crispEdges', fontFamily: 'sans-serif', fontSize: 'small' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: GetPath(props.Curve), stroke: 'red' }),
                BuildMadDurCircles(props.Points)),
            BuildXAxis(),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { x: svgWidth / 2, y: svgHeight + margin.top + 20 }, "Duration (s)"),
            BuildYAxis(),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { transform: "rotate(-90 0,0)", y: margin.left - 35, x: -svgHeight / 2 - margin.bottom }, "Per Unit Voltage"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }))));
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'TrenDAP?eventid=' + props.EventID, target: "_blank" }, "View in TrenDAP")),
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M 0,6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: "20", textAnchor: 'middle' }, xAxisText(i)),
                (ldDiff < 5 ?
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, ([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(function (num) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { key: num, d: "M " + (x(num * i) - x(i)) + ",6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }); }))
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M -6,0 H " + svgWidth, strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { x: "-15", dy: "0.32em", textAnchor: 'middle' }, i.toFixed(1))));
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { id: "magDurChart", width: props.Width, height: props.Height, style: { fill: 'none', stroke: 'black', strokeWidth: '1px', shapeRendering: 'crispEdges', fontFamily: 'sans-serif', fontSize: 'small' }, onWheel: handleZoom, onMouseDown: handleDrag, onMouseUp: stopDrag },
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { x: svgWidth / 2, y: svgHeight + margin.top + 20 }, "Duration (s)"),
            yAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { transform: "rotate(-90 0,0)", y: margin.left - 25, x: -svgHeight / 2 - margin.bottom }, "Per Unit Voltage"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }))));
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: multiSelect, style: { position: 'relative', display: 'inline-block' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { border: '1px solid #ced4da', padding: '.375rem .75rem', fontSize: '1rem', borderRadius: '.25rem' }, className: "btn form-control dropdown-toggle", onClick: HandleShow },
            props.Options.filter(function (x) { return x.Selected; }).length != props.Options.length ? props.Options.filter(function (x) { return x.Selected; }).length : 'All ',
            " Selected"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { maxHeight: window.innerHeight * .75, overflowY: 'auto', padding: '10 5', display: show ? 'block' : 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 401 } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9PcGVuU0VFL0V2ZW50U2VhcmNoT3BlblNFRS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvRXZlbnRTZWFyY2hQUUkudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvUFFJQ2hhcnQudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9UcmVuREFQL0V2ZW50U2VhcmNoVHJlbkRBUC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V4cG9ydENTVi50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L01hZ0R1ckNoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTXVsdGlTZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsMEJBQTBCO0FBQzFCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURB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V0FBSSxFQUFKLENBQUksR0FBSSxDQUFLO3dCQUFBLDZFQUFZLENBQUs7b0JBQzFKLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSywwRUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFDLEdBQUcsSUFBSyxZQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXhCLENBQXdCO3dCQUFFOzRCQUFJLHNFQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGNBQU0sV0FBSSxFQUFKLENBQUksR0FBSSxDQUFLO3dCQUFBLHVFQUFLLENBQUMsQ0FBQyxJQUFJLENBQU0sQ0FBSyxFQUEzSixDQUEySixDQUFDLENBQ3JMLENBRUosQ0FDTixDQUNKLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFDYywwRUFBVyxFQUFDIiwiZmlsZSI6IkV2ZW50U2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hUYWJsZSBmcm9tICcuLi9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFRhYmxlJztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlldyBmcm9tICcuLi9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hNYWdEdXIgZnJvbSAnLi4vRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2hNYWdEdXInO1xyXG5pbXBvcnQgeyBQUURpZ2VzdCwgT3BlblhEQSB9IGZyb20gJy4uL2dsb2JhbCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCJcclxuaW1wb3J0IHsgRXhwb3J0VG9Dc3YgfSBmcm9tICcuLi9FeHBvcnRDU1YnO1xyXG5pbXBvcnQgTWFnRHVyQ2hhcnQgZnJvbSAnLi4vTWFnRHVyQ2hhcnQnO1xyXG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vTXVsdGlTZWxlY3QnO1xyXG5cclxuY29uc3QgRXZlbnRTZWFyY2ggPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBxcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xyXG4gICAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLkV2ZW50VHlwZVtdPihbXSlcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLnN0YXJ0RGF0ZSA9PSB1bmRlZmluZWQgPyBtb21lbnQoKS5zdWJ0cmFjdCgzMCwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIDogcXMuc3RhcnREYXRlKVxyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihxcy5lbmREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIikgOiBxcy5lbmREYXRlKVxyXG4gICAgY29uc3QgW21ldGVycywgc2V0TWV0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuTWV0ZXJbXT4oW10pO1xyXG4gICAgY29uc3QgW3JldHVybkxpbWl0LCBzZXRSZXR1cm5MaW1pdF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLnJldHVybkxpbWl0ID09IHVuZGVmaW5lZCA/IDEwMDogcGFyc2VJbnQocXMucmV0dXJuTGltaXQgYXMgc3RyaW5nKSk7XHJcbiAgICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5FdmVudFNlYXJjaFtdPihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgT3BlblhEQS5FdmVudFNlYXJjaD4oJ1N0YXJ0VGltZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW2V2ZW50SUQsIHNldEV2ZW50SURdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy5ldmVudElEID09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChxcy5ldmVudElEIGFzIHN0cmluZykpO1xyXG4gICAgY29uc3QgW3Nob3dFdmVudExpc3QsIHNldFNob3dFdmVudExpc3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldFR5cGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBPcGVuWERBLkV2ZW50VHlwZVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiNjRzdHJpbmcgPSAocXMudHlwZXMgPT0gdW5kZWZpbmVkID8gJyc6IHFzLnR5cGVzKVxyXG4gICAgICAgICAgICBsZXQgaWRzID0gYXRvYihiNjRzdHJpbmcgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcChhID0+IHBhcnNlSW50KGEpKVxyXG4gICAgICAgICAgICBpZihxcy50eXBlcyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSB0cnVlKVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSBpZHMuaW5kZXhPZih2YWx1ZS5JRCkgPj0gMClcclxuXHJcbiAgICAgICAgICAgIHNldFR5cGVzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldE1ldGVycygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YTogT3BlblhEQS5NZXRlcltdKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiNjRzdHJpbmcgPSAocXMubWV0ZXJzID09IHVuZGVmaW5lZCA/ICcnIDogcXMubWV0ZXJzKVxyXG4gICAgICAgICAgICBsZXQgaWRzID0gYXRvYihiNjRzdHJpbmcgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcChhID0+IHBhcnNlSW50KGEpKVxyXG4gICAgICAgICAgICBpZiAocXMubWV0ZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IHRydWUpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IGlkcy5pbmRleE9mKHZhbHVlLklEKSA+PSAwKVxyXG5cclxuICAgICAgICAgICAgc2V0TWV0ZXJzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChtZXRlcnMubGVuZ3RoID09IDAgfHwgdHlwZXMubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ0V2ZW50U2VhcmNoJywgc2VhcmNoOiBgP2V2ZW50SUQ9JHtldmVudElEfSZzdGFydERhdGU9JHtzdGFydERhdGV9JmVuZERhdGU9JHtlbmREYXRlfSZyZXR1cm5MaW1pdD0ke3JldHVybkxpbWl0fSZ0eXBlcz0ke2J0b2EodHlwZXMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRCkudG9TdHJpbmcoKSl9Jm1ldGVycz0ke2J0b2EobWV0ZXJzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpLnRvU3RyaW5nKCkpfWB9KVxyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldEV2ZW50U2VhcmNoKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBPcGVuWERBLkV2ZW50U2VhcmNoW10pID0+IHtcclxuICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LCBbdHlwZXMsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbWV0ZXJzLCByZXR1cm5MaW1pdCwgZXZlbnRJRF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldFR5cGVzKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLkV2ZW50VHlwZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnRUeXBlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuTWV0ZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL01ldGVyYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRFdmVudFNlYXJjaCgpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5FdmVudFNlYXJjaFtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50U2VhcmNoYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBTdGFydERhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIEVuZERhdGU6IGVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICBDb3VudDogcmV0dXJuTGltaXQsXHJcbiAgICAgICAgICAgICAgICBNZXRlcnM6IG1ldGVycy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKSxcclxuICAgICAgICAgICAgICAgIFR5cGVzOiB0eXBlcy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiA3NSwgbWFyZ2luOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiA3NX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3tib3JkZXI6ICcwcHgnfX0+UmV0dXJuICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cmV0dXJuTGltaXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtlID0+IHNldFJldHVybkxpbWl0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjI1MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjUwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5NZXRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0IE9wdGlvbnM9e21ldGVycy5tYXAodCA9PiBPYmplY3QuY3JlYXRlKHsgVGV4dDogdC5OYW1lLCBWYWx1ZTogdC5JRCwgU2VsZWN0ZWQ6IHQuU2VsZWN0ZWQgfSkpfSBPbkNoYW5nZT17KGV2dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3TWV0ZXJzID0gXy5jbG9uZURlZXAobWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIChpbmRleCwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNZXRlcnMuZmluZChtZXRlciA9PiBtZXRlci5JRCA9PSBvcHRpb24uVmFsdWUpLlNlbGVjdGVkID0gIW9wdGlvbi5TZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJzKG5ld01ldGVycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PlR5cGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0IE9wdGlvbnM9e3R5cGVzLm1hcCh0ID0+IE9iamVjdC5jcmVhdGUoeyBUZXh0OiB0Lk5hbWUsIFZhbHVlOiB0LklELCBTZWxlY3RlZDogdC5TZWxlY3RlZCB9KSl9IE9uQ2hhbmdlPXsoZXZ0LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUeXBlcyA9IF8uY2xvbmVEZWVwKHR5cGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIChpbmRleCwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUeXBlcy5maW5kKHR5cGUgPT4gdHlwZS5JRCA9PSBvcHRpb24uVmFsdWUpLlNlbGVjdGVkID0gIW9wdGlvbi5TZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZXMobmV3VHlwZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5TdGFydCBEYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c3RhcnREYXRlfSB0eXBlPVwiZGF0ZVwiIG9uQ2hhbmdlPXtlID0+IHNldFN0YXJ0RGF0ZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5FbmQgRGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VuZERhdGV9IHR5cGU9XCJkYXRlXCIgb25DaGFuZ2U9e2UgPT4gc2V0RW5kRGF0ZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gODBweClcIiwgbWFyZ2luOiAnNXB4IDVweCA1cHggNXB4ICcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4IDBweCAwcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAyfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c2hvd0V2ZW50TGlzdC50b1N0cmluZygpfSBvbkNoYW5nZT17ZXZ0ID0+IHNldFNob3dFdmVudExpc3QoZXZ0LnRhcmdldC52YWx1ZSA9PSAndHJ1ZScpfSBzdHlsZT17e3dpZHRoOiAxMTUsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiAxMTV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSd0cnVlJz5MaXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZmFsc2UnPk1hZy9EdXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiA1LCByaWdodDogNSB9fSBvbkNsaWNrPXsoKSA9PiBFeHBvcnRUb0NzdihldmVudHMsICdFdmVudFNlYXJjaC5jc3YnKX0+RXhwb3J0IENTVjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjc1LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFdmVudExpc3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxPcGVuWERBLkV2ZW50U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1N0YXJ0VGltZScsIGxhYmVsOiAnRGF0ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzI1JScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IG1vbWVudChpdGVtW2tleV0pLmZvcm1hdCgnTU0vREQvWVlZWSBISDptbTpzcycpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiAnU3RhcnRUaW1lJywgbGFiZWw6ICdUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBtb21lbnQoaXRlbVtrZXldKS5mb3JtYXQoJ0hIOm1tOnNzJykgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWV0ZXJOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0V2ZW50VHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdQZXJVbml0TWFnbml0dWRlJywgbGFiZWw6ICdNYWcgKHB1KScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtW2tleV0gYXMgbnVtYmVyKS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0R1cmF0aW9uU2Vjb25kcycsIGxhYmVsOiAnRHVyIChzKScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtW2tleV0gYXMgbnVtYmVyKS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShldmVudHMsIFtzb3J0RmllbGRdLCBbKCFhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFdmVudHMob3JkZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShldmVudHMsIFtkLmNvbF0sIFsoYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRzKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyBzZXRFdmVudElEKGRhdGEucm93LklEKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT0gZXZlbnRJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hZ0R1ckNoYXJ0IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCkgLSAyNzV9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMH0gUG9pbnRzPXtldmVudHMubWFwKGEgPT4gT2JqZWN0LmNyZWF0ZSh7IEV2ZW50SUQ6IGEuSUQsIE1hZ25pdHVkZTogYS5QZXJVbml0TWFnbml0dWRlLCBEdXJhdGlvbjogYS5EdXJhdGlvblNlY29uZHMgfSkpfSBPblNlbGVjdD17KGV2dCwgcG9pbnQpID0+IHNldEV2ZW50SUQocG9pbnQuRXZlbnRJRCl9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMHB4IDBweCAzcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkV2ZW50IFByZXZpZXc8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjI2LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlldyBFdmVudElEPXtldmVudElEfSBIZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAtIDIyNn0gV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VhcmNoOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzI5LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hPcGVuU0VFIGZyb20gJy4vT3BlblNFRS9FdmVudFNlYXJjaE9wZW5TRUUnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hUcmVuREFQIGZyb20gJy4vVHJlbkRBUC9FdmVudFNlYXJjaFRyZW5EQVAnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQUUkgZnJvbSAnLi9QUUkvRXZlbnRTZWFyY2hQUUknO1xyXG5cclxuY29uc3QgRXZlbnRTZWFyY2hQcmV2aWV3ID0gKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbnRyb2wsIHNldENvbnRyb2xdID0gUmVhY3QudXNlU3RhdGUgPCAnRGF0YScgfCAnUFFJJz4oJ0RhdGEnKTtcclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICB7cHJvcHMuRXZlbnRJRCA8IDEgPyA8c3Bhbj5ObyBFdmVudCBTZWxlY3RlZCAuLi4gPC9zcGFuPiA6XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtjb250cm9sfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29udHJvbChldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7IHdpZHRoOiAxMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDEwMCwgcmlnaHQ6IDYsIHRvcDogNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXRhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UFFJPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIHsoY29udHJvbCA9PSAnRGF0YScgPyBcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hPcGVuU0VFIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLzMgLSAxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hUcmVuREFQIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLyAzIC0gMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUFFJIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQvMyAtIDF9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICB7KGNvbnRyb2wgPT0gJ1BRSScgP1xyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFBRSSBFdmVudElEPXtwcm9wcy5FdmVudElEfSBXaWR0aD17cHJvcHMuV2lkdGh9IEhlaWdodD17cHJvcHMuSGVpZ2h0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICA8Lz4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaFByZXZpZXc7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoT3BlblNFRS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMDMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgZnJvbSAnLi9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzIGZyb20gJy4vRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hPcGVuU0VFKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgbWFyZ2luID0geyBUb3A6IDAsIFJpZ2h0OiAyMCwgQm90dG9tOiAwLCBMZWZ0OiAzNSB9O1xyXG4gICAgLy9jb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICAvL2NvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tIC0gNjU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPjxhIGhyZWY9eyBob21lUGF0aCArICdXYXZlZm9ybVZpZXdlcj9FdmVudElEPScgKyBwcm9wcy5FdmVudElEfSB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IGluIE9wZW5TRUU8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nVm9sdGFnZScgRGF0YVR5cGU9J1RpbWUnIE1hcmdpbj17bWFyZ2lufSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvIDN9IFdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfS8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNZWFzdXJlbWVudFR5cGU9J0N1cnJlbnQnIERhdGFUeXBlPSdUaW1lJyBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17cHJvcHMuSGVpZ2h0LzN9Lz5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17NDB9IERhdGFUeXBlPSdUaW1lJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzIwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgbGluZSwgZXh0ZW50IH0gZnJvbSAnZDMnO1xyXG5cclxuY29uc3QgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCA9IChwcm9wczogeyBFdmVudElEOiBudW1iZXIsIE1lYXN1cmVtZW50VHlwZTogJ0N1cnJlbnQnIHwgJ1ZvbHRhZ2UnIHwgJ1RyaXBDb2lsQ3VycmVudCcsIERhdGFUeXBlOiAnVGltZScgfCAnU3RhdGlzdGljJyB8ICdUcmVuZGluZycsIE1hcmdpbjogeyBMZWZ0OiBudW1iZXIsIFJpZ2h0OiBudW1iZXIsIFRvcDogbnVtYmVyLCBCb3R0b206IG51bWJlciB9LCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3BhdGhzLCBzZXRQYXRoc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBhdGhzKFtdKTtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50L0RhdGE/ZXZlbnRJZD0ke3Byb3BzLkV2ZW50SUR9YCArXHJcbiAgICAgICAgICAgICAgICBgJnBpeGVscz0ke3Byb3BzLldpZHRofWAgK1xyXG4gICAgICAgICAgICAgICAgYCZ0eXBlPSR7cHJvcHMuTWVhc3VyZW1lbnRUeXBlfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZkYXRhVHlwZT0ke3Byb3BzLkRhdGFUeXBlfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IERyYXdDaGFydChkYXRhKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YSkge1xyXG5cclxuICAgICAgICBsZXQgeCA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbcHJvcHMuTWFyZ2luLkxlZnQsIHByb3BzLldpZHRoIC0gcHJvcHMuTWFyZ2luLlJpZ2h0XSk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3Byb3BzLkhlaWdodCAtIHByb3BzLk1hcmdpbi5Ub3AsIHByb3BzLk1hcmdpbi5Cb3R0b21dKTtcclxuXHJcbiAgICAgICAgbGV0IHlleHRlbnQgPSBbMCwgMF07XHJcbiAgICAgICAgbGV0IHhleHRlbnQgPSBbOTAwNzE5OTI1NDc0MDk5MSwgLTkwMDcxOTkyNTQ3NDA5OTBdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSwgaW5kZXgsIGtleXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ld3lleGVudCA9IGV4dGVudChkYXRhW2tleV0sIGQgPT4gZFsxXSk7XHJcbiAgICAgICAgICAgIGxldCBuZXd4ZXhlbnQgPSBleHRlbnQoZGF0YVtrZXldLCBkID0+IGRbMF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobmV3eWV4ZW50WzBdLnRvU3RyaW5nKCkpIDwgeWV4dGVudFswXSkgeWV4dGVudFswXSA9IHBhcnNlRmxvYXQobmV3eWV4ZW50WzBdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG5ld3lleGVudFsxXS50b1N0cmluZygpKSA+IHlleHRlbnRbMV0pIHlleHRlbnRbMV0gPSBwYXJzZUZsb2F0KG5ld3lleGVudFsxXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChuZXd4ZXhlbnRbMF0udG9TdHJpbmcoKSkgPCB4ZXh0ZW50WzBdKSB4ZXh0ZW50WzBdID0gcGFyc2VGbG9hdChuZXd4ZXhlbnRbMF0udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobmV3eGV4ZW50WzFdLnRvU3RyaW5nKCkpID4geGV4dGVudFsxXSkgeGV4dGVudFsxXSA9IHBhcnNlRmxvYXQobmV3eGV4ZW50WzFdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHlleHRlbnQgPSBbMS4yMCAqIHlleHRlbnRbMF0sIDEuMjAgKiB5ZXh0ZW50WzFdXVxyXG4gICAgICAgIHkuZG9tYWluKHlleHRlbnQpO1xyXG4gICAgICAgIHguZG9tYWluKHhleHRlbnQpO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPFtudW1iZXIsIG51bWJlcl0+KCkueChkID0+IHgoZFswXSkpLnkoZCA9PiB5KGRbMV0pKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1BhdGhzID0gW107XHJcbiAgICAgICAgJC5lYWNoKE9iamVjdC5rZXlzKGRhdGEpLCAoaW5kZXgsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBuZXdQYXRocy5wdXNoKDxwYXRoIGtleT17a2V5fSBmaWxsPSdub25lJyBzdHJva2VMaW5lam9pbj0ncm91bmQnIHN0cm9rZVdpZHRoPScxLjUnIHN0cm9rZT17Z2V0Q29sb3Ioa2V5KX0gZD17bGluZWZ1bmMoZGF0YVtrZXldKX0gLz4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFBhdGhzKG5ld1BhdGhzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWQScpID49IDApIHJldHVybiAnI0EzMDAwMCc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ1ZCJykgPj0gMCkgcmV0dXJuICcjMDAyOUEzJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVkMnKSA+PSAwKSByZXR1cm4gJyMwMDdBMjknO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWTicpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lBJykgPj0gMCkgcmV0dXJuICcjRkYwMDAwJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignSUInKSA+PSAwKSByZXR1cm4gJyMwMDY2Q0MnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJQycpID49IDApIHJldHVybiAnIzMzQ0MzMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lSJykgPj0gMCkgcmV0dXJuICcjYzNjM2MzJztcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1PbmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVR3byA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtVGhyZWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgIyR7KHJhbk51bU9uZS5sZW5ndGggPiAxID8gcmFuTnVtT25lIDogXCIwXCIgKyByYW5OdW1PbmUpfSR7KHJhbk51bVR3by5sZW5ndGggPiAxID8gcmFuTnVtVHdvIDogXCIwXCIgKyByYW5OdW1Ud28pfSR7KHJhbk51bVRocmVlLmxlbmd0aCA+IDEgPyByYW5OdW1UaHJlZSA6IFwiMFwiICsgcmFuTnVtVGhyZWUpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLyosIG1hcmdpbjogJzB4JywgcGFkZGluZzogJzBweCcqLyB9fT5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBzdHlsZT17eyBmaWxsOiAnbm9uZScsIHN0cm9rZTogJ2JsYWNrJywgc3Ryb2tlV2lkdGg6ICcxcHgnLCAgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBmb250U2l6ZTogJ3NtYWxsJ319PlxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IGJvcmRlcnMgKi99XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAke3Byb3BzLk1hcmdpbi5MZWZ0fSAke3Byb3BzLk1hcmdpbi5Ub3B9IEggJHtwcm9wcy5XaWR0aCAtIHByb3BzLk1hcmdpbi5SaWdodH0gViAke3Byb3BzLkhlaWdodH0gSCAke3Byb3BzLk1hcmdpbi5MZWZ0fSBWICR7cHJvcHMuTWFyZ2luLlRvcH1gfSBzdHlsZT17eyBzaGFwZVJlbmRlcmluZzogJ2NyaXNwRWRnZXMnfX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgMCwwKWB9IHk9e3Byb3BzLk1hcmdpbi5MZWZ0IC0gMTV9IHg9ey0ocHJvcHMuSGVpZ2h0ICsgMzUpIC8gMn0+e3Byb3BzLk1lYXN1cmVtZW50VHlwZSA9PSBcIlZvbHRhZ2VcIiA/IFwiVm9sdGFnZVwiIDogXCJBbXBzXCJ9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhdGhzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIHNlbGVjdCwgYXhpc0JvdHRvbSB9IGZyb20gJ2QzJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzID0gKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgTWFyZ2luOiB7IExlZnQ6IG51bWJlciwgUmlnaHQ6IG51bWJlciwgVG9wOiBudW1iZXIsIEJvdHRvbTogbnVtYmVyIH0sIFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyLCBEYXRhVHlwZTogJ1RyZW5kaW5nJyB8ICdUaW1lJyB9KSA9PiB7XHJcbiAgICAvL2NvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgLy9jb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodDtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGg7XHJcblxyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW3hBeGlzVGlja3MsIHNldFhBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50L0RhdGE/ZXZlbnRJZD0ke3Byb3BzLkV2ZW50SUR9YCArXHJcbiAgICAgICAgICAgICAgICBgJnBpeGVscz0ke3N2Z1dpZHRofWAgK1xyXG4gICAgICAgICAgICAgICAgYCZ0eXBlPVZvbHRhZ2VgICtcclxuICAgICAgICAgICAgICAgIGAmZGF0YVR5cGU9JHtwcm9wcy5EYXRhVHlwZX1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKGRhdGEgPT4gRHJhd0NoYXJ0KGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUaWNrRm9ybWF0dGVyKHZhbHVlLCBheGlzKSB7XHJcblxyXG4gICAgICAgIHZhciBmYWN0b3IgPSBheGlzLnRpY2tEZWNpbWFscyA/IE1hdGgucG93KDEwLCBheGlzLnRpY2tEZWNpbWFscykgOiAxO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBcIlwiICsgTWF0aC5yb3VuZCh2YWx1ZSAqIGZhY3RvcikgLyBmYWN0b3I7XHJcblxyXG4gICAgICAgIC8vIElmIHRpY2tEZWNpbWFscyB3YXMgc3BlY2lmaWVkLCBlbnN1cmUgdGhhdCB3ZSBoYXZlIGV4YWN0bHkgdGhhdFxyXG4gICAgICAgIC8vIG11Y2ggcHJlY2lzaW9uOyBvdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgdmFsdWUncyBvd24gcHJlY2lzaW9uLlxyXG5cclxuICAgICAgICBpZiAoYXhpcy50aWNrRGVjaW1hbHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbCA9IGZvcm1hdHRlZC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgICAgdmFyIHByZWNpc2lvbiA9IGRlY2ltYWwgPT0gLTEgPyAwIDogZm9ybWF0dGVkLmxlbmd0aCAtIGRlY2ltYWwgLSAxO1xyXG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uIDwgYXhpcy50aWNrRGVjaW1hbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocHJlY2lzaW9uID8gZm9ybWF0dGVkIDogZm9ybWF0dGVkICsgXCIuXCIpICsgKFwiXCIgKyBmYWN0b3IpLnN1YnN0cigxLCBheGlzLnRpY2tEZWNpbWFscyAtIHByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XHJcbiAgICB9O1xyXG4gICAgLy8gcm91bmQgdG8gbmVhcmJ5IGxvd2VyIG11bHRpcGxlIG9mIGJhc2VcclxuICAgIGZ1bmN0aW9uIGZsb29ySW5CYXNlKG4sIGJhc2UpIHtcclxuICAgICAgICByZXR1cm4gYmFzZSAqIE1hdGguZmxvb3IobiAvIGJhc2UpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KGRhdGEpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgc2V0SGlkZGVuKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhpZGRlbihmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCBzZXJpZXMgPSBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbMCwgc3ZnV2lkdGhdKS5kb21haW4oW3Nlcmllc1swXVswXSwgc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXVswXV0pO1xyXG5cclxuICAgICAgICBsZXQgdGlja3MgPSBbXTtcclxuICAgICAgICBsZXQgc3BhbiA9IHguZG9tYWluKClbMV0gLSB4LmRvbWFpbigpWzBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB4LmRvbWFpbigpWzBdICsgc3BhbiAvIDc7IGkgPCB4LmRvbWFpbigpWzFdOyBpICs9IHNwYW4vNykge1xyXG4gICAgICAgICAgICB0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eChpKX0sJHswfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNIDAsNiBWIC02YH0gc3R5bGU9e3sgc3Ryb2tlOiAnYmxhY2snIH19IHN0cm9rZVdpZHRoPXswLjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB5PVwiMjBcIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPnttb21lbnQoJzE5NzAtMDEtMDFUMDA6MDA6MDAnKS5hZGQoaSwgJ21pbGxpc2Vjb25kcycpLmZvcm1hdChwcm9wcy5EYXRhVHlwZSA9PSAnVGltZScgPyAnc3MuU1NTJyA6ICdISDpzcycpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFhBeGlzVGlja3ModGlja3MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzdmdIZWlnaHQgLyosIG1hcmdpbjogJzB4JywgcGFkZGluZzogJzBweCcqLyB9fSBoaWRkZW49e2hpZGRlbn0+XHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnLCBzdHJva2U6ICdibGFjaycsIHN0cm9rZVdpZHRoOiAnMXB4JywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBmb250U2l6ZTogJ3NtYWxsJ319PlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD17YE0gJHtwcm9wcy5NYXJnaW4uTGVmdH0gJHtwcm9wcy5NYXJnaW4uVG9wICsgMX0gSCAke3Byb3BzLldpZHRoIC0gcHJvcHMuTWFyZ2luLlJpZ2h0fWB9IHN0eWxlPXt7IHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcycgfX0gLz5cclxuICAgICAgICAgICAgICAgIHt4QXhpc1RpY2tzfVxyXG4gICAgICAgICAgICAgICAgPHRleHQgeD17c3ZnV2lkdGggLyAyfSB5PXtzdmdIZWlnaHQgLSAxMH0+VGltZTwvdGV4dD5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXM7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUFFJLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBRSUNoYXJ0LCB7IFBvaW50IH0gZnJvbSAnLi9QUUlDaGFydCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hQUUkocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBbY29tcG9uZW50cywgc2V0Q29tcG9uZW50c10gPSBSZWFjdC51c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gICAgY29uc3QgW2NvbXBvbmVudCwgc2V0Q29tcG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oe1Rlc3RDdXJ2ZUlEOiAwfSk7XHJcbiAgICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gUmVhY3QudXNlU3RhdGU8UG9pbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2N1cnZlLCBzZXRDdXJ2ZV0gPSBSZWFjdC51c2VTdGF0ZTxQb2ludFtdPihbXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tcG9uZW50cyhkYXRhKTtcclxuICAgICAgICAgICAgc2V0Q29tcG9uZW50KGRhdGFbMF0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldERpc3R1cmJhbmNlcygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb2ludHMoZGF0YS5tYXAoZCA9PiBPYmplY3QuY3JlYXRlKHtEdXJhdGlvbjogZC5EdXJhdGlvblNlY29uZHMsIE1hZ25pdHVkZTogZC5QZXJVbml0TWFnbml0dWRlfSkpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRDb21wb25lbnRDdXJ2ZSgpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgc2V0Q3VydmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29tcG9uZW50XSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRDb21wb25lbnRzKCk6IEpRdWVyeS5qcVhIUjxhbnlbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9QUUkvQ29tcG9uZW50cy8ke3Byb3BzLkV2ZW50SUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRDb21wb25lbnRDdXJ2ZSgpOiBKUXVlcnkuanFYSFI8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvUFFJL0NvbXBvbmVudC9DdXJ2ZS8ke2NvbXBvbmVudC5DdXJ2ZURCfS8ke2NvbXBvbmVudC5UZXN0Q3VydmVJRH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERpc3R1cmJhbmNlcygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5EaXN0dXJiYW5jZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1BRSS9EaXN0cnViYW5jZXMvJHtwcm9wcy5FdmVudElEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5QUUkgLSBSaWRlLXRocm91Z2ggQ3VydmVzXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtjb21wb25lbnQuVGVzdEN1cnZlSUR9IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBzdHlsZT17eyB3aWR0aDogMjAwLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDYsIHRvcDogNCB9fSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29tcG9uZW50KGNvbXBvbmVudHMuZmluZCggeCA9PiB4LlRlc3RDdXJ2ZUlEID09ZXZ0LnRhcmdldC52YWx1ZSkpfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMubWFwKChjb21wLCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17Y29tcC5UZXN0Q3VydmVJRH0+e2NvbXAuVGl0bGV9PC9vcHRpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPFBRSUNoYXJ0IEhlaWdodD17cHJvcHMuSGVpZ2h0IC0gNTB9IFdpZHRoPXtwcm9wcy5XaWR0aH0gRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gUG9pbnRzPXtwb2ludHN9IEN1cnZlPXtjdXJ2ZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBQUUlDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMTYvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBtaW4sIG1heCwgbGluZSB9IGZyb20gJ2QzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmludGVyZmFjZSBpRGF0YSB7XHJcbiAgICBJRDogbnVtYmVyLFxyXG4gICAgTmFtZTogc3RyaW5nLCBcclxuICAgIFZpc2libGU6IGJvb2xlYW4sXHJcbiAgICBDb2xvcjogc3RyaW5nLFxyXG4gICAgUGVyVW5pdE1hZ25pdHVkZTogbnVtYmVyLCBcclxuICAgIER1cmF0aW9uU2Vjb25kczogbnVtYmVyLFxyXG4gICAgTG9hZE9yZGVyOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgICBNYWduaXR1ZGU6IG51bWJlcixcclxuICAgIER1cmF0aW9uOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hZ0R1ckN1cnZlIHtcclxuICAgIE5hbWU6IHN0cmluZyxcclxuICAgIFZpc2libGU6IGJvb2xlYW4sXHJcbiAgICBDb2xvcjogc3RyaW5nLFxyXG4gICAgUGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFBRSUNoYXJ0ID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyLCBFdmVudElEOiBudW1iZXIsIFBvaW50czogUG9pbnRbXSwgQ3VydmU6IFBvaW50W10gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDMwLCBib3R0b206IDQwLCBsZWZ0OiA1MCB9O1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcbiAgICBjb25zdCB4bWF4ID0gKHByb3BzLkN1cnZlLmxlbmd0aCA+IDAgPyBtYXgocHJvcHMuQ3VydmUubWFwKGEgPT4gYS5EdXJhdGlvbikpOjMpXHJcbiAgICBjb25zdCB4ID0gc2NhbGVMaW5lYXIoKS5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oWzAsIHhtYXhdKTtcclxuICAgIGNvbnN0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbMCwxLjFdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFhBeGlzKCkge1xyXG4gICAgICAgIGxldCB0aWNrcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHguZG9tYWluKClbMF07IGkgPD0geC5kb21haW4oKVsxXTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4KGkpfSwke3N2Z0hlaWdodH0pYH0gc3R5bGU9e3sgb3BhY2l0eTogaSA8IHguZG9tYWluKClbMF0gfHwgaSA+IHguZG9tYWluKClbMV0gPyAwIDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAwLDYgViAtJHtzdmdIZWlnaHQgLSBtYXJnaW4udG9wfWB9IHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeT1cIjIwXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57aX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGlja3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRZQXhpcygpIHtcclxuICAgICAgICBsZXQgeXRpY2tzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHkuZG9tYWluKClbMF07IGkgPD0geS5kb21haW4oKVsxXTsgaSA9IDAuNSArIGkpIHtcclxuICAgICAgICAgICAgeXRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHt5KGkpfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeS5kb21haW4oKVswXSB8fCBpID4geS5kb21haW4oKVsxXSA/IDAgOiAxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD17YE0gLTYsMCBIICR7c3ZnV2lkdGh9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PVwiLTE1XCIgZHk9XCIwLjMyZW1cIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPntpLnRvRml4ZWQoMSl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geXRpY2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldFBhdGgoZGF0YTogUG9pbnRbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxQb2ludD4oKS54KGQgPT4geChkLkR1cmF0aW9uKSkueShkID0+IHkoZC5NYWduaXR1ZGUpKTtcclxuICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZER1ckNpcmNsZXMoZGF0YTogUG9pbnRbXSkge1xyXG4gICAgICAgIGxldCBjaXJjbGVzID0gZGF0YS5tYXAoKHBvaW50LCBpbmRleCkgPT4gPGNpcmNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkb3RcIiByPXszfSBjeD17eChwb2ludC5EdXJhdGlvbil9IGN5PXt5KHBvaW50Lk1hZ25pdHVkZSl9IGZpbGw9J2JsdWUnIC8+KTtcclxuICAgICAgICByZXR1cm4gY2lyY2xlcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCB9fT5cclxuICAgICAgICAgICAgPHN2ZyBpZD1cIlBRSUNoYXJ0XCIgd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnLCBzdHJva2U6ICdibGFjaycsIHN0cm9rZVdpZHRoOiAnMXB4Jywgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBmb250U2l6ZTogJ3NtYWxsJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRHJhdyBjaGFydCBkYXRhIGZpcnN0ICovfVxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD17R2V0UGF0aChwcm9wcy5DdXJ2ZSl9IHN0cm9rZT0ncmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtCdWlsZE1hZER1ckNpcmNsZXMocHJvcHMuUG9pbnRzKX1cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogWEF4aXMgdGlja3MqL31cclxuICAgICAgICAgICAgICAgIHtCdWlsZFhBeGlzKCl9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB4PXtzdmdXaWR0aC8yfSB5PXtzdmdIZWlnaHQgKyBtYXJnaW4udG9wICsgMjB9PkR1cmF0aW9uIChzKTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIHsvKiBZQXhpcyB0aWNrcyBhbmQgTGFiZWxzKi99XHJcbiAgICAgICAgICAgICAgICB7QnVpbGRZQXhpcygpfVxyXG4gICAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAwLDApYH0geT17bWFyZ2luLmxlZnQgLSAzNX0geD17LXN2Z0hlaWdodC8yIC0gbWFyZ2luLmJvdHRvbX0+UGVyIFVuaXQgVm9sdGFnZTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD17YE0gJHttYXJnaW4ubGVmdH0gJHttYXJnaW4udG9wfSBIICR7c3ZnV2lkdGggKyBtYXJnaW4ubGVmdH0gViAke3N2Z0hlaWdodH0gSCAke21hcmdpbi5sZWZ0fSBWICR7bWFyZ2luLnRvcH1gfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQUUlDaGFydDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hUcmVuREFQLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgZnJvbSAnLi4vT3BlblNFRS9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzIGZyb20gJy4uL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hUcmVuREFQKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgbWFyZ2luID0geyBUb3A6IDAsIFJpZ2h0OiAyMCwgQm90dG9tOiAwLCBMZWZ0OiAzNSB9O1xyXG4gICAgLy9jb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICAvL2NvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tIC0gNjU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPjxhIGhyZWY9e2hvbWVQYXRoICsgJ1RyZW5EQVA/ZXZlbnRpZD0nICsgcHJvcHMuRXZlbnRJRH0gdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBpbiBUcmVuREFQPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0IC0gNTAsIHBhZGRpbmc6MCB9fT5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nVm9sdGFnZScgRGF0YVR5cGU9J1RyZW5kaW5nJyBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17cHJvcHMuSGVpZ2h0IC8zfSAvPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdDdXJyZW50JyBEYXRhVHlwZT0nVHJlbmRpbmcnIE1hcmdpbj17bWFyZ2lufVdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvIDN9IC8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWFyZ2luPXttYXJnaW59IFdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9ezQwfSBEYXRhVHlwZT0nVHJlbmRpbmcnLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAxLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwb3J0VG9Dc3Y8VD4oZGF0YTogVFtdLCBmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHJvd3MgPSBbT2JqZWN0LmtleXMoZGF0YVswXSldO1xyXG4gICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICByb3dzLnB1c2goT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVmFsdWUgPSByb3dbal0udG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbCArPSAnLCc7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjc3ZGaWxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2RmlsZV0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNYWdEdXJDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNjYWxlTG9nLCBzY2FsZUxpbmVhciwgbWF4LCBsaW5lLCBldmVudCwgem9vbVRyYW5zZm9ybSwgem9vbSwgc2VsZWN0IH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBlclVuaXRNYWduaXR1ZGU6IG51bWJlcixcclxuICAgIER1cmF0aW9uU2Vjb25kczogbnVtYmVyLFxyXG4gICAgTG9hZE9yZGVyOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgICBFdmVudElEOiBudW1iZXIsXHJcbiAgICBNYWduaXR1ZGU6IG51bWJlcixcclxuICAgIER1cmF0aW9uOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hZ0R1ckN1cnZlIHtcclxuICAgIE5hbWU6IHN0cmluZyxcclxuICAgIFZpc2libGU6IGJvb2xlYW4sXHJcbiAgICBDb2xvcjogc3RyaW5nLFxyXG4gICAgUGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IE1hZ0R1ckNoYXJ0ID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyLCBQb2ludHM6IFBvaW50W10sIE9uU2VsZWN0OiAoZXZ0OiBhbnksIHBvaW50OiBQb2ludCkgPT4gdm9pZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNjAsIGxlZnQ6IDQwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICBjb25zdCBbZG9tYWlucywgc2V0RG9tYWluc10gPSBSZWFjdC51c2VTdGF0ZTx7IFg6IHsgTG93ZXI6IG51bWJlciwgVXBwZXI6IG51bWJlciB9LCBZOiB7IExvd2VyOiBudW1iZXIsIFVwcGVyOiBudW1iZXIgfSB9Pih7IFg6IHsgTG93ZXI6IDAuMDAwMDEsIFVwcGVyOiAxMDAwMDAwIH0sIFk6IHsgTG93ZXI6IDAsIFVwcGVyOiAyLjUgfSB9KTtcclxuICAgIGNvbnN0IFt4QXhpc1RpY2tzLCBzZXRYQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW3lBeGlzVGlja3MsIHNldFlBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbbWFnRHVyQ3VydmVEYXRhLCBzZXRNYWdEdXJDdXJ2ZURhdGFdID0gUmVhY3QudXNlU3RhdGU8aURhdGFbXT4oW10pO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlcywgc2V0TWFnRHVyQ3VydmVzXSA9IFJlYWN0LnVzZVN0YXRlPE1hZ0R1ckN1cnZlW10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJDaXJjbGVzLCBzZXRNYWdEdXJDaXJjbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldE1hZ0R1ckN1cnZlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogaURhdGFbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIEJ1aWxkTWFnRHVyQ3VydmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQnVpbGRZQXhpcygpO1xyXG4gICAgICAgIEJ1aWxkWEF4aXMoKTtcclxuICAgICAgICBCdWlsZE1hZER1ckNpcmNsZXMocHJvcHMuUG9pbnRzKTtcclxuICAgICAgICBCdWlsZE1hZ0R1ckN1cnZlKG1hZ0R1ckN1cnZlRGF0YSk7XHJcbiAgICB9LCBbZG9tYWlucywgcHJvcHMuUG9pbnRzXSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWdEdXJDdXJ2ZXMoKTogSlF1ZXJ5LmpxWEhSPGlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWFnRHVyQ3VydmVzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB4QXhpc1RleHQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMC4wMDAwMDAxKSByZXR1cm4gKHZhbHVlICogMTAwMDAwMDAwMCkudG9GaXhlZCgwKSArICduJztcclxuICAgICAgICBpZiAodmFsdWUgPCAwLjAwMSkgcmV0dXJuICh2YWx1ZSAqIDEwMDAwMDApLnRvRml4ZWQoMCkgKyAnwrUnO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAgJiYgdmFsdWUgPCAxMDAwMDAwKSByZXR1cm4gKHZhbHVlIC8gMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMDApIHJldHVybiAodmFsdWUgLyAxMDAwMDAwKS50b0ZpeGVkKDApICsgJ00nO1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHJldHVybiB2YWx1ZS50b1ByZWNpc2lvbigxKS50b1N0cmluZygpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFhBeGlzKCkge1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSBwYXJzZUZsb2F0KE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKGRvbWFpbnMuWC5Mb3dlcikgLyBNYXRoLmxvZygxMCkpKS50b1ByZWNpc2lvbigxKSk7XHJcbiAgICAgICAgbGV0IHRpY2tzID0gW11cclxuICAgICAgICBsZXQgbG9nRG9tYWluID0geC5kb21haW4oKS5tYXAobCA9PiBNYXRoLmxvZyhsKSAvIE1hdGgubG9nKDEwKSk7XHJcbiAgICAgICAgbGV0IGxkRGlmZiA9IGxvZ0RvbWFpblsxXSAtIGxvZ0RvbWFpblswXTtcclxuICAgICAgICBmb3IgKDsgaSA8PSBkb21haW5zLlguVXBwZXI7IGkgPSBpICogMTApIHtcclxuICAgICAgICAgICAgdGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3goaSl9LCR7c3ZnSGVpZ2h0fSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNIDAsNiBWIC0ke3N2Z0hlaWdodCAtIG1hcmdpbi50b3B9YH0gIHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeT1cIjIwXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57eEF4aXNUZXh0KGkpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICB7KGxkRGlmZiA8IDUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKS5tYXAobnVtID0+IDxwYXRoIGtleT17bnVtfSBkPXtgTSAkey8qTWF0aC5sb2cobnVtICogaSkgLyBNYXRoLmxvZygxMCkgLSBNYXRoLmxvZyhpKSAvIE1hdGgubG9nKDEwKSoveChudW0gKiBpKSAtIHgoaSl9LDYgViAtJHtzdmdIZWlnaHQgLSBtYXJnaW4udG9wfWB9IHN0cm9rZVdpZHRoPXswLjI1fSAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFhBeGlzVGlja3ModGlja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkWUF4aXMoKSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgc3RlcCA9ICh5LmRvbWFpbigpWzFdIC0geS5kb21haW4oKVswXSA8PSAxLjUgPyAwLjEgOiAwLjUpO1xyXG4gICAgICAgIGxldCB5dGlja3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gTWF0aC5mbG9vcihkb21haW5zLlkuTG93ZXIpOyBpIDw9IGRvbWFpbnMuWS5VcHBlcjsgaSA9IHN0ZXAgKyBpKSB7XHJcbiAgICAgICAgICAgIHl0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7eShpKX0pYH0gc3R5bGU9e3sgb3BhY2l0eTogaSA8IHkuZG9tYWluKClbMF0gfHwgaSA+IHkuZG9tYWluKClbMV0gPyAwIDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAtNiwwIEggJHtzdmdXaWR0aH1gfSBzdHJva2VXaWR0aD17MC4yNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHg9XCItMTVcIiBkeT1cIjAuMzJlbVwiIHRleHRBbmNob3I9J21pZGRsZSc+e2kudG9GaXhlZCgxKX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFlBeGlzVGlja3MoeXRpY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZ0R1ckN1cnZlKGRhdGE6IGlEYXRhW10pIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxpRGF0YT4oKS54KGQgPT4geChkLkR1cmF0aW9uU2Vjb25kcykpLnkoZCA9PiB5KGQuUGVyVW5pdE1hZ25pdHVkZSkpO1xyXG4gICAgICAgIGxldCBtZGNzID0gXy5ncm91cEJ5KGRhdGEsIChkKSA9PiBkLklEKTtcclxuICAgICAgICBsZXQgbWRjc3MgPSBPYmplY3Qua2V5cyhtZGNzKS5tYXAoKGtleSkgPT4geyByZXR1cm4geyBOYW1lOiBtZGNzW2tleV1bMF0uTmFtZSwgVmlzaWJsZTogbWRjc1trZXldWzBdLlZpc2libGUsIENvbG9yOiBtZGNzW2tleV1bMF0uQ29sb3IsIFBhdGg6IGxpbmVmdW5jKG1kY3Nba2V5XSkgfSB9KTtcclxuICAgICAgICBzZXRNYWdEdXJDdXJ2ZXMobWRjc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkTWFkRHVyQ2lyY2xlcyhkYXRhOiBQb2ludFtdKSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IGNpcmNsZXMgPSBkYXRhLmZpbHRlcihwb2ludCA9PiBwb2ludC5NYWduaXR1ZGUgPj0gZG9tYWlucy5ZLkxvd2VyICYmIHBvaW50Lk1hZ25pdHVkZSA8PSBkb21haW5zLlkuVXBwZXIgJiYgcG9pbnQuRHVyYXRpb24gPj0gZG9tYWlucy5YLkxvd2VyICYmIHBvaW50LkR1cmF0aW9uIDw9IGRvbWFpbnMuWC5VcHBlcikubWFwKChwb2ludCwgaW5kZXgpID0+IDxjaXJjbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZG90XCIgcj17M30gY3g9e3gocG9pbnQuRHVyYXRpb24pfSBjeT17eShwb2ludC5NYWduaXR1ZGUpfSBmaWxsPSdibHVlJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoZXZ0KSA9PiBwcm9wcy5PblNlbGVjdChldnQsIHBvaW50KX0gLz4pO1xyXG4gICAgICAgIHNldE1hZ0R1ckNpcmNsZXMoY2lyY2xlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlWm9vbShldnQpIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgLy8gdXNlIGV2ZW50Lm5hdGl2ZUV2ZW50Lm9mZnNldFggYW5kIFlcclxuICAgICAgICBsZXQgem9vbUxvY2F0aW9uWSA9IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZO1xyXG4gICAgICAgIGxldCB6b29tTG9jYXRpb25YID0gZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFg7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50LmRlbHRhWSBwb3NpdGl2ZSBpcyB3aGVlbCBkb3duIG9yIG91dCBhbmQgbmVnYXRpdmUgaXMgd2hlZWwgdXAgb3IgaW5cclxuICAgICAgICBpZiAoZXZ0LmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgbGV0IGRvbWFpblhMZW5ndGggPSAoeC5yYW5nZSgpWzFdIC0geC5yYW5nZSgpWzBdKSAqIDAuNzU7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5ZTGVuZ3RoID0gKHkucmFuZ2UoKVsxXSAtIHkucmFuZ2UoKVswXSkgKiAwLjc1O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoYW5kbGVab29tJywgeyBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LCBZOiB7IExvd2VyOiB6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIsIFVwcGVyOiB6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIgfSB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldERvbWFpbnMoe1xyXG4gICAgICAgICAgICAgICAgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSxcclxuICAgICAgICAgICAgICAgIFk6IHsgTG93ZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiksIFVwcGVyOiB5LmludmVydCh6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWExlbmd0aCA9ICh4LnJhbmdlKClbMV0gLSB4LnJhbmdlKClbMF0pICogMS4yNTtcclxuICAgICAgICAgICAgbGV0IGRvbWFpbllMZW5ndGggPSAoeS5yYW5nZSgpWzFdIC0geS5yYW5nZSgpWzBdKSAqIDEuMjU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hhbmRsZVpvb20nLCB7IFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sIFk6IHsgTG93ZXI6IHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiwgVXBwZXI6IHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMiB9IH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RG9tYWlucyh7XHJcbiAgICAgICAgICAgICAgICBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LFxyXG4gICAgICAgICAgICAgICAgWTogeyBMb3dlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyKSwgVXBwZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMikgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZyhldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGV2dC5uYXRpdmVFdmVudC5vZmZzZXRYIDwgbWFyZ2luLmxlZnQgfHwgZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFggPiBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0KSByZXR1cm47XHJcbiAgICAgICAgaWYgKGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZIDwgbWFyZ2luLnRvcCB8fCBldnQubmF0aXZlRXZlbnQub2Zmc2V0WSA+IHN2Z0hlaWdodCArIG1hcmdpbi50b3ApIHJldHVybjtcclxuXHJcbiAgICAgICAgZXZ0LnBlcnNpc3QoKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgJCgnI21hZ0R1ckNoYXJ0Jykub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERvbWFpbnMoe1xyXG4gICAgICAgICAgICAgICAgWDoge1xyXG4gICAgICAgICAgICAgICAgICAgIExvd2VyOiB4LmludmVydCh4KGRvbWFpbnMuWC5Mb3dlcikgKyBldnQuY2xpZW50WCAtIGUuY2xpZW50WCksXHJcbiAgICAgICAgICAgICAgICAgICAgVXBwZXI6IHguaW52ZXJ0KHgoZG9tYWlucy5YLlVwcGVyKSArIGV2dC5jbGllbnRYIC0gZS5jbGllbnRYKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFk6IHtcclxuICAgICAgICAgICAgICAgICAgICBMb3dlcjogeS5pbnZlcnQoeShkb21haW5zLlkuTG93ZXIpICsgZXZ0LmNsaWVudFkgLSBlLmNsaWVudFkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFVwcGVyOiB5LmludmVydCh5KGRvbWFpbnMuWS5VcHBlcikgKyBldnQuY2xpZW50WSAtIGUuY2xpZW50WSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcERyYWcoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI21hZ0R1ckNoYXJ0Jykub2ZmKCdtb3VzZW1vdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFpvb20oZXZ0KSB7XHJcbiAgICAgICAgc2V0RG9tYWlucyh7IFg6IHsgTG93ZXI6IDAuMDAwMDEsIFVwcGVyOiAxMDAwMDAwIH0sIFk6IHsgTG93ZXI6IDAsIFVwcGVyOiAyLjUgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlUmVzZXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvbWFpbnMuWC5Mb3dlciA9PSAwLjAwMDAxICYmIGRvbWFpbnMuWC5VcHBlciA9PSAxMDAwMDAwICYmIGRvbWFpbnMuWS5Mb3dlciA9PSAwICYmIGRvbWFpbnMuWS5VcHBlciA9PSAyLjVcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCwgd2lkdGg6IHByb3BzLldpZHRoLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAyMCwgcmlnaHQ6IDI1IH19IGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3Jlc2V0Wm9vbX0gaGlkZGVuPXtoaWRlUmVzZXQoKX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHN2ZyBpZD1cIm1hZ0R1ckNoYXJ0XCIgd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnLCBzdHJva2U6ICdibGFjaycsIHN0cm9rZVdpZHRoOiAnMXB4Jywgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBmb250U2l6ZTogJ3NtYWxsJyB9fSBvbldoZWVsPXtoYW5kbGVab29tfSBvbk1vdXNlRG93bj17aGFuZGxlRHJhZ30gb25Nb3VzZVVwPXtzdG9wRHJhZ30+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIERyYXcgY2hhcnQgZGF0YSBmaXJzdCAqL31cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYWdEdXJDdXJ2ZXMubWFwKChtZGMsIGluZGV4KSA9PiAobWRjLlZpc2libGUgPyA8cGF0aCBrZXk9e2luZGV4fSBkPXttZGMuUGF0aH0gc3Ryb2tlPXttZGMuQ29sb3J9IC8+IDogbnVsbCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHttYWdEdXJDaXJjbGVzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBEcmF3IHdoaXRlIHJlY3RhbmdsZXMgYXJvdW5kIHRoZSBib3JkZXIgc28gZGF0YSB3b24ndCBzaG93IG91dHNpZGUgY2hhcnQgKi99XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17bWFyZ2luLnRvcH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXtwcm9wcy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tIC0gbWFyZ2luLnRvcH0gd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e21hcmdpbi5ib3R0b20gKyBtYXJnaW4udG9wfSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXttYXJnaW4ubGVmdH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IGZpbGw9J3doaXRlJyBzdHJva2U9J3doaXRlJyAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17cHJvcHMuV2lkdGggLSBtYXJnaW4ucmlnaHR9IHk9ezB9IHdpZHRoPXttYXJnaW4ucmlnaHR9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgTGVnZW5kICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnRHVyQ3VydmVzLm1hcCgobWRjLCBpbmRleCkgPT4gPHJlY3Qgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG9wYWNpdHk6IChtZGMuVmlzaWJsZSA/IDEgOiAwLjI1KSB9fSBrZXk9e2luZGV4fSB4PXttYXJnaW4ubGVmdCArIDEwICsgMjAgKiBpbmRleH0geT17c3ZnSGVpZ2h0ICsgNDB9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17bWRjLkNvbG9yfSBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWRjLlZpc2libGUgPSAhbWRjLlZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGUgPSBfLmNsb25lRGVlcChtYWdEdXJDdXJ2ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZXModXBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1kY2QgPSBfLmNsb25lRGVlcChtYWdEdXJDdXJ2ZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZGNkLmZpbHRlcih4ID0+IHguTmFtZSA9PSBtZGMuTmFtZSkuZm9yRWFjaCh4ID0+IHguVmlzaWJsZSA9IG1kYy5WaXNpYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVEYXRhKG1kY2QpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+PHRpdGxlPnttZGMuTmFtZX08L3RpdGxlPjwvcmVjdD4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFhBeGlzIHRpY2tzKi99XHJcbiAgICAgICAgICAgICAgICB7eEF4aXNUaWNrc31cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9e3N2Z1dpZHRoIC8gMn0geT17c3ZnSGVpZ2h0ICsgbWFyZ2luLnRvcCArIDIwfT5EdXJhdGlvbiAocyk8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICB7LyogWUF4aXMgdGlja3MgYW5kIExhYmVscyovfVxyXG4gICAgICAgICAgICAgICAge3lBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2Byb3RhdGUoLTkwIDAsMClgfSB5PXttYXJnaW4ubGVmdCAtIDI1fSB4PXstc3ZnSGVpZ2h0IC8gMiAtIG1hcmdpbi5ib3R0b219PlBlciBVbml0IFZvbHRhZ2U8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgYm9yZGVycyAqL31cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNICR7bWFyZ2luLmxlZnR9ICR7bWFyZ2luLnRvcH0gSCAke3N2Z1dpZHRoICsgbWFyZ2luLmxlZnR9IFYgJHtzdmdIZWlnaHR9IEggJHttYXJnaW4ubGVmdH0gViAke21hcmdpbi50b3B9YH0gLz5cclxuXHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFnRHVyQ2hhcnQ7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE11bHRpU2VsZWN0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8xNy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0ID0gKHByb3BzOiB7IE9wdGlvbnM6IHsgVmFsdWU6IG51bWJlciwgVGV4dDogc3RyaW5nLCBTZWxlY3RlZDogYm9vbGVhbiB9W10sIE9uQ2hhbmdlOiAoZXZ0OiBhbnksIE9wdGlvbnM6IHsgVmFsdWU6IG51bWJlciwgVGV4dDogc3RyaW5nLCBTZWxlY3RlZDogYm9vbGVhbiB9W10pID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgbXVsdGlTZWxlY3QgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gSGFuZGxlU2hvdyhldnQpIHtcclxuICAgICAgICBpZiAoIW11bHRpU2VsZWN0LmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpXHJcbiAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5PcHRpb25zXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgSGFuZGxlU2hvdywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17bXVsdGlTZWxlY3R9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2NlZDRkYScsIHBhZGRpbmc6ICcuMzc1cmVtIC43NXJlbScsIGZvbnRTaXplOiAnMXJlbScsIGJvcmRlclJhZGl1czogJy4yNXJlbScgfX0gY2xhc3NOYW1lPVwiYnRuIGZvcm0tY29udHJvbCBkcm9wZG93bi10b2dnbGVcIiBvbkNsaWNrPXtIYW5kbGVTaG93fT57cHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5sZW5ndGggIT0gcHJvcHMuT3B0aW9ucy5sZW5ndGggPyBwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA6ICdBbGwgJ30gU2VsZWN0ZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAqIC43NSwgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmc6ICcxMCA1JywgZGlzcGxheTogc2hvdyA/ICdibG9jaycgOiAnbm9uZScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgYm94U2hhZG93OiAnMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMiknLCB6SW5kZXg6IDQwMSB9fT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJyBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk9uQ2hhbmdlKGV2dCwgcHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkID09IChwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aH0gb25DaGFuZ2U9eygpID0+IG51bGx9IC8+PC90ZD48dGQ+QWxsPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuT3B0aW9ucy5tYXAoKGYsIGkpID0+IDx0ciBrZXk9e2l9IG9uQ2xpY2s9eyhldnQpID0+IHByb3BzLk9uQ2hhbmdlKGV2dCwgW2ZdKX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtmLlNlbGVjdGVkfSBvbkNoYW5nZT17KCkgPT4gbnVsbH0gLz48L3RkPjx0ZD57Zi5UZXh0fTwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpU2VsZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=