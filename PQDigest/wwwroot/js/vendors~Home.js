(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~Home"],{

/***/ "../node_modules/@gpa-gemstone/helper-functions/lib/CreateGuid.js":
/*!************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/helper-functions/lib/CreateGuid.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  CreateGuid.ts - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  01/04/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGuid = void 0;
function CreateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.CreateGuid = CreateGuid;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/helper-functions/lib/GetTextWidth.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/helper-functions/lib/GetTextWidth.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  GetTextWidth.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/07/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTextWidth = void 0;
function GetTextWidth(font, fontSize, word) {
    var text = document.createElement("span");
    document.body.appendChild(text);
    text.style.font = font;
    text.style.fontSize = fontSize;
    text.style.height = 'auto';
    text.style.width = 'auto';
    text.style.position = 'absolute';
    text.style.whiteSpace = 'no-wrap';
    text.innerHTML = word;
    var width = Math.ceil(text.clientWidth);
    document.body.removeChild(text);
    return width;
}
exports.GetTextWidth = GetTextWidth;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/helper-functions/lib/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/helper-functions/lib/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTextWidth = exports.CreateGuid = void 0;
var CreateGuid_1 = __webpack_require__(/*! ./CreateGuid */ "../node_modules/@gpa-gemstone/helper-functions/lib/CreateGuid.js");
Object.defineProperty(exports, "CreateGuid", { enumerable: true, get: function () { return CreateGuid_1.CreateGuid; } });
var GetTextWidth_1 = __webpack_require__(/*! ./GetTextWidth */ "../node_modules/@gpa-gemstone/helper-functions/lib/GetTextWidth.js");
Object.defineProperty(exports, "GetTextWidth", { enumerable: true, get: function () { return GetTextWidth_1.GetTextWidth; } });


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Helper.js":
/*!***************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Helper.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  Helper.ts - Gbtc
//
//  Copyend © 2021, Grid Protection Alliance.  All ends Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyend ownership.
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
//  01/12/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScale = void 0;
var d3_1 = __webpack_require__(/*! d3 */ "d3");
function GetScale(type, start, end, domain) {
    if (type === 'Linear')
        return d3_1.scaleLinear().rangeRound([start, end]).domain(domain);
    else if (type === 'Log')
        return d3_1.scaleLog().rangeRound([start, end]).domain(domain);
    else if (type === 'Ordinal')
        return d3_1.scaleOrdinal().domain(domain).range(domain.map(function (tick, i) { return i * (end - start) / domain.length + start + (end - start) / domain.length / 2; }));
    else
        return d3_1.scaleLinear().rangeRound([start, end]).domain(domain);
}
exports.GetScale = GetScale;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Legend.js":
/*!***************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Legend.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// ******************************************************************************************************
//  Legend.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/07/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var LegendSlice_1 = __webpack_require__(/*! ./Store/LegendSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/LegendSlice.js");
var React = __webpack_require__(/*! react */ "react");
var Plot_1 = __webpack_require__(/*! ./Plot */ "../node_modules/@gpa-gemstone/react-graph/lib/Plot.js");
function Legend(props) {
    var _a = React.useContext(Plot_1.PlotContext), svgWidth = _a.svgWidth, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, margin = _a.margin;
    var dispatch = react_redux_1.useDispatch();
    var legend = react_redux_1.useSelector(LegendSlice_1.SelectLegend);
    if (props.Layout === 'horizontal' && 'bottomleft') {
        return (React.createElement("g", { transform: "translate(" + (margin.left + 10) + "," + (bottom + margin.bottom / 2) + ")" }, legend.map(function (l, index) {
            return (React.createElement("g", { key: index, transform: "translate(" + (props.ShowLabels === true ? (legend.map(function (a) { return a.Width; }).slice(0, index).length === 0 ? 0 : legend.map(function (a) { return a.Width + 30; }).slice(0, index).reduce(function (a, b) { return a + b; })) : index * 20) + "," + 0 + ")" },
                React.createElement("rect", { stroke: 'black', style: { cursor: 'pointer', opacity: (l.Show ? 1 : 0.25) }, width: 15, height: 15, fill: l.Color, onClick: function (event) {
                        dispatch(LegendSlice_1.Show({ Index: index, Show: !l.Show }));
                    } },
                    React.createElement("title", null, l.Label)),
                props.ShowLabels === true ? React.createElement("text", { fill: "black", fontSize: "small", y: 13, x: 20 }, l.Label) : null));
        })));
    }
    else {
        return null;
    }
}
exports.default = Legend;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Plot.js":
/*!*************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Plot.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlotContext = void 0;
// ******************************************************************************************************
//  Plot.tsx - Gbtc
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
//  12/30/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var YAxisSlice_1 = __webpack_require__(/*! ./Store/YAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/YAxisSlice.js");
var XAxisSlice_1 = __webpack_require__(/*! ./Store/XAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/XAxisSlice.js");
var React = __webpack_require__(/*! react */ "react");
var Store_1 = __webpack_require__(/*! ./Store/Store */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/Store.js");
var XAxis_1 = __webpack_require__(/*! ./XAxis */ "../node_modules/@gpa-gemstone/react-graph/lib/XAxis.js");
var SvgStyle = {
    fill: 'none',
    shapeRendering: 'crispEdges',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
};
var PlotContext = React.createContext({
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    svgWidth: 0,
    svgHeight: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
});
exports.PlotContext = PlotContext;
var Plot = function (props) {
    var svgWidth = props.Width - props.Margin.left - props.Margin.right;
    var svgHeight = props.Height - props.Margin.top - props.Margin.bottom;
    var value = {
        margin: props.Margin,
        svgWidth: svgWidth,
        svgHeight: svgHeight,
        top: props.Margin.top,
        bottom: svgHeight,
        left: props.Margin.left,
        right: svgWidth + props.Margin.left,
    };
    return (React.createElement(PlotContext.Provider, { value: value },
        React.createElement(react_redux_1.Provider, { store: Store_1.default },
            React.createElement("div", { style: { height: props.Height, width: props.Width, position: 'relative' } },
                React.createElement(ResetButton, null),
                React.createElement(Graph, __assign({}, props))))));
};
var Graph = function (props) {
    var ref = React.useRef(null);
    // tslint:disable-next-line:no-shadowed-variable
    var dispatch = react_redux_1.useDispatch();
    var _a = React.useContext(PlotContext), svgWidth = _a.svgWidth, svgHeight = _a.svgHeight, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom, margin = _a.margin;
    function handleZoom(evt) {
        if (!props.Zoom)
            return;
        var multiplier = 1.25;
        // event.deltaY positive is wheel down or out and negative is wheel up or in
        if (evt.deltaY < 0)
            multiplier = 0.75;
        dispatch(YAxisSlice_1.Zoom({ Point: evt.nativeEvent.offsetY, Multiplier: multiplier }));
        dispatch(XAxisSlice_1.Zoom({ Point: evt.nativeEvent.offsetX, Multiplier: multiplier }));
    }
    function handleDrag(evt) {
        if (!props.Drag)
            return;
        evt.preventDefault();
        if (evt.nativeEvent.offsetX < props.Margin.left || evt.nativeEvent.offsetX > svgWidth + props.Margin.left)
            return;
        if (evt.nativeEvent.offsetY < props.Margin.top || evt.nativeEvent.offsetY > svgHeight + props.Margin.top)
            return;
        evt.persist();
        var timeout = null;
        ref.current.onmousemove = function (e) {
            if (timeout)
                clearTimeout(timeout);
            timeout = setTimeout(function () {
                dispatch(YAxisSlice_1.Drag({ Click: evt.nativeEvent.offsetY / 2, Drag: e.offsetY / 2 }));
                dispatch(XAxisSlice_1.Drag({ Click: evt.nativeEvent.offsetX / 2, Drag: e.offsetX / 2 }));
            }, 8);
        };
    }
    function stopDrag(evt) {
        if (!props.Drag)
            return;
        evt.preventDefault();
        ref.current.onmousemove = null;
    }
    function XAxisNotExists() {
        var _a;
        var children = props.children;
        if (children === undefined)
            return true;
        else if (children.length === undefined) {
            if (children.type.name !== 'XAxis')
                return true;
            else
                return false;
        }
        else if (((_a = children.find(function (a) { return a.type.name === 'XAxis'; })) === null || _a === void 0 ? void 0 : _a.type.name) !== 'XAxis')
            return true;
        else
            return false;
    }
    return (React.createElement("svg", { ref: ref, width: props.Width, height: props.Height, style: SvgStyle, onWheel: handleZoom, onMouseDown: handleDrag, onMouseUp: stopDrag },
        React.createElement("rect", { x: 0, y: 0, width: props.Width, height: props.Margin.top, fill: 'white', stroke: 'white' }),
        React.createElement("rect", { x: 0, y: props.Height - props.Margin.bottom - props.Margin.top, width: props.Width, height: props.Margin.bottom + props.Margin.top, fill: 'white', stroke: 'white' }),
        React.createElement("rect", { x: 0, y: 0, width: props.Margin.left, height: props.Height, fill: 'white', stroke: 'white' }),
        React.createElement("rect", { x: props.Width - props.Margin.right, y: 0, width: props.Margin.right, height: props.Height, fill: 'white', stroke: 'white' }),
        React.createElement("path", { stroke: 'black', d: "M " + props.Margin.left + " " + props.Margin.top + " H " + (svgWidth + props.Margin.left) + " V " + svgHeight + " H " + props.Margin.left + " V " + props.Margin.top }),
        XAxisNotExists() ?
            React.createElement(XAxis_1.default, { Label: '', Type: 'Linear', TickNumber: 10 }, props.children)
            : props.children));
};
var ResetButton = function () {
    // tslint:disable-next-line:no-shadowed-variable
    var dispatch = react_redux_1.useDispatch();
    var xHideReset = react_redux_1.useSelector(XAxisSlice_1.SelectXAxesReset);
    var yHideReset = react_redux_1.useSelector(YAxisSlice_1.SelectYAxesReset);
    return (React.createElement("button", { style: { position: 'absolute', top: 20, right: 25, opacity: 0.5 }, className: "btn", onClick: function () {
            dispatch(YAxisSlice_1.ResetZoom());
            dispatch(XAxisSlice_1.ResetZoom());
        }, hidden: xHideReset && yHideReset }, "Reset"));
};
exports.default = Plot;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Series.js":
/*!***************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Series.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  Series.tsx - Gbtc
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
//  12/31/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var React = __webpack_require__(/*! react */ "react");
var d3_1 = __webpack_require__(/*! d3 */ "d3");
var XAxis_1 = __webpack_require__(/*! ./XAxis */ "../node_modules/@gpa-gemstone/react-graph/lib/XAxis.js");
var Plot_1 = __webpack_require__(/*! ./Plot */ "../node_modules/@gpa-gemstone/react-graph/lib/Plot.js");
var LegendSlice_1 = __webpack_require__(/*! ./Store/LegendSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/LegendSlice.js");
var YAxis_1 = __webpack_require__(/*! ./YAxis */ "../node_modules/@gpa-gemstone/react-graph/lib/YAxis.js");
var YAxisSlice_1 = __webpack_require__(/*! ./Store/YAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/YAxisSlice.js");
var XAxisSlice_1 = __webpack_require__(/*! ./Store/XAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/XAxisSlice.js");
var helper_functions_1 = __webpack_require__(/*! @gpa-gemstone/helper-functions */ "../node_modules/@gpa-gemstone/helper-functions/lib/index.js");
var Helper_1 = __webpack_require__(/*! ./Helper */ "../node_modules/@gpa-gemstone/react-graph/lib/Helper.js");
function Series(props) {
    var _a = React.useContext(Plot_1.PlotContext), svgWidth = _a.svgWidth, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom, margin = _a.margin;
    var yGuid = React.useContext(YAxis_1.YAxisContext);
    var xGuid = React.useContext(XAxis_1.XAxisContext);
    var dispatch = react_redux_1.useDispatch();
    var series = react_redux_1.useSelector(function (state) { return LegendSlice_1.SelectLegendSeries(state, props.Label); });
    var yAxis = react_redux_1.useSelector(function (state) { return YAxisSlice_1.SelectYAxis(state, yGuid); });
    var xAxis = react_redux_1.useSelector(function (state) { return XAxisSlice_1.SelectXAxis(state, xGuid); });
    React.useEffect(function () {
        if (series === undefined)
            dispatch(LegendSlice_1.Add({ Label: props.Label, Color: props.Color, Show: props.ShowInitially === false ? false : true, Width: helper_functions_1.GetTextWidth("BlinkMacSystemFont", '13px', props.Label) }));
    }, []);
    if (yAxis === undefined || xAxis === undefined)
        return React.createElement(React.Fragment, null);
    var x = Helper_1.GetScale(xAxis.Type, left, right, xAxis.Domain);
    var y = Helper_1.GetScale(yAxis.Type, bottom, top, yAxis.Domain);
    if (series !== undefined ? !series.Show : false) {
        return (React.createElement(React.Fragment, null));
    }
    else if (props.Type === 'points') {
        return (React.createElement(React.Fragment, null, props.Data.filter(function (point) { return point[props.YField] >= yAxis.Domain[0] && point[props.YField] <= yAxis.Domain[1] && point[props.XField] >= xAxis.Domain[0] && point[props.XField] <= xAxis.Domain[1]; }).map(function (point, index) { return React.createElement("circle", __assign({}, props.Style, { key: index, className: "dot", r: 3, cx: (xAxis.Scale ? xAxis.Scale(point[props.XField]) : 0), cy: (yAxis.Scale ? yAxis.Scale(point[props.YField]) : 0), fill: 'blue', style: { cursor: 'pointer' }, onClick: props.Click })); })));
    }
    else if (props.Type === 'line') {
        var linefunc = d3_1.line().x(function (d) { return x(d[props.XField]); }).y(function (d) { return y(d[props.YField]); });
        return React.createElement("path", __assign({}, props.Style, { d: linefunc(props.Data), stroke: props.Color }));
    }
    else if (props.Type === 'histogram') {
        return (React.createElement(React.Fragment, null));
    }
    else if (props.Type === 'stacked') {
        return (React.createElement(React.Fragment, null));
    }
    else {
        return (React.createElement(React.Fragment, null));
    }
}
exports.default = Series;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Store/LegendSlice.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Store/LegendSlice.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectLegendSeries = exports.SelectLegend = exports.Show = exports.Add = exports.LegendSlice = void 0;
// ******************************************************************************************************
//  LegendSlice.ts - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/11/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
// #region [ Slice ]
exports.LegendSlice = toolkit_1.createSlice({
    name: 'Legend',
    initialState: [],
    reducers: {
        Add: function (state, action) {
            state.push(action.payload);
        },
        Show: function (state, action) {
            state[action.payload.Index].Show = action.payload.Show;
        },
    }
});
// #endregion
// #region [ Selectors ]
exports.Add = (_a = exports.LegendSlice.actions, _a.Add), exports.Show = _a.Show;
exports.default = exports.LegendSlice.reducer;
exports.SelectLegend = function (state) { return state.Legend; };
exports.SelectLegendSeries = function (state, key) { return state.Legend.find(function (l) { return l.Label === key; }); };
// #endregion


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Store/Store.js":
/*!********************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Store/Store.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  Store.ts - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/11/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var LegendSlice_1 = __webpack_require__(/*! ./LegendSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/LegendSlice.js");
var YAxisSlice_1 = __webpack_require__(/*! ./YAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/YAxisSlice.js");
var XAxisSlice_1 = __webpack_require__(/*! ./XAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/XAxisSlice.js");
var reducer = {
    Legend: LegendSlice_1.default,
    YAxis: YAxisSlice_1.default,
    XAxis: XAxisSlice_1.default,
};
var store = toolkit_1.configureStore({ reducer: reducer });
exports.default = store;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Store/XAxisSlice.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Store/XAxisSlice.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  XAxisSlice.ts - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/11/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectXAxesReset = exports.SelectXAxis = exports.SelectXAxes = exports.Zoom = exports.Drag = exports.ResetZoom = exports.SetRange = exports.SetDomain = exports.SetType = exports.Add = exports.XAxisSlice = void 0;
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var Helper_1 = __webpack_require__(/*! ../Helper */ "../node_modules/@gpa-gemstone/react-graph/lib/Helper.js");
// #region [ Slice ]
exports.XAxisSlice = toolkit_1.createSlice({
    name: 'XAxis',
    initialState: [],
    reducers: {
        Add: function (state, action) {
            state.push(action.payload);
        },
        SetType: function (state, action) {
            var axis = state.find(function (s) { return s.ID === action.payload.ID; });
            if (axis)
                axis.Type = action.payload.Type;
        },
        SetDomain: function (state, action) {
            var axis = state.find(function (s) { return s.ID === action.payload.ID; });
            if (axis)
                axis.Domain = action.payload.Domain;
        },
        SetRange: function (state, action) {
            var axis = state.find(function (s) { return s.ID === action.payload.ID; });
            if (axis) {
                axis.Range = action.payload.Range;
                axis.Domain = action.payload.Range;
            }
        },
        ResetZoom: function (state) {
            state.forEach(function (s) { s.Domain = s.Range; });
        },
        Drag: function (state, action) {
            state.forEach(function (s) {
                var scale = Helper_1.GetScale(s.Type, s.Start, s.End, s.Domain);
                s.Domain = s.Domain.map(function (d) { return scale.invert(scale(d) + action.payload.Click - action.payload.Drag); });
            });
        },
        Zoom: function (state, action) {
            state.forEach(function (s) {
                var length = (s.End - s.Start) * action.payload.Multiplier;
                var scale = Helper_1.GetScale(s.Type, s.Start, s.End, s.Domain);
                s.Domain = [scale.invert(action.payload.Point - length / 2), scale.invert(action.payload.Point + length / 2)];
            });
        }
    }
});
// #endregion
// #region [ Selectors ]
exports.Add = (_a = exports.XAxisSlice.actions, _a.Add), exports.SetType = _a.SetType, exports.SetDomain = _a.SetDomain, exports.SetRange = _a.SetRange, exports.ResetZoom = _a.ResetZoom, exports.Drag = _a.Drag, exports.Zoom = _a.Zoom;
exports.default = exports.XAxisSlice.reducer;
exports.SelectXAxes = function (state) { return state.XAxis; };
exports.SelectXAxis = function (state, key) {
    var axis = state.XAxis.find(function (l) { return l.ID === key; });
    if (axis === undefined)
        return axis;
    return __assign(__assign({}, axis), { Scale: Helper_1.GetScale(axis.Type, axis.Start, axis.End, axis.Domain) });
};
exports.SelectXAxesReset = function (state) { return state.XAxis.every(function (a) { return a.Domain.every(function (d, i) { return d === a.Range[i]; }); }); };
// #endregion


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/Store/YAxisSlice.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/Store/YAxisSlice.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  YAxisSlice.ts - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/11/2021 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectYAxesReset = exports.SelectYAxis = exports.SelectYAxes = exports.Zoom = exports.Drag = exports.ResetZoom = exports.SetRange = exports.SetDomain = exports.SetType = exports.Add = exports.YAxisSlice = void 0;
var toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var Helper_1 = __webpack_require__(/*! ../Helper */ "../node_modules/@gpa-gemstone/react-graph/lib/Helper.js");
// #region [ Slice ]
exports.YAxisSlice = toolkit_1.createSlice({
    name: 'YAxis',
    initialState: [],
    reducers: {
        Add: function (state, action) {
            state.push(action.payload);
        },
        SetType: function (state, action) {
            var axis = state.find(function (s) { return s.ID === action.payload.ID; });
            if (axis)
                axis.Type = action.payload.Type;
        },
        SetDomain: function (state, action) {
            var axis = state.find(function (s) { return s.ID === action.payload.ID; });
            if (axis)
                axis.Domain = action.payload.Domain;
        },
        SetRange: function (state, action) {
            var axis = state.find(function (s) { return s.ID === action.payload.ID; });
            if (axis) {
                axis.Range = action.payload.Range;
                axis.Domain = action.payload.Range;
            }
        },
        ResetZoom: function (state) {
            state.forEach(function (s) { s.Domain = s.Range; });
        },
        Drag: function (state, action) {
            state.forEach(function (s) {
                var scale = Helper_1.GetScale(s.Type, s.Start, s.End, s.Domain);
                s.Domain = s.Domain.map(function (d) { return scale.invert(scale(d) + action.payload.Click - action.payload.Drag); });
            });
        },
        Zoom: function (state, action) {
            state.forEach(function (s) {
                var length = (s.End - s.Start) * action.payload.Multiplier;
                var scale = Helper_1.GetScale(s.Type, s.Start, s.End, s.Domain);
                s.Domain = [scale.invert(action.payload.Point - length / 2), scale.invert(action.payload.Point + length / 2)];
            });
        }
    }
});
// #endregion
// #region [ Selectors ]
exports.Add = (_a = exports.YAxisSlice.actions, _a.Add), exports.SetType = _a.SetType, exports.SetDomain = _a.SetDomain, exports.SetRange = _a.SetRange, exports.ResetZoom = _a.ResetZoom, exports.Drag = _a.Drag, exports.Zoom = _a.Zoom;
exports.default = exports.YAxisSlice.reducer;
exports.SelectYAxes = function (state) { return state.YAxis; };
exports.SelectYAxis = function (state, key) {
    var axis = state.YAxis.find(function (l) { return l.ID === key; });
    if (axis === undefined)
        return axis;
    return __assign(__assign({}, axis), { Scale: Helper_1.GetScale(axis.Type, axis.Start, axis.End, axis.Domain) });
};
exports.SelectYAxesReset = function (state) { return state.YAxis.every(function (a) { return a.Domain[0] === a.Range[0] && a.Domain[1] === a.Range[1]; }); };
// #endregion


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/XAxis.js":
/*!**************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/XAxis.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  XAxis.tsx - Gbtc
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
//  12/30/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __read = (this && this.__read) || function (o, n) {
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XAxisContext = void 0;
var React = __webpack_require__(/*! react */ "react");
var d3_1 = __webpack_require__(/*! d3 */ "d3");
var Plot_1 = __webpack_require__(/*! ./Plot */ "../node_modules/@gpa-gemstone/react-graph/lib/Plot.js");
var helper_functions_1 = __webpack_require__(/*! @gpa-gemstone/helper-functions */ "../node_modules/@gpa-gemstone/helper-functions/lib/index.js");
var YAxis_1 = __webpack_require__(/*! ./YAxis */ "../node_modules/@gpa-gemstone/react-graph/lib/YAxis.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var XAxisSlice_1 = __webpack_require__(/*! ./Store/XAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/XAxisSlice.js");
var XAxisContext = React.createContext('nothing');
exports.XAxisContext = XAxisContext;
var XAxis = function (props) {
    var _a = React.useContext(Plot_1.PlotContext), svgWidth = _a.svgWidth, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom, margin = _a.margin;
    var _b = __read(React.useState(helper_functions_1.CreateGuid()), 1), guid = _b[0];
    var dispatch = react_redux_1.useDispatch();
    var axis = react_redux_1.useSelector(function (state) { return XAxisSlice_1.SelectXAxis(state, guid); });
    React.useEffect(function () {
        var range = getRange();
        if (axis === undefined)
            dispatch(XAxisSlice_1.Add({ ID: guid, Type: (props.Type ? props.Type : 'Linear'), Range: range, Domain: range, Start: left, End: right }));
        else
            dispatch(XAxisSlice_1.SetRange({ ID: guid, Range: range }));
    }, [props.children]);
    function getRange() {
        if (props.Range !== undefined)
            return props.Range;
        else if (props.children === undefined) {
            return [1, 10];
        }
        else if (props.children.length === 0) {
            return [1, 10];
        }
        else if (props.children.length === undefined) {
            var yaxis = props.children;
            var series = yaxis.props.children;
            if (series.length === undefined) {
                var s_1 = yaxis.props.children;
                var range = s_1.props.Data.map(function (d) { return d[s_1.props.XField]; });
                if (props.Type === 'Ordinal') {
                    return range;
                }
                else {
                    return [d3_1.min(range), d3_1.max(range)];
                }
            }
            else {
                series = [].concat.apply([], __spread(series));
                var range = __spread(new Set([].concat.apply([], __spread(series.map(function (s) { return s.props.Data.map(function (d) { return d[s.props.XField]; }); })))));
                if (props.Type === 'Ordinal') {
                    return range;
                }
                else {
                    return [d3_1.min(range), d3_1.max(range)];
                }
            }
        }
        else {
            var yaxis = props.children;
            var series = [].concat.apply([], __spread(yaxis.map(function (y) { return y.props.children; })));
            var range = __spread(new Set([].concat.apply([], __spread(series.map(function (s) { return s.props.Data.map(function (d) { return d[s.props.XField]; }); })))));
            if (props.Type === 'Ordinal') {
                return range;
            }
            else {
                return [d3_1.min(range), d3_1.max(range)];
            }
        }
    }
    function GenerateAxis() {
        if (axis === undefined)
            return [];
        else if (props.Type === 'Log')
            return GenerateLogAxis();
        else if (props.Type === 'Ordinal')
            return GenerateOrdinalAxis();
        else
            return GenerateLinearAxis();
    }
    function GenerateLogAxis() {
        var _a, _b;
        var x = d3_1.scaleLog().rangeRound([left, right]).domain((_a = axis === null || axis === void 0 ? void 0 : axis.Domain) !== null && _a !== void 0 ? _a : []);
        var i = parseFloat(Math.pow(10, Math.floor(Math.log((_b = axis === null || axis === void 0 ? void 0 : axis.Domain[0]) !== null && _b !== void 0 ? _b : 0) / Math.log(10))).toPrecision(1));
        var ticks = [];
        var logDomain = x.domain().map(function (l) { return Math.log(l) / Math.log(10); });
        var ldDiff = logDomain[1] - logDomain[0];
        for (; i <= (axis === null || axis === void 0 ? void 0 : axis.Domain[1]); i = i * 10) {
            ticks.push(React.createElement("g", { key: i, className: "tick", transform: "translate(" + x(i) + "," + bottom + ")", style: { opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 } },
                props.Grid ? React.createElement("path", { stroke: 'black', d: "M 0,6 V -" + (bottom - top), strokeWidth: 0.25 }) : null,
                React.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, props.TickFormatter === undefined ? i : props.TickFormatter(i)),
                (props.Grid && ldDiff < 5 ?
                    React.createElement("g", null, ([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(function (num) { return React.createElement("path", { stroke: 'black', key: num, d: "M " + (x(num * i) - x(i)) + ",6 V -" + (bottom - top), strokeWidth: 0.25 }); }))
                    : null)));
        }
        return ticks;
    }
    function GenerateLinearAxis() {
        var _a, _b, _c, _d;
        var x = d3_1.scaleLinear().rangeRound([left, right]).domain((_a = axis === null || axis === void 0 ? void 0 : axis.Domain) !== null && _a !== void 0 ? _a : []);
        var ticks = [];
        var step = Math.round((x.domain()[1] - x.domain()[0]) / ((props === null || props === void 0 ? void 0 : props.Ticks) !== undefined ? (_b = props === null || props === void 0 ? void 0 : props.TickNumber) !== null && _b !== void 0 ? _b : 10 : 10));
        for (var i = Math.floor((_c = axis === null || axis === void 0 ? void 0 : axis.Domain[0]) !== null && _c !== void 0 ? _c : 0); (_d = i <= (axis === null || axis === void 0 ? void 0 : axis.Domain[1])) !== null && _d !== void 0 ? _d : 10; i = step + i) {
            ticks.push(React.createElement("g", { key: i, className: "tick", transform: "translate(" + x(i) + "," + bottom + ")", style: { opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 } },
                props.Grid ? React.createElement("path", { stroke: 'black', d: "M 0,6 V -" + (bottom - top), strokeWidth: 0.25 }) : null,
                React.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, props.TickFormatter === undefined ? i : props.TickFormatter(i))));
        }
        return ticks;
    }
    function GenerateOrdinalAxis() {
        var _a, _b, _c, _d, _e;
        if (props.Ticks === null || ((_a = props === null || props === void 0 ? void 0 : props.Ticks) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return [];
        var x = d3_1.scaleOrdinal().domain((_b = props === null || props === void 0 ? void 0 : props.Ticks) !== null && _b !== void 0 ? _b : []).range((_d = (_c = props === null || props === void 0 ? void 0 : props.Ticks) === null || _c === void 0 ? void 0 : _c.map(function (tick, i) { var _a, _b, _c, _d; return i * (svgWidth) / ((_b = (_a = props === null || props === void 0 ? void 0 : props.Ticks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 10) + left + (svgWidth) / ((_d = (_c = props === null || props === void 0 ? void 0 : props.Ticks) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 10) / 2; })) !== null && _d !== void 0 ? _d : []);
        return ((_e = props === null || props === void 0 ? void 0 : props.Ticks) !== null && _e !== void 0 ? _e : []).map(function (tick) { return (React.createElement("g", { key: tick, className: "tick", transform: "translate(" + x(tick) + "," + bottom + ")" },
            props.Grid ? React.createElement("path", { stroke: 'black', d: "M 0,6 V -" + (bottom - top), strokeWidth: 0.25 }) : null,
            React.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, tick))); });
    }
    function YAxisNotExists() {
        var _a;
        var children = props.children;
        if (children === undefined)
            return true;
        else if (children.length === undefined) {
            if (children.type.name !== 'YAxis')
                return true;
            else
                return false;
        }
        else if (((_a = children.find(function (a) { return a.type.name === 'YAxis'; })) === null || _a === void 0 ? void 0 : _a.type.name) !== 'YAxis')
            return true;
        else
            return false;
    }
    return (React.createElement(XAxisContext.Provider, { value: guid },
        YAxisNotExists() ?
            React.createElement(YAxis_1.default, { Label: '', Type: 'Linear', TickNumber: 10 }, props.children)
            : props.children,
        GenerateAxis(),
        React.createElement("text", { fill: "black", fontSize: "small", x: svgWidth / 2, y: bottom + margin.bottom / 2 },
            props.Label,
            props.Unit != null ? "(" + props.Unit + ")" : '')));
};
exports.default = XAxis;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/YAxis.js":
/*!**************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/YAxis.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YAxisContext = void 0;
// ******************************************************************************************************
//  YAxis.tsx - Gbtc
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
//  12/30/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var YAxisSlice_1 = __webpack_require__(/*! ./Store/YAxisSlice */ "../node_modules/@gpa-gemstone/react-graph/lib/Store/YAxisSlice.js");
var React = __webpack_require__(/*! react */ "react");
var d3_1 = __webpack_require__(/*! d3 */ "d3");
var Plot_1 = __webpack_require__(/*! ./Plot */ "../node_modules/@gpa-gemstone/react-graph/lib/Plot.js");
var helper_functions_1 = __webpack_require__(/*! @gpa-gemstone/helper-functions */ "../node_modules/@gpa-gemstone/helper-functions/lib/index.js");
var YAxisContext = React.createContext('nothing');
exports.YAxisContext = YAxisContext;
var YAxis = function (props) {
    var _a = React.useContext(Plot_1.PlotContext), margin = _a.margin, svgWidth = _a.svgWidth, svgHeight = _a.svgHeight, top = _a.top, bottom = _a.bottom;
    var _b = __read(React.useState(helper_functions_1.CreateGuid()), 1), guid = _b[0];
    var dispatch = react_redux_1.useDispatch();
    var series = react_redux_1.useSelector(function (state) { return YAxisSlice_1.SelectYAxis(state, guid); });
    React.useEffect(function () {
        var _a;
        var range = getRange();
        if (series === undefined)
            dispatch(YAxisSlice_1.Add({ ID: guid, Type: (_a = props.Type) !== null && _a !== void 0 ? _a : 'Linear', Range: range, Domain: range, Start: bottom, End: top }));
        else
            dispatch(YAxisSlice_1.SetRange({ ID: guid, Range: range }));
    }, [props.children]);
    function getRange() {
        if (props.Range !== undefined)
            return props.Range;
        else if (props.children === undefined) {
            return [0, 10];
        }
        else if (props.children.length === 0) {
            return [0, 10];
        }
        else if (props.children.length === undefined) {
            var range = props.children.props.Data.map(function (d) { return d[props.children.props.YField]; });
            if (props.Type === 'Ordinal') {
                return range;
            }
            else {
                return [d3_1.min(range), d3_1.max(range)];
            }
        }
        else {
            var children = [].concat.apply([], __spread(props.children));
            var range = __spread(new Set([].concat.apply([], __spread(children.map(function (c) { return c.props.Data.map(function (d) { return d[c.props.YField]; }); })))));
            if (props.Type === 'Ordinal') {
                return range;
            }
            else {
                return [d3_1.min(range), d3_1.max(range)];
            }
        }
    }
    function GenerateAxis() {
        if (series === undefined)
            return [];
        if (props.Type === 'Log')
            return GenerateLogAxis();
        else if (props.Type === 'Ordinal')
            return GenerateOrdinalAxis();
        else
            return GenerateLinearAxis();
    }
    function GenerateLogAxis() {
        var _a, _b, _c;
        var y = d3_1.scaleLog().rangeRound([svgHeight, margin.top]).domain((_a = series === null || series === void 0 ? void 0 : series.Domain) !== null && _a !== void 0 ? _a : []);
        var i = parseFloat(Math.pow(10, Math.floor(Math.log((_b = series === null || series === void 0 ? void 0 : series.Domain[0]) !== null && _b !== void 0 ? _b : 1) / Math.log(10))).toPrecision(1));
        var ticks = [];
        var logDomain = y.domain().map(function (l) { return Math.log(l) / Math.log(10); });
        var ldDiff = logDomain[1] - logDomain[0];
        for (; (_c = i <= (series === null || series === void 0 ? void 0 : series.Domain[1])) !== null && _c !== void 0 ? _c : 10; i = i * 10) {
            ticks.push(React.createElement("g", { key: i, className: "tick", transform: "translate(" + margin.left + "," + y(i) + ")", style: { opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 } },
                props.Grid ? React.createElement("path", { stroke: 'black', d: "M -6,0 H -" + (svgHeight - margin.top), strokeWidth: 0.25 }) : null,
                React.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, i),
                (props.Grid && ldDiff < 5 ?
                    React.createElement("g", null, ([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(function (num) { return React.createElement("path", { stroke: 'black', key: num, d: "M -6," + (y(num * i) - y(i)) + " H -" + (svgHeight - margin.top), strokeWidth: 0.25 }); }))
                    : null)));
        }
        return ticks;
    }
    function GenerateLinearAxis() {
        var _a, _b, _c;
        var y = d3_1.scaleLinear().rangeRound([svgHeight, margin.top]).domain((_a = series === null || series === void 0 ? void 0 : series.Domain) !== null && _a !== void 0 ? _a : []);
        var ticks = [];
        var step = 0.1;
        if (y.domain()[1] - y.domain()[0] > 5)
            step = Math.round((y.domain()[1] - y.domain()[0]) / (props.TickNumber != null ? props.TickNumber : 10));
        else
            step = (y.domain()[1] - y.domain()[0]) / (props.TickNumber != null ? props.TickNumber : 10);
        for (var i = Math.floor((_b = series === null || series === void 0 ? void 0 : series.Domain[0]) !== null && _b !== void 0 ? _b : 1); (_c = i <= (series === null || series === void 0 ? void 0 : series.Domain[1])) !== null && _c !== void 0 ? _c : 10; i = step + i) {
            ticks.push(React.createElement("g", { key: i, className: "tick", transform: "translate(" + margin.left + "," + y(i) + ")", style: { opacity: i < y.domain()[0] || i > y.domain()[1] ? 0 : 1 } },
                props.Grid ? React.createElement("path", { stroke: 'black', d: "M -6,0 H " + svgWidth, strokeWidth: 0.25 }) : null,
                React.createElement("text", { fill: "black", fontSize: "small", x: "-15", dy: "0.32em", textAnchor: 'middle' }, i.toFixed(1))));
        }
        return ticks;
    }
    function GenerateOrdinalAxis() {
        var _a, _b, _c, _d;
        if (props.Ticks === null || ((_a = props.Ticks) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return [];
        var scale = d3_1.scaleOrdinal().domain((_b = props === null || props === void 0 ? void 0 : props.Ticks) !== null && _b !== void 0 ? _b : []).range(((_c = props === null || props === void 0 ? void 0 : props.Ticks) !== null && _c !== void 0 ? _c : []).map(function (tick, i) { var _a, _b, _c, _d; return i * (svgHeight) / ((_b = (_a = props === null || props === void 0 ? void 0 : props.Ticks) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 10) + margin.top + (svgHeight) / ((_d = (_c = props === null || props === void 0 ? void 0 : props.Ticks) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 10) / 2; }));
        return ((_d = props === null || props === void 0 ? void 0 : props.Ticks) !== null && _d !== void 0 ? _d : []).map(function (tick) { return (React.createElement("g", { key: tick, className: "tick", transform: "translate(" + margin.left + "," + scale(tick) + ")" },
            props.Grid ? React.createElement("path", { stroke: 'black', d: "M -6,0 H " + svgWidth, strokeWidth: 0.25 }) : null,
            React.createElement("text", { fill: "black", fontSize: "small", x: "-15", dy: "0.32em", textAnchor: 'middle' }, tick))); });
    }
    return (React.createElement(YAxisContext.Provider, { value: guid },
        props.children,
        GenerateAxis(),
        React.createElement("text", { fill: "black", fontSize: "small", transform: "rotate(-90 0,0)", y: margin.left / 2, x: -svgHeight / 2 - margin.bottom },
            props.Label,
            props.Unit != null ? "(" + props.Unit + ")" : '')));
};
exports.default = YAxis;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-graph/lib/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-graph/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.YAxis = exports.XAxis = exports.Series = exports.Legend = exports.Plot = void 0;
var Plot_1 = __webpack_require__(/*! ./Plot */ "../node_modules/@gpa-gemstone/react-graph/lib/Plot.js");
exports.Plot = Plot_1.default;
var Legend_1 = __webpack_require__(/*! ./Legend */ "../node_modules/@gpa-gemstone/react-graph/lib/Legend.js");
exports.Legend = Legend_1.default;
var Series_1 = __webpack_require__(/*! ./Series */ "../node_modules/@gpa-gemstone/react-graph/lib/Series.js");
exports.Series = Series_1.default;
var XAxis_1 = __webpack_require__(/*! ./XAxis */ "../node_modules/@gpa-gemstone/react-graph/lib/XAxis.js");
exports.XAxis = XAxis_1.default;
var YAxis_1 = __webpack_require__(/*! ./YAxis */ "../node_modules/@gpa-gemstone/react-graph/lib/YAxis.js");
exports.YAxis = YAxis_1.default;


/***/ }),

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

/***/ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!******************************************************************!*\
  !*** ../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \******************************************************************/
/*! exports provided: createNextState, current, freeze, createSelector, MiddlewareArray, configureStore, createAction, createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createImmutableStateInvariantMiddleware, createReducer, createSerializableStateInvariantMiddleware, createSlice, findNonSerializableValue, getDefaultMiddleware, getType, isAllOf, isAnyOf, isAsyncThunkAction, isFulfilled, isImmutableDefault, isPending, isPlain, isPlainObject, isRejected, isRejectedWithValue, nanoid, unwrapResult, __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareArray", function() { return MiddlewareArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncThunk", function() { return createAsyncThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraftSafeSelector", function() { return createDraftSafeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImmutableStateInvariantMiddleware", function() { return createImmutableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSerializableStateInvariantMiddleware", function() { return createSerializableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlice", function() { return createSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNonSerializableValue", function() { return findNonSerializableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultMiddleware", function() { return getDefaultMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllOf", function() { return isAllOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyOf", function() { return isAnyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncThunkAction", function() { return isAsyncThunkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFulfilled", function() { return isFulfilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutableDefault", function() { return isImmutableDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return isPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlain", function() { return isPlain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRejected", function() { return isRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRejectedWithValue", function() { return isRejectedWithValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapResult", function() { return unwrapResult; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "../node_modules/immer/dist/immer.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNextState", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "current", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["current"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["freeze"]; });

/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["__DO_NOT_USE__ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["createStore"]; });

/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"]; });

/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");








/**
 * "Draft-Safe" version of `reselect`'s `createSelector`:
 * If an `immer`-drafted object is passed into the resulting selector's first argument,
 * the selector will act on the current draft value, instead of returning a cached value
 * that might be possibly outdated if the draft has been modified since.
 * @public
 */

var createDraftSafeSelector = function createDraftSafeSelector() {
  var selector = reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"].apply(void 0, arguments);

  var wrappedSelector = function wrappedSelector(value) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return selector.apply(void 0, [Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(value) ? Object(immer__WEBPACK_IMPORTED_MODULE_0__["current"])(value) : value].concat(rest));
  };

  return wrappedSelector;
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * @public
 */

var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return undefined;
  if (typeof arguments[0] === 'object') return redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
  return redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(null, arguments);
};

/**
 * Returns true if the passed value is "plain" object, i.e. an object whose
 * protoype is the root `Object.prototype`. This includes objects created
 * using object literals, but not for instance for class instances.
 *
 * @param {any} value The value to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 *
 * @public
 */
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function measureTime(fn) {
      var started = Date.now();

      try {
        return fn();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function warnIfExceeded() {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}
/**
 * @public
 */

var MiddlewareArray =
/*#__PURE__*/
function (_Array) {
  _inheritsLoose(MiddlewareArray, _Array);

  function MiddlewareArray() {
    return _Array.apply(this, arguments) || this;
  }

  var _proto = MiddlewareArray.prototype;

  _proto.concat = function concat() {
    var _Array$prototype$conc;

    for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
  };

  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return _construct(MiddlewareArray, arr[0].concat(this));
    }

    return _construct(MiddlewareArray, arr.concat(this));
  };

  return MiddlewareArray;
}(
/*#__PURE__*/
_wrapNativeSuper(Array));

var isProduction = "development" === 'production';
var prefix = 'Invariant failed'; // Throw an error if the condition fails
// Strip out error messages for production
// > Not providing an inline default argument for message as the result is smaller

function invariant(condition, message) {
  if (condition) {
    return;
  } // Condition not passed
  // In production we strip the message but still throw


  if (isProduction) {
    throw new Error(prefix);
  } // When not in production we allow the message to pass through
  // *This block will be removed in production builds*


  throw new Error(prefix + ": " + (message || ''));
}

function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}

function getSerialize(serializer, decycler) {
  var stack = [],
      keys = [];
  if (!decycler) decycler = function decycler(_, value) {
    if (stack[0] === value) return '[Circular ~]';
    return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
  };
  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = decycler.call(this, key, value);
    } else stack.push(value);

    return serializer == null ? value : serializer.call(this, key, value);
  };
}
/**
 * The default `isImmutable` function.
 *
 * @public
 */


function isImmutableDefault(value) {
  return typeof value !== 'object' || value === null || typeof value === 'undefined';
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function detectMutations() {
      return _detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}

function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (path === void 0) {
    path = [];
  }

  var tracked = {
    value: obj
  };

  if (!isImmutable(obj)) {
    tracked.children = {};

    for (var key in obj) {
      var childPath = path.concat(key);

      if (ignorePaths.length && ignorePaths.indexOf(childPath.join('.')) !== -1) {
        continue;
      }

      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }

  return tracked;
}

function _detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (sameParentRef === void 0) {
    sameParentRef = false;
  }

  if (path === void 0) {
    path = [];
  }

  var prevObj = trackedProperty ? trackedProperty.value : undefined;
  var sameRef = prevObj === obj;

  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path: path
    };
  }

  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  } // Gather all keys from prev (tracked) and after objs


  var keysToDetect = {};
  Object.keys(trackedProperty.children).forEach(function (key) {
    keysToDetect[key] = true;
  });
  Object.keys(obj).forEach(function (key) {
    keysToDetect[key] = true;
  });
  var keys = Object.keys(keysToDetect);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var childPath = path.concat(key);

    if (ignorePaths.length && ignorePaths.indexOf(childPath.join('.')) !== -1) {
      continue;
    }

    var result = _detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);

    if (result.wasMutated) {
      return result;
    }
  }

  return {
    wasMutated: false
  };
}
/**
 * Creates a middleware that checks whether any state was mutated in between
 * dispatches or during a dispatch. If any mutations are detected, an error is
 * thrown.
 *
 * @param options Middleware options.
 *
 * @public
 */


function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isImmutable = _options.isImmutable,
      isImmutable = _options$isImmutable === void 0 ? isImmutableDefault : _options$isImmutable,
      ignoredPaths = _options.ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter,
      ignore = _options.ignore; // Alias ignore->ignoredPaths, but prefer ignoredPaths if present

  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function (_ref) {
    var getState = _ref.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function (next) {
      return function (action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, 'ImmutableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          !!result.wasMutated ?  true ? invariant(false, "A state mutation was detected between dispatches, in the path '" + (result.path || []).join('.') + "'.  This may cause incorrect behavior. (https://redux.js.org/troubleshooting#never-mutate-reducer-arguments)") : undefined : void 0;
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations(); // Track before potentially not meeting the invariant

          tracker = track(state);
          result.wasMutated && (!!result.wasMutated ?  true ? invariant(false, "A state mutation was detected inside a dispatch, in the path: " + (result.path || []).join('.') + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/troubleshooting#never-mutate-reducer-arguments)") : undefined : void 0);
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
}

/**
 * Returns true if the passed value is "plain", i.e. a value that is either
 * directly JSON-serializable (boolean, number, string, array, plain object)
 * or `undefined`.
 *
 * @param val The value to check.
 *
 * @public
 */

function isPlain(val) {
  return typeof val === 'undefined' || val === null || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val) || isPlainObject(val);
}
/**
 * @public
 */

function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
  if (path === void 0) {
    path = [];
  }

  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }

  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }

  var foundNestedSerializable;

  if (!isSerializable(value)) {
    return {
      keyPath: path.join('.') || '<root>',
      value: value
    };
  }

  if (typeof value !== 'object' || value === null) {
    return false;
  }

  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;

  for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _ref2 = _ref,
        property = _ref2[0],
        nestedValue = _ref2[1];
    var nestedPath = path.concat(property);

    if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath.join('.')) >= 0) {
      continue;
    }

    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath.join('.'),
        value: nestedValue
      };
    }

    if (typeof nestedValue === 'object') {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);

      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }

  return false;
}
/**
 * Creates a middleware that, after every state change, checks if the new
 * state is serializable. If a non-serializable value is found within the
 * state, an error is printed to the console.
 *
 * @param options Middleware options.
 *
 * @public
 */

function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if (false) {}

  var _options = options,
      _options$isSerializab = _options.isSerializable,
      isSerializable = _options$isSerializab === void 0 ? isPlain : _options$isSerializab,
      getEntries = _options.getEntries,
      _options$ignoredActio = _options.ignoredActions,
      ignoredActions = _options$ignoredActio === void 0 ? [] : _options$ignoredActio,
      _options$ignoredActio2 = _options.ignoredActionPaths,
      ignoredActionPaths = _options$ignoredActio2 === void 0 ? ['meta.arg'] : _options$ignoredActio2,
      _options$ignoredPaths = _options.ignoredPaths,
      ignoredPaths = _options$ignoredPaths === void 0 ? [] : _options$ignoredPaths,
      _options$warnAfter = _options.warnAfter,
      warnAfter = _options$warnAfter === void 0 ? 32 : _options$warnAfter;
  return function (storeAPI) {
    return function (next) {
      return function (action) {
        if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
          return next(action);
        }

        var measureUtils = getTimeMeasureUtils(warnAfter, 'SerializableStateInvariantMiddleware');
        measureUtils.measureTime(function () {
          var foundActionNonSerializableValue = findNonSerializableValue(action, [], isSerializable, getEntries, ignoredActionPaths);

          if (foundActionNonSerializableValue) {
            var keyPath = foundActionNonSerializableValue.keyPath,
                value = foundActionNonSerializableValue.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, '\nTake a look at the logic that dispatched this action: ', action, '\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)', '\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)');
          }
        });
        var result = next(action);
        measureUtils.measureTime(function () {
          var state = storeAPI.getState();
          var foundStateNonSerializableValue = findNonSerializableValue(state, [], isSerializable, getEntries, ignoredPaths);

          if (foundStateNonSerializableValue) {
            var keyPath = foundStateNonSerializableValue.keyPath,
                value = foundStateNonSerializableValue.value;
            console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
          }
        });
        measureUtils.warnIfExceeded();
        return result;
      };
    };
  };
}

function isBoolean(x) {
  return typeof x === 'boolean';
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
/**
 * Returns any array containing the default middleware installed by
 * `configureStore()`. Useful if you want to configure your store with a custom
 * `middleware` array but still keep the default set.
 *
 * @return The default middleware used by `configureStore()`.
 *
 * @public
 */

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$thunk = _options.thunk,
      thunk = _options$thunk === void 0 ? true : _options$thunk,
      _options$immutableChe = _options.immutableCheck,
      immutableCheck = _options$immutableChe === void 0 ? true : _options$immutableChe,
      _options$serializable = _options.serializableCheck,
      serializableCheck = _options$serializable === void 0 ? true : _options$serializable;
  var middlewareArray = new MiddlewareArray();

  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]);
    } else {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(thunk.extraArgument));
    }
  }

  if (true) {
    if (immutableCheck) {
      /* PROD_START_REMOVE_UMD */
      var immutableOptions = {};

      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }

      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
      /* PROD_STOP_REMOVE_UMD */
    }

    if (serializableCheck) {
      var serializableOptions = {};

      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }

      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }

  return middlewareArray;
}

var IS_PRODUCTION = "development" === 'production';
/**
 * A friendly abstraction over the standard Redux `createStore()` function.
 *
 * @param config The store configuration.
 * @returns A configured Redux store.
 *
 * @public
 */

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _ref = options || {},
      _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
      _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
      _ref$devTools = _ref.devTools,
      devTools = _ref$devTools === void 0 ? true : _ref$devTools,
      _ref$preloadedState = _ref.preloadedState,
      preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
      _ref$enhancers = _ref.enhancers,
      enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

  var rootReducer;

  if (typeof reducer === 'function') {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
  var finalCompose = redux__WEBPACK_IMPORTED_MODULE_1__["compose"];

  if (devTools) {
    finalCompose = composeWithDevTools(_extends({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION
    }, typeof devTools === 'object' && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = [middlewareEnhancer].concat(enhancers);
  } else if (typeof enhancers === 'function') {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}

function createAction(type, prepareAction) {
  function actionCreator() {
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, arguments);

      if (!prepared) {
        throw new Error('prepareAction did not return an object');
      }

      return _extends({
        type: type,
        payload: prepared.payload
      }, 'meta' in prepared && {
        meta: prepared.meta
      }, {}, 'error' in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: arguments.length <= 0 ? undefined : arguments[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}
function isFSA(action) {
  return isPlainObject(action) && typeof action.type === 'string' && Object.keys(action).every(isValidKey);
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}
/**
 * Returns the action type of the actions created by the passed
 * `createAction()`-generated action creator (arbitrary action creators
 * are not supported).
 *
 * @param action The action creator whose action type to get.
 * @returns The action type used by the action creator.
 *
 * @public
 */


function getType(actionCreator) {
  return "" + actionCreator;
}

function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function addCase(typeOrActionCreator, reducer) {
      if (true) {
        /*
         to keep the definition by the user in line with actual behavior,
         we enforce `addCase` to always be called before calling `addMatcher`
         as matching cases take precedence over matchers
         */
        if (actionMatchers.length > 0) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addMatcher`');
        }

        if (defaultCaseReducer) {
          throw new Error('`builder.addCase` should only be called before calling `builder.addDefaultCase`');
        }
      }

      var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error('addCase cannot be called with two reducers for the same action type');
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function addMatcher(matcher, reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addMatcher` should only be called before calling `builder.addDefaultCase`');
        }
      }

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function addDefaultCase(reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error('`builder.addDefaultCase` can only be called once');
        }
      }

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _ref[0],
      finalActionMatchers = _ref[1],
      finalDefaultCaseReducer = _ref[2];

  return function (state, action) {
    if (state === void 0) {
      state = initialState;
    }

    var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
      var matcher = _ref2.matcher;
      return matcher(action);
    }).map(function (_ref3) {
      var reducer = _ref3.reducer;
      return reducer;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(previousState)) {
          // If it's already a draft, we must already be inside a `createNextState` call,
          // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
          // inside an existing draft. It's safe to just pass the draft to the mutator.
          var draft = previousState; // We can assume this is already a draft

          var result = caseReducer(draft, action);

          if (typeof result === 'undefined') {
            return previousState;
          }

          return result;
        } else if (!Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraftable"])(previousState)) {
          // If state is not draftable (ex: a primitive, such as 0), we want to directly
          // return the caseReducer func and not wrap it with produce.
          var _result = caseReducer(previousState, action);

          if (typeof _result === 'undefined') {
            if (previousState === null) {
              return previousState;
            }

            throw Error('A case reducer on a non-draftable value must not return undefined');
          }

          return _result;
        } else {
          // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
          // than an Immutable<S>, and TypeScript cannot find out how to reconcile
          // these two types.
          return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  };
}

function getType$1(slice, actionKey) {
  return slice + "/" + actionKey;
}
/**
 * A function that accepts an initial state, an object full of reducer
 * functions, and a "slice name", and automatically generates
 * action creators and action types that correspond to the
 * reducers and state.
 *
 * The `reducer` argument is passed to `createReducer()`.
 *
 * @public
 */


function createSlice(options) {
  var name = options.name,
      initialState = options.initialState;

  if (!name) {
    throw new Error('`name` is a required option for createSlice');
  }

  var reducers = options.reducers || {};

  var _ref = typeof options.extraReducers === 'undefined' ? [] : typeof options.extraReducers === 'function' ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
      _ref$ = _ref[0],
      extraReducers = _ref$ === void 0 ? {} : _ref$,
      _ref$2 = _ref[1],
      actionMatchers = _ref$2 === void 0 ? [] : _ref$2,
      _ref$3 = _ref[2],
      defaultCaseReducer = _ref$3 === void 0 ? undefined : _ref$3;

  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function (reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType$1(name, reducerName);
    var caseReducer;
    var prepareCallback;

    if ('reducer' in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }

    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });

  var finalCaseReducers = _extends({}, extraReducers, {}, sliceCaseReducersByType);

  var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
  return {
    name: name,
    reducer: reducer,
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName
  };
}

function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory() {
  function getInitialState(additionalState) {
    if (additionalState === void 0) {
      additionalState = {};
    }

    return Object.assign(getInitialEntityState(), additionalState);
  }

  return {
    getInitialState: getInitialState
  };
}

function createSelectorsFactory() {
  function getSelectors(selectState) {
    var selectIds = function selectIds(state) {
      return state.ids;
    };

    var selectEntities = function selectEntities(state) {
      return state.entities;
    };

    var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) {
      return ids.map(function (id) {
        return entities[id];
      });
    });

    var selectId = function selectId(_, id) {
      return id;
    };

    var selectById = function selectById(entities, id) {
      return entities[id];
    };

    var selectTotal = createDraftSafeSelector(selectIds, function (ids) {
      return ids.length;
    });

    if (!selectState) {
      return {
        selectIds: selectIds,
        selectEntities: selectEntities,
        selectAll: selectAll,
        selectTotal: selectTotal,
        selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
      };
    }

    var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
    return {
      selectIds: createDraftSafeSelector(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createDraftSafeSelector(selectState, selectAll),
      selectTotal: createDraftSafeSelector(selectState, selectTotal),
      selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
    };
  }

  return {
    getSelectors: getSelectors
  };
}

function createSingleArgumentStateOperator(mutator) {
  var operator = createStateOperator(function (_, state) {
    return mutator(state);
  });
  return function operation(state) {
    return operator(state, undefined);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg) {
      return isFSA(arg);
    }

    var runMutator = function runMutator(draft) {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };

    if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(state)) {
      // we must already be inside a `createNextState` call, likely because
      // this is being wrapped in `createReducer` or `createSlice`.
      // It's safe to just pass the draft to the mutator.
      runMutator(state); // since it's a draft, we'll just return it

      return state;
    } else {
      // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
      // than an Immutable<S>, and TypeScript cannot find out how to reconcile
      // these two types.
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, runMutator);
    }
  };
}

function selectIdValue(entity, selectId) {
  var key = selectId(entity);

  if ( true && key === undefined) {
    console.warn('The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
  }

  return key;
}

function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (key in state.entities) {
      return;
    }

    state.ids.push(key);
    state.entities[key] = entity;
  }

  function addManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      addOneMutably(entity, state);
    }
  }

  function setAllMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    state.ids = [];
    state.entities = {};
    addManyMutably(entities, state);
  }

  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }

  function removeManyMutably(keys, state) {
    var didMutate = false;
    keys.forEach(function (key) {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });

    if (didMutate) {
      state.ids = state.ids.filter(function (id) {
        return id in state.entities;
      });
    }
  }

  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }

  function takeNewKey(keys, update, state) {
    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    var hasNewKey = newKey !== update.id;

    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }

    state.entities[newKey] = updated;
    return hasNewKey;
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function updateManyMutably(updates, state) {
    var newKeys = {};
    var updatesPerEntity = {};
    updates.forEach(function (update) {
      // Only apply updates to entities that currently exist
      if (update.id in state.entities) {
        // If there are multiple updates to one entity, merge them together
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: _extends({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null, {}, update.changes)
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    var didMutateEntities = updates.length > 0;

    if (didMutateEntities) {
      var didMutateIds = updates.filter(function (update) {
        return takeNewKey(newKeys, update, state);
      }).length > 0;

      if (didMutateIds) {
        state.ids = state.ids.map(function (id) {
          return newKeys[id] || id;
        });
      }
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator2 = entities, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var entity = _ref2;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}

function createSortedStateAdapter(selectId, sort) {
  var _createUnsortedStateA = createUnsortedStateAdapter(selectId),
      removeOne = _createUnsortedStateA.removeOne,
      removeMany = _createUnsortedStateA.removeMany,
      removeAll = _createUnsortedStateA.removeAll;

  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }

  function addManyMutably(newModels, state) {
    if (!Array.isArray(newModels)) {
      newModels = Object.values(newModels);
    }

    var models = newModels.filter(function (model) {
      return !(selectIdValue(model, selectId) in state.entities);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function setAllMutably(models, state) {
    if (!Array.isArray(models)) {
      models = Object.values(models);
    }

    state.entities = {};
    state.ids = [];
    addManyMutably(models, state);
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function takeUpdatedModel(models, update, state) {
    if (!(update.id in state.entities)) {
      return false;
    }

    var original = state.entities[update.id];
    var updated = Object.assign({}, original, update.changes);
    var newKey = selectIdValue(updated, selectId);
    delete state.entities[update.id];
    models.push(updated);
    return newKey !== update.id;
  }

  function updateManyMutably(updates, state) {
    var models = [];
    updates.forEach(function (update) {
      return takeUpdatedModel(models, update, state);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(entities, state) {
    if (!Array.isArray(entities)) {
      entities = Object.values(entities);
    }

    var added = [];
    var updated = [];

    for (var _iterator = entities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var entity = _ref;
      var id = selectIdValue(entity, selectId);

      if (id in state.entities) {
        updated.push({
          id: id,
          changes: entity
        });
      } else {
        added.push(entity);
      }
    }

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }

      return false;
    }

    return true;
  }

  function merge(models, state) {
    models.sort(sort); // Insert/overwrite all new/updated

    models.forEach(function (model) {
      state.entities[selectId(model)] = model;
    });
    var allEntities = Object.values(state.entities);
    allEntities.sort(sort);
    var newSortedIds = allEntities.map(selectId);
    var ids = state.ids;

    if (!areArraysEqual(ids, newSortedIds)) {
      state.ids = newSortedIds;
    }
  }

  return {
    removeOne: removeOne,
    removeMany: removeMany,
    removeAll: removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}

/**
 *
 * @param options
 *
 * @public
 */

function createEntityAdapter(options) {
  if (options === void 0) {
    options = {};
  }

  var _sortComparer$selectI = _extends({
    sortComparer: false,
    selectId: function selectId(instance) {
      return instance.id;
    }
  }, options),
      selectId = _sortComparer$selectI.selectId,
      sortComparer = _sortComparer$selectI.sortComparer;

  var stateFactory = createInitialStateFactory();
  var selectorsFactory = createSelectorsFactory();
  var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  return _extends({
    selectId: selectId,
    sortComparer: sortComparer
  }, stateFactory, {}, selectorsFactory, {}, stateAdapter);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Borrowed from https://github.com/ai/nanoid/blob/3.0.2/non-secure/index.js
// This alphabet uses `A-Za-z0-9_-` symbols. A genetic algorithm helped
// optimize the gzip compression for this alphabet.
var urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';
/**
 *
 * @public
 */

var nanoid = function nanoid(size) {
  if (size === void 0) {
    size = 21;
  }

  var id = ''; // A compact alternative for `for (var i = 0; i < step; i++)`.

  var i = size;

  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
};

var commonProperties = ['name', 'message', 'stack', 'code'];

var RejectWithValue = function RejectWithValue(payload) {
  this.payload = payload;
  this.name = 'RejectWithValue';
  this.message = 'Rejected';
}; // Reworked from https://github.com/sindresorhus/serialize-error


var miniSerializeError = function miniSerializeError(value) {
  if (typeof value === 'object' && value !== null) {
    var simpleError = {};

    for (var _iterator = commonProperties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var property = _ref;

      if (typeof value[property] === 'string') {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};
/**
 *
 * @param typePrefix
 * @param payloadCreator
 * @param options
 *
 * @public
 */

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + '/fulfilled', function (result, requestId, arg) {
    return {
      payload: result,
      meta: {
        arg: arg,
        requestId: requestId,
        requestStatus: 'fulfilled'
      }
    };
  });
  var pending = createAction(typePrefix + '/pending', function (requestId, arg) {
    return {
      payload: undefined,
      meta: {
        arg: arg,
        requestId: requestId,
        requestStatus: 'pending'
      }
    };
  });
  var rejected = createAction(typePrefix + '/rejected', function (error, requestId, arg) {
    var rejectedWithValue = error instanceof RejectWithValue;
    var aborted = !!error && error.name === 'AbortError';
    var condition = !!error && error.name === 'ConditionError';
    return {
      payload: error instanceof RejectWithValue ? error.payload : undefined,
      error: (options && options.serializeError || miniSerializeError)(error || 'Rejected'),
      meta: {
        arg: arg,
        requestId: requestId,
        rejectedWithValue: rejectedWithValue,
        requestStatus: 'rejected',
        aborted: aborted,
        condition: condition
      }
    };
  });
  var displayedWarning = false;
  var AC = typeof AbortController !== 'undefined' ? AbortController :
  /*#__PURE__*/
  function () {
    function _class() {
      this.signal = {
        aborted: false,
        addEventListener: function addEventListener() {},
        dispatchEvent: function dispatchEvent() {
          return false;
        },
        onabort: function onabort() {},
        removeEventListener: function removeEventListener() {}
      };
    }

    var _proto = _class.prototype;

    _proto.abort = function abort() {
      if (true) {
        if (!displayedWarning) {
          displayedWarning = true;
          console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
        }
      }
    };

    return _class;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var requestId = nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener('abort', function () {
          return reject({
            name: 'AbortError',
            message: abortReason || 'Aborted'
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        try {
          var _temp3 = function _temp3(_result) {
            if (_exit2) return _result;
            // We dispatch the result action _after_ the catch, to avoid having any errors
            // here get swallowed by the try/catch block,
            // per https://twitter.com/dan_abramov/status/770914221638942720
            // and https://redux-toolkit.js.org/tutorials/advanced-tutorial#async-error-handling-logic-in-thunks
            var skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

            if (!skipDispatch) {
              dispatch(finalAction);
            }

            return finalAction;
          };

          var _exit2 = false;
          var finalAction;

          var _temp4 = _catch(function () {
            if (options && options.condition && options.condition(arg, {
              getState: getState,
              extra: extra
            }) === false) {
              // eslint-disable-next-line no-throw-literal
              throw {
                name: 'ConditionError',
                message: 'Aborted due to condition callback returning false.'
              };
            }

            started = true;
            dispatch(pending(requestId, arg));
            return Promise.resolve(Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch: dispatch,
              getState: getState,
              extra: extra,
              requestId: requestId,
              signal: abortController.signal,
              rejectWithValue: function rejectWithValue(value) {
                return new RejectWithValue(value);
              }
            })).then(function (result) {
              if (result instanceof RejectWithValue) {
                return rejected(result, requestId, arg);
              }

              return fulfilled(result, requestId, arg);
            })])).then(function (_Promise$race) {
              finalAction = _Promise$race;
            });
          }, function (err) {
            finalAction = rejected(err, requestId, arg);
          });

          return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
        } catch (e) {
          return Promise.reject(e);
        }
      }();

      return Object.assign(promise, {
        abort: abort,
        requestId: requestId,
        arg: arg
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}
/**
 * @public
 */

function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }

  if (action.error) {
    throw action.error;
  }

  return action.payload;
}

var hasMatchFunction = function hasMatchFunction(v) {
  return v && typeof v.match === 'function';
};

var matches = function matches(matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches any one of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */


function isAnyOf() {
  for (var _len = arguments.length, matchers = new Array(_len), _key = 0; _key < _len; _key++) {
    matchers[_key] = arguments[_key];
  }

  return function (action) {
    return matchers.some(function (matcher) {
      return matches(matcher, action);
    });
  };
}
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches all of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */

function isAllOf() {
  for (var _len2 = arguments.length, matchers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    matchers[_key2] = arguments[_key2];
  }

  return function (action) {
    return matchers.every(function (matcher) {
      return matches(matcher, action);
    });
  };
}
/**
 * @param action A redux action
 * @param validStatus An array of valid meta.requestStatus values
 *
 * @internal
 */

function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta) return false;
  var hasValidRequestId = typeof action.meta.requestId === 'string';
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}

function isAsyncThunkArray(a) {
  return typeof a[0] === 'function' && 'pending' in a[0] && 'fulfilled' in a[0] && 'rejected' in a[0];
}

function isPending() {
  for (var _len3 = arguments.length, asyncThunks = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    asyncThunks[_key3] = arguments[_key3];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['pending']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejected() {
  for (var _len4 = arguments.length, asyncThunks = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    asyncThunks[_key4] = arguments[_key4];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['rejected']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejectedWithValue() {
  for (var _len5 = arguments.length, asyncThunks = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    asyncThunks[_key5] = arguments[_key5];
  }

  var hasFlag = function hasFlag(action) {
    return action && action.meta && action.meta.rejectedWithValue;
  };

  if (asyncThunks.length === 0) {
    return function (action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }

  return function (action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}
function isFulfilled() {
  for (var _len6 = arguments.length, asyncThunks = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    asyncThunks[_key6] = arguments[_key6];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['fulfilled']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isAsyncThunkAction() {
  for (var _len7 = arguments.length, asyncThunks = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    asyncThunks[_key7] = arguments[_key7];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ['pending', 'fulfilled', 'rejected']);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }

  return function (action) {
    // note: this type will be correct because we have at least 1 asyncThunk
    var matchers = [];

    for (var _iterator = asyncThunks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var asyncThunk = _ref;
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }

    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

// we assume RTK will be used with React Native and other Proxy-less
// environments.  In addition, that's how Immer 4 behaved, and since
// we want to ship this in an RTK minor, we should keep the same behavior.

Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();




/***/ }),

/***/ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../node_modules/immer/dist/immer.esm.js":
/*!***********************************************!*\
  !*** ../node_modules/immer/dist/immer.esm.js ***!
  \***********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return sn; });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Z)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=nn(n);delete t[Q];for(var r=Z(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=tn[t];return r||n(18,t),r}function m(n,t){tn[n]||(tn[n]=t)}function _(){return false||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.g=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||b("ES5").S(e,t,o),o?(i[Q].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function E(n){n.P||(n.P=!0,n.l&&E(n.l))}function k(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").T(t,r):v(t)?b("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=rn;r&&(i=[e],o=en);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(t,c),u.I=!1}else e=N(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function N(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function T(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return true&&f(t),rn.get(t,n)},set:function(t){var r=this[Q]; true&&f(r),rn.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&E(r);break;case 4:o(r)&&E(r)}}}function o(n){for(var t=n.t,r=n.k,e=Z(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==Z(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.g&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=nn(t);delete o[Q];for(var u=Z(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,E(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,E(r))}));else if(5===c){if(a(r)&&(E(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function F(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++)"object"!=typeof(f=a(f,i[s]))&&n(15,i.join("/"));var v=o(f),p=e(r.value),l=i[i.length-1];switch(u){case"replace":switch(v){case 2:return f.set(l,p);case 3:n(16);default:return f[l]=p}case c:switch(v){case 1:return f.splice(l,0,p);case 2:return f.set(l,p);case 3:return f.add(p);default:return f[l]=p}case"remove":switch(v){case 1:return f.splice(l,1);case 2:return f.delete(l);case 3:return f.delete(r.value);default:return delete f[l]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.g&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,g:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),E(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),E(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),E(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),E(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),E(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),E(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{T:function(n,t){return new f(n,t)},F:function(n,t){return new c(n,t)}})}function J(){T(),C(),F()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n}},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,nn=Object.getOwnPropertyDescriptors||function(n){var t={};return Z(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},tn={},rn={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(k(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;k(n),E(n)}return n.o[t]=r,n.D[t]=!0,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,k(n),E(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},en={};i(rn,(function(n,t){en[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),en.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),rn.deleteProperty.call(this,t[0],r)},en.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),rn.set.call(this,t[0],r,e,t[0])};var on=function(){function e(n){this.O=B,this.N=!0,"boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return(r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=R(this,t,void 0),s=!0;try{a=e(c),s=!1}finally{s?g(f):O(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===H)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t)},i.produceWithPatches=function(n,t){var r,e,i=this;return"function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n},i.setUseProxies=function(t){t&&!B&&n(20),this.O=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),un=new on,an=un.produce,fn=un.produceWithPatches.bind(un),cn=un.setAutoFreeze.bind(un),sn=un.setUseProxies.bind(un),vn=un.applyPatches.bind(un),pn=un.createDraft.bind(un),ln=un.finishDraft.bind(un);/* harmony default export */ __webpack_exports__["default"] = (an);


/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/react-redux/es/components/Context.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/components/Context.js ***!
  \************************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "../node_modules/react-redux/es/components/Provider.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-redux/es/components/Provider.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/react-redux/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "../node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "../node_modules/react-redux/es/components/connectAdvanced.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-redux/es/components/connectAdvanced.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "../node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "../node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["reactReduxForwardedRef"]);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "../node_modules/react-redux/es/connect/connect.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-redux/es/connect/connect.js ***!
  \*********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "../node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "../node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "../node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "../node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "../node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "../node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "../node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \********************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "../node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "../node_modules/react-redux/es/connect/mapStateToProps.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \*****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "../node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "../node_modules/react-redux/es/connect/mergeProps.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/mergeProps.js ***!
  \************************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "../node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "../node_modules/react-redux/es/connect/selectorFactory.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/selectorFactory.js ***!
  \*****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "../node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "../node_modules/react-redux/es/connect/verifySubselectors.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "../node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "../node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!****************************************************************!*\
  !*** ../node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \****************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "../node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useDispatch.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useDispatch.js ***!
  \***********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "../node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useReduxContext.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \***************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useSelector.js":
/*!***********************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useSelector.js ***!
  \***********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "../node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "../node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestStoreState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(storeState);
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelector");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "../node_modules/react-redux/es/hooks/useStore.js":
/*!********************************************************!*\
  !*** ../node_modules/react-redux/es/hooks/useStore.js ***!
  \********************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "../node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "../node_modules/react-redux/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/react-redux/es/index.js ***!
  \***********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "../node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "../node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "../node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "../node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "../node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "../node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "../node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "../node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "../node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "../node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "../node_modules/react-redux/es/utils/Subscription.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/Subscription.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "../node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "../node_modules/react-redux/es/utils/batch.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-redux/es/utils/batch.js ***!
  \*****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "../node_modules/react-redux/es/utils/isPlainObject.js":
/*!*************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/isPlainObject.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "../node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \*******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "../node_modules/react-redux/es/utils/shallowEqual.js":
/*!************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/shallowEqual.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!*************************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "../node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "../node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "../node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "../node_modules/react-redux/es/utils/warning.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-redux/es/utils/warning.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/react-redux/node_modules/prop-types/checkPropTypes.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-redux/node_modules/prop-types/checkPropTypes.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/react-redux/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/react-redux/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/react-redux/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/react-redux/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/react-redux/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/react-redux/node_modules/prop-types/index.js":
/*!********************************************************************!*\
  !*** ../node_modules/react-redux/node_modules/prop-types/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/react-redux/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/react-redux/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/react-redux/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/redux-thunk/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/redux-thunk/es/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "../node_modules/redux/es/redux.js":
/*!*****************************************!*\
  !*** ../node_modules/redux/es/redux.js ***!
  \*****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "../node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "../node_modules/reselect/es/index.js":
/*!********************************************!*\
  !*** ../node_modules/reselect/es/index.js ***!
  \********************************************/
/*! exports provided: defaultMemoize, createSelectorCreator, createSelector, createStructuredSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorCreator", function() { return createSelectorCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStructuredSelector", function() { return createStructuredSelector; });
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "../node_modules/symbol-observable/es/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/symbol-observable/es/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "../node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../node_modules/symbol-observable/es/ponyfill.js":
/*!********************************************************!*\
  !*** ../node_modules/symbol-observable/es/ponyfill.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvaGVscGVyLWZ1bmN0aW9ucy9saWIvQ3JlYXRlR3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvaGVscGVyLWZ1bmN0aW9ucy9saWIvR2V0VGV4dFdpZHRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGdwYS1nZW1zdG9uZS9oZWxwZXItZnVuY3Rpb25zL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZ3JhcGgvbGliL0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZ3JhcGgvbGliL0xlZ2VuZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZ3JhcGgvbGliL1Bsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LWdyYXBoL2xpYi9TZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LWdyYXBoL2xpYi9TdG9yZS9MZWdlbmRTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZ3JhcGgvbGliL1N0b3JlL1N0b3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGdwYS1nZW1zdG9uZS9yZWFjdC1ncmFwaC9saWIvU3RvcmUvWEF4aXNTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZ3JhcGgvbGliL1N0b3JlL1lBeGlzU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LWdyYXBoL2xpYi9YQXhpcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZ3JhcGgvbGliL1lBeGlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGdwYS1nZW1zdG9uZS9yZWFjdC1ncmFwaC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kZXZ0b29sc0V4dGVuc2lvbi50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2lzUGxhaW5PYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3NlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uLi9zcmMvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9tYXBCdWlsZGVycy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZVJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVTbGljZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL2VudGl0eV9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL3N0YXRlX3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL3N0YXRlX2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbnRpdGllcy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL3Vuc29ydGVkX3N0YXRlX2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbnRpdGllcy9zb3J0ZWRfc3RhdGVfYWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VudGl0aWVzL2NyZWF0ZV9hZGFwdGVyLnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1hc3luYy10by1wcm9taXNlcy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbmFub2lkLnRzIiwid2VicGFjazovLy8uLi9zcmMvY3JlYXRlQXN5bmNUaHVuay50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RzSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL21hdGNoZXJzLnRzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3R5cGVzL3R5cGVzLWludGVybmFsLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvcGx1Z2lucy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvc2NvcGUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb3JlL2ZpbmFsaXplLnRzIiwid2VicGFjazovLy8uLi9zcmMvY29yZS9wcm94eS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvaW1tZXJDbGFzcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvcmUvY3VycmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BsdWdpbnMvZXM1LnRzIiwid2VicGFjazovLy8uLi9zcmMvcGx1Z2lucy9wYXRjaGVzLnRzIiwid2VicGFjazovLy8uLi9zcmMvcGx1Z2lucy9tYXBzZXQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wbHVnaW5zL2FsbC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ltbWVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMvZW52LnRzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlRGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VSZWR1eENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVN0b3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9iYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3JlZHV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yIiwic2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsIndyYXBwZWRTZWxlY3RvciIsInZhbHVlIiwicmVzdCIsImlzRHJhZnQiLCJjdXJyZW50IiwiY29tcG9zZVdpdGhEZXZUb29scyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbXBvc2UiLCJhcHBseSIsImlzUGxhaW5PYmplY3QiLCJwcm90byIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiZ2V0VGltZU1lYXN1cmVVdGlscyIsIm1heERlbGF5IiwiZm5OYW1lIiwiZWxhcHNlZCIsIm1lYXN1cmVUaW1lIiwiZm4iLCJzdGFydGVkIiwiRGF0ZSIsIm5vdyIsImZpbmlzaGVkIiwid2FybklmRXhjZWVkZWQiLCJjb25zb2xlIiwid2FybiIsIk1pZGRsZXdhcmVBcnJheSIsImNvbmNhdCIsImFyciIsInByZXBlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwicHJlZml4IiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwibWVzc2FnZSIsIkVycm9yIiwic3RyaW5naWZ5Iiwib2JqIiwic2VyaWFsaXplciIsImluZGVudCIsImRlY3ljbGVyIiwiSlNPTiIsImdldFNlcmlhbGl6ZSIsInN0YWNrIiwia2V5cyIsIl8iLCJzbGljZSIsImluZGV4T2YiLCJqb2luIiwia2V5IiwidGhpc1BvcyIsInNwbGljZSIsInB1c2giLCJJbmZpbml0eSIsImNhbGwiLCJpc0ltbXV0YWJsZURlZmF1bHQiLCJ0cmFja0Zvck11dGF0aW9ucyIsImlzSW1tdXRhYmxlIiwiaWdub3JlUGF0aHMiLCJ0cmFja2VkUHJvcGVydGllcyIsInRyYWNrUHJvcGVydGllcyIsImRldGVjdE11dGF0aW9ucyIsInBhdGgiLCJ0cmFja2VkIiwiY2hpbGRyZW4iLCJjaGlsZFBhdGgiLCJ0cmFja2VkUHJvcGVydHkiLCJzYW1lUGFyZW50UmVmIiwicHJldk9iaiIsInNhbWVSZWYiLCJOdW1iZXIiLCJpc05hTiIsIndhc011dGF0ZWQiLCJrZXlzVG9EZXRlY3QiLCJmb3JFYWNoIiwiaSIsInJlc3VsdCIsImNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSIsIm9wdGlvbnMiLCJpZ25vcmVkUGF0aHMiLCJ3YXJuQWZ0ZXIiLCJpZ25vcmUiLCJ0cmFjayIsImJpbmQiLCJnZXRTdGF0ZSIsInN0YXRlIiwidHJhY2tlciIsIm5leHQiLCJhY3Rpb24iLCJtZWFzdXJlVXRpbHMiLCJkaXNwYXRjaGVkQWN0aW9uIiwiaXNQbGFpbiIsInZhbCIsImZpbmROb25TZXJpYWxpemFibGVWYWx1ZSIsImlzU2VyaWFsaXphYmxlIiwiZ2V0RW50cmllcyIsImZvdW5kTmVzdGVkU2VyaWFsaXphYmxlIiwia2V5UGF0aCIsImVudHJpZXMiLCJoYXNJZ25vcmVkUGF0aHMiLCJwcm9wZXJ0eSIsIm5lc3RlZFZhbHVlIiwibmVzdGVkUGF0aCIsImNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSIsImlnbm9yZWRBY3Rpb25zIiwiaWdub3JlZEFjdGlvblBhdGhzIiwic3RvcmVBUEkiLCJ0eXBlIiwiZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSIsImVycm9yIiwiZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlIiwiaXNCb29sZWFuIiwieCIsImN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInRodW5rIiwiaW1tdXRhYmxlQ2hlY2siLCJzZXJpYWxpemFibGVDaGVjayIsIm1pZGRsZXdhcmVBcnJheSIsInRodW5rTWlkZGxld2FyZSIsIndpdGhFeHRyYUFyZ3VtZW50IiwiZXh0cmFBcmd1bWVudCIsImltbXV0YWJsZU9wdGlvbnMiLCJ1bnNoaWZ0Iiwic2VyaWFsaXphYmxlT3B0aW9ucyIsIklTX1BST0RVQ1RJT04iLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZGV2VG9vbHMiLCJwcmVsb2FkZWRTdGF0ZSIsImVuaGFuY2VycyIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwibWlkZGxld2FyZUVuaGFuY2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiZmluYWxDb21wb3NlIiwidHJhY2UiLCJzdG9yZUVuaGFuY2VycyIsImNvbXBvc2VkRW5oYW5jZXIiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZUFjdGlvbiIsInByZXBhcmVBY3Rpb24iLCJhY3Rpb25DcmVhdG9yIiwicHJlcGFyZWQiLCJwYXlsb2FkIiwibWV0YSIsInRvU3RyaW5nIiwibWF0Y2giLCJpc0ZTQSIsImV2ZXJ5IiwiaXNWYWxpZEtleSIsImdldFR5cGUiLCJleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayIsImJ1aWxkZXJDYWxsYmFjayIsImFjdGlvbnNNYXAiLCJhY3Rpb25NYXRjaGVycyIsImRlZmF1bHRDYXNlUmVkdWNlciIsImJ1aWxkZXIiLCJhZGRDYXNlIiwidHlwZU9yQWN0aW9uQ3JlYXRvciIsImFkZE1hdGNoZXIiLCJtYXRjaGVyIiwiYWRkRGVmYXVsdENhc2UiLCJjcmVhdGVSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwibWFwT3JCdWlsZGVyQ2FsbGJhY2siLCJmaW5hbEFjdGlvbk1hdGNoZXJzIiwiZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXIiLCJjYXNlUmVkdWNlcnMiLCJmaWx0ZXIiLCJtYXAiLCJjciIsInJlZHVjZSIsInByZXZpb3VzU3RhdGUiLCJjYXNlUmVkdWNlciIsImRyYWZ0IiwiaXNEcmFmdGFibGUiLCJjcmVhdGVOZXh0U3RhdGUiLCJhY3Rpb25LZXkiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJyZWR1Y2VyTmFtZXMiLCJzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZSIsInNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlIiwiYWN0aW9uQ3JlYXRvcnMiLCJyZWR1Y2VyTmFtZSIsIm1heWJlUmVkdWNlcldpdGhQcmVwYXJlIiwicHJlcGFyZUNhbGxiYWNrIiwicHJlcGFyZSIsImZpbmFsQ2FzZVJlZHVjZXJzIiwiYWN0aW9ucyIsImdldEluaXRpYWxFbnRpdHlTdGF0ZSIsImlkcyIsImVudGl0aWVzIiwiY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeSIsImdldEluaXRpYWxTdGF0ZSIsImFkZGl0aW9uYWxTdGF0ZSIsImFzc2lnbiIsImNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkiLCJnZXRTZWxlY3RvcnMiLCJzZWxlY3RTdGF0ZSIsInNlbGVjdElkcyIsInNlbGVjdEVudGl0aWVzIiwic2VsZWN0QWxsIiwiaWQiLCJzZWxlY3RJZCIsInNlbGVjdEJ5SWQiLCJzZWxlY3RUb3RhbCIsInNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyIsImNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvciIsIm11dGF0b3IiLCJvcGVyYXRvciIsImNyZWF0ZVN0YXRlT3BlcmF0b3IiLCJvcGVyYXRpb24iLCJhcmciLCJpc1BheWxvYWRBY3Rpb25Bcmd1bWVudCIsInJ1bk11dGF0b3IiLCJzZWxlY3RJZFZhbHVlIiwiZW50aXR5IiwiY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIiLCJhZGRPbmVNdXRhYmx5IiwiYWRkTWFueU11dGFibHkiLCJ2YWx1ZXMiLCJzZXRBbGxNdXRhYmx5IiwicmVtb3ZlT25lTXV0YWJseSIsInJlbW92ZU1hbnlNdXRhYmx5IiwiZGlkTXV0YXRlIiwicmVtb3ZlQWxsTXV0YWJseSIsInRha2VOZXdLZXkiLCJ1cGRhdGUiLCJvcmlnaW5hbCIsInVwZGF0ZWQiLCJjaGFuZ2VzIiwibmV3S2V5IiwiaGFzTmV3S2V5IiwidXBkYXRlT25lTXV0YWJseSIsInVwZGF0ZU1hbnlNdXRhYmx5IiwidXBkYXRlcyIsIm5ld0tleXMiLCJ1cGRhdGVzUGVyRW50aXR5IiwiZGlkTXV0YXRlRW50aXRpZXMiLCJkaWRNdXRhdGVJZHMiLCJ1cHNlcnRPbmVNdXRhYmx5IiwidXBzZXJ0TWFueU11dGFibHkiLCJhZGRlZCIsInJlbW92ZUFsbCIsImFkZE9uZSIsImFkZE1hbnkiLCJzZXRBbGwiLCJ1cGRhdGVPbmUiLCJ1cGRhdGVNYW55IiwidXBzZXJ0T25lIiwidXBzZXJ0TWFueSIsInJlbW92ZU9uZSIsInJlbW92ZU1hbnkiLCJjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIiLCJzb3J0IiwibmV3TW9kZWxzIiwibW9kZWxzIiwibW9kZWwiLCJtZXJnZSIsInRha2VVcGRhdGVkTW9kZWwiLCJhcmVBcnJheXNFcXVhbCIsImEiLCJiIiwiYWxsRW50aXRpZXMiLCJuZXdTb3J0ZWRJZHMiLCJjcmVhdGVFbnRpdHlBZGFwdGVyIiwic29ydENvbXBhcmVyIiwiaW5zdGFuY2UiLCJzdGF0ZUZhY3RvcnkiLCJzZWxlY3RvcnNGYWN0b3J5Iiwic3RhdGVBZGFwdGVyIiwidXJsQWxwaGFiZXQiLCJuYW5vaWQiLCJzaXplIiwiTWF0aCIsInJhbmRvbSIsImNvbW1vblByb3BlcnRpZXMiLCJSZWplY3RXaXRoVmFsdWUiLCJtaW5pU2VyaWFsaXplRXJyb3IiLCJzaW1wbGVFcnJvciIsIlN0cmluZyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJ0eXBlUHJlZml4IiwicGF5bG9hZENyZWF0b3IiLCJmdWxmaWxsZWQiLCJyZXF1ZXN0SWQiLCJyZXF1ZXN0U3RhdHVzIiwicGVuZGluZyIsInJlamVjdGVkIiwicmVqZWN0ZWRXaXRoVmFsdWUiLCJhYm9ydGVkIiwic2VyaWFsaXplRXJyb3IiLCJkaXNwbGF5ZWRXYXJuaW5nIiwiQUMiLCJBYm9ydENvbnRyb2xsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsIm9uYWJvcnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWJvcnQiLCJpbmZvIiwiZGlzcGF0Y2giLCJleHRyYSIsImFib3J0Q29udHJvbGxlciIsImFib3J0UmVhc29uIiwiYWJvcnRlZFByb21pc2UiLCJQcm9taXNlIiwicmVqZWN0Iiwic2lnbmFsIiwicmVhc29uIiwicHJvbWlzZSIsInNraXBEaXNwYXRjaCIsImRpc3BhdGNoQ29uZGl0aW9uUmVqZWN0aW9uIiwiZmluYWxBY3Rpb24iLCJyYWNlIiwicmVzb2x2ZSIsInJlamVjdFdpdGhWYWx1ZSIsInRoZW4iLCJlcnIiLCJ1bndyYXBSZXN1bHQiLCJoYXNNYXRjaEZ1bmN0aW9uIiwidiIsIm1hdGNoZXMiLCJpc0FueU9mIiwibWF0Y2hlcnMiLCJzb21lIiwiaXNBbGxPZiIsImhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhIiwidmFsaWRTdGF0dXMiLCJoYXNWYWxpZFJlcXVlc3RJZCIsImhhc1ZhbGlkUmVxdWVzdFN0YXR1cyIsImlzQXN5bmNUaHVua0FycmF5IiwiaXNQZW5kaW5nIiwiYXN5bmNUaHVua3MiLCJhc3luY1RodW5rIiwiY29tYmluZWRNYXRjaGVyIiwiaXNSZWplY3RlZCIsImlzUmVqZWN0ZWRXaXRoVmFsdWUiLCJoYXNGbGFnIiwiaXNGdWxmaWxsZWQiLCJpc0FzeW5jVGh1bmtBY3Rpb24iLCJlbmFibGVFUzUiLCJkaWUiLCJhcmdzIiwiZSIsImVycm9ycyIsIm1zZyIsInMiLCJEUkFGVF9TVEFURSIsInByb3RvdHlwZSIsIkRSQUZUQUJMRSIsImNvbnN0cnVjdG9yIiwiaXNNYXAiLCJpc1NldCIsImJhc2VfIiwiZWFjaCIsIml0ZXIiLCJlbnVtZXJhYmxlT25seSIsImdldEFyY2h0eXBlIiwib3duS2V5cyIsImVudHJ5IiwiaW5kZXgiLCJ0aGluZyIsInR5cGVfIiwiaGFzIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiZ2V0Iiwic2V0IiwicHJvcE9yT2xkVmFsdWUiLCJ0IiwiZGVsZXRlIiwiYWRkIiwiaXMiLCJ5IiwidGFyZ2V0IiwiaGFzTWFwIiwiTWFwIiwiaGFzU2V0IiwiU2V0IiwibGF0ZXN0IiwiY29weV8iLCJzaGFsbG93Q29weSIsImJhc2UiLCJkZXNjcmlwdG9ycyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZXNjIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiY3JlYXRlIiwiZnJlZXplIiwiZGVlcCIsImlzRnJvemVuIiwiY2xlYXIiLCJkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnMiLCJnZXRQbHVnaW4iLCJwbHVnaW5LZXkiLCJwbHVnaW4iLCJwbHVnaW5zIiwibG9hZFBsdWdpbiIsImltcGxlbWVudGF0aW9uIiwiZ2V0Q3VycmVudFNjb3BlIiwiY3VycmVudFNjb3BlIiwidXNlUGF0Y2hlc0luU2NvcGUiLCJzY29wZSIsInBhdGNoTGlzdGVuZXIiLCJwYXRjaGVzXyIsImludmVyc2VQYXRjaGVzXyIsInBhdGNoTGlzdGVuZXJfIiwicmV2b2tlU2NvcGUiLCJsZWF2ZVNjb3BlIiwiZHJhZnRzXyIsInJldm9rZURyYWZ0IiwicGFyZW50XyIsImVudGVyU2NvcGUiLCJpbW1lciIsImltbWVyXyIsImNhbkF1dG9GcmVlemVfIiwidW5maW5hbGl6ZWREcmFmdHNfIiwicmV2b2tlXyIsInJldm9rZWRfIiwicHJvY2Vzc1Jlc3VsdCIsImJhc2VEcmFmdCIsImlzUmVwbGFjZWQiLCJ1c2VQcm94aWVzXyIsIndpbGxGaW5hbGl6ZUVTNV8iLCJtb2RpZmllZF8iLCJmaW5hbGl6ZSIsIm1heWJlRnJlZXplIiwiZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfIiwiTk9USElORyIsInJvb3RTY29wZSIsImNoaWxkVmFsdWUiLCJmaW5hbGl6ZVByb3BlcnR5Iiwic2NvcGVfIiwiZmluYWxpemVkXyIsImRyYWZ0XyIsImdlbmVyYXRlUGF0Y2hlc18iLCJwYXJlbnRTdGF0ZSIsInRhcmdldE9iamVjdCIsInJvb3RQYXRoIiwicmVzIiwiYXNzaWduZWRfIiwiYXV0b0ZyZWV6ZV8iLCJwZWVrIiwiZ2V0RGVzY3JpcHRvckZyb21Qcm90byIsInNvdXJjZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIm1hcmtDaGFuZ2VkIiwicHJlcGFyZUNvcHkiLCJjcmVhdGVQcm94eSIsInBhcmVudCIsInByb3h5TWFwXyIsInByb3h5U2V0XyIsImlzTWFudWFsXyIsInRyYXBzIiwib2JqZWN0VHJhcHMiLCJhcnJheVRyYXBzIiwiUHJveHkiLCJyZXZvY2FibGUiLCJyZXZva2UiLCJwcm94eSIsImNyZWF0ZVByb3h5UHJveHkiLCJjcmVhdGVFUzVQcm94eV8iLCJjdXJyZW50SW1wbCIsImNvcHkiLCJhcmNoVHlwZSIsImhhc0NoYW5nZXNfIiwiY29weUhlbHBlciIsImZyb20iLCJwcm94eVByb3BlcnR5IiwidGhpcyIsImFzc2VydFVucmV2b2tlZCIsIm1hcmtDaGFuZ2VzU3dlZXAiLCJkcmFmdHMiLCJoYXNBcnJheUNoYW5nZXMiLCJoYXNPYmplY3RDaGFuZ2VzIiwiYmFzZVZhbHVlIiwiYmFzZUlzRHJhZnQiLCJkZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVFUzVEcmFmdCIsIm1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkiLCJvYmplY3QiLCJtaW4iLCJlbmFibGVQYXRjaGVzIiwiZGVlcENsb25lUGF0Y2hWYWx1ZSIsImNsb25lZCIsImNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkIiwiQUREIiwiYXBwbHlQYXRjaGVzXyIsInBhdGNoZXMiLCJwYXRjaCIsIm9wIiwiYmFzZVBhdGgiLCJpbnZlcnNlUGF0Y2hlcyIsImFzc2lnbmVkVmFsdWUiLCJvcmlnVmFsdWUiLCJnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQiLCJnZW5lcmF0ZUFycmF5UGF0Y2hlcyIsImdlbmVyYXRlU2V0UGF0Y2hlcyIsInJvb3RTdGF0ZSIsInJlcGxhY2VtZW50IiwiZW5hYmxlTWFwU2V0IiwiX19leHRlbmRzIiwiZCIsIl9fIiwiZXh0ZW5kU3RhdGljcyIsInByZXBhcmVNYXBDb3B5IiwicHJlcGFyZVNldENvcHkiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJEcmFmdE1hcCIsImNiIiwidGhpc0FyZyIsIl92YWx1ZSIsIl90aGlzIiwiaXRlcmF0b3IiLCJpdGVyYXRvclN5bWJvbCIsIl90aGlzMiIsInIiLCJkb25lIiwiX3RoaXMzIiwiRHJhZnRTZXQiLCJlbmFibGVBbGxQbHVnaW5zIiwiY2FzdERyYWZ0IiwiY2FzdEltbXV0YWJsZSIsImhhc1N5bWJvbCIsIlN5bWJvbCIsImhhc1Byb3hpZXMiLCJSZWZsZWN0IiwiZm9yIiwiZGF0YSIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJfZGVzYyRnZXQiLCJyZWFkUHJvcEZyb21Qcm90byIsImN1cnJlbnRTdGF0ZSIsImRlbGV0ZVByb3BlcnR5Iiwib3duZXIiLCJwYXJzZUludCIsIkltbWVyIiwiY29uZmlnIiwidXNlUHJveGllcyIsInNldFVzZVByb3hpZXMiLCJhdXRvRnJlZXplIiwic2V0QXV0b0ZyZWV6ZSIsInByb2R1Y2UiLCJwcm9kdWNlV2l0aFBhdGNoZXMiLCJyZWNpcGUiLCJkZWZhdWx0QmFzZSIsInNlbGYiLCJoYXNFcnJvciIsImFyZzEiLCJhcmcyIiwiaXAiLCJjcmVhdGVEcmFmdCIsImZpbmlzaERyYWZ0IiwiYXBwbHlQYXRjaGVzIiwiYXBwbHlQYXRjaGVzSW1wbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQyxtREFBVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsaUhBQTJCO0FBQ3RELENBQUMsTUFBTSxFQUlOOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSxvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNuQnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsSUFBSTtBQUNmLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxXQUFXLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLElBQUk7QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWUsU0FBUztBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZUFBZTtBQUNmOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE9BQU8seURBQVk7QUFDeEI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsUUFBUSx5REFBWTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxhQUFhOztBQUVoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0U7QUFDcEU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EO0FBQ3BEOztBQUVBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0EsNEVBQTRFLGFBQWE7QUFDekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksS0FBcUM7QUFDekM7QUFDQTs7QUFFZ0k7Ozs7Ozs7Ozs7Ozs7QUN0cEJoSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUCw4RkFBOEYsYUFBYTtBQUMzRztBQUNBOztBQUVBO0FBQ0EsdUVBQXVFLGVBQWU7QUFDdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPOztBQUVBO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHdFQUF3RSxlQUFlO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFDcUM7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLFVBQVUsSUFBNkI7QUFDeEM7QUFDQSxDQUFDLE1BQU0sRUFFTjs7QUFFRCxhQUFhLDREQUFRO0FBQ04scUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUNsQnRCO0FBQUE7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBDcmVhdGVHdWlkLnRzIC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vICBcbi8vICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvaG93LXRvLWNyZWF0ZS1hLWd1aWQtdXVpZFxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8wNC8yMDIxIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlR3VpZCA9IHZvaWQgMDtcbmZ1bmN0aW9uIENyZWF0ZUd1aWQoKSB7XG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgICB2YXIgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlR3VpZCA9IENyZWF0ZUd1aWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIEdldFRleHRXaWR0aC50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8wNy8yMDIxIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0VGV4dFdpZHRoID0gdm9pZCAwO1xuZnVuY3Rpb24gR2V0VGV4dFdpZHRoKGZvbnQsIGZvbnRTaXplLCB3b3JkKSB7XG4gICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHRleHQuc3R5bGUuZm9udCA9IGZvbnQ7XG4gICAgdGV4dC5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIHRleHQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIHRleHQuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgdGV4dC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGV4dC5zdHlsZS53aGl0ZVNwYWNlID0gJ25vLXdyYXAnO1xuICAgIHRleHQuaW5uZXJIVE1MID0gd29yZDtcbiAgICB2YXIgd2lkdGggPSBNYXRoLmNlaWwodGV4dC5jbGllbnRXaWR0aCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnRzLkdldFRleHRXaWR0aCA9IEdldFRleHRXaWR0aDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRUZXh0V2lkdGggPSBleHBvcnRzLkNyZWF0ZUd1aWQgPSB2b2lkIDA7XG52YXIgQ3JlYXRlR3VpZF8xID0gcmVxdWlyZShcIi4vQ3JlYXRlR3VpZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNyZWF0ZUd1aWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENyZWF0ZUd1aWRfMS5DcmVhdGVHdWlkOyB9IH0pO1xudmFyIEdldFRleHRXaWR0aF8xID0gcmVxdWlyZShcIi4vR2V0VGV4dFdpZHRoXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2V0VGV4dFdpZHRoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZXRUZXh0V2lkdGhfMS5HZXRUZXh0V2lkdGg7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIEhlbHBlci50cyAtIEdidGNcbi8vXG4vLyAgQ29weWVuZCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgZW5kcyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weWVuZCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDAxLzEyLzIwMjEgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRTY2FsZSA9IHZvaWQgMDtcbnZhciBkM18xID0gcmVxdWlyZShcImQzXCIpO1xuZnVuY3Rpb24gR2V0U2NhbGUodHlwZSwgc3RhcnQsIGVuZCwgZG9tYWluKSB7XG4gICAgaWYgKHR5cGUgPT09ICdMaW5lYXInKVxuICAgICAgICByZXR1cm4gZDNfMS5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N0YXJ0LCBlbmRdKS5kb21haW4oZG9tYWluKTtcbiAgICBlbHNlIGlmICh0eXBlID09PSAnTG9nJylcbiAgICAgICAgcmV0dXJuIGQzXzEuc2NhbGVMb2coKS5yYW5nZVJvdW5kKFtzdGFydCwgZW5kXSkuZG9tYWluKGRvbWFpbik7XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ09yZGluYWwnKVxuICAgICAgICByZXR1cm4gZDNfMS5zY2FsZU9yZGluYWwoKS5kb21haW4oZG9tYWluKS5yYW5nZShkb21haW4ubWFwKGZ1bmN0aW9uICh0aWNrLCBpKSB7IHJldHVybiBpICogKGVuZCAtIHN0YXJ0KSAvIGRvbWFpbi5sZW5ndGggKyBzdGFydCArIChlbmQgLSBzdGFydCkgLyBkb21haW4ubGVuZ3RoIC8gMjsgfSkpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGQzXzEuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdGFydCwgZW5kXSkuZG9tYWluKGRvbWFpbik7XG59XG5leHBvcnRzLkdldFNjYWxlID0gR2V0U2NhbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIExlZ2VuZC50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8wNy8yMDIxIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciByZWFjdF9yZWR1eF8xID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xudmFyIExlZ2VuZFNsaWNlXzEgPSByZXF1aXJlKFwiLi9TdG9yZS9MZWdlbmRTbGljZVwiKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBQbG90XzEgPSByZXF1aXJlKFwiLi9QbG90XCIpO1xuZnVuY3Rpb24gTGVnZW5kKHByb3BzKSB7XG4gICAgdmFyIF9hID0gUmVhY3QudXNlQ29udGV4dChQbG90XzEuUGxvdENvbnRleHQpLCBzdmdXaWR0aCA9IF9hLnN2Z1dpZHRoLCBsZWZ0ID0gX2EubGVmdCwgcmlnaHQgPSBfYS5yaWdodCwgdG9wID0gX2EudG9wLCBib3R0b20gPSBfYS5ib3R0b20sIG1hcmdpbiA9IF9hLm1hcmdpbjtcbiAgICB2YXIgZGlzcGF0Y2ggPSByZWFjdF9yZWR1eF8xLnVzZURpc3BhdGNoKCk7XG4gICAgdmFyIGxlZ2VuZCA9IHJlYWN0X3JlZHV4XzEudXNlU2VsZWN0b3IoTGVnZW5kU2xpY2VfMS5TZWxlY3RMZWdlbmQpO1xuICAgIGlmIChwcm9wcy5MYXlvdXQgPT09ICdob3Jpem9udGFsJyAmJiAnYm90dG9tbGVmdCcpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIgKyAobWFyZ2luLmxlZnQgKyAxMCkgKyBcIixcIiArIChib3R0b20gKyBtYXJnaW4uYm90dG9tIC8gMikgKyBcIilcIiB9LCBsZWdlbmQubWFwKGZ1bmN0aW9uIChsLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IGtleTogaW5kZXgsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIgKyAocHJvcHMuU2hvd0xhYmVscyA9PT0gdHJ1ZSA/IChsZWdlbmQubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLldpZHRoOyB9KS5zbGljZSgwLCBpbmRleCkubGVuZ3RoID09PSAwID8gMCA6IGxlZ2VuZC5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEuV2lkdGggKyAzMDsgfSkuc2xpY2UoMCwgaW5kZXgpLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSArIGI7IH0pKSA6IGluZGV4ICogMjApICsgXCIsXCIgKyAwICsgXCIpXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHN0cm9rZTogJ2JsYWNrJywgc3R5bGU6IHsgY3Vyc29yOiAncG9pbnRlcicsIG9wYWNpdHk6IChsLlNob3cgPyAxIDogMC4yNSkgfSwgd2lkdGg6IDE1LCBoZWlnaHQ6IDE1LCBmaWxsOiBsLkNvbG9yLCBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKExlZ2VuZFNsaWNlXzEuU2hvdyh7IEluZGV4OiBpbmRleCwgU2hvdzogIWwuU2hvdyB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIGwuTGFiZWwpKSxcbiAgICAgICAgICAgICAgICBwcm9wcy5TaG93TGFiZWxzID09PSB0cnVlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRcIiwgeyBmaWxsOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcInNtYWxsXCIsIHk6IDEzLCB4OiAyMCB9LCBsLkxhYmVsKSA6IG51bGwpKTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IExlZ2VuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxvdENvbnRleHQgPSB2b2lkIDA7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBQbG90LnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDEyLzMwLzIwMjAgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxudmFyIHJlYWN0X3JlZHV4XzEgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG52YXIgWUF4aXNTbGljZV8xID0gcmVxdWlyZShcIi4vU3RvcmUvWUF4aXNTbGljZVwiKTtcbnZhciBYQXhpc1NsaWNlXzEgPSByZXF1aXJlKFwiLi9TdG9yZS9YQXhpc1NsaWNlXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFN0b3JlXzEgPSByZXF1aXJlKFwiLi9TdG9yZS9TdG9yZVwiKTtcbnZhciBYQXhpc18xID0gcmVxdWlyZShcIi4vWEF4aXNcIik7XG52YXIgU3ZnU3R5bGUgPSB7XG4gICAgZmlsbDogJ25vbmUnLFxuICAgIHNoYXBlUmVuZGVyaW5nOiAnY3Jpc3BFZGdlcycsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIFdlYmtpdFRvdWNoQ2FsbG91dDogJ25vbmUnLFxuICAgIFdlYmtpdFVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBLaHRtbFVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBNb3pVc2VyU2VsZWN0OiAnbm9uZScsXG4gICAgbXNVc2VyU2VsZWN0OiAnbm9uZSdcbn07XG52YXIgUGxvdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgICBtYXJnaW46IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICAgc3ZnV2lkdGg6IDAsXG4gICAgc3ZnSGVpZ2h0OiAwLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbn0pO1xuZXhwb3J0cy5QbG90Q29udGV4dCA9IFBsb3RDb250ZXh0O1xudmFyIFBsb3QgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIHByb3BzLk1hcmdpbi5sZWZ0IC0gcHJvcHMuTWFyZ2luLnJpZ2h0O1xuICAgIHZhciBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBwcm9wcy5NYXJnaW4udG9wIC0gcHJvcHMuTWFyZ2luLmJvdHRvbTtcbiAgICB2YXIgdmFsdWUgPSB7XG4gICAgICAgIG1hcmdpbjogcHJvcHMuTWFyZ2luLFxuICAgICAgICBzdmdXaWR0aDogc3ZnV2lkdGgsXG4gICAgICAgIHN2Z0hlaWdodDogc3ZnSGVpZ2h0LFxuICAgICAgICB0b3A6IHByb3BzLk1hcmdpbi50b3AsXG4gICAgICAgIGJvdHRvbTogc3ZnSGVpZ2h0LFxuICAgICAgICBsZWZ0OiBwcm9wcy5NYXJnaW4ubGVmdCxcbiAgICAgICAgcmlnaHQ6IHN2Z1dpZHRoICsgcHJvcHMuTWFyZ2luLmxlZnQsXG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGxvdENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHZhbHVlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVhY3RfcmVkdXhfMS5Qcm92aWRlciwgeyBzdG9yZTogU3RvcmVfMS5kZWZhdWx0IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzZXRCdXR0b24sIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JhcGgsIF9fYXNzaWduKHt9LCBwcm9wcykpKSkpKTtcbn07XG52YXIgR3JhcGggPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxuICAgIHZhciBkaXNwYXRjaCA9IHJlYWN0X3JlZHV4XzEudXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VDb250ZXh0KFBsb3RDb250ZXh0KSwgc3ZnV2lkdGggPSBfYS5zdmdXaWR0aCwgc3ZnSGVpZ2h0ID0gX2Euc3ZnSGVpZ2h0LCB0b3AgPSBfYS50b3AsIGxlZnQgPSBfYS5sZWZ0LCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b20sIG1hcmdpbiA9IF9hLm1hcmdpbjtcbiAgICBmdW5jdGlvbiBoYW5kbGVab29tKGV2dCkge1xuICAgICAgICBpZiAoIXByb3BzLlpvb20pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBtdWx0aXBsaWVyID0gMS4yNTtcbiAgICAgICAgLy8gZXZlbnQuZGVsdGFZIHBvc2l0aXZlIGlzIHdoZWVsIGRvd24gb3Igb3V0IGFuZCBuZWdhdGl2ZSBpcyB3aGVlbCB1cCBvciBpblxuICAgICAgICBpZiAoZXZ0LmRlbHRhWSA8IDApXG4gICAgICAgICAgICBtdWx0aXBsaWVyID0gMC43NTtcbiAgICAgICAgZGlzcGF0Y2goWUF4aXNTbGljZV8xLlpvb20oeyBQb2ludDogZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFksIE11bHRpcGxpZXI6IG11bHRpcGxpZXIgfSkpO1xuICAgICAgICBkaXNwYXRjaChYQXhpc1NsaWNlXzEuWm9vbSh7IFBvaW50OiBldnQubmF0aXZlRXZlbnQub2Zmc2V0WCwgTXVsdGlwbGllcjogbXVsdGlwbGllciB9KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZURyYWcoZXZ0KSB7XG4gICAgICAgIGlmICghcHJvcHMuRHJhZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChldnQubmF0aXZlRXZlbnQub2Zmc2V0WCA8IHByb3BzLk1hcmdpbi5sZWZ0IHx8IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRYID4gc3ZnV2lkdGggKyBwcm9wcy5NYXJnaW4ubGVmdClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZIDwgcHJvcHMuTWFyZ2luLnRvcCB8fCBldnQubmF0aXZlRXZlbnQub2Zmc2V0WSA+IHN2Z0hlaWdodCArIHByb3BzLk1hcmdpbi50b3ApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGV2dC5wZXJzaXN0KCk7XG4gICAgICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgcmVmLmN1cnJlbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFlBeGlzU2xpY2VfMS5EcmFnKHsgQ2xpY2s6IGV2dC5uYXRpdmVFdmVudC5vZmZzZXRZIC8gMiwgRHJhZzogZS5vZmZzZXRZIC8gMiB9KSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goWEF4aXNTbGljZV8xLkRyYWcoeyBDbGljazogZXZ0Lm5hdGl2ZUV2ZW50Lm9mZnNldFggLyAyLCBEcmFnOiBlLm9mZnNldFggLyAyIH0pKTtcbiAgICAgICAgICAgIH0sIDgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wRHJhZyhldnQpIHtcbiAgICAgICAgaWYgKCFwcm9wcy5EcmFnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVmLmN1cnJlbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBYQXhpc05vdEV4aXN0cygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi50eXBlLm5hbWUgIT09ICdYQXhpcycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCgoX2EgPSBjaGlsZHJlbi5maW5kKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLnR5cGUubmFtZSA9PT0gJ1hBeGlzJzsgfSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50eXBlLm5hbWUpICE9PSAnWEF4aXMnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgcmVmOiByZWYsIHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHN0eWxlOiBTdmdTdHlsZSwgb25XaGVlbDogaGFuZGxlWm9vbSwgb25Nb3VzZURvd246IGhhbmRsZURyYWcsIG9uTW91c2VVcDogc3RvcERyYWcgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiAwLCB5OiAwLCB3aWR0aDogcHJvcHMuV2lkdGgsIGhlaWdodDogcHJvcHMuTWFyZ2luLnRvcCwgZmlsbDogJ3doaXRlJywgc3Ryb2tlOiAnd2hpdGUnIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHg6IDAsIHk6IHByb3BzLkhlaWdodCAtIHByb3BzLk1hcmdpbi5ib3R0b20gLSBwcm9wcy5NYXJnaW4udG9wLCB3aWR0aDogcHJvcHMuV2lkdGgsIGhlaWdodDogcHJvcHMuTWFyZ2luLmJvdHRvbSArIHByb3BzLk1hcmdpbi50b3AsIGZpbGw6ICd3aGl0ZScsIHN0cm9rZTogJ3doaXRlJyB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiAwLCB5OiAwLCB3aWR0aDogcHJvcHMuTWFyZ2luLmxlZnQsIGhlaWdodDogcHJvcHMuSGVpZ2h0LCBmaWxsOiAnd2hpdGUnLCBzdHJva2U6ICd3aGl0ZScgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogcHJvcHMuV2lkdGggLSBwcm9wcy5NYXJnaW4ucmlnaHQsIHk6IDAsIHdpZHRoOiBwcm9wcy5NYXJnaW4ucmlnaHQsIGhlaWdodDogcHJvcHMuSGVpZ2h0LCBmaWxsOiAnd2hpdGUnLCBzdHJva2U6ICd3aGl0ZScgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgc3Ryb2tlOiAnYmxhY2snLCBkOiBcIk0gXCIgKyBwcm9wcy5NYXJnaW4ubGVmdCArIFwiIFwiICsgcHJvcHMuTWFyZ2luLnRvcCArIFwiIEggXCIgKyAoc3ZnV2lkdGggKyBwcm9wcy5NYXJnaW4ubGVmdCkgKyBcIiBWIFwiICsgc3ZnSGVpZ2h0ICsgXCIgSCBcIiArIHByb3BzLk1hcmdpbi5sZWZ0ICsgXCIgViBcIiArIHByb3BzLk1hcmdpbi50b3AgfSksXG4gICAgICAgIFhBeGlzTm90RXhpc3RzKCkgP1xuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChYQXhpc18xLmRlZmF1bHQsIHsgTGFiZWw6ICcnLCBUeXBlOiAnTGluZWFyJywgVGlja051bWJlcjogMTAgfSwgcHJvcHMuY2hpbGRyZW4pXG4gICAgICAgICAgICA6IHByb3BzLmNoaWxkcmVuKSk7XG59O1xudmFyIFJlc2V0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxuICAgIHZhciBkaXNwYXRjaCA9IHJlYWN0X3JlZHV4XzEudXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgeEhpZGVSZXNldCA9IHJlYWN0X3JlZHV4XzEudXNlU2VsZWN0b3IoWEF4aXNTbGljZV8xLlNlbGVjdFhBeGVzUmVzZXQpO1xuICAgIHZhciB5SGlkZVJlc2V0ID0gcmVhY3RfcmVkdXhfMS51c2VTZWxlY3RvcihZQXhpc1NsaWNlXzEuU2VsZWN0WUF4ZXNSZXNldCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgc3R5bGU6IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMjAsIHJpZ2h0OiAyNSwgb3BhY2l0eTogMC41IH0sIGNsYXNzTmFtZTogXCJidG5cIiwgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goWUF4aXNTbGljZV8xLlJlc2V0Wm9vbSgpKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKFhBeGlzU2xpY2VfMS5SZXNldFpvb20oKSk7XG4gICAgICAgIH0sIGhpZGRlbjogeEhpZGVSZXNldCAmJiB5SGlkZVJlc2V0IH0sIFwiUmVzZXRcIikpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBsb3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFNlcmllcy50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAxMi8zMS8yMDIwIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBkM18xID0gcmVxdWlyZShcImQzXCIpO1xudmFyIFhBeGlzXzEgPSByZXF1aXJlKFwiLi9YQXhpc1wiKTtcbnZhciBQbG90XzEgPSByZXF1aXJlKFwiLi9QbG90XCIpO1xudmFyIExlZ2VuZFNsaWNlXzEgPSByZXF1aXJlKFwiLi9TdG9yZS9MZWdlbmRTbGljZVwiKTtcbnZhciBZQXhpc18xID0gcmVxdWlyZShcIi4vWUF4aXNcIik7XG52YXIgWUF4aXNTbGljZV8xID0gcmVxdWlyZShcIi4vU3RvcmUvWUF4aXNTbGljZVwiKTtcbnZhciBYQXhpc1NsaWNlXzEgPSByZXF1aXJlKFwiLi9TdG9yZS9YQXhpc1NsaWNlXCIpO1xudmFyIGhlbHBlcl9mdW5jdGlvbnNfMSA9IHJlcXVpcmUoXCJAZ3BhLWdlbXN0b25lL2hlbHBlci1mdW5jdGlvbnNcIik7XG52YXIgSGVscGVyXzEgPSByZXF1aXJlKFwiLi9IZWxwZXJcIik7XG5mdW5jdGlvbiBTZXJpZXMocHJvcHMpIHtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VDb250ZXh0KFBsb3RfMS5QbG90Q29udGV4dCksIHN2Z1dpZHRoID0gX2Euc3ZnV2lkdGgsIGxlZnQgPSBfYS5sZWZ0LCByaWdodCA9IF9hLnJpZ2h0LCB0b3AgPSBfYS50b3AsIGJvdHRvbSA9IF9hLmJvdHRvbSwgbWFyZ2luID0gX2EubWFyZ2luO1xuICAgIHZhciB5R3VpZCA9IFJlYWN0LnVzZUNvbnRleHQoWUF4aXNfMS5ZQXhpc0NvbnRleHQpO1xuICAgIHZhciB4R3VpZCA9IFJlYWN0LnVzZUNvbnRleHQoWEF4aXNfMS5YQXhpc0NvbnRleHQpO1xuICAgIHZhciBkaXNwYXRjaCA9IHJlYWN0X3JlZHV4XzEudXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgc2VyaWVzID0gcmVhY3RfcmVkdXhfMS51c2VTZWxlY3RvcihmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIExlZ2VuZFNsaWNlXzEuU2VsZWN0TGVnZW5kU2VyaWVzKHN0YXRlLCBwcm9wcy5MYWJlbCk7IH0pO1xuICAgIHZhciB5QXhpcyA9IHJlYWN0X3JlZHV4XzEudXNlU2VsZWN0b3IoZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBZQXhpc1NsaWNlXzEuU2VsZWN0WUF4aXMoc3RhdGUsIHlHdWlkKTsgfSk7XG4gICAgdmFyIHhBeGlzID0gcmVhY3RfcmVkdXhfMS51c2VTZWxlY3RvcihmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIFhBeGlzU2xpY2VfMS5TZWxlY3RYQXhpcyhzdGF0ZSwgeEd1aWQpOyB9KTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2VyaWVzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkaXNwYXRjaChMZWdlbmRTbGljZV8xLkFkZCh7IExhYmVsOiBwcm9wcy5MYWJlbCwgQ29sb3I6IHByb3BzLkNvbG9yLCBTaG93OiBwcm9wcy5TaG93SW5pdGlhbGx5ID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSwgV2lkdGg6IGhlbHBlcl9mdW5jdGlvbnNfMS5HZXRUZXh0V2lkdGgoXCJCbGlua01hY1N5c3RlbUZvbnRcIiwgJzEzcHgnLCBwcm9wcy5MYWJlbCkgfSkpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAoeUF4aXMgPT09IHVuZGVmaW5lZCB8fCB4QXhpcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCk7XG4gICAgdmFyIHggPSBIZWxwZXJfMS5HZXRTY2FsZSh4QXhpcy5UeXBlLCBsZWZ0LCByaWdodCwgeEF4aXMuRG9tYWluKTtcbiAgICB2YXIgeSA9IEhlbHBlcl8xLkdldFNjYWxlKHlBeGlzLlR5cGUsIGJvdHRvbSwgdG9wLCB5QXhpcy5Eb21haW4pO1xuICAgIGlmIChzZXJpZXMgIT09IHVuZGVmaW5lZCA/ICFzZXJpZXMuU2hvdyA6IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09PSAncG9pbnRzJykge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHByb3BzLkRhdGEuZmlsdGVyKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gcG9pbnRbcHJvcHMuWUZpZWxkXSA+PSB5QXhpcy5Eb21haW5bMF0gJiYgcG9pbnRbcHJvcHMuWUZpZWxkXSA8PSB5QXhpcy5Eb21haW5bMV0gJiYgcG9pbnRbcHJvcHMuWEZpZWxkXSA+PSB4QXhpcy5Eb21haW5bMF0gJiYgcG9pbnRbcHJvcHMuWEZpZWxkXSA8PSB4QXhpcy5Eb21haW5bMV07IH0pLm1hcChmdW5jdGlvbiAocG9pbnQsIGluZGV4KSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIF9fYXNzaWduKHt9LCBwcm9wcy5TdHlsZSwgeyBrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwiZG90XCIsIHI6IDMsIGN4OiAoeEF4aXMuU2NhbGUgPyB4QXhpcy5TY2FsZShwb2ludFtwcm9wcy5YRmllbGRdKSA6IDApLCBjeTogKHlBeGlzLlNjYWxlID8geUF4aXMuU2NhbGUocG9pbnRbcHJvcHMuWUZpZWxkXSkgOiAwKSwgZmlsbDogJ2JsdWUnLCBzdHlsZTogeyBjdXJzb3I6ICdwb2ludGVyJyB9LCBvbkNsaWNrOiBwcm9wcy5DbGljayB9KSk7IH0pKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLlR5cGUgPT09ICdsaW5lJykge1xuICAgICAgICB2YXIgbGluZWZ1bmMgPSBkM18xLmxpbmUoKS54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGRbcHJvcHMuWEZpZWxkXSk7IH0pLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZFtwcm9wcy5ZRmllbGRdKTsgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCBfX2Fzc2lnbih7fSwgcHJvcHMuU3R5bGUsIHsgZDogbGluZWZ1bmMocHJvcHMuRGF0YSksIHN0cm9rZTogcHJvcHMuQ29sb3IgfSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09PSAnaGlzdG9ncmFtJykge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PT0gJ3N0YWNrZWQnKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2VyaWVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNlbGVjdExlZ2VuZFNlcmllcyA9IGV4cG9ydHMuU2VsZWN0TGVnZW5kID0gZXhwb3J0cy5TaG93ID0gZXhwb3J0cy5BZGQgPSBleHBvcnRzLkxlZ2VuZFNsaWNlID0gdm9pZCAwO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgTGVnZW5kU2xpY2UudHMgLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8xMS8yMDIxIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciB0b29sa2l0XzEgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTtcbi8vICNyZWdpb24gWyBTbGljZSBdXG5leHBvcnRzLkxlZ2VuZFNsaWNlID0gdG9vbGtpdF8xLmNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnTGVnZW5kJyxcbiAgICBpbml0aWFsU3RhdGU6IFtdLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIEFkZDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICB9LFxuICAgICAgICBTaG93OiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGVbYWN0aW9uLnBheWxvYWQuSW5kZXhdLlNob3cgPSBhY3Rpb24ucGF5bG9hZC5TaG93O1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuLy8gI2VuZHJlZ2lvblxuLy8gI3JlZ2lvbiBbIFNlbGVjdG9ycyBdXG5leHBvcnRzLkFkZCA9IChfYSA9IGV4cG9ydHMuTGVnZW5kU2xpY2UuYWN0aW9ucywgX2EuQWRkKSwgZXhwb3J0cy5TaG93ID0gX2EuU2hvdztcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuTGVnZW5kU2xpY2UucmVkdWNlcjtcbmV4cG9ydHMuU2VsZWN0TGVnZW5kID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5MZWdlbmQ7IH07XG5leHBvcnRzLlNlbGVjdExlZ2VuZFNlcmllcyA9IGZ1bmN0aW9uIChzdGF0ZSwga2V5KSB7IHJldHVybiBzdGF0ZS5MZWdlbmQuZmluZChmdW5jdGlvbiAobCkgeyByZXR1cm4gbC5MYWJlbCA9PT0ga2V5OyB9KTsgfTtcbi8vICNlbmRyZWdpb25cbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgU3RvcmUudHMgLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8xMS8yMDIxIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0b29sa2l0XzEgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTtcbnZhciBMZWdlbmRTbGljZV8xID0gcmVxdWlyZShcIi4vTGVnZW5kU2xpY2VcIik7XG52YXIgWUF4aXNTbGljZV8xID0gcmVxdWlyZShcIi4vWUF4aXNTbGljZVwiKTtcbnZhciBYQXhpc1NsaWNlXzEgPSByZXF1aXJlKFwiLi9YQXhpc1NsaWNlXCIpO1xudmFyIHJlZHVjZXIgPSB7XG4gICAgTGVnZW5kOiBMZWdlbmRTbGljZV8xLmRlZmF1bHQsXG4gICAgWUF4aXM6IFlBeGlzU2xpY2VfMS5kZWZhdWx0LFxuICAgIFhBeGlzOiBYQXhpc1NsaWNlXzEuZGVmYXVsdCxcbn07XG52YXIgc3RvcmUgPSB0b29sa2l0XzEuY29uZmlndXJlU3RvcmUoeyByZWR1Y2VyOiByZWR1Y2VyIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3RvcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFhBeGlzU2xpY2UudHMgLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8xMS8yMDIxIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNlbGVjdFhBeGVzUmVzZXQgPSBleHBvcnRzLlNlbGVjdFhBeGlzID0gZXhwb3J0cy5TZWxlY3RYQXhlcyA9IGV4cG9ydHMuWm9vbSA9IGV4cG9ydHMuRHJhZyA9IGV4cG9ydHMuUmVzZXRab29tID0gZXhwb3J0cy5TZXRSYW5nZSA9IGV4cG9ydHMuU2V0RG9tYWluID0gZXhwb3J0cy5TZXRUeXBlID0gZXhwb3J0cy5BZGQgPSBleHBvcnRzLlhBeGlzU2xpY2UgPSB2b2lkIDA7XG52YXIgdG9vbGtpdF8xID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7XG52YXIgSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vSGVscGVyXCIpO1xuLy8gI3JlZ2lvbiBbIFNsaWNlIF1cbmV4cG9ydHMuWEF4aXNTbGljZSA9IHRvb2xraXRfMS5jcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ1hBeGlzJyxcbiAgICBpbml0aWFsU3RhdGU6IFtdLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIEFkZDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICB9LFxuICAgICAgICBTZXRUeXBlOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBzdGF0ZS5maW5kKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLklEID09PSBhY3Rpb24ucGF5bG9hZC5JRDsgfSk7XG4gICAgICAgICAgICBpZiAoYXhpcylcbiAgICAgICAgICAgICAgICBheGlzLlR5cGUgPSBhY3Rpb24ucGF5bG9hZC5UeXBlO1xuICAgICAgICB9LFxuICAgICAgICBTZXREb21haW46IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IHN0YXRlLmZpbmQoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuSUQgPT09IGFjdGlvbi5wYXlsb2FkLklEOyB9KTtcbiAgICAgICAgICAgIGlmIChheGlzKVxuICAgICAgICAgICAgICAgIGF4aXMuRG9tYWluID0gYWN0aW9uLnBheWxvYWQuRG9tYWluO1xuICAgICAgICB9LFxuICAgICAgICBTZXRSYW5nZTogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gc3RhdGUuZmluZChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5JRCA9PT0gYWN0aW9uLnBheWxvYWQuSUQ7IH0pO1xuICAgICAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgICAgICBheGlzLlJhbmdlID0gYWN0aW9uLnBheWxvYWQuUmFuZ2U7XG4gICAgICAgICAgICAgICAgYXhpcy5Eb21haW4gPSBhY3Rpb24ucGF5bG9hZC5SYW5nZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVzZXRab29tOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcy5Eb21haW4gPSBzLlJhbmdlOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgRHJhZzogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSBIZWxwZXJfMS5HZXRTY2FsZShzLlR5cGUsIHMuU3RhcnQsIHMuRW5kLCBzLkRvbWFpbik7XG4gICAgICAgICAgICAgICAgcy5Eb21haW4gPSBzLkRvbWFpbi5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHNjYWxlLmludmVydChzY2FsZShkKSArIGFjdGlvbi5wYXlsb2FkLkNsaWNrIC0gYWN0aW9uLnBheWxvYWQuRHJhZyk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFpvb206IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBzdGF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IChzLkVuZCAtIHMuU3RhcnQpICogYWN0aW9uLnBheWxvYWQuTXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSBIZWxwZXJfMS5HZXRTY2FsZShzLlR5cGUsIHMuU3RhcnQsIHMuRW5kLCBzLkRvbWFpbik7XG4gICAgICAgICAgICAgICAgcy5Eb21haW4gPSBbc2NhbGUuaW52ZXJ0KGFjdGlvbi5wYXlsb2FkLlBvaW50IC0gbGVuZ3RoIC8gMiksIHNjYWxlLmludmVydChhY3Rpb24ucGF5bG9hZC5Qb2ludCArIGxlbmd0aCAvIDIpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4vLyAjZW5kcmVnaW9uXG4vLyAjcmVnaW9uIFsgU2VsZWN0b3JzIF1cbmV4cG9ydHMuQWRkID0gKF9hID0gZXhwb3J0cy5YQXhpc1NsaWNlLmFjdGlvbnMsIF9hLkFkZCksIGV4cG9ydHMuU2V0VHlwZSA9IF9hLlNldFR5cGUsIGV4cG9ydHMuU2V0RG9tYWluID0gX2EuU2V0RG9tYWluLCBleHBvcnRzLlNldFJhbmdlID0gX2EuU2V0UmFuZ2UsIGV4cG9ydHMuUmVzZXRab29tID0gX2EuUmVzZXRab29tLCBleHBvcnRzLkRyYWcgPSBfYS5EcmFnLCBleHBvcnRzLlpvb20gPSBfYS5ab29tO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5YQXhpc1NsaWNlLnJlZHVjZXI7XG5leHBvcnRzLlNlbGVjdFhBeGVzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5YQXhpczsgfTtcbmV4cG9ydHMuU2VsZWN0WEF4aXMgPSBmdW5jdGlvbiAoc3RhdGUsIGtleSkge1xuICAgIHZhciBheGlzID0gc3RhdGUuWEF4aXMuZmluZChmdW5jdGlvbiAobCkgeyByZXR1cm4gbC5JRCA9PT0ga2V5OyB9KTtcbiAgICBpZiAoYXhpcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gYXhpcztcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGF4aXMpLCB7IFNjYWxlOiBIZWxwZXJfMS5HZXRTY2FsZShheGlzLlR5cGUsIGF4aXMuU3RhcnQsIGF4aXMuRW5kLCBheGlzLkRvbWFpbikgfSk7XG59O1xuZXhwb3J0cy5TZWxlY3RYQXhlc1Jlc2V0ID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5YQXhpcy5ldmVyeShmdW5jdGlvbiAoYSkgeyByZXR1cm4gYS5Eb21haW4uZXZlcnkoZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIGQgPT09IGEuUmFuZ2VbaV07IH0pOyB9KTsgfTtcbi8vICNlbmRyZWdpb25cbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgWUF4aXNTbGljZS50cyAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDAxLzExLzIwMjEgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VsZWN0WUF4ZXNSZXNldCA9IGV4cG9ydHMuU2VsZWN0WUF4aXMgPSBleHBvcnRzLlNlbGVjdFlBeGVzID0gZXhwb3J0cy5ab29tID0gZXhwb3J0cy5EcmFnID0gZXhwb3J0cy5SZXNldFpvb20gPSBleHBvcnRzLlNldFJhbmdlID0gZXhwb3J0cy5TZXREb21haW4gPSBleHBvcnRzLlNldFR5cGUgPSBleHBvcnRzLkFkZCA9IGV4cG9ydHMuWUF4aXNTbGljZSA9IHZvaWQgMDtcbnZhciB0b29sa2l0XzEgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTtcbnZhciBIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9IZWxwZXJcIik7XG4vLyAjcmVnaW9uIFsgU2xpY2UgXVxuZXhwb3J0cy5ZQXhpc1NsaWNlID0gdG9vbGtpdF8xLmNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnWUF4aXMnLFxuICAgIGluaXRpYWxTdGF0ZTogW10sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgQWRkOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgIH0sXG4gICAgICAgIFNldFR5cGU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IHN0YXRlLmZpbmQoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuSUQgPT09IGFjdGlvbi5wYXlsb2FkLklEOyB9KTtcbiAgICAgICAgICAgIGlmIChheGlzKVxuICAgICAgICAgICAgICAgIGF4aXMuVHlwZSA9IGFjdGlvbi5wYXlsb2FkLlR5cGU7XG4gICAgICAgIH0sXG4gICAgICAgIFNldERvbWFpbjogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gc3RhdGUuZmluZChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5JRCA9PT0gYWN0aW9uLnBheWxvYWQuSUQ7IH0pO1xuICAgICAgICAgICAgaWYgKGF4aXMpXG4gICAgICAgICAgICAgICAgYXhpcy5Eb21haW4gPSBhY3Rpb24ucGF5bG9hZC5Eb21haW47XG4gICAgICAgIH0sXG4gICAgICAgIFNldFJhbmdlOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBzdGF0ZS5maW5kKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLklEID09PSBhY3Rpb24ucGF5bG9hZC5JRDsgfSk7XG4gICAgICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgICAgIGF4aXMuUmFuZ2UgPSBhY3Rpb24ucGF5bG9hZC5SYW5nZTtcbiAgICAgICAgICAgICAgICBheGlzLkRvbWFpbiA9IGFjdGlvbi5wYXlsb2FkLlJhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZXNldFpvb206IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuZm9yRWFjaChmdW5jdGlvbiAocykgeyBzLkRvbWFpbiA9IHMuUmFuZ2U7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBEcmFnOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IEhlbHBlcl8xLkdldFNjYWxlKHMuVHlwZSwgcy5TdGFydCwgcy5FbmQsIHMuRG9tYWluKTtcbiAgICAgICAgICAgICAgICBzLkRvbWFpbiA9IHMuRG9tYWluLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gc2NhbGUuaW52ZXJ0KHNjYWxlKGQpICsgYWN0aW9uLnBheWxvYWQuQ2xpY2sgLSBhY3Rpb24ucGF5bG9hZC5EcmFnKTsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgWm9vbTogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gKHMuRW5kIC0gcy5TdGFydCkgKiBhY3Rpb24ucGF5bG9hZC5NdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IEhlbHBlcl8xLkdldFNjYWxlKHMuVHlwZSwgcy5TdGFydCwgcy5FbmQsIHMuRG9tYWluKTtcbiAgICAgICAgICAgICAgICBzLkRvbWFpbiA9IFtzY2FsZS5pbnZlcnQoYWN0aW9uLnBheWxvYWQuUG9pbnQgLSBsZW5ndGggLyAyKSwgc2NhbGUuaW52ZXJ0KGFjdGlvbi5wYXlsb2FkLlBvaW50ICsgbGVuZ3RoIC8gMildO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vICNlbmRyZWdpb25cbi8vICNyZWdpb24gWyBTZWxlY3RvcnMgXVxuZXhwb3J0cy5BZGQgPSAoX2EgPSBleHBvcnRzLllBeGlzU2xpY2UuYWN0aW9ucywgX2EuQWRkKSwgZXhwb3J0cy5TZXRUeXBlID0gX2EuU2V0VHlwZSwgZXhwb3J0cy5TZXREb21haW4gPSBfYS5TZXREb21haW4sIGV4cG9ydHMuU2V0UmFuZ2UgPSBfYS5TZXRSYW5nZSwgZXhwb3J0cy5SZXNldFpvb20gPSBfYS5SZXNldFpvb20sIGV4cG9ydHMuRHJhZyA9IF9hLkRyYWcsIGV4cG9ydHMuWm9vbSA9IF9hLlpvb207XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLllBeGlzU2xpY2UucmVkdWNlcjtcbmV4cG9ydHMuU2VsZWN0WUF4ZXMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLllBeGlzOyB9O1xuZXhwb3J0cy5TZWxlY3RZQXhpcyA9IGZ1bmN0aW9uIChzdGF0ZSwga2V5KSB7XG4gICAgdmFyIGF4aXMgPSBzdGF0ZS5ZQXhpcy5maW5kKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsLklEID09PSBrZXk7IH0pO1xuICAgIGlmIChheGlzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBheGlzO1xuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYXhpcyksIHsgU2NhbGU6IEhlbHBlcl8xLkdldFNjYWxlKGF4aXMuVHlwZSwgYXhpcy5TdGFydCwgYXhpcy5FbmQsIGF4aXMuRG9tYWluKSB9KTtcbn07XG5leHBvcnRzLlNlbGVjdFlBeGVzUmVzZXQgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLllBeGlzLmV2ZXJ5KGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLkRvbWFpblswXSA9PT0gYS5SYW5nZVswXSAmJiBhLkRvbWFpblsxXSA9PT0gYS5SYW5nZVsxXTsgfSk7IH07XG4vLyAjZW5kcmVnaW9uXG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFhBeGlzLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDEyLzMwLzIwMjAgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gICAgcmV0dXJuIGFyO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuWEF4aXNDb250ZXh0ID0gdm9pZCAwO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGQzXzEgPSByZXF1aXJlKFwiZDNcIik7XG52YXIgUGxvdF8xID0gcmVxdWlyZShcIi4vUGxvdFwiKTtcbnZhciBoZWxwZXJfZnVuY3Rpb25zXzEgPSByZXF1aXJlKFwiQGdwYS1nZW1zdG9uZS9oZWxwZXItZnVuY3Rpb25zXCIpO1xudmFyIFlBeGlzXzEgPSByZXF1aXJlKFwiLi9ZQXhpc1wiKTtcbnZhciByZWFjdF9yZWR1eF8xID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xudmFyIFhBeGlzU2xpY2VfMSA9IHJlcXVpcmUoXCIuL1N0b3JlL1hBeGlzU2xpY2VcIik7XG52YXIgWEF4aXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgnbm90aGluZycpO1xuZXhwb3J0cy5YQXhpc0NvbnRleHQgPSBYQXhpc0NvbnRleHQ7XG52YXIgWEF4aXMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VDb250ZXh0KFBsb3RfMS5QbG90Q29udGV4dCksIHN2Z1dpZHRoID0gX2Euc3ZnV2lkdGgsIHRvcCA9IF9hLnRvcCwgbGVmdCA9IF9hLmxlZnQsIHJpZ2h0ID0gX2EucmlnaHQsIGJvdHRvbSA9IF9hLmJvdHRvbSwgbWFyZ2luID0gX2EubWFyZ2luO1xuICAgIHZhciBfYiA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZShoZWxwZXJfZnVuY3Rpb25zXzEuQ3JlYXRlR3VpZCgpKSwgMSksIGd1aWQgPSBfYlswXTtcbiAgICB2YXIgZGlzcGF0Y2ggPSByZWFjdF9yZWR1eF8xLnVzZURpc3BhdGNoKCk7XG4gICAgdmFyIGF4aXMgPSByZWFjdF9yZWR1eF8xLnVzZVNlbGVjdG9yKGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gWEF4aXNTbGljZV8xLlNlbGVjdFhBeGlzKHN0YXRlLCBndWlkKTsgfSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJhbmdlID0gZ2V0UmFuZ2UoKTtcbiAgICAgICAgaWYgKGF4aXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRpc3BhdGNoKFhBeGlzU2xpY2VfMS5BZGQoeyBJRDogZ3VpZCwgVHlwZTogKHByb3BzLlR5cGUgPyBwcm9wcy5UeXBlIDogJ0xpbmVhcicpLCBSYW5nZTogcmFuZ2UsIERvbWFpbjogcmFuZ2UsIFN0YXJ0OiBsZWZ0LCBFbmQ6IHJpZ2h0IH0pKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGlzcGF0Y2goWEF4aXNTbGljZV8xLlNldFJhbmdlKHsgSUQ6IGd1aWQsIFJhbmdlOiByYW5nZSB9KSk7XG4gICAgfSwgW3Byb3BzLmNoaWxkcmVuXSk7XG4gICAgZnVuY3Rpb24gZ2V0UmFuZ2UoKSB7XG4gICAgICAgIGlmIChwcm9wcy5SYW5nZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHByb3BzLlJhbmdlO1xuICAgICAgICBlbHNlIGlmIChwcm9wcy5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gWzEsIDEwXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbMSwgMTBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLmNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgeWF4aXMgPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhciBzZXJpZXMgPSB5YXhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChzZXJpZXMubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc18xID0geWF4aXMucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gc18xLnByb3BzLkRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkW3NfMS5wcm9wcy5YRmllbGRdOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuVHlwZSA9PT0gJ09yZGluYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByYW5nZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbZDNfMS5taW4ocmFuZ2UpLCBkM18xLm1heChyYW5nZSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlcmllcyA9IFtdLmNvbmNhdC5hcHBseShbXSwgX19zcHJlYWQoc2VyaWVzKSk7XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gX19zcHJlYWQobmV3IFNldChbXS5jb25jYXQuYXBwbHkoW10sIF9fc3ByZWFkKHNlcmllcy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMucHJvcHMuRGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGRbcy5wcm9wcy5YRmllbGRdOyB9KTsgfSkpKSkpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5UeXBlID09PSAnT3JkaW5hbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtkM18xLm1pbihyYW5nZSksIGQzXzEubWF4KHJhbmdlKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHlheGlzID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgc2VyaWVzID0gW10uY29uY2F0LmFwcGx5KFtdLCBfX3NwcmVhZCh5YXhpcy5tYXAoZnVuY3Rpb24gKHkpIHsgcmV0dXJuIHkucHJvcHMuY2hpbGRyZW47IH0pKSk7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBfX3NwcmVhZChuZXcgU2V0KFtdLmNvbmNhdC5hcHBseShbXSwgX19zcHJlYWQoc2VyaWVzLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5wcm9wcy5EYXRhLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZFtzLnByb3BzLlhGaWVsZF07IH0pOyB9KSkpKSk7XG4gICAgICAgICAgICBpZiAocHJvcHMuVHlwZSA9PT0gJ09yZGluYWwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtkM18xLm1pbihyYW5nZSksIGQzXzEubWF4KHJhbmdlKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gR2VuZXJhdGVBeGlzKCkge1xuICAgICAgICBpZiAoYXhpcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09PSAnTG9nJylcbiAgICAgICAgICAgIHJldHVybiBHZW5lcmF0ZUxvZ0F4aXMoKTtcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PT0gJ09yZGluYWwnKVxuICAgICAgICAgICAgcmV0dXJuIEdlbmVyYXRlT3JkaW5hbEF4aXMoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIEdlbmVyYXRlTGluZWFyQXhpcygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBHZW5lcmF0ZUxvZ0F4aXMoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciB4ID0gZDNfMS5zY2FsZUxvZygpLnJhbmdlUm91bmQoW2xlZnQsIHJpZ2h0XSkuZG9tYWluKChfYSA9IGF4aXMgPT09IG51bGwgfHwgYXhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXhpcy5Eb21haW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKTtcbiAgICAgICAgdmFyIGkgPSBwYXJzZUZsb2F0KE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKChfYiA9IGF4aXMgPT09IG51bGwgfHwgYXhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXhpcy5Eb21haW5bMF0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDApIC8gTWF0aC5sb2coMTApKSkudG9QcmVjaXNpb24oMSkpO1xuICAgICAgICB2YXIgdGlja3MgPSBbXTtcbiAgICAgICAgdmFyIGxvZ0RvbWFpbiA9IHguZG9tYWluKCkubWFwKGZ1bmN0aW9uIChsKSB7IHJldHVybiBNYXRoLmxvZyhsKSAvIE1hdGgubG9nKDEwKTsgfSk7XG4gICAgICAgIHZhciBsZERpZmYgPSBsb2dEb21haW5bMV0gLSBsb2dEb21haW5bMF07XG4gICAgICAgIGZvciAoOyBpIDw9IChheGlzID09PSBudWxsIHx8IGF4aXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGF4aXMuRG9tYWluWzFdKTsgaSA9IGkgKiAxMCkge1xuICAgICAgICAgICAgdGlja3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IGtleTogaSwgY2xhc3NOYW1lOiBcInRpY2tcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIHgoaSkgKyBcIixcIiArIGJvdHRvbSArIFwiKVwiLCBzdHlsZTogeyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH0gfSxcbiAgICAgICAgICAgICAgICBwcm9wcy5HcmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBzdHJva2U6ICdibGFjaycsIGQ6IFwiTSAwLDYgViAtXCIgKyAoYm90dG9tIC0gdG9wKSwgc3Ryb2tlV2lkdGg6IDAuMjUgfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0XCIsIHsgZmlsbDogXCJibGFja1wiLCBmb250U2l6ZTogXCJzbWFsbFwiLCB5OiBcIjIwXCIsIHRleHRBbmNob3I6ICdtaWRkbGUnIH0sIHByb3BzLlRpY2tGb3JtYXR0ZXIgPT09IHVuZGVmaW5lZCA/IGkgOiBwcm9wcy5UaWNrRm9ybWF0dGVyKGkpKSxcbiAgICAgICAgICAgICAgICAocHJvcHMuR3JpZCAmJiBsZERpZmYgPCA1ID9cbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCwgKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSkubWFwKGZ1bmN0aW9uIChudW0pIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgc3Ryb2tlOiAnYmxhY2snLCBrZXk6IG51bSwgZDogXCJNIFwiICsgKHgobnVtICogaSkgLSB4KGkpKSArIFwiLDYgViAtXCIgKyAoYm90dG9tIC0gdG9wKSwgc3Ryb2tlV2lkdGg6IDAuMjUgfSk7IH0pKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGwpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpY2tzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBHZW5lcmF0ZUxpbmVhckF4aXMoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgdmFyIHggPSBkM18xLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbbGVmdCwgcmlnaHRdKS5kb21haW4oKF9hID0gYXhpcyA9PT0gbnVsbCB8fCBheGlzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBheGlzLkRvbWFpbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pO1xuICAgICAgICB2YXIgdGlja3MgPSBbXTtcbiAgICAgICAgdmFyIHN0ZXAgPSBNYXRoLnJvdW5kKCh4LmRvbWFpbigpWzFdIC0geC5kb21haW4oKVswXSkgLyAoKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgIT09IHVuZGVmaW5lZCA/IChfYiA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrTnVtYmVyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAxMCA6IDEwKSk7XG4gICAgICAgIGZvciAodmFyIGkgPSBNYXRoLmZsb29yKChfYyA9IGF4aXMgPT09IG51bGwgfHwgYXhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXhpcy5Eb21haW5bMF0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDApOyAoX2QgPSBpIDw9IChheGlzID09PSBudWxsIHx8IGF4aXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGF4aXMuRG9tYWluWzFdKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMTA7IGkgPSBzdGVwICsgaSkge1xuICAgICAgICAgICAgdGlja3MucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IGtleTogaSwgY2xhc3NOYW1lOiBcInRpY2tcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIHgoaSkgKyBcIixcIiArIGJvdHRvbSArIFwiKVwiLCBzdHlsZTogeyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH0gfSxcbiAgICAgICAgICAgICAgICBwcm9wcy5HcmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBzdHJva2U6ICdibGFjaycsIGQ6IFwiTSAwLDYgViAtXCIgKyAoYm90dG9tIC0gdG9wKSwgc3Ryb2tlV2lkdGg6IDAuMjUgfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0XCIsIHsgZmlsbDogXCJibGFja1wiLCBmb250U2l6ZTogXCJzbWFsbFwiLCB5OiBcIjIwXCIsIHRleHRBbmNob3I6ICdtaWRkbGUnIH0sIHByb3BzLlRpY2tGb3JtYXR0ZXIgPT09IHVuZGVmaW5lZCA/IGkgOiBwcm9wcy5UaWNrRm9ybWF0dGVyKGkpKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWNrcztcbiAgICB9XG4gICAgZnVuY3Rpb24gR2VuZXJhdGVPcmRpbmFsQXhpcygpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgaWYgKHByb3BzLlRpY2tzID09PSBudWxsIHx8ICgoX2EgPSBwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuVGlja3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB2YXIgeCA9IGQzXzEuc2NhbGVPcmRpbmFsKCkuZG9tYWluKChfYiA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW10pLnJhbmdlKChfZCA9IChfYyA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm1hcChmdW5jdGlvbiAodGljaywgaSkgeyB2YXIgX2EsIF9iLCBfYywgX2Q7IHJldHVybiBpICogKHN2Z1dpZHRoKSAvICgoX2IgPSAoX2EgPSBwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuVGlja3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDEwKSArIGxlZnQgKyAoc3ZnV2lkdGgpIC8gKChfZCA9IChfYyA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmxlbmd0aCkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMTApIC8gMjsgfSkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IFtdKTtcbiAgICAgICAgcmV0dXJuICgoX2UgPSBwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuVGlja3MpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IFtdKS5tYXAoZnVuY3Rpb24gKHRpY2spIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7IGtleTogdGljaywgY2xhc3NOYW1lOiBcInRpY2tcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIHgodGljaykgKyBcIixcIiArIGJvdHRvbSArIFwiKVwiIH0sXG4gICAgICAgICAgICBwcm9wcy5HcmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBzdHJva2U6ICdibGFjaycsIGQ6IFwiTSAwLDYgViAtXCIgKyAoYm90dG9tIC0gdG9wKSwgc3Ryb2tlV2lkdGg6IDAuMjUgfSkgOiBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRcIiwgeyBmaWxsOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcInNtYWxsXCIsIHk6IFwiMjBcIiwgdGV4dEFuY2hvcjogJ21pZGRsZScgfSwgdGljaykpKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFlBeGlzTm90RXhpc3RzKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnR5cGUubmFtZSAhPT0gJ1lBeGlzJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChfYSA9IGNoaWxkcmVuLmZpbmQoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEudHlwZS5uYW1lID09PSAnWUF4aXMnOyB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUubmFtZSkgIT09ICdZQXhpcycpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoWEF4aXNDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBndWlkIH0sXG4gICAgICAgIFlBeGlzTm90RXhpc3RzKCkgP1xuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChZQXhpc18xLmRlZmF1bHQsIHsgTGFiZWw6ICcnLCBUeXBlOiAnTGluZWFyJywgVGlja051bWJlcjogMTAgfSwgcHJvcHMuY2hpbGRyZW4pXG4gICAgICAgICAgICA6IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBHZW5lcmF0ZUF4aXMoKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRcIiwgeyBmaWxsOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcInNtYWxsXCIsIHg6IHN2Z1dpZHRoIC8gMiwgeTogYm90dG9tICsgbWFyZ2luLmJvdHRvbSAvIDIgfSxcbiAgICAgICAgICAgIHByb3BzLkxhYmVsLFxuICAgICAgICAgICAgcHJvcHMuVW5pdCAhPSBudWxsID8gXCIoXCIgKyBwcm9wcy5Vbml0ICsgXCIpXCIgOiAnJykpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBYQXhpcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gICAgcmV0dXJuIGFyO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuWUF4aXNDb250ZXh0ID0gdm9pZCAwO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgWUF4aXMudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMTIvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgcmVhY3RfcmVkdXhfMSA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcbnZhciBZQXhpc1NsaWNlXzEgPSByZXF1aXJlKFwiLi9TdG9yZS9ZQXhpc1NsaWNlXCIpO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGQzXzEgPSByZXF1aXJlKFwiZDNcIik7XG52YXIgUGxvdF8xID0gcmVxdWlyZShcIi4vUGxvdFwiKTtcbnZhciBoZWxwZXJfZnVuY3Rpb25zXzEgPSByZXF1aXJlKFwiQGdwYS1nZW1zdG9uZS9oZWxwZXItZnVuY3Rpb25zXCIpO1xudmFyIFlBeGlzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoJ25vdGhpbmcnKTtcbmV4cG9ydHMuWUF4aXNDb250ZXh0ID0gWUF4aXNDb250ZXh0O1xudmFyIFlBeGlzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hID0gUmVhY3QudXNlQ29udGV4dChQbG90XzEuUGxvdENvbnRleHQpLCBtYXJnaW4gPSBfYS5tYXJnaW4sIHN2Z1dpZHRoID0gX2Euc3ZnV2lkdGgsIHN2Z0hlaWdodCA9IF9hLnN2Z0hlaWdodCwgdG9wID0gX2EudG9wLCBib3R0b20gPSBfYS5ib3R0b207XG4gICAgdmFyIF9iID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKGhlbHBlcl9mdW5jdGlvbnNfMS5DcmVhdGVHdWlkKCkpLCAxKSwgZ3VpZCA9IF9iWzBdO1xuICAgIHZhciBkaXNwYXRjaCA9IHJlYWN0X3JlZHV4XzEudXNlRGlzcGF0Y2goKTtcbiAgICB2YXIgc2VyaWVzID0gcmVhY3RfcmVkdXhfMS51c2VTZWxlY3RvcihmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIFlBeGlzU2xpY2VfMS5TZWxlY3RZQXhpcyhzdGF0ZSwgZ3VpZCk7IH0pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIHJhbmdlID0gZ2V0UmFuZ2UoKTtcbiAgICAgICAgaWYgKHNlcmllcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGlzcGF0Y2goWUF4aXNTbGljZV8xLkFkZCh7IElEOiBndWlkLCBUeXBlOiAoX2EgPSBwcm9wcy5UeXBlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnTGluZWFyJywgUmFuZ2U6IHJhbmdlLCBEb21haW46IHJhbmdlLCBTdGFydDogYm90dG9tLCBFbmQ6IHRvcCB9KSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRpc3BhdGNoKFlBeGlzU2xpY2VfMS5TZXRSYW5nZSh7IElEOiBndWlkLCBSYW5nZTogcmFuZ2UgfSkpO1xuICAgIH0sIFtwcm9wcy5jaGlsZHJlbl0pO1xuICAgIGZ1bmN0aW9uIGdldFJhbmdlKCkge1xuICAgICAgICBpZiAocHJvcHMuUmFuZ2UgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5SYW5nZTtcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFswLCAxMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcHMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gWzAsIDEwXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5jaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHJhbmdlID0gcHJvcHMuY2hpbGRyZW4ucHJvcHMuRGF0YS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGRbcHJvcHMuY2hpbGRyZW4ucHJvcHMuWUZpZWxkXTsgfSk7XG4gICAgICAgICAgICBpZiAocHJvcHMuVHlwZSA9PT0gJ09yZGluYWwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtkM18xLm1pbihyYW5nZSksIGQzXzEubWF4KHJhbmdlKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXS5jb25jYXQuYXBwbHkoW10sIF9fc3ByZWFkKHByb3BzLmNoaWxkcmVuKSk7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBfX3NwcmVhZChuZXcgU2V0KFtdLmNvbmNhdC5hcHBseShbXSwgX19zcHJlYWQoY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnByb3BzLkRhdGEubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkW2MucHJvcHMuWUZpZWxkXTsgfSk7IH0pKSkpKTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5UeXBlID09PSAnT3JkaW5hbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2QzXzEubWluKHJhbmdlKSwgZDNfMS5tYXgocmFuZ2UpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBHZW5lcmF0ZUF4aXMoKSB7XG4gICAgICAgIGlmIChzZXJpZXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgaWYgKHByb3BzLlR5cGUgPT09ICdMb2cnKVxuICAgICAgICAgICAgcmV0dXJuIEdlbmVyYXRlTG9nQXhpcygpO1xuICAgICAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09PSAnT3JkaW5hbCcpXG4gICAgICAgICAgICByZXR1cm4gR2VuZXJhdGVPcmRpbmFsQXhpcygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gR2VuZXJhdGVMaW5lYXJBeGlzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEdlbmVyYXRlTG9nQXhpcygpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHZhciB5ID0gZDNfMS5zY2FsZUxvZygpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbigoX2EgPSBzZXJpZXMgPT09IG51bGwgfHwgc2VyaWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXJpZXMuRG9tYWluKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSk7XG4gICAgICAgIHZhciBpID0gcGFyc2VGbG9hdChNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZygoX2IgPSBzZXJpZXMgPT09IG51bGwgfHwgc2VyaWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXJpZXMuRG9tYWluWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAxKSAvIE1hdGgubG9nKDEwKSkpLnRvUHJlY2lzaW9uKDEpKTtcbiAgICAgICAgdmFyIHRpY2tzID0gW107XG4gICAgICAgIHZhciBsb2dEb21haW4gPSB5LmRvbWFpbigpLm1hcChmdW5jdGlvbiAobCkgeyByZXR1cm4gTWF0aC5sb2cobCkgLyBNYXRoLmxvZygxMCk7IH0pO1xuICAgICAgICB2YXIgbGREaWZmID0gbG9nRG9tYWluWzFdIC0gbG9nRG9tYWluWzBdO1xuICAgICAgICBmb3IgKDsgKF9jID0gaSA8PSAoc2VyaWVzID09PSBudWxsIHx8IHNlcmllcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VyaWVzLkRvbWFpblsxXSkpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDEwOyBpID0gaSAqIDEwKSB7XG4gICAgICAgICAgICB0aWNrcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsga2V5OiBpLCBjbGFzc05hbWU6IFwidGlja1wiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIHkoaSkgKyBcIilcIiwgc3R5bGU6IHsgb3BhY2l0eTogaSA8IHkuZG9tYWluKClbMF0gfHwgaSA+IHkuZG9tYWluKClbMV0gPyAwIDogMSB9IH0sXG4gICAgICAgICAgICAgICAgcHJvcHMuR3JpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgc3Ryb2tlOiAnYmxhY2snLCBkOiBcIk0gLTYsMCBIIC1cIiArIChzdmdIZWlnaHQgLSBtYXJnaW4udG9wKSwgc3Ryb2tlV2lkdGg6IDAuMjUgfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0XCIsIHsgZmlsbDogXCJibGFja1wiLCBmb250U2l6ZTogXCJzbWFsbFwiLCB5OiBcIjIwXCIsIHRleHRBbmNob3I6ICdtaWRkbGUnIH0sIGkpLFxuICAgICAgICAgICAgICAgIChwcm9wcy5HcmlkICYmIGxkRGlmZiA8IDUgP1xuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBudWxsLCAoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKS5tYXAoZnVuY3Rpb24gKG51bSkgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBzdHJva2U6ICdibGFjaycsIGtleTogbnVtLCBkOiBcIk0gLTYsXCIgKyAoeShudW0gKiBpKSAtIHkoaSkpICsgXCIgSCAtXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCksIHN0cm9rZVdpZHRoOiAwLjI1IH0pOyB9KSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWNrcztcbiAgICB9XG4gICAgZnVuY3Rpb24gR2VuZXJhdGVMaW5lYXJBeGlzKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdmFyIHkgPSBkM18xLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0LCBtYXJnaW4udG9wXSkuZG9tYWluKChfYSA9IHNlcmllcyA9PT0gbnVsbCB8fCBzZXJpZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlcmllcy5Eb21haW4pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKTtcbiAgICAgICAgdmFyIHRpY2tzID0gW107XG4gICAgICAgIHZhciBzdGVwID0gMC4xO1xuICAgICAgICBpZiAoeS5kb21haW4oKVsxXSAtIHkuZG9tYWluKClbMF0gPiA1KVxuICAgICAgICAgICAgc3RlcCA9IE1hdGgucm91bmQoKHkuZG9tYWluKClbMV0gLSB5LmRvbWFpbigpWzBdKSAvIChwcm9wcy5UaWNrTnVtYmVyICE9IG51bGwgPyBwcm9wcy5UaWNrTnVtYmVyIDogMTApKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3RlcCA9ICh5LmRvbWFpbigpWzFdIC0geS5kb21haW4oKVswXSkgLyAocHJvcHMuVGlja051bWJlciAhPSBudWxsID8gcHJvcHMuVGlja051bWJlciA6IDEwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IE1hdGguZmxvb3IoKF9iID0gc2VyaWVzID09PSBudWxsIHx8IHNlcmllcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VyaWVzLkRvbWFpblswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMSk7IChfYyA9IGkgPD0gKHNlcmllcyA9PT0gbnVsbCB8fCBzZXJpZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlcmllcy5Eb21haW5bMV0pKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAxMDsgaSA9IHN0ZXAgKyBpKSB7XG4gICAgICAgICAgICB0aWNrcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsga2V5OiBpLCBjbGFzc05hbWU6IFwidGlja1wiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIHkoaSkgKyBcIilcIiwgc3R5bGU6IHsgb3BhY2l0eTogaSA8IHkuZG9tYWluKClbMF0gfHwgaSA+IHkuZG9tYWluKClbMV0gPyAwIDogMSB9IH0sXG4gICAgICAgICAgICAgICAgcHJvcHMuR3JpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgc3Ryb2tlOiAnYmxhY2snLCBkOiBcIk0gLTYsMCBIIFwiICsgc3ZnV2lkdGgsIHN0cm9rZVdpZHRoOiAwLjI1IH0pIDogbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dFwiLCB7IGZpbGw6IFwiYmxhY2tcIiwgZm9udFNpemU6IFwic21hbGxcIiwgeDogXCItMTVcIiwgZHk6IFwiMC4zMmVtXCIsIHRleHRBbmNob3I6ICdtaWRkbGUnIH0sIGkudG9GaXhlZCgxKSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlja3M7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEdlbmVyYXRlT3JkaW5hbEF4aXMoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgaWYgKHByb3BzLlRpY2tzID09PSBudWxsIHx8ICgoX2EgPSBwcm9wcy5UaWNrcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIHZhciBzY2FsZSA9IGQzXzEuc2NhbGVPcmRpbmFsKCkuZG9tYWluKChfYiA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW10pLnJhbmdlKCgoX2MgPSBwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuVGlja3MpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFtdKS5tYXAoZnVuY3Rpb24gKHRpY2ssIGkpIHsgdmFyIF9hLCBfYiwgX2MsIF9kOyByZXR1cm4gaSAqIChzdmdIZWlnaHQpIC8gKChfYiA9IChfYSA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogMTApICsgbWFyZ2luLnRvcCArIChzdmdIZWlnaHQpIC8gKChfZCA9IChfYyA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmxlbmd0aCkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogMTApIC8gMjsgfSkpO1xuICAgICAgICByZXR1cm4gKChfZCA9IHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5UaWNrcykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogW10pLm1hcChmdW5jdGlvbiAodGljaykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHsga2V5OiB0aWNrLCBjbGFzc05hbWU6IFwidGlja1wiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIHNjYWxlKHRpY2spICsgXCIpXCIgfSxcbiAgICAgICAgICAgIHByb3BzLkdyaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IHN0cm9rZTogJ2JsYWNrJywgZDogXCJNIC02LDAgSCBcIiArIHN2Z1dpZHRoLCBzdHJva2VXaWR0aDogMC4yNSB9KSA6IG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dFwiLCB7IGZpbGw6IFwiYmxhY2tcIiwgZm9udFNpemU6IFwic21hbGxcIiwgeDogXCItMTVcIiwgZHk6IFwiMC4zMmVtXCIsIHRleHRBbmNob3I6ICdtaWRkbGUnIH0sIHRpY2spKSk7IH0pO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoWUF4aXNDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBndWlkIH0sXG4gICAgICAgIHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBHZW5lcmF0ZUF4aXMoKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRcIiwgeyBmaWxsOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcInNtYWxsXCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoLTkwIDAsMClcIiwgeTogbWFyZ2luLmxlZnQgLyAyLCB4OiAtc3ZnSGVpZ2h0IC8gMiAtIG1hcmdpbi5ib3R0b20gfSxcbiAgICAgICAgICAgIHByb3BzLkxhYmVsLFxuICAgICAgICAgICAgcHJvcHMuVW5pdCAhPSBudWxsID8gXCIoXCIgKyBwcm9wcy5Vbml0ICsgXCIpXCIgOiAnJykpKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBZQXhpcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ZQXhpcyA9IGV4cG9ydHMuWEF4aXMgPSBleHBvcnRzLlNlcmllcyA9IGV4cG9ydHMuTGVnZW5kID0gZXhwb3J0cy5QbG90ID0gdm9pZCAwO1xudmFyIFBsb3RfMSA9IHJlcXVpcmUoXCIuL1Bsb3RcIik7XG5leHBvcnRzLlBsb3QgPSBQbG90XzEuZGVmYXVsdDtcbnZhciBMZWdlbmRfMSA9IHJlcXVpcmUoXCIuL0xlZ2VuZFwiKTtcbmV4cG9ydHMuTGVnZW5kID0gTGVnZW5kXzEuZGVmYXVsdDtcbnZhciBTZXJpZXNfMSA9IHJlcXVpcmUoXCIuL1Nlcmllc1wiKTtcbmV4cG9ydHMuU2VyaWVzID0gU2VyaWVzXzEuZGVmYXVsdDtcbnZhciBYQXhpc18xID0gcmVxdWlyZShcIi4vWEF4aXNcIik7XG5leHBvcnRzLlhBeGlzID0gWEF4aXNfMS5kZWZhdWx0O1xudmFyIFlBeGlzXzEgPSByZXF1aXJlKFwiLi9ZQXhpc1wiKTtcbmV4cG9ydHMuWUF4aXMgPSBZQXhpc18xLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBUYWJsZS50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDE4LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwOC8wMi8yMDE4IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbnZhciBBbmdsZUljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbWFyZ2luOiAzIH0sIGNsYXNzTmFtZTogJ2ZhIGZhLWFuZ2xlLScgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJykgfSkpOyB9O1xudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcbiAgICAgICAgdmFyIGhlYWRlckNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy50YWJsZUNsYXNzICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJywgc3R5bGU6IHRoaXMucHJvcHMudGFibGVTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGhlYWRTdHlsZSB9LCBoZWFkZXJDb21wb25lbnRzKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCB7IHN0eWxlOiB0aGlzLnByb3BzLnRib2R5U3R5bGUgfSwgcm93Q29tcG9uZW50cykpKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5nZW5lcmF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoZnVuY3Rpb24gKGNvbERhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2xEYXRhLmhlYWRlclN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4LCBzdHlsZTogc3R5bGUsIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTb3J0KHsgY29sOiBjb2xEYXRhLmtleSwgYXNjZW5kaW5nOiBfdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSk7IH0gfSxcbiAgICAgICAgICAgICAgICBjb2xEYXRhLmxhYmVsLFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnNvcnRGaWVsZCA9PT0gY29sRGF0YS5rZXkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEFuZ2xlSWNvbiwgeyBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9KSA6IG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgY2VsbHMpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlUm93cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBfdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNvbERhdGEucm93U3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgY3NzID0ge307XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSBfLmNsb25lKGNvbERhdGEucm93U3R5bGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBpbmRleC50b1N0cmluZygpICsgaXRlbVtjb2xEYXRhLmtleV0gKyBjb2xEYXRhLmtleSwgc3R5bGU6IGNzcywgb25DbGljazogX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcywgeyBjb2w6IGNvbERhdGEua2V5LCByb3c6IGl0ZW0sIGRhdGE6IGl0ZW1bY29sRGF0YS5rZXldIH0pIH0sIGNvbERhdGEuY29udGVudCAhPT0gdW5kZWZpbmVkID8gY29sRGF0YS5jb250ZW50KGl0ZW0sIGNvbERhdGEua2V5LCBjc3MpIDogaXRlbVtjb2xEYXRhLmtleV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IF8uY2xvbmUoX3RoaXMucHJvcHMucm93U3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQgJiYgX3RoaXMucHJvcHMuc2VsZWN0ZWQoaXRlbSkpXG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IHN0eWxlOiBzdHlsZSwga2V5OiBpbmRleC50b1N0cmluZygpIH0sIGNlbGxzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhkYXRhLCBldmVudCk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlU29ydCA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU29ydChkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBUYWJsZTtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZTtcbiIsImltcG9ydCB7IGN1cnJlbnQsIGlzRHJhZnQgfSBmcm9tICdpbW1lcidcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcclxuXHJcbi8qKlxyXG4gKiBcIkRyYWZ0LVNhZmVcIiB2ZXJzaW9uIG9mIGByZXNlbGVjdGAncyBgY3JlYXRlU2VsZWN0b3JgOlxyXG4gKiBJZiBhbiBgaW1tZXJgLWRyYWZ0ZWQgb2JqZWN0IGlzIHBhc3NlZCBpbnRvIHRoZSByZXN1bHRpbmcgc2VsZWN0b3IncyBmaXJzdCBhcmd1bWVudCxcclxuICogdGhlIHNlbGVjdG9yIHdpbGwgYWN0IG9uIHRoZSBjdXJyZW50IGRyYWZ0IHZhbHVlLCBpbnN0ZWFkIG9mIHJldHVybmluZyBhIGNhY2hlZCB2YWx1ZVxyXG4gKiB0aGF0IG1pZ2h0IGJlIHBvc3NpYmx5IG91dGRhdGVkIGlmIHRoZSBkcmFmdCBoYXMgYmVlbiBtb2RpZmllZCBzaW5jZS5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yOiB0eXBlb2YgY3JlYXRlU2VsZWN0b3IgPSAoXHJcbiAgLi4uYXJnczogdW5rbm93bltdXHJcbikgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdG9yID0gKGNyZWF0ZVNlbGVjdG9yIGFzIGFueSkoLi4uYXJncylcclxuICBjb25zdCB3cmFwcGVkU2VsZWN0b3IgPSAodmFsdWU6IHVua25vd24sIC4uLnJlc3Q6IHVua25vd25bXSkgPT5cclxuICAgIHNlbGVjdG9yKGlzRHJhZnQodmFsdWUpID8gY3VycmVudCh2YWx1ZSkgOiB2YWx1ZSwgLi4ucmVzdClcclxuICByZXR1cm4gd3JhcHBlZFNlbGVjdG9yIGFzIGFueVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uQ3JlYXRvciwgU3RvcmVFbmhhbmNlciwgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5oYW5jZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiB0aGUgaW5zdGFuY2UgbmFtZSB0byBiZSBzaG93ZWQgb24gdGhlIG1vbml0b3IgcGFnZS4gRGVmYXVsdCB2YWx1ZSBpcyBgZG9jdW1lbnQudGl0bGVgLlxyXG4gICAqIElmIG5vdCBzcGVjaWZpZWQgYW5kIHRoZXJlJ3Mgbm8gZG9jdW1lbnQgdGl0bGUsIGl0IHdpbGwgY29uc2lzdCBvZiBgdGFiSWRgIGFuZCBgaW5zdGFuY2VJZGAuXHJcbiAgICovXHJcbiAgbmFtZT86IHN0cmluZ1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjcmVhdG9ycyBmdW5jdGlvbnMgdG8gYmUgYXZhaWxhYmxlIGluIHRoZSBEaXNwYXRjaGVyLlxyXG4gICAqL1xyXG4gIGFjdGlvbkNyZWF0b3JzPzogQWN0aW9uQ3JlYXRvcjxhbnk+W10gfCB7IFtrZXk6IHN0cmluZ106IEFjdGlvbkNyZWF0b3I8YW55PiB9XHJcbiAgLyoqXHJcbiAgICogaWYgbW9yZSB0aGFuIG9uZSBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBpbiB0aGUgaW5kaWNhdGVkIGludGVydmFsLCBhbGwgbmV3IGFjdGlvbnMgd2lsbCBiZSBjb2xsZWN0ZWQgYW5kIHNlbnQgYXQgb25jZS5cclxuICAgKiBJdCBpcyB0aGUgam9pbnQgYmV0d2VlbiBwZXJmb3JtYW5jZSBhbmQgc3BlZWQuIFdoZW4gc2V0IHRvIGAwYCwgYWxsIGFjdGlvbnMgd2lsbCBiZSBzZW50IGluc3RhbnRseS5cclxuICAgKiBTZXQgaXQgdG8gYSBoaWdoZXIgdmFsdWUgd2hlbiBleHBlcmllbmNpbmcgcGVyZiBpc3N1ZXMgKGFsc28gYG1heEFnZWAgdG8gYSBsb3dlciB2YWx1ZSkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCA1MDAgbXMuXHJcbiAgICovXHJcbiAgbGF0ZW5jeT86IG51bWJlclxyXG4gIC8qKlxyXG4gICAqICg+IDEpIC0gbWF4aW11bSBhbGxvd2VkIGFjdGlvbnMgdG8gYmUgc3RvcmVkIGluIHRoZSBoaXN0b3J5IHRyZWUuIFRoZSBvbGRlc3QgYWN0aW9ucyBhcmUgcmVtb3ZlZCBvbmNlIG1heEFnZSBpcyByZWFjaGVkLiBJdCdzIGNyaXRpY2FsIGZvciBwZXJmb3JtYW5jZS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IDUwXHJcbiAgICovXHJcbiAgbWF4QWdlPzogbnVtYmVyXHJcbiAgLyoqXHJcbiAgICogU2VlIGRldGFpbGVkIGRvY3VtZW50YXRpb24gYXQgaHR0cDovL2V4dGVuc2lvbi5yZW1vdGVkZXYuaW8vZG9jcy9BUEkvQXJndW1lbnRzLmh0bWwjc2VyaWFsaXplXHJcbiAgICovXHJcbiAgc2VyaWFsaXplPzpcclxuICAgIHwgYm9vbGVhblxyXG4gICAgfCB7XHJcbiAgICAgICAgb3B0aW9ucz86XHJcbiAgICAgICAgICB8IGJvb2xlYW5cclxuICAgICAgICAgIHwge1xyXG4gICAgICAgICAgICAgIGRhdGU/OiBib29sZWFuXHJcbiAgICAgICAgICAgICAgcmVnZXg/OiBib29sZWFuXHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkPzogYm9vbGVhblxyXG4gICAgICAgICAgICAgIGVycm9yPzogYm9vbGVhblxyXG4gICAgICAgICAgICAgIHN5bWJvbD86IGJvb2xlYW5cclxuICAgICAgICAgICAgICBtYXA/OiBib29sZWFuXHJcbiAgICAgICAgICAgICAgc2V0PzogYm9vbGVhblxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uPzogYm9vbGVhbiB8IEZ1bmN0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXBsYWNlcj86IChrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pID0+IHVua25vd25cclxuICAgICAgICByZXZpdmVyPzogKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bikgPT4gdW5rbm93blxyXG4gICAgICAgIGltbXV0YWJsZT86IHVua25vd25cclxuICAgICAgICByZWZzPzogdW5rbm93bltdXHJcbiAgICAgIH1cclxuICAvKipcclxuICAgKiBmdW5jdGlvbiB3aGljaCB0YWtlcyBgYWN0aW9uYCBvYmplY3QgYW5kIGlkIG51bWJlciBhcyBhcmd1bWVudHMsIGFuZCBzaG91bGQgcmV0dXJuIGBhY3Rpb25gIG9iamVjdCBiYWNrLlxyXG4gICAqL1xyXG4gIGFjdGlvblNhbml0aXplcj86IDxBIGV4dGVuZHMgQWN0aW9uPihhY3Rpb246IEEsIGlkOiBudW1iZXIpID0+IEFcclxuICAvKipcclxuICAgKiBmdW5jdGlvbiB3aGljaCB0YWtlcyBgc3RhdGVgIG9iamVjdCBhbmQgaW5kZXggYXMgYXJndW1lbnRzLCBhbmQgc2hvdWxkIHJldHVybiBgc3RhdGVgIG9iamVjdCBiYWNrLlxyXG4gICAqL1xyXG4gIHN0YXRlU2FuaXRpemVyPzogPFM+KHN0YXRlOiBTLCBpbmRleDogbnVtYmVyKSA9PiBTXHJcbiAgLyoqXHJcbiAgICogKnN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIGFzIHJlZ2V4KiAtIGFjdGlvbnMgdHlwZXMgdG8gYmUgaGlkZGVuIC8gc2hvd24gaW4gdGhlIG1vbml0b3JzICh3aGlsZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXJzKS5cclxuICAgKiBJZiBgYWN0aW9uc1doaXRlbGlzdGAgc3BlY2lmaWVkLCBgYWN0aW9uc0JsYWNrbGlzdGAgaXMgaWdub3JlZC5cclxuICAgKi9cclxuICBhY3Rpb25zQmxhY2tsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW11cclxuICAvKipcclxuICAgKiAqc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MgYXMgcmVnZXgqIC0gYWN0aW9ucyB0eXBlcyB0byBiZSBoaWRkZW4gLyBzaG93biBpbiB0aGUgbW9uaXRvcnMgKHdoaWxlIHBhc3NlZCB0byB0aGUgcmVkdWNlcnMpLlxyXG4gICAqIElmIGBhY3Rpb25zV2hpdGVsaXN0YCBzcGVjaWZpZWQsIGBhY3Rpb25zQmxhY2tsaXN0YCBpcyBpZ25vcmVkLlxyXG4gICAqL1xyXG4gIGFjdGlvbnNXaGl0ZWxpc3Q/OiBzdHJpbmcgfCBzdHJpbmdbXVxyXG4gIC8qKlxyXG4gICAqIGNhbGxlZCBmb3IgZXZlcnkgYWN0aW9uIGJlZm9yZSBzZW5kaW5nLCB0YWtlcyBgc3RhdGVgIGFuZCBgYWN0aW9uYCBvYmplY3QsIGFuZCByZXR1cm5zIGB0cnVlYCBpbiBjYXNlIGl0IGFsbG93cyBzZW5kaW5nIHRoZSBjdXJyZW50IGRhdGEgdG8gdGhlIG1vbml0b3IuXHJcbiAgICogVXNlIGl0IGFzIGEgbW9yZSBhZHZhbmNlZCB2ZXJzaW9uIG9mIGBhY3Rpb25zQmxhY2tsaXN0YC9gYWN0aW9uc1doaXRlbGlzdGAgcGFyYW1ldGVycy5cclxuICAgKi9cclxuICBwcmVkaWNhdGU/OiA8UywgQSBleHRlbmRzIEFjdGlvbj4oc3RhdGU6IFMsIGFjdGlvbjogQSkgPT4gYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIGlmIHNwZWNpZmllZCBhcyBgZmFsc2VgLCBpdCB3aWxsIG5vdCByZWNvcmQgdGhlIGNoYW5nZXMgdGlsbCBjbGlja2luZyBvbiBgU3RhcnQgcmVjb3JkaW5nYCBidXR0b24uXHJcbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIFJlZHV4IGVuaGFuY2VyLCBmb3Igb3RoZXJzIHVzZSBgYXV0b1BhdXNlYC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKi9cclxuICBzaG91bGRSZWNvcmRDaGFuZ2VzPzogYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIGlmIHNwZWNpZmllZCwgd2hlbmV2ZXIgY2xpY2tpbmcgb24gYFBhdXNlIHJlY29yZGluZ2AgYnV0dG9uIGFuZCB0aGVyZSBhcmUgYWN0aW9ucyBpbiB0aGUgaGlzdG9yeSBsb2csIHdpbGwgYWRkIHRoaXMgYWN0aW9uIHR5cGUuXHJcbiAgICogSWYgbm90IHNwZWNpZmllZCwgd2lsbCBjb21taXQgd2hlbiBwYXVzZWQuIEF2YWlsYWJsZSBvbmx5IGZvciBSZWR1eCBlbmhhbmNlci5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IFwiQEBQQVVTRURcIlwiXHJcbiAgICovXHJcbiAgcGF1c2VBY3Rpb25UeXBlPzogc3RyaW5nXHJcbiAgLyoqXHJcbiAgICogYXV0byBwYXVzZXMgd2hlbiB0aGUgZXh0ZW5zaW9u4oCZcyB3aW5kb3cgaXMgbm90IG9wZW5lZCwgYW5kIHNvIGhhcyB6ZXJvIGltcGFjdCBvbiB5b3VyIGFwcCB3aGVuIG5vdCBpbiB1c2UuXHJcbiAgICogTm90IGF2YWlsYWJsZSBmb3IgUmVkdXggZW5oYW5jZXIgKGFzIGl0IGFscmVhZHkgZG9lcyBpdCBidXQgc3RvcmluZyB0aGUgZGF0YSB0byBiZSBzZW50KS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgYXV0b1BhdXNlPzogYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIGlmIHNwZWNpZmllZCBhcyBgdHJ1ZWAsIGl0IHdpbGwgbm90IGFsbG93IGFueSBub24tbW9uaXRvciBhY3Rpb25zIHRvIGJlIGRpc3BhdGNoZWQgdGlsbCBjbGlja2luZyBvbiBgVW5sb2NrIGNoYW5nZXNgIGJ1dHRvbi5cclxuICAgKiBBdmFpbGFibGUgb25seSBmb3IgUmVkdXggZW5oYW5jZXIuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIHNob3VsZFN0YXJ0TG9ja2VkPzogYm9vbGVhblxyXG4gIC8qKlxyXG4gICAqIGlmIHNldCB0byBgZmFsc2VgLCB3aWxsIG5vdCByZWNvbXB1dGUgdGhlIHN0YXRlcyBvbiBob3QgcmVsb2FkaW5nIChvciBvbiByZXBsYWNpbmcgdGhlIHJlZHVjZXJzKS4gQXZhaWxhYmxlIG9ubHkgZm9yIFJlZHV4IGVuaGFuY2VyLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAqL1xyXG4gIHNob3VsZEhvdFJlbG9hZD86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBpZiBzcGVjaWZpZWQgYXMgYHRydWVgLCB3aGVuZXZlciB0aGVyZSdzIGFuIGV4Y2VwdGlvbiBpbiByZWR1Y2VycywgdGhlIG1vbml0b3JzIHdpbGwgc2hvdyB0aGUgZXJyb3IgbWVzc2FnZSwgYW5kIG5leHQgYWN0aW9ucyB3aWxsIG5vdCBiZSBkaXNwYXRjaGVkLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKi9cclxuICBzaG91bGRDYXRjaEVycm9ycz86IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBJZiB5b3Ugd2FudCB0byByZXN0cmljdCB0aGUgZXh0ZW5zaW9uLCBzcGVjaWZ5IHRoZSBmZWF0dXJlcyB5b3UgYWxsb3cuXHJcbiAgICogSWYgbm90IHNwZWNpZmllZCwgYWxsIG9mIHRoZSBmZWF0dXJlcyBhcmUgZW5hYmxlZC4gV2hlbiBzZXQgYXMgYW4gb2JqZWN0LCBvbmx5IHRob3NlIGluY2x1ZGVkIGFzIGB0cnVlYCB3aWxsIGJlIGFsbG93ZWQuXHJcbiAgICogTm90ZSB0aGF0IGV4Y2VwdCBgdHJ1ZWAvYGZhbHNlYCwgYGltcG9ydGAgYW5kIGBleHBvcnRgIGNhbiBiZSBzZXQgYXMgYGN1c3RvbWAgKHdoaWNoIGlzIGJ5IGRlZmF1bHQgZm9yIFJlZHV4IGVuaGFuY2VyKSwgbWVhbmluZyB0aGF0IHRoZSBpbXBvcnRpbmcvZXhwb3J0aW5nIG9jY3VycyBvbiB0aGUgY2xpZW50IHNpZGUuXHJcbiAgICogT3RoZXJ3aXNlLCB5b3UnbGwgZ2V0L3NldCB0aGUgZGF0YSByaWdodCBmcm9tIHRoZSBtb25pdG9yIHBhcnQuXHJcbiAgICovXHJcbiAgZmVhdHVyZXM/OiB7XHJcbiAgICAvKipcclxuICAgICAqIHN0YXJ0L3BhdXNlIHJlY29yZGluZyBvZiBkaXNwYXRjaGVkIGFjdGlvbnNcclxuICAgICAqL1xyXG4gICAgcGF1c2U/OiBib29sZWFuXHJcbiAgICAvKipcclxuICAgICAqIGxvY2svdW5sb2NrIGRpc3BhdGNoaW5nIGFjdGlvbnMgYW5kIHNpZGUgZWZmZWN0c1xyXG4gICAgICovXHJcbiAgICBsb2NrPzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiBwZXJzaXN0IHN0YXRlcyBvbiBwYWdlIHJlbG9hZGluZ1xyXG4gICAgICovXHJcbiAgICBwZXJzaXN0PzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiBleHBvcnQgaGlzdG9yeSBvZiBhY3Rpb25zIGluIGEgZmlsZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQ/OiBib29sZWFuIHwgJ2N1c3RvbSdcclxuICAgIC8qKlxyXG4gICAgICogaW1wb3J0IGhpc3Rvcnkgb2YgYWN0aW9ucyBmcm9tIGEgZmlsZVxyXG4gICAgICovXHJcbiAgICBpbXBvcnQ/OiBib29sZWFuIHwgJ2N1c3RvbSdcclxuICAgIC8qKlxyXG4gICAgICoganVtcCBiYWNrIGFuZCBmb3J0aCAodGltZSB0cmF2ZWxsaW5nKVxyXG4gICAgICovXHJcbiAgICBqdW1wPzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiBza2lwIChjYW5jZWwpIGFjdGlvbnNcclxuICAgICAqL1xyXG4gICAgc2tpcD86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogZHJhZyBhbmQgZHJvcCBhY3Rpb25zIGluIHRoZSBoaXN0b3J5IGxpc3RcclxuICAgICAqL1xyXG4gICAgcmVvcmRlcj86IGJvb2xlYW5cclxuICAgIC8qKlxyXG4gICAgICogZGlzcGF0Y2ggY3VzdG9tIGFjdGlvbnMgb3IgYWN0aW9uIGNyZWF0b3JzXHJcbiAgICAgKi9cclxuICAgIGRpc3BhdGNoPzogYm9vbGVhblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZSB0ZXN0cyBmb3IgdGhlIHNlbGVjdGVkIGFjdGlvbnNcclxuICAgICAqL1xyXG4gICAgdGVzdD86IGJvb2xlYW5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgb3IgYSBzdGFja3RyYWNlLXJldHVybmluZyBmdW5jdGlvbiB0byByZWNvcmQgY2FsbCBzdGFjayB0cmFjZXMgZm9yIGRpc3BhdGNoZWQgYWN0aW9ucy5cclxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgKi9cclxuICB0cmFjZT86IGJvb2xlYW4gfCAoPEEgZXh0ZW5kcyBBY3Rpb24+KGFjdGlvbjogQSkgPT4gc3RyaW5nKVxyXG4gIC8qKlxyXG4gICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBzdGFjayB0cmFjZSBlbnRyaWVzIHRvIHJlY29yZCBwZXIgYWN0aW9uLiBEZWZhdWx0cyB0byAxMC5cclxuICAgKi9cclxuICB0cmFjZUxpbWl0PzogbnVtYmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29tcG9zZVdpdGhEZXZUb29sczoge1xyXG4gIChvcHRpb25zOiBFbmhhbmNlck9wdGlvbnMpOiB0eXBlb2YgY29tcG9zZVxyXG4gIDxTdG9yZUV4dD4oLi4uZnVuY3M6IEFycmF5PFN0b3JlRW5oYW5jZXI8U3RvcmVFeHQ+Pik6IFN0b3JlRW5oYW5jZXI8U3RvcmVFeHQ+XHJcbn0gPVxyXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgKHdpbmRvdyBhcyBhbnkpLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1xyXG4gICAgPyAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXHJcbiAgICA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSByZXR1cm4gY29tcG9zZVxyXG4gICAgICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIChhcmd1bWVudHMgYXMgYW55KSBhcyBGdW5jdGlvbltdKVxyXG4gICAgICB9XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRldlRvb2xzRW5oYW5jZXI6IHtcclxuICAob3B0aW9uczogRW5oYW5jZXJPcHRpb25zKTogU3RvcmVFbmhhbmNlcjxhbnk+XHJcbn0gPVxyXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fXHJcbiAgICA/ICh3aW5kb3cgYXMgYW55KS5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fXHJcbiAgICA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihub29wKSB7XHJcbiAgICAgICAgICByZXR1cm4gbm9vcFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgXCJwbGFpblwiIG9iamVjdCwgaS5lLiBhbiBvYmplY3Qgd2hvc2VcclxuICogcHJvdG95cGUgaXMgdGhlIHJvb3QgYE9iamVjdC5wcm90b3R5cGVgLiBUaGlzIGluY2x1ZGVzIG9iamVjdHMgY3JlYXRlZFxyXG4gKiB1c2luZyBvYmplY3QgbGl0ZXJhbHMsIGJ1dCBub3QgZm9yIGluc3RhbmNlIGZvciBjbGFzcyBpbnN0YW5jZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBvYmplY3Qge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2VcclxuXHJcbiAgbGV0IHByb3RvID0gdmFsdWVcclxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xyXG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSA9PT0gcHJvdG9cclxufVxyXG4iLCJpbXBvcnQgeyBNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZU1lYXN1cmVVdGlscyhtYXhEZWxheTogbnVtYmVyLCBmbk5hbWU6IHN0cmluZykge1xyXG4gIGxldCBlbGFwc2VkID0gMFxyXG4gIHJldHVybiB7XHJcbiAgICBtZWFzdXJlVGltZTxUPihmbjogKCkgPT4gVCk6IFQge1xyXG4gICAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmbigpXHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgY29uc3QgZmluaXNoZWQgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgZWxhcHNlZCArPSBmaW5pc2hlZCAtIHN0YXJ0ZWRcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhcm5JZkV4Y2VlZGVkKCkge1xyXG4gICAgICBpZiAoZWxhcHNlZCA+IG1heERlbGF5KSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGAke2ZuTmFtZX0gdG9vayAke2VsYXBzZWR9bXMsIHdoaWNoIGlzIG1vcmUgdGhhbiB0aGUgd2FybmluZyB0aHJlc2hvbGQgb2YgJHttYXhEZWxheX1tcy4gXHJcbklmIHlvdXIgc3RhdGUgb3IgYWN0aW9ucyBhcmUgdmVyeSBsYXJnZSwgeW91IG1heSB3YW50IHRvIGRpc2FibGUgdGhlIG1pZGRsZXdhcmUgYXMgaXQgbWlnaHQgY2F1c2UgdG9vIG11Y2ggb2YgYSBzbG93ZG93biBpbiBkZXZlbG9wbWVudCBtb2RlLiBTZWUgaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy9hcGkvZ2V0RGVmYXVsdE1pZGRsZXdhcmUgZm9yIGluc3RydWN0aW9ucy5cclxuSXQgaXMgZGlzYWJsZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMsIHNvIHlvdSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoYXQuYClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlQXJyYXk8XHJcbiAgTWlkZGxld2FyZXMgZXh0ZW5kcyBNaWRkbGV3YXJlPGFueSwgYW55PlxyXG4+IGV4dGVuZHMgQXJyYXk8TWlkZGxld2FyZXM+IHtcclxuICBjb25jYXQ8QWRkaXRpb25hbE1pZGRsZXdhcmVzIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxNaWRkbGV3YXJlPGFueSwgYW55Pj4+KFxyXG4gICAgaXRlbXM6IEFkZGl0aW9uYWxNaWRkbGV3YXJlc1xyXG4gICk6IE1pZGRsZXdhcmVBcnJheTxNaWRkbGV3YXJlcyB8IEFkZGl0aW9uYWxNaWRkbGV3YXJlc1tudW1iZXJdPlxyXG5cclxuICBjb25jYXQ8QWRkaXRpb25hbE1pZGRsZXdhcmVzIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxNaWRkbGV3YXJlPGFueSwgYW55Pj4+KFxyXG4gICAgLi4uaXRlbXM6IEFkZGl0aW9uYWxNaWRkbGV3YXJlc1xyXG4gICk6IE1pZGRsZXdhcmVBcnJheTxNaWRkbGV3YXJlcyB8IEFkZGl0aW9uYWxNaWRkbGV3YXJlc1tudW1iZXJdPlxyXG5cclxuICBjb25jYXQoLi4uYXJyOiBhbnlbXSkge1xyXG4gICAgcmV0dXJuIG5ldyBNaWRkbGV3YXJlQXJyYXkoLi4uc3VwZXIuY29uY2F0KC4uLmFycikpXHJcbiAgfVxyXG5cclxuICBwcmVwZW5kPEFkZGl0aW9uYWxNaWRkbGV3YXJlcyBleHRlbmRzIFJlYWRvbmx5QXJyYXk8TWlkZGxld2FyZTxhbnksIGFueT4+PihcclxuICAgIGl0ZW1zOiBBZGRpdGlvbmFsTWlkZGxld2FyZXNcclxuICApOiBNaWRkbGV3YXJlQXJyYXk8QWRkaXRpb25hbE1pZGRsZXdhcmVzW251bWJlcl0gfCBNaWRkbGV3YXJlcz5cclxuXHJcbiAgcHJlcGVuZDxBZGRpdGlvbmFsTWlkZGxld2FyZXMgZXh0ZW5kcyBSZWFkb25seUFycmF5PE1pZGRsZXdhcmU8YW55LCBhbnk+Pj4oXHJcbiAgICAuLi5pdGVtczogQWRkaXRpb25hbE1pZGRsZXdhcmVzXHJcbiAgKTogTWlkZGxld2FyZUFycmF5PEFkZGl0aW9uYWxNaWRkbGV3YXJlc1tudW1iZXJdIHwgTWlkZGxld2FyZXM+XHJcblxyXG4gIHByZXBlbmQoLi4uYXJyOiBhbnlbXSkge1xyXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJbMF0pKSB7XHJcbiAgICAgIHJldHVybiBuZXcgTWlkZGxld2FyZUFycmF5KC4uLmFyclswXS5jb25jYXQodGhpcykpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IE1pZGRsZXdhcmVBcnJheSguLi5hcnIuY29uY2F0KHRoaXMpKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGdldFRpbWVNZWFzdXJlVXRpbHMgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxudHlwZSBFbnRyeVByb2Nlc3NvciA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gYW55XHJcblxyXG5jb25zdCBpc1Byb2R1Y3Rpb246IGJvb2xlYW4gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbmNvbnN0IHByZWZpeDogc3RyaW5nID0gJ0ludmFyaWFudCBmYWlsZWQnXHJcblxyXG4vLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgY29uZGl0aW9uIGZhaWxzXHJcbi8vIFN0cmlwIG91dCBlcnJvciBtZXNzYWdlcyBmb3IgcHJvZHVjdGlvblxyXG4vLyA+IE5vdCBwcm92aWRpbmcgYW4gaW5saW5lIGRlZmF1bHQgYXJndW1lbnQgZm9yIG1lc3NhZ2UgYXMgdGhlIHJlc3VsdCBpcyBzbWFsbGVyXHJcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb246IGFueSwgbWVzc2FnZT86IHN0cmluZykge1xyXG4gIGlmIChjb25kaXRpb24pIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICAvLyBDb25kaXRpb24gbm90IHBhc3NlZFxyXG5cclxuICAvLyBJbiBwcm9kdWN0aW9uIHdlIHN0cmlwIHRoZSBtZXNzYWdlIGJ1dCBzdGlsbCB0aHJvd1xyXG4gIGlmIChpc1Byb2R1Y3Rpb24pIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpXHJcbiAgfVxyXG5cclxuICAvLyBXaGVuIG5vdCBpbiBwcm9kdWN0aW9uIHdlIGFsbG93IHRoZSBtZXNzYWdlIHRvIHBhc3MgdGhyb3VnaFxyXG4gIC8vICpUaGlzIGJsb2NrIHdpbGwgYmUgcmVtb3ZlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkcypcclxuICB0aHJvdyBuZXcgRXJyb3IoYCR7cHJlZml4fTogJHttZXNzYWdlIHx8ICcnfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeShcclxuICBvYmo6IGFueSxcclxuICBzZXJpYWxpemVyPzogRW50cnlQcm9jZXNzb3IsXHJcbiAgaW5kZW50Pzogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIGRlY3ljbGVyPzogRW50cnlQcm9jZXNzb3JcclxuKTogc3RyaW5nIHtcclxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBnZXRTZXJpYWxpemUoc2VyaWFsaXplciwgZGVjeWNsZXIpLCBpbmRlbnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZShcclxuICBzZXJpYWxpemVyPzogRW50cnlQcm9jZXNzb3IsXHJcbiAgZGVjeWNsZXI/OiBFbnRyeVByb2Nlc3NvclxyXG4pOiBFbnRyeVByb2Nlc3NvciB7XHJcbiAgbGV0IHN0YWNrOiBhbnlbXSA9IFtdLFxyXG4gICAga2V5czogYW55W10gPSBbXVxyXG5cclxuICBpZiAoIWRlY3ljbGVyKVxyXG4gICAgZGVjeWNsZXIgPSBmdW5jdGlvbihfOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgaWYgKHN0YWNrWzBdID09PSB2YWx1ZSkgcmV0dXJuICdbQ2lyY3VsYXIgfl0nXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgJ1tDaXJjdWxhciB+LicgKyBrZXlzLnNsaWNlKDAsIHN0YWNrLmluZGV4T2YodmFsdWUpKS5qb2luKCcuJykgKyAnXSdcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24odGhpczogYW55LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgdmFyIHRoaXNQb3MgPSBzdGFjay5pbmRleE9mKHRoaXMpXHJcbiAgICAgIH50aGlzUG9zID8gc3RhY2suc3BsaWNlKHRoaXNQb3MgKyAxKSA6IHN0YWNrLnB1c2godGhpcylcclxuICAgICAgfnRoaXNQb3MgPyBrZXlzLnNwbGljZSh0aGlzUG9zLCBJbmZpbml0eSwga2V5KSA6IGtleXMucHVzaChrZXkpXHJcbiAgICAgIGlmICh+c3RhY2suaW5kZXhPZih2YWx1ZSkpIHZhbHVlID0gZGVjeWNsZXIhLmNhbGwodGhpcywga2V5LCB2YWx1ZSlcclxuICAgIH0gZWxzZSBzdGFjay5wdXNoKHZhbHVlKVxyXG5cclxuICAgIHJldHVybiBzZXJpYWxpemVyID09IG51bGwgPyB2YWx1ZSA6IHNlcmlhbGl6ZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGBpc0ltbXV0YWJsZWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ltbXV0YWJsZURlZmF1bHQodmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhY2tGb3JNdXRhdGlvbnMoXHJcbiAgaXNJbW11dGFibGU6IElzSW1tdXRhYmxlRnVuYyxcclxuICBpZ25vcmVQYXRoczogc3RyaW5nW10gfCB1bmRlZmluZWQsXHJcbiAgb2JqOiBhbnlcclxuKSB7XHJcbiAgY29uc3QgdHJhY2tlZFByb3BlcnRpZXMgPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmopXHJcbiAgcmV0dXJuIHtcclxuICAgIGRldGVjdE11dGF0aW9ucygpIHtcclxuICAgICAgcmV0dXJuIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0aWVzLCBvYmopXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgVHJhY2tlZFByb3BlcnR5IHtcclxuICB2YWx1ZTogYW55XHJcbiAgY2hpbGRyZW46IFJlY29yZDxzdHJpbmcsIGFueT5cclxufVxyXG5cclxuZnVuY3Rpb24gdHJhY2tQcm9wZXJ0aWVzKFxyXG4gIGlzSW1tdXRhYmxlOiBJc0ltbXV0YWJsZUZ1bmMsXHJcbiAgaWdub3JlUGF0aHM6IElnbm9yZVBhdGhzID0gW10sXHJcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxyXG4gIHBhdGg6IHN0cmluZ1tdID0gW11cclxuKSB7XHJcbiAgY29uc3QgdHJhY2tlZDogUGFydGlhbDxUcmFja2VkUHJvcGVydHk+ID0geyB2YWx1ZTogb2JqIH1cclxuXHJcbiAgaWYgKCFpc0ltbXV0YWJsZShvYmopKSB7XHJcbiAgICB0cmFja2VkLmNoaWxkcmVuID0ge31cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgY29uc3QgY2hpbGRQYXRoID0gcGF0aC5jb25jYXQoa2V5KVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaWdub3JlUGF0aHMubGVuZ3RoICYmXHJcbiAgICAgICAgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGguam9pbignLicpKSAhPT0gLTFcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJhY2tlZC5jaGlsZHJlbltrZXldID0gdHJhY2tQcm9wZXJ0aWVzKFxyXG4gICAgICAgIGlzSW1tdXRhYmxlLFxyXG4gICAgICAgIGlnbm9yZVBhdGhzLFxyXG4gICAgICAgIG9ialtrZXldLFxyXG4gICAgICAgIGNoaWxkUGF0aFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cmFja2VkIGFzIFRyYWNrZWRQcm9wZXJ0eVxyXG59XHJcblxyXG50eXBlIElnbm9yZVBhdGhzID0gc3RyaW5nW11cclxuXHJcbmZ1bmN0aW9uIGRldGVjdE11dGF0aW9ucyhcclxuICBpc0ltbXV0YWJsZTogSXNJbW11dGFibGVGdW5jLFxyXG4gIGlnbm9yZVBhdGhzOiBJZ25vcmVQYXRocyA9IFtdLFxyXG4gIHRyYWNrZWRQcm9wZXJ0eTogVHJhY2tlZFByb3BlcnR5LFxyXG4gIG9iajogYW55LFxyXG4gIHNhbWVQYXJlbnRSZWY6IGJvb2xlYW4gPSBmYWxzZSxcclxuICBwYXRoOiBzdHJpbmdbXSA9IFtdXHJcbik6IHsgd2FzTXV0YXRlZDogYm9vbGVhbjsgcGF0aD86IHN0cmluZ1tdIH0ge1xyXG4gIGNvbnN0IHByZXZPYmogPSB0cmFja2VkUHJvcGVydHkgPyB0cmFja2VkUHJvcGVydHkudmFsdWUgOiB1bmRlZmluZWRcclxuXHJcbiAgY29uc3Qgc2FtZVJlZiA9IHByZXZPYmogPT09IG9ialxyXG5cclxuICBpZiAoc2FtZVBhcmVudFJlZiAmJiAhc2FtZVJlZiAmJiAhTnVtYmVyLmlzTmFOKG9iaikpIHtcclxuICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IHRydWUsIHBhdGggfVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzSW1tdXRhYmxlKHByZXZPYmopIHx8IGlzSW1tdXRhYmxlKG9iaikpIHtcclxuICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IGZhbHNlIH1cclxuICB9XHJcblxyXG4gIC8vIEdhdGhlciBhbGwga2V5cyBmcm9tIHByZXYgKHRyYWNrZWQpIGFuZCBhZnRlciBvYmpzXHJcbiAgY29uc3Qga2V5c1RvRGV0ZWN0OiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9XHJcbiAgT2JqZWN0LmtleXModHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWVcclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGtleXNUb0RldGVjdClcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cclxuICAgIGNvbnN0IGNoaWxkUGF0aCA9IHBhdGguY29uY2F0KGtleSlcclxuICAgIGlmIChpZ25vcmVQYXRocy5sZW5ndGggJiYgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGguam9pbignLicpKSAhPT0gLTEpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBkZXRlY3RNdXRhdGlvbnMoXHJcbiAgICAgIGlzSW1tdXRhYmxlLFxyXG4gICAgICBpZ25vcmVQYXRocyxcclxuICAgICAgdHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuW2tleV0sXHJcbiAgICAgIG9ialtrZXldLFxyXG4gICAgICBzYW1lUmVmLFxyXG4gICAgICBjaGlsZFBhdGhcclxuICAgIClcclxuXHJcbiAgICBpZiAocmVzdWx0Lndhc011dGF0ZWQpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9XHJcbn1cclxuXHJcbnR5cGUgSXNJbW11dGFibGVGdW5jID0gKHZhbHVlOiBhbnkpID0+IGJvb2xlYW5cclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBgY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKClgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gY2hlY2sgaWYgYSB2YWx1ZSBpcyBjb25zaWRlcmVkIHRvIGJlIGltbXV0YWJsZS5cclxuICAgIFRoaXMgZnVuY3Rpb24gaXMgYXBwbGllZCByZWN1cnNpdmVseSB0byBldmVyeSB2YWx1ZSBjb250YWluZWQgaW4gdGhlIHN0YXRlLlxyXG4gICAgVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gd2lsbCByZXR1cm4gdHJ1ZSBmb3IgcHJpbWl0aXZlIHR5cGVzIFxyXG4gICAgKGxpa2UgbnVtYmVycywgc3RyaW5ncywgYm9vbGVhbnMsIG51bGwgYW5kIHVuZGVmaW5lZCkuXHJcbiAgICovXHJcbiAgaXNJbW11dGFibGU/OiBJc0ltbXV0YWJsZUZ1bmNcclxuICAvKiogXHJcbiAgICBBbiBhcnJheSBvZiBkb3Qtc2VwYXJhdGVkIHBhdGggc3RyaW5ncyB0aGF0IG1hdGNoIG5hbWVkIG5vZGVzIGZyb20gXHJcbiAgICB0aGUgcm9vdCBzdGF0ZSB0byBpZ25vcmUgd2hlbiBjaGVja2luZyBmb3IgaW1tdXRhYmlsaXR5LlxyXG4gICAgRGVmYXVsdHMgdG8gdW5kZWZpbmVkXHJcbiAgICovXHJcbiAgaWdub3JlZFBhdGhzPzogc3RyaW5nW11cclxuICAvKiogUHJpbnQgYSB3YXJuaW5nIGlmIGNoZWNrcyB0YWtlIGxvbmdlciB0aGFuIE4gbXMuIERlZmF1bHQ6IDMybXMgKi9cclxuICB3YXJuQWZ0ZXI/OiBudW1iZXJcclxuICAvLyBAZGVwcmVjYXRlZC4gVXNlIGlnbm9yZWRQYXRoc1xyXG4gIGlnbm9yZT86IHN0cmluZ1tdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWlkZGxld2FyZSB0aGF0IGNoZWNrcyB3aGV0aGVyIGFueSBzdGF0ZSB3YXMgbXV0YXRlZCBpbiBiZXR3ZWVuXHJcbiAqIGRpc3BhdGNoZXMgb3IgZHVyaW5nIGEgZGlzcGF0Y2guIElmIGFueSBtdXRhdGlvbnMgYXJlIGRldGVjdGVkLCBhbiBlcnJvciBpc1xyXG4gKiB0aHJvd24uXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIE1pZGRsZXdhcmUgb3B0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShcclxuICBvcHRpb25zOiBJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zID0ge31cclxuKTogTWlkZGxld2FyZSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHJldHVybiAoKSA9PiBuZXh0ID0+IGFjdGlvbiA9PiBuZXh0KGFjdGlvbilcclxuICB9XHJcblxyXG4gIGxldCB7XHJcbiAgICBpc0ltbXV0YWJsZSA9IGlzSW1tdXRhYmxlRGVmYXVsdCxcclxuICAgIGlnbm9yZWRQYXRocyxcclxuICAgIHdhcm5BZnRlciA9IDMyLFxyXG4gICAgaWdub3JlXHJcbiAgfSA9IG9wdGlvbnNcclxuXHJcbiAgLy8gQWxpYXMgaWdub3JlLT5pZ25vcmVkUGF0aHMsIGJ1dCBwcmVmZXIgaWdub3JlZFBhdGhzIGlmIHByZXNlbnRcclxuICBpZ25vcmVkUGF0aHMgPSBpZ25vcmVkUGF0aHMgfHwgaWdub3JlXHJcblxyXG4gIGNvbnN0IHRyYWNrID0gdHJhY2tGb3JNdXRhdGlvbnMuYmluZChudWxsLCBpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzKVxyXG5cclxuICByZXR1cm4gKHsgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgbGV0IHN0YXRlID0gZ2V0U3RhdGUoKVxyXG4gICAgbGV0IHRyYWNrZXIgPSB0cmFjayhzdGF0ZSlcclxuXHJcbiAgICBsZXQgcmVzdWx0XHJcbiAgICByZXR1cm4gbmV4dCA9PiBhY3Rpb24gPT4ge1xyXG4gICAgICBjb25zdCBtZWFzdXJlVXRpbHMgPSBnZXRUaW1lTWVhc3VyZVV0aWxzKFxyXG4gICAgICAgIHdhcm5BZnRlcixcclxuICAgICAgICAnSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlJ1xyXG4gICAgICApXHJcblxyXG4gICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpXHJcbiAgICAgICAgLy8gVHJhY2sgYmVmb3JlIHBvdGVudGlhbGx5IG5vdCBtZWV0aW5nIHRoZSBpbnZhcmlhbnRcclxuICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpXHJcblxyXG4gICAgICAgIGludmFyaWFudChcclxuICAgICAgICAgICFyZXN1bHQud2FzTXV0YXRlZCxcclxuICAgICAgICAgIGBBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBiZXR3ZWVuIGRpc3BhdGNoZXMsIGluIHRoZSBwYXRoICckeyhcclxuICAgICAgICAgICAgcmVzdWx0LnBhdGggfHwgW11cclxuICAgICAgICAgICkuam9pbihcclxuICAgICAgICAgICAgJy4nXHJcbiAgICAgICAgICApfScuICBUaGlzIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IuIChodHRwczovL3JlZHV4LmpzLm9yZy90cm91Ymxlc2hvb3RpbmcjbmV2ZXItbXV0YXRlLXJlZHVjZXItYXJndW1lbnRzKWBcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCBkaXNwYXRjaGVkQWN0aW9uID0gbmV4dChhY3Rpb24pXHJcblxyXG4gICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKVxyXG5cclxuICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpXHJcbiAgICAgICAgLy8gVHJhY2sgYmVmb3JlIHBvdGVudGlhbGx5IG5vdCBtZWV0aW5nIHRoZSBpbnZhcmlhbnRcclxuICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpXHJcblxyXG4gICAgICAgIHJlc3VsdC53YXNNdXRhdGVkICYmXHJcbiAgICAgICAgICBpbnZhcmlhbnQoXHJcbiAgICAgICAgICAgICFyZXN1bHQud2FzTXV0YXRlZCxcclxuICAgICAgICAgICAgYEEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGluc2lkZSBhIGRpc3BhdGNoLCBpbiB0aGUgcGF0aDogJHsoXHJcbiAgICAgICAgICAgICAgcmVzdWx0LnBhdGggfHwgW11cclxuICAgICAgICAgICAgKS5qb2luKFxyXG4gICAgICAgICAgICAgICcuJ1xyXG4gICAgICAgICAgICApfS4gVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhlIGFjdGlvbiAke3N0cmluZ2lmeShcclxuICAgICAgICAgICAgICBhY3Rpb25cclxuICAgICAgICAgICAgKX0uIChodHRwczovL3JlZHV4LmpzLm9yZy90cm91Ymxlc2hvb3RpbmcjbmV2ZXItbXV0YXRlLXJlZHVjZXItYXJndW1lbnRzKWBcclxuICAgICAgICAgIClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIG1lYXN1cmVVdGlscy53YXJuSWZFeGNlZWRlZCgpXHJcblxyXG4gICAgICByZXR1cm4gZGlzcGF0Y2hlZEFjdGlvblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnXHJcbmltcG9ydCB7IE1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgZ2V0VGltZU1lYXN1cmVVdGlscyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgXCJwbGFpblwiLCBpLmUuIGEgdmFsdWUgdGhhdCBpcyBlaXRoZXJcclxuICogZGlyZWN0bHkgSlNPTi1zZXJpYWxpemFibGUgKGJvb2xlYW4sIG51bWJlciwgc3RyaW5nLCBhcnJheSwgcGxhaW4gb2JqZWN0KVxyXG4gKiBvciBgdW5kZWZpbmVkYC5cclxuICpcclxuICogQHBhcmFtIHZhbCBUaGUgdmFsdWUgdG8gY2hlY2suXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluKHZhbDogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnIHx8XHJcbiAgICB2YWwgPT09IG51bGwgfHxcclxuICAgIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8XHJcbiAgICB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHxcclxuICAgIHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8XHJcbiAgICBBcnJheS5pc0FycmF5KHZhbCkgfHxcclxuICAgIGlzUGxhaW5PYmplY3QodmFsKVxyXG4gIClcclxufVxyXG5cclxuaW50ZXJmYWNlIE5vblNlcmlhbGl6YWJsZVZhbHVlIHtcclxuICBrZXlQYXRoOiBzdHJpbmdcclxuICB2YWx1ZTogdW5rbm93blxyXG59XHJcblxyXG4vKipcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShcclxuICB2YWx1ZTogdW5rbm93bixcclxuICBwYXRoOiBSZWFkb25seUFycmF5PHN0cmluZz4gPSBbXSxcclxuICBpc1NlcmlhbGl6YWJsZTogKHZhbHVlOiB1bmtub3duKSA9PiBib29sZWFuID0gaXNQbGFpbixcclxuICBnZXRFbnRyaWVzPzogKHZhbHVlOiB1bmtub3duKSA9PiBbc3RyaW5nLCBhbnldW10sXHJcbiAgaWdub3JlZFBhdGhzOiBzdHJpbmdbXSA9IFtdXHJcbik6IE5vblNlcmlhbGl6YWJsZVZhbHVlIHwgZmFsc2Uge1xyXG4gIGxldCBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZTogTm9uU2VyaWFsaXphYmxlVmFsdWUgfCBmYWxzZVxyXG5cclxuICBpZiAoIWlzU2VyaWFsaXphYmxlKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5UGF0aDogcGF0aC5qb2luKCcuJykgfHwgJzxyb290PicsXHJcbiAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZW50cmllcyA9IGdldEVudHJpZXMgIT0gbnVsbCA/IGdldEVudHJpZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpXHJcblxyXG4gIGNvbnN0IGhhc0lnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocy5sZW5ndGggPiAwXHJcblxyXG4gIGZvciAoY29uc3QgW3Byb3BlcnR5LCBuZXN0ZWRWYWx1ZV0gb2YgZW50cmllcykge1xyXG4gICAgY29uc3QgbmVzdGVkUGF0aCA9IHBhdGguY29uY2F0KHByb3BlcnR5KVxyXG5cclxuICAgIGlmIChoYXNJZ25vcmVkUGF0aHMgJiYgaWdub3JlZFBhdGhzLmluZGV4T2YobmVzdGVkUGF0aC5qb2luKCcuJykpID49IDApIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzU2VyaWFsaXphYmxlKG5lc3RlZFZhbHVlKSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleVBhdGg6IG5lc3RlZFBhdGguam9pbignLicpLFxyXG4gICAgICAgIHZhbHVlOiBuZXN0ZWRWYWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuZXN0ZWRWYWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgZm91bmROZXN0ZWRTZXJpYWxpemFibGUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoXHJcbiAgICAgICAgbmVzdGVkVmFsdWUsXHJcbiAgICAgICAgbmVzdGVkUGF0aCxcclxuICAgICAgICBpc1NlcmlhbGl6YWJsZSxcclxuICAgICAgICBnZXRFbnRyaWVzLFxyXG4gICAgICAgIGlnbm9yZWRQYXRoc1xyXG4gICAgICApXHJcblxyXG4gICAgICBpZiAoZm91bmROZXN0ZWRTZXJpYWxpemFibGUpIHtcclxuICAgICAgICByZXR1cm4gZm91bmROZXN0ZWRTZXJpYWxpemFibGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBgY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKClgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBmdW5jdGlvbiB0byBjaGVjayBpZiBhIHZhbHVlIGlzIGNvbnNpZGVyZWQgc2VyaWFsaXphYmxlLiBUaGlzXHJcbiAgICogZnVuY3Rpb24gaXMgYXBwbGllZCByZWN1cnNpdmVseSB0byBldmVyeSB2YWx1ZSBjb250YWluZWQgaW4gdGhlXHJcbiAgICogc3RhdGUuIERlZmF1bHRzIHRvIGBpc1BsYWluKClgLlxyXG4gICAqL1xyXG4gIGlzU2VyaWFsaXphYmxlPzogKHZhbHVlOiBhbnkpID0+IGJvb2xlYW5cclxuICAvKipcclxuICAgKiBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmV0cmlldmUgZW50cmllcyBmcm9tIGVhY2hcclxuICAgKiB2YWx1ZS4gIElmIHVuc3BlY2lmaWVkLCBgT2JqZWN0LmVudHJpZXNgIHdpbGwgYmUgdXNlZC4gRGVmYXVsdHNcclxuICAgKiB0byBgdW5kZWZpbmVkYC5cclxuICAgKi9cclxuICBnZXRFbnRyaWVzPzogKHZhbHVlOiBhbnkpID0+IFtzdHJpbmcsIGFueV1bXVxyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiBhY3Rpb24gdHlwZXMgdG8gaWdub3JlIHdoZW4gY2hlY2tpbmcgZm9yIHNlcmlhbGl6YWJpbGl0eS5cclxuICAgKiBEZWZhdWx0cyB0byBbXVxyXG4gICAqL1xyXG4gIGlnbm9yZWRBY3Rpb25zPzogc3RyaW5nW11cclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgb2YgZG90LXNlcGFyYXRlZCBwYXRoIHN0cmluZ3MgdG8gaWdub3JlIHdoZW4gY2hlY2tpbmdcclxuICAgKiBmb3Igc2VyaWFsaXphYmlsaXR5LCBEZWZhdWx0cyB0byBbJ21ldGEuYXJnJ11cclxuICAgKi9cclxuICBpZ25vcmVkQWN0aW9uUGF0aHM/OiBzdHJpbmdbXVxyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSBvZiBkb3Qtc2VwYXJhdGVkIHBhdGggc3RyaW5ncyB0byBpZ25vcmUgd2hlbiBjaGVja2luZ1xyXG4gICAqIGZvciBzZXJpYWxpemFiaWxpdHksIERlZmF1bHRzIHRvIFtdXHJcbiAgICovXHJcbiAgaWdub3JlZFBhdGhzPzogc3RyaW5nW11cclxuICAvKipcclxuICAgKiBFeGVjdXRpb24gdGltZSB3YXJuaW5nIHRocmVzaG9sZC4gSWYgdGhlIG1pZGRsZXdhcmUgdGFrZXMgbG9uZ2VyXHJcbiAgICogdGhhbiBgd2FybkFmdGVyYCBtcywgYSB3YXJuaW5nIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBjb25zb2xlLlxyXG4gICAqIERlZmF1bHRzIHRvIDMybXMuXHJcbiAgICovXHJcbiAgd2FybkFmdGVyPzogbnVtYmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWlkZGxld2FyZSB0aGF0LCBhZnRlciBldmVyeSBzdGF0ZSBjaGFuZ2UsIGNoZWNrcyBpZiB0aGUgbmV3XHJcbiAqIHN0YXRlIGlzIHNlcmlhbGl6YWJsZS4gSWYgYSBub24tc2VyaWFsaXphYmxlIHZhbHVlIGlzIGZvdW5kIHdpdGhpbiB0aGVcclxuICogc3RhdGUsIGFuIGVycm9yIGlzIHByaW50ZWQgdG8gdGhlIGNvbnNvbGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIE1pZGRsZXdhcmUgb3B0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShcclxuICBvcHRpb25zOiBTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zID0ge31cclxuKTogTWlkZGxld2FyZSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHJldHVybiAoKSA9PiBuZXh0ID0+IGFjdGlvbiA9PiBuZXh0KGFjdGlvbilcclxuICB9XHJcbiAgY29uc3Qge1xyXG4gICAgaXNTZXJpYWxpemFibGUgPSBpc1BsYWluLFxyXG4gICAgZ2V0RW50cmllcyxcclxuICAgIGlnbm9yZWRBY3Rpb25zID0gW10sXHJcbiAgICBpZ25vcmVkQWN0aW9uUGF0aHMgPSBbJ21ldGEuYXJnJ10sXHJcbiAgICBpZ25vcmVkUGF0aHMgPSBbXSxcclxuICAgIHdhcm5BZnRlciA9IDMyXHJcbiAgfSA9IG9wdGlvbnNcclxuXHJcbiAgcmV0dXJuIHN0b3JlQVBJID0+IG5leHQgPT4gYWN0aW9uID0+IHtcclxuICAgIGlmIChpZ25vcmVkQWN0aW9ucy5sZW5ndGggJiYgaWdub3JlZEFjdGlvbnMuaW5kZXhPZihhY3Rpb24udHlwZSkgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGFjdGlvbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZWFzdXJlVXRpbHMgPSBnZXRUaW1lTWVhc3VyZVV0aWxzKFxyXG4gICAgICB3YXJuQWZ0ZXIsXHJcbiAgICAgICdTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbiAgICApXHJcbiAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKFxyXG4gICAgICAgIGFjdGlvbixcclxuICAgICAgICBbXSxcclxuICAgICAgICBpc1NlcmlhbGl6YWJsZSxcclxuICAgICAgICBnZXRFbnRyaWVzLFxyXG4gICAgICAgIGlnbm9yZWRBY3Rpb25QYXRoc1xyXG4gICAgICApXHJcblxyXG4gICAgICBpZiAoZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHsga2V5UGF0aCwgdmFsdWUgfSA9IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWVcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgIGBBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIGFuIGFjdGlvbiwgaW4gdGhlIHBhdGg6IFxcYCR7a2V5UGF0aH1cXGAuIFZhbHVlOmAsXHJcbiAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICdcXG5UYWtlIGEgbG9vayBhdCB0aGUgbG9naWMgdGhhdCBkaXNwYXRjaGVkIHRoaXMgYWN0aW9uOiAnLFxyXG4gICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgJ1xcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL2FjdGlvbnMjd2h5LXNob3VsZC10eXBlLWJlLWEtc3RyaW5nLW9yLWF0LWxlYXN0LXNlcmlhbGl6YWJsZS13aHktc2hvdWxkLW15LWFjdGlvbi10eXBlcy1iZS1jb25zdGFudHMpJyxcclxuICAgICAgICAgICdcXG4oVG8gYWxsb3cgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZXMgc2VlOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL3VzYWdlL3VzYWdlLWd1aWRlI3dvcmtpbmctd2l0aC1ub24tc2VyaWFsaXphYmxlLWRhdGEpJ1xyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXh0KGFjdGlvbilcclxuXHJcbiAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlQVBJLmdldFN0YXRlKClcclxuXHJcbiAgICAgIGNvbnN0IGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShcclxuICAgICAgICBzdGF0ZSxcclxuICAgICAgICBbXSxcclxuICAgICAgICBpc1NlcmlhbGl6YWJsZSxcclxuICAgICAgICBnZXRFbnRyaWVzLFxyXG4gICAgICAgIGlnbm9yZWRQYXRoc1xyXG4gICAgICApXHJcblxyXG4gICAgICBpZiAoZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBrZXlQYXRoLCB2YWx1ZSB9ID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlXHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICBgQSBub24tc2VyaWFsaXphYmxlIHZhbHVlIHdhcyBkZXRlY3RlZCBpbiB0aGUgc3RhdGUsIGluIHRoZSBwYXRoOiBcXGAke2tleVBhdGh9XFxgLiBWYWx1ZTpgLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBgXHJcblRha2UgYSBsb29rIGF0IHRoZSByZWR1Y2VyKHMpIGhhbmRsaW5nIHRoaXMgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9LlxyXG4oU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2ZhcS9vcmdhbml6aW5nLXN0YXRlI2Nhbi1pLXB1dC1mdW5jdGlvbnMtcHJvbWlzZXMtb3Itb3RoZXItbm9uLXNlcmlhbGl6YWJsZS1pdGVtcy1pbi1teS1zdG9yZS1zdGF0ZSlgXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIG1lYXN1cmVVdGlscy53YXJuSWZFeGNlZWRlZCgpXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNaWRkbGV3YXJlLCBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSwgeyBUaHVua01pZGRsZXdhcmUgfSBmcm9tICdyZWR1eC10aHVuaydcclxuaW1wb3J0IHtcclxuICAvKiBQUk9EX1NUQVJUX1JFTU9WRV9VTUQgKi9cclxuICBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsXHJcbiAgLyogUFJPRF9TVE9QX1JFTU9WRV9VTUQgKi9cclxuICBJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zXHJcbn0gZnJvbSAnLi9pbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSxcclxuICBTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zXHJcbn0gZnJvbSAnLi9zZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUnXHJcbmltcG9ydCB7IE1pZGRsZXdhcmVBcnJheSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5mdW5jdGlvbiBpc0Jvb2xlYW4oeDogYW55KTogeCBpcyBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIHggPT09ICdib29sZWFuJ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGh1bmtPcHRpb25zPEUgPSBhbnk+IHtcclxuICBleHRyYUFyZ3VtZW50OiBFXHJcbn1cclxuXHJcbmludGVyZmFjZSBHZXREZWZhdWx0TWlkZGxld2FyZU9wdGlvbnMge1xyXG4gIHRodW5rPzogYm9vbGVhbiB8IFRodW5rT3B0aW9uc1xyXG4gIGltbXV0YWJsZUNoZWNrPzogYm9vbGVhbiB8IEltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZU9wdGlvbnNcclxuICBzZXJpYWxpemFibGVDaGVjaz86IGJvb2xlYW4gfCBTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRodW5rTWlkZGxld2FyZUZvcjxcclxuICBTLFxyXG4gIE8gZXh0ZW5kcyBHZXREZWZhdWx0TWlkZGxld2FyZU9wdGlvbnMgPSB7fVxyXG4+ID0gTyBleHRlbmRzIHtcclxuICB0aHVuazogZmFsc2VcclxufVxyXG4gID8gbmV2ZXJcclxuICA6IE8gZXh0ZW5kcyB7IHRodW5rOiB7IGV4dHJhQXJndW1lbnQ6IGluZmVyIEUgfSB9XHJcbiAgPyBUaHVua01pZGRsZXdhcmU8UywgQW55QWN0aW9uLCBFPlxyXG4gIDpcclxuICAgICAgfCBUaHVua01pZGRsZXdhcmU8UywgQW55QWN0aW9uLCBudWxsPiAvL1RoZSBUaHVua01pZGRsZXdhcmUgd2l0aCBhIGBudWxsYCBFeHRyYUFyZ3VtZW50IGlzIGhlcmUgdG8gcHJvdmlkZSBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eS5cclxuICAgICAgfCBUaHVua01pZGRsZXdhcmU8UywgQW55QWN0aW9uPlxyXG5cclxuZXhwb3J0IHR5cGUgQ3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlPFMgPSBhbnk+ID0gPFxyXG4gIE8gZXh0ZW5kcyBQYXJ0aWFsPEdldERlZmF1bHRNaWRkbGV3YXJlT3B0aW9ucz4gPSB7XHJcbiAgICB0aHVuazogdHJ1ZVxyXG4gICAgaW1tdXRhYmxlQ2hlY2s6IHRydWVcclxuICAgIHNlcmlhbGl6YWJsZUNoZWNrOiB0cnVlXHJcbiAgfVxyXG4+KFxyXG4gIG9wdGlvbnM/OiBPXHJcbikgPT4gTWlkZGxld2FyZUFycmF5PE1pZGRsZXdhcmU8e30sIFM+IHwgVGh1bmtNaWRkbGV3YXJlRm9yPFMsIE8+PlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmU8XHJcbiAgUyA9IGFueVxyXG4+KCk6IEN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZTxTPiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUob3B0aW9ucylcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFueSBhcnJheSBjb250YWluaW5nIHRoZSBkZWZhdWx0IG1pZGRsZXdhcmUgaW5zdGFsbGVkIGJ5XHJcbiAqIGBjb25maWd1cmVTdG9yZSgpYC4gVXNlZnVsIGlmIHlvdSB3YW50IHRvIGNvbmZpZ3VyZSB5b3VyIHN0b3JlIHdpdGggYSBjdXN0b21cclxuICogYG1pZGRsZXdhcmVgIGFycmF5IGJ1dCBzdGlsbCBrZWVwIHRoZSBkZWZhdWx0IHNldC5cclxuICpcclxuICogQHJldHVybiBUaGUgZGVmYXVsdCBtaWRkbGV3YXJlIHVzZWQgYnkgYGNvbmZpZ3VyZVN0b3JlKClgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE1pZGRsZXdhcmU8XHJcbiAgUyA9IGFueSxcclxuICBPIGV4dGVuZHMgUGFydGlhbDxHZXREZWZhdWx0TWlkZGxld2FyZU9wdGlvbnM+ID0ge1xyXG4gICAgdGh1bms6IHRydWVcclxuICAgIGltbXV0YWJsZUNoZWNrOiB0cnVlXHJcbiAgICBzZXJpYWxpemFibGVDaGVjazogdHJ1ZVxyXG4gIH1cclxuPihcclxuICBvcHRpb25zOiBPID0ge30gYXMgT1xyXG4pOiBNaWRkbGV3YXJlQXJyYXk8TWlkZGxld2FyZTx7fSwgUz4gfCBUaHVua01pZGRsZXdhcmVGb3I8UywgTz4+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aHVuayA9IHRydWUsXHJcbiAgICBpbW11dGFibGVDaGVjayA9IHRydWUsXHJcbiAgICBzZXJpYWxpemFibGVDaGVjayA9IHRydWVcclxuICB9ID0gb3B0aW9uc1xyXG5cclxuICBsZXQgbWlkZGxld2FyZUFycmF5OiBNaWRkbGV3YXJlPHt9LCBTPltdID0gbmV3IE1pZGRsZXdhcmVBcnJheSgpXHJcblxyXG4gIGlmICh0aHVuaykge1xyXG4gICAgaWYgKGlzQm9vbGVhbih0aHVuaykpIHtcclxuICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2godGh1bmtNaWRkbGV3YXJlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2goXHJcbiAgICAgICAgdGh1bmtNaWRkbGV3YXJlLndpdGhFeHRyYUFyZ3VtZW50KHRodW5rLmV4dHJhQXJndW1lbnQpXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICBpZiAoaW1tdXRhYmxlQ2hlY2spIHtcclxuICAgICAgLyogUFJPRF9TVEFSVF9SRU1PVkVfVU1EICovXHJcbiAgICAgIGxldCBpbW11dGFibGVPcHRpb25zOiBJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVPcHRpb25zID0ge31cclxuXHJcbiAgICAgIGlmICghaXNCb29sZWFuKGltbXV0YWJsZUNoZWNrKSkge1xyXG4gICAgICAgIGltbXV0YWJsZU9wdGlvbnMgPSBpbW11dGFibGVDaGVja1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtaWRkbGV3YXJlQXJyYXkudW5zaGlmdChcclxuICAgICAgICBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoaW1tdXRhYmxlT3B0aW9ucylcclxuICAgICAgKVxyXG4gICAgICAvKiBQUk9EX1NUT1BfUkVNT1ZFX1VNRCAqL1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZXJpYWxpemFibGVDaGVjaykge1xyXG4gICAgICBsZXQgc2VyaWFsaXphYmxlT3B0aW9uczogU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9ucyA9IHt9XHJcblxyXG4gICAgICBpZiAoIWlzQm9vbGVhbihzZXJpYWxpemFibGVDaGVjaykpIHtcclxuICAgICAgICBzZXJpYWxpemFibGVPcHRpb25zID0gc2VyaWFsaXphYmxlQ2hlY2tcclxuICAgICAgfVxyXG5cclxuICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2goXHJcbiAgICAgICAgY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKHNlcmlhbGl6YWJsZU9wdGlvbnMpXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBtaWRkbGV3YXJlQXJyYXkgYXMgYW55XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBjcmVhdGVTdG9yZSxcclxuICBjb21wb3NlLFxyXG4gIGFwcGx5TWlkZGxld2FyZSxcclxuICBjb21iaW5lUmVkdWNlcnMsXHJcbiAgUmVkdWNlcixcclxuICBSZWR1Y2Vyc01hcE9iamVjdCxcclxuICBNaWRkbGV3YXJlLFxyXG4gIEFjdGlvbixcclxuICBBbnlBY3Rpb24sXHJcbiAgU3RvcmVFbmhhbmNlcixcclxuICBTdG9yZSxcclxuICBEZWVwUGFydGlhbCxcclxuICBEaXNwYXRjaFxyXG59IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMsXHJcbiAgRW5oYW5jZXJPcHRpb25zIGFzIERldlRvb2xzT3B0aW9uc1xyXG59IGZyb20gJy4vZGV2dG9vbHNFeHRlbnNpb24nXHJcblxyXG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnXHJcbmltcG9ydCB7XHJcbiAgVGh1bmtNaWRkbGV3YXJlRm9yLFxyXG4gIGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUsXHJcbiAgQ3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlXHJcbn0gZnJvbSAnLi9nZXREZWZhdWx0TWlkZGxld2FyZSdcclxuaW1wb3J0IHsgRGlzcGF0Y2hGb3JNaWRkbGV3YXJlcyB9IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5cclxuY29uc3QgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuXHJcbi8qKlxyXG4gKiBDYWxsYmFjayBmdW5jdGlvbiB0eXBlLCB0byBiZSB1c2VkIGluIGBDb25maWd1cmVTdG9yZU9wdGlvbnMuZW5oYW5jZXJzYFxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb25maWd1cmVFbmhhbmNlcnNDYWxsYmFjayA9IChcclxuICBkZWZhdWx0RW5oYW5jZXJzOiBTdG9yZUVuaGFuY2VyW11cclxuKSA9PiBTdG9yZUVuaGFuY2VyW11cclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciBgY29uZmlndXJlU3RvcmUoKWAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJlU3RvcmVPcHRpb25zPFxyXG4gIFMgPSBhbnksXHJcbiAgQSBleHRlbmRzIEFjdGlvbiA9IEFueUFjdGlvbixcclxuICBNIGV4dGVuZHMgTWlkZGxld2FyZXM8Uz4gPSBNaWRkbGV3YXJlczxTPlxyXG4+IHtcclxuICAvKipcclxuICAgKiBBIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIGFzIHRoZSByb290IHJlZHVjZXIsIG9yIGFuXHJcbiAgICogb2JqZWN0IG9mIHNsaWNlIHJlZHVjZXJzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gYGNvbWJpbmVSZWR1Y2VycygpYC5cclxuICAgKi9cclxuICByZWR1Y2VyOiBSZWR1Y2VyPFMsIEE+IHwgUmVkdWNlcnNNYXBPYmplY3Q8UywgQT5cclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgb2YgUmVkdXggbWlkZGxld2FyZSB0byBpbnN0YWxsLiBJZiBub3Qgc3VwcGxpZWQsIGRlZmF1bHRzIHRvXHJcbiAgICogdGhlIHNldCBvZiBtaWRkbGV3YXJlIHJldHVybmVkIGJ5IGBnZXREZWZhdWx0TWlkZGxld2FyZSgpYC5cclxuICAgKi9cclxuICBtaWRkbGV3YXJlPzogKChnZXREZWZhdWx0TWlkZGxld2FyZTogQ3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlPFM+KSA9PiBNKSB8IE1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBlbmFibGUgUmVkdXggRGV2VG9vbHMgaW50ZWdyYXRpb24uIERlZmF1bHRzIHRvIGB0cnVlYC5cclxuICAgKlxyXG4gICAqIEFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBjYW4gYmUgZG9uZSBieSBwYXNzaW5nIFJlZHV4IERldlRvb2xzIG9wdGlvbnNcclxuICAgKi9cclxuICBkZXZUb29scz86IGJvb2xlYW4gfCBEZXZUb29sc09wdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgc3RhdGUsIHNhbWUgYXMgUmVkdXgncyBjcmVhdGVTdG9yZS5cclxuICAgKiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdCB0byBoeWRyYXRlIHRoZSBzdGF0ZVxyXG4gICAqIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhIHByZXZpb3VzbHkgc2VyaWFsaXplZFxyXG4gICAqIHVzZXIgc2Vzc2lvbi4gSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzKClgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlclxyXG4gICAqIGZ1bmN0aW9uIChlaXRoZXIgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSBieSBwYXNzaW5nIGFuIG9iamVjdCBhcyBgcmVkdWNlcmApLFxyXG4gICAqIHRoaXMgbXVzdCBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyB0aGUgcmVkdWNlciBtYXAga2V5cy5cclxuICAgKi9cclxuICAvLyBOT1RFOiBUaGUgbmVlZGxlc3NseSBjb21wbGljYXRlZCBgUyBleHRlbmRzIGFueSA/IFMgOiBTYCBpbnN0ZWFkIG9mIGp1c3RcclxuICAvLyBgU2AgZW5zdXJlcyB0aGF0IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyIGRvZXNuJ3QgYXR0ZW1wdCB0byBpbmZlciBgU2BcclxuICAvLyBiYXNlZCBvbiB0aGUgdmFsdWUgcGFzc2VkIGFzIGBwcmVsb2FkZWRTdGF0ZWAsIHdoaWNoIG1pZ2h0IGJlIGEgcGFydGlhbFxyXG4gIC8vIHN0YXRlIHJhdGhlciB0aGFuIHRoZSBmdWxsIHRoaW5nLlxyXG4gIHByZWxvYWRlZFN0YXRlPzogRGVlcFBhcnRpYWw8UyBleHRlbmRzIGFueSA/IFMgOiBTPlxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3RvcmUgZW5oYW5jZXJzIHRvIGFwcGx5LiBTZWUgUmVkdXgncyBgY3JlYXRlU3RvcmUoKWAuXHJcbiAgICogQWxsIGVuaGFuY2VycyB3aWxsIGJlIGluY2x1ZGVkIGJlZm9yZSB0aGUgRGV2VG9vbHMgRXh0ZW5zaW9uIGVuaGFuY2VyLlxyXG4gICAqIElmIHlvdSBuZWVkIHRvIGN1c3RvbWl6ZSB0aGUgb3JkZXIgb2YgZW5oYW5jZXJzLCBzdXBwbHkgYSBjYWxsYmFja1xyXG4gICAqIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWNlaXZlIHRoZSBvcmlnaW5hbCBhcnJheSAoaWUsIGBbYXBwbHlNaWRkbGV3YXJlXWApLFxyXG4gICAqIGFuZCBzaG91bGQgcmV0dXJuIGEgbmV3IGFycmF5IChzdWNoIGFzIGBbYXBwbHlNaWRkbGV3YXJlLCBvZmZsaW5lXWApLlxyXG4gICAqIElmIHlvdSBvbmx5IG5lZWQgdG8gYWRkIG1pZGRsZXdhcmUsIHlvdSBjYW4gdXNlIHRoZSBgbWlkZGxld2FyZWAgcGFyYW1ldGVyIGluc3RlYWQuXHJcbiAgICovXHJcbiAgZW5oYW5jZXJzPzogU3RvcmVFbmhhbmNlcltdIHwgQ29uZmlndXJlRW5oYW5jZXJzQ2FsbGJhY2tcclxufVxyXG5cclxudHlwZSBNaWRkbGV3YXJlczxTPiA9IFJlYWRvbmx5QXJyYXk8TWlkZGxld2FyZTx7fSwgUz4+XHJcblxyXG4vKipcclxuICogQSBSZWR1eCBzdG9yZSByZXR1cm5lZCBieSBgY29uZmlndXJlU3RvcmUoKWAuIFN1cHBvcnRzIGRpc3BhdGNoaW5nXHJcbiAqIHNpZGUtZWZmZWN0ZnVsIF90aHVua3NfIGluIGFkZGl0aW9uIHRvIHBsYWluIGFjdGlvbnMuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5oYW5jZWRTdG9yZTxcclxuICBTID0gYW55LFxyXG4gIEEgZXh0ZW5kcyBBY3Rpb24gPSBBbnlBY3Rpb24sXHJcbiAgTSBleHRlbmRzIE1pZGRsZXdhcmVzPFM+ID0gTWlkZGxld2FyZXM8Uz5cclxuPiBleHRlbmRzIFN0b3JlPFMsIEE+IHtcclxuICAvKipcclxuICAgKiBUaGUgYGRpc3BhdGNoYCBtZXRob2Qgb2YgeW91ciBzdG9yZSwgZW5oYW5jZWQgYnkgYWxsIGl0cyBtaWRkbGV3YXJlcy5cclxuICAgKlxyXG4gICAqIEBpbmhlcml0ZG9jXHJcbiAgICovXHJcbiAgZGlzcGF0Y2g6IERpc3BhdGNoRm9yTWlkZGxld2FyZXM8TT4gJiBEaXNwYXRjaDxBPlxyXG59XHJcblxyXG4vKipcclxuICogQSBmcmllbmRseSBhYnN0cmFjdGlvbiBvdmVyIHRoZSBzdGFuZGFyZCBSZWR1eCBgY3JlYXRlU3RvcmUoKWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBjb25maWcgVGhlIHN0b3JlIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEByZXR1cm5zIEEgY29uZmlndXJlZCBSZWR1eCBzdG9yZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlPFxyXG4gIFMgPSBhbnksXHJcbiAgQSBleHRlbmRzIEFjdGlvbiA9IEFueUFjdGlvbixcclxuICBNIGV4dGVuZHMgTWlkZGxld2FyZXM8Uz4gPSBbVGh1bmtNaWRkbGV3YXJlRm9yPFM+XVxyXG4+KG9wdGlvbnM6IENvbmZpZ3VyZVN0b3JlT3B0aW9uczxTLCBBLCBNPik6IEVuaGFuY2VkU3RvcmU8UywgQSwgTT4ge1xyXG4gIGNvbnN0IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSA9IGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmU8Uz4oKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWR1Y2VyID0gdW5kZWZpbmVkLFxyXG4gICAgbWlkZGxld2FyZSA9IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSgpLFxyXG4gICAgZGV2VG9vbHMgPSB0cnVlLFxyXG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQsXHJcbiAgICBlbmhhbmNlcnMgPSB1bmRlZmluZWRcclxuICB9ID0gb3B0aW9ucyB8fCB7fVxyXG5cclxuICBsZXQgcm9vdFJlZHVjZXI6IFJlZHVjZXI8UywgQT5cclxuXHJcbiAgaWYgKHR5cGVvZiByZWR1Y2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByb290UmVkdWNlciA9IHJlZHVjZXJcclxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocmVkdWNlcikpIHtcclxuICAgIHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ1wicmVkdWNlclwiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQsIGFuZCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0IG9mIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzJ1xyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWlkZGxld2FyZUVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlKFxyXG4gICAgLi4uKHR5cGVvZiBtaWRkbGV3YXJlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgID8gbWlkZGxld2FyZShjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUpXHJcbiAgICAgIDogbWlkZGxld2FyZSlcclxuICApXHJcblxyXG4gIGxldCBmaW5hbENvbXBvc2UgPSBjb21wb3NlXHJcblxyXG4gIGlmIChkZXZUb29scykge1xyXG4gICAgZmluYWxDb21wb3NlID0gY29tcG9zZVdpdGhEZXZUb29scyh7XHJcbiAgICAgIC8vIEVuYWJsZSBjYXB0dXJlIG9mIHN0YWNrIHRyYWNlcyBmb3IgZGlzcGF0Y2hlZCBSZWR1eCBhY3Rpb25zXHJcbiAgICAgIHRyYWNlOiAhSVNfUFJPRFVDVElPTixcclxuICAgICAgLi4uKHR5cGVvZiBkZXZUb29scyA9PT0gJ29iamVjdCcgJiYgZGV2VG9vbHMpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHN0b3JlRW5oYW5jZXJzOiBTdG9yZUVuaGFuY2VyW10gPSBbbWlkZGxld2FyZUVuaGFuY2VyXVxyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShlbmhhbmNlcnMpKSB7XHJcbiAgICBzdG9yZUVuaGFuY2VycyA9IFttaWRkbGV3YXJlRW5oYW5jZXIsIC4uLmVuaGFuY2Vyc11cclxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmhhbmNlcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHN0b3JlRW5oYW5jZXJzID0gZW5oYW5jZXJzKHN0b3JlRW5oYW5jZXJzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9zZWRFbmhhbmNlciA9IGZpbmFsQ29tcG9zZSguLi5zdG9yZUVuaGFuY2VycykgYXMgYW55XHJcblxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgcHJlbG9hZGVkU3RhdGUgYXMgYW55LCBjb21wb3NlZEVuaGFuY2VyKVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIElzVW5rbm93bk9yTm9uSW5mZXJyYWJsZSxcclxuICBJZk1heWJlVW5kZWZpbmVkLFxyXG4gIElmVm9pZCxcclxuICBJc0FueVxyXG59IGZyb20gJy4vdHNIZWxwZXJzJ1xyXG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnXHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIHdpdGggYSBzdHJpbmcgdHlwZSBhbmQgYW4gYXNzb2NpYXRlZCBwYXlsb2FkLiBUaGlzIGlzIHRoZVxyXG4gKiB0eXBlIG9mIGFjdGlvbiByZXR1cm5lZCBieSBgY3JlYXRlQWN0aW9uKClgIGFjdGlvbiBjcmVhdG9ycy5cclxuICpcclxuICogQHRlbXBsYXRlIFAgVGhlIHR5cGUgb2YgdGhlIGFjdGlvbidzIHBheWxvYWQuXHJcbiAqIEB0ZW1wbGF0ZSBUIHRoZSB0eXBlIHVzZWQgZm9yIHRoZSBhY3Rpb24gdHlwZS5cclxuICogQHRlbXBsYXRlIE0gVGhlIHR5cGUgb2YgdGhlIGFjdGlvbidzIG1ldGEgKG9wdGlvbmFsKVxyXG4gKiBAdGVtcGxhdGUgRSBUaGUgdHlwZSBvZiB0aGUgYWN0aW9uJ3MgZXJyb3IgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQYXlsb2FkQWN0aW9uPFxyXG4gIFAgPSB2b2lkLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgTSA9IG5ldmVyLFxyXG4gIEUgPSBuZXZlclxyXG4+ID0ge1xyXG4gIHBheWxvYWQ6IFBcclxuICB0eXBlOiBUXHJcbn0gJiAoW01dIGV4dGVuZHMgW25ldmVyXVxyXG4gID8ge31cclxuICA6IHtcclxuICAgICAgbWV0YTogTVxyXG4gICAgfSkgJlxyXG4gIChbRV0gZXh0ZW5kcyBbbmV2ZXJdXHJcbiAgICA/IHt9XHJcbiAgICA6IHtcclxuICAgICAgICBlcnJvcjogRVxyXG4gICAgICB9KVxyXG5cclxuLyoqXHJcbiAqIEEgXCJwcmVwYXJlXCIgbWV0aG9kIHRvIGJlIHVzZWQgYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNyZWF0ZUFjdGlvbmAuXHJcbiAqIFRha2VzIGFueSBudW1iZXIgb2YgYXJndW1lbnRzIGFuZCByZXR1cm5zIGEgRmx1eCBTdGFuZGFyZCBBY3Rpb24gd2l0aG91dFxyXG4gKiB0eXBlICh3aWxsIGJlIGFkZGVkIGxhdGVyKSB0aGF0ICptdXN0KiBjb250YWluIGEgcGF5bG9hZCAobWlnaHQgYmUgdW5kZWZpbmVkKS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJlcGFyZUFjdGlvbjxQPiA9XHJcbiAgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7IHBheWxvYWQ6IFAgfSlcclxuICB8ICgoLi4uYXJnczogYW55W10pID0+IHsgcGF5bG9hZDogUDsgbWV0YTogYW55IH0pXHJcbiAgfCAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7IHBheWxvYWQ6IFA7IGVycm9yOiBhbnkgfSlcclxuICB8ICgoLi4uYXJnczogYW55W10pID0+IHsgcGF5bG9hZDogUDsgbWV0YTogYW55OyBlcnJvcjogYW55IH0pXHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgdmVyc2lvbiBvZiBgQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWRgLiBOb3QgdG8gYmUgdXNlZCBleHRlcm5hbGx5LlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCB0eXBlIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICBQQSBleHRlbmRzIFByZXBhcmVBY3Rpb248YW55PiB8IHZvaWQsXHJcbiAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+ID0gUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPGluZmVyIFA+XHJcbiAgPyBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICAgICAgUGFyYW1ldGVyczxQQT4sXHJcbiAgICAgIFAsXHJcbiAgICAgIFQsXHJcbiAgICAgIFJldHVyblR5cGU8UEE+IGV4dGVuZHMge1xyXG4gICAgICAgIGVycm9yOiBpbmZlciBFXHJcbiAgICAgIH1cclxuICAgICAgICA/IEVcclxuICAgICAgICA6IG5ldmVyLFxyXG4gICAgICBSZXR1cm5UeXBlPFBBPiBleHRlbmRzIHtcclxuICAgICAgICBtZXRhOiBpbmZlciBNXHJcbiAgICAgIH1cclxuICAgICAgICA/IE1cclxuICAgICAgICA6IG5ldmVyXHJcbiAgICA+XHJcbiAgOiB2b2lkXHJcblxyXG4vKipcclxuICogQmFzaWMgdHlwZSBmb3IgYWxsIGFjdGlvbiBjcmVhdG9ycy5cclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqL1xyXG5pbnRlcmZhY2UgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVCBleHRlbmRzIHN0cmluZywgTSA9IG5ldmVyLCBFID0gbmV2ZXI+IHtcclxuICB0eXBlOiBUXHJcbiAgbWF0Y2goYWN0aW9uOiBBY3Rpb248dW5rbm93bj4pOiBhY3Rpb24gaXMgUGF5bG9hZEFjdGlvbjxQLCBULCBNLCBFPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3IgdGhhdCB0YWtlcyBtdWx0aXBsZSBhcmd1bWVudHMgdGhhdCBhcmUgcGFzc2VkXHJcbiAqIHRvIGEgYFByZXBhcmVBY3Rpb25gIG1ldGhvZCB0byBjcmVhdGUgdGhlIGZpbmFsIEFjdGlvbi5cclxuICogQHR5cGVQYXJhbSBBcmdzIGFyZ3VtZW50cyBmb3IgdGhlIGFjdGlvbiBjcmVhdG9yIGZ1bmN0aW9uXHJcbiAqIEB0eXBlUGFyYW0gUCBgcGF5bG9hZGAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIFQgYHR5cGVgIG5hbWVcclxuICogQHR5cGVQYXJhbSBFIG9wdGlvbmFsIGBlcnJvcmAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIE0gb3B0aW9uYWwgYG1ldGFgIHR5cGVcclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWQ8XHJcbiAgQXJncyBleHRlbmRzIHVua25vd25bXSxcclxuICBQLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgRSA9IG5ldmVyLFxyXG4gIE0gPSBuZXZlclxyXG4+IGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVCwgTSwgRT4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBgQXJnc2Agd2lsbCByZXR1cm5cclxuICAgKiBhbiBBY3Rpb24gd2l0aCBhIHBheWxvYWQgb2YgdHlwZSBgUGAgYW5kIChkZXBlbmRpbmcgb24gdGhlIGBQcmVwYXJlQWN0aW9uYFxyXG4gICAqIG1ldGhvZCB1c2VkKSBhIGBtZXRhYC0gYW5kIGBlcnJvcmAgcHJvcGVydHkgb2YgdHlwZXMgYE1gIGFuZCBgRWAgcmVzcGVjdGl2ZWx5LlxyXG4gICAqL1xyXG4gICguLi5hcmdzOiBBcmdzKTogUGF5bG9hZEFjdGlvbjxQLCBULCBNLCBFPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3Igb2YgdHlwZSBgVGAgdGhhdCB0YWtlcyBhbiBvcHRpb25hbCBwYXlsb2FkIG9mIHR5cGUgYFBgLlxyXG4gKlxyXG4gKiBAaW5oZXJpdGRvYyB7cmVkdXgjQWN0aW9uQ3JlYXRvcn1cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZDxQLCBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPlxyXG4gIGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVD4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBhbiBhcmd1bWVudCB3aWxsXHJcbiAgICogcmV0dXJuIGEge0BsaW5rIFBheWxvYWRBY3Rpb259IG9mIHR5cGUgYFRgIHdpdGggYSBwYXlsb2FkIG9mIGBQYC5cclxuICAgKiBDYWxsaW5nIGl0IHdpdGhvdXQgYW4gYXJndW1lbnQgd2lsbCByZXR1cm4gYSBQYXlsb2FkQWN0aW9uIHdpdGggYSBwYXlsb2FkIG9mIGB1bmRlZmluZWRgLlxyXG4gICAqL1xyXG4gIChwYXlsb2FkPzogUCk6IFBheWxvYWRBY3Rpb248UCwgVD5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIG9mIHR5cGUgYFRgIHRoYXQgdGFrZXMgbm8gcGF5bG9hZC5cclxuICpcclxuICogQGluaGVyaXRkb2Mge3JlZHV4I0FjdGlvbkNyZWF0b3J9XHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+XHJcbiAgZXh0ZW5kcyBCYXNlQWN0aW9uQ3JlYXRvcjx1bmRlZmluZWQsIFQ+IHtcclxuICAvKipcclxuICAgKiBDYWxsaW5nIHRoaXMge0BsaW5rIHJlZHV4I0FjdGlvbkNyZWF0b3J9IHdpbGxcclxuICAgKiByZXR1cm4gYSB7QGxpbmsgUGF5bG9hZEFjdGlvbn0gb2YgdHlwZSBgVGAgd2l0aCBhIHBheWxvYWQgb2YgYHVuZGVmaW5lZGBcclxuICAgKi9cclxuICAoKTogUGF5bG9hZEFjdGlvbjx1bmRlZmluZWQsIFQ+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBhY3Rpb24gY3JlYXRvciBvZiB0eXBlIGBUYCB0aGF0IHJlcXVpcmVzIGEgcGF5bG9hZCBvZiB0eXBlIFAuXHJcbiAqXHJcbiAqIEBpbmhlcml0ZG9jIHtyZWR1eCNBY3Rpb25DcmVhdG9yfVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxQLCBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPlxyXG4gIGV4dGVuZHMgQmFzZUFjdGlvbkNyZWF0b3I8UCwgVD4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxpbmcgdGhpcyB7QGxpbmsgcmVkdXgjQWN0aW9uQ3JlYXRvcn0gd2l0aCBhbiBhcmd1bWVudCB3aWxsXHJcbiAgICogcmV0dXJuIGEge0BsaW5rIFBheWxvYWRBY3Rpb259IG9mIHR5cGUgYFRgIHdpdGggYSBwYXlsb2FkIG9mIGBQYFxyXG4gICAqL1xyXG4gIChwYXlsb2FkOiBQKTogUGF5bG9hZEFjdGlvbjxQLCBUPlxyXG59XHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3Igb2YgdHlwZSBgVGAgd2hvc2UgYHBheWxvYWRgIHR5cGUgY291bGQgbm90IGJlIGluZmVycmVkLiBBY2NlcHRzIGV2ZXJ5dGhpbmcgYXMgYHBheWxvYWRgLlxyXG4gKlxyXG4gKiBAaW5oZXJpdGRvYyB7cmVkdXgjQWN0aW9uQ3JlYXRvcn1cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25DcmVhdG9yV2l0aE5vbkluZmVycmFibGVQYXlsb2FkPFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmdcclxuPiBleHRlbmRzIEJhc2VBY3Rpb25DcmVhdG9yPHVua25vd24sIFQ+IHtcclxuICAvKipcclxuICAgKiBDYWxsaW5nIHRoaXMge0BsaW5rIHJlZHV4I0FjdGlvbkNyZWF0b3J9IHdpdGggYW4gYXJndW1lbnQgd2lsbFxyXG4gICAqIHJldHVybiBhIHtAbGluayBQYXlsb2FkQWN0aW9ufSBvZiB0eXBlIGBUYCB3aXRoIGEgcGF5bG9hZFxyXG4gICAqIG9mIGV4YWN0bHkgdGhlIHR5cGUgb2YgdGhlIGFyZ3VtZW50LlxyXG4gICAqL1xyXG4gIDxQVCBleHRlbmRzIHVua25vd24+KHBheWxvYWQ6IFBUKTogUGF5bG9hZEFjdGlvbjxQVCwgVD5cclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIGFjdGlvbiBjcmVhdG9yIHRoYXQgcHJvZHVjZXMgYWN0aW9ucyB3aXRoIGEgYHBheWxvYWRgIGF0dHJpYnV0ZS5cclxuICpcclxuICogQHR5cGVQYXJhbSBQIHRoZSBgcGF5bG9hZGAgdHlwZVxyXG4gKiBAdHlwZVBhcmFtIFQgdGhlIGB0eXBlYCBvZiB0aGUgcmVzdWx0aW5nIGFjdGlvblxyXG4gKiBAdHlwZVBhcmFtIFBBIGlmIHRoZSByZXN1bHRpbmcgYWN0aW9uIGlzIHByZXByb2Nlc3NlZCBieSBhIGBwcmVwYXJlYCBtZXRob2QsIHRoZSBzaWduYXR1cmUgb2Ygc2FpZCBtZXRob2QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIFBheWxvYWRBY3Rpb25DcmVhdG9yPFxyXG4gIFAgPSB2b2lkLFxyXG4gIFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmcsXHJcbiAgUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPFA+IHwgdm9pZCA9IHZvaWRcclxuPiA9IElmUHJlcGFyZUFjdGlvbk1ldGhvZFByb3ZpZGVkPFxyXG4gIFBBLFxyXG4gIF9BY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxQQSwgVD4sXHJcbiAgLy8gZWxzZVxyXG4gIElzQW55PFxyXG4gICAgUCxcclxuICAgIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxhbnksIFQ+LFxyXG4gICAgSXNVbmtub3duT3JOb25JbmZlcnJhYmxlPFxyXG4gICAgICBQLFxyXG4gICAgICBBY3Rpb25DcmVhdG9yV2l0aE5vbkluZmVycmFibGVQYXlsb2FkPFQ+LFxyXG4gICAgICAvLyBlbHNlXHJcbiAgICAgIElmVm9pZDxcclxuICAgICAgICBQLFxyXG4gICAgICAgIEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZDxUPixcclxuICAgICAgICAvLyBlbHNlXHJcbiAgICAgICAgSWZNYXliZVVuZGVmaW5lZDxcclxuICAgICAgICAgIFAsXHJcbiAgICAgICAgICBBY3Rpb25DcmVhdG9yV2l0aE9wdGlvbmFsUGF5bG9hZDxQLCBUPixcclxuICAgICAgICAgIC8vIGVsc2VcclxuICAgICAgICAgIEFjdGlvbkNyZWF0b3JXaXRoUGF5bG9hZDxQLCBUPlxyXG4gICAgICAgID5cclxuICAgICAgPlxyXG4gICAgPlxyXG4gID5cclxuPlxyXG5cclxuLyoqXHJcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWN0aW9uIGNyZWF0b3IgZm9yIHRoZSBnaXZlbiBhY3Rpb24gdHlwZVxyXG4gKiBzdHJpbmcuIFRoZSBhY3Rpb24gY3JlYXRvciBhY2NlcHRzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkXHJcbiAqIGluIHRoZSBhY3Rpb24gb2JqZWN0IGFzIGEgZmllbGQgY2FsbGVkIHBheWxvYWQuIFRoZSBhY3Rpb24gY3JlYXRvciBmdW5jdGlvblxyXG4gKiB3aWxsIGFsc28gaGF2ZSBpdHMgdG9TdHJpbmcoKSBvdmVycmlkZW4gc28gdGhhdCBpdCByZXR1cm5zIHRoZSBhY3Rpb24gdHlwZSxcclxuICogYWxsb3dpbmcgaXQgdG8gYmUgdXNlZCBpbiByZWR1Y2VyIGxvZ2ljIHRoYXQgaXMgbG9va2luZyBmb3IgdGhhdCBhY3Rpb24gdHlwZS5cclxuICpcclxuICogQHBhcmFtIHR5cGUgVGhlIGFjdGlvbiB0eXBlIHRvIHVzZSBmb3IgY3JlYXRlZCBhY3Rpb25zLlxyXG4gKiBAcGFyYW0gcHJlcGFyZSAob3B0aW9uYWwpIGEgbWV0aG9kIHRoYXQgdGFrZXMgYW55IG51bWJlciBvZiBhcmd1bWVudHMgYW5kIHJldHVybnMgeyBwYXlsb2FkIH0gb3IgeyBwYXlsb2FkLCBtZXRhIH0uXHJcbiAqICAgICAgICAgICAgICAgIElmIHRoaXMgaXMgZ2l2ZW4sIHRoZSByZXN1bHRpbmcgYWN0aW9uIGNyZWF0b3Igd2lsbCBwYXNzIGl0cyBhcmd1bWVudHMgdG8gdGhpcyBtZXRob2QgdG8gY2FsY3VsYXRlIHBheWxvYWQgJiBtZXRhLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uPFAgPSB2b2lkLCBUIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPihcclxuICB0eXBlOiBUXHJcbik6IFBheWxvYWRBY3Rpb25DcmVhdG9yPFAsIFQ+XHJcblxyXG4vKipcclxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBhY3Rpb24gY3JlYXRvciBmb3IgdGhlIGdpdmVuIGFjdGlvbiB0eXBlXHJcbiAqIHN0cmluZy4gVGhlIGFjdGlvbiBjcmVhdG9yIGFjY2VwdHMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIHdpbGwgYmUgaW5jbHVkZWRcclxuICogaW4gdGhlIGFjdGlvbiBvYmplY3QgYXMgYSBmaWVsZCBjYWxsZWQgcGF5bG9hZC4gVGhlIGFjdGlvbiBjcmVhdG9yIGZ1bmN0aW9uXHJcbiAqIHdpbGwgYWxzbyBoYXZlIGl0cyB0b1N0cmluZygpIG92ZXJyaWRlbiBzbyB0aGF0IGl0IHJldHVybnMgdGhlIGFjdGlvbiB0eXBlLFxyXG4gKiBhbGxvd2luZyBpdCB0byBiZSB1c2VkIGluIHJlZHVjZXIgbG9naWMgdGhhdCBpcyBsb29raW5nIGZvciB0aGF0IGFjdGlvbiB0eXBlLlxyXG4gKlxyXG4gKiBAcGFyYW0gdHlwZSBUaGUgYWN0aW9uIHR5cGUgdG8gdXNlIGZvciBjcmVhdGVkIGFjdGlvbnMuXHJcbiAqIEBwYXJhbSBwcmVwYXJlIChvcHRpb25hbCkgYSBtZXRob2QgdGhhdCB0YWtlcyBhbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB7IHBheWxvYWQgfSBvciB7IHBheWxvYWQsIG1ldGEgfS5cclxuICogICAgICAgICAgICAgICAgSWYgdGhpcyBpcyBnaXZlbiwgdGhlIHJlc3VsdGluZyBhY3Rpb24gY3JlYXRvciB3aWxsIHBhc3MgaXRzIGFyZ3VtZW50cyB0byB0aGlzIG1ldGhvZCB0byBjYWxjdWxhdGUgcGF5bG9hZCAmIG1ldGEuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb248XHJcbiAgUEEgZXh0ZW5kcyBQcmVwYXJlQWN0aW9uPGFueT4sXHJcbiAgVCBleHRlbmRzIHN0cmluZyA9IHN0cmluZ1xyXG4+KFxyXG4gIHR5cGU6IFQsXHJcbiAgcHJlcGFyZUFjdGlvbjogUEFcclxuKTogUGF5bG9hZEFjdGlvbkNyZWF0b3I8UmV0dXJuVHlwZTxQQT5bJ3BheWxvYWQnXSwgVCwgUEE+XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHR5cGU6IHN0cmluZywgcHJlcGFyZUFjdGlvbj86IEZ1bmN0aW9uKTogYW55IHtcclxuICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAocHJlcGFyZUFjdGlvbikge1xyXG4gICAgICBsZXQgcHJlcGFyZWQgPSBwcmVwYXJlQWN0aW9uKC4uLmFyZ3MpXHJcbiAgICAgIGlmICghcHJlcGFyZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ByZXBhcmVBY3Rpb24gZGlkIG5vdCByZXR1cm4gYW4gb2JqZWN0JylcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHBheWxvYWQ6IHByZXBhcmVkLnBheWxvYWQsXHJcbiAgICAgICAgLi4uKCdtZXRhJyBpbiBwcmVwYXJlZCAmJiB7IG1ldGE6IHByZXBhcmVkLm1ldGEgfSksXHJcbiAgICAgICAgLi4uKCdlcnJvcicgaW4gcHJlcGFyZWQgJiYgeyBlcnJvcjogcHJlcGFyZWQuZXJyb3IgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdHlwZSwgcGF5bG9hZDogYXJnc1swXSB9XHJcbiAgfVxyXG5cclxuICBhY3Rpb25DcmVhdG9yLnRvU3RyaW5nID0gKCkgPT4gYCR7dHlwZX1gXHJcblxyXG4gIGFjdGlvbkNyZWF0b3IudHlwZSA9IHR5cGVcclxuXHJcbiAgYWN0aW9uQ3JlYXRvci5tYXRjaCA9IChhY3Rpb246IEFjdGlvbjx1bmtub3duPik6IGFjdGlvbiBpcyBQYXlsb2FkQWN0aW9uID0+XHJcbiAgICBhY3Rpb24udHlwZSA9PT0gdHlwZVxyXG5cclxuICByZXR1cm4gYWN0aW9uQ3JlYXRvclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGU0EoXHJcbiAgYWN0aW9uOiB1bmtub3duXHJcbik6IGFjdGlvbiBpcyB7XHJcbiAgdHlwZTogc3RyaW5nXHJcbiAgcGF5bG9hZD86IHVua25vd25cclxuICBlcnJvcj86IHVua25vd25cclxuICBtZXRhPzogdW5rbm93blxyXG59IHtcclxuICByZXR1cm4gKFxyXG4gICAgaXNQbGFpbk9iamVjdChhY3Rpb24pICYmXHJcbiAgICB0eXBlb2YgKGFjdGlvbiBhcyBhbnkpLnR5cGUgPT09ICdzdHJpbmcnICYmXHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb24pLmV2ZXJ5KGlzVmFsaWRLZXkpXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIFsndHlwZScsICdwYXlsb2FkJywgJ2Vycm9yJywgJ21ldGEnXS5pbmRleE9mKGtleSkgPiAtMVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgYWN0aW9uIHR5cGUgb2YgdGhlIGFjdGlvbnMgY3JlYXRlZCBieSB0aGUgcGFzc2VkXHJcbiAqIGBjcmVhdGVBY3Rpb24oKWAtZ2VuZXJhdGVkIGFjdGlvbiBjcmVhdG9yIChhcmJpdHJhcnkgYWN0aW9uIGNyZWF0b3JzXHJcbiAqIGFyZSBub3Qgc3VwcG9ydGVkKS5cclxuICpcclxuICogQHBhcmFtIGFjdGlvbiBUaGUgYWN0aW9uIGNyZWF0b3Igd2hvc2UgYWN0aW9uIHR5cGUgdG8gZ2V0LlxyXG4gKiBAcmV0dXJucyBUaGUgYWN0aW9uIHR5cGUgdXNlZCBieSB0aGUgYWN0aW9uIGNyZWF0b3IuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlPFQgZXh0ZW5kcyBzdHJpbmc+KFxyXG4gIGFjdGlvbkNyZWF0b3I6IFBheWxvYWRBY3Rpb25DcmVhdG9yPGFueSwgVD5cclxuKTogVCB7XHJcbiAgcmV0dXJuIGAke2FjdGlvbkNyZWF0b3J9YCBhcyBUXHJcbn1cclxuXHJcbi8vIGhlbHBlciB0eXBlcyBmb3IgbW9yZSByZWFkYWJsZSB0eXBpbmdzXHJcblxyXG50eXBlIElmUHJlcGFyZUFjdGlvbk1ldGhvZFByb3ZpZGVkPFxyXG4gIFBBIGV4dGVuZHMgUHJlcGFyZUFjdGlvbjxhbnk+IHwgdm9pZCxcclxuICBUcnVlLFxyXG4gIEZhbHNlXHJcbj4gPSBQQSBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55ID8gVHJ1ZSA6IEZhbHNlXHJcbiIsImltcG9ydCB7IEFjdGlvbiwgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7XHJcbiAgQ2FzZVJlZHVjZXIsXHJcbiAgQ2FzZVJlZHVjZXJzLFxyXG4gIEFjdGlvbk1hdGNoZXIsXHJcbiAgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvblxyXG59IGZyb20gJy4vY3JlYXRlUmVkdWNlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHlwZWRBY3Rpb25DcmVhdG9yPFR5cGUgZXh0ZW5kcyBzdHJpbmc+IHtcclxuICAoLi4uYXJnczogYW55W10pOiBBY3Rpb248VHlwZT5cclxuICB0eXBlOiBUeXBlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGJ1aWxkZXIgZm9yIGFuIGFjdGlvbiA8LT4gcmVkdWNlciBtYXAuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8U3RhdGU+IHtcclxuICAvKipcclxuICAgKiBBZGRzIGEgY2FzZSByZWR1Y2VyIHRvIGhhbmRsZSBhIHNpbmdsZSBleGFjdCBhY3Rpb24gdHlwZS5cclxuICAgKiBAcmVtYXJrc1xyXG4gICAqIEFsbCBjYWxscyB0byBgYnVpbGRlci5hZGRDYXNlYCBtdXN0IGNvbWUgYmVmb3JlIGFueSBjYWxscyB0byBgYnVpbGRlci5hZGRNYXRjaGVyYCBvciBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAuXHJcbiAgICogQHBhcmFtIGFjdGlvbkNyZWF0b3IgLSBFaXRoZXIgYSBwbGFpbiBhY3Rpb24gdHlwZSBzdHJpbmcsIG9yIGFuIGFjdGlvbiBjcmVhdG9yIGdlbmVyYXRlZCBieSBbYGNyZWF0ZUFjdGlvbmBdKC4vY3JlYXRlQWN0aW9uKSB0aGF0IGNhbiBiZSB1c2VkIHRvIGRldGVybWluZSB0aGUgYWN0aW9uIHR5cGUuXHJcbiAgICogQHBhcmFtIHJlZHVjZXIgLSBUaGUgYWN0dWFsIGNhc2UgcmVkdWNlciBmdW5jdGlvbi5cclxuICAgKi9cclxuICBhZGRDYXNlPEFjdGlvbkNyZWF0b3IgZXh0ZW5kcyBUeXBlZEFjdGlvbkNyZWF0b3I8c3RyaW5nPj4oXHJcbiAgICBhY3Rpb25DcmVhdG9yOiBBY3Rpb25DcmVhdG9yLFxyXG4gICAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8U3RhdGUsIFJldHVyblR5cGU8QWN0aW9uQ3JlYXRvcj4+XHJcbiAgKTogQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8U3RhdGU+XHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGNhc2UgcmVkdWNlciB0byBoYW5kbGUgYSBzaW5nbGUgZXhhY3QgYWN0aW9uIHR5cGUuXHJcbiAgICogQHJlbWFya3NcclxuICAgKiBBbGwgY2FsbHMgdG8gYGJ1aWxkZXIuYWRkQ2FzZWAgbXVzdCBjb21lIGJlZm9yZSBhbnkgY2FsbHMgdG8gYGJ1aWxkZXIuYWRkTWF0Y2hlcmAgb3IgYGJ1aWxkZXIuYWRkRGVmYXVsdENhc2VgLlxyXG4gICAqIEBwYXJhbSBhY3Rpb25DcmVhdG9yIC0gRWl0aGVyIGEgcGxhaW4gYWN0aW9uIHR5cGUgc3RyaW5nLCBvciBhbiBhY3Rpb24gY3JlYXRvciBnZW5lcmF0ZWQgYnkgW2BjcmVhdGVBY3Rpb25gXSguL2NyZWF0ZUFjdGlvbikgdGhhdCBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlIGFjdGlvbiB0eXBlLlxyXG4gICAqIEBwYXJhbSByZWR1Y2VyIC0gVGhlIGFjdHVhbCBjYXNlIHJlZHVjZXIgZnVuY3Rpb24uXHJcbiAgICovXHJcbiAgYWRkQ2FzZTxUeXBlIGV4dGVuZHMgc3RyaW5nLCBBIGV4dGVuZHMgQWN0aW9uPFR5cGU+PihcclxuICAgIHR5cGU6IFR5cGUsXHJcbiAgICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTdGF0ZSwgQT5cclxuICApOiBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTdGF0ZT5cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHlvdSB0byBtYXRjaCB5b3VyIGluY29taW5nIGFjdGlvbnMgYWdhaW5zdCB5b3VyIG93biBmaWx0ZXIgZnVuY3Rpb24gaW5zdGVhZCBvZiBvbmx5IHRoZSBgYWN0aW9uLnR5cGVgIHByb3BlcnR5LlxyXG4gICAqIEByZW1hcmtzXHJcbiAgICogSWYgbXVsdGlwbGUgbWF0Y2hlciByZWR1Y2VycyBtYXRjaCwgYWxsIG9mIHRoZW0gd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgb3JkZXJcclxuICAgKiB0aGV5IHdlcmUgZGVmaW5lZCBpbiAtIGV2ZW4gaWYgYSBjYXNlIHJlZHVjZXIgYWxyZWFkeSBtYXRjaGVkLlxyXG4gICAqIEFsbCBjYWxscyB0byBgYnVpbGRlci5hZGRNYXRjaGVyYCBtdXN0IGNvbWUgYWZ0ZXIgYW55IGNhbGxzIHRvIGBidWlsZGVyLmFkZENhc2VgIGFuZCBiZWZvcmUgYW55IGNhbGxzIHRvIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYC5cclxuICAgKiBAcGFyYW0gbWF0Y2hlciAtIEEgbWF0Y2hlciBmdW5jdGlvbi4gSW4gVHlwZVNjcmlwdCwgdGhpcyBzaG91bGQgYmUgYSBbdHlwZSBwcmVkaWNhdGVdKGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2FkdmFuY2VkLXR5cGVzLmh0bWwjdXNpbmctdHlwZS1wcmVkaWNhdGVzKVxyXG4gICAqICAgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0gcmVkdWNlciAtIFRoZSBhY3R1YWwgY2FzZSByZWR1Y2VyIGZ1bmN0aW9uLlxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuYGBgdHNcclxuaW1wb3J0IHtcclxuICBjcmVhdGVBY3Rpb24sXHJcbiAgY3JlYXRlUmVkdWNlcixcclxuICBBc3luY1RodW5rLFxyXG4gIEFueUFjdGlvbixcclxufSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxudHlwZSBHZW5lcmljQXN5bmNUaHVuayA9IEFzeW5jVGh1bms8dW5rbm93biwgdW5rbm93biwgYW55PjtcclxuXHJcbnR5cGUgUGVuZGluZ0FjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbXCJwZW5kaW5nXCJdPjtcclxudHlwZSBSZWplY3RlZEFjdGlvbiA9IFJldHVyblR5cGU8R2VuZXJpY0FzeW5jVGh1bmtbXCJyZWplY3RlZFwiXT47XHJcbnR5cGUgRnVsZmlsbGVkQWN0aW9uID0gUmV0dXJuVHlwZTxHZW5lcmljQXN5bmNUaHVua1tcImZ1bGZpbGxlZFwiXT47XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuY29uc3QgcmVzZXRBY3Rpb24gPSBjcmVhdGVBY3Rpb24oXCJyZXNldC10cmFja2VkLWxvYWRpbmctc3RhdGVcIik7XHJcblxyXG5mdW5jdGlvbiBpc1BlbmRpbmdBY3Rpb24oYWN0aW9uOiBBbnlBY3Rpb24pOiBhY3Rpb24gaXMgUGVuZGluZ0FjdGlvbiB7XHJcbiAgcmV0dXJuIGFjdGlvbi50eXBlLmVuZHNXaXRoKFwiL3BlbmRpbmdcIik7XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgKGJ1aWxkZXIpID0+IHtcclxuICBidWlsZGVyXHJcbiAgICAuYWRkQ2FzZShyZXNldEFjdGlvbiwgKCkgPT4gaW5pdGlhbFN0YXRlKVxyXG4gICAgLy8gbWF0Y2hlciBjYW4gYmUgZGVmaW5lZCBvdXRzaWRlIGFzIGEgdHlwZSBwcmVkaWNhdGUgZnVuY3Rpb25cclxuICAgIC5hZGRNYXRjaGVyKGlzUGVuZGluZ0FjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGVbYWN0aW9uLm1ldGEucmVxdWVzdElkXSA9IFwicGVuZGluZ1wiO1xyXG4gICAgfSlcclxuICAgIC5hZGRNYXRjaGVyKFxyXG4gICAgICAvLyBtYXRjaGVyIGNhbiBiZSBkZWZpbmVkIGlubGluZSBhcyBhIHR5cGUgcHJlZGljYXRlIGZ1bmN0aW9uXHJcbiAgICAgIChhY3Rpb24pOiBhY3Rpb24gaXMgUmVqZWN0ZWRBY3Rpb24gPT4gYWN0aW9uLnR5cGUuZW5kc1dpdGgoXCIvcmVqZWN0ZWRcIiksXHJcbiAgICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGVbYWN0aW9uLm1ldGEucmVxdWVzdElkXSA9IFwicmVqZWN0ZWRcIjtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLy8gbWF0Y2hlciBjYW4ganVzdCByZXR1cm4gYm9vbGVhbiBhbmQgdGhlIG1hdGNoZXIgY2FuIHJlY2VpdmUgYSBnZW5lcmljIGFyZ3VtZW50XHJcbiAgICAuYWRkTWF0Y2hlcjxGdWxmaWxsZWRBY3Rpb24+KFxyXG4gICAgICAoYWN0aW9uKSA9PiBhY3Rpb24udHlwZS5lbmRzV2l0aChcIi9mdWxmaWxsZWRcIiksXHJcbiAgICAgIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGVbYWN0aW9uLm1ldGEucmVxdWVzdElkXSA9IFwiZnVsZmlsbGVkXCI7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbn0pO1xyXG5gYGBcclxuICAgKi9cclxuICBhZGRNYXRjaGVyPEEgZXh0ZW5kcyBBbnlBY3Rpb24+KFxyXG4gICAgbWF0Y2hlcjogQWN0aW9uTWF0Y2hlcjxBPiB8ICgoYWN0aW9uOiBBbnlBY3Rpb24pID0+IGJvb2xlYW4pLFxyXG4gICAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8U3RhdGUsIEE+XHJcbiAgKTogT21pdDxBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTdGF0ZT4sICdhZGRDYXNlJz5cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIFwiZGVmYXVsdCBjYXNlXCIgcmVkdWNlciB0aGF0IGlzIGV4ZWN1dGVkIGlmIG5vIGNhc2UgcmVkdWNlciBhbmQgbm8gbWF0Y2hlclxyXG4gICAqIHJlZHVjZXIgd2FzIGV4ZWN1dGVkIGZvciB0aGlzIGFjdGlvbi5cclxuICAgKiBAcGFyYW0gcmVkdWNlciAtIFRoZSBmYWxsYmFjayBcImRlZmF1bHQgY2FzZVwiIHJlZHVjZXIgZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAZXhhbXBsZVxyXG5gYGB0c1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBvdGhlckFjdGlvbnM6IDAgfVxyXG5jb25zdCByZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIGJ1aWxkZXIgPT4ge1xyXG4gIGJ1aWxkZXJcclxuICAgIC8vIC5hZGRDYXNlKC4uLilcclxuICAgIC8vIC5hZGRNYXRjaGVyKC4uLilcclxuICAgIC5hZGREZWZhdWx0Q2FzZSgoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5vdGhlckFjdGlvbnMrK1xyXG4gICAgfSlcclxufSlcclxuYGBgXHJcbiAgICovXHJcbiAgYWRkRGVmYXVsdENhc2UocmVkdWNlcjogQ2FzZVJlZHVjZXI8U3RhdGUsIEFueUFjdGlvbj4pOiB7fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2s8Uz4oXHJcbiAgYnVpbGRlckNhbGxiYWNrOiAoYnVpbGRlcjogQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXI8Uz4pID0+IHZvaWRcclxuKTogW1xyXG4gIENhc2VSZWR1Y2VyczxTLCBhbnk+LFxyXG4gIEFjdGlvbk1hdGNoZXJEZXNjcmlwdGlvbkNvbGxlY3Rpb248Uz4sXHJcbiAgQ2FzZVJlZHVjZXI8UywgQW55QWN0aW9uPiB8IHVuZGVmaW5lZFxyXG5dIHtcclxuICBjb25zdCBhY3Rpb25zTWFwOiBDYXNlUmVkdWNlcnM8UywgYW55PiA9IHt9XHJcbiAgY29uc3QgYWN0aW9uTWF0Y2hlcnM6IEFjdGlvbk1hdGNoZXJEZXNjcmlwdGlvbkNvbGxlY3Rpb248Uz4gPSBbXVxyXG4gIGxldCBkZWZhdWx0Q2FzZVJlZHVjZXI6IENhc2VSZWR1Y2VyPFMsIEFueUFjdGlvbj4gfCB1bmRlZmluZWRcclxuICBjb25zdCBidWlsZGVyID0ge1xyXG4gICAgYWRkQ2FzZShcclxuICAgICAgdHlwZU9yQWN0aW9uQ3JlYXRvcjogc3RyaW5nIHwgVHlwZWRBY3Rpb25DcmVhdG9yPGFueT4sXHJcbiAgICAgIHJlZHVjZXI6IENhc2VSZWR1Y2VyPFM+XHJcbiAgICApIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICB0byBrZWVwIHRoZSBkZWZpbml0aW9uIGJ5IHRoZSB1c2VyIGluIGxpbmUgd2l0aCBhY3R1YWwgYmVoYXZpb3IsIFxyXG4gICAgICAgICB3ZSBlbmZvcmNlIGBhZGRDYXNlYCB0byBhbHdheXMgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBhZGRNYXRjaGVyYFxyXG4gICAgICAgICBhcyBtYXRjaGluZyBjYXNlcyB0YWtlIHByZWNlZGVuY2Ugb3ZlciBtYXRjaGVyc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmIChhY3Rpb25NYXRjaGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICdgYnVpbGRlci5hZGRDYXNlYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkTWF0Y2hlcmAnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgJ2BidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHR5cGUgPVxyXG4gICAgICAgIHR5cGVvZiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgPyB0eXBlT3JBY3Rpb25DcmVhdG9yXHJcbiAgICAgICAgICA6IHR5cGVPckFjdGlvbkNyZWF0b3IudHlwZVxyXG4gICAgICBpZiAodHlwZSBpbiBhY3Rpb25zTWFwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgJ2FkZENhc2UgY2Fubm90IGJlIGNhbGxlZCB3aXRoIHR3byByZWR1Y2VycyBmb3IgdGhlIHNhbWUgYWN0aW9uIHR5cGUnXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIGFjdGlvbnNNYXBbdHlwZV0gPSByZWR1Y2VyXHJcbiAgICAgIHJldHVybiBidWlsZGVyXHJcbiAgICB9LFxyXG4gICAgYWRkTWF0Y2hlcjxBIGV4dGVuZHMgQW55QWN0aW9uPihcclxuICAgICAgbWF0Y2hlcjogQWN0aW9uTWF0Y2hlcjxBPixcclxuICAgICAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8UywgQT5cclxuICAgICkge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgJ2BidWlsZGVyLmFkZE1hdGNoZXJgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGFjdGlvbk1hdGNoZXJzLnB1c2goeyBtYXRjaGVyLCByZWR1Y2VyIH0pXHJcbiAgICAgIHJldHVybiBidWlsZGVyXHJcbiAgICB9LFxyXG4gICAgYWRkRGVmYXVsdENhc2UocmVkdWNlcjogQ2FzZVJlZHVjZXI8UywgQW55QWN0aW9uPikge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYGJ1aWxkZXIuYWRkRGVmYXVsdENhc2VgIGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdENhc2VSZWR1Y2VyID0gcmVkdWNlclxyXG4gICAgICByZXR1cm4gYnVpbGRlclxyXG4gICAgfVxyXG4gIH1cclxuICBidWlsZGVyQ2FsbGJhY2soYnVpbGRlcilcclxuICByZXR1cm4gW2FjdGlvbnNNYXAsIGFjdGlvbk1hdGNoZXJzLCBkZWZhdWx0Q2FzZVJlZHVjZXJdXHJcbn1cclxuIiwiaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZSwgeyBEcmFmdCwgaXNEcmFmdCwgaXNEcmFmdGFibGUgfSBmcm9tICdpbW1lcidcclxuaW1wb3J0IHsgQW55QWN0aW9uLCBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtcclxuICBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayxcclxuICBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlclxyXG59IGZyb20gJy4vbWFwQnVpbGRlcnMnXHJcbmltcG9ydCB7IE5vSW5mZXIgfSBmcm9tICcuL3RzSGVscGVycydcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgbWFwcGluZyBmcm9tIGFjdGlvbiB0eXBlcyB0byBjb3JyZXNwb25kaW5nIGFjdGlvbiBvYmplY3Qgc2hhcGVzLlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCBUaGlzIHNob3VsZCBub3QgYmUgdXNlZCBtYW51YWxseSAtIGl0IGlzIG9ubHkgdXNlZCBmb3IgaW50ZXJuYWxcclxuICogICAgICAgICAgICAgaW5mZXJlbmNlIHB1cnBvc2VzIGFuZCBzaG91bGQgbm90IGhhdmUgYW55IGZ1cnRoZXIgdmFsdWUuXHJcbiAqICAgICAgICAgICAgIEl0IG1pZ2h0IGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uczxUIGV4dGVuZHMga2V5b2YgYW55ID0gc3RyaW5nPiA9IFJlY29yZDxULCBBY3Rpb24+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbk1hdGNoZXI8QSBleHRlbmRzIEFueUFjdGlvbj4ge1xyXG4gIChhY3Rpb246IEFueUFjdGlvbik6IGFjdGlvbiBpcyBBXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbk1hdGNoZXJEZXNjcmlwdGlvbjxTLCBBIGV4dGVuZHMgQW55QWN0aW9uPiA9IHtcclxuICBtYXRjaGVyOiBBY3Rpb25NYXRjaGVyPEE+XHJcbiAgcmVkdWNlcjogQ2FzZVJlZHVjZXI8UywgTm9JbmZlcjxBPj5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPiA9IEFycmF5PFxyXG4gIEFjdGlvbk1hdGNoZXJEZXNjcmlwdGlvbjxTLCBhbnk+XHJcbj5cclxuXHJcbi8qKlxyXG4gKiBBbiAqY2FzZSByZWR1Y2VyKiBpcyBhIHJlZHVjZXIgZnVuY3Rpb24gZm9yIGEgc3BlY2lmaWMgYWN0aW9uIHR5cGUuIENhc2VcclxuICogcmVkdWNlcnMgY2FuIGJlIGNvbXBvc2VkIHRvIGZ1bGwgcmVkdWNlcnMgdXNpbmcgYGNyZWF0ZVJlZHVjZXIoKWAuXHJcbiAqXHJcbiAqIFVubGlrZSBhIG5vcm1hbCBSZWR1eCByZWR1Y2VyLCBhIGNhc2UgcmVkdWNlciBpcyBuZXZlciBjYWxsZWQgd2l0aCBhblxyXG4gKiBgdW5kZWZpbmVkYCBzdGF0ZSB0byBkZXRlcm1pbmUgdGhlIGluaXRpYWwgc3RhdGUuIEluc3RlYWQsIHRoZSBpbml0aWFsXHJcbiAqIHN0YXRlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIGFzIGFuIGFyZ3VtZW50IHRvIGBjcmVhdGVSZWR1Y2VyKClgLlxyXG4gKlxyXG4gKiBJbiBhZGRpdGlvbiwgYSBjYXNlIHJlZHVjZXIgY2FuIGNob29zZSB0byBtdXRhdGUgdGhlIHBhc3NlZC1pbiBgc3RhdGVgXHJcbiAqIHZhbHVlIGRpcmVjdGx5IGluc3RlYWQgb2YgcmV0dXJuaW5nIGEgbmV3IHN0YXRlLiBUaGlzIGRvZXMgbm90IGFjdHVhbGx5XHJcbiAqIGNhdXNlIHRoZSBzdG9yZSBzdGF0ZSB0byBiZSBtdXRhdGVkIGRpcmVjdGx5OyBpbnN0ZWFkLCB0aGFua3MgdG9cclxuICogW2ltbWVyXShodHRwczovL2dpdGh1Yi5jb20vbXdlc3RzdHJhdGUvaW1tZXIpLCB0aGUgbXV0YXRpb25zIGFyZVxyXG4gKiB0cmFuc2xhdGVkIHRvIGNvcHkgb3BlcmF0aW9ucyB0aGF0IHJlc3VsdCBpbiBhIG5ldyBzdGF0ZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FzZVJlZHVjZXI8UyA9IGFueSwgQSBleHRlbmRzIEFjdGlvbiA9IEFueUFjdGlvbj4gPSAoXHJcbiAgc3RhdGU6IERyYWZ0PFM+LFxyXG4gIGFjdGlvbjogQVxyXG4pID0+IFMgfCB2b2lkIHwgRHJhZnQ8Uz5cclxuXHJcbi8qKlxyXG4gKiBBIG1hcHBpbmcgZnJvbSBhY3Rpb24gdHlwZXMgdG8gY2FzZSByZWR1Y2VycyBmb3IgYGNyZWF0ZVJlZHVjZXIoKWAuXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIFRoaXMgc2hvdWxkIG5vdCBiZSB1c2VkIG1hbnVhbGx5IC0gaXQgaXMgb25seSB1c2VkXHJcbiAqICAgICAgICAgICAgIGZvciBpbnRlcm5hbCBpbmZlcmVuY2UgcHVycG9zZXMgYW5kIHVzaW5nIGl0IG1hbnVhbGx5XHJcbiAqICAgICAgICAgICAgIHdvdWxkIGxlYWQgdG8gdHlwZSBlcmFzdXJlLlxyXG4gKiAgICAgICAgICAgICBJdCBtaWdodCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIENhc2VSZWR1Y2VyczxTLCBBUyBleHRlbmRzIEFjdGlvbnM+ID0ge1xyXG4gIFtUIGluIGtleW9mIEFTXTogQVNbVF0gZXh0ZW5kcyBBY3Rpb24gPyBDYXNlUmVkdWNlcjxTLCBBU1tUXT4gOiB2b2lkXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBhbGxvd3MgZGVmaW5pbmcgYSByZWR1Y2VyIGFzIGEgbWFwcGluZyBmcm9tIGFjdGlvblxyXG4gKiB0eXBlIHRvICpjYXNlIHJlZHVjZXIqIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZSB0aGVzZSBhY3Rpb24gdHlwZXMuIFRoZVxyXG4gKiByZWR1Y2VyJ3MgaW5pdGlhbCBzdGF0ZSBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBUaGUgYm9keSBvZiBldmVyeSBjYXNlIHJlZHVjZXIgaXMgaW1wbGljaXRseSB3cmFwcGVkIHdpdGggYSBjYWxsIHRvXHJcbiAqIGBwcm9kdWNlKClgIGZyb20gdGhlIFtpbW1lcl0oaHR0cHM6Ly9naXRodWIuY29tL213ZXN0c3RyYXRlL2ltbWVyKSBsaWJyYXJ5LlxyXG4gKiBUaGlzIG1lYW5zIHRoYXQgcmF0aGVyIHRoYW4gcmV0dXJuaW5nIGEgbmV3IHN0YXRlIG9iamVjdCwgeW91IGNhbiBhbHNvXHJcbiAqIG11dGF0ZSB0aGUgcGFzc2VkLWluIHN0YXRlIG9iamVjdCBkaXJlY3RseTsgdGhlc2UgbXV0YXRpb25zIHdpbGwgdGhlbiBiZVxyXG4gKiBhdXRvbWF0aWNhbGx5IGFuZCBlZmZpY2llbnRseSB0cmFuc2xhdGVkIGludG8gY29waWVzLCBnaXZpbmcgeW91IGJvdGhcclxuICogY29udmVuaWVuY2UgYW5kIGltbXV0YWJpbGl0eS5cclxuICpcclxuICogQG92ZXJsb2FkU3VtbWFyeVxyXG4gKiBUaGlzIG92ZXJsb2FkIGFjY2VwdHMgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgYGJ1aWxkZXJgIG9iamVjdCBhcyBpdHMgYXJndW1lbnQuXHJcbiAqIFRoYXQgYnVpbGRlciBwcm92aWRlcyBgYWRkQ2FzZWAsIGBhZGRNYXRjaGVyYCBhbmQgYGFkZERlZmF1bHRDYXNlYCBmdW5jdGlvbnMgdGhhdCBtYXkgYmVcclxuICogY2FsbGVkIHRvIGRlZmluZSB3aGF0IGFjdGlvbnMgdGhpcyByZWR1Y2VyIHdpbGwgaGFuZGxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlIC0gVGhlIGluaXRpYWwgc3RhdGUgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHRoZSByZWR1Y2VyIGlzIGNhbGxlZCB0aGUgZmlyc3QgdGltZS5cclxuICogQHBhcmFtIGJ1aWxkZXJDYWxsYmFjayAtIEEgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyBhICpidWlsZGVyKiBvYmplY3QgdG8gZGVmaW5lXHJcbiAqICAgY2FzZSByZWR1Y2VycyB2aWEgY2FsbHMgdG8gYGJ1aWxkZXIuYWRkQ2FzZShhY3Rpb25DcmVhdG9yT3JUeXBlLCByZWR1Y2VyKWAuXHJcbiAqIEBleGFtcGxlXHJcbmBgYHRzXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQWN0aW9uLFxyXG4gIGNyZWF0ZVJlZHVjZXIsXHJcbiAgQW55QWN0aW9uLFxyXG4gIFBheWxvYWRBY3Rpb24sXHJcbn0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluY3JlbWVudCA9IGNyZWF0ZUFjdGlvbjxudW1iZXI+KFwiaW5jcmVtZW50XCIpO1xyXG5jb25zdCBkZWNyZW1lbnQgPSBjcmVhdGVBY3Rpb248bnVtYmVyPihcImRlY3JlbWVudFwiKTtcclxuXHJcbmZ1bmN0aW9uIGlzQWN0aW9uV2l0aE51bWJlclBheWxvYWQoXHJcbiAgYWN0aW9uOiBBbnlBY3Rpb25cclxuKTogYWN0aW9uIGlzIFBheWxvYWRBY3Rpb248bnVtYmVyPiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBhY3Rpb24ucGF5bG9hZCA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5cclxuY3JlYXRlUmVkdWNlcihcclxuICB7XHJcbiAgICBjb3VudGVyOiAwLFxyXG4gICAgc3VtT2ZOdW1iZXJQYXlsb2FkczogMCxcclxuICAgIHVuaGFuZGxlZEFjdGlvbnM6IDAsXHJcbiAgfSxcclxuICAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShpbmNyZW1lbnQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgLy8gYWN0aW9uIGlzIGluZmVycmVkIGNvcnJlY3RseSBoZXJlXHJcbiAgICAgICAgc3RhdGUuY291bnRlciArPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgfSlcclxuICAgICAgLy8gWW91IGNhbiBjaGFpbiBjYWxscywgb3IgaGF2ZSBzZXBhcmF0ZSBgYnVpbGRlci5hZGRDYXNlKClgIGxpbmVzIGVhY2ggdGltZVxyXG4gICAgICAuYWRkQ2FzZShkZWNyZW1lbnQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuY291bnRlciAtPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgfSlcclxuICAgICAgLy8gWW91IGNhbiBhcHBseSBhIFwibWF0Y2hlciBmdW5jdGlvblwiIHRvIGluY29taW5nIGFjdGlvbnNcclxuICAgICAgLmFkZE1hdGNoZXIoaXNBY3Rpb25XaXRoTnVtYmVyUGF5bG9hZCwgKHN0YXRlLCBhY3Rpb24pID0+IHt9KVxyXG4gICAgICAvLyBhbmQgcHJvdmlkZSBhIGRlZmF1bHQgY2FzZSBpZiBubyBvdGhlciBoYW5kbGVycyBtYXRjaGVkXHJcbiAgICAgIC5hZGREZWZhdWx0Q2FzZSgoc3RhdGUsIGFjdGlvbikgPT4ge30pO1xyXG4gIH1cclxuKTtcclxuYGBgXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyPFM+KFxyXG4gIGluaXRpYWxTdGF0ZTogUyxcclxuICBidWlsZGVyQ2FsbGJhY2s6IChidWlsZGVyOiBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxTPikgPT4gdm9pZFxyXG4pOiBSZWR1Y2VyPFM+XHJcblxyXG4vKipcclxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgYWxsb3dzIGRlZmluaW5nIGEgcmVkdWNlciBhcyBhIG1hcHBpbmcgZnJvbSBhY3Rpb25cclxuICogdHlwZSB0byAqY2FzZSByZWR1Y2VyKiBmdW5jdGlvbnMgdGhhdCBoYW5kbGUgdGhlc2UgYWN0aW9uIHR5cGVzLiBUaGVcclxuICogcmVkdWNlcidzIGluaXRpYWwgc3RhdGUgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cclxuICpcclxuICogVGhlIGJvZHkgb2YgZXZlcnkgY2FzZSByZWR1Y2VyIGlzIGltcGxpY2l0bHkgd3JhcHBlZCB3aXRoIGEgY2FsbCB0b1xyXG4gKiBgcHJvZHVjZSgpYCBmcm9tIHRoZSBbaW1tZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9td2VzdHN0cmF0ZS9pbW1lcikgbGlicmFyeS5cclxuICogVGhpcyBtZWFucyB0aGF0IHJhdGhlciB0aGFuIHJldHVybmluZyBhIG5ldyBzdGF0ZSBvYmplY3QsIHlvdSBjYW4gYWxzb1xyXG4gKiBtdXRhdGUgdGhlIHBhc3NlZC1pbiBzdGF0ZSBvYmplY3QgZGlyZWN0bHk7IHRoZXNlIG11dGF0aW9ucyB3aWxsIHRoZW4gYmVcclxuICogYXV0b21hdGljYWxseSBhbmQgZWZmaWNpZW50bHkgdHJhbnNsYXRlZCBpbnRvIGNvcGllcywgZ2l2aW5nIHlvdSBib3RoXHJcbiAqIGNvbnZlbmllbmNlIGFuZCBpbW11dGFiaWxpdHkuXHJcbiAqIFxyXG4gKiBAb3ZlcmxvYWRTdW1tYXJ5XHJcbiAqIFRoaXMgb3ZlcmxvYWQgYWNjZXB0cyBhbiBvYmplY3Qgd2hlcmUgdGhlIGtleXMgYXJlIHN0cmluZyBhY3Rpb24gdHlwZXMsIGFuZCB0aGUgdmFsdWVzXHJcbiAqIGFyZSBjYXNlIHJlZHVjZXIgZnVuY3Rpb25zIHRvIGhhbmRsZSB0aG9zZSBhY3Rpb24gdHlwZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGUgLSBUaGUgaW5pdGlhbCBzdGF0ZSB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gdGhlIHJlZHVjZXIgaXMgY2FsbGVkIHRoZSBmaXJzdCB0aW1lLlxyXG4gKiBAcGFyYW0gYWN0aW9uc01hcCAtIEFuIG9iamVjdCBtYXBwaW5nIGZyb20gYWN0aW9uIHR5cGVzIHRvIF9jYXNlIHJlZHVjZXJzXywgZWFjaCBvZiB3aGljaCBoYW5kbGVzIG9uZSBzcGVjaWZpYyBhY3Rpb24gdHlwZS5cclxuICogQHBhcmFtIGFjdGlvbk1hdGNoZXJzIC0gQW4gYXJyYXkgb2YgbWF0Y2hlciBkZWZpbml0aW9ucyBpbiB0aGUgZm9ybSBge21hdGNoZXIsIHJlZHVjZXJ9YC5cclxuICogICBBbGwgbWF0Y2hpbmcgcmVkdWNlcnMgd2lsbCBiZSBleGVjdXRlZCBpbiBvcmRlciwgaW5kZXBlbmRlbnRseSBpZiBhIGNhc2UgcmVkdWNlciBtYXRjaGVkIG9yIG5vdC5cclxuICogQHBhcmFtIGRlZmF1bHRDYXNlUmVkdWNlciAtIEEgXCJkZWZhdWx0IGNhc2VcIiByZWR1Y2VyIHRoYXQgaXMgZXhlY3V0ZWQgaWYgbm8gY2FzZSByZWR1Y2VyIGFuZCBubyBtYXRjaGVyXHJcbiAqICAgcmVkdWNlciB3YXMgZXhlY3V0ZWQgZm9yIHRoaXMgYWN0aW9uLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG5gYGBqc1xyXG5jb25zdCBjb3VudGVyUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoMCwge1xyXG4gIGluY3JlbWVudDogKHN0YXRlLCBhY3Rpb24pID0+IHN0YXRlICsgYWN0aW9uLnBheWxvYWQsXHJcbiAgZGVjcmVtZW50OiAoc3RhdGUsIGFjdGlvbikgPT4gc3RhdGUgLSBhY3Rpb24ucGF5bG9hZFxyXG59KVxyXG5gYGBcclxuIFxyXG4gKiBBY3Rpb24gY3JlYXRvcnMgdGhhdCB3ZXJlIGdlbmVyYXRlZCB1c2luZyBbYGNyZWF0ZUFjdGlvbmBdKC4vY3JlYXRlQWN0aW9uKSBtYXkgYmUgdXNlZCBkaXJlY3RseSBhcyB0aGUga2V5cyBoZXJlLCB1c2luZyBjb21wdXRlZCBwcm9wZXJ0eSBzeW50YXg6XHJcblxyXG5gYGBqc1xyXG5jb25zdCBpbmNyZW1lbnQgPSBjcmVhdGVBY3Rpb24oJ2luY3JlbWVudCcpXHJcbmNvbnN0IGRlY3JlbWVudCA9IGNyZWF0ZUFjdGlvbignZGVjcmVtZW50JylcclxuXHJcbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcigwLCB7XHJcbiAgW2luY3JlbWVudF06IChzdGF0ZSwgYWN0aW9uKSA9PiBzdGF0ZSArIGFjdGlvbi5wYXlsb2FkLFxyXG4gIFtkZWNyZW1lbnQudHlwZV06IChzdGF0ZSwgYWN0aW9uKSA9PiBzdGF0ZSAtIGFjdGlvbi5wYXlsb2FkXHJcbn0pXHJcbmBgYFxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlcjxcclxuICBTLFxyXG4gIENSIGV4dGVuZHMgQ2FzZVJlZHVjZXJzPFMsIGFueT4gPSBDYXNlUmVkdWNlcnM8UywgYW55PlxyXG4+KFxyXG4gIGluaXRpYWxTdGF0ZTogUyxcclxuICBhY3Rpb25zTWFwOiBDUixcclxuICBhY3Rpb25NYXRjaGVycz86IEFjdGlvbk1hdGNoZXJEZXNjcmlwdGlvbkNvbGxlY3Rpb248Uz4sXHJcbiAgZGVmYXVsdENhc2VSZWR1Y2VyPzogQ2FzZVJlZHVjZXI8Uz5cclxuKTogUmVkdWNlcjxTPlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXI8Uz4oXHJcbiAgaW5pdGlhbFN0YXRlOiBTLFxyXG4gIG1hcE9yQnVpbGRlckNhbGxiYWNrOlxyXG4gICAgfCBDYXNlUmVkdWNlcnM8UywgYW55PlxyXG4gICAgfCAoKGJ1aWxkZXI6IEFjdGlvblJlZHVjZXJNYXBCdWlsZGVyPFM+KSA9PiB2b2lkKSxcclxuICBhY3Rpb25NYXRjaGVyczogQWN0aW9uTWF0Y2hlckRlc2NyaXB0aW9uQ29sbGVjdGlvbjxTPiA9IFtdLFxyXG4gIGRlZmF1bHRDYXNlUmVkdWNlcj86IENhc2VSZWR1Y2VyPFM+XHJcbik6IFJlZHVjZXI8Uz4ge1xyXG4gIGxldCBbYWN0aW9uc01hcCwgZmluYWxBY3Rpb25NYXRjaGVycywgZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdID1cclxuICAgIHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKVxyXG4gICAgICA6IFttYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl1cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pOiBTIHtcclxuICAgIGxldCBjYXNlUmVkdWNlcnMgPSBbXHJcbiAgICAgIGFjdGlvbnNNYXBbYWN0aW9uLnR5cGVdLFxyXG4gICAgICAuLi5maW5hbEFjdGlvbk1hdGNoZXJzXHJcbiAgICAgICAgLmZpbHRlcigoeyBtYXRjaGVyIH0pID0+IG1hdGNoZXIoYWN0aW9uKSlcclxuICAgICAgICAubWFwKCh7IHJlZHVjZXIgfSkgPT4gcmVkdWNlcilcclxuICAgIF1cclxuICAgIGlmIChjYXNlUmVkdWNlcnMuZmlsdGVyKGNyID0+ICEhY3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjYXNlUmVkdWNlcnMgPSBbZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhc2VSZWR1Y2Vycy5yZWR1Y2UoKHByZXZpb3VzU3RhdGUsIGNhc2VSZWR1Y2VyKTogUyA9PiB7XHJcbiAgICAgIGlmIChjYXNlUmVkdWNlcikge1xyXG4gICAgICAgIGlmIChpc0RyYWZ0KHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAvLyBJZiBpdCdzIGFscmVhZHkgYSBkcmFmdCwgd2UgbXVzdCBhbHJlYWR5IGJlIGluc2lkZSBhIGBjcmVhdGVOZXh0U3RhdGVgIGNhbGwsXHJcbiAgICAgICAgICAvLyBsaWtlbHkgYmVjYXVzZSB0aGlzIGlzIGJlaW5nIHdyYXBwZWQgaW4gYGNyZWF0ZVJlZHVjZXJgLCBgY3JlYXRlU2xpY2VgLCBvciBuZXN0ZWRcclxuICAgICAgICAgIC8vIGluc2lkZSBhbiBleGlzdGluZyBkcmFmdC4gSXQncyBzYWZlIHRvIGp1c3QgcGFzcyB0aGUgZHJhZnQgdG8gdGhlIG11dGF0b3IuXHJcbiAgICAgICAgICBjb25zdCBkcmFmdCA9IHByZXZpb3VzU3RhdGUgYXMgRHJhZnQ8Uz4gLy8gV2UgY2FuIGFzc3VtZSB0aGlzIGlzIGFscmVhZHkgYSBkcmFmdFxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbilcclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGVcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0IGFzIFNcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc0RyYWZ0YWJsZShwcmV2aW91c1N0YXRlKSkge1xyXG4gICAgICAgICAgLy8gSWYgc3RhdGUgaXMgbm90IGRyYWZ0YWJsZSAoZXg6IGEgcHJpbWl0aXZlLCBzdWNoIGFzIDApLCB3ZSB3YW50IHRvIGRpcmVjdGx5XHJcbiAgICAgICAgICAvLyByZXR1cm4gdGhlIGNhc2VSZWR1Y2VyIGZ1bmMgYW5kIG5vdCB3cmFwIGl0IHdpdGggcHJvZHVjZS5cclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhc2VSZWR1Y2VyKHByZXZpb3VzU3RhdGUgYXMgYW55LCBhY3Rpb24pXHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1N0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgICAnQSBjYXNlIHJlZHVjZXIgb24gYSBub24tZHJhZnRhYmxlIHZhbHVlIG11c3Qgbm90IHJldHVybiB1bmRlZmluZWQnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0IGFzIFNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBjcmVhdGVOZXh0U3RhdGUoKSBwcm9kdWNlcyBhbiBJbW11dGFibGU8RHJhZnQ8Uz4+IHJhdGhlclxyXG4gICAgICAgICAgLy8gdGhhbiBhbiBJbW11dGFibGU8Uz4sIGFuZCBUeXBlU2NyaXB0IGNhbm5vdCBmaW5kIG91dCBob3cgdG8gcmVjb25jaWxlXHJcbiAgICAgICAgICAvLyB0aGVzZSB0d28gdHlwZXMuXHJcbiAgICAgICAgICByZXR1cm4gY3JlYXRlTmV4dFN0YXRlKHByZXZpb3VzU3RhdGUsIChkcmFmdDogRHJhZnQ8Uz4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhc2VSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGVcclxuICAgIH0sIHN0YXRlKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhvdXRQYXlsb2FkLFxyXG4gIGNyZWF0ZUFjdGlvbixcclxuICBQYXlsb2FkQWN0aW9uLFxyXG4gIFBheWxvYWRBY3Rpb25DcmVhdG9yLFxyXG4gIFByZXBhcmVBY3Rpb24sXHJcbiAgX0FjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkXHJcbn0gZnJvbSAnLi9jcmVhdGVBY3Rpb24nXHJcbmltcG9ydCB7IENhc2VSZWR1Y2VyLCBDYXNlUmVkdWNlcnMsIGNyZWF0ZVJlZHVjZXIgfSBmcm9tICcuL2NyZWF0ZVJlZHVjZXInXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXIsXHJcbiAgZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2tcclxufSBmcm9tICcuL21hcEJ1aWxkZXJzJ1xyXG5pbXBvcnQgeyBOb0luZmVyIH0gZnJvbSAnLi90c0hlbHBlcnMnXHJcblxyXG4vKipcclxuICogQW4gYWN0aW9uIGNyZWF0b3IgYXR0YWNoZWQgdG8gYSBzbGljZS5cclxuICpcclxuICogQGRlcHJlY2F0ZWQgcGxlYXNlIHVzZSBQYXlsb2FkQWN0aW9uQ3JlYXRvciBkaXJlY3RseVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTbGljZUFjdGlvbkNyZWF0b3I8UD4gPSBQYXlsb2FkQWN0aW9uQ3JlYXRvcjxQPlxyXG5cclxuLyoqXHJcbiAqIFRoZSByZXR1cm4gdmFsdWUgb2YgYGNyZWF0ZVNsaWNlYFxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWNlPFxyXG4gIFN0YXRlID0gYW55LFxyXG4gIENhc2VSZWR1Y2VycyBleHRlbmRzIFNsaWNlQ2FzZVJlZHVjZXJzPFN0YXRlPiA9IFNsaWNlQ2FzZVJlZHVjZXJzPFN0YXRlPixcclxuICBOYW1lIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nXHJcbj4ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzbGljZSBuYW1lLlxyXG4gICAqL1xyXG4gIG5hbWU6IE5hbWVcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNsaWNlJ3MgcmVkdWNlci5cclxuICAgKi9cclxuICByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlPlxyXG5cclxuICAvKipcclxuICAgKiBBY3Rpb24gY3JlYXRvcnMgZm9yIHRoZSB0eXBlcyBvZiBhY3Rpb25zIHRoYXQgYXJlIGhhbmRsZWQgYnkgdGhlIHNsaWNlXHJcbiAgICogcmVkdWNlci5cclxuICAgKi9cclxuICBhY3Rpb25zOiBDYXNlUmVkdWNlckFjdGlvbnM8Q2FzZVJlZHVjZXJzPlxyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5kaXZpZHVhbCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgd2VyZSBwYXNzZWQgaW4gdGhlIGByZWR1Y2Vyc2AgcGFyYW1ldGVyLlxyXG4gICAqIFRoaXMgZW5hYmxlcyByZXVzZSBhbmQgdGVzdGluZyBpZiB0aGV5IHdlcmUgZGVmaW5lZCBpbmxpbmUgd2hlbiBjYWxsaW5nIGBjcmVhdGVTbGljZWAuXHJcbiAgICovXHJcbiAgY2FzZVJlZHVjZXJzOiBTbGljZURlZmluZWRDYXNlUmVkdWNlcnM8Q2FzZVJlZHVjZXJzPlxyXG59XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBmb3IgYGNyZWF0ZVNsaWNlKClgLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVNsaWNlT3B0aW9uczxcclxuICBTdGF0ZSA9IGFueSxcclxuICBDUiBleHRlbmRzIFNsaWNlQ2FzZVJlZHVjZXJzPFN0YXRlPiA9IFNsaWNlQ2FzZVJlZHVjZXJzPFN0YXRlPixcclxuICBOYW1lIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nXHJcbj4ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzbGljZSdzIG5hbWUuIFVzZWQgdG8gbmFtZXNwYWNlIHRoZSBnZW5lcmF0ZWQgYWN0aW9uIHR5cGVzLlxyXG4gICAqL1xyXG4gIG5hbWU6IE5hbWVcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgc3RhdGUgdG8gYmUgcmV0dXJuZWQgYnkgdGhlIHNsaWNlIHJlZHVjZXIuXHJcbiAgICovXHJcbiAgaW5pdGlhbFN0YXRlOiBTdGF0ZVxyXG5cclxuICAvKipcclxuICAgKiBBIG1hcHBpbmcgZnJvbSBhY3Rpb24gdHlwZXMgdG8gYWN0aW9uLXR5cGUtc3BlY2lmaWMgKmNhc2UgcmVkdWNlcipcclxuICAgKiBmdW5jdGlvbnMuIEZvciBldmVyeSBhY3Rpb24gdHlwZSwgYSBtYXRjaGluZyBhY3Rpb24gY3JlYXRvciB3aWxsIGJlXHJcbiAgICogZ2VuZXJhdGVkIHVzaW5nIGBjcmVhdGVBY3Rpb24oKWAuXHJcbiAgICovXHJcbiAgcmVkdWNlcnM6IFZhbGlkYXRlU2xpY2VDYXNlUmVkdWNlcnM8U3RhdGUsIENSPlxyXG5cclxuICAvKipcclxuICAgKiBBIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgYSAqYnVpbGRlciogb2JqZWN0IHRvIGRlZmluZVxyXG4gICAqIGNhc2UgcmVkdWNlcnMgdmlhIGNhbGxzIHRvIGBidWlsZGVyLmFkZENhc2UoYWN0aW9uQ3JlYXRvck9yVHlwZSwgcmVkdWNlcilgLlxyXG4gICAqIFxyXG4gICAqIEFsdGVybmF0aXZlbHksIGEgbWFwcGluZyBmcm9tIGFjdGlvbiB0eXBlcyB0byBhY3Rpb24tdHlwZS1zcGVjaWZpYyAqY2FzZSByZWR1Y2VyKlxyXG4gICAqIGZ1bmN0aW9ucy4gVGhlc2UgcmVkdWNlcnMgc2hvdWxkIGhhdmUgZXhpc3RpbmcgYWN0aW9uIHR5cGVzIHVzZWRcclxuICAgKiBhcyB0aGUga2V5cywgYW5kIGFjdGlvbiBjcmVhdG9ycyB3aWxsIF9ub3RfIGJlIGdlbmVyYXRlZC5cclxuICAgKiBcclxuICAgKiBAZXhhbXBsZVxyXG5gYGB0c1xyXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVNsaWNlLCBBY3Rpb24sIEFueUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmNvbnN0IGluY3JlbWVudEJ5ID0gY3JlYXRlQWN0aW9uPG51bWJlcj4oJ2luY3JlbWVudEJ5JylcclxuY29uc3QgZGVjcmVtZW50ID0gY3JlYXRlQWN0aW9uKCdkZWNyZW1lbnQnKVxyXG5cclxuaW50ZXJmYWNlIFJlamVjdGVkQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICBlcnJvcjogRXJyb3JcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWplY3RlZEFjdGlvbihhY3Rpb246IEFueUFjdGlvbik6IGFjdGlvbiBpcyBSZWplY3RlZEFjdGlvbiB7XHJcbiAgcmV0dXJuIGFjdGlvbi50eXBlLmVuZHNXaXRoKCdyZWplY3RlZCcpXHJcbn1cclxuXHJcbmNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnY291bnRlcicsXHJcbiAgaW5pdGlhbFN0YXRlOiAwLFxyXG4gIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiBidWlsZGVyID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoaW5jcmVtZW50QnksIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgLy8gYWN0aW9uIGlzIGluZmVycmVkIGNvcnJlY3RseSBoZXJlIGlmIHVzaW5nIFRTXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIFlvdSBjYW4gY2hhaW4gY2FsbHMsIG9yIGhhdmUgc2VwYXJhdGUgYGJ1aWxkZXIuYWRkQ2FzZSgpYCBsaW5lcyBlYWNoIHRpbWVcclxuICAgICAgLmFkZENhc2UoZGVjcmVtZW50LCAoc3RhdGUsIGFjdGlvbikgPT4ge30pXHJcbiAgICAgIC8vIFlvdSBjYW4gbWF0Y2ggYSByYW5nZSBvZiBhY3Rpb24gdHlwZXNcclxuICAgICAgLmFkZE1hdGNoZXIoXHJcbiAgICAgICAgaXNSZWplY3RlZEFjdGlvbixcclxuICAgICAgICAvLyBgYWN0aW9uYCB3aWxsIGJlIGluZmVycmVkIGFzIGEgUmVqZWN0ZWRBY3Rpb24gZHVlIHRvIGlzUmVqZWN0ZWRBY3Rpb24gYmVpbmcgZGVmaW5lZCBhcyBhIHR5cGUgZ3VhcmRcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbikgPT4ge31cclxuICAgICAgKVxyXG4gICAgICAvLyBhbmQgcHJvdmlkZSBhIGRlZmF1bHQgY2FzZSBpZiBubyBvdGhlciBoYW5kbGVycyBtYXRjaGVkXHJcbiAgICAgIC5hZGREZWZhdWx0Q2FzZSgoc3RhdGUsIGFjdGlvbikgPT4ge30pXHJcbiAgICB9XHJcbn0pXHJcbmBgYFxyXG4gICAqL1xyXG4gIGV4dHJhUmVkdWNlcnM/OlxyXG4gICAgfCBDYXNlUmVkdWNlcnM8Tm9JbmZlcjxTdGF0ZT4sIGFueT5cclxuICAgIHwgKChidWlsZGVyOiBBY3Rpb25SZWR1Y2VyTWFwQnVpbGRlcjxOb0luZmVyPFN0YXRlPj4pID0+IHZvaWQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIENhc2VSZWR1Y2VyIHdpdGggYSBgcHJlcGFyZWAgbWV0aG9kLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYXNlUmVkdWNlcldpdGhQcmVwYXJlPFN0YXRlLCBBY3Rpb24gZXh0ZW5kcyBQYXlsb2FkQWN0aW9uPiA9IHtcclxuICByZWR1Y2VyOiBDYXNlUmVkdWNlcjxTdGF0ZSwgQWN0aW9uPlxyXG4gIHByZXBhcmU6IFByZXBhcmVBY3Rpb248QWN0aW9uWydwYXlsb2FkJ10+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBkZXNjcmliaW5nIGEgc2xpY2UncyBgcmVkdWNlcnNgIG9wdGlvbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2xpY2VDYXNlUmVkdWNlcnM8U3RhdGU+ID0ge1xyXG4gIFtLOiBzdHJpbmddOlxyXG4gICAgfCBDYXNlUmVkdWNlcjxTdGF0ZSwgUGF5bG9hZEFjdGlvbjxhbnk+PlxyXG4gICAgfCBDYXNlUmVkdWNlcldpdGhQcmVwYXJlPFN0YXRlLCBQYXlsb2FkQWN0aW9uPGFueSwgc3RyaW5nLCBhbnksIGFueT4+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXJpdmVzIHRoZSBzbGljZSdzIGBhY3Rpb25zYCBwcm9wZXJ0eSBmcm9tIHRoZSBgcmVkdWNlcnNgIG9wdGlvbnNcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FzZVJlZHVjZXJBY3Rpb25zPENhc2VSZWR1Y2VycyBleHRlbmRzIFNsaWNlQ2FzZVJlZHVjZXJzPGFueT4+ID0ge1xyXG4gIFtUeXBlIGluIGtleW9mIENhc2VSZWR1Y2Vyc106IENhc2VSZWR1Y2Vyc1tUeXBlXSBleHRlbmRzIHsgcHJlcGFyZTogYW55IH1cclxuICAgID8gQWN0aW9uQ3JlYXRvckZvckNhc2VSZWR1Y2VyV2l0aFByZXBhcmU8Q2FzZVJlZHVjZXJzW1R5cGVdPlxyXG4gICAgOiBBY3Rpb25DcmVhdG9yRm9yQ2FzZVJlZHVjZXI8Q2FzZVJlZHVjZXJzW1R5cGVdPlxyXG59XHJcblxyXG4vKipcclxuICogR2V0IGEgYFBheWxvYWRBY3Rpb25DcmVhdG9yYCB0eXBlIGZvciBhIHBhc3NlZCBgQ2FzZVJlZHVjZXJXaXRoUHJlcGFyZWBcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG50eXBlIEFjdGlvbkNyZWF0b3JGb3JDYXNlUmVkdWNlcldpdGhQcmVwYXJlPFxyXG4gIENSIGV4dGVuZHMgeyBwcmVwYXJlOiBhbnkgfVxyXG4+ID0gX0FjdGlvbkNyZWF0b3JXaXRoUHJlcGFyZWRQYXlsb2FkPENSWydwcmVwYXJlJ10sIHN0cmluZz5cclxuXHJcbi8qKlxyXG4gKiBHZXQgYSBgUGF5bG9hZEFjdGlvbkNyZWF0b3JgIHR5cGUgZm9yIGEgcGFzc2VkIGBDYXNlUmVkdWNlcmBcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG50eXBlIEFjdGlvbkNyZWF0b3JGb3JDYXNlUmVkdWNlcjxDUj4gPSBDUiBleHRlbmRzIChcclxuICBzdGF0ZTogYW55LFxyXG4gIGFjdGlvbjogaW5mZXIgQWN0aW9uXHJcbikgPT4gYW55XHJcbiAgPyBBY3Rpb24gZXh0ZW5kcyB7IHBheWxvYWQ6IGluZmVyIFAgfVxyXG4gICAgPyBQYXlsb2FkQWN0aW9uQ3JlYXRvcjxQPlxyXG4gICAgOiBBY3Rpb25DcmVhdG9yV2l0aG91dFBheWxvYWRcclxuICA6IEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZFxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHRoZSBDYXNlUmVkdWNlcnMgb3V0IG9mIGEgYHJlZHVjZXJzYCBvYmplY3QsIGV2ZW4gaWYgdGhleSBhcmVcclxuICogdGVzdGVkIGludG8gYSBgQ2FzZVJlZHVjZXJXaXRoUHJlcGFyZWAuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxudHlwZSBTbGljZURlZmluZWRDYXNlUmVkdWNlcnM8Q2FzZVJlZHVjZXJzIGV4dGVuZHMgU2xpY2VDYXNlUmVkdWNlcnM8YW55Pj4gPSB7XHJcbiAgW1R5cGUgaW4ga2V5b2YgQ2FzZVJlZHVjZXJzXTogQ2FzZVJlZHVjZXJzW1R5cGVdIGV4dGVuZHMge1xyXG4gICAgcmVkdWNlcjogaW5mZXIgUmVkdWNlclxyXG4gIH1cclxuICAgID8gUmVkdWNlclxyXG4gICAgOiBDYXNlUmVkdWNlcnNbVHlwZV1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZWQgb24gYSBTbGljZUNhc2VSZWR1Y2VycyBvYmplY3QuXHJcbiAqIEVuc3VyZXMgdGhhdCBpZiBhIENhc2VSZWR1Y2VyIGlzIGEgYENhc2VSZWR1Y2VyV2l0aFByZXBhcmVgLCB0aGF0XHJcbiAqIHRoZSBgcmVkdWNlcmAgYW5kIHRoZSBgcHJlcGFyZWAgZnVuY3Rpb24gdXNlIHRoZSBzYW1lIHR5cGUgb2YgYHBheWxvYWRgLlxyXG4gKlxyXG4gKiBNaWdodCBkbyBhZGRpdGlvbmFsIHN1Y2ggY2hlY2tzIGluIHRoZSBmdXR1cmUuXHJcbiAqXHJcbiAqIFRoaXMgdHlwZSBpcyBvbmx5IGV2ZXIgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHdyaXRlIHlvdXIgb3duIHdyYXBwZXIgYXJvdW5kXHJcbiAqIGBjcmVhdGVTbGljZWAuIFBsZWFzZSBkb24ndCB1c2UgaXQgb3RoZXJ3aXNlIVxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYWxpZGF0ZVNsaWNlQ2FzZVJlZHVjZXJzPFxyXG4gIFMsXHJcbiAgQUNSIGV4dGVuZHMgU2xpY2VDYXNlUmVkdWNlcnM8Uz5cclxuPiA9IEFDUiAmXHJcbiAge1xyXG4gICAgW1QgaW4ga2V5b2YgQUNSXTogQUNSW1RdIGV4dGVuZHMge1xyXG4gICAgICByZWR1Y2VyKHM6IFMsIGFjdGlvbj86IGluZmVyIEEpOiBhbnlcclxuICAgIH1cclxuICAgICAgPyB7XHJcbiAgICAgICAgICBwcmVwYXJlKC4uLmE6IG5ldmVyW10pOiBPbWl0PEEsICd0eXBlJz5cclxuICAgICAgICB9XHJcbiAgICAgIDoge31cclxuICB9XHJcblxyXG5mdW5jdGlvbiBnZXRUeXBlKHNsaWNlOiBzdHJpbmcsIGFjdGlvbktleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gYCR7c2xpY2V9LyR7YWN0aW9uS2V5fWBcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFuIGluaXRpYWwgc3RhdGUsIGFuIG9iamVjdCBmdWxsIG9mIHJlZHVjZXJcclxuICogZnVuY3Rpb25zLCBhbmQgYSBcInNsaWNlIG5hbWVcIiwgYW5kIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzXHJcbiAqIGFjdGlvbiBjcmVhdG9ycyBhbmQgYWN0aW9uIHR5cGVzIHRoYXQgY29ycmVzcG9uZCB0byB0aGVcclxuICogcmVkdWNlcnMgYW5kIHN0YXRlLlxyXG4gKlxyXG4gKiBUaGUgYHJlZHVjZXJgIGFyZ3VtZW50IGlzIHBhc3NlZCB0byBgY3JlYXRlUmVkdWNlcigpYC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNsaWNlPFxyXG4gIFN0YXRlLFxyXG4gIENhc2VSZWR1Y2VycyBleHRlbmRzIFNsaWNlQ2FzZVJlZHVjZXJzPFN0YXRlPixcclxuICBOYW1lIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nXHJcbj4oXHJcbiAgb3B0aW9uczogQ3JlYXRlU2xpY2VPcHRpb25zPFN0YXRlLCBDYXNlUmVkdWNlcnMsIE5hbWU+XHJcbik6IFNsaWNlPFN0YXRlLCBDYXNlUmVkdWNlcnMsIE5hbWU+IHtcclxuICBjb25zdCB7IG5hbWUsIGluaXRpYWxTdGF0ZSB9ID0gb3B0aW9uc1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdgbmFtZWAgaXMgYSByZXF1aXJlZCBvcHRpb24gZm9yIGNyZWF0ZVNsaWNlJylcclxuICB9XHJcbiAgY29uc3QgcmVkdWNlcnMgPSBvcHRpb25zLnJlZHVjZXJzIHx8IHt9XHJcbiAgY29uc3QgW1xyXG4gICAgZXh0cmFSZWR1Y2VycyA9IHt9LFxyXG4gICAgYWN0aW9uTWF0Y2hlcnMgPSBbXSxcclxuICAgIGRlZmF1bHRDYXNlUmVkdWNlciA9IHVuZGVmaW5lZFxyXG4gIF0gPVxyXG4gICAgdHlwZW9mIG9wdGlvbnMuZXh0cmFSZWR1Y2VycyA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyBbXVxyXG4gICAgICA6IHR5cGVvZiBvcHRpb25zLmV4dHJhUmVkdWNlcnMgPT09ICdmdW5jdGlvbidcclxuICAgICAgPyBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhvcHRpb25zLmV4dHJhUmVkdWNlcnMpXHJcbiAgICAgIDogW29wdGlvbnMuZXh0cmFSZWR1Y2Vyc11cclxuXHJcbiAgY29uc3QgcmVkdWNlck5hbWVzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpXHJcblxyXG4gIGNvbnN0IHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lOiBSZWNvcmQ8c3RyaW5nLCBDYXNlUmVkdWNlcj4gPSB7fVxyXG4gIGNvbnN0IHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlOiBSZWNvcmQ8c3RyaW5nLCBDYXNlUmVkdWNlcj4gPSB7fVxyXG4gIGNvbnN0IGFjdGlvbkNyZWF0b3JzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB7fVxyXG5cclxuICByZWR1Y2VyTmFtZXMuZm9yRWFjaChyZWR1Y2VyTmFtZSA9PiB7XHJcbiAgICBjb25zdCBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSA9IHJlZHVjZXJzW3JlZHVjZXJOYW1lXVxyXG4gICAgY29uc3QgdHlwZSA9IGdldFR5cGUobmFtZSwgcmVkdWNlck5hbWUpXHJcblxyXG4gICAgbGV0IGNhc2VSZWR1Y2VyOiBDYXNlUmVkdWNlcjxTdGF0ZSwgYW55PlxyXG4gICAgbGV0IHByZXBhcmVDYWxsYmFjazogUHJlcGFyZUFjdGlvbjxhbnk+IHwgdW5kZWZpbmVkXHJcblxyXG4gICAgaWYgKCdyZWR1Y2VyJyBpbiBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSkge1xyXG4gICAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlLnJlZHVjZXJcclxuICAgICAgcHJlcGFyZUNhbGxiYWNrID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucHJlcGFyZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lW3JlZHVjZXJOYW1lXSA9IGNhc2VSZWR1Y2VyXHJcbiAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZVt0eXBlXSA9IGNhc2VSZWR1Y2VyXHJcbiAgICBhY3Rpb25DcmVhdG9yc1tyZWR1Y2VyTmFtZV0gPSBwcmVwYXJlQ2FsbGJhY2tcclxuICAgICAgPyBjcmVhdGVBY3Rpb24odHlwZSwgcHJlcGFyZUNhbGxiYWNrKVxyXG4gICAgICA6IGNyZWF0ZUFjdGlvbih0eXBlKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZpbmFsQ2FzZVJlZHVjZXJzID0geyAuLi5leHRyYVJlZHVjZXJzLCAuLi5zbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZSB9XHJcbiAgY29uc3QgcmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBmaW5hbENhc2VSZWR1Y2VycyBhcyBhbnksXHJcbiAgICBhY3Rpb25NYXRjaGVycyxcclxuICAgIGRlZmF1bHRDYXNlUmVkdWNlclxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICByZWR1Y2VyLFxyXG4gICAgYWN0aW9uczogYWN0aW9uQ3JlYXRvcnMgYXMgYW55LFxyXG4gICAgY2FzZVJlZHVjZXJzOiBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZSBhcyBhbnlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW50aXR5U3RhdGUgfSBmcm9tICcuL21vZGVscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsRW50aXR5U3RhdGU8Vj4oKTogRW50aXR5U3RhdGU8Vj4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZHM6IFtdLFxyXG4gICAgZW50aXRpZXM6IHt9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeTxWPigpIHtcclxuICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKTogRW50aXR5U3RhdGU8Vj5cclxuICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGU8UyBleHRlbmRzIG9iamVjdD4oXHJcbiAgICBhZGRpdGlvbmFsU3RhdGU6IFNcclxuICApOiBFbnRpdHlTdGF0ZTxWPiAmIFNcclxuICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoYWRkaXRpb25hbFN0YXRlOiBhbnkgPSB7fSk6IGFueSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihnZXRJbml0aWFsRW50aXR5U3RhdGUoKSwgYWRkaXRpb25hbFN0YXRlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0SW5pdGlhbFN0YXRlIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvciB9IGZyb20gJy4uL2NyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yJ1xyXG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSwgRW50aXR5U2VsZWN0b3JzLCBEaWN0aW9uYXJ5LCBFbnRpdHlJZCB9IGZyb20gJy4vbW9kZWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0ZhY3Rvcnk8VD4oKSB7XHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKCk6IEVudGl0eVNlbGVjdG9yczxULCBFbnRpdHlTdGF0ZTxUPj5cclxuICBmdW5jdGlvbiBnZXRTZWxlY3RvcnM8Vj4oXHJcbiAgICBzZWxlY3RTdGF0ZTogKHN0YXRlOiBWKSA9PiBFbnRpdHlTdGF0ZTxUPlxyXG4gICk6IEVudGl0eVNlbGVjdG9yczxULCBWPlxyXG4gIGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhcclxuICAgIHNlbGVjdFN0YXRlPzogKHN0YXRlOiBhbnkpID0+IEVudGl0eVN0YXRlPFQ+XHJcbiAgKTogRW50aXR5U2VsZWN0b3JzPFQsIGFueT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0SWRzID0gKHN0YXRlOiBhbnkpID0+IHN0YXRlLmlkc1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEVudGl0aWVzID0gKHN0YXRlOiBFbnRpdHlTdGF0ZTxUPikgPT4gc3RhdGUuZW50aXRpZXNcclxuXHJcbiAgICBjb25zdCBzZWxlY3RBbGwgPSBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihcclxuICAgICAgc2VsZWN0SWRzLFxyXG4gICAgICBzZWxlY3RFbnRpdGllcyxcclxuICAgICAgKGlkczogVFtdLCBlbnRpdGllczogRGljdGlvbmFyeTxUPik6IGFueSA9PlxyXG4gICAgICAgIGlkcy5tYXAoKGlkOiBhbnkpID0+IChlbnRpdGllcyBhcyBhbnkpW2lkXSlcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzZWxlY3RJZCA9IChfOiBhbnksIGlkOiBFbnRpdHlJZCkgPT4gaWRcclxuXHJcbiAgICBjb25zdCBzZWxlY3RCeUlkID0gKGVudGl0aWVzOiBEaWN0aW9uYXJ5PFQ+LCBpZDogRW50aXR5SWQpID0+IGVudGl0aWVzW2lkXVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdFRvdGFsID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0SWRzLCBpZHMgPT4gaWRzLmxlbmd0aClcclxuXHJcbiAgICBpZiAoIXNlbGVjdFN0YXRlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VsZWN0SWRzLFxyXG4gICAgICAgIHNlbGVjdEVudGl0aWVzLFxyXG4gICAgICAgIHNlbGVjdEFsbCxcclxuICAgICAgICBzZWxlY3RUb3RhbCxcclxuICAgICAgICBzZWxlY3RCeUlkOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihcclxuICAgICAgICAgIHNlbGVjdEVudGl0aWVzLFxyXG4gICAgICAgICAgc2VsZWN0SWQsXHJcbiAgICAgICAgICBzZWxlY3RCeUlkXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IoXHJcbiAgICAgIHNlbGVjdFN0YXRlLFxyXG4gICAgICBzZWxlY3RFbnRpdGllc1xyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdElkczogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdElkcyksXHJcbiAgICAgIHNlbGVjdEVudGl0aWVzOiBzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsXHJcbiAgICAgIHNlbGVjdEFsbDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdEFsbCksXHJcbiAgICAgIHNlbGVjdFRvdGFsOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0VG90YWwpLFxyXG4gICAgICBzZWxlY3RCeUlkOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihcclxuICAgICAgICBzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsXHJcbiAgICAgICAgc2VsZWN0SWQsXHJcbiAgICAgICAgc2VsZWN0QnlJZFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXRTZWxlY3RvcnMgfVxyXG59XHJcbiIsImltcG9ydCBjcmVhdGVOZXh0U3RhdGUsIHsgaXNEcmFmdCB9IGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSwgUHJldmVudEFueSB9IGZyb20gJy4vbW9kZWxzJ1xyXG5pbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBpc0ZTQSB9IGZyb20gJy4uL2NyZWF0ZUFjdGlvbidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3I8Vj4oXHJcbiAgbXV0YXRvcjogKHN0YXRlOiBFbnRpdHlTdGF0ZTxWPikgPT4gdm9pZFxyXG4pIHtcclxuICBjb25zdCBvcGVyYXRvciA9IGNyZWF0ZVN0YXRlT3BlcmF0b3IoKF86IHVuZGVmaW5lZCwgc3RhdGU6IEVudGl0eVN0YXRlPFY+KSA9PlxyXG4gICAgbXV0YXRvcihzdGF0ZSlcclxuICApXHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb248UyBleHRlbmRzIEVudGl0eVN0YXRlPFY+PihcclxuICAgIHN0YXRlOiBQcmV2ZW50QW55PFMsIFY+XHJcbiAgKTogUyB7XHJcbiAgICByZXR1cm4gb3BlcmF0b3Ioc3RhdGUgYXMgUywgdW5kZWZpbmVkKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlT3BlcmF0b3I8ViwgUj4oXHJcbiAgbXV0YXRvcjogKGFyZzogUiwgc3RhdGU6IEVudGl0eVN0YXRlPFY+KSA9PiB2b2lkXHJcbikge1xyXG4gIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb248UyBleHRlbmRzIEVudGl0eVN0YXRlPFY+PihcclxuICAgIHN0YXRlOiBTLFxyXG4gICAgYXJnOiBSIHwgUGF5bG9hZEFjdGlvbjxSPlxyXG4gICk6IFMge1xyXG4gICAgZnVuY3Rpb24gaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoXHJcbiAgICAgIGFyZzogUiB8IFBheWxvYWRBY3Rpb248Uj5cclxuICAgICk6IGFyZyBpcyBQYXlsb2FkQWN0aW9uPFI+IHtcclxuICAgICAgcmV0dXJuIGlzRlNBKGFyZylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBydW5NdXRhdG9yID0gKGRyYWZ0OiBFbnRpdHlTdGF0ZTxWPikgPT4ge1xyXG4gICAgICBpZiAoaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnKSkge1xyXG4gICAgICAgIG11dGF0b3IoYXJnLnBheWxvYWQsIGRyYWZ0KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG11dGF0b3IoYXJnLCBkcmFmdClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0RyYWZ0KHN0YXRlKSkge1xyXG4gICAgICAvLyB3ZSBtdXN0IGFscmVhZHkgYmUgaW5zaWRlIGEgYGNyZWF0ZU5leHRTdGF0ZWAgY2FsbCwgbGlrZWx5IGJlY2F1c2VcclxuICAgICAgLy8gdGhpcyBpcyBiZWluZyB3cmFwcGVkIGluIGBjcmVhdGVSZWR1Y2VyYCBvciBgY3JlYXRlU2xpY2VgLlxyXG4gICAgICAvLyBJdCdzIHNhZmUgdG8ganVzdCBwYXNzIHRoZSBkcmFmdCB0byB0aGUgbXV0YXRvci5cclxuICAgICAgcnVuTXV0YXRvcihzdGF0ZSlcclxuXHJcbiAgICAgIC8vIHNpbmNlIGl0J3MgYSBkcmFmdCwgd2UnbGwganVzdCByZXR1cm4gaXRcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBAdHMtaWdub3JlIGNyZWF0ZU5leHRTdGF0ZSgpIHByb2R1Y2VzIGFuIEltbXV0YWJsZTxEcmFmdDxTPj4gcmF0aGVyXHJcbiAgICAgIC8vIHRoYW4gYW4gSW1tdXRhYmxlPFM+LCBhbmQgVHlwZVNjcmlwdCBjYW5ub3QgZmluZCBvdXQgaG93IHRvIHJlY29uY2lsZVxyXG4gICAgICAvLyB0aGVzZSB0d28gdHlwZXMuXHJcbiAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUoc3RhdGUsIHJ1bk11dGF0b3IpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IElkU2VsZWN0b3IgfSBmcm9tICcuL21vZGVscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RJZFZhbHVlPFQ+KGVudGl0eTogVCwgc2VsZWN0SWQ6IElkU2VsZWN0b3I8VD4pIHtcclxuICBjb25zdCBrZXkgPSBzZWxlY3RJZChlbnRpdHkpXHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICdUaGUgZW50aXR5IHBhc3NlZCB0byB0aGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCB1bmRlZmluZWQuJyxcclxuICAgICAgJ1lvdSBzaG91bGQgcHJvYmFibHkgcHJvdmlkZSB5b3VyIG93biBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uLicsXHJcbiAgICAgICdUaGUgZW50aXR5IHRoYXQgd2FzIHBhc3NlZDonLFxyXG4gICAgICBlbnRpdHksXHJcbiAgICAgICdUaGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbjonLFxyXG4gICAgICBzZWxlY3RJZC50b1N0cmluZygpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ga2V5XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBFbnRpdHlTdGF0ZSxcclxuICBFbnRpdHlTdGF0ZUFkYXB0ZXIsXHJcbiAgSWRTZWxlY3RvcixcclxuICBVcGRhdGUsXHJcbiAgRW50aXR5SWRcclxufSBmcm9tICcuL21vZGVscydcclxuaW1wb3J0IHtcclxuICBjcmVhdGVTdGF0ZU9wZXJhdG9yLFxyXG4gIGNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvclxyXG59IGZyb20gJy4vc3RhdGVfYWRhcHRlcidcclxuaW1wb3J0IHsgc2VsZWN0SWRWYWx1ZSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXI8VD4oXHJcbiAgc2VsZWN0SWQ6IElkU2VsZWN0b3I8VD5cclxuKTogRW50aXR5U3RhdGVBZGFwdGVyPFQ+IHtcclxuICB0eXBlIFIgPSBFbnRpdHlTdGF0ZTxUPlxyXG5cclxuICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eTogVCwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleSA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZClcclxuXHJcbiAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLmlkcy5wdXNoKGtleSlcclxuICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KGVudGl0aWVzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0aWVzKSkge1xyXG4gICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgZW50aXRpZXMpIHtcclxuICAgICAgYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0QWxsTXV0YWJseShlbnRpdGllczogVFtdIHwgUmVjb3JkPEVudGl0eUlkLCBUPiwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcclxuICAgICAgZW50aXRpZXMgPSBPYmplY3QudmFsdWVzKGVudGl0aWVzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlLmlkcyA9IFtdXHJcbiAgICBzdGF0ZS5lbnRpdGllcyA9IHt9XHJcblxyXG4gICAgYWRkTWFueU11dGFibHkoZW50aXRpZXMsIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlT25lTXV0YWJseShrZXk6IEVudGl0eUlkLCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgcmV0dXJuIHJlbW92ZU1hbnlNdXRhYmx5KFtrZXldLCBzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZU1hbnlNdXRhYmx5KGtleXM6IEVudGl0eUlkW10sIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICBsZXQgZGlkTXV0YXRlID0gZmFsc2VcclxuXHJcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgaWYgKGtleSBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1trZXldXHJcbiAgICAgICAgZGlkTXV0YXRlID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChkaWRNdXRhdGUpIHtcclxuICAgICAgc3RhdGUuaWRzID0gc3RhdGUuaWRzLmZpbHRlcihpZCA9PiBpZCBpbiBzdGF0ZS5lbnRpdGllcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbE11dGFibHkoc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcclxuICAgICAgaWRzOiBbXSxcclxuICAgICAgZW50aXRpZXM6IHt9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdGFrZU5ld0tleShcclxuICAgIGtleXM6IHsgW2lkOiBzdHJpbmddOiBFbnRpdHlJZCB9LFxyXG4gICAgdXBkYXRlOiBVcGRhdGU8VD4sXHJcbiAgICBzdGF0ZTogUlxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdXHJcbiAgICBjb25zdCB1cGRhdGVkOiBUID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwsIHVwZGF0ZS5jaGFuZ2VzKVxyXG4gICAgY29uc3QgbmV3S2V5ID0gc2VsZWN0SWRWYWx1ZSh1cGRhdGVkLCBzZWxlY3RJZClcclxuICAgIGNvbnN0IGhhc05ld0tleSA9IG5ld0tleSAhPT0gdXBkYXRlLmlkXHJcblxyXG4gICAgaWYgKGhhc05ld0tleSkge1xyXG4gICAgICBrZXlzW3VwZGF0ZS5pZF0gPSBuZXdLZXlcclxuICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZS5lbnRpdGllc1tuZXdLZXldID0gdXBkYXRlZFxyXG5cclxuICAgIHJldHVybiBoYXNOZXdLZXlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZU9uZU11dGFibHkodXBkYXRlOiBVcGRhdGU8VD4sIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlTWFueU11dGFibHkodXBkYXRlczogVXBkYXRlPFQ+W10sIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdLZXlzOiB7IFtpZDogc3RyaW5nXTogRW50aXR5SWQgfSA9IHt9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlc1BlckVudGl0eTogeyBbaWQ6IHN0cmluZ106IFVwZGF0ZTxUPiB9ID0ge31cclxuXHJcbiAgICB1cGRhdGVzLmZvckVhY2godXBkYXRlID0+IHtcclxuICAgICAgLy8gT25seSBhcHBseSB1cGRhdGVzIHRvIGVudGl0aWVzIHRoYXQgY3VycmVudGx5IGV4aXN0XHJcbiAgICAgIGlmICh1cGRhdGUuaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgdXBkYXRlcyB0byBvbmUgZW50aXR5LCBtZXJnZSB0aGVtIHRvZ2V0aGVyXHJcbiAgICAgICAgdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdID0ge1xyXG4gICAgICAgICAgaWQ6IHVwZGF0ZS5pZCxcclxuICAgICAgICAgIC8vIFNwcmVhZHMgaWdub3JlIGZhbHN5IHZhbHVlcywgc28gdGhpcyB3b3JrcyBldmVuIGlmIHRoZXJlIGlzbid0XHJcbiAgICAgICAgICAvLyBhbiBleGlzdGluZyB1cGRhdGUgYWxyZWFkeSBhdCB0aGlzIGtleVxyXG4gICAgICAgICAgY2hhbmdlczoge1xyXG4gICAgICAgICAgICAuLi4odXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdXHJcbiAgICAgICAgICAgICAgPyB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0uY2hhbmdlc1xyXG4gICAgICAgICAgICAgIDogbnVsbCksXHJcbiAgICAgICAgICAgIC4uLnVwZGF0ZS5jaGFuZ2VzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHVwZGF0ZXMgPSBPYmplY3QudmFsdWVzKHVwZGF0ZXNQZXJFbnRpdHkpXHJcblxyXG4gICAgY29uc3QgZGlkTXV0YXRlRW50aXRpZXMgPSB1cGRhdGVzLmxlbmd0aCA+IDBcclxuXHJcbiAgICBpZiAoZGlkTXV0YXRlRW50aXRpZXMpIHtcclxuICAgICAgY29uc3QgZGlkTXV0YXRlSWRzID1cclxuICAgICAgICB1cGRhdGVzLmZpbHRlcih1cGRhdGUgPT4gdGFrZU5ld0tleShuZXdLZXlzLCB1cGRhdGUsIHN0YXRlKSkubGVuZ3RoID4gMFxyXG5cclxuICAgICAgaWYgKGRpZE11dGF0ZUlkcykge1xyXG4gICAgICAgIHN0YXRlLmlkcyA9IHN0YXRlLmlkcy5tYXAoaWQgPT4gbmV3S2V5c1tpZF0gfHwgaWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwc2VydE9uZU11dGFibHkoZW50aXR5OiBULCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgcmV0dXJuIHVwc2VydE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KFxyXG4gICAgZW50aXRpZXM6IFRbXSB8IFJlY29yZDxFbnRpdHlJZCwgVD4sXHJcbiAgICBzdGF0ZTogUlxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0aWVzKSkge1xyXG4gICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkZWQ6IFRbXSA9IFtdXHJcbiAgICBjb25zdCB1cGRhdGVkOiBVcGRhdGU8VD5bXSA9IFtdXHJcblxyXG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgZW50aXRpZXMpIHtcclxuICAgICAgY29uc3QgaWQgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpXHJcbiAgICAgIGlmIChpZCBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgIHVwZGF0ZWQucHVzaCh7IGlkLCBjaGFuZ2VzOiBlbnRpdHkgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhZGRlZC5wdXNoKGVudGl0eSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZWQsIHN0YXRlKVxyXG4gICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbW92ZUFsbDogY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yKHJlbW92ZUFsbE11dGFibHkpLFxyXG4gICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXHJcbiAgICB1cGRhdGVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlT25lTXV0YWJseSksXHJcbiAgICB1cGRhdGVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU1hbnlNdXRhYmx5KSxcclxuICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcclxuICAgIHVwc2VydE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0TWFueU11dGFibHkpLFxyXG4gICAgcmVtb3ZlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHJlbW92ZU9uZU11dGFibHkpLFxyXG4gICAgcmVtb3ZlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVNYW55TXV0YWJseSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBFbnRpdHlTdGF0ZSxcclxuICBJZFNlbGVjdG9yLFxyXG4gIENvbXBhcmVyLFxyXG4gIEVudGl0eVN0YXRlQWRhcHRlcixcclxuICBVcGRhdGUsXHJcbiAgRW50aXR5SWRcclxufSBmcm9tICcuL21vZGVscydcclxuaW1wb3J0IHsgY3JlYXRlU3RhdGVPcGVyYXRvciB9IGZyb20gJy4vc3RhdGVfYWRhcHRlcidcclxuaW1wb3J0IHsgY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIgfSBmcm9tICcuL3Vuc29ydGVkX3N0YXRlX2FkYXB0ZXInXHJcbmltcG9ydCB7IHNlbGVjdElkVmFsdWUgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcjxUPihcclxuICBzZWxlY3RJZDogSWRTZWxlY3RvcjxUPixcclxuICBzb3J0OiBDb21wYXJlcjxUPlxyXG4pOiBFbnRpdHlTdGF0ZUFkYXB0ZXI8VD4ge1xyXG4gIHR5cGUgUiA9IEVudGl0eVN0YXRlPFQ+XHJcblxyXG4gIGNvbnN0IHsgcmVtb3ZlT25lLCByZW1vdmVNYW55LCByZW1vdmVBbGwgfSA9IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKFxyXG4gICAgc2VsZWN0SWRcclxuICApXHJcblxyXG4gIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5OiBULCBzdGF0ZTogUik6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFkZE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KFxyXG4gICAgbmV3TW9kZWxzOiBUW10gfCBSZWNvcmQ8RW50aXR5SWQsIFQ+LFxyXG4gICAgc3RhdGU6IFJcclxuICApOiB2b2lkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShuZXdNb2RlbHMpKSB7XHJcbiAgICAgIG5ld01vZGVscyA9IE9iamVjdC52YWx1ZXMobmV3TW9kZWxzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGVscyA9IG5ld01vZGVscy5maWx0ZXIoXHJcbiAgICAgIG1vZGVsID0+ICEoc2VsZWN0SWRWYWx1ZShtb2RlbCwgc2VsZWN0SWQpIGluIHN0YXRlLmVudGl0aWVzKVxyXG4gICAgKVxyXG5cclxuICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIG1lcmdlKG1vZGVscywgc3RhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG1vZGVsczogVFtdIHwgUmVjb3JkPEVudGl0eUlkLCBUPiwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RlbHMpKSB7XHJcbiAgICAgIG1vZGVscyA9IE9iamVjdC52YWx1ZXMobW9kZWxzKVxyXG4gICAgfVxyXG4gICAgc3RhdGUuZW50aXRpZXMgPSB7fVxyXG4gICAgc3RhdGUuaWRzID0gW11cclxuXHJcbiAgICBhZGRNYW55TXV0YWJseShtb2RlbHMsIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGU6IFVwZGF0ZTxUPiwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIHJldHVybiB1cGRhdGVNYW55TXV0YWJseShbdXBkYXRlXSwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0YWtlVXBkYXRlZE1vZGVsKG1vZGVsczogVFtdLCB1cGRhdGU6IFVwZGF0ZTxUPiwgc3RhdGU6IFIpOiBib29sZWFuIHtcclxuICAgIGlmICghKHVwZGF0ZS5pZCBpbiBzdGF0ZS5lbnRpdGllcykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdXHJcbiAgICBjb25zdCB1cGRhdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwsIHVwZGF0ZS5jaGFuZ2VzKVxyXG4gICAgY29uc3QgbmV3S2V5ID0gc2VsZWN0SWRWYWx1ZSh1cGRhdGVkLCBzZWxlY3RJZClcclxuXHJcbiAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXVxyXG5cclxuICAgIG1vZGVscy5wdXNoKHVwZGF0ZWQpXHJcblxyXG4gICAgcmV0dXJuIG5ld0tleSAhPT0gdXBkYXRlLmlkXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzOiBVcGRhdGU8VD5bXSwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGVsczogVFtdID0gW11cclxuXHJcbiAgICB1cGRhdGVzLmZvckVhY2godXBkYXRlID0+IHRha2VVcGRhdGVkTW9kZWwobW9kZWxzLCB1cGRhdGUsIHN0YXRlKSlcclxuXHJcbiAgICBpZiAobW9kZWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBtZXJnZShtb2RlbHMsIHN0YXRlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBzZXJ0T25lTXV0YWJseShlbnRpdHk6IFQsIHN0YXRlOiBSKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkoXHJcbiAgICBlbnRpdGllczogVFtdIHwgUmVjb3JkPEVudGl0eUlkLCBUPixcclxuICAgIHN0YXRlOiBSXHJcbiAgKTogdm9pZCB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XHJcbiAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRlZDogVFtdID0gW11cclxuICAgIGNvbnN0IHVwZGF0ZWQ6IFVwZGF0ZTxUPltdID0gW11cclxuXHJcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiBlbnRpdGllcykge1xyXG4gICAgICBjb25zdCBpZCA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZClcclxuICAgICAgaWYgKGlkIGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgdXBkYXRlZC5wdXNoKHsgaWQsIGNoYW5nZXM6IGVudGl0eSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZGVkLnB1c2goZW50aXR5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpXHJcbiAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcmVBcnJheXNFcXVhbChhOiB1bmtub3duW10sIGI6IHVua25vd25bXSkge1xyXG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoICYmIGkgPCBiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhW2ldID09PSBiW2ldKSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZXJnZShtb2RlbHM6IFRbXSwgc3RhdGU6IFIpOiB2b2lkIHtcclxuICAgIG1vZGVscy5zb3J0KHNvcnQpXHJcblxyXG4gICAgLy8gSW5zZXJ0L292ZXJ3cml0ZSBhbGwgbmV3L3VwZGF0ZWRcclxuICAgIG1vZGVscy5mb3JFYWNoKG1vZGVsID0+IHtcclxuICAgICAgc3RhdGUuZW50aXRpZXNbc2VsZWN0SWQobW9kZWwpXSA9IG1vZGVsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGFsbEVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS5lbnRpdGllcykgYXMgVFtdXHJcbiAgICBhbGxFbnRpdGllcy5zb3J0KHNvcnQpXHJcblxyXG4gICAgY29uc3QgbmV3U29ydGVkSWRzID0gYWxsRW50aXRpZXMubWFwKHNlbGVjdElkKVxyXG4gICAgY29uc3QgeyBpZHMgfSA9IHN0YXRlXHJcblxyXG4gICAgaWYgKCFhcmVBcnJheXNFcXVhbChpZHMsIG5ld1NvcnRlZElkcykpIHtcclxuICAgICAgc3RhdGUuaWRzID0gbmV3U29ydGVkSWRzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVtb3ZlT25lLFxyXG4gICAgcmVtb3ZlTWFueSxcclxuICAgIHJlbW92ZUFsbCxcclxuICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcclxuICAgIHVwZGF0ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVPbmVNdXRhYmx5KSxcclxuICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcclxuICAgIHNldEFsbDogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRBbGxNdXRhYmx5KSxcclxuICAgIGFkZE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkTWFueU11dGFibHkpLFxyXG4gICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXHJcbiAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbnRpdHlEZWZpbml0aW9uLCBDb21wYXJlciwgSWRTZWxlY3RvciwgRW50aXR5QWRhcHRlciB9IGZyb20gJy4vbW9kZWxzJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5IH0gZnJvbSAnLi9lbnRpdHlfc3RhdGUnXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkgfSBmcm9tICcuL3N0YXRlX3NlbGVjdG9ycydcclxuaW1wb3J0IHsgY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyIH0gZnJvbSAnLi9zb3J0ZWRfc3RhdGVfYWRhcHRlcidcclxuaW1wb3J0IHsgY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIgfSBmcm9tICcuL3Vuc29ydGVkX3N0YXRlX2FkYXB0ZXInXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIG9wdGlvbnNcclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudGl0eUFkYXB0ZXI8VD4oXHJcbiAgb3B0aW9uczoge1xyXG4gICAgc2VsZWN0SWQ/OiBJZFNlbGVjdG9yPFQ+XHJcbiAgICBzb3J0Q29tcGFyZXI/OiBmYWxzZSB8IENvbXBhcmVyPFQ+XHJcbiAgfSA9IHt9XHJcbik6IEVudGl0eUFkYXB0ZXI8VD4ge1xyXG4gIGNvbnN0IHsgc2VsZWN0SWQsIHNvcnRDb21wYXJlciB9OiBFbnRpdHlEZWZpbml0aW9uPFQ+ID0ge1xyXG4gICAgc29ydENvbXBhcmVyOiBmYWxzZSxcclxuICAgIHNlbGVjdElkOiAoaW5zdGFuY2U6IGFueSkgPT4gaW5zdGFuY2UuaWQsXHJcbiAgICAuLi5vcHRpb25zXHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGF0ZUZhY3RvcnkgPSBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5PFQ+KClcclxuICBjb25zdCBzZWxlY3RvcnNGYWN0b3J5ID0gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeTxUPigpXHJcbiAgY29uc3Qgc3RhdGVBZGFwdGVyID0gc29ydENvbXBhcmVyXHJcbiAgICA/IGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydENvbXBhcmVyKVxyXG4gICAgOiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlbGVjdElkLFxyXG4gICAgc29ydENvbXBhcmVyLFxyXG4gICAgLi4uc3RhdGVGYWN0b3J5LFxyXG4gICAgLi4uc2VsZWN0b3JzRmFjdG9yeSxcclxuICAgIC4uLnN0YXRlQWRhcHRlclxyXG4gIH1cclxufVxyXG4iLCIvLyBBIHR5cGUgb2YgcHJvbWlzZS1saWtlIHRoYXQgcmVzb2x2ZXMgc3luY2hyb25vdXNseSBhbmQgc3VwcG9ydHMgb25seSBvbmUgb2JzZXJ2ZXJcbmV4cG9ydCBjb25zdCBfUGFjdCA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9QYWN0KCkge31cblx0X1BhY3QucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBfUGFjdCgpO1xuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5zO1xuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBzdGF0ZSAmIDEgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgY2FsbGJhY2sodGhpcy52KSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLm8gPSBmdW5jdGlvbihfdGhpcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBfdGhpcy52O1xuXHRcdFx0XHRpZiAoX3RoaXMucyAmIDEpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMSwgb25GdWxmaWxsZWQgPyBvbkZ1bGZpbGxlZCh2YWx1ZSkgOiB2YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAob25SZWplY3RlZCkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvblJlamVjdGVkKHZhbHVlKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDIsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdHJldHVybiBfUGFjdDtcbn0pKCk7XG5cbi8vIFNldHRsZXMgYSBwYWN0IHN5bmNocm9ub3VzbHlcbmV4cG9ydCBmdW5jdGlvbiBfc2V0dGxlKHBhY3QsIHN0YXRlLCB2YWx1ZSkge1xuXHRpZiAoIXBhY3Qucykge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIF9QYWN0KSB7XG5cdFx0XHRpZiAodmFsdWUucykge1xuXHRcdFx0XHRpZiAoc3RhdGUgJiAxKSB7XG5cdFx0XHRcdFx0c3RhdGUgPSB2YWx1ZS5zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlLm8gPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgc3RhdGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHR2YWx1ZS50aGVuKF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSksIF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBhY3QucyA9IHN0YXRlO1xuXHRcdHBhY3QudiA9IHZhbHVlO1xuXHRcdGNvbnN0IG9ic2VydmVyID0gcGFjdC5vO1xuXHRcdGlmIChvYnNlcnZlcikge1xuXHRcdFx0b2JzZXJ2ZXIocGFjdCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaXNTZXR0bGVkUGFjdCh0aGVuYWJsZSkge1xuXHRyZXR1cm4gdGhlbmFibGUgaW5zdGFuY2VvZiBfUGFjdCAmJiB0aGVuYWJsZS5zICYgMTtcbn1cblxuLy8gQ29udmVydHMgYXJndW1lbnQgdG8gYSBmdW5jdGlvbiB0aGF0IGFsd2F5cyByZXR1cm5zIGEgUHJvbWlzZVxuZXhwb3J0IGZ1bmN0aW9uIF9hc3luYyhmKSB7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRmb3IgKHZhciBhcmdzID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmFwcGx5KHRoaXMsIGFyZ3MpKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXdhaXRzIG9uIGEgdmFsdWUgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBhIFByb21pc2UgKGVxdWl2YWxlbnQgdG8gdGhlIGF3YWl0IGtleXdvcmQgaW4gRVMyMDE1LCB3aXRoIGNvbnRpbnVhdGlvbnMgcGFzc2VkIGV4cGxpY2l0bHkpXG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0KHZhbHVlLCB0aGVuLCBkaXJlY3QpIHtcblx0aWYgKGRpcmVjdCkge1xuXHRcdHJldHVybiB0aGVuID8gdGhlbih2YWx1ZSkgOiB2YWx1ZTtcblx0fVxuXHRpZiAoIXZhbHVlIHx8ICF2YWx1ZS50aGVuKSB7XG5cdFx0dmFsdWUgPSBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHR9XG5cdHJldHVybiB0aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHZhbHVlO1xufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSwgdGhlbiBpZ25vcmVzIGl0XG5leHBvcnQgZnVuY3Rpb24gX2F3YWl0SWdub3JlZCh2YWx1ZSwgZGlyZWN0KSB7XG5cdGlmICghZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF9lbXB0eSkgOiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZSh2YWx1ZSwgdGhlbikge1xuXHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4odGhlbikgOiB0aGVuKHZhbHVlKTtcbn1cblxuLy8gUHJvY2VlZHMgYWZ0ZXIgYSB2YWx1ZSBoYXMgcmVzb2x2ZWQsIG9yIHByb2NlZWRzIGltbWVkaWF0ZWx5IGlmIHRoZSB2YWx1ZSBpcyBub3QgdGhlbmFibGVcbmV4cG9ydCBmdW5jdGlvbiBfY29udGludWVJZ25vcmVkKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0cmV0dXJuIHZhbHVlLnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0IHRoYXQgaGFzIGEgbGVuZ3RoIHByb3BlcnR5LCBwYXNzaW5nIHRoZSBpbmRleCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIChldmVuIGFzIHRoZSBsZW5ndGggcHJvcGVydHkgY2hhbmdlcylcbmV4cG9ydCBmdW5jdGlvbiBfZm9yVG8oYXJyYXksIGJvZHksIGNoZWNrKSB7XG5cdHZhciBpID0gLTEsIHBhY3QsIHJlamVjdDtcblx0ZnVuY3Rpb24gX2N5Y2xlKHJlc3VsdCkge1xuXHRcdHRyeSB7XG5cdFx0XHR3aGlsZSAoKytpIDwgYXJyYXkubGVuZ3RoICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGJvZHkoaSk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnY7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9jeWNsZSwgcmVqZWN0IHx8IChyZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCA9IG5ldyBfUGFjdCgpLCAyKSkpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgX1BhY3QoKSksIDIsIGUpO1xuXHRcdH1cblx0fVxuXHRfY3ljbGUoKTtcblx0cmV0dXJuIHBhY3Q7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBwcm9wZXJ0aWVzIChpbmNsdWRpbmcgcHJvcGVydGllcyBpbmhlcml0ZWQgZnJvbSB0aGUgcHJvdG90eXBlKVxuLy8gVXNlcyBhIHNuYXBzaG90IG9mIHRoZSBvYmplY3QncyBwcm9wZXJ0aWVzXG5leHBvcnQgZnVuY3Rpb24gX2ZvckluKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0dmFyIGtleXMgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuXHRcdGtleXMucHVzaChrZXkpO1xuXHR9XG5cdHJldHVybiBfZm9yVG8oa2V5cywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keShrZXlzW2ldKTsgfSwgY2hlY2spO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMgKGV4Y2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9yT3duKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0dmFyIGtleXMgPSBbXTtcblx0Zm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbmV4cG9ydCBjb25zdCBfaXRlcmF0b3JTeW1ib2wgPSAvKiNfX1BVUkVfXyovIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyAoU3ltYm9sLml0ZXJhdG9yIHx8IChTeW1ib2wuaXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpKSA6IFwiQEBpdGVyYXRvclwiO1xuXG4vLyBBc3luY2hyb25vdXNseSBpdGVyYXRlIHRocm91Z2ggYW4gb2JqZWN0J3MgdmFsdWVzXG4vLyBVc2VzIGZvci4uLm9mIGlmIHRoZSBydW50aW1lIHN1cHBvcnRzIGl0LCBvdGhlcndpc2UgaXRlcmF0ZXMgdW50aWwgbGVuZ3RoIG9uIGEgY29weVxuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPZih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHZhciBpdGVyYXRvciA9IHRhcmdldFtfaXRlcmF0b3JTeW1ib2xdKCksIHN0ZXAsIHBhY3QsIHJlamVjdDtcblx0XHRmdW5jdGlvbiBfY3ljbGUocmVzdWx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gYm9keShzdGVwLnZhbHVlKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0XHRpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdC50aGVuKF9jeWNsZSwgcmVqZWN0IHx8IChyZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCA9IG5ldyBfUGFjdCgpLCAyKSkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwYWN0KSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhY3QgPSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0IHx8IChwYWN0ID0gbmV3IF9QYWN0KCkpLCAyLCBlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0X2N5Y2xlKCk7XG5cdFx0aWYgKGl0ZXJhdG9yLnJldHVybikge1xuXHRcdFx0dmFyIF9maXh1cCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKCFzdGVwLmRvbmUpIHtcblx0XHRcdFx0XHRcdGl0ZXJhdG9yLnJldHVybigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhY3QgJiYgcGFjdC50aGVuKSB7XG5cdFx0XHRcdHJldHVybiBwYWN0LnRoZW4oX2ZpeHVwLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0dGhyb3cgX2ZpeHVwKGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdF9maXh1cCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFjdDtcblx0fVxuXHQvLyBObyBzdXBwb3J0IGZvciBTeW1ib2wuaXRlcmF0b3Jcblx0aWYgKCEoXCJsZW5ndGhcIiBpbiB0YXJnZXQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBpcyBub3QgaXRlcmFibGVcIik7XG5cdH1cblx0Ly8gSGFuZGxlIGxpdmUgY29sbGVjdGlvbnMgcHJvcGVybHlcblx0dmFyIHZhbHVlcyA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldC5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlcy5wdXNoKHRhcmdldFtpXSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyh2YWx1ZXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkodmFsdWVzW2ldKTsgfSwgY2hlY2spO1xufVxuXG5leHBvcnQgY29uc3QgX2FzeW5jSXRlcmF0b3JTeW1ib2wgPSAvKiNfX1BVUkVfXyovIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgKFN5bWJvbC5hc3luY0l0ZXJhdG9yID0gU3ltYm9sKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3JcIikpKSA6IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgb24gYSB2YWx1ZSB1c2luZyBpdCdzIGFzeW5jIGl0ZXJhdG9yIGlmIHByZXNlbnQsIG9yIGl0cyBzeW5jaHJvbm91cyBpdGVyYXRvciBpZiBtaXNzaW5nXG5leHBvcnQgZnVuY3Rpb24gX2ZvckF3YWl0T2YodGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHRpZiAodHlwZW9mIHRhcmdldFtfYXN5bmNJdGVyYXRvclN5bWJvbF0gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHZhciBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19hc3luY0l0ZXJhdG9yU3ltYm9sXSgpO1xuXHRcdGl0ZXJhdG9yLm5leHQoKS50aGVuKF9yZXN1bWVBZnRlck5leHQpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRyZXR1cm4gcGFjdDtcblx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJCb2R5KHJlc3VsdCkge1xuXHRcdFx0aWYgKGNoZWNrICYmIGNoZWNrKCkpIHtcblx0XHRcdFx0cmV0dXJuIF9zZXR0bGUocGFjdCwgMSwgaXRlcmF0b3IucmV0dXJuID8gaXRlcmF0b3IucmV0dXJuKCkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIHJlc3VsdDsgfSkgOiByZXN1bHQpO1xuXHRcdFx0fVxuXHRcdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJOZXh0KHN0ZXApIHtcblx0XHRcdGlmIChzdGVwLmRvbmUpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFByb21pc2UucmVzb2x2ZShib2R5KHN0ZXAudmFsdWUpKS50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZnVuY3Rpb24gX3JlamVjdChlcnJvcikge1xuXHRcdFx0X3NldHRsZShwYWN0LCAyLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZXJyb3I7IH0pIDogZXJyb3IpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF9mb3JPZih0YXJnZXQsIGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oYm9keSk7IH0sIGNoZWNrKSk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGdlbmVyaWMgZm9yIGxvb3BcbmV4cG9ydCBmdW5jdGlvbiBfZm9yKHRlc3QsIHVwZGF0ZSwgYm9keSkge1xuXHR2YXIgc3RhZ2U7XG5cdGZvciAoOzspIHtcblx0XHR2YXIgc2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdH1cblx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkQ29udGludWUudGhlbikge1xuXHRcdFx0c3RhZ2UgPSAwO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGFnZSA9IDE7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodXBkYXRlKSB7XG5cdFx0XHR2YXIgdXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdGlmICh1cGRhdGVWYWx1ZSAmJiB1cGRhdGVWYWx1ZS50aGVuICYmICFfaXNTZXR0bGVkUGFjdCh1cGRhdGVWYWx1ZSkpIHtcblx0XHRcdFx0c3RhZ2UgPSAyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0dmFyIHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KHN0YWdlID09PSAwID8gc2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KSA6IHN0YWdlID09PSAxID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiB1cGRhdGVWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclVwZGF0ZSkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGRvIHtcblx0XHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdFx0dXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRcdHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSB8fCAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpICYmICFzaG91bGRDb250aW51ZS52KSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKCFyZXN1bHQgfHwgIXJlc3VsdC50aGVuKTtcblx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKSB7XG5cdFx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclVwZGF0ZSgpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUgPSB0ZXN0KCkpIHtcblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBkbyAuLi4gd2hpbGUgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9kbyhib2R5LCB0ZXN0KSB7XG5cdHZhciBhd2FpdEJvZHk7XG5cdGRvIHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9IHdoaWxlICghc2hvdWxkQ29udGludWUudGhlbik7XG5cdGNvbnN0IHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0Y29uc3QgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoYXdhaXRCb2R5ID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkodmFsdWUpIHtcblx0XHRyZXN1bHQgPSB2YWx1ZTtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgc3dpdGNoIHN0YXRlbWVudFxuZXhwb3J0IGZ1bmN0aW9uIF9zd2l0Y2goZGlzY3JpbWluYW50LCBjYXNlcykge1xuXHR2YXIgZGlzcGF0Y2hJbmRleCA9IC0xO1xuXHR2YXIgYXdhaXRCb2R5O1xuXHRvdXRlcjoge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YXIgdGVzdFZhbHVlID0gdGVzdCgpO1xuXHRcdFx0XHRpZiAodGVzdFZhbHVlICYmIHRlc3RWYWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRlc3RWYWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEZvdW5kIHRoZSBkZWZhdWx0IGNhc2UsIHNldCBpdCBhcyB0aGUgcGVuZGluZyBkaXNwYXRjaCBjYXNlXG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHRlc3RWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3QodmFsdWUpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRpZiAodmFsdWUgPT09IGRpc2NyaW1pbmFudCkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKytpID09PSBjYXNlcy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKGRpc3BhdGNoSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGVzdCA9IGNhc2VzW2ldWzBdO1xuXHRcdFx0aWYgKHRlc3QpIHtcblx0XHRcdFx0dmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0dmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkbyB7XG5cdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0fSB3aGlsZSAoZmFsbHRocm91Z2hDaGVjayAmJiAhZmFsbHRocm91Z2hDaGVjaygpKTtcblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0aWYgKCFmYWxsdGhyb3VnaENoZWNrIHx8IGZhbGx0aHJvdWdoQ2hlY2soKSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2NhbGwoYm9keSwgdGhlbiwgZGlyZWN0KSB7XG5cdGlmIChkaXJlY3QpIHtcblx0XHRyZXR1cm4gdGhlbiA/IHRoZW4oYm9keSgpKSA6IGJvZHkoKTtcblx0fVxuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUoYm9keSgpKTtcblx0XHRyZXR1cm4gdGhlbiA/IHJlc3VsdC50aGVuKHRoZW4pIDogcmVzdWx0O1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc3dhbGxvdyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2NhbGxJZ25vcmVkKGJvZHksIGRpcmVjdCkge1xuXHRyZXR1cm4gX2NhbGwoYm9keSwgX2VtcHR5LCBkaXJlY3QpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2ludm9rZShib2R5LCB0aGVuKSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4odGhlbik7XG5cdH1cblx0cmV0dXJuIHRoZW4ocmVzdWx0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlSWdub3JlZChib2R5KSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaChib2R5LCByZWNvdmVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih2b2lkIDAsIHJlY292ZXIpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGF3YWl0IGEgcHJvbWlzZSBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGEgZmluYWxseSBjb250aW51YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBfZmluYWxseVJldGhyb3dzKGJvZHksIGZpbmFsaXplcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmluYWxpemVyKHRydWUsIGUpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLmJpbmQobnVsbCwgZmFsc2UpLCBmaW5hbGl6ZXIuYmluZChudWxsLCB0cnVlKSk7XG5cdH1cblx0cmV0dXJuIGZpbmFsaXplcihmYWxzZSwgcmVzdWx0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgYXdhaXQgYSBwcm9taXNlIGFuZCBpbnZva2UgYSBmaW5hbGx5IGNvbnRpbnVhdGlvbiB0aGF0IGFsd2F5cyBvdmVycmlkZXMgdGhlIHJlc3VsdFxuZXhwb3J0IGZ1bmN0aW9uIF9maW5hbGx5KGJvZHksIGZpbmFsaXplcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmluYWxpemVyKCk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbihmaW5hbGl6ZXIsIGZpbmFsaXplcik7XG5cdH1cblx0cmV0dXJuIGZpbmFsaXplcigpO1xufVxuXG4vLyBSZXRocm93IG9yIHJldHVybiBhIHZhbHVlIGZyb20gYSBmaW5hbGx5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXRocm93KHRocm93biwgdmFsdWUpIHtcblx0aWYgKHRocm93bilcblx0XHR0aHJvdyB2YWx1ZTtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG4vLyBFbXB0eSBmdW5jdGlvbiB0byBpbXBsZW1lbnQgYnJlYWsgYW5kIG90aGVyIGNvbnRyb2wgZmxvdyB0aGF0IGlnbm9yZXMgYXN5bmNocm9ub3VzIHJlc3VsdHNcbmV4cG9ydCBmdW5jdGlvbiBfZW1wdHkoKSB7XG59XG5cbi8vIFNlbnRpbmVsIHZhbHVlIGZvciBlYXJseSByZXR1cm5zIGluIGdlbmVyYXRvcnMgXG5leHBvcnQgY29uc3QgX2Vhcmx5UmV0dXJuID0gLyojX19QVVJFX18qLyB7fTtcblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzZW5kIGVycm9ycyB0byByZWNvdmVyeSBjb250aW51YXRpb24sIHNraXBwaW5nIGVhcmx5IHJldHVybnNcbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hJbkdlbmVyYXRvcihib2R5LCByZWNvdmVyKSB7XG5cdHJldHVybiBfY2F0Y2goYm9keSwgZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlID09PSBfZWFybHlSZXR1cm4pIHtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHRcdHJldHVybiByZWNvdmVyKGUpO1xuXHR9KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzIGdlbmVyYXRvciBjbGFzczsgYWNjZXB0cyB0aGUgZW50cnlwb2ludCBvZiB0aGUgZ2VuZXJhdG9yLCB0byB3aGljaCBpdCBwYXNzZXMgaXRzZWxmIHdoZW4gdGhlIGdlbmVyYXRvciBzaG91bGQgc3RhcnRcbmV4cG9ydCBjb25zdCBfQXN5bmNHZW5lcmF0b3IgPSAvKiNfX1BVUkVfXyovKGZ1bmN0aW9uKCkge1xuXHRmdW5jdGlvbiBfQXN5bmNHZW5lcmF0b3IoZW50cnkpIHtcblx0XHR0aGlzLl9lbnRyeSA9IGVudHJ5O1xuXHRcdHRoaXMuX3BhY3QgPSBudWxsO1xuXHRcdHRoaXMuX3Jlc29sdmUgPSBudWxsO1xuXHRcdHRoaXMuX3JldHVybiA9IG51bGw7XG5cdFx0dGhpcy5fcHJvbWlzZSA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBfd3JhcFJldHVybmVkVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcblx0fVxuXHRmdW5jdGlvbiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZmFsc2UgfTtcblx0fVxuXG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUuX3lpZWxkID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBZaWVsZCB0aGUgdmFsdWUgdG8gdGhlIHBlbmRpbmcgbmV4dCBjYWxsXG5cdFx0dGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFlpZWxkZWRWYWx1ZSkgOiBfd3JhcFlpZWxkZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdC8vIFJldHVybiBhIHBhY3QgZm9yIGFuIHVwY29taW5nIG5leHQvcmV0dXJuL3Rocm93IGNhbGxcblx0XHRyZXR1cm4gdGhpcy5fcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIEFkdmFuY2UgdGhlIGdlbmVyYXRvciwgc3RhcnRpbmcgaXQgaWYgaXQgaGFzIHlldCB0byBiZSBzdGFydGVkXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHJldHVybiBfdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IF9lbnRyeSA9IF90aGlzLl9lbnRyeTtcblx0XHRcdFx0aWYgKF9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIG5leHQgY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU3RhcnQgdGhlIGdlbmVyYXRvclxuXHRcdFx0XHRfdGhpcy5fZW50cnkgPSBudWxsO1xuXHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlKSB7XG5cdFx0XHRcdFx0X3RoaXMuX3Jlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBSZXR1cm5lZFZhbHVlKSA6IF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHJlc3VsdCA9IF9lbnRyeShfdGhpcyk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRyZXN1bHQudGhlbihyZXR1cm5WYWx1ZSwgZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0XHRcdGlmIChlcnJvciA9PT0gX2Vhcmx5UmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVyblZhbHVlKF90aGlzLl9yZXR1cm4pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZShwYWN0KTtcblx0XHRcdFx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdF9yZXNvbHZlKHBhY3QsIDIsIGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZShyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCBhbmQgYSB5aWVsZCBleHByZXNzaW9uIGlzIHBlbmRpbmcsIHNldHRsZSBpdFxuXHRcdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdFx0X3NldHRsZShfcGFjdCwgMSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gRWFybHkgcmV0dXJuIGZyb20gdGhlIGdlbmVyYXRvciBpZiBzdGFydGVkLCBvdGhlcndpc2UgYWJhbmRvbnMgdGhlIGdlbmVyYXRvclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRyZXR1cm4gX3RoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0Y29uc3QgX3BhY3QgPSBfdGhpcy5fcGFjdDtcblx0XHRcdGlmIChfcGFjdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoX3RoaXMuX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgcmV0dXJuIGNhbGwhXG5cdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUoX3RoaXMuX3Byb21pc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBub3Qgc3RhcnRlZCwgYWJhbmRvbiBpdCBhbmQgcmV0dXJuIHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdFx0X3RoaXMuX2VudHJ5ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUodmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX3dyYXBSZXR1cm5lZFZhbHVlKSA6IF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0dGxlIHRoZSB5aWVsZCBleHByZXNzaW9uIHdpdGggYSByZWplY3RlZCBcImVhcmx5IHJldHVyblwiIHZhbHVlXG5cdFx0XHRfdGhpcy5fcmV0dXJuID0gdmFsdWU7XG5cdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRfc2V0dGxlKF9wYWN0LCAyLCBfZWFybHlSZXR1cm4pO1xuXHRcdH0pO1xuXHR9O1xuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24oZXJyb3IpIHtcblx0XHQvLyBJbmplY3QgYW4gZXhjZXB0aW9uIGludG8gdGhlIHBlbmRpbmcgeWllbGQgZXhwcmVzc2lvblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRyZXR1cm4gX3RoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRjb25zdCBfcGFjdCA9IF90aGlzLl9wYWN0O1xuXHRcdFx0aWYgKF9wYWN0ID09PSBudWxsKSB7XG5cdFx0XHRcdGlmIChfdGhpcy5fZW50cnkgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgc3RhcnRlZCwgYnV0IG5vdCBhd2FpdGluZyBhIHlpZWxkIGV4cHJlc3Npb25cblx0XHRcdFx0XHQvLyBBYmFuZG9uIHRoZSB0aHJvdyBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgbm90IHN0YXJ0ZWQsIGFiYW5kb24gaXQgYW5kIHJldHVybiBhIHJlamVjdGVkIFByb21pc2UgY29udGFpbmluZyB0aGUgZXJyb3Jcblx0XHRcdFx0X3RoaXMuX2VudHJ5ID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXR0bGUgdGhlIHlpZWxkIGV4cHJlc3Npb24gd2l0aCB0aGUgdmFsdWUgYXMgYSByZWplY3Rpb25cblx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdF9zZXR0bGUoX3BhY3QsIDIsIGVycm9yKTtcblx0XHR9KTtcblx0fTtcblxuXHRfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW19hc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXHRcblx0cmV0dXJuIF9Bc3luY0dlbmVyYXRvcjtcbn0pKCk7XG4iLCIvLyBCb3Jyb3dlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9haS9uYW5vaWQvYmxvYi8zLjAuMi9ub24tc2VjdXJlL2luZGV4LmpzXHJcbi8vIFRoaXMgYWxwaGFiZXQgdXNlcyBgQS1aYS16MC05Xy1gIHN5bWJvbHMuIEEgZ2VuZXRpYyBhbGdvcml0aG0gaGVscGVkXHJcbi8vIG9wdGltaXplIHRoZSBnemlwIGNvbXByZXNzaW9uIGZvciB0aGlzIGFscGhhYmV0LlxyXG5sZXQgdXJsQWxwaGFiZXQgPVxyXG4gICdNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXJ1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xyXG4gIGxldCBpZCA9ICcnXHJcbiAgLy8gQSBjb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwOyBpKyspYC5cclxuICBsZXQgaSA9IHNpemVcclxuICB3aGlsZSAoaS0tKSB7XHJcbiAgICAvLyBgfCAwYCBpcyBtb3JlIGNvbXBhY3QgYW5kIGZhc3RlciB0aGFuIGBNYXRoLmZsb29yKClgLlxyXG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbKE1hdGgucmFuZG9tKCkgKiA2NCkgfCAwXVxyXG4gIH1cclxuICByZXR1cm4gaWRcclxufVxyXG4iLCJpbXBvcnQgeyBEaXNwYXRjaCwgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQWN0aW9uLFxyXG4gIFBheWxvYWRBY3Rpb24sXHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWRcclxufSBmcm9tICcuL2NyZWF0ZUFjdGlvbidcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgeyBGYWxsYmFja0lmVW5rbm93biwgSXNBbnkgfSBmcm9tICcuL3RzSGVscGVycydcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnLi9uYW5vaWQnXHJcblxyXG4vLyBAdHMtaWdub3JlIHdlIG5lZWQgdGhlIGltcG9ydCBvZiB0aGVzZSB0eXBlcyBkdWUgdG8gYSBidW5kbGluZyBpc3N1ZS5cclxudHlwZSBfS2VlcCA9IFBheWxvYWRBY3Rpb24gfCBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxhbnksIHVua25vd24+XHJcblxyXG5leHBvcnQgdHlwZSBCYXNlVGh1bmtBUEk8XHJcbiAgUyxcclxuICBFLFxyXG4gIEQgZXh0ZW5kcyBEaXNwYXRjaCA9IERpc3BhdGNoLFxyXG4gIFJlamVjdGVkVmFsdWUgPSB1bmRlZmluZWRcclxuPiA9IHtcclxuICBkaXNwYXRjaDogRFxyXG4gIGdldFN0YXRlOiAoKSA9PiBTXHJcbiAgZXh0cmE6IEVcclxuICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gIHNpZ25hbDogQWJvcnRTaWduYWxcclxuICByZWplY3RXaXRoVmFsdWUodmFsdWU6IFJlamVjdGVkVmFsdWUpOiBSZWplY3RXaXRoVmFsdWU8UmVqZWN0ZWRWYWx1ZT5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsaXplZEVycm9yIHtcclxuICBuYW1lPzogc3RyaW5nXHJcbiAgbWVzc2FnZT86IHN0cmluZ1xyXG4gIHN0YWNrPzogc3RyaW5nXHJcbiAgY29kZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBjb21tb25Qcm9wZXJ0aWVzOiBBcnJheTxrZXlvZiBTZXJpYWxpemVkRXJyb3I+ID0gW1xyXG4gICduYW1lJyxcclxuICAnbWVzc2FnZScsXHJcbiAgJ3N0YWNrJyxcclxuICAnY29kZSdcclxuXVxyXG5cclxuY2xhc3MgUmVqZWN0V2l0aFZhbHVlPFJlamVjdFZhbHVlPiB7XHJcbiAgcHVibGljIG5hbWUgPSAnUmVqZWN0V2l0aFZhbHVlJ1xyXG4gIHB1YmxpYyBtZXNzYWdlID0gJ1JlamVjdGVkJ1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBwYXlsb2FkOiBSZWplY3RWYWx1ZSkge31cclxufVxyXG5cclxuLy8gUmV3b3JrZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NlcmlhbGl6ZS1lcnJvclxyXG5leHBvcnQgY29uc3QgbWluaVNlcmlhbGl6ZUVycm9yID0gKHZhbHVlOiBhbnkpOiBTZXJpYWxpemVkRXJyb3IgPT4ge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBzaW1wbGVFcnJvcjogU2VyaWFsaXplZEVycm9yID0ge31cclxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgY29tbW9uUHJvcGVydGllcykge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlW3Byb3BlcnR5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBzaW1wbGVFcnJvcltwcm9wZXJ0eV0gPSB2YWx1ZVtwcm9wZXJ0eV1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaW1wbGVFcnJvclxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbWVzc2FnZTogU3RyaW5nKHZhbHVlKSB9XHJcbn1cclxuXHJcbnR5cGUgQXN5bmNUaHVua0NvbmZpZyA9IHtcclxuICBzdGF0ZT86IHVua25vd25cclxuICBkaXNwYXRjaD86IERpc3BhdGNoXHJcbiAgZXh0cmE/OiB1bmtub3duXHJcbiAgcmVqZWN0VmFsdWU/OiB1bmtub3duXHJcbiAgc2VyaWFsaXplZEVycm9yVHlwZT86IHVua25vd25cclxufVxyXG5cclxudHlwZSBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHtcclxuICBzdGF0ZTogaW5mZXIgU3RhdGVcclxufVxyXG4gID8gU3RhdGVcclxuICA6IHVua25vd25cclxudHlwZSBHZXRFeHRyYTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHsgZXh0cmE6IGluZmVyIEV4dHJhIH1cclxuICA/IEV4dHJhXHJcbiAgOiB1bmtub3duXHJcbnR5cGUgR2V0RGlzcGF0Y2g8VGh1bmtBcGlDb25maWc+ID0gVGh1bmtBcGlDb25maWcgZXh0ZW5kcyB7XHJcbiAgZGlzcGF0Y2g6IGluZmVyIERpc3BhdGNoXHJcbn1cclxuICA/IEZhbGxiYWNrSWZVbmtub3duPFxyXG4gICAgICBEaXNwYXRjaCxcclxuICAgICAgVGh1bmtEaXNwYXRjaDxcclxuICAgICAgICBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgICAgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LFxyXG4gICAgICAgIEFueUFjdGlvblxyXG4gICAgICA+XHJcbiAgICA+XHJcbiAgOiBUaHVua0Rpc3BhdGNoPEdldFN0YXRlPFRodW5rQXBpQ29uZmlnPiwgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LCBBbnlBY3Rpb24+XHJcblxyXG50eXBlIEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPiA9IEJhc2VUaHVua0FQSTxcclxuICBHZXRTdGF0ZTxUaHVua0FwaUNvbmZpZz4sXHJcbiAgR2V0RXh0cmE8VGh1bmtBcGlDb25maWc+LFxyXG4gIEdldERpc3BhdGNoPFRodW5rQXBpQ29uZmlnPixcclxuICBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz5cclxuPlxyXG5cclxudHlwZSBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHtcclxuICByZWplY3RWYWx1ZTogaW5mZXIgUmVqZWN0VmFsdWVcclxufVxyXG4gID8gUmVqZWN0VmFsdWVcclxuICA6IHVua25vd25cclxuXHJcbnR5cGUgR2V0U2VyaWFsaXplZEVycm9yVHlwZTxUaHVua0FwaUNvbmZpZz4gPSBUaHVua0FwaUNvbmZpZyBleHRlbmRzIHtcclxuICBzZXJpYWxpemVkRXJyb3JUeXBlOiBpbmZlciBHZXRTZXJpYWxpemVkRXJyb3JUeXBlXHJcbn1cclxuICA/IEdldFNlcmlhbGl6ZWRFcnJvclR5cGVcclxuICA6IFNlcmlhbGl6ZWRFcnJvclxyXG5cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGBwYXlsb2FkQ3JlYXRvcmAgYXJndW1lbnQgdG8gYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBNaWdodCBiZSB1c2VmdWwgZm9yIHdyYXBwaW5nIGBjcmVhdGVBc3luY1RodW5rYCBpbiBjdXN0b20gYWJzdHJhY3Rpb25zLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBc3luY1RodW5rUGF5bG9hZENyZWF0b3JSZXR1cm5WYWx1ZTxcclxuICBSZXR1cm5lZCxcclxuICBUaHVua0FwaUNvbmZpZyBleHRlbmRzIEFzeW5jVGh1bmtDb25maWdcclxuPiA9XHJcbiAgfCBQcm9taXNlPFJldHVybmVkIHwgUmVqZWN0V2l0aFZhbHVlPEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPj4+XHJcbiAgfCBSZXR1cm5lZFxyXG4gIHwgUmVqZWN0V2l0aFZhbHVlPEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPj5cclxuLyoqXHJcbiAqIEEgdHlwZSBkZXNjcmliaW5nIHRoZSBgcGF5bG9hZENyZWF0b3JgIGFyZ3VtZW50IHRvIGBjcmVhdGVBc3luY1RodW5rYC5cclxuICogTWlnaHQgYmUgdXNlZnVsIGZvciB3cmFwcGluZyBgY3JlYXRlQXN5bmNUaHVua2AgaW4gY3VzdG9tIGFic3RyYWN0aW9ucy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnID0gdm9pZCxcclxuICBUaHVua0FwaUNvbmZpZyBleHRlbmRzIEFzeW5jVGh1bmtDb25maWcgPSB7fVxyXG4+ID0gKFxyXG4gIGFyZzogVGh1bmtBcmcsXHJcbiAgdGh1bmtBUEk6IEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPlxyXG4pID0+IEFzeW5jVGh1bmtQYXlsb2FkQ3JlYXRvclJldHVyblZhbHVlPFJldHVybmVkLCBUaHVua0FwaUNvbmZpZz5cclxuXHJcbi8qKlxyXG4gKiBBIFRodW5rQWN0aW9uIGNyZWF0ZWQgYnkgYGNyZWF0ZUFzeW5jVGh1bmtgLlxyXG4gKiBEaXNwYXRjaGluZyBpdCByZXR1cm5zIGEgUHJvbWlzZSBmb3IgZWl0aGVyIGFcclxuICogZnVsZmlsbGVkIG9yIHJlamVjdGVkIGFjdGlvbi5cclxuICogQWxzbywgdGhlIHJldHVybmVkIHZhbHVlIGNvbnRhaW5zIGEgYGFib3J0KClgIG1ldGhvZFxyXG4gKiB0aGF0IGFsbG93cyB0aGUgYXN5bmNBY3Rpb24gdG8gYmUgY2FuY2VsbGVkIGZyb20gdGhlIG91dHNpZGUuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIEFzeW5jVGh1bmtBY3Rpb248XHJcbiAgUmV0dXJuZWQsXHJcbiAgVGh1bmtBcmcsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnXHJcbj4gPSAoXHJcbiAgZGlzcGF0Y2g6IEdldERpc3BhdGNoPFRodW5rQXBpQ29uZmlnPixcclxuICBnZXRTdGF0ZTogKCkgPT4gR2V0U3RhdGU8VGh1bmtBcGlDb25maWc+LFxyXG4gIGV4dHJhOiBHZXRFeHRyYTxUaHVua0FwaUNvbmZpZz5cclxuKSA9PiBQcm9taXNlPFxyXG4gIHwgUmV0dXJuVHlwZTxBc3luY1RodW5rRnVsZmlsbGVkQWN0aW9uQ3JlYXRvcjxSZXR1cm5lZCwgVGh1bmtBcmc+PlxyXG4gIHwgUmV0dXJuVHlwZTxBc3luY1RodW5rUmVqZWN0ZWRBY3Rpb25DcmVhdG9yPFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4+XHJcbj4gJiB7XHJcbiAgYWJvcnQocmVhc29uPzogc3RyaW5nKTogdm9pZFxyXG4gIHJlcXVlc3RJZDogc3RyaW5nXHJcbiAgYXJnOiBUaHVua0FyZ1xyXG59XHJcblxyXG50eXBlIEFzeW5jVGh1bmtBY3Rpb25DcmVhdG9yPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnLFxyXG4gIFRodW5rQXBpQ29uZmlnIGV4dGVuZHMgQXN5bmNUaHVua0NvbmZpZ1xyXG4+ID0gSXNBbnk8XHJcbiAgVGh1bmtBcmcsXHJcbiAgLy8gYW55IGhhbmRsaW5nXHJcbiAgKGFyZzogVGh1bmtBcmcpID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4sXHJcbiAgLy8gdW5rbm93biBoYW5kbGluZ1xyXG4gIHVua25vd24gZXh0ZW5kcyBUaHVua0FyZ1xyXG4gICAgPyAoYXJnOiBUaHVua0FyZykgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiAvLyBhcmd1bWVudCBub3Qgc3BlY2lmaWVkIG9yIHNwZWNpZmllZCBhcyB2b2lkIG9yIHVuZGVmaW5lZFxyXG4gICAgOiBbVGh1bmtBcmddIGV4dGVuZHMgW3ZvaWRdIHwgW3VuZGVmaW5lZF1cclxuICAgID8gKCkgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiAvLyBhcmd1bWVudCBjb250YWlucyB2b2lkXHJcbiAgICA6IFt2b2lkXSBleHRlbmRzIFtUaHVua0FyZ10gLy8gbWFrZSBvcHRpb25hbFxyXG4gICAgPyAoYXJnPzogVGh1bmtBcmcpID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4gLy8gYXJndW1lbnQgY29udGFpbnMgdW5kZWZpbmVkXHJcbiAgICA6IFt1bmRlZmluZWRdIGV4dGVuZHMgW1RodW5rQXJnXVxyXG4gICAgPyBXaXRoU3RyaWN0TnVsbENoZWNrczxcclxuICAgICAgICAvLyB3aXRoIHN0cmljdCBudWxsQ2hlY2tzOiBtYWtlIG9wdGlvbmFsXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgYXJnPzogVGh1bmtBcmdcclxuICAgICAgICApID0+IEFzeW5jVGh1bmtBY3Rpb248UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4sXHJcbiAgICAgICAgLy8gd2l0aG91dCBzdHJpY3QgbnVsbCBjaGVja3MgdGhpcyB3aWxsIG1hdGNoIGV2ZXJ5dGhpbmcsIHNvIGRvbid0IG1ha2UgaXQgb3B0aW9uYWxcclxuICAgICAgICAoYXJnOiBUaHVua0FyZykgPT4gQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPlxyXG4gICAgICA+IC8vIGRlZmF1bHQgY2FzZTogbm9ybWFsIGFyZ3VtZW50XHJcbiAgICA6IChhcmc6IFRodW5rQXJnKSA9PiBBc3luY1RodW5rQWN0aW9uPFJldHVybmVkLCBUaHVua0FyZywgVGh1bmtBcGlDb25maWc+XHJcbj5cclxuXHJcbmludGVyZmFjZSBBc3luY1RodW5rT3B0aW9uczxcclxuICBUaHVua0FyZyA9IHZvaWQsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnID0ge31cclxuPiB7XHJcbiAgLyoqXHJcbiAgICogQSBtZXRob2QgdG8gY29udHJvbCB3aGV0aGVyIHRoZSBhc3luY1RodW5rIHNob3VsZCBiZSBleGVjdXRlZC4gSGFzIGFjY2VzcyB0byB0aGVcclxuICAgKiBgYXJnYCwgYGFwaS5nZXRTdGF0ZSgpYCBhbmQgYGFwaS5leHRyYWAgYXJndW1lbnRzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgYGZhbHNlYCBpZiBpdCBzaG91bGQgYmUgc2tpcHBlZFxyXG4gICAqL1xyXG4gIGNvbmRpdGlvbj8oXHJcbiAgICBhcmc6IFRodW5rQXJnLFxyXG4gICAgYXBpOiBQaWNrPEdldFRodW5rQVBJPFRodW5rQXBpQ29uZmlnPiwgJ2dldFN0YXRlJyB8ICdleHRyYSc+XHJcbiAgKTogYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG4gIC8qKlxyXG4gICAqIElmIGBjb25kaXRpb25gIHJldHVybnMgYGZhbHNlYCwgdGhlIGFzeW5jVGh1bmsgd2lsbCBiZSBza2lwcGVkLlxyXG4gICAqIFRoaXMgb3B0aW9uIGFsbG93cyB5b3UgdG8gY29udHJvbCB3aGV0aGVyIGEgYHJlamVjdGVkYCBhY3Rpb24gd2l0aCBgbWV0YS5jb25kaXRpb24gPT0gZmFsc2VgXHJcbiAgICogd2lsbCBiZSBkaXNwYXRjaGVkIG9yIG5vdC5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGBmYWxzZWBcclxuICAgKi9cclxuICBkaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbj86IGJvb2xlYW5cclxuXHJcbiAgc2VyaWFsaXplRXJyb3I/OiAoeDogdW5rbm93bikgPT4gR2V0U2VyaWFsaXplZEVycm9yVHlwZTxUaHVua0FwaUNvbmZpZz5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXN5bmNUaHVua1BlbmRpbmdBY3Rpb25DcmVhdG9yPFxyXG4gIFRodW5rQXJnXHJcbj4gPSBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICBbc3RyaW5nLCBUaHVua0FyZ10sXHJcbiAgdW5kZWZpbmVkLFxyXG4gIHN0cmluZyxcclxuICBuZXZlcixcclxuICB7XHJcbiAgICBhcmc6IFRodW5rQXJnXHJcbiAgICByZXF1ZXN0SWQ6IHN0cmluZ1xyXG4gICAgcmVxdWVzdFN0YXR1czogJ3BlbmRpbmcnXHJcbiAgfVxyXG4+XHJcblxyXG5leHBvcnQgdHlwZSBBc3luY1RodW5rUmVqZWN0ZWRBY3Rpb25DcmVhdG9yPFxyXG4gIFRodW5rQXJnLFxyXG4gIFRodW5rQXBpQ29uZmlnXHJcbj4gPSBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZDxcclxuICBbRXJyb3IgfCBudWxsLCBzdHJpbmcsIFRodW5rQXJnXSxcclxuICBHZXRSZWplY3RWYWx1ZTxUaHVua0FwaUNvbmZpZz4gfCB1bmRlZmluZWQsXHJcbiAgc3RyaW5nLFxyXG4gIEdldFNlcmlhbGl6ZWRFcnJvclR5cGU8VGh1bmtBcGlDb25maWc+LFxyXG4gIHtcclxuICAgIGFyZzogVGh1bmtBcmdcclxuICAgIHJlcXVlc3RJZDogc3RyaW5nXHJcbiAgICByZWplY3RlZFdpdGhWYWx1ZTogYm9vbGVhblxyXG4gICAgcmVxdWVzdFN0YXR1czogJ3JlamVjdGVkJ1xyXG4gICAgYWJvcnRlZDogYm9vbGVhblxyXG4gICAgY29uZGl0aW9uOiBib29sZWFuXHJcbiAgfVxyXG4+XHJcblxyXG5leHBvcnQgdHlwZSBBc3luY1RodW5rRnVsZmlsbGVkQWN0aW9uQ3JlYXRvcjxcclxuICBSZXR1cm5lZCxcclxuICBUaHVua0FyZ1xyXG4+ID0gQWN0aW9uQ3JlYXRvcldpdGhQcmVwYXJlZFBheWxvYWQ8XHJcbiAgW1JldHVybmVkLCBzdHJpbmcsIFRodW5rQXJnXSxcclxuICBSZXR1cm5lZCxcclxuICBzdHJpbmcsXHJcbiAgbmV2ZXIsXHJcbiAge1xyXG4gICAgYXJnOiBUaHVua0FyZ1xyXG4gICAgcmVxdWVzdElkOiBzdHJpbmdcclxuICAgIHJlcXVlc3RTdGF0dXM6ICdmdWxmaWxsZWQnXHJcbiAgfVxyXG4+XHJcblxyXG4vKipcclxuICogQSB0eXBlIGRlc2NyaWJpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBgY3JlYXRlQXN5bmNUaHVua2AuXHJcbiAqIE1pZ2h0IGJlIHVzZWZ1bCBmb3Igd3JhcHBpbmcgYGNyZWF0ZUFzeW5jVGh1bmtgIGluIGN1c3RvbSBhYnN0cmFjdGlvbnMuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCB0eXBlIEFzeW5jVGh1bms8XHJcbiAgUmV0dXJuZWQsXHJcbiAgVGh1bmtBcmcsXHJcbiAgVGh1bmtBcGlDb25maWcgZXh0ZW5kcyBBc3luY1RodW5rQ29uZmlnXHJcbj4gPSBBc3luY1RodW5rQWN0aW9uQ3JlYXRvcjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiAmIHtcclxuICBwZW5kaW5nOiBBc3luY1RodW5rUGVuZGluZ0FjdGlvbkNyZWF0b3I8VGh1bmtBcmc+XHJcbiAgcmVqZWN0ZWQ6IEFzeW5jVGh1bmtSZWplY3RlZEFjdGlvbkNyZWF0b3I8VGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPlxyXG4gIGZ1bGZpbGxlZDogQXN5bmNUaHVua0Z1bGZpbGxlZEFjdGlvbkNyZWF0b3I8UmV0dXJuZWQsIFRodW5rQXJnPlxyXG4gIHR5cGVQcmVmaXg6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHR5cGVQcmVmaXhcclxuICogQHBhcmFtIHBheWxvYWRDcmVhdG9yXHJcbiAqIEBwYXJhbSBvcHRpb25zXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBc3luY1RodW5rPFxyXG4gIFJldHVybmVkLFxyXG4gIFRodW5rQXJnID0gdm9pZCxcclxuICBUaHVua0FwaUNvbmZpZyBleHRlbmRzIEFzeW5jVGh1bmtDb25maWcgPSB7fVxyXG4+KFxyXG4gIHR5cGVQcmVmaXg6IHN0cmluZyxcclxuICBwYXlsb2FkQ3JlYXRvcjogQXN5bmNUaHVua1BheWxvYWRDcmVhdG9yPFJldHVybmVkLCBUaHVua0FyZywgVGh1bmtBcGlDb25maWc+LFxyXG4gIG9wdGlvbnM/OiBBc3luY1RodW5rT3B0aW9uczxUaHVua0FyZywgVGh1bmtBcGlDb25maWc+XHJcbik6IEFzeW5jVGh1bms8UmV0dXJuZWQsIFRodW5rQXJnLCBUaHVua0FwaUNvbmZpZz4ge1xyXG4gIHR5cGUgUmVqZWN0ZWRWYWx1ZSA9IEdldFJlamVjdFZhbHVlPFRodW5rQXBpQ29uZmlnPlxyXG5cclxuICBjb25zdCBmdWxmaWxsZWQgPSBjcmVhdGVBY3Rpb24oXHJcbiAgICB0eXBlUHJlZml4ICsgJy9mdWxmaWxsZWQnLFxyXG4gICAgKHJlc3VsdDogUmV0dXJuZWQsIHJlcXVlc3RJZDogc3RyaW5nLCBhcmc6IFRodW5rQXJnKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF5bG9hZDogcmVzdWx0LFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIGFyZyxcclxuICAgICAgICAgIHJlcXVlc3RJZCxcclxuICAgICAgICAgIHJlcXVlc3RTdGF0dXM6ICdmdWxmaWxsZWQnIGFzIGNvbnN0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICBjb25zdCBwZW5kaW5nID0gY3JlYXRlQWN0aW9uKFxyXG4gICAgdHlwZVByZWZpeCArICcvcGVuZGluZycsXHJcbiAgICAocmVxdWVzdElkOiBzdHJpbmcsIGFyZzogVGh1bmtBcmcpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXlsb2FkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbWV0YToge1xyXG4gICAgICAgICAgYXJnLFxyXG4gICAgICAgICAgcmVxdWVzdElkLFxyXG4gICAgICAgICAgcmVxdWVzdFN0YXR1czogJ3BlbmRpbmcnIGFzIGNvbnN0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihcclxuICAgIHR5cGVQcmVmaXggKyAnL3JlamVjdGVkJyxcclxuICAgIChlcnJvcjogRXJyb3IgfCBudWxsLCByZXF1ZXN0SWQ6IHN0cmluZywgYXJnOiBUaHVua0FyZykgPT4ge1xyXG4gICAgICBjb25zdCByZWplY3RlZFdpdGhWYWx1ZSA9IGVycm9yIGluc3RhbmNlb2YgUmVqZWN0V2l0aFZhbHVlXHJcbiAgICAgIGNvbnN0IGFib3J0ZWQgPSAhIWVycm9yICYmIGVycm9yLm5hbWUgPT09ICdBYm9ydEVycm9yJ1xyXG4gICAgICBjb25zdCBjb25kaXRpb24gPSAhIWVycm9yICYmIGVycm9yLm5hbWUgPT09ICdDb25kaXRpb25FcnJvcidcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF5bG9hZDogZXJyb3IgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUgPyBlcnJvci5wYXlsb2FkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGVycm9yOiAoKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemVFcnJvcikgfHwgbWluaVNlcmlhbGl6ZUVycm9yKShcclxuICAgICAgICAgIGVycm9yIHx8ICdSZWplY3RlZCdcclxuICAgICAgICApIGFzIEdldFNlcmlhbGl6ZWRFcnJvclR5cGU8VGh1bmtBcGlDb25maWc+LFxyXG4gICAgICAgIG1ldGE6IHtcclxuICAgICAgICAgIGFyZyxcclxuICAgICAgICAgIHJlcXVlc3RJZCxcclxuICAgICAgICAgIHJlamVjdGVkV2l0aFZhbHVlLFxyXG4gICAgICAgICAgcmVxdWVzdFN0YXR1czogJ3JlamVjdGVkJyBhcyBjb25zdCxcclxuICAgICAgICAgIGFib3J0ZWQsXHJcbiAgICAgICAgICBjb25kaXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApXHJcblxyXG4gIGxldCBkaXNwbGF5ZWRXYXJuaW5nID0gZmFsc2VcclxuXHJcbiAgY29uc3QgQUMgPVxyXG4gICAgdHlwZW9mIEFib3J0Q29udHJvbGxlciAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyBBYm9ydENvbnRyb2xsZXJcclxuICAgICAgOiBjbGFzcyBpbXBsZW1lbnRzIEFib3J0Q29udHJvbGxlciB7XHJcbiAgICAgICAgICBzaWduYWw6IEFib3J0U2lnbmFsID0ge1xyXG4gICAgICAgICAgICBhYm9ydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigpIHt9LFxyXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbmFib3J0KCkge30sXHJcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWJvcnQoKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFkaXNwbGF5ZWRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRXYXJuaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFxyXG4gICAgICAgICAgICAgICAgICBgVGhpcyBwbGF0Zm9ybSBkb2VzIG5vdCBpbXBsZW1lbnQgQWJvcnRDb250cm9sbGVyLiBcclxuSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBBYm9ydENvbnRyb2xsZXIgdG8gcmVhY3QgdG8gXFxgYWJvcnRcXGAgZXZlbnRzLCBwbGVhc2UgY29uc2lkZXIgaW1wb3J0aW5nIGEgcG9seWZpbGwgbGlrZSAnYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsL2Rpc3QvYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsLW9ubHknLmBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoXHJcbiAgICBhcmc6IFRodW5rQXJnXHJcbiAgKTogQXN5bmNUaHVua0FjdGlvbjxSZXR1cm5lZCwgVGh1bmtBcmcsIFRodW5rQXBpQ29uZmlnPiB7XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmEpID0+IHtcclxuICAgICAgY29uc3QgcmVxdWVzdElkID0gbmFub2lkKClcclxuXHJcbiAgICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBQygpXHJcbiAgICAgIGxldCBhYm9ydFJlYXNvbjogc3RyaW5nIHwgdW5kZWZpbmVkXHJcblxyXG4gICAgICBjb25zdCBhYm9ydGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlPG5ldmVyPigoXywgcmVqZWN0KSA9PlxyXG4gICAgICAgIGFib3J0Q29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PlxyXG4gICAgICAgICAgcmVqZWN0KHsgbmFtZTogJ0Fib3J0RXJyb3InLCBtZXNzYWdlOiBhYm9ydFJlYXNvbiB8fCAnQWJvcnRlZCcgfSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGxldCBzdGFydGVkID0gZmFsc2VcclxuICAgICAgZnVuY3Rpb24gYWJvcnQocmVhc29uPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICAgIGFib3J0UmVhc29uID0gcmVhc29uXHJcbiAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcHJvbWlzZSA9IChhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgZmluYWxBY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIGZ1bGZpbGxlZCB8IHR5cGVvZiByZWplY3RlZD5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBvcHRpb25zICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuY29uZGl0aW9uICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuY29uZGl0aW9uKGFyZywgeyBnZXRTdGF0ZSwgZXh0cmEgfSkgPT09IGZhbHNlXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcclxuICAgICAgICAgICAgdGhyb3cge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdDb25kaXRpb25FcnJvcicsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0Fib3J0ZWQgZHVlIHRvIGNvbmRpdGlvbiBjYWxsYmFjayByZXR1cm5pbmcgZmFsc2UuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGFydGVkID0gdHJ1ZVxyXG4gICAgICAgICAgZGlzcGF0Y2gocGVuZGluZyhyZXF1ZXN0SWQsIGFyZykpXHJcbiAgICAgICAgICBmaW5hbEFjdGlvbiA9IGF3YWl0IFByb21pc2UucmFjZShbXHJcbiAgICAgICAgICAgIGFib3J0ZWRQcm9taXNlLFxyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoXHJcbiAgICAgICAgICAgICAgcGF5bG9hZENyZWF0b3IoYXJnLCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCxcclxuICAgICAgICAgICAgICAgIGdldFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXh0cmEsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgICAgICAgICByZWplY3RXaXRoVmFsdWUodmFsdWU6IFJlamVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWplY3RXaXRoVmFsdWUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJlamVjdFdpdGhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsZWQocmVzdWx0LCByZXF1ZXN0SWQsIGFyZylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIF0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBmaW5hbEFjdGlvbiA9IHJlamVjdGVkKGVyciwgcmVxdWVzdElkLCBhcmcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdlIGRpc3BhdGNoIHRoZSByZXN1bHQgYWN0aW9uIF9hZnRlcl8gdGhlIGNhdGNoLCB0byBhdm9pZCBoYXZpbmcgYW55IGVycm9yc1xyXG4gICAgICAgIC8vIGhlcmUgZ2V0IHN3YWxsb3dlZCBieSB0aGUgdHJ5L2NhdGNoIGJsb2NrLFxyXG4gICAgICAgIC8vIHBlciBodHRwczovL3R3aXR0ZXIuY29tL2Rhbl9hYnJhbW92L3N0YXR1cy83NzA5MTQyMjE2Mzg5NDI3MjBcclxuICAgICAgICAvLyBhbmQgaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy90dXRvcmlhbHMvYWR2YW5jZWQtdHV0b3JpYWwjYXN5bmMtZXJyb3ItaGFuZGxpbmctbG9naWMtaW4tdGh1bmtzXHJcblxyXG4gICAgICAgIGNvbnN0IHNraXBEaXNwYXRjaCA9XHJcbiAgICAgICAgICBvcHRpb25zICYmXHJcbiAgICAgICAgICAhb3B0aW9ucy5kaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbiAmJlxyXG4gICAgICAgICAgcmVqZWN0ZWQubWF0Y2goZmluYWxBY3Rpb24pICYmXHJcbiAgICAgICAgICBmaW5hbEFjdGlvbi5tZXRhLmNvbmRpdGlvblxyXG5cclxuICAgICAgICBpZiAoIXNraXBEaXNwYXRjaCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmluYWxBY3Rpb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaW5hbEFjdGlvblxyXG4gICAgICB9KSgpXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb21pc2UsIHsgYWJvcnQsIHJlcXVlc3RJZCwgYXJnIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgIGFjdGlvbkNyZWF0b3IgYXMgQXN5bmNUaHVua0FjdGlvbkNyZWF0b3I8XHJcbiAgICAgIFJldHVybmVkLFxyXG4gICAgICBUaHVua0FyZyxcclxuICAgICAgVGh1bmtBcGlDb25maWdcclxuICAgID4sXHJcbiAgICB7XHJcbiAgICAgIHBlbmRpbmcsXHJcbiAgICAgIHJlamVjdGVkLFxyXG4gICAgICBmdWxmaWxsZWQsXHJcbiAgICAgIHR5cGVQcmVmaXhcclxuICAgIH1cclxuICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBVbndyYXBwYWJsZUFjdGlvbiB7XHJcbiAgcGF5bG9hZDogYW55XHJcbiAgbWV0YT86IGFueVxyXG4gIGVycm9yPzogYW55XHJcbn1cclxuXHJcbnR5cGUgVW53cmFwcGVkQWN0aW9uUGF5bG9hZDxUIGV4dGVuZHMgVW53cmFwcGFibGVBY3Rpb24+ID0gRXhjbHVkZTxcclxuICBULFxyXG4gIHsgZXJyb3I6IGFueSB9XHJcbj5bJ3BheWxvYWQnXVxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBSZXN1bHQ8UiBleHRlbmRzIFVud3JhcHBhYmxlQWN0aW9uPihcclxuICBhY3Rpb246IFJcclxuKTogVW53cmFwcGVkQWN0aW9uUGF5bG9hZDxSPiB7XHJcbiAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLnJlamVjdGVkV2l0aFZhbHVlKSB7XHJcbiAgICB0aHJvdyBhY3Rpb24ucGF5bG9hZFxyXG4gIH1cclxuICBpZiAoYWN0aW9uLmVycm9yKSB7XHJcbiAgICB0aHJvdyBhY3Rpb24uZXJyb3JcclxuICB9XHJcbiAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbn1cclxuXHJcbnR5cGUgV2l0aFN0cmljdE51bGxDaGVja3M8VHJ1ZSwgRmFsc2U+ID0gdW5kZWZpbmVkIGV4dGVuZHMgYm9vbGVhblxyXG4gID8gRmFsc2VcclxuICA6IFRydWVcclxuIiwiaW1wb3J0IHsgTWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuLyoqXHJcbiAqIHJldHVybiBUcnVlIGlmIFQgaXMgYGFueWAsIG90aGVyd2lzZSByZXR1cm4gRmFsc2VcclxuICogdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vam9vbmhvY2hvL3RzZGVmXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSXNBbnk8VCwgVHJ1ZSwgRmFsc2UgPSBuZXZlcj4gPVxyXG4gIC8vIHRlc3QgaWYgd2UgYXJlIGdvaW5nIHRoZSBsZWZ0IEFORCByaWdodCBwYXRoIGluIHRoZSBjb25kaXRpb25cclxuICB0cnVlIHwgZmFsc2UgZXh0ZW5kcyAoVCBleHRlbmRzIG5ldmVyID8gdHJ1ZSA6IGZhbHNlKSA/IFRydWUgOiBGYWxzZVxyXG5cclxuLyoqXHJcbiAqIHJldHVybiBUcnVlIGlmIFQgaXMgYHVua25vd25gLCBvdGhlcndpc2UgcmV0dXJuIEZhbHNlXHJcbiAqIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pvb25ob2Noby90c2RlZlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCB0eXBlIElzVW5rbm93bjxULCBUcnVlLCBGYWxzZSA9IG5ldmVyPiA9IHVua25vd24gZXh0ZW5kcyBUXHJcbiAgPyBJc0FueTxULCBGYWxzZSwgVHJ1ZT5cclxuICA6IEZhbHNlXHJcblxyXG5leHBvcnQgdHlwZSBGYWxsYmFja0lmVW5rbm93bjxULCBGYWxsYmFjaz4gPSBJc1Vua25vd248VCwgRmFsbGJhY2ssIFQ+XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJZk1heWJlVW5kZWZpbmVkPFAsIFRydWUsIEZhbHNlPiA9IFt1bmRlZmluZWRdIGV4dGVuZHMgW1BdXHJcbiAgPyBUcnVlXHJcbiAgOiBGYWxzZVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSWZWb2lkPFAsIFRydWUsIEZhbHNlPiA9IFt2b2lkXSBleHRlbmRzIFtQXSA/IFRydWUgOiBGYWxzZVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSXNFbXB0eU9iajxULCBUcnVlLCBGYWxzZSA9IG5ldmVyPiA9IFQgZXh0ZW5kcyBhbnlcclxuICA/IGtleW9mIFQgZXh0ZW5kcyBuZXZlclxyXG4gICAgPyBJc1Vua25vd248VCwgRmFsc2UsIElmTWF5YmVVbmRlZmluZWQ8VCwgRmFsc2UsIElmVm9pZDxULCBGYWxzZSwgVHJ1ZT4+PlxyXG4gICAgOiBGYWxzZVxyXG4gIDogbmV2ZXJcclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIFRydWUgaWYgVFMgdmVyc2lvbiBpcyBhYm92ZSAzLjUsIEZhbHNlIGlmIGJlbG93LlxyXG4gKiB1c2VzIGZlYXR1cmUgZGV0ZWN0aW9uIHRvIGRldGVjdCBUUyB2ZXJzaW9uID49IDMuNVxyXG4gKiAqIHZlcnNpb25zIGJlbG93IDMuNSB3aWxsIHJldHVybiBge31gIGZvciB1bnJlc29sdmFibGUgaW50ZXJmZXJlbmNlXHJcbiAqICogdmVyc2lvbnMgYWJvdmUgd2lsbCByZXR1cm4gYHVua25vd25gXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXRMZWFzdFRTMzU8VHJ1ZSwgRmFsc2U+ID0gW1RydWUsIEZhbHNlXVtJc1Vua25vd248XHJcbiAgUmV0dXJuVHlwZTw8VD4oKSA9PiBUPixcclxuICAwLFxyXG4gIDFcclxuPl1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCB0eXBlIElzVW5rbm93bk9yTm9uSW5mZXJyYWJsZTxULCBUcnVlLCBGYWxzZT4gPSBBdExlYXN0VFMzNTxcclxuICBJc1Vua25vd248VCwgVHJ1ZSwgRmFsc2U+LFxyXG4gIElzRW1wdHlPYmo8VCwgVHJ1ZSwgSXNVbmtub3duPFQsIFRydWUsIEZhbHNlPj5cclxuPlxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFsbCBkaXNwYXRjaCBzaWduYXR1cmVzIG9mIGFsbCBtaWRkbGV3YXJlcyBpbiB0aGUgYXJyYXkgYE1gIGludG9cclxuICogb25lIGludGVyc2VjdGVkIGRpc3BhdGNoIHNpZ25hdHVyZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIERpc3BhdGNoRm9yTWlkZGxld2FyZXM8TT4gPSBNIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxhbnk+XHJcbiAgPyBVbmlvblRvSW50ZXJzZWN0aW9uPFxyXG4gICAgICBNW251bWJlcl0gZXh0ZW5kcyBpbmZlciBNaWRkbGV3YXJlVmFsdWVzXHJcbiAgICAgICAgPyBNaWRkbGV3YXJlVmFsdWVzIGV4dGVuZHMgTWlkZGxld2FyZTxpbmZlciBEaXNwYXRjaEV4dCwgYW55LCBhbnk+XHJcbiAgICAgICAgICA/IERpc3BhdGNoRXh0IGV4dGVuZHMgRnVuY3Rpb25cclxuICAgICAgICAgICAgPyBEaXNwYXRjaEV4dFxyXG4gICAgICAgICAgICA6IG5ldmVyXHJcbiAgICAgICAgICA6IG5ldmVyXHJcbiAgICAgICAgOiBuZXZlclxyXG4gICAgPlxyXG4gIDogbmV2ZXJcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgVW5pb24gdHlwZSBgKEF8QilgIHRvIGFuZCBpbnRlcnNlY2lvbiB0eXBlIGAoQSZCKWBcclxuICovXHJcbmV4cG9ydCB0eXBlIFVuaW9uVG9JbnRlcnNlY3Rpb248VT4gPSAoVSBleHRlbmRzIGFueVxyXG4/IChrOiBVKSA9PiB2b2lkXHJcbjogbmV2ZXIpIGV4dGVuZHMgKGs6IGluZmVyIEkpID0+IHZvaWRcclxuICA/IElcclxuICA6IG5ldmVyXHJcblxyXG4vKipcclxuICogSGVscGVyIHR5cGUuIFBhc3NlcyBUIG91dCBhZ2FpbiwgYnV0IGJveGVzIGl0IGluIGEgd2F5IHRoYXQgaXQgY2Fubm90XHJcbiAqIFwid2lkZW5cIiB0aGUgdHlwZSBieSBhY2NpZGVudCBpZiBpdCBpcyBhIGdlbmVyaWMgdGhhdCBzaG91bGQgYmUgaW5mZXJyZWRcclxuICogZnJvbSBlbHNld2hlcmUuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTm9JbmZlcjxUPiA9IFtUXVtUIGV4dGVuZHMgYW55ID8gMCA6IG5ldmVyXVxyXG5cclxuZXhwb3J0IHR5cGUgT21pdDxULCBLIGV4dGVuZHMga2V5b2YgYW55PiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGFzTWF0Y2hGdW5jdGlvbjxUPiB7XHJcbiAgbWF0Y2godjogYW55KTogdiBpcyBUXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNNYXRjaEZ1bmN0aW9uID0gPFQ+KFxyXG4gIHY6IE1hdGNoZXI8VD5cclxuKTogdiBpcyBIYXNNYXRjaEZ1bmN0aW9uPFQ+ID0+IHtcclxuICByZXR1cm4gdiAmJiB0eXBlb2YgKHYgYXMgSGFzTWF0Y2hGdW5jdGlvbjxUPikubWF0Y2ggPT09ICdmdW5jdGlvbidcclxufVxyXG5cclxuLyoqIEBwdWJsaWMgKi9cclxuZXhwb3J0IHR5cGUgTWF0Y2hlcjxUPiA9IEhhc01hdGNoRnVuY3Rpb248VD4gfCAoKHY6IGFueSkgPT4gdiBpcyBUKVxyXG5cclxuLyoqIEBwdWJsaWMgKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uRnJvbU1hdGNoZXI8TSBleHRlbmRzIE1hdGNoZXI8YW55Pj4gPSBNIGV4dGVuZHMgTWF0Y2hlcjxcclxuICBpbmZlciBUXHJcbj5cclxuICA/IFRcclxuICA6IG5ldmVyXHJcbiIsImltcG9ydCB7XHJcbiAgQWN0aW9uRnJvbU1hdGNoZXIsXHJcbiAgaGFzTWF0Y2hGdW5jdGlvbixcclxuICBNYXRjaGVyLFxyXG4gIFVuaW9uVG9JbnRlcnNlY3Rpb25cclxufSBmcm9tICcuL3RzSGVscGVycydcclxuaW1wb3J0IHtcclxuICBBc3luY1RodW5rLFxyXG4gIEFzeW5jVGh1bmtGdWxmaWxsZWRBY3Rpb25DcmVhdG9yLFxyXG4gIEFzeW5jVGh1bmtQZW5kaW5nQWN0aW9uQ3JlYXRvcixcclxuICBBc3luY1RodW5rUmVqZWN0ZWRBY3Rpb25DcmVhdG9yXHJcbn0gZnJvbSAnLi9jcmVhdGVBc3luY1RodW5rJ1xyXG5cclxuLyoqIEBwdWJsaWMgKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uTWF0Y2hpbmdBbnlPZjxcclxuICBNYXRjaGVycyBleHRlbmRzIFtNYXRjaGVyPGFueT4sIC4uLk1hdGNoZXI8YW55PltdXVxyXG4+ID0gQWN0aW9uRnJvbU1hdGNoZXI8TWF0Y2hlcnNbbnVtYmVyXT5cclxuXHJcbi8qKiBAcHVibGljICovXHJcbmV4cG9ydCB0eXBlIEFjdGlvbk1hdGNoaW5nQWxsT2Y8XHJcbiAgTWF0Y2hlcnMgZXh0ZW5kcyBbTWF0Y2hlcjxhbnk+LCAuLi5NYXRjaGVyPGFueT5bXV1cclxuPiA9IFVuaW9uVG9JbnRlcnNlY3Rpb248QWN0aW9uTWF0Y2hpbmdBbnlPZjxNYXRjaGVycz4+XHJcblxyXG5jb25zdCBtYXRjaGVzID0gKG1hdGNoZXI6IE1hdGNoZXI8YW55PiwgYWN0aW9uOiBhbnkpID0+IHtcclxuICBpZiAoaGFzTWF0Y2hGdW5jdGlvbihtYXRjaGVyKSkge1xyXG4gICAgcmV0dXJuIG1hdGNoZXIubWF0Y2goYWN0aW9uKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbWF0Y2hlcihhY3Rpb24pXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQSBoaWdoZXItb3JkZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBjaGVja1xyXG4gKiB3aGV0aGVyIGFuIGFjdGlvbiBtYXRjaGVzIGFueSBvbmUgb2YgdGhlIHN1cHBsaWVkIHR5cGUgZ3VhcmRzIG9yIGFjdGlvblxyXG4gKiBjcmVhdG9ycy5cclxuICpcclxuICogQHBhcmFtIG1hdGNoZXJzIFRoZSB0eXBlIGd1YXJkcyBvciBhY3Rpb24gY3JlYXRvcnMgdG8gbWF0Y2ggYWdhaW5zdC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQW55T2Y8TWF0Y2hlcnMgZXh0ZW5kcyBbTWF0Y2hlcjxhbnk+LCAuLi5NYXRjaGVyPGFueT5bXV0+KFxyXG4gIC4uLm1hdGNoZXJzOiBNYXRjaGVyc1xyXG4pIHtcclxuICByZXR1cm4gKGFjdGlvbjogYW55KTogYWN0aW9uIGlzIEFjdGlvbk1hdGNoaW5nQW55T2Y8TWF0Y2hlcnM+ID0+IHtcclxuICAgIHJldHVybiBtYXRjaGVycy5zb21lKG1hdGNoZXIgPT4gbWF0Y2hlcyhtYXRjaGVyLCBhY3Rpb24pKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY2hlY2tcclxuICogd2hldGhlciBhbiBhY3Rpb24gbWF0Y2hlcyBhbGwgb2YgdGhlIHN1cHBsaWVkIHR5cGUgZ3VhcmRzIG9yIGFjdGlvblxyXG4gKiBjcmVhdG9ycy5cclxuICpcclxuICogQHBhcmFtIG1hdGNoZXJzIFRoZSB0eXBlIGd1YXJkcyBvciBhY3Rpb24gY3JlYXRvcnMgdG8gbWF0Y2ggYWdhaW5zdC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsT2Y8TWF0Y2hlcnMgZXh0ZW5kcyBbTWF0Y2hlcjxhbnk+LCAuLi5NYXRjaGVyPGFueT5bXV0+KFxyXG4gIC4uLm1hdGNoZXJzOiBNYXRjaGVyc1xyXG4pIHtcclxuICByZXR1cm4gKGFjdGlvbjogYW55KTogYWN0aW9uIGlzIEFjdGlvbk1hdGNoaW5nQWxsT2Y8TWF0Y2hlcnM+ID0+IHtcclxuICAgIHJldHVybiBtYXRjaGVycy5ldmVyeShtYXRjaGVyID0+IG1hdGNoZXMobWF0Y2hlciwgYWN0aW9uKSlcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gYWN0aW9uIEEgcmVkdXggYWN0aW9uXHJcbiAqIEBwYXJhbSB2YWxpZFN0YXR1cyBBbiBhcnJheSBvZiB2YWxpZCBtZXRhLnJlcXVlc3RTdGF0dXMgdmFsdWVzXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbjogYW55LCB2YWxpZFN0YXR1czogc3RyaW5nW10pIHtcclxuICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLm1ldGEpIHJldHVybiBmYWxzZVxyXG5cclxuICBjb25zdCBoYXNWYWxpZFJlcXVlc3RJZCA9IHR5cGVvZiBhY3Rpb24ubWV0YS5yZXF1ZXN0SWQgPT09ICdzdHJpbmcnXHJcbiAgY29uc3QgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzID1cclxuICAgIHZhbGlkU3RhdHVzLmluZGV4T2YoYWN0aW9uLm1ldGEucmVxdWVzdFN0YXR1cykgPiAtMVxyXG5cclxuICByZXR1cm4gaGFzVmFsaWRSZXF1ZXN0SWQgJiYgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FycmF5KGE6IFthbnldIHwgQW55QXN5bmNUaHVua1tdKTogYSBpcyBBbnlBc3luY1RodW5rW10ge1xyXG4gIHJldHVybiAoXHJcbiAgICB0eXBlb2YgYVswXSA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgJ3BlbmRpbmcnIGluIGFbMF0gJiZcclxuICAgICdmdWxmaWxsZWQnIGluIGFbMF0gJiZcclxuICAgICdyZWplY3RlZCcgaW4gYVswXVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVW5rbm93bkFzeW5jVGh1bmtQZW5kaW5nQWN0aW9uID0gUmV0dXJuVHlwZTxcclxuICBBc3luY1RodW5rUGVuZGluZ0FjdGlvbkNyZWF0b3I8dW5rbm93bj5cclxuPlxyXG5cclxuZXhwb3J0IHR5cGUgUGVuZGluZ0FjdGlvbkZyb21Bc3luY1RodW5rPFxyXG4gIFQgZXh0ZW5kcyBBbnlBc3luY1RodW5rXHJcbj4gPSBBY3Rpb25Gcm9tTWF0Y2hlcjxUWydwZW5kaW5nJ10+XHJcblxyXG4vKipcclxuICogQSBoaWdoZXItb3JkZXIgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBjaGVja1xyXG4gKiB3aGV0aGVyIGFuIGFjdGlvbiB3YXMgY3JlYXRlZCBieSBhbiBhc3luYyB0aHVuayBhY3Rpb24gY3JlYXRvciwgYW5kIHRoYXRcclxuICogdGhlIGFjdGlvbiBpcyBwZW5kaW5nLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQZW5kaW5nKCk6IChcclxuICBhY3Rpb246IGFueVxyXG4pID0+IGFjdGlvbiBpcyBVbmtub3duQXN5bmNUaHVua1BlbmRpbmdBY3Rpb25cclxuLyoqXHJcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY2hlY2tcclxuICogd2hldGhlciBhbiBhY3Rpb24gYmVsb25ncyB0byBvbmUgb2YgdGhlIHByb3ZpZGVkIGFzeW5jIHRodW5rIGFjdGlvbiBjcmVhdG9ycyxcclxuICogYW5kIHRoYXQgdGhlIGFjdGlvbiBpcyBwZW5kaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXN5bmNUaHVua3MgKG9wdGlvbmFsKSBUaGUgYXN5bmMgdGh1bmsgYWN0aW9uIGNyZWF0b3JzIHRvIG1hdGNoIGFnYWluc3QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BlbmRpbmc8XHJcbiAgQXN5bmNUaHVua3MgZXh0ZW5kcyBbQW55QXN5bmNUaHVuaywgLi4uQW55QXN5bmNUaHVua1tdXVxyXG4+KFxyXG4gIC4uLmFzeW5jVGh1bmtzOiBBc3luY1RodW5rc1xyXG4pOiAoYWN0aW9uOiBhbnkpID0+IGFjdGlvbiBpcyBQZW5kaW5nQWN0aW9uRnJvbUFzeW5jVGh1bms8QXN5bmNUaHVua3NbbnVtYmVyXT5cclxuLyoqXHJcbiAqIFRlc3RzIGlmIGBhY3Rpb25gIGlzIGEgcGVuZGluZyB0aHVuayBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGVuZGluZyhhY3Rpb246IGFueSk6IGFjdGlvbiBpcyBVbmtub3duQXN5bmNUaHVua1BlbmRpbmdBY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGVuZGluZzxcclxuICBBc3luY1RodW5rcyBleHRlbmRzIFtBbnlBc3luY1RodW5rLCAuLi5BbnlBc3luY1RodW5rW11dXHJcbj4oLi4uYXN5bmNUaHVua3M6IEFzeW5jVGh1bmtzIHwgW2FueV0pIHtcclxuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKGFjdGlvbjogYW55KSA9PiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFsncGVuZGluZyddKVxyXG4gIH1cclxuXHJcbiAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgIHJldHVybiBpc1BlbmRpbmcoKShhc3luY1RodW5rc1swXSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBhY3Rpb246IGFueVxyXG4gICk6IGFjdGlvbiBpcyBQZW5kaW5nQWN0aW9uRnJvbUFzeW5jVGh1bms8QXN5bmNUaHVua3NbbnVtYmVyXT4gPT4ge1xyXG4gICAgLy8gbm90ZTogdGhpcyB0eXBlIHdpbGwgYmUgY29ycmVjdCBiZWNhdXNlIHdlIGhhdmUgYXQgbGVhc3QgMSBhc3luY1RodW5rXHJcbiAgICBjb25zdCBtYXRjaGVyczogW01hdGNoZXI8YW55PiwgLi4uTWF0Y2hlcjxhbnk+W11dID0gYXN5bmNUaHVua3MubWFwKFxyXG4gICAgICBhc3luY1RodW5rID0+IGFzeW5jVGh1bmsucGVuZGluZ1xyXG4gICAgKSBhcyBhbnlcclxuXHJcbiAgICBjb25zdCBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mKC4uLm1hdGNoZXJzKVxyXG5cclxuICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVW5rbm93bkFzeW5jVGh1bmtSZWplY3RlZEFjdGlvbiA9IFJldHVyblR5cGU8XHJcbiAgQXN5bmNUaHVua1JlamVjdGVkQWN0aW9uQ3JlYXRvcjx1bmtub3duLCB1bmtub3duPlxyXG4+XHJcblxyXG5leHBvcnQgdHlwZSBSZWplY3RlZEFjdGlvbkZyb21Bc3luY1RodW5rPFxyXG4gIFQgZXh0ZW5kcyBBbnlBc3luY1RodW5rXHJcbj4gPSBBY3Rpb25Gcm9tTWF0Y2hlcjxUWydyZWplY3RlZCddPlxyXG5cclxuLyoqXHJcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY2hlY2tcclxuICogd2hldGhlciBhbiBhY3Rpb24gd2FzIGNyZWF0ZWQgYnkgYW4gYXN5bmMgdGh1bmsgYWN0aW9uIGNyZWF0b3IsIGFuZCB0aGF0XHJcbiAqIHRoZSBhY3Rpb24gaXMgcmVqZWN0ZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JlamVjdGVkKCk6IChcclxuICBhY3Rpb246IGFueVxyXG4pID0+IGFjdGlvbiBpcyBVbmtub3duQXN5bmNUaHVua1JlamVjdGVkQWN0aW9uXHJcbi8qKlxyXG4gKiBBIGhpZ2hlci1vcmRlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIGNoZWNrXHJcbiAqIHdoZXRoZXIgYW4gYWN0aW9uIGJlbG9uZ3MgdG8gb25lIG9mIHRoZSBwcm92aWRlZCBhc3luYyB0aHVuayBhY3Rpb24gY3JlYXRvcnMsXHJcbiAqIGFuZCB0aGF0IHRoZSBhY3Rpb24gaXMgcmVqZWN0ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBhc3luY1RodW5rcyAob3B0aW9uYWwpIFRoZSBhc3luYyB0aHVuayBhY3Rpb24gY3JlYXRvcnMgdG8gbWF0Y2ggYWdhaW5zdC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVqZWN0ZWQ8XHJcbiAgQXN5bmNUaHVua3MgZXh0ZW5kcyBbQW55QXN5bmNUaHVuaywgLi4uQW55QXN5bmNUaHVua1tdXVxyXG4+KFxyXG4gIC4uLmFzeW5jVGh1bmtzOiBBc3luY1RodW5rc1xyXG4pOiAoYWN0aW9uOiBhbnkpID0+IGFjdGlvbiBpcyBSZWplY3RlZEFjdGlvbkZyb21Bc3luY1RodW5rPEFzeW5jVGh1bmtzW251bWJlcl0+XHJcbi8qKlxyXG4gKiBUZXN0cyBpZiBgYWN0aW9uYCBpcyBhIHJlamVjdGVkIHRodW5rIGFjdGlvblxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWplY3RlZChcclxuICBhY3Rpb246IGFueVxyXG4pOiBhY3Rpb24gaXMgVW5rbm93bkFzeW5jVGh1bmtSZWplY3RlZEFjdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWplY3RlZDxcclxuICBBc3luY1RodW5rcyBleHRlbmRzIFtBbnlBc3luY1RodW5rLCAuLi5BbnlBc3luY1RodW5rW11dXHJcbj4oLi4uYXN5bmNUaHVua3M6IEFzeW5jVGh1bmtzIHwgW2FueV0pIHtcclxuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKGFjdGlvbjogYW55KSA9PiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFsncmVqZWN0ZWQnXSlcclxuICB9XHJcblxyXG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICByZXR1cm4gaXNSZWplY3RlZCgpKGFzeW5jVGh1bmtzWzBdKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGFjdGlvbjogYW55XHJcbiAgKTogYWN0aW9uIGlzIFJlamVjdGVkQWN0aW9uRnJvbUFzeW5jVGh1bms8QXN5bmNUaHVua3NbbnVtYmVyXT4gPT4ge1xyXG4gICAgLy8gbm90ZTogdGhpcyB0eXBlIHdpbGwgYmUgY29ycmVjdCBiZWNhdXNlIHdlIGhhdmUgYXQgbGVhc3QgMSBhc3luY1RodW5rXHJcbiAgICBjb25zdCBtYXRjaGVyczogW01hdGNoZXI8YW55PiwgLi4uTWF0Y2hlcjxhbnk+W11dID0gYXN5bmNUaHVua3MubWFwKFxyXG4gICAgICBhc3luY1RodW5rID0+IGFzeW5jVGh1bmsucmVqZWN0ZWRcclxuICAgICkgYXMgYW55XHJcblxyXG4gICAgY29uc3QgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZiguLi5tYXRjaGVycylcclxuXHJcbiAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVua25vd25Bc3luY1RodW5rUmVqZWN0ZWRXaXRoVmFsdWVBY3Rpb24gPSBSZXR1cm5UeXBlPFxyXG4gIEFzeW5jVGh1bmtSZWplY3RlZEFjdGlvbkNyZWF0b3I8dW5rbm93biwgdW5rbm93bj5cclxuPlxyXG5cclxuZXhwb3J0IHR5cGUgUmVqZWN0ZWRXaXRoVmFsdWVBY3Rpb25Gcm9tQXN5bmNUaHVuazxcclxuICBUIGV4dGVuZHMgQW55QXN5bmNUaHVua1xyXG4+ID0gQWN0aW9uRnJvbU1hdGNoZXI8VFsncmVqZWN0ZWQnXT4gJlxyXG4gIChUIGV4dGVuZHMgQXN5bmNUaHVuazxhbnksIGFueSwgeyByZWplY3RWYWx1ZTogaW5mZXIgUmVqZWN0ZWRWYWx1ZSB9PlxyXG4gICAgPyB7IHBheWxvYWQ6IFJlamVjdGVkVmFsdWUgfVxyXG4gICAgOiB1bmtub3duKVxyXG5cclxuLyoqXHJcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY2hlY2tcclxuICogd2hldGhlciBhbiBhY3Rpb24gd2FzIGNyZWF0ZWQgYnkgYW4gYXN5bmMgdGh1bmsgYWN0aW9uIGNyZWF0b3IsIGFuZCB0aGF0XHJcbiAqIHRoZSBhY3Rpb24gaXMgcmVqZWN0ZWQgd2l0aCB2YWx1ZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKTogKFxyXG4gIGFjdGlvbjogYW55XHJcbikgPT4gYWN0aW9uIGlzIFVua25vd25Bc3luY1RodW5rUmVqZWN0ZWRBY3Rpb25cclxuLyoqXHJcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY2hlY2tcclxuICogd2hldGhlciBhbiBhY3Rpb24gYmVsb25ncyB0byBvbmUgb2YgdGhlIHByb3ZpZGVkIGFzeW5jIHRodW5rIGFjdGlvbiBjcmVhdG9ycyxcclxuICogYW5kIHRoYXQgdGhlIGFjdGlvbiBpcyByZWplY3RlZCB3aXRoIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXN5bmNUaHVua3MgKG9wdGlvbmFsKSBUaGUgYXN5bmMgdGh1bmsgYWN0aW9uIGNyZWF0b3JzIHRvIG1hdGNoIGFnYWluc3QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1JlamVjdGVkV2l0aFZhbHVlPFxyXG4gIEFzeW5jVGh1bmtzIGV4dGVuZHMgW0FueUFzeW5jVGh1bmssIC4uLkFueUFzeW5jVGh1bmtbXV1cclxuPihcclxuICAuLi5hc3luY1RodW5rczogQXN5bmNUaHVua3NcclxuKTogKFxyXG4gIGFjdGlvbjogYW55XHJcbikgPT4gYWN0aW9uIGlzIFJlamVjdGVkV2l0aFZhbHVlQWN0aW9uRnJvbUFzeW5jVGh1bms8QXN5bmNUaHVua3NbbnVtYmVyXT5cclxuLyoqXHJcbiAqIFRlc3RzIGlmIGBhY3Rpb25gIGlzIGEgcmVqZWN0ZWQgdGh1bmsgYWN0aW9uIHdpdGggdmFsdWVcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVqZWN0ZWRXaXRoVmFsdWUoXHJcbiAgYWN0aW9uOiBhbnlcclxuKTogYWN0aW9uIGlzIFVua25vd25Bc3luY1RodW5rUmVqZWN0ZWRBY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVqZWN0ZWRXaXRoVmFsdWU8XHJcbiAgQXN5bmNUaHVua3MgZXh0ZW5kcyBbQW55QXN5bmNUaHVuaywgLi4uQW55QXN5bmNUaHVua1tdXVxyXG4+KC4uLmFzeW5jVGh1bmtzOiBBc3luY1RodW5rcyB8IFthbnldKSB7XHJcbiAgY29uc3QgaGFzRmxhZyA9IChhY3Rpb246IGFueSk6IGFjdGlvbiBpcyBhbnkgPT4ge1xyXG4gICAgcmV0dXJuIGFjdGlvbiAmJiBhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5yZWplY3RlZFdpdGhWYWx1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQoLi4uYXN5bmNUaHVua3MpLCBoYXNGbGFnKVxyXG5cclxuICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgcmV0dXJuIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKShhc3luY1RodW5rc1swXSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBhY3Rpb246IGFueVxyXG4gICk6IGFjdGlvbiBpcyBSZWplY3RlZEFjdGlvbkZyb21Bc3luY1RodW5rPEFzeW5jVGh1bmtzW251bWJlcl0+ID0+IHtcclxuICAgIGNvbnN0IGNvbWJpbmVkTWF0Y2hlciA9IGlzQWxsT2YoaXNSZWplY3RlZCguLi5hc3luY1RodW5rcyksIGhhc0ZsYWcpXHJcblxyXG4gICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVbmtub3duQXN5bmNUaHVua0Z1bGZpbGxlZEFjdGlvbiA9IFJldHVyblR5cGU8XHJcbiAgQXN5bmNUaHVua0Z1bGZpbGxlZEFjdGlvbkNyZWF0b3I8dW5rbm93biwgdW5rbm93bj5cclxuPlxyXG5cclxuZXhwb3J0IHR5cGUgRnVsZmlsbGVkQWN0aW9uRnJvbUFzeW5jVGh1bms8XHJcbiAgVCBleHRlbmRzIEFueUFzeW5jVGh1bmtcclxuPiA9IEFjdGlvbkZyb21NYXRjaGVyPFRbJ2Z1bGZpbGxlZCddPlxyXG5cclxuLyoqXHJcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY2hlY2tcclxuICogd2hldGhlciBhbiBhY3Rpb24gd2FzIGNyZWF0ZWQgYnkgYW4gYXN5bmMgdGh1bmsgYWN0aW9uIGNyZWF0b3IsIGFuZCB0aGF0XHJcbiAqIHRoZSBhY3Rpb24gaXMgZnVsZmlsbGVkLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNGdWxmaWxsZWQoKTogKFxyXG4gIGFjdGlvbjogYW55XHJcbikgPT4gYWN0aW9uIGlzIFVua25vd25Bc3luY1RodW5rRnVsZmlsbGVkQWN0aW9uXHJcbi8qKlxyXG4gKiBBIGhpZ2hlci1vcmRlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIGNoZWNrXHJcbiAqIHdoZXRoZXIgYW4gYWN0aW9uIGJlbG9uZ3MgdG8gb25lIG9mIHRoZSBwcm92aWRlZCBhc3luYyB0aHVuayBhY3Rpb24gY3JlYXRvcnMsXHJcbiAqIGFuZCB0aGF0IHRoZSBhY3Rpb24gaXMgZnVsZmlsbGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gYXN5bmNUaHVua3MgKG9wdGlvbmFsKSBUaGUgYXN5bmMgdGh1bmsgYWN0aW9uIGNyZWF0b3JzIHRvIG1hdGNoIGFnYWluc3QuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bGZpbGxlZDxcclxuICBBc3luY1RodW5rcyBleHRlbmRzIFtBbnlBc3luY1RodW5rLCAuLi5BbnlBc3luY1RodW5rW11dXHJcbj4oXHJcbiAgLi4uYXN5bmNUaHVua3M6IEFzeW5jVGh1bmtzXHJcbik6IChhY3Rpb246IGFueSkgPT4gYWN0aW9uIGlzIEZ1bGZpbGxlZEFjdGlvbkZyb21Bc3luY1RodW5rPEFzeW5jVGh1bmtzW251bWJlcl0+XHJcbi8qKlxyXG4gKiBUZXN0cyBpZiBgYWN0aW9uYCBpcyBhIGZ1bGZpbGxlZCB0aHVuayBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVsZmlsbGVkKFxyXG4gIGFjdGlvbjogYW55XHJcbik6IGFjdGlvbiBpcyBVbmtub3duQXN5bmNUaHVua0Z1bGZpbGxlZEFjdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdWxmaWxsZWQ8XHJcbiAgQXN5bmNUaHVua3MgZXh0ZW5kcyBbQW55QXN5bmNUaHVuaywgLi4uQW55QXN5bmNUaHVua1tdXVxyXG4+KC4uLmFzeW5jVGh1bmtzOiBBc3luY1RodW5rcyB8IFthbnldKSB7XHJcbiAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChhY3Rpb246IGFueSkgPT4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbJ2Z1bGZpbGxlZCddKVxyXG4gIH1cclxuXHJcbiAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgIHJldHVybiBpc0Z1bGZpbGxlZCgpKGFzeW5jVGh1bmtzWzBdKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGFjdGlvbjogYW55XHJcbiAgKTogYWN0aW9uIGlzIEZ1bGZpbGxlZEFjdGlvbkZyb21Bc3luY1RodW5rPEFzeW5jVGh1bmtzW251bWJlcl0+ID0+IHtcclxuICAgIC8vIG5vdGU6IHRoaXMgdHlwZSB3aWxsIGJlIGNvcnJlY3QgYmVjYXVzZSB3ZSBoYXZlIGF0IGxlYXN0IDEgYXN5bmNUaHVua1xyXG4gICAgY29uc3QgbWF0Y2hlcnM6IFtNYXRjaGVyPGFueT4sIC4uLk1hdGNoZXI8YW55PltdXSA9IGFzeW5jVGh1bmtzLm1hcChcclxuICAgICAgYXN5bmNUaHVuayA9PiBhc3luY1RodW5rLmZ1bGZpbGxlZFxyXG4gICAgKSBhcyBhbnlcclxuXHJcbiAgICBjb25zdCBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mKC4uLm1hdGNoZXJzKVxyXG5cclxuICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVW5rbm93bkFzeW5jVGh1bmtBY3Rpb24gPVxyXG4gIHwgVW5rbm93bkFzeW5jVGh1bmtQZW5kaW5nQWN0aW9uXHJcbiAgfCBVbmtub3duQXN5bmNUaHVua1JlamVjdGVkQWN0aW9uXHJcbiAgfCBVbmtub3duQXN5bmNUaHVua0Z1bGZpbGxlZEFjdGlvblxyXG5cclxuZXhwb3J0IHR5cGUgQW55QXN5bmNUaHVuayA9IEFzeW5jVGh1bms8YW55LCBhbnksIGFueT5cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbnNGcm9tQXN5bmNUaHVuazxUIGV4dGVuZHMgQW55QXN5bmNUaHVuaz4gPVxyXG4gIHwgQWN0aW9uRnJvbU1hdGNoZXI8VFsncGVuZGluZyddPlxyXG4gIHwgQWN0aW9uRnJvbU1hdGNoZXI8VFsnZnVsZmlsbGVkJ10+XHJcbiAgfCBBY3Rpb25Gcm9tTWF0Y2hlcjxUWydyZWplY3RlZCddPlxyXG5cclxuLyoqXHJcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY2hlY2tcclxuICogd2hldGhlciBhbiBhY3Rpb24gd2FzIGNyZWF0ZWQgYnkgYW4gYXN5bmMgdGh1bmsgYWN0aW9uIGNyZWF0b3IuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FzeW5jVGh1bmtBY3Rpb24oKTogKFxyXG4gIGFjdGlvbjogYW55XHJcbikgPT4gYWN0aW9uIGlzIFVua25vd25Bc3luY1RodW5rQWN0aW9uXHJcbi8qKlxyXG4gKiBBIGhpZ2hlci1vcmRlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIGNoZWNrXHJcbiAqIHdoZXRoZXIgYW4gYWN0aW9uIGJlbG9uZ3MgdG8gb25lIG9mIHRoZSBwcm92aWRlZCBhc3luYyB0aHVuayBhY3Rpb24gY3JlYXRvcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSBhc3luY1RodW5rcyAob3B0aW9uYWwpIFRoZSBhc3luYyB0aHVuayBhY3Rpb24gY3JlYXRvcnMgdG8gbWF0Y2ggYWdhaW5zdC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNUaHVua0FjdGlvbjxcclxuICBBc3luY1RodW5rcyBleHRlbmRzIFtBbnlBc3luY1RodW5rLCAuLi5BbnlBc3luY1RodW5rW11dXHJcbj4oXHJcbiAgLi4uYXN5bmNUaHVua3M6IEFzeW5jVGh1bmtzXHJcbik6IChhY3Rpb246IGFueSkgPT4gYWN0aW9uIGlzIEFjdGlvbnNGcm9tQXN5bmNUaHVuazxBc3luY1RodW5rc1tudW1iZXJdPlxyXG4vKipcclxuICogVGVzdHMgaWYgYGFjdGlvbmAgaXMgYSB0aHVuayBhY3Rpb25cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNUaHVua0FjdGlvbihcclxuICBhY3Rpb246IGFueVxyXG4pOiBhY3Rpb24gaXMgVW5rbm93bkFzeW5jVGh1bmtBY3Rpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNUaHVua0FjdGlvbjxcclxuICBBc3luY1RodW5rcyBleHRlbmRzIFtBbnlBc3luY1RodW5rLCAuLi5BbnlBc3luY1RodW5rW11dXHJcbj4oLi4uYXN5bmNUaHVua3M6IEFzeW5jVGh1bmtzIHwgW2FueV0pIHtcclxuICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKGFjdGlvbjogYW55KSA9PlxyXG4gICAgICBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFsncGVuZGluZycsICdmdWxmaWxsZWQnLCAncmVqZWN0ZWQnXSlcclxuICB9XHJcblxyXG4gIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICByZXR1cm4gaXNBc3luY1RodW5rQWN0aW9uKCkoYXN5bmNUaHVua3NbMF0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgYWN0aW9uOiBhbnlcclxuICApOiBhY3Rpb24gaXMgQWN0aW9uc0Zyb21Bc3luY1RodW5rPEFzeW5jVGh1bmtzW251bWJlcl0+ID0+IHtcclxuICAgIC8vIG5vdGU6IHRoaXMgdHlwZSB3aWxsIGJlIGNvcnJlY3QgYmVjYXVzZSB3ZSBoYXZlIGF0IGxlYXN0IDEgYXN5bmNUaHVua1xyXG4gICAgY29uc3QgbWF0Y2hlcnM6IFtNYXRjaGVyPGFueT4sIC4uLk1hdGNoZXI8YW55PltdXSA9IFtdIGFzIGFueVxyXG5cclxuICAgIGZvciAoY29uc3QgYXN5bmNUaHVuayBvZiBhc3luY1RodW5rcykge1xyXG4gICAgICBtYXRjaGVycy5wdXNoKFxyXG4gICAgICAgIGFzeW5jVGh1bmsucGVuZGluZyxcclxuICAgICAgICBhc3luY1RodW5rLnJlamVjdGVkLFxyXG4gICAgICAgIGFzeW5jVGh1bmsuZnVsZmlsbGVkXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mKC4uLm1hdGNoZXJzKVxyXG5cclxuICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBlbmFibGVFUzUgfSBmcm9tICdpbW1lcidcclxuZXhwb3J0ICogZnJvbSAncmVkdXgnXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVOZXh0U3RhdGUsIERyYWZ0LCBjdXJyZW50LCBmcmVlemUgfSBmcm9tICdpbW1lcidcclxuZXhwb3J0IHtcclxuICBjcmVhdGVTZWxlY3RvcixcclxuICBTZWxlY3RvcixcclxuICBPdXRwdXRQYXJhbWV0cmljU2VsZWN0b3IsXHJcbiAgT3V0cHV0U2VsZWN0b3IsXHJcbiAgUGFyYW1ldHJpY1NlbGVjdG9yXHJcbn0gZnJvbSAncmVzZWxlY3QnXHJcbmV4cG9ydCB7IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yIH0gZnJvbSAnLi9jcmVhdGVEcmFmdFNhZmVTZWxlY3RvcidcclxuZXhwb3J0IHsgVGh1bmtBY3Rpb24sIFRodW5rRGlzcGF0Y2ggfSBmcm9tICdyZWR1eC10aHVuaydcclxuXHJcbi8vIFdlIGRlbGliZXJhdGVseSBlbmFibGUgSW1tZXIncyBFUzUgc3VwcG9ydCwgb24gdGhlIGdyb3VuZHMgdGhhdFxyXG4vLyB3ZSBhc3N1bWUgUlRLIHdpbGwgYmUgdXNlZCB3aXRoIFJlYWN0IE5hdGl2ZSBhbmQgb3RoZXIgUHJveHktbGVzc1xyXG4vLyBlbnZpcm9ubWVudHMuICBJbiBhZGRpdGlvbiwgdGhhdCdzIGhvdyBJbW1lciA0IGJlaGF2ZWQsIGFuZCBzaW5jZVxyXG4vLyB3ZSB3YW50IHRvIHNoaXAgdGhpcyBpbiBhbiBSVEsgbWlub3IsIHdlIHNob3VsZCBrZWVwIHRoZSBzYW1lIGJlaGF2aW9yLlxyXG5lbmFibGVFUzUoKVxyXG5cclxuZXhwb3J0IHtcclxuICAvLyBqc1xyXG4gIGNvbmZpZ3VyZVN0b3JlLFxyXG4gIC8vIHR5cGVzXHJcbiAgQ29uZmlndXJlRW5oYW5jZXJzQ2FsbGJhY2ssXHJcbiAgQ29uZmlndXJlU3RvcmVPcHRpb25zLFxyXG4gIEVuaGFuY2VkU3RvcmVcclxufSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJ1xyXG5leHBvcnQge1xyXG4gIC8vIGpzXHJcbiAgY3JlYXRlQWN0aW9uLFxyXG4gIGdldFR5cGUsXHJcbiAgLy8gdHlwZXNcclxuICBQYXlsb2FkQWN0aW9uLFxyXG4gIFBheWxvYWRBY3Rpb25DcmVhdG9yLFxyXG4gIEFjdGlvbkNyZWF0b3JXaXRoTm9uSW5mZXJyYWJsZVBheWxvYWQsXHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhPcHRpb25hbFBheWxvYWQsXHJcbiAgQWN0aW9uQ3JlYXRvcldpdGhQYXlsb2FkLFxyXG4gIEFjdGlvbkNyZWF0b3JXaXRob3V0UGF5bG9hZCxcclxuICBBY3Rpb25DcmVhdG9yV2l0aFByZXBhcmVkUGF5bG9hZCxcclxuICBQcmVwYXJlQWN0aW9uXHJcbn0gZnJvbSAnLi9jcmVhdGVBY3Rpb24nXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBjcmVhdGVSZWR1Y2VyLFxyXG4gIC8vIHR5cGVzXHJcbiAgQWN0aW9ucyxcclxuICBDYXNlUmVkdWNlcixcclxuICBDYXNlUmVkdWNlcnNcclxufSBmcm9tICcuL2NyZWF0ZVJlZHVjZXInXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBjcmVhdGVTbGljZSxcclxuICAvLyB0eXBlc1xyXG4gIENyZWF0ZVNsaWNlT3B0aW9ucyxcclxuICBTbGljZSxcclxuICBDYXNlUmVkdWNlckFjdGlvbnMsXHJcbiAgU2xpY2VDYXNlUmVkdWNlcnMsXHJcbiAgVmFsaWRhdGVTbGljZUNhc2VSZWR1Y2VycyxcclxuICBDYXNlUmVkdWNlcldpdGhQcmVwYXJlLFxyXG4gIFNsaWNlQWN0aW9uQ3JlYXRvclxyXG59IGZyb20gJy4vY3JlYXRlU2xpY2UnXHJcbmV4cG9ydCB7XHJcbiAgLy8ganNcclxuICBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsXHJcbiAgaXNJbW11dGFibGVEZWZhdWx0LFxyXG4gIC8vIHR5cGVzXHJcbiAgSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9uc1xyXG59IGZyb20gJy4vaW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlJ1xyXG5leHBvcnQge1xyXG4gIC8vIGpzXHJcbiAgY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLFxyXG4gIGZpbmROb25TZXJpYWxpemFibGVWYWx1ZSxcclxuICBpc1BsYWluLFxyXG4gIC8vIHR5cGVzXHJcbiAgU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlT3B0aW9uc1xyXG59IGZyb20gJy4vc2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlJ1xyXG5leHBvcnQge1xyXG4gIC8vIGpzXHJcbiAgZ2V0RGVmYXVsdE1pZGRsZXdhcmVcclxufSBmcm9tICcuL2dldERlZmF1bHRNaWRkbGV3YXJlJ1xyXG5leHBvcnQge1xyXG4gIC8vIHR5cGVzXHJcbiAgQWN0aW9uUmVkdWNlck1hcEJ1aWxkZXJcclxufSBmcm9tICcuL21hcEJ1aWxkZXJzJ1xyXG5leHBvcnQgeyBNaWRkbGV3YXJlQXJyYXkgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRW50aXR5QWRhcHRlciB9IGZyb20gJy4vZW50aXRpZXMvY3JlYXRlX2FkYXB0ZXInXHJcbmV4cG9ydCB7XHJcbiAgRGljdGlvbmFyeSxcclxuICBFbnRpdHlTdGF0ZSxcclxuICBFbnRpdHlBZGFwdGVyLFxyXG4gIEVudGl0eVNlbGVjdG9ycyxcclxuICBFbnRpdHlTdGF0ZUFkYXB0ZXIsXHJcbiAgRW50aXR5SWQsXHJcbiAgVXBkYXRlLFxyXG4gIElkU2VsZWN0b3IsXHJcbiAgQ29tcGFyZXJcclxufSBmcm9tICcuL2VudGl0aWVzL21vZGVscydcclxuXHJcbmV4cG9ydCB7XHJcbiAgQXN5bmNUaHVuayxcclxuICBBc3luY1RodW5rQWN0aW9uLFxyXG4gIEFzeW5jVGh1bmtQYXlsb2FkQ3JlYXRvclJldHVyblZhbHVlLFxyXG4gIEFzeW5jVGh1bmtQYXlsb2FkQ3JlYXRvcixcclxuICBjcmVhdGVBc3luY1RodW5rLFxyXG4gIHVud3JhcFJlc3VsdCxcclxuICBTZXJpYWxpemVkRXJyb3JcclxufSBmcm9tICcuL2NyZWF0ZUFzeW5jVGh1bmsnXHJcblxyXG5leHBvcnQge1xyXG4gIC8vIGpzXHJcbiAgaXNBbGxPZixcclxuICBpc0FueU9mLFxyXG4gIGlzUGVuZGluZyxcclxuICBpc1JlamVjdGVkLFxyXG4gIGlzRnVsZmlsbGVkLFxyXG4gIGlzQXN5bmNUaHVua0FjdGlvbixcclxuICBpc1JlamVjdGVkV2l0aFZhbHVlLFxyXG4gIC8vIHR5cGVzXHJcbiAgQWN0aW9uTWF0Y2hpbmdBbGxPZixcclxuICBBY3Rpb25NYXRjaGluZ0FueU9mXHJcbn0gZnJvbSAnLi9tYXRjaGVycydcclxuXHJcbmV4cG9ydCB7IG5hbm9pZCB9IGZyb20gJy4vbmFub2lkJ1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc1BsYWluT2JqZWN0IH0gZnJvbSAnLi9pc1BsYWluT2JqZWN0J1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsImNvbnN0IGVycm9ycyA9IHtcblx0MDogXCJJbGxlZ2FsIHN0YXRlXCIsXG5cdDE6IFwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIixcblx0MjogXCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLFxuXHQzKGRhdGE6IGFueSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIgK1xuXHRcdFx0ZGF0YVxuXHRcdClcblx0fSxcblx0NDogXCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLFxuXHQ1OiBcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLFxuXHQ2OiBcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLFxuXHQ3OiBcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLFxuXHQ4OiBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIixcblx0OTogXCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsXG5cdDEwOiBcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLFxuXHQxMTogXCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuXHQxMjogXCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuXHQxMzogXCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIixcblx0MTQ6IFwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLFxuXHQxNShwYXRoOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIiArIHBhdGhcblx0fSxcblx0MTY6ICdTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJyxcblx0MTcob3A6IHN0cmluZykge1xuXHRcdHJldHVybiBcIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIgKyBvcFxuXHR9LFxuXHQxOChwbHVnaW46IHN0cmluZykge1xuXHRcdHJldHVybiBgVGhlIHBsdWdpbiBmb3IgJyR7cGx1Z2lufScgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIFxcYGVuYWJsZSR7cGx1Z2lufSgpXFxgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uYFxuXHR9LFxuXHQyMDogXCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsXG5cdDIxKHRoaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gYHByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJyR7dGhpbmd9J2Bcblx0fSxcblx0MjIodGhpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBgJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiAke3RoaW5nfWBcblx0fSxcblx0MjModGhpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBgJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogJHt0aGluZ31gXG5cdH1cbn0gYXMgY29uc3RcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZShlcnJvcjoga2V5b2YgdHlwZW9mIGVycm9ycywgLi4uYXJnczogYW55W10pOiBuZXZlciB7XG5cdGlmIChfX0RFVl9fKSB7XG5cdFx0Y29uc3QgZSA9IGVycm9yc1tlcnJvcl1cblx0XHRjb25zdCBtc2cgPSAhZVxuXHRcdFx0PyBcInVua25vd24gZXJyb3IgbnI6IFwiICsgZXJyb3Jcblx0XHRcdDogdHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIlxuXHRcdFx0PyBlLmFwcGx5KG51bGwsIGFyZ3MgYXMgYW55KVxuXHRcdFx0OiBlXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBbSW1tZXJdICR7bXNnfWApXG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdGBbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiAke2Vycm9yfSR7XG5cdFx0XHRhcmdzLmxlbmd0aCA/IFwiIFwiICsgYXJncy5tYXAocyA9PiBgJyR7c30nYCkuam9pbihcIixcIikgOiBcIlwiXG5cdFx0fS4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZmBcblx0KVxufVxuIiwiaW1wb3J0IHtcblx0RFJBRlRfU1RBVEUsXG5cdERSQUZUQUJMRSxcblx0aGFzU2V0LFxuXHRPYmplY3Rpc2gsXG5cdERyYWZ0ZWQsXG5cdEFueU9iamVjdCxcblx0QW55TWFwLFxuXHRBbnlTZXQsXG5cdEltbWVyU3RhdGUsXG5cdGhhc01hcCxcblx0QXJjaHR5cGVPYmplY3QsXG5cdEFyY2h0eXBlQXJyYXksXG5cdEFyY2h0eXBlTWFwLFxuXHRBcmNodHlwZVNldCxcblx0ZGllXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIEltbWVyIGRyYWZ0ICovXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNEcmFmdCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdHJldHVybiAhIXZhbHVlICYmICEhdmFsdWVbRFJBRlRfU1RBVEVdXG59XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGNhbiBiZSBkcmFmdGVkIGJ5IEltbWVyICovXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNEcmFmdGFibGUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2Vcblx0cmV0dXJuIChcblx0XHRpc1BsYWluT2JqZWN0KHZhbHVlKSB8fFxuXHRcdEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG5cdFx0ISF2YWx1ZVtEUkFGVEFCTEVdIHx8XG5cdFx0ISF2YWx1ZS5jb25zdHJ1Y3RvcltEUkFGVEFCTEVdIHx8XG5cdFx0aXNNYXAodmFsdWUpIHx8XG5cdFx0aXNTZXQodmFsdWUpXG5cdClcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlXG5cdGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKVxuXHRyZXR1cm4gIXByb3RvIHx8IHByb3RvID09PSBPYmplY3QucHJvdG90eXBlXG59XG5cbi8qKiBHZXQgdGhlIHVuZGVybHlpbmcgb2JqZWN0IHRoYXQgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIGRyYWZ0ICovXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gb3JpZ2luYWw8VD4odmFsdWU6IFQpOiBUIHwgdW5kZWZpbmVkXG5leHBvcnQgZnVuY3Rpb24gb3JpZ2luYWwodmFsdWU6IERyYWZ0ZWQ8YW55Pik6IGFueSB7XG5cdGlmICghaXNEcmFmdCh2YWx1ZSkpIGRpZSgyMywgdmFsdWUpXG5cdHJldHVybiB2YWx1ZVtEUkFGVF9TVEFURV0uYmFzZV9cbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGNvbnN0IG93bktleXM6ICh0YXJnZXQ6IEFueU9iamVjdCkgPT4gUHJvcGVydHlLZXlbXSA9XG5cdHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Qub3duS2V5c1xuXHRcdD8gUmVmbGVjdC5vd25LZXlzXG5cdFx0OiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gXCJ1bmRlZmluZWRcIlxuXHRcdD8gb2JqID0+XG5cdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuY29uY2F0KFxuXHRcdFx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSBhcyBhbnlcblx0XHRcdFx0KVxuXHRcdDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcblxuZXhwb3J0IGNvbnN0IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPVxuXHRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fFxuXHRmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldDogYW55KSB7XG5cdFx0Ly8gUG9seWZpbGwgbmVlZGVkIGZvciBIZXJtZXMgYW5kIElFLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2hlcm1lcy9pc3N1ZXMvMjc0XG5cdFx0Y29uc3QgcmVzOiBhbnkgPSB7fVxuXHRcdG93bktleXModGFyZ2V0KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRyZXNba2V5XSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpXG5cdFx0fSlcblx0XHRyZXR1cm4gcmVzXG5cdH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2g8VCBleHRlbmRzIE9iamVjdGlzaD4oXG5cdG9iajogVCxcblx0aXRlcjogKGtleTogc3RyaW5nIHwgbnVtYmVyLCB2YWx1ZTogYW55LCBzb3VyY2U6IFQpID0+IHZvaWQsXG5cdGVudW1lcmFibGVPbmx5PzogYm9vbGVhblxuKTogdm9pZFxuZXhwb3J0IGZ1bmN0aW9uIGVhY2gob2JqOiBhbnksIGl0ZXI6IGFueSwgZW51bWVyYWJsZU9ubHkgPSBmYWxzZSkge1xuXHRpZiAoZ2V0QXJjaHR5cGUob2JqKSA9PT0gQXJjaHR5cGVPYmplY3QpIHtcblx0XHQ7KGVudW1lcmFibGVPbmx5ID8gT2JqZWN0LmtleXMgOiBvd25LZXlzKShvYmopLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdGlmICghZW51bWVyYWJsZU9ubHkgfHwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIikgaXRlcihrZXksIG9ialtrZXldLCBvYmopXG5cdFx0fSlcblx0fSBlbHNlIHtcblx0XHRvYmouZm9yRWFjaCgoZW50cnk6IGFueSwgaW5kZXg6IGFueSkgPT4gaXRlcihpbmRleCwgZW50cnksIG9iaikpXG5cdH1cbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFyY2h0eXBlKHRoaW5nOiBhbnkpOiAwIHwgMSB8IDIgfCAzIHtcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0Y29uc3Qgc3RhdGU6IHVuZGVmaW5lZCB8IEltbWVyU3RhdGUgPSB0aGluZ1tEUkFGVF9TVEFURV1cblx0cmV0dXJuIHN0YXRlXG5cdFx0PyBzdGF0ZS50eXBlXyA+IDNcblx0XHRcdD8gc3RhdGUudHlwZV8gLSA0IC8vIGNhdXNlIE9iamVjdCBhbmQgQXJyYXkgbWFwIGJhY2sgZnJvbSA0IGFuZCA1XG5cdFx0XHQ6IChzdGF0ZS50eXBlXyBhcyBhbnkpIC8vIG90aGVycyBhcmUgdGhlIHNhbWVcblx0XHQ6IEFycmF5LmlzQXJyYXkodGhpbmcpXG5cdFx0PyBBcmNodHlwZUFycmF5XG5cdFx0OiBpc01hcCh0aGluZylcblx0XHQ/IEFyY2h0eXBlTWFwXG5cdFx0OiBpc1NldCh0aGluZylcblx0XHQ/IEFyY2h0eXBlU2V0XG5cdFx0OiBBcmNodHlwZU9iamVjdFxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaGFzKHRoaW5nOiBhbnksIHByb3A6IFByb3BlcnR5S2V5KTogYm9vbGVhbiB7XG5cdHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IEFyY2h0eXBlTWFwXG5cdFx0PyB0aGluZy5oYXMocHJvcClcblx0XHQ6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGluZywgcHJvcClcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh0aGluZzogQW55TWFwIHwgQW55T2JqZWN0LCBwcm9wOiBQcm9wZXJ0eUtleSk6IGFueSB7XG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gQXJjaHR5cGVNYXAgPyB0aGluZy5nZXQocHJvcCkgOiB0aGluZ1twcm9wXVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gc2V0KHRoaW5nOiBhbnksIHByb3BPck9sZFZhbHVlOiBQcm9wZXJ0eUtleSwgdmFsdWU6IGFueSkge1xuXHRjb25zdCB0ID0gZ2V0QXJjaHR5cGUodGhpbmcpXG5cdGlmICh0ID09PSBBcmNodHlwZU1hcCkgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSlcblx0ZWxzZSBpZiAodCA9PT0gQXJjaHR5cGVTZXQpIHtcblx0XHR0aGluZy5kZWxldGUocHJvcE9yT2xkVmFsdWUpXG5cdFx0dGhpbmcuYWRkKHZhbHVlKVxuXHR9IGVsc2UgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWVcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGlzKHg6IGFueSwgeTogYW55KTogYm9vbGVhbiB7XG5cdC8vIEZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvYzY5OTA0YTUxMWI5MDAyNjY5MzUxNjgyMjMwNjNkZDg3NzJkZmM0MC9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuXHRpZiAoeCA9PT0geSkge1xuXHRcdHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHlcblx0fVxufVxuXG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gaXNNYXAodGFyZ2V0OiBhbnkpOiB0YXJnZXQgaXMgQW55TWFwIHtcblx0cmV0dXJuIGhhc01hcCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBNYXBcbn1cblxuLyojX19QVVJFX18qL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2V0KHRhcmdldDogYW55KTogdGFyZ2V0IGlzIEFueVNldCB7XG5cdHJldHVybiBoYXNTZXQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU2V0XG59XG4vKiNfX1BVUkVfXyovXG5leHBvcnQgZnVuY3Rpb24gbGF0ZXN0KHN0YXRlOiBJbW1lclN0YXRlKTogYW55IHtcblx0cmV0dXJuIHN0YXRlLmNvcHlfIHx8IHN0YXRlLmJhc2VfXG59XG5cbi8qI19fUFVSRV9fKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93Q29weShiYXNlOiBhbnkpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKVxuXHRjb25zdCBkZXNjcmlwdG9ycyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSlcblx0ZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFIGFzIGFueV1cblx0bGV0IGtleXMgPSBvd25LZXlzKGRlc2NyaXB0b3JzKVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBrZXk6IGFueSA9IGtleXNbaV1cblx0XHRjb25zdCBkZXNjID0gZGVzY3JpcHRvcnNba2V5XVxuXHRcdGlmIChkZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuXHRcdFx0ZGVzYy53cml0YWJsZSA9IHRydWVcblx0XHRcdGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZVxuXHRcdH1cblx0XHQvLyBsaWtlIG9iamVjdC5hc3NpZ24sIHdlIHdpbGwgcmVhZCBhbnkgX293bl8sIGdldC9zZXQgYWNjZXNzb3JzLiBUaGlzIGhlbHBzIGluIGRlYWxpbmdcblx0XHQvLyB3aXRoIGxpYnJhcmllcyB0aGF0IHRyYXAgdmFsdWVzLCBsaWtlIG1vYnggb3IgdnVlXG5cdFx0Ly8gdW5saWtlIG9iamVjdC5hc3NpZ24sIG5vbi1lbnVtZXJhYmxlcyB3aWxsIGJlIGNvcGllZCBhcyB3ZWxsXG5cdFx0aWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KVxuXHRcdFx0ZGVzY3JpcHRvcnNba2V5XSA9IHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSwgLy8gY291bGQgbGl2ZSB3aXRoICEhZGVzYy5zZXQgYXMgd2VsbCBoZXJlLi4uXG5cdFx0XHRcdGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcblx0XHRcdFx0dmFsdWU6IGJhc2Vba2V5XVxuXHRcdFx0fVxuXHR9XG5cdHJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSwgZGVzY3JpcHRvcnMpXG59XG5cbi8qKlxuICogRnJlZXplcyBkcmFmdGFibGUgb2JqZWN0cy4gUmV0dXJucyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICogQnkgZGVmYXVsdCBmcmVlemVzIHNoYWxsb3dseSwgYnV0IGlmIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgYHRydWVgIGl0IHdpbGwgZnJlZXplIHJlY3Vyc2l2ZWx5LlxuICpcbiAqIEBwYXJhbSBvYmpcbiAqIEBwYXJhbSBkZWVwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcmVlemU8VD4ob2JqOiBULCBkZWVwPzogYm9vbGVhbik6IFRcbmV4cG9ydCBmdW5jdGlvbiBmcmVlemU8VD4ob2JqOiBhbnksIGRlZXA6IGJvb2xlYW4gPSBmYWxzZSk6IFQge1xuXHRpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpIHJldHVybiBvYmpcblx0aWYgKGdldEFyY2h0eXBlKG9iaikgPiAxIC8qIE1hcCBvciBTZXQgKi8pIHtcblx0XHRvYmouc2V0ID0gb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnMgYXMgYW55XG5cdH1cblx0T2JqZWN0LmZyZWV6ZShvYmopXG5cdGlmIChkZWVwKSBlYWNoKG9iaiwgKGtleSwgdmFsdWUpID0+IGZyZWV6ZSh2YWx1ZSwgdHJ1ZSksIHRydWUpXG5cdHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuXHRkaWUoMilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvemVuKG9iajogYW55KTogYm9vbGVhbiB7XG5cdGlmIChvYmogPT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSByZXR1cm4gdHJ1ZVxuXHQvLyBTZWUgIzYwMCwgSUUgZGllcyBvbiBub24tb2JqZWN0cyBpbiBPYmplY3QuaXNGcm96ZW5cblx0cmV0dXJuIE9iamVjdC5pc0Zyb3plbihvYmopXG59XG4iLCJpbXBvcnQge1xuXHRTZXRTdGF0ZSxcblx0SW1tZXJTY29wZSxcblx0UHJveHlPYmplY3RTdGF0ZSxcblx0UHJveHlBcnJheVN0YXRlLFxuXHRFUzVPYmplY3RTdGF0ZSxcblx0RVM1QXJyYXlTdGF0ZSxcblx0TWFwU3RhdGUsXG5cdERSQUZUX1NUQVRFXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmV4cG9ydCB0eXBlIE9iamVjdGlzaCA9IEFueU9iamVjdCB8IEFueUFycmF5IHwgQW55TWFwIHwgQW55U2V0XG5leHBvcnQgdHlwZSBPYmplY3Rpc2hOb1NldCA9IEFueU9iamVjdCB8IEFueUFycmF5IHwgQW55TWFwXG5cbmV4cG9ydCB0eXBlIEFueU9iamVjdCA9IHtba2V5OiBzdHJpbmddOiBhbnl9XG5leHBvcnQgdHlwZSBBbnlBcnJheSA9IEFycmF5PGFueT5cbmV4cG9ydCB0eXBlIEFueVNldCA9IFNldDxhbnk+XG5leHBvcnQgdHlwZSBBbnlNYXAgPSBNYXA8YW55LCBhbnk+XG5cbmV4cG9ydCBjb25zdCBBcmNodHlwZU9iamVjdCA9IDBcbmV4cG9ydCBjb25zdCBBcmNodHlwZUFycmF5ID0gMVxuZXhwb3J0IGNvbnN0IEFyY2h0eXBlTWFwID0gMlxuZXhwb3J0IGNvbnN0IEFyY2h0eXBlU2V0ID0gM1xuXG5leHBvcnQgY29uc3QgUHJveHlUeXBlUHJveHlPYmplY3QgPSAwXG5leHBvcnQgY29uc3QgUHJveHlUeXBlUHJveHlBcnJheSA9IDFcbmV4cG9ydCBjb25zdCBQcm94eVR5cGVFUzVPYmplY3QgPSA0XG5leHBvcnQgY29uc3QgUHJveHlUeXBlRVM1QXJyYXkgPSA1XG5leHBvcnQgY29uc3QgUHJveHlUeXBlTWFwID0gMlxuZXhwb3J0IGNvbnN0IFByb3h5VHlwZVNldCA9IDNcblxuZXhwb3J0IGludGVyZmFjZSBJbW1lckJhc2VTdGF0ZSB7XG5cdHBhcmVudF8/OiBJbW1lclN0YXRlXG5cdHNjb3BlXzogSW1tZXJTY29wZVxuXHRtb2RpZmllZF86IGJvb2xlYW5cblx0ZmluYWxpemVkXzogYm9vbGVhblxuXHRpc01hbnVhbF86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgSW1tZXJTdGF0ZSA9XG5cdHwgUHJveHlPYmplY3RTdGF0ZVxuXHR8IFByb3h5QXJyYXlTdGF0ZVxuXHR8IEVTNU9iamVjdFN0YXRlXG5cdHwgRVM1QXJyYXlTdGF0ZVxuXHR8IE1hcFN0YXRlXG5cdHwgU2V0U3RhdGVcblxuLy8gVGhlIF9pbnRlcm5hbF8gdHlwZSB1c2VkIGZvciBkcmFmdHMgKG5vdCB0byBiZSBjb25mdXNlZCB3aXRoIERyYWZ0LCB3aGljaCBpcyBwdWJsaWMgZmFjaW5nKVxuZXhwb3J0IHR5cGUgRHJhZnRlZDxCYXNlID0gYW55LCBUIGV4dGVuZHMgSW1tZXJTdGF0ZSA9IEltbWVyU3RhdGU+ID0ge1xuXHRbRFJBRlRfU1RBVEVdOiBUXG59ICYgQmFzZVxuIiwiaW1wb3J0IHtcblx0SW1tZXJTdGF0ZSxcblx0UGF0Y2gsXG5cdEltbWVyU2NvcGUsXG5cdERyYWZ0ZWQsXG5cdEFueU9iamVjdCxcblx0SW1tZXJCYXNlU3RhdGUsXG5cdEFueU1hcCxcblx0QW55U2V0LFxuXHRQcm94eVR5cGVFUzVBcnJheSxcblx0UHJveHlUeXBlRVM1T2JqZWN0LFxuXHRQcm94eVR5cGVNYXAsXG5cdFByb3h5VHlwZVNldCxcblx0ZGllXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbi8qKiBQbHVnaW4gdXRpbGl0aWVzICovXG5jb25zdCBwbHVnaW5zOiB7XG5cdFBhdGNoZXM/OiB7XG5cdFx0Z2VuZXJhdGVQYXRjaGVzXyhcblx0XHRcdHN0YXRlOiBJbW1lclN0YXRlLFxuXHRcdFx0YmFzZVBhdGg6IFBhdGNoUGF0aCxcblx0XHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHRcdCk6IHZvaWRcblx0XHRnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG5cdFx0XHRyb290U3RhdGU6IEltbWVyU3RhdGUsXG5cdFx0XHRyZXBsYWNlbWVudDogYW55LFxuXHRcdFx0cGF0Y2hlczogUGF0Y2hbXSxcblx0XHRcdGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdFx0KTogdm9pZFxuXHRcdGFwcGx5UGF0Y2hlc188VD4oZHJhZnQ6IFQsIHBhdGNoZXM6IFBhdGNoW10pOiBUXG5cdH1cblx0RVM1Pzoge1xuXHRcdHdpbGxGaW5hbGl6ZUVTNV8oc2NvcGU6IEltbWVyU2NvcGUsIHJlc3VsdDogYW55LCBpc1JlcGxhY2VkOiBib29sZWFuKTogdm9pZFxuXHRcdGNyZWF0ZUVTNVByb3h5XzxUPihcblx0XHRcdGJhc2U6IFQsXG5cdFx0XHRwYXJlbnQ/OiBJbW1lclN0YXRlXG5cdFx0KTogRHJhZnRlZDxULCBFUzVPYmplY3RTdGF0ZSB8IEVTNUFycmF5U3RhdGU+XG5cdFx0aGFzQ2hhbmdlc18oc3RhdGU6IEVTNUFycmF5U3RhdGUgfCBFUzVPYmplY3RTdGF0ZSk6IGJvb2xlYW5cblx0fVxuXHRNYXBTZXQ/OiB7XG5cdFx0cHJveHlNYXBfPFQgZXh0ZW5kcyBBbnlNYXA+KHRhcmdldDogVCwgcGFyZW50PzogSW1tZXJTdGF0ZSk6IFRcblx0XHRwcm94eVNldF88VCBleHRlbmRzIEFueVNldD4odGFyZ2V0OiBULCBwYXJlbnQ/OiBJbW1lclN0YXRlKTogVFxuXHR9XG59ID0ge31cblxudHlwZSBQbHVnaW5zID0gdHlwZW9mIHBsdWdpbnNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpbjxLIGV4dGVuZHMga2V5b2YgUGx1Z2lucz4oXG5cdHBsdWdpbktleTogS1xuKTogRXhjbHVkZTxQbHVnaW5zW0tdLCB1bmRlZmluZWQ+IHtcblx0Y29uc3QgcGx1Z2luID0gcGx1Z2luc1twbHVnaW5LZXldXG5cdGlmICghcGx1Z2luKSB7XG5cdFx0ZGllKDE4LCBwbHVnaW5LZXkpXG5cdH1cblx0Ly8gQHRzLWlnbm9yZVxuXHRyZXR1cm4gcGx1Z2luXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGx1Z2luPEsgZXh0ZW5kcyBrZXlvZiBQbHVnaW5zPihcblx0cGx1Z2luS2V5OiBLLFxuXHRpbXBsZW1lbnRhdGlvbjogUGx1Z2luc1tLXVxuKTogdm9pZCB7XG5cdGlmICghcGx1Z2luc1twbHVnaW5LZXldKSBwbHVnaW5zW3BsdWdpbktleV0gPSBpbXBsZW1lbnRhdGlvblxufVxuXG4vKiogRVM1IFBsdWdpbiAqL1xuXG5pbnRlcmZhY2UgRVM1QmFzZVN0YXRlIGV4dGVuZHMgSW1tZXJCYXNlU3RhdGUge1xuXHRhc3NpZ25lZF86IHtba2V5OiBzdHJpbmddOiBhbnl9XG5cdHBhcmVudF8/OiBJbW1lclN0YXRlXG5cdHJldm9rZWRfOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRVM1T2JqZWN0U3RhdGUgZXh0ZW5kcyBFUzVCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZUVTNU9iamVjdFxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55T2JqZWN0LCBFUzVPYmplY3RTdGF0ZT5cblx0YmFzZV86IEFueU9iamVjdFxuXHRjb3B5XzogQW55T2JqZWN0IHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVTNUFycmF5U3RhdGUgZXh0ZW5kcyBFUzVCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZUVTNUFycmF5XG5cdGRyYWZ0XzogRHJhZnRlZDxBbnlPYmplY3QsIEVTNUFycmF5U3RhdGU+XG5cdGJhc2VfOiBhbnlcblx0Y29weV86IGFueVxufVxuXG4vKiogTWFwIC8gU2V0IHBsdWdpbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcFN0YXRlIGV4dGVuZHMgSW1tZXJCYXNlU3RhdGUge1xuXHR0eXBlXzogdHlwZW9mIFByb3h5VHlwZU1hcFxuXHRjb3B5XzogQW55TWFwIHwgdW5kZWZpbmVkXG5cdGFzc2lnbmVkXzogTWFwPGFueSwgYm9vbGVhbj4gfCB1bmRlZmluZWRcblx0YmFzZV86IEFueU1hcFxuXHRyZXZva2VkXzogYm9vbGVhblxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55TWFwLCBNYXBTdGF0ZT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRTdGF0ZSBleHRlbmRzIEltbWVyQmFzZVN0YXRlIHtcblx0dHlwZV86IHR5cGVvZiBQcm94eVR5cGVTZXRcblx0Y29weV86IEFueVNldCB8IHVuZGVmaW5lZFxuXHRiYXNlXzogQW55U2V0XG5cdGRyYWZ0c186IE1hcDxhbnksIERyYWZ0ZWQ+IC8vIG1hcHMgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHRoZSBkcmFmdCB2YWx1ZSBpbiB0aGUgbmV3IHNldFxuXHRyZXZva2VkXzogYm9vbGVhblxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55U2V0LCBTZXRTdGF0ZT5cbn1cblxuLyoqIFBhdGNoZXMgcGx1Z2luICovXG5cbmV4cG9ydCB0eXBlIFBhdGNoUGF0aCA9IChzdHJpbmcgfCBudW1iZXIpW11cbiIsImltcG9ydCB7XG5cdFBhdGNoLFxuXHRQYXRjaExpc3RlbmVyLFxuXHREcmFmdGVkLFxuXHRJbW1lcixcblx0RFJBRlRfU1RBVEUsXG5cdEltbWVyU3RhdGUsXG5cdFByb3h5VHlwZVByb3h5T2JqZWN0LFxuXHRQcm94eVR5cGVQcm94eUFycmF5LFxuXHRnZXRQbHVnaW5cbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcbmltcG9ydCB7ZGllfSBmcm9tIFwiLi4vdXRpbHMvZXJyb3JzXCJcblxuLyoqIEVhY2ggc2NvcGUgcmVwcmVzZW50cyBhIGBwcm9kdWNlYCBjYWxsLiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEltbWVyU2NvcGUge1xuXHRwYXRjaGVzXz86IFBhdGNoW11cblx0aW52ZXJzZVBhdGNoZXNfPzogUGF0Y2hbXVxuXHRjYW5BdXRvRnJlZXplXzogYm9vbGVhblxuXHRkcmFmdHNfOiBhbnlbXVxuXHRwYXJlbnRfPzogSW1tZXJTY29wZVxuXHRwYXRjaExpc3RlbmVyXz86IFBhdGNoTGlzdGVuZXJcblx0aW1tZXJfOiBJbW1lclxuXHR1bmZpbmFsaXplZERyYWZ0c186IG51bWJlclxufVxuXG5sZXQgY3VycmVudFNjb3BlOiBJbW1lclNjb3BlIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50U2NvcGUoKSB7XG5cdGlmIChfX0RFVl9fICYmICFjdXJyZW50U2NvcGUpIGRpZSgwKVxuXHRyZXR1cm4gY3VycmVudFNjb3BlIVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTY29wZShcblx0cGFyZW50XzogSW1tZXJTY29wZSB8IHVuZGVmaW5lZCxcblx0aW1tZXJfOiBJbW1lclxuKTogSW1tZXJTY29wZSB7XG5cdHJldHVybiB7XG5cdFx0ZHJhZnRzXzogW10sXG5cdFx0cGFyZW50Xyxcblx0XHRpbW1lcl8sXG5cdFx0Ly8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuXHRcdC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG5cdFx0Y2FuQXV0b0ZyZWV6ZV86IHRydWUsXG5cdFx0dW5maW5hbGl6ZWREcmFmdHNfOiAwXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhdGNoZXNJblNjb3BlKFxuXHRzY29wZTogSW1tZXJTY29wZSxcblx0cGF0Y2hMaXN0ZW5lcj86IFBhdGNoTGlzdGVuZXJcbikge1xuXHRpZiAocGF0Y2hMaXN0ZW5lcikge1xuXHRcdGdldFBsdWdpbihcIlBhdGNoZXNcIikgLy8gYXNzZXJ0IHdlIGhhdmUgdGhlIHBsdWdpblxuXHRcdHNjb3BlLnBhdGNoZXNfID0gW11cblx0XHRzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXVxuXHRcdHNjb3BlLnBhdGNoTGlzdGVuZXJfID0gcGF0Y2hMaXN0ZW5lclxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZva2VTY29wZShzY29wZTogSW1tZXJTY29wZSkge1xuXHRsZWF2ZVNjb3BlKHNjb3BlKVxuXHRzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpXG5cdC8vIEB0cy1pZ25vcmVcblx0c2NvcGUuZHJhZnRzXyA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlYXZlU2NvcGUoc2NvcGU6IEltbWVyU2NvcGUpIHtcblx0aWYgKHNjb3BlID09PSBjdXJyZW50U2NvcGUpIHtcblx0XHRjdXJyZW50U2NvcGUgPSBzY29wZS5wYXJlbnRfXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGVyU2NvcGUoaW1tZXI6IEltbWVyKSB7XG5cdHJldHVybiAoY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcikpXG59XG5cbmZ1bmN0aW9uIHJldm9rZURyYWZ0KGRyYWZ0OiBEcmFmdGVkKSB7XG5cdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdXG5cdGlmIChcblx0XHRzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlUHJveHlPYmplY3QgfHxcblx0XHRzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlUHJveHlBcnJheVxuXHQpXG5cdFx0c3RhdGUucmV2b2tlXygpXG5cdGVsc2Ugc3RhdGUucmV2b2tlZF8gPSB0cnVlXG59XG4iLCJpbXBvcnQge1xuXHRJbW1lclNjb3BlLFxuXHREUkFGVF9TVEFURSxcblx0aXNEcmFmdGFibGUsXG5cdE5PVEhJTkcsXG5cdFBhdGNoUGF0aCxcblx0ZWFjaCxcblx0aGFzLFxuXHRmcmVlemUsXG5cdEltbWVyU3RhdGUsXG5cdGlzRHJhZnQsXG5cdFNldFN0YXRlLFxuXHRzZXQsXG5cdFByb3h5VHlwZUVTNU9iamVjdCxcblx0UHJveHlUeXBlRVM1QXJyYXksXG5cdFByb3h5VHlwZVNldCxcblx0Z2V0UGx1Z2luLFxuXHRkaWUsXG5cdHJldm9rZVNjb3BlLFxuXHRpc0Zyb3plbixcblx0c2hhbGxvd0NvcHlcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0OiBhbnksIHNjb3BlOiBJbW1lclNjb3BlKSB7XG5cdHNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA9IHNjb3BlLmRyYWZ0c18ubGVuZ3RoXG5cdGNvbnN0IGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c18hWzBdXG5cdGNvbnN0IGlzUmVwbGFjZWQgPSByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHQgIT09IGJhc2VEcmFmdFxuXHRpZiAoIXNjb3BlLmltbWVyXy51c2VQcm94aWVzXylcblx0XHRnZXRQbHVnaW4oXCJFUzVcIikud2lsbEZpbmFsaXplRVM1XyhzY29wZSwgcmVzdWx0LCBpc1JlcGxhY2VkKVxuXHRpZiAoaXNSZXBsYWNlZCkge1xuXHRcdGlmIChiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLm1vZGlmaWVkXykge1xuXHRcdFx0cmV2b2tlU2NvcGUoc2NvcGUpXG5cdFx0XHRkaWUoNClcblx0XHR9XG5cdFx0aWYgKGlzRHJhZnRhYmxlKHJlc3VsdCkpIHtcblx0XHRcdC8vIEZpbmFsaXplIHRoZSByZXN1bHQgaW4gY2FzZSBpdCBjb250YWlucyAob3IgaXMpIGEgc3Vic2V0IG9mIHRoZSBkcmFmdC5cblx0XHRcdHJlc3VsdCA9IGZpbmFsaXplKHNjb3BlLCByZXN1bHQpXG5cdFx0XHRpZiAoIXNjb3BlLnBhcmVudF8pIG1heWJlRnJlZXplKHNjb3BlLCByZXN1bHQpXG5cdFx0fVxuXHRcdGlmIChzY29wZS5wYXRjaGVzXykge1xuXHRcdFx0Z2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG5cdFx0XHRcdGJhc2VEcmFmdFtEUkFGVF9TVEFURV0sXG5cdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0c2NvcGUucGF0Y2hlc18sXG5cdFx0XHRcdHNjb3BlLmludmVyc2VQYXRjaGVzXyFcblx0XHRcdClcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gRmluYWxpemUgdGhlIGJhc2UgZHJhZnQuXG5cdFx0cmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIGJhc2VEcmFmdCwgW10pXG5cdH1cblx0cmV2b2tlU2NvcGUoc2NvcGUpXG5cdGlmIChzY29wZS5wYXRjaGVzXykge1xuXHRcdHNjb3BlLnBhdGNoTGlzdGVuZXJfIShzY29wZS5wYXRjaGVzXywgc2NvcGUuaW52ZXJzZVBhdGNoZXNfISlcblx0fVxuXHRyZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplKHJvb3RTY29wZTogSW1tZXJTY29wZSwgdmFsdWU6IGFueSwgcGF0aD86IFBhdGNoUGF0aCkge1xuXHQvLyBEb24ndCByZWN1cnNlIGluIHRobyByZWN1cnNpdmUgZGF0YSBzdHJ1Y3R1cmVzXG5cdGlmIChpc0Zyb3plbih2YWx1ZSkpIHJldHVybiB2YWx1ZVxuXG5cdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdXG5cdC8vIEEgcGxhaW4gb2JqZWN0LCBtaWdodCBuZWVkIGZyZWV6aW5nLCBtaWdodCBjb250YWluIGRyYWZ0c1xuXHRpZiAoIXN0YXRlKSB7XG5cdFx0ZWFjaChcblx0XHRcdHZhbHVlLFxuXHRcdFx0KGtleSwgY2hpbGRWYWx1ZSkgPT5cblx0XHRcdFx0ZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKSxcblx0XHRcdHRydWUgLy8gU2VlICM1OTAsIGRvbid0IHJlY3Vyc2UgaW50byBub24tZW51bWFyYWJsZSBvZiBub24gZHJhZnRlZCBvYmplY3RzXG5cdFx0KVxuXHRcdHJldHVybiB2YWx1ZVxuXHR9XG5cdC8vIE5ldmVyIGZpbmFsaXplIGRyYWZ0cyBvd25lZCBieSBhbm90aGVyIHNjb3BlLlxuXHRpZiAoc3RhdGUuc2NvcGVfICE9PSByb290U2NvcGUpIHJldHVybiB2YWx1ZVxuXHQvLyBVbm1vZGlmaWVkIGRyYWZ0LCByZXR1cm4gdGhlIChmcm96ZW4pIG9yaWdpbmFsXG5cdGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG5cdFx0bWF5YmVGcmVlemUocm9vdFNjb3BlLCBzdGF0ZS5iYXNlXywgdHJ1ZSlcblx0XHRyZXR1cm4gc3RhdGUuYmFzZV9cblx0fVxuXHQvLyBOb3QgZmluYWxpemVkIHlldCwgbGV0J3MgZG8gdGhhdCBub3dcblx0aWYgKCFzdGF0ZS5maW5hbGl6ZWRfKSB7XG5cdFx0c3RhdGUuZmluYWxpemVkXyA9IHRydWVcblx0XHRzdGF0ZS5zY29wZV8udW5maW5hbGl6ZWREcmFmdHNfLS1cblx0XHRjb25zdCByZXN1bHQgPVxuXHRcdFx0Ly8gRm9yIEVTNSwgY3JlYXRlIGEgZ29vZCBjb3B5IGZyb20gdGhlIGRyYWZ0IGZpcnN0LCB3aXRoIGFkZGVkIGtleXMgYW5kIHdpdGhvdXQgZGVsZXRlZCBrZXlzLlxuXHRcdFx0c3RhdGUudHlwZV8gPT09IFByb3h5VHlwZUVTNU9iamVjdCB8fCBzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlRVM1QXJyYXlcblx0XHRcdFx0PyAoc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5kcmFmdF8pKVxuXHRcdFx0XHQ6IHN0YXRlLmNvcHlfXG5cdFx0Ly8gRmluYWxpemUgYWxsIGNoaWxkcmVuIG9mIHRoZSBjb3B5XG5cdFx0Ly8gRm9yIHNldHMgd2UgY2xvbmUgYmVmb3JlIGl0ZXJhdGluZywgb3RoZXJ3aXNlIHdlIGNhbiBnZXQgaW4gZW5kbGVzcyBsb29wIGR1ZSB0byBtb2RpZnlpbmcgZHVyaW5nIGl0ZXJhdGlvbiwgc2VlICM2Mjhcblx0XHQvLyBBbHRob3VnaCB0aGUgb3JpZ2luYWwgdGVzdCBjYXNlIGRvZXNuJ3Qgc2VlbSB2YWxpZCBhbnl3YXksIHNvIGlmIHRoaXMgaW4gdGhlIHdheSB3ZSBjYW4gdHVybiB0aGUgbmV4dCBsaW5lXG5cdFx0Ly8gYmFjayB0byBlYWNoKHJlc3VsdCwgLi4uLilcblx0XHRlYWNoKFxuXHRcdFx0c3RhdGUudHlwZV8gPT09IFByb3h5VHlwZVNldCA/IG5ldyBTZXQocmVzdWx0KSA6IHJlc3VsdCxcblx0XHRcdChrZXksIGNoaWxkVmFsdWUpID0+XG5cdFx0XHRcdGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgcmVzdWx0LCBrZXksIGNoaWxkVmFsdWUsIHBhdGgpXG5cdFx0KVxuXHRcdC8vIGV2ZXJ5dGhpbmcgaW5zaWRlIGlzIGZyb3plbiwgd2UgY2FuIGZyZWV6ZSBoZXJlXG5cdFx0bWF5YmVGcmVlemUocm9vdFNjb3BlLCByZXN1bHQsIGZhbHNlKVxuXHRcdC8vIGZpcnN0IHRpbWUgZmluYWxpemluZywgbGV0J3MgY3JlYXRlIHRob3NlIHBhdGNoZXNcblx0XHRpZiAocGF0aCAmJiByb290U2NvcGUucGF0Y2hlc18pIHtcblx0XHRcdGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVQYXRjaGVzXyhcblx0XHRcdFx0c3RhdGUsXG5cdFx0XHRcdHBhdGgsXG5cdFx0XHRcdHJvb3RTY29wZS5wYXRjaGVzXyxcblx0XHRcdFx0cm9vdFNjb3BlLmludmVyc2VQYXRjaGVzXyFcblx0XHRcdClcblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0YXRlLmNvcHlfXG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplUHJvcGVydHkoXG5cdHJvb3RTY29wZTogSW1tZXJTY29wZSxcblx0cGFyZW50U3RhdGU6IHVuZGVmaW5lZCB8IEltbWVyU3RhdGUsXG5cdHRhcmdldE9iamVjdDogYW55LFxuXHRwcm9wOiBzdHJpbmcgfCBudW1iZXIsXG5cdGNoaWxkVmFsdWU6IGFueSxcblx0cm9vdFBhdGg/OiBQYXRjaFBhdGhcbikge1xuXHRpZiAoX19ERVZfXyAmJiBjaGlsZFZhbHVlID09PSB0YXJnZXRPYmplY3QpIGRpZSg1KVxuXHRpZiAoaXNEcmFmdChjaGlsZFZhbHVlKSkge1xuXHRcdGNvbnN0IHBhdGggPVxuXHRcdFx0cm9vdFBhdGggJiZcblx0XHRcdHBhcmVudFN0YXRlICYmXG5cdFx0XHRwYXJlbnRTdGF0ZSEudHlwZV8gIT09IFByb3h5VHlwZVNldCAmJiAvLyBTZXQgb2JqZWN0cyBhcmUgYXRvbWljIHNpbmNlIHRoZXkgaGF2ZSBubyBrZXlzLlxuXHRcdFx0IWhhcygocGFyZW50U3RhdGUgYXMgRXhjbHVkZTxJbW1lclN0YXRlLCBTZXRTdGF0ZT4pLmFzc2lnbmVkXyEsIHByb3ApIC8vIFNraXAgZGVlcCBwYXRjaGVzIGZvciBhc3NpZ25lZCBrZXlzLlxuXHRcdFx0XHQ/IHJvb3RQYXRoIS5jb25jYXQocHJvcClcblx0XHRcdFx0OiB1bmRlZmluZWRcblx0XHQvLyBEcmFmdHMgb3duZWQgYnkgYHNjb3BlYCBhcmUgZmluYWxpemVkIGhlcmUuXG5cdFx0Y29uc3QgcmVzID0gZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlLCBwYXRoKVxuXHRcdHNldCh0YXJnZXRPYmplY3QsIHByb3AsIHJlcylcblx0XHQvLyBEcmFmdHMgZnJvbSBhbm90aGVyIHNjb3BlIG11c3QgcHJldmVudGVkIHRvIGJlIGZyb3plblxuXHRcdC8vIGlmIHdlIGdvdCBhIGRyYWZ0IGJhY2sgZnJvbSBmaW5hbGl6ZSwgd2UncmUgaW4gYSBuZXN0ZWQgcHJvZHVjZSBhbmQgc2hvdWxkbid0IGZyZWV6ZVxuXHRcdGlmIChpc0RyYWZ0KHJlcykpIHtcblx0XHRcdHJvb3RTY29wZS5jYW5BdXRvRnJlZXplXyA9IGZhbHNlXG5cdFx0fSBlbHNlIHJldHVyblxuXHR9XG5cdC8vIFNlYXJjaCBuZXcgb2JqZWN0cyBmb3IgdW5maW5hbGl6ZWQgZHJhZnRzLiBGcm96ZW4gb2JqZWN0cyBzaG91bGQgbmV2ZXIgY29udGFpbiBkcmFmdHMuXG5cdGlmIChpc0RyYWZ0YWJsZShjaGlsZFZhbHVlKSAmJiAhaXNGcm96ZW4oY2hpbGRWYWx1ZSkpIHtcblx0XHRpZiAoIXJvb3RTY29wZS5pbW1lcl8uYXV0b0ZyZWV6ZV8gJiYgcm9vdFNjb3BlLnVuZmluYWxpemVkRHJhZnRzXyA8IDEpIHtcblx0XHRcdC8vIG9wdGltaXphdGlvbjogaWYgYW4gb2JqZWN0IGlzIG5vdCBhIGRyYWZ0LCBhbmQgd2UgZG9uJ3QgaGF2ZSB0b1xuXHRcdFx0Ly8gZGVlcGZyZWV6ZSBldmVyeXRoaW5nLCBhbmQgd2UgYXJlIHN1cmUgdGhhdCBubyBkcmFmdHMgYXJlIGxlZnQgaW4gdGhlIHJlbWFpbmluZyBvYmplY3Rcblx0XHRcdC8vIGNhdXNlIHdlIHNhdyBhbmQgZmluYWxpemVkIGFsbCBkcmFmdHMgYWxyZWFkeTsgd2UgY2FuIHN0b3AgdmlzaXRpbmcgdGhlIHJlc3Qgb2YgdGhlIHRyZWUuXG5cdFx0XHQvLyBUaGlzIGJlbmVmaXRzIGVzcGVjaWFsbHkgYWRkaW5nIGxhcmdlIGRhdGEgdHJlZSdzIHdpdGhvdXQgZnVydGhlciBwcm9jZXNzaW5nLlxuXHRcdFx0Ly8gU2VlIGFkZC1kYXRhLmpzIHBlcmYgdGVzdFxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGZpbmFsaXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSlcblx0XHQvLyBpbW1lciBkZWVwIGZyZWV6ZXMgcGxhaW4gb2JqZWN0cywgc28gaWYgdGhlcmUgaXMgbm8gcGFyZW50IHN0YXRlLCB3ZSBmcmVlemUgYXMgd2VsbFxuXHRcdGlmICghcGFyZW50U3RhdGUgfHwgIXBhcmVudFN0YXRlLnNjb3BlXy5wYXJlbnRfKVxuXHRcdFx0bWF5YmVGcmVlemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKVxuXHR9XG59XG5cbmZ1bmN0aW9uIG1heWJlRnJlZXplKHNjb3BlOiBJbW1lclNjb3BlLCB2YWx1ZTogYW55LCBkZWVwID0gZmFsc2UpIHtcblx0aWYgKHNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiBzY29wZS5jYW5BdXRvRnJlZXplXykge1xuXHRcdGZyZWV6ZSh2YWx1ZSwgZGVlcClcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0ZWFjaCxcblx0aGFzLFxuXHRpcyxcblx0aXNEcmFmdGFibGUsXG5cdHNoYWxsb3dDb3B5LFxuXHRsYXRlc3QsXG5cdEltbWVyQmFzZVN0YXRlLFxuXHRJbW1lclN0YXRlLFxuXHREcmFmdGVkLFxuXHRBbnlPYmplY3QsXG5cdEFueUFycmF5LFxuXHRPYmplY3Rpc2gsXG5cdGdldEN1cnJlbnRTY29wZSxcblx0RFJBRlRfU1RBVEUsXG5cdGRpZSxcblx0Y3JlYXRlUHJveHksXG5cdFByb3h5VHlwZVByb3h5T2JqZWN0LFxuXHRQcm94eVR5cGVQcm94eUFycmF5XG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbmludGVyZmFjZSBQcm94eUJhc2VTdGF0ZSBleHRlbmRzIEltbWVyQmFzZVN0YXRlIHtcblx0YXNzaWduZWRfOiB7XG5cdFx0W3Byb3BlcnR5OiBzdHJpbmddOiBib29sZWFuXG5cdH1cblx0cGFyZW50Xz86IEltbWVyU3RhdGVcblx0cmV2b2tlXygpOiB2b2lkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJveHlPYmplY3RTdGF0ZSBleHRlbmRzIFByb3h5QmFzZVN0YXRlIHtcblx0dHlwZV86IHR5cGVvZiBQcm94eVR5cGVQcm94eU9iamVjdFxuXHRiYXNlXzogYW55XG5cdGNvcHlfOiBhbnlcblx0ZHJhZnRfOiBEcmFmdGVkPEFueU9iamVjdCwgUHJveHlPYmplY3RTdGF0ZT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm94eUFycmF5U3RhdGUgZXh0ZW5kcyBQcm94eUJhc2VTdGF0ZSB7XG5cdHR5cGVfOiB0eXBlb2YgUHJveHlUeXBlUHJveHlBcnJheVxuXHRiYXNlXzogQW55QXJyYXlcblx0Y29weV86IEFueUFycmF5IHwgbnVsbFxuXHRkcmFmdF86IERyYWZ0ZWQ8QW55QXJyYXksIFByb3h5QXJyYXlTdGF0ZT5cbn1cblxudHlwZSBQcm94eVN0YXRlID0gUHJveHlPYmplY3RTdGF0ZSB8IFByb3h5QXJyYXlTdGF0ZVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgZHJhZnQgb2YgdGhlIGBiYXNlYCBvYmplY3QuXG4gKlxuICogVGhlIHNlY29uZCBhcmd1bWVudCBpcyB0aGUgcGFyZW50IGRyYWZ0LXN0YXRlICh1c2VkIGludGVybmFsbHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eTxUIGV4dGVuZHMgT2JqZWN0aXNoPihcblx0YmFzZTogVCxcblx0cGFyZW50PzogSW1tZXJTdGF0ZVxuKTogRHJhZnRlZDxULCBQcm94eVN0YXRlPiB7XG5cdGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpXG5cdGNvbnN0IHN0YXRlOiBQcm94eVN0YXRlID0ge1xuXHRcdHR5cGVfOiBpc0FycmF5ID8gUHJveHlUeXBlUHJveHlBcnJheSA6IChQcm94eVR5cGVQcm94eU9iamVjdCBhcyBhbnkpLFxuXHRcdC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cblx0XHRzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSEsXG5cdFx0Ly8gVHJ1ZSBmb3IgYm90aCBzaGFsbG93IGFuZCBkZWVwIGNoYW5nZXMuXG5cdFx0bW9kaWZpZWRfOiBmYWxzZSxcblx0XHQvLyBVc2VkIGR1cmluZyBmaW5hbGl6YXRpb24uXG5cdFx0ZmluYWxpemVkXzogZmFsc2UsXG5cdFx0Ly8gVHJhY2sgd2hpY2ggcHJvcGVydGllcyBoYXZlIGJlZW4gYXNzaWduZWQgKHRydWUpIG9yIGRlbGV0ZWQgKGZhbHNlKS5cblx0XHRhc3NpZ25lZF86IHt9LFxuXHRcdC8vIFRoZSBwYXJlbnQgZHJhZnQgc3RhdGUuXG5cdFx0cGFyZW50XzogcGFyZW50LFxuXHRcdC8vIFRoZSBiYXNlIHN0YXRlLlxuXHRcdGJhc2VfOiBiYXNlLFxuXHRcdC8vIFRoZSBiYXNlIHByb3h5LlxuXHRcdGRyYWZ0XzogbnVsbCBhcyBhbnksIC8vIHNldCBiZWxvd1xuXHRcdC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG5cdFx0Y29weV86IG51bGwsXG5cdFx0Ly8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG5cdFx0cmV2b2tlXzogbnVsbCBhcyBhbnksXG5cdFx0aXNNYW51YWxfOiBmYWxzZVxuXHR9XG5cblx0Ly8gdGhlIHRyYXBzIG11c3QgdGFyZ2V0IHNvbWV0aGluZywgYSBiaXQgbGlrZSB0aGUgJ3JlYWwnIGJhc2UuXG5cdC8vIGJ1dCBhbHNvLCB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZGV0ZXJtaW5lIGZyb20gdGhlIHRhcmdldCB3aGF0IHRoZSByZWxldmFudCBzdGF0ZSBpc1xuXHQvLyAodG8gYXZvaWQgY3JlYXRpbmcgdHJhcHMgcGVyIGluc3RhbmNlIHRvIGNhcHR1cmUgdGhlIHN0YXRlIGluIGNsb3N1cmUsXG5cdC8vIGFuZCB0byBhdm9pZCBjcmVhdGluZyB3ZWlyZCBoaWRkZW4gcHJvcGVydGllcyBhcyB3ZWxsKVxuXHQvLyBTbyB0aGUgdHJpY2sgaXMgdG8gdXNlICdzdGF0ZScgYXMgdGhlIGFjdHVhbCAndGFyZ2V0JyEgKGFuZCBtYWtlIHN1cmUgd2UgaW50ZXJjZXB0IGV2ZXJ5dGhpbmcpXG5cdC8vIE5vdGUgdGhhdCBpbiB0aGUgY2FzZSBvZiBhbiBhcnJheSwgd2UgcHV0IHRoZSBzdGF0ZSBpbiBhbiBhcnJheSB0byBoYXZlIGJldHRlciBSZWZsZWN0IGRlZmF1bHRzIG9vdGJcblx0bGV0IHRhcmdldDogVCA9IHN0YXRlIGFzIGFueVxuXHRsZXQgdHJhcHM6IFByb3h5SGFuZGxlcjxvYmplY3QgfCBBcnJheTxhbnk+PiA9IG9iamVjdFRyYXBzXG5cdGlmIChpc0FycmF5KSB7XG5cdFx0dGFyZ2V0ID0gW3N0YXRlXSBhcyBhbnlcblx0XHR0cmFwcyA9IGFycmF5VHJhcHNcblx0fVxuXG5cdGNvbnN0IHtyZXZva2UsIHByb3h5fSA9IFByb3h5LnJldm9jYWJsZSh0YXJnZXQsIHRyYXBzKVxuXHRzdGF0ZS5kcmFmdF8gPSBwcm94eSBhcyBhbnlcblx0c3RhdGUucmV2b2tlXyA9IHJldm9rZVxuXHRyZXR1cm4gcHJveHkgYXMgYW55XG59XG5cbi8qKlxuICogT2JqZWN0IGRyYWZ0c1xuICovXG5leHBvcnQgY29uc3Qgb2JqZWN0VHJhcHM6IFByb3h5SGFuZGxlcjxQcm94eVN0YXRlPiA9IHtcblx0Z2V0KHN0YXRlLCBwcm9wKSB7XG5cdFx0aWYgKHByb3AgPT09IERSQUZUX1NUQVRFKSByZXR1cm4gc3RhdGVcblxuXHRcdGNvbnN0IHNvdXJjZSA9IGxhdGVzdChzdGF0ZSlcblx0XHRpZiAoIWhhcyhzb3VyY2UsIHByb3ApKSB7XG5cdFx0XHQvLyBub24tZXhpc3Rpbmcgb3Igbm9uLW93biBwcm9wZXJ0eS4uLlxuXHRcdFx0cmV0dXJuIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApXG5cdFx0fVxuXHRcdGNvbnN0IHZhbHVlID0gc291cmNlW3Byb3BdXG5cdFx0aWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0fVxuXHRcdC8vIENoZWNrIGZvciBleGlzdGluZyBkcmFmdCBpbiBtb2RpZmllZCBzdGF0ZS5cblx0XHQvLyBBc3NpZ25lZCB2YWx1ZXMgYXJlIG5ldmVyIGRyYWZ0ZWQuIFRoaXMgY2F0Y2hlcyBhbnkgZHJhZnRzIHdlIGNyZWF0ZWQsIHRvby5cblx0XHRpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG5cdFx0XHRwcmVwYXJlQ29weShzdGF0ZSlcblx0XHRcdHJldHVybiAoc3RhdGUuY29weV8hW3Byb3AgYXMgYW55XSA9IGNyZWF0ZVByb3h5KFxuXHRcdFx0XHRzdGF0ZS5zY29wZV8uaW1tZXJfLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0c3RhdGVcblx0XHRcdCkpXG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZVxuXHR9LFxuXHRoYXMoc3RhdGUsIHByb3ApIHtcblx0XHRyZXR1cm4gcHJvcCBpbiBsYXRlc3Qoc3RhdGUpXG5cdH0sXG5cdG93bktleXMoc3RhdGUpIHtcblx0XHRyZXR1cm4gUmVmbGVjdC5vd25LZXlzKGxhdGVzdChzdGF0ZSkpXG5cdH0sXG5cdHNldChcblx0XHRzdGF0ZTogUHJveHlPYmplY3RTdGF0ZSxcblx0XHRwcm9wOiBzdHJpbmcgLyogc3RyaWN0bHkgbm90LCBidXQgaGVscHMgVFMgKi8sXG5cdFx0dmFsdWVcblx0KSB7XG5cdFx0Y29uc3QgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8obGF0ZXN0KHN0YXRlKSwgcHJvcClcblx0XHRpZiAoZGVzYz8uc2V0KSB7XG5cdFx0XHQvLyBzcGVjaWFsIGNhc2U6IGlmIHRoaXMgd3JpdGUgaXMgY2FwdHVyZWQgYnkgYSBzZXR0ZXIsIHdlIGhhdmVcblx0XHRcdC8vIHRvIHRyaWdnZXIgaXQgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG5cdFx0XHRkZXNjLnNldC5jYWxsKHN0YXRlLmRyYWZ0XywgdmFsdWUpXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuXHRcdFx0Ly8gdGhlIGxhc3QgY2hlY2sgaXMgYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gZGlzdGluZ3Vpc2ggc2V0dGluZyBhIG5vbi1leGlzdGlnIHRvIHVuZGVmaW5lZCAod2hpY2ggaXMgYSBjaGFuZ2UpXG5cdFx0XHQvLyBmcm9tIHNldHRpbmcgYW4gZXhpc3RpbmcgcHJvcGVydHkgd2l0aCB2YWx1ZSB1bmRlZmluZWQgdG8gdW5kZWZpbmVkICh3aGljaCBpcyBub3QgYSBjaGFuZ2UpXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gcGVlayhsYXRlc3Qoc3RhdGUpLCBwcm9wKVxuXHRcdFx0Ly8gc3BlY2lhbCBjYXNlLCBpZiB3ZSBhc3NpZ25pbmcgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIGEgZHJhZnQsIHdlIGNhbiBpZ25vcmUgdGhlIGFzc2lnbm1lbnRcblx0XHRcdGNvbnN0IGN1cnJlbnRTdGF0ZTogUHJveHlPYmplY3RTdGF0ZSA9IGN1cnJlbnQ/LltEUkFGVF9TVEFURV1cblx0XHRcdGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLmJhc2VfID09PSB2YWx1ZSkge1xuXHRcdFx0XHRzdGF0ZS5jb3B5XyFbcHJvcF0gPSB2YWx1ZVxuXHRcdFx0XHRzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzKHZhbHVlLCBjdXJyZW50KSAmJiAodmFsdWUgIT09IHVuZGVmaW5lZCB8fCBoYXMoc3RhdGUuYmFzZV8sIHByb3ApKSlcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdHByZXBhcmVDb3B5KHN0YXRlKVxuXHRcdFx0bWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0fVxuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRzdGF0ZS5jb3B5XyFbcHJvcF0gPSB2YWx1ZVxuXHRcdHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IHRydWVcblx0XHRyZXR1cm4gdHJ1ZVxuXHR9LFxuXHRkZWxldGVQcm9wZXJ0eShzdGF0ZSwgcHJvcDogc3RyaW5nKSB7XG5cdFx0Ly8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cblx0XHRpZiAocGVlayhzdGF0ZS5iYXNlXywgcHJvcCkgIT09IHVuZGVmaW5lZCB8fCBwcm9wIGluIHN0YXRlLmJhc2VfKSB7XG5cdFx0XHRzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZVxuXHRcdFx0cHJlcGFyZUNvcHkoc3RhdGUpXG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaWYgYW4gb3JpZ2luYWxseSBub3QgYXNzaWduZWQgcHJvcGVydHkgd2FzIGRlbGV0ZWRcblx0XHRcdGRlbGV0ZSBzdGF0ZS5hc3NpZ25lZF9bcHJvcF1cblx0XHR9XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGlmIChzdGF0ZS5jb3B5XykgZGVsZXRlIHN0YXRlLmNvcHlfW3Byb3BdXG5cdFx0cmV0dXJuIHRydWVcblx0fSxcblx0Ly8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2Vcblx0Ly8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuXHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIHByb3ApIHtcblx0XHRjb25zdCBvd25lciA9IGxhdGVzdChzdGF0ZSlcblx0XHRjb25zdCBkZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3duZXIsIHByb3ApXG5cdFx0aWYgKCFkZXNjKSByZXR1cm4gZGVzY1xuXHRcdHJldHVybiB7XG5cdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogc3RhdGUudHlwZV8gIT09IFByb3h5VHlwZVByb3h5QXJyYXkgfHwgcHJvcCAhPT0gXCJsZW5ndGhcIixcblx0XHRcdGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcblx0XHRcdHZhbHVlOiBvd25lcltwcm9wXVxuXHRcdH1cblx0fSxcblx0ZGVmaW5lUHJvcGVydHkoKSB7XG5cdFx0ZGllKDExKVxuXHR9LFxuXHRnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuXHRcdHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3RhdGUuYmFzZV8pXG5cdH0sXG5cdHNldFByb3RvdHlwZU9mKCkge1xuXHRcdGRpZSgxMilcblx0fVxufVxuXG4vKipcbiAqIEFycmF5IGRyYWZ0c1xuICovXG5cbmNvbnN0IGFycmF5VHJhcHM6IFByb3h5SGFuZGxlcjxbUHJveHlBcnJheVN0YXRlXT4gPSB7fVxuZWFjaChvYmplY3RUcmFwcywgKGtleSwgZm4pID0+IHtcblx0Ly8gQHRzLWlnbm9yZVxuXHRhcnJheVRyYXBzW2tleV0gPSBmdW5jdGlvbigpIHtcblx0XHRhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF1bMF1cblx0XHRyZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXHR9XG59KVxuYXJyYXlUcmFwcy5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHN0YXRlLCBwcm9wKSB7XG5cdGlmIChfX0RFVl9fICYmIGlzTmFOKHBhcnNlSW50KHByb3AgYXMgYW55KSkpIGRpZSgxMylcblx0cmV0dXJuIG9iamVjdFRyYXBzLmRlbGV0ZVByb3BlcnR5IS5jYWxsKHRoaXMsIHN0YXRlWzBdLCBwcm9wKVxufVxuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbihzdGF0ZSwgcHJvcCwgdmFsdWUpIHtcblx0aWYgKF9fREVWX18gJiYgcHJvcCAhPT0gXCJsZW5ndGhcIiAmJiBpc05hTihwYXJzZUludChwcm9wIGFzIGFueSkpKSBkaWUoMTQpXG5cdHJldHVybiBvYmplY3RUcmFwcy5zZXQhLmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3AsIHZhbHVlLCBzdGF0ZVswXSlcbn1cblxuLy8gQWNjZXNzIGEgcHJvcGVydHkgd2l0aG91dCBjcmVhdGluZyBhbiBJbW1lciBkcmFmdC5cbmZ1bmN0aW9uIHBlZWsoZHJhZnQ6IERyYWZ0ZWQsIHByb3A6IFByb3BlcnR5S2V5KSB7XG5cdGNvbnN0IHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdXG5cdGNvbnN0IHNvdXJjZSA9IHN0YXRlID8gbGF0ZXN0KHN0YXRlKSA6IGRyYWZ0XG5cdHJldHVybiBzb3VyY2VbcHJvcF1cbn1cblxuZnVuY3Rpb24gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGU6IEltbWVyU3RhdGUsIHNvdXJjZTogYW55LCBwcm9wOiBQcm9wZXJ0eUtleSkge1xuXHRjb25zdCBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApXG5cdHJldHVybiBkZXNjXG5cdFx0PyBgdmFsdWVgIGluIGRlc2Ncblx0XHRcdD8gZGVzYy52YWx1ZVxuXHRcdFx0OiAvLyBUaGlzIGlzIGEgdmVyeSBzcGVjaWFsIGNhc2UsIGlmIHRoZSBwcm9wIGlzIGEgZ2V0dGVyIGRlZmluZWQgYnkgdGhlXG5cdFx0XHQgIC8vIHByb3RvdHlwZSwgd2Ugc2hvdWxkIGludm9rZSBpdCB3aXRoIHRoZSBkcmFmdCBhcyBjb250ZXh0IVxuXHRcdFx0ICBkZXNjLmdldD8uY2FsbChzdGF0ZS5kcmFmdF8pXG5cdFx0OiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhcblx0c291cmNlOiBhbnksXG5cdHByb3A6IFByb3BlcnR5S2V5XG4pOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWQge1xuXHQvLyAnaW4nIGNoZWNrcyBwcm90byFcblx0aWYgKCEocHJvcCBpbiBzb3VyY2UpKSByZXR1cm4gdW5kZWZpbmVkXG5cdGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpXG5cdHdoaWxlIChwcm90bykge1xuXHRcdGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKVxuXHRcdGlmIChkZXNjKSByZXR1cm4gZGVzY1xuXHRcdHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDaGFuZ2VkKHN0YXRlOiBJbW1lclN0YXRlKSB7XG5cdGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG5cdFx0c3RhdGUubW9kaWZpZWRfID0gdHJ1ZVxuXHRcdGlmIChzdGF0ZS5wYXJlbnRfKSB7XG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZS5wYXJlbnRfKVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUNvcHkoc3RhdGU6IHtiYXNlXzogYW55OyBjb3B5XzogYW55fSkge1xuXHRpZiAoIXN0YXRlLmNvcHlfKSB7XG5cdFx0c3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5iYXNlXylcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0SVByb2R1Y2VXaXRoUGF0Y2hlcyxcblx0SVByb2R1Y2UsXG5cdEltbWVyU3RhdGUsXG5cdERyYWZ0ZWQsXG5cdGlzRHJhZnRhYmxlLFxuXHRwcm9jZXNzUmVzdWx0LFxuXHRQYXRjaCxcblx0T2JqZWN0aXNoLFxuXHREUkFGVF9TVEFURSxcblx0RHJhZnQsXG5cdFBhdGNoTGlzdGVuZXIsXG5cdGlzRHJhZnQsXG5cdGlzTWFwLFxuXHRpc1NldCxcblx0Y3JlYXRlUHJveHlQcm94eSxcblx0Z2V0UGx1Z2luLFxuXHRkaWUsXG5cdGhhc1Byb3hpZXMsXG5cdGVudGVyU2NvcGUsXG5cdHJldm9rZVNjb3BlLFxuXHRsZWF2ZVNjb3BlLFxuXHR1c2VQYXRjaGVzSW5TY29wZSxcblx0Z2V0Q3VycmVudFNjb3BlLFxuXHROT1RISU5HLFxuXHRmcmVlemUsXG5cdGN1cnJlbnRcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuaW50ZXJmYWNlIFByb2R1Y2Vyc0ZucyB7XG5cdHByb2R1Y2U6IElQcm9kdWNlXG5cdHByb2R1Y2VXaXRoUGF0Y2hlczogSVByb2R1Y2VXaXRoUGF0Y2hlc1xufVxuXG5leHBvcnQgY2xhc3MgSW1tZXIgaW1wbGVtZW50cyBQcm9kdWNlcnNGbnMge1xuXHR1c2VQcm94aWVzXzogYm9vbGVhbiA9IGhhc1Byb3hpZXNcblxuXHRhdXRvRnJlZXplXzogYm9vbGVhbiA9IHRydWVcblxuXHRjb25zdHJ1Y3Rvcihjb25maWc/OiB7dXNlUHJveGllcz86IGJvb2xlYW47IGF1dG9GcmVlemU/OiBib29sZWFufSkge1xuXHRcdGlmICh0eXBlb2YgY29uZmlnPy51c2VQcm94aWVzID09PSBcImJvb2xlYW5cIilcblx0XHRcdHRoaXMuc2V0VXNlUHJveGllcyhjb25maWchLnVzZVByb3hpZXMpXG5cdFx0aWYgKHR5cGVvZiBjb25maWc/LmF1dG9GcmVlemUgPT09IFwiYm9vbGVhblwiKVxuXHRcdFx0dGhpcy5zZXRBdXRvRnJlZXplKGNvbmZpZyEuYXV0b0ZyZWV6ZSlcblx0XHR0aGlzLnByb2R1Y2UgPSB0aGlzLnByb2R1Y2UuYmluZCh0aGlzKVxuXHRcdHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzID0gdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZCh0aGlzKVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxuXHQgKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcblx0ICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXG5cdCAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXG5cdCAqXG5cdCAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxuXHQgKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxuXHQgKlxuXHQgKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcblx0ICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxuXHQgKlxuXHQgKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9kdWNlciAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXG5cdCAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxuXHQgKi9cblx0cHJvZHVjZShiYXNlOiBhbnksIHJlY2lwZT86IGFueSwgcGF0Y2hMaXN0ZW5lcj86IGFueSkge1xuXHRcdC8vIGN1cnJpZWQgaW52b2NhdGlvblxuXHRcdGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0Y29uc3QgZGVmYXVsdEJhc2UgPSByZWNpcGVcblx0XHRcdHJlY2lwZSA9IGJhc2VcblxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXNcblx0XHRcdHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShcblx0XHRcdFx0dGhpczogYW55LFxuXHRcdFx0XHRiYXNlID0gZGVmYXVsdEJhc2UsXG5cdFx0XHRcdC4uLmFyZ3M6IGFueVtdXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYucHJvZHVjZShiYXNlLCAoZHJhZnQ6IERyYWZ0ZWQpID0+IHJlY2lwZS5jYWxsKHRoaXMsIGRyYWZ0LCAuLi5hcmdzKSkgLy8gcHJldHRpZXItaWdub3JlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikgZGllKDYpXG5cdFx0aWYgKHBhdGNoTGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGF0Y2hMaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0ZGllKDcpXG5cblx0XHRsZXQgcmVzdWx0XG5cblx0XHQvLyBPbmx5IHBsYWluIG9iamVjdHMsIGFycmF5cywgYW5kIFwiaW1tZXJhYmxlIGNsYXNzZXNcIiBhcmUgZHJhZnRlZC5cblx0XHRpZiAoaXNEcmFmdGFibGUoYmFzZSkpIHtcblx0XHRcdGNvbnN0IHNjb3BlID0gZW50ZXJTY29wZSh0aGlzKVxuXHRcdFx0Y29uc3QgcHJveHkgPSBjcmVhdGVQcm94eSh0aGlzLCBiYXNlLCB1bmRlZmluZWQpXG5cdFx0XHRsZXQgaGFzRXJyb3IgPSB0cnVlXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXN1bHQgPSByZWNpcGUocHJveHkpXG5cdFx0XHRcdGhhc0Vycm9yID0gZmFsc2Vcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdC8vIGZpbmFsbHkgaW5zdGVhZCBvZiBjYXRjaCArIHJldGhyb3cgYmV0dGVyIHByZXNlcnZlcyBvcmlnaW5hbCBzdGFja1xuXHRcdFx0XHRpZiAoaGFzRXJyb3IpIHJldm9rZVNjb3BlKHNjb3BlKVxuXHRcdFx0XHRlbHNlIGxlYXZlU2NvcGUoc2NvcGUpXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oXG5cdFx0XHRcdFx0cmVzdWx0ID0+IHtcblx0XHRcdFx0XHRcdHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKVxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0XHRcdHJldm9rZVNjb3BlKHNjb3BlKVxuXHRcdFx0XHRcdFx0dGhyb3cgZXJyb3Jcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKVxuXHRcdFx0cmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSlcblx0XHR9IGVsc2UgaWYgKCFiYXNlIHx8IHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRyZXN1bHQgPSByZWNpcGUoYmFzZSlcblx0XHRcdGlmIChyZXN1bHQgPT09IE5PVEhJTkcpIHJldHVybiB1bmRlZmluZWRcblx0XHRcdGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gYmFzZVxuXHRcdFx0aWYgKHRoaXMuYXV0b0ZyZWV6ZV8pIGZyZWV6ZShyZXN1bHQsIHRydWUpXG5cdFx0XHRyZXR1cm4gcmVzdWx0XG5cdFx0fSBlbHNlIGRpZSgyMSwgYmFzZSlcblx0fVxuXG5cdHByb2R1Y2VXaXRoUGF0Y2hlcyhhcmcxOiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnkpOiBhbnkge1xuXHRcdGlmICh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRyZXR1cm4gKHN0YXRlOiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PlxuXHRcdFx0XHR0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgKGRyYWZ0OiBhbnkpID0+IGFyZzEoZHJhZnQsIC4uLmFyZ3MpKVxuXHRcdH1cblxuXHRcdGxldCBwYXRjaGVzOiBQYXRjaFtdLCBpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHRcdGNvbnN0IG5leHRTdGF0ZSA9IHRoaXMucHJvZHVjZShhcmcxLCBhcmcyLCAocDogUGF0Y2hbXSwgaXA6IFBhdGNoW10pID0+IHtcblx0XHRcdHBhdGNoZXMgPSBwXG5cdFx0XHRpbnZlcnNlUGF0Y2hlcyA9IGlwXG5cdFx0fSlcblx0XHRyZXR1cm4gW25leHRTdGF0ZSwgcGF0Y2hlcyEsIGludmVyc2VQYXRjaGVzIV1cblx0fVxuXG5cdGNyZWF0ZURyYWZ0PFQgZXh0ZW5kcyBPYmplY3Rpc2g+KGJhc2U6IFQpOiBEcmFmdDxUPiB7XG5cdFx0aWYgKCFpc0RyYWZ0YWJsZShiYXNlKSkgZGllKDgpXG5cdFx0aWYgKGlzRHJhZnQoYmFzZSkpIGJhc2UgPSBjdXJyZW50KGJhc2UpXG5cdFx0Y29uc3Qgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpXG5cdFx0Y29uc3QgcHJveHkgPSBjcmVhdGVQcm94eSh0aGlzLCBiYXNlLCB1bmRlZmluZWQpXG5cdFx0cHJveHlbRFJBRlRfU1RBVEVdLmlzTWFudWFsXyA9IHRydWVcblx0XHRsZWF2ZVNjb3BlKHNjb3BlKVxuXHRcdHJldHVybiBwcm94eSBhcyBhbnlcblx0fVxuXG5cdGZpbmlzaERyYWZ0PEQgZXh0ZW5kcyBEcmFmdDxhbnk+Pihcblx0XHRkcmFmdDogRCxcblx0XHRwYXRjaExpc3RlbmVyPzogUGF0Y2hMaXN0ZW5lclxuXHQpOiBEIGV4dGVuZHMgRHJhZnQ8aW5mZXIgVD4gPyBUIDogbmV2ZXIge1xuXHRcdGNvbnN0IHN0YXRlOiBJbW1lclN0YXRlID0gZHJhZnQgJiYgKGRyYWZ0IGFzIGFueSlbRFJBRlRfU1RBVEVdXG5cdFx0aWYgKF9fREVWX18pIHtcblx0XHRcdGlmICghc3RhdGUgfHwgIXN0YXRlLmlzTWFudWFsXykgZGllKDkpXG5cdFx0XHRpZiAoc3RhdGUuZmluYWxpemVkXykgZGllKDEwKVxuXHRcdH1cblx0XHRjb25zdCB7c2NvcGVfOiBzY29wZX0gPSBzdGF0ZVxuXHRcdHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKVxuXHRcdHJldHVybiBwcm9jZXNzUmVzdWx0KHVuZGVmaW5lZCwgc2NvcGUpXG5cdH1cblxuXHQvKipcblx0ICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cblx0ICpcblx0ICogQnkgZGVmYXVsdCwgYXV0by1mcmVlemluZyBpcyBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uLlxuXHQgKi9cblx0c2V0QXV0b0ZyZWV6ZSh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZVxuXHR9XG5cblx0LyoqXG5cdCAqIFBhc3MgdHJ1ZSB0byB1c2UgdGhlIEVTMjAxNSBgUHJveHlgIGNsYXNzIHdoZW4gY3JlYXRpbmcgZHJhZnRzLCB3aGljaCBpc1xuXHQgKiBhbHdheXMgZmFzdGVyIHRoYW4gdXNpbmcgRVM1IHByb3hpZXMuXG5cdCAqXG5cdCAqIEJ5IGRlZmF1bHQsIGZlYXR1cmUgZGV0ZWN0aW9uIGlzIHVzZWQsIHNvIGNhbGxpbmcgdGhpcyBpcyByYXJlbHkgbmVjZXNzYXJ5LlxuXHQgKi9cblx0c2V0VXNlUHJveGllcyh2YWx1ZTogYm9vbGVhbikge1xuXHRcdGlmICh2YWx1ZSAmJiAhaGFzUHJveGllcykge1xuXHRcdFx0ZGllKDIwKVxuXHRcdH1cblx0XHR0aGlzLnVzZVByb3hpZXNfID0gdmFsdWVcblx0fVxuXG5cdGFwcGx5UGF0Y2hlcyhiYXNlOiBPYmplY3Rpc2gsIHBhdGNoZXM6IFBhdGNoW10pIHtcblx0XHQvLyBJZiBhIHBhdGNoIHJlcGxhY2VzIHRoZSBlbnRpcmUgc3RhdGUsIHRha2UgdGhhdCByZXBsYWNlbWVudCBhcyBiYXNlXG5cdFx0Ly8gYmVmb3JlIGFwcGx5aW5nIHBhdGNoZXNcblx0XHRsZXQgaTogbnVtYmVyXG5cdFx0Zm9yIChpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3QgcGF0Y2ggPSBwYXRjaGVzW2ldXG5cdFx0XHRpZiAocGF0Y2gucGF0aC5sZW5ndGggPT09IDAgJiYgcGF0Y2gub3AgPT09IFwicmVwbGFjZVwiKSB7XG5cdFx0XHRcdGJhc2UgPSBwYXRjaC52YWx1ZVxuXHRcdFx0XHRicmVha1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGFwcGx5UGF0Y2hlc0ltcGwgPSBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmFwcGx5UGF0Y2hlc19cblx0XHRpZiAoaXNEcmFmdChiYXNlKSkge1xuXHRcdFx0Ly8gTi5COiBuZXZlciBoaXRzIGlmIHNvbWUgcGF0Y2ggYSByZXBsYWNlbWVudCwgcGF0Y2hlcyBhcmUgbmV2ZXIgZHJhZnRzXG5cdFx0XHRyZXR1cm4gYXBwbHlQYXRjaGVzSW1wbChiYXNlLCBwYXRjaGVzKVxuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIHByb2R1Y2UgYSBjb3B5IG9mIHRoZSBiYXNlIHN0YXRlLlxuXHRcdHJldHVybiB0aGlzLnByb2R1Y2UoYmFzZSwgKGRyYWZ0OiBEcmFmdGVkKSA9PlxuXHRcdFx0YXBwbHlQYXRjaGVzSW1wbChkcmFmdCwgcGF0Y2hlcy5zbGljZShpICsgMSkpXG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm94eTxUIGV4dGVuZHMgT2JqZWN0aXNoPihcblx0aW1tZXI6IEltbWVyLFxuXHR2YWx1ZTogVCxcblx0cGFyZW50PzogSW1tZXJTdGF0ZVxuKTogRHJhZnRlZDxULCBJbW1lclN0YXRlPiB7XG5cdC8vIHByZWNvbmRpdGlvbjogY3JlYXRlUHJveHkgc2hvdWxkIGJlIGd1YXJkZWQgYnkgaXNEcmFmdGFibGUsIHNvIHdlIGtub3cgd2UgY2FuIHNhZmVseSBkcmFmdFxuXHRjb25zdCBkcmFmdDogRHJhZnRlZCA9IGlzTWFwKHZhbHVlKVxuXHRcdD8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5TWFwXyh2YWx1ZSwgcGFyZW50KVxuXHRcdDogaXNTZXQodmFsdWUpXG5cdFx0PyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlTZXRfKHZhbHVlLCBwYXJlbnQpXG5cdFx0OiBpbW1lci51c2VQcm94aWVzX1xuXHRcdD8gY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KVxuXHRcdDogZ2V0UGx1Z2luKFwiRVM1XCIpLmNyZWF0ZUVTNVByb3h5Xyh2YWx1ZSwgcGFyZW50KVxuXG5cdGNvbnN0IHNjb3BlID0gcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpXG5cdHNjb3BlLmRyYWZ0c18ucHVzaChkcmFmdClcblx0cmV0dXJuIGRyYWZ0XG59XG4iLCJpbXBvcnQge1xuXHRkaWUsXG5cdGlzRHJhZnQsXG5cdHNoYWxsb3dDb3B5LFxuXHRlYWNoLFxuXHREUkFGVF9TVEFURSxcblx0Z2V0LFxuXHRzZXQsXG5cdEltbWVyU3RhdGUsXG5cdGlzRHJhZnRhYmxlLFxuXHRBcmNodHlwZU1hcCxcblx0QXJjaHR5cGVTZXQsXG5cdGdldEFyY2h0eXBlLFxuXHRnZXRQbHVnaW5cbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuLyoqIFRha2VzIGEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBkcmFmdCBhbmQgZmluYWxpemVzIGl0IChidXQgd2l0aG91dCBmcmVlemluZykuIFRoaXMgaXMgYSBncmVhdCB1dGlsaXR5IHRvIHByaW50IHRoZSBjdXJyZW50IHN0YXRlIGR1cmluZyBkZWJ1Z2dpbmcgKG5vIFByb3hpZXMgaW4gdGhlIHdheSkuIFRoZSBvdXRwdXQgb2YgY3VycmVudCBjYW4gYWxzbyBiZSBzYWZlbHkgbGVha2VkIG91dHNpZGUgdGhlIHByb2R1Y2VyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnQ8VD4odmFsdWU6IFQpOiBUXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudCh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKCFpc0RyYWZ0KHZhbHVlKSkgZGllKDIyLCB2YWx1ZSlcblx0cmV0dXJuIGN1cnJlbnRJbXBsKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBjdXJyZW50SW1wbCh2YWx1ZTogYW55KTogYW55IHtcblx0aWYgKCFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHJldHVybiB2YWx1ZVxuXHRjb25zdCBzdGF0ZTogSW1tZXJTdGF0ZSB8IHVuZGVmaW5lZCA9IHZhbHVlW0RSQUZUX1NUQVRFXVxuXHRsZXQgY29weTogYW55XG5cdGNvbnN0IGFyY2hUeXBlID0gZ2V0QXJjaHR5cGUodmFsdWUpXG5cdGlmIChzdGF0ZSkge1xuXHRcdGlmIChcblx0XHRcdCFzdGF0ZS5tb2RpZmllZF8gJiZcblx0XHRcdChzdGF0ZS50eXBlXyA8IDQgfHwgIWdldFBsdWdpbihcIkVTNVwiKS5oYXNDaGFuZ2VzXyhzdGF0ZSBhcyBhbnkpKVxuXHRcdClcblx0XHRcdHJldHVybiBzdGF0ZS5iYXNlX1xuXHRcdC8vIE9wdGltaXphdGlvbjogYXZvaWQgZ2VuZXJhdGluZyBuZXcgZHJhZnRzIGR1cmluZyBjb3B5aW5nXG5cdFx0c3RhdGUuZmluYWxpemVkXyA9IHRydWVcblx0XHRjb3B5ID0gY29weUhlbHBlcih2YWx1ZSwgYXJjaFR5cGUpXG5cdFx0c3RhdGUuZmluYWxpemVkXyA9IGZhbHNlXG5cdH0gZWxzZSB7XG5cdFx0Y29weSA9IGNvcHlIZWxwZXIodmFsdWUsIGFyY2hUeXBlKVxuXHR9XG5cblx0ZWFjaChjb3B5LCAoa2V5LCBjaGlsZFZhbHVlKSA9PiB7XG5cdFx0aWYgKHN0YXRlICYmIGdldChzdGF0ZS5iYXNlXywga2V5KSA9PT0gY2hpbGRWYWx1ZSkgcmV0dXJuIC8vIG5vIG5lZWQgdG8gY29weSBvciBzZWFyY2ggaW4gc29tZXRoaW5nIHRoYXQgZGlkbid0IGNoYW5nZVxuXHRcdHNldChjb3B5LCBrZXksIGN1cnJlbnRJbXBsKGNoaWxkVmFsdWUpKVxuXHR9KVxuXHQvLyBJbiB0aGUgZnV0dXJlLCB3ZSBtaWdodCBjb25zaWRlciBmcmVlemluZyBoZXJlLCBiYXNlZCBvbiB0aGUgY3VycmVudCBzZXR0aW5nc1xuXHRyZXR1cm4gYXJjaFR5cGUgPT09IEFyY2h0eXBlU2V0ID8gbmV3IFNldChjb3B5KSA6IGNvcHlcbn1cblxuZnVuY3Rpb24gY29weUhlbHBlcih2YWx1ZTogYW55LCBhcmNoVHlwZTogbnVtYmVyKTogYW55IHtcblx0Ly8gY3JlYXRlcyBhIHNoYWxsb3cgY29weSwgZXZlbiBpZiBpdCBpcyBhIG1hcCBvciBzZXRcblx0c3dpdGNoIChhcmNoVHlwZSkge1xuXHRcdGNhc2UgQXJjaHR5cGVNYXA6XG5cdFx0XHRyZXR1cm4gbmV3IE1hcCh2YWx1ZSlcblx0XHRjYXNlIEFyY2h0eXBlU2V0OlxuXHRcdFx0Ly8gU2V0IHdpbGwgYmUgY2xvbmVkIGFzIGFycmF5IHRlbXBvcmFyaWx5LCBzbyB0aGF0IHdlIGNhbiByZXBsYWNlIGluZGl2aWR1YWwgaXRlbXNcblx0XHRcdHJldHVybiBBcnJheS5mcm9tKHZhbHVlKVxuXHR9XG5cdHJldHVybiBzaGFsbG93Q29weSh2YWx1ZSlcbn1cbiIsImltcG9ydCB7XG5cdEltbWVyU3RhdGUsXG5cdERyYWZ0ZWQsXG5cdEVTNUFycmF5U3RhdGUsXG5cdEVTNU9iamVjdFN0YXRlLFxuXHRlYWNoLFxuXHRoYXMsXG5cdGlzRHJhZnQsXG5cdGxhdGVzdCxcblx0RFJBRlRfU1RBVEUsXG5cdGlzLFxuXHRsb2FkUGx1Z2luLFxuXHRJbW1lclNjb3BlLFxuXHRQcm94eVR5cGVFUzVBcnJheSxcblx0UHJveHlUeXBlRVM1T2JqZWN0LFxuXHRnZXRDdXJyZW50U2NvcGUsXG5cdGRpZSxcblx0bWFya0NoYW5nZWQsXG5cdG9iamVjdFRyYXBzLFxuXHRvd25LZXlzLFxuXHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzXG59IGZyb20gXCIuLi9pbnRlcm5hbFwiXG5cbnR5cGUgRVM1U3RhdGUgPSBFUzVBcnJheVN0YXRlIHwgRVM1T2JqZWN0U3RhdGVcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUVTNSgpIHtcblx0ZnVuY3Rpb24gd2lsbEZpbmFsaXplRVM1Xyhcblx0XHRzY29wZTogSW1tZXJTY29wZSxcblx0XHRyZXN1bHQ6IGFueSxcblx0XHRpc1JlcGxhY2VkOiBib29sZWFuXG5cdCkge1xuXHRcdGlmICghaXNSZXBsYWNlZCkge1xuXHRcdFx0aWYgKHNjb3BlLnBhdGNoZXNfKSB7XG5cdFx0XHRcdG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoc2NvcGUuZHJhZnRzXyFbMF0pXG5cdFx0XHR9XG5cdFx0XHQvLyBUaGlzIGlzIGZhc3RlciB3aGVuIHdlIGRvbid0IGNhcmUgYWJvdXQgd2hpY2ggYXR0cmlidXRlcyBjaGFuZ2VkLlxuXHRcdFx0bWFya0NoYW5nZXNTd2VlcChzY29wZS5kcmFmdHNfKVxuXHRcdH1cblx0XHQvLyBXaGVuIGEgY2hpbGQgZHJhZnQgaXMgcmV0dXJuZWQsIGxvb2sgZm9yIGNoYW5nZXMuXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHRpc0RyYWZ0KHJlc3VsdCkgJiZcblx0XHRcdChyZXN1bHRbRFJBRlRfU1RBVEVdIGFzIEVTNVN0YXRlKS5zY29wZV8gPT09IHNjb3BlXG5cdFx0KSB7XG5cdFx0XHRtYXJrQ2hhbmdlc1N3ZWVwKHNjb3BlLmRyYWZ0c18pXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlRVM1RHJhZnQoaXNBcnJheTogYm9vbGVhbiwgYmFzZTogYW55KSB7XG5cdFx0aWYgKGlzQXJyYXkpIHtcblx0XHRcdGNvbnN0IGRyYWZ0ID0gbmV3IEFycmF5KGJhc2UubGVuZ3RoKVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZHJhZnQsIFwiXCIgKyBpLCBwcm94eVByb3BlcnR5KGksIHRydWUpKVxuXHRcdFx0cmV0dXJuIGRyYWZ0XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKVxuXHRcdFx0ZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFIGFzIGFueV1cblx0XHRcdGNvbnN0IGtleXMgPSBvd25LZXlzKGRlc2NyaXB0b3JzKVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGtleTogYW55ID0ga2V5c1tpXVxuXHRcdFx0XHRkZXNjcmlwdG9yc1trZXldID0gcHJveHlQcm9wZXJ0eShcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0aXNBcnJheSB8fCAhIWRlc2NyaXB0b3JzW2tleV0uZW51bWVyYWJsZVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZSksIGRlc2NyaXB0b3JzKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUVTNVByb3h5XzxUPihcblx0XHRiYXNlOiBULFxuXHRcdHBhcmVudD86IEltbWVyU3RhdGVcblx0KTogRHJhZnRlZDxULCBFUzVPYmplY3RTdGF0ZSB8IEVTNUFycmF5U3RhdGU+IHtcblx0XHRjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShiYXNlKVxuXHRcdGNvbnN0IGRyYWZ0ID0gY3JlYXRlRVM1RHJhZnQoaXNBcnJheSwgYmFzZSlcblxuXHRcdGNvbnN0IHN0YXRlOiBFUzVPYmplY3RTdGF0ZSB8IEVTNUFycmF5U3RhdGUgPSB7XG5cdFx0XHR0eXBlXzogaXNBcnJheSA/IFByb3h5VHlwZUVTNUFycmF5IDogKFByb3h5VHlwZUVTNU9iamVjdCBhcyBhbnkpLFxuXHRcdFx0c2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG5cdFx0XHRtb2RpZmllZF86IGZhbHNlLFxuXHRcdFx0ZmluYWxpemVkXzogZmFsc2UsXG5cdFx0XHRhc3NpZ25lZF86IHt9LFxuXHRcdFx0cGFyZW50XzogcGFyZW50LFxuXHRcdFx0Ly8gYmFzZSBpcyB0aGUgb2JqZWN0IHdlIGFyZSBkcmFmdGluZ1xuXHRcdFx0YmFzZV86IGJhc2UsXG5cdFx0XHQvLyBkcmFmdCBpcyB0aGUgZHJhZnQgb2JqZWN0IGl0c2VsZiwgdGhhdCB0cmFwcyBhbGwgcmVhZHMgYW5kIHJlYWRzIGZyb20gZWl0aGVyIHRoZSBiYXNlIChpZiB1bm1vZGlmaWVkKSBvciBjb3B5IChpZiBtb2RpZmllZClcblx0XHRcdGRyYWZ0XzogZHJhZnQsXG5cdFx0XHRjb3B5XzogbnVsbCxcblx0XHRcdHJldm9rZWRfOiBmYWxzZSxcblx0XHRcdGlzTWFudWFsXzogZmFsc2Vcblx0XHR9XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZHJhZnQsIERSQUZUX1NUQVRFLCB7XG5cdFx0XHR2YWx1ZTogc3RhdGUsXG5cdFx0XHQvLyBlbnVtZXJhYmxlOiBmYWxzZSA8LSB0aGUgZGVmYXVsdFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KVxuXHRcdHJldHVybiBkcmFmdFxuXHR9XG5cblx0Ly8gcHJvcGVydHkgZGVzY3JpcHRvcnMgYXJlIHJlY3ljbGVkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBjcmVhdGUgYSBnZXQgYW5kIHNldCBjbG9zdXJlIHBlciBwcm9wZXJ0eSxcblx0Ly8gYnV0IHNoYXJlIHRoZW0gYWxsIGluc3RlYWRcblx0Y29uc3QgZGVzY3JpcHRvcnM6IHtbcHJvcDogc3RyaW5nXTogUHJvcGVydHlEZXNjcmlwdG9yfSA9IHt9XG5cblx0ZnVuY3Rpb24gcHJveHlQcm9wZXJ0eShcblx0XHRwcm9wOiBzdHJpbmcgfCBudW1iZXIsXG5cdFx0ZW51bWVyYWJsZTogYm9vbGVhblxuXHQpOiBQcm9wZXJ0eURlc2NyaXB0b3Ige1xuXHRcdGxldCBkZXNjID0gZGVzY3JpcHRvcnNbcHJvcF1cblx0XHRpZiAoZGVzYykge1xuXHRcdFx0ZGVzYy5lbnVtZXJhYmxlID0gZW51bWVyYWJsZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXNjcmlwdG9yc1twcm9wXSA9IGRlc2MgPSB7XG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZW51bWVyYWJsZSxcblx0XHRcdFx0Z2V0KHRoaXM6IGFueSkge1xuXHRcdFx0XHRcdGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdFx0XHRpZiAoX19ERVZfXykgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0VHJhcHMuZ2V0KHN0YXRlLCBwcm9wKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQodGhpczogYW55LCB2YWx1ZSkge1xuXHRcdFx0XHRcdGNvbnN0IHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdFx0XHRpZiAoX19ERVZfXykgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0XHRvYmplY3RUcmFwcy5zZXQoc3RhdGUsIHByb3AsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkZXNjXG5cdH1cblxuXHQvLyBUaGlzIGxvb2tzIGV4cGVuc2l2ZSwgYnV0IG9ubHkgcHJveGllcyBhcmUgdmlzaXRlZCwgYW5kIG9ubHkgb2JqZWN0cyB3aXRob3V0IGtub3duIGNoYW5nZXMgYXJlIHNjYW5uZWQuXG5cdGZ1bmN0aW9uIG1hcmtDaGFuZ2VzU3dlZXAoZHJhZnRzOiBEcmFmdGVkPGFueSwgSW1tZXJTdGF0ZT5bXSkge1xuXHRcdC8vIFRoZSBuYXR1cmFsIG9yZGVyIG9mIGRyYWZ0cyBpbiB0aGUgYHNjb3BlYCBhcnJheSBpcyBiYXNlZCBvbiB3aGVuIHRoZXlcblx0XHQvLyB3ZXJlIGFjY2Vzc2VkLiBCeSBwcm9jZXNzaW5nIGRyYWZ0cyBpbiByZXZlcnNlIG5hdHVyYWwgb3JkZXIsIHdlIGhhdmUgYVxuXHRcdC8vIGJldHRlciBjaGFuY2Ugb2YgcHJvY2Vzc2luZyBsZWFmIG5vZGVzIGZpcnN0LiBXaGVuIGEgbGVhZiBub2RlIGlzIGtub3duIHRvXG5cdFx0Ly8gaGF2ZSBjaGFuZ2VkLCB3ZSBjYW4gYXZvaWQgYW55IHRyYXZlcnNhbCBvZiBpdHMgYW5jZXN0b3Igbm9kZXMuXG5cdFx0Zm9yIChsZXQgaSA9IGRyYWZ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IEVTNVN0YXRlID0gZHJhZnRzW2ldW0RSQUZUX1NUQVRFXVxuXHRcdFx0aWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcblx0XHRcdFx0c3dpdGNoIChzdGF0ZS50eXBlXykge1xuXHRcdFx0XHRcdGNhc2UgUHJveHlUeXBlRVM1QXJyYXk6XG5cdFx0XHRcdFx0XHRpZiAoaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKSkgbWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdGNhc2UgUHJveHlUeXBlRVM1T2JqZWN0OlxuXHRcdFx0XHRcdFx0aWYgKGhhc09iamVjdENoYW5nZXMoc3RhdGUpKSBtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KG9iamVjdDogYW55KSB7XG5cdFx0aWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gXCJvYmplY3RcIikgcmV0dXJuXG5cdFx0Y29uc3Qgc3RhdGU6IEVTNVN0YXRlIHwgdW5kZWZpbmVkID0gb2JqZWN0W0RSQUZUX1NUQVRFXVxuXHRcdGlmICghc3RhdGUpIHJldHVyblxuXHRcdGNvbnN0IHtiYXNlXywgZHJhZnRfLCBhc3NpZ25lZF8sIHR5cGVffSA9IHN0YXRlXG5cdFx0aWYgKHR5cGVfID09PSBQcm94eVR5cGVFUzVPYmplY3QpIHtcblx0XHRcdC8vIExvb2sgZm9yIGFkZGVkIGtleXMuXG5cdFx0XHQvLyBwcm9iYWJseSB0aGVyZSBpcyBhIGZhc3RlciB3YXkgdG8gZGV0ZWN0IGNoYW5nZXMsIGFzIHN3ZWVwICsgcmVjdXJzZSBzZWVtcyB0byBkbyBzb21lXG5cdFx0XHQvLyB1bm5lY2Vzc2FyeSB3b3JrLlxuXHRcdFx0Ly8gYWxzbzogcHJvYmFibHkgd2UgY2FuIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiB3ZSBkZXRlY3QgaGVyZSwgdG8gc3BlZWQgdXAgdHJlZSBmaW5hbGl6YXRpb24hXG5cdFx0XHRlYWNoKGRyYWZ0Xywga2V5ID0+IHtcblx0XHRcdFx0aWYgKChrZXkgYXMgYW55KSA9PT0gRFJBRlRfU1RBVEUpIHJldHVyblxuXHRcdFx0XHQvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXHRcdFx0XHRpZiAoKGJhc2VfIGFzIGFueSlba2V5XSA9PT0gdW5kZWZpbmVkICYmICFoYXMoYmFzZV8sIGtleSkpIHtcblx0XHRcdFx0XHRhc3NpZ25lZF9ba2V5XSA9IHRydWVcblx0XHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0fSBlbHNlIGlmICghYXNzaWduZWRfW2tleV0pIHtcblx0XHRcdFx0XHQvLyBPbmx5IHVudG91Y2hlZCBwcm9wZXJ0aWVzIHRyaWdnZXIgcmVjdXJzaW9uLlxuXHRcdFx0XHRcdG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoZHJhZnRfW2tleV0pXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQvLyBMb29rIGZvciByZW1vdmVkIGtleXMuXG5cdFx0XHRlYWNoKGJhc2VfLCBrZXkgPT4ge1xuXHRcdFx0XHQvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXHRcdFx0XHRpZiAoZHJhZnRfW2tleV0gPT09IHVuZGVmaW5lZCAmJiAhaGFzKGRyYWZ0Xywga2V5KSkge1xuXHRcdFx0XHRcdGFzc2lnbmVkX1trZXldID0gZmFsc2Vcblx0XHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9IGVsc2UgaWYgKHR5cGVfID09PSBQcm94eVR5cGVFUzVBcnJheSkge1xuXHRcdFx0aWYgKGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSBhcyBFUzVBcnJheVN0YXRlKSkge1xuXHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0YXNzaWduZWRfLmxlbmd0aCA9IHRydWVcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRyYWZ0Xy5sZW5ndGggPCBiYXNlXy5sZW5ndGgpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IGRyYWZ0Xy5sZW5ndGg7IGkgPCBiYXNlXy5sZW5ndGg7IGkrKykgYXNzaWduZWRfW2ldID0gZmFsc2Vcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSBiYXNlXy5sZW5ndGg7IGkgPCBkcmFmdF8ubGVuZ3RoOyBpKyspIGFzc2lnbmVkX1tpXSA9IHRydWVcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWluaW11bSBjb3VudCBpcyBlbm91Z2gsIHRoZSBvdGhlciBwYXJ0cyBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdFx0XHRjb25zdCBtaW4gPSBNYXRoLm1pbihkcmFmdF8ubGVuZ3RoLCBiYXNlXy5sZW5ndGgpXG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWluOyBpKyspIHtcblx0XHRcdFx0Ly8gT25seSB1bnRvdWNoZWQgaW5kaWNlcyB0cmlnZ2VyIHJlY3Vyc2lvbi5cblx0XHRcdFx0aWYgKGFzc2lnbmVkX1tpXSA9PT0gdW5kZWZpbmVkKSBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KGRyYWZ0X1tpXSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoYXNPYmplY3RDaGFuZ2VzKHN0YXRlOiBFUzVPYmplY3RTdGF0ZSkge1xuXHRcdGNvbnN0IHtiYXNlXywgZHJhZnRffSA9IHN0YXRlXG5cblx0XHQvLyBTZWFyY2ggZm9yIGFkZGVkIGtleXMgYW5kIGNoYW5nZWQga2V5cy4gU3RhcnQgYXQgdGhlIGJhY2ssIGJlY2F1c2Vcblx0XHQvLyBub24tbnVtZXJpYyBrZXlzIGFyZSBvcmRlcmVkIGJ5IHRpbWUgb2YgZGVmaW5pdGlvbiBvbiB0aGUgb2JqZWN0LlxuXHRcdGNvbnN0IGtleXMgPSBvd25LZXlzKGRyYWZ0Xylcblx0XHRmb3IgKGxldCBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Y29uc3Qga2V5OiBhbnkgPSBrZXlzW2ldXG5cdFx0XHRpZiAoa2V5ID09PSBEUkFGVF9TVEFURSkgY29udGludWVcblx0XHRcdGNvbnN0IGJhc2VWYWx1ZSA9IGJhc2VfW2tleV1cblx0XHRcdC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG5cdFx0XHRpZiAoYmFzZVZhbHVlID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlXywga2V5KSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0Ly8gT25jZSBhIGJhc2Uga2V5IGlzIGRlbGV0ZWQsIGZ1dHVyZSBjaGFuZ2VzIGdvIHVuZGV0ZWN0ZWQsIGJlY2F1c2UgaXRzXG5cdFx0XHQvLyBkZXNjcmlwdG9yIGlzIGVyYXNlZC4gVGhpcyBicmFuY2ggZGV0ZWN0cyBhbnkgbWlzc2VkIGNoYW5nZXMuXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBkcmFmdF9ba2V5XVxuXHRcdFx0XHRjb25zdCBzdGF0ZTogSW1tZXJTdGF0ZSA9IHZhbHVlICYmIHZhbHVlW0RSQUZUX1NUQVRFXVxuXHRcdFx0XHRpZiAoc3RhdGUgPyBzdGF0ZS5iYXNlXyAhPT0gYmFzZVZhbHVlIDogIWlzKHZhbHVlLCBiYXNlVmFsdWUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEF0IHRoaXMgcG9pbnQsIG5vIGtleXMgd2VyZSBhZGRlZCBvciBjaGFuZ2VkLlxuXHRcdC8vIENvbXBhcmUga2V5IGNvdW50IHRvIGRldGVybWluZSBpZiBrZXlzIHdlcmUgZGVsZXRlZC5cblx0XHRjb25zdCBiYXNlSXNEcmFmdCA9ICEhYmFzZV9bRFJBRlRfU1RBVEUgYXMgYW55XVxuXHRcdHJldHVybiBrZXlzLmxlbmd0aCAhPT0gb3duS2V5cyhiYXNlXykubGVuZ3RoICsgKGJhc2VJc0RyYWZ0ID8gMCA6IDEpIC8vICsgMSB0byBjb3JyZWN0IGZvciBEUkFGVF9TVEFURVxuXHR9XG5cblx0ZnVuY3Rpb24gaGFzQXJyYXlDaGFuZ2VzKHN0YXRlOiBFUzVBcnJheVN0YXRlKSB7XG5cdFx0Y29uc3Qge2RyYWZ0X30gPSBzdGF0ZVxuXHRcdGlmIChkcmFmdF8ubGVuZ3RoICE9PSBzdGF0ZS5iYXNlXy5sZW5ndGgpIHJldHVybiB0cnVlXG5cdFx0Ly8gU2VlICMxMTZcblx0XHQvLyBJZiB3ZSBmaXJzdCBzaG9ydGVuIHRoZSBsZW5ndGgsIG91ciBhcnJheSBpbnRlcmNlcHRvcnMgd2lsbCBiZSByZW1vdmVkLlxuXHRcdC8vIElmIGFmdGVyIHRoYXQgbmV3IGl0ZW1zIGFyZSBhZGRlZCwgcmVzdWx0IGluIHRoZSBzYW1lIG9yaWdpbmFsIGxlbmd0aCxcblx0XHQvLyB0aG9zZSBsYXN0IGl0ZW1zIHdpbGwgaGF2ZSBubyBpbnRlcmNlcHRpbmcgcHJvcGVydHkuXG5cdFx0Ly8gU28gaWYgdGhlcmUgaXMgbm8gb3duIGRlc2NyaXB0b3Igb24gdGhlIGxhc3QgcG9zaXRpb24sIHdlIGtub3cgdGhhdCBpdGVtcyB3ZXJlIHJlbW92ZWQgYW5kIGFkZGVkXG5cdFx0Ly8gTi5CLjogc3BsaWNlLCB1bnNoaWZ0LCBldGMgb25seSBzaGlmdCB2YWx1ZXMgYXJvdW5kLCBidXQgbm90IHByb3AgZGVzY3JpcHRvcnMsIHNvIHdlIG9ubHkgaGF2ZSB0byBjaGVja1xuXHRcdC8vIHRoZSBsYXN0IG9uZVxuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuXHRcdFx0ZHJhZnRfLFxuXHRcdFx0ZHJhZnRfLmxlbmd0aCAtIDFcblx0XHQpXG5cdFx0Ly8gZGVzY3JpcHRvciBjYW4gYmUgbnVsbCwgYnV0IG9ubHkgZm9yIG5ld2x5IGNyZWF0ZWQgc3BhcnNlIGFycmF5cywgZWcuIG5ldyBBcnJheSgxMClcblx0XHRpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5nZXQpIHJldHVybiB0cnVlXG5cdFx0Ly8gRm9yIGFsbCBvdGhlciBjYXNlcywgd2UgZG9uJ3QgaGF2ZSB0byBjb21wYXJlLCBhcyB0aGV5IHdvdWxkIGhhdmUgYmVlbiBwaWNrZWQgdXAgYnkgdGhlIGluZGV4IHNldHRlcnNcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGZ1bmN0aW9uIGhhc0NoYW5nZXNfKHN0YXRlOiBFUzVTdGF0ZSkge1xuXHRcdHJldHVybiBzdGF0ZS50eXBlXyA9PT0gUHJveHlUeXBlRVM1T2JqZWN0XG5cdFx0XHQ/IGhhc09iamVjdENoYW5nZXMoc3RhdGUpXG5cdFx0XHQ6IGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSlcblx0fVxuXG5cdGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZTogYW55IC8qRVM1U3RhdGUgfCBNYXBTdGF0ZSB8IFNldFN0YXRlKi8pIHtcblx0XHRpZiAoc3RhdGUucmV2b2tlZF8pIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSlcblx0fVxuXG5cdGxvYWRQbHVnaW4oXCJFUzVcIiwge1xuXHRcdGNyZWF0ZUVTNVByb3h5Xyxcblx0XHR3aWxsRmluYWxpemVFUzVfLFxuXHRcdGhhc0NoYW5nZXNfXG5cdH0pXG59XG4iLCJpbXBvcnQge1xuXHRJbW1lclN0YXRlLFxuXHRQYXRjaCxcblx0U2V0U3RhdGUsXG5cdEVTNUFycmF5U3RhdGUsXG5cdFByb3h5QXJyYXlTdGF0ZSxcblx0TWFwU3RhdGUsXG5cdEVTNU9iamVjdFN0YXRlLFxuXHRQcm94eU9iamVjdFN0YXRlLFxuXHRQYXRjaFBhdGgsXG5cdGdldCxcblx0ZWFjaCxcblx0aGFzLFxuXHRnZXRBcmNodHlwZSxcblx0aXNTZXQsXG5cdGlzTWFwLFxuXHRsb2FkUGx1Z2luLFxuXHRQcm94eVR5cGVQcm94eU9iamVjdCxcblx0UHJveHlUeXBlRVM1T2JqZWN0LFxuXHRQcm94eVR5cGVNYXAsXG5cdFByb3h5VHlwZUVTNUFycmF5LFxuXHRQcm94eVR5cGVQcm94eUFycmF5LFxuXHRQcm94eVR5cGVTZXQsXG5cdEFyY2h0eXBlTWFwLFxuXHRBcmNodHlwZVNldCxcblx0QXJjaHR5cGVBcnJheSxcblx0ZGllLFxuXHRpc0RyYWZ0LFxuXHRpc0RyYWZ0YWJsZVxufSBmcm9tIFwiLi4vaW50ZXJuYWxcIlxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlUGF0Y2hlcygpIHtcblx0Y29uc3QgUkVQTEFDRSA9IFwicmVwbGFjZVwiXG5cdGNvbnN0IEFERCA9IFwiYWRkXCJcblx0Y29uc3QgUkVNT1ZFID0gXCJyZW1vdmVcIlxuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc18oXG5cdFx0c3RhdGU6IEltbWVyU3RhdGUsXG5cdFx0YmFzZVBhdGg6IFBhdGNoUGF0aCxcblx0XHRwYXRjaGVzOiBQYXRjaFtdLFxuXHRcdGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdCk6IHZvaWQge1xuXHRcdHN3aXRjaCAoc3RhdGUudHlwZV8pIHtcblx0XHRcdGNhc2UgUHJveHlUeXBlUHJveHlPYmplY3Q6XG5cdFx0XHRjYXNlIFByb3h5VHlwZUVTNU9iamVjdDpcblx0XHRcdGNhc2UgUHJveHlUeXBlTWFwOlxuXHRcdFx0XHRyZXR1cm4gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKFxuXHRcdFx0XHRcdHN0YXRlLFxuXHRcdFx0XHRcdGJhc2VQYXRoLFxuXHRcdFx0XHRcdHBhdGNoZXMsXG5cdFx0XHRcdFx0aW52ZXJzZVBhdGNoZXNcblx0XHRcdFx0KVxuXHRcdFx0Y2FzZSBQcm94eVR5cGVFUzVBcnJheTpcblx0XHRcdGNhc2UgUHJveHlUeXBlUHJveHlBcnJheTpcblx0XHRcdFx0cmV0dXJuIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpXG5cdFx0XHRjYXNlIFByb3h5VHlwZVNldDpcblx0XHRcdFx0cmV0dXJuIGdlbmVyYXRlU2V0UGF0Y2hlcyhcblx0XHRcdFx0XHQoc3RhdGUgYXMgYW55KSBhcyBTZXRTdGF0ZSxcblx0XHRcdFx0XHRiYXNlUGF0aCxcblx0XHRcdFx0XHRwYXRjaGVzLFxuXHRcdFx0XHRcdGludmVyc2VQYXRjaGVzXG5cdFx0XHRcdClcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZW5lcmF0ZUFycmF5UGF0Y2hlcyhcblx0XHRzdGF0ZTogRVM1QXJyYXlTdGF0ZSB8IFByb3h5QXJyYXlTdGF0ZSxcblx0XHRiYXNlUGF0aDogUGF0Y2hQYXRoLFxuXHRcdHBhdGNoZXM6IFBhdGNoW10sXG5cdFx0aW52ZXJzZVBhdGNoZXM6IFBhdGNoW11cblx0KSB7XG5cdFx0bGV0IHtiYXNlXywgYXNzaWduZWRffSA9IHN0YXRlXG5cdFx0bGV0IGNvcHlfID0gc3RhdGUuY29weV8hXG5cblx0XHQvLyBSZWR1Y2UgY29tcGxleGl0eSBieSBlbnN1cmluZyBgYmFzZWAgaXMgbmV2ZXIgbG9uZ2VyLlxuXHRcdGlmIChjb3B5Xy5sZW5ndGggPCBiYXNlXy5sZW5ndGgpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdDtbYmFzZV8sIGNvcHlfXSA9IFtjb3B5XywgYmFzZV9dXG5cdFx0XHQ7W3BhdGNoZXMsIGludmVyc2VQYXRjaGVzXSA9IFtpbnZlcnNlUGF0Y2hlcywgcGF0Y2hlc11cblx0XHR9XG5cblx0XHQvLyBQcm9jZXNzIHJlcGxhY2VkIGluZGljZXMuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlXy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFzc2lnbmVkX1tpXSAmJiBjb3B5X1tpXSAhPT0gYmFzZV9baV0pIHtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pXG5cdFx0XHRcdHBhdGNoZXMucHVzaCh7XG5cdFx0XHRcdFx0b3A6IFJFUExBQ0UsXG5cdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHQvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcblx0XHRcdFx0XHQvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cblx0XHRcdFx0XHR2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGludmVyc2VQYXRjaGVzLnB1c2goe1xuXHRcdFx0XHRcdG9wOiBSRVBMQUNFLFxuXHRcdFx0XHRcdHBhdGgsXG5cdFx0XHRcdFx0dmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGJhc2VfW2ldKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFByb2Nlc3MgYWRkZWQgaW5kaWNlcy5cblx0XHRmb3IgKGxldCBpID0gYmFzZV8ubGVuZ3RoOyBpIDwgY29weV8ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKVxuXHRcdFx0cGF0Y2hlcy5wdXNoKHtcblx0XHRcdFx0b3A6IEFERCxcblx0XHRcdFx0cGF0aCxcblx0XHRcdFx0Ly8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG5cdFx0XHRcdC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuXHRcdFx0XHR2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG5cdFx0XHR9KVxuXHRcdH1cblx0XHRpZiAoYmFzZV8ubGVuZ3RoIDwgY29weV8ubGVuZ3RoKSB7XG5cdFx0XHRpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcblx0XHRcdFx0b3A6IFJFUExBQ0UsXG5cdFx0XHRcdHBhdGg6IGJhc2VQYXRoLmNvbmNhdChbXCJsZW5ndGhcIl0pLFxuXHRcdFx0XHR2YWx1ZTogYmFzZV8ubGVuZ3RoXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdC8vIFRoaXMgaXMgdXNlZCBmb3IgYm90aCBNYXAgb2JqZWN0cyBhbmQgbm9ybWFsIG9iamVjdHMuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc0Zyb21Bc3NpZ25lZChcblx0XHRzdGF0ZTogTWFwU3RhdGUgfCBFUzVPYmplY3RTdGF0ZSB8IFByb3h5T2JqZWN0U3RhdGUsXG5cdFx0YmFzZVBhdGg6IFBhdGNoUGF0aCxcblx0XHRwYXRjaGVzOiBQYXRjaFtdLFxuXHRcdGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdCkge1xuXHRcdGNvbnN0IHtiYXNlXywgY29weV99ID0gc3RhdGVcblx0XHRlYWNoKHN0YXRlLmFzc2lnbmVkXyEsIChrZXksIGFzc2lnbmVkVmFsdWUpID0+IHtcblx0XHRcdGNvbnN0IG9yaWdWYWx1ZSA9IGdldChiYXNlXywga2V5KVxuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXQoY29weV8hLCBrZXkpXG5cdFx0XHRjb25zdCBvcCA9ICFhc3NpZ25lZFZhbHVlID8gUkVNT1ZFIDogaGFzKGJhc2VfLCBrZXkpID8gUkVQTEFDRSA6IEFERFxuXHRcdFx0aWYgKG9yaWdWYWx1ZSA9PT0gdmFsdWUgJiYgb3AgPT09IFJFUExBQ0UpIHJldHVyblxuXHRcdFx0Y29uc3QgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChrZXkgYXMgYW55KVxuXHRcdFx0cGF0Y2hlcy5wdXNoKG9wID09PSBSRU1PVkUgPyB7b3AsIHBhdGh9IDoge29wLCBwYXRoLCB2YWx1ZX0pXG5cdFx0XHRpbnZlcnNlUGF0Y2hlcy5wdXNoKFxuXHRcdFx0XHRvcCA9PT0gQUREXG5cdFx0XHRcdFx0PyB7b3A6IFJFTU9WRSwgcGF0aH1cblx0XHRcdFx0XHQ6IG9wID09PSBSRU1PVkVcblx0XHRcdFx0XHQ/IHtvcDogQURELCBwYXRoLCB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKX1cblx0XHRcdFx0XHQ6IHtvcDogUkVQTEFDRSwgcGF0aCwgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSl9XG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIGdlbmVyYXRlU2V0UGF0Y2hlcyhcblx0XHRzdGF0ZTogU2V0U3RhdGUsXG5cdFx0YmFzZVBhdGg6IFBhdGNoUGF0aCxcblx0XHRwYXRjaGVzOiBQYXRjaFtdLFxuXHRcdGludmVyc2VQYXRjaGVzOiBQYXRjaFtdXG5cdCkge1xuXHRcdGxldCB7YmFzZV8sIGNvcHlffSA9IHN0YXRlXG5cblx0XHRsZXQgaSA9IDBcblx0XHRiYXNlXy5mb3JFYWNoKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRpZiAoIWNvcHlfIS5oYXModmFsdWUpKSB7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKVxuXHRcdFx0XHRwYXRjaGVzLnB1c2goe1xuXHRcdFx0XHRcdG9wOiBSRU1PVkUsXG5cdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcblx0XHRcdFx0XHRvcDogQURELFxuXHRcdFx0XHRcdHBhdGgsXG5cdFx0XHRcdFx0dmFsdWVcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGkrK1xuXHRcdH0pXG5cdFx0aSA9IDBcblx0XHRjb3B5XyEuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0aWYgKCFiYXNlXy5oYXModmFsdWUpKSB7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKVxuXHRcdFx0XHRwYXRjaGVzLnB1c2goe1xuXHRcdFx0XHRcdG9wOiBBREQsXG5cdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcblx0XHRcdFx0XHRvcDogUkVNT1ZFLFxuXHRcdFx0XHRcdHBhdGgsXG5cdFx0XHRcdFx0dmFsdWVcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdGkrK1xuXHRcdH0pXG5cdH1cblxuXHRmdW5jdGlvbiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oXG5cdFx0cm9vdFN0YXRlOiBJbW1lclN0YXRlLFxuXHRcdHJlcGxhY2VtZW50OiBhbnksXG5cdFx0cGF0Y2hlczogUGF0Y2hbXSxcblx0XHRpbnZlcnNlUGF0Y2hlczogUGF0Y2hbXVxuXHQpOiB2b2lkIHtcblx0XHRwYXRjaGVzLnB1c2goe1xuXHRcdFx0b3A6IFJFUExBQ0UsXG5cdFx0XHRwYXRoOiBbXSxcblx0XHRcdHZhbHVlOiByZXBsYWNlbWVudFxuXHRcdH0pXG5cdFx0aW52ZXJzZVBhdGNoZXMucHVzaCh7XG5cdFx0XHRvcDogUkVQTEFDRSxcblx0XHRcdHBhdGg6IFtdLFxuXHRcdFx0dmFsdWU6IHJvb3RTdGF0ZS5iYXNlX1xuXHRcdH0pXG5cdH1cblxuXHRmdW5jdGlvbiBhcHBseVBhdGNoZXNfPFQ+KGRyYWZ0OiBULCBwYXRjaGVzOiBQYXRjaFtdKTogVCB7XG5cdFx0cGF0Y2hlcy5mb3JFYWNoKHBhdGNoID0+IHtcblx0XHRcdGNvbnN0IHtwYXRoLCBvcH0gPSBwYXRjaFxuXG5cdFx0XHRsZXQgYmFzZTogYW55ID0gZHJhZnRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0YmFzZSA9IGdldChiYXNlLCBwYXRoW2ldKVxuXHRcdFx0XHRpZiAodHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIGRpZSgxNSwgcGF0aC5qb2luKFwiL1wiKSlcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUocGF0Y2gudmFsdWUpIC8vIHVzZWQgdG8gY2xvbmUgcGF0Y2ggdG8gZW5zdXJlIG9yaWdpbmFsIHBhdGNoIGlzIG5vdCBtb2RpZmllZCwgc2VlICM0MTFcblx0XHRcdGNvbnN0IGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXVxuXHRcdFx0c3dpdGNoIChvcCkge1xuXHRcdFx0XHRjYXNlIFJFUExBQ0U6XG5cdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlTWFwOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSlcblx0XHRcdFx0XHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlU2V0OlxuXHRcdFx0XHRcdFx0XHRkaWUoMTYpXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHQvLyBpZiB2YWx1ZSBpcyBhbiBvYmplY3QsIHRoZW4gaXQncyBhc3NpZ25lZCBieSByZWZlcmVuY2Vcblx0XHRcdFx0XHRcdFx0Ly8gaW4gdGhlIGZvbGxvd2luZyBhZGQgb3IgcmVtb3ZlIG9wcywgdGhlIHZhbHVlIGZpZWxkIGluc2lkZSB0aGUgcGF0Y2ggd2lsbCBhbHNvIGJlIG1vZGlmeWVkXG5cdFx0XHRcdFx0XHRcdC8vIHNvIHdlIHVzZSB2YWx1ZSBmcm9tIHRoZSBjbG9uZWQgcGF0Y2hcblx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKGJhc2Vba2V5XSA9IHZhbHVlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSBBREQ6XG5cdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlQXJyYXk6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBiYXNlLnNwbGljZShrZXkgYXMgYW55LCAwLCB2YWx1ZSlcblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVNYXA6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBiYXNlLnNldChrZXksIHZhbHVlKVxuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZVNldDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2UuYWRkKHZhbHVlKVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChiYXNlW2tleV0gPSB2YWx1ZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgUkVNT1ZFOlxuXHRcdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSBBcmNodHlwZUFycmF5OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYmFzZS5zcGxpY2Uoa2V5IGFzIGFueSwgMSlcblx0XHRcdFx0XHRcdGNhc2UgQXJjaHR5cGVNYXA6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBiYXNlLmRlbGV0ZShrZXkpXG5cdFx0XHRcdFx0XHRjYXNlIEFyY2h0eXBlU2V0OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYmFzZS5kZWxldGUocGF0Y2gudmFsdWUpXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZGVsZXRlIGJhc2Vba2V5XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRkaWUoMTcsIG9wKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRyZXR1cm4gZHJhZnRcblx0fVxuXG5cdC8vIG9wdGltaXplOiB0aGlzIGlzIHF1aXRlIGEgcGVyZm9ybWFuY2UgaGl0LCBjYW4gd2UgZGV0ZWN0IGludGVsbGlnZW50bHkgd2hlbiBpdCBpcyBuZWVkZWQ/XG5cdC8vIEUuZy4gYXV0by1kcmFmdCB3aGVuIG5ldyBvYmplY3RzIGZyb20gb3V0c2lkZSBhcmUgYXNzaWduZWQgYW5kIG1vZGlmaWVkP1xuXHQvLyAoU2VlIGZhaWxpbmcgdGVzdCB3aGVuIGRlZXBDbG9uZSBqdXN0IHJldHVybnMgb2JqKVxuXHRmdW5jdGlvbiBkZWVwQ2xvbmVQYXRjaFZhbHVlPFQ+KG9iajogVCk6IFRcblx0ZnVuY3Rpb24gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmo6IGFueSkge1xuXHRcdGlmICghaXNEcmFmdGFibGUob2JqKSkgcmV0dXJuIG9ialxuXHRcdGlmIChBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmoubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpXG5cdFx0aWYgKGlzTWFwKG9iaikpXG5cdFx0XHRyZXR1cm4gbmV3IE1hcChcblx0XHRcdFx0QXJyYXkuZnJvbShvYmouZW50cmllcygpKS5tYXAoKFtrLCB2XSkgPT4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildKVxuXHRcdFx0KVxuXHRcdGlmIChpc1NldChvYmopKSByZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG9iaikubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpKVxuXHRcdGNvbnN0IGNsb25lZCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2JqKSBjbG9uZWRba2V5XSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqW2tleV0pXG5cdFx0cmV0dXJuIGNsb25lZFxuXHR9XG5cblx0ZnVuY3Rpb24gY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQ8VD4ob2JqOiBUKTogVCB7XG5cdFx0aWYgKGlzRHJhZnQob2JqKSkge1xuXHRcdFx0cmV0dXJuIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKVxuXHRcdH0gZWxzZSByZXR1cm4gb2JqXG5cdH1cblxuXHRsb2FkUGx1Z2luKFwiUGF0Y2hlc1wiLCB7XG5cdFx0YXBwbHlQYXRjaGVzXyxcblx0XHRnZW5lcmF0ZVBhdGNoZXNfLFxuXHRcdGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzX1xuXHR9KVxufVxuIiwiLy8gdHlwZXMgb25seSFcbmltcG9ydCB7XG5cdEltbWVyU3RhdGUsXG5cdEFueU1hcCxcblx0QW55U2V0LFxuXHRNYXBTdGF0ZSxcblx0U2V0U3RhdGUsXG5cdERSQUZUX1NUQVRFLFxuXHRnZXRDdXJyZW50U2NvcGUsXG5cdGxhdGVzdCxcblx0aXRlcmF0b3JTeW1ib2wsXG5cdGlzRHJhZnRhYmxlLFxuXHRjcmVhdGVQcm94eSxcblx0bG9hZFBsdWdpbixcblx0bWFya0NoYW5nZWQsXG5cdFByb3h5VHlwZU1hcCxcblx0UHJveHlUeXBlU2V0LFxuXHRkaWUsXG5cdGVhY2hcbn0gZnJvbSBcIi4uL2ludGVybmFsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZU1hcFNldCgpIHtcblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0dmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkOiBhbnksIGI6IGFueSk6IGFueSB7XG5cdFx0ZXh0ZW5kU3RhdGljcyA9XG5cdFx0XHRPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcblx0XHRcdCh7X19wcm90b19fOiBbXX0gaW5zdGFuY2VvZiBBcnJheSAmJlxuXHRcdFx0XHRmdW5jdGlvbihkLCBiKSB7XG5cdFx0XHRcdFx0ZC5fX3Byb3RvX18gPSBiXG5cdFx0XHRcdH0pIHx8XG5cdFx0XHRmdW5jdGlvbihkLCBiKSB7XG5cdFx0XHRcdGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdXG5cdFx0XHR9XG5cdFx0cmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYilcblx0fVxuXG5cdC8vIFVnbHkgaGFjayB0byByZXNvbHZlICM1MDIgYW5kIGluaGVyaXQgYnVpbHQgaW4gTWFwIC8gU2V0XG5cdGZ1bmN0aW9uIF9fZXh0ZW5kcyhkOiBhbnksIGI6IGFueSk6IGFueSB7XG5cdFx0ZXh0ZW5kU3RhdGljcyhkLCBiKVxuXHRcdGZ1bmN0aW9uIF9fKHRoaXM6IGFueSk6IGFueSB7XG5cdFx0XHR0aGlzLmNvbnN0cnVjdG9yID0gZFxuXHRcdH1cblx0XHRkLnByb3RvdHlwZSA9XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHQoKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlKSwgbmV3IF9fKCkpXG5cdH1cblxuXHRjb25zdCBEcmFmdE1hcCA9IChmdW5jdGlvbihfc3VwZXIpIHtcblx0XHRfX2V4dGVuZHMoRHJhZnRNYXAsIF9zdXBlcilcblx0XHQvLyBDcmVhdGUgY2xhc3MgbWFudWFsbHksIGNhdXNlICM1MDJcblx0XHRmdW5jdGlvbiBEcmFmdE1hcCh0aGlzOiBhbnksIHRhcmdldDogQW55TWFwLCBwYXJlbnQ/OiBJbW1lclN0YXRlKTogYW55IHtcblx0XHRcdHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuXHRcdFx0XHR0eXBlXzogUHJveHlUeXBlTWFwLFxuXHRcdFx0XHRwYXJlbnRfOiBwYXJlbnQsXG5cdFx0XHRcdHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpISxcblx0XHRcdFx0bW9kaWZpZWRfOiBmYWxzZSxcblx0XHRcdFx0ZmluYWxpemVkXzogZmFsc2UsXG5cdFx0XHRcdGNvcHlfOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFzc2lnbmVkXzogdW5kZWZpbmVkLFxuXHRcdFx0XHRiYXNlXzogdGFyZ2V0LFxuXHRcdFx0XHRkcmFmdF86IHRoaXMgYXMgYW55LFxuXHRcdFx0XHRpc01hbnVhbF86IGZhbHNlLFxuXHRcdFx0XHRyZXZva2VkXzogZmFsc2Vcblx0XHRcdH0gYXMgTWFwU3RhdGVcblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXHRcdGNvbnN0IHAgPSBEcmFmdE1hcC5wcm90b3R5cGVcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcInNpemVcIiwge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZVxuXHRcdFx0fVxuXHRcdFx0Ly8gZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHQvLyBjb25maWd1cmFibGU6IHRydWVcblx0XHR9KVxuXG5cdFx0cC5oYXMgPSBmdW5jdGlvbihrZXk6IGFueSk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuaGFzKGtleSlcblx0XHR9XG5cblx0XHRwLnNldCA9IGZ1bmN0aW9uKGtleTogYW55LCB2YWx1ZTogYW55KSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogTWFwU3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0aWYgKCFsYXRlc3Qoc3RhdGUpLmhhcyhrZXkpIHx8IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSkgIT09IHZhbHVlKSB7XG5cdFx0XHRcdHByZXBhcmVNYXBDb3B5KHN0YXRlKVxuXHRcdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdFx0c3RhdGUuYXNzaWduZWRfIS5zZXQoa2V5LCB0cnVlKVxuXHRcdFx0XHRzdGF0ZS5jb3B5XyEuc2V0KGtleSwgdmFsdWUpXG5cdFx0XHRcdHN0YXRlLmFzc2lnbmVkXyEuc2V0KGtleSwgdHJ1ZSlcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzXG5cdFx0fVxuXG5cdFx0cC5kZWxldGUgPSBmdW5jdGlvbihrZXk6IGFueSk6IGJvb2xlYW4ge1xuXHRcdFx0aWYgKCF0aGlzLmhhcyhrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzdGF0ZTogTWFwU3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0cHJlcGFyZU1hcENvcHkoc3RhdGUpXG5cdFx0XHRtYXJrQ2hhbmdlZChzdGF0ZSlcblx0XHRcdHN0YXRlLmFzc2lnbmVkXyEuc2V0KGtleSwgZmFsc2UpXG5cdFx0XHRzdGF0ZS5jb3B5XyEuZGVsZXRlKGtleSlcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXG5cdFx0cC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IE1hcFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcblx0XHRcdFx0cHJlcGFyZU1hcENvcHkoc3RhdGUpXG5cdFx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0XHRzdGF0ZS5hc3NpZ25lZF8gPSBuZXcgTWFwKClcblx0XHRcdFx0ZWFjaChzdGF0ZS5iYXNlXywga2V5ID0+IHtcblx0XHRcdFx0XHRzdGF0ZS5hc3NpZ25lZF8hLnNldChrZXksIGZhbHNlKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRzdGF0ZS5jb3B5XyEuY2xlYXIoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHAuZm9yRWFjaCA9IGZ1bmN0aW9uKFxuXHRcdFx0Y2I6ICh2YWx1ZTogYW55LCBrZXk6IGFueSwgc2VsZjogYW55KSA9PiB2b2lkLFxuXHRcdFx0dGhpc0FyZz86IGFueVxuXHRcdCkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IE1hcFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGxhdGVzdChzdGF0ZSkuZm9yRWFjaCgoX3ZhbHVlOiBhbnksIGtleTogYW55LCBfbWFwOiBhbnkpID0+IHtcblx0XHRcdFx0Y2IuY2FsbCh0aGlzQXJnLCB0aGlzLmdldChrZXkpLCBrZXksIHRoaXMpXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHAuZ2V0ID0gZnVuY3Rpb24oa2V5OiBhbnkpOiBhbnkge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IE1hcFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdGNvbnN0IHZhbHVlID0gbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KVxuXHRcdFx0aWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZSAhPT0gc3RhdGUuYmFzZV8uZ2V0KGtleSkpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlIC8vIGVpdGhlciBhbHJlYWR5IGRyYWZ0ZWQgb3IgcmVhc3NpZ25lZFxuXHRcdFx0fVxuXHRcdFx0Ly8gZGVzcGl0ZSB3aGF0IGl0IGxvb2tzLCB0aGlzIGNyZWF0ZXMgYSBkcmFmdCBvbmx5IG9uY2UsIHNlZSBhYm92ZSBjb25kaXRpb25cblx0XHRcdGNvbnN0IGRyYWZ0ID0gY3JlYXRlUHJveHkoc3RhdGUuc2NvcGVfLmltbWVyXywgdmFsdWUsIHN0YXRlKVxuXHRcdFx0cHJlcGFyZU1hcENvcHkoc3RhdGUpXG5cdFx0XHRzdGF0ZS5jb3B5XyEuc2V0KGtleSwgZHJhZnQpXG5cdFx0XHRyZXR1cm4gZHJhZnRcblx0XHR9XG5cblx0XHRwLmtleXMgPSBmdW5jdGlvbigpOiBJdGVyYWJsZUl0ZXJhdG9yPGFueT4ge1xuXHRcdFx0cmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkua2V5cygpXG5cdFx0fVxuXG5cdFx0cC52YWx1ZXMgPSBmdW5jdGlvbigpOiBJdGVyYWJsZUl0ZXJhdG9yPGFueT4ge1xuXHRcdFx0Y29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0W2l0ZXJhdG9yU3ltYm9sXTogKCkgPT4gdGhpcy52YWx1ZXMoKSxcblx0XHRcdFx0bmV4dDogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHIgPSBpdGVyYXRvci5uZXh0KClcblx0XHRcdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRcdFx0XHRcdGlmIChyLmRvbmUpIHJldHVybiByXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldChyLnZhbHVlKVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRkb25lOiBmYWxzZSxcblx0XHRcdFx0XHRcdHZhbHVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGFzIGFueVxuXHRcdH1cblxuXHRcdHAuZW50cmllcyA9IGZ1bmN0aW9uKCk6IEl0ZXJhYmxlSXRlcmF0b3I8W2FueSwgYW55XT4ge1xuXHRcdFx0Y29uc3QgaXRlcmF0b3IgPSB0aGlzLmtleXMoKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0W2l0ZXJhdG9yU3ltYm9sXTogKCkgPT4gdGhpcy5lbnRyaWVzKCksXG5cdFx0XHRcdG5leHQ6ICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCByID0gaXRlcmF0b3IubmV4dCgpXG5cdFx0XHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0XHRcdFx0XHRpZiAoci5kb25lKSByZXR1cm4gclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoci52YWx1ZSlcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0ZG9uZTogZmFsc2UsXG5cdFx0XHRcdFx0XHR2YWx1ZTogW3IudmFsdWUsIHZhbHVlXVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBhcyBhbnlcblx0XHR9XG5cblx0XHRwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZW50cmllcygpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIERyYWZ0TWFwXG5cdH0pKE1hcClcblxuXHRmdW5jdGlvbiBwcm94eU1hcF88VCBleHRlbmRzIEFueU1hcD4odGFyZ2V0OiBULCBwYXJlbnQ/OiBJbW1lclN0YXRlKTogVCB7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdHJldHVybiBuZXcgRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpXG5cdH1cblxuXHRmdW5jdGlvbiBwcmVwYXJlTWFwQ29weShzdGF0ZTogTWFwU3RhdGUpIHtcblx0XHRpZiAoIXN0YXRlLmNvcHlfKSB7XG5cdFx0XHRzdGF0ZS5hc3NpZ25lZF8gPSBuZXcgTWFwKClcblx0XHRcdHN0YXRlLmNvcHlfID0gbmV3IE1hcChzdGF0ZS5iYXNlXylcblx0XHR9XG5cdH1cblxuXHRjb25zdCBEcmFmdFNldCA9IChmdW5jdGlvbihfc3VwZXIpIHtcblx0XHRfX2V4dGVuZHMoRHJhZnRTZXQsIF9zdXBlcilcblx0XHQvLyBDcmVhdGUgY2xhc3MgbWFudWFsbHksIGNhdXNlICM1MDJcblx0XHRmdW5jdGlvbiBEcmFmdFNldCh0aGlzOiBhbnksIHRhcmdldDogQW55U2V0LCBwYXJlbnQ/OiBJbW1lclN0YXRlKSB7XG5cdFx0XHR0aGlzW0RSQUZUX1NUQVRFXSA9IHtcblx0XHRcdFx0dHlwZV86IFByb3h5VHlwZVNldCxcblx0XHRcdFx0cGFyZW50XzogcGFyZW50LFxuXHRcdFx0XHRzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSEsXG5cdFx0XHRcdG1vZGlmaWVkXzogZmFsc2UsXG5cdFx0XHRcdGZpbmFsaXplZF86IGZhbHNlLFxuXHRcdFx0XHRjb3B5XzogdW5kZWZpbmVkLFxuXHRcdFx0XHRiYXNlXzogdGFyZ2V0LFxuXHRcdFx0XHRkcmFmdF86IHRoaXMsXG5cdFx0XHRcdGRyYWZ0c186IG5ldyBNYXAoKSxcblx0XHRcdFx0cmV2b2tlZF86IGZhbHNlLFxuXHRcdFx0XHRpc01hbnVhbF86IGZhbHNlXG5cdFx0XHR9IGFzIFNldFN0YXRlXG5cdFx0XHRyZXR1cm4gdGhpc1xuXHRcdH1cblx0XHRjb25zdCBwID0gRHJhZnRTZXQucHJvdG90eXBlXG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCJzaXplXCIsIHtcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemVcblx0XHRcdH1cblx0XHRcdC8vIGVudW1lcmFibGU6IHRydWUsXG5cdFx0fSlcblxuXHRcdHAuaGFzID0gZnVuY3Rpb24odmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IFNldFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdC8vIGJpdCBvZiB0cmlja2VyeSBoZXJlLCB0byBiZSBhYmxlIHRvIHJlY29nbml6ZSBib3RoIHRoZSB2YWx1ZSwgYW5kIHRoZSBkcmFmdCBvZiBpdHMgdmFsdWVcblx0XHRcdGlmICghc3RhdGUuY29weV8pIHtcblx0XHRcdFx0cmV0dXJuIHN0YXRlLmJhc2VfLmhhcyh2YWx1ZSlcblx0XHRcdH1cblx0XHRcdGlmIChzdGF0ZS5jb3B5Xy5oYXModmFsdWUpKSByZXR1cm4gdHJ1ZVxuXHRcdFx0aWYgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSAmJiBzdGF0ZS5jb3B5Xy5oYXMoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSlcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdHJldHVybiBmYWxzZVxuXHRcdH1cblxuXHRcdHAuYWRkID0gZnVuY3Rpb24odmFsdWU6IGFueSk6IGFueSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogU2V0U3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0aWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0cHJlcGFyZVNldENvcHkoc3RhdGUpXG5cdFx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0XHRzdGF0ZS5jb3B5XyEuYWRkKHZhbHVlKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cblx0XHRwLmRlbGV0ZSA9IGZ1bmN0aW9uKHZhbHVlOiBhbnkpOiBhbnkge1xuXHRcdFx0aWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHN0YXRlOiBTZXRTdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdXG5cdFx0XHRhc3NlcnRVbnJldm9rZWQoc3RhdGUpXG5cdFx0XHRwcmVwYXJlU2V0Q29weShzdGF0ZSlcblx0XHRcdG1hcmtDaGFuZ2VkKHN0YXRlKVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3RhdGUuY29weV8hLmRlbGV0ZSh2YWx1ZSkgfHxcblx0XHRcdFx0KHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKVxuXHRcdFx0XHRcdD8gc3RhdGUuY29weV8hLmRlbGV0ZShzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpXG5cdFx0XHRcdFx0OiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmYWxzZSlcblx0XHRcdClcblx0XHR9XG5cblx0XHRwLmNsZWFyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjb25zdCBzdGF0ZTogU2V0U3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0aWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuXHRcdFx0XHRwcmVwYXJlU2V0Q29weShzdGF0ZSlcblx0XHRcdFx0bWFya0NoYW5nZWQoc3RhdGUpXG5cdFx0XHRcdHN0YXRlLmNvcHlfIS5jbGVhcigpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cC52YWx1ZXMgPSBmdW5jdGlvbigpOiBJdGVyYWJsZUl0ZXJhdG9yPGFueT4ge1xuXHRcdFx0Y29uc3Qgc3RhdGU6IFNldFN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV1cblx0XHRcdGFzc2VydFVucmV2b2tlZChzdGF0ZSlcblx0XHRcdHByZXBhcmVTZXRDb3B5KHN0YXRlKVxuXHRcdFx0cmV0dXJuIHN0YXRlLmNvcHlfIS52YWx1ZXMoKVxuXHRcdH1cblxuXHRcdHAuZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKTogSXRlcmFibGVJdGVyYXRvcjxbYW55LCBhbnldPiB7XG5cdFx0XHRjb25zdCBzdGF0ZTogU2V0U3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXVxuXHRcdFx0YXNzZXJ0VW5yZXZva2VkKHN0YXRlKVxuXHRcdFx0cHJlcGFyZVNldENvcHkoc3RhdGUpXG5cdFx0XHRyZXR1cm4gc3RhdGUuY29weV8hLmVudHJpZXMoKVxuXHRcdH1cblxuXHRcdHAua2V5cyA9IGZ1bmN0aW9uKCk6IEl0ZXJhYmxlSXRlcmF0b3I8YW55PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMoKVxuXHRcdH1cblxuXHRcdHBbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMoKVxuXHRcdH1cblxuXHRcdHAuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2I6IGFueSwgdGhpc0FyZz86IGFueSkge1xuXHRcdFx0Y29uc3QgaXRlcmF0b3IgPSB0aGlzLnZhbHVlcygpXG5cdFx0XHRsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpXG5cdFx0XHR3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG5cdFx0XHRcdGNiLmNhbGwodGhpc0FyZywgcmVzdWx0LnZhbHVlLCByZXN1bHQudmFsdWUsIHRoaXMpXG5cdFx0XHRcdHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBEcmFmdFNldFxuXHR9KShTZXQpXG5cblx0ZnVuY3Rpb24gcHJveHlTZXRfPFQgZXh0ZW5kcyBBbnlTZXQ+KHRhcmdldDogVCwgcGFyZW50PzogSW1tZXJTdGF0ZSk6IFQge1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRyZXR1cm4gbmV3IERyYWZ0U2V0KHRhcmdldCwgcGFyZW50KVxuXHR9XG5cblx0ZnVuY3Rpb24gcHJlcGFyZVNldENvcHkoc3RhdGU6IFNldFN0YXRlKSB7XG5cdFx0aWYgKCFzdGF0ZS5jb3B5Xykge1xuXHRcdFx0Ly8gY3JlYXRlIGRyYWZ0cyBmb3IgYWxsIGVudHJpZXMgdG8gcHJlc2VydmUgaW5zZXJ0aW9uIG9yZGVyXG5cdFx0XHRzdGF0ZS5jb3B5XyA9IG5ldyBTZXQoKVxuXHRcdFx0c3RhdGUuYmFzZV8uZm9yRWFjaCh2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmIChpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRjb25zdCBkcmFmdCA9IGNyZWF0ZVByb3h5KHN0YXRlLnNjb3BlXy5pbW1lcl8sIHZhbHVlLCBzdGF0ZSlcblx0XHRcdFx0XHRzdGF0ZS5kcmFmdHNfLnNldCh2YWx1ZSwgZHJhZnQpXG5cdFx0XHRcdFx0c3RhdGUuY29weV8hLmFkZChkcmFmdClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZS5jb3B5XyEuYWRkKHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZTogYW55IC8qRVM1U3RhdGUgfCBNYXBTdGF0ZSB8IFNldFN0YXRlKi8pIHtcblx0XHRpZiAoc3RhdGUucmV2b2tlZF8pIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSlcblx0fVxuXG5cdGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwge3Byb3h5TWFwXywgcHJveHlTZXRffSlcbn1cbiIsImltcG9ydCB7ZW5hYmxlRVM1fSBmcm9tIFwiLi9lczVcIlxuaW1wb3J0IHtlbmFibGVNYXBTZXR9IGZyb20gXCIuL21hcHNldFwiXG5pbXBvcnQge2VuYWJsZVBhdGNoZXN9IGZyb20gXCIuL3BhdGNoZXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQWxsUGx1Z2lucygpIHtcblx0ZW5hYmxlRVM1KClcblx0ZW5hYmxlTWFwU2V0KClcblx0ZW5hYmxlUGF0Y2hlcygpXG59XG4iLCJpbXBvcnQge1xuXHRJUHJvZHVjZSxcblx0SVByb2R1Y2VXaXRoUGF0Y2hlcyxcblx0SW1tZXIsXG5cdERyYWZ0LFxuXHRJbW11dGFibGVcbn0gZnJvbSBcIi4vaW50ZXJuYWxcIlxuXG5leHBvcnQge1xuXHREcmFmdCxcblx0SW1tdXRhYmxlLFxuXHRQYXRjaCxcblx0UGF0Y2hMaXN0ZW5lcixcblx0b3JpZ2luYWwsXG5cdGN1cnJlbnQsXG5cdGlzRHJhZnQsXG5cdGlzRHJhZnRhYmxlLFxuXHROT1RISU5HIGFzIG5vdGhpbmcsXG5cdERSQUZUQUJMRSBhcyBpbW1lcmFibGUsXG5cdGZyZWV6ZVxufSBmcm9tIFwiLi9pbnRlcm5hbFwiXG5cbmNvbnN0IGltbWVyID0gbmV3IEltbWVyKClcblxuLyoqXG4gKiBUaGUgYHByb2R1Y2VgIGZ1bmN0aW9uIHRha2VzIGEgdmFsdWUgYW5kIGEgXCJyZWNpcGUgZnVuY3Rpb25cIiAod2hvc2VcbiAqIHJldHVybiB2YWx1ZSBvZnRlbiBkZXBlbmRzIG9uIHRoZSBiYXNlIHN0YXRlKS4gVGhlIHJlY2lwZSBmdW5jdGlvbiBpc1xuICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXG4gKiBvbmx5IGV2ZXIgYXBwbGllZCB0byBhIF9fY29weV9fIG9mIHRoZSBiYXNlIHN0YXRlLlxuICpcbiAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxuICogZnJvbSBwYXNzaW5nIHRoZSByZWNpcGUgZnVuY3Rpb24gZXZlcnkgdGltZS5cbiAqXG4gKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcbiAqIGNvbnNpZGVyZWQgdW5jb3B5YWJsZS5cbiAqXG4gKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gYmFzZSAtIHRoZSBpbml0aWFsIHN0YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9kdWNlciAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGF0Y2hMaXN0ZW5lciAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhbGwgdGhlIHBhdGNoZXMgcHJvZHVjZWQgaGVyZVxuICogQHJldHVybnMge2FueX0gYSBuZXcgc3RhdGUsIG9yIHRoZSBpbml0aWFsIHN0YXRlIGlmIG5vdGhpbmcgd2FzIG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBjb25zdCBwcm9kdWNlOiBJUHJvZHVjZSA9IGltbWVyLnByb2R1Y2VcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y2VcblxuLyoqXG4gKiBMaWtlIGBwcm9kdWNlYCwgYnV0IGBwcm9kdWNlV2l0aFBhdGNoZXNgIGFsd2F5cyByZXR1cm5zIGEgdHVwbGVcbiAqIFtuZXh0U3RhdGUsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzXSAoaW5zdGVhZCBvZiBqdXN0IHRoZSBuZXh0IHN0YXRlKVxuICovXG5leHBvcnQgY29uc3QgcHJvZHVjZVdpdGhQYXRjaGVzOiBJUHJvZHVjZVdpdGhQYXRjaGVzID0gaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoXG5cdGltbWVyXG4pXG5cbi8qKlxuICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cbiAqXG4gKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGRpc2FibGVkIGluIHByb2R1Y3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBdXRvRnJlZXplID0gaW1tZXIuc2V0QXV0b0ZyZWV6ZS5iaW5kKGltbWVyKVxuXG4vKipcbiAqIFBhc3MgdHJ1ZSB0byB1c2UgdGhlIEVTMjAxNSBgUHJveHlgIGNsYXNzIHdoZW4gY3JlYXRpbmcgZHJhZnRzLCB3aGljaCBpc1xuICogYWx3YXlzIGZhc3RlciB0aGFuIHVzaW5nIEVTNSBwcm94aWVzLlxuICpcbiAqIEJ5IGRlZmF1bHQsIGZlYXR1cmUgZGV0ZWN0aW9uIGlzIHVzZWQsIHNvIGNhbGxpbmcgdGhpcyBpcyByYXJlbHkgbmVjZXNzYXJ5LlxuICovXG5leHBvcnQgY29uc3Qgc2V0VXNlUHJveGllcyA9IGltbWVyLnNldFVzZVByb3hpZXMuYmluZChpbW1lcilcblxuLyoqXG4gKiBBcHBseSBhbiBhcnJheSBvZiBJbW1lciBwYXRjaGVzIHRvIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGEgcHJvZHVjZXIsIHdoaWNoIG1lYW5zIGNvcHktb24td3JpdGUgaXMgaW4gZWZmZWN0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHlQYXRjaGVzID0gaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpXG5cbi8qKlxuICogQ3JlYXRlIGFuIEltbWVyIGRyYWZ0IGZyb20gdGhlIGdpdmVuIGJhc2Ugc3RhdGUsIHdoaWNoIG1heSBiZSBhIGRyYWZ0IGl0c2VsZi5cbiAqIFRoZSBkcmFmdCBjYW4gYmUgbW9kaWZpZWQgdW50aWwgeW91IGZpbmFsaXplIGl0IHdpdGggdGhlIGBmaW5pc2hEcmFmdGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVEcmFmdCA9IGltbWVyLmNyZWF0ZURyYWZ0LmJpbmQoaW1tZXIpXG5cbi8qKlxuICogRmluYWxpemUgYW4gSW1tZXIgZHJhZnQgZnJvbSBhIGBjcmVhdGVEcmFmdGAgY2FsbCwgcmV0dXJuaW5nIHRoZSBiYXNlIHN0YXRlXG4gKiAoaWYgbm8gY2hhbmdlcyB3ZXJlIG1hZGUpIG9yIGEgbW9kaWZpZWQgY29weS4gVGhlIGRyYWZ0IG11c3QgKm5vdCogYmVcbiAqIG11dGF0ZWQgYWZ0ZXJ3YXJkcy5cbiAqXG4gKiBQYXNzIGEgZnVuY3Rpb24gYXMgdGhlIDJuZCBhcmd1bWVudCB0byBnZW5lcmF0ZSBJbW1lciBwYXRjaGVzIGJhc2VkIG9uIHRoZVxuICogY2hhbmdlcyB0aGF0IHdlcmUgbWFkZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZpbmlzaERyYWZ0ID0gaW1tZXIuZmluaXNoRHJhZnQuYmluZChpbW1lcilcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGEgbm8tb3AsIGJ1dCBjYW4gYmUgdXNlZCB0byBjYXN0IGFuIGltbXV0YWJsZSB0eXBlXG4gKiB0byBhbiBkcmFmdCB0eXBlIGFuZCBtYWtlIFR5cGVTY3JpcHQgaGFwcHlcbiAqXG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhc3REcmFmdDxUPih2YWx1ZTogVCk6IERyYWZ0PFQ+IHtcblx0cmV0dXJuIHZhbHVlIGFzIGFueVxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgYWN0dWFsbHkgYSBuby1vcCwgYnV0IGNhbiBiZSB1c2VkIHRvIGNhc3QgYSBtdXRhYmxlIHR5cGVcbiAqIHRvIGFuIGltbXV0YWJsZSB0eXBlIGFuZCBtYWtlIFR5cGVTY3JpcHQgaGFwcHlcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FzdEltbXV0YWJsZTxUPih2YWx1ZTogVCk6IEltbXV0YWJsZTxUPiB7XG5cdHJldHVybiB2YWx1ZSBhcyBhbnlcbn1cblxuZXhwb3J0IHtJbW1lcn1cblxuZXhwb3J0IHtlbmFibGVFUzV9IGZyb20gXCIuL3BsdWdpbnMvZXM1XCJcbmV4cG9ydCB7ZW5hYmxlUGF0Y2hlc30gZnJvbSBcIi4vcGx1Z2lucy9wYXRjaGVzXCJcbmV4cG9ydCB7ZW5hYmxlTWFwU2V0fSBmcm9tIFwiLi9wbHVnaW5zL21hcHNldFwiXG5leHBvcnQge2VuYWJsZUFsbFBsdWdpbnN9IGZyb20gXCIuL3BsdWdpbnMvYWxsXCJcbiIsIi8vIFNob3VsZCBiZSBubyBpbXBvcnRzIGhlcmUhXG5cbi8vIFNvbWUgdGhpbmdzIHRoYXQgc2hvdWxkIGJlIGV2YWx1YXRlZCBiZWZvcmUgYWxsIGVsc2UuLi5cblxuLy8gV2Ugb25seSB3YW50IHRvIGtub3cgaWYgbm9uLXBvbHlmaWxsZWQgc3ltYm9scyBhcmUgYXZhaWxhYmxlXG5jb25zdCBoYXNTeW1ib2wgPVxuXHR0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBTeW1ib2woXCJ4XCIpID09PSBcInN5bWJvbFwiXG5leHBvcnQgY29uc3QgaGFzTWFwID0gdHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIlxuZXhwb3J0IGNvbnN0IGhhc1NldCA9IHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCJcbmV4cG9ydCBjb25zdCBoYXNQcm94aWVzID1cblx0dHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdHR5cGVvZiBQcm94eS5yZXZvY2FibGUgIT09IFwidW5kZWZpbmVkXCIgJiZcblx0dHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCJcblxuLyoqXG4gKiBUaGUgc2VudGluZWwgdmFsdWUgcmV0dXJuZWQgYnkgcHJvZHVjZXJzIHRvIHJlcGxhY2UgdGhlIGRyYWZ0IHdpdGggdW5kZWZpbmVkLlxuICovXG5leHBvcnQgY29uc3QgTk9USElORzogTm90aGluZyA9IGhhc1N5bWJvbFxuXHQ/IFN5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpXG5cdDogKHtbXCJpbW1lci1ub3RoaW5nXCJdOiB0cnVlfSBhcyBhbnkpXG5cbi8qKlxuICogVG8gbGV0IEltbWVyIHRyZWF0IHlvdXIgY2xhc3MgaW5zdGFuY2VzIGFzIHBsYWluIGltbXV0YWJsZSBvYmplY3RzXG4gKiAoYWxiZWl0IHdpdGggYSBjdXN0b20gcHJvdG90eXBlKSwgeW91IG11c3QgZGVmaW5lIGVpdGhlciBhbiBpbnN0YW5jZSBwcm9wZXJ0eVxuICogb3IgYSBzdGF0aWMgcHJvcGVydHkgb24gZWFjaCBvZiB5b3VyIGN1c3RvbSBjbGFzc2VzLlxuICpcbiAqIE90aGVyd2lzZSwgeW91ciBjbGFzcyBpbnN0YW5jZSB3aWxsIG5ldmVyIGJlIGRyYWZ0ZWQsIHdoaWNoIG1lYW5zIGl0IHdvbid0IGJlXG4gKiBzYWZlIHRvIG11dGF0ZSBpbiBhIHByb2R1Y2UgY2FsbGJhY2suXG4gKi9cbmV4cG9ydCBjb25zdCBEUkFGVEFCTEU6IHVuaXF1ZSBzeW1ib2wgPSBoYXNTeW1ib2xcblx0PyBTeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpXG5cdDogKFwiX18kaW1tZXJfZHJhZnRhYmxlXCIgYXMgYW55KVxuXG5leHBvcnQgY29uc3QgRFJBRlRfU1RBVEU6IHVuaXF1ZSBzeW1ib2wgPSBoYXNTeW1ib2xcblx0PyBTeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIilcblx0OiAoXCJfXyRpbW1lcl9zdGF0ZVwiIGFzIGFueSlcblxuLy8gRXZlbiBhIHBvbHlmaWxsZWQgU3ltYm9sIG1pZ2h0IHByb3ZpZGUgU3ltYm9sLml0ZXJhdG9yXG5leHBvcnQgY29uc3QgaXRlcmF0b3JTeW1ib2w6IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPVxuXHQodHlwZW9mIFN5bWJvbCAhPSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvcikgfHwgKFwiQEBpdGVyYXRvclwiIGFzIGFueSlcblxuLyoqIFVzZSBhIGNsYXNzIHR5cGUgZm9yIGBub3RoaW5nYCBzbyBpdHMgdHlwZSBpcyB1bmlxdWUgKi9cbmV4cG9ydCBjbGFzcyBOb3RoaW5nIHtcblx0Ly8gVGhpcyBsZXRzIHVzIGRvIGBFeGNsdWRlPFQsIE5vdGhpbmc+YFxuXHQvLyBAdHMtaWdub3JlXG5cdHByaXZhdGUgXyE6IHVuaXF1ZSBzeW1ib2xcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgUmVhY3RSZWR1eENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RSZWR1eENvbnRleHQuZGlzcGxheU5hbWUgPSAnUmVhY3RSZWR1eCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVkdXhDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuXG5mdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBzdG9yZSA9IF9yZWYuc3RvcmUsXG4gICAgICBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oc3RvcmUpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgfTtcbiAgfSwgW3N0b3JlXSk7XG4gIHZhciBwcmV2aW91c1N0YXRlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldFN0YXRlKCk7XG4gIH0sIFtzdG9yZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcblxuICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBzdG9yZS5nZXRTdGF0ZSgpKSB7XG4gICAgICBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicygpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIHZhciBDb250ZXh0ID0gY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAgIHN0b3JlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZiwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSwgaXNDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7IC8vIERlZmluZSBzb21lIGNvbnN0YW50IGFycmF5cyBqdXN0IHRvIGF2b2lkIHJlLWNyZWF0aW5nIHRoZXNlXG5cbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xudmFyIE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTtcblxudmFyIHN0cmluZ2lmeUNvbXBvbmVudCA9IGZ1bmN0aW9uIHN0cmluZ2lmeUNvbXBvbmVudChDb21wKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KENvbXApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nKENvbXApO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzdG9yZVN0YXRlVXBkYXRlc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICB2YXIgdXBkYXRlQ291bnQgPSBzdGF0ZVsxXTtcbiAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZCwgdXBkYXRlQ291bnQgKyAxXTtcbn1cblxuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWZmZWN0RnVuYy5hcHBseSh2b2lkIDAsIGVmZmVjdEFyZ3MpO1xuICB9LCBkZXBlbmRlbmNpZXMpO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCBhY3R1YWxDaGlsZFByb3BzLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzKSB7XG4gIC8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbiAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5cbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCkge1xuICAvLyBJZiB3ZSdyZSBub3Qgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUsIG5vdGhpbmcgdG8gZG8gaGVyZVxuICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuOyAvLyBDYXB0dXJlIHZhbHVlcyBmb3IgY2hlY2tpbmcgaWYgYW5kIHdoZW4gdGhpcyBjb21wb25lbnQgdW5tb3VudHNcblxuICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgdmFyIGxhc3RUaHJvd25FcnJvciA9IG51bGw7IC8vIFdlJ2xsIHJ1biB0aGlzIGNhbGxiYWNrIGV2ZXJ5IHRpbWUgYSBzdG9yZSBzdWJzY3JpcHRpb24gdXBkYXRlIHByb3BhZ2F0ZXMgdG8gdGhpcyBjb21wb25lbnRcblxuICB2YXIgY2hlY2tGb3JVcGRhdGVzID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgIGlmIChkaWRVbnN1YnNjcmliZSkge1xuICAgICAgLy8gRG9uJ3QgcnVuIHN0YWxlIGxpc3RlbmVycy5cbiAgICAgIC8vIFJlZHV4IGRvZXNuJ3QgZ3VhcmFudGVlIHVuc3Vic2NyaXB0aW9ucyBoYXBwZW4gdW50aWwgbmV4dCBkaXNwYXRjaC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEFjdHVhbGx5IHJ1biB0aGUgc2VsZWN0b3Igd2l0aCB0aGUgbW9zdCByZWNlbnQgc3RvcmUgc3RhdGUgYW5kIHdyYXBwZXIgcHJvcHNcbiAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmVcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IobGF0ZXN0U3RvcmVTdGF0ZSwgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfSAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgaGF2ZW4ndCBjaGFuZ2VkLCBub3RoaW5nIHRvIGRvIGhlcmUgLSBjYXNjYWRlIHRoZSBzdWJzY3JpcHRpb24gdXBkYXRlXG5cblxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTYXZlIHJlZmVyZW5jZXMgdG8gdGhlIG5ldyBjaGlsZCBwcm9wcy4gIE5vdGUgdGhhdCB3ZSB0cmFjayB0aGUgXCJjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZVwiXG4gICAgICAvLyBhcyBhIHJlZiBpbnN0ZWFkIG9mIGEgdXNlU3RhdGUvdXNlUmVkdWNlciBiZWNhdXNlIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIHRoYXQgdmFsdWUgaGFzXG4gICAgICAvLyBiZWVuIHByb2Nlc3NlZC4gIElmIHRoaXMgd2VudCBpbnRvIHVzZVN0YXRlL3VzZVJlZHVjZXIsIHdlIGNvdWxkbid0IGNsZWFyIG91dCB0aGUgdmFsdWUgd2l0aG91dFxuICAgICAgLy8gZm9yY2luZyBhbm90aGVyIHJlLXJlbmRlciwgd2hpY2ggd2UgZG9uJ3Qgd2FudC5cbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlOyAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgX2RpZF8gY2hhbmdlIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IpLCB0aGlzIHdyYXBwZXIgY29tcG9uZW50IG5lZWRzIHRvIHJlLXJlbmRlclxuXG4gICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NUT1JFX1VQREFURUQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTsgLy8gQWN0dWFsbHkgc3Vic2NyaWJlIHRvIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3RvciAob3Igc3RvcmUpXG5cblxuICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpOyAvLyBQdWxsIGRhdGEgZnJvbSB0aGUgc3RvcmUgYWZ0ZXIgZmlyc3QgcmVuZGVyIGluIGNhc2UgdGhlIHN0b3JlIGhhc1xuICAvLyBjaGFuZ2VkIHNpbmNlIHdlIGJlZ2FuLlxuXG4gIGNoZWNrRm9yVXBkYXRlcygpO1xuXG4gIHZhciB1bnN1YnNjcmliZVdyYXBwZXIgPSBmdW5jdGlvbiB1bnN1YnNjcmliZVdyYXBwZXIoKSB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcblxuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB3ZSBjYXVnaHQgYW4gZXJyb3IgZHVlIHRvIGEgYmFkIG1hcFN0YXRlIGZ1bmN0aW9uLCBidXQgdGhlXG4gICAgICAvLyBwYXJlbnQgcmUtcmVuZGVyZWQgd2l0aG91dCB0aGlzIGNvbXBvbmVudCBhbmQgd2UncmUgYWJvdXQgdG8gdW5tb3VudC5cbiAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiBhcyBsb25nIGFzIHdlIGRvIHRvcC1kb3duIHN1YnNjcmlwdGlvbnMgY29ycmVjdGx5LCBidXRcbiAgICAgIC8vIGlmIHdlIGV2ZXIgZG8gdGhvc2Ugd3JvbmcsIHRoaXMgdGhyb3cgd2lsbCBzdXJmYWNlIHRoZSBlcnJvciBpbiBvdXIgdGVzdHMuXG4gICAgICAvLyBJbiB0aGF0IGNhc2UsIHRocm93IHRoZSBlcnJvciBmcm9tIGhlcmUgc28gaXQgZG9lc24ndCBnZXQgbG9zdC5cbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn1cblxudmFyIGluaXRTdGF0ZVVwZGF0ZXMgPSBmdW5jdGlvbiBpbml0U3RhdGVVcGRhdGVzKCkge1xuICByZXR1cm4gW251bGwsIDBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdEFkdmFuY2VkKFxuLypcbiAgc2VsZWN0b3JGYWN0b3J5IGlzIGEgZnVuYyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciByZXR1cm5pbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHVzZWQgdG9cbiAgY29tcHV0ZSBuZXcgcHJvcHMgZnJvbSBzdGF0ZSwgcHJvcHMsIGFuZCBkaXNwYXRjaC4gRm9yIGV4YW1wbGU6XG4gICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3RBZHZhbmNlZCgoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChzdGF0ZSwgcHJvcHMpID0+ICh7XG4gICAgICB0aGluZzogc3RhdGUudGhpbmdzW3Byb3BzLnRoaW5nSWRdLFxuICAgICAgc2F2ZVRoaW5nOiBmaWVsZHMgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2F2ZVRoaW5nKHByb3BzLnRoaW5nSWQsIGZpZWxkcykpLFxuICAgIH0pKShZb3VyQ29tcG9uZW50KVxuICAgQWNjZXNzIHRvIGRpc3BhdGNoIGlzIHByb3ZpZGVkIHRvIHRoZSBmYWN0b3J5IHNvIHNlbGVjdG9yRmFjdG9yaWVzIGNhbiBiaW5kIGFjdGlvbkNyZWF0b3JzXG4gIG91dHNpZGUgb2YgdGhlaXIgc2VsZWN0b3IgYXMgYW4gb3B0aW1pemF0aW9uLiBPcHRpb25zIHBhc3NlZCB0byBjb25uZWN0QWR2YW5jZWQgYXJlIHBhc3NlZCB0b1xuICB0aGUgc2VsZWN0b3JGYWN0b3J5LCBhbG9uZyB3aXRoIGRpc3BsYXlOYW1lIGFuZCBXcmFwcGVkQ29tcG9uZW50LCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgTm90ZSB0aGF0IHNlbGVjdG9yRmFjdG9yeSBpcyByZXNwb25zaWJsZSBmb3IgYWxsIGNhY2hpbmcvbWVtb2l6YXRpb24gb2YgaW5ib3VuZCBhbmQgb3V0Ym91bmRcbiAgcHJvcHMuIERvIG5vdCB1c2UgY29ubmVjdEFkdmFuY2VkIGRpcmVjdGx5IHdpdGhvdXQgbWVtb2l6aW5nIHJlc3VsdHMgYmV0d2VlbiBjYWxscyB0byB5b3VyXG4gIHNlbGVjdG9yLCBvdGhlcndpc2UgdGhlIENvbm5lY3QgY29tcG9uZW50IHdpbGwgcmUtcmVuZGVyIG9uIGV2ZXJ5IHN0YXRlIG9yIHByb3BzIGNoYW5nZS5cbiovXG5zZWxlY3RvckZhY3RvcnksIC8vIG9wdGlvbnMgb2JqZWN0OlxuX3JlZikge1xuICBpZiAoX3JlZiA9PT0gdm9pZCAwKSB7XG4gICAgX3JlZiA9IHt9O1xuICB9XG5cbiAgdmFyIF9yZWYyID0gX3JlZixcbiAgICAgIF9yZWYyJGdldERpc3BsYXlOYW1lID0gX3JlZjIuZ2V0RGlzcGxheU5hbWUsXG4gICAgICBnZXREaXNwbGF5TmFtZSA9IF9yZWYyJGdldERpc3BsYXlOYW1lID09PSB2b2lkIDAgPyBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBcIkNvbm5lY3RBZHZhbmNlZChcIiArIG5hbWUgKyBcIilcIjtcbiAgfSA6IF9yZWYyJGdldERpc3BsYXlOYW1lLFxuICAgICAgX3JlZjIkbWV0aG9kTmFtZSA9IF9yZWYyLm1ldGhvZE5hbWUsXG4gICAgICBtZXRob2ROYW1lID0gX3JlZjIkbWV0aG9kTmFtZSA9PT0gdm9pZCAwID8gJ2Nvbm5lY3RBZHZhbmNlZCcgOiBfcmVmMiRtZXRob2ROYW1lLFxuICAgICAgX3JlZjIkcmVuZGVyQ291bnRQcm9wID0gX3JlZjIucmVuZGVyQ291bnRQcm9wLFxuICAgICAgcmVuZGVyQ291bnRQcm9wID0gX3JlZjIkcmVuZGVyQ291bnRQcm9wID09PSB2b2lkIDAgPyB1bmRlZmluZWQgOiBfcmVmMiRyZW5kZXJDb3VudFByb3AsXG4gICAgICBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPSBfcmVmMi5zaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBfcmVmMiRzaG91bGRIYW5kbGVTdGEgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMiRzaG91bGRIYW5kbGVTdGEsXG4gICAgICBfcmVmMiRzdG9yZUtleSA9IF9yZWYyLnN0b3JlS2V5LFxuICAgICAgc3RvcmVLZXkgPSBfcmVmMiRzdG9yZUtleSA9PT0gdm9pZCAwID8gJ3N0b3JlJyA6IF9yZWYyJHN0b3JlS2V5LFxuICAgICAgX3JlZjIkd2l0aFJlZiA9IF9yZWYyLndpdGhSZWYsXG4gICAgICB3aXRoUmVmID0gX3JlZjIkd2l0aFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiR3aXRoUmVmLFxuICAgICAgX3JlZjIkZm9yd2FyZFJlZiA9IF9yZWYyLmZvcndhcmRSZWYsXG4gICAgICBmb3J3YXJkUmVmID0gX3JlZjIkZm9yd2FyZFJlZiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMiRmb3J3YXJkUmVmLFxuICAgICAgX3JlZjIkY29udGV4dCA9IF9yZWYyLmNvbnRleHQsXG4gICAgICBjb250ZXh0ID0gX3JlZjIkY29udGV4dCA9PT0gdm9pZCAwID8gUmVhY3RSZWR1eENvbnRleHQgOiBfcmVmMiRjb250ZXh0LFxuICAgICAgY29ubmVjdE9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiZ2V0RGlzcGxheU5hbWVcIiwgXCJtZXRob2ROYW1lXCIsIFwicmVuZGVyQ291bnRQcm9wXCIsIFwic2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzXCIsIFwic3RvcmVLZXlcIiwgXCJ3aXRoUmVmXCIsIFwiZm9yd2FyZFJlZlwiLCBcImNvbnRleHRcIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHJlbmRlckNvdW50UHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJDb3VudFByb3AgaXMgcmVtb3ZlZC4gcmVuZGVyIGNvdW50aW5nIGlzIGJ1aWx0IGludG8gdGhlIGxhdGVzdCBSZWFjdCBEZXYgVG9vbHMgcHJvZmlsaW5nIGV4dGVuc2lvblwiKTtcbiAgICB9XG5cbiAgICBpZiAod2l0aFJlZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aXRoUmVmIGlzIHJlbW92ZWQuIFRvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgdXNlIGEgcmVmIG9uIHRoZSBjb25uZWN0ZWQgY29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgdmFyIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UgPSAnVG8gdXNlIGEgY3VzdG9tIFJlZHV4IHN0b3JlIGZvciBzcGVjaWZpYyBjb21wb25lbnRzLCBjcmVhdGUgYSBjdXN0b20gUmVhY3QgY29udGV4dCB3aXRoICcgKyBcIlJlYWN0LmNyZWF0ZUNvbnRleHQoKSwgYW5kIHBhc3MgdGhlIGNvbnRleHQgb2JqZWN0IHRvIFJlYWN0IFJlZHV4J3MgUHJvdmlkZXIgYW5kIHNwZWNpZmljIGNvbXBvbmVudHNcIiArICcgbGlrZTogPFByb3ZpZGVyIGNvbnRleHQ9e015Q29udGV4dH0+PENvbm5lY3RlZENvbXBvbmVudCBjb250ZXh0PXtNeUNvbnRleHR9IC8+PC9Qcm92aWRlcj4uICcgKyAnWW91IG1heSBhbHNvIHBhc3MgYSB7Y29udGV4dCA6IE15Q29udGV4dH0gb3B0aW9uIHRvIGNvbm5lY3QnO1xuXG4gICAgaWYgKHN0b3JlS2V5ICE9PSAnc3RvcmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0b3JlS2V5IGhhcyBiZWVuIHJlbW92ZWQgYW5kIGRvZXMgbm90IGRvIGFueXRoaW5nLiAnICsgY3VzdG9tU3RvcmVXYXJuaW5nTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIENvbnRleHQgPSBjb250ZXh0O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBcIiArIChtZXRob2ROYW1lICsgXCIuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyBzdHJpbmdpZnlDb21wb25lbnQoV3JhcHBlZENvbXBvbmVudCkpKTtcbiAgICB9XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZSh3cmFwcGVkQ29tcG9uZW50TmFtZSk7XG5cbiAgICB2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBjb25uZWN0T3B0aW9ucywge1xuICAgICAgZ2V0RGlzcGxheU5hbWU6IGdldERpc3BsYXlOYW1lLFxuICAgICAgbWV0aG9kTmFtZTogbWV0aG9kTmFtZSxcbiAgICAgIHJlbmRlckNvdW50UHJvcDogcmVuZGVyQ291bnRQcm9wLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBzdG9yZUtleTogc3RvcmVLZXksXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgcHVyZSA9IGNvbm5lY3RPcHRpb25zLnB1cmU7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICB9IC8vIElmIHdlIGFyZW4ndCBydW5uaW5nIGluIFwicHVyZVwiIG1vZGUsIHdlIGRvbid0IHdhbnQgdG8gbWVtb2l6ZSB2YWx1ZXMuXG4gICAgLy8gVG8gYXZvaWQgY29uZGl0aW9uYWxseSBjYWxsaW5nIGhvb2tzLCB3ZSBmYWxsIGJhY2sgdG8gYSB0aW55IHdyYXBwZXJcbiAgICAvLyB0aGF0IGp1c3QgZXhlY3V0ZXMgdGhlIGdpdmVuIGNhbGxiYWNrIGltbWVkaWF0ZWx5LlxuXG5cbiAgICB2YXIgdXNlUHVyZU9ubHlNZW1vID0gcHVyZSA/IHVzZU1lbW8gOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEaXN0aW5ndWlzaCBiZXR3ZWVuIGFjdHVhbCBcImRhdGFcIiBwcm9wcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSB3cmFwcGVyIGNvbXBvbmVudCxcbiAgICAgICAgLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4gICAgICAgIC8vIFRvIG1haW50YWluIHRoZSB3cmFwcGVyUHJvcHMgb2JqZWN0IHJlZmVyZW5jZSwgbWVtb2l6ZSB0aGlzIGRlc3RydWN0dXJpbmcuXG4gICAgICAgIHZhciByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gcHJvcHMucmVhY3RSZWR1eEZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXCJdKTtcblxuICAgICAgICByZXR1cm4gW3Byb3BzLmNvbnRleHQsIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIHdyYXBwZXJQcm9wc107XG4gICAgICB9LCBbcHJvcHNdKSxcbiAgICAgICAgICBwcm9wc0NvbnRleHQgPSBfdXNlTWVtb1swXSxcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmID0gX3VzZU1lbW9bMV0sXG4gICAgICAgICAgd3JhcHBlclByb3BzID0gX3VzZU1lbW9bMl07XG5cbiAgICAgIHZhciBDb250ZXh0VG9Vc2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbiAgICAgICAgLy8gTWVtb2l6ZSB0aGUgY2hlY2sgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGNvbnRleHQgaW5zdGFuY2Ugd2Ugc2hvdWxkIHVzZS5cbiAgICAgICAgcmV0dXJuIHByb3BzQ29udGV4dCAmJiBwcm9wc0NvbnRleHQuQ29uc3VtZXIgJiYgaXNDb250ZXh0Q29uc3VtZXIoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KHByb3BzQ29udGV4dC5Db25zdW1lciwgbnVsbCkpID8gcHJvcHNDb250ZXh0IDogQ29udGV4dDtcbiAgICAgIH0sIFtwcm9wc0NvbnRleHQsIENvbnRleHRdKTsgLy8gUmV0cmlldmUgdGhlIHN0b3JlIGFuZCBhbmNlc3RvciBzdWJzY3JpcHRpb24gdmlhIGNvbnRleHQsIGlmIGF2YWlsYWJsZVxuXG4gICAgICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChDb250ZXh0VG9Vc2UpOyAvLyBUaGUgc3RvcmUgX211c3RfIGV4aXN0IGFzIGVpdGhlciBhIHByb3Agb3IgaW4gY29udGV4dC5cbiAgICAgIC8vIFdlJ2xsIGNoZWNrIHRvIHNlZSBpZiBpdCBfbG9va3NfIGxpa2UgYSBSZWR1eCBzdG9yZSBmaXJzdC5cbiAgICAgIC8vIFRoaXMgYWxsb3dzIHVzIHRvIHBhc3MgdGhyb3VnaCBhIGBzdG9yZWAgcHJvcCB0aGF0IGlzIGp1c3QgYSBwbGFpbiB2YWx1ZS5cblxuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgdmFyIGRpZFN0b3JlQ29tZUZyb21Db250ZXh0ID0gQm9vbGVhbihjb250ZXh0VmFsdWUpICYmIEJvb2xlYW4oY29udGV4dFZhbHVlLnN0b3JlKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWRpZFN0b3JlQ29tZUZyb21Qcm9wcyAmJiAhZGlkU3RvcmVDb21lRnJvbUNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgXFxcInN0b3JlXFxcIiBpbiB0aGUgY29udGV4dCBvZiBcIiArIChcIlxcXCJcIiArIGRpc3BsYXlOYW1lICsgXCJcXFwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBcIikgKyBcIm9yIHBhc3MgYSBjdXN0b20gUmVhY3QgY29udGV4dCBwcm92aWRlciB0byA8UHJvdmlkZXI+IGFuZCB0aGUgY29ycmVzcG9uZGluZyBcIiArIChcIlJlYWN0IGNvbnRleHQgY29uc3VtZXIgdG8gXCIgKyBkaXNwbGF5TmFtZSArIFwiIGluIGNvbm5lY3Qgb3B0aW9ucy5cIikpO1xuICAgICAgfSAvLyBCYXNlZCBvbiB0aGUgcHJldmlvdXMgY2hlY2ssIG9uZSBvZiB0aGVzZSBtdXN0IGJlIHRydWVcblxuXG4gICAgICB2YXIgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIHZhciBjaGlsZFByb3BzU2VsZWN0b3IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGhlIGNoaWxkIHByb3BzIHNlbGVjdG9yIG5lZWRzIHRoZSBzdG9yZSByZWZlcmVuY2UgYXMgYW4gaW5wdXQuXG4gICAgICAgIC8vIFJlLWNyZWF0ZSB0aGlzIHNlbGVjdG9yIHdoZW5ldmVyIHRoZSBzdG9yZSBjaGFuZ2VzLlxuICAgICAgICByZXR1cm4gY3JlYXRlQ2hpbGRTZWxlY3RvcihzdG9yZSk7XG4gICAgICB9LCBbc3RvcmVdKTtcblxuICAgICAgdmFyIF91c2VNZW1vMiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuIE5PX1NVQlNDUklQVElPTl9BUlJBWTsgLy8gVGhpcyBTdWJzY3JpcHRpb24ncyBzb3VyY2Ugc2hvdWxkIG1hdGNoIHdoZXJlIHN0b3JlIGNhbWUgZnJvbTogcHJvcHMgdnMuIGNvbnRleHQuIEEgY29tcG9uZW50XG4gICAgICAgIC8vIGNvbm5lY3RlZCB0byB0aGUgc3RvcmUgdmlhIHByb3BzIHNob3VsZG4ndCB1c2Ugc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dCwgb3IgdmljZSB2ZXJzYS5cblxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbihzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzID8gbnVsbCA6IGNvbnRleHRWYWx1ZS5zdWJzY3JpcHRpb24pOyAvLyBgbm90aWZ5TmVzdGVkU3Vic2AgaXMgZHVwbGljYXRlZCB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AsIHdoZXJlIGBzdWJzY3JpcHRpb25gIHdpbGwgdGhlbiBiZSBudWxsLiBUaGlzIGNhblxuICAgICAgICAvLyBwcm9iYWJseSBiZSBhdm9pZGVkIGlmIFN1YnNjcmlwdGlvbidzIGxpc3RlbmVycyBsb2dpYyBpcyBjaGFuZ2VkIHRvIG5vdCBjYWxsIGxpc3RlbmVyc1xuICAgICAgICAvLyB0aGF0IGhhdmUgYmVlbiB1bnN1YnNjcmliZWQgaW4gdGhlICBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLlxuXG4gICAgICAgIHZhciBub3RpZnlOZXN0ZWRTdWJzID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic107XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSksXG4gICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3VzZU1lbW8yWzBdLFxuICAgICAgICAgIG5vdGlmeU5lc3RlZFN1YnMgPSBfdXNlTWVtbzJbMV07IC8vIERldGVybWluZSB3aGF0IHtzdG9yZSwgc3Vic2NyaXB0aW9ufSB2YWx1ZSBzaG91bGQgYmUgcHV0IGludG8gbmVzdGVkIGNvbnRleHQsIGlmIG5lY2Vzc2FyeSxcbiAgICAgIC8vIGFuZCBtZW1vaXplIHRoYXQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgY29udGV4dCB1cGRhdGVzLlxuXG5cbiAgICAgIHZhciBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCBpcyBkaXJlY3RseSBzdWJzY3JpYmVkIHRvIGEgc3RvcmUgZnJvbSBwcm9wcy5cbiAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IGRlc2NlbmRhbnRzIHJlYWRpbmcgZnJvbSB0aGlzIHN0b3JlIC0gcGFzcyBkb3duIHdoYXRldmVyXG4gICAgICAgICAgLy8gdGhlIGV4aXN0aW5nIGNvbnRleHQgdmFsdWUgaXMgZnJvbSB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2UsIHB1dCB0aGlzIGNvbXBvbmVudCdzIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBpbnRvIGNvbnRleHQsIHNvIHRoYXRcbiAgICAgICAgLy8gY29ubmVjdGVkIGRlc2NlbmRhbnRzIHdvbid0IHVwZGF0ZSB1bnRpbCBhZnRlciB0aGlzIGNvbXBvbmVudCBpcyBkb25lXG5cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHRWYWx1ZSwge1xuICAgICAgICAgIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSwgW2RpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlLCBzdWJzY3JpcHRpb25dKTsgLy8gV2UgbmVlZCB0byBmb3JjZSB0aGlzIHdyYXBwZXIgY29tcG9uZW50IHRvIHJlLXJlbmRlciB3aGVuZXZlciBhIFJlZHV4IHN0b3JlIHVwZGF0ZVxuICAgICAgLy8gY2F1c2VzIGEgY2hhbmdlIHRvIHRoZSBjYWxjdWxhdGVkIGNoaWxkIGNvbXBvbmVudCBwcm9wcyAob3Igd2UgY2F1Z2h0IGFuIGVycm9yIGluIG1hcFN0YXRlKVxuXG4gICAgICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKHN0b3JlU3RhdGVVcGRhdGVzUmVkdWNlciwgRU1QVFlfQVJSQVksIGluaXRTdGF0ZVVwZGF0ZXMpLFxuICAgICAgICAgIF91c2VSZWR1Y2VyJCA9IF91c2VSZWR1Y2VyWzBdLFxuICAgICAgICAgIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQgPSBfdXNlUmVkdWNlciRbMF0sXG4gICAgICAgICAgZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaCA9IF91c2VSZWR1Y2VyWzFdOyAvLyBQcm9wYWdhdGUgYW55IG1hcFN0YXRlL21hcERpc3BhdGNoIGVycm9ycyB1cHdhcmRzXG5cblxuICAgICAgaWYgKHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQgJiYgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdC5lcnJvcikge1xuICAgICAgICB0aHJvdyBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yO1xuICAgICAgfSAvLyBTZXQgdXAgcmVmcyB0byBjb29yZGluYXRlIHZhbHVlcyBiZXR3ZWVuIHRoZSBzdWJzY3JpcHRpb24gZWZmZWN0IGFuZCB0aGUgcmVuZGVyIGxvZ2ljXG5cblxuICAgICAgdmFyIGxhc3RDaGlsZFByb3BzID0gdXNlUmVmKCk7XG4gICAgICB2YXIgbGFzdFdyYXBwZXJQcm9wcyA9IHVzZVJlZih3cmFwcGVyUHJvcHMpO1xuICAgICAgdmFyIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSB1c2VSZWYoKTtcbiAgICAgIHZhciByZW5kZXJJc1NjaGVkdWxlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgICB2YXIgYWN0dWFsQ2hpbGRQcm9wcyA9IHVzZVB1cmVPbmx5TWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRyaWNreSBsb2dpYyBoZXJlOlxuICAgICAgICAvLyAtIFRoaXMgcmVuZGVyIG1heSBoYXZlIGJlZW4gdHJpZ2dlcmVkIGJ5IGEgUmVkdXggc3RvcmUgdXBkYXRlIHRoYXQgcHJvZHVjZWQgbmV3IGNoaWxkIHByb3BzXG4gICAgICAgIC8vIC0gSG93ZXZlciwgd2UgbWF5IGhhdmUgZ290dGVuIG5ldyB3cmFwcGVyIHByb3BzIGFmdGVyIHRoYXRcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBuZXcgY2hpbGQgcHJvcHMsIGFuZCB0aGUgc2FtZSB3cmFwcGVyIHByb3BzLCB3ZSBrbm93IHdlIHNob3VsZCB1c2UgdGhlIG5ldyBjaGlsZCBwcm9wcyBhcy1pcy5cbiAgICAgICAgLy8gQnV0LCBpZiB3ZSBoYXZlIG5ldyB3cmFwcGVyIHByb3BzLCB0aG9zZSBtaWdodCBjaGFuZ2UgdGhlIGNoaWxkIHByb3BzLCBzbyB3ZSBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoaW5ncy5cbiAgICAgICAgLy8gU28sIHdlJ2xsIHVzZSB0aGUgY2hpbGQgcHJvcHMgZnJvbSBzdG9yZSB1cGRhdGUgb25seSBpZiB0aGUgd3JhcHBlciBwcm9wcyBhcmUgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLlxuICAgICAgICBpZiAoY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ICYmIHdyYXBwZXJQcm9wcyA9PT0gbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDtcbiAgICAgICAgfSAvLyBUT0RPIFdlJ3JlIHJlYWRpbmcgdGhlIHN0b3JlIGRpcmVjdGx5IGluIHJlbmRlcigpIGhlcmUuIEJhZCBpZGVhP1xuICAgICAgICAvLyBUaGlzIHdpbGwgbGlrZWx5IGNhdXNlIEJhZCBUaGluZ3MgKFRNKSB0byBoYXBwZW4gaW4gQ29uY3VycmVudCBNb2RlLlxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgZG8gdGhpcyBiZWNhdXNlIG9uIHJlbmRlcnMgX25vdF8gY2F1c2VkIGJ5IHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdGhlIGxhdGVzdCBzdG9yZSBzdGF0ZVxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlLlxuXG5cbiAgICAgICAgcmV0dXJuIGNoaWxkUHJvcHNTZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpLCB3cmFwcGVyUHJvcHMpO1xuICAgICAgfSwgW3N0b3JlLCBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LCB3cmFwcGVyUHJvcHNdKTsgLy8gV2UgbmVlZCB0aGlzIHRvIGV4ZWN1dGUgc3luY2hyb25vdXNseSBldmVyeSB0aW1lIHdlIHJlLXJlbmRlci4gSG93ZXZlciwgUmVhY3Qgd2FybnNcbiAgICAgIC8vIGFib3V0IHVzZUxheW91dEVmZmVjdCBpbiBTU1IsIHNvIHdlIHRyeSB0byBkZXRlY3QgZW52aXJvbm1lbnQgYW5kIGZhbGwgYmFjayB0b1xuICAgICAgLy8ganVzdCB1c2VFZmZlY3QgaW5zdGVhZCB0byBhdm9pZCB0aGUgd2FybmluZywgc2luY2UgbmVpdGhlciB3aWxsIHJ1biBhbnl3YXkuXG5cbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGFjdHVhbENoaWxkUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnNdKTsgLy8gT3VyIHJlLXN1YnNjcmliZSBsb2dpYyBvbmx5IHJ1bnMgd2hlbiB0aGUgc3RvcmUvc3Vic2NyaXB0aW9uIHNldHVwIGNoYW5nZXNcblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKHN1YnNjcmliZVVwZGF0ZXMsIFtzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsIHN0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3RvciwgbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoXSwgW3N0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3Rvcl0pOyAvLyBOb3cgdGhhdCBhbGwgdGhhdCdzIGRvbmUsIHdlIGNhbiBmaW5hbGx5IHRyeSB0byBhY3R1YWxseSByZW5kZXIgdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIG1lbW9pemUgdGhlIGVsZW1lbnRzIGZvciB0aGUgcmVuZGVyZWQgY2hpbGQgY29tcG9uZW50IGFzIGFuIG9wdGltaXphdGlvbi5cblxuICAgICAgdmFyIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIGFjdHVhbENoaWxkUHJvcHMsIHtcbiAgICAgICAgICByZWY6IHJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTsgLy8gSWYgUmVhY3Qgc2VlcyB0aGUgZXhhY3Qgc2FtZSBlbGVtZW50IHJlZmVyZW5jZSBhcyBsYXN0IHRpbWUsIGl0IGJhaWxzIG91dCBvZiByZS1yZW5kZXJpbmdcbiAgICAgIC8vIHRoYXQgY2hpbGQsIHNhbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gUmVhY3QubWVtbygpIG9yIHJldHVybmVkIGZhbHNlIGZyb20gc2hvdWxkQ29tcG9uZW50VXBkYXRlLlxuXG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCB0byBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRvIHBhc3MgaXRzIG93blxuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBkb3duIHRvIG91ciBkZXNjZW5kYW50cy4gVGhhdCBtZWFucyByZW5kZXJpbmcgdGhlIHNhbWVcbiAgICAgICAgICAvLyBDb250ZXh0IGluc3RhbmNlLCBhbmQgcHV0dGluZyBhIGRpZmZlcmVudCB2YWx1ZSBpbnRvIHRoZSBjb250ZXh0LlxuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgIHZhbHVlOiBvdmVycmlkZGVuQ29udGV4dFZhbHVlXG4gICAgICAgICAgfSwgcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9LCBbQ29udGV4dFRvVXNlLCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsIG92ZXJyaWRkZW5Db250ZXh0VmFsdWVdKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkO1xuICAgIH0gLy8gSWYgd2UncmUgaW4gXCJwdXJlXCIgbW9kZSwgZW5zdXJlIG91ciB3cmFwcGVyIGNvbXBvbmVudCBvbmx5IHJlLXJlbmRlcnMgd2hlbiBpbmNvbWluZyBwcm9wcyBoYXZlIGNoYW5nZWQuXG5cblxuICAgIHZhciBDb25uZWN0ID0gcHVyZSA/IFJlYWN0Lm1lbW8oQ29ubmVjdEZ1bmN0aW9uKSA6IENvbm5lY3RGdW5jdGlvbjtcbiAgICBDb25uZWN0LldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIENvbm5lY3QuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblxuICAgIGlmIChmb3J3YXJkUmVmKSB7XG4gICAgICB2YXIgZm9yd2FyZGVkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcywgcmVmKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4uL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi4vdXRpbHMvc2hhbGxvd0VxdWFsJztcbmltcG9ydCBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwRGlzcGF0Y2hUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIGZyb20gJy4vbWFwU3RhdGVUb1Byb3BzJztcbmltcG9ydCBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyBmcm9tICcuL21lcmdlUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9zZWxlY3RvckZhY3RvcnknO1xuLypcbiAgY29ubmVjdCBpcyBhIGZhY2FkZSBvdmVyIGNvbm5lY3RBZHZhbmNlZC4gSXQgdHVybnMgaXRzIGFyZ3MgaW50byBhIGNvbXBhdGlibGVcbiAgc2VsZWN0b3JGYWN0b3J5LCB3aGljaCBoYXMgdGhlIHNpZ25hdHVyZTpcblxuICAgIChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA9PiBuZXh0RmluYWxQcm9wc1xuICBcbiAgY29ubmVjdCBwYXNzZXMgaXRzIGFyZ3MgdG8gY29ubmVjdEFkdmFuY2VkIGFzIG9wdGlvbnMsIHdoaWNoIHdpbGwgaW4gdHVybiBwYXNzIHRoZW0gdG9cbiAgc2VsZWN0b3JGYWN0b3J5IGVhY2ggdGltZSBhIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIGlzIGluc3RhbnRpYXRlZCBvciBob3QgcmVsb2FkZWQuXG5cbiAgc2VsZWN0b3JGYWN0b3J5IHJldHVybnMgYSBmaW5hbCBwcm9wcyBzZWxlY3RvciBmcm9tIGl0cyBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsIG1lcmdlUHJvcHMsXG4gIG1lcmdlUHJvcHNGYWN0b3JpZXMsIGFuZCBwdXJlIGFyZ3MuXG5cbiAgVGhlIHJlc3VsdGluZyBmaW5hbCBwcm9wcyBzZWxlY3RvciBpcyBjYWxsZWQgYnkgdGhlIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIHdoZW5ldmVyXG4gIGl0IHJlY2VpdmVzIG5ldyBwcm9wcyBvciBzdG9yZSBzdGF0ZS5cbiAqL1xuXG5mdW5jdGlvbiBtYXRjaChhcmcsIGZhY3RvcmllcywgbmFtZSkge1xuICBmb3IgKHZhciBpID0gZmFjdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHJlc3VsdCA9IGZhY3Rvcmllc1tpXShhcmcpO1xuICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBvcHRpb25zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBvZiB0eXBlIFwiICsgdHlwZW9mIGFyZyArIFwiIGZvciBcIiArIG5hbWUgKyBcIiBhcmd1bWVudCB3aGVuIGNvbm5lY3RpbmcgY29tcG9uZW50IFwiICsgb3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZSArIFwiLlwiKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn0gLy8gY3JlYXRlQ29ubmVjdCB3aXRoIGRlZmF1bHQgYXJncyBidWlsZHMgdGhlICdvZmZpY2lhbCcgY29ubmVjdCBiZWhhdmlvci4gQ2FsbGluZyBpdCB3aXRoXG4vLyBkaWZmZXJlbnQgb3B0aW9ucyBvcGVucyB1cCBzb21lIHRlc3RpbmcgYW5kIGV4dGVuc2liaWxpdHkgc2NlbmFyaW9zXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3QoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkY29ubmVjdEhPQyA9IF9yZWYuY29ubmVjdEhPQyxcbiAgICAgIGNvbm5lY3RIT0MgPSBfcmVmJGNvbm5lY3RIT0MgPT09IHZvaWQgMCA/IGNvbm5lY3RBZHZhbmNlZCA6IF9yZWYkY29ubmVjdEhPQyxcbiAgICAgIF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9IF9yZWYubWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBTdGF0ZVRvUHJvcHNGID09PSB2b2lkIDAgPyBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBTdGF0ZVRvUHJvcHNGLFxuICAgICAgX3JlZiRtYXBEaXNwYXRjaFRvUHJvID0gX3JlZi5tYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgPSBfcmVmJG1hcERpc3BhdGNoVG9Qcm8gPT09IHZvaWQgMCA/IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1hcERpc3BhdGNoVG9Qcm8sXG4gICAgICBfcmVmJG1lcmdlUHJvcHNGYWN0b3IgPSBfcmVmLm1lcmdlUHJvcHNGYWN0b3JpZXMsXG4gICAgICBtZXJnZVByb3BzRmFjdG9yaWVzID0gX3JlZiRtZXJnZVByb3BzRmFjdG9yID09PSB2b2lkIDAgPyBkZWZhdWx0TWVyZ2VQcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvcixcbiAgICAgIF9yZWYkc2VsZWN0b3JGYWN0b3J5ID0gX3JlZi5zZWxlY3RvckZhY3RvcnksXG4gICAgICBzZWxlY3RvckZhY3RvcnkgPSBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9PT0gdm9pZCAwID8gZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSA6IF9yZWYkc2VsZWN0b3JGYWN0b3J5O1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBfcmVmMikge1xuICAgIGlmIChfcmVmMiA9PT0gdm9pZCAwKSB7XG4gICAgICBfcmVmMiA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcmVmMyA9IF9yZWYyLFxuICAgICAgICBfcmVmMyRwdXJlID0gX3JlZjMucHVyZSxcbiAgICAgICAgcHVyZSA9IF9yZWYzJHB1cmUgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmMyRwdXJlLFxuICAgICAgICBfcmVmMyRhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzLmFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYzJGFyZVN0YXRlc0VxdWFsID09PSB2b2lkIDAgPyBzdHJpY3RFcXVhbCA6IF9yZWYzJGFyZVN0YXRlc0VxdWFsLFxuICAgICAgICBfcmVmMyRhcmVPd25Qcm9wc0VxdWEgPSBfcmVmMy5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZjMkYXJlT3duUHJvcHNFcXVhID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVPd25Qcm9wc0VxdWEsXG4gICAgICAgIF9yZWYzJGFyZVN0YXRlUHJvcHNFcSA9IF9yZWYzLmFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZjMkYXJlU3RhdGVQcm9wc0VxID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVTdGF0ZVByb3BzRXEsXG4gICAgICAgIF9yZWYzJGFyZU1lcmdlZFByb3BzRSA9IF9yZWYzLmFyZU1lcmdlZFByb3BzRXF1YWwsXG4gICAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWwgPSBfcmVmMyRhcmVNZXJnZWRQcm9wc0UgPT09IHZvaWQgMCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYzJGFyZU1lcmdlZFByb3BzRSxcbiAgICAgICAgZXh0cmFPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcInB1cmVcIiwgXCJhcmVTdGF0ZXNFcXVhbFwiLCBcImFyZU93blByb3BzRXF1YWxcIiwgXCJhcmVTdGF0ZVByb3BzRXF1YWxcIiwgXCJhcmVNZXJnZWRQcm9wc0VxdWFsXCJdKTtcblxuICAgIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWF0Y2gobWFwU3RhdGVUb1Byb3BzLCBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsICdtYXBTdGF0ZVRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IG1hdGNoKG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNZXJnZVByb3BzID0gbWF0Y2gobWVyZ2VQcm9wcywgbWVyZ2VQcm9wc0ZhY3RvcmllcywgJ21lcmdlUHJvcHMnKTtcbiAgICByZXR1cm4gY29ubmVjdEhPQyhzZWxlY3RvckZhY3RvcnksIF9leHRlbmRzKHtcbiAgICAgIC8vIHVzZWQgaW4gZXJyb3IgbWVzc2FnZXNcbiAgICAgIG1ldGhvZE5hbWU6ICdjb25uZWN0JyxcbiAgICAgIC8vIHVzZWQgdG8gY29tcHV0ZSBDb25uZWN0J3MgZGlzcGxheU5hbWUgZnJvbSB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBkaXNwbGF5TmFtZS5cbiAgICAgIGdldERpc3BsYXlOYW1lOiBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBcIkNvbm5lY3QoXCIgKyBuYW1lICsgXCIpXCI7XG4gICAgICB9LFxuICAgICAgLy8gaWYgbWFwU3RhdGVUb1Byb3BzIGlzIGZhbHN5LCB0aGUgQ29ubmVjdCBjb21wb25lbnQgZG9lc24ndCBzdWJzY3JpYmUgdG8gc3RvcmUgc3RhdGUgY2hhbmdlc1xuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOiBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyksXG4gICAgICAvLyBwYXNzZWQgdGhyb3VnaCB0byBzZWxlY3RvckZhY3RvcnlcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHM6IGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzOiBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHM6IGluaXRNZXJnZVByb3BzLFxuICAgICAgcHVyZTogcHVyZSxcbiAgICAgIGFyZVN0YXRlc0VxdWFsOiBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWw6IGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWw6IGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWw6IGFyZU1lcmdlZFByb3BzRXF1YWxcbiAgICB9LCBleHRyYU9wdGlvbnMpKTtcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9jcmVhdGVDb25uZWN0KCk7IiwiaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgd3JhcE1hcFRvUHJvcHNDb25zdGFudCwgd3JhcE1hcFRvUHJvcHNGdW5jIH0gZnJvbSAnLi93cmFwTWFwVG9Qcm9wcyc7XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24obWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwRGlzcGF0Y2hUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoXG4gICAgfTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0KG1hcERpc3BhdGNoVG9Qcm9wcykge1xuICByZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzICYmIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdvYmplY3QnID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKG1hcERpc3BhdGNoVG9Qcm9wcywgZGlzcGF0Y2gpO1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbiwgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZywgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0XTsiLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbihtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZyhtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge307XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nXTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvd25Qcm9wcywgc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRNZXJnZVByb3BzUHJveHkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgICBwdXJlID0gX3JlZi5wdXJlLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO1xuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzO1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZVByb3BzUHJveHkoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgICAgIHZhciBuZXh0TWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgICAgaWYgKGhhc1J1bk9uY2UpIHtcbiAgICAgICAgaWYgKCFwdXJlIHx8ICFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcywgbWVyZ2VkUHJvcHMpKSBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc1J1bk9uY2UgPSB0cnVlO1xuICAgICAgICBtZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KG1lcmdlZFByb3BzLCBkaXNwbGF5TmFtZSwgJ21lcmdlUHJvcHMnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgIH07XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWVyZ2VQcm9wcztcbiAgfSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWVyZ2VQcm9wc0lzRnVuY3Rpb24sIHdoZW5NZXJnZVByb3BzSXNPbWl0dGVkXTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCB2ZXJpZnlTdWJzZWxlY3RvcnMgZnJvbSAnLi92ZXJpZnlTdWJzZWxlY3RvcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBfcmVmKSB7XG4gIHZhciBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYuYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZi5hcmVTdGF0ZVByb3BzRXF1YWw7XG4gIHZhciBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIHZhciBvd25Qcm9wcztcbiAgdmFyIHN0YXRlUHJvcHM7XG4gIHZhciBkaXNwYXRjaFByb3BzO1xuICB2YXIgbWVyZ2VkUHJvcHM7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgdmFyIHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwobmV4dFN0YXRlLCBzdGF0ZSk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn0gLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcbi8vIElmIHB1cmUgaXMgdHJ1ZSwgdGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0QWR2YW5jZWQncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLiBJZiBmYWxzZSwgdGhlIHNlbGVjdG9yIHdpbGwgYWx3YXlzIHJldHVybiBhIG5ld1xuLy8gb2JqZWN0IGFuZCBzaG91bGRDb21wb25lbnRVcGRhdGUgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYyKSB7XG4gIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gX3JlZjIuaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBfcmVmMi5pbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMgPSBfcmVmMi5pbml0TWVyZ2VQcm9wcyxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiaW5pdE1hcFN0YXRlVG9Qcm9wc1wiLCBcImluaXRNYXBEaXNwYXRjaFRvUHJvcHNcIiwgXCJpbml0TWVyZ2VQcm9wc1wiXSk7XG5cbiAgdmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zLmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIHZhciBzZWxlY3RvckZhY3RvcnkgPSBvcHRpb25zLnB1cmUgPyBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSA6IGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7XG4gIHJldHVybiBzZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLCBtZXRob2ROYW1lLCBkaXNwbGF5TmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB2YWx1ZSBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgaW4gXCIgKyBkaXNwbGF5TmFtZSArIFwiLlwiKTtcbiAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09PSAnbWFwU3RhdGVUb1Byb3BzJyB8fCBtZXRob2ROYW1lID09PSAnbWFwRGlzcGF0Y2hUb1Byb3BzJykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNlbGVjdG9yLCAnZGVwZW5kc09uT3duUHJvcHMnKSkge1xuICAgICAgd2FybmluZyhcIlRoZSBzZWxlY3RvciBmb3IgXCIgKyBtZXRob2ROYW1lICsgXCIgb2YgXCIgKyBkaXNwbGF5TmFtZSArIFwiIGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5cIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmVyaWZ5KG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycsIGRpc3BsYXlOYW1lKTtcbiAgdmVyaWZ5KG1lcmdlUHJvcHMsICdtZXJnZVByb3BzJywgZGlzcGxheU5hbWUpO1xufSIsImltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cblxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn0gLy8gZGVwZW5kc09uT3duUHJvcHMgaXMgdXNlZCBieSBjcmVhdGVNYXBUb1Byb3BzUHJveHkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGFzcyBwcm9wcyBhcyBhcmdzXG4vLyB0byB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyB3cmFwcGVkLiBJdCBpcyBhbHNvIHVzZWQgYnkgbWFrZVB1cmVQcm9wc1NlbGVjdG9yIHRvIGRldGVybWluZVxuLy8gd2hldGhlciBtYXBUb1Byb3BzIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBwcm9wcyBoYXZlIGNoYW5nZWQuXG4vL1xuLy8gQSBsZW5ndGggb2Ygb25lIHNpZ25hbHMgdGhhdCBtYXBUb1Byb3BzIGRvZXMgbm90IGRlcGVuZCBvbiBwcm9wcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuLy8gQSBsZW5ndGggb2YgemVybyBpcyBhc3N1bWVkIHRvIG1lYW4gbWFwVG9Qcm9wcyBpcyBnZXR0aW5nIGFyZ3MgdmlhIGFyZ3VtZW50cyBvciAuLi5hcmdzIGFuZFxuLy8gdGhlcmVmb3JlIG5vdCByZXBvcnRpbmcgaXRzIGxlbmd0aCBhY2N1cmF0ZWx5Li5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IG51bGwgJiYgbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gdW5kZWZpbmVkID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufSAvLyBVc2VkIGJ5IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIGFuZCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbixcbi8vIHRoaXMgZnVuY3Rpb24gd3JhcHMgbWFwVG9Qcm9wcyBpbiBhIHByb3h5IGZ1bmN0aW9uIHdoaWNoIGRvZXMgc2V2ZXJhbCB0aGluZ3M6XG4vL1xuLy8gICogRGV0ZWN0cyB3aGV0aGVyIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCBkZXBlbmRzIG9uIHByb3BzLCB3aGljaFxuLy8gICAgaXMgdXNlZCBieSBzZWxlY3RvckZhY3RvcnkgdG8gZGVjaWRlIGlmIGl0IHNob3VsZCByZWludm9rZSBvbiBwcm9wcyBjaGFuZ2VzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIGhhbmRsZXMgbWFwVG9Qcm9wcyBpZiByZXR1cm5zIGFub3RoZXIgZnVuY3Rpb24sIGFuZCB0cmVhdHMgdGhhdFxuLy8gICAgbmV3IGZ1bmN0aW9uIGFzIHRoZSB0cnVlIG1hcFRvUHJvcHMgZm9yIHN1YnNlcXVlbnQgY2FsbHMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgdmVyaWZpZXMgdGhlIGZpcnN0IHJlc3VsdCBpcyBhIHBsYWluIG9iamVjdCwgaW4gb3JkZXIgdG8gd2FyblxuLy8gICAgdGhlIGRldmVsb3BlciB0aGF0IHRoZWlyIG1hcFRvUHJvcHMgZnVuY3Rpb24gaXMgbm90IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdC5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCk7XG4gICAgfTsgLy8gYWxsb3cgZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeSB0byBnZXQgb3duUHJvcHNcblxuXG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuXG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgdmFyIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZSBhcyB1c2VEZWZhdWx0U3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vdXNlU3RvcmUnO1xuLyoqXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICBjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQ7XG4gIH1cblxuICB2YXIgdXNlU3RvcmUgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRTdG9yZSA6IGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZURpc3BhdGNoKCkge1xuICAgIHZhciBzdG9yZSA9IHVzZVN0b3JlKCk7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoO1xuICB9O1xufVxuLyoqXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBgZGlzcGF0Y2hgIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHthbnl8ZnVuY3Rpb259IHJlZHV4IHN0b3JlJ3MgYGRpc3BhdGNoYCBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAqICAgY29uc3QgaW5jcmVhc2VDb3VudGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnaW5jcmVhc2UtY291bnRlcicgfSksIFtdKVxuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZUNvdW50ZXJ9PkluY3JlYXNlIGNvdW50ZXI8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKVxuICogfVxuICovXG5cbmV4cG9ydCB2YXIgdXNlRGlzcGF0Y2ggPSAvKiNfX1BVUkVfXyovY3JlYXRlRGlzcGF0Y2hIb29rKCk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0Jztcbi8qKlxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGAuIFRoaXMgaXMgYSBsb3ctbGV2ZWxcbiAqIGhvb2sgdGhhdCB5b3Ugc2hvdWxkIHVzdWFsbHkgbm90IG5lZWQgdG8gY2FsbCBkaXJlY3RseS5cbiAqXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgdmFsdWUgb2YgdGhlIGBSZWFjdFJlZHV4Q29udGV4dGBcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxuICogICByZXR1cm4gPGRpdj57c3RvcmUuZ2V0U3RhdGUoKX08L2Rpdj5cbiAqIH1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0KCkge1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChSZWFjdFJlZHV4Q29udGV4dCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+Jyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dFZhbHVlO1xufSIsImltcG9ydCB7IHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlTWVtbywgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuXG52YXIgcmVmRXF1YWxpdHkgPSBmdW5jdGlvbiByZWZFcXVhbGl0eShhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZnVuY3Rpb24gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKSB7XG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcyArIDE7XG4gIH0sIDApLFxuICAgICAgZm9yY2VSZW5kZXIgPSBfdXNlUmVkdWNlclsxXTtcblxuICB2YXIgc3Vic2NyaXB0aW9uID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oc3RvcmUsIGNvbnRleHRTdWIpO1xuICB9LCBbc3RvcmUsIGNvbnRleHRTdWJdKTtcbiAgdmFyIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IgPSB1c2VSZWYoKTtcbiAgdmFyIGxhdGVzdFNlbGVjdG9yID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTdG9yZVN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTZWxlY3RlZFN0YXRlID0gdXNlUmVmKCk7XG4gIHZhciBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgdmFyIHNlbGVjdGVkU3RhdGU7XG5cbiAgdHJ5IHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IGxhdGVzdFNlbGVjdG9yLmN1cnJlbnQgfHwgc3RvcmVTdGF0ZSAhPT0gbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50IHx8IGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgc2VsZWN0ZWRTdGF0ZSA9IHNlbGVjdG9yKHN0b3JlU3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gXCJcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcblwiICsgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50LnN0YWNrICsgXCJcXG5cXG5cIjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBsYXRlc3RTZWxlY3Rvci5jdXJyZW50ID0gc2VsZWN0b3I7XG4gICAgbGF0ZXN0U3RvcmVTdGF0ZS5jdXJyZW50ID0gc3RvcmVTdGF0ZTtcbiAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBzZWxlY3RlZFN0YXRlO1xuICAgIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgfSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9yVXBkYXRlcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBuZXdTZWxlY3RlZFN0YXRlID0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudChzdG9yZS5nZXRTdGF0ZSgpKTtcblxuICAgICAgICBpZiAoZXF1YWxpdHlGbihuZXdTZWxlY3RlZFN0YXRlLCBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGF0ZXN0U2VsZWN0ZWRTdGF0ZS5jdXJyZW50ID0gbmV3U2VsZWN0ZWRTdGF0ZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyB3ZSBpZ25vcmUgYWxsIGVycm9ycyBoZXJlLCBzaW5jZSB3aGVuIHRoZSBjb21wb25lbnRcbiAgICAgICAgLy8gaXMgcmUtcmVuZGVyZWQsIHRoZSBzZWxlY3RvcnMgYXJlIGNhbGxlZCBhZ2FpbiwgYW5kXG4gICAgICAgIC8vIHdpbGwgdGhyb3cgYWdhaW4sIGlmIG5laXRoZXIgcHJvcHMgbm9yIHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIGNoYW5nZWRcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gZXJyO1xuICAgICAgfVxuXG4gICAgICBmb3JjZVJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICAgIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtcbiAgICBjaGVja0ZvclVwZGF0ZXMoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtzdG9yZSwgc3Vic2NyaXB0aW9uXSk7XG4gIHJldHVybiBzZWxlY3RlZFN0YXRlO1xufVxuLyoqXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbikge1xuICAgIGlmIChlcXVhbGl0eUZuID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc2VsZWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvclwiKTtcbiAgICB9XG5cbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmUsXG4gICAgICAgIGNvbnRleHRTdWIgPSBfdXNlUmVkdXhDb250ZXh0LnN1YnNjcmlwdGlvbjtcblxuICAgIHZhciBzZWxlY3RlZFN0YXRlID0gdXNlU2VsZWN0b3JXaXRoU3RvcmVBbmRTdWJzY3JpcHRpb24oc2VsZWN0b3IsIGVxdWFsaXR5Rm4sIHN0b3JlLCBjb250ZXh0U3ViKTtcbiAgICB1c2VEZWJ1Z1ZhbHVlKHNlbGVjdGVkU3RhdGUpO1xuICAgIHJldHVybiBzZWxlY3RlZFN0YXRlO1xuICB9O1xufVxuLyoqXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZSdzIHN0YXRlLiBUaGlzIGhvb2sgdGFrZXMgYSBzZWxlY3RvciBmdW5jdGlvblxuICogYXMgYW4gYXJndW1lbnQuIFRoZSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgc3RvcmUgc3RhdGUuXG4gKlxuICogVGhpcyBob29rIHRha2VzIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmlzb24gZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXJcbiAqIHRoYXQgYWxsb3dzIHlvdSB0byBjdXN0b21pemUgdGhlIHdheSB0aGUgc2VsZWN0ZWQgc3RhdGUgaXMgY29tcGFyZWQgdG8gZGV0ZXJtaW5lXG4gKiB3aGV0aGVyIHRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0b3IgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZXF1YWxpdHlGbiB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XG4gKlxuICogQHJldHVybnMge2FueX0gdGhlIHNlbGVjdGVkIHN0YXRlXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuICpcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBjb3VudGVyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnRlcilcbiAqICAgcmV0dXJuIDxkaXY+e2NvdW50ZXJ9PC9kaXY+XG4gKiB9XG4gKi9cblxuZXhwb3J0IHZhciB1c2VTZWxlY3RvciA9IC8qI19fUFVSRV9fKi9jcmVhdGVTZWxlY3Rvckhvb2soKTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG4vKipcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTdG9yZWAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTdG9yZSgpIHtcbiAgICB2YXIgX3VzZVJlZHV4Q29udGV4dCA9IHVzZVJlZHV4Q29udGV4dCgpLFxuICAgICAgICBzdG9yZSA9IF91c2VSZWR1eENvbnRleHQuc3RvcmU7XG5cbiAgICByZXR1cm4gc3RvcmU7XG4gIH07XG59XG4vKipcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHthbnl9IHRoZSByZWR1eCBzdG9yZVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcbiAqXG4gKiBleHBvcnQgY29uc3QgRXhhbXBsZUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxuICogfVxuICovXG5cbmV4cG9ydCB2YXIgdXNlU3RvcmUgPSAvKiNfX1BVUkVfXyovY3JlYXRlU3RvcmVIb29rKCk7IiwiaW1wb3J0IFByb3ZpZGVyIGZyb20gJy4vY29tcG9uZW50cy9Qcm92aWRlcic7XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tICcuL2Nvbm5lY3QvY29ubmVjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rIH0gZnJvbSAnLi9ob29rcy91c2VEaXNwYXRjaCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi9ob29rcy91c2VTdG9yZSc7XG5pbXBvcnQgeyBzZXRCYXRjaCB9IGZyb20gJy4vdXRpbHMvYmF0Y2gnO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2ggfSBmcm9tICcuL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5zZXRCYXRjaChiYXRjaCk7XG5leHBvcnQgeyBQcm92aWRlciwgY29ubmVjdEFkdmFuY2VkLCBSZWFjdFJlZHV4Q29udGV4dCwgY29ubmVjdCwgYmF0Y2gsIHVzZURpc3BhdGNoLCBjcmVhdGVEaXNwYXRjaEhvb2ssIHVzZVNlbGVjdG9yLCBjcmVhdGVTZWxlY3Rvckhvb2ssIHVzZVN0b3JlLCBjcmVhdGVTdG9yZUhvb2ssIHNoYWxsb3dFcXVhbCB9OyIsImltcG9ydCB7IGdldEJhdGNoIH0gZnJvbSAnLi9iYXRjaCc7IC8vIGVuY2Fwc3VsYXRlcyB0aGUgc3Vic2NyaXB0aW9uIGxvZ2ljIGZvciBjb25uZWN0aW5nIGEgY29tcG9uZW50IHRvIHRoZSByZWR1eCBzdG9yZSwgYXNcbi8vIHdlbGwgYXMgbmVzdGluZyBzdWJzY3JpcHRpb25zIG9mIGRlc2NlbmRhbnQgY29tcG9uZW50cywgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZVxuLy8gYW5jZXN0b3IgY29tcG9uZW50cyByZS1yZW5kZXIgYmVmb3JlIGRlc2NlbmRhbnRzXG5cbnZhciBudWxsTGlzdGVuZXJzID0ge1xuICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHt9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKSB7XG4gIHZhciBiYXRjaCA9IGdldEJhdGNoKCk7XG4gIHZhciBmaXJzdCA9IG51bGw7XG4gIHZhciBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBmaXJzdCA9IG51bGw7XG4gICAgICBsYXN0ID0gbnVsbDtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBmaXJzdDtcblxuICAgICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsYmFjaygpO1xuICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGZpcnN0O1xuXG4gICAgICB3aGlsZSAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsYXN0ID0ge1xuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIG5leHQ6IG51bGwsXG4gICAgICAgIHByZXY6IGxhc3RcbiAgICAgIH07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5wcmV2KSB7XG4gICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3QgPSBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCBmaXJzdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAobGlzdGVuZXIubmV4dCkge1xuICAgICAgICAgIGxpc3RlbmVyLm5leHQucHJldiA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdCA9IGxpc3RlbmVyLnByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICAgIGxpc3RlbmVyLnByZXYubmV4dCA9IGxpc3RlbmVyLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlyc3QgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFN1YnNjcmlwdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihzdG9yZSwgcGFyZW50U3ViKSB7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIHRoaXMucGFyZW50U3ViID0gcGFyZW50U3ViO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIgPSB0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdWJzY3JpcHRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGROZXN0ZWRTdWIgPSBmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpIHtcbiAgICB0aGlzLnRyeVN1YnNjcmliZSgpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnlOZXN0ZWRTdWJzID0gZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3VicygpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5ub3RpZnkoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQ2hhbmdlV3JhcHBlciA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVdyYXBwZXIoKSB7XG4gICAgaWYgKHRoaXMub25TdGF0ZUNoYW5nZSkge1xuICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1N1YnNjcmliZWQgPSBmdW5jdGlvbiBpc1N1YnNjcmliZWQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy51bnN1YnNjcmliZSk7XG4gIH07XG5cbiAgX3Byb3RvLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnBhcmVudFN1YiA/IHRoaXMucGFyZW50U3ViLmFkZE5lc3RlZFN1Yih0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIpIDogdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVDaGFuZ2VXcmFwcGVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50cnlVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVVuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICB0aGlzLmxpc3RlbmVycyA9IG51bGxMaXN0ZW5lcnM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdWJzY3JpcHRpb247XG59KCk7XG5cbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBkZWZhdWx0IH07IiwiLy8gRGVmYXVsdCB0byBhIGR1bW15IFwiYmF0Y2hcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGp1c3QgcnVucyB0aGUgY2FsbGJhY2tcbmZ1bmN0aW9uIGRlZmF1bHROb29wQmF0Y2goY2FsbGJhY2spIHtcbiAgY2FsbGJhY2soKTtcbn1cblxudmFyIGJhdGNoID0gZGVmYXVsdE5vb3BCYXRjaDsgLy8gQWxsb3cgaW5qZWN0aW5nIGFub3RoZXIgYmF0Y2hpbmcgZnVuY3Rpb24gbGF0ZXJcblxuZXhwb3J0IHZhciBzZXRCYXRjaCA9IGZ1bmN0aW9uIHNldEJhdGNoKG5ld0JhdGNoKSB7XG4gIHJldHVybiBiYXRjaCA9IG5ld0JhdGNoO1xufTsgLy8gU3VwcGx5IGEgZ2V0dGVyIGp1c3QgdG8gc2tpcCBkZWFsaW5nIHdpdGggRVNNIGJpbmRpbmdzXG5cbmV4cG9ydCB2YXIgZ2V0QmF0Y2ggPSBmdW5jdGlvbiBnZXRCYXRjaCgpIHtcbiAgcmV0dXJuIGJhdGNoO1xufTsiLCIvKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gIGlmIChwcm90byA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIHZhciBiYXNlUHJvdG8gPSBwcm90bztcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcbiAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG5leHBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyB9IGZyb20gJ3JlYWN0LWRvbSc7IiwiZnVuY3Rpb24gaXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IHkgIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gUmVhY3QgY3VycmVudGx5IHRocm93cyBhIHdhcm5pbmcgd2hlbiB1c2luZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIHNlcnZlci5cbi8vIFRvIGdldCBhcm91bmQgaXQsIHdlIGNhbiBjb25kaXRpb25hbGx5IHVzZUVmZmVjdCBvbiB0aGUgc2VydmVyIChuby1vcCkgYW5kXG4vLyB1c2VMYXlvdXRFZmZlY3QgaW4gdGhlIGJyb3dzZXIuIFdlIG5lZWQgdXNlTGF5b3V0RWZmZWN0IHRvIGVuc3VyZSB0aGUgc3RvcmVcbi8vIHN1YnNjcmlwdGlvbiBjYWxsYmFjayBhbHdheXMgaGFzIHRoZSBzZWxlY3RvciBmcm9tIHRoZSBsYXRlc3QgcmVuZGVyIGNvbW1pdFxuLy8gYXZhaWxhYmxlLCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IGhhcHBlbiBiZXR3ZWVuIHJlbmRlciBhbmQgdGhlIGVmZmVjdCxcbi8vIHdoaWNoIG1heSBjYXVzZSBtaXNzZWQgdXBkYXRlczsgd2UgYWxzbyBtdXN0IGVuc3VyZSB0aGUgc3RvcmUgc3Vic2NyaXB0aW9uXG4vLyBpcyBjcmVhdGVkIHN5bmNocm9ub3VzbHksIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgb2NjdXIgYmVmb3JlIHRoZVxuLy8gc3Vic2NyaXB0aW9uIGlzIGNyZWF0ZWQgYW5kIGFuIGluY29uc2lzdGVudCBzdGF0ZSBtYXkgYmUgb2JzZXJ2ZWRcblxuZXhwb3J0IHZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDsiLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhtZXRob2ROYW1lICsgXCIoKSBpbiBcIiArIGRpc3BsYXlOYW1lICsgXCIgbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyB2YWx1ZSArIFwiLlwiKTtcbiAgfVxufSIsIi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTtcbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuXG5leHBvcnQgZGVmYXVsdCB0aHVuazsiLCJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiBcImFjdGlvbiBcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiB8fCAnYW4gYWN0aW9uJztcbiAgcmV0dXJuIFwiR2l2ZW4gXCIgKyBhY3Rpb25EZXNjcmlwdGlvbiArIFwiLCByZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCIgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKFwiTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcblxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aDtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgXCIuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpKTtcbiAgfVxuXG4gIGlmIChlbnVtZXJhYmxlT25seSkga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3Igc2V0dGluZyBtb2RlIHRvIHByb2R1Y3Rpb24gaW4gd2VicGFjayAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9tb2RlLykgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLCBhcHBseU1pZGRsZXdhcmUsIGJpbmRBY3Rpb25DcmVhdG9ycywgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9O1xuIiwiZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwoZXF1YWxpdHlDaGVjaywgcHJldiwgbmV4dCkge1xuICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXG4gIHZhciBsZW5ndGggPSBwcmV2Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICghZXF1YWxpdHlDaGVjayhwcmV2W2ldLCBuZXh0W2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdEVxdWFsaXR5Q2hlY2s7XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIGxhc3RBcmdzLCBhcmd1bWVudHMpKSB7XG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuXG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodW5kZWZpbmVkLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmVjb21wdXRhdGlvbnMrKztcbiAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChtZW1vaXplT3B0aW9ucykpO1xuXG4gICAgLy8gSWYgYSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBhcmd1bWVudHMgd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSBvdXIgZGVwZW5kZW5jaWVzIGFnYWluLlxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgdmFyIHNlbGVjdG9yQ3JlYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogY3JlYXRlU2VsZWN0b3I7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArICgnd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgJyArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Iob2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICB2YWx1ZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbn0iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgcG9ueWZpbGwgZnJvbSAnLi9wb255ZmlsbC5qcyc7XG5cbnZhciByb290O1xuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSBwb255ZmlsbChyb290KTtcbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==