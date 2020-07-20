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
/*! exports provided: ESRIMap2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESRIMap2", function() { return ESRIMap2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "../node_modules/react-leaflet/es/index.js");
/* harmony import */ var proj4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! proj4 */ "../node_modules/proj4/lib/index.js");
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! proj4leaflet */ "../node_modules/proj4leaflet/src/proj4leaflet.js");
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(proj4leaflet__WEBPACK_IMPORTED_MODULE_4__);
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
var __extends = (undefined && undefined.__extends) || (function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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





var ESRIMap2 = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false), 2), radar = _a[0], setRadar = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('Streets'), 2), baseMap = _b[0], setBaseMap = _b[1];
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
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"], { center: [35, -85], zoom: 7, style: { height: props.Height - 50, width: props.Width - 12 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], { url: bm['_url'], attribution: bm.options.attribution, subdomains: bm.options.subdomains }),
                (radar ?
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["WMSTileLayer"], { url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi?time=" + timestring, layers: 'nexrad-n0r-wmst', format: 'image/png', transparent: true, opacity: 0.5, attribution: "Weather data \u00A9 2016 IEM Nexrad" }) : null)))));
};
var ESRIMap = /** @class */ (function (_super) {
    __extends(ESRIMap, _super);
    function ESRIMap(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            Results: null,
            FaultInfo: [],
            Window: 2,
        };
        proj4__WEBPACK_IMPORTED_MODULE_3__["default"].defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
        return _this;
    }
    ESRIMap.prototype.GetLightningInfo = function () {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/GetLightningInfo/" + this.state.Window,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    };
    ESRIMap.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //const faultInfo = await this.GetFaultInfo();
                //this.setState({ FaultInfo: faultInfo });
                //const lightningInfo = await this.GetLightningInfo();
                //this.setState({ Results: lightningInfo });
                this.map = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.map('map', { center: [35, -85], zoom: 7 });
                leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.esri.basemapLayer('Gray').addTo(this.map);
                return [2 /*return*/];
            });
        });
    };
    ESRIMap.prototype.poly = function (geometry) {
        var outPut = {
            "type": "FeatureCollection",
            "features": []
        };
        //first we check for some easy cases, like if their is only one ring
        if (geometry.rings.length === 1) {
            outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "Polygon", "coordinates": geometry.rings }, crs: { type: "name", properties: { name: "EPSG:3857" } } });
        }
        else {
            /*if it isn't that easy then we have to start checking ring direction, basically the ring goes clockwise its part of the polygon, if it goes counterclockwise it is a hole in the polygon, but geojson does it by haveing an array with the first element be the polygons and the next elements being holes in it*/
            var ccc = this.dP(geometry.rings);
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
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "MultiPolygon", "coordinates": r }, crs: { type: "name", properties: { name: "EPSG:3857" } } });
            }
            else if (d.length === 1) {
                /*if their is only one clockwise ring then we know all holes are in that poly*/
                dd.unshift(d[0]);
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "Polygon", "coordinates": dd }, crs: { type: "name", properties: { name: "EPSG:3857" } } });
            }
            else {
                /*if their are multiple rings and holes we have no way of knowing which belong to which without looking at it specially, so just dump the coordinates and add  a hole field, this may cause errors*/
                outPut.features.push({ type: 'Feature', properties: { color: 'black', opacity: 1 }, geometry: { "type": "MultiPolygon", "coordinates": d, "holes": dd }, crs: { type: "name", properties: { name: "EPSG:3857" } } });
            }
        }
        return outPut;
    };
    ESRIMap.prototype.dP = function (a) {
        //returns an array of 2 arrays, the first being all the clockwise ones, the second counter clockwise
        var d = [];
        var dd = [];
        var l = a.length;
        var ii = 0;
        while (l > ii) {
            if (this.c(a[ii])) {
                d.push(a[ii]);
            }
            else {
                dd.push(a[ii]);
            }
            ii++;
        }
        return [d, dd];
    };
    ESRIMap.prototype.c = function (a) {
        //return true if clockwise
        var l = a.length - 1;
        var i = 0;
        var o = 0;
        while (l > i) {
            o += (a[i][0] * a[i + 1][1] - a[i + 1][0] * a[i][1]);
            i++;
        }
        return o <= 0;
    };
    ESRIMap.prototype.epsg3857ToLatLong = function (a) {
        var e = 2.7182818284;
        var x = 20037508.34;
        var lon = a[1] * 180 / x;
        var lat = a[0] * x / 180;
        lat = Math.atan(Math.E ^ (Math.PI * lat / 180)) / (Math.PI / 360) - 90;
        return [lat, lon];
    };
    ESRIMap.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, "ESRI Map"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "map", style: { height: this.props.Height - 90, width: this.props.Width - 40, padding: 5, border: 'solid 1px gray' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: "form-control", style: { width: 100, position: "absolute", zIndex: 1000, top: 10, right: 10 }, value: this.state.Window, onChange: function (evt) { return _this.setState({ Window: parseInt(evt.target.value) }, function () { return _this.componentDidMount(); }); } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "2" }, "+/- 2 sec"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "5" }, "+/- 5 sec"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "10" }, "+/- 10 sec"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "20" }, "+/- 20 sec"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "30" }, "+/- 30 sec"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "60" }, "+/- 60 sec"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { maxHeight: window.innerHeight * 0.3 - 45, overflowY: "auto" }, hidden: true },
                    (this.state.Results == null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Searching...") : null),
                    (this.state.Results != null && this.state.Results.length == 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No Lightning Records Found") : null),
                    (this.state.Results != null && this.state.Results.length > 0 ?
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "table", style: { maxHeight: 'calc(30% - 50px)', height: 'calc(30% - 50px)' } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, Object.keys(this.state.Results[0]).map(function (attr, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { key: index }, attr); }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.Results.map(function (result, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: index }, Object.keys(result).map(function (attribute, i) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { key: i }, result[attribute]); })); })))
                        : null)))));
    };
    return ESRIMap;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
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
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.toleranceUnits == undefined ? 'Minute' : qs.toleranceUnits), 2), toleranceUnits = _c[0], setToleranceUnits = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.radius == undefined ? 1 : parseInt(qs.radius)), 2), radius = _d[0], setRadius = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), meters = _e[0], setMeters = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), strikes = _f[0], setStrikes = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('StartTime'), 2), sortField = _g[0], setSortField = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), ascending = _h[0], setAscending = _h[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        //let handle1 = GetTypes();
        //handle1.done((data: OpenXDA.EventType[]) => {
        //    let b64string = (qs.types == undefined ? '' : qs.types)
        //    let ids = atob(b64string as string).split(',').map(a => parseInt(a))
        //    if (qs.types == undefined)
        //        data.forEach(value => value.Selected = true)
        //    else
        //        data.forEach(value => value.Selected = ids.indexOf(value.ID) >= 0)
        //    setTypes(data);
        //});
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
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Minute' }, "Minute(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Hour' }, "Hour(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Day' }, "Day(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Week' }, "Week(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Month' }, "Month(s)"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'Year' }, "Year(s)"))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col form-control", style: { border: '0px' } }, "Radius (mi)"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: radius, type: "number", onChange: function (e) { return setRadius(parseFloat(e.target.value)); } }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 226, padding: 0 } }, /*
                        <ESRIMap DateTime={date} Tolerance={tolerance} ToleranceUnit={toleranceUnits} Radius={radius} Strikes={strikes} Height={(window.innerHeight) - 226} Width={window.innerWidth / 2} />
                       */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ESRIMap__WEBPACK_IMPORTED_MODULE_7__["ESRIMap2"], { DateTime: date, Tolerance: tolerance, ToleranceUnit: toleranceUnits, Radius: radius, Strikes: strikes, Height: (window.innerHeight) - 226, Width: window.innerWidth / 2 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Hello World!"))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                        "Strikes",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-primary", style: { position: 'absolute', top: 5, right: 5 }, onClick: function () { return Object(_ExportCSV__WEBPACK_IMPORTED_MODULE_5__["ExportToCsv"])(strikes, 'EventSearch.csv'); } }, "Export CSV")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 275, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                                { key: 'StartTime', label: 'Date', headerStyle: { width: '25%' }, rowStyle: { width: '25%' }, content: function (item, key, style) { return moment(item[key]).format('MM/DD/YYYY HH:mm:ss'); } },
                                //{ key: 'StartTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => moment(item[key]).format('HH:mm:ss') },
                                { key: 'MeterName', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'EventType', label: 'Type', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'PerUnitMagnitude', label: 'Mag (pu)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key].toFixed(2); } },
                                { key: 'DurationSeconds', label: 'Dur (s)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key].toFixed(2); } },
                                { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                            ], tableClass: "table table-hover", data: strikes, sortField: sortField, ascending: ascending, onSort: function (d) {
                                if (d.col == sortField) {
                                    var ordered = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(strikes, [sortField], [(!ascending ? 'asc' : 'desc')]);
                                    setStrikes(ordered);
                                    setAscending(!ascending);
                                }
                                else {
                                    setAscending(ascending);
                                    setSortField(d.col);
                                    var ordered = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(strikes, [d.col], [(ascending ? 'asc' : 'desc')]);
                                    setStrikes(ordered);
                                }
                            }, onClick: null, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 300, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: null })))))));
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { maxHeight: window.innerHeight * .75, overflowY: 'auto', padding: '10 5', display: show ? 'block' : 'none', position: 'absolute', backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90c3gvRXhwb3J0Q1NWLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTGlnaHRuaW5nL0VTUklNYXAudHN4Iiwid2VicGFjazovLy8uL3RzeC9MaWdodG5pbmcvTGlnaHRuaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTXVsdGlTZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRWpHLFNBQVMsV0FBVyxDQUFJLElBQVMsRUFBRSxRQUFnQjtJQUN0RCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE9BQU87SUFFNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFVBQVUsR0FBRyxVQUFVLEdBQUc7UUFDMUIs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b3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAxLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwb3J0VG9Dc3Y8VD4oZGF0YTogVFtdLCBmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHJvd3MgPSBbT2JqZWN0LmtleXMoZGF0YVswXSldO1xyXG4gICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICByb3dzLnB1c2goT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVmFsdWUgPSByb3dbal0udG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbCArPSAnLCc7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjc3ZGaWxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2RmlsZV0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBUVkFFU1JJTWFwLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yNy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCB7IE1hcCwgQ2lyY2xlTWFya2VyLCBUaWxlTGF5ZXIsIFdNU1RpbGVMYXllciB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnO1xyXG5pbXBvcnQgeyBCYXNlbWFwTGF5ZXIgfSBmcm9tICdlc3JpLWxlYWZsZXQnO1xyXG5pbXBvcnQgcHJvajQgZnJvbSAncHJvajQnO1xyXG5pbXBvcnQgJ3Byb2o0bGVhZmxldCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEVTUklNYXAyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IERhdGVUaW1lOiBzdHJpbmcsIFRvbGVyYW5jZTogbnVtYmVyLCBUb2xlcmFuY2VVbml0OiBzdHJpbmcsIFJhZGl1czogbnVtYmVyLCBTdHJpa2VzOiBhbnlbXSwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtyYWRhciwgc2V0UmFkYXJdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2Jhc2VNYXAsIHNldEJhc2VNYXBdID0gUmVhY3QudXNlU3RhdGU8bGVhZmxldC5lc3JpLkJhc2VtYXBzPignU3RyZWV0cycpO1xyXG5cclxuICAgIGxldCB0aW1lID0gbW9tZW50KHByb3BzLkRhdGVUaW1lKTtcclxuICAgIGxldCBtaW51dGVzID0gKHRpbWUubWludXRlcygpIC0gdGltZS5taW51dGVzKCkgJSA1KS50b1N0cmluZygpO1xyXG4gICAgbGV0IHRpbWVzdHJpbmcgPSB0aW1lLnV0YygpLmZvcm1hdCgnWVlZWS1NTS1ERFRISCcpICsgJzonICsgKG1pbnV0ZXMubGVuZ3RoID09IDEgPyBgMCR7bWludXRlc31gOiBtaW51dGVzKTtcclxuICAgIGxldCBibSA9IGxlYWZsZXQuZXNyaS5iYXNlbWFwTGF5ZXIoYmFzZU1hcCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkVTUkkgTWFwXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDI1MCwgdG9wOiAxMCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT1cIlwiIGNoZWNrZWQ9e3JhZGFyfSBvbkNoYW5nZT17KCkgPT4gc2V0UmFkYXIoIXJhZGFyKX0vPlNob3cgUmFkYXJcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT17e3dpZHRoOiAyMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogNSwgdG9wOiA1fX0gIHZhbHVlPXtiYXNlTWFwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QmFzZU1hcChldnQudGFyZ2V0LnZhbHVlIGFzIGxlYWZsZXQuZXNyaS5CYXNlbWFwcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1N0cmVldHMnPlN0cmVldHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdUb3BvZ3JhcGhpYyc+VG9wb2dyYXBoaWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdOYXRpb25hbEdlb2dyYXBoaWMnPk5hdGlvbmFsR2VvZ3JhcGhpYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J09jZWFucyc+T2NlYW5zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nR3JheSc+R3JheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0RhcmtHcmF5Jz5EYXJrR3JheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0ltYWdlcnknPkltYWdlcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdJbWFnZXJ5Q2xhcml0eSc+SW1hZ2VyeUNsYXJpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdJbWFnZXJ5RmlyZWZseSc+SW1hZ2VyeUZpcmVmbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdTaGFkZWRSZWxpZWYnPlNoYWRlZFJlbGllZjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1RlcnJhaW4nPlRlcnJhaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVU0FUb3BvJz5VU0FUb3BvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUGh5c2ljYWwnPlBoeXNpY2FsPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWFwIGNlbnRlcj17WzM1LCAtODVdfSB6b29tPXs3fSBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwLCB3aWR0aDogcHJvcHMuV2lkdGggLSAxMiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaWxlTGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vc20ub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRpbGVMYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2JtWydfdXJsJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPXtibS5vcHRpb25zLmF0dHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJkb21haW5zPXtibS5vcHRpb25zLnN1YmRvbWFpbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7KHJhZGFyID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPFdNU1RpbGVMYXllciB1cmw9e2BodHRwczovL21lc29uZXQuYWdyb24uaWFzdGF0ZS5lZHUvY2dpLWJpbi93bXMvbmV4cmFkL24wci10LmNnaT90aW1lPSR7dGltZXN0cmluZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9J25leHJhZC1uMHItd21zdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdpbWFnZS9wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPVwiV2VhdGhlciBkYXRhIMKpIDIwMTYgSUVNIE5leHJhZFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8+IDogbnVsbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L01hcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRVNSSU1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IERhdGVUaW1lOiBzdHJpbmcsIFRvbGVyYW5jZTogbnVtYmVyLCBUb2xlcmFuY2VVbml0OiBzdHJpbmcsIFJhZGl1czogbnVtYmVyLCBTdHJpa2VzOiBhbnlbXSwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgIH0sIHsgUmVzdWx0czogYW55LCBGYXVsdEluZm86IEFycmF5PHsgU3RhdGlvbk5hbWU6IHN0cmluZywgSW5jZXB0aW9uOiBudW1iZXIsIExhdGl0dWRlOiBudW1iZXIsIExvbmdpdHVkZTogbnVtYmVyLCBEaXN0YW5jZTogbnVtYmVyLCBBc3NldE5hbWU6IHN0cmluZyB9PiwgV2luZG93OiBudW1iZXIgfSwge30+e1xyXG4gICAgbWFwOiBsZWFmbGV0Lk1hcDtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBSZXN1bHRzOiBudWxsLFxyXG4gICAgICAgICAgICBGYXVsdEluZm86IFtdLFxyXG4gICAgICAgICAgICBXaW5kb3c6IDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJvajQuZGVmcygnRVBTRzozODU3JywgXCIrdGl0bGU9V0dTIDg0IC8gUHNldWRvLU1lcmNhdG9yICtwcm9qPW1lcmMgK2E9NjM3ODEzNyArYj02Mzc4MTM3ICtsYXRfdHM9MC4wICtsb25fMD0wLjAgK3hfMD0wLjAgK3lfMD0wICtrPTEuMCArdW5pdHM9bSArbmFkZ3JpZHM9QG51bGwgK25vX2RlZnNcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEdldExpZ2h0bmluZ0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvR2V0TGlnaHRuaW5nSW5mby8ke3RoaXMuc3RhdGUuV2luZG93fWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy9jb25zdCBmYXVsdEluZm8gPSBhd2FpdCB0aGlzLkdldEZhdWx0SW5mbygpO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IEZhdWx0SW5mbzogZmF1bHRJbmZvIH0pO1xyXG4gICAgICAgIC8vY29uc3QgbGlnaHRuaW5nSW5mbyA9IGF3YWl0IHRoaXMuR2V0TGlnaHRuaW5nSW5mbygpO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IFJlc3VsdHM6IGxpZ2h0bmluZ0luZm8gfSk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBsZWFmbGV0Lm1hcCgnbWFwJywgeyBjZW50ZXI6IFszNSwgLTg1XSwgem9vbTogNyB9KTtcclxuICAgICAgICBsZWFmbGV0LmVzcmkuYmFzZW1hcExheWVyKCdHcmF5JykuYWRkVG8odGhpcy5tYXApO1xyXG5cclxuICAgICAgICAvL2xldCB0aW1lID0gbW9tZW50KGZhdWx0SW5mb1swXS5JbmNlcHRpb24pO1xyXG4gICAgICAgIC8vbGV0IHRpbWVzdHJpbmcgPSB0aW1lLnV0YygpLmZvcm1hdCgnWVlZWS1NTS1ERFRISCcpICsgJzonICsgKHRpbWUubWludXRlcygpIC0gdGltZS5taW51dGVzKCkgJSA1KS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvL3ZhciByYWRhcl9jdXJyZW50ID0gbGVhZmxldC50aWxlTGF5ZXIud21zKFwiaHR0cHM6Ly9tZXNvbmV0LmFncm9uLmlhc3RhdGUuZWR1L2NnaS1iaW4vd21zL25leHJhZC9uMHItdC5jZ2k/dGltZT1cIiArIHRpbWVzdHJpbmcgKyAnJicsIHtcclxuICAgICAgICAvLyAgICBsYXllcnM6ICduZXhyYWQtbjByLXdtc3QnLFxyXG4gICAgICAgIC8vICAgIGZvcm1hdDogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgLy8gICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgLy8gICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgIC8vICAgIGF0dHJpYnV0aW9uOiBcIldlYXRoZXIgZGF0YSDCqSAyMDE2IElFTSBOZXhyYWRcIixcclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAvL3RoaXMubWFwLmFkZExheWVyKHJhZGFyX2N1cnJlbnQpO1xyXG5cclxuICAgICAgICAvL2lmIChsaWdodG5pbmdJbmZvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICBsZXQgbGlnaHRuaW5nSWNvbiA9IGxlYWZsZXQuaWNvbih7XHJcbiAgICAgICAgLy8gICAgICAgIGljb25Vcmw6IGhvbWVQYXRoICsgJ0ltYWdlcy9saWdodG5pbmcucG5nJyxcclxuICAgICAgICAvLyAgICAgICAgaWNvblNpemU6IFsyMCwgMjVdXHJcbiAgICAgICAgLy8gICAgfSk7XHJcblxyXG4gICAgICAgIC8vICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlnaHRuaW5nSW5mby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICAgICBsZWFmbGV0Lm1hcmtlcihbbGlnaHRuaW5nSW5mb1tpXS5MYXRpdHVkZSwgbGlnaHRuaW5nSW5mb1tpXS5Mb25naXR1ZGVdLCB7IGljb246IGxpZ2h0bmluZ0ljb24gfSkuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuXHJcblxyXG4gICAgICAgIC8vaWYgKGZhdWx0SW5mby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgbGVhZmxldC5tYXJrZXIoW2ZhdWx0SW5mb1swXS5MYXRpdHVkZSwgZmF1bHRJbmZvWzBdLkxvbmdpdHVkZV0pLmFkZFRvKHRoaXMubWFwKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy8kLmFqYXgoe1xyXG4gICAgICAgIC8vICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgIC8vICAgIHVybDogYGh0dHA6Ly9wcS9hcmNnaXNwcm94eW5ldy9wcm94eS5hc2h4P2h0dHBzOi8vZ2lzLnR2YS5nb3YvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvRUdJU19UcmFuc21pc3Npb24vVHJhbnNtaXNzaW9uX0dyaWRfUmVzdHJpY3RlZF8yL01hcFNlcnZlci82L3F1ZXJ5P2AgKyBlbmNvZGVVUkkoYGY9anNvbiZ3aGVyZT1VUFBFUihMSU5FTkFNRSkgbGlrZSAnJSR7dGhpcy5zdGF0ZS5GYXVsdEluZm9bMF0uQXNzZXROYW1lLnRvVXBwZXJDYXNlKCl9JScmcmV0dXJuR2VvbWV0cnk9dHJ1ZSZvdXRmaWVscz1MSU5FTkFNRWApLFxyXG4gICAgICAgIC8vICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAvLyAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgYXN5bmM6IHRydWVcclxuXHJcblxyXG4gICAgICAgIC8vfSkuZG9uZShsaW5lR2VvbWV0ZXJpZXMgPT4ge1xyXG4gICAgICAgIC8vICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgLy8gICAgICAgIGY6ICdqc29uJyxcclxuICAgICAgICAvLyAgICAgICAgdW5pb25SZXN1bHRzOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICBnZW9kZXNpYzogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgIGRpc3RhbmNlczogMC41LFxyXG4gICAgICAgIC8vICAgICAgICBnZW9tZXRyaWVzOiBKU09OLnN0cmluZ2lmeSh7IGdlb21ldHJ5VHlwZTogXCJlc3JpR2VvbWV0cnlQb2x5bGluZVwiLCBnZW9tZXRyaWVzOiBKU09OLnBhcnNlKGxpbmVHZW9tZXRlcmllcykuZmVhdHVyZXMubWFwKGEgPT4gYS5nZW9tZXRyeSkgfSksXHJcbiAgICAgICAgLy8gICAgICAgIGluU1I6IDEwMjEwMCxcclxuICAgICAgICAvLyAgICAgICAgdW5pdDogOTA5M1xyXG4gICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgJC5hamF4KHtcclxuICAgICAgICAvLyAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIC8vICAgICAgICB1cmw6ICdodHRwOi8vcHEvYXJjZ2lzcHJveHluZXcvcHJveHkuYXNoeD9odHRwczovL2dpcy50dmEuZ292L2FyY2dpcy9yZXN0L3NlcnZpY2VzL1V0aWxpdGllcy9HZW9tZXRyeS9HZW9tZXRyeVNlcnZlci9idWZmZXInLFxyXG4gICAgICAgIC8vICAgICAgICBkYXRhOiBwYXJhbXMsXHJcbiAgICAgICAgLy8gICAgICAgIGRhdGFUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgLy8gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICAvLyAgICB9KS5hbHdheXMocnNwID0+IHtcclxuICAgICAgICAvLyAgICAgICAgbGV0IGJ1ZmZlciA9IGxlYWZsZXQuUHJvai5nZW9Kc29uKHRoaXMucG9seShKU09OLnBhcnNlKHJzcC5yZXNwb25zZVRleHQpLmdlb21ldHJpZXNbMF0pLCB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBzdHlsZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICByZXR1cm4geyBjb2xvcjogZmVhdHVyZS5wcm9wZXJ0aWVzLmNvbG9yLCBvcGFjaXR5OiBmZWF0dXJlLnByb3BlcnRpZXMub3BhY2l0eSB9O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgIGJ1ZmZlci5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgLy8gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhidWZmZXIuZ2V0Qm91bmRzKCkpO1xyXG4gICAgICAgIC8vICAgIH0pO1xyXG5cclxuICAgICAgICAvL30pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBvbHkoZ2VvbWV0cnkpOiBhbnkge1xyXG4gICAgICAgIHZhciBvdXRQdXQgPSB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vZmlyc3Qgd2UgY2hlY2sgZm9yIHNvbWUgZWFzeSBjYXNlcywgbGlrZSBpZiB0aGVpciBpcyBvbmx5IG9uZSByaW5nXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnJpbmdzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBvdXRQdXQuZmVhdHVyZXMucHVzaCh7IHR5cGU6ICdGZWF0dXJlJywgcHJvcGVydGllczogeyBjb2xvcjogJ2JsYWNrJywgb3BhY2l0eTogMSB9LCBnZW9tZXRyeTogeyBcInR5cGVcIjogXCJQb2x5Z29uXCIsIFwiY29vcmRpbmF0ZXNcIjogZ2VvbWV0cnkucmluZ3MgfSwgY3JzOiB7IHR5cGU6IFwibmFtZVwiLCBwcm9wZXJ0aWVzOiB7IG5hbWU6IFwiRVBTRzozODU3XCIgfSB9IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qaWYgaXQgaXNuJ3QgdGhhdCBlYXN5IHRoZW4gd2UgaGF2ZSB0byBzdGFydCBjaGVja2luZyByaW5nIGRpcmVjdGlvbiwgYmFzaWNhbGx5IHRoZSByaW5nIGdvZXMgY2xvY2t3aXNlIGl0cyBwYXJ0IG9mIHRoZSBwb2x5Z29uLCBpZiBpdCBnb2VzIGNvdW50ZXJjbG9ja3dpc2UgaXQgaXMgYSBob2xlIGluIHRoZSBwb2x5Z29uLCBidXQgZ2VvanNvbiBkb2VzIGl0IGJ5IGhhdmVpbmcgYW4gYXJyYXkgd2l0aCB0aGUgZmlyc3QgZWxlbWVudCBiZSB0aGUgcG9seWdvbnMgYW5kIHRoZSBuZXh0IGVsZW1lbnRzIGJlaW5nIGhvbGVzIGluIGl0Ki9cclxuICAgICAgICAgICAgdmFyIGNjYyA9IHRoaXMuZFAoZ2VvbWV0cnkucmluZ3MpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IGNjY1swXTtcclxuICAgICAgICAgICAgdmFyIGRkID0gY2NjWzFdO1xyXG4gICAgICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoZGQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvKmlmIHRoZWlyIGFyZSBubyBob2xlcyB3ZSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoaXMsIGJ1dCBkbyBuZWVkIHRvIHN0dWNrIGVhY2ggcmluZyBpbnNpZGUgaXRzIG93biBhcnJheSovXHJcbiAgICAgICAgICAgICAgICB2YXIgbDIgPSBkLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHZhciBpMyA9IDA7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobDIgPiBpMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHIucHVzaChbZFtpM11dKTtcclxuICAgICAgICAgICAgICAgICAgICBpMysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3V0UHV0LmZlYXR1cmVzLnB1c2goeyB0eXBlOiAnRmVhdHVyZScsIHByb3BlcnRpZXM6IHsgY29sb3I6ICdibGFjaycsIG9wYWNpdHk6IDEgfSwgZ2VvbWV0cnk6IHsgXCJ0eXBlXCI6IFwiTXVsdGlQb2x5Z29uXCIsIFwiY29vcmRpbmF0ZXNcIjogciB9LCBjcnM6IHsgdHlwZTogXCJuYW1lXCIsIHByb3BlcnRpZXM6IHsgbmFtZTogXCJFUFNHOjM4NTdcIiB9IH0gfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8qaWYgdGhlaXIgaXMgb25seSBvbmUgY2xvY2t3aXNlIHJpbmcgdGhlbiB3ZSBrbm93IGFsbCBob2xlcyBhcmUgaW4gdGhhdCBwb2x5Ki9cclxuICAgICAgICAgICAgICAgIGRkLnVuc2hpZnQoZFswXSk7XHJcbiAgICAgICAgICAgICAgICBvdXRQdXQuZmVhdHVyZXMucHVzaCh7IHR5cGU6ICdGZWF0dXJlJywgcHJvcGVydGllczogeyBjb2xvcjogJ2JsYWNrJywgb3BhY2l0eTogMSB9LCBnZW9tZXRyeTogeyBcInR5cGVcIjogXCJQb2x5Z29uXCIsIFwiY29vcmRpbmF0ZXNcIjogZGQgfSwgY3JzOiB7IHR5cGU6IFwibmFtZVwiLCBwcm9wZXJ0aWVzOiB7IG5hbWU6IFwiRVBTRzozODU3XCIgfSB9IH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8qaWYgdGhlaXIgYXJlIG11bHRpcGxlIHJpbmdzIGFuZCBob2xlcyB3ZSBoYXZlIG5vIHdheSBvZiBrbm93aW5nIHdoaWNoIGJlbG9uZyB0byB3aGljaCB3aXRob3V0IGxvb2tpbmcgYXQgaXQgc3BlY2lhbGx5LCBzbyBqdXN0IGR1bXAgdGhlIGNvb3JkaW5hdGVzIGFuZCBhZGQgIGEgaG9sZSBmaWVsZCwgdGhpcyBtYXkgY2F1c2UgZXJyb3JzKi9cclxuICAgICAgICAgICAgICAgIG91dFB1dC5mZWF0dXJlcy5wdXNoKHsgdHlwZTogJ0ZlYXR1cmUnLCBwcm9wZXJ0aWVzOiB7IGNvbG9yOiAnYmxhY2snLCBvcGFjaXR5OiAxIH0sIGdlb21ldHJ5OiB7IFwidHlwZVwiOiBcIk11bHRpUG9seWdvblwiLCBcImNvb3JkaW5hdGVzXCI6IGQsIFwiaG9sZXNcIjogZGQgfSwgY3JzOiB7IHR5cGU6IFwibmFtZVwiLCBwcm9wZXJ0aWVzOiB7IG5hbWU6IFwiRVBTRzozODU3XCIgfSB9IH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dFB1dFxyXG4gICAgfVxyXG5cclxuICAgIGRQKGEpIHtcclxuICAgICAgICAvL3JldHVybnMgYW4gYXJyYXkgb2YgMiBhcnJheXMsIHRoZSBmaXJzdCBiZWluZyBhbGwgdGhlIGNsb2Nrd2lzZSBvbmVzLCB0aGUgc2Vjb25kIGNvdW50ZXIgY2xvY2t3aXNlXHJcbiAgICAgICAgdmFyIGQgPSBbXTtcclxuICAgICAgICB2YXIgZGQgPSBbXTtcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGwgPiBpaSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jKGFbaWldKSkge1xyXG4gICAgICAgICAgICAgICAgZC5wdXNoKGFbaWldKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRkLnB1c2goYVtpaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbZCwgZGRdO1xyXG4gICAgfVxyXG5cclxuICAgIGMoYSkge1xyXG4gICAgICAgIC8vcmV0dXJuIHRydWUgaWYgY2xvY2t3aXNlXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBvID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGwgPiBpKSB7XHJcbiAgICAgICAgICAgIG8gKz0gKGFbaV1bMF0gKiBhW2kgKyAxXVsxXSAtIGFbaSArIDFdWzBdICogYVtpXVsxXSk7XHJcblxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZXBzZzM4NTdUb0xhdExvbmcoYTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIGxldCBlID0gMi43MTgyODE4Mjg0O1xyXG4gICAgICAgIGxldCB4ID0gMjAwMzc1MDguMzQ7XHJcblxyXG4gICAgICAgIGxldCBsb24gPSBhWzFdICogMTgwIC8geDtcclxuICAgICAgICBsZXQgbGF0ID0gYVswXSAqIHggLyAxODA7XHJcbiAgICAgICAgbGF0ID0gTWF0aC5hdGFuKE1hdGguRSBeIChNYXRoLlBJICogbGF0IC8gMTgwKSkgLyAoTWF0aC5QSSAvIDM2MCkgLSA5MDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtsYXQsIGxvbl07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5FU1JJIE1hcDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OiB0aGlzLnByb3BzLkhlaWdodCAtIDkwLCB3aWR0aDogdGhpcy5wcm9wcy5XaWR0aCAtIDQwLCBwYWRkaW5nOiA1LCBib3JkZXI6ICdzb2xpZCAxcHggZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgd2lkdGg6IDEwMCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgekluZGV4OiAxMDAwLCB0b3A6IDEwLCByaWdodDogMTAgfX0gdmFsdWU9e3RoaXMuc3RhdGUuV2luZG93fSBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy5zZXRTdGF0ZSh7IFdpbmRvdzogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSwgKCkgPT4gdGhpcy5jb21wb25lbnREaWRNb3VudCgpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPisvLSAyIHNlYzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj4rLy0gNSBzZWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPisvLSAxMCBzZWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMFwiPisvLSAyMCBzZWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzMFwiPisvLSAzMCBzZWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2MFwiPisvLSA2MCBzZWM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMyAtIDQ1LCBvdmVyZmxvd1k6IFwiYXV0b1wiIH19IGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLlJlc3VsdHMgPT0gbnVsbCA/IDxzcGFuPlNlYXJjaGluZy4uLjwvc3Bhbj4gOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLlJlc3VsdHMgIT0gbnVsbCAmJiB0aGlzLnN0YXRlLlJlc3VsdHMubGVuZ3RoID09IDAgPyA8c3Bhbj5ObyBMaWdodG5pbmcgUmVjb3JkcyBGb3VuZDwvc3Bhbj4gOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLlJlc3VsdHMgIT0gbnVsbCAmJiB0aGlzLnN0YXRlLlJlc3VsdHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIiBzdHlsZT17eyBtYXhIZWlnaHQ6ICdjYWxjKDMwJSAtIDUwcHgpJywgaGVpZ2h0OiAnY2FsYygzMCUgLSA1MHB4KScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+e09iamVjdC5rZXlzKHRoaXMuc3RhdGUuUmVzdWx0c1swXSkubWFwKChhdHRyLCBpbmRleCkgPT4gPHRoIGtleT17aW5kZXh9PnthdHRyfTwvdGg+KX08L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5SZXN1bHRzLm1hcCgocmVzdWx0LCBpbmRleCkgPT4gPHRyIGtleT17aW5kZXh9PntPYmplY3Qua2V5cyhyZXN1bHQpLm1hcCgoYXR0cmlidXRlLCBpKSA9PiA8dGQga2V5PXtpfT57cmVzdWx0W2F0dHJpYnV0ZV19PC90ZD4pfTwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTGlnaHRuaW5nLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUFFEaWdlc3QsIE9wZW5YREEgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcbmltcG9ydCB7IEV4cG9ydFRvQ3N2IH0gZnJvbSAnLi4vRXhwb3J0Q1NWJztcclxuaW1wb3J0IE11bHRpU2VsZWN0IGZyb20gJy4uL011bHRpU2VsZWN0JztcclxuaW1wb3J0IEVTUklNYXAsIHsgRVNSSU1hcDIgfSBmcm9tICcuL0VTUklNYXAnO1xyXG5cclxudHlwZSBUb2xlcmFuY2VVbml0ID0gJ01pbnV0ZScgfCAnSG91cicgfCAnRGF5JyB8ICdXZWVrJyB8ICdNb250aCcgfCAnWWVhcic7XHJcbmNvbnN0IExpZ2h0bmluZyA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHFzID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLnN0YXJ0RGF0ZSA9PSB1bmRlZmluZWQgPyBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tXCIpIDogcXMuZGF0ZSlcclxuICAgIGNvbnN0IFt0b2xlcmFuY2UsIHNldFRvbGVyYW5jZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLnRvbGVyYW5jZSA9PSB1bmRlZmluZWQgPyAxIDogcGFyc2VJbnQocXMudG9sZXJhbmNlIGFzIHN0cmluZykpXHJcbiAgICBjb25zdCBbdG9sZXJhbmNlVW5pdHMsIHNldFRvbGVyYW5jZVVuaXRzXSA9IFJlYWN0LnVzZVN0YXRlPFRvbGVyYW5jZVVuaXQ+KHFzLnRvbGVyYW5jZVVuaXRzID09IHVuZGVmaW5lZCA/ICdNaW51dGUnIDogcXMudG9sZXJhbmNlVW5pdHMgYXMgVG9sZXJhbmNlVW5pdClcclxuICAgIGNvbnN0IFtyYWRpdXMsIHNldFJhZGl1c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLnJhZGl1cyA9PSB1bmRlZmluZWQgPyAxIDogcGFyc2VJbnQocXMucmFkaXVzIGFzIHN0cmluZykpXHJcblxyXG4gICAgY29uc3QgW21ldGVycywgc2V0TWV0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuTWV0ZXJbXT4oW10pO1xyXG4gICAgY29uc3QgW3N0cmlrZXMsIHNldFN0cmlrZXNdID0gUmVhY3QudXNlU3RhdGU8YW55W10+KFtdKTtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBPcGVuWERBLkV2ZW50U2VhcmNoPignU3RhcnRUaW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL2xldCBoYW5kbGUxID0gR2V0VHlwZXMoKTtcclxuICAgICAgICAvL2hhbmRsZTEuZG9uZSgoZGF0YTogT3BlblhEQS5FdmVudFR5cGVbXSkgPT4ge1xyXG4gICAgICAgIC8vICAgIGxldCBiNjRzdHJpbmcgPSAocXMudHlwZXMgPT0gdW5kZWZpbmVkID8gJycgOiBxcy50eXBlcylcclxuICAgICAgICAvLyAgICBsZXQgaWRzID0gYXRvYihiNjRzdHJpbmcgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcChhID0+IHBhcnNlSW50KGEpKVxyXG4gICAgICAgIC8vICAgIGlmIChxcy50eXBlcyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgLy8gICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IHRydWUpXHJcbiAgICAgICAgLy8gICAgZWxzZVxyXG4gICAgICAgIC8vICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSBpZHMuaW5kZXhPZih2YWx1ZS5JRCkgPj0gMClcclxuXHJcbiAgICAgICAgLy8gICAgc2V0VHlwZXMoZGF0YSk7XHJcbiAgICAgICAgLy99KTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBHZXRNZXRlcnMoKTtcclxuICAgICAgICBoYW5kbGUyLmRvbmUoKGRhdGE6IE9wZW5YREEuTWV0ZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYjY0c3RyaW5nID0gKHFzLm1ldGVycyA9PSB1bmRlZmluZWQgPyAnJyA6IHFzLm1ldGVycylcclxuICAgICAgICAgICAgbGV0IGlkcyA9IGF0b2IoYjY0c3RyaW5nIGFzIHN0cmluZykuc3BsaXQoJywnKS5tYXAoYSA9PiBwYXJzZUludChhKSlcclxuICAgICAgICAgICAgaWYgKHFzLm1ldGVycyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSB0cnVlKVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSBpZHMuaW5kZXhPZih2YWx1ZS5JRCkgPj0gMClcclxuXHJcbiAgICAgICAgICAgIHNldE1ldGVycyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9pZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuTWV0ZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL01ldGVyYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IDc1LCBtYXJnaW46IDUgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiA3NSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcgfX0+TWV0ZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdCBPcHRpb25zPXttZXRlcnMubWFwKHQgPT4gT2JqZWN0LmNyZWF0ZSh7IFRleHQ6IHQuTmFtZSwgVmFsdWU6IHQuSUQsIFNlbGVjdGVkOiB0LlNlbGVjdGVkIH0pKX0gT25DaGFuZ2U9eyhldnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld01ldGVycyA9IF8uY2xvbmVEZWVwKG1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWV0ZXJzLmZpbmQobWV0ZXIgPT4gbWV0ZXIuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVycyhuZXdNZXRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZm9ybS1jb250cm9sXCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4JyB9fT5EYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZGF0ZX0gdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgb25DaGFuZ2U9e2UgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvcm0tY29udHJvbFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcgfX0+VG9sZXJhbmNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dG9sZXJhbmNlfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2UgPT4gc2V0VG9sZXJhbmNlKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0b2xlcmFuY2VVbml0c30gb25DaGFuZ2U9e2UgPT4gc2V0VG9sZXJhbmNlVW5pdHMoZS50YXJnZXQudmFsdWUgYXMgVG9sZXJhbmNlVW5pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNaW51dGUnPk1pbnV0ZShzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdIb3VyJz5Ib3VyKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0RheSc+RGF5KHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1dlZWsnPldlZWsocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTW9udGgnPk1vbnRoKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1llYXInPlllYXIocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb3JtLWNvbnRyb2xcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnIH19PlJhZGl1cyAobWkpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmFkaXVzfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2UgPT4gc2V0UmFkaXVzKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiBcImNhbGMoMTAwJSAtIDgwcHgpXCIsIG1hcmdpbjogJzVweCA1cHggNXB4IDVweCAnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDBweCAwcHggM3B4Jywgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkV2ZW50IFByZXZpZXc8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjI2LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVTUklNYXAgRGF0ZVRpbWU9e2RhdGV9IFRvbGVyYW5jZT17dG9sZXJhbmNlfSBUb2xlcmFuY2VVbml0PXt0b2xlcmFuY2VVbml0c30gUmFkaXVzPXtyYWRpdXN9IFN0cmlrZXM9e3N0cmlrZXN9IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCkgLSAyMjZ9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFU1JJTWFwMiBEYXRlVGltZT17ZGF0ZX0gVG9sZXJhbmNlPXt0b2xlcmFuY2V9IFRvbGVyYW5jZVVuaXQ9e3RvbGVyYW5jZVVuaXRzfSBSYWRpdXM9e3JhZGl1c30gU3RyaWtlcz17c3RyaWtlc30gSGVpZ2h0PXsod2luZG93LmlubmVySGVpZ2h0KSAtIDIyNn0gV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMn0+PGRpdj5IZWxsbyBXb3JsZCE8L2Rpdj48L0VTUklNYXAyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmlrZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogNSwgcmlnaHQ6IDUgfX0gb25DbGljaz17KCkgPT4gRXhwb3J0VG9Dc3Yoc3RyaWtlcywgJ0V2ZW50U2VhcmNoLmNzdicpfT5FeHBvcnQgQ1NWPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCkgLSAyNzUsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE9wZW5YREEuRXZlbnRTZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnU3RhcnRUaW1lJywgbGFiZWw6ICdEYXRlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcyNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gbW9tZW50KGl0ZW1ba2V5XSkuZm9ybWF0KCdNTS9ERC9ZWVlZIEhIOm1tOnNzJykgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veyBrZXk6ICdTdGFydFRpbWUnLCBsYWJlbDogJ1RpbWUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IG1vbWVudChpdGVtW2tleV0pLmZvcm1hdCgnSEg6bW06c3MnKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNZXRlck5hbWUnLCBsYWJlbDogJ01ldGVyJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRXZlbnRUeXBlJywgbGFiZWw6ICdUeXBlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1BlclVuaXRNYWduaXR1ZGUnLCBsYWJlbDogJ01hZyAocHUpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gKGl0ZW1ba2V5XSBhcyBudW1iZXIpLnRvRml4ZWQoMikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRHVyYXRpb25TZWNvbmRzJywgbGFiZWw6ICdEdXIgKHMpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gKGl0ZW1ba2V5XSBhcyBudW1iZXIpLnRvRml4ZWQoMikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtzdHJpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17KGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmNvbCA9PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShzdHJpa2VzLCBbc29ydEZpZWxkXSwgWyghYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RyaWtlcyhvcmRlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlcmVkID0gXy5vcmRlckJ5KHN0cmlrZXMsIFtkLmNvbF0sIFsoYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RyaWtlcyhvcmRlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogaW5uZXJIZWlnaHQgLSAzMDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpZ2h0bmluZzsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTXVsdGlTZWxlY3QudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzE3LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTXVsdGlTZWxlY3QgPSAocHJvcHM6IHsgT3B0aW9uczogeyBWYWx1ZTogbnVtYmVyLCBUZXh0OiBzdHJpbmcsIFNlbGVjdGVkOiBib29sZWFuIH1bXSwgT25DaGFuZ2U6IChldnQ6IGFueSwgT3B0aW9uczogeyBWYWx1ZTogbnVtYmVyLCBUZXh0OiBzdHJpbmcsIFNlbGVjdGVkOiBib29sZWFuIH1bXSkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBtdWx0aVNlbGVjdCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVTaG93KGV2dCkge1xyXG4gICAgICAgIGlmICghbXVsdGlTZWxlY3QuY3VycmVudC5jb250YWlucyhldnQudGFyZ2V0KSlcclxuICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZXRTaG93KHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLk9wdGlvbnNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIEhhbmRsZVNob3csIGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXttdWx0aVNlbGVjdH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjY2VkNGRhJywgcGFkZGluZzogJy4zNzVyZW0gLjc1cmVtJywgZm9udFNpemU6ICcxcmVtJywgYm9yZGVyUmFkaXVzOiAnLjI1cmVtJyB9fSBjbGFzc05hbWU9XCJidG4gZm9ybS1jb250cm9sIGRyb3Bkb3duLXRvZ2dsZVwiIG9uQ2xpY2s9e0hhbmRsZVNob3d9Pntwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCAhPSBwcm9wcy5PcHRpb25zLmxlbmd0aCA/IHByb3BzLk9wdGlvbnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubGVuZ3RoIDogJ0FsbCAnfSBTZWxlY3RlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0ICogLjc1LCBvdmVyZmxvd1k6ICdhdXRvJywgcGFkZGluZzogJzEwIDUnLCBkaXNwbGF5OiBzaG93ID8gJ2Jsb2NrJyA6ICdub25lJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCBib3hTaGFkb3c6ICcwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKScsIHpJbmRleDogMSB9fT5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJyBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk9uQ2hhbmdlKGV2dCwgcHJvcHMuT3B0aW9ucy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkID09IChwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9wcy5PcHRpb25zLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PSBwcm9wcy5PcHRpb25zLmxlbmd0aH0gb25DaGFuZ2U9eygpID0+IG51bGx9IC8+PC90ZD48dGQ+QWxsPC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuT3B0aW9ucy5tYXAoKGYsIGkpID0+IDx0ciBrZXk9e2l9IG9uQ2xpY2s9eyhldnQpID0+IHByb3BzLk9uQ2hhbmdlKGV2dCwgW2ZdKX0+PHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtmLlNlbGVjdGVkfSBvbkNoYW5nZT17KCkgPT4gbnVsbH0gLz48L3RkPjx0ZD57Zi5UZXh0fTwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpU2VsZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=