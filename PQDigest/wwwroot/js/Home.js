(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "../node_modules/@gpa-gemstone/react-table/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-table/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//  ******************************************************************************************************
//  Table.tsx - Gbtc
//
//  Copyright © 2018, Grid Protection Alliance.  All Rights Reserved.
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
//  08/02/2018 - Billy Ernest
//       Generated original version of source code.
//
//  ******************************************************************************************************
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var _ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
var AngleIcon = function (props) { return (React.createElement("span", { style: { width: 10, height: 10, margin: 3 }, className: 'fa fa-angle-' + (props.ascending ? 'up' : 'down') })); };
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        return _super.call(this, props) || this;
    }
    Table.prototype.render = function () {
        var rowComponents = this.generateRows();
        var headerComponents = this.generateHeaders();
        return (React.createElement("table", { className: this.props.tableClass !== undefined ? this.props.tableClass : '', style: this.props.tableStyle },
            React.createElement("thead", { style: this.props.theadStyle }, headerComponents),
            React.createElement("tbody", { style: this.props.tbodyStyle }, rowComponents)));
    };
    Table.prototype.generateHeaders = function () {
        var _this = this;
        if (this.props.cols.length === 0)
            return null;
        var cells = this.props.cols.map(function (colData, index) {
            var style;
            if (colData.headerStyle !== undefined) {
                style = colData.headerStyle;
            }
            else
                style = {};
            if (style.cursor === undefined)
                style.cursor = 'pointer';
            return (React.createElement("th", { key: index, style: style, onClick: function (e) { return _this.handleSort({ col: colData.key, ascending: _this.props.ascending }, e); } },
                colData.label,
                _this.props.sortField === colData.key ? React.createElement(AngleIcon, { ascending: _this.props.ascending }) : null));
        });
        return React.createElement("tr", null, cells);
    };
    Table.prototype.generateRows = function () {
        var _this = this;
        if (this.props.data.length === 0)
            return null;
        return this.props.data.map(function (item, index) {
            var cells = _this.props.cols.map(function (colData) {
                var css;
                if (colData.rowStyle === undefined)
                    css = {};
                else
                    css = _.clone(colData.rowStyle);
                return (React.createElement("td", { key: index.toString() + item[colData.key] + colData.key, style: css, onClick: _this.handleClick.bind(_this, { col: colData.key, row: item, data: item[colData.key] }) }, colData.content !== undefined ? colData.content(item, colData.key, css) : item[colData.key]));
            });
            var style;
            if (_this.props.rowStyle !== undefined) {
                style = _.clone(_this.props.rowStyle);
            }
            else
                style = {};
            if (style.cursor === undefined)
                style.cursor = 'pointer';
            if (_this.props.selected !== undefined && _this.props.selected(item))
                style.backgroundColor = 'yellow';
            return (React.createElement("tr", { style: style, key: index.toString() }, cells));
        });
    };
    Table.prototype.handleClick = function (data, event) {
        this.props.onClick(data, event);
    };
    Table.prototype.handleSort = function (data, event) {
        this.props.onSort(data);
    };
    return Table;
}(React.Component));
exports.default = Table;


/***/ }),

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
        }, onClick: function (data) { window.open(homePath + "EventSearch?startDate=" + moment().subtract(30, 'days').format("YYYY-MM-DD") + "&endDate=" + moment().format("YYYY-MM-DD") + "&returnLimit=100&meters=" + btoa(data.row.ID.toString())); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: props.Height - 60, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return false; } });
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
        });
        handle.done(function (data) { return DrawChart(data); });
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
        for (var i = 0; i <= y.domain()[1]; i = i + (Math.floor(y.domain()[1] / 10) == 0 ? 1 : Math.floor(y.domain()[1] / 10))) {
            yticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", opacity: "1", transform: "translate(" + margin.left + "," + y(i) + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M -7 0 H " + svgWidth, strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: "-15", dy: "0.32em", textAnchor: 'middle' }, i)));
        }
        setYAxisTicks(yticks);
        var ticks = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index, className: "tick", opacity: "1", transform: "translate(" + (margin.left + svgWidth * (index + 1) / 12) + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { stroke: 'black', y2: "6" })));
        });
        setAxisTicks(ticks);
        var labels = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index, className: "tick", opacity: "1", transform: "translate(" + (margin.left + (svgWidth * ((index + 0.25)) / 12)) + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y2: "6", dy: "1em" }, x.Month)));
        });
        setAxisPaths(labels);
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(d.Month) + 0.5)) / 12); }).y(function (d) { return y(d.Total); });
        setTotalPath(linefunc(data));
        var boxes = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { style: { cursor: 'pointer' }, key: index, onClick: function () {
                    var start = moment(x.Year.toString() + "-" + x.Month + '-1', 'YYYY-MMM-D');
                    var end = moment(x.Year.toString() + "-" + x.Month + '-1', 'YYYY-MMM-D');
                    end.add(1, 'month');
                    end.add(-1, 'second');
                    window.location.href = homePath + "EventSearch?startDate=" + start.format('YYYY-MM-DD') + "&endDate=" + end.format('YYYY-MM-DD');
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag), width: 20, height: svgHeight - y(x.Sag), fill: getColor('sag') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)), width: 20, height: svgHeight - y(x.Swell), fill: getColor('swell') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)), width: 20, height: svgHeight - y(x.Transient), fill: getColor('Transient') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)) - (svgHeight - y(x.Fault)), width: 20, height: svgHeight - y(x.Fault), fill: getColor('Fault') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.Month; }).indexOf(x.Month) + 0.35)) / 12), y: y(x.Sag) - (svgHeight - y(x.Swell)) - (svgHeight - y(x.Transient)) - (svgHeight - y(x.Fault)) - (svgHeight - y(x.Interruption)), width: 20, height: svgHeight - y(x.Interruption), fill: getColor('Interruption') })));
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: props.Width, height: props.Height, style: { fill: 'none', shapeRendering: 'crispEdges' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: "tick", opacity: "1", transform: "translate(" + margin.left + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { stroke: 'black', y2: "6" })),
            axisTicks,
            yaxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, axisPaths),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + 10, y: svgHeight + 25, width: 15, height: 15, fill: getColor('sag') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: svgHeight + 38, x: margin.left + 30 }, "Sag"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + 70, y: svgHeight + 25, width: 15, height: 15, fill: getColor('swell') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: svgHeight + 38, x: margin.left + 90 }, "Swell"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + 140, y: svgHeight + 25, width: 15, height: 15, fill: getColor('transient') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: svgHeight + 38, x: margin.left + 160 }, "Transient"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + 240, y: svgHeight + 25, width: 15, height: 15, fill: getColor('fault') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: svgHeight + 38, x: margin.left + 260 }, "Fault"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', x: margin.left + 320, y: svgHeight + 25, width: 15, height: 15, fill: getColor('interruption') }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: svgHeight + 38, x: margin.left + 340 }, "Interruption"),
            paths)));
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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0), 2), numberMeters = _b[0], setNumberMeters = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0), 2), eventCount = _c[0], setEventCount = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle = GetMailto();
        handle.done(function (data) {
            setMailTo("mailto:" + data.Value);
        });
        var handle2 = GetMeterCount();
        handle2.done(function (data) {
            setNumberMeters(data);
        });
        var handle3 = GetEventCount();
        handle3.done(function (data) {
            setEventCount(data);
        });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
            if (handle2.abort != undefined)
                handle2.abort();
            if (handle3.abort != undefined)
                handle3.abort();
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
    function GetMeterCount() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Meter/Count",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetEventCount() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Event/Count",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "100%", margin: '5px 5px 5px 5px ' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                    "Welcome, ",
                    userName),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight - 127) / 2 - 52 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                        "So far this month there have been ",
                        eventCount,
                        " events recorded from your ",
                        numberMeters,
                        " power quality meters."),
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M 0,6 V -" + (svgHeight - margin.top), strokeWidth: 0.25 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, xAxisText(i)),
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
        var circles = data.filter(function (point) { return point.PerUnitMagnitude >= domains.Y.Lower && point.PerUnitMagnitude <= domains.Y.Upper && point.DurationSeconds >= domains.X.Lower && point.DurationSeconds <= domains.X.Upper; }).map(function (point, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { key: index, className: "dot", style: { cursor: 'pointer' }, r: 3, cx: x(point.DurationSeconds), cy: y(point.PerUnitMagnitude), fill: 'blue', onClick: function (evt) { return handleClick(point); } }); });
        setMagDurCircles(circles);
    }
    function handleClick(point) {
        window.open(homePath + 'WaveformViewer?EventID=' + point.ID);
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { id: "magDurChart", width: props.Width, height: props.Height, style: { fill: 'none', shapeRendering: 'crispEdges' }, onWheel: handleZoom, onMouseDown: handleDrag, onMouseUp: stopDrag },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null,
                magDurCurves.map(function (mdc, index) { return (mdc.Visible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { key: index, d: mdc.Path, stroke: mdc.Color }) : null); }),
                magDurCircles),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: 0, y: 0, width: props.Width, height: margin.top, fill: 'white', stroke: 'white' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: 0, y: props.Height - margin.bottom - margin.top, width: props.Width, height: margin.bottom + margin.top, fill: 'white', stroke: 'white' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: 0, y: 0, width: margin.left, height: props.Height, fill: 'white', stroke: 'white' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: props.Width - margin.right, y: 0, width: margin.right, height: props.Height, fill: 'white', stroke: 'white' }),
            magDurCurves.map(function (mdc, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { stroke: 'black', style: { cursor: 'pointer', opacity: (mdc.Visible ? 1 : 0.25) }, key: index, x: margin.left + 10 + 20 * index, y: svgHeight + 40, width: 15, height: 15, fill: mdc.Color, onClick: function (event) {
                    mdc.Visible = !mdc.Visible;
                    var update = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(magDurCurves);
                    setMagDurCurves(update);
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, mdc.Name)); }),
            xAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: svgWidth / 2, y: svgHeight + margin.top + 20 }, "Duration (s)"),
            yAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", transform: "rotate(-90 0,0)", y: margin.left - 25, x: -svgHeight / 2 - margin.bottom }, "Per Unit Voltage"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M " + margin.left + " " + margin.top + " H " + (svgWidth + margin.left) + " V " + svgHeight + " H " + margin.left + " V " + margin.top }))));
};
/* harmony default export */ __webpack_exports__["default"] = (MagDurChart);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvRXZlbnRDb3VudFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvSG9tZS9FdmVudENvdW50c0J5TW9udGgudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL0hvbWUudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL01hZ0R1ckNoYXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLFFBQVEsbUJBQU8sQ0FBQyxnREFBUTtBQUN4QixrQ0FBa0Msc0NBQXNDLFNBQVMsbUNBQW1DLGlFQUFpRSxHQUFHO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNEdBQTRHO0FBQzFKLDBDQUEwQywrQkFBK0I7QUFDekUsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFrRCwwQkFBMEIscURBQXFELEtBQUssRUFBRSxFQUFFO0FBQ3pMO0FBQ0Esd0ZBQXdGLG1DQUFt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LENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDbE0scUVBQU0sTUFBTSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQ2pPLHFFQUFNLE1BQU0sRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRztnQkFDeFEscUVBQU0sTUFBTSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDM1IscUVBQU0sTUFBTSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElB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LENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBSTtZQUMvRyxxRUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxZQUFlO1lBQzFGLHFFQUFNLE1BQU0sRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFJO1lBQ3BILHFFQUFNLElBQUksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLGdCQUFtQjtZQUMvRixxRUFBTSxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBSTtZQUNoSCxxRUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxZQUFlO1lBQzNGLHFFQUFNLE1BQU0sRUFBQyxPQUFPLEVBQUMs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R0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7b0JBQzNCLElBQUksTUFBTSxHQUFHLDZDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUV2QyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQUUsMEVBQVEsR0FBRyxDQUFDLElBQUksQ0FBUyxDQUFPLEVBTEYsQ0FLRSxDQUFDO1lBSXZDLFVBQVU7WUFDWCxxRUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsbUJBQXFCO1lBRXJHLFVBQVU7WUFDWCxxRUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLHVCQUF5QjtZQUUvSSxxRUFBTSxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxPQUFLLE1BQU0sQ0FBQyxJQUFJLFNBQUksTUFBTSxDQUFDLEdBQUcsWUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksWUFBTSxTQUFTLFdBQU0sTUFBTSxDQUFDLElBQUksV0FBTSxNQUFNLENBQUMsR0FBSyxHQUFJLENBRXRJLENBRUosQ0FDVDtBQUNMLENBQUM7QUFFYywwRUFBVyxFQUFDIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBUYWJsZS50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDE4LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwOC8wMi8yMDE4IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbnZhciBBbmdsZUljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbWFyZ2luOiAzIH0sIGNsYXNzTmFtZTogJ2ZhIGZhLWFuZ2xlLScgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJykgfSkpOyB9O1xudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcbiAgICAgICAgdmFyIGhlYWRlckNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy50YWJsZUNsYXNzICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJywgc3R5bGU6IHRoaXMucHJvcHMudGFibGVTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGhlYWRTdHlsZSB9LCBoZWFkZXJDb21wb25lbnRzKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCB7IHN0eWxlOiB0aGlzLnByb3BzLnRib2R5U3R5bGUgfSwgcm93Q29tcG9uZW50cykpKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5nZW5lcmF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoZnVuY3Rpb24gKGNvbERhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2xEYXRhLmhlYWRlclN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4LCBzdHlsZTogc3R5bGUsIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTb3J0KHsgY29sOiBjb2xEYXRhLmtleSwgYXNjZW5kaW5nOiBfdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSk7IH0gfSxcbiAgICAgICAgICAgICAgICBjb2xEYXRhLmxhYmVsLFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnNvcnRGaWVsZCA9PT0gY29sRGF0YS5rZXkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEFuZ2xlSWNvbiwgeyBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9KSA6IG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgY2VsbHMpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlUm93cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBfdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNvbERhdGEucm93U3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgY3NzID0ge307XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSBfLmNsb25lKGNvbERhdGEucm93U3R5bGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBpbmRleC50b1N0cmluZygpICsgaXRlbVtjb2xEYXRhLmtleV0gKyBjb2xEYXRhLmtleSwgc3R5bGU6IGNzcywgb25DbGljazogX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcywgeyBjb2w6IGNvbERhdGEua2V5LCByb3c6IGl0ZW0sIGRhdGE6IGl0ZW1bY29sRGF0YS5rZXldIH0pIH0sIGNvbERhdGEuY29udGVudCAhPT0gdW5kZWZpbmVkID8gY29sRGF0YS5jb250ZW50KGl0ZW0sIGNvbERhdGEua2V5LCBjc3MpIDogaXRlbVtjb2xEYXRhLmtleV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IF8uY2xvbmUoX3RoaXMucHJvcHMucm93U3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQgJiYgX3RoaXMucHJvcHMuc2VsZWN0ZWQoaXRlbSkpXG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IHN0eWxlOiBzdHlsZSwga2V5OiBpbmRleC50b1N0cmluZygpIH0sIGNlbGxzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhkYXRhLCBldmVudCk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlU29ydCA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU29ydChkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBUYWJsZTtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZTtcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudENvdW50VGFibGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzIyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbnRlcmZhY2UgTWV0ZXIge1xyXG4gICAgSUQ6IG51bWJlcixcclxuICAgIE5hbWU6IHN0cmluZyxcclxuICAgIFRvdGFsOiBudW1iZXIsXHJcbiAgICBTYWc6IG51bWJlcixcclxuICAgIFN3ZWxsOiBudW1iZXIsXHJcbiAgICBJbnRlcnJ1cHRpb246IG51bWJlcixcclxuICAgIFRyYW5zaWVudDogbnVtYmVyLFxyXG4gICAgRmF1bHQ6IG51bWJlclxyXG5cclxufVxyXG5cclxuY29uc3QgRXZlbnRDb3VudFRhYmxlID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8TWV0ZXI+PihbXSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgTWV0ZXI+KCdOYW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0V2ZW50Q291bnRzVGFibGVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoKGRhdGE6IEFycmF5PE1ldGVyPikgPT4gc2V0RGF0YShkYXRhKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gPFRhYmxlPE1ldGVyPlxyXG4gICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnVG90YWwnLCBsYWJlbDogJ1RvdGFsJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnU2FnJywgbGFiZWw6ICdTYWcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdTd2VsbCcsIGxhYmVsOiAnU3dlbGwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdJbnRlcnJ1cHRpb24nLCBsYWJlbDogJ0ludCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ1RyYW5zaWVudCcsIGxhYmVsOiAnVHJhbnMnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdGYXVsdCcsIGxhYmVsOiAnRmF1bHQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDE3LCBwYWRkaW5nOiAwIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAwLCBwYWRkaW5nOiAwIH0gfSxcclxuXHJcbiAgICAgICAgXX1cclxuICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShkYXRhLCBbc29ydEZpZWxkXSwgWyghYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoZGF0YSwgW2QuY29sXSwgWyhhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEob3JkZXJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eyhkYXRhKSA9PiB7IHdpbmRvdy5vcGVuKGAke2hvbWVQYXRofUV2ZW50U2VhcmNoP3N0YXJ0RGF0ZT0ke21vbWVudCgpLnN1YnRyYWN0KDMwLCAnZGF5cycpLmZvcm1hdChcIllZWVktTU0tRERcIil9JmVuZERhdGU9JHttb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfSZyZXR1cm5MaW1pdD0xMDAmbWV0ZXJzPSR7YnRvYShkYXRhLnJvdy5JRC50b1N0cmluZygpKX1gKX19XHJcbiAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCB9fVxyXG4gICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA2MCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBmYWxzZX1cclxuICAgIC8+XHJcbjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q291bnRUYWJsZTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRDb3VudHNCeU1vbnRoLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVPcmRpbmFsLCBzY2FsZUxpbmVhciwgc2VsZWN0LCBheGlzQm90dG9tLCBtYXgsIGxpbmUgfSBmcm9tICdkMyc7XHJcbmludGVyZmFjZSBpRGF0YSB7XHJcbiAgICBZZWFyOiBudW1iZXIsXHJcbiAgICBNb250aDogc3RyaW5nLFxyXG4gICAgU2FnOiBudW1iZXIsIFxyXG4gICAgU3dlbGw6IG51bWJlciwgXHJcbiAgICBUcmFuc2llbnQ6IG51bWJlcixcclxuICAgIEludGVycnVwdGlvbjogbnVtYmVyLFxyXG4gICAgRmF1bHQ6IG51bWJlcixcclxuICAgIFRvdGFsOiBudW1iZXJcclxufVxyXG5jb25zdCBFdmVudENvdW50c0J5TW9udGggPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDQwLCBsZWZ0OiAzMCB9O1xyXG4gICAgbGV0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGxldCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICBjb25zdCBbdG90YWxQYXRoLCBzZXRUb3RhbFBhdGhdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGF0aHMsIHNldFBhdGhzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtheGlzUGF0aHMsIHNldEF4aXNQYXRoc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFtheGlzVGlja3MsIHNldEF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFt5YXhpc1RpY2tzLCBzZXRZQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9zZXRIaWRkZW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0UGF0aHMoW10pO1xyXG4gICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRXZlbnRDb3VudHNCeU1vbnRoYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IEFycmF5PGlEYXRhPikgPT4gRHJhd0NoYXJ0KGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KGRhdGE6IEFycmF5PGlEYXRhPikge1xyXG5cclxuICAgICAgICAvL2xldCBzZXJpZXMgPSBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcclxuICAgICAgICAvL2xldCB4ID0gc2NhbGVPcmRpbmFsKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oZGF0YS5tYXAoeCA9PiB4Lm1vbnRoKSk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbMCwgbWF4KGRhdGEubWFwKHggPT4geC5Ub3RhbCkpXSk7XHJcblxyXG4gICAgICAgIGxldCB5dGlja3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB5LmRvbWFpbigpWzFdOyBpID0gaSArIChNYXRoLmZsb29yKHkuZG9tYWluKClbMV0gLyAxMCkgPT0gMCA/IDEgOiBNYXRoLmZsb29yKHkuZG9tYWluKClbMV0gLyAxMCkgKSkge1xyXG4gICAgICAgICAgICB5dGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7eShpKX0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSdibGFjaycgZD17YE0gLTcgMCBIICR7c3ZnV2lkdGh9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgIHg9XCItMTVcIiBkeT1cIjAuMzJlbVwiIHRleHRBbmNob3I9J21pZGRsZSc+e2l9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRZQXhpc1RpY2tzKHl0aWNrcyk7XHJcblxyXG4gICAgICAgIGxldCB0aWNrcyA9IGRhdGEubWFwKCh4LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnQgKyBzdmdXaWR0aCAqIChpbmRleCArIDEpIC8gMTJ9LCR7c3ZnSGVpZ2h0fSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluZSBzdHJva2U9J2JsYWNrJyB5Mj1cIjZcIj48L2xpbmU+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRBeGlzVGlja3ModGlja3MpO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWxzID0gZGF0YS5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoaW5kZXggKyAwLjI1KSkgLyAxMil9LCR7c3ZnSGVpZ2h0fSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgIHkyPVwiNlwiIGR5PVwiMWVtXCI+e3guTW9udGh9PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEF4aXNQYXRocyhsYWJlbHMpO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPGlEYXRhPigpLngoZCA9PiBtYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoZC5Nb250aCkgKyAwLjUpKSAvIDEyKSkueShkID0+IHkoZC5Ub3RhbCkpO1xyXG4gICAgICAgIHNldFRvdGFsUGF0aChsaW5lZnVuYyhkYXRhKSk7XHJcblxyXG4gICAgICAgIGxldCBib3hlcyA9IGRhdGEubWFwKCh4LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGcgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IG1vbWVudCh4LlllYXIudG9TdHJpbmcoKSArIFwiLVwiICsgeC5Nb250aCArICctMScsICdZWVlZLU1NTS1EJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IG1vbWVudCh4LlllYXIudG9TdHJpbmcoKSArIFwiLVwiICsgeC5Nb250aCArICctMScsICdZWVlZLU1NTS1EJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmQuYWRkKC0xLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtob21lUGF0aH1FdmVudFNlYXJjaD9zdGFydERhdGU9JHtzdGFydC5mb3JtYXQoJ1lZWVktTU0tREQnKX0mZW5kRGF0ZT0ke2VuZC5mb3JtYXQoJ1lZWVktTU0tREQnKX1gO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSdibGFjaycgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKHguTW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguU2FnKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5TYWcpfSBmaWxsPXtnZXRDb2xvcignc2FnJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9J2JsYWNrJyB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKX0gZmlsbD17Z2V0Q29sb3IoJ3N3ZWxsJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9J2JsYWNrJyB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpfSBmaWxsPXtnZXRDb2xvcignVHJhbnNpZW50Jyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9J2JsYWNrJyB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpKSAtIChzdmdIZWlnaHQgLSB5KHguRmF1bHQpKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5GYXVsdCl9IGZpbGw9e2dldENvbG9yKCdGYXVsdCcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSdibGFjaycgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLk1vbnRoKS5pbmRleE9mKHguTW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguU2FnKSAtIChzdmdIZWlnaHQgLSB5KHguU3dlbGwpKSAtIChzdmdIZWlnaHQgLSB5KHguVHJhbnNpZW50KSkgLSAoc3ZnSGVpZ2h0IC0geSh4LkZhdWx0KSkgLSAoc3ZnSGVpZ2h0IC0geSh4LkludGVycnVwdGlvbikpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LkludGVycnVwdGlvbil9IGZpbGw9e2dldENvbG9yKCdJbnRlcnJ1cHRpb24nKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFBhdGhzKGJveGVzKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJzYWdcIikgcmV0dXJuICdwdXJwbGUnO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJzd2VsbFwiKSByZXR1cm4gJ2dyZWVuJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwidHJhbnNpZW50XCIpIHJldHVybiAnb3JhbmdlJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwiaW50ZXJydXB0aW9uXCIpIHJldHVybiAncmVkJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwiZmF1bHRcIikgcmV0dXJuICdibHVlJztcclxuICAgICAgICBlbHNlIHJldHVybiAnIzAwMDAwMCc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCB3aWR0aDogcHJvcHMuV2lkdGgsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gaGlkZGVuPXtoaWRkZW59PlxyXG5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBzdHlsZT17e2ZpbGw6ICdub25lJyxzaGFwZVJlbmRlcmluZzogJ2NyaXNwRWRnZXMnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IGJvcmRlcnMgKi99XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9J2JsYWNrJyBkPXtgTSAke21hcmdpbi5sZWZ0fSAke21hcmdpbi50b3B9IEggJHtzdmdXaWR0aCArIG1hcmdpbi5sZWZ0fSBWICR7c3ZnSGVpZ2h0fSBIICR7bWFyZ2luLmxlZnR9IFYgJHttYXJnaW4udG9wfWB9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogWEF4aXMgdGlja3MqL31cclxuICAgICAgICAgICAgICAgIDxnIGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke3N2Z0hlaWdodH0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmUgc3Ryb2tlPSdibGFjaycgeTI9XCI2XCI+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAge2F4aXNUaWNrc31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogWUF4aXMgdGlja3MgYW5kIExhYmVscyovfVxyXG4gICAgICAgICAgICAgICAge3lheGlzVGlja3N9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFhBeGlzIExhYmVscyovfVxyXG4gICAgICAgICAgICAgICAgPGc+e2F4aXNQYXRoc308L2c+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENoYXJ0IExlZ2VuZCAqL31cclxuICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgMTB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCdzYWcnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiAgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgMzB9ID5TYWc8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9J2JsYWNrJyB4PXttYXJnaW4ubGVmdCArIDcwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcignc3dlbGwnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiAgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgOTB9ID5Td2VsbDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgMTQwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcigndHJhbnNpZW50Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgIHk9e3N2Z0hlaWdodCArIDM4fSB4PXttYXJnaW4ubGVmdCArIDE2MH0gPlRyYW5zaWVudDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgMjQwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcignZmF1bHQnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiAgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgMjYwfSA+RmF1bHQ8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9J2JsYWNrJyB4PXttYXJnaW4ubGVmdCArIDMyMH0geT17c3ZnSGVpZ2h0ICsgMjV9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17Z2V0Q29sb3IoJ2ludGVycnVwdGlvbicpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiICB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyAzNDB9ID5JbnRlcnJ1cHRpb248L3RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFN0YWNrZWQgQmFycyAqL31cclxuICAgICAgICAgICAgICAgIHtwYXRoc31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTGluZSBBYm92ZSBTdGFja2VkIEJhcnMgXHJcbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSdub25lJyBzdHJva2VMaW5lam9pbj0ncm91bmQnIHN0cm9rZVdpZHRoPSczJyBzdHJva2U9J2RhcmtibHVlJyBkPXt0b3RhbFBhdGh9IC8+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudENvdW50c0J5TW9udGg7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEhvbWUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRDb3VudHNCeU1vbnRoIGZyb20gJy4uL0hvbWUvRXZlbnRDb3VudHNCeU1vbnRoJztcclxuaW1wb3J0IEV2ZW50Q291bnRUYWJsZSBmcm9tICcuLi9Ib21lL0V2ZW50Q291bnRUYWJsZSc7XHJcbmltcG9ydCBNYWdEdXJDaGFydCBmcm9tICcuLi9Ib21lL01hZ0R1ckNoYXJ0JztcclxuaW1wb3J0IHsgUFFEaWdlc3QgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IFttYWlsVG8sIHNldE1haWxUb10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtudW1iZXJNZXRlcnMsIHNldE51bWJlck1ldGVyc10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2V2ZW50Q291bnQsIHNldEV2ZW50Q291bnRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBHZXRNYWlsdG8oKTtcclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogUFFEaWdlc3QuU2V0dGluZykgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWlsVG8oYG1haWx0bzoke2RhdGEuVmFsdWV9YCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0TWV0ZXJDb3VudCgpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE51bWJlck1ldGVycyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTMgPSBHZXRFdmVudENvdW50KCk7XHJcbiAgICAgICAgaGFuZGxlMy5kb25lKChkYXRhOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgc2V0RXZlbnRDb3VudChkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUzLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMy5hYm9ydCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWFpbHRvKCk6IEpRdWVyeS5qcVhIUjxQUURpZ2VzdC5TZXR0aW5nPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1NldHRpbmcvRW1haWwuTWFpbHRvYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNZXRlckNvdW50KCk6IEpRdWVyeS5qcVhIUjxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9NZXRlci9Db3VudGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RXZlbnRDb3VudCgpOiBKUXVlcnkuanFYSFI8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnQvQ291bnRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7aGVpZ2h0OiBcIjEwMCVcIiwgbWFyZ2luOiAnNXB4IDVweCA1cHggNXB4ICd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDJweCAwcHggMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSwgeyB1c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykgLyAyIC0gNTIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TbyBmYXIgdGhpcyBtb250aCB0aGVyZSBoYXZlIGJlZW4ge2V2ZW50Q291bnR9IGV2ZW50cyByZWNvcmRlZCBmcm9tIHlvdXIge251bWJlck1ldGVyc30gcG93ZXIgcXVhbGl0eSBtZXRlcnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj17YCR7aG9tZVBhdGh9RXZlbnRTZWFyY2g/c3RhcnREYXRlPSR7bW9tZW50KCkuc3VidHJhY3QoMzY1LCAnZGF5cycpLmZvcm1hdChcIllZWVktTU0tRERcIil9JmVuZERhdGU9JHttb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfSZyZXR1cm5MaW1pdD0xMDBgfT5MaXN0IG9mIGxhc3QgMTAwIGV2ZW50cyBmcm9tIGFsbCBtZXRlcnMgb3ZlciBsYXN0IDM2NSBkYXlzPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj17YCR7aG9tZVBhdGh9RXZlbnRTZWFyY2g/c3RhcnREYXRlPSR7bW9tZW50KCkuc3VidHJhY3QoMzAsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX0mZW5kRGF0ZT0ke21vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIil9JnJldHVybkxpbWl0PTEwMDBgfT5MaXN0IG9mIGFsbCBtZXRlciBhY3Rpdml0eSBvdmVyIGxhc3QgMzAgZGF5czwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFueSBxdWVzdGlvbnM/IFBsZWFzZSBjb250YWN0OiA8YSBocmVmPXttYWlsVG99PlRoZSBQUSBUZWFtPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWFnbml0dWRlIER1cmF0aW9uIC0gTGFzdCAzMCBEYXlzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFnRHVyQ2hhcnQgV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAwcHggMHB4IDNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpc3RvcmljYWwgRXZlbnQgQ291bnRzIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENvdW50c0J5TW9udGggV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDUzfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWV0ZXIgQWN0aXZpdHkgLSBMYXN0IDMwIERheXNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXhIZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwLCBvdmVyZmxvd1k6ICdoaWRkZW4nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudENvdW50VGFibGUgV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIwfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpIC8gMiAtIDcwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTWFnRHVyQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzIzLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxvZywgc2NhbGVMaW5lYXIsIG1heCwgbGluZSwgZXZlbnQsIHpvb21UcmFuc2Zvcm0sIHpvb20sIHNlbGVjdH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsIFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQZXJVbml0TWFnbml0dWRlOiBudW1iZXIsIFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICAgIElEOm51bWJlcixcclxuICAgIFBlclVuaXRNYWduaXR1ZGU6IG51bWJlcixcclxuICAgIER1cmF0aW9uU2Vjb25kczogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBNYWdEdXJDdXJ2ZSB7XHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFBhdGg6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBNYWdEdXJDaGFydCA9IChwcm9wczogeyBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNjAsIGxlZnQ6IDQwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICBjb25zdCBbZG9tYWlucywgc2V0RG9tYWluc10gPSBSZWFjdC51c2VTdGF0ZTx7IFg6IHsgTG93ZXI6IG51bWJlciwgVXBwZXI6IG51bWJlciB9LCBZOiB7IExvd2VyOiBudW1iZXIsIFVwcGVyOiBudW1iZXIgfSB9Pih7IFg6IHsgTG93ZXI6IDAuMDAwMDEsIFVwcGVyOiAxMDAwMDAwIH0sIFk6IHsgTG93ZXI6IDAsIFVwcGVyOiAyLjUgfSB9KTtcclxuICAgIGNvbnN0IFt4QXhpc1RpY2tzLCBzZXRYQXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW3lBeGlzVGlja3MsIHNldFlBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbbWFnRHVyQ3VydmVEYXRhLCBzZXRNYWdEdXJDdXJ2ZURhdGFdID0gUmVhY3QudXNlU3RhdGU8aURhdGFbXT4oW10pO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlcywgc2V0TWFnRHVyQ3VydmVzXSA9IFJlYWN0LnVzZVN0YXRlPE1hZ0R1ckN1cnZlW10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJEYXRhLCBzZXRNYWdEdXJEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJDaXJjbGVzLCBzZXRNYWdEdXJDaXJjbGVzXSA9IFJlYWN0LnVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldE1hZ0R1ckN1cnZlcygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogaURhdGFbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIEJ1aWxkTWFnRHVyQ3VydmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0TWFnRHVyUG9pbnRzKCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBQb2ludFtdKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1hZ0R1ckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIEJ1aWxkTWFkRHVyQ2lyY2xlcyhkYXRhKTtcclxuXHJcbiAgICAgICAgfSk7IFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUyLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMi5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEJ1aWxkWUF4aXMoKTtcclxuICAgICAgICBCdWlsZFhBeGlzKCk7XHJcbiAgICAgICAgQnVpbGRNYWREdXJDaXJjbGVzKG1hZ0R1ckRhdGEpO1xyXG4gICAgICAgIEJ1aWxkTWFnRHVyQ3VydmUobWFnRHVyQ3VydmVEYXRhKTtcclxuICAgIH0sIFtkb21haW5zXSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWdEdXJDdXJ2ZXMoKTogSlF1ZXJ5LmpxWEhSPGlEYXRhW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWFnRHVyQ3VydmVzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWdEdXJQb2ludHMoKTogSlF1ZXJ5LmpxWEhSPFBvaW50W10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvTWFnRHVyUG9pbnRzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB4QXhpc1RleHQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMC4wMDAwMDAxKSByZXR1cm4gKHZhbHVlICogMTAwMDAwMDAwMCkudG9GaXhlZCgwKSArICduJztcclxuICAgICAgICBpZiAodmFsdWUgPCAwLjAwMSkgcmV0dXJuICh2YWx1ZSAqIDEwMDAwMDApLnRvRml4ZWQoMCkgKyAnwrUnO1xyXG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDAgJiYgdmFsdWUgPCAxMDAwMDAwKSByZXR1cm4gKHZhbHVlIC8gMTAwMCkudG9GaXhlZCgwKSArICdrJztcclxuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMDApIHJldHVybiAodmFsdWUgLyAxMDAwMDAwKS50b0ZpeGVkKDApICsgJ00nO1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHJldHVybiB2YWx1ZS50b1ByZWNpc2lvbigxKS50b1N0cmluZygpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZFhBeGlzKCkge1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSBwYXJzZUZsb2F0KE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKGRvbWFpbnMuWC5Mb3dlcikgLyBNYXRoLmxvZygxMCkpKS50b1ByZWNpc2lvbigxKSk7XHJcbiAgICAgICAgbGV0IHRpY2tzID0gW11cclxuICAgICAgICBsZXQgbG9nRG9tYWluID0geC5kb21haW4oKS5tYXAobCA9PiBNYXRoLmxvZyhsKSAvIE1hdGgubG9nKDEwKSk7XHJcbiAgICAgICAgbGV0IGxkRGlmZiA9IGxvZ0RvbWFpblsxXSAtIGxvZ0RvbWFpblswXTtcclxuICAgICAgICBmb3IgKDsgaSA8PSBkb21haW5zLlguVXBwZXI7IGkgPSBpICogMTApIHtcclxuICAgICAgICAgICAgdGlja3MucHVzaChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aX0gY2xhc3NOYW1lPVwidGlja1wiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3goaSl9LCR7c3ZnSGVpZ2h0fSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNIDAsNiBWIC0ke3N2Z0hlaWdodCAtIG1hcmdpbi50b3B9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgeT1cIjIwXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57eEF4aXNUZXh0KGkpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICB7KGxkRGlmZiA8IDUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKS5tYXAobnVtID0+IDxwYXRoIGtleT17bnVtfSBkPXtgTSAkey8qTWF0aC5sb2cobnVtICogaSkgLyBNYXRoLmxvZygxMCkgLSBNYXRoLmxvZyhpKSAvIE1hdGgubG9nKDEwKSoveChudW0qaSkgLSB4KGkpfSw2IFYgLSR7c3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcH1gfSBzdHJva2VXaWR0aD17MC4yNX0vPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFhBeGlzVGlja3ModGlja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkWUF4aXMoKSB7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbZG9tYWlucy5ZLkxvd2VyLCBkb21haW5zLlkuVXBwZXJdKTtcclxuICAgICAgICBsZXQgc3RlcCA9ICh5LmRvbWFpbigpWzFdIC0geS5kb21haW4oKVswXSA8PSAxLjU/IDAuMSA6IDAuNSk7XHJcbiAgICAgICAgbGV0IHl0aWNrcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBNYXRoLmZsb29yKGRvbWFpbnMuWS5Mb3dlcik7IGkgPD0gZG9tYWlucy5ZLlVwcGVyOyBpID0gc3RlcCArIGkpIHtcclxuICAgICAgICAgICAgeXRpY2tzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9IGNsYXNzTmFtZT1cInRpY2tcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHt5KGkpfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeS5kb21haW4oKVswXSB8fCBpID4geS5kb21haW4oKVsxXSA/IDAgOiAxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSdibGFjaycgZD17YE0gLTYsMCBIICR7c3ZnV2lkdGh9YH0gc3Ryb2tlV2lkdGg9ezAuMjV9PjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgeD1cIi0xNVwiIGR5PVwiMC4zMmVtXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57aS50b0ZpeGVkKDEpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz4pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0WUF4aXNUaWNrcyh5dGlja3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJ1aWxkTWFnRHVyQ3VydmUoZGF0YTogaURhdGFbXSkge1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPGlEYXRhPigpLngoZCA9PiB4KGQuRHVyYXRpb25TZWNvbmRzKSkueShkID0+IHkoZC5QZXJVbml0TWFnbml0dWRlKSk7XHJcbiAgICAgICAgbGV0IG1kY3MgPSBfLmdyb3VwQnkoZGF0YSwgKGQpID0+IGQuSUQpO1xyXG4gICAgICAgIGxldCBtZGNzcyA9IE9iamVjdC5rZXlzKG1kY3MpLm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IE5hbWU6IG1kY3Nba2V5XVswXS5OYW1lLCBWaXNpYmxlOiBtZGNzW2tleV1bMF0uVmlzaWJsZSwgQ29sb3I6IG1kY3Nba2V5XVswXS5Db2xvciwgUGF0aDogbGluZWZ1bmMobWRjc1trZXldKSB9IH0pO1xyXG4gICAgICAgIHNldE1hZ0R1ckN1cnZlcyhtZGNzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRNYWREdXJDaXJjbGVzKGRhdGE6IFBvaW50W10pIHtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFtkb21haW5zLlkuTG93ZXIsIGRvbWFpbnMuWS5VcHBlcl0pO1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMb2coKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihbZG9tYWlucy5YLkxvd2VyLCBkb21haW5zLlguVXBwZXJdKTtcclxuICAgICAgICBsZXQgY2lyY2xlcyA9IGRhdGEuZmlsdGVyKHBvaW50ID0+IHBvaW50LlBlclVuaXRNYWduaXR1ZGUgPj0gZG9tYWlucy5ZLkxvd2VyICYmIHBvaW50LlBlclVuaXRNYWduaXR1ZGUgPD0gZG9tYWlucy5ZLlVwcGVyICYmIHBvaW50LkR1cmF0aW9uU2Vjb25kcyA+PSBkb21haW5zLlguTG93ZXIgJiYgcG9pbnQuRHVyYXRpb25TZWNvbmRzIDw9IGRvbWFpbnMuWC5VcHBlcikubWFwKChwb2ludCwgaW5kZXgpID0+IDxjaXJjbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZG90XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gcj17M30gY3g9e3gocG9pbnQuRHVyYXRpb25TZWNvbmRzKX0gY3k9e3kocG9pbnQuUGVyVW5pdE1hZ25pdHVkZSl9IGZpbGw9J2JsdWUnIG9uQ2xpY2s9eyhldnQpID0+IGhhbmRsZUNsaWNrKHBvaW50KSB9IC8+KTtcclxuICAgICAgICBzZXRNYWdEdXJDaXJjbGVzKGNpcmNsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHBvaW50OiBQb2ludCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKGhvbWVQYXRoICsgJ1dhdmVmb3JtVmlld2VyP0V2ZW50SUQ9JyArIHBvaW50LklEKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVab29tKGV2dCkge1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG5cclxuICAgICAgICAvLyB1c2UgZXZlbnQubmF0aXZlRXZlbnQub2Zmc2V0WCBhbmQgWVxyXG4gICAgICAgIGxldCB6b29tTG9jYXRpb25ZID0gZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFk7XHJcbiAgICAgICAgbGV0IHpvb21Mb2NhdGlvblggPSBldnQubmF0aXZlRXZlbnQub2Zmc2V0WDtcclxuXHJcbiAgICAgICAgLy8gZXZlbnQuZGVsdGFZIHBvc2l0aXZlIGlzIHdoZWVsIGRvd24gb3Igb3V0IGFuZCBuZWdhdGl2ZSBpcyB3aGVlbCB1cCBvciBpblxyXG4gICAgICAgIGlmIChldnQuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWExlbmd0aCA9ICh4LnJhbmdlKClbMV0gLSB4LnJhbmdlKClbMF0pICogMC43NTtcclxuICAgICAgICAgICAgbGV0IGRvbWFpbllMZW5ndGggPSAoeS5yYW5nZSgpWzFdIC0geS5yYW5nZSgpWzBdKSAqIDAuNzU7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hhbmRsZVpvb20nLCB7IFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sIFk6IHsgTG93ZXI6IHpvb21Mb2NhdGlvblkgLSBkb21haW5ZTGVuZ3RoIC8gMiwgVXBwZXI6IHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMiB9IH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0RG9tYWlucyh7XHJcbiAgICAgICAgICAgICAgICBYOiB7IExvd2VyOiB4LmludmVydCh6b29tTG9jYXRpb25YIC0gZG9tYWluWExlbmd0aCAvIDIpLCBVcHBlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCArIGRvbWFpblhMZW5ndGggLyAyKSB9LFxyXG4gICAgICAgICAgICAgICAgWTogeyBMb3dlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyKSwgVXBwZXI6IHkuaW52ZXJ0KHpvb21Mb2NhdGlvblkgKyBkb21haW5ZTGVuZ3RoIC8gMikgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkb21haW5YTGVuZ3RoID0gKHgucmFuZ2UoKVsxXSAtIHgucmFuZ2UoKVswXSkgKiAxLjI1O1xyXG4gICAgICAgICAgICBsZXQgZG9tYWluWUxlbmd0aCA9ICh5LnJhbmdlKClbMV0gLSB5LnJhbmdlKClbMF0pICogMS4yNTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGFuZGxlWm9vbScsIHsgWDogeyBMb3dlcjogeC5pbnZlcnQoem9vbUxvY2F0aW9uWCAtIGRvbWFpblhMZW5ndGggLyAyKSwgVXBwZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggKyBkb21haW5YTGVuZ3RoIC8gMikgfSwgWTogeyBMb3dlcjogem9vbUxvY2F0aW9uWSAtIGRvbWFpbllMZW5ndGggLyAyLCBVcHBlcjogem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyIH0gfSk7XHJcblxyXG4gICAgICAgICAgICBzZXREb21haW5zKHtcclxuICAgICAgICAgICAgICAgIFg6IHsgTG93ZXI6IHguaW52ZXJ0KHpvb21Mb2NhdGlvblggLSBkb21haW5YTGVuZ3RoIC8gMiksIFVwcGVyOiB4LmludmVydCh6b29tTG9jYXRpb25YICsgZG9tYWluWExlbmd0aCAvIDIpIH0sXHJcbiAgICAgICAgICAgICAgICBZOiB7IExvd2VyOiB5LmludmVydCh6b29tTG9jYXRpb25ZIC0gZG9tYWluWUxlbmd0aCAvIDIpLCBVcHBlcjogeS5pbnZlcnQoem9vbUxvY2F0aW9uWSArIGRvbWFpbllMZW5ndGggLyAyKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEcmFnKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFggPCBtYXJnaW4ubGVmdCB8fCBldnQubmF0aXZlRXZlbnQub2Zmc2V0WCA+IHN2Z1dpZHRoICsgbWFyZ2luLmxlZnQpIHJldHVybjtcclxuICAgICAgICBpZiAoZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFkgPCBtYXJnaW4udG9wIHx8IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZID4gc3ZnSGVpZ2h0ICsgbWFyZ2luLnRvcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBldnQucGVyc2lzdCgpO1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW2RvbWFpbnMuWS5Mb3dlciwgZG9tYWlucy5ZLlVwcGVyXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtkb21haW5zLlguTG93ZXIsIGRvbWFpbnMuWC5VcHBlcl0pO1xyXG5cclxuICAgICAgICAkKCcjbWFnRHVyQ2hhcnQnKS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0RG9tYWlucyh7XHJcbiAgICAgICAgICAgICAgICBYOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG93ZXI6IHguaW52ZXJ0KHgoZG9tYWlucy5YLkxvd2VyKSArIGV2dC5jbGllbnRYIC0gZS5jbGllbnRYKSxcclxuICAgICAgICAgICAgICAgICAgICBVcHBlcjogeC5pbnZlcnQoeChkb21haW5zLlguVXBwZXIpICsgZXZ0LmNsaWVudFggLSBlLmNsaWVudFgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWToge1xyXG4gICAgICAgICAgICAgICAgICAgIExvd2VyOiB5LmludmVydCh5KGRvbWFpbnMuWS5Mb3dlcikgKyBldnQuY2xpZW50WSAtIGUuY2xpZW50WSksXHJcbiAgICAgICAgICAgICAgICAgICAgVXBwZXI6IHkuaW52ZXJ0KHkoZG9tYWlucy5ZLlVwcGVyKSArIGV2dC5jbGllbnRZIC0gZS5jbGllbnRZKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wRHJhZyhldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjbWFnRHVyQ2hhcnQnKS5vZmYoJ21vdXNlbW92ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Wm9vbShldnQpIHtcclxuICAgICAgICBzZXREb21haW5zKHsgWDogeyBMb3dlcjogMC4wMDAwMSwgVXBwZXI6IDEwMDAwMDAgfSwgWTogeyBMb3dlcjogMCwgVXBwZXI6IDIuNSB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVSZXNldCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb21haW5zLlguTG93ZXIgPT0gMC4wMDAwMSAmJiBkb21haW5zLlguVXBwZXIgPT0gMTAwMDAwMCAmJiBkb21haW5zLlkuTG93ZXIgPT0gMCAmJiBkb21haW5zLlkuVXBwZXIgPT0gMi41XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAxMCwgbGVmdDogc3ZnV2lkdGggfX0gb25DbGljaz17cmVzZXRab29tfSBoaWRkZW49e2hpZGVSZXNldCgpfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3ZnIGlkPVwibWFnRHVyQ2hhcnRcIiB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBzdHlsZT17eyBmaWxsOiAnbm9uZScsIHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcyd9fSBvbldoZWVsPXtoYW5kbGVab29tfSBvbk1vdXNlRG93bj17aGFuZGxlRHJhZ30gb25Nb3VzZVVwPXtzdG9wRHJhZ30+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIERyYXcgY2hhcnQgZGF0YSBmaXJzdCAqL31cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYWdEdXJDdXJ2ZXMubWFwKChtZGMsIGluZGV4KSA9PiAobWRjLlZpc2libGUgPyA8cGF0aCBrZXk9e2luZGV4fSBkPXttZGMuUGF0aH0gc3Ryb2tlPXttZGMuQ29sb3J9IC8+IDogbnVsbCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHttYWdEdXJDaXJjbGVzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBEcmF3IHdoaXRlIHJlY3RhbmdsZXMgYXJvdW5kIHRoZSBib3JkZXIgc28gZGF0YSB3b24ndCBzaG93IG91dHNpZGUgY2hhcnQgKi99XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXswfSB3aWR0aD17cHJvcHMuV2lkdGh9IGhlaWdodD17bWFyZ2luLnRvcH0gZmlsbD0nd2hpdGUnIHN0cm9rZT0nd2hpdGUnIC8+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCB4PXswfSB5PXtwcm9wcy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tIC0gbWFyZ2luLnRvcH0gd2lkdGg9e3Byb3BzLldpZHRofSBoZWlnaHQ9e21hcmdpbi5ib3R0b20gKyBtYXJnaW4udG9wfSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHg9ezB9IHk9ezB9IHdpZHRoPXttYXJnaW4ubGVmdH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IGZpbGw9J3doaXRlJyBzdHJva2U9J3doaXRlJyAvPlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgeD17cHJvcHMuV2lkdGggLSBtYXJnaW4ucmlnaHR9IHk9ezB9IHdpZHRoPXttYXJnaW4ucmlnaHR9IGhlaWdodD17cHJvcHMuSGVpZ2h0fSBmaWxsPSd3aGl0ZScgc3Ryb2tlPSd3aGl0ZScgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgTGVnZW5kICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWFnRHVyQ3VydmVzLm1hcCgobWRjLCBpbmRleCkgPT4gPHJlY3Qgc3Ryb2tlPSdibGFjaycgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG9wYWNpdHk6IChtZGMuVmlzaWJsZSA/IDEgOiAwLjI1KSB9fSBrZXk9e2luZGV4fSB4PXttYXJnaW4ubGVmdCArIDEwICsgMjAgKiBpbmRleH0geT17c3ZnSGVpZ2h0ICsgNDB9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17bWRjLkNvbG9yfSBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWRjLlZpc2libGUgPSAhbWRjLlZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGUgPSBfLmNsb25lRGVlcChtYWdEdXJDdXJ2ZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVzKHVwZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+PHRpdGxlPnttZGMuTmFtZX08L3RpdGxlPjwvcmVjdD4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyB0aWNrcyovfVxyXG4gICAgICAgICAgICAgICAge3hBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgeD17c3ZnV2lkdGgvMn0geT17c3ZnSGVpZ2h0ICsgbWFyZ2luLnRvcCArIDIwfT5EdXJhdGlvbiAocyk8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICB7LyogWUF4aXMgdGlja3MgYW5kIExhYmVscyovfVxyXG4gICAgICAgICAgICAgICAge3lBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAwLDApYH0geT17bWFyZ2luLmxlZnQgLSAyNX0geD17LXN2Z0hlaWdodC8yIC0gbWFyZ2luLmJvdHRvbX0+UGVyIFVuaXQgVm9sdGFnZTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIHsvKiBDaGFydCBib3JkZXJzICovfVxyXG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSdibGFjaycgZD17YE0gJHttYXJnaW4ubGVmdH0gJHttYXJnaW4udG9wfSBIICR7c3ZnV2lkdGggKyBtYXJnaW4ubGVmdH0gViAke3N2Z0hlaWdodH0gSCAke21hcmdpbi5sZWZ0fSBWICR7bWFyZ2luLnRvcH1gfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdEdXJDaGFydDsiXSwic291cmNlUm9vdCI6IiJ9