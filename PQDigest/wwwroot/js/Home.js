(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./tsx/Home/EventCountTable.tsx":
/*!**************************************!*\
  !*** ./tsx/Home/EventCountTable.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
//******************************************************************************************************
//  EventCountTable.tsx - Gbtc
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
//  06/22/2020 - Billy Ernest
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



var EventCountTable = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), data = _a[0], setData = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('Name'), 2), sortField = _b[0], setSortField = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), ascending = _c[0], setAscending = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        return GetData();
    }, []);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/EventCountsTable",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(function (data) { return setData(data); });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
            { key: 'Name', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
            { key: 'Total', label: 'Total', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Sag', label: 'Sag', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Swell', label: 'Swell', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Interruption', label: 'Int', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Transient', label: 'Trans', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: 'Fault', label: 'Fault', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
            { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
        ], tableClass: "table table-hover", data: data, sortField: sortField, ascending: ascending, onSort: function (d) {
            if (d.col == sortField) {
                var ordered = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.orderBy(data, [sortField], [(!ascending ? 'asc' : 'desc')]);
                setData(ordered);
                setAscending(!ascending);
            }
            else {
                setAscending(ascending);
                setSortField(d.col);
                var ordered = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.orderBy(data, [d.col], [(ascending ? 'asc' : 'desc')]);
                setData(ordered);
            }
        }, onClick: function (data) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: props.Height - 60, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } });
};
/* harmony default export */ __webpack_exports__["default"] = (EventCountTable);


/***/ }),

/***/ "./tsx/Home/EventCountsByMonth.tsx":
/*!*****************************************!*\
  !*** ./tsx/Home/EventCountsByMonth.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  EventCountsByMonth.tsx - Gbtc
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


var EventCountsByMonth = function (props) {
    var margin = { top: 15, right: 20, bottom: 40, left: 30 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''), 2), totalPath = _a[0], setTotalPath = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), paths = _b[0], setPaths = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), 2), hidden = _c[0], setHidden = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), axisPaths = _d[0], setAxisPaths = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), axisTicks = _e[0], setAxisTicks = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), yaxisTicks = _f[0], setYAxisTicks = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        //setHidden(true);
        setPaths([]);
        return GetData();
    }, []);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/EventCountsByMonth",
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
        //let series = data[Object.keys(data)[0]];
        //let x = scaleOrdinal().rangeRound([margin.left, svgWidth + margin.left]).domain(data.map(x => x.month));
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([0, Object(d3__WEBPACK_IMPORTED_MODULE_1__["max"])(data.map(function (x) { return x.Total; }))]);
        var yticks = [];
        for (var i = 0; i < y.domain()[1]; i = i + 5) {
            yticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", opacity: "1", transform: "translate(" + margin.left + "," + y(i) + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M -7 0 H " + svgWidth, strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { x: "-15", dy: "0.32em", textAnchor: 'middle' }, i)));
        }
        setYAxisTicks(yticks);
        var ticks = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index, className: "tick", opacity: "1", transform: "translate(" + (margin.left + svgWidth * (index + 1) / 12) + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { y2: "6" })));
        });
        setAxisTicks(ticks);
        var labels = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index, className: "tick", opacity: "1", transform: "translate(" + (margin.left + (svgWidth * ((index + 0.25)) / 12)) + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y2: "6", dy: "1em" }, x.Month)));
        });
        setAxisPaths(labels);
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(d.Month) + 0.5)) / 12); }).y(function (d) { return y(d.Total); });
        setTotalPath(linefunc(data));
        var boxes = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index, onClick: function () { } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag), width: 20, height: svgHeight - y(x.Sag), fill: getColor('sag') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)), width: 20, height: svgHeight - y(x.Swell), fill: getColor('swell') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)), width: 20, height: svgHeight - y(x.Transient), fill: getColor('Transient') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)) - (svgHeight - y(x.Fault)), width: 20, height: svgHeight - y(x.Fault), fill: getColor('Fault') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)) - (svgHeight - y(x.Fault)) - (svgHeight - y(x.Interruption)), width: 20, height: svgHeight - y(x.Interruption), fill: getColor('Interruption') })));
        });
        setPaths(boxes);
    }
    function getColor(type) {
        if (type.toLowerCase() == "sag")
            return 'purple';
        if (type.toLowerCase() == "swell")
            return 'green';
        if (type.toLowerCase() == "transient")
            return 'orange';
        if (type.toLowerCase() == "interruption")
            return 'red';
        if (type.toLowerCase() == "fault")
            return 'blue';
        else
            return '#000000';
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height, width: props.Width, textAlign: 'center' }, hidden: hidden },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: props.Width, height: props.Height, style: { fill: 'none', stroke: 'black', strokeWidth: '1px', shapeRendering: 'crispEdges', fontFamily: 'sans-serif', fontSize: 'small' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: "tick", opacity: "1", transform: "translate(" + margin.left + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { y2: "6" })),
            axisTicks,
            yaxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, axisPaths),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + 10, y: svgHeight + 25, width: 15, height: 15, fill: getColor('sag') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: svgHeight + 38, x: margin.left + 30 }, "Sag"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + 70, y: svgHeight + 25, width: 15, height: 15, fill: getColor('swell') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: svgHeight + 38, x: margin.left + 90 }, "Swell"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + 140, y: svgHeight + 25, width: 15, height: 15, fill: getColor('transient') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: svgHeight + 38, x: margin.left + 160 }, "Transient"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + 240, y: svgHeight + 25, width: 15, height: 15, fill: getColor('fault') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: svgHeight + 38, x: margin.left + 260 }, "Fault"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + 320, y: svgHeight + 25, width: 15, height: 15, fill: getColor('interruption') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: svgHeight + 38, x: margin.left + 340 }, "Interruption"),
            paths,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: 'none', strokeLinejoin: 'round', strokeWidth: '3', stroke: 'darkblue', d: totalPath }))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventCountsByMonth);


/***/ }),

/***/ "./tsx/Home/Home.tsx":
/*!***************************!*\
  !*** ./tsx/Home/Home.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_EventCountsByMonth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Home/EventCountsByMonth */ "./tsx/Home/EventCountsByMonth.tsx");
/* harmony import */ var _Home_EventCountTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/EventCountTable */ "./tsx/Home/EventCountTable.tsx");
/* harmony import */ var _Home_MagDurChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home/MagDurChart */ "./tsx/Home/MagDurChart.tsx");
//******************************************************************************************************
//  Home.tsx - Gbtc
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




var Home = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''), 2), mailTo = _a[0], setMailTo = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle = GetMailto();
        handle.done(function (data) {
            setMailTo("mailto:" + data.Value);
        });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }, []);
    function GetMailto() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/Setting/Email.Mailto",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "100%", margin: '5px 5px 5px 5px ' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Welcome, User"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight - 127) / 2 - 52 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "So far this month there have been xx events recorded from your yy power quality meters."),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + "EventSearch?startDate=" + moment().subtract(365, 'days').format("YYYY-MM-DD") + "&endDate=" + moment().format("YYYY-MM-DD") + "&returnLimit=100" }, "List of last 100 events from all meters over last 365 days")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + "EventSearch?startDate=" + moment().subtract(30, 'days').format("YYYY-MM-DD") + "&endDate=" + moment().format("YYYY-MM-DD") + "&returnLimit=1000" }, "List of all meter activity over last 30 days")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                        "Any questions? Please contact: ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: mailTo }, "The PQ Team")))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Magnitude Duration - Last 30 Days"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_MagDurChart__WEBPACK_IMPORTED_MODULE_3__["default"], { Width: window.innerWidth / 2 - 20, Height: (window.innerHeight - 127) / 2 - 70 })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Historical Event Counts"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_EventCountsByMonth__WEBPACK_IMPORTED_MODULE_1__["default"], { Width: window.innerWidth / 2 - 20, Height: (window.innerHeight - 127) / 2 - 53 }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Meter Activity - Last 30 Days"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0, maxHeight: (window.innerHeight - 127) / 2 - 70, overflowY: 'hidden' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_EventCountTable__WEBPACK_IMPORTED_MODULE_2__["default"], { Width: window.innerWidth / 2 - 20, Height: (window.innerHeight - 127) / 2 - 70 }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),

/***/ "./tsx/Home/MagDurChart.tsx":
/*!**********************************!*\
  !*** ./tsx/Home/MagDurChart.tsx ***!
  \**********************************/
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
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurData = _f[0], setMagDurData = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurCircles = _g[0], setMagDurCircles = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle1 = GetMagDurCurves();
        handle1.done(function (data) {
            setMagDurCurveData(data);
            BuildMagDurCurve(data);
        });
        var handle2 = GetMagDurPoints();
        handle2.done(function (data) {
            setMagDurData(data);
            BuildMadDurCircles(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
            if (handle2.abort != undefined)
                handle2.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        BuildYAxis();
        BuildXAxis();
        BuildMadDurCircles(magDurData);
        BuildMagDurCurve(magDurCurveData);
    }, [domains]);
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
    function GetMagDurPoints() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/MagDurPoints",
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height, width: props.Width } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { position: 'absolute', top: 10, left: svgWidth }, onClick: resetZoom, hidden: hideReset() }, "Reset"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvSG9tZS9FdmVudENvdW50VGFibGUudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL0V2ZW50Q291bnRzQnlNb250aC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvTWFnRHVyQ2hhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryw4QkFBOEI7QUFDOUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUU7QUFDb0I7QUFDdkI7QUFhdkIsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUF1QztJQUN0RCw2RUFBa0QsRUFBakQsWUFBSSxFQUFFLGVBQTJDLENBQUM7SUFDbkQsaUZBQStELEVBQTlELGlCQUFTLEVBQUUsb0JBQW1ELENBQUM7SUFDaEUsK0VBQXlELEVBQXhELGlCQUFTLEVBQUUsb0JBQTZDLENBQUM7SUFFaEUsNENBQUssQ0FBQyxTQUFTLENBQUM7UUFDWixPQUFPLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMsT0FBTztRQUNaLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSx5QkFBc0I7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QUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDbE4scUVBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRztnQkFDelAscUVBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQzVRLHFFQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVB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RUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQUs7b0JBQzVOLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO29CQUMzQixJQUFJLE1BQU0sR0FBRyw2Q0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFdkMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUFFLDBFQUFRLEdBQUcsQ0FBQyxJQUFJLENBQVMsQ0FBTyxFQUxGLENBS0UsQ0FBQztZQUl2QyxVQUFVO1lBQ1gscUVBQU0sQ0FBQyxFQUFFLFFBQVEsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsbUJBQXFCO1lBRXZFLFVBQVU7WUFDWCxxRUFBTSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sdUJBQXlCO1lBRWpILHFFQUFNLENBQUMsRUFBRSxPQUFLLE1BQU0sQ0FBQyxJQUFJLFNBQUksTUFBTSxDQUFDLEdBQUcsWUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksWUFBTSxTQUFTLFdBQU0sTUFBTSxDQUFDLElBQUksV0FBTSxNQUFNLENBQUMsR0FBSyxHQUFJLENBRXZILENBRUosQ0FDVDtBQUNMLENBQUM7QUFFYywwRUFBVyxFQUFDIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRDb3VudFRhYmxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8yMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIE1ldGVyIHtcclxuICAgIE5hbWU6IHN0cmluZyxcclxuICAgIFRvdGFsOiBudW1iZXIsXHJcbiAgICBTYWc6IG51bWJlcixcclxuICAgIFN3ZWxsOiBudW1iZXIsXHJcbiAgICBJbnRlcnJ1cHRpb246IG51bWJlcixcclxuICAgIFRyYW5zaWVudDogbnVtYmVyLFxyXG4gICAgRmF1bHQ6IG51bWJlclxyXG5cclxufVxyXG5cclxuY29uc3QgRXZlbnRDb3VudFRhYmxlID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWV0ZXI+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWV0ZXI+KCdOYW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0V2ZW50Q291bnRzVGFibGVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoKGRhdGE6IEFycmF5PE1ldGVyPikgPT4gc2V0RGF0YShkYXRhKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gPFRhYmxlPE1ldGVyPlxyXG4gICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnVG90YWwnLCBsYWJlbDogJ1RvdGFsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnU2FnJywgbGFiZWw6ICdTYWcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdTd2VsbCcsIGxhYmVsOiAnU3dlbGwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdJbnRlcnJ1cHRpb24nLCBsYWJlbDogJ0ludCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ1RyYW5zaWVudCcsIGxhYmVsOiAnVHJhbnMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdGYXVsdCcsIGxhYmVsOiAnRmF1bHQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDE3LCBwYWRkaW5nOiAwIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAwLCBwYWRkaW5nOiAwIH0gfSxcclxuXHJcbiAgICAgICAgXX1cclxuICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShkYXRhLCBbc29ydEZpZWxkXSwgWyghYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoZGF0YSwgW2QuY29sXSwgWyhhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEob3JkZXJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eyhkYXRhKSA9PiB7IH19XHJcbiAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCB9fVxyXG4gICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA2MCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgIC8+XHJcbjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q291bnRUYWJsZTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRDb3VudHNCeU1vbnRoLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVPcmRpbmFsLCBzY2FsZUxpbmVhciwgc2VsZWN0LCBheGlzQm90dG9tLCBtYXgsIGxpbmUgfSBmcm9tICdkMyc7XHJcbmludGVyZmFjZSBpRGF0YSB7XHJcbiAgICBNb250aDogc3RyaW5nLFxyXG4gICAgU2FnOiBudW1iZXIsIFxyXG4gICAgU3dlbGw6IG51bWJlciwgXHJcbiAgICBUcmFuc2llbnQ6IG51bWJlcixcclxuICAgIEludGVycnVwdGlvbjogbnVtYmVyLFxyXG4gICAgRmF1bHQ6IG51bWJlcixcclxuICAgIFRvdGFsOiBudW1iZXJcclxufVxyXG5jb25zdCBFdmVudENvdW50c0J5TW9udGggPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDQwLCBsZWZ0OiAzMCB9O1xyXG4gICAgbGV0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGxldCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICBjb25zdCBbdG90YWxQYXRoLCBzZXRUb3RhbFBhdGhdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGF0aHMsIHNldFBhdGhzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtheGlzUGF0aHMsIHNldEF4aXNQYXRoc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFtheGlzVGlja3MsIHNldEF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFt5YXhpc1RpY2tzLCBzZXRZQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9zZXRIaWRkZW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0UGF0aHMoW10pO1xyXG4gICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRXZlbnRDb3VudHNCeU1vbnRoYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKChkYXRhOiBBcnJheTxpRGF0YT4pID0+IERyYXdDaGFydChkYXRhKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERyYXdDaGFydChkYXRhOiBBcnJheTxpRGF0YT4pIHtcclxuXHJcbiAgICAgICAgLy9sZXQgc2VyaWVzID0gZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV07XHJcbiAgICAgICAgLy9sZXQgeCA9IHNjYWxlT3JkaW5hbCgpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKGRhdGEubWFwKHggPT4geC5tb250aCkpO1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oWzAsIG1heChkYXRhLm1hcCh4ID0+IHguVG90YWwpKV0pO1xyXG5cclxuICAgICAgICBsZXQgeXRpY2tzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5LmRvbWFpbigpWzFdOyBpID0gaSArIDUpIHtcclxuICAgICAgICAgICAgeXRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke3koaSl9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNIC03IDAgSCAke3N2Z1dpZHRofWB9IHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD1cIi0xNVwiIGR5PVwiMC4zMmVtXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57aX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFlBeGlzVGlja3MoeXRpY2tzKTtcclxuXHJcbiAgICAgICAgbGV0IHRpY2tzID0gZGF0YS5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdCArIHN2Z1dpZHRoICogKGluZGV4ICsgMSkgLyAxMn0sJHtzdmdIZWlnaHR9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHkyPVwiNlwiPjwvbGluZT5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEF4aXNUaWNrcyh0aWNrcyk7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbHMgPSBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChpbmRleCArIDAuMjUpKSAvIDEyKX0sJHtzdmdIZWlnaHR9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHkyPVwiNlwiIGR5PVwiMWVtXCI+e3guTW9udGh9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEF4aXNQYXRocyhsYWJlbHMpO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPGlEYXRhPigpLngoZCA9PiBtYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoZC5Nb250aCkgKyAwLjUpKSAvIDEyKSkueShkID0+IHkoZC5Ub3RhbCkpO1xyXG4gICAgICAgIHNldFRvdGFsUGF0aChsaW5lZnVuYyhkYXRhKSk7XHJcblxyXG4gICAgICAgIGxldCBib3hlcyA9IGRhdGEubWFwKCh4LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4geyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LlNhZyl9IGZpbGw9e2dldENvbG9yKCdzYWcnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguU3dlbGwpfSBmaWxsPXtnZXRDb2xvcignc3dlbGwnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKSkgLSAoc3ZnSGVpZ2h0IC0geSh4LlRyYW5zaWVudCkpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LlRyYW5zaWVudCl9IGZpbGw9e2dldENvbG9yKCdUcmFuc2llbnQnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKSkgLSAoc3ZnSGVpZ2h0IC0geSh4LlRyYW5zaWVudCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5GYXVsdCkpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LkZhdWx0KX0gZmlsbD17Z2V0Q29sb3IoJ0ZhdWx0Jyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpKSAtIChzdmdIZWlnaHQgLSB5KHguRmF1bHQpKSAtIChzdmdIZWlnaHQgLSB5KHguSW50ZXJydXB0aW9uKSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguSW50ZXJydXB0aW9uKX0gZmlsbD17Z2V0Q29sb3IoJ0ludGVycnVwdGlvbicpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0UGF0aHMoYm94ZXMpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcInNhZ1wiKSByZXR1cm4gJ3B1cnBsZSc7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcInN3ZWxsXCIpIHJldHVybiAnZ3JlZW4nO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJ0cmFuc2llbnRcIikgcmV0dXJuICdvcmFuZ2UnO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJpbnRlcnJ1cHRpb25cIikgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJmYXVsdFwiKSByZXR1cm4gJ2JsdWUnO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuICcjMDAwMDAwJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCwgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBoaWRkZW49e2hpZGRlbn0+XHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gc3R5bGU9e3tmaWxsOiAnbm9uZScsIHN0cm9rZTogJ2JsYWNrJywgc3Ryb2tlV2lkdGg6ICcxcHgnLCBzaGFwZVJlbmRlcmluZzogJ2NyaXNwRWRnZXMnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGZvbnRTaXplOidzbWFsbCd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgYm9yZGVycyAqL31cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNICR7bWFyZ2luLmxlZnR9ICR7bWFyZ2luLnRvcH0gSCAke3N2Z1dpZHRoICsgbWFyZ2luLmxlZnR9IFYgJHtzdmdIZWlnaHR9IEggJHttYXJnaW4ubGVmdH0gViAke21hcmdpbi50b3B9YH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyB0aWNrcyovfVxyXG4gICAgICAgICAgICAgICAgPGcgY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7c3ZnSGVpZ2h0fSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluZSB5Mj1cIjZcIj48L2xpbmU+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICB7YXhpc1RpY2tzfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBZQXhpcyB0aWNrcyBhbmQgTGFiZWxzKi99XHJcbiAgICAgICAgICAgICAgICB7eWF4aXNUaWNrc31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogWEF4aXMgTGFiZWxzKi99XHJcbiAgICAgICAgICAgICAgICA8Zz57YXhpc1BhdGhzfTwvZz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgTGVnZW5kICovfVxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAxMH0geT17c3ZnSGVpZ2h0ICsgMjV9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17Z2V0Q29sb3IoJ3NhZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgMzB9ID5TYWc8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIDcwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcignc3dlbGwnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHk9e3N2Z0hlaWdodCArIDM4fSB4PXttYXJnaW4ubGVmdCArIDkwfSA+U3dlbGw8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIDE0MH0geT17c3ZnSGVpZ2h0ICsgMjV9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17Z2V0Q29sb3IoJ3RyYW5zaWVudCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgMTYwfSA+VHJhbnNpZW50PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAyNDB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCdmYXVsdCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgMjYwfSA+RmF1bHQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIDMyMH0geT17c3ZnSGVpZ2h0ICsgMjV9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17Z2V0Q29sb3IoJ2ludGVycnVwdGlvbicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgMzQwfSA+SW50ZXJydXB0aW9uPC90ZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdGFja2VkIEJhcnMgKi99XHJcbiAgICAgICAgICAgICAgICB7cGF0aHN9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIExpbmUgQWJvdmUgU3RhY2tlZCBCYXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlTGluZWpvaW49J3JvdW5kJyBzdHJva2VXaWR0aD0nMycgc3Ryb2tlPSdkYXJrYmx1ZScgZD17dG90YWxQYXRofSAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q291bnRzQnlNb250aDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgSG9tZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFdmVudENvdW50c0J5TW9udGggZnJvbSAnLi4vSG9tZS9FdmVudENvdW50c0J5TW9udGgnO1xyXG5pbXBvcnQgRXZlbnRDb3VudFRhYmxlIGZyb20gJy4uL0hvbWUvRXZlbnRDb3VudFRhYmxlJztcclxuaW1wb3J0IE1hZ0R1ckNoYXJ0IGZyb20gJy4uL0hvbWUvTWFnRHVyQ2hhcnQnO1xyXG5pbXBvcnQgeyBQUURpZ2VzdCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgY29uc3QgW21haWxUbywgc2V0TWFpbFRvXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gR2V0TWFpbHRvKCk7XHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IFBRRGlnZXN0LlNldHRpbmcpID0+IHtcclxuICAgICAgICAgICAgc2V0TWFpbFRvKGBtYWlsdG86JHtkYXRhLlZhbHVlfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWFpbHRvKCk6IEpRdWVyeS5qcVhIUjxQUURpZ2VzdC5TZXR0aW5nPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1NldHRpbmcvRW1haWwuTWFpbHRvYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4IDBweCAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lLCBVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDUyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U28gZmFyIHRoaXMgbW9udGggdGhlcmUgaGF2ZSBiZWVuIHh4IGV2ZW50cyByZWNvcmRlZCBmcm9tIHlvdXIgeXkgcG93ZXIgcXVhbGl0eSBtZXRlcnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj17YCR7aG9tZVBhdGh9RXZlbnRTZWFyY2g/c3RhcnREYXRlPSR7bW9tZW50KCkuc3VidHJhY3QoMzY1LCAnZGF5cycpLmZvcm1hdChcIllZWVktTU0tRERcIil9JmVuZERhdGU9JHttb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfSZyZXR1cm5MaW1pdD0xMDBgfT5MaXN0IG9mIGxhc3QgMTAwIGV2ZW50cyBmcm9tIGFsbCBtZXRlcnMgb3ZlciBsYXN0IDM2NSBkYXlzPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj17YCR7aG9tZVBhdGh9RXZlbnRTZWFyY2g/c3RhcnREYXRlPSR7bW9tZW50KCkuc3VidHJhY3QoMzAsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX0mZW5kRGF0ZT0ke21vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIil9JnJldHVybkxpbWl0PTEwMDBgfT5MaXN0IG9mIGFsbCBtZXRlciBhY3Rpdml0eSBvdmVyIGxhc3QgMzAgZGF5czwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFueSBxdWVzdGlvbnM/IFBsZWFzZSBjb250YWN0OiA8YSBocmVmPXttYWlsVG99PlRoZSBQUSBUZWFtPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWFnbml0dWRlIER1cmF0aW9uIC0gTGFzdCAzMCBEYXlzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFnRHVyQ2hhcnQgV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAwcHggMHB4IDNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcmljYWwgRXZlbnQgQ291bnRzIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENvdW50c0J5TW9udGggV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDUzfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWV0ZXIgQWN0aXZpdHkgLSBMYXN0IDMwIERheXNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXhIZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwLCBvdmVyZmxvd1k6ICdoaWRkZW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENvdW50VGFibGUgV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWFnRHVyQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzIzLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxvZywgc2NhbGVMaW5lYXIsIG1heCwgbGluZSwgZXZlbnQsIHpvb21UcmFuc2Zvcm0sIHpvb20sIHNlbGVjdH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsIFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQZXJVbml0TWFnbml0dWRlOiBudW1iZXIsIFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICAgIE1hZ25pdHVkZTogbnVtYmVyLFxyXG4gICAgRHVyYXRpb246IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFnRHVyQ3VydmUge1xyXG4gICAgTmFtZTogc3RyaW5nLFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQYXRoOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTWFnRHVyQ2hhcnQgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcblxyXG4gICAgY29uc3QgW2RvbWFpbnMsIHNldERvbWFpbnNdID0gUmVhY3QudXNlU3RhdGU8eyBYOiB7IExvd2VyOiBudW1iZXIsIFVwcGVyOiBudW1iZXIgfSwgWTogeyBMb3dlcjogbnVtYmVyLCBVcHBlcjogbnVtYmVyIH0gfT4oeyBYOiB7IExvd2VyOiAwLjAwMDAxLCBVcHBlcjogMTAwMDAwMCB9LCBZOiB7IExvd2VyOiAwLCBVcHBlcjogMi41IH0gfSk7XHJcbiAgICBjb25zdCBbeEF4aXNUaWNrcywgc2V0WEF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFt5QXhpc1RpY2tzLCBzZXRZQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlRGF0YSwgc2V0TWFnRHVyQ3VydmVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPGlEYXRhW10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJDdXJ2ZXMsIHNldE1hZ0R1ckN1cnZlc10gPSBSZWFjdC51c2VTdGF0ZTxNYWdEdXJDdXJ2ZVtdPihbXSk7XHJcbiAgICBjb25zdCBbbWFnRHVyRGF0YSwgc2V0TWFnRHVyRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxQb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbbWFnRHVyQ2lyY2xlcywgc2V0TWFnRHVyQ2lyY2xlc10gPSBSZWFjdC51c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRNYWdEdXJDdXJ2ZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGE6IGlEYXRhW10pID0+IHtcclxuICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICBCdWlsZE1hZ0R1ckN1cnZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldE1hZ0R1clBvaW50cygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YTogUG9pbnRbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICBCdWlsZE1hZER1ckNpcmNsZXMoZGF0YSk7XHJcblxyXG4gICAgICAgIH0pOyBcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTIuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBCdWlsZFlBeGlzKCk7XHJcbiAgICAgICAgQnVpbGRYQXhpcygpO1xyXG4gICAgICAgIEJ1aWxkTWFkRHVyQ2lyY2xlcyhtYWdEdXJEYXRhKTtcclxuICAgICAgICBCdWlsZE1hZ0R1ckN1cnZlKG1hZ0R1ckN1cnZlRGF0YSk7XHJcbiAgICB9LCBbZG9tYWluc10pXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWFnRHVyQ3VydmVzKCk6IEpRdWVyeS5qcVhIUjxpRGF0YVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01hZ0R1ckN1cnZlc2AsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWFnRHVyUG9pbnRzKCk6IEpRdWVyeS5qcVhIUjxQb2ludFtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01hZ0R1clBvaW50c2AsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24geEF4aXNUZXh0KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDAuMDAwMDAwMSkgcmV0dXJuICh2YWx1ZSAqIDEwMDAwMDAwMDApLnRvRml4ZWQoMCkgKyAnbic7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMC4wMDEpIHJldHVybiAodmFsdWUgKiAxMDAwMDAwKS50b0ZpeGVkKDApICsgJ8K1JztcclxuICAgICAgICBpZiAodmFsdWUgPiAxMDAwICYmIHZhbHVlIDwgMTAwMDAwMCkgcmV0dXJuICh2YWx1ZSAvIDEwMDApLnRvRml4ZWQoMCkgKyAnayc7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMDAwKSByZXR1cm4gKHZhbHVlIC8gMTAwMDAwMCkudG9GaXhlZCgwKSArICdNJztcclxuICAgICAgICBpZiAodmFsdWUgPCAxKSByZXR1cm4gdmFsdWUudG9QcmVjaXNpb24oMSkudG9TdHJpbmcoKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRYQXhpcygpIHtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcblxyXG4gICAgICAgIGxldCBpID0gcGFyc2VGbG9hdChNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZyhkb21haW5zLlguTG93ZXIpIC8gTWF0aC5sb2coMTApKSkudG9QcmVjaXNpb24oMSkpO1xyXG4gICAgICAgIGxldCB0aWNrcyA9IFtdXHJcbiAgICAgICAgbGV0IGxvZ0RvbWFpbiA9IHguZG9tYWluKCkubWFwKGwgPT4gTWF0aC5sb2cobCkgLyBNYXRoLmxvZygxMCkpO1xyXG4gICAgICAgIGxldCBsZERpZmYgPSBsb2dEb21haW5bMV0gLSBsb2dEb21haW5bMF07XHJcbiAgICAgICAgZm9yICg7IGkgPD0gZG9tYWlucy5YLlVwcGVyOyBpID0gaSAqIDEwKSB7XHJcbiAgICAgICAgICAgIHRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4KGkpfSwke3N2Z0hlaWdodH0pYH0gc3R5bGU9e3sgb3BhY2l0eTogaSA8IHguZG9tYWluKClbMF0gfHwgaSA+IHguZG9tYWluKClbMV0gPyAwIDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAwLDYgViAtJHtzdmdIZWlnaHQgLSBtYXJnaW4udG9wfWB9IHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeT1cIjIwXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57eEF4aXNUZXh0KGkpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICB7KGxkRGlmZiA8IDUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKS5tYXAobnVtID0+IDxwYXRoIGtleT17bnVtfSBkPXtgTSAkey8qTWF0aC5sb2cobnVtICogaSkgLyBNYXRoLmxvZygxMCkgLSBNYXRoLmxvZyhpKSAvIE1hdGgubG9nKDEwKSoveChudW0qaSkgLSB4KGkpfSw2IFYgLSR7c3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcH1gfSBzdHJva2VXaWR0aD17MC4yNX0vPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFhBeGlzVGlja3ModGlja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkWUF4aXMoKSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgc3RlcCA9ICh5LmRvbWFpbigpWzFdIC0geS5kb21haW4oKVswXSA8PSAxLjU/IDAuMSA6IDAuNSk7XHJcbiAgICAgICAgbGV0IHl0aWNrcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKGRvbWFpbnMuWS5Mb3dlcik7IGkgPD0gZG9tYWlucy5ZLlVwcGVyOyBpID0gc3RlcCArIGkpIHtcclxuICAgICAgICAgICAgeXRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHt5KGkpfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeS5kb21haW4oKVswXSB8fCBpID4geS5kb21haW4oKVsxXSA/IDAgOiAxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD17YE0gLTYsMCBIICR7c3ZnV2lkdGh9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PVwiLTE1XCIgZHk9XCIwLjMyZW1cIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPntpLnRvRml4ZWQoMSl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRZQXhpc1RpY2tzKHl0aWNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRNYWdEdXJDdXJ2ZShkYXRhOiBpRGF0YVtdKSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8aURhdGE+KCkueChkID0+IHgoZC5EdXJhdGlvblNlY29uZHMpKS55KGQgPT4geShkLlBlclVuaXRNYWduaXR1ZGUpKTtcclxuICAgICAgICBsZXQgbWRjcyA9IF8uZ3JvdXBCeShkYXRhLCAoZCkgPT4gZC5JRCk7XHJcbiAgICAgICAgbGV0IG1kY3NzID0gT2JqZWN0LmtleXMobWRjcykubWFwKChrZXkpID0+IHsgcmV0dXJuIHsgTmFtZTogbWRjc1trZXldWzBdLk5hbWUsIFZpc2libGU6IG1kY3Nba2V5XVswXS5WaXNpYmxlLCBDb2xvcjogbWRjc1trZXldWzBdLkNvbG9yLCBQYXRoOiBsaW5lZnVuYyhtZGNzW2tleV0pIH0gfSk7XHJcbiAgICAgICAgc2V0TWFnRHVyQ3VydmVzKG1kY3NzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZER1ckNpcmNsZXMoZGF0YTogUG9pbnRbXSkge1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG4gICAgICAgIGxldCBjaXJjbGVzID0gZGF0YS5maWx0ZXIocG9pbnQgPT4gcG9pbnQuTWFnbml0dWRlID49IGRvbWFpbnMuWS5Mb3dlciAmJiBwb2ludC5NYWduaXR1ZGUgPD0gZG9tYWlucy5ZLlVwcGVyICYmIHBvaW50LkR1cmF0aW9uID49IGRvbWFpbnMuWC5Mb3dlciAmJiBwb2ludC5EdXJhdGlvbiA8PSBkb21haW5zLlguVXBwZXIpLm1hcCgocG9pbnQsIGluZGV4KSA9PiA8Y2lyY2xlIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImRvdFwiIHI9ezN9IGN4PXt4KHBvaW50LkR1cmF0aW9uKX0gY3k9e3kocG9pbnQuTWFnbml0dWRlKX0gZmlsbD0nYmx1ZScgLz4pO1xyXG4gICAgICAgIHNldE1hZ0R1ckNpcmNsZXMoY2lyY2xlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlWm9vbShldnQpIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgLy8gdXNlIGV2ZW50Lm5hdGl2ZUV2ZW50Lm9mZnNldFggYW5kIFlcclxuICAgICAgICBsZXQgem9vbUxvY2F0aW9uWSA9IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZO1xyXG4gICAgICAgIGxldCB6b29tTG9jYXRpb25YID0gZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFg7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50LmRlbHRhWSBwb3NpdGl2ZSBpcyB3aGVlbCBkb3duIG9yIG91dCBhbmQgbmVnYXRpdmUgaXMgd2hlZWwgdXAgb3IgaW5cclxuICAgICAgICBpZiAoZXZ0LmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgbGV0IGRvbWFpblhMZW5ndGggPSAoeC5yYW5nZSgpWzFdIC0geC5yYW5nZSgpWzBdKSAqIDAuNzU7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5ZTGVuZ3RoID0gKHkucmFuZ2UoKVsxXSAtIHkucmFuZ2UoKVswXSkgKiAwLjc1O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoYW5kbGVab29tJywgeyBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LCBZOiB7IExvd2VyOiB6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIsIFVwcGVyOiB6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIgfSB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldERvbWFpbnMoe1xyXG4gICAgICAgICAgICAgICAgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSxcclxuICAgICAgICAgICAgICAgIFk6IHsgTG93ZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiksIFVwcGVyOiB5LmludmVydCh6b29tTG9jYXRpb25ZICsgZG9tYWluWUxlbmd0aCAvIDIpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWExlbmd0aCA9ICh4LnJhbmdlKClbMV0gLSB4LnJhbmdlKClbMF0pICogMS4yNTtcclxuICAgICAgICAgICAgbGV0IGRvbWFpbllMZW5ndGggPSAoeS5yYW5nZSgpWzFdIC0geS5yYW5nZSgpWzBdKSAqIDEuMjU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hhbmRsZVpvb20nLCB7IFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sIFk6IHsgTG93ZXI6IHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiwgVXBwZXI6IHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMiB9IH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RG9tYWlucyh7XHJcbiAgICAgICAgICAgICAgICBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LFxyXG4gICAgICAgICAgICAgICAgWTogeyBMb3dlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyKSwgVXBwZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMikgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRHJhZyhldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGV2dC5uYXRpdmVFdmVudC5vZmZzZXRYIDwgbWFyZ2luLmxlZnQgfHwgZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFggPiBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0KSByZXR1cm47XHJcbiAgICAgICAgaWYgKGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZIDwgbWFyZ2luLnRvcCB8fCBldnQubmF0aXZlRXZlbnQub2Zmc2V0WSA+IHN2Z0hlaWdodCArIG1hcmdpbi50b3ApIHJldHVybjtcclxuXHJcbiAgICAgICAgZXZ0LnBlcnNpc3QoKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgJCgnI21hZ0R1ckNoYXJ0Jykub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldERvbWFpbnMoe1xyXG4gICAgICAgICAgICAgICAgWDoge1xyXG4gICAgICAgICAgICAgICAgICAgIExvd2VyOiB4LmludmVydCh4KGRvbWFpbnMuWC5Mb3dlcikgKyBldnQuY2xpZW50WCAtIGUuY2xpZW50WCksXHJcbiAgICAgICAgICAgICAgICAgICAgVXBwZXI6IHguaW52ZXJ0KHgoZG9tYWlucy5YLlVwcGVyKSArIGV2dC5jbGllbnRYIC0gZS5jbGllbnRYKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFk6IHtcclxuICAgICAgICAgICAgICAgICAgICBMb3dlcjogeS5pbnZlcnQoeShkb21haW5zLlkuTG93ZXIpICsgZXZ0LmNsaWVudFkgLSBlLmNsaWVudFkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFVwcGVyOiB5LmludmVydCh5KGRvbWFpbnMuWS5VcHBlcikgKyBldnQuY2xpZW50WSAtIGUuY2xpZW50WSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcERyYWcoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI21hZ0R1ckNoYXJ0Jykub2ZmKCdtb3VzZW1vdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFpvb20oZXZ0KSB7XHJcbiAgICAgICAgc2V0RG9tYWlucyh7IFg6IHsgTG93ZXI6IDAuMDAwMDEsIFVwcGVyOiAxMDAwMDAwIH0sIFk6IHsgTG93ZXI6IDAsIFVwcGVyOiAyLjUgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlUmVzZXQoKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZG9tYWlucy5YLkxvd2VyID09IDAuMDAwMDEgJiYgZG9tYWlucy5YLlVwcGVyID09IDEwMDAwMDAgJiYgZG9tYWlucy5ZLkxvd2VyID09IDAgJiYgZG9tYWlucy5ZLlVwcGVyID09IDIuNVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCB3aWR0aDogcHJvcHMuV2lkdGggfX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMTAsIGxlZnQ6IHN2Z1dpZHRoIH19IG9uQ2xpY2s9e3Jlc2V0Wm9vbX0gaGlkZGVuPXtoaWRlUmVzZXQoKX0+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHN2ZyBpZD1cIm1hZ0R1ckNoYXJ0XCIgd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnLCBzdHJva2U6ICdibGFjaycsIHN0cm9rZVdpZHRoOiAnMXB4Jywgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBmb250U2l6ZTogJ3NtYWxsJyB9fSBvbldoZWVsPXtoYW5kbGVab29tfSBvbk1vdXNlRG93bj17aGFuZGxlRHJhZ30gb25Nb3VzZVVwPXtzdG9wRHJhZ30+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIERyYXcgY2hhcnQgZGF0YSBmaXJzdCAqL31cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYWdEdXJDdXJ2ZXMubWFwKChtZGMsIGluZGV4KSA9PiAobWRjLlZpc2libGUgPyA8cGF0aCBrZXk9e2luZGV4fSBkPXttZGMuUGF0aH0gc3Ryb2tlPXttZGMuQ29sb3J9IC8+IDogbnVsbCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHttYWdEdXJDaXJjbGVzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBEcmF3IHdoaXRlIHJlY3RhbmdsZXMgYXJvdW5kIHRoZSBib3JkZXIgc28gZGF0YSB3b24ndCBzaG93IG91dHNpZGUgY2hhcnQgKi99XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17bWFyZ2luLnRvcH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXtwcm9wcy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tIC0gbWFyZ2luLnRvcH0gd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e21hcmdpbi5ib3R0b20gKyBtYXJnaW4udG9wfSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXttYXJnaW4ubGVmdH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IGZpbGw9J3doaXRlJyBzdHJva2U9J3doaXRlJyAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17cHJvcHMuV2lkdGggLSBtYXJnaW4ucmlnaHR9IHk9ezB9IHdpZHRoPXttYXJnaW4ucmlnaHR9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgTGVnZW5kICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnRHVyQ3VydmVzLm1hcCgobWRjLCBpbmRleCkgPT4gPHJlY3Qgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG9wYWNpdHk6IChtZGMuVmlzaWJsZSA/IDEgOiAwLjI1KSB9fSBrZXk9e2luZGV4fSB4PXttYXJnaW4ubGVmdCArIDEwICsgMjAgKiBpbmRleH0geT17c3ZnSGVpZ2h0ICsgNDB9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17bWRjLkNvbG9yfSBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWRjLlZpc2libGUgPSAhbWRjLlZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGUgPSBfLmNsb25lRGVlcChtYWdEdXJDdXJ2ZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVzKHVwZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+PHRpdGxlPnttZGMuTmFtZX08L3RpdGxlPjwvcmVjdD4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyB0aWNrcyovfVxyXG4gICAgICAgICAgICAgICAge3hBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB4PXtzdmdXaWR0aC8yfSB5PXtzdmdIZWlnaHQgKyBtYXJnaW4udG9wICsgMjB9PkR1cmF0aW9uIChzKTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIHsvKiBZQXhpcyB0aWNrcyBhbmQgTGFiZWxzKi99XHJcbiAgICAgICAgICAgICAgICB7eUF4aXNUaWNrc31cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgMCwwKWB9IHk9e21hcmdpbi5sZWZ0IC0gMjV9IHg9ey1zdmdIZWlnaHQvMiAtIG1hcmdpbi5ib3R0b219PlBlciBVbml0IFZvbHRhZ2U8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgYm9yZGVycyAqL31cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNICR7bWFyZ2luLmxlZnR9ICR7bWFyZ2luLnRvcH0gSCAke3N2Z1dpZHRoICsgbWFyZ2luLmxlZnR9IFYgJHtzdmdIZWlnaHR9IEggJHttYXJnaW4ubGVmdH0gViAke21hcmdpbi50b3B9YH0gLz5cclxuXHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFnRHVyQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==