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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "" }, "List of last 100 events from all meters over last 365 days")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "" }, "List of all meter activity over last 30 days")),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvSG9tZS9FdmVudENvdW50VGFibGUudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL0V2ZW50Q291bnRzQnlNb250aC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvTWFnRHVyQ2hhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryw4QkFBOEI7QUFDOUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUU7QUFDb0I7QUFDdkI7QUFhdkIsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUF1QztJQUN0RCw2RUFBa0QsRUFBakQsWUFBSSxFQUFFLGVBQTJDLENBQUM7SUFDbkQsaUZBQStELEVBQTlELGlCQUFTLEVBQUUsb0JBQW1ELENBQUM7SUFDaEUsK0VBQXlELEVBQXhELGlCQUFTLEVBQUUsb0JBQTZDLENBQUM7SUFFaEUsNENBQUssQ0FBQyxTQUFTLENBQUM7UUFDWixPQUFPLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMsT0FBTztRQUNaLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSx5QkFBc0I7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QUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDbE4scUVBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRztnQkFDelAscUVBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQzVRLHFFQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVB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QUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEgsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBbEosQ0FBa0osQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssOEVBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFDLE1BQU0sR0FBRyxFQUF2RyxDQUF1RyxDQUFDLENBQUM7UUFDdFQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEdBQUc7UUFDbkIsSUFBSSxDQUFDLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFD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Q0FBQyxDQUFDO29CQUV2QyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQUUsMEVBQVEsR0FBRyxDQUFDLElBQUksQ0FBUyxDQUFPLEVBTEYsQ0FLRSxDQUFDO1lBSXZDLFVBQVU7WUFDWCxxRUFBTSxDQUFDLEVBQUUsUUFBUSxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxtQkFBcUI7WUFFdkUsVUFBVTtZQUNYLHFFQUFNLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSx1QkFBeUI7WUFFakgscUVBQU0sQ0FBQyxFQUFFLE9BQUssTUFBTSxDQUFDLElBQUksU0FBSSxNQUFNLENBQUMsR0FBRyxZQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxZQUFNLFNBQVMsV0FBTSxNQUFNLENBQUMsSUFBSSxXQUFNLE1BQU0sQ0FBQyxHQUFLLEdBQUksQ0FFdkgsQ0FFSixDQUNUO0FBQ0wsQ0FBQztBQUVjLDBFQUFXLEVBQUMiLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudENvdW50VGFibGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzIyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbnRlcmZhY2UgTWV0ZXIge1xyXG4gICAgTmFtZTogc3RyaW5nLFxyXG4gICAgVG90YWw6IG51bWJlcixcclxuICAgIFNhZzogbnVtYmVyLFxyXG4gICAgU3dlbGw6IG51bWJlcixcclxuICAgIEludGVycnVwdGlvbjogbnVtYmVyLFxyXG4gICAgVHJhbnNpZW50OiBudW1iZXIsXHJcbiAgICBGYXVsdDogbnVtYmVyXHJcblxyXG59XHJcblxyXG5jb25zdCBFdmVudENvdW50VGFibGUgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNZXRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBNZXRlcj4oJ05hbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRXZlbnRDb3VudHNUYWJsZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZSgoZGF0YTogQXJyYXk8TWV0ZXI+KSA9PiBzZXREYXRhKGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiA8VGFibGU8TWV0ZXI+XHJcbiAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ01ldGVyJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdUb3RhbCcsIGxhYmVsOiAnVG90YWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdTYWcnLCBsYWJlbDogJ1NhZycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ1N3ZWxsJywgbGFiZWw6ICdTd2VsbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ0ludGVycnVwdGlvbicsIGxhYmVsOiAnSW50JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnVHJhbnNpZW50JywgbGFiZWw6ICdUcmFucycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ0ZhdWx0JywgbGFiZWw6ICdGYXVsdCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICBdfVxyXG4gICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KGRhdGEsIFtzb3J0RmllbGRdLCBbKCFhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEob3JkZXJlZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShkYXRhLCBbZC5jb2xdLCBbKGFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnKV0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvcmRlcmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHsgfX1cclxuICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XHJcbiAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHByb3BzLkhlaWdodCAtIDYwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgLz5cclxuO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb3VudFRhYmxlOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudENvdW50c0J5TW9udGgudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZU9yZGluYWwsIHNjYWxlTGluZWFyLCBzZWxlY3QsIGF4aXNCb3R0b20sIG1heCwgbGluZSB9IGZyb20gJ2QzJztcclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIE1vbnRoOiBzdHJpbmcsXHJcbiAgICBTYWc6IG51bWJlciwgXHJcbiAgICBTd2VsbDogbnVtYmVyLCBcclxuICAgIFRyYW5zaWVudDogbnVtYmVyLFxyXG4gICAgSW50ZXJydXB0aW9uOiBudW1iZXIsXHJcbiAgICBGYXVsdDogbnVtYmVyLFxyXG4gICAgVG90YWw6IG51bWJlclxyXG59XHJcbmNvbnN0IEV2ZW50Q291bnRzQnlNb250aCA9IChwcm9wczogeyBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNDAsIGxlZnQ6IDMwIH07XHJcbiAgICBsZXQgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xyXG4gICAgbGV0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG5cclxuICAgIGNvbnN0IFt0b3RhbFBhdGgsIHNldFRvdGFsUGF0aF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtwYXRocywgc2V0UGF0aHNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2F4aXNQYXRocywgc2V0QXhpc1BhdGhzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW2F4aXNUaWNrcywgc2V0QXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW3lheGlzVGlja3MsIHNldFlBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL3NldEhpZGRlbih0cnVlKTtcclxuICAgICAgICBzZXRQYXRocyhbXSk7XHJcbiAgICAgICAgcmV0dXJuIEdldERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9FdmVudENvdW50c0J5TW9udGhgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoKGRhdGE6IEFycmF5PGlEYXRhPikgPT4gRHJhd0NoYXJ0KGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KGRhdGE6IEFycmF5PGlEYXRhPikge1xyXG5cclxuICAgICAgICAvL2xldCBzZXJpZXMgPSBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcclxuICAgICAgICAvL2xldCB4ID0gc2NhbGVPcmRpbmFsKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oZGF0YS5tYXAoeCA9PiB4Lm1vbnRoKSk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbMCwgbWF4KGRhdGEubWFwKHggPT4geC5Ub3RhbCkpXSk7XHJcblxyXG4gICAgICAgIGxldCB5dGlja3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHkuZG9tYWluKClbMV07IGkgPSBpICsgNSkge1xyXG4gICAgICAgICAgICB5dGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7eShpKX0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD17YE0gLTcgMCBIICR7c3ZnV2lkdGh9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PVwiLTE1XCIgZHk9XCIwLjMyZW1cIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPntpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz4pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0WUF4aXNUaWNrcyh5dGlja3MpO1xyXG5cclxuICAgICAgICBsZXQgdGlja3MgPSBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0ICsgc3ZnV2lkdGggKiAoaW5kZXggKyAxKSAvIDEyfSwke3N2Z0hlaWdodH0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeTI9XCI2XCI+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0QXhpc1RpY2tzKHRpY2tzKTtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVscyA9IGRhdGEubWFwKCh4LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGluZGV4ICsgMC4yNSkpIC8gMTIpfSwke3N2Z0hlaWdodH0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeTI9XCI2XCIgZHk9XCIxZW1cIj57eC5Nb250aH08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0QXhpc1BhdGhzKGxhYmVscyk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8aURhdGE+KCkueChkID0+IG1hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZihkLk1vbnRoKSArIDAuNSkpIC8gMTIpKS55KGQgPT4geShkLlRvdGFsKSk7XHJcbiAgICAgICAgc2V0VG90YWxQYXRoKGxpbmVmdW5jKGRhdGEpKTtcclxuXHJcbiAgICAgICAgbGV0IGJveGVzID0gZGF0YS5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB7IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZyl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguU2FnKX0gZmlsbD17Z2V0Q29sb3IoJ3NhZycpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKHguTW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguU2FnKSAtIChzdmdIZWlnaHQgLSB5KHguU3dlbGwpKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5Td2VsbCl9IGZpbGw9e2dldENvbG9yKCdzd2VsbCcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKHguTW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguU2FnKSAtIChzdmdIZWlnaHQgLSB5KHguU3dlbGwpKSAtIChzdmdIZWlnaHQgLSB5KHguVHJhbnNpZW50KSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguVHJhbnNpZW50KX0gZmlsbD17Z2V0Q29sb3IoJ1RyYW5zaWVudCcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKHguTW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguU2FnKSAtIChzdmdIZWlnaHQgLSB5KHguU3dlbGwpKSAtIChzdmdIZWlnaHQgLSB5KHguVHJhbnNpZW50KSkgLSAoc3ZnSGVpZ2h0IC0geSh4LkZhdWx0KSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguRmF1bHQpfSBmaWxsPXtnZXRDb2xvcignRmF1bHQnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKSkgLSAoc3ZnSGVpZ2h0IC0geSh4LlRyYW5zaWVudCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5GYXVsdCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5JbnRlcnJ1cHRpb24pKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5JbnRlcnJ1cHRpb24pfSBmaWxsPXtnZXRDb2xvcignSW50ZXJydXB0aW9uJyl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRQYXRocyhib3hlcyk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcih0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwic2FnXCIpIHJldHVybiAncHVycGxlJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwic3dlbGxcIikgcmV0dXJuICdncmVlbic7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcInRyYW5zaWVudFwiKSByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImludGVycnVwdGlvblwiKSByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImZhdWx0XCIpIHJldHVybiAnYmx1ZSc7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gJyMwMDAwMDAnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCwgd2lkdGg6IHByb3BzLldpZHRoLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGhpZGRlbj17aGlkZGVufT5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBzdHlsZT17e2ZpbGw6ICdub25lJywgc3Ryb2tlOiAnYmxhY2snLCBzdHJva2VXaWR0aDogJzFweCcsIHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcycsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgZm9udFNpemU6J3NtYWxsJ319PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD17YE0gJHttYXJnaW4ubGVmdH0gJHttYXJnaW4udG9wfSBIICR7c3ZnV2lkdGggKyBtYXJnaW4ubGVmdH0gViAke3N2Z0hlaWdodH0gSCAke21hcmdpbi5sZWZ0fSBWICR7bWFyZ2luLnRvcH1gfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFhBeGlzIHRpY2tzKi99XHJcbiAgICAgICAgICAgICAgICA8ZyBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHtzdmdIZWlnaHR9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHkyPVwiNlwiPjwvbGluZT5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIHtheGlzVGlja3N9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFlBeGlzIHRpY2tzIGFuZCBMYWJlbHMqL31cclxuICAgICAgICAgICAgICAgIHt5YXhpc1RpY2tzfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyBMYWJlbHMqL31cclxuICAgICAgICAgICAgICAgIDxnPntheGlzUGF0aHN9PC9nPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBMZWdlbmQgKi99XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIDEwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcignc2FnJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyAzMH0gPlNhZzwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgNzB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCdzd2VsbCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgOTB9ID5Td2VsbDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgMTQwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcigndHJhbnNpZW50Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyAxNjB9ID5UcmFuc2llbnQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIDI0MH0geT17c3ZnSGVpZ2h0ICsgMjV9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17Z2V0Q29sb3IoJ2ZhdWx0Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyAyNjB9ID5GYXVsdDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgMzIwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcignaW50ZXJydXB0aW9uJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyAzNDB9ID5JbnRlcnJ1cHRpb248L3RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0YWNrZWQgQmFycyAqL31cclxuICAgICAgICAgICAgICAgIHtwYXRoc31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTGluZSBBYm92ZSBTdGFja2VkIEJhcnMgKi99XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSdub25lJyBzdHJva2VMaW5lam9pbj0ncm91bmQnIHN0cm9rZVdpZHRoPSczJyBzdHJva2U9J2RhcmtibHVlJyBkPXt0b3RhbFBhdGh9IC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb3VudHNCeU1vbnRoOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBIb21lLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50Q291bnRzQnlNb250aCBmcm9tICcuLi9Ib21lL0V2ZW50Q291bnRzQnlNb250aCc7XHJcbmltcG9ydCBFdmVudENvdW50VGFibGUgZnJvbSAnLi4vSG9tZS9FdmVudENvdW50VGFibGUnO1xyXG5pbXBvcnQgTWFnRHVyQ2hhcnQgZnJvbSAnLi4vSG9tZS9NYWdEdXJDaGFydCc7XHJcbmltcG9ydCB7IFBRRGlnZXN0IH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICBjb25zdCBbbWFpbFRvLCBzZXRNYWlsVG9dID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBHZXRNYWlsdG8oKTtcclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFFEaWdlc3QuU2V0dGluZykgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWlsVG8oYG1haWx0bzoke2RhdGEuVmFsdWV9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWlsdG8oKTogSlF1ZXJ5LmpxWEhSPFBRRGlnZXN0LlNldHRpbmc+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvU2V0dGluZy9FbWFpbC5NYWlsdG9gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e2hlaWdodDogXCIxMDAlXCIsIG1hcmdpbjogJzVweCA1cHggNXB4IDVweCAnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUsIFVzZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykgLyAyIC0gNTIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TbyBmYXIgdGhpcyBtb250aCB0aGVyZSBoYXZlIGJlZW4geHggZXZlbnRzIHJlY29yZGVkIGZyb20geW91ciB5eSBwb3dlciBxdWFsaXR5IG1ldGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiXCI+TGlzdCBvZiBsYXN0IDEwMCBldmVudHMgZnJvbSBhbGwgbWV0ZXJzIG92ZXIgbGFzdCAzNjUgZGF5czwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCJcIj5MaXN0IG9mIGFsbCBtZXRlciBhY3Rpdml0eSBvdmVyIGxhc3QgMzAgZGF5czwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFueSBxdWVzdGlvbnM/IFBsZWFzZSBjb250YWN0OiA8YSBocmVmPXttYWlsVG99PlRoZSBQUSBUZWFtPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWFnbml0dWRlIER1cmF0aW9uIC0gTGFzdCAzMCBEYXlzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFnRHVyQ2hhcnQgV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAwcHggMHB4IDNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcmljYWwgRXZlbnQgQ291bnRzIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENvdW50c0J5TW9udGggV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDUzfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWV0ZXIgQWN0aXZpdHkgLSBMYXN0IDMwIERheXNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXhIZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwLCBvdmVyZmxvd1k6ICdoaWRkZW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENvdW50VGFibGUgV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWFnRHVyQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzIzLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxvZywgc2NhbGVMaW5lYXIsIG1heCwgbGluZSwgZXZlbnQsIHpvb21UcmFuc2Zvcm0sIHpvb20sIHNlbGVjdH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsIFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQZXJVbml0TWFnbml0dWRlOiBudW1iZXIsIFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9pbnQge1xyXG4gICAgTWFnbml0dWRlOiBudW1iZXIsXHJcbiAgICBEdXJhdGlvbjogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBNYWdEdXJDdXJ2ZSB7XHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBhdGg6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBNYWdEdXJDaGFydCA9IChwcm9wczogeyBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNjAsIGxlZnQ6IDQwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICBjb25zdCBbZG9tYWlucywgc2V0RG9tYWluc10gPSBSZWFjdC51c2VTdGF0ZTx7IFg6IHsgTG93ZXI6IG51bWJlciwgVXBwZXI6IG51bWJlciB9LCBZOiB7IExvd2VyOiBudW1iZXIsIFVwcGVyOiBudW1iZXIgfSB9Pih7IFg6IHsgTG93ZXI6IDAuMDAwMDEsIFVwcGVyOiAxMDAwMDAwIH0sIFk6IHsgTG93ZXI6IDAsIFVwcGVyOiAyLjUgfSB9KTtcclxuICAgIGNvbnN0IFt4QXhpc1RpY2tzLCBzZXRYQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW3lBeGlzVGlja3MsIHNldFlBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbbWFnRHVyQ3VydmVEYXRhLCBzZXRNYWdEdXJDdXJ2ZURhdGFdID0gUmVhY3QudXNlU3RhdGU8aURhdGFbXT4oW10pO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlcywgc2V0TWFnRHVyQ3VydmVzXSA9IFJlYWN0LnVzZVN0YXRlPE1hZ0R1ckN1cnZlW10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJEYXRhLCBzZXRNYWdEdXJEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJDaXJjbGVzLCBzZXRNYWdEdXJDaXJjbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldE1hZ0R1ckN1cnZlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogaURhdGFbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIEJ1aWxkTWFnRHVyQ3VydmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0TWFnRHVyUG9pbnRzKCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBQb2ludFtdKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1hZ0R1ckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIEJ1aWxkTWFkRHVyQ2lyY2xlcyhkYXRhKTtcclxuXHJcbiAgICAgICAgfSk7IFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUyLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMi5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEJ1aWxkWUF4aXMoKTtcclxuICAgICAgICBCdWlsZFhBeGlzKCk7XHJcbiAgICAgICAgQnVpbGRNYWREdXJDaXJjbGVzKG1hZ0R1ckRhdGEpO1xyXG4gICAgICAgIEJ1aWxkTWFnRHVyQ3VydmUobWFnRHVyQ3VydmVEYXRhKTtcclxuICAgIH0sIFtkb21haW5zXSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWdEdXJDdXJ2ZXMoKTogSlF1ZXJ5LmpxWEhSPGlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWFnRHVyQ3VydmVzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWdEdXJQb2ludHMoKTogSlF1ZXJ5LmpxWEhSPFBvaW50W10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWFnRHVyUG9pbnRzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB4QXhpc1RleHQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMC4wMDAwMDAxKSByZXR1cm4gKHZhbHVlICogMTAwMDAwMDAwMCkudG9GaXhlZCgwKSArICduJztcclxuICAgICAgICBpZiAodmFsdWUgPCAwLjAwMSkgcmV0dXJuICh2YWx1ZSAqIDEwMDAwMDApLnRvRml4ZWQoMCkgKyAnwrUnO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAgJiYgdmFsdWUgPCAxMDAwMDAwKSByZXR1cm4gKHZhbHVlIC8gMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMDApIHJldHVybiAodmFsdWUgLyAxMDAwMDAwKS50b0ZpeGVkKDApICsgJ00nO1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHJldHVybiB2YWx1ZS50b1ByZWNpc2lvbigxKS50b1N0cmluZygpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFhBeGlzKCkge1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSBwYXJzZUZsb2F0KE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKGRvbWFpbnMuWC5Mb3dlcikgLyBNYXRoLmxvZygxMCkpKS50b1ByZWNpc2lvbigxKSk7XHJcbiAgICAgICAgbGV0IHRpY2tzID0gW11cclxuICAgICAgICBsZXQgbG9nRG9tYWluID0geC5kb21haW4oKS5tYXAobCA9PiBNYXRoLmxvZyhsKSAvIE1hdGgubG9nKDEwKSk7XHJcbiAgICAgICAgbGV0IGxkRGlmZiA9IGxvZ0RvbWFpblsxXSAtIGxvZ0RvbWFpblswXTtcclxuICAgICAgICBmb3IgKDsgaSA8PSBkb21haW5zLlguVXBwZXI7IGkgPSBpICogMTApIHtcclxuICAgICAgICAgICAgdGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3goaSl9LCR7c3ZnSGVpZ2h0fSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNIDAsNiBWIC0ke3N2Z0hlaWdodCAtIG1hcmdpbi50b3B9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB5PVwiMjBcIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPnt4QXhpc1RleHQoaSl9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobGREaWZmIDwgNSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0pLm1hcChudW0gPT4gPHBhdGgga2V5PXtudW19IGQ9e2BNICR7LypNYXRoLmxvZyhudW0gKiBpKSAvIE1hdGgubG9nKDEwKSAtIE1hdGgubG9nKGkpIC8gTWF0aC5sb2coMTApKi94KG51bSppKSAtIHgoaSl9LDYgViAtJHtzdmdIZWlnaHQgLSBtYXJnaW4udG9wfWB9IHN0cm9rZVdpZHRoPXswLjI1fS8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0WEF4aXNUaWNrcyh0aWNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRZQXhpcygpIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCBzdGVwID0gKHkuZG9tYWluKClbMV0gLSB5LmRvbWFpbigpWzBdIDw9IDEuNT8gMC4xIDogMC41KTtcclxuICAgICAgICBsZXQgeXRpY2tzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IE1hdGguZmxvb3IoZG9tYWlucy5ZLkxvd2VyKTsgaSA8PSBkb21haW5zLlkuVXBwZXI7IGkgPSBzdGVwICsgaSkge1xyXG4gICAgICAgICAgICB5dGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke3koaSl9KWB9IHN0eWxlPXt7IG9wYWNpdHk6IGkgPCB5LmRvbWFpbigpWzBdIHx8IGkgPiB5LmRvbWFpbigpWzFdID8gMCA6IDF9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAtNiwwIEggJHtzdmdXaWR0aH1gfSBzdHJva2VXaWR0aD17MC4yNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHg9XCItMTVcIiBkeT1cIjAuMzJlbVwiIHRleHRBbmNob3I9J21pZGRsZSc+e2kudG9GaXhlZCgxKX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFlBeGlzVGlja3MoeXRpY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZ0R1ckN1cnZlKGRhdGE6IGlEYXRhW10pIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxpRGF0YT4oKS54KGQgPT4geChkLkR1cmF0aW9uU2Vjb25kcykpLnkoZCA9PiB5KGQuUGVyVW5pdE1hZ25pdHVkZSkpO1xyXG4gICAgICAgIGxldCBtZGNzID0gXy5ncm91cEJ5KGRhdGEsIChkKSA9PiBkLklEKTtcclxuICAgICAgICBsZXQgbWRjc3MgPSBPYmplY3Qua2V5cyhtZGNzKS5tYXAoKGtleSkgPT4geyByZXR1cm4geyBOYW1lOiBtZGNzW2tleV1bMF0uTmFtZSwgVmlzaWJsZTogbWRjc1trZXldWzBdLlZpc2libGUsIENvbG9yOiBtZGNzW2tleV1bMF0uQ29sb3IsIFBhdGg6IGxpbmVmdW5jKG1kY3Nba2V5XSkgfSB9KTtcclxuICAgICAgICBzZXRNYWdEdXJDdXJ2ZXMobWRjc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkTWFkRHVyQ2lyY2xlcyhkYXRhOiBQb2ludFtdKSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oW2RvbWFpbnMuWC5Mb3dlciwgZG9tYWlucy5YLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IGNpcmNsZXMgPSBkYXRhLmZpbHRlcihwb2ludCA9PiBwb2ludC5NYWduaXR1ZGUgPj0gZG9tYWlucy5ZLkxvd2VyICYmIHBvaW50Lk1hZ25pdHVkZSA8PSBkb21haW5zLlkuVXBwZXIgJiYgcG9pbnQuRHVyYXRpb24gPj0gZG9tYWlucy5YLkxvd2VyICYmIHBvaW50LkR1cmF0aW9uIDw9IGRvbWFpbnMuWC5VcHBlcikubWFwKChwb2ludCwgaW5kZXgpID0+IDxjaXJjbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZG90XCIgcj17M30gY3g9e3gocG9pbnQuRHVyYXRpb24pfSBjeT17eShwb2ludC5NYWduaXR1ZGUpfSBmaWxsPSdibHVlJyAvPik7XHJcbiAgICAgICAgc2V0TWFnRHVyQ2lyY2xlcyhjaXJjbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVab29tKGV2dCkge1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG5cclxuICAgICAgICAvLyB1c2UgZXZlbnQubmF0aXZlRXZlbnQub2Zmc2V0WCBhbmQgWVxyXG4gICAgICAgIGxldCB6b29tTG9jYXRpb25ZID0gZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFk7XHJcbiAgICAgICAgbGV0IHpvb21Mb2NhdGlvblggPSBldnQubmF0aXZlRXZlbnQub2Zmc2V0WDtcclxuXHJcbiAgICAgICAgLy8gZXZlbnQuZGVsdGFZIHBvc2l0aXZlIGlzIHdoZWVsIGRvd24gb3Igb3V0IGFuZCBuZWdhdGl2ZSBpcyB3aGVlbCB1cCBvciBpblxyXG4gICAgICAgIGlmIChldnQuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWExlbmd0aCA9ICh4LnJhbmdlKClbMV0gLSB4LnJhbmdlKClbMF0pICogMC43NTtcclxuICAgICAgICAgICAgbGV0IGRvbWFpbllMZW5ndGggPSAoeS5yYW5nZSgpWzFdIC0geS5yYW5nZSgpWzBdKSAqIDAuNzU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hhbmRsZVpvb20nLCB7IFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sIFk6IHsgTG93ZXI6IHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiwgVXBwZXI6IHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMiB9IH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RG9tYWlucyh7XHJcbiAgICAgICAgICAgICAgICBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LFxyXG4gICAgICAgICAgICAgICAgWTogeyBMb3dlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyKSwgVXBwZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMikgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5YTGVuZ3RoID0gKHgucmFuZ2UoKVsxXSAtIHgucmFuZ2UoKVswXSkgKiAxLjI1O1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWUxlbmd0aCA9ICh5LnJhbmdlKClbMV0gLSB5LnJhbmdlKClbMF0pICogMS4yNTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGFuZGxlWm9vbScsIHsgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSwgWTogeyBMb3dlcjogem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyLCBVcHBlcjogem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyIH0gfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREb21haW5zKHtcclxuICAgICAgICAgICAgICAgIFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sXHJcbiAgICAgICAgICAgICAgICBZOiB7IExvd2VyOiB5LmludmVydCh6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIpLCBVcHBlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFggPCBtYXJnaW4ubGVmdCB8fCBldnQubmF0aXZlRXZlbnQub2Zmc2V0WCA+IHN2Z1dpZHRoICsgbWFyZ2luLmxlZnQpIHJldHVybjtcclxuICAgICAgICBpZiAoZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFkgPCBtYXJnaW4udG9wIHx8IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZID4gc3ZnSGVpZ2h0ICsgbWFyZ2luLnRvcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBldnQucGVyc2lzdCgpO1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG5cclxuICAgICAgICAkKCcjbWFnRHVyQ2hhcnQnKS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0RG9tYWlucyh7XHJcbiAgICAgICAgICAgICAgICBYOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG93ZXI6IHguaW52ZXJ0KHgoZG9tYWlucy5YLkxvd2VyKSArIGV2dC5jbGllbnRYIC0gZS5jbGllbnRYKSxcclxuICAgICAgICAgICAgICAgICAgICBVcHBlcjogeC5pbnZlcnQoeChkb21haW5zLlguVXBwZXIpICsgZXZ0LmNsaWVudFggLSBlLmNsaWVudFgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWToge1xyXG4gICAgICAgICAgICAgICAgICAgIExvd2VyOiB5LmludmVydCh5KGRvbWFpbnMuWS5Mb3dlcikgKyBldnQuY2xpZW50WSAtIGUuY2xpZW50WSksXHJcbiAgICAgICAgICAgICAgICAgICAgVXBwZXI6IHkuaW52ZXJ0KHkoZG9tYWlucy5ZLlVwcGVyKSArIGV2dC5jbGllbnRZIC0gZS5jbGllbnRZKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wRHJhZyhldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjbWFnRHVyQ2hhcnQnKS5vZmYoJ21vdXNlbW92ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Wm9vbShldnQpIHtcclxuICAgICAgICBzZXREb21haW5zKHsgWDogeyBMb3dlcjogMC4wMDAwMSwgVXBwZXI6IDEwMDAwMDAgfSwgWTogeyBMb3dlcjogMCwgVXBwZXI6IDIuNSB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVSZXNldCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb21haW5zLlguTG93ZXIgPT0gMC4wMDAwMSAmJiBkb21haW5zLlguVXBwZXIgPT0gMTAwMDAwMCAmJiBkb21haW5zLlkuTG93ZXIgPT0gMCAmJiBkb21haW5zLlkuVXBwZXIgPT0gMi41XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAxMCwgbGVmdDogc3ZnV2lkdGggfX0gb25DbGljaz17cmVzZXRab29tfSBoaWRkZW49e2hpZGVSZXNldCgpfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3ZnIGlkPVwibWFnRHVyQ2hhcnRcIiB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBzdHlsZT17eyBmaWxsOiAnbm9uZScsIHN0cm9rZTogJ2JsYWNrJywgc3Ryb2tlV2lkdGg6ICcxcHgnLCBzaGFwZVJlbmRlcmluZzogJ2NyaXNwRWRnZXMnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGZvbnRTaXplOiAnc21hbGwnIH19IG9uV2hlZWw9e2hhbmRsZVpvb219IG9uTW91c2VEb3duPXtoYW5kbGVEcmFnfSBvbk1vdXNlVXA9e3N0b3BEcmFnfT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRHJhdyBjaGFydCBkYXRhIGZpcnN0ICovfVxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAge21hZ0R1ckN1cnZlcy5tYXAoKG1kYywgaW5kZXgpID0+IChtZGMuVmlzaWJsZSA/IDxwYXRoIGtleT17aW5kZXh9IGQ9e21kYy5QYXRofSBzdHJva2U9e21kYy5Db2xvcn0gLz4gOiBudWxsKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge21hZ0R1ckNpcmNsZXN9XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIERyYXcgd2hpdGUgcmVjdGFuZ2xlcyBhcm91bmQgdGhlIGJvcmRlciBzbyBkYXRhIHdvbid0IHNob3cgb3V0c2lkZSBjaGFydCAqL31cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXttYXJnaW4udG9wfSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9e3Byb3BzLkhlaWdodCAtIG1hcmdpbi5ib3R0b20gLSBtYXJnaW4udG9wfSB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17bWFyZ2luLmJvdHRvbSArIG1hcmdpbi50b3B9IGZpbGw9J3doaXRlJyBzdHJva2U9J3doaXRlJyAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17MH0geT17MH0gd2lkdGg9e21hcmdpbi5sZWZ0fSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXtwcm9wcy5XaWR0aCAtIG1hcmdpbi5yaWdodH0geT17MH0gd2lkdGg9e21hcmdpbi5yaWdodH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IGZpbGw9J3doaXRlJyBzdHJva2U9J3doaXRlJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBMZWdlbmQgKi9cclxuICAgICAgICAgICAgICAgICAgICBtYWdEdXJDdXJ2ZXMubWFwKChtZGMsIGluZGV4KSA9PiA8cmVjdCBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgb3BhY2l0eTogKG1kYy5WaXNpYmxlID8gMSA6IDAuMjUpIH19IGtleT17aW5kZXh9IHg9e21hcmdpbi5sZWZ0ICsgMTAgKyAyMCAqIGluZGV4fSB5PXtzdmdIZWlnaHQgKyA0MH0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXttZGMuQ29sb3J9IG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZGMuVmlzaWJsZSA9ICFtZGMuVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZSA9IF8uY2xvbmVEZWVwKG1hZ0R1ckN1cnZlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZXModXBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT48dGl0bGU+e21kYy5OYW1lfTwvdGl0bGU+PC9yZWN0PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIFhBeGlzIHRpY2tzKi99XHJcbiAgICAgICAgICAgICAgICB7eEF4aXNUaWNrc31cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9e3N2Z1dpZHRoLzJ9IHk9e3N2Z0hlaWdodCArIG1hcmdpbi50b3AgKyAyMH0+RHVyYXRpb24gKHMpPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgey8qIFlBeGlzIHRpY2tzIGFuZCBMYWJlbHMqL31cclxuICAgICAgICAgICAgICAgIHt5QXhpc1RpY2tzfVxyXG4gICAgICAgICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAwLDApYH0geT17bWFyZ2luLmxlZnQgLSAyNX0geD17LXN2Z0hlaWdodC8yIC0gbWFyZ2luLmJvdHRvbX0+UGVyIFVuaXQgVm9sdGFnZTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD17YE0gJHttYXJnaW4ubGVmdH0gJHttYXJnaW4udG9wfSBIICR7c3ZnV2lkdGggKyBtYXJnaW4ubGVmdH0gViAke3N2Z0hlaWdodH0gSCAke21hcmdpbi5sZWZ0fSBWICR7bWFyZ2luLnRvcH1gfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdEdXJDaGFydDsiXSwic291cmNlUm9vdCI6IiJ9