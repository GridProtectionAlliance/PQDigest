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
    var bounds = [[34, -87], [36, -85]];
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"], { bounds: props.Bounds, style: { height: props.Height - 50, width: props.Width - 12 }, onMoveEnd: function (evt) {
                    var bounds = evt.target.getBounds();
                    var newBounds = [[bounds._southWest.lat, bounds._southWest.lng], [bounds._northEast.lat, bounds._northEast.lng]];
                    if (newBounds !== props.Bounds)
                        props.SetBounds(newBounds);
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], { url: bm['_url'], attribution: bm.options.attribution, subdomains: bm.options.subdomains }),
                (radar ?
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["WMSTileLayer"], { url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi?time=" + timestring, layers: 'nexrad-n0r-wmst', format: 'image/png', transparent: true, opacity: 0.5, attribution: "Weather data \u00A9 2016 IEM Nexrad" }) : null),
                props.Strikes.map(function (s, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["CircleMarker"], { key: index, center: [s.Latitude, s.Longitude], radius: "3", color: 'red', weight: "1", fillColor: "red", fillOpacity: "1" }); })))));
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
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "../node_modules/history/es/index.js");
/* harmony import */ var _ExportCSV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ExportCSV */ "./tsx/ExportCSV.tsx");
/* harmony import */ var _ESRIMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ESRIMap */ "./tsx/Lightning/ESRIMap.tsx");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
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
    var history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])();
    var qs = querystring__WEBPACK_IMPORTED_MODULE_2___default.a.parse(location.search.substring(1));
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.date == undefined ? moment().format("YYYY-MM-DDTHH:mm") : qs.date), 2), date = _a[0], setDate = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.tolerance == undefined ? 1 : parseInt(qs.tolerance)), 2), tolerance = _b[0], setTolerance = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.units == undefined ? 'minute' : qs.units), 2), toleranceUnits = _c[0], setToleranceUnits = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), locations = _d[0], setLocations = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([
        [
            qs.swlat == undefined ? 34.9647481 : parseFloat(qs.swlat),
            qs.swlng == undefined ? -85.410478099 : parseFloat(qs.swlng)
        ],
        [
            qs.nelat == undefined ? 35.1505122 : parseFloat(qs.nelat),
            qs.nelng == undefined ? -85.1770186266 : parseFloat(qs.nelng)
        ]
    ]), 2), bounds = _e[0], setBounds = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), strikes = _f[0], setStrikes = _f[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle2 = GetLocations();
        handle2.done(function (data) {
            setLocations(data);
            var json = {
                type: "FeatureCollection",
                features: data.map(function (location) {
                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [location.Longitude, location.Latitude]
                        },
                        properties: {}
                    };
                })
            };
            var b = leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.geoJSON(json).getBounds();
            setBounds([[b.getSouthWest().lat, b.getSouthWest().lng], [b.getNorthEast().lat, b.getNorthEast().lng]]);
        });
        return function () {
            if (handle2.abort != undefined)
                handle2.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        history.push({
            pathname: homePath + 'Lightning',
            search: "?date=" + date + "&tolerance=" + tolerance + "&units=" + toleranceUnits + "&nelat=" + bounds[1][0] + "&swlat=" + bounds[0][0] + "&nelng=" + bounds[1][1] + "&swlng=" + bounds[0][1]
        });
        var handle = GetStrikes();
        handle.done(function (s) { return setStrikes(s); });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }, [bounds, tolerance, toleranceUnits]);
    function GetStrikes() {
        return $.ajax({
            type: "POST",
            url: homePath + "api/Lightning/Strikes",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                DateTime: date,
                Units: toleranceUnits,
                Tolerance: tolerance,
                NELat: bounds[1][0],
                NELng: bounds[1][1],
                SWLat: bounds[0][0],
                SWLng: bounds[0][1]
            }),
            cache: true,
            async: true
        });
    }
    function GetLocations() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Location",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control text-right", style: { border: '0px' } }, "Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: date, type: "datetime-local", onChange: function (e) { return setDate(e.target.value); } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control text-right", style: { border: '0px' } }, "Tolerance"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: tolerance, type: "number", onChange: function (e) { return setTolerance(parseFloat(e.target.value)); } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: "form-control", value: toleranceUnits, onChange: function (e) { return setToleranceUnits(e.target.value); } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'minute' }, "Minute(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'hour' }, "Hour(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'day' }, "Day(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'week' }, "Week(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'month' }, "Month(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'year' }, "Year(s)")))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 226, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ESRIMap__WEBPACK_IMPORTED_MODULE_5__["default"], { DateTime: date, Strikes: strikes, Locations: locations, Height: (window.innerHeight) - 226, Width: window.innerWidth / 2, Bounds: bounds, SetBounds: setBounds })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                        "Strikes",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-primary", style: { position: 'absolute', top: 5, right: 5 }, onClick: function () { return Object(_ExportCSV__WEBPACK_IMPORTED_MODULE_4__["ExportToCsv"])([], 'EventSearch.csv'); } }, "Export CSV")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 275, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
                                { key: 'DisplayTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'Amplitude', label: 'Amplitude', headerStyle: { width: '25%' }, rowStyle: { width: '25%' } },
                                { key: 'Latitude', label: 'Lat', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'Longitude', label: 'Lon', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                            ], tableClass: "table table-hover", data: strikes, sortField: "DisplayTime", ascending: true, onSort: null, onClick: null, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 340, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function () { return false; } })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Lightning);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXhwb3J0Q1NWLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTGlnaHRuaW5nL0VTUklNYXAudHN4Iiwid2VicGFjazovLy8uL3RzeC9MaWdodG5pbmcvTGlnaHRuaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUVqRyxTQUFTLFdBQVcsQ0FBSSxJQUFTLEVBQUUsUUFBZ0I7SUFDdEQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxPQUFPO0lBRTVCLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUs7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxVQUFVLEdBQUcsVUFBVSxHQUFHO1FBQzFCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFL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RTs2QkFFdkcsRUFDRCxVQUFVLEVBQUMsbUJBQW1CLEVBQzlCLElBQUksRUFBRSxPQUFPLEVBQ2IsU0FBUyxFQUFFLGFBQWEsRUFDeEIsU0FBUyxFQUFFLElBQUksRUFDZixNQUFNLEVBQUUsSUFBSSxFQUNaLE9BQU8sRUFBRSxJQUFJLEVBQ2IsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQ3RHLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ2xHLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEYsUUFBUSxFQUFFLGNBQU0sWUFBSyxFQUFMLENBQUssR0FDbkIsQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ1Q7QUFDTCxDQUFDO0FBRWMsd0VBQVMsRUFBQyIsImZpbGUiOiJMaWdodG5pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAxLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwb3J0VG9Dc3Y8VD4oZGF0YTogVFtdLCBmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHJvd3MgPSBbT2JqZWN0LmtleXMoZGF0YVswXSldO1xyXG4gICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICByb3dzLnB1c2goT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVmFsdWUgPSByb3dbal0udG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbCArPSAnLCc7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjc3ZGaWxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2RmlsZV0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBUVkFFU1JJTWFwLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yNy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCB7IE1hcCwgQ2lyY2xlTWFya2VyLCBUaWxlTGF5ZXIsIFdNU1RpbGVMYXllciwgR2VvSlNPTiB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnO1xyXG5pbXBvcnQgeyBCYXNlbWFwTGF5ZXIgfSBmcm9tICdlc3JpLWxlYWZsZXQnO1xyXG5pbXBvcnQgcHJvajQgZnJvbSAncHJvajQnO1xyXG5pbXBvcnQgJ3Byb2o0bGVhZmxldCc7XHJcbmltcG9ydCB7IExpZ2h0bmluZywgT3BlblhEQSB9IGZyb20gJy4uL2dsb2JhbCc7XHJcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5cclxuXHJcbmNvbnN0IEVTUklNYXA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgRGF0ZVRpbWU6IHN0cmluZywgU3RyaWtlczogTGlnaHRuaW5nLlN0cmlrZVtdLCBMb2NhdGlvbnM6IE9wZW5YREEuTG9jYXRpb25bXSxXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciwgQm91bmRzOiBbW251bWJlcixudW1iZXJdLFtudW1iZXIsbnVtYmVyXV0sIFNldEJvdW5kczogKGJvdW5kcykgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3JhZGFyLCBzZXRSYWRhcl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbYmFzZU1hcCwgc2V0QmFzZU1hcF0gPSBSZWFjdC51c2VTdGF0ZTxsZWFmbGV0LmVzcmkuQmFzZW1hcHM+KCdTdHJlZXRzJyk7XHJcblxyXG4gICAgbGV0IGJvdW5kczogYW55ID0gW1szNCwgLTg3XSwgWzM2LCAtODVdXTtcclxuXHJcblxyXG4gICAgbGV0IHRpbWUgPSBtb21lbnQocHJvcHMuRGF0ZVRpbWUpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSAodGltZS5taW51dGVzKCkgLSB0aW1lLm1pbnV0ZXMoKSAlIDUpLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgdGltZXN0cmluZyA9IHRpbWUudXRjKCkuZm9ybWF0KCdZWVlZLU1NLUREVEhIJykgKyAnOicgKyAobWludXRlcy5sZW5ndGggPT0gMSA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzKTtcclxuICAgIGxldCBibSA9IGxlYWZsZXQuZXNyaS5iYXNlbWFwTGF5ZXIoYmFzZU1hcCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkVTUkkgTWFwXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDI1MCwgdG9wOiAxMCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cIlwiIGNoZWNrZWQ9e3JhZGFyfSBvbkNoYW5nZT17KCkgPT4gc2V0UmFkYXIoIXJhZGFyKX0vPlNob3cgUmFkYXJcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e3dpZHRoOiAyMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogNSwgdG9wOiA1fX0gIHZhbHVlPXtiYXNlTWFwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QmFzZU1hcChldnQudGFyZ2V0LnZhbHVlIGFzIGxlYWZsZXQuZXNyaS5CYXNlbWFwcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1N0cmVldHMnPlN0cmVldHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdUb3BvZ3JhcGhpYyc+VG9wb2dyYXBoaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdOYXRpb25hbEdlb2dyYXBoaWMnPk5hdGlvbmFsR2VvZ3JhcGhpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J09jZWFucyc+T2NlYW5zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nR3JheSc+R3JheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0RhcmtHcmF5Jz5EYXJrR3JheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0ltYWdlcnknPkltYWdlcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdJbWFnZXJ5Q2xhcml0eSc+SW1hZ2VyeUNsYXJpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdJbWFnZXJ5RmlyZWZseSc+SW1hZ2VyeUZpcmVmbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdTaGFkZWRSZWxpZWYnPlNoYWRlZFJlbGllZjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1RlcnJhaW4nPlRlcnJhaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVU0FUb3BvJz5VU0FUb3BvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUGh5c2ljYWwnPlBoeXNpY2FsPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWFwIGJvdW5kcz17cHJvcHMuQm91bmRzfSBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwLCB3aWR0aDogcHJvcHMuV2lkdGggLSAxMiB9fSBvbk1vdmVFbmQ9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm91bmRzID0gZXZ0LnRhcmdldC5nZXRCb3VuZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Qm91bmRzID0gW1tib3VuZHMuX3NvdXRoV2VzdC5sYXQsIGJvdW5kcy5fc291dGhXZXN0LmxuZ10sIFtib3VuZHMuX25vcnRoRWFzdC5sYXQsIGJvdW5kcy5fbm9ydGhFYXN0LmxuZ11dO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdCb3VuZHMgIT09IHByb3BzLkJvdW5kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0Qm91bmRzKG5ld0JvdW5kcyk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGlsZUxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17Ym1bJ191cmwnXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRpb249e2JtLm9wdGlvbnMuYXR0cmlidXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmRvbWFpbnM9e2JtLm9wdGlvbnMuc3ViZG9tYWluc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsocmFkYXIgPyBcclxuICAgICAgICAgICAgICAgICAgICA8V01TVGlsZUxheWVyIHVybD17YGh0dHBzOi8vbWVzb25ldC5hZ3Jvbi5pYXN0YXRlLmVkdS9jZ2ktYmluL3dtcy9uZXhyYWQvbjByLXQuY2dpP3RpbWU9JHt0aW1lc3RyaW5nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVycz0nbmV4cmFkLW4wci13bXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J2ltYWdlL3BuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRpb249XCJXZWF0aGVyIGRhdGEgwqkgMjAxNiBJRU0gTmV4cmFkXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+IDogbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLlN0cmlrZXMubWFwKChzLCBpbmRleCkgPT4gPENpcmNsZU1hcmtlciBrZXk9e2luZGV4fSBjZW50ZXI9e1tzLkxhdGl0dWRlLCBzLkxvbmdpdHVkZV19IHJhZGl1cz1cIjNcIiBjb2xvcj0ncmVkJyB3ZWlnaHQ9XCIxXCIgZmlsbENvbG9yPVwicmVkXCIgZmlsbE9wYWNpdHk9XCIxXCIgLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKnByb3BzLkxvY2F0aW9ucy5tYXAoKHMsIGluZGV4KSA9PiA8Q2lyY2xlTWFya2VyIGtleT17aW5kZXh9IGNlbnRlcj17W3MuTGF0aXR1ZGUsIHMuTG9uZ2l0dWRlXX0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9IH0vPikqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8L01hcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IEVTUklNYXA7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIExpZ2h0bmluZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBRRGlnZXN0LCBPcGVuWERBLCBMaWdodG5pbmcgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcbmltcG9ydCB7IEV4cG9ydFRvQ3N2IH0gZnJvbSAnLi4vRXhwb3J0Q1NWJztcclxuXHJcbmltcG9ydCBFU1JJTWFwIGZyb20gJy4vRVNSSU1hcCc7XHJcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5cclxudHlwZSBUb2xlcmFuY2VVbml0ID0gJ21pbnV0ZScgfCAnaG91cicgfCAnZGF5JyB8ICd3ZWVrJyB8ICdtb250aCcgfCAneWVhcic7XHJcbmNvbnN0IExpZ2h0bmluZyA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHFzID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLmRhdGUgPT0gdW5kZWZpbmVkID8gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbVwiKSA6IHFzLmRhdGUpXHJcbiAgICBjb25zdCBbdG9sZXJhbmNlLCBzZXRUb2xlcmFuY2VdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy50b2xlcmFuY2UgPT0gdW5kZWZpbmVkID8gMSA6IHBhcnNlSW50KHFzLnRvbGVyYW5jZSBhcyBzdHJpbmcpKVxyXG4gICAgY29uc3QgW3RvbGVyYW5jZVVuaXRzLCBzZXRUb2xlcmFuY2VVbml0c10gPSBSZWFjdC51c2VTdGF0ZTxUb2xlcmFuY2VVbml0Pihxcy51bml0cyA9PSB1bmRlZmluZWQgPyAnbWludXRlJyA6IHFzLnVuaXRzIGFzIFRvbGVyYW5jZVVuaXQpXHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5Mb2NhdGlvbltdPihbXSk7XHJcblxyXG4gICAgY29uc3QgW2JvdW5kcywgc2V0Qm91bmRzXSA9IFJlYWN0LnVzZVN0YXRlPFtbbnVtYmVyLCBudW1iZXJdLCBbbnVtYmVyLCBudW1iZXJdXT4oW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgcXMuc3dsYXQgPT0gdW5kZWZpbmVkID8gMzQuOTY0NzQ4MSA6IHBhcnNlRmxvYXQocXMuc3dsYXQgYXMgc3RyaW5nKSxcclxuICAgICAgICAgICAgcXMuc3dsbmcgPT0gdW5kZWZpbmVkID8gLTg1LjQxMDQ3ODA5OSA6IHBhcnNlRmxvYXQocXMuc3dsbmcgYXMgc3RyaW5nKVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBxcy5uZWxhdCA9PSB1bmRlZmluZWQgPyAzNS4xNTA1MTIyIDogcGFyc2VGbG9hdChxcy5uZWxhdCBhcyBzdHJpbmcpLFxyXG4gICAgICAgICAgICBxcy5uZWxuZyA9PSB1bmRlZmluZWQgPyAtODUuMTc3MDE4NjI2NiA6IHBhcnNlRmxvYXQocXMubmVsbmcgYXMgc3RyaW5nKVxyXG4gICAgICAgIF1cclxuICAgIF0pO1xyXG4gICAgY29uc3QgW3N0cmlrZXMsIHNldFN0cmlrZXNdID0gUmVhY3QudXNlU3RhdGU8TGlnaHRuaW5nLlN0cmlrZVtdPihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldExvY2F0aW9ucygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YTogT3BlblhEQS5Mb2NhdGlvbltdKSA9PiB7XHJcbiAgICAgICAgICAgIHNldExvY2F0aW9ucyhkYXRhKTtcclxuICAgICAgICAgICAgbGV0IGpzb246IEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb248R2VvSlNPTi5Qb2ludD4gPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogZGF0YS5tYXAobG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQb2ludCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW2xvY2F0aW9uLkxvbmdpdHVkZSwgbG9jYXRpb24uTGF0aXR1ZGVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBiID0gTC5nZW9KU09OKGpzb24pLmdldEJvdW5kcygpO1xyXG4gICAgICAgICAgICBzZXRCb3VuZHMoW1tiLmdldFNvdXRoV2VzdCgpLmxhdCwgYi5nZXRTb3V0aFdlc3QoKS5sbmddLCBbYi5nZXROb3J0aEVhc3QoKS5sYXQsIGIuZ2V0Tm9ydGhFYXN0KCkubG5nXV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUyLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMi5hYm9ydCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogaG9tZVBhdGggKyAnTGlnaHRuaW5nJyxcclxuICAgICAgICAgICAgc2VhcmNoOiBgP2RhdGU9JHtkYXRlfSZ0b2xlcmFuY2U9JHt0b2xlcmFuY2V9JnVuaXRzPSR7dG9sZXJhbmNlVW5pdHN9Jm5lbGF0PSR7Ym91bmRzWzFdWzBdfSZzd2xhdD0ke2JvdW5kc1swXVswXX0mbmVsbmc9JHtib3VuZHNbMV1bMV19JnN3bG5nPSR7Ym91bmRzWzBdWzFdfWBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaGFuZGxlID0gR2V0U3RyaWtlcygpO1xyXG4gICAgICAgIGhhbmRsZS5kb25lKHMgPT4gc2V0U3RyaWtlcyhzKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2JvdW5kcywgdG9sZXJhbmNlLCB0b2xlcmFuY2VVbml0c10pO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0U3RyaWtlcygpOiBKUXVlcnkuanFYSFI8TGlnaHRuaW5nLlN0cmlrZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9MaWdodG5pbmcvU3RyaWtlc2AsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgRGF0ZVRpbWU6IGRhdGUsXHJcbiAgICAgICAgICAgICAgICBVbml0czogdG9sZXJhbmNlVW5pdHMsXHJcbiAgICAgICAgICAgICAgICBUb2xlcmFuY2U6IHRvbGVyYW5jZSxcclxuICAgICAgICAgICAgICAgIE5FTGF0OiBib3VuZHNbMV1bMF0sXHJcbiAgICAgICAgICAgICAgICBORUxuZzogYm91bmRzWzFdWzFdLFxyXG4gICAgICAgICAgICAgICAgU1dMYXQ6IGJvdW5kc1swXVswXSxcclxuICAgICAgICAgICAgICAgIFNXTG5nOiBib3VuZHNbMF1bMV1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldExvY2F0aW9ucygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5Mb2NhdGlvbltdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvTG9jYXRpb25gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogNzUsIG1hcmdpbjogNSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IDc1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5EYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZGF0ZX0gdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgb25DaGFuZ2U9e2UgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5Ub2xlcmFuY2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0b2xlcmFuY2V9IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17ZSA9PiBzZXRUb2xlcmFuY2UocGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RvbGVyYW5jZVVuaXRzfSBvbkNoYW5nZT17ZSA9PiBzZXRUb2xlcmFuY2VVbml0cyhlLnRhcmdldC52YWx1ZSBhcyBUb2xlcmFuY2VVbml0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J21pbnV0ZSc+TWludXRlKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2hvdXInPkhvdXIocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZGF5Jz5EYXkocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nd2Vlayc+V2VlayhzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdtb250aCc+TW9udGgocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0neWVhcic+WWVhcihzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gODBweClcIiwgbWFyZ2luOiAnNXB4IDVweCA1cHggNXB4ICcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMHB4IDBweCAzcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCkgLSAyMjYsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RVNSSU1hcCBEYXRlVGltZT17ZGF0ZX0gU3RyaWtlcz17c3RyaWtlc30gTG9jYXRpb25zPXtsb2NhdGlvbnN9IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCkgLSAyMjZ9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9IEJvdW5kcz17Ym91bmRzfSBTZXRCb3VuZHM9e3NldEJvdW5kcyB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4IDBweCAwcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpa2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiA1IH19IG9uQ2xpY2s9eygpID0+IEV4cG9ydFRvQ3N2KFtdLCAnRXZlbnRTZWFyY2guY3N2Jyl9PkV4cG9ydCBDU1Y8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAod2luZG93LmlubmVySGVpZ2h0KSAtIDI3NSwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxMaWdodG5pbmcuU3RyaWtlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdEaXNwbGF5VGltZScsIGxhYmVsOiAnVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQW1wbGl0dWRlJywgbGFiZWw6ICdBbXBsaXR1ZGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzI1JScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcyNSUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdMYXRpdHVkZScsIGxhYmVsOiAnTGF0JywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTG9uZ2l0dWRlJywgbGFiZWw6ICdMb24nLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDE3LCBwYWRkaW5nOiAwIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAwLCBwYWRkaW5nOiAwIH0gfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3N0cmlrZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtcIkRpc3BsYXlUaW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNjAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogaW5uZXJIZWlnaHQgLSAzNDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsoKSA9PiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnaHRuaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=