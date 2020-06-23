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
        }, onClick: function (data) { }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: props.Height - 68, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } });
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




var Home = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "100%", margin: '5px 5px 5px 5px ' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px' } },
            "Home page placeholder ... Under developement.",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Magnitude Duration - Last 30 Days"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_MagDurChart__WEBPACK_IMPORTED_MODULE_3__["default"], { Width: window.innerWidth / 2 - 20, Height: (window.innerHeight - 127) / 2 - 50 })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Historical Event Counts"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_EventCountsByMonth__WEBPACK_IMPORTED_MODULE_1__["default"], { Width: window.innerWidth / 2 - 20, Height: (window.innerHeight - 127) / 2 - 53 }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "Meter Activity - Last 30 Days"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_EventCountTable__WEBPACK_IMPORTED_MODULE_2__["default"], { Width: window.innerWidth / 2 - 20, Height: (window.innerHeight - 127) / 2 - 52 }))))));
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
    var margin = { top: 15, right: 20, bottom: 40, left: 30 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), xAxisTicks = _a[0], setXAxisTicks = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), yAxisTicks = _b[0], setYAxisTicks = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurCurves = _c[0], setMagDurCurves = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        BuildYAxis();
        BuildXAxis();
        var handle1 = GetMagDurCurves();
        handle1.done(function (data) { return BuildMagDurCurve(data); });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, []);
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
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([0.00001, 1000000]);
        var ticks = [];
        for (var i = x.domain()[0]; i <= x.domain()[1]; i = i * 10) {
            ticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", opacity: "1", transform: "translate(" + x(i) + "," + svgHeight + ")", style: {} },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M 0,6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: "20", textAnchor: 'middle' }, xAxisText(i))));
        }
        setXAxisTicks(ticks);
    }
    function BuildYAxis() {
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([0, /*max(data.map(x => x.magnitude))*/ 2]);
        var yticks = [];
        for (var i = y.domain()[0]; i <= y.domain()[1]; i++) {
            yticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", opacity: "1", transform: "translate(" + margin.left + "," + y(i) + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M -6,0 H " + svgWidth, strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { x: "-15", dy: "0.32em", textAnchor: 'middle' }, i)));
        }
        setYAxisTicks(yticks);
    }
    function BuildMagDurCurve(data) {
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([0, /*max(data.map(x => x.magnitude))*/ 2]);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([0.00001, 1000000]);
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return x(d.DurationSeconds); }).y(function (d) { return y(d.PerUnitMagnitude); });
        var mdcs = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.groupBy(data, function (d) { return d.ID; });
        var mdcss = Object.keys(mdcs).map(function (key) { return { Name: mdcs[key][0].Name, Visible: mdcs[key][0].Visible, Color: mdcs[key][0].Color, Path: linefunc(mdcs[key].filter(function (d) { return d.PerUnitMagnitude >= y.domain()[0] && d.PerUnitMagnitude <= y.domain()[1] && d.DurationSeconds >= x.domain()[0] && d.DurationSeconds <= x.domain()[1]; })) }; });
        setMagDurCurves(mdcss);
    }
    function DrawChart(data) {
        //let series = data[Object.keys(data)[0]];
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height, width: props.Width, textAlign: 'center' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: props.Width, height: props.Height, style: { fill: 'none', stroke: 'black', strokeWidth: '1px', shapeRendering: 'crispEdges', fontFamily: 'sans-serif', fontSize: 'small' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }),
            xAxisTicks,
            yAxisTicks,
            magDurCurves.map(function (mdc) { return (mdc.Visible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { key: mdc.Name, d: mdc.Path, stroke: mdc.Color }) : null); }))));
};
/* harmony default export */ __webpack_exports__["default"] = (MagDurChart);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvSG9tZS9FdmVudENvdW50VGFibGUudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL0V2ZW50Q291bnRzQnlNb250aC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvTWFnRHVyQ2hhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryw4QkFBOEI7QUFDOUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUU7QUFDb0I7QUFDdkI7QUFhdkIsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUF1QztJQUN0RCw2RUFBa0QsRUFBakQsWUFBSSxFQUFFLGVBQTJDLENBQUM7SUFDbkQsaUZBQStELEVBQTlELGlCQUFTLEVBQUUsb0JBQW1ELENBQUM7SUFDaEUsK0VBQXlELEVBQXhELGlCQUFTLEVBQUUsb0JBQTZDLENBQUM7SUFFaEUsNENBQUssQ0FBQyxTQUFTLENBQUM7UUFDWixPQUFPLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMsT0FBTztRQUNaLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSx5QkFBc0I7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QUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDbE4scUVBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRztnQkFDelAscUVBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQzVRLHFFQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVB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QU0sQ0FBQyxJQUFJLFdBQU0sTUFBTSxDQUFDLEdBQUssR0FBSTtZQUd4SCxVQUFVO1lBR1YsVUFBVTtZQUVQLFlBQVksQ0FBQyxHQUFHLENBQUMsYUFBRyxJQUFJLFFBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMscUVBQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUksRUFBQyxLQUFJLENBQUMsRUFBNUUsQ0FBNEUsQ0FBQyxDQUV2RyxDQUVKLENBQ1Q7QUFDTCxDQUFDO0FBRWMsMEVBQVcsRUFBQyIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50Q291bnRUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmludGVyZmFjZSBNZXRlciB7XHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBUb3RhbDogbnVtYmVyLFxyXG4gICAgU2FnOiBudW1iZXIsXHJcbiAgICBTd2VsbDogbnVtYmVyLFxyXG4gICAgSW50ZXJydXB0aW9uOiBudW1iZXIsXHJcbiAgICBUcmFuc2llbnQ6IG51bWJlcixcclxuICAgIEZhdWx0OiBudW1iZXJcclxuXHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50Q291bnRUYWJsZSA9IChwcm9wczogeyBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlcn0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PE1ldGVyPj4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIE1ldGVyPignTmFtZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEdldERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9FdmVudENvdW50c1RhYmxlYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKChkYXRhOiBBcnJheTxNZXRlcj4pID0+IHNldERhdGEoZGF0YSkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIDxUYWJsZTxNZXRlcj5cclxuICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ1RvdGFsJywgbGFiZWw6ICdUb3RhbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ1NhZycsIGxhYmVsOiAnU2FnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnU3dlbGwnLCBsYWJlbDogJ1N3ZWxsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnSW50ZXJydXB0aW9uJywgbGFiZWw6ICdJbnQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdUcmFuc2llbnQnLCBsYWJlbDogJ1RyYW5zJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnRmF1bHQnLCBsYWJlbDogJ0ZhdWx0JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgIF19XHJcbiAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoZGF0YSwgW3NvcnRGaWVsZF0sIFsoIWFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnKV0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvcmRlcmVkKTtcclxuICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyhhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KGRhdGEsIFtkLmNvbF0sIFsoYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyB9fVxyXG4gICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNjAgfX1cclxuICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogcHJvcHMuSGVpZ2h0IC0gNjgsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgIHNlbGVjdGVkPXsoaXRlbSkgPT4gZmFsc2V9XHJcbiAgICAvPlxyXG47XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudENvdW50VGFibGU7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50Q291bnRzQnlNb250aC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNjYWxlT3JkaW5hbCwgc2NhbGVMaW5lYXIsIHNlbGVjdCwgYXhpc0JvdHRvbSwgbWF4LCBsaW5lIH0gZnJvbSAnZDMnO1xyXG5pbnRlcmZhY2UgaURhdGEge1xyXG4gICAgTW9udGg6IHN0cmluZyxcclxuICAgIFNhZzogbnVtYmVyLCBcclxuICAgIFN3ZWxsOiBudW1iZXIsIFxyXG4gICAgVHJhbnNpZW50OiBudW1iZXIsXHJcbiAgICBJbnRlcnJ1cHRpb246IG51bWJlcixcclxuICAgIEZhdWx0OiBudW1iZXIsXHJcbiAgICBUb3RhbDogbnVtYmVyXHJcbn1cclxuY29uc3QgRXZlbnRDb3VudHNCeU1vbnRoID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyIH0pID0+IHtcclxuICAgIGxldCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAyMCwgYm90dG9tOiA0MCwgbGVmdDogMzAgfTtcclxuICAgIGxldCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBsZXQgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcblxyXG4gICAgY29uc3QgW3RvdGFsUGF0aCwgc2V0VG90YWxQYXRoXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3BhdGhzLCBzZXRQYXRoc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbYXhpc1BhdGhzLCBzZXRBeGlzUGF0aHNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbYXhpc1RpY2tzLCBzZXRBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbeWF4aXNUaWNrcywgc2V0WUF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vc2V0SGlkZGVuKHRydWUpO1xyXG4gICAgICAgIHNldFBhdGhzKFtdKTtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0V2ZW50Q291bnRzQnlNb250aGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZSgoZGF0YTogQXJyYXk8aURhdGE+KSA9PiBEcmF3Q2hhcnQoZGF0YSkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YTogQXJyYXk8aURhdGE+KSB7XHJcblxyXG4gICAgICAgIC8vbGV0IHNlcmllcyA9IGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dO1xyXG4gICAgICAgIC8vbGV0IHggPSBzY2FsZU9yZGluYWwoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihkYXRhLm1hcCh4ID0+IHgubW9udGgpKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFswLCBtYXgoZGF0YS5tYXAoeCA9PiB4LlRvdGFsKSldKTtcclxuXHJcbiAgICAgICAgbGV0IHl0aWNrcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeS5kb21haW4oKVsxXTsgaSA9IGkgKyA1KSB7XHJcbiAgICAgICAgICAgIHl0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHt5KGkpfSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAtNyAwIEggJHtzdmdXaWR0aH1gfSBzdHJva2VXaWR0aD17MC4yNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHg9XCItMTVcIiBkeT1cIjAuMzJlbVwiIHRleHRBbmNob3I9J21pZGRsZSc+e2l9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRZQXhpc1RpY2tzKHl0aWNrcyk7XHJcblxyXG4gICAgICAgIGxldCB0aWNrcyA9IGRhdGEubWFwKCh4LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnQgKyBzdmdXaWR0aCAqIChpbmRleCArIDEpIC8gMTJ9LCR7c3ZnSGVpZ2h0fSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluZSB5Mj1cIjZcIj48L2xpbmU+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRBeGlzVGlja3ModGlja3MpO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWxzID0gZGF0YS5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoaW5kZXggKyAwLjI1KSkgLyAxMil9LCR7c3ZnSGVpZ2h0fSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB5Mj1cIjZcIiBkeT1cIjFlbVwiPnt4Lk1vbnRofTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRBeGlzUGF0aHMobGFiZWxzKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxpRGF0YT4oKS54KGQgPT4gbWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKGQuTW9udGgpICsgMC41KSkgLyAxMikpLnkoZCA9PiB5KGQuVG90YWwpKTtcclxuICAgICAgICBzZXRUb3RhbFBhdGgobGluZWZ1bmMoZGF0YSkpO1xyXG5cclxuICAgICAgICBsZXQgYm94ZXMgPSBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHsgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKHguTW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguU2FnKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5TYWcpfSBmaWxsPXtnZXRDb2xvcignc2FnJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKX0gZmlsbD17Z2V0Q29sb3IoJ3N3ZWxsJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpfSBmaWxsPXtnZXRDb2xvcignVHJhbnNpZW50Jyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpKSAtIChzdmdIZWlnaHQgLSB5KHguRmF1bHQpKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5GYXVsdCl9IGZpbGw9e2dldENvbG9yKCdGYXVsdCcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKHguTW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguU2FnKSAtIChzdmdIZWlnaHQgLSB5KHguU3dlbGwpKSAtIChzdmdIZWlnaHQgLSB5KHguVHJhbnNpZW50KSkgLSAoc3ZnSGVpZ2h0IC0geSh4LkZhdWx0KSkgLSAoc3ZnSGVpZ2h0IC0geSh4LkludGVycnVwdGlvbikpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LkludGVycnVwdGlvbil9IGZpbGw9e2dldENvbG9yKCdJbnRlcnJ1cHRpb24nKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFBhdGhzKGJveGVzKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJzYWdcIikgcmV0dXJuICdwdXJwbGUnO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJzd2VsbFwiKSByZXR1cm4gJ2dyZWVuJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwidHJhbnNpZW50XCIpIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwiaW50ZXJydXB0aW9uXCIpIHJldHVybiAncmVkJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwiZmF1bHRcIikgcmV0dXJuICdibHVlJztcclxuICAgICAgICBlbHNlIHJldHVybiAnIzAwMDAwMCc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCB3aWR0aDogcHJvcHMuV2lkdGgsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gaGlkZGVuPXtoaWRkZW59PlxyXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IHN0eWxlPXt7ZmlsbDogJ25vbmUnLCBzdHJva2U6ICdibGFjaycsIHN0cm9rZVdpZHRoOiAnMXB4Jywgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBmb250U2l6ZTonc21hbGwnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IGJvcmRlcnMgKi99XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAke21hcmdpbi5sZWZ0fSAke21hcmdpbi50b3B9IEggJHtzdmdXaWR0aCArIG1hcmdpbi5sZWZ0fSBWICR7c3ZnSGVpZ2h0fSBIICR7bWFyZ2luLmxlZnR9IFYgJHttYXJnaW4udG9wfWB9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogWEF4aXMgdGlja3MqL31cclxuICAgICAgICAgICAgICAgIDxnIGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke3N2Z0hlaWdodH0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeTI9XCI2XCI+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAge2F4aXNUaWNrc31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogWUF4aXMgdGlja3MgYW5kIExhYmVscyovfVxyXG4gICAgICAgICAgICAgICAge3lheGlzVGlja3N9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFhBeGlzIExhYmVscyovfVxyXG4gICAgICAgICAgICAgICAgPGc+e2F4aXNQYXRoc308L2c+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IExlZ2VuZCAqL31cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgMTB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCdzYWcnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHk9e3N2Z0hlaWdodCArIDM4fSB4PXttYXJnaW4ubGVmdCArIDMwfSA+U2FnPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyA3MH0geT17c3ZnSGVpZ2h0ICsgMjV9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17Z2V0Q29sb3IoJ3N3ZWxsJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyA5MH0gPlN3ZWxsPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAxNDB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCd0cmFuc2llbnQnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHk9e3N2Z0hlaWdodCArIDM4fSB4PXttYXJnaW4ubGVmdCArIDE2MH0gPlRyYW5zaWVudDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgMjQwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcignZmF1bHQnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHk9e3N2Z0hlaWdodCArIDM4fSB4PXttYXJnaW4ubGVmdCArIDI2MH0gPkZhdWx0PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAzMjB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCdpbnRlcnJ1cHRpb24nKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHk9e3N2Z0hlaWdodCArIDM4fSB4PXttYXJnaW4ubGVmdCArIDM0MH0gPkludGVycnVwdGlvbjwvdGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3RhY2tlZCBCYXJzICovfVxyXG4gICAgICAgICAgICAgICAge3BhdGhzfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBMaW5lIEFib3ZlIFN0YWNrZWQgQmFycyAqL31cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlV2lkdGg9JzMnIHN0cm9rZT0nZGFya2JsdWUnIGQ9e3RvdGFsUGF0aH0gLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudENvdW50c0J5TW9udGg7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEhvbWUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRDb3VudHNCeU1vbnRoIGZyb20gJy4uL0hvbWUvRXZlbnRDb3VudHNCeU1vbnRoJztcclxuaW1wb3J0IEV2ZW50Q291bnRUYWJsZSBmcm9tICcuLi9Ib21lL0V2ZW50Q291bnRUYWJsZSc7XHJcbmltcG9ydCBNYWdEdXJDaGFydCBmcm9tICcuLi9Ib21lL01hZ0R1ckNoYXJ0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7cGFkZGluZzogJzBweCAycHggMHB4IDBweCd9fT5Ib21lIHBhZ2UgcGxhY2Vob2xkZXIgLi4uIFVuZGVyIGRldmVsb3BlbWVudC5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWFnbml0dWRlIER1cmF0aW9uIC0gTGFzdCAzMCBEYXlzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFnRHVyQ2hhcnQgV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDUwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAwcHggMHB4IDNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcmljYWwgRXZlbnQgQ291bnRzIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENvdW50c0J5TW9udGggV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDUzfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWV0ZXIgQWN0aXZpdHkgLSBMYXN0IDMwIERheXNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e3BhZGRpbmc6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50Q291bnRUYWJsZSBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyIC0gMjB9IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykgLyAyIC0gNTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNYWdEdXJDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNjYWxlTG9nLCBzY2FsZUxpbmVhciwgbWF4LCBsaW5lIH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsIFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQZXJVbml0TWFnbml0dWRlOiBudW1iZXIsIFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFnRHVyQ3VydmUge1xyXG4gICAgTmFtZTogc3RyaW5nLFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQYXRoOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTWFnRHVyQ2hhcnQgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDQwLCBsZWZ0OiAzMCB9O1xyXG4gICAgbGV0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGxldCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICBjb25zdCBbeEF4aXNUaWNrcywgc2V0WEF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFt5QXhpc1RpY2tzLCBzZXRZQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlcywgc2V0TWFnRHVyQ3VydmVzXSA9IFJlYWN0LnVzZVN0YXRlPE1hZ0R1ckN1cnZlW10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEJ1aWxkWUF4aXMoKTtcclxuICAgICAgICBCdWlsZFhBeGlzKCk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0TWFnRHVyQ3VydmVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBpRGF0YVtdKSA9PiBCdWlsZE1hZ0R1ckN1cnZlKGRhdGEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1hZ0R1ckN1cnZlcygpOiBKUXVlcnkuanFYSFI8aURhdGFbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NYWdEdXJDdXJ2ZXNgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHhBeGlzVGV4dCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodmFsdWUgPCAwLjAwMSkgcmV0dXJuICh2YWx1ZSAqIDEwMDAwMDApLnRvRml4ZWQoMCkgKyAnwrUnO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAgJiYgdmFsdWUgPCAxMDAwMDAwKSByZXR1cm4gKHZhbHVlIC8gMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMDApIHJldHVybiAodmFsdWUgLyAxMDAwMDAwKS50b0ZpeGVkKDApICsgJ00nO1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHJldHVybiB2YWx1ZS50b1ByZWNpc2lvbigxKS50b1N0cmluZygpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFhBeGlzKCkge1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbMC4wMDAwMSwgMTAwMDAwMF0pO1xyXG4gICAgICAgIGxldCB0aWNrcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHguZG9tYWluKClbMF07IGkgPD0geC5kb21haW4oKVsxXTsgaSA9IGkgKiAxMCkge1xyXG4gICAgICAgICAgICB0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt4KGkpfSwke3N2Z0hlaWdodH0pYH0gc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPXtgTSAwLDYgViAtJHtzdmdIZWlnaHQgLSBtYXJnaW4udG9wfWB9IHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeT1cIjIwXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57eEF4aXNUZXh0KGkpfTwvdGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRYQXhpc1RpY2tzKHRpY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFlBeGlzKCkge1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oWzAsIC8qbWF4KGRhdGEubWFwKHggPT4geC5tYWduaXR1ZGUpKSovMl0pO1xyXG4gICAgICAgIGxldCB5dGlja3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0geS5kb21haW4oKVswXTsgaSA8PSB5LmRvbWFpbigpWzFdOyBpKyspIHtcclxuICAgICAgICAgICAgeXRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke3koaSl9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9e2BNIC02LDAgSCAke3N2Z1dpZHRofWB9IHN0cm9rZVdpZHRoPXswLjI1fT48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeD1cIi0xNVwiIGR5PVwiMC4zMmVtXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57aX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFlBeGlzVGlja3MoeXRpY2tzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZ0R1ckN1cnZlKGRhdGE6IGlEYXRhW10pIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFswLCAvKm1heChkYXRhLm1hcCh4ID0+IHgubWFnbml0dWRlKSkqLzJdKTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTG9nKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oWzAuMDAwMDEsIDEwMDAwMDBdKTtcclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPGlEYXRhPigpLngoZCA9PiB4KGQuRHVyYXRpb25TZWNvbmRzKSkueShkID0+IHkoZC5QZXJVbml0TWFnbml0dWRlKSk7XHJcbiAgICAgICAgbGV0IG1kY3MgPSBfLmdyb3VwQnkoZGF0YSwgKGQpID0+IGQuSUQpO1xyXG4gICAgICAgIGxldCBtZGNzcyA9IE9iamVjdC5rZXlzKG1kY3MpLm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IE5hbWU6IG1kY3Nba2V5XVswXS5OYW1lLCBWaXNpYmxlOiBtZGNzW2tleV1bMF0uVmlzaWJsZSwgQ29sb3I6IG1kY3Nba2V5XVswXS5Db2xvciwgUGF0aDogbGluZWZ1bmMobWRjc1trZXldLmZpbHRlcihkID0+IGQuUGVyVW5pdE1hZ25pdHVkZSA+PSB5LmRvbWFpbigpWzBdICYmIGQuUGVyVW5pdE1hZ25pdHVkZSA8PSB5LmRvbWFpbigpWzFdICYmIGQuRHVyYXRpb25TZWNvbmRzID49IHguZG9tYWluKClbMF0gJiYgZC5EdXJhdGlvblNlY29uZHMgPD0geC5kb21haW4oKVsxXSkpIH0gfSk7XHJcbiAgICAgICAgc2V0TWFnRHVyQ3VydmVzKG1kY3NzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YTogQXJyYXk8aURhdGE+KSB7XHJcblxyXG4gICAgICAgIC8vbGV0IHNlcmllcyA9IGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCB3aWR0aDogcHJvcHMuV2lkdGgsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnLCBzdHJva2U6ICdibGFjaycsIHN0cm9rZVdpZHRoOiAnMXB4Jywgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBmb250U2l6ZTogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD17YE0gJHttYXJnaW4ubGVmdH0gJHttYXJnaW4udG9wfSBIICR7c3ZnV2lkdGggKyBtYXJnaW4ubGVmdH0gViAke3N2Z0hlaWdodH0gSCAke21hcmdpbi5sZWZ0fSBWICR7bWFyZ2luLnRvcH1gfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyB0aWNrcyovfVxyXG4gICAgICAgICAgICAgICAge3hBeGlzVGlja3N9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFlBeGlzIHRpY2tzIGFuZCBMYWJlbHMqL31cclxuICAgICAgICAgICAgICAgIHt5QXhpc1RpY2tzfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hZ0R1ckN1cnZlcy5tYXAobWRjID0+IChtZGMuVmlzaWJsZSA/IDxwYXRoIGtleT17bWRjLk5hbWV9IGQ9e21kYy5QYXRofSBzdHJva2U9e21kYy5Db2xvcn0gLz46bnVsbCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFnRHVyQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==