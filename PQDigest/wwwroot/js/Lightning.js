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
                props.Strikes.map(function (s, index) {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["CircleMarker"], { key: index, center: [s.Latitude, s.Longitude], style: { cursor: 'pointer' }, radius: (((_a = props.Strike) === null || _a === void 0 ? void 0 : _a.DisplayTime) == s.DisplayTime && s.Amplitude == ((_b = props.Strike) === null || _b === void 0 ? void 0 : _b.Amplitude) && s.Latitude == ((_c = props.Strike) === null || _c === void 0 ? void 0 : _c.Latitude) && s.Longitude == ((_d = props.Strike) === null || _d === void 0 ? void 0 : _d.Longitude) ? 5 : 3), color: (((_e = props.Strike) === null || _e === void 0 ? void 0 : _e.DisplayTime) == s.DisplayTime && s.Amplitude == ((_f = props.Strike) === null || _f === void 0 ? void 0 : _f.Amplitude) && s.Latitude == ((_g = props.Strike) === null || _g === void 0 ? void 0 : _g.Latitude) && s.Longitude == ((_h = props.Strike) === null || _h === void 0 ? void 0 : _h.Longitude) ? 'black' : 'red'), weight: "1", fillColor: "red", fillOpacity: "1", onClick: function () { return props.SetStrike(s); } });
                })))));
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
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null), 2), strike = _e[0], setStrike = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([
        [
            qs.swlat == undefined ? 34.9647481 : parseFloat(qs.swlat),
            qs.swlng == undefined ? -85.410478099 : parseFloat(qs.swlng)
        ],
        [
            qs.nelat == undefined ? 35.1505122 : parseFloat(qs.nelat),
            qs.nelng == undefined ? -85.1770186266 : parseFloat(qs.nelng)
        ]
    ]), 2), bounds = _f[0], setBounds = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), strikes = _g[0], setStrikes = _g[1];
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control text-right", style: { border: '0px' } }, "Date (CST)"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: date, type: "datetime-local", onChange: function (e) { return setDate(e.target.value); } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control text-right", style: { border: '0px' } }, "Time Window (+/-)"),
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ESRIMap__WEBPACK_IMPORTED_MODULE_5__["default"], { DateTime: date, Strike: strike, SetStrike: setStrike, Strikes: strikes, Locations: locations, Height: (window.innerHeight) - 226, Width: window.innerWidth / 2, Bounds: bounds, SetBounds: setBounds })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                        "Strikes",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-primary", style: { position: 'absolute', top: 5, right: 5 }, onClick: function () { return Object(_ExportCSV__WEBPACK_IMPORTED_MODULE_4__["ExportToCsv"])([], 'EventSearch.csv'); } }, "Export CSV")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 275, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { cols: [
                                { key: 'DisplayTime', label: 'Time (CST)', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'Amplitude', label: 'Amplitude (kA)', headerStyle: { width: '25%' }, rowStyle: { width: '25%' } },
                                { key: 'Latitude', label: 'Lat', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'Longitude', label: 'Lon', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                            ], tableClass: "table table-hover", data: strikes, sortField: "DisplayTime", ascending: true, onSort: null, onClick: function (data) { return setStrike(data.row); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 340, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (data) { return data.DisplayTime == (strike === null || strike === void 0 ? void 0 : strike.DisplayTime) && data.Amplitude == (strike === null || strike === void 0 ? void 0 : strike.Amplitude) && data.Latitude == (strike === null || strike === void 0 ? void 0 : strike.Latitude) && data.Longitude == (strike === null || strike === void 0 ? void 0 : strike.Longitude); } })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Lightning);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXhwb3J0Q1NWLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTGlnaHRuaW5nL0VTUklNYXAudHN4Iiwid2VicGFjazovLy8uL3RzeC9MaWdodG5pbmcvTGlnaHRuaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUVqRyxTQUFTLFdBQVcsQ0FBSSxJQUFTLEVBQUUsUUFBZ0I7SUFDdEQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxPQUFPO0lBRTVCLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUs7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxVQUFVLEdBQUcsVUFBVSxHQUFHO1FBQzFCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFL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QUFLLGdCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixFQUN0QyxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFDdEcsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDbEcsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixRQUFRLEVBQUUsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLFdBQVcsS0FBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxLQUFJLElBQUksQ0FBQyxTQUFTLEtBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFNBQVMsS0FBSSxJQUFJLENBQUMsUUFBUSxLQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLEtBQUksSUFBSSxDQUFDLFNBQVMsS0FBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsU0FBUyxHQUExSixDQUEwSixHQUM1SyxDQUNKLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDVDtBQUNMLENBQUM7QUFFYyx3RUFBUyxFQUFDIiwiZmlsZSI6IkxpZ2h0bmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFeHBvcnRDU1YudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMDEvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFeHBvcnRUb0NzdjxUPihkYXRhOiBUW10sIGZpbGVuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcbiAgICB2YXIgcm93cyA9IFtPYmplY3Qua2V5cyhkYXRhWzBdKV07XHJcbiAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHJvd3MucHVzaChPYmplY3Qua2V5cyh2YWx1ZSkubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV0gfSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHByb2Nlc3NSb3cgPSBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgdmFyIGZpbmFsVmFsID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGlubmVyVmFsdWUgPSByb3dbal0gPT09IG51bGwgPyAnJyA6IHJvd1tqXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAocm93W2pdIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5uZXJWYWx1ZSA9IHJvd1tqXS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5uZXJWYWx1ZS5yZXBsYWNlKC9cIi9nLCAnXCJcIicpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnNlYXJjaCgvKFwifCx8XFxuKS9nKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1wiJyArIHJlc3VsdCArICdcIic7XHJcbiAgICAgICAgICAgIGlmIChqID4gMClcclxuICAgICAgICAgICAgICAgIGZpbmFsVmFsICs9ICcsJztcclxuICAgICAgICAgICAgZmluYWxWYWwgKz0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmluYWxWYWwgKyAnXFxuJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNzdkZpbGUgPSAnJztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNzdkZpbGUgKz0gcHJvY2Vzc1Jvdyhyb3dzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3ZGaWxlXSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xyXG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFIDEwK1xyXG4gICAgICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBpZiAobGluay5kb3dubG9hZCAhPT0gdW5kZWZpbmVkKSB7IC8vIGZlYXR1cmUgZGV0ZWN0aW9uXHJcbiAgICAgICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVuYW1lKTtcclxuICAgICAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRWQUVTUklNYXAudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzI3LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbGVhZmxldCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHsgTWFwLCBDaXJjbGVNYXJrZXIsIFRpbGVMYXllciwgV01TVGlsZUxheWVyLCBHZW9KU09OIH0gZnJvbSAncmVhY3QtbGVhZmxldCc7XHJcbmltcG9ydCB7IEJhc2VtYXBMYXllciB9IGZyb20gJ2VzcmktbGVhZmxldCc7XHJcbmltcG9ydCBwcm9qNCBmcm9tICdwcm9qNCc7XHJcbmltcG9ydCAncHJvajRsZWFmbGV0JztcclxuaW1wb3J0IHsgTGlnaHRuaW5nLCBPcGVuWERBIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcblxyXG5cclxuY29uc3QgRVNSSU1hcDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBEYXRlVGltZTogc3RyaW5nLCBTdHJpa2U6IExpZ2h0bmluZy5TdHJpa2UsIFN0cmlrZXM6IExpZ2h0bmluZy5TdHJpa2VbXSwgTG9jYXRpb25zOiBPcGVuWERBLkxvY2F0aW9uW10sV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsIEJvdW5kczogW1tudW1iZXIsbnVtYmVyXSxbbnVtYmVyLG51bWJlcl1dLCBTZXRCb3VuZHM6IChib3VuZHMpID0+IHZvaWQsIFNldFN0cmlrZTogKHN0cmlrZSk9PiB2b2lkIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcmFkYXIsIHNldFJhZGFyXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtiYXNlTWFwLCBzZXRCYXNlTWFwXSA9IFJlYWN0LnVzZVN0YXRlPGxlYWZsZXQuZXNyaS5CYXNlbWFwcz4oJ1N0cmVldHMnKTtcclxuXHJcbiAgICBsZXQgYm91bmRzOiBhbnkgPSBbWzM0LCAtODddLCBbMzYsIC04NV1dO1xyXG5cclxuXHJcbiAgICBsZXQgdGltZSA9IG1vbWVudChwcm9wcy5EYXRlVGltZSk7XHJcbiAgICBsZXQgbWludXRlcyA9ICh0aW1lLm1pbnV0ZXMoKSAtIHRpbWUubWludXRlcygpICUgNSkudG9TdHJpbmcoKTtcclxuICAgIGxldCB0aW1lc3RyaW5nID0gdGltZS51dGMoKS5mb3JtYXQoJ1lZWVktTU0tRERUSEgnKSArICc6JyArIChtaW51dGVzLmxlbmd0aCA9PSAxID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXMpO1xyXG4gICAgbGV0IGJtID0gbGVhZmxldC5lc3JpLmJhc2VtYXBMYXllcihiYXNlTWFwKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+RVNSSSBNYXBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMjUwLCB0b3A6IDEwIH19ID5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHZhbHVlPVwiXCIgY2hlY2tlZD17cmFkYXJ9IG9uQ2hhbmdlPXsoKSA9PiBzZXRSYWRhcighcmFkYXIpfS8+U2hvdyBSYWRhclxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHN0eWxlPXt7d2lkdGg6IDIwMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiA1LCB0b3A6IDV9fSAgdmFsdWU9e2Jhc2VNYXB9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRCYXNlTWFwKGV2dC50YXJnZXQudmFsdWUgYXMgbGVhZmxldC5lc3JpLkJhc2VtYXBzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nU3RyZWV0cyc+U3RyZWV0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1RvcG9ncmFwaGljJz5Ub3BvZ3JhcGhpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J05hdGlvbmFsR2VvZ3JhcGhpYyc+TmF0aW9uYWxHZW9ncmFwaGljPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nT2NlYW5zJz5PY2VhbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdHcmF5Jz5HcmF5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nRGFya0dyYXknPkRhcmtHcmF5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nSW1hZ2VyeSc+SW1hZ2VyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0ltYWdlcnlDbGFyaXR5Jz5JbWFnZXJ5Q2xhcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0ltYWdlcnlGaXJlZmx5Jz5JbWFnZXJ5RmlyZWZseTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1NoYWRlZFJlbGllZic+U2hhZGVkUmVsaWVmPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVGVycmFpbic+VGVycmFpbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1VTQVRvcG8nPlVTQVRvcG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdQaHlzaWNhbCc+UGh5c2ljYWw8L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMH19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxNYXAgYm91bmRzPXtwcm9wcy5Cb3VuZHN9IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0IC0gNTAsIHdpZHRoOiBwcm9wcy5XaWR0aCAtIDEyIH19IG9uTW92ZUVuZD17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3VuZHMgPSBldnQudGFyZ2V0LmdldEJvdW5kcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdCb3VuZHMgPSBbW2JvdW5kcy5fc291dGhXZXN0LmxhdCwgYm91bmRzLl9zb3V0aFdlc3QubG5nXSwgW2JvdW5kcy5fbm9ydGhFYXN0LmxhdCwgYm91bmRzLl9ub3J0aEVhc3QubG5nXV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0JvdW5kcyAhPT0gcHJvcHMuQm91bmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXRCb3VuZHMobmV3Qm91bmRzKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaWxlTGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtibVsnX3VybCddfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj17Ym0ub3B0aW9ucy5hdHRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViZG9tYWlucz17Ym0ub3B0aW9ucy5zdWJkb21haW5zfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgeyhyYWRhciA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxXTVNUaWxlTGF5ZXIgdXJsPXtgaHR0cHM6Ly9tZXNvbmV0LmFncm9uLmlhc3RhdGUuZWR1L2NnaS1iaW4vd21zL25leHJhZC9uMHItdC5jZ2k/dGltZT0ke3RpbWVzdHJpbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPSduZXhyYWQtbjByLXdtc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0naW1hZ2UvcG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj1cIldlYXRoZXIgZGF0YSDCqSAyMDE2IElFTSBOZXhyYWRcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gOiBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuU3RyaWtlcy5tYXAoKHMsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlTWFya2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyPXtbcy5MYXRpdHVkZSwgcy5Mb25naXR1ZGVdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz17KHByb3BzLlN0cmlrZT8uRGlzcGxheVRpbWUgPT0gcy5EaXNwbGF5VGltZSAmJiBzLkFtcGxpdHVkZSA9PSBwcm9wcy5TdHJpa2U/LkFtcGxpdHVkZSAmJiBzLkxhdGl0dWRlID09IHByb3BzLlN0cmlrZT8uTGF0aXR1ZGUgJiYgcy5Mb25naXR1ZGUgPT0gcHJvcHMuU3RyaWtlPy5Mb25naXR1ZGUgPyA1IDogMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17KHByb3BzLlN0cmlrZT8uRGlzcGxheVRpbWUgPT0gcy5EaXNwbGF5VGltZSAmJiBzLkFtcGxpdHVkZSA9PSBwcm9wcy5TdHJpa2U/LkFtcGxpdHVkZSAmJiBzLkxhdGl0dWRlID09IHByb3BzLlN0cmlrZT8uTGF0aXR1ZGUgJiYgcy5Mb25naXR1ZGUgPT0gcHJvcHMuU3RyaWtlPy5Mb25naXR1ZGUgPyAnYmxhY2snIDogJ3JlZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLlNldFN0cmlrZShzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKnByb3BzLkxvY2F0aW9ucy5tYXAoKHMsIGluZGV4KSA9PiA8Q2lyY2xlTWFya2VyIGtleT17aW5kZXh9IGNlbnRlcj17W3MuTGF0aXR1ZGUsIHMuTG9uZ2l0dWRlXX0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9IH0vPikqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8L01hcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuIGV4cG9ydCBkZWZhdWx0IEVTUklNYXA7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIExpZ2h0bmluZy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBRRGlnZXN0LCBPcGVuWERBLCBMaWdodG5pbmcgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcbmltcG9ydCB7IEV4cG9ydFRvQ3N2IH0gZnJvbSAnLi4vRXhwb3J0Q1NWJztcclxuXHJcbmltcG9ydCBFU1JJTWFwIGZyb20gJy4vRVNSSU1hcCc7XHJcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5cclxudHlwZSBUb2xlcmFuY2VVbml0ID0gJ21pbnV0ZScgfCAnaG91cicgfCAnZGF5JyB8ICd3ZWVrJyB8ICdtb250aCcgfCAneWVhcic7XHJcbmNvbnN0IExpZ2h0bmluZyA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHFzID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLmRhdGUgPT0gdW5kZWZpbmVkID8gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbVwiKSA6IHFzLmRhdGUpXHJcbiAgICBjb25zdCBbdG9sZXJhbmNlLCBzZXRUb2xlcmFuY2VdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy50b2xlcmFuY2UgPT0gdW5kZWZpbmVkID8gMSA6IHBhcnNlSW50KHFzLnRvbGVyYW5jZSBhcyBzdHJpbmcpKVxyXG4gICAgY29uc3QgW3RvbGVyYW5jZVVuaXRzLCBzZXRUb2xlcmFuY2VVbml0c10gPSBSZWFjdC51c2VTdGF0ZTxUb2xlcmFuY2VVbml0Pihxcy51bml0cyA9PSB1bmRlZmluZWQgPyAnbWludXRlJyA6IHFzLnVuaXRzIGFzIFRvbGVyYW5jZVVuaXQpXHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5Mb2NhdGlvbltdPihbXSk7XHJcbiAgICBjb25zdCBbc3RyaWtlLCBzZXRTdHJpa2VdID0gUmVhY3QudXNlU3RhdGU8TGlnaHRuaW5nLlN0cmlrZT4obnVsbClcclxuXHJcbiAgICBjb25zdCBbYm91bmRzLCBzZXRCb3VuZHNdID0gUmVhY3QudXNlU3RhdGU8W1tudW1iZXIsIG51bWJlcl0sIFtudW1iZXIsIG51bWJlcl1dPihbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBxcy5zd2xhdCA9PSB1bmRlZmluZWQgPyAzNC45NjQ3NDgxIDogcGFyc2VGbG9hdChxcy5zd2xhdCBhcyBzdHJpbmcpLFxyXG4gICAgICAgICAgICBxcy5zd2xuZyA9PSB1bmRlZmluZWQgPyAtODUuNDEwNDc4MDk5IDogcGFyc2VGbG9hdChxcy5zd2xuZyBhcyBzdHJpbmcpXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHFzLm5lbGF0ID09IHVuZGVmaW5lZCA/IDM1LjE1MDUxMjIgOiBwYXJzZUZsb2F0KHFzLm5lbGF0IGFzIHN0cmluZyksXHJcbiAgICAgICAgICAgIHFzLm5lbG5nID09IHVuZGVmaW5lZCA/IC04NS4xNzcwMTg2MjY2IDogcGFyc2VGbG9hdChxcy5uZWxuZyBhcyBzdHJpbmcpXHJcbiAgICAgICAgXVxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBbc3RyaWtlcywgc2V0U3RyaWtlc10gPSBSZWFjdC51c2VTdGF0ZTxMaWdodG5pbmcuU3RyaWtlW10+KFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0TG9jYXRpb25zKCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBPcGVuWERBLkxvY2F0aW9uW10pID0+IHtcclxuICAgICAgICAgICAgc2V0TG9jYXRpb25zKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQganNvbjogR2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbjxHZW9KU09OLlBvaW50PiA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBkYXRhLm1hcChsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BvaW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbbG9jYXRpb24uTG9uZ2l0dWRlLCBsb2NhdGlvbi5MYXRpdHVkZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbGV0IGIgPSBMLmdlb0pTT04oanNvbikuZ2V0Qm91bmRzKCk7XHJcbiAgICAgICAgICAgIHNldEJvdW5kcyhbW2IuZ2V0U291dGhXZXN0KCkubGF0LCBiLmdldFNvdXRoV2VzdCgpLmxuZ10sIFtiLmdldE5vcnRoRWFzdCgpLmxhdCwgYi5nZXROb3J0aEVhc3QoKS5sbmddXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBob21lUGF0aCArICdMaWdodG5pbmcnLFxyXG4gICAgICAgICAgICBzZWFyY2g6IGA/ZGF0ZT0ke2RhdGV9JnRvbGVyYW5jZT0ke3RvbGVyYW5jZX0mdW5pdHM9JHt0b2xlcmFuY2VVbml0c30mbmVsYXQ9JHtib3VuZHNbMV1bMF19JnN3bGF0PSR7Ym91bmRzWzBdWzBdfSZuZWxuZz0ke2JvdW5kc1sxXVsxXX0mc3dsbmc9JHtib3VuZHNbMF1bMV19YFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSBHZXRTdHJpa2VzKCk7XHJcbiAgICAgICAgaGFuZGxlLmRvbmUocyA9PiBzZXRTdHJpa2VzKHMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbYm91bmRzLCB0b2xlcmFuY2UsIHRvbGVyYW5jZVVuaXRzXSk7XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRTdHJpa2VzKCk6IEpRdWVyeS5qcVhIUjxMaWdodG5pbmcuU3RyaWtlW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0xpZ2h0bmluZy9TdHJpa2VzYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBEYXRlVGltZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgIFVuaXRzOiB0b2xlcmFuY2VVbml0cyxcclxuICAgICAgICAgICAgICAgIFRvbGVyYW5jZTogdG9sZXJhbmNlLFxyXG4gICAgICAgICAgICAgICAgTkVMYXQ6IGJvdW5kc1sxXVswXSxcclxuICAgICAgICAgICAgICAgIE5FTG5nOiBib3VuZHNbMV1bMV0sXHJcbiAgICAgICAgICAgICAgICBTV0xhdDogYm91bmRzWzBdWzBdLFxyXG4gICAgICAgICAgICAgICAgU1dMbmc6IGJvdW5kc1swXVsxXVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TG9jYXRpb25zKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLkxvY2F0aW9uW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9Mb2NhdGlvbmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiA3NSwgbWFyZ2luOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogNzUgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PkRhdGUgKENTVCk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtkYXRlfSB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBvbkNoYW5nZT17ZSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PlRpbWUgV2luZG93ICgrLy0pPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dG9sZXJhbmNlfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2UgPT4gc2V0VG9sZXJhbmNlKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0b2xlcmFuY2VVbml0c30gb25DaGFuZ2U9e2UgPT4gc2V0VG9sZXJhbmNlVW5pdHMoZS50YXJnZXQudmFsdWUgYXMgVG9sZXJhbmNlVW5pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdtaW51dGUnPk1pbnV0ZShzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdob3VyJz5Ib3VyKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2RheSc+RGF5KHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3dlZWsnPldlZWsocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbW9udGgnPk1vbnRoKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3llYXInPlllYXIocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiBcImNhbGMoMTAwJSAtIDgwcHgpXCIsIG1hcmdpbjogJzVweCA1cHggNXB4IDVweCAnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDBweCAwcHggM3B4Jywgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjI2LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVTUklNYXAgRGF0ZVRpbWU9e2RhdGV9IFN0cmlrZT17c3RyaWtlfSBTZXRTdHJpa2U9e3NldFN0cmlrZX1TdHJpa2VzPXtzdHJpa2VzfSBMb2NhdGlvbnM9e2xvY2F0aW9uc30gSGVpZ2h0PXsod2luZG93LmlubmVySGVpZ2h0KSAtIDIyNn0gV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMn0gQm91bmRzPXtib3VuZHN9IFNldEJvdW5kcz17c2V0Qm91bmRzIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmlrZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogNSwgcmlnaHQ6IDUgfX0gb25DbGljaz17KCkgPT4gRXhwb3J0VG9Dc3YoW10sICdFdmVudFNlYXJjaC5jc3YnKX0+RXhwb3J0IENTVjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjc1LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPExpZ2h0bmluZy5TdHJpa2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0Rpc3BsYXlUaW1lJywgbGFiZWw6ICdUaW1lIChDU1QpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdBbXBsaXR1ZGUnLCBsYWJlbDogJ0FtcGxpdHVkZSAoa0EpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcyNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMjUlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTGF0aXR1ZGUnLCBsYWJlbDogJ0xhdCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0xvbmdpdHVkZScsIGxhYmVsOiAnTG9uJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtzdHJpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17XCJEaXNwbGF5VGltZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHNldFN0cmlrZShkYXRhLnJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCAtIDM0MCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhkYXRhKSA9PiBkYXRhLkRpc3BsYXlUaW1lID09IHN0cmlrZT8uRGlzcGxheVRpbWUgJiYgZGF0YS5BbXBsaXR1ZGUgPT0gc3RyaWtlPy5BbXBsaXR1ZGUgJiYgZGF0YS5MYXRpdHVkZSA9PSBzdHJpa2U/LkxhdGl0dWRlICYmIGRhdGEuTG9uZ2l0dWRlID09IHN0cmlrZT8uTG9uZ2l0dWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWdodG5pbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==