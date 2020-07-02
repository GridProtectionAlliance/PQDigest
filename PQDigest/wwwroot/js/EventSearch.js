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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiSelect, { Options: meters.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
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
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiSelect, { Options: types.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px' } },
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MagDurChart__WEBPACK_IMPORTED_MODULE_7__["default"], { Height: (window.innerHeight) - 275, Width: window.innerWidth / 2 - 20, Points: events.map(function (a) { return Object.create({ Magnitude: a.PerUnitMagnitude, Duration: a.DurationSeconds }); }) })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 226, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearch_EventSearchPreview__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: eventID, Height: window.innerHeight - 226, Width: window.innerWidth / 2 })))))));
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { maxHeight: window.innerHeight * .75, overflowY: 'auto', padding: '10 5', display: show ? 'block' : 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 } },
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




var EventSearchPreview = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.EventID < 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No Event Selected ... ") :
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchOpenSEE__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, Width: props.Width - 55, Height: props.Height / 3 - 1 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrenDAP_EventSearchTrenDAP__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Width: props.Width - 55, Height: props.Height / 3 - 1 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQI_EventSearchPQI__WEBPACK_IMPORTED_MODULE_3__["default"], { EventID: props.EventID, Width: props.Width - 55, Height: props.Height / 3 - 1 }))));
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
    var margin = { top: 20, right: 0, bottom: 20, left: 0 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom - 65;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'OpenSEE?eventid=' + props.EventID, target: "_blank" }, "View in OpenSEE")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Voltage', DataType: 'Time', Width: svgWidth, Height: svgHeight / 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Current', DataType: 'Time', Width: svgWidth, Height: svgHeight / 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Width: props.Width, Height: 25, DataType: 'Time' }))));
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
    var svgWidth = props.Width;
    var svgHeight = props.Height;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), paths = _a[0], setPaths = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), hidden = _b[0], setHidden = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        setHidden(true);
        setPaths([]);
        return GetData();
    }, [props.EventID]);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Event/Data?eventId=" + props.EventID +
                ("&pixels=" + svgWidth) +
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
        setHidden(Object.keys(data).length == 0);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([0, svgWidth]);
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, 0]);
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: svgHeight /*, margin: '0x', padding: '0px'*/ }, hidden: hidden },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: svgWidth, height: svgHeight, style: { border: '2px solid lightgray' /*, position: "absolute", left: 20*/ } },
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: "20", textAnchor: 'middle' }, moment('1970-01-01T00:00:00').add(i, 'milliseconds').format(props.DataType == 'Time' ? 'ss.SSS' : 'HH'))));
        }
        setXAxisTicks(ticks);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: svgHeight /*, margin: '0x', padding: '0px'*/ }, hidden: hidden },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: svgWidth, height: svgHeight }, xAxisTicks)));
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

function EventSearchPQI(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'PQI?eventid=' + props.EventID, target: "_blank" }, "View in PQI")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50 } })));
}


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
    var margin = { top: 20, right: 0, bottom: 20, left: 0 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom - 65;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'TrenDAP?eventid=' + props.EventID, target: "_blank" }, "View in TrenDAP")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Voltage', DataType: 'Trending', Width: svgWidth, Height: svgHeight / 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Current', DataType: 'Trending', Width: svgWidth, Height: svgHeight / 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Width: props.Width, Height: 25, DataType: 'Trending' }))));
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
        var circles = data.filter(function (point) { return point.Magnitude >= domains.Y.Lower && point.Magnitude <= domains.Y.Upper && point.Duration >= domains.X.Lower && point.Duration <= domains.X.Upper; }).map(function (point, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { key: index, className: "dot", r: 3, cx: x(point.Duration), cy: y(point.Magnitude), fill: 'blue' }); });
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9PcGVuU0VFL0V2ZW50U2VhcmNoT3BlblNFRS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvRXZlbnRTZWFyY2hQUUkudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9UcmVuREFQL0V2ZW50U2VhcmNoVHJlbkRBUC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V4cG9ydENTVi50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L01hZ0R1ckNoYXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsMEJBQTBCO0FBQzFCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7QUFDOUU7QUFFeUM7QUFHNUM7QUFDdUI7QUFDUjtBQUNRO0FBQ0g7QUFDRjtBQUV6QyxJQUFNLFdB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QUFHLEdBQUcsRUFBRSxtQkFBcUI7WUFFekUsVUFBVTtZQUNYLHFFQUFNLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSx1QkFBeUI7WUFFbkgscUVBQU0sQ0FBQyxFQUFFLE9BQUssTUFBTSxDQUFDLElBQUksU0FBSSxNQUFNLENBQUMsR0FBRyxZQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxZQUFNLFNBQVMsV0FBTSxNQUFNLENBQUMsSUFBSSxXQUFNLE1BQU0sQ0FBQyxHQUFLLEdBQUksQ0FFdkgsQ0FFSixDQUNUO0FBQ0wsQ0FBQztBQUVjLDBFQUFXLEVBQUMiLCJmaWxlIjoiRXZlbnRTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2gudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFdmVudFNlYXJjaFRhYmxlIGZyb20gJy4uL0V2ZW50U2VhcmNoL0V2ZW50U2VhcmNoVGFibGUnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3IGZyb20gJy4uL0V2ZW50U2VhcmNoL0V2ZW50U2VhcmNoUHJldmlldyc7XHJcbmltcG9ydCBFdmVudFNlYXJjaE1hZ0R1ciBmcm9tICcuLi9FdmVudFNlYXJjaC9FdmVudFNlYXJjaE1hZ0R1cic7XHJcbmltcG9ydCB7IFBRRGlnZXN0LCBPcGVuWERBIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIlxyXG5pbXBvcnQgeyBFeHBvcnRUb0NzdiB9IGZyb20gJy4uL0V4cG9ydENTVic7XHJcbmltcG9ydCBNYWdEdXJDaGFydCBmcm9tICcuLi9NYWdEdXJDaGFydCc7XHJcblxyXG5jb25zdCBFdmVudFNlYXJjaCA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHFzID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuRXZlbnRUeXBlW10+KFtdKVxyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocXMuc3RhcnREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLnN1YnRyYWN0KDMwLCAnZGF5cycpLmZvcm1hdChcIllZWVktTU0tRERcIikgOiBxcy5zdGFydERhdGUpXHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLmVuZERhdGUgPT0gdW5kZWZpbmVkID8gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSA6IHFzLmVuZERhdGUpXHJcbiAgICBjb25zdCBbbWV0ZXJzLCBzZXRNZXRlcnNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5NZXRlcltdPihbXSk7XHJcbiAgICBjb25zdCBbcmV0dXJuTGltaXQsIHNldFJldHVybkxpbWl0XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocXMucmV0dXJuTGltaXQgPT0gdW5kZWZpbmVkID8gMTAwOiBwYXJzZUludChxcy5yZXR1cm5MaW1pdCBhcyBzdHJpbmcpKTtcclxuICAgIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLkV2ZW50U2VhcmNoW10+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBPcGVuWERBLkV2ZW50U2VhcmNoPignU3RhcnRUaW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbZXZlbnRJRCwgc2V0RXZlbnRJRF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLmV2ZW50SUQgPT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KHFzLmV2ZW50SUQgYXMgc3RyaW5nKSk7XHJcbiAgICBjb25zdCBbc2hvd0V2ZW50TGlzdCwgc2V0U2hvd0V2ZW50TGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0VHlwZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGE6IE9wZW5YREEuRXZlbnRUeXBlW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IGI2NHN0cmluZyA9IChxcy50eXBlcyA9PSB1bmRlZmluZWQgPyAnJzogcXMudHlwZXMpXHJcbiAgICAgICAgICAgIGxldCBpZHMgPSBhdG9iKGI2NHN0cmluZyBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKGEgPT4gcGFyc2VJbnQoYSkpXHJcbiAgICAgICAgICAgIGlmKHFzLnR5cGVzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IHRydWUpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IGlkcy5pbmRleE9mKHZhbHVlLklEKSA+PSAwKVxyXG5cclxuICAgICAgICAgICAgc2V0VHlwZXMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0TWV0ZXJzKCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBPcGVuWERBLk1ldGVyW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IGI2NHN0cmluZyA9IChxcy5tZXRlcnMgPT0gdW5kZWZpbmVkID8gJycgOiBxcy5tZXRlcnMpXHJcbiAgICAgICAgICAgIGxldCBpZHMgPSBhdG9iKGI2NHN0cmluZyBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKGEgPT4gcGFyc2VJbnQoYSkpXHJcbiAgICAgICAgICAgIGlmIChxcy5tZXRlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gdHJ1ZSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gaWRzLmluZGV4T2YodmFsdWUuSUQpID49IDApXHJcblxyXG4gICAgICAgICAgICBzZXRNZXRlcnMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTIuYWJvcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1ldGVycy5sZW5ndGggPT0gMCB8fCB0eXBlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBoaXN0b3J5LnB1c2goeyBwYXRobmFtZTogaG9tZVBhdGggKyAnRXZlbnRTZWFyY2gnLCBzZWFyY2g6IGA/ZXZlbnRJRD0ke2V2ZW50SUR9JnN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZX0mZW5kRGF0ZT0ke2VuZERhdGV9JnJldHVybkxpbWl0PSR7cmV0dXJuTGltaXR9JnR5cGVzPSR7YnRvYSh0eXBlcy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKS50b1N0cmluZygpKX0mbWV0ZXJzPSR7YnRvYShtZXRlcnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRCkudG9TdHJpbmcoKSl9YH0pXHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0RXZlbnRTZWFyY2goKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGE6IE9wZW5YREEuRXZlbnRTZWFyY2hbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFdmVudHMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sIFt0eXBlcywgc3RhcnREYXRlLCBlbmREYXRlLCBtZXRlcnMsIHJldHVybkxpbWl0LCBldmVudElEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0VHlwZXMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuRXZlbnRUeXBlW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudFR5cGVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1ldGVycygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5NZXRlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvTWV0ZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldEV2ZW50U2VhcmNoKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLkV2ZW50U2VhcmNoW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnRTZWFyY2hgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgRW5kRGF0ZTogZW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIENvdW50OiByZXR1cm5MaW1pdCxcclxuICAgICAgICAgICAgICAgIE1ldGVyczogbWV0ZXJzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpLFxyXG4gICAgICAgICAgICAgICAgVHlwZXM6IHR5cGVzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IDc1LCBtYXJnaW46IDUgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IDc1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17e2JvcmRlcjogJzBweCd9fT5SZXR1cm4gIzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtyZXR1cm5MaW1pdH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2UgPT4gc2V0UmV0dXJuTGltaXQocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTAwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19Pk1ldGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3QgT3B0aW9ucz17bWV0ZXJzLm1hcCh0ID0+IE9iamVjdC5jcmVhdGUoeyBUZXh0OiB0Lk5hbWUsIFZhbHVlOiB0LklELCBTZWxlY3RlZDogdC5TZWxlY3RlZCB9KSl9IE9uQ2hhbmdlPXsoZXZ0LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdNZXRlcnMgPSBfLmNsb25lRGVlcChtZXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gob3B0aW9ucywgKGluZGV4LCBvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld01ldGVycy5maW5kKG1ldGVyID0+IG1ldGVyLklEID09IG9wdGlvbi5WYWx1ZSkuU2VsZWN0ZWQgPSAhb3B0aW9uLlNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXRlcnMobmV3TWV0ZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcgfX0+VHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3QgT3B0aW9ucz17dHlwZXMubWFwKHQgPT4gT2JqZWN0LmNyZWF0ZSh7IFRleHQ6IHQuTmFtZSwgVmFsdWU6IHQuSUQsIFNlbGVjdGVkOiB0LlNlbGVjdGVkIH0pKX0gT25DaGFuZ2U9eyhldnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1R5cGVzID0gXy5jbG9uZURlZXAodHlwZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gob3B0aW9ucywgKGluZGV4LCBvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1R5cGVzLmZpbmQodHlwZSA9PiB0eXBlLklEID09IG9wdGlvbi5WYWx1ZSkuU2VsZWN0ZWQgPSAhb3B0aW9uLlNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUeXBlcyhuZXdUeXBlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PlN0YXJ0IERhdGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtzdGFydERhdGV9IHR5cGU9XCJkYXRlXCIgb25DaGFuZ2U9e2UgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PkVuZCBEYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW5kRGF0ZX0gdHlwZT1cImRhdGVcIiBvbkNoYW5nZT17ZSA9PiBzZXRFbmREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogXCJjYWxjKDEwMCUgLSA4MHB4KVwiLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c2hvd0V2ZW50TGlzdC50b1N0cmluZygpfSBvbkNoYW5nZT17ZXZ0ID0+IHNldFNob3dFdmVudExpc3QoZXZ0LnRhcmdldC52YWx1ZSA9PSAndHJ1ZScpfSBzdHlsZT17e3dpZHRoOiAxMTUsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiAxMTV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSd0cnVlJz5MaXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZmFsc2UnPk1hZy9EdXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiA1LCByaWdodDogNSB9fSBvbkNsaWNrPXsoKSA9PiBFeHBvcnRUb0NzdihldmVudHMsICdFdmVudFNlYXJjaC5jc3YnKX0+RXhwb3J0IENTVjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjc1LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFdmVudExpc3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxPcGVuWERBLkV2ZW50U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1N0YXJ0VGltZScsIGxhYmVsOiAnRGF0ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzI1JScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IG1vbWVudChpdGVtW2tleV0pLmZvcm1hdCgnTU0vREQvWVlZWSBISDptbTpzcycpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiAnU3RhcnRUaW1lJywgbGFiZWw6ICdUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBtb21lbnQoaXRlbVtrZXldKS5mb3JtYXQoJ0hIOm1tOnNzJykgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWV0ZXJOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0V2ZW50VHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdQZXJVbml0TWFnbml0dWRlJywgbGFiZWw6ICdNYWcgKHB1KScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtW2tleV0gYXMgbnVtYmVyKS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0R1cmF0aW9uU2Vjb25kcycsIGxhYmVsOiAnRHVyIChzKScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtW2tleV0gYXMgbnVtYmVyKS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZXZlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShldmVudHMsIFtzb3J0RmllbGRdLCBbKCFhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFdmVudHMob3JkZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShldmVudHMsIFtkLmNvbF0sIFsoYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRzKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyBzZXRFdmVudElEKGRhdGEucm93LklEKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT0gZXZlbnRJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hZ0R1ckNoYXJ0IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCkgLSAyNzV9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMH0gUG9pbnRzPXtldmVudHMubWFwKGEgPT4gT2JqZWN0LmNyZWF0ZSh7IE1hZ25pdHVkZTogYS5QZXJVbml0TWFnbml0dWRlLCBEdXJhdGlvbjogYS5EdXJhdGlvblNlY29uZHMgfSkpfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAwcHggMHB4IDNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5FdmVudCBQcmV2aWV3PC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAod2luZG93LmlubmVySGVpZ2h0KSAtIDIyNiwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXcgRXZlbnRJRD17ZXZlbnRJRH0gSGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMjZ9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0ID0gKHByb3BzOiB7IE9wdGlvbnM6IHsgVmFsdWU6IG51bWJlciwgVGV4dDogc3RyaW5nLCBTZWxlY3RlZDogYm9vbGVhbiB9W10sIE9uQ2hhbmdlOiAoZXZ0OiBhbnksIE9wdGlvbnM6IHsgVmFsdWU6IG51bWJlciwgVGV4dDogc3RyaW5nLCBTZWxlY3RlZDogYm9vbGVhbiB9W10pID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgbXVsdGlTZWxlY3QgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gSGFuZGxlU2hvdyhldnQpIHtcclxuICAgICAgICBpZiAoIW11bHRpU2VsZWN0LmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpXHJcbiAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5PcHRpb25zXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgSGFuZGxlU2hvdywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17bXVsdGlTZWxlY3R9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2NlZDRkYScsIHBhZGRpbmc6ICcuMzc1cmVtIC43NXJlbScsIGZvbnRTaXplOiAnMXJlbScsIGJvcmRlclJhZGl1czogJy4yNXJlbScgfX0gY2xhc3NOYW1lPVwiYnRuIGZvcm0tY29udHJvbCBkcm9wZG93bi10b2dnbGVcIiBvbkNsaWNrPXtIYW5kbGVTaG93fT57cHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5sZW5ndGggIT0gcHJvcHMuT3B0aW9ucy5sZW5ndGggPyBwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA6ICdBbGwgJyB9IFNlbGVjdGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQqLjc1LCBvdmVyZmxvd1k6ICdhdXRvJyxwYWRkaW5nOiAnMTAgNScsIGRpc3BsYXk6IHNob3cgPyAnYmxvY2snIDogJ25vbmUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIGJveFNoYWRvdzogJzBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpJywgekluZGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnIHN0eWxlPXt7bWFyZ2luOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk9uQ2hhbmdlKGV2dCwgcHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkID09IChwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aH0gb25DaGFuZ2U9eygpID0+IG51bGx9Lz48L3RkPjx0ZD5BbGw8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5PcHRpb25zLm1hcCgoZiwgaSkgPT4gPHRyIGtleT17aX0gb25DbGljaz17KGV2dCkgPT4gcHJvcHMuT25DaGFuZ2UoZXZ0LCBbZl0pfT48dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2YuU2VsZWN0ZWR9IG9uQ2hhbmdlPXsoKT0+IG51bGx9Lz48L3RkPjx0ZD57Zi5UZXh0fTwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hQcmV2aWV3LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8yOS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoT3BlblNFRSBmcm9tICcuL09wZW5TRUUvRXZlbnRTZWFyY2hPcGVuU0VFJztcclxuaW1wb3J0IEV2ZW50U2VhcmNoVHJlbkRBUCBmcm9tICcuL1RyZW5EQVAvRXZlbnRTZWFyY2hUcmVuREFQJztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUFFJIGZyb20gJy4vUFFJL0V2ZW50U2VhcmNoUFFJJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlldyA9IChwcm9wczoge0V2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXJ9KSA9PiB7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAge3Byb3BzLkV2ZW50SUQgPCAxID8gPHNwYW4+Tm8gRXZlbnQgU2VsZWN0ZWQgLi4uIDwvc3Bhbj4gOlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoT3BlblNFRSBFdmVudElEPXtwcm9wcy5FdmVudElEfSBXaWR0aD17cHJvcHMuV2lkdGggLSA1NX0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLyAzIC0gMX0gLz5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFRyZW5EQVAgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRoIC0gNTV9IEhlaWdodD17cHJvcHMuSGVpZ2h0IC8gMyAtIDF9IC8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQUUkgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRoIC0gNTV9IEhlaWdodD17cHJvcHMuSGVpZ2h0IC8gMyAtIDF9IC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgIDwvPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VhcmNoUHJldmlldzsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hPcGVuU0VFLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMy8wMy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBmcm9tICcuL0V2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgZnJvbSAnLi9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFNlYXJjaE9wZW5TRUUocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAwLCBib3R0b206IDIwLCBsZWZ0OiAwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSAtIDY1O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj48YSBocmVmPXsgaG9tZVBhdGggKyAnT3BlblNFRT9ldmVudGlkPScgKyBwcm9wcy5FdmVudElEfSB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IGluIE9wZW5TRUU8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCB9fT5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nVm9sdGFnZScgRGF0YVR5cGU9J1RpbWUnIFdpZHRoPXtzdmdXaWR0aH0gSGVpZ2h0PXtzdmdIZWlnaHQvMn0vPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdDdXJyZW50JyBEYXRhVHlwZT0nVGltZScgV2lkdGg9e3N2Z1dpZHRofSBIZWlnaHQ9e3N2Z0hlaWdodC8yfS8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRofSBIZWlnaHQ9ezI1fSBEYXRhVHlwZT0nVGltZScvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIGxpbmUsIGV4dGVudCB9IGZyb20gJ2QzJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgPSAocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBNZWFzdXJlbWVudFR5cGU6ICdDdXJyZW50JyB8ICdWb2x0YWdlJyB8ICdUcmlwQ29pbEN1cnJlbnQnLCBEYXRhVHlwZTogJ1RpbWUnIHwgJ1N0YXRpc3RpYycgfCAnVHJlbmRpbmcnLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoO1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IFtwYXRocywgc2V0UGF0aHNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRIaWRkZW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0UGF0aHMoW10pO1xyXG4gICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbcHJvcHMuRXZlbnRJRF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnQvRGF0YT9ldmVudElkPSR7cHJvcHMuRXZlbnRJRH1gICtcclxuICAgICAgICAgICAgICAgIGAmcGl4ZWxzPSR7c3ZnV2lkdGh9YCArXHJcbiAgICAgICAgICAgICAgICBgJnR5cGU9JHtwcm9wcy5NZWFzdXJlbWVudFR5cGV9YCArXHJcbiAgICAgICAgICAgICAgICBgJmRhdGFUeXBlPSR7cHJvcHMuRGF0YVR5cGV9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKGRhdGEgPT4gRHJhd0NoYXJ0KGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIERyYXdDaGFydChkYXRhKSB7XHJcbiAgICAgICAgc2V0SGlkZGVuKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoWzAsIHN2Z1dpZHRoXSk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgMF0pO1xyXG5cclxuICAgICAgICBsZXQgeWV4dGVudCA9IFswLCAwXTtcclxuICAgICAgICBsZXQgeGV4dGVudCA9IFs5MDA3MTk5MjU0NzQwOTkxLCAtOTAwNzE5OTI1NDc0MDk5MF07XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCwga2V5cykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV3eWV4ZW50ID0gZXh0ZW50KGRhdGFba2V5XSwgZCA9PiBkWzFdKTtcclxuICAgICAgICAgICAgbGV0IG5ld3hleGVudCA9IGV4dGVudChkYXRhW2tleV0sIGQgPT4gZFswXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChuZXd5ZXhlbnRbMF0udG9TdHJpbmcoKSkgPCB5ZXh0ZW50WzBdKSB5ZXh0ZW50WzBdID0gcGFyc2VGbG9hdChuZXd5ZXhlbnRbMF0udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobmV3eWV4ZW50WzFdLnRvU3RyaW5nKCkpID4geWV4dGVudFsxXSkgeWV4dGVudFsxXSA9IHBhcnNlRmxvYXQobmV3eWV4ZW50WzFdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG5ld3hleGVudFswXS50b1N0cmluZygpKSA8IHhleHRlbnRbMF0pIHhleHRlbnRbMF0gPSBwYXJzZUZsb2F0KG5ld3hleGVudFswXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChuZXd4ZXhlbnRbMV0udG9TdHJpbmcoKSkgPiB4ZXh0ZW50WzFdKSB4ZXh0ZW50WzFdID0gcGFyc2VGbG9hdChuZXd4ZXhlbnRbMV0udG9TdHJpbmcoKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgeWV4dGVudCA9IFsxLjIwICogeWV4dGVudFswXSwgMS4yMCAqIHlleHRlbnRbMV1dXHJcbiAgICAgICAgeS5kb21haW4oeWV4dGVudCk7XHJcbiAgICAgICAgeC5kb21haW4oeGV4dGVudCk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8W251bWJlciwgbnVtYmVyXT4oKS54KGQgPT4geChkWzBdKSkueShkID0+IHkoZFsxXSkpO1xyXG5cclxuICAgICAgICBsZXQgbmV3UGF0aHMgPSBbXTtcclxuICAgICAgICAkLmVhY2goT2JqZWN0LmtleXMoZGF0YSksIChpbmRleCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIG5ld1BhdGhzLnB1c2goPHBhdGgga2V5PXtrZXl9IGZpbGw9J25vbmUnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlPXtnZXRDb2xvcihrZXkpfSBkPXtsaW5lZnVuYyhkYXRhW2tleV0pfSAvPik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UGF0aHMobmV3UGF0aHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ1ZBJykgPj0gMCkgcmV0dXJuICcjQTMwMDAwJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVkInKSA+PSAwKSByZXR1cm4gJyMwMDI5QTMnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWQycpID49IDApIHJldHVybiAnIzAwN0EyOSc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ1ZOJykgPj0gMCkgcmV0dXJuICcjYzNjM2MzJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignSUEnKSA+PSAwKSByZXR1cm4gJyNGRjAwMDAnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJQicpID49IDApIHJldHVybiAnIzAwNjZDQyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lDJykgPj0gMCkgcmV0dXJuICcjMzNDQzMzJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignSVInKSA+PSAwKSByZXR1cm4gJyNjM2MzYzMnO1xyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJhbk51bU9uZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtVHdvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1UaHJlZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGAjJHsocmFuTnVtT25lLmxlbmd0aCA+IDEgPyByYW5OdW1PbmUgOiBcIjBcIiArIHJhbk51bU9uZSl9JHsocmFuTnVtVHdvLmxlbmd0aCA+IDEgPyByYW5OdW1Ud28gOiBcIjBcIiArIHJhbk51bVR3byl9JHsocmFuTnVtVGhyZWUubGVuZ3RoID4gMSA/IHJhbk51bVRocmVlIDogXCIwXCIgKyByYW5OdW1UaHJlZSl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHN2Z0hlaWdodCAvKiwgbWFyZ2luOiAnMHgnLCBwYWRkaW5nOiAnMHB4JyovIH19IGhpZGRlbj17aGlkZGVufT5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD17c3ZnV2lkdGh9IGhlaWdodD17c3ZnSGVpZ2h0fSBzdHlsZT17eyBib3JkZXI6ICcycHggc29saWQgbGlnaHRncmF5Jy8qLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAyMCovIH19PlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhdGhzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIHNlbGVjdCwgYXhpc0JvdHRvbSB9IGZyb20gJ2QzJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzID0gKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsIERhdGFUeXBlOiAnVHJlbmRpbmcnIHwgJ1RpbWUnIH0pID0+IHtcclxuICAgIC8vY29uc3QgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNjAsIGxlZnQ6IDQwIH07XHJcbiAgICAvL2NvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0O1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aDtcclxuXHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbeEF4aXNUaWNrcywgc2V0WEF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbcHJvcHMuRXZlbnRJRF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnQvRGF0YT9ldmVudElkPSR7cHJvcHMuRXZlbnRJRH1gICtcclxuICAgICAgICAgICAgICAgIGAmcGl4ZWxzPSR7c3ZnV2lkdGh9YCArXHJcbiAgICAgICAgICAgICAgICBgJnR5cGU9Vm9sdGFnZWAgK1xyXG4gICAgICAgICAgICAgICAgYCZkYXRhVHlwZT0ke3Byb3BzLkRhdGFUeXBlfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoZGF0YSA9PiBEcmF3Q2hhcnQoZGF0YSkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFRpY2tGb3JtYXR0ZXIodmFsdWUsIGF4aXMpIHtcclxuXHJcbiAgICAgICAgdmFyIGZhY3RvciA9IGF4aXMudGlja0RlY2ltYWxzID8gTWF0aC5wb3coMTAsIGF4aXMudGlja0RlY2ltYWxzKSA6IDE7XHJcbiAgICAgICAgdmFyIGZvcm1hdHRlZCA9IFwiXCIgKyBNYXRoLnJvdW5kKHZhbHVlICogZmFjdG9yKSAvIGZhY3RvcjtcclxuXHJcbiAgICAgICAgLy8gSWYgdGlja0RlY2ltYWxzIHdhcyBzcGVjaWZpZWQsIGVuc3VyZSB0aGF0IHdlIGhhdmUgZXhhY3RseSB0aGF0XHJcbiAgICAgICAgLy8gbXVjaCBwcmVjaXNpb247IG90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSB2YWx1ZSdzIG93biBwcmVjaXNpb24uXHJcblxyXG4gICAgICAgIGlmIChheGlzLnRpY2tEZWNpbWFscyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWNpbWFsID0gZm9ybWF0dGVkLmluZGV4T2YoXCIuXCIpO1xyXG4gICAgICAgICAgICB2YXIgcHJlY2lzaW9uID0gZGVjaW1hbCA9PSAtMSA/IDAgOiBmb3JtYXR0ZWQubGVuZ3RoIC0gZGVjaW1hbCAtIDE7XHJcbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24gPCBheGlzLnRpY2tEZWNpbWFscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcmVjaXNpb24gPyBmb3JtYXR0ZWQgOiBmb3JtYXR0ZWQgKyBcIi5cIikgKyAoXCJcIiArIGZhY3Rvcikuc3Vic3RyKDEsIGF4aXMudGlja0RlY2ltYWxzIC0gcHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZDtcclxuICAgIH07XHJcbiAgICAvLyByb3VuZCB0byBuZWFyYnkgbG93ZXIgbXVsdGlwbGUgb2YgYmFzZVxyXG4gICAgZnVuY3Rpb24gZmxvb3JJbkJhc2UobiwgYmFzZSkge1xyXG4gICAgICAgIHJldHVybiBiYXNlICogTWF0aC5mbG9vcihuIC8gYmFzZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YSkge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRIaWRkZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SGlkZGVuKGZhbHNlKTtcclxuXHJcbiAgICAgICAgbGV0IHNlcmllcyA9IGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFswLCBzdmdXaWR0aF0pLmRvbWFpbihbc2VyaWVzWzBdWzBdLCBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdWzBdXSk7XHJcblxyXG4gICAgICAgIGxldCB0aWNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBzcGFuID0geC5kb21haW4oKVsxXSAtIHguZG9tYWluKClbMF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHguZG9tYWluKClbMF0gKyBzcGFuIC8gNzsgaSA8IHguZG9tYWluKClbMV07IGkgKz0gc3Bhbi83KSB7XHJcbiAgICAgICAgICAgIHRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4KGkpfSwkezB9KWB9IHN0eWxlPXt7IG9wYWNpdHk6IGkgPCB4LmRvbWFpbigpWzBdIHx8IGkgPiB4LmRvbWFpbigpWzFdID8gMCA6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD17YE0gMCw2IFYgLTZgfSBzdHlsZT17eyBzdHJva2U6ICdibGFjaycgfX0gc3Ryb2tlV2lkdGg9ezAuNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHk9XCIyMFwiIHRleHRBbmNob3I9J21pZGRsZSc+e21vbWVudCgnMTk3MC0wMS0wMVQwMDowMDowMCcpLmFkZChpLCAnbWlsbGlzZWNvbmRzJykuZm9ybWF0KHByb3BzLkRhdGFUeXBlID09ICdUaW1lJyA/ICdzcy5TU1MnIDogJ0hIJyl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0WEF4aXNUaWNrcyh0aWNrcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHN2Z0hlaWdodCAvKiwgbWFyZ2luOiAnMHgnLCBwYWRkaW5nOiAnMHB4JyovIH19IGhpZGRlbj17aGlkZGVufT5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD17c3ZnV2lkdGh9IGhlaWdodD17c3ZnSGVpZ2h0fSA+XHJcbiAgICAgICAgICAgICAgICB7eEF4aXNUaWNrc31cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXM7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUFFJLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50U2VhcmNoUFFJKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPjxhIGhyZWY9e2hvbWVQYXRoICsgJ1BRST9ldmVudGlkPScgKyBwcm9wcy5FdmVudElEfSB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IGluIFBRSTwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwIH19PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFRyZW5EQVAudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBmcm9tICcuLi9PcGVuU0VFL0V2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgZnJvbSAnLi4vT3BlblNFRS9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFNlYXJjaFRyZW5EQVAocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAwLCBib3R0b206IDIwLCBsZWZ0OiAwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSAtIDY1O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj48YSBocmVmPXtob21lUGF0aCArICdUcmVuREFQP2V2ZW50aWQ9JyArIHByb3BzLkV2ZW50SUR9IHRhcmdldD1cIl9ibGFua1wiPlZpZXcgaW4gVHJlbkRBUDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwIH19PlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdWb2x0YWdlJyBEYXRhVHlwZT0nVHJlbmRpbmcnIFdpZHRoPXtzdmdXaWR0aH0gSGVpZ2h0PXtzdmdIZWlnaHQgLyAyfSAvPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdDdXJyZW50JyBEYXRhVHlwZT0nVHJlbmRpbmcnIFdpZHRoPXtzdmdXaWR0aH0gSGVpZ2h0PXtzdmdIZWlnaHQgLyAyfSAvPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzIEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXsyNX0gRGF0YVR5cGU9J1RyZW5kaW5nJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV4cG9ydENTVi50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4cG9ydFRvQ3N2PFQ+KGRhdGE6IFRbXSwgZmlsZW5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgIHZhciByb3dzID0gW09iamVjdC5rZXlzKGRhdGFbMF0pXTtcclxuICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgcm93cy5wdXNoKE9iamVjdC5rZXlzKHZhbHVlKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XSB9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcHJvY2Vzc1JvdyA9IGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICB2YXIgZmluYWxWYWwgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgaW5uZXJWYWx1ZSA9IHJvd1tqXSA9PT0gbnVsbCA/ICcnIDogcm93W2pdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChyb3dbal0gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpbm5lclZhbHVlID0gcm93W2pdLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbm5lclZhbHVlLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc2VhcmNoKC8oXCJ8LHxcXG4pL2cpID49IDApXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnXCInICsgcmVzdWx0ICsgJ1wiJztcclxuICAgICAgICAgICAgaWYgKGogPiAwKVxyXG4gICAgICAgICAgICAgICAgZmluYWxWYWwgKz0gJywnO1xyXG4gICAgICAgICAgICBmaW5hbFZhbCArPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaW5hbFZhbCArICdcXG4nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY3N2RmlsZSA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY3N2RmlsZSArPSBwcm9jZXNzUm93KHJvd3NbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2NzdkZpbGVdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XHJcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUgMTArXHJcbiAgICAgICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGlmIChsaW5rLmRvd25sb2FkICE9PSB1bmRlZmluZWQpIHsgLy8gZmVhdHVyZSBkZXRlY3Rpb25cclxuICAgICAgICAgICAgLy8gQnJvd3NlcnMgdGhhdCBzdXBwb3J0IEhUTUw1IGRvd25sb2FkIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWFnRHVyQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzIzLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxvZywgc2NhbGVMaW5lYXIsIG1heCwgbGluZSwgZXZlbnQsIHpvb21UcmFuc2Zvcm0sIHpvb20sIHNlbGVjdCB9IGZyb20gJ2QzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmludGVyZmFjZSBpRGF0YSB7XHJcbiAgICBJRDogbnVtYmVyLFxyXG4gICAgTmFtZTogc3RyaW5nLFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQZXJVbml0TWFnbml0dWRlOiBudW1iZXIsXHJcbiAgICBEdXJhdGlvblNlY29uZHM6IG51bWJlcixcclxuICAgIExvYWRPcmRlcjogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gICAgTWFnbml0dWRlOiBudW1iZXIsXHJcbiAgICBEdXJhdGlvbjogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBNYWdEdXJDdXJ2ZSB7XHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBhdGg6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBNYWdEdXJDaGFydCA9IChwcm9wczogeyBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciwgUG9pbnRzOiBQb2ludFtdIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAyMCwgYm90dG9tOiA2MCwgbGVmdDogNDAgfTtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG5cclxuICAgIGNvbnN0IFtkb21haW5zLCBzZXREb21haW5zXSA9IFJlYWN0LnVzZVN0YXRlPHsgWDogeyBMb3dlcjogbnVtYmVyLCBVcHBlcjogbnVtYmVyIH0sIFk6IHsgTG93ZXI6IG51bWJlciwgVXBwZXI6IG51bWJlciB9IH0+KHsgWDogeyBMb3dlcjogMC4wMDAwMSwgVXBwZXI6IDEwMDAwMDAgfSwgWTogeyBMb3dlcjogMCwgVXBwZXI6IDIuNSB9IH0pO1xyXG4gICAgY29uc3QgW3hBeGlzVGlja3MsIHNldFhBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbeUF4aXNUaWNrcywgc2V0WUF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJDdXJ2ZURhdGEsIHNldE1hZ0R1ckN1cnZlRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxpRGF0YVtdPihbXSk7XHJcbiAgICBjb25zdCBbbWFnRHVyQ3VydmVzLCBzZXRNYWdEdXJDdXJ2ZXNdID0gUmVhY3QudXNlU3RhdGU8TWFnRHVyQ3VydmVbXT4oW10pO1xyXG4gICAgY29uc3QgW21hZ0R1ckNpcmNsZXMsIHNldE1hZ0R1ckNpcmNsZXNdID0gUmVhY3QudXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0TWFnRHVyQ3VydmVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBpRGF0YVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1hZ0R1ckN1cnZlRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgQnVpbGRNYWdEdXJDdXJ2ZShkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBCdWlsZFlBeGlzKCk7XHJcbiAgICAgICAgQnVpbGRYQXhpcygpO1xyXG4gICAgICAgIEJ1aWxkTWFkRHVyQ2lyY2xlcyhwcm9wcy5Qb2ludHMpO1xyXG4gICAgICAgIEJ1aWxkTWFnRHVyQ3VydmUobWFnRHVyQ3VydmVEYXRhKTtcclxuICAgIH0sIFtkb21haW5zLCBwcm9wcy5Qb2ludHNdKVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1hZ0R1ckN1cnZlcygpOiBKUXVlcnkuanFYSFI8aURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NYWdEdXJDdXJ2ZXNgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHhBeGlzVGV4dCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodmFsdWUgPCAwLjAwMDAwMDEpIHJldHVybiAodmFsdWUgKiAxMDAwMDAwMDAwKS50b0ZpeGVkKDApICsgJ24nO1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDAuMDAxKSByZXR1cm4gKHZhbHVlICogMTAwMDAwMCkudG9GaXhlZCgwKSArICfCtSc7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMCAmJiB2YWx1ZSA8IDEwMDAwMDApIHJldHVybiAodmFsdWUgLyAxMDAwKS50b0ZpeGVkKDApICsgJ2snO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwMCkgcmV0dXJuICh2YWx1ZSAvIDEwMDAwMDApLnRvRml4ZWQoMCkgKyAnTSc7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkgcmV0dXJuIHZhbHVlLnRvUHJlY2lzaW9uKDEpLnRvU3RyaW5nKClcclxuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkWEF4aXMoKSB7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG5cclxuICAgICAgICBsZXQgaSA9IHBhcnNlRmxvYXQoTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2coZG9tYWlucy5YLkxvd2VyKSAvIE1hdGgubG9nKDEwKSkpLnRvUHJlY2lzaW9uKDEpKTtcclxuICAgICAgICBsZXQgdGlja3MgPSBbXVxyXG4gICAgICAgIGxldCBsb2dEb21haW4gPSB4LmRvbWFpbigpLm1hcChsID0+IE1hdGgubG9nKGwpIC8gTWF0aC5sb2coMTApKTtcclxuICAgICAgICBsZXQgbGREaWZmID0gbG9nRG9tYWluWzFdIC0gbG9nRG9tYWluWzBdO1xyXG4gICAgICAgIGZvciAoOyBpIDw9IGRvbWFpbnMuWC5VcHBlcjsgaSA9IGkgKiAxMCkge1xyXG4gICAgICAgICAgICB0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eChpKX0sJHtzdmdIZWlnaHR9KWB9IHN0eWxlPXt7IG9wYWNpdHk6IGkgPCB4LmRvbWFpbigpWzBdIHx8IGkgPiB4LmRvbWFpbigpWzFdID8gMCA6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD17YE0gMCw2IFYgLSR7c3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcH1gfSAgc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB5PVwiMjBcIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPnt4QXhpc1RleHQoaSl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGREaWZmIDwgNSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0pLm1hcChudW0gPT4gPHBhdGgga2V5PXtudW19IGQ9e2BNICR7LypNYXRoLmxvZyhudW0gKiBpKSAvIE1hdGgubG9nKDEwKSAtIE1hdGgubG9nKGkpIC8gTWF0aC5sb2coMTApKi94KG51bSAqIGkpIC0geChpKX0sNiBWIC0ke3N2Z0hlaWdodCAtIG1hcmdpbi50b3B9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9IC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0WEF4aXNUaWNrcyh0aWNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRZQXhpcygpIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCBzdGVwID0gKHkuZG9tYWluKClbMV0gLSB5LmRvbWFpbigpWzBdIDw9IDEuNSA/IDAuMSA6IDAuNSk7XHJcbiAgICAgICAgbGV0IHl0aWNrcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKGRvbWFpbnMuWS5Mb3dlcik7IGkgPD0gZG9tYWlucy5ZLlVwcGVyOyBpID0gc3RlcCArIGkpIHtcclxuICAgICAgICAgICAgeXRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHt5KGkpfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeS5kb21haW4oKVswXSB8fCBpID4geS5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNIC02LDAgSCAke3N2Z1dpZHRofWB9IHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD1cIi0xNVwiIGR5PVwiMC4zMmVtXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57aS50b0ZpeGVkKDEpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz4pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0WUF4aXNUaWNrcyh5dGlja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkTWFnRHVyQ3VydmUoZGF0YTogaURhdGFbXSkge1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPGlEYXRhPigpLngoZCA9PiB4KGQuRHVyYXRpb25TZWNvbmRzKSkueShkID0+IHkoZC5QZXJVbml0TWFnbml0dWRlKSk7XHJcbiAgICAgICAgbGV0IG1kY3MgPSBfLmdyb3VwQnkoZGF0YSwgKGQpID0+IGQuSUQpO1xyXG4gICAgICAgIGxldCBtZGNzcyA9IE9iamVjdC5rZXlzKG1kY3MpLm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IE5hbWU6IG1kY3Nba2V5XVswXS5OYW1lLCBWaXNpYmxlOiBtZGNzW2tleV1bMF0uVmlzaWJsZSwgQ29sb3I6IG1kY3Nba2V5XVswXS5Db2xvciwgUGF0aDogbGluZWZ1bmMobWRjc1trZXldKSB9IH0pO1xyXG4gICAgICAgIHNldE1hZ0R1ckN1cnZlcyhtZGNzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRNYWREdXJDaXJjbGVzKGRhdGE6IFBvaW50W10pIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuICAgICAgICBsZXQgY2lyY2xlcyA9IGRhdGEuZmlsdGVyKHBvaW50ID0+IHBvaW50Lk1hZ25pdHVkZSA+PSBkb21haW5zLlkuTG93ZXIgJiYgcG9pbnQuTWFnbml0dWRlIDw9IGRvbWFpbnMuWS5VcHBlciAmJiBwb2ludC5EdXJhdGlvbiA+PSBkb21haW5zLlguTG93ZXIgJiYgcG9pbnQuRHVyYXRpb24gPD0gZG9tYWlucy5YLlVwcGVyKS5tYXAoKHBvaW50LCBpbmRleCkgPT4gPGNpcmNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkb3RcIiByPXszfSBjeD17eChwb2ludC5EdXJhdGlvbil9IGN5PXt5KHBvaW50Lk1hZ25pdHVkZSl9IGZpbGw9J2JsdWUnIC8+KTtcclxuICAgICAgICBzZXRNYWdEdXJDaXJjbGVzKGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVpvb20oZXZ0KSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcblxyXG4gICAgICAgIC8vIHVzZSBldmVudC5uYXRpdmVFdmVudC5vZmZzZXRYIGFuZCBZXHJcbiAgICAgICAgbGV0IHpvb21Mb2NhdGlvblkgPSBldnQubmF0aXZlRXZlbnQub2Zmc2V0WTtcclxuICAgICAgICBsZXQgem9vbUxvY2F0aW9uWCA9IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRYO1xyXG5cclxuICAgICAgICAvLyBldmVudC5kZWx0YVkgcG9zaXRpdmUgaXMgd2hlZWwgZG93biBvciBvdXQgYW5kIG5lZ2F0aXZlIGlzIHdoZWVsIHVwIG9yIGluXHJcbiAgICAgICAgaWYgKGV2dC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5YTGVuZ3RoID0gKHgucmFuZ2UoKVsxXSAtIHgucmFuZ2UoKVswXSkgKiAwLjc1O1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWUxlbmd0aCA9ICh5LnJhbmdlKClbMV0gLSB5LnJhbmdlKClbMF0pICogMC43NTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGFuZGxlWm9vbScsIHsgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSwgWTogeyBMb3dlcjogem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyLCBVcHBlcjogem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyIH0gfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREb21haW5zKHtcclxuICAgICAgICAgICAgICAgIFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sXHJcbiAgICAgICAgICAgICAgICBZOiB7IExvd2VyOiB5LmludmVydCh6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIpLCBVcHBlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRvbWFpblhMZW5ndGggPSAoeC5yYW5nZSgpWzFdIC0geC5yYW5nZSgpWzBdKSAqIDEuMjU7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5ZTGVuZ3RoID0gKHkucmFuZ2UoKVsxXSAtIHkucmFuZ2UoKVswXSkgKiAxLjI1O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoYW5kbGVab29tJywgeyBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LCBZOiB7IExvd2VyOiB6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIsIFVwcGVyOiB6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIgfSB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldERvbWFpbnMoe1xyXG4gICAgICAgICAgICAgICAgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSxcclxuICAgICAgICAgICAgICAgIFk6IHsgTG93ZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiksIFVwcGVyOiB5LmludmVydCh6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWcoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChldnQubmF0aXZlRXZlbnQub2Zmc2V0WCA8IG1hcmdpbi5sZWZ0IHx8IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRYID4gc3ZnV2lkdGggKyBtYXJnaW4ubGVmdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChldnQubmF0aXZlRXZlbnQub2Zmc2V0WSA8IG1hcmdpbi50b3AgfHwgZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFkgPiBzdmdIZWlnaHQgKyBtYXJnaW4udG9wKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV2dC5wZXJzaXN0KCk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcblxyXG4gICAgICAgICQoJyNtYWdEdXJDaGFydCcpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXREb21haW5zKHtcclxuICAgICAgICAgICAgICAgIFg6IHtcclxuICAgICAgICAgICAgICAgICAgICBMb3dlcjogeC5pbnZlcnQoeChkb21haW5zLlguTG93ZXIpICsgZXZ0LmNsaWVudFggLSBlLmNsaWVudFgpLFxyXG4gICAgICAgICAgICAgICAgICAgIFVwcGVyOiB4LmludmVydCh4KGRvbWFpbnMuWC5VcHBlcikgKyBldnQuY2xpZW50WCAtIGUuY2xpZW50WClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG93ZXI6IHkuaW52ZXJ0KHkoZG9tYWlucy5ZLkxvd2VyKSArIGV2dC5jbGllbnRZIC0gZS5jbGllbnRZKSxcclxuICAgICAgICAgICAgICAgICAgICBVcHBlcjogeS5pbnZlcnQoeShkb21haW5zLlkuVXBwZXIpICsgZXZ0LmNsaWVudFkgLSBlLmNsaWVudFkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BEcmFnKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJyNtYWdEdXJDaGFydCcpLm9mZignbW91c2Vtb3ZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRab29tKGV2dCkge1xyXG4gICAgICAgIHNldERvbWFpbnMoeyBYOiB7IExvd2VyOiAwLjAwMDAxLCBVcHBlcjogMTAwMDAwMCB9LCBZOiB7IExvd2VyOiAwLCBVcHBlcjogMi41IH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZVJlc2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb21haW5zLlguTG93ZXIgPT0gMC4wMDAwMSAmJiBkb21haW5zLlguVXBwZXIgPT0gMTAwMDAwMCAmJiBkb21haW5zLlkuTG93ZXIgPT0gMCAmJiBkb21haW5zLlkuVXBwZXIgPT0gMi41XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMjAsIHJpZ2h0OiAyNSB9fSBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXtyZXNldFpvb219IGhpZGRlbj17aGlkZVJlc2V0KCl9PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdmcgaWQ9XCJtYWdEdXJDaGFydFwiIHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IHN0eWxlPXt7IGZpbGw6ICdub25lJywgc3Ryb2tlOiAnYmxhY2snLCBzdHJva2VXaWR0aDogJzFweCcsIHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcycsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgZm9udFNpemU6ICdzbWFsbCcgfX0gb25XaGVlbD17aGFuZGxlWm9vbX0gb25Nb3VzZURvd249e2hhbmRsZURyYWd9IG9uTW91c2VVcD17c3RvcERyYWd9PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBEcmF3IGNoYXJ0IGRhdGEgZmlyc3QgKi99XHJcbiAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICB7bWFnRHVyQ3VydmVzLm1hcCgobWRjLCBpbmRleCkgPT4gKG1kYy5WaXNpYmxlID8gPHBhdGgga2V5PXtpbmRleH0gZD17bWRjLlBhdGh9IHN0cm9rZT17bWRjLkNvbG9yfSAvPiA6IG51bGwpKX1cclxuICAgICAgICAgICAgICAgICAgICB7bWFnRHVyQ2lyY2xlc31cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRHJhdyB3aGl0ZSByZWN0YW5nbGVzIGFyb3VuZCB0aGUgYm9yZGVyIHNvIGRhdGEgd29uJ3Qgc2hvdyBvdXRzaWRlIGNoYXJ0ICovfVxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17MH0gd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e21hcmdpbi50b3B9IGZpbGw9J3doaXRlJyBzdHJva2U9J3doaXRlJyAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17cHJvcHMuSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSAtIG1hcmdpbi50b3B9IHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXttYXJnaW4uYm90dG9tICsgbWFyZ2luLnRvcH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17bWFyZ2luLmxlZnR9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9e3Byb3BzLldpZHRoIC0gbWFyZ2luLnJpZ2h0fSB5PXswfSB3aWR0aD17bWFyZ2luLnJpZ2h0fSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IExlZ2VuZCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIG1hZ0R1ckN1cnZlcy5tYXAoKG1kYywgaW5kZXgpID0+IDxyZWN0IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvcGFjaXR5OiAobWRjLlZpc2libGUgPyAxIDogMC4yNSkgfX0ga2V5PXtpbmRleH0geD17bWFyZ2luLmxlZnQgKyAxMCArIDIwICogaW5kZXh9IHk9e3N2Z0hlaWdodCArIDQwfSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e21kYy5Db2xvcn0gb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kYy5WaXNpYmxlID0gIW1kYy5WaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlID0gXy5jbG9uZURlZXAobWFnRHVyQ3VydmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVzKHVwZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZGNkID0gXy5jbG9uZURlZXAobWFnRHVyQ3VydmVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWRjZC5maWx0ZXIoeCA9PiB4Lk5hbWUgPT0gbWRjLk5hbWUpLmZvckVhY2goeCA9PiB4LlZpc2libGUgPSBtZGMuVmlzaWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1hZ0R1ckN1cnZlRGF0YShtZGNkKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19Pjx0aXRsZT57bWRjLk5hbWV9PC90aXRsZT48L3JlY3Q+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyB0aWNrcyovfVxyXG4gICAgICAgICAgICAgICAge3hBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB4PXtzdmdXaWR0aCAvIDJ9IHk9e3N2Z0hlaWdodCArIG1hcmdpbi50b3AgKyAyMH0+RHVyYXRpb24gKHMpPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgey8qIFlBeGlzIHRpY2tzIGFuZCBMYWJlbHMqL31cclxuICAgICAgICAgICAgICAgIHt5QXhpc1RpY2tzfVxyXG4gICAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAwLDApYH0geT17bWFyZ2luLmxlZnQgLSAyNX0geD17LXN2Z0hlaWdodCAvIDIgLSBtYXJnaW4uYm90dG9tfT5QZXIgVW5pdCBWb2x0YWdlPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IGJvcmRlcnMgKi99XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAke21hcmdpbi5sZWZ0fSAke21hcmdpbi50b3B9IEggJHtzdmdXaWR0aCArIG1hcmdpbi5sZWZ0fSBWICR7c3ZnSGVpZ2h0fSBIICR7bWFyZ2luLmxlZnR9IFYgJHttYXJnaW4udG9wfWB9IC8+XHJcblxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hZ0R1ckNoYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=