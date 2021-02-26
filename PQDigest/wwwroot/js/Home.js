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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), magDurData = _b[0], setMagDurData = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('ITIC'), 2), curve = _c[0], setCurve = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        Promise.all([GetMagDurCurves(), GetMagDurPoints()]).then(function (data) {
            setMagDurCurveData(data[0]);
            setMagDurData(data[1]);
            Initialize(data[0], data[1]);
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        Initialize(magDurCurveData, magDurData);
    }, [curve]);
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
    function GetMagDurPoints() {
        return new Promise(function (res, rej) { return $.ajax({
            type: "GET",
            url: homePath + "api/MagDurPoints",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        }).done(function (d) { return res(d); }); });
    }
    function resetZoom(evt) {
        Initialize(magDurCurveData, magDurData);
    }
    function Initialize(curves, points) {
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
            .data([points])
            .enter()
            .append('g').attr('class', 'points')
            .selectAll('circle')
            .data(function (d) { return d; })
            .enter()
            .append('circle')
            .attr('r', 5)
            .style('cursor', 'pointer')
            .attr('fill', 'blue')
            .attr('cx', function (d) { return x(d.DurationSeconds); })
            .attr('cy', function (d) { return y(d.PerUnitMagnitude); })
            .on('click', function (d) { return window.open(homePath + 'WaveformViewer?EventID=' + d.ID); });
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
            circles.attr('cx', function (d) { return updatedX(d.DurationSeconds); }).attr('cy', function (d) { return updatedY(d.PerUnitMagnitude); });
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { position: 'absolute', top: 10, left: svgWidth }, onClick: resetZoom }, "Reset")));
};
/* harmony default export */ __webpack_exports__["default"] = (MagDurChart);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdHN4L0hvbWUvRXZlbnRDb3VudFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvSG9tZS9FdmVudENvdW50c0J5TW9udGgudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL0hvbWUudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL01hZ0R1ckNoYXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLFFBQVEsbUJBQU8sQ0FBQyxnREFBUTtBQUN4QixrQ0FBa0Msc0NBQXNDLFNBQVMsbUNBQW1DLGlFQUFpRSxHQUFHO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNEdBQTRHO0FBQzFKLDBDQUEwQywrQkFBK0I7QUFDekUsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFrRCwwQkFBMEIscURBQXFELEtBQUssRUFBRSxFQUFFO0FBQ3pMO0FBQ0Esd0ZBQXdGLG1DQUFtQztBQUMzSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsOEdBQThHLHVEQUF1RCxHQUFHO0FBQzNOLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQ0FBc0M7QUFDckYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsOEJBQThCO0FBQzlCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFO0FBQ29CO0FBQ3ZCO0FBY3ZCLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBdUM7SUFDdEQsZ0JBQWtCLDRDQUFLLENBQUMsUUFBUSxDQUFlLEVBQUUsQ0FBQyxNQUFqRCxJQUFJLFVBQUUsT0FBTyxRQUFvQyxDQUFDO0lBQ25ELGdCQUE0Qiw0Q0FBSyxDQUFDLFFBQVEsQ0FBYyxNQUFNLENBQUMsTUFBOUQsU0FBUyxVQUFFLFlBQVksUUFBdUMsQ0FBQztJQUNoRSxnQkFBNEIsNENBQUssQ0FBQyxRQUFRLENBQVUsSUFBSSxDQUFDLE1BQXhELFNBQVMsVUFBRSxZQUFZLFFBQWlDLENBQUM7SUFFaEUsNENBQUssQ0FBQyxTQUFTLENBQUM7UUFDWixPQUFPLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMsT0FBTztRQUNaLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUssUUFBUSx5QkFBc0I7WUFDdEMsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQWtCLElBQUssY0FBTyxDQUFDLElBQUksQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBRy9DLE9BQU87WUFDSCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUztnQkFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFHRCxPQUFPLDJEQUFDLGdFQUFLLElBQ1QsSUFBSSxFQUFFO1lBQ0YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM1RixFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzNGLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkYsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzRixFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hHLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0YsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzRixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtTQUV2RyxFQUNELFVBQVUsRUFBQyxtQkFBbUIsRUFDOUIsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsU0FBUyxFQUNwQixTQUFTLEVBQUUsU0FBUyxFQUNwQixNQUFNLEVBQUUsVUFBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFDcEIsSUFBSSxPQUFPLEdBQUcsNkNBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQixZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QjtpQkFDSTtnQkFDRCxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksT0FBTyxHQUFHLDZDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxFQUNELE9BQU8sRUFBRSxVQUFDLElBQUksSUFBTyxNQUFNLENBQUMsSUFBSSxDQUFJLFFBQVEsOEJBQXlCLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBWSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGdDQUEyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUcsQ0FBQyxHQUFDLEVBQzNOLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUN0RyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDbEcsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsVUFBQyxJQUFJLElBQUssWUFBSyxFQUFMLENBQUssR0FDM0IsQ0FDTDtBQUVELENBQUM7QUFFYyw4RUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDeEcvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLGlDQUFpQztBQUNqQyxFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RTtBQUNvRDtBQVc5RSxJQUFNLGtCQUFrQixHQUFHLFVBQUMsS0FBd0M7SUFDaEUsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDMUQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFFcEQsZ0JBQTRCLDRDQUFLLENBQUMsUUFBUSxDQUFTLEVBQUUsQ0FBQyxNQUFyRCxTQUFTLFVBQUUsWUFBWSxRQUE4QixDQUFDO0lBQ3ZELGdCQUFvQiw0Q0FBSyxDQUFDLFFBQVEsQ0FBcUIsRUFBRSxDQUFDLE1BQXpELEtBQUssVUFBRSxRQUFRLFFBQTBDLENBQUM7SUFDM0QsZ0JBQXNCLDRDQUFLLENBQUMsUUFBUSxDQUFVLEtBQUssQ0FBQyxNQUFuRCxNQUFNLFVBQUUsU0FBUyxRQUFrQyxDQUFDO0lBQ3JELGdCQUE0Qiw0Q0FBSyxDQUFDLFFBQVEsQ0FBcUIsRUFBRSxDQUFDLE1BQWpFLFNBQVMsVUFBRSxZQUFZLFFBQTBDLENBQUM7SUFDbkUsZ0JBQTRCLDRDQUFLLENBQUMsUUFBUSxDQUFxQixFQUFFLENBQUMsTUFBakUsU0FBUyxVQUFFLFlBQVksUUFBMEMsQ0FBQztJQUNuRSxnQkFBOEIsNENBQUssQ0FBQyxRQUFRLENBQXFCLEVBQUUsQ0FBQyxNQUFuRSxVQUFVLFVBQUUsYUFBYSxRQUEwQyxDQUFDO0lBRTNFLDRDQUFLLENBQUMsU0FBUyxDQUFDO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNiLE9BQU8sT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsU0FBUyxPQUFPO1FBQ1osSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUUsS0FBSztZQUNYLEdBQUcsRUFBSyxRQUFRLDJCQUF3QjtZQUN4QyxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBa0IsSUFBSyxnQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBR3JELE9BQU87WUFDSCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUztnQkFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFrQjtRQUVqQywwQ0FBMEM7UUFDMUMsMEdBQTBHO1FBQzFHLElBQUksQ0FBQyxHQUFHLHNEQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLDhDQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFFLEVBQUU7WUFDckgsTUFBTSxDQUFDLElBQUksQ0FDUCxrRUFBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUUsZUFBYSxNQUFNLENBQUMsSUFBSSxTQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBRztnQkFDbEYscUVBQU0sTUFBTSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsY0FBWSxRQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksR0FBUztnQkFDMUUscUVBQU0sSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsUUFBUSxJQUFFLENBQUMsQ0FBUSxDQUN2RixDQUFDLENBQUM7U0FFYjtRQUNELGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUs7WUFDMUIsT0FBTyxDQUNILGtFQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxnQkFBYSxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLFVBQUksU0FBUyxNQUFHO2dCQUN6SCxxRUFBTSxNQUFNLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxHQUFHLEdBQVEsQ0FDbkMsQ0FDUDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSztZQUMzQixPQUFPLENBQ0gsa0VBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLGdCQUFhLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFJLFNBQVMsTUFBRztnQkFDaEkscUVBQU0sSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEtBQUssSUFBRSxDQUFDLENBQUMsS0FBSyxDQUFRLENBQ3JFLENBQ1A7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQixJQUFJLFFBQVEsR0FBRywrQ0FBSSxFQUFTLENBQUMsQ0FBQyxDQUFDLFdBQUMsSUFBSSxhQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBekYsQ0FBeUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQztRQUNsSixZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLO1lBQzFCLE9BQU8sQ0FDSCxrRUFBRyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7b0JBQ2xELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDM0UsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUN6RSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQU0sUUFBUSw4QkFBeUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUcsQ0FBQztnQkFDaEksQ0FBQztnQkFDRyxxRUFBTSxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNsTSxxRUFBTSxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDak8scUVBQU0sTUFBTSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHO2dCQUN4USxxRUFBTSxNQUFNLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxD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LEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBSTtZQUM3RyxxRUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxVQUFhO1lBQ3hGLHFFQUFNLE1BQU0sRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFJO1lBQy9HLHFFQUFNLElBQUksRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLFlBQWU7WUFDMUYscUVBQU0sTUFBTSxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUk7WUFDcEgscUVBQU0sSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsZ0JBQW1CO1lBQy9GLHFFQUFNLE1BQU0s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LElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxLQUFLLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQUssZUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFoQixDQUFnQixHQUFJO2dCQUNqSSxzRUFBTyxTQUFTLEVBQUMsa0JBQWtCLHFCQUF1QixDQUN4RCxDQUVKO1FBQ04sdUVBQVEsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxZQUFnQixDQUNsRyxDQUNUO0FBQ0wsQ0FBQztBQUVjLDBFQUFXLEVBQUMiLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFRhYmxlLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTgsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDA4LzAyLzIwMTggLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xudmFyIEFuZ2xlSWNvbiA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBtYXJnaW46IDMgfSwgY2xhc3NOYW1lOiAnZmEgZmEtYW5nbGUtJyArIChwcm9wcy5hc2NlbmRpbmcgPyAndXAnIDogJ2Rvd24nKSB9KSk7IH07XG52YXIgVGFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgVGFibGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvd0NvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlUm93cygpO1xuICAgICAgICB2YXIgaGVhZGVyQ29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMudGFibGVDbGFzcyA6ICcnLCBzdHlsZTogdGhpcy5wcm9wcy50YWJsZVN0eWxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgeyBzdHlsZTogdGhpcy5wcm9wcy50aGVhZFN0eWxlIH0sIGhlYWRlckNvbXBvbmVudHMpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGJvZHlTdHlsZSB9LCByb3dDb21wb25lbnRzKSkpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29scy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcbiAgICAgICAgICAgIGlmIChjb2xEYXRhLmhlYWRlclN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGNvbERhdGEuaGVhZGVyU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChzdHlsZS5jdXJzb3IgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGtleTogaW5kZXgsIHN0eWxlOiBzdHlsZSwgb25DbGljazogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVNvcnQoeyBjb2w6IGNvbERhdGEua2V5LCBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9LCBlKTsgfSB9LFxuICAgICAgICAgICAgICAgIGNvbERhdGEubGFiZWwsXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMuc29ydEZpZWxkID09PSBjb2xEYXRhLmtleSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5nbGVJY29uLCB7IGFzY2VuZGluZzogX3RoaXMucHJvcHMuYXNjZW5kaW5nIH0pIDogbnVsbCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBjZWxscyk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuZ2VuZXJhdGVSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjZWxscyA9IF90aGlzLnByb3BzLmNvbHMubWFwKGZ1bmN0aW9uIChjb2xEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzcztcbiAgICAgICAgICAgICAgICBpZiAoY29sRGF0YS5yb3dTdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSB7fTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNzcyA9IF8uY2xvbmUoY29sRGF0YS5yb3dTdHlsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBrZXk6IGluZGV4LnRvU3RyaW5nKCkgKyBpdGVtW2NvbERhdGEua2V5XSArIGNvbERhdGEua2V5LCBzdHlsZTogY3NzLCBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDbGljay5iaW5kKF90aGlzLCB7IGNvbDogY29sRGF0YS5rZXksIHJvdzogaXRlbSwgZGF0YTogaXRlbVtjb2xEYXRhLmtleV0gfSkgfSwgY29sRGF0YS5jb250ZW50ICE9PSB1bmRlZmluZWQgPyBjb2xEYXRhLmNvbnRlbnQoaXRlbSwgY29sRGF0YS5rZXksIGNzcykgOiBpdGVtW2NvbERhdGEua2V5XSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMucm93U3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gXy5jbG9uZShfdGhpcy5wcm9wcy5yb3dTdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChzdHlsZS5jdXJzb3IgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCAmJiBfdGhpcy5wcm9wcy5zZWxlY3RlZChpdGVtKSlcbiAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsgc3R5bGU6IHN0eWxlLCBrZXk6IGluZGV4LnRvU3RyaW5nKCkgfSwgY2VsbHMpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZGF0YSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGRhdGEsIGV2ZW50KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5oYW5kbGVTb3J0ID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Tb3J0KGRhdGEpO1xuICAgIH07XG4gICAgcmV0dXJuIFRhYmxlO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlO1xuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50Q291bnRUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmludGVyZmFjZSBNZXRlciB7XHJcbiAgICBJRDogbnVtYmVyLFxyXG4gICAgTmFtZTogc3RyaW5nLFxyXG4gICAgVG90YWw6IG51bWJlcixcclxuICAgIFNhZzogbnVtYmVyLFxyXG4gICAgU3dlbGw6IG51bWJlcixcclxuICAgIEludGVycnVwdGlvbjogbnVtYmVyLFxyXG4gICAgVHJhbnNpZW50OiBudW1iZXIsXHJcbiAgICBGYXVsdDogbnVtYmVyXHJcblxyXG59XHJcblxyXG5jb25zdCBFdmVudENvdW50VGFibGUgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXJ9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxNZXRlcj4+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBNZXRlcj4oJ05hbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRXZlbnRDb3VudHNUYWJsZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZSgoZGF0YTogQXJyYXk8TWV0ZXI+KSA9PiBzZXREYXRhKGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiA8VGFibGU8TWV0ZXI+XHJcbiAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ01ldGVyJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdUb3RhbCcsIGxhYmVsOiAnVG90YWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgeyBrZXk6ICdTYWcnLCBsYWJlbDogJ1NhZycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ1N3ZWxsJywgbGFiZWw6ICdTd2VsbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ0ludGVycnVwdGlvbicsIGxhYmVsOiAnSW50JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgIHsga2V5OiAnVHJhbnNpZW50JywgbGFiZWw6ICdUcmFucycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ0ZhdWx0JywgbGFiZWw6ICdGYXVsdCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICBdfVxyXG4gICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KGRhdGEsIFtzb3J0RmllbGRdLCBbKCFhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEob3JkZXJlZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkLmNvbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShkYXRhLCBbZC5jb2xdLCBbKGFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnKV0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvcmRlcmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHsgd2luZG93Lm9wZW4oYCR7aG9tZVBhdGh9RXZlbnRTZWFyY2g/c3RhcnREYXRlPSR7bW9tZW50KCkuc3VidHJhY3QoMzAsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX0mZW5kRGF0ZT0ke21vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIil9JnJldHVybkxpbWl0PTEwMCZtZXRlcnM9JHtidG9hKGRhdGEucm93LklELnRvU3RyaW5nKCkpfWApfX1cclxuICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XHJcbiAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHByb3BzLkhlaWdodCAtIDYwLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGZhbHNlfVxyXG4gICAgLz5cclxuO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb3VudFRhYmxlOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudENvdW50c0J5TW9udGgudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZU9yZGluYWwsIHNjYWxlTGluZWFyLCBzZWxlY3QsIGF4aXNCb3R0b20sIG1heCwgbGluZSB9IGZyb20gJ2QzJztcclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIFllYXI6IG51bWJlcixcclxuICAgIE1vbnRoOiBzdHJpbmcsXHJcbiAgICBTYWc6IG51bWJlciwgXHJcbiAgICBTd2VsbDogbnVtYmVyLCBcclxuICAgIFRyYW5zaWVudDogbnVtYmVyLFxyXG4gICAgSW50ZXJydXB0aW9uOiBudW1iZXIsXHJcbiAgICBGYXVsdDogbnVtYmVyLFxyXG4gICAgVG90YWw6IG51bWJlclxyXG59XHJcbmNvbnN0IEV2ZW50Q291bnRzQnlNb250aCA9IChwcm9wczogeyBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNDAsIGxlZnQ6IDMwIH07XHJcbiAgICBsZXQgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xyXG4gICAgbGV0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG5cclxuICAgIGNvbnN0IFt0b3RhbFBhdGgsIHNldFRvdGFsUGF0aF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtwYXRocywgc2V0UGF0aHNdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcbiAgICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2F4aXNQYXRocywgc2V0QXhpc1BhdGhzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW2F4aXNUaWNrcywgc2V0QXhpc1RpY2tzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW3lheGlzVGlja3MsIHNldFlBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL3NldEhpZGRlbih0cnVlKTtcclxuICAgICAgICBzZXRQYXRocyhbXSk7XHJcbiAgICAgICAgcmV0dXJuIEdldERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9FdmVudENvdW50c0J5TW9udGhgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBoYW5kbGUuZG9uZSgoZGF0YTogQXJyYXk8aURhdGE+KSA9PiBEcmF3Q2hhcnQoZGF0YSkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YTogQXJyYXk8aURhdGE+KSB7XHJcblxyXG4gICAgICAgIC8vbGV0IHNlcmllcyA9IGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dO1xyXG4gICAgICAgIC8vbGV0IHggPSBzY2FsZU9yZGluYWwoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihkYXRhLm1hcCh4ID0+IHgubW9udGgpKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFswLCBtYXgoZGF0YS5tYXAoeCA9PiB4LlRvdGFsKSldKTtcclxuXHJcbiAgICAgICAgbGV0IHl0aWNrcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHkuZG9tYWluKClbMV07IGkgPSBpICsgKE1hdGguZmxvb3IoeS5kb21haW4oKVsxXSAvIDEwKSA9PSAwID8gMSA6IE1hdGguZmxvb3IoeS5kb21haW4oKVsxXSAvIDEwKSApKSB7XHJcbiAgICAgICAgICAgIHl0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHt5KGkpfSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9J2JsYWNrJyBkPXtgTSAtNyAwIEggJHtzdmdXaWR0aH1gfSBzdHJva2VXaWR0aD17MC4yNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiAgeD1cIi0xNVwiIGR5PVwiMC4zMmVtXCIgdGV4dEFuY2hvcj0nbWlkZGxlJz57aX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFlBeGlzVGlja3MoeXRpY2tzKTtcclxuXHJcbiAgICAgICAgbGV0IHRpY2tzID0gZGF0YS5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdCArIHN2Z1dpZHRoICogKGluZGV4ICsgMSkgLyAxMn0sJHtzdmdIZWlnaHR9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHN0cm9rZT0nYmxhY2snIHkyPVwiNlwiPjwvbGluZT5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEF4aXNUaWNrcyh0aWNrcyk7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbHMgPSBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChpbmRleCArIDAuMjUpKSAvIDEyKX0sJHtzdmdIZWlnaHR9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiAgeTI9XCI2XCIgZHk9XCIxZW1cIj57eC5Nb250aH08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0QXhpc1BhdGhzKGxhYmVscyk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8aURhdGE+KCkueChkID0+IG1hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZihkLk1vbnRoKSArIDAuNSkpIC8gMTIpKS55KGQgPT4geShkLlRvdGFsKSk7XHJcbiAgICAgICAgc2V0VG90YWxQYXRoKGxpbmVmdW5jKGRhdGEpKTtcclxuXHJcbiAgICAgICAgbGV0IGJveGVzID0gZGF0YS5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gbW9tZW50KHguWWVhci50b1N0cmluZygpICsgXCItXCIgKyB4Lk1vbnRoICsgJy0xJywgJ1lZWVktTU1NLUQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kID0gbW9tZW50KHguWWVhci50b1N0cmluZygpICsgXCItXCIgKyB4Lk1vbnRoICsgJy0xJywgJ1lZWVktTU1NLUQnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbmQuYWRkKDEsICdtb250aCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZC5hZGQoLTEsICdzZWNvbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2hvbWVQYXRofUV2ZW50U2VhcmNoP3N0YXJ0RGF0ZT0ke3N0YXJ0LmZvcm1hdCgnWVlZWS1NTS1ERCcpfSZlbmREYXRlPSR7ZW5kLmZvcm1hdCgnWVlZWS1NTS1ERCcpfWA7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9J2JsYWNrJyB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LlNhZyl9IGZpbGw9e2dldENvbG9yKCdzYWcnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguU3dlbGwpfSBmaWxsPXtnZXRDb2xvcignc3dlbGwnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKSkgLSAoc3ZnSGVpZ2h0IC0geSh4LlRyYW5zaWVudCkpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LlRyYW5zaWVudCl9IGZpbGw9e2dldENvbG9yKCdUcmFuc2llbnQnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5Nb250aCkuaW5kZXhPZih4Lk1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LlNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LlN3ZWxsKSkgLSAoc3ZnSGVpZ2h0IC0geSh4LlRyYW5zaWVudCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5GYXVsdCkpfSB3aWR0aD17MjB9IGhlaWdodD17c3ZnSGVpZ2h0IC0geSh4LkZhdWx0KX0gZmlsbD17Z2V0Q29sb3IoJ0ZhdWx0Jyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2U9J2JsYWNrJyB4PXttYXJnaW4ubGVmdCArIChzdmdXaWR0aCAqICgoZGF0YS5tYXAoZGF0dW0gPT4gZGF0dW0uTW9udGgpLmluZGV4T2YoeC5Nb250aCkgKyAwLjM1KSkgLyAxMil9IHk9e3koeC5TYWcpIC0gKHN2Z0hlaWdodCAtIHkoeC5Td2VsbCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5UcmFuc2llbnQpKSAtIChzdmdIZWlnaHQgLSB5KHguRmF1bHQpKSAtIChzdmdIZWlnaHQgLSB5KHguSW50ZXJydXB0aW9uKSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguSW50ZXJydXB0aW9uKX0gZmlsbD17Z2V0Q29sb3IoJ0ludGVycnVwdGlvbicpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0UGF0aHMoYm94ZXMpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcInNhZ1wiKSByZXR1cm4gJ3B1cnBsZSc7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcInN3ZWxsXCIpIHJldHVybiAnZ3JlZW4nO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJ0cmFuc2llbnRcIikgcmV0dXJuICdvcmFuZ2UnO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJpbnRlcnJ1cHRpb25cIikgcmV0dXJuICdyZWQnO1xyXG4gICAgICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJmYXVsdFwiKSByZXR1cm4gJ2JsdWUnO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuICcjMDAwMDAwJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCwgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBoaWRkZW49e2hpZGRlbn0+XHJcblxyXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9IHN0eWxlPXt7ZmlsbDogJ25vbmUnLHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcyd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgYm9yZGVycyAqL31cclxuICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNICR7bWFyZ2luLmxlZnR9ICR7bWFyZ2luLnRvcH0gSCAke3N2Z1dpZHRoICsgbWFyZ2luLmxlZnR9IFYgJHtzdmdIZWlnaHR9IEggJHttYXJnaW4ubGVmdH0gViAke21hcmdpbi50b3B9YH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBYQXhpcyB0aWNrcyovfVxyXG4gICAgICAgICAgICAgICAgPGcgY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7c3ZnSGVpZ2h0fSlgfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluZSBzdHJva2U9J2JsYWNrJyB5Mj1cIjZcIj48L2xpbmU+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICB7YXhpc1RpY2tzfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBZQXhpcyB0aWNrcyBhbmQgTGFiZWxzKi99XHJcbiAgICAgICAgICAgICAgICB7eWF4aXNUaWNrc31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogWEF4aXMgTGFiZWxzKi99XHJcbiAgICAgICAgICAgICAgICA8Zz57YXhpc1BhdGhzfTwvZz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQ2hhcnQgTGVnZW5kICovfVxyXG4gICAgICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSdibGFjaycgeD17bWFyZ2luLmxlZnQgKyAxMH0geT17c3ZnSGVpZ2h0ICsgMjV9IHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0gZmlsbD17Z2V0Q29sb3IoJ3NhZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiICB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyAzMH0gPlNhZzwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgNzB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCdzd2VsbCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiICB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyA5MH0gPlN3ZWxsPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSdibGFjaycgeD17bWFyZ2luLmxlZnQgKyAxNDB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCd0cmFuc2llbnQnKX0gLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiAgeT17c3ZnSGVpZ2h0ICsgMzh9IHg9e21hcmdpbi5sZWZ0ICsgMTYwfSA+VHJhbnNpZW50PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3Qgc3Ryb2tlPSdibGFjaycgeD17bWFyZ2luLmxlZnQgKyAyNDB9IHk9e3N2Z0hlaWdodCArIDI1fSB3aWR0aD17MTV9IGhlaWdodD17MTV9IGZpbGw9e2dldENvbG9yKCdmYXVsdCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgZmlsbD1cImJsYWNrXCIgZm9udFNpemU9XCJzbWFsbFwiICB5PXtzdmdIZWlnaHQgKyAzOH0geD17bWFyZ2luLmxlZnQgKyAyNjB9ID5GYXVsdDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IHN0cm9rZT0nYmxhY2snIHg9e21hcmdpbi5sZWZ0ICsgMzIwfSB5PXtzdmdIZWlnaHQgKyAyNX0gd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSBmaWxsPXtnZXRDb2xvcignaW50ZXJydXB0aW9uJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgIHk9e3N2Z0hlaWdodCArIDM4fSB4PXttYXJnaW4ubGVmdCArIDM0MH0gPkludGVycnVwdGlvbjwvdGV4dD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3RhY2tlZCBCYXJzICovfVxyXG4gICAgICAgICAgICAgICAge3BhdGhzfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBMaW5lIEFib3ZlIFN0YWNrZWQgQmFycyBcclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlV2lkdGg9JzMnIHN0cm9rZT0nZGFya2JsdWUnIGQ9e3RvdGFsUGF0aH0gLz5cclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q291bnRzQnlNb250aDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgSG9tZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBFdmVudENvdW50c0J5TW9udGggZnJvbSAnLi4vSG9tZS9FdmVudENvdW50c0J5TW9udGgnO1xyXG5pbXBvcnQgRXZlbnRDb3VudFRhYmxlIGZyb20gJy4uL0hvbWUvRXZlbnRDb3VudFRhYmxlJztcclxuaW1wb3J0IE1hZ0R1ckNoYXJ0IGZyb20gJy4uL0hvbWUvTWFnRHVyQ2hhcnQnO1xyXG5pbXBvcnQgeyBQUURpZ2VzdCB9IGZyb20gJy4uL2dsb2JhbCc7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgY29uc3QgW21haWxUbywgc2V0TWFpbFRvXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW251bWJlck1ldGVycywgc2V0TnVtYmVyTWV0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbZXZlbnRDb3VudCwgc2V0RXZlbnRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IEdldE1haWx0bygpO1xyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBQUURpZ2VzdC5TZXR0aW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHNldE1haWxUbyhgbWFpbHRvOiR7ZGF0YS5WYWx1ZX1gKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBHZXRNZXRlckNvdW50KCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgc2V0TnVtYmVyTWV0ZXJzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMyA9IEdldEV2ZW50Q291bnQoKTtcclxuICAgICAgICBoYW5kbGUzLmRvbmUoKGRhdGE6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBzZXRFdmVudENvdW50KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTIuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTMuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUzLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWlsdG8oKTogSlF1ZXJ5LmpxWEhSPFBRRGlnZXN0LlNldHRpbmc+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvU2V0dGluZy9FbWFpbC5NYWlsdG9gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1ldGVyQ291bnQoKTogSlF1ZXJ5LmpxWEhSPG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL01ldGVyL0NvdW50YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRFdmVudENvdW50KCk6IEpRdWVyeS5qcVhIUjxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudC9Db3VudGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3toZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4IDBweCAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lLCB7IHVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAod2luZG93LmlubmVySGVpZ2h0IC0gMTI3KSAvIDIgLSA1MiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvIGZhciB0aGlzIG1vbnRoIHRoZXJlIGhhdmUgYmVlbiB7ZXZlbnRDb3VudH0gZXZlbnRzIHJlY29yZGVkIGZyb20geW91ciB7bnVtYmVyTWV0ZXJzfSBwb3dlciBxdWFsaXR5IG1ldGVycy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48YSBocmVmPXtgJHtob21lUGF0aH1FdmVudFNlYXJjaD9zdGFydERhdGU9JHttb21lbnQoKS5zdWJ0cmFjdCgzNjUsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX0mZW5kRGF0ZT0ke21vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIil9JnJldHVybkxpbWl0PTEwMGB9Pkxpc3Qgb2YgbGFzdCAxMDAgZXZlbnRzIGZyb20gYWxsIG1ldGVycyBvdmVyIGxhc3QgMzY1IGRheXM8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48YSBocmVmPXtgJHtob21lUGF0aH1FdmVudFNlYXJjaD9zdGFydERhdGU9JHttb21lbnQoKS5zdWJ0cmFjdCgzMCwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfSZlbmREYXRlPSR7bW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX0mcmV0dXJuTGltaXQ9MTAwMGB9Pkxpc3Qgb2YgYWxsIG1ldGVyIGFjdGl2aXR5IG92ZXIgbGFzdCAzMCBkYXlzPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QW55IHF1ZXN0aW9ucz8gUGxlYXNlIGNvbnRhY3Q6IDxhIGhyZWY9e21haWxUb30+VGhlIFBRIFRlYW08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBNYWduaXR1ZGUgRHVyYXRpb24gLSBMYXN0IDMwIERheXNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWdEdXJDaGFydCBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyIC0gMjB9IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykgLyAyIC0gNzB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDBweCAwcHggM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWNhbCBFdmVudCBDb3VudHMgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50Q291bnRzQnlNb250aCBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyIC0gMjB9IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykgLyAyIC0gNTN9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXRlciBBY3Rpdml0eSAtIExhc3QgMzAgRGF5c1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAsIG1heEhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykgLyAyIC0gNzAsIG92ZXJmbG93WTogJ2hpZGRlbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50Q291bnRUYWJsZSBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyIC0gMjB9IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykgLyAyIC0gNzB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNYWdEdXJDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmludGVyZmFjZSBpQ3VydmUge1xyXG4gICAgSUQ6IG51bWJlcixcclxuICAgIE5hbWU6IHN0cmluZywgXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFhIaWdoOiBudW1iZXIsXHJcbiAgICBYTG93OiBudW1iZXIsXHJcbiAgICBZTG93OiBudW1iZXIsXHJcbiAgICBZSGlnaDogbnVtYmVyLFxyXG4gICAgUGVyVW5pdE1hZ25pdHVkZTogbnVtYmVyLCBcclxuICAgIER1cmF0aW9uU2Vjb25kczogbnVtYmVyLFxyXG4gICAgTG9hZE9yZGVyOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpUG9pbnQge1xyXG4gICAgSUQ6bnVtYmVyLFxyXG4gICAgUGVyVW5pdE1hZ25pdHVkZTogbnVtYmVyLFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXJcclxufVxyXG5cclxuXHJcbmNvbnN0IE1hZ0R1ckNoYXJ0ID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAyMCwgYm90dG9tOiA2MCwgbGVmdDogNDAgfTtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG4gICAgY29uc3QgY2hhcnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbbWFnRHVyQ3VydmVEYXRhLCBzZXRNYWdEdXJDdXJ2ZURhdGFdID0gUmVhY3QudXNlU3RhdGU8aUN1cnZlW10+KFtdKTtcclxuICAgIGNvbnN0IFttYWdEdXJEYXRhLCBzZXRNYWdEdXJEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPGlQb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbY3VydmUsIHNldEN1cnZlXSA9IFJlYWN0LnVzZVN0YXRlPCdJVElDJyB8ICdTRU1JJyB8ICdJICYgSUknIHwgJ0lJSScgfCAnTkVSQyc+KCdJVElDJyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBQcm9taXNlLmFsbChbR2V0TWFnRHVyQ3VydmVzKCksIEdldE1hZ0R1clBvaW50cygpXSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgc2V0TWFnRHVyQ3VydmVEYXRhKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJEYXRhKGRhdGFbMV0pO1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKGRhdGFbMF0sIGRhdGFbMV0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZShtYWdEdXJDdXJ2ZURhdGEsIG1hZ0R1ckRhdGEpO1xyXG4gICAgfSwgW2N1cnZlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNYWdEdXJDdXJ2ZXMoKTogUHJvbWlzZTxpQ3VydmVbXT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL01hZ0R1ckN1cnZlc2AsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZShkID0+IHJlcyhkKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1hZ0R1clBvaW50cygpOiBQcm9taXNlPGlQb2ludFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKSA9PiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NYWdEdXJQb2ludHNgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoZCA9PiByZXMoZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFpvb20oZXZ0KSB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZShtYWdEdXJDdXJ2ZURhdGEsIG1hZ0R1ckRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoY3VydmVzOiBpQ3VydmVbXSwgcG9pbnRzOiBpUG9pbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgICAgICBsZXQgZGF0YSA9IF8uZ3JvdXBCeShjdXJ2ZXMuZmlsdGVyKGQgPT4gZC5OYW1lLmluY2x1ZGVzKGN1cnZlKSksICdOYW1lJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFhIaWdoID0gWy4uLm5ldyBTZXQoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0/Lm1hcChkID0+IGQuWEhpZ2gpID8/IFsxMDBdKV1bMF07XHJcbiAgICAgICAgY29uc3QgWExvdyA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLlhMb3cpID8/IFswLjAwMDAwMV0pXVswXTtcclxuICAgICAgICBjb25zdCBZSGlnaCA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLllIaWdoKSA/PyBbNV0pXVswXTtcclxuICAgICAgICBjb25zdCBZTG93ID0gWy4uLm5ldyBTZXQoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0/Lm1hcChkID0+IGQuWUxvdykgPz8gWzBdKV1bMF07XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChjaGFydC5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChjaGFydC5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKS5hdHRyKCd3aWR0aCcsIHByb3BzLldpZHRoKS5hdHRyKCdoZWlnaHQnLCBwcm9wcy5IZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgY2xpcCA9IHN2Zy5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcInN2ZzpjbGlwUGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiY2xpcFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnOnJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcClcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG1hcmdpbi5sZWZ0KVxyXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgbWFyZ2luLnRvcCk7XHJcblxyXG4gICAgICAgIGxldCBzY2F0dGVyID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNjbGlwKVwiKVxyXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnY2hhcnRkYXRhJyk7XHJcblxyXG4gICAgICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW1lMb3csIFlIaWdoXSk7XHJcbiAgICAgICAgbGV0IHggPSBkMy5zY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtYTG93LCBYSGlnaF0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy54YXhpc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwieGF4aXNcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChwcm9wcy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tIC0gbWFyZ2luLnRvcCkgKyBcIilcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0geGcuY2FsbChkMy5heGlzQm90dG9tKHgpLnRpY2tTaXplKC0oc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCkpLnRpY2tGb3JtYXQoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmxvZzEwKHZhbHVlIGFzIG51bWJlcikgPT09IE1hdGguZmxvb3IoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBkMy5mb3JtYXQoXCIuMHNcIikodmFsdWUpXHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuICcnO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHhnLmFwcGVuZCgndGV4dCcpLnRleHQoJ0R1cmF0aW9uKHMpJykuYXR0cigneCcsIChzdmdXaWR0aCAtIG1hcmdpbi5yaWdodCkgLyAyICsgbWFyZ2luLmxlZnQpLmF0dHIoJ3knLCBtYXJnaW4uYm90dG9tLzIpLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKS5zdHlsZSgnZm9udC1zaXplJywgJ3NtYWxsJyk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLnlheGlzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHlnID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJ5YXhpc1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LDApYClcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSB5Zy5jYWxsKGQzLmF4aXNMZWZ0KHkpLnRpY2tzKDgpLnRpY2tTaXplKC0oc3ZnV2lkdGgpKSk7XHJcbiAgICAgICAgeWcuYXBwZW5kKCd0ZXh0JykudGV4dCgnUGVyIFVuaXQgVm9sdGFnZScpLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTkwIDAsMCknKS5hdHRyKCd4JywtKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pLzIgKyBtYXJnaW4udG9wKS5hdHRyKCd5JywgLW1hcmdpbi5sZWZ0KjMvNCkuYXR0cignZmlsbCcsICdibGFjaycpLnN0eWxlKCdmb250LXNpemUnLCAnc21hbGwnKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnbGluZScpLnN0eWxlKFwic3Ryb2tlXCIsIFwibGlnaHRncmV5XCIpLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC44KS5zdHlsZShcInNoYXBlLXJlbmRlcmluZ1wiLCBcImNyaXNwRWRnZXNcIikuc3R5bGUoXCJ6LWluZGV4XCIsIFwiMFwiKVxyXG5cclxuICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGQzLmxpbmU8aUN1cnZlPigpLngoeGQgPT4geCh4ZC5EdXJhdGlvblNlY29uZHMpKS55KHlkID0+IHkoeWQuUGVyVW5pdE1hZ25pdHVkZSkpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cubGluZXMnKVxyXG4gICAgICAgICAgICAuZGF0YShbZGF0YV0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGluZXMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgICAgICAgICAgLmRhdGEoZCA9PiBPYmplY3Qua2V5cyhkKSBhcyBzdHJpbmdbXSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdkJywgKGQpID0+IGxpbmVGdW5jKGRhdGFbZF0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHNjYXR0ZXIuc2VsZWN0QWxsKCdnLnBvaW50cycpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwb2ludHNdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncG9pbnRzJylcclxuICAgICAgICAgICAgLnNlbGVjdEFsbCgnY2lyY2xlJylcclxuICAgICAgICAgICAgLmRhdGEoZCA9PiBkKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgICAgICAuYXR0cigncicsIDUpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdibHVlJylcclxuICAgICAgICAgICAgLmF0dHIoJ2N4JywgZCA9PiB4KGQuRHVyYXRpb25TZWNvbmRzKSlcclxuICAgICAgICAgICAgLmF0dHIoJ2N5JywgZCA9PiB5KGQuUGVyVW5pdE1hZ25pdHVkZSkpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBkID0+IHdpbmRvdy5vcGVuKGhvbWVQYXRoICsgJ1dhdmVmb3JtVmlld2VyP0V2ZW50SUQ9JyArIGQuSUQpKTtcclxuXHJcbiAgICAgICAgbGV0IHpvb20gPSBkMy56b29tKCkub24oJ3pvb20nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2Zvcm0gPSBkMy5ldmVudC50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkWCA9IHRyYW5zZm9ybS5yZXNjYWxlWCh4KTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRZID0gdHJhbnNmb3JtLnJlc2NhbGVZKHkpO1xyXG4gICAgICAgICAgICB4QXhpcy5jYWxsKGQzLmF4aXNCb3R0b20odXBkYXRlZFgpLnRpY2tTaXplKC0oc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCkpLnRpY2tGb3JtYXQoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpID09PSBNYXRoLmZsb29yKE1hdGgubG9nMTAodmFsdWUgYXMgbnVtYmVyKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLmZvcm1hdChcIi4wc1wiKSh2YWx1ZSBhcyBudW1iZXIpXHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAnJztcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB5QXhpcy5jYWxsKGQzLmF4aXNMZWZ0KHVwZGF0ZWRZKS50aWNrU2l6ZSgtKHN2Z1dpZHRoKSkpO1xyXG4gICAgICAgICAgICBzdmcuc2VsZWN0QWxsKCdsaW5lJykuc3R5bGUoXCJzdHJva2VcIiwgXCJsaWdodGdyZXlcIikuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjgpLnN0eWxlKFwic2hhcGUtcmVuZGVyaW5nXCIsIFwiY3Jpc3BFZGdlc1wiKS5zdHlsZShcInotaW5kZXhcIiwgXCIwXCIpXHJcblxyXG4gICAgICAgICAgICBjaXJjbGVzLmF0dHIoJ2N4JywgZCA9PiB1cGRhdGVkWChkLkR1cmF0aW9uU2Vjb25kcykpLmF0dHIoJ2N5JywgZCA9PiB1cGRhdGVkWShkLlBlclVuaXRNYWduaXR1ZGUpKTtcclxuICAgICAgICAgICAgY29uc3QgdXBMaW5lRnVuYyA9IGQzLmxpbmU8aUN1cnZlPigpLngoeGQgPT4gdXBkYXRlZFgoeGQuRHVyYXRpb25TZWNvbmRzKSkueSh5ZCA9PiB1cGRhdGVkWSh5ZC5QZXJVbml0TWFnbml0dWRlKSlcclxuICAgICAgICAgICAgbGluZXMuYXR0cignZCcsIGQgPT4gdXBMaW5lRnVuYyhkYXRhW2RdKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3ZnLmNhbGwoem9vbSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZCgndXNlJykuYXR0cigneGxpbms6aHJlZicsICcjY2hhcnRkYXRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17Y2hhcnR9IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCB3aWR0aDogcHJvcHMuV2lkdGggfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtjdXJ2ZX0gY2hlY2tlZD17Y3VydmUgPT09ICdJVElDJ30gb25DaGFuZ2U9eyhldnQpID0+c2V0Q3VydmUoJ0lUSUMnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+SVRJQzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e2N1cnZlfSBjaGVja2VkPXtjdXJ2ZSA9PT0gJ1NFTUknfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q3VydmUoJ1NFTUknKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPlNFTUkgRjQ3PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnSSAmIElJJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdJICYgSUknKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+SUVFRSAxNjY4IFJlY29tbWVuZGVkIFR5cGUgSSAmIElJPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnSUlJJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdJSUknKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+SUVFRSAxNjY4IFJlY29tbWVuZGVkIFR5cGUgSUlJPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnTkVSQyd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDdXJ2ZSgnTkVSQycpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+TkVSQyBQUkMtMDI0LTI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAxMCwgbGVmdDogc3ZnV2lkdGggfX0gb25DbGljaz17cmVzZXRab29tfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdEdXJDaGFydDsiXSwic291cmNlUm9vdCI6IiJ9