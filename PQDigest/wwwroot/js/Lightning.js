(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Lightning"],{

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

/***/ "./tsx/Lightning/ESRIMap.tsx":
/*!***********************************!*\
  !*** ./tsx/Lightning/ESRIMap.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "../node_modules/react-leaflet/es/index.js");
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! proj4leaflet */ "../node_modules/proj4leaflet/src/proj4leaflet.js");
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(proj4leaflet__WEBPACK_IMPORTED_MODULE_3__);
//******************************************************************************************************
//  TVAESRIMap.tsx - Gbtc
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
//  02/27/2020 - Billy Ernest
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





var ESRIMap = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), 2), radar = _a[0], setRadar = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('Streets'), 2), baseMap = _b[0], setBaseMap = _b[1];
    function Poly(geometry) {
        var outPut = {
            "type": "FeatureCollection",
            "features": []
        };
        //first we check for some easy cases, like if their is only one ring
        if (geometry.rings.length === 1) {
            outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "Polygon", "coordinates": geometry.rings } });
        }
        else {
            /*if it isn't that easy then we have to start checking ring direction, basically the ring goes clockwise its part of the polygon, if it goes counterclockwise it is a hole in the polygon, but geojson does it by haveing an array with the first element be the polygons and the next elements being holes in it*/
            var ccc = Dp(geometry.rings);
            var d = ccc[0];
            var dd = ccc[1];
            var r = [];
            if (dd.length === 0) {
                /*if their are no holes we don't need to worry about this, but do need to stuck each ring inside its own array*/
                var l2 = d.length;
                var i3 = 0;
                while (l2 > i3) {
                    r.push([d[i3]]);
                    i3++;
                }
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "MultiPolygon", "coordinates": r } });
            }
            else if (d.length === 1) {
                /*if their is only one clockwise ring then we know all holes are in that poly*/
                dd.unshift(d[0]);
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "Polygon", "coordinates": dd } });
            }
            else {
                /*if their are multiple rings and holes we have no way of knowing which belong to which without looking at it specially, so just dump the coordinates and add  a hole field, this may cause errors*/
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "MultiPolygon", "coordinates": d, "holes": dd } });
            }
        }
        return outPut;
    }
    function Dp(a) {
        //returns an array of 2 arrays, the first being all the clockwise ones, the second counter clockwise
        var d = [];
        var dd = [];
        var l = a.length;
        var ii = 0;
        while (l > ii) {
            if (C(a[ii])) {
                d.push(a[ii]);
            }
            else {
                dd.push(a[ii]);
            }
            ii++;
        }
        return [d, dd];
    }
    function C(a) {
        //return true if clockwise
        var l = a.length - 1;
        var i = 0;
        var o = 0;
        while (l > i) {
            o += (a[i][0] * a[i + 1][1] - a[i + 1][0] * a[i][1]);
            i++;
        }
        return o <= 0;
    }
    var bounds = [[34, -87], [36, -85]];
    if (props.Lines != null)
        bounds = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.geoJSON(props.Lines).getBounds();
    var buffers = null;
    if (props.Buffers != null) {
        buffers = Poly(props.Buffers.geometries[0]);
        buffers.style = function (feature) {
            return { stroke: feature.properties.color, opacity: feature.properties.opacity, strokeWidth: 1, fill: 'black' };
        };
    }
    var time = moment(props.DateTime);
    var minutes = (time.minutes() - time.minutes() % 5).toString();
    var timestring = time.utc().format('YYYY-MM-DDTHH') + ':' + (minutes.length == 1 ? "0" + minutes : minutes);
    var bm = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.esri.basemapLayer(baseMap);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            "ESRI Map",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-check", style: { position: 'absolute', right: 250, top: 10 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "form-check-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "checkbox", className: "form-check-input", value: "", checked: radar, onChange: function () { return setRadar(!radar); } }),
                    "Show Radar")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: "form-control", style: { width: 200, position: 'absolute', right: 5, top: 5 }, value: baseMap, onChange: function (evt) { return setBaseMap(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Streets' }, "Streets"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Topographic' }, "Topographic"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'NationalGeographic' }, "NationalGeographic"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Oceans' }, "Oceans"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Gray' }, "Gray"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'DarkGray' }, "DarkGray"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Imagery' }, "Imagery"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'ImageryClarity' }, "ImageryClarity"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'ImageryFirefly' }, "ImageryFirefly"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'ShadedRelief' }, "ShadedRelief"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Terrain' }, "Terrain"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'USATopo' }, "USATopo"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Physical' }, "Physical"))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"], { bounds: bounds, style: { height: props.Height - 50, width: props.Width - 12 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], { url: bm['_url'], attribution: bm.options.attribution, subdomains: bm.options.subdomains }),
                (radar ?
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["WMSTileLayer"], { url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi?time=" + timestring, layers: 'nexrad-n0r-wmst', format: 'image/png', transparent: true, opacity: 0.5, attribution: "Weather data \u00A9 2016 IEM Nexrad" }) : null),
                (props.Lines != null ?
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["GeoJSON"], { data: props.Lines }) :
                    null),
                (props.Buffers != null ?
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["GeoJSON"], { data: buffers, style: function (feature) {
                            return { stroke: true, color: 'black', weight: 1, fillColor: 'black' };
                        } }) :
                    null),
                (props.Strikes != null ? props.Strikes.features.map(function (s, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["CircleMarker"], { key: index, center: [s.attributes.LATITUDE, s.attributes.LONGITUDE], radius: "5", color: 'red', weight: "1", fillColor: "red", fillOpacity: "1" }); }) : null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (ESRIMap);


/***/ }),

/***/ "./tsx/Lightning/Lightning.tsx":
/*!*************************************!*\
  !*** ./tsx/Lightning/Lightning.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "../node_modules/history/es/index.js");
/* harmony import */ var _ExportCSV__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ExportCSV */ "./tsx/ExportCSV.tsx");
/* harmony import */ var _MultiSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MultiSelect */ "./tsx/MultiSelect.tsx");
/* harmony import */ var _ESRIMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ESRIMap */ "./tsx/Lightning/ESRIMap.tsx");
//******************************************************************************************************
//  Lightning.tsx - Gbtc
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








var Lightning = function (props) {
    var history = Object(history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"])();
    var qs = querystring__WEBPACK_IMPORTED_MODULE_3___default.a.parse(location.search.substring(1));
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.startDate == undefined ? moment().format("YYYY-MM-DDTHH:mm") : qs.date), 2), date = _a[0], setDate = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.tolerance == undefined ? 1 : parseInt(qs.tolerance)), 2), tolerance = _b[0], setTolerance = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.toleranceUnits == undefined ? 'minutes' : qs.toleranceUnits), 2), toleranceUnits = _c[0], setToleranceUnits = _c[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.radius == undefined ? 1 : parseInt(qs.radius)), 2), radius = _e[0], setRadius = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), meters = _f[0], setMeters = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('StartTime'), 2), sortField = _g[0], setSortField = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), ascending = _h[0], setAscending = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null), 2), lines = _j[0], setLines = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null), 2), buffers = _k[0], setBuffers = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null), 2), strikes = _l[0], setStrikes = _l[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
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
            //if (handle1.abort != undefined) handle1.abort();
            if (handle2.abort != undefined)
                handle2.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle = GetLines();
        handle.done(function (data) {
            setLines(data);
        });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }, [meters]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (lines == null)
            return;
        var handle1 = GetBuffers();
        handle1.done(function (data) {
            setBuffers(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [lines]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (buffers == null)
            return;
        var handle2 = GetStrikes();
        handle2.done(function (d) {
            setStrikes(d);
        });
        return function () {
            if (handle2 != null && handle2.abort != undefined)
                handle2.abort();
        };
    }, [buffers]);
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
    function GetLines() {
        return $.ajax({
            type: "POST",
            url: homePath + "api/ESRI/Line",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Meters: meters.map(function (meter) { return meter.ID; }) }),
            cache: true,
            async: true
        });
    }
    function GetBuffers() {
        return $.ajax({
            type: "POST",
            url: homePath + "api/ESRI/Buffer",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ Radius: radius, LineJSON: JSON.stringify({ geometryType: "esriGeometryPolyline", geometries: lines.features.map(function (a) { return { paths: [a.geometry.coordinates] }; }) }) }),
            cache: true,
            async: true
        });
    }
    function GetStrikes() {
        return $.ajax({
            type: "POST",
            url: homePath + "api/ESRI/Lightning",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({ BufferJSON: JSON.stringify(buffers.geometries[0]), TimeExtent: GetTimeExtent() }),
            cache: true,
            async: true
        });
    }
    function GetTimeExtent() {
        var adjustedDate = date;
        if (moment(date)._d.toTimeString().indexOf('Eastern'))
            adjustedDate = moment(date).add(-1, 'hours').format("YYYY-MM-DDTHH:mm");
        var startTime = moment(adjustedDate).add(-tolerance, toleranceUnits);
        var endTime = moment(adjustedDate).add(tolerance, toleranceUnits);
        return startTime.utc().format('x') + "," + endTime.utc().format('x');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: "100%", width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: 75, margin: 5 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: 75 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Meters"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiSelect__WEBPACK_IMPORTED_MODULE_6__["default"], { Options: meters.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                                var newMeters = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(meters);
                                                $.each(options, function (index, option) {
                                                    newMeters.find(function (meter) { return meter.ID == option.Value; }).Selected = !option.Selected;
                                                });
                                                setMeters(newMeters);
                                            } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: date, type: "datetime-local", onChange: function (e) { return setDate(e.target.value); } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Tolerance"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: tolerance, type: "number", onChange: function (e) { return setTolerance(parseFloat(e.target.value)); } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: "form-control", value: toleranceUnits, onChange: function (e) { return setToleranceUnits(e.target.value); } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'minutes' }, "Minute(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'hours' }, "Hour(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'days' }, "Day(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'weeks' }, "Week(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'months' }, "Month(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'years' }, "Year(s)"))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Radius (mi)"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: radius, type: "number", onChange: function (e) { return setRadius(parseFloat(e.target.value)); } }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 226, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ESRIMap__WEBPACK_IMPORTED_MODULE_7__["default"], { DateTime: date, Strikes: strikes, Lines: lines, Buffers: buffers, Height: (window.innerHeight) - 226, Width: window.innerWidth / 2 })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                        "Strikes",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-primary", style: { position: 'absolute', top: 5, right: 5 }, onClick: function () { return Object(_ExportCSV__WEBPACK_IMPORTED_MODULE_5__["ExportToCsv"])([], 'EventSearch.csv'); } }, "Export CSV")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 275, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                                { key: 'DISPLAYTIME', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'AMPLITUDE', label: 'Amplitude', headerStyle: { width: '25%' }, rowStyle: { width: '25%' } },
                                { key: 'LATITUDE', label: 'Lat', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'LONGITUDE', label: 'Lon', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                            ], tableClass: "table table-hover", data: (strikes != null ? strikes.features.map(function (s) { return s.attributes; }) : []), sortField: "DISPLAYTIME", ascending: true, onSort: null, onClick: null, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function () { return false; } })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Lightning);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXhwb3J0Q1NWLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTGlnaHRuaW5nL0VTUklNYXAudHN4Iiwid2VicGFjazovLy8uL3RzeC9MaWdodG5pbmcvTGlnaHRuaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTXVsdGlTZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRWpHLFNBQVMsV0FBVyxDQUFJLElBQVMsRUFBRSxRQUFnQjtJQUN0RCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE9BQU87SUFFNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFVBQVUsR0FBRyxVQUFVLEdBQUc7UUFDMUIs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M0osQ0FBMkosQ0FBQyxDQUNyTCxDQUVKLENBQ04sQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBQ2MsMEVBQVcsRUFBQyIsImZpbGUiOiJMaWdodG5pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAxLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwb3J0VG9Dc3Y8VD4oZGF0YTogVFtdLCBmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHJvd3MgPSBbT2JqZWN0LmtleXMoZGF0YVswXSldO1xyXG4gICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICByb3dzLnB1c2goT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVmFsdWUgPSByb3dbal0udG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbCArPSAnLCc7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjc3ZGaWxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2RmlsZV0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBUVkFFU1JJTWFwLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yNy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCB7IE1hcCwgQ2lyY2xlTWFya2VyLCBUaWxlTGF5ZXIsIFdNU1RpbGVMYXllciwgR2VvSlNPTiB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnO1xyXG5pbXBvcnQgeyBCYXNlbWFwTGF5ZXIgfSBmcm9tICdlc3JpLWxlYWZsZXQnO1xyXG5pbXBvcnQgcHJvajQgZnJvbSAncHJvajQnO1xyXG5pbXBvcnQgJ3Byb2o0bGVhZmxldCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuXHJcblxyXG5jb25zdCBFU1JJTWFwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IERhdGVUaW1lOiBzdHJpbmcsIFN0cmlrZXM6IGFueSwgTGluZXM6IEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb248R2VvSlNPTi5Qb2x5Z29uPiwgQnVmZmVyczogR2VvSlNPTi5HZW9tZXRyeUNvbGxlY3Rpb24sIFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcmFkYXIsIHNldFJhZGFyXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtiYXNlTWFwLCBzZXRCYXNlTWFwXSA9IFJlYWN0LnVzZVN0YXRlPGxlYWZsZXQuZXNyaS5CYXNlbWFwcz4oJ1N0cmVldHMnKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gIFBvbHkoZ2VvbWV0cnkpOiBhbnkge1xyXG4gICAgICAgIHZhciBvdXRQdXQgPSB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vZmlyc3Qgd2UgY2hlY2sgZm9yIHNvbWUgZWFzeSBjYXNlcywgbGlrZSBpZiB0aGVpciBpcyBvbmx5IG9uZSByaW5nXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnJpbmdzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBvdXRQdXQuZmVhdHVyZXMucHVzaCh7IHR5cGU6ICdGZWF0dXJlJywgcHJvcGVydGllczogeyBjb2xvcjogJ2JsYWNrJywgb3BhY2l0eTogMSB9LCBnZW9tZXRyeTogeyBcInR5cGVcIjogXCJQb2x5Z29uXCIsIFwiY29vcmRpbmF0ZXNcIjogZ2VvbWV0cnkucmluZ3MgfX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qaWYgaXQgaXNuJ3QgdGhhdCBlYXN5IHRoZW4gd2UgaGF2ZSB0byBzdGFydCBjaGVja2luZyByaW5nIGRpcmVjdGlvbiwgYmFzaWNhbGx5IHRoZSByaW5nIGdvZXMgY2xvY2t3aXNlIGl0cyBwYXJ0IG9mIHRoZSBwb2x5Z29uLCBpZiBpdCBnb2VzIGNvdW50ZXJjbG9ja3dpc2UgaXQgaXMgYSBob2xlIGluIHRoZSBwb2x5Z29uLCBidXQgZ2VvanNvbiBkb2VzIGl0IGJ5IGhhdmVpbmcgYW4gYXJyYXkgd2l0aCB0aGUgZmlyc3QgZWxlbWVudCBiZSB0aGUgcG9seWdvbnMgYW5kIHRoZSBuZXh0IGVsZW1lbnRzIGJlaW5nIGhvbGVzIGluIGl0Ki9cclxuICAgICAgICAgICAgdmFyIGNjYyA9IERwKGdlb21ldHJ5LnJpbmdzKTtcclxuICAgICAgICAgICAgdmFyIGQgPSBjY2NbMF07XHJcbiAgICAgICAgICAgIHZhciBkZCA9IGNjY1sxXTtcclxuICAgICAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGRkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLyppZiB0aGVpciBhcmUgbm8gaG9sZXMgd2UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCB0aGlzLCBidXQgZG8gbmVlZCB0byBzdHVjayBlYWNoIHJpbmcgaW5zaWRlIGl0cyBvd24gYXJyYXkqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGwyID0gZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgaTMgPSAwO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGwyID4gaTMpIHtcclxuICAgICAgICAgICAgICAgICAgICByLnB1c2goW2RbaTNdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaTMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG91dFB1dC5mZWF0dXJlcy5wdXNoKHsgdHlwZTogJ0ZlYXR1cmUnLCBwcm9wZXJ0aWVzOiB7IGNvbG9yOiAnYmxhY2snLCBvcGFjaXR5OiAxIH0sIGdlb21ldHJ5OiB7IFwidHlwZVwiOiBcIk11bHRpUG9seWdvblwiLCBcImNvb3JkaW5hdGVzXCI6IHIgfSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLyppZiB0aGVpciBpcyBvbmx5IG9uZSBjbG9ja3dpc2UgcmluZyB0aGVuIHdlIGtub3cgYWxsIGhvbGVzIGFyZSBpbiB0aGF0IHBvbHkqL1xyXG4gICAgICAgICAgICAgICAgZGQudW5zaGlmdChkWzBdKTtcclxuICAgICAgICAgICAgICAgIG91dFB1dC5mZWF0dXJlcy5wdXNoKHsgdHlwZTogJ0ZlYXR1cmUnLCBwcm9wZXJ0aWVzOiB7IGNvbG9yOiAnYmxhY2snLCBvcGFjaXR5OiAxIH0sIGdlb21ldHJ5OiB7IFwidHlwZVwiOiBcIlBvbHlnb25cIiwgXCJjb29yZGluYXRlc1wiOiBkZCB9IH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8qaWYgdGhlaXIgYXJlIG11bHRpcGxlIHJpbmdzIGFuZCBob2xlcyB3ZSBoYXZlIG5vIHdheSBvZiBrbm93aW5nIHdoaWNoIGJlbG9uZyB0byB3aGljaCB3aXRob3V0IGxvb2tpbmcgYXQgaXQgc3BlY2lhbGx5LCBzbyBqdXN0IGR1bXAgdGhlIGNvb3JkaW5hdGVzIGFuZCBhZGQgIGEgaG9sZSBmaWVsZCwgdGhpcyBtYXkgY2F1c2UgZXJyb3JzKi9cclxuICAgICAgICAgICAgICAgIG91dFB1dC5mZWF0dXJlcy5wdXNoKHsgdHlwZTogJ0ZlYXR1cmUnLCBwcm9wZXJ0aWVzOiB7IGNvbG9yOiAnYmxhY2snLCBvcGFjaXR5OiAxIH0sIGdlb21ldHJ5OiB7IFwidHlwZVwiOiBcIk11bHRpUG9seWdvblwiLCBcImNvb3JkaW5hdGVzXCI6IGQsIFwiaG9sZXNcIjogZGQgfSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRQdXRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEcChhKSB7XHJcbiAgICAgICAgLy9yZXR1cm5zIGFuIGFycmF5IG9mIDIgYXJyYXlzLCB0aGUgZmlyc3QgYmVpbmcgYWxsIHRoZSBjbG9ja3dpc2Ugb25lcywgdGhlIHNlY29uZCBjb3VudGVyIGNsb2Nrd2lzZVxyXG4gICAgICAgIHZhciBkID0gW107XHJcbiAgICAgICAgdmFyIGRkID0gW107XHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aDtcclxuICAgICAgICB2YXIgaWkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChsID4gaWkpIHtcclxuICAgICAgICAgICAgaWYgKEMoYVtpaV0pKSB7XHJcbiAgICAgICAgICAgICAgICBkLnB1c2goYVtpaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGQucHVzaChhW2lpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtkLCBkZF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQyhhKSB7XHJcbiAgICAgICAgLy9yZXR1cm4gdHJ1ZSBpZiBjbG9ja3dpc2VcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoIC0gMTtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIG8gPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAobCA+IGkpIHtcclxuICAgICAgICAgICAgbyArPSAoYVtpXVswXSAqIGFbaSArIDFdWzFdIC0gYVtpICsgMV1bMF0gKiBhW2ldWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG8gPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYm91bmRzOiBhbnkgPSBbWzM0LCAtODddLCBbMzYsIC04NV1dO1xyXG4gICAgaWYocHJvcHMuTGluZXMgIT0gbnVsbCkgYm91bmRzID0gTC5nZW9KU09OKHByb3BzLkxpbmVzKS5nZXRCb3VuZHMoKTtcclxuICAgIGxldCBidWZmZXJzID0gbnVsbDtcclxuICAgIGlmIChwcm9wcy5CdWZmZXJzICE9IG51bGwpIHtcclxuICAgICAgICBidWZmZXJzID0gUG9seShwcm9wcy5CdWZmZXJzLmdlb21ldHJpZXNbMF0pO1xyXG4gICAgICAgIGJ1ZmZlcnMuc3R5bGUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdHJva2U6IGZlYXR1cmUucHJvcGVydGllcy5jb2xvciwgb3BhY2l0eTogZmVhdHVyZS5wcm9wZXJ0aWVzLm9wYWNpdHksIHN0cm9rZVdpZHRoOiAxLCBmaWxsOiAnYmxhY2snIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHRpbWUgPSBtb21lbnQocHJvcHMuRGF0ZVRpbWUpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSAodGltZS5taW51dGVzKCkgLSB0aW1lLm1pbnV0ZXMoKSAlIDUpLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgdGltZXN0cmluZyA9IHRpbWUudXRjKCkuZm9ybWF0KCdZWVlZLU1NLUREVEhIJykgKyAnOicgKyAobWludXRlcy5sZW5ndGggPT0gMSA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzKTtcclxuICAgIGxldCBibSA9IGxlYWZsZXQuZXNyaS5iYXNlbWFwTGF5ZXIoYmFzZU1hcCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkVTUkkgTWFwXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDI1MCwgdG9wOiAxMCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cIlwiIGNoZWNrZWQ9e3JhZGFyfSBvbkNoYW5nZT17KCkgPT4gc2V0UmFkYXIoIXJhZGFyKX0vPlNob3cgUmFkYXJcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e3dpZHRoOiAyMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogNSwgdG9wOiA1fX0gIHZhbHVlPXtiYXNlTWFwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QmFzZU1hcChldnQudGFyZ2V0LnZhbHVlIGFzIGxlYWZsZXQuZXNyaS5CYXNlbWFwcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1N0cmVldHMnPlN0cmVldHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdUb3BvZ3JhcGhpYyc+VG9wb2dyYXBoaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdOYXRpb25hbEdlb2dyYXBoaWMnPk5hdGlvbmFsR2VvZ3JhcGhpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J09jZWFucyc+T2NlYW5zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nR3JheSc+R3JheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0RhcmtHcmF5Jz5EYXJrR3JheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0ltYWdlcnknPkltYWdlcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdJbWFnZXJ5Q2xhcml0eSc+SW1hZ2VyeUNsYXJpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdJbWFnZXJ5RmlyZWZseSc+SW1hZ2VyeUZpcmVmbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdTaGFkZWRSZWxpZWYnPlNoYWRlZFJlbGllZjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1RlcnJhaW4nPlRlcnJhaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVU0FUb3BvJz5VU0FUb3BvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUGh5c2ljYWwnPlBoeXNpY2FsPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWFwIGJvdW5kcz17Ym91bmRzfSBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwLCB3aWR0aDogcHJvcHMuV2lkdGggLSAxMiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpbGVMYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2JtWydfdXJsJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPXtibS5vcHRpb25zLmF0dHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJkb21haW5zPXtibS5vcHRpb25zLnN1YmRvbWFpbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7KHJhZGFyID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPFdNU1RpbGVMYXllciB1cmw9e2BodHRwczovL21lc29uZXQuYWdyb24uaWFzdGF0ZS5lZHUvY2dpLWJpbi93bXMvbmV4cmFkL24wci10LmNnaT90aW1lPSR7dGltZXN0cmluZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9J25leHJhZC1uMHItd21zdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdpbWFnZS9wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPVwiV2VhdGhlciBkYXRhIMKpIDIwMTYgSUVNIE5leHJhZFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiA6IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5MaW5lcyAhPSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICA8R2VvSlNPTiBkYXRhPXtwcm9wcy5MaW5lc30gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwpfVxyXG4gICAgICAgICAgICAgICAgeyhwcm9wcy5CdWZmZXJzICE9IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxHZW9KU09OIGRhdGE9e2J1ZmZlcnN9IHN0eWxlPXtmdW5jdGlvbiAoZmVhdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc3Ryb2tlOiB0cnVlLCBjb2xvcjogJ2JsYWNrJywgd2VpZ2h0OiAxLCBmaWxsQ29sb3I6ICdibGFjaycgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyhwcm9wcy5TdHJpa2VzICE9IG51bGwgPyBwcm9wcy5TdHJpa2VzLmZlYXR1cmVzLm1hcCgocywgaW5kZXgpID0+IDxDaXJjbGVNYXJrZXIga2V5PXtpbmRleH0gY2VudGVyPXtbcy5hdHRyaWJ1dGVzLkxBVElUVURFLCBzLmF0dHJpYnV0ZXMuTE9OR0lUVURFXX0gcmFkaXVzPVwiNVwiIGNvbG9yPSdyZWQnIHdlaWdodD1cIjFcIiBmaWxsQ29sb3I9XCJyZWRcIiBmaWxsT3BhY2l0eT1cIjFcIiAvPikgOiBudWxsKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L01hcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IEVTUklNYXA7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIExpZ2h0bmluZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBRRGlnZXN0LCBPcGVuWERBIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIlxyXG5pbXBvcnQgeyBFeHBvcnRUb0NzdiB9IGZyb20gJy4uL0V4cG9ydENTVic7XHJcbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuLi9NdWx0aVNlbGVjdCc7XHJcbmltcG9ydCBFU1JJTWFwIGZyb20gJy4vRVNSSU1hcCc7XHJcblxyXG50eXBlIFRvbGVyYW5jZVVuaXQgPSAnbWludXRlcycgfCAnaG91cnMnIHwgJ2RheXMnIHwgJ3dlZWtzJyB8ICdtb250aHMnIHwgJ3llYXJzJztcclxuY29uc3QgTGlnaHRuaW5nID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcblxyXG4gICAgY29uc3QgcXMgPSBxdWVyeVN0cmluZy5wYXJzZShsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcclxuICAgIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocXMuc3RhcnREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERUSEg6bW1cIikgOiBxcy5kYXRlKVxyXG4gICAgY29uc3QgW3RvbGVyYW5jZSwgc2V0VG9sZXJhbmNlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocXMudG9sZXJhbmNlID09IHVuZGVmaW5lZCA/IDEgOiBwYXJzZUludChxcy50b2xlcmFuY2UgYXMgc3RyaW5nKSlcclxuICAgIGNvbnN0IFt0b2xlcmFuY2VVbml0cywgc2V0VG9sZXJhbmNlVW5pdHNdID0gUmVhY3QudXNlU3RhdGU8VG9sZXJhbmNlVW5pdD4ocXMudG9sZXJhbmNlVW5pdHMgPT0gdW5kZWZpbmVkID8gJ21pbnV0ZXMnIDogcXMudG9sZXJhbmNlVW5pdHMgYXMgVG9sZXJhbmNlVW5pdClcclxuICAgIGNvbnN0IFtyYWRpdXMsIHNldFJhZGl1c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLnJhZGl1cyA9PSB1bmRlZmluZWQgPyAxIDogcGFyc2VJbnQocXMucmFkaXVzIGFzIHN0cmluZykpXHJcblxyXG4gICAgY29uc3QgW21ldGVycywgc2V0TWV0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuTWV0ZXJbXT4oW10pO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIE9wZW5YREEuRXZlbnRTZWFyY2g+KCdTdGFydFRpbWUnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbbGluZXMsIHNldExpbmVzXSA9IFJlYWN0LnVzZVN0YXRlPEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb248R2VvSlNPTi5Qb2x5Z29uPj4obnVsbClcclxuICAgIGNvbnN0IFtidWZmZXJzLCBzZXRCdWZmZXJzXSA9IFJlYWN0LnVzZVN0YXRlPEdlb0pTT04uR2VvbWV0cnlDb2xsZWN0aW9uPihudWxsKTtcclxuICAgIGNvbnN0IFtzdHJpa2VzLCBzZXRTdHJpa2VzXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4obnVsbCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBHZXRNZXRlcnMoKTtcclxuICAgICAgICBoYW5kbGUyLmRvbmUoKGRhdGE6IE9wZW5YREEuTWV0ZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYjY0c3RyaW5nID0gKHFzLm1ldGVycyA9PSB1bmRlZmluZWQgPyAnJyA6IHFzLm1ldGVycylcclxuICAgICAgICAgICAgbGV0IGlkcyA9IGF0b2IoYjY0c3RyaW5nIGFzIHN0cmluZykuc3BsaXQoJywnKS5tYXAoYSA9PiBwYXJzZUludChhKSlcclxuICAgICAgICAgICAgaWYgKHFzLm1ldGVycyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSB0cnVlKVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSBpZHMuaW5kZXhPZih2YWx1ZS5JRCkgPj0gMClcclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVycyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9pZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSBHZXRMaW5lcygpO1xyXG4gICAgICAgIGhhbmRsZS5kb25lKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaW5lcyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWV0ZXJzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobGluZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldEJ1ZmZlcnMoKTtcclxuXHJcbiAgICAgICAgaGFuZGxlMS5kb25lKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRCdWZmZXJzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbGluZXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChidWZmZXJzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBHZXRTdHJpa2VzKCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKGQgPT4ge1xyXG4gICAgICAgICAgICBzZXRTdHJpa2VzKGQpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIgIT0gbnVsbCAmJiBoYW5kbGUyLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMi5hYm9ydCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbYnVmZmVyc10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1ldGVycygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5NZXRlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvTWV0ZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldExpbmVzKCk6IEpRdWVyeS5qcVhIUjxHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uPEdlb0pTT04uUG9seWdvbj4+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0VTUkkvTGluZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyBNZXRlcnM6IG1ldGVycy5tYXAobWV0ZXIgPT4gbWV0ZXIuSUQpIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRCdWZmZXJzKCk6IEpRdWVyeS5qcVhIUjxHZW9KU09OLkdlb21ldHJ5Q29sbGVjdGlvbj4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRVNSSS9CdWZmZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgUmFkaXVzOiByYWRpdXMsIExpbmVKU09OOiBKU09OLnN0cmluZ2lmeSh7IGdlb21ldHJ5VHlwZTogXCJlc3JpR2VvbWV0cnlQb2x5bGluZVwiLCBnZW9tZXRyaWVzOiBsaW5lcy5mZWF0dXJlcy5tYXAoYSA9PiB7IHJldHVybiB7IHBhdGhzOiBbYS5nZW9tZXRyeS5jb29yZGluYXRlc10gfSB9KSB9KSB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0U3RyaWtlcygpOiBKUXVlcnkuanFYSFI8R2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbj4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRVNSSS9MaWdodG5pbmdgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgQnVmZmVySlNPTjogSlNPTi5zdHJpbmdpZnkoYnVmZmVycy5nZW9tZXRyaWVzWzBdKSwgVGltZUV4dGVudDogR2V0VGltZUV4dGVudCgpIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRUaW1lRXh0ZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGFkanVzdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgaWYgKG1vbWVudChkYXRlKS5fZC50b1RpbWVTdHJpbmcoKS5pbmRleE9mKCdFYXN0ZXJuJykpXHJcbiAgICAgICAgICAgIGFkanVzdGVkRGF0ZSA9IG1vbWVudChkYXRlKS5hZGQoLTEsICdob3VycycpLmZvcm1hdChcIllZWVktTU0tRERUSEg6bW1cIik7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG1vbWVudChhZGp1c3RlZERhdGUpLmFkZCgtdG9sZXJhbmNlLCB0b2xlcmFuY2VVbml0cyk7XHJcbiAgICAgICAgbGV0IGVuZFRpbWUgPSBtb21lbnQoYWRqdXN0ZWREYXRlKS5hZGQodG9sZXJhbmNlLCB0b2xlcmFuY2VVbml0cyk7XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtzdGFydFRpbWUudXRjKCkuZm9ybWF0KCd4Jyl9LCR7ZW5kVGltZS51dGMoKS5mb3JtYXQoJ3gnKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogNzUsIG1hcmdpbjogNSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IDc1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5NZXRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0IE9wdGlvbnM9e21ldGVycy5tYXAodCA9PiBPYmplY3QuY3JlYXRlKHsgVGV4dDogdC5OYW1lLCBWYWx1ZTogdC5JRCwgU2VsZWN0ZWQ6IHQuU2VsZWN0ZWQgfSkpfSBPbkNoYW5nZT17KGV2dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3TWV0ZXJzID0gXy5jbG9uZURlZXAobWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIChpbmRleCwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNZXRlcnMuZmluZChtZXRlciA9PiBtZXRlci5JRCA9PSBvcHRpb24uVmFsdWUpLlNlbGVjdGVkID0gIW9wdGlvbi5TZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJzKG5ld01ldGVycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PkRhdGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtkYXRlfSB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBvbkNoYW5nZT17ZSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5Ub2xlcmFuY2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0b2xlcmFuY2V9IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17ZSA9PiBzZXRUb2xlcmFuY2UocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RvbGVyYW5jZVVuaXRzfSBvbkNoYW5nZT17ZSA9PiBzZXRUb2xlcmFuY2VVbml0cyhlLnRhcmdldC52YWx1ZSBhcyBUb2xlcmFuY2VVbml0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J21pbnV0ZXMnPk1pbnV0ZShzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdob3Vycyc+SG91cihzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdkYXlzJz5EYXkocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nd2Vla3MnPldlZWsocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbW9udGhzJz5Nb250aChzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSd5ZWFycyc+WWVhcihzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcgfX0+UmFkaXVzIChtaSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtyYWRpdXN9IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17ZSA9PiBzZXRSYWRpdXMocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gODBweClcIiwgbWFyZ2luOiAnNXB4IDVweCA1cHggNXB4ICcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMHB4IDBweCAzcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+RXZlbnQgUHJldmlldzwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCkgLSAyMjYsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RVNSSU1hcCBEYXRlVGltZT17ZGF0ZX0gU3RyaWtlcz17c3RyaWtlc30gTGluZXM9e2xpbmVzfSBCdWZmZXJzPXtidWZmZXJzfSBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjI2fSBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmlrZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogNSwgcmlnaHQ6IDUgfX0gb25DbGljaz17KCkgPT4gRXhwb3J0VG9Dc3YoW10sICdFdmVudFNlYXJjaC5jc3YnKX0+RXhwb3J0IENTVjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjc1LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPHsgQU1QTElUVURFOiBudW1iZXIsIERJU1BMQVlUSU1FOiBzdHJpbmcsIExBVElUVURFOiBudW1iZXIsIExPTkdJVFVERX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0RJU1BMQVlUSU1FJywgbGFiZWw6ICdUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdBTVBMSVRVREUnLCBsYWJlbDogJ0FtcGxpdHVkZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzI1JScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0xBVElUVURFJywgbGFiZWw6ICdMYXQnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdMT05HSVRVREUnLCBsYWJlbDogJ0xvbicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTcsIHBhZGRpbmc6IDAgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDAsIHBhZGRpbmc6IDAgfSB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17KHN0cmlrZXMgIT0gbnVsbCA/IHN0cmlrZXMuZmVhdHVyZXMubWFwKHMgPT4gcy5hdHRyaWJ1dGVzKSA6IFtdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e1wiRElTUExBWVRJTUVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCAtIDMwMCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eygpID0+IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWdodG5pbmc7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE11bHRpU2VsZWN0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8xNy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE11bHRpU2VsZWN0ID0gKHByb3BzOiB7IE9wdGlvbnM6IHsgVmFsdWU6IG51bWJlciwgVGV4dDogc3RyaW5nLCBTZWxlY3RlZDogYm9vbGVhbiB9W10sIE9uQ2hhbmdlOiAoZXZ0OiBhbnksIE9wdGlvbnM6IHsgVmFsdWU6IG51bWJlciwgVGV4dDogc3RyaW5nLCBTZWxlY3RlZDogYm9vbGVhbiB9W10pID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgbXVsdGlTZWxlY3QgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gSGFuZGxlU2hvdyhldnQpIHtcclxuICAgICAgICBpZiAoIW11bHRpU2VsZWN0LmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpXHJcbiAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5PcHRpb25zXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgSGFuZGxlU2hvdywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17bXVsdGlTZWxlY3R9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2NlZDRkYScsIHBhZGRpbmc6ICcuMzc1cmVtIC43NXJlbScsIGZvbnRTaXplOiAnMXJlbScsIGJvcmRlclJhZGl1czogJy4yNXJlbScgfX0gY2xhc3NOYW1lPVwiYnRuIGZvcm0tY29udHJvbCBkcm9wZG93bi10b2dnbGVcIiBvbkNsaWNrPXtIYW5kbGVTaG93fT57cHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5sZW5ndGggIT0gcHJvcHMuT3B0aW9ucy5sZW5ndGggPyBwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA6ICdBbGwgJ30gU2VsZWN0ZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAqIC43NSwgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmc6ICcxMCA1JywgZGlzcGxheTogc2hvdyA/ICdibG9jaycgOiAnbm9uZScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgYm94U2hhZG93OiAnMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMiknLCB6SW5kZXg6IDQwMSB9fT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJyBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk9uQ2hhbmdlKGV2dCwgcHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkID09IChwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aH0gb25DaGFuZ2U9eygpID0+IG51bGx9IC8+PC90ZD48dGQ+QWxsPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuT3B0aW9ucy5tYXAoKGYsIGkpID0+IDx0ciBrZXk9e2l9IG9uQ2xpY2s9eyhldnQpID0+IHByb3BzLk9uQ2hhbmdlKGV2dCwgW2ZdKX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtmLlNlbGVjdGVkfSBvbkNoYW5nZT17KCkgPT4gbnVsbH0gLz48L3RkPjx0ZD57Zi5UZXh0fTwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpU2VsZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=