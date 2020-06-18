(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

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
    var margin = { top: 20, right: 20, bottom: 20, left: 20 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.left - margin.right;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''), 2), totalPath = _a[0], setTotalPath = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), paths = _b[0], setPaths = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), 2), hidden = _c[0], setHidden = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), axisPaths = _d[0], setAxisPaths = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), axisTicks = _e[0], setAxisTicks = _e[1];
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
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([0, Object(d3__WEBPACK_IMPORTED_MODULE_1__["max"])(data.map(function (x) { return x.total; }))]);
        var ticks = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index, className: "tick", opacity: "1", transform: "translate(" + (margin.left + svgWidth * (index + 1) / 12) + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { y2: "6", stroke: "gray", strokeWidth: 2 })));
        });
        setAxisTicks(ticks);
        var labels = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index, className: "tick", opacity: "1", transform: "translate(" + (margin.left + (svgWidth * ((index + 0.25)) / 12)) + "," + svgHeight + ")" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y2: "6", fill: "gray", dy: "1em" }, x.month)));
        });
        setAxisPaths(labels);
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return margin.left + (svgWidth * ((data.map(function (datum) { return datum.month; }).indexOf(d.month) + 0.5)) / 12); }).y(function (d) { return y(d.total); });
        setTotalPath(linefunc(data));
        var boxes = data.map(function (x, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: index },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.month; }).indexOf(x.month) + 0.35)) / 12), y: y(x.sag), width: 20, height: svgHeight - y(x.sag), fill: getColor('sag') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.month; }).indexOf(x.month) + 0.35)) / 12), y: y(x.sag) - (svgHeight - y(x.swell)), width: 20, height: svgHeight - y(x.swell), fill: getColor('swell') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.month; }).indexOf(x.month) + 0.35)) / 12), y: y(x.sag) - (svgHeight - y(x.swell)) - (svgHeight - y(x.transient)), width: 20, height: svgHeight - y(x.transient), fill: getColor('Transient') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.month; }).indexOf(x.month) + 0.35)) / 12), y: y(x.sag) - (svgHeight - y(x.swell)) - (svgHeight - y(x.transient)) - (svgHeight - y(x.fault)), width: 20, height: svgHeight - y(x.fault), fill: getColor('Fault') }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", { x: margin.left + (svgWidth * ((data.map(function (datum) { return datum.month; }).indexOf(x.month) + 0.35)) / 12), y: y(x.sag) - (svgHeight - y(x.swell)) - (svgHeight - y(x.transient)) - (svgHeight - y(x.fault)) - (svgHeight - y(x.interruption)), width: 20, height: svgHeight - y(x.interruption), fill: getColor('Interruption') })));
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: props.Height, width: props.Width, textAlign: 'center' /*, margin: '0x', padding: '0px'*/ }, hidden: hidden },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: props.Width, height: props.Height },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { y: 15, x: props.Width / 2 - 125, stroke: "gray" }, "Historical Event Counts by Month"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { x1: margin.left, x2: svgWidth + margin.right, y1: svgHeight, y2: svgHeight, stroke: "gray", strokeWidth: 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { x1: margin.left, x2: svgWidth + margin.right, y1: margin.top, y2: margin.top, stroke: "gray", strokeWidth: 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { x1: margin.left, x2: margin.left, y1: margin.top, y2: svgHeight, stroke: "gray", strokeWidth: 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { x1: svgWidth + margin.right, x2: svgWidth + margin.right, y1: margin.top, y2: svgHeight, stroke: "gray", strokeWidth: 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, paths),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { fill: 'none', strokeLinejoin: 'round', strokeWidth: '3', stroke: 'darkblue', d: totalPath })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { className: "tick", opacity: "1", transform: "translate(" + margin.left + "," + svgHeight + ")" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", { y2: "6", stroke: "gray", strokeWidth: 2 })),
                axisTicks),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, axisPaths))));
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "100%" } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" }, "Home page placeholder ... Under developement."),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_EventCountsByMonth__WEBPACK_IMPORTED_MODULE_1__["default"], { Width: window.innerWidth / 2 - 15, Height: (window.innerHeight - 127) / 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_EventCountsByMonth__WEBPACK_IMPORTED_MODULE_1__["default"], { Width: window.innerWidth / 2 - 15, Height: (window.innerHeight - 127) / 2 }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvSG9tZS9FdmVudENvdW50c0J5TW9udGgudHN4Iiwid2VicGFjazovLy8uL3RzeC9Ib21lL0hvbWUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLGlDQUFpQztBQUNqQyxFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RTtBQUNvRDtBQVU5RSxJQUFNLGtCQUFrQixHQUFHLFVBQUMsS0FBd0M7SUFDaEUsSUFBSSxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDMUQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFcEQsNkVBQXNELEVBQXJELGlCQUFTLEVBQUUsb0JBQTBDLENBQUM7SUFDdkQsNkVBQTBELEVBQXpELGFBQUssRUFBRSxnQkFBa0QsQ0FBQztJQUMzRCxnRkFBb0QsRUFBbkQsY0FBTSxFQUFFLGlCQUEyQyxDQUFDO0lBQ3JELDZFQUFr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LENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHO2dCQUNsTixxRUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHO2dCQUN6UCxxRUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDNVEscUVBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQzVULENBQ1A7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdwQixDQUFDO0lBRUQsU0FB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QTtBQUFBLHdHQUF3RztBQUN4RyxtQkFBbUI7QUFDbkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUU5RTtBQUNrQztBQUU1RCxJQUFNLElBQUksR0FBRyxVQUFDLEtBQVM7SUFDbkIsT0FBTyxDQUNILG9FQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQztRQUN4QyxvRUFBSyxTQUFTLEVBQUMsS0FBSyxvREFBb0Q7UUFDeEUsb0VBQUssU0FBUyxFQUFDLEtBQUs7WUFDaEIsMkRBQUMsZ0VBQWtCLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFDLENBQUMsR0FBSTtZQUMvRiwyREFBQyxnRUFBa0IsSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUMsQ0FBQyxHQUFJLENBQzdGLENBQ0osQ0FDVDtBQUNMLENBQUM7QUFFYyxtRUFBSSxFQUFDIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRDb3VudHNCeU1vbnRoLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVPcmRpbmFsLCBzY2FsZUxpbmVhciwgc2VsZWN0LCBheGlzQm90dG9tLCBtYXgsIGxpbmUgfSBmcm9tICdkMyc7XHJcbmludGVyZmFjZSBpRGF0YSB7XHJcbiAgICBtb250aDogc3RyaW5nLFxyXG4gICAgc2FnOiBudW1iZXIsIFxyXG4gICAgc3dlbGw6IG51bWJlciwgXHJcbiAgICB0cmFuc2llbnQ6IG51bWJlcixcclxuICAgIGludGVycnVwdGlvbjogbnVtYmVyLFxyXG4gICAgZmF1bHQ6IG51bWJlcixcclxuICAgIHRvdGFsOiBudW1iZXJcclxufVxyXG5jb25zdCBFdmVudENvdW50c0J5TW9udGggPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDIwLCBsZWZ0OiAyMCB9O1xyXG4gICAgbGV0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGxldCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuXHJcbiAgICBjb25zdCBbdG90YWxQYXRoLCBzZXRUb3RhbFBhdGhdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGF0aHMsIHNldFBhdGhzXSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PEpTWC5FbGVtZW50Pj4oW10pO1xyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtheGlzUGF0aHMsIHNldEF4aXNQYXRoc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuICAgIGNvbnN0IFtheGlzVGlja3MsIHNldEF4aXNUaWNrc10gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxKU1guRWxlbWVudD4+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vc2V0SGlkZGVuKHRydWUpO1xyXG4gICAgICAgIHNldFBhdGhzKFtdKTtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0V2ZW50Q291bnRzQnlNb250aGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZSgoZGF0YTogQXJyYXk8aURhdGE+KSA9PiBEcmF3Q2hhcnQoZGF0YSkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YTogQXJyYXk8aURhdGE+KSB7XHJcblxyXG4gICAgICAgIC8vbGV0IHNlcmllcyA9IGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dO1xyXG4gICAgICAgIC8vbGV0IHggPSBzY2FsZU9yZGluYWwoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggKyBtYXJnaW4ubGVmdF0pLmRvbWFpbihkYXRhLm1hcCh4ID0+IHgubW9udGgpKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKFswLCBtYXgoZGF0YS5tYXAoeCA9PiB4LnRvdGFsKSldKTtcclxuXHJcbiAgICAgICAgbGV0IHRpY2tzID0gZGF0YS5tYXAoKHgsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0aWNrXCIgb3BhY2l0eT1cIjFcIiB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW4ubGVmdCArIHN2Z1dpZHRoICogKGluZGV4ICsgMSkgLyAxMn0sJHtzdmdIZWlnaHR9KWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5lIHkyPVwiNlwiIHN0cm9rZT1cImdyYXlcIiBzdHJva2VXaWR0aD17Mn0+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0QXhpc1RpY2tzKHRpY2tzKTtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVscyA9IGRhdGEubWFwKCh4LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGlja1wiIG9wYWNpdHk9XCIxXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGluZGV4ICsgMC4yNSkpIC8gMTIpfSwke3N2Z0hlaWdodH0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgeTI9XCI2XCIgZmlsbD1cImdyYXlcIiBkeT1cIjFlbVwiPnt4Lm1vbnRofTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRBeGlzUGF0aHMobGFiZWxzKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxpRGF0YT4oKS54KGQgPT4gbWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLm1vbnRoKS5pbmRleE9mKGQubW9udGgpICsgMC41KSkgLyAxMikpLnkoZCA9PiB5KGQudG90YWwpKTtcclxuICAgICAgICBzZXRUb3RhbFBhdGgobGluZWZ1bmMoZGF0YSkpO1xyXG5cclxuICAgICAgICBsZXQgYm94ZXMgPSBkYXRhLm1hcCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxnIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5tb250aCkuaW5kZXhPZih4Lm1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LnNhZyl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguc2FnKX0gZmlsbD17Z2V0Q29sb3IoJ3NhZycpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLm1vbnRoKS5pbmRleE9mKHgubW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguc2FnKSAtIChzdmdIZWlnaHQgLSB5KHguc3dlbGwpKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5zd2VsbCl9IGZpbGw9e2dldENvbG9yKCdzd2VsbCcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLm1vbnRoKS5pbmRleE9mKHgubW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguc2FnKSAtIChzdmdIZWlnaHQgLSB5KHguc3dlbGwpKSAtIChzdmdIZWlnaHQgLSB5KHgudHJhbnNpZW50KSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHgudHJhbnNpZW50KX0gZmlsbD17Z2V0Q29sb3IoJ1RyYW5zaWVudCcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17bWFyZ2luLmxlZnQgKyAoc3ZnV2lkdGggKiAoKGRhdGEubWFwKGRhdHVtID0+IGRhdHVtLm1vbnRoKS5pbmRleE9mKHgubW9udGgpICsgMC4zNSkpIC8gMTIpfSB5PXt5KHguc2FnKSAtIChzdmdIZWlnaHQgLSB5KHguc3dlbGwpKSAtIChzdmdIZWlnaHQgLSB5KHgudHJhbnNpZW50KSkgLSAoc3ZnSGVpZ2h0IC0geSh4LmZhdWx0KSl9IHdpZHRoPXsyMH0gaGVpZ2h0PXtzdmdIZWlnaHQgLSB5KHguZmF1bHQpfSBmaWxsPXtnZXRDb2xvcignRmF1bHQnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9e21hcmdpbi5sZWZ0ICsgKHN2Z1dpZHRoICogKChkYXRhLm1hcChkYXR1bSA9PiBkYXR1bS5tb250aCkuaW5kZXhPZih4Lm1vbnRoKSArIDAuMzUpKSAvIDEyKX0geT17eSh4LnNhZykgLSAoc3ZnSGVpZ2h0IC0geSh4LnN3ZWxsKSkgLSAoc3ZnSGVpZ2h0IC0geSh4LnRyYW5zaWVudCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5mYXVsdCkpIC0gKHN2Z0hlaWdodCAtIHkoeC5pbnRlcnJ1cHRpb24pKX0gd2lkdGg9ezIwfSBoZWlnaHQ9e3N2Z0hlaWdodCAtIHkoeC5pbnRlcnJ1cHRpb24pfSBmaWxsPXtnZXRDb2xvcignSW50ZXJydXB0aW9uJyl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRQYXRocyhib3hlcyk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcih0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwic2FnXCIpIHJldHVybiAncHVycGxlJztcclxuICAgICAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09IFwic3dlbGxcIikgcmV0dXJuICdncmVlbic7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcInRyYW5zaWVudFwiKSByZXR1cm4gJ29yYW5nZSc7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImludGVycnVwdGlvblwiKSByZXR1cm4gJ3JlZCc7XHJcbiAgICAgICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImZhdWx0XCIpIHJldHVybiAnYmx1ZSc7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gJyMwMDAwMDAnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCwgd2lkdGg6IHByb3BzLldpZHRoLCB0ZXh0QWxpZ246ICdjZW50ZXInIC8qLCBtYXJnaW46ICcweCcsIHBhZGRpbmc6ICcwcHgnKi8gfX0gaGlkZGVuPXtoaWRkZW59PlxyXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPXtwcm9wcy5XaWR0aH0gaGVpZ2h0PXtwcm9wcy5IZWlnaHR9PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgeT17MTV9IHg9e3Byb3BzLldpZHRoIC8gMiAtIDEyNX0gc3Ryb2tlPVwiZ3JheVwiPkhpc3RvcmljYWwgRXZlbnQgQ291bnRzIGJ5IE1vbnRoPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9e21hcmdpbi5sZWZ0fSB4Mj17c3ZnV2lkdGggKyBtYXJnaW4ucmlnaHR9IHkxPXtzdmdIZWlnaHR9IHkyPXtzdmdIZWlnaHR9IHN0cm9rZT1cImdyYXlcIiBzdHJva2VXaWR0aD17Mn0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPXttYXJnaW4ubGVmdH0geDI9e3N2Z1dpZHRoICsgbWFyZ2luLnJpZ2h0fSB5MT17bWFyZ2luLnRvcH0geTI9e21hcmdpbi50b3B9IHN0cm9rZT1cImdyYXlcIiBzdHJva2VXaWR0aD17Mn0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5lIHgxPXttYXJnaW4ubGVmdH0geDI9e21hcmdpbi5sZWZ0fSB5MT17bWFyZ2luLnRvcH0geTI9e3N2Z0hlaWdodH0gc3Ryb2tlPVwiZ3JheVwiIHN0cm9rZVdpZHRoPXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmUgeDE9e3N2Z1dpZHRoICsgbWFyZ2luLnJpZ2h0fSB4Mj17c3ZnV2lkdGggKyBtYXJnaW4ucmlnaHR9IHkxPXttYXJnaW4udG9wfSB5Mj17c3ZnSGVpZ2h0fSBzdHJva2U9XCJncmF5XCIgc3Ryb2tlV2lkdGg9ezJ9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhdGhzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlTGluZWpvaW49J3JvdW5kJyBzdHJva2VXaWR0aD0nMycgc3Ryb2tlPSdkYXJrYmx1ZScgZD17dG90YWxQYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG5cclxuICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzTmFtZT1cInRpY2tcIiBvcGFjaXR5PVwiMVwiIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke3N2Z0hlaWdodH0pYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHkyPVwiNlwiIHN0cm9rZT1cImdyYXlcIiBzdHJva2VXaWR0aD17Mn0+PC9saW5lPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICB7YXhpc1RpY2tzfVxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPGc+e2F4aXNQYXRoc308L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb3VudHNCeU1vbnRoOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBIb21lLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50Q291bnRzQnlNb250aCBmcm9tICcuLi9Ib21lL0V2ZW50Q291bnRzQnlNb250aCc7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7aGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPkhvbWUgcGFnZSBwbGFjZWhvbGRlciAuLi4gVW5kZXIgZGV2ZWxvcGVtZW50LjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50Q291bnRzQnlNb250aCBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyIC0gMTV9IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCAtIDEyNykvMn0gLz5cclxuICAgICAgICAgICAgICAgIDxFdmVudENvdW50c0J5TW9udGggV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDE1fSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjcpLzJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=