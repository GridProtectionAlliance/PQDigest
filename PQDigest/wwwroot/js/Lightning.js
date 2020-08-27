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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: multiSelect, style: { position: 'relative', display: 'inline-block', width: 'inherit' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { border: '1px solid #ced4da', padding: '.375rem .75rem', fontSize: '1rem', borderRadius: '.25rem' }, className: "btn form-control dropdown-toggle", onClick: HandleShow },
            props.Options.filter(function (x) { return x.Selected; }).length != props.Options.length ? props.Options.filter(function (x) { return x.Selected; }).length : 'All ',
            " Selected"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { maxHeight: window.innerHeight * .75, overflowY: 'auto', padding: '10 5', display: show ? 'block' : 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 401, minWidth: '100%' } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXhwb3J0Q1NWLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTGlnaHRuaW5nL0VTUklNYXAudHN4Iiwid2VicGFjazovLy8uL3RzeC9MaWdodG5pbmcvTGlnaHRuaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTXVsdGlTZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRWpHLFNBQVMsV0FBVyxDQUFJLElBQVMsRUFBRSxRQUFnQjtJQUN0RCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE9BQU87SUFFNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFVBQVUsR0FBRyxVQUFVLEdBQUc7UUFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFELElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksRUFBRTtnQkFDeEIsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QztZQUFBLENBQUM7WUFDRixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDL0IsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ0wsUUFBUSxJQUFJLEdBQUcsQ0FBQztZQUNwQixRQUFRLElBQUksTUFBTSxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUVGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUM7SUFDcEUsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsU0FBUztRQUNqQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0gsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFLEVBQUUsb0JBQW9CO1lBQ25ELGlEQUFpRDtZQUNqRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztLQUNKO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHlCQUF5QjtBQUN6QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RTtBQUNJO0FBQ3NEO0FBRzlEO0FBRUU7QUFHeEIsSUFBTSxPQUFPLEdBQXVMLFVBQUMsS0FBSztJQUNoTSxnRkFBa0QsRUFBakQsYUFBSyxFQUFFLGdCQUEwQyxDQUFDO0lBQ25ELG9GQUF3RSxFQUF2RSxlQUFPLEVBQUUsa0JBQThELENBQUM7SUFHL0UsU0FBVSxJQUFJLENBQUMsUUFBUTtRQUNuQixJQUFJLE1BQU0sR0FBRztZQUNULE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQztRQUNGLG9FQUFvRTtRQUNwRSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQztTQUN4SjthQUFNO1lBQ0gsbVRBQW1UO1lBQ25ULElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLGdIQUFnSDtnQkFDaEgsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDbEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsRUFBRSxFQUFFLENBQUM7aUJBQ1I7Z0JBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqSjtpQkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QiwrRUFBK0U7Z0JBQy9FLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFFN0k7aUJBQU07Z0JBQ0gsb01BQW9NO2dCQUNwTSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDOUo7U0FFSjtRQUVELE9BQU8sTUFBTTtJQUNqQixDQUFDO0lBRUQsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNULG9HQUFvRztRQUNwRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNsQjtZQUNELEVBQUUsRUFBRSxDQUFDO1NBQ1I7UUFDRCxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ1IsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNWLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFckQsQ0FBQyxFQUFFLENBQUM7U0FDUDtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxNQUFNLEdBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSTtRQUFFLE1BQU0sR0FBRyw4Q0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxPQUFPO1lBQzdCLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3BILENBQUMsQ0FBQztLQUNMO0lBR0QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBSSxPQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVHLElBQUksRUFBRSxHQUFHLDhDQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU1QyxPQUFPLENBQ0gsb0VBQUssU0FBUyxFQUFDLE1BQU07UUFDakIsb0VBQUssU0FBUyxFQUFDLGFBQWE7O1lBQ3hCLG9FQUFLLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7Z0JBQzVFLHNFQUFPLFNBQVMsRUFBQyxrQkFBa0I7b0JBQy9CLHNFQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsY0FBTSxlQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsR0FBRztpQ0FDOUcsQ0FDSjtZQUNOLHVFQUFRLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxFQUFHLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxJQUFLLGlCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUE4QixDQUFDLEVBQXJELENBQXFEO2dCQUNuTCx1RUFBUSxLQUFLLEVBQUMsU0FBUyxjQUFpQjtnQkFDeEMsdUVBQVEsS0FBSyxFQUFDLGFBQWEsa0JBQXFCO2dCQUNoRCx1RUFBUSxLQUFLLEVBQUMsb0JBQW9CLHlCQUE0QjtnQkFDOUQsdUVBQVEsS0FBSyxFQUFDLFFBQVEsYUFBZ0I7Z0JBQ3RDLHVFQUFRLEtBQUssRUFBQyxNQUFNLFdBQWM7Z0JBQ2xDLHVFQUFRLEtBQUssRUFBQyxVQUFVLGVBQWtCO2dCQUMxQyx1RUFBUSxLQUFLLEVBQUMsU0FBUyxjQUFpQjtnQkFDeEMsdUVBQVEsS0FBSyxFQUFDLGdCQUFnQixxQkFBd0I7Z0JBQ3RELHVFQUFRLEtBQUssRUFBQyxnQkFBZ0IscUJBQXdCO2dCQUN0RCx1RUFBUSxLQUFLLEVBQUMsY0FBYyxtQkFBc0I7Z0JBQ2xELHVFQUFRLEtBQUssRUFBQyxTQUFTLGNBQWlCO2dCQUN4Qyx1RUFBUSxLQUFLLEVBQUMsU0FBUyxjQUFpQjtnQkFDeEMsdUVBQVEsS0FBSyxFQUFDLFVBQVUsZUFBa0IsQ0FFckMsQ0FDUDtRQUNOLG9FQUFLLFNBQVMsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUUzQywyREFBQyxpREFBRyxJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDOUUsMkRBQUMsdURBQVMsSUFDTixHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUNmLFdBQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFDbkMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUNuQztnQkFFTCxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNMLDJEQUFDLDBEQUFZLElBQUMsR0FBRyxFQUFFLHlFQUF1RSxVQUFZLEVBQ2xHLE1BQU0sRUFBQyxpQkFBaUIsRUFDeEIsTUFBTSxFQUFDLFdBQVcsRUFDbEIsV0FBVyxFQUFFLElBQUksRUFDakIsT0FBTyxFQUFFLEdBQUcsRUFDWixXQUFXLEVBQUMscUNBQWdDLEdBRTFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFakIsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNuQiwyREFBQyxxREFBTyxJQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFJLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDO2dCQUNSLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztvQkFDckIsMkRBQUMscURBQU8sSUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLE9BQU87NEJBQ3hDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7d0JBQzNFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1YsSUFBSSxDQUFDO2dCQUNKLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLLElBQUssa0VBQUMsMERBQVksSUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsR0FBRyxHQUFHLEVBQXZKLENBQXVKLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBRWpPLENBQ0osQ0FDSixDQUNMLENBQUM7QUFDVixDQUFDO0FBRWUsc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFO0FBRUg7QUFDdUI7QUFDUjtBQUNRO0FBQ0g7QUFDRjtBQUNUO0FBR2hDLElBQU0sU0FBUyxHQUFHLFVBQUMsS0FBUztJQUN4QixJQUFNLE9BQU8sR0FBRyxvRUFBb0IsRUFBRSxDQUFDO0lBRXZDLElBQU0sRUFBRSxHQUFHLGtEQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsb0pBQW1ILEVBQWxILFlBQUksRUFBRSxlQUE0RztJQUNuSCxpSUFBb0gsRUFBbkgsaUJBQVMsRUFBRSxvQkFBd0c7SUFDcEgseUlBQW9KLEVBQW5KLHNCQUFjLEVBQUUseUJBQW1JO0lBQ3BKLDJIQUF3RyxFQUF2RyxjQUFNLEVBQUUsaUJBQStGO0lBRXhHLDZFQUF5RCxFQUF4RCxjQUFNLEVBQUUsaUJBQWdELENBQUM7SUFDMUQsc0ZBQWtGLEVBQWpGLGlCQUFTLEVBQUUsb0JBQXNFLENBQUM7SUFDbkYsK0VBQXlELEVBQXhELGlCQUFTLEVBQUUsb0JBQTZDLENBQUM7SUFFMUQsK0VBQW9GLEVBQW5GLGFBQUssRUFBRSxnQkFBNEU7SUFDcEYsK0VBQXdFLEVBQXZFLGVBQU8sRUFBRSxrQkFBOEQsQ0FBQztJQUN6RSwrRUFBaUQsRUFBaEQsZUFBTyxFQUFFLGtCQUF1QyxDQUFDO0lBRXhELDRDQUFLLENBQUMsU0FBUyxDQUFDO1FBRVosSUFBSSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQXFCO1lBQy9CLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN6RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLGVBQVEsQ0FBQyxDQUFDLENBQUMsRUFBWCxDQUFXLENBQUM7WUFDcEUsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLFNBQVM7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFyQixDQUFxQixDQUFDOztnQkFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQTNDLENBQTJDLENBQUM7WUFFdEUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNILGtEQUFrRDtZQUNsRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksU0FBUztnQkFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEQsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLDRDQUFLLENBQUMsU0FBUyxDQUFDO1FBQ1osSUFBSSxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFJO1lBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBR0gsT0FBTztZQUNILElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUViLDRDQUFLLENBQUMsU0FBUyxDQUFDO1FBQ1osSUFBSSxLQUFLLElBQUksSUFBSTtZQUFFLE9BQU87UUFFMUIsSUFBSSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFFM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFJO1lBQ2IsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNILElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVaLDRDQUFLLENBQUMsU0FBUyxDQUFDO1FBQ1osSUFBSSxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU87UUFFNUIsSUFBSSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFDO1lBQ1YsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDSCxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxTQUFTO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV2RSxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUVkLFNBQVMsU0FBUztRQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNWLElBQUksRUFBRSxLQUFLO1lBQ1gsR0FBRyxFQUFLLFFBQVEsc0JBQW1CO1lBQ25DLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTLFFBQVE7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLEdBQUcsRUFBSyxRQUFRLGtCQUFlO1lBQy9CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsUUFBUSxFQUFFLE1BQU07WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLEVBQUUsRUFBUixDQUFRLENBQUMsRUFBRSxDQUFDO1lBQy9ELEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsU0FBUyxVQUFVO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUssUUFBUSxvQkFBaUI7WUFDakMsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBTSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pNLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsU0FBUyxVQUFVO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUssUUFBUSx1QkFBb0I7WUFDcEMsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQztZQUN4RyxLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFNBQVMsYUFBYTtRQUNsQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDakQsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVsRSxPQUFVLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUN6RSxDQUFDO0lBRUQsT0FBTyxDQUNILG9FQUFLLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtRQUN6QyxvRUFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUNqRCxvRUFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7Z0JBQ3RDLG9FQUFLLFNBQVMsRUFBQyxNQUFNO29CQUNqQixvRUFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7d0JBQzVDLG9FQUFLLFNBQVMsRUFBQyxLQUFLOzRCQUNoQixvRUFBSyxTQUFTLEVBQUMsS0FBSztnQ0FDaEIsb0VBQUssU0FBUyxFQUFDLEtBQUs7b0NBQ2hCLG9FQUFLLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWM7b0NBQ3hFLG9FQUFLLFNBQVMsRUFBQyxLQUFLO3dDQUNoQiwyREFBQyxvREFBVyxJQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxhQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFsRSxDQUFrRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87Z0RBQzlILElBQUksU0FBUyxHQUFHLDZDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dEQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO29EQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLGVBQUssSUFBSSxZQUFLLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTtnREFDakYsQ0FBQyxDQUFDLENBQUM7Z0RBQ0gsU0FBUyxDQUFDLFNBQVMsQ0FBQzs0Q0FDeEIsQ0FBQyxHQUFJLENBQ0gsQ0FDSixDQUNKOzRCQUNOLG9FQUFLLFNBQVMsRUFBQyxLQUFLO2dDQUNoQixvRUFBSyxTQUFTLEVBQUMsS0FBSztvQ0FDaEIsb0VBQUssU0FBUyxFQUFDLGtCQUFrQixFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBWTtvQ0FDdEUsb0VBQUssU0FBUyxFQUFDLEtBQUs7d0NBQ2hCLHNFQUFPLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFFLFdBQUMsSUFBSSxjQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsR0FBSSxDQUMzRyxDQUNKLENBQ0o7NEJBQ04sb0VBQUssU0FBUyxFQUFDLEtBQUs7Z0NBQ2hCLG9FQUFLLFNBQVMsRUFBQyxLQUFLO29DQUNoQixvRUFBSyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxnQkFBaUI7b0NBQzNFLG9FQUFLLFNBQVMsRUFBQyxLQUFLO3dDQUNoQixzRUFBTyxTQUFTLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUUsV0FBQyxJQUFJLG1CQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsR0FBSSxDQUN6SDtvQ0FDTixvRUFBSyxTQUFTLEVBQUMsS0FBSzt3Q0FDaEIsdUVBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFDLElBQUksd0JBQWlCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFzQixDQUFDLEVBQWxELENBQWtEOzRDQUNySCx1RUFBUSxLQUFLLEVBQUMsU0FBUyxnQkFBbUI7NENBQzFDLHVFQUFRLEtBQUssRUFBQyxPQUFPLGNBQWlCOzRDQUN0Qyx1RUFBUSxLQUFLLEVBQUMsTUFBTSxhQUFnQjs0Q0FDcEMsdUVBQVEsS0FBSyxFQUFDLE9BQU8sY0FBaUI7NENBQ3RDLHVFQUFRLEtBQUssRUFBQyxRQUFRLGVBQWtCOzRDQUN4Qyx1RUFBUSxLQUFLLEVBQUMsT0FBTyxjQUFpQixDQUNqQyxDQUNQLENBRUosQ0FDSjs0QkFFTixvRUFBSyxTQUFTLEVBQUMsS0FBSztnQ0FDaEIsb0VBQUssU0FBUyxFQUFDLEtBQUs7b0NBQ2hCLG9FQUFLLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGtCQUFtQjtvQ0FDN0Usb0VBQUssU0FBUyxFQUFDLEtBQUs7d0NBQ2hCLHNFQUFPLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBRSxXQUFDLElBQUksZ0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFyQyxDQUFxQyxHQUFJLENBQ25ILENBQ0osQ0FDSixDQUVKLENBQ0osQ0FDSixDQUNKLENBQ0o7UUFDTixvRUFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7WUFDbkYsb0VBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO2dCQUNwRixvRUFBSyxTQUFTLEVBQUMsTUFBTTtvQkFFakIsb0VBQUssU0FBUyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7d0JBQ2hGLDJEQUFDLGdEQUFPLElBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBSSxDQUM3SSxDQUNKLENBQ0o7WUFFTixvRUFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BGLG9FQUFLLFNBQVMsRUFBQyxNQUFNO29CQUNqQixvRUFBSyxTQUFTLEVBQUMsYUFBYTs7d0JBRXhCLHVFQUFRLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFNLHFFQUFXLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDLEVBQWxDLENBQWtDLGlCQUFxQixDQUMzSjtvQkFDTixvRUFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTt3QkFDaEYsMkRBQUMsZ0VBQUssSUFDRixJQUFJLEVBQUU7Z0NBQ0YsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtnQ0FDbEcsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDbkcsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDNUYsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDN0YsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NkJBRXZHLEVBQ0QsVUFBVSxFQUFDLG1CQUFtQixFQUM5QixJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLFVBQVUsRUFBWixDQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3RFLFNBQVMsRUFBRSxhQUFhLEVBQ3hCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsTUFBTSxFQUFFLElBQUksRUFDWixPQUFPLEVBQUUsSUFBSSxFQUNiLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUN0RyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUNsRyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLFFBQVEsRUFBRSxjQUFNLFlBQUssRUFBTCxDQUFLLEdBQ25CLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNUO0FBQ0wsQ0FBQztBQUVjLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwUnpCO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUU7QUFFMUIsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFxSztJQUNoTCxnRkFBZ0QsRUFBL0MsWUFBSSxFQUFFLGVBQXlDLENBQUM7SUFDdkQsSUFBTSxXQUFXLEdBQUcsNENBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkMsU0FBUyxVQUFVLENBQUMsR0FBRztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBRWYsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRCLENBQUM7SUFFRCw0Q0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNaLE9BQU87UUFDUCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFcEIsNENBQUssQ0FBQyxTQUFTLENBQUM7UUFDWixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxPQUFPO1lBQ0gsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUdQLE9BQU8sQ0FDSCxvRUFBSyxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFFO1FBQzNGLHVFQUFRLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFDLGtDQUFrQyxFQUFDLE9BQU8sRUFBRSxVQUFVO1lBQ2hMLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsUUFBUSxFQUFWLENBQVUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO3dCQUN4SDtRQUNULG9FQUFLLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7WUFDbFAsc0VBQU8sU0FBUyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUN6QztvQkFDSSxtRUFBSSxPQUFPLEVBQUUsVUFBQyxHQUFHOzRCQUNiLEdBQUcsQ0FBQyxjQUFjLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQXBGLENBQW9GLENBQUMsQ0FBQyxDQUFDO3dCQUN6SSxDQUFDO3dCQUFFOzRCQUFJLHNFQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsUUFBUSxFQUFWLENBQVUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLENBQUs7d0JBQUEsNkVBQVksQ0FBSztvQkFDMUosS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLDBFQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQUMsR0FBRyxJQUFLLFlBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBeEIsQ0FBd0I7d0JBQUU7NEJBQUksc0VBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLENBQUs7d0JBQUEsdUVBQUssQ0FBQyxDQUFDLElBQUksQ0FBTSxDQUFLLEVBQTNKLENBQTJKLENBQUMsQ0FDckwsQ0FFSixDQUNOLENBQ0osQ0FDVCxDQUFDO0FBQ04sQ0FBQztBQUNjLDBFQUFXLEVBQUMiLCJmaWxlIjoiTGlnaHRuaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV4cG9ydENTVi50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4cG9ydFRvQ3N2PFQ+KGRhdGE6IFRbXSwgZmlsZW5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuICAgIHZhciByb3dzID0gW09iamVjdC5rZXlzKGRhdGFbMF0pXTtcclxuICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgcm93cy5wdXNoKE9iamVjdC5rZXlzKHZhbHVlKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XSB9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcHJvY2Vzc1JvdyA9IGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICB2YXIgZmluYWxWYWwgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgaW5uZXJWYWx1ZSA9IHJvd1tqXSA9PT0gbnVsbCA/ICcnIDogcm93W2pdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChyb3dbal0gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpbm5lclZhbHVlID0gcm93W2pdLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbm5lclZhbHVlLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc2VhcmNoKC8oXCJ8LHxcXG4pL2cpID49IDApXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnXCInICsgcmVzdWx0ICsgJ1wiJztcclxuICAgICAgICAgICAgaWYgKGogPiAwKVxyXG4gICAgICAgICAgICAgICAgZmluYWxWYWwgKz0gJywnO1xyXG4gICAgICAgICAgICBmaW5hbFZhbCArPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaW5hbFZhbCArICdcXG4nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY3N2RmlsZSA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY3N2RmlsZSArPSBwcm9jZXNzUm93KHJvd3NbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2NzdkZpbGVdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XHJcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUgMTArXHJcbiAgICAgICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGlmIChsaW5rLmRvd25sb2FkICE9PSB1bmRlZmluZWQpIHsgLy8gZmVhdHVyZSBkZXRlY3Rpb25cclxuICAgICAgICAgICAgLy8gQnJvd3NlcnMgdGhhdCBzdXBwb3J0IEhUTUw1IGRvd25sb2FkIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZW5hbWUpO1xyXG4gICAgICAgICAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVFZBRVNSSU1hcC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMjcvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgeyBNYXAsIENpcmNsZU1hcmtlciwgVGlsZUxheWVyLCBXTVNUaWxlTGF5ZXIsIEdlb0pTT04gfSBmcm9tICdyZWFjdC1sZWFmbGV0JztcclxuaW1wb3J0IHsgQmFzZW1hcExheWVyIH0gZnJvbSAnZXNyaS1sZWFmbGV0JztcclxuaW1wb3J0IHByb2o0IGZyb20gJ3Byb2o0JztcclxuaW1wb3J0ICdwcm9qNGxlYWZsZXQnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcblxyXG5cclxuY29uc3QgRVNSSU1hcDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBEYXRlVGltZTogc3RyaW5nLCBTdHJpa2VzOiBhbnksIExpbmVzOiBHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uPEdlb0pTT04uUG9seWdvbj4sIEJ1ZmZlcnM6IEdlb0pTT04uR2VvbWV0cnlDb2xsZWN0aW9uLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3JhZGFyLCBzZXRSYWRhcl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbYmFzZU1hcCwgc2V0QmFzZU1hcF0gPSBSZWFjdC51c2VTdGF0ZTxsZWFmbGV0LmVzcmkuQmFzZW1hcHM+KCdTdHJlZXRzJyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uICBQb2x5KGdlb21ldHJ5KTogYW55IHtcclxuICAgICAgICB2YXIgb3V0UHV0ID0ge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxyXG4gICAgICAgICAgICBcImZlYXR1cmVzXCI6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL2ZpcnN0IHdlIGNoZWNrIGZvciBzb21lIGVhc3kgY2FzZXMsIGxpa2UgaWYgdGhlaXIgaXMgb25seSBvbmUgcmluZ1xyXG4gICAgICAgIGlmIChnZW9tZXRyeS5yaW5ncy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgb3V0UHV0LmZlYXR1cmVzLnB1c2goeyB0eXBlOiAnRmVhdHVyZScsIHByb3BlcnRpZXM6IHsgY29sb3I6ICdibGFjaycsIG9wYWNpdHk6IDEgfSwgZ2VvbWV0cnk6IHsgXCJ0eXBlXCI6IFwiUG9seWdvblwiLCBcImNvb3JkaW5hdGVzXCI6IGdlb21ldHJ5LnJpbmdzIH19KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKmlmIGl0IGlzbid0IHRoYXQgZWFzeSB0aGVuIHdlIGhhdmUgdG8gc3RhcnQgY2hlY2tpbmcgcmluZyBkaXJlY3Rpb24sIGJhc2ljYWxseSB0aGUgcmluZyBnb2VzIGNsb2Nrd2lzZSBpdHMgcGFydCBvZiB0aGUgcG9seWdvbiwgaWYgaXQgZ29lcyBjb3VudGVyY2xvY2t3aXNlIGl0IGlzIGEgaG9sZSBpbiB0aGUgcG9seWdvbiwgYnV0IGdlb2pzb24gZG9lcyBpdCBieSBoYXZlaW5nIGFuIGFycmF5IHdpdGggdGhlIGZpcnN0IGVsZW1lbnQgYmUgdGhlIHBvbHlnb25zIGFuZCB0aGUgbmV4dCBlbGVtZW50cyBiZWluZyBob2xlcyBpbiBpdCovXHJcbiAgICAgICAgICAgIHZhciBjY2MgPSBEcChnZW9tZXRyeS5yaW5ncyk7XHJcbiAgICAgICAgICAgIHZhciBkID0gY2NjWzBdO1xyXG4gICAgICAgICAgICB2YXIgZGQgPSBjY2NbMV07XHJcbiAgICAgICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgICAgIGlmIChkZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8qaWYgdGhlaXIgYXJlIG5vIGhvbGVzIHdlIGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhpcywgYnV0IGRvIG5lZWQgdG8gc3R1Y2sgZWFjaCByaW5nIGluc2lkZSBpdHMgb3duIGFycmF5Ki9cclxuICAgICAgICAgICAgICAgIHZhciBsMiA9IGQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGkzID0gMDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChsMiA+IGkzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKFtkW2kzXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGkzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRQdXQuZmVhdHVyZXMucHVzaCh7IHR5cGU6ICdGZWF0dXJlJywgcHJvcGVydGllczogeyBjb2xvcjogJ2JsYWNrJywgb3BhY2l0eTogMSB9LCBnZW9tZXRyeTogeyBcInR5cGVcIjogXCJNdWx0aVBvbHlnb25cIiwgXCJjb29yZGluYXRlc1wiOiByIH0gfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8qaWYgdGhlaXIgaXMgb25seSBvbmUgY2xvY2t3aXNlIHJpbmcgdGhlbiB3ZSBrbm93IGFsbCBob2xlcyBhcmUgaW4gdGhhdCBwb2x5Ki9cclxuICAgICAgICAgICAgICAgIGRkLnVuc2hpZnQoZFswXSk7XHJcbiAgICAgICAgICAgICAgICBvdXRQdXQuZmVhdHVyZXMucHVzaCh7IHR5cGU6ICdGZWF0dXJlJywgcHJvcGVydGllczogeyBjb2xvcjogJ2JsYWNrJywgb3BhY2l0eTogMSB9LCBnZW9tZXRyeTogeyBcInR5cGVcIjogXCJQb2x5Z29uXCIsIFwiY29vcmRpbmF0ZXNcIjogZGQgfSB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvKmlmIHRoZWlyIGFyZSBtdWx0aXBsZSByaW5ncyBhbmQgaG9sZXMgd2UgaGF2ZSBubyB3YXkgb2Yga25vd2luZyB3aGljaCBiZWxvbmcgdG8gd2hpY2ggd2l0aG91dCBsb29raW5nIGF0IGl0IHNwZWNpYWxseSwgc28ganVzdCBkdW1wIHRoZSBjb29yZGluYXRlcyBhbmQgYWRkICBhIGhvbGUgZmllbGQsIHRoaXMgbWF5IGNhdXNlIGVycm9ycyovXHJcbiAgICAgICAgICAgICAgICBvdXRQdXQuZmVhdHVyZXMucHVzaCh7IHR5cGU6ICdGZWF0dXJlJywgcHJvcGVydGllczogeyBjb2xvcjogJ2JsYWNrJywgb3BhY2l0eTogMSB9LCBnZW9tZXRyeTogeyBcInR5cGVcIjogXCJNdWx0aVBvbHlnb25cIiwgXCJjb29yZGluYXRlc1wiOiBkLCBcImhvbGVzXCI6IGRkIH0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0UHV0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRHAoYSkge1xyXG4gICAgICAgIC8vcmV0dXJucyBhbiBhcnJheSBvZiAyIGFycmF5cywgdGhlIGZpcnN0IGJlaW5nIGFsbCB0aGUgY2xvY2t3aXNlIG9uZXMsIHRoZSBzZWNvbmQgY291bnRlciBjbG9ja3dpc2VcclxuICAgICAgICB2YXIgZCA9IFtdO1xyXG4gICAgICAgIHZhciBkZCA9IFtdO1xyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGlpID0gMDtcclxuICAgICAgICB3aGlsZSAobCA+IGlpKSB7XHJcbiAgICAgICAgICAgIGlmIChDKGFbaWldKSkge1xyXG4gICAgICAgICAgICAgICAgZC5wdXNoKGFbaWldKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRkLnB1c2goYVtpaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbZCwgZGRdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEMoYSkge1xyXG4gICAgICAgIC8vcmV0dXJuIHRydWUgaWYgY2xvY2t3aXNlXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBvID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGwgPiBpKSB7XHJcbiAgICAgICAgICAgIG8gKz0gKGFbaV1bMF0gKiBhW2kgKyAxXVsxXSAtIGFbaSArIDFdWzBdICogYVtpXVsxXSk7XHJcblxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJvdW5kczogYW55ID0gW1szNCwgLTg3XSwgWzM2LCAtODVdXTtcclxuICAgIGlmKHByb3BzLkxpbmVzICE9IG51bGwpIGJvdW5kcyA9IEwuZ2VvSlNPTihwcm9wcy5MaW5lcykuZ2V0Qm91bmRzKCk7XHJcbiAgICBsZXQgYnVmZmVycyA9IG51bGw7XHJcbiAgICBpZiAocHJvcHMuQnVmZmVycyAhPSBudWxsKSB7XHJcbiAgICAgICAgYnVmZmVycyA9IFBvbHkocHJvcHMuQnVmZmVycy5nZW9tZXRyaWVzWzBdKTtcclxuICAgICAgICBidWZmZXJzLnN0eWxlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3Ryb2tlOiBmZWF0dXJlLnByb3BlcnRpZXMuY29sb3IsIG9wYWNpdHk6IGZlYXR1cmUucHJvcGVydGllcy5vcGFjaXR5LCBzdHJva2VXaWR0aDogMSwgZmlsbDogJ2JsYWNrJyB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxldCB0aW1lID0gbW9tZW50KHByb3BzLkRhdGVUaW1lKTtcclxuICAgIGxldCBtaW51dGVzID0gKHRpbWUubWludXRlcygpIC0gdGltZS5taW51dGVzKCkgJSA1KS50b1N0cmluZygpO1xyXG4gICAgbGV0IHRpbWVzdHJpbmcgPSB0aW1lLnV0YygpLmZvcm1hdCgnWVlZWS1NTS1ERFRISCcpICsgJzonICsgKG1pbnV0ZXMubGVuZ3RoID09IDEgPyBgMCR7bWludXRlc31gIDogbWludXRlcyk7XHJcbiAgICBsZXQgYm0gPSBsZWFmbGV0LmVzcmkuYmFzZW1hcExheWVyKGJhc2VNYXApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5FU1JJIE1hcFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAyNTAsIHRvcDogMTAgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdmFsdWU9XCJcIiBjaGVja2VkPXtyYWRhcn0gb25DaGFuZ2U9eygpID0+IHNldFJhZGFyKCFyYWRhcil9Lz5TaG93IFJhZGFyXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3t3aWR0aDogMjAwLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDUsIHRvcDogNX19ICB2YWx1ZT17YmFzZU1hcH0gb25DaGFuZ2U9eyhldnQpID0+IHNldEJhc2VNYXAoZXZ0LnRhcmdldC52YWx1ZSBhcyBsZWFmbGV0LmVzcmkuQmFzZW1hcHMpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdTdHJlZXRzJz5TdHJlZXRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVG9wb2dyYXBoaWMnPlRvcG9ncmFwaGljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTmF0aW9uYWxHZW9ncmFwaGljJz5OYXRpb25hbEdlb2dyYXBoaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdPY2VhbnMnPk9jZWFuczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0dyYXknPkdyYXk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdEYXJrR3JheSc+RGFya0dyYXk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdJbWFnZXJ5Jz5JbWFnZXJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nSW1hZ2VyeUNsYXJpdHknPkltYWdlcnlDbGFyaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nSW1hZ2VyeUZpcmVmbHknPkltYWdlcnlGaXJlZmx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nU2hhZGVkUmVsaWVmJz5TaGFkZWRSZWxpZWY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdUZXJyYWluJz5UZXJyYWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVVNBVG9wbyc+VVNBVG9wbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1BoeXNpY2FsJz5QaHlzaWNhbDwvb3B0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1hcCBib3VuZHM9e2JvdW5kc30gc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCwgd2lkdGg6IHByb3BzLldpZHRoIC0gMTIgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaWxlTGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtibVsnX3VybCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj17Ym0ub3B0aW9ucy5hdHRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViZG9tYWlucz17Ym0ub3B0aW9ucy5zdWJkb21haW5zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgeyhyYWRhciA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxXTVNUaWxlTGF5ZXIgdXJsPXtgaHR0cHM6Ly9tZXNvbmV0LmFncm9uLmlhc3RhdGUuZWR1L2NnaS1iaW4vd21zL25leHJhZC9uMHItdC5jZ2k/dGltZT0ke3RpbWVzdHJpbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPSduZXhyYWQtbjByLXdtc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0naW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj1cIldlYXRoZXIgZGF0YSDCqSAyMDE2IElFTSBOZXhyYWRcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHsocHJvcHMuTGluZXMgIT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEdlb0pTT04gZGF0YT17cHJvcHMuTGluZXN9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICBudWxsKX1cclxuICAgICAgICAgICAgICAgIHsocHJvcHMuQnVmZmVycyAhPSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICA8R2VvSlNPTiBkYXRhPXtidWZmZXJzfSBzdHlsZT17ZnVuY3Rpb24gKGZlYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHN0cm9rZTogdHJ1ZSwgY29sb3I6ICdibGFjaycsIHdlaWdodDogMSwgZmlsbENvbG9yOiAnYmxhY2snIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvcHMuU3RyaWtlcyAhPSBudWxsID8gcHJvcHMuU3RyaWtlcy5mZWF0dXJlcy5tYXAoKHMsIGluZGV4KSA9PiA8Q2lyY2xlTWFya2VyIGtleT17aW5kZXh9IGNlbnRlcj17W3MuYXR0cmlidXRlcy5MQVRJVFVERSwgcy5hdHRyaWJ1dGVzLkxPTkdJVFVERV19IHJhZGl1cz1cIjVcIiBjb2xvcj0ncmVkJyB3ZWlnaHQ9XCIxXCIgZmlsbENvbG9yPVwicmVkXCIgZmlsbE9wYWNpdHk9XCIxXCIgLz4pIDogbnVsbCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9NYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbiBleHBvcnQgZGVmYXVsdCBFU1JJTWFwOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBMaWdodG5pbmcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQUURpZ2VzdCwgT3BlblhEQSB9IGZyb20gJy4uL2dsb2JhbCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCJcclxuaW1wb3J0IHsgRXhwb3J0VG9Dc3YgfSBmcm9tICcuLi9FeHBvcnRDU1YnO1xyXG5pbXBvcnQgTXVsdGlTZWxlY3QgZnJvbSAnLi4vTXVsdGlTZWxlY3QnO1xyXG5pbXBvcnQgRVNSSU1hcCBmcm9tICcuL0VTUklNYXAnO1xyXG5cclxudHlwZSBUb2xlcmFuY2VVbml0ID0gJ21pbnV0ZXMnIHwgJ2hvdXJzJyB8ICdkYXlzJyB8ICd3ZWVrcycgfCAnbW9udGhzJyB8ICd5ZWFycyc7XHJcbmNvbnN0IExpZ2h0bmluZyA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHFzID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLnN0YXJ0RGF0ZSA9PSB1bmRlZmluZWQgPyBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tXCIpIDogcXMuZGF0ZSlcclxuICAgIGNvbnN0IFt0b2xlcmFuY2UsIHNldFRvbGVyYW5jZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLnRvbGVyYW5jZSA9PSB1bmRlZmluZWQgPyAxIDogcGFyc2VJbnQocXMudG9sZXJhbmNlIGFzIHN0cmluZykpXHJcbiAgICBjb25zdCBbdG9sZXJhbmNlVW5pdHMsIHNldFRvbGVyYW5jZVVuaXRzXSA9IFJlYWN0LnVzZVN0YXRlPFRvbGVyYW5jZVVuaXQ+KHFzLnRvbGVyYW5jZVVuaXRzID09IHVuZGVmaW5lZCA/ICdtaW51dGVzJyA6IHFzLnRvbGVyYW5jZVVuaXRzIGFzIFRvbGVyYW5jZVVuaXQpXHJcbiAgICBjb25zdCBbcmFkaXVzLCBzZXRSYWRpdXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy5yYWRpdXMgPT0gdW5kZWZpbmVkID8gMSA6IHBhcnNlSW50KHFzLnJhZGl1cyBhcyBzdHJpbmcpKVxyXG5cclxuICAgIGNvbnN0IFttZXRlcnMsIHNldE1ldGVyc10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLk1ldGVyW10+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBPcGVuWERBLkV2ZW50U2VhcmNoPignU3RhcnRUaW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW2xpbmVzLCBzZXRMaW5lc10gPSBSZWFjdC51c2VTdGF0ZTxHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uPEdlb0pTT04uUG9seWdvbj4+KG51bGwpXHJcbiAgICBjb25zdCBbYnVmZmVycywgc2V0QnVmZmVyc10gPSBSZWFjdC51c2VTdGF0ZTxHZW9KU09OLkdlb21ldHJ5Q29sbGVjdGlvbj4obnVsbCk7XHJcbiAgICBjb25zdCBbc3RyaWtlcywgc2V0U3RyaWtlc10gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0TWV0ZXJzKCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBPcGVuWERBLk1ldGVyW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IGI2NHN0cmluZyA9IChxcy5tZXRlcnMgPT0gdW5kZWZpbmVkID8gJycgOiBxcy5tZXRlcnMpXHJcbiAgICAgICAgICAgIGxldCBpZHMgPSBhdG9iKGI2NHN0cmluZyBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKGEgPT4gcGFyc2VJbnQoYSkpXHJcbiAgICAgICAgICAgIGlmIChxcy5tZXRlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gdHJ1ZSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gaWRzLmluZGV4T2YodmFsdWUuSUQpID49IDApXHJcblxyXG4gICAgICAgICAgICBzZXRNZXRlcnMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUyLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMi5hYm9ydCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gR2V0TGluZXMoKTtcclxuICAgICAgICBoYW5kbGUuZG9uZShkYXRhID0+IHtcclxuICAgICAgICAgICAgc2V0TGluZXMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21ldGVyc10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxpbmVzID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRCdWZmZXJzKCk7XHJcblxyXG4gICAgICAgIGhhbmRsZTEuZG9uZShkYXRhID0+IHtcclxuICAgICAgICAgICAgc2V0QnVmZmVycyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xpbmVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYnVmZmVycyA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0U3RyaWtlcygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZShkID0+IHtcclxuICAgICAgICAgICAgc2V0U3RyaWtlcyhkKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUyICE9IG51bGwgJiYgaGFuZGxlMi5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTIuYWJvcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2J1ZmZlcnNdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuTWV0ZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL01ldGVyYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRMaW5lcygpOiBKUXVlcnkuanFYSFI8R2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbjxHZW9KU09OLlBvbHlnb24+PiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9FU1JJL0xpbmVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgTWV0ZXJzOiBtZXRlcnMubWFwKG1ldGVyID0+IG1ldGVyLklEKSB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0QnVmZmVycygpOiBKUXVlcnkuanFYSFI8R2VvSlNPTi5HZW9tZXRyeUNvbGxlY3Rpb24+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0VTUkkvQnVmZmVyYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IFJhZGl1czogcmFkaXVzLCBMaW5lSlNPTjogSlNPTi5zdHJpbmdpZnkoeyBnZW9tZXRyeVR5cGU6IFwiZXNyaUdlb21ldHJ5UG9seWxpbmVcIiwgZ2VvbWV0cmllczogbGluZXMuZmVhdHVyZXMubWFwKGEgPT4geyByZXR1cm4geyBwYXRoczogW2EuZ2VvbWV0cnkuY29vcmRpbmF0ZXNdIH0gfSkgfSkgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldFN0cmlrZXMoKTogSlF1ZXJ5LmpxWEhSPEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb24+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0VTUkkvTGlnaHRuaW5nYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IEJ1ZmZlckpTT046IEpTT04uc3RyaW5naWZ5KGJ1ZmZlcnMuZ2VvbWV0cmllc1swXSksIFRpbWVFeHRlbnQ6IEdldFRpbWVFeHRlbnQoKSB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0VGltZUV4dGVudCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBhZGp1c3RlZERhdGUgPSBkYXRlO1xyXG4gICAgICAgIGlmIChtb21lbnQoZGF0ZSkuX2QudG9UaW1lU3RyaW5nKCkuaW5kZXhPZignRWFzdGVybicpKVxyXG4gICAgICAgICAgICBhZGp1c3RlZERhdGUgPSBtb21lbnQoZGF0ZSkuYWRkKC0xLCAnaG91cnMnKS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tXCIpO1xyXG4gICAgICAgIGxldCBzdGFydFRpbWUgPSBtb21lbnQoYWRqdXN0ZWREYXRlKS5hZGQoLXRvbGVyYW5jZSwgdG9sZXJhbmNlVW5pdHMpO1xyXG4gICAgICAgIGxldCBlbmRUaW1lID0gbW9tZW50KGFkanVzdGVkRGF0ZSkuYWRkKHRvbGVyYW5jZSwgdG9sZXJhbmNlVW5pdHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7c3RhcnRUaW1lLnV0YygpLmZvcm1hdCgneCcpfSwke2VuZFRpbWUudXRjKCkuZm9ybWF0KCd4Jyl9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IDc1LCBtYXJnaW46IDUgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiA3NSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcgfX0+TWV0ZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdCBPcHRpb25zPXttZXRlcnMubWFwKHQgPT4gT2JqZWN0LmNyZWF0ZSh7IFRleHQ6IHQuTmFtZSwgVmFsdWU6IHQuSUQsIFNlbGVjdGVkOiB0LlNlbGVjdGVkIH0pKX0gT25DaGFuZ2U9eyhldnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld01ldGVycyA9IF8uY2xvbmVEZWVwKG1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWV0ZXJzLmZpbmQobWV0ZXIgPT4gbWV0ZXIuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVycyhuZXdNZXRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5EYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZGF0ZX0gdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgb25DaGFuZ2U9e2UgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcgfX0+VG9sZXJhbmNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dG9sZXJhbmNlfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2UgPT4gc2V0VG9sZXJhbmNlKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0b2xlcmFuY2VVbml0c30gb25DaGFuZ2U9e2UgPT4gc2V0VG9sZXJhbmNlVW5pdHMoZS50YXJnZXQudmFsdWUgYXMgVG9sZXJhbmNlVW5pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdtaW51dGVzJz5NaW51dGUocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0naG91cnMnPkhvdXIocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZGF5cyc+RGF5KHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3dlZWtzJz5XZWVrKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J21vbnRocyc+TW9udGgocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0neWVhcnMnPlllYXIocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PlJhZGl1cyAobWkpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmFkaXVzfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2UgPT4gc2V0UmFkaXVzKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiBcImNhbGMoMTAwJSAtIDgwcHgpXCIsIG1hcmdpbjogJzVweCA1cHggNXB4IDVweCAnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDBweCAwcHggM3B4Jywgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkV2ZW50IFByZXZpZXc8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjI2LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVTUklNYXAgRGF0ZVRpbWU9e2RhdGV9IFN0cmlrZXM9e3N0cmlrZXN9IExpbmVzPXtsaW5lc30gQnVmZmVycz17YnVmZmVyc30gSGVpZ2h0PXsod2luZG93LmlubmVySGVpZ2h0KSAtIDIyNn0gV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4IDBweCAwcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpa2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiA1IH19IG9uQ2xpY2s9eygpID0+IEV4cG9ydFRvQ3N2KFtdLCAnRXZlbnRTZWFyY2guY3N2Jyl9PkV4cG9ydCBDU1Y8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAod2luZG93LmlubmVySGVpZ2h0KSAtIDI3NSwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTx7IEFNUExJVFVERTogbnVtYmVyLCBESVNQTEFZVElNRTogc3RyaW5nLCBMQVRJVFVERTogbnVtYmVyLCBMT05HSVRVREV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdESVNQTEFZVElNRScsIGxhYmVsOiAnVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQU1QTElUVURFJywgbGFiZWw6ICdBbXBsaXR1ZGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzI1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcyNSUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdMQVRJVFVERScsIGxhYmVsOiAnTGF0JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTE9OR0lUVURFJywgbGFiZWw6ICdMb24nLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDE3LCBwYWRkaW5nOiAwIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAwLCBwYWRkaW5nOiAwIH0gfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9eyhzdHJpa2VzICE9IG51bGwgPyBzdHJpa2VzLmZlYXR1cmVzLm1hcChzID0+IHMuYXR0cmlidXRlcykgOiBbXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtcIkRJU1BMQVlUSU1FXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNjAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRuaW5nOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNdWx0aVNlbGVjdC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMTcvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNdWx0aVNlbGVjdCA9IChwcm9wczogeyBPcHRpb25zOiB7IFZhbHVlOiBudW1iZXIsIFRleHQ6IHN0cmluZywgU2VsZWN0ZWQ6IGJvb2xlYW4gfVtdLCBPbkNoYW5nZTogKGV2dDogYW55LCBPcHRpb25zOiB7IFZhbHVlOiBudW1iZXIsIFRleHQ6IHN0cmluZywgU2VsZWN0ZWQ6IGJvb2xlYW4gfVtdKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IG11bHRpU2VsZWN0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVNob3coZXZ0KSB7XHJcbiAgICAgICAgaWYgKCFtdWx0aVNlbGVjdC5jdXJyZW50LmNvbnRhaW5zKGV2dC50YXJnZXQpKVxyXG4gICAgICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFNob3codHJ1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuT3B0aW9uc10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgSGFuZGxlU2hvdywgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIEhhbmRsZVNob3csIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e211bHRpU2VsZWN0fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsd2lkdGg6J2luaGVyaXQnIH19PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjY2VkNGRhJywgcGFkZGluZzogJy4zNzVyZW0gLjc1cmVtJywgZm9udFNpemU6ICcxcmVtJywgYm9yZGVyUmFkaXVzOiAnLjI1cmVtJyB9fSBjbGFzc05hbWU9XCJidG4gZm9ybS1jb250cm9sIGRyb3Bkb3duLXRvZ2dsZVwiIG9uQ2xpY2s9e0hhbmRsZVNob3d9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLk9wdGlvbnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubGVuZ3RoICE9IHByb3BzLk9wdGlvbnMubGVuZ3RoID8gcHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5sZW5ndGggOiAnQWxsICd9IFNlbGVjdGVkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0ICogLjc1LCBvdmVyZmxvd1k6ICdhdXRvJywgcGFkZGluZzogJzEwIDUnLCBkaXNwbGF5OiBzaG93ID8gJ2Jsb2NrJyA6ICdub25lJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCBib3hTaGFkb3c6ICcwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKScsIHpJbmRleDogNDAxLCBtaW5XaWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBvbkNsaWNrPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuT25DaGFuZ2UoZXZ0LCBwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQgPT0gKHByb3BzLk9wdGlvbnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubGVuZ3RoID09IHByb3BzLk9wdGlvbnMubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT48dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Byb3BzLk9wdGlvbnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubGVuZ3RoID09IHByb3BzLk9wdGlvbnMubGVuZ3RofSBvbkNoYW5nZT17KCkgPT4gbnVsbH0gLz48L3RkPjx0ZD5BbGw8L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5PcHRpb25zLm1hcCgoZiwgaSkgPT4gPHRyIGtleT17aX0gb25DbGljaz17KGV2dCkgPT4gcHJvcHMuT25DaGFuZ2UoZXZ0LCBbZl0pfT48dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2YuU2VsZWN0ZWR9IG9uQ2hhbmdlPXsoKSA9PiBudWxsfSAvPjwvdGQ+PHRkPntmLlRleHR9PC90ZD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==