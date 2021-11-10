(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["EventSearch"],{

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

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../node_modules/moment/locale/af.js",
	"./af.js": "../node_modules/moment/locale/af.js",
	"./ar": "../node_modules/moment/locale/ar.js",
	"./ar-dz": "../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../node_modules/moment/locale/ar.js",
	"./az": "../node_modules/moment/locale/az.js",
	"./az.js": "../node_modules/moment/locale/az.js",
	"./be": "../node_modules/moment/locale/be.js",
	"./be.js": "../node_modules/moment/locale/be.js",
	"./bg": "../node_modules/moment/locale/bg.js",
	"./bg.js": "../node_modules/moment/locale/bg.js",
	"./bm": "../node_modules/moment/locale/bm.js",
	"./bm.js": "../node_modules/moment/locale/bm.js",
	"./bn": "../node_modules/moment/locale/bn.js",
	"./bn.js": "../node_modules/moment/locale/bn.js",
	"./bo": "../node_modules/moment/locale/bo.js",
	"./bo.js": "../node_modules/moment/locale/bo.js",
	"./br": "../node_modules/moment/locale/br.js",
	"./br.js": "../node_modules/moment/locale/br.js",
	"./bs": "../node_modules/moment/locale/bs.js",
	"./bs.js": "../node_modules/moment/locale/bs.js",
	"./ca": "../node_modules/moment/locale/ca.js",
	"./ca.js": "../node_modules/moment/locale/ca.js",
	"./cs": "../node_modules/moment/locale/cs.js",
	"./cs.js": "../node_modules/moment/locale/cs.js",
	"./cv": "../node_modules/moment/locale/cv.js",
	"./cv.js": "../node_modules/moment/locale/cv.js",
	"./cy": "../node_modules/moment/locale/cy.js",
	"./cy.js": "../node_modules/moment/locale/cy.js",
	"./da": "../node_modules/moment/locale/da.js",
	"./da.js": "../node_modules/moment/locale/da.js",
	"./de": "../node_modules/moment/locale/de.js",
	"./de-at": "../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../node_modules/moment/locale/de-at.js",
	"./de-ch": "../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../node_modules/moment/locale/de-ch.js",
	"./de.js": "../node_modules/moment/locale/de.js",
	"./dv": "../node_modules/moment/locale/dv.js",
	"./dv.js": "../node_modules/moment/locale/dv.js",
	"./el": "../node_modules/moment/locale/el.js",
	"./el.js": "../node_modules/moment/locale/el.js",
	"./en-SG": "../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../node_modules/moment/locale/en-SG.js",
	"./en-au": "../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../node_modules/moment/locale/en-au.js",
	"./en-ca": "../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../node_modules/moment/locale/en-ie.js",
	"./en-il": "../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../node_modules/moment/locale/en-il.js",
	"./en-nz": "../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../node_modules/moment/locale/en-nz.js",
	"./eo": "../node_modules/moment/locale/eo.js",
	"./eo.js": "../node_modules/moment/locale/eo.js",
	"./es": "../node_modules/moment/locale/es.js",
	"./es-do": "../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../node_modules/moment/locale/es-do.js",
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./es.js": "../node_modules/moment/locale/es.js",
	"./et": "../node_modules/moment/locale/et.js",
	"./et.js": "../node_modules/moment/locale/et.js",
	"./eu": "../node_modules/moment/locale/eu.js",
	"./eu.js": "../node_modules/moment/locale/eu.js",
	"./fa": "../node_modules/moment/locale/fa.js",
	"./fa.js": "../node_modules/moment/locale/fa.js",
	"./fi": "../node_modules/moment/locale/fi.js",
	"./fi.js": "../node_modules/moment/locale/fi.js",
	"./fo": "../node_modules/moment/locale/fo.js",
	"./fo.js": "../node_modules/moment/locale/fo.js",
	"./fr": "../node_modules/moment/locale/fr.js",
	"./fr-ca": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../node_modules/moment/locale/fr.js",
	"./fy": "../node_modules/moment/locale/fy.js",
	"./fy.js": "../node_modules/moment/locale/fy.js",
	"./ga": "../node_modules/moment/locale/ga.js",
	"./ga.js": "../node_modules/moment/locale/ga.js",
	"./gd": "../node_modules/moment/locale/gd.js",
	"./gd.js": "../node_modules/moment/locale/gd.js",
	"./gl": "../node_modules/moment/locale/gl.js",
	"./gl.js": "../node_modules/moment/locale/gl.js",
	"./gom-latn": "../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../node_modules/moment/locale/gom-latn.js",
	"./gu": "../node_modules/moment/locale/gu.js",
	"./gu.js": "../node_modules/moment/locale/gu.js",
	"./he": "../node_modules/moment/locale/he.js",
	"./he.js": "../node_modules/moment/locale/he.js",
	"./hi": "../node_modules/moment/locale/hi.js",
	"./hi.js": "../node_modules/moment/locale/hi.js",
	"./hr": "../node_modules/moment/locale/hr.js",
	"./hr.js": "../node_modules/moment/locale/hr.js",
	"./hu": "../node_modules/moment/locale/hu.js",
	"./hu.js": "../node_modules/moment/locale/hu.js",
	"./hy-am": "../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../node_modules/moment/locale/hy-am.js",
	"./id": "../node_modules/moment/locale/id.js",
	"./id.js": "../node_modules/moment/locale/id.js",
	"./is": "../node_modules/moment/locale/is.js",
	"./is.js": "../node_modules/moment/locale/is.js",
	"./it": "../node_modules/moment/locale/it.js",
	"./it-ch": "../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../node_modules/moment/locale/it-ch.js",
	"./it.js": "../node_modules/moment/locale/it.js",
	"./ja": "../node_modules/moment/locale/ja.js",
	"./ja.js": "../node_modules/moment/locale/ja.js",
	"./jv": "../node_modules/moment/locale/jv.js",
	"./jv.js": "../node_modules/moment/locale/jv.js",
	"./ka": "../node_modules/moment/locale/ka.js",
	"./ka.js": "../node_modules/moment/locale/ka.js",
	"./kk": "../node_modules/moment/locale/kk.js",
	"./kk.js": "../node_modules/moment/locale/kk.js",
	"./km": "../node_modules/moment/locale/km.js",
	"./km.js": "../node_modules/moment/locale/km.js",
	"./kn": "../node_modules/moment/locale/kn.js",
	"./kn.js": "../node_modules/moment/locale/kn.js",
	"./ko": "../node_modules/moment/locale/ko.js",
	"./ko.js": "../node_modules/moment/locale/ko.js",
	"./ku": "../node_modules/moment/locale/ku.js",
	"./ku.js": "../node_modules/moment/locale/ku.js",
	"./ky": "../node_modules/moment/locale/ky.js",
	"./ky.js": "../node_modules/moment/locale/ky.js",
	"./lb": "../node_modules/moment/locale/lb.js",
	"./lb.js": "../node_modules/moment/locale/lb.js",
	"./lo": "../node_modules/moment/locale/lo.js",
	"./lo.js": "../node_modules/moment/locale/lo.js",
	"./lt": "../node_modules/moment/locale/lt.js",
	"./lt.js": "../node_modules/moment/locale/lt.js",
	"./lv": "../node_modules/moment/locale/lv.js",
	"./lv.js": "../node_modules/moment/locale/lv.js",
	"./me": "../node_modules/moment/locale/me.js",
	"./me.js": "../node_modules/moment/locale/me.js",
	"./mi": "../node_modules/moment/locale/mi.js",
	"./mi.js": "../node_modules/moment/locale/mi.js",
	"./mk": "../node_modules/moment/locale/mk.js",
	"./mk.js": "../node_modules/moment/locale/mk.js",
	"./ml": "../node_modules/moment/locale/ml.js",
	"./ml.js": "../node_modules/moment/locale/ml.js",
	"./mn": "../node_modules/moment/locale/mn.js",
	"./mn.js": "../node_modules/moment/locale/mn.js",
	"./mr": "../node_modules/moment/locale/mr.js",
	"./mr.js": "../node_modules/moment/locale/mr.js",
	"./ms": "../node_modules/moment/locale/ms.js",
	"./ms-my": "../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../node_modules/moment/locale/ms.js",
	"./mt": "../node_modules/moment/locale/mt.js",
	"./mt.js": "../node_modules/moment/locale/mt.js",
	"./my": "../node_modules/moment/locale/my.js",
	"./my.js": "../node_modules/moment/locale/my.js",
	"./nb": "../node_modules/moment/locale/nb.js",
	"./nb.js": "../node_modules/moment/locale/nb.js",
	"./ne": "../node_modules/moment/locale/ne.js",
	"./ne.js": "../node_modules/moment/locale/ne.js",
	"./nl": "../node_modules/moment/locale/nl.js",
	"./nl-be": "../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../node_modules/moment/locale/nl.js",
	"./nn": "../node_modules/moment/locale/nn.js",
	"./nn.js": "../node_modules/moment/locale/nn.js",
	"./pa-in": "../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../node_modules/moment/locale/pa-in.js",
	"./pl": "../node_modules/moment/locale/pl.js",
	"./pl.js": "../node_modules/moment/locale/pl.js",
	"./pt": "../node_modules/moment/locale/pt.js",
	"./pt-br": "../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../node_modules/moment/locale/pt.js",
	"./ro": "../node_modules/moment/locale/ro.js",
	"./ro.js": "../node_modules/moment/locale/ro.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js",
	"./sd": "../node_modules/moment/locale/sd.js",
	"./sd.js": "../node_modules/moment/locale/sd.js",
	"./se": "../node_modules/moment/locale/se.js",
	"./se.js": "../node_modules/moment/locale/se.js",
	"./si": "../node_modules/moment/locale/si.js",
	"./si.js": "../node_modules/moment/locale/si.js",
	"./sk": "../node_modules/moment/locale/sk.js",
	"./sk.js": "../node_modules/moment/locale/sk.js",
	"./sl": "../node_modules/moment/locale/sl.js",
	"./sl.js": "../node_modules/moment/locale/sl.js",
	"./sq": "../node_modules/moment/locale/sq.js",
	"./sq.js": "../node_modules/moment/locale/sq.js",
	"./sr": "../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../node_modules/moment/locale/sr.js",
	"./ss": "../node_modules/moment/locale/ss.js",
	"./ss.js": "../node_modules/moment/locale/ss.js",
	"./sv": "../node_modules/moment/locale/sv.js",
	"./sv.js": "../node_modules/moment/locale/sv.js",
	"./sw": "../node_modules/moment/locale/sw.js",
	"./sw.js": "../node_modules/moment/locale/sw.js",
	"./ta": "../node_modules/moment/locale/ta.js",
	"./ta.js": "../node_modules/moment/locale/ta.js",
	"./te": "../node_modules/moment/locale/te.js",
	"./te.js": "../node_modules/moment/locale/te.js",
	"./tet": "../node_modules/moment/locale/tet.js",
	"./tet.js": "../node_modules/moment/locale/tet.js",
	"./tg": "../node_modules/moment/locale/tg.js",
	"./tg.js": "../node_modules/moment/locale/tg.js",
	"./th": "../node_modules/moment/locale/th.js",
	"./th.js": "../node_modules/moment/locale/th.js",
	"./tl-ph": "../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../node_modules/moment/locale/tlh.js",
	"./tr": "../node_modules/moment/locale/tr.js",
	"./tr.js": "../node_modules/moment/locale/tr.js",
	"./tzl": "../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../node_modules/moment/locale/tzl.js",
	"./tzm": "../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../node_modules/moment/locale/ug-cn.js",
	"./uk": "../node_modules/moment/locale/uk.js",
	"./uk.js": "../node_modules/moment/locale/uk.js",
	"./ur": "../node_modules/moment/locale/ur.js",
	"./ur.js": "../node_modules/moment/locale/ur.js",
	"./uz": "../node_modules/moment/locale/uz.js",
	"./uz-latn": "../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../node_modules/moment/locale/uz.js",
	"./vi": "../node_modules/moment/locale/vi.js",
	"./vi.js": "../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../node_modules/moment/locale/yo.js",
	"./yo.js": "../node_modules/moment/locale/yo.js",
	"./zh-cn": "../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./tsx/EventSearch/EventSearch.tsx":
/*!*****************************************!*\
  !*** ./tsx/EventSearch/EventSearch.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventSearch_EventSearchPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventSearch/EventSearchPreview */ "./tsx/EventSearch/EventSearchPreview.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history */ "../node_modules/history/es/index.js");
/* harmony import */ var _ExportCSV__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ExportCSV */ "./tsx/ExportCSV.tsx");
/* harmony import */ var _MagDurChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MagDurChart */ "./tsx/MagDurChart.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
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
//******************************************************************************************************
//  EventSearch.tsx - Gbtc
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










var EventSearch = function (props) {
    var _a;
    var history = Object(history__WEBPACK_IMPORTED_MODULE_6__["createBrowserHistory"])();
    var qs = querystring__WEBPACK_IMPORTED_MODULE_5___default.a.parse(location.search.substring(1));
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), types = _b[0], setTypes = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.startDate == undefined ? moment__WEBPACK_IMPORTED_MODULE_9___default()().subtract(30, 'days').format("YYYY-MM-DD") : qs.startDate), 2), startDate = _c[0], setStartDate = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.endDate == undefined ? moment__WEBPACK_IMPORTED_MODULE_9___default()().format("YYYY-MM-DD") : qs.endDate), 2), endDate = _d[0], setEndDate = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), meters = _e[0], setMeters = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.returnLimit == undefined ? 100 : parseInt(qs.returnLimit)), 2), returnLimit = _f[0], setReturnLimit = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), events = _g[0], setEvents = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0), 2), eventCounts = _h[0], setEventCounts = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('StartTime'), 2), sortField = _j[0], setSortField = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), ascending = _k[0], setAscending = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.eventID == undefined ? 0 : parseInt(qs.eventID)), 2), eventID = _l[0], setEventID = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), showEventList = _m[0], setShowEventList = _m[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle1 = GetTypes();
        handle1.done(function (data) {
            var b64string = (qs.types == undefined ? '' : qs.types);
            var ids = atob(b64string).split(',').map(function (a) { return parseInt(a); });
            if (qs.types == undefined)
                data.forEach(function (value) { return value.Selected = true; });
            else
                data.forEach(function (value) { return value.Selected = ids.indexOf(value.ID) >= 0; });
            setTypes(data);
        });
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
            if (handle1.abort != undefined)
                handle1.abort();
            if (handle2.abort != undefined)
                handle2.abort();
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (meters.length == 0 || types.length == 0)
            return;
        history.push({ pathname: homePath + 'EventSearch', search: "?eventID=" + eventID + "&startDate=" + startDate + "&endDate=" + endDate + "&returnLimit=" + returnLimit + "&types=" + btoa(types.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; }).toString()) + "&meters=" + btoa(meters.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; }).toString()) });
        var handle1 = GetEventSearch();
        handle1.done(function (data) {
            setEvents(data);
        });
        var handle2 = GetEventSearchCount();
        handle2.done(function (data) {
            setEventCounts(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
            if (handle2.abort != undefined)
                handle2.abort();
        };
    }, [types, startDate, endDate, meters, returnLimit, sortField, ascending]);
    function GetTypes() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/EventType",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
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
    function GetEventSearch() {
        return $.ajax({
            type: "POST",
            url: homePath + "api/OpenXDA/EventSearch",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                StartDate: startDate,
                EndDate: endDate,
                Count: returnLimit,
                SortField: sortField,
                Ascending: ascending,
                Meters: meters.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; }),
                Types: types.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; })
            }),
            cache: true,
            async: true
        });
    }
    function GetEventSearchCount() {
        return $.ajax({
            type: "POST",
            url: homePath + "api/OpenXDA/EventSearch/count",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify({
                StartDate: startDate,
                EndDate: endDate,
                Count: returnLimit,
                SortField: sortField,
                Ascending: ascending,
                Meters: meters.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; }),
                Types: types.filter(function (x) { return x.Selected; }).map(function (x) { return x.ID; })
            }),
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
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Return #"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: returnLimit, className: "form-control", onChange: function (e) { return setReturnLimit(parseInt(e.target.value)); } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "100"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "250"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "500"),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "1000"))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Meters"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["MultiCheckBoxSelect"], { Options: meters.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                                var newMeters = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(meters);
                                                $.each(options, function (index, option) {
                                                    newMeters.find(function (meter) { return meter.ID == option.Value; }).Selected = !option.Selected;
                                                });
                                                setMeters(newMeters);
                                            } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Type"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["MultiCheckBoxSelect"], { Options: types.map(function (t) { return Object.create({ Text: t.Name, Value: t.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                                var newTypes = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(types);
                                                $.each(options, function (index, option) {
                                                    newTypes.find(function (type) { return type.ID == option.Value; }).Selected = !option.Selected;
                                                });
                                                setTypes(newTypes);
                                            } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "Start Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: startDate, type: "date", onChange: function (e) { return setStartDate(e.target.value); } })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-control text-right", style: { border: '0px', width: 100 } }, "End Date"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control", value: endDate, type: "date", onChange: function (e) { return setEndDate(e.target.value); } }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: "calc(100% - 80px)", margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                        "Events (Showing ", (_a = events === null || events === void 0 ? void 0 : events.length) !== null && _a !== void 0 ? _a : 0,
                        " of ",
                        eventCounts,
                        ")",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-danger", style: { position: 'absolute', top: 5, right: 120 }, onClick: function () { return setShowEventList(!showEventList); } },
                            "View as ",
                            (showEventList ? 'Mag/Dur' : 'List')),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "btn btn-primary", style: { position: 'absolute', top: 5, right: 5 }, onClick: function () { return Object(_ExportCSV__WEBPACK_IMPORTED_MODULE_7__["ExportToCsv"])(events, 'EventSearch.csv'); } }, "Export CSV")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 275, padding: 0 } }, showEventList ?
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3___default.a, { cols: [
                                { key: 'StartTime', label: 'Date', headerStyle: { width: '25%' }, rowStyle: { width: '25%' }, content: function (item, key, style) { return item[key] != undefined ? moment__WEBPACK_IMPORTED_MODULE_9___default()(item[key]).format('MM/DD/YYYY HH:mm:ss') : ''; } },
                                //{ key: 'StartTime', label: 'Time', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' }, content: (item, key, style) => moment(item[key]).format('HH:mm:ss') },
                                { key: 'MeterName', label: 'Meter', headerStyle: { width: 'auto' }, rowStyle: { width: 'auto' } },
                                { key: 'EventType', label: 'Type', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'Phase', label: 'Phase', headerStyle: { width: '12%' }, rowStyle: { width: '12%' } },
                                { key: 'PerUnitMagnitude', label: 'Mag (pu)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key] != undefined ? item[key].toFixed(2) : ''; } },
                                { key: 'DurationSeconds', label: 'Dur (s)', headerStyle: { width: '12%' }, rowStyle: { width: '12%' }, content: function (item, key, style) { return item[key] != undefined ? item[key].toFixed(2) : ''; } },
                                { key: null, label: '', headerStyle: { width: 17, padding: 0 }, rowStyle: { width: 0, padding: 0 } },
                            ], tableClass: "table table-hover", data: events, sortField: sortField, ascending: ascending, onSort: function (d) {
                                if (d.col == sortField) {
                                    //let ordered = _.orderBy(events, [sortField], [(!ascending ? 'asc' : 'desc')]);
                                    //setEvents(ordered);
                                    setAscending(!ascending);
                                }
                                else {
                                    setAscending(ascending);
                                    setSortField(d.col);
                                    //let ordered = _.orderBy(events, [d.col], [(ascending ? 'asc' : 'desc')]);
                                    //setEvents(ordered);
                                }
                            }, onClick: function (data) { setEventID(data.row.ID); }, theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 60 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: innerHeight - 340, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, selected: function (item) { return item.ID == eventID; } }) :
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MagDurChart__WEBPACK_IMPORTED_MODULE_8__["default"], { Height: (window.innerHeight) - 275, Width: window.innerWidth / 2 - 20, Points: events, OnSelect: function (evt, point) { return setEventID(point.ID); } })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 0px 0px 3px', width: window.innerWidth / 2 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: (window.innerHeight) - 226, padding: 0 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearch_EventSearchPreview__WEBPACK_IMPORTED_MODULE_1__["default"], { Event: events.find(function (e) { return e.ID == eventID; }), Height: window.innerHeight - 226, Width: window.innerWidth / 2 })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearch);


/***/ }),

/***/ "./tsx/EventSearch/EventSearchPreview.tsx":
/*!************************************************!*\
  !*** ./tsx/EventSearch/EventSearchPreview.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OpenSEE_EventSearchOpenSEE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenSEE/EventSearchOpenSEE */ "./tsx/EventSearch/OpenSEE/EventSearchOpenSEE.tsx");
/* harmony import */ var _TrenDAP_EventSearchTrenDAP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrenDAP/EventSearchTrenDAP */ "./tsx/EventSearch/TrenDAP/EventSearchTrenDAP.tsx");
/* harmony import */ var _PQI_EventSearchPQI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PQI/EventSearchPQI */ "./tsx/EventSearch/PQI/EventSearchPQI.tsx");
//******************************************************************************************************
//  EventSearchPreview.tsx - Gbtc
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
//  06/29/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************




var EventSearchPreview = function (props) {
    if (props.Event == undefined)
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No Event Selected ... ");
    else
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchOpenSEE__WEBPACK_IMPORTED_MODULE_1__["default"], { Event: props.Event, Width: props.Width, Height: props.Height / 3 - 1 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrenDAP_EventSearchTrenDAP__WEBPACK_IMPORTED_MODULE_2__["default"], { Event: props.Event, Width: props.Width, Height: props.Height / 3 - 1 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQI_EventSearchPQI__WEBPACK_IMPORTED_MODULE_3__["default"], { EventID: props.Event.ID, Width: props.Width, Height: props.Height / 3 - 1 })));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearchPreview);


/***/ }),

/***/ "./tsx/EventSearch/OpenSEE/EventSearchOpenSEE.tsx":
/*!********************************************************!*\
  !*** ./tsx/EventSearch/OpenSEE/EventSearchOpenSEE.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSearchOpenSEE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventSearchPreviewD3Chart */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx");
//******************************************************************************************************
//  EventSearchOpenSEE.tsx - Gbtc
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
//  03/03/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


function EventSearchOpenSEE(props) {
    var topmargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    var bottommargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    var margin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };
    var height = props.Height - 50;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'WaveformViewer?EventID=' + props.Event.ID, target: "_blank" }, "View Waveform")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { Event: props.Event, MeasurementType: 'Voltage', DataType: 'Time', Margin: topmargin, Height: height / 2, Width: props.Width, Axis: true }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { Event: props.Event, MeasurementType: 'Current', DataType: 'Time', Margin: bottommargin, Width: props.Width, Height: height / 2, Axis: true }))));
}


/***/ }),

/***/ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx":
/*!***************************************************************!*\
  !*** ./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "../node_modules/d3-selection/src/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ "../node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./tsx/constants.ts");
//******************************************************************************************************
//  EventSearchPreviewD3Chart.tsx - Gbtc
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
//  02/20/2020 - Billy Ernest
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






var EventSearchPreviewD3Chart = function (props) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (props.DataType == 'Trending') {
            var handle_1 = GetChannels().done(function (channels) { return GetData2(channels); });
            return function () {
                if (handle_1.abort !== undefined)
                    handle_1.abort();
            };
        }
        else {
            return GetData();
        }
    }, [props.Event.ID]);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Event/Data?eventId=" + props.Event.ID +
                ("&pixels=" + Math.floor(props.Width)) +
                ("&type=" + props.MeasurementType) +
                ("&dataType=" + props.DataType),
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
    function GetChannels() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Channel/" + props.Event.MeterID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetData2(channels) {
        var startDate = moment__WEBPACK_IMPORTED_MODULE_3___default.a.tz(props.Event.StartTime, _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Moment.TimeZone).utc().format(_constants__WEBPACK_IMPORTED_MODULE_5__["default"].Moment.DateFormat);
        var endDate = moment__WEBPACK_IMPORTED_MODULE_3___default.a.tz(props.Event.StartTime, _constants__WEBPACK_IMPORTED_MODULE_5__["default"].Moment.TimeZone).utc().add(1, 'day').format(_constants__WEBPACK_IMPORTED_MODULE_5__["default"].Moment.DateFormat);
        var query = "\n            from(bucket: \"" + bucket + "\")\n            |> range(start: " + startDate + ", stop: " + endDate + ")\n            |> filter(fn: (r) => r._field == \"avg\")\n            |> filter(fn: (r) => " + channels.filter(function (c) { return c.MeasurementCharacteristic == 'RMS' && c.MeasurementType == props.MeasurementType && ['AN', 'BN', 'CN'].indexOf(c.Phase) >= 0; }).map(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8); }).map(function (c) { return 'r.tag == "' + c + '"'; }).join(' or ') + ")\n        ";
        var handle = $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', "Token " + token);
            },
            type: "POST",
            url: host + "/api/v2/query?org=" + org,
            contentType: "application/json; encoding=utf-8",
            data: JSON.stringify({ query: query, type: 'flux' }),
            cache: true,
            async: true
        }).done(function (data) {
            var rows = data.split('\r\n');
            var i = 0;
            var header = rows[i++].split(',');
            var tagIndex = header.indexOf('tag');
            var timeIndex = header.indexOf('_time');
            var valueIndex = header.indexOf('_value');
            var fieldIndex = header.indexOf('_field');
            var dict = {};
            var _loop_1 = function () {
                var row = rows[i].split(',');
                if (row[tagIndex] == undefined || row[tagIndex] == "tag" || row[fieldIndex] == "flags")
                    return "continue";
                var channel = channels.find(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8) == row[tagIndex]; });
                var channelName = (props.MeasurementType == "Voltage" ? 'V' : 'I') + channel.Phase;
                if (dict.hasOwnProperty(channelName)) {
                    dict[channelName].push([moment__WEBPACK_IMPORTED_MODULE_3___default()(row[timeIndex]), parseFloat(row[valueIndex])]);
                }
                else {
                    dict[channelName] = [[moment__WEBPACK_IMPORTED_MODULE_3___default()(row[timeIndex]), parseFloat(row[valueIndex])]];
                }
            };
            for (; i < rows.length; i++) {
                _loop_1();
            }
            DrawChart(dict);
        });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }
    function DrawChart(data) {
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(ref.current).selectAll('svg').remove();
        var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(ref.current)
            .append('svg')
            .attr('width', props.Width)
            .attr('height', props.Height);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleUtc"])().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([props.Height - props.Margin.Bottom, props.Margin.Top]);
        if (props.DataType == 'Trending') {
            var yextent = Object(d3__WEBPACK_IMPORTED_MODULE_1__["extent"])([].concat.apply([], __spread(Object.keys(data).map(function (key) { return data[key].map(function (d) { return d[1]; }); }))));
            var xextent = Object(d3__WEBPACK_IMPORTED_MODULE_1__["extent"])([].concat.apply([], __spread(Object.keys(data).map(function (key) { return data[key].map(function (d) { return d[0]; }); }))));
            y.domain(yextent);
            x.domain(xextent);
        }
        else {
            var yextent = Object(d3__WEBPACK_IMPORTED_MODULE_1__["extent"])([].concat.apply([], __spread(Object.keys(data).map(function (key) { return data[key].map(function (d) { return d[1]; }); }))));
            var xextent = Object(d3__WEBPACK_IMPORTED_MODULE_1__["extent"])([].concat.apply([], __spread(Object.keys(data).map(function (key) { return data[key].map(function (d) { return d[0]; }); }))));
            yextent = [1.20 * yextent[0], 1.20 * yextent[1]];
            y.domain(yextent);
            x.domain(xextent);
        }
        if (props.Axis) {
            var xAxis = Object(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"])(x);
            if (props.DataType == 'Time')
                xAxis.tickFormat(function (tick) {
                    return moment__WEBPACK_IMPORTED_MODULE_3___default()(tick).format('mm:ss.SS');
                });
            svg.append("g").classed('xaxis', true)
                .attr("transform", "translate(0," + (props.Height - props.Margin.Bottom) + ")")
                .call(xAxis);
        }
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + props.Margin.Left + ",0)")
            .call(Object(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"])(y).ticks(Math.floor(props.Height / 50) + 1).tickFormat(function (value) { return Object(d3__WEBPACK_IMPORTED_MODULE_1__["format"])("~s")(value); }));
        var text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text(props.MeasurementType == "Voltage" ? "Voltage" : "Current");
        text.attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + (props.Margin.Left / 3) + ")").style("text-anchor", "middle");
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d) { return x(d[0]); }).y(function (d) { return y(d[1]); });
        svg.selectAll("g.line").remove();
        svg.selectAll("g.line")
            .data(Object.keys(data))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", function (d) { return getColor(d); })
            .attr("d", function (d) {
            return linefunc(data[d]);
        });
    }
    function getColor(label) {
        if (label.indexOf('VA') >= 0)
            return '#A30000';
        if (label.indexOf('VB') >= 0)
            return '#0029A3';
        if (label.indexOf('VC') >= 0)
            return '#007A29';
        if (label.indexOf('VN') >= 0)
            return '#c3c3c3';
        if (label.indexOf('IA') >= 0)
            return '#FF0000';
        if (label.indexOf('IB') >= 0)
            return '#0066CC';
        if (label.indexOf('IC') >= 0)
            return '#33CC33';
        if (label.indexOf('IR') >= 0)
            return '#c3c3c3';
        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);
            return "#" + (ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne) + (ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo) + (ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree);
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: ref, style: { height: props.Height, position: 'relative', top: 0 } });
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearchPreviewD3Chart);


/***/ }),

/***/ "./tsx/EventSearch/PQI/EventSearchPQI.tsx":
/*!************************************************!*\
  !*** ./tsx/EventSearch/PQI/EventSearchPQI.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSearchPQI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PQIChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PQIChart */ "./tsx/EventSearch/PQI/PQIChart.tsx");
//******************************************************************************************************
//  EventSearchPQI.tsx - Gbtc
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
//  07/02/2020 - Billy Ernest
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


function EventSearchPQI(props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), components = _a[0], setComponents = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({ TestCurveID: 0 }), 2), component = _b[0], setComponent = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), points = _c[0], setPoints = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), curve = _d[0], setCurve = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        setComponent({ TestCurveID: 0 });
        setComponents([]);
        setPoints([]);
        setCurve([]);
        var handle1 = GetComponents();
        handle1.done(function (data) {
            setComponents(data);
        });
        var handle2 = GetDisturbances();
        handle2.done(function (data) {
            setPoints(data.map(function (d) { return Object.create({ Duration: d.DurationSeconds, Magnitude: d.PerUnitMagnitude }); }));
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [props.EventID]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle1 = GetComponentCurve();
        handle1.done(function (data) {
            setCurve(data);
        });
        return function () {
            if (handle1.abort != undefined)
                handle1.abort();
        };
    }, [component]);
    function GetComponents() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/PQI/Components/" + props.EventID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetComponentCurve() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/PQI/Component/Curve/" + component.CurveDB + "/" + component.TestCurveID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetDisturbances() {
        return $.ajax({
            type: "GET",
            url: homePath + "api/PQI/Distrubances/" + props.EventID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    try {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
                "PQI - Ride-through Curves",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { value: component.TestCurveID, className: 'form-control', style: { width: 200, position: 'absolute', right: 6, top: 4 }, onChange: function (evt) {
                        var c = components.find(function (x) { return x.TestCurveID == evt.target.value; });
                        setComponent(c == undefined ? { TestCurveID: 0 } : c);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: '0' }, "NERC PRC-024-2"),
                    components.map(function (comp, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { key: index, value: comp.TestCurveID }, comp.Title); }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQIChart__WEBPACK_IMPORTED_MODULE_1__["default"], { Height: props.Height - 50, Width: props.Width, Points: points, Curve: curve }))));
    }
    catch (err) {
        return err;
    }
}


/***/ }),

/***/ "./tsx/EventSearch/PQI/PQIChart.tsx":
/*!******************************************!*\
  !*** ./tsx/EventSearch/PQI/PQIChart.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
//******************************************************************************************************
//  PQIChart.tsx - Gbtc
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
//  07/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


var PQIChart = function (props) {
    var chart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    var margin = { top: 15, right: 30, bottom: 40, left: 50 };
    var svgWidth = props.Width - margin.left - margin.right;
    var svgHeight = props.Height - margin.top - margin.bottom;
    var xmax = (props.Curve.length > 0 ? d3__WEBPACK_IMPORTED_MODULE_1__["max"](props.Curve.map(function (a) { return a.Duration; })) : 4);
    var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([margin.left, svgWidth + margin.left]).domain([0, xmax]);
    var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().rangeRound([svgHeight, margin.top]).domain([0, 1.3]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](chart.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](chart.current)
            .append('svg').attr('width', props.Width).attr('height', props.Height);
        var clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "pqiclip")
            .append("svg:rect")
            .attr("width", svgWidth)
            .attr("height", svgHeight - margin.top)
            .attr("x", margin.left)
            .attr("y", margin.top);
        var scatter = svg.append('g')
            .attr("clip-path", "url(#pqiclip)")
            .attr('id', 'chartdata');
        svg.selectAll("g.xaxis").remove();
        var xg = svg.append("g")
            .classed("xaxis", true)
            .attr("transform", "translate(0," + (props.Height - margin.bottom - margin.top) + ")");
        var xAxis = xg.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).tickSize(-(svgHeight - margin.top)));
        xg.append('text').text('Duration(s)').attr('x', (svgWidth - margin.right) / 2 + margin.left).attr('y', margin.bottom / 2).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll("g.yaxis").remove();
        var yg = svg.append("g")
            .classed("yaxis", true)
            .attr("transform", "translate(" + margin.left + ",0)");
        var yAxis = yg.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(8).tickSize(-(svgWidth)));
        yg.append('text').text('Per Unit Voltage').attr('transform', 'rotate(-90 0,0)').attr('x', -(svgHeight - margin.bottom) / 2 + margin.top).attr('y', -margin.left * 3 / 4).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");
        var lineFunc = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (xd) { return x(xd.Duration); }).y(function (yd) { return y(yd.Magnitude); });
        var lines = scatter.selectAll('path')
            .data([props.Curve])
            .enter()
            .append('path')
            .attr('stroke', 'red')
            .attr('fill', 'none')
            .attr('d', function (d) { return lineFunc(d); });
        if (props.Curve.length === 0) {
            var lines_1 = scatter.selectAll('g.line')
                .data([[
                    { Magnitude: 0, Duration: 0 },
                    { Magnitude: 0, Duration: 0.15 },
                    { Magnitude: 0.45, Duration: 0.15 },
                    { Magnitude: 0.45, Duration: 0.3 },
                    { Magnitude: 0.65, Duration: 0.3 },
                    { Magnitude: 0.65, Duration: 2 },
                    { Magnitude: 0.75, Duration: 2 },
                    { Magnitude: 0.75, Duration: 3 },
                    { Magnitude: 0.90, Duration: 3 },
                    { Magnitude: 0.90, Duration: 4 }
                ], [
                    { Magnitude: 1.2, Duration: 0 },
                    { Magnitude: 1.2, Duration: 0.20 },
                    { Magnitude: 1.175, Duration: 0.20 },
                    { Magnitude: 1.175, Duration: 0.50 },
                    { Magnitude: 1.15, Duration: 0.50 },
                    { Magnitude: 1.15, Duration: 1 },
                    { Magnitude: 1.10, Duration: 1 },
                    { Magnitude: 1.10, Duration: 4 }
                ]])
                .enter()
                .append('g')
                .attr('class', 'line')
                .append('path')
                .attr('class', 'line')
                .attr('stroke', 'red')
                .attr('fill', 'none')
                .attr('d', function (d) {
                return lineFunc(d);
            });
        }
        var circles = scatter.selectAll('g.points')
            .data([props.Points])
            .enter()
            .append('g').attr('class', 'points')
            .selectAll('circle')
            .data(function (d) { return d; })
            .enter()
            .append('circle')
            .attr('r', 5)
            .style('cursor', 'pointer')
            .attr('fill', 'blue')
            .attr('cx', function (d) { return x(d.Duration); })
            .attr('cy', function (d) { return y(d.Magnitude); });
    }, [props.Points, props.Curve]);
    function GetPath(data) {
        var linefunc = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) { return x(d.Duration); }).y(function (d) { return y(d.Magnitude); });
        return linefunc(data);
    }
    function BuildMadDurCircles(data) {
        var circles = data.map(function (point, index) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { key: index, className: "dot", r: 3, cx: x(point.Duration), cy: y(point.Magnitude), fill: 'blue' }); });
        return circles;
    }
    try {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: chart, style: { height: props.Height, width: props.Width } }));
    }
    catch (err) {
        return err;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (PQIChart);


/***/ }),

/***/ "./tsx/EventSearch/TrenDAP/EventSearchTrenDAP.tsx":
/*!********************************************************!*\
  !*** ./tsx/EventSearch/TrenDAP/EventSearchTrenDAP.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventSearchTrenDAP; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OpenSEE/EventSearchPreviewD3Chart */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx");
//******************************************************************************************************
//  EventSearchTrenDAP.tsx - Gbtc
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
//  07/02/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



var MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
var MomentDateFormat = 'YYYY-MM-DD';
var MomentTimeZone = 'America/Chicago';
function EventSearchTrenDAP(props) {
    var topmargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    var bottommargin = { Top: 10, Right: 30, Bottom: 20, Left: 50 };
    var margin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };
    var height = props.Height - 50;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { href: homePath + "Trending?dateRange=custom&meterID=" + props.Event.MeterID + "&startDate=" + moment__WEBPACK_IMPORTED_MODULE_0___default()(props.Event.StartTime).format(MomentDateFormat) + "&endDate=" + moment__WEBPACK_IMPORTED_MODULE_0___default()(props.Event.StartTime).add(1, 'day').format(MomentDateFormat), target: "_blank" }, "View Trending Data")),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_2__["default"], { Event: props.Event, MeasurementType: 'Voltage', DataType: 'Trending', Margin: topmargin, Width: props.Width, Height: height / 2, Axis: true }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_2__["default"], { Event: props.Event, MeasurementType: 'Current', DataType: 'Trending', Margin: bottommargin, Width: props.Width, Height: height / 2, Axis: true }))));
}


/***/ }),

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

/***/ "./tsx/MagDurChart.tsx":
/*!*****************************!*\
  !*** ./tsx/MagDurChart.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "../node_modules/d3-selection/src/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('ITIC'), 2), curve = _b[0], setCurve = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        Promise.all([GetMagDurCurves()]).then(function (data) {
            setMagDurCurveData(data[0]);
            Initialize(data[0]);
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        Initialize(magDurCurveData);
    }, [curve, props.Points]);
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
    function resetZoom(evt) {
        Initialize(magDurCurveData);
    }
    function Initialize(curves) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var margin = { top: 15, right: 20, bottom: 60, left: 40 };
        var svgWidth = props.Width - margin.left - margin.right;
        var svgHeight = props.Height - margin.top - margin.bottom;
        var data = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.groupBy(curves.filter(function (d) { return d.Name.includes(curve); }), 'Name');
        var XHigh = __spread(new Set((_b = (_a = data[Object.keys(data)[0]]) === null || _a === void 0 ? void 0 : _a.map(function (d) { return d.XHigh; })) !== null && _b !== void 0 ? _b : [100]))[0];
        var XLow = __spread(new Set((_d = (_c = data[Object.keys(data)[0]]) === null || _c === void 0 ? void 0 : _c.map(function (d) { return d.XLow; })) !== null && _d !== void 0 ? _d : [0.000001]))[0];
        var YHigh = __spread(new Set((_f = (_e = data[Object.keys(data)[0]]) === null || _e === void 0 ? void 0 : _e.map(function (d) { return d.YHigh; })) !== null && _f !== void 0 ? _f : [5]))[0];
        var YLow = __spread(new Set((_h = (_g = data[Object.keys(data)[0]]) === null || _g === void 0 ? void 0 : _g.map(function (d) { return d.YLow; })) !== null && _h !== void 0 ? _h : [0]))[0];
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(chart.current).selectAll('svg').remove();
        var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(chart.current)
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
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([svgHeight, margin.top]).domain([YLow, YHigh]);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"])().rangeRound([margin.left, svgWidth + margin.left]).domain([XLow, XHigh]);
        svg.selectAll("g.xaxis").remove();
        var xg = svg.append("g")
            .classed("xaxis", true)
            .attr("transform", "translate(0," + (props.Height - margin.bottom - margin.top) + ")");
        var xAxis = xg.call(Object(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"])(x).tickSize(-(svgHeight - margin.top)).tickFormat(function (value) {
            if (Math.log10(value) === Math.floor(Math.log10(value)))
                return Object(d3__WEBPACK_IMPORTED_MODULE_1__["format"])(".0s")(value);
            else
                return '';
        }));
        xg.append('text').text('Duration(s)').attr('x', (svgWidth - margin.right) / 2 + margin.left).attr('y', margin.bottom / 2).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll("g.yaxis").remove();
        var yg = svg.append("g")
            .classed("yaxis", true)
            .attr("transform", "translate(" + margin.left + ",0)");
        var ticks = 10;
        var format = '.1f';
        if (curve === 'NERC') {
            ticks = 20;
            format = '.2f';
        }
        var yAxis = yg.call(Object(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"])(y).ticks(ticks, format).tickSize(-(svgWidth)));
        yg.append('text').text('Per Unit Voltage').attr('transform', 'rotate(-90 0,0)').attr('x', -(svgHeight - margin.bottom) / 2 + margin.top).attr('y', -margin.left * 3 / 4).attr('fill', 'black').style('font-size', 'small');
        svg.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");
        var lineFunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (xd) { return x(xd.DurationSeconds); }).y(function (yd) { return y(yd.PerUnitMagnitude); });
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
        // Define the div for the tooltip
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(chart.current).selectAll('.tooltip').remove();
        var tooltip = Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(chart.current).append("div")
            .attr("class", "tooltip")
            .style('background-color', 'darkgray')
            .style("opacity", .9)
            .attr('hidden', 'hidden');
        var circles = scatter.selectAll('g.points')
            .data([props.Points])
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
            .on('click', function (d) {
            tooltip.transition()
                .duration(500)
                .attr('hidden', 'hidden');
            props.OnSelect(null, d);
        })
            .on("mouseover", function (event, d) {
            //d3.select(this).attr('stroke', 'black');
            tooltip.transition()
                .duration(200)
                .attr('hidden', null);
            tooltip.style("left", (event.offsetX - 150) + "px")
                .style("top", (event.offsetY - 75) + "px")
                .html("\n                    <table class=''>\n                    <tr><td>Meter</td><td>" + d.MeterName + "</td></tr>\n                    <tr><td>Start Time</td><td>" + d.StartTime + "</td></tr>\n                    <tr><td>Event Type</td><td>" + d.EventType + "</td></tr>\n                    <tr><td>Magnitude</td><td>" + d.PerUnitMagnitude.toFixed(2) + "</td></tr>\n                    <tr><td>Duration</td><td>" + d.DurationSeconds.toFixed(2) + "</td></tr>\n                    </table>   \n                ");
        })
            .on("mouseout", function (d) {
            //d3.select(this).attr('stroke', null);
            //if (timeout) clearTimeout(timeout);
            //setTimeout(() => {
            tooltip.transition()
                .duration(500)
                .attr('hidden', 'hidden');
            //}, 500);
        });
        var zoom = Object(d3__WEBPACK_IMPORTED_MODULE_1__["zoom"])().on('zoom', function (event, d) {
            var transform = event.transform;
            var updatedX = transform.rescaleX(x);
            var updatedY = transform.rescaleY(y);
            xAxis.call(Object(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"])(updatedX).tickSize(-(svgHeight - margin.top)).tickFormat(function (value) {
                if (Math.log10(value) === Math.floor(Math.log10(value)))
                    return Object(d3__WEBPACK_IMPORTED_MODULE_1__["format"])(".0s")(value);
                else
                    return '';
            }));
            yAxis.call(Object(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"])(updatedY).tickSize(-(svgWidth)));
            svg.selectAll('line').style("stroke", "lightgrey").style("stroke-opacity", 0.8).style("shape-rendering", "crispEdges").style("z-index", "0");
            circles.attr('cx', function (d) { return updatedX(d.DurationSeconds); }).attr('cy', function (d) { return updatedY(d.PerUnitMagnitude); });
            var upLineFunc = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (xd) { return updatedX(xd.DurationSeconds); }).y(function (yd) { return updatedY(yd.PerUnitMagnitude); });
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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: { position: 'absolute', top: 95, left: svgWidth - margin.right }, onClick: resetZoom }, "Reset")));
};
/* harmony default export */ __webpack_exports__["default"] = (MagDurChart);


/***/ }),

/***/ "./tsx/constants.ts":
/*!**************************!*\
  !*** ./tsx/constants.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//******************************************************************************************************
//  constants.ts - Gbtc
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
//  06/15/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var Constants;
(function (Constants) {
    var Moment;
    (function (Moment) {
        Moment.DateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
        Moment.DateFormat = 'YYYY-MM-DD';
        Moment.TimeZone = 'America/Chicago';
    })(Moment = Constants.Moment || (Constants.Moment = {}));
})(Constants || (Constants = {}));
/* harmony default export */ __webpack_exports__["default"] = (Constants);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi90c3gvRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9PcGVuU0VFL0V2ZW50U2VhcmNoT3BlblNFRS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL1BRSS9FdmVudFNlYXJjaFBRSS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL1BRSS9QUUlDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL1RyZW5EQVAvRXZlbnRTZWFyY2hUcmVuREFQLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvRXhwb3J0Q1NWLnRzeCIsIndlYnBhY2s6Ly8vLi90c3gvTWFnRHVyQ2hhcnQudHN4Iiwid2VicGFjazovLy8uL3RzeC9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixRQUFRLG1CQUFPLENBQUMsZ0RBQVE7QUFDeEIsa0NBQWtDLHNDQUFzQyxTQUFTLG1DQUFtQyxpRUFBaUUsR0FBRztBQUN4TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDRHQUE0RztBQUMxSiwwQ0FBMEMsK0JBQStCO0FBQ3pFLDBDQUEwQywrQkFBK0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrREFBa0QsMEJBQTBCLHFEQUFxRCxLQUFLLEVBQUUsRUFBRTtBQUN6TDtBQUNBLHdGQUF3RixtQ0FBbUM7QUFDM0gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDhHQUE4Ryx1REFBdUQsR0FBRztBQUMzTixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0NBQXNDO0FBQ3JGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDO1FBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDL0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUMvQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO1FBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDL0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUMvQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO2FBRTFDO1lBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0QsT0FBTyxNQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxD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LENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFekUsSUFBTSxLQUFLLEdBQUcsU0FBSSxJQUFJLEdBQUcsYUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxvQ0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBTSxJQUFJLEdBQUcsU0FBSSxJQUFJLEdBQUcsYUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxvQ0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBTSxLQUFLLEdBQUcsU0FBSSxJQUFJLEdBQUcsYUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxvQ0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBTSxJQUFJLEdBQUcsU0FBSSxJQUFJLEdBQUcsYUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxvQ0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEYsMkRBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hELElBQU0sR0FBRyxHQUFHLDJEQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0UsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO2FBQy9DLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDbEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7YUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7YUFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsR0FBRyxzREFBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxHQUFHLG1EQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUzRixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUUzRixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFEQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBSztZQUNyRixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBZSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQWUsQ0FBQyxDQUFDO2dCQUN2RSxPQUFPLGlEQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDOztnQkFDNUIsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFNUssR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNyQixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzthQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLGVBQWEsTUFBTSxDQUFDLElBQUksUUFBSyxDQUFDO1FBRXJELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7WUFDbEIsS0FBSyxHQUFHLEVBQUU7WUFDVixNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2xCO1FBRUQsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtREFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM04sR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7UUFJNUksSUFBTSxRQUFRLEdBQUcsK0NBQUksRUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFFLElBQUksUUFBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFFLElBQUksUUFBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDL0YsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7YUFDckMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDWixLQUFLLEVBQUU7YUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDdEIsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUNqQixJQUFJLENBQUMsV0FBQyxJQUFJLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFhLEVBQTFCLENBQTBCLENBQUM7YUFDckMsS0FBSyxFQUFFO2FBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxDQUFDLElBQUssZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFFekMsaUNBQWlDO1FBQ2pDLDJEQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDcEQsSUFBSSxPQUFPLEdBQUcsMkRBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUM1QyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUN4QixLQUFLLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDO2FBQ3JDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFOUIsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7YUFDeEMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BCLEtBQUssRUFBRTthQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUNuQyxTQUFTLENBQUMsUUFBUSxDQUFDO2FBQ25CLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxFQUFELENBQUMsQ0FBQzthQUNaLEtBQUssRUFBRTthQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDaEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDWixLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQzthQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzthQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFwQixDQUFvQixDQUFDO2FBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBckIsQ0FBcUIsQ0FBQzthQUN0QyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxVQUFVLEVBQUU7aUJBQ2YsUUFBUSxDQUFDLEdBQUcsQ0FBQztpQkFDYixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVMsS0FBSyxFQUFFLENBQUM7WUFDOUIsMENBQTBDO1lBQzFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7aUJBQ2YsUUFBUSxDQUFDLEdBQUcsQ0FBQztpQkFDYixJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQzlDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDekMsSUFBSSxDQUFDLHVGQUVrQixDQUFDLENBQUMsU0FBUyxtRUFDTixDQUFDLENBQUMsU0FBUyxtRUFDWCxDQUFDLENBQUMsU0FBUyxrRUFDWixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpRUFDOUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtFQUUxRCxDQUFDLENBQ0c7UUFDVCxDQUFDLENBQUM7YUFDRCxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUN2Qix1Q0FBdUM7WUFDdkMscUNBQXFDO1lBQ3JDLG9CQUFvQjtZQUNwQixPQUFPLENBQUMsVUFBVSxFQUFFO2lCQUNmLFFBQVEsQ0FBQyxHQUFHLENBQUM7aUJBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QixVQUFVO1FBQ2QsQ0FBQyxDQUFDLENBQWE7UUFFbkIsSUFBSSxJQUFJLEdBQUcsK0NBQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxLQUFzQyxFQUFFLENBQUM7WUFDOUUsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxxREFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQUs7Z0JBQ2pGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFlLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBZSxDQUFDLENBQUM7b0JBQ3ZFLE9BQU8saURBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFlLENBQUM7O29CQUN0QyxPQUFPLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO1lBRTVJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQUMsSUFBSSxlQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFDLElBQUksZUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7WUFDbkcsSUFBTSxVQUFVLEdBQUcsK0NBQUksRUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFFLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFFLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUE3QixDQUE2QixDQUFDO1lBQzlHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxpQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDO1FBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFZCxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELE9BQU8sQ0FDSCxvRUFBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFO1FBQ2hFLG9FQUFLLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7WUFDL0Isb0VBQUssU0FBUyxFQUFDLDhCQUE4QjtnQkFDekMsc0VBQU8sU0FBUyxFQUFDLGtCQUFrQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxLQUFLLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQUssZUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFoQixDQUFnQixHQUFJO2dCQUNqSSxzRUFBTyxTQUFTLEVBQUMsa0JBQWtCLFdBQWEsQ0FDOUM7WUFDTixvRUFBSyxTQUFTLEVBQUMsOEJBQThCO2dCQUN6QyxzRUFBTyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQUssTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxlQUFRLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLEdBQUk7Z0JBQ2pJLHNFQUFPLFNBQVMsRUFBQyxrQkFBa0IsZUFBa0IsQ0FDbkQ7WUFDTixvRUFBSyxTQUFTLEVBQUMsOEJBQThCO2dCQUN6QyxzRUFBTyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQUssUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxlQUFRLENBQUMsUUFBUSxDQUFDLEVBQWxCLENBQWtCLEdBQUk7Z0JBQ3JJLHNFQUFPLFNBQVMsRUFBQyxrQkFBa0Isd0NBQTBDLENBQzNFO1lBQ04sb0VBQUssU0FBUyxFQUFDLDhCQUE4QjtnQkFDekMsc0VBQU8sU0FBUyxFQUFDLGtCQUFrQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxLQUFLLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQUssZUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFmLENBQWUsR0FBSTtnQkFDL0gsc0VBQU8sU0FBUyxFQUFDLGtCQUFrQixxQ0FBdUMsQ0FDeEU7WUFDTixvRUFBSyxTQUFTLEVBQUMsOEJBQThCO2dCQUN6QyxzRUFBTyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQUssTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxlQUFRLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLEdBQUk7Z0JBQ2pJLHNFQUFPLFNBQVMsRUFBQyxrQkFBa0IscUJBQXVCLENBQ3hELENBQ0o7UUFDTix1RUFBUSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsR0FBSSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsWUFBZ0IsQ0FDbEgsQ0FDVDtBQUNMLENBQUM7QUFFYywwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdFEzQjtBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV4RyxJQUFVLFNBQVMsQ0FNbEI7QUFORCxXQUFVLFNBQVM7SUFDZixJQUFpQixNQUFNLENBSXRCO0lBSkQsV0FBaUIsTUFBTTtRQUNOLHFCQUFjLEdBQUcscUJBQXFCO1FBQ3RDLGlCQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGVBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUM5QyxDQUFDLEVBSmdCLE1BQU0sR0FBTixnQkFBTSxLQUFOLGdCQUFNLFFBSXRCO0FBQ0wsQ0FBQyxFQU5TLFNBQVMsS0FBVCxTQUFTLFFBTWxCO0FBRWMsd0VBQVMsRUFBQyIsImZpbGUiOiJFdmVudFNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFRhYmxlLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTgsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDA4LzAyLzIwMTggLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xudmFyIEFuZ2xlSWNvbiA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBtYXJnaW46IDMgfSwgY2xhc3NOYW1lOiAnZmEgZmEtYW5nbGUtJyArIChwcm9wcy5hc2NlbmRpbmcgPyAndXAnIDogJ2Rvd24nKSB9KSk7IH07XG52YXIgVGFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgVGFibGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvd0NvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlUm93cygpO1xuICAgICAgICB2YXIgaGVhZGVyQ29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMudGFibGVDbGFzcyA6ICcnLCBzdHlsZTogdGhpcy5wcm9wcy50YWJsZVN0eWxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgeyBzdHlsZTogdGhpcy5wcm9wcy50aGVhZFN0eWxlIH0sIGhlYWRlckNvbXBvbmVudHMpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGJvZHlTdHlsZSB9LCByb3dDb21wb25lbnRzKSkpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29scy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcbiAgICAgICAgICAgIGlmIChjb2xEYXRhLmhlYWRlclN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGNvbERhdGEuaGVhZGVyU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChzdHlsZS5jdXJzb3IgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGtleTogaW5kZXgsIHN0eWxlOiBzdHlsZSwgb25DbGljazogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVNvcnQoeyBjb2w6IGNvbERhdGEua2V5LCBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9LCBlKTsgfSB9LFxuICAgICAgICAgICAgICAgIGNvbERhdGEubGFiZWwsXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMuc29ydEZpZWxkID09PSBjb2xEYXRhLmtleSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5nbGVJY29uLCB7IGFzY2VuZGluZzogX3RoaXMucHJvcHMuYXNjZW5kaW5nIH0pIDogbnVsbCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBjZWxscyk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuZ2VuZXJhdGVSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjZWxscyA9IF90aGlzLnByb3BzLmNvbHMubWFwKGZ1bmN0aW9uIChjb2xEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzcztcbiAgICAgICAgICAgICAgICBpZiAoY29sRGF0YS5yb3dTdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSB7fTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNzcyA9IF8uY2xvbmUoY29sRGF0YS5yb3dTdHlsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBrZXk6IGluZGV4LnRvU3RyaW5nKCkgKyBpdGVtW2NvbERhdGEua2V5XSArIGNvbERhdGEua2V5LCBzdHlsZTogY3NzLCBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDbGljay5iaW5kKF90aGlzLCB7IGNvbDogY29sRGF0YS5rZXksIHJvdzogaXRlbSwgZGF0YTogaXRlbVtjb2xEYXRhLmtleV0gfSkgfSwgY29sRGF0YS5jb250ZW50ICE9PSB1bmRlZmluZWQgPyBjb2xEYXRhLmNvbnRlbnQoaXRlbSwgY29sRGF0YS5rZXksIGNzcykgOiBpdGVtW2NvbERhdGEua2V5XSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMucm93U3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gXy5jbG9uZShfdGhpcy5wcm9wcy5yb3dTdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChzdHlsZS5jdXJzb3IgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCAmJiBfdGhpcy5wcm9wcy5zZWxlY3RlZChpdGVtKSlcbiAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsgc3R5bGU6IHN0eWxlLCBrZXk6IGluZGV4LnRvU3RyaW5nKCkgfSwgY2VsbHMpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZGF0YSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGRhdGEsIGV2ZW50KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5oYW5kbGVTb3J0ID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Tb3J0KGRhdGEpO1xuICAgIH07XG4gICAgcmV0dXJuIFRhYmxlO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3IGZyb20gJy4uL0V2ZW50U2VhcmNoL0V2ZW50U2VhcmNoUHJldmlldyc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuLi9nbG9iYWwnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCB7IE11bHRpQ2hlY2tCb3hTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCJcclxuaW1wb3J0IHsgRXhwb3J0VG9Dc3YgfSBmcm9tICcuLi9FeHBvcnRDU1YnO1xyXG5pbXBvcnQgTWFnRHVyQ2hhcnQgZnJvbSAnLi4vTWFnRHVyQ2hhcnQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBFdmVudFNlYXJjaCA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHFzID0gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuRXZlbnRUeXBlW10+KFtdKVxyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocXMuc3RhcnREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLnN1YnRyYWN0KDMwLCAnZGF5cycpLmZvcm1hdChcIllZWVktTU0tRERcIikgOiBxcy5zdGFydERhdGUgYXMgc3RyaW5nKVxyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihxcy5lbmREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIikgOiBxcy5lbmREYXRlIGFzIHN0cmluZylcclxuICAgIGNvbnN0IFttZXRlcnMsIHNldE1ldGVyc10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLk1ldGVyW10+KFtdKTtcclxuICAgIGNvbnN0IFtyZXR1cm5MaW1pdCwgc2V0UmV0dXJuTGltaXRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy5yZXR1cm5MaW1pdCA9PSB1bmRlZmluZWQgPyAxMDA6IHBhcnNlSW50KHFzLnJldHVybkxpbWl0IGFzIHN0cmluZykpO1xyXG4gICAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuRXZlbnRTZWFyY2hbXT4oW10pO1xyXG4gICAgY29uc3QgW2V2ZW50Q291bnRzLCBzZXRFdmVudENvdW50c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBPcGVuWERBLkV2ZW50U2VhcmNoPignU3RhcnRUaW1lJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbZXZlbnRJRCwgc2V0RXZlbnRJRF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHFzLmV2ZW50SUQgPT0gdW5kZWZpbmVkID8gMCA6IHBhcnNlSW50KHFzLmV2ZW50SUQgYXMgc3RyaW5nKSk7XHJcbiAgICBjb25zdCBbc2hvd0V2ZW50TGlzdCwgc2V0U2hvd0V2ZW50TGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0VHlwZXMoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGE6IE9wZW5YREEuRXZlbnRUeXBlW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IGI2NHN0cmluZyA9IChxcy50eXBlcyA9PSB1bmRlZmluZWQgPyAnJzogcXMudHlwZXMpXHJcbiAgICAgICAgICAgIGxldCBpZHMgPSBhdG9iKGI2NHN0cmluZyBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKGEgPT4gcGFyc2VJbnQoYSkpXHJcbiAgICAgICAgICAgIGlmKHFzLnR5cGVzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IHRydWUpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IGlkcy5pbmRleE9mKHZhbHVlLklEKSA+PSAwKVxyXG5cclxuICAgICAgICAgICAgc2V0VHlwZXMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUyID0gR2V0TWV0ZXJzKCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBPcGVuWERBLk1ldGVyW10pID0+IHtcclxuICAgICAgICAgICAgbGV0IGI2NHN0cmluZyA9IChxcy5tZXRlcnMgPT0gdW5kZWZpbmVkID8gJycgOiBxcy5tZXRlcnMpXHJcbiAgICAgICAgICAgIGxldCBpZHMgPSBhdG9iKGI2NHN0cmluZyBhcyBzdHJpbmcpLnNwbGl0KCcsJykubWFwKGEgPT4gcGFyc2VJbnQoYSkpXHJcbiAgICAgICAgICAgIGlmIChxcy5tZXRlcnMgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gdHJ1ZSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLlNlbGVjdGVkID0gaWRzLmluZGV4T2YodmFsdWUuSUQpID49IDApXHJcblxyXG4gICAgICAgICAgICBzZXRNZXRlcnMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTIuYWJvcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1ldGVycy5sZW5ndGggPT0gMCB8fCB0eXBlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBoaXN0b3J5LnB1c2goeyBwYXRobmFtZTogaG9tZVBhdGggKyAnRXZlbnRTZWFyY2gnLCBzZWFyY2g6IGA/ZXZlbnRJRD0ke2V2ZW50SUR9JnN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZX0mZW5kRGF0ZT0ke2VuZERhdGV9JnJldHVybkxpbWl0PSR7cmV0dXJuTGltaXR9JnR5cGVzPSR7YnRvYSh0eXBlcy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKS50b1N0cmluZygpKX0mbWV0ZXJzPSR7YnRvYShtZXRlcnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRCkudG9TdHJpbmcoKSl9YH0pXHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0RXZlbnRTZWFyY2goKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGE6IE9wZW5YREEuRXZlbnRTZWFyY2hbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRFdmVudHMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGhhbmRsZTI9IEdldEV2ZW50U2VhcmNoQ291bnQoKTtcclxuICAgICAgICBoYW5kbGUyLmRvbmUoKGRhdGE6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBzZXRFdmVudENvdW50cyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMi5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTIuYWJvcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LCBbdHlwZXMsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbWV0ZXJzLCByZXR1cm5MaW1pdCwgc29ydEZpZWxkLCBhc2NlbmRpbmddKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRUeXBlcygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5FdmVudFR5cGVbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50VHlwZWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWV0ZXJzKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLk1ldGVyW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RXZlbnRTZWFyY2goKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuRXZlbnRTZWFyY2hbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudFNlYXJjaGAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgU3RhcnREYXRlOiBzdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBFbmREYXRlOiBlbmREYXRlLFxyXG4gICAgICAgICAgICAgICAgQ291bnQ6IHJldHVybkxpbWl0LFxyXG4gICAgICAgICAgICAgICAgU29ydEZpZWxkOiBzb3J0RmllbGQsXHJcbiAgICAgICAgICAgICAgICBBc2NlbmRpbmc6IGFzY2VuZGluZyxcclxuICAgICAgICAgICAgICAgIE1ldGVyczogbWV0ZXJzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpLFxyXG4gICAgICAgICAgICAgICAgVHlwZXM6IHR5cGVzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRFdmVudFNlYXJjaENvdW50KCk6IEpRdWVyeS5qcVhIUjxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnRTZWFyY2gvY291bnRgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgRW5kRGF0ZTogZW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIENvdW50OiByZXR1cm5MaW1pdCxcclxuICAgICAgICAgICAgICAgIFNvcnRGaWVsZDogc29ydEZpZWxkLFxyXG4gICAgICAgICAgICAgICAgQXNjZW5kaW5nOiBhc2NlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBNZXRlcnM6IG1ldGVycy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKSxcclxuICAgICAgICAgICAgICAgIFR5cGVzOiB0eXBlcy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IDc1LCBtYXJnaW46IDUgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IDc1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3tib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwfX0+UmV0dXJuICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cmV0dXJuTGltaXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXtlID0+IHNldFJldHVybkxpbWl0KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjI1MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjUwMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjEwMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcsIHdpZHRoOiAxMDAgfX0+TWV0ZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aUNoZWNrQm94U2VsZWN0IE9wdGlvbnM9e21ldGVycy5tYXAodCA9PiBPYmplY3QuY3JlYXRlKHsgVGV4dDogdC5OYW1lLCBWYWx1ZTogdC5JRCwgU2VsZWN0ZWQ6IHQuU2VsZWN0ZWQgfSkpfSBPbkNoYW5nZT17KGV2dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3TWV0ZXJzID0gXy5jbG9uZURlZXAobWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIChpbmRleCwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNZXRlcnMuZmluZChtZXRlciA9PiBtZXRlci5JRCA9PSBvcHRpb24uVmFsdWUpLlNlbGVjdGVkID0gIW9wdGlvbi5TZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWV0ZXJzKG5ld01ldGVycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4Jywgd2lkdGg6IDEwMCB9fT5UeXBlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aUNoZWNrQm94U2VsZWN0IE9wdGlvbnM9e3R5cGVzLm1hcCh0ID0+IE9iamVjdC5jcmVhdGUoeyBUZXh0OiB0Lk5hbWUsIFZhbHVlOiB0LklELCBTZWxlY3RlZDogdC5TZWxlY3RlZCB9KSl9IE9uQ2hhbmdlPXsoZXZ0LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUeXBlcyA9IF8uY2xvbmVEZWVwKHR5cGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIChpbmRleCwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUeXBlcy5maW5kKHR5cGUgPT4gdHlwZS5JRCA9PSBvcHRpb24uVmFsdWUpLlNlbGVjdGVkID0gIW9wdGlvbi5TZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZXMobmV3VHlwZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcsIHdpZHRoOiAxMDAgfX0+U3RhcnQgRGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3N0YXJ0RGF0ZX0gdHlwZT1cImRhdGVcIiBvbkNoYW5nZT17ZSA9PiBzZXRTdGFydERhdGUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwIH19PkVuZCBEYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZW5kRGF0ZX0gdHlwZT1cImRhdGVcIiBvbkNoYW5nZT17ZSA9PiBzZXRFbmREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogXCJjYWxjKDEwMCUgLSA4MHB4KVwiLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzIChTaG93aW5nIHsgZXZlbnRzPy5sZW5ndGggPz8gMH0gb2YgeyBldmVudENvdW50c30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogNSwgcmlnaHQ6IDEyMCB9fSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RXZlbnRMaXN0KCFzaG93RXZlbnRMaXN0KX0+VmlldyBhcyB7KHNob3dFdmVudExpc3Q/ICdNYWcvRHVyJyA6ICdMaXN0Jyl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiA1IH19IG9uQ2xpY2s9eygpID0+IEV4cG9ydFRvQ3N2KGV2ZW50cywgJ0V2ZW50U2VhcmNoLmNzdicpfT5FeHBvcnQgQ1NWPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogKHdpbmRvdy5pbm5lckhlaWdodCkgLSAyNzUsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0V2ZW50TGlzdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPE9wZW5YREEuRXZlbnRTZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnU3RhcnRUaW1lJywgbGFiZWw6ICdEYXRlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcyNSUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbVtrZXldICE9IHVuZGVmaW5lZCA/IG1vbWVudChpdGVtW2tleV0pLmZvcm1hdCgnTU0vREQvWVlZWSBISDptbTpzcycpOicnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiAnU3RhcnRUaW1lJywgbGFiZWw6ICdUaW1lJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBtb21lbnQoaXRlbVtrZXldKS5mb3JtYXQoJ0hIOm1tOnNzJykgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWV0ZXJOYW1lJywgbGFiZWw6ICdNZXRlcicsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0V2ZW50VHlwZScsIGxhYmVsOiAnVHlwZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzEyJScgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdQaGFzZScsIGxhYmVsOiAnUGhhc2UnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUGVyVW5pdE1hZ25pdHVkZScsIGxhYmVsOiAnTWFnIChwdSknLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtW2tleV0gIT0gdW5kZWZpbmVkID8oaXRlbVtrZXldIGFzIG51bWJlcikudG9GaXhlZCgyKTonJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdEdXJhdGlvblNlY29uZHMnLCBsYWJlbDogJ0R1ciAocyknLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtW2tleV0gIT0gdW5kZWZpbmVkID8oaXRlbVtrZXldIGFzIG51bWJlcikudG9GaXhlZCgyKTonJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IG51bGwsIGxhYmVsOiAnJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDE3LCBwYWRkaW5nOiAwIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAwLCBwYWRkaW5nOiAwIH0gfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2V2ZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9eyhkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5jb2wgPT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sZXQgb3JkZXJlZCA9IF8ub3JkZXJCeShldmVudHMsIFtzb3J0RmllbGRdLCBbKCFhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldEV2ZW50cyhvcmRlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoYXNjZW5kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZC5jb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoZXZlbnRzLCBbZC5jb2xdLCBbKGFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0RXZlbnRzKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyBzZXRFdmVudElEKGRhdGEucm93LklEKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDYwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCAtIDM0MCwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17KGl0ZW0pID0+IGl0ZW0uSUQgPT0gZXZlbnRJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hZ0R1ckNoYXJ0IEhlaWdodD17KHdpbmRvdy5pbm5lckhlaWdodCkgLSAyNzV9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMH0gUG9pbnRzPXtldmVudHN9IE9uU2VsZWN0PXsoZXZ0LCBwb2ludCkgPT4gc2V0RXZlbnRJRChwb2ludC5JRCl9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMHB4IDBweCAzcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkV2ZW50IFByZXZpZXc8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjI2LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlldyBFdmVudD17ZXZlbnRzLmZpbmQoZSA9PiBlLklEID09IGV2ZW50SUQpfSBIZWlnaHQ9e3dpbmRvdy5pbm5lckhlaWdodCAtIDIyNn0gV2lkdGg9e3dpbmRvdy5pbm5lcldpZHRoIC8gMn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VhcmNoOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzI5LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hPcGVuU0VFIGZyb20gJy4vT3BlblNFRS9FdmVudFNlYXJjaE9wZW5TRUUnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hUcmVuREFQIGZyb20gJy4vVHJlbkRBUC9FdmVudFNlYXJjaFRyZW5EQVAnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQUUkgZnJvbSAnLi9QUUkvRXZlbnRTZWFyY2hQUUknO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlldyA9IChwcm9wczogeyBFdmVudDogT3BlblhEQS5FdmVudFNlYXJjaCwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgaWYgKHByb3BzLkV2ZW50ID09ICB1bmRlZmluZWQpIHJldHVybiA8c3Bhbj5ObyBFdmVudCBTZWxlY3RlZCAuLi4gPC9zcGFuPjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEV2ZW50U2VhcmNoT3BlblNFRSBFdmVudD17cHJvcHMuRXZlbnR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLyAzIC0gMX0gLz5cclxuICAgICAgICAgICAgPEV2ZW50U2VhcmNoVHJlbkRBUCBFdmVudD17cHJvcHMuRXZlbnR9IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLyAzIC0gMX0gLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEV2ZW50U2VhcmNoUFFJIEV2ZW50SUQ9e3Byb3BzLkV2ZW50LklEfSBXaWR0aD17cHJvcHMuV2lkdGh9IEhlaWdodD17cHJvcHMuSGVpZ2h0LzMgLSAxfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2hQcmV2aWV3OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaE9wZW5TRUUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAzLzAzLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBmcm9tICcuL0V2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgZnJvbSAnLi9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFNlYXJjaE9wZW5TRUUocHJvcHM6IHsgRXZlbnQ6IE9wZW5YREEuRXZlbnRTZWFyY2gsIFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IHRvcG1hcmdpbiA9IHsgVG9wOiAxMCwgUmlnaHQ6IDMwLCBCb3R0b206IDIwLCBMZWZ0OiA1MCB9O1xyXG4gICAgY29uc3QgYm90dG9tbWFyZ2luID0geyBUb3A6IDEwLCBSaWdodDogMzAsIEJvdHRvbTogMjAsIExlZnQ6IDUwIH07XHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IFRvcDogMCwgUmlnaHQ6IDMwLCBCb3R0b206IDAsIExlZnQ6IDUwIH07XHJcblxyXG4gICAgbGV0IGhlaWdodCA9IHByb3BzLkhlaWdodCAtIDUwO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPjxhIGhyZWY9eyBob21lUGF0aCArICdXYXZlZm9ybVZpZXdlcj9FdmVudElEPScgKyBwcm9wcy5FdmVudC5JRH0gdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBXYXZlZm9ybTwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnQ9e3Byb3BzLkV2ZW50fSBNZWFzdXJlbWVudFR5cGU9J1ZvbHRhZ2UnIERhdGFUeXBlPSdUaW1lJyBNYXJnaW49e3RvcG1hcmdpbn0gSGVpZ2h0PXtoZWlnaHQgLyAyfSBXaWR0aD17cHJvcHMuV2lkdGh9IEF4aXM9e3RydWUgfS8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBFdmVudD17cHJvcHMuRXZlbnR9IE1lYXN1cmVtZW50VHlwZT0nQ3VycmVudCcgRGF0YVR5cGU9J1RpbWUnIE1hcmdpbj17Ym90dG9tbWFyZ2lufSBXaWR0aD17cHJvcHMuV2lkdGh9IEhlaWdodD17aGVpZ2h0IC8gMn0gQXhpcz17dHJ1ZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8yMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIGxpbmUsIGV4dGVudCwgYXhpc0JvdHRvbSwgYXhpc0xlZnQsIGZvcm1hdCBhcyBkM0Zvcm1hdCwgc2NhbGVVdGMsIHNjYWxlVGltZSB9IGZyb20gJ2QzJztcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC10aW1lem9uZSc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2FwcGxpY2F0aW9uLXR5cGluZ3MnO1xyXG5pbXBvcnQgeyBPcGVuWERBIGFzIFBRRGlnZXN0WERBIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbnRlcmZhY2UgWERBRGljdGlvbmFyeSB7XHJcbiAgICBWQUI6IFtudW1iZXIsIG51bWJlcl1bXSxcclxuICAgIFZCQzogW251bWJlciwgbnVtYmVyXVtdLFxyXG4gICAgVkNBOiBbbnVtYmVyLCBudW1iZXJdW10sXHJcbiAgICBWQU46IFtudW1iZXIsIG51bWJlcl1bXSxcclxuICAgIFZCTjogW251bWJlciwgbnVtYmVyXVtdLFxyXG4gICAgVkNOOiBbbnVtYmVyLCBudW1iZXJdW10sXHJcbiAgICBJQU46IFtudW1iZXIsIG51bWJlcl1bXSxcclxuICAgIElCTjogW251bWJlciwgbnVtYmVyXVtdLFxyXG4gICAgSUNOOiBbbnVtYmVyLCBudW1iZXJdW10sXHJcbiAgICBJTkc6IFtudW1iZXIsIG51bWJlcl1bXSxcclxuXHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgPSAocHJvcHM6IHsgRXZlbnQ6IFBRRGlnZXN0WERBLkV2ZW50U2VhcmNoLCBNZWFzdXJlbWVudFR5cGU6ICdDdXJyZW50JyB8ICdWb2x0YWdlJyB8ICdUcmlwQ29pbEN1cnJlbnQnLCBEYXRhVHlwZTogJ1RpbWUnIHwgJ1N0YXRpc3RpYycgfCAnVHJlbmRpbmcnLCBNYXJnaW46IHsgTGVmdDogbnVtYmVyLCBSaWdodDogbnVtYmVyLCBUb3A6IG51bWJlciwgQm90dG9tOiBudW1iZXIgfSwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsIEF4aXM6IGJvb2xlYW4gfSkgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLkRhdGFUeXBlID09ICdUcmVuZGluZycpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IEdldENoYW5uZWxzKCkuZG9uZShjaGFubmVscyA9PiBHZXREYXRhMihjaGFubmVscykpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEdldERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0sIFtwcm9wcy5FdmVudC5JRF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnQvRGF0YT9ldmVudElkPSR7cHJvcHMuRXZlbnQuSUR9YCArXHJcbiAgICAgICAgICAgICAgICBgJnBpeGVscz0ke01hdGguZmxvb3IocHJvcHMuV2lkdGgpfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZ0eXBlPSR7cHJvcHMuTWVhc3VyZW1lbnRUeXBlfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZkYXRhVHlwZT0ke3Byb3BzLkRhdGFUeXBlfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IERyYXdDaGFydChkYXRhKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldENoYW5uZWxzKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLlR5cGVzLkNoYW5uZWxbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0NoYW5uZWwvJHtwcm9wcy5FdmVudC5NZXRlcklEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEyKGNoYW5uZWxzOiBPcGVuWERBLlR5cGVzLkNoYW5uZWxbXSkge1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSBtb21lbnQudHoocHJvcHMuRXZlbnQuU3RhcnRUaW1lLCBDb25zdGFudHMuTW9tZW50LlRpbWVab25lKS51dGMoKS5mb3JtYXQoQ29uc3RhbnRzLk1vbWVudC5EYXRlRm9ybWF0KTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IG1vbWVudC50eihwcm9wcy5FdmVudC5TdGFydFRpbWUsIENvbnN0YW50cy5Nb21lbnQuVGltZVpvbmUpLnV0YygpLmFkZCgxLCAnZGF5JykuZm9ybWF0KENvbnN0YW50cy5Nb21lbnQuRGF0ZUZvcm1hdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICAgICAgICAgICBmcm9tKGJ1Y2tldDogXCIke2J1Y2tldH1cIilcclxuICAgICAgICAgICAgfD4gcmFuZ2Uoc3RhcnQ6ICR7c3RhcnREYXRlfSwgc3RvcDogJHtlbmREYXRlfSlcclxuICAgICAgICAgICAgfD4gZmlsdGVyKGZuOiAocikgPT4gci5fZmllbGQgPT0gXCJhdmdcIilcclxuICAgICAgICAgICAgfD4gZmlsdGVyKGZuOiAocikgPT4gJHtjaGFubmVscy5maWx0ZXIoYyA9PiBjLk1lYXN1cmVtZW50Q2hhcmFjdGVyaXN0aWMgPT0gJ1JNUycgJiYgYy5NZWFzdXJlbWVudFR5cGUgPT0gcHJvcHMuTWVhc3VyZW1lbnRUeXBlICYmIFsnQU4nLCAnQk4nLCAnQ04nXS5pbmRleE9mKGMuUGhhc2UpID49IDApLm1hcChjID0+IChcIjAwMDAwMDAwMDAwMDAwMFwiICsgYy5JRC50b1N0cmluZygxNikpLnN1YnN0cigtOCkpLm1hcChjID0+ICdyLnRhZyA9PSBcIicgKyBjICsgJ1wiJykuam9pbignIG9yICcpfSlcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogcmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBgVG9rZW4gJHt0b2tlbn1gKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9zdH0vYXBpL3YyL3F1ZXJ5P29yZz0ke29yZ31gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBlbmNvZGluZz11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5LCB0eXBlOiAnZmx1eCcgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoKGRhdGE6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm93cyA9IGRhdGEuc3BsaXQoJ1xcclxcbicpO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSByb3dzW2krK10uc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgbGV0IHRhZ0luZGV4ID0gaGVhZGVyLmluZGV4T2YoJ3RhZycpO1xyXG4gICAgICAgICAgICBsZXQgdGltZUluZGV4ID0gaGVhZGVyLmluZGV4T2YoJ190aW1lJyk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUluZGV4ID0gaGVhZGVyLmluZGV4T2YoJ192YWx1ZScpO1xyXG4gICAgICAgICAgICBsZXQgZmllbGRJbmRleCA9IGhlYWRlci5pbmRleE9mKCdfZmllbGQnKTtcclxuICAgICAgICAgICAgbGV0IGRpY3QgPSB7fSBhcyBYREFEaWN0aW9uYXJ5O1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSByb3dzW2ldLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93W3RhZ0luZGV4XSA9PSB1bmRlZmluZWQgfHwgcm93W3RhZ0luZGV4XSA9PSBcInRhZ1wiIHx8IHJvd1tmaWVsZEluZGV4XSA9PSBcImZsYWdzXCIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjaGFubmVsID0gY2hhbm5lbHMuZmluZChjID0+IChcIjAwMDAwMDAwMDAwMDAwMFwiICsgYy5JRC50b1N0cmluZygxNikpLnN1YnN0cigtOCkgPT0gcm93W3RhZ0luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhbm5lbE5hbWUgPSAocHJvcHMuTWVhc3VyZW1lbnRUeXBlID09IFwiVm9sdGFnZVwiID8gJ1YnIDogJ0knKSArIGNoYW5uZWwuUGhhc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGljdC5oYXNPd25Qcm9wZXJ0eShjaGFubmVsTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWN0W2NoYW5uZWxOYW1lXS5wdXNoKFttb21lbnQocm93W3RpbWVJbmRleF0pLHBhcnNlRmxvYXQocm93W3ZhbHVlSW5kZXhdKV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpY3RbY2hhbm5lbE5hbWVdID0gW1ttb21lbnQocm93W3RpbWVJbmRleF0pLCBwYXJzZUZsb2F0KHJvd1t2YWx1ZUluZGV4XSldXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRHJhd0NoYXJ0KGRpY3QpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIERyYXdDaGFydChkYXRhOiBYREFEaWN0aW9uYXJ5KSB7XHJcbiAgICAgICAgc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBwcm9wcy5XaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHByb3BzLkhlaWdodClcclxuXHJcbiAgICAgICAgbGV0IHggPSBzY2FsZVV0YygpLnJhbmdlUm91bmQoW3Byb3BzLk1hcmdpbi5MZWZ0LCBwcm9wcy5XaWR0aCAtIHByb3BzLk1hcmdpbi5SaWdodF0pO1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtwcm9wcy5IZWlnaHQgLSBwcm9wcy5NYXJnaW4uQm90dG9tLCBwcm9wcy5NYXJnaW4uVG9wXSk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5EYXRhVHlwZSA9PSAnVHJlbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIGxldCB5ZXh0ZW50ID0gZXh0ZW50KFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IGRhdGFba2V5XS5tYXAoZCA9PiBkWzFdKSkpKVxyXG4gICAgICAgICAgICBsZXQgeGV4dGVudCA9IGV4dGVudChbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiBkYXRhW2tleV0ubWFwKGQgPT4gZFswXSkpKSlcclxuICAgICAgICAgICAgeS5kb21haW4oeWV4dGVudCk7XHJcbiAgICAgICAgICAgIHguZG9tYWluKHhleHRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHlleHRlbnQgPSBleHRlbnQoW10uY29uY2F0KC4uLk9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4gZGF0YVtrZXldLm1hcChkID0+IGRbMV0pKSkpXHJcbiAgICAgICAgICAgIGxldCB4ZXh0ZW50ID0gZXh0ZW50KFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IGRhdGFba2V5XS5tYXAoZCA9PiBkWzBdKSkpKVxyXG5cclxuICAgICAgICAgICAgeWV4dGVudCA9IFsxLjIwICogeWV4dGVudFswXSwgMS4yMCAqIHlleHRlbnRbMV1dXHJcbiAgICAgICAgICAgIHkuZG9tYWluKHlleHRlbnQpO1xyXG4gICAgICAgICAgICB4LmRvbWFpbih4ZXh0ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5BeGlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhBeGlzID0gYXhpc0JvdHRvbSh4KTtcclxuICAgICAgICAgICAgaWYgKHByb3BzLkRhdGFUeXBlID09ICdUaW1lJylcclxuICAgICAgICAgICAgICAgIHhBeGlzLnRpY2tGb3JtYXQoKHRpY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KHRpY2sgYXMgbnVtYmVyKS5mb3JtYXQoJ21tOnNzLlNTJylcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKHByb3BzLkhlaWdodCAtIHByb3BzLk1hcmdpbi5Cb3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCh4QXhpcyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtwcm9wcy5NYXJnaW4uTGVmdH0sMClgKVxyXG4gICAgICAgICAgICAuY2FsbChheGlzTGVmdCh5KS50aWNrcyhNYXRoLmZsb29yKHByb3BzLkhlaWdodCAvIDUwKSArIDEpLnRpY2tGb3JtYXQoKHZhbHVlOiBudW1iZXIpID0+IGQzRm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAudGV4dChwcm9wcy5NZWFzdXJlbWVudFR5cGUgPT0gXCJWb2x0YWdlXCIgPyBcIlZvbHRhZ2VcIiA6IFwiQ3VycmVudFwiKTtcclxuICAgICAgICB0ZXh0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgcHJvcHMuSGVpZ2h0IC8gMiArIFwiLFwiICsgKHByb3BzLk1hcmdpbi5MZWZ0IC8gMykgKyBcIilcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gbGluZTxbbnVtYmVyLCBudW1iZXJdPigpLngoZCA9PiB4KGRbMF0pKS55KGQgPT4geShkWzFdKSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubGluZVwiKVxyXG4gICAgICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhkYXRhKSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5lXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCAoZDoga2V5b2YgWERBRGljdGlvbmFyeSkgPT4gZ2V0Q29sb3IoZCkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZDoga2V5b2YgWERBRGljdGlvbmFyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVmdW5jKGRhdGFbZF0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWQScpID49IDApIHJldHVybiAnI0EzMDAwMCc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ1ZCJykgPj0gMCkgcmV0dXJuICcjMDAyOUEzJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVkMnKSA+PSAwKSByZXR1cm4gJyMwMDdBMjknO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWTicpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lBJykgPj0gMCkgcmV0dXJuICcjRkYwMDAwJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignSUInKSA+PSAwKSByZXR1cm4gJyMwMDY2Q0MnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJQycpID49IDApIHJldHVybiAnIzMzQ0MzMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lSJykgPj0gMCkgcmV0dXJuICcjYzNjM2MzJztcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1PbmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVR3byA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtVGhyZWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgIyR7KHJhbk51bU9uZS5sZW5ndGggPiAxID8gcmFuTnVtT25lIDogXCIwXCIgKyByYW5OdW1PbmUpfSR7KHJhbk51bVR3by5sZW5ndGggPiAxID8gcmFuTnVtVHdvIDogXCIwXCIgKyByYW5OdW1Ud28pfSR7KHJhbk51bVRocmVlLmxlbmd0aCA+IDEgPyByYW5OdW1UaHJlZSA6IFwiMFwiICsgcmFuTnVtVGhyZWUpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdiByZWY9e3JlZn0gc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDAgfX0+PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFBRSS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMDIvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQUUlDaGFydCwgeyBQb2ludCB9IGZyb20gJy4vUFFJQ2hhcnQnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50U2VhcmNoUFFJKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgW2NvbXBvbmVudHMsIHNldENvbXBvbmVudHNdID0gUmVhY3QudXNlU3RhdGU8YW55W10+KFtdKTtcclxuICAgIGNvbnN0IFtjb21wb25lbnQsIHNldENvbXBvbmVudF0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KHtUZXN0Q3VydmVJRDogMH0pO1xyXG4gICAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IFJlYWN0LnVzZVN0YXRlPFBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFtjdXJ2ZSwgc2V0Q3VydmVdID0gUmVhY3QudXNlU3RhdGU8UG9pbnRbXT4oW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29tcG9uZW50KHsgVGVzdEN1cnZlSUQ6IDAgfSk7XHJcbiAgICAgICAgc2V0Q29tcG9uZW50cyhbXSk7XHJcbiAgICAgICAgc2V0UG9pbnRzKFtdKTtcclxuICAgICAgICBzZXRDdXJ2ZShbXSk7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0Q29tcG9uZW50cygpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgc2V0Q29tcG9uZW50cyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTIgPSBHZXREaXN0dXJiYW5jZXMoKTtcclxuICAgICAgICBoYW5kbGUyLmRvbmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9pbnRzKGRhdGEubWFwKGQgPT4gT2JqZWN0LmNyZWF0ZSh7RHVyYXRpb246IGQuRHVyYXRpb25TZWNvbmRzLCBNYWduaXR1ZGU6IGQuUGVyVW5pdE1hZ25pdHVkZX0pKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlMS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5FdmVudElEXSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBoYW5kbGUxID0gR2V0Q29tcG9uZW50Q3VydmUoKTtcclxuICAgICAgICBoYW5kbGUxLmRvbmUoKGRhdGE6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEN1cnZlKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbXBvbmVudF0pXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0Q29tcG9uZW50cygpOiBKUXVlcnkuanFYSFI8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvUFFJL0NvbXBvbmVudHMvJHtwcm9wcy5FdmVudElEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0Q29tcG9uZW50Q3VydmUoKTogSlF1ZXJ5LmpxWEhSPGFueVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1BRSS9Db21wb25lbnQvQ3VydmUvJHtjb21wb25lbnQuQ3VydmVEQn0vJHtjb21wb25lbnQuVGVzdEN1cnZlSUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXREaXN0dXJiYW5jZXMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuRGlzdHVyYmFuY2VbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9QUUkvRGlzdHJ1YmFuY2VzLyR7cHJvcHMuRXZlbnRJRH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlBRSSAtIFJpZGUtdGhyb3VnaCBDdXJ2ZXNcclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2NvbXBvbmVudC5UZXN0Q3VydmVJRH0gY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogNiwgdG9wOiA0IH19IG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5maW5kKHggPT4geC5UZXN0Q3VydmVJRCA9PSBldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29tcG9uZW50KGMgPT0gdW5kZWZpbmVkID8geyBUZXN0Q3VydmVJRDogMH06IGMpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzAnPk5FUkMgUFJDLTAyNC0yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMubWFwKChjb21wLCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17Y29tcC5UZXN0Q3VydmVJRH0+e2NvbXAuVGl0bGV9PC9vcHRpb24+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UFFJQ2hhcnQgSGVpZ2h0PXtwcm9wcy5IZWlnaHQgLSA1MH0gV2lkdGg9e3Byb3BzLldpZHRofSBQb2ludHM9e3BvaW50c30gQ3VydmU9e2N1cnZlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgcmV0dXJuIGVyciBcclxuICAgIH1cclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBQUUlDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMTYvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmludGVyZmFjZSBpRGF0YSB7XHJcbiAgICBJRDogbnVtYmVyLFxyXG4gICAgTmFtZTogc3RyaW5nLCBcclxuICAgIFZpc2libGU6IGJvb2xlYW4sXHJcbiAgICBDb2xvcjogc3RyaW5nLFxyXG4gICAgUGVyVW5pdE1hZ25pdHVkZTogbnVtYmVyLCBcclxuICAgIER1cmF0aW9uU2Vjb25kczogbnVtYmVyLFxyXG4gICAgTG9hZE9yZGVyOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XHJcbiAgICBNYWduaXR1ZGU6IG51bWJlcixcclxuICAgIER1cmF0aW9uOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hZ0R1ckN1cnZlIHtcclxuICAgIE5hbWU6IHN0cmluZyxcclxuICAgIFZpc2libGU6IGJvb2xlYW4sXHJcbiAgICBDb2xvcjogc3RyaW5nLFxyXG4gICAgUGF0aDogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IFBRSUNoYXJ0ID0gKHByb3BzOiB7IFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyLFBvaW50czogUG9pbnRbXSwgQ3VydmU6IFBvaW50W10gfSkgPT4ge1xyXG4gICAgY29uc3QgY2hhcnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAzMCwgYm90dG9tOiA0MCwgbGVmdDogNTAgfTtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG4gICAgY29uc3QgeG1heCA9IChwcm9wcy5DdXJ2ZS5sZW5ndGggPiAwID8gZDMubWF4KHByb3BzLkN1cnZlLm1hcChhID0+IGEuRHVyYXRpb24pKTo0KVxyXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFswLCB4bWF4XSk7XHJcbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oWzAsMS4zXSk7XHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZDMuc2VsZWN0KGNoYXJ0LmN1cnJlbnQpLnNlbGVjdEFsbCgnc3ZnJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KGNoYXJ0LmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpLmF0dHIoJ3dpZHRoJywgcHJvcHMuV2lkdGgpLmF0dHIoJ2hlaWdodCcsIHByb3BzLkhlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBjbGlwID0gc3ZnLmFwcGVuZChcImRlZnNcIikuYXBwZW5kKFwic3ZnOmNsaXBQYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJwcWljbGlwXCIpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6cmVjdFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHN2Z1dpZHRoKVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBzdmdIZWlnaHQgLSBtYXJnaW4udG9wKVxyXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgbWFyZ2luLmxlZnQpXHJcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBtYXJnaW4udG9wKTtcclxuXHJcbiAgICAgICAgbGV0IHNjYXR0ZXIgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgLmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI3BxaWNsaXApXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsICdjaGFydGRhdGEnKTtcclxuXHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLnhheGlzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHhnID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJ4YXhpc1wiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKHByb3BzLkhlaWdodCAtIG1hcmdpbi5ib3R0b20gLSBtYXJnaW4udG9wKSArIFwiKVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgeEF4aXMgPSB4Zy5jYWxsKGQzLmF4aXNCb3R0b20oeCkudGlja1NpemUoLShzdmdIZWlnaHQgLSBtYXJnaW4udG9wKSkpO1xyXG4gICAgICAgIHhnLmFwcGVuZCgndGV4dCcpLnRleHQoJ0R1cmF0aW9uKHMpJykuYXR0cigneCcsIChzdmdXaWR0aCAtIG1hcmdpbi5yaWdodCkgLyAyICsgbWFyZ2luLmxlZnQpLmF0dHIoJ3knLCBtYXJnaW4uYm90dG9tIC8gMikuYXR0cignZmlsbCcsICdibGFjaycpLnN0eWxlKCdmb250LXNpemUnLCAnc21hbGwnKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcueWF4aXNcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeWcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcInlheGlzXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sMClgKVxyXG5cclxuICAgICAgICBjb25zdCB5QXhpcyA9IHlnLmNhbGwoZDMuYXhpc0xlZnQoeSkudGlja3MoOCkudGlja1NpemUoLShzdmdXaWR0aCkpKTtcclxuICAgICAgICB5Zy5hcHBlbmQoJ3RleHQnKS50ZXh0KCdQZXIgVW5pdCBWb2x0YWdlJykuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtOTAgMCwwKScpLmF0dHIoJ3gnLCAtKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pIC8gMiArIG1hcmdpbi50b3ApLmF0dHIoJ3knLCAtbWFyZ2luLmxlZnQgKiAzIC8gNCkuYXR0cignZmlsbCcsICdibGFjaycpLnN0eWxlKCdmb250LXNpemUnLCAnc21hbGwnKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnbGluZScpLnN0eWxlKFwic3Ryb2tlXCIsIFwibGlnaHRncmV5XCIpLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC44KS5zdHlsZShcInNoYXBlLXJlbmRlcmluZ1wiLCBcImNyaXNwRWRnZXNcIikuc3R5bGUoXCJ6LWluZGV4XCIsIFwiMFwiKVxyXG5cclxuICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGQzLmxpbmU8UG9pbnQ+KCkueCh4ZCA9PiB4KHhkLkR1cmF0aW9uKSkueSh5ZCA9PiB5KHlkLk1hZ25pdHVkZSkpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ3BhdGgnKVxyXG4gICAgICAgICAgICAuZGF0YShbcHJvcHMuQ3VydmVdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZWQnKVxyXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcclxuICAgICAgICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4gbGluZUZ1bmMoZCkpO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMuQ3VydmUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cubGluZScpXHJcbiAgICAgICAgICAgICAgICAuZGF0YShbW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLCBEdXJhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLCBEdXJhdGlvbjogMC4xNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjQ1LCBEdXJhdGlvbjogMC4xNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjQ1LCBEdXJhdGlvbjogMC4zIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAuNjUsIER1cmF0aW9uOiAwLjMgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMC42NSwgRHVyYXRpb246IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMC43NSwgRHVyYXRpb246IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMC43NSwgRHVyYXRpb246IDMgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMC45MCwgRHVyYXRpb246IDMgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMC45MCwgRHVyYXRpb246IDQgfVxyXG4gICAgICAgICAgICAgICAgXSwgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAxLjIsIER1cmF0aW9uOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMiwgRHVyYXRpb246IDAuMjAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMS4xNzUsIER1cmF0aW9uOiAwLjIwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTc1LCBEdXJhdGlvbjogMC41MCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAxLjE1LCBEdXJhdGlvbjogMC41MCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAxLjE1LCBEdXJhdGlvbjogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAxLjEwLCBEdXJhdGlvbjogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAxLjEwLCBEdXJhdGlvbjogNCB9XHJcbiAgICAgICAgICAgICAgICAgICAgXV0pXHJcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGluZScpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5lJylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCAoZCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5lRnVuYyhkKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2lyY2xlcyA9IHNjYXR0ZXIuc2VsZWN0QWxsKCdnLnBvaW50cycpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5Qb2ludHNdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncG9pbnRzJylcclxuICAgICAgICAgICAgLnNlbGVjdEFsbCgnY2lyY2xlJylcclxuICAgICAgICAgICAgLmRhdGEoZCA9PiBkKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxyXG4gICAgICAgICAgICAuYXR0cigncicsIDUpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAuYXR0cignZmlsbCcsICdibHVlJylcclxuICAgICAgICAgICAgLmF0dHIoJ2N4JywgZCA9PiB4KGQuRHVyYXRpb24pKVxyXG4gICAgICAgICAgICAuYXR0cignY3knLCBkID0+IHkoZC5NYWduaXR1ZGUpKTtcclxuXHJcbiAgICB9LCBbcHJvcHMuUG9pbnRzLCBwcm9wcy5DdXJ2ZV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRQYXRoKGRhdGE6IFBvaW50W10pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGQzLmxpbmU8UG9pbnQ+KCkueChkID0+IHgoZC5EdXJhdGlvbikpLnkoZCA9PiB5KGQuTWFnbml0dWRlKSk7XHJcbiAgICAgICAgcmV0dXJuIGxpbmVmdW5jKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQnVpbGRNYWREdXJDaXJjbGVzKGRhdGE6IFBvaW50W10pIHtcclxuICAgICAgICBsZXQgY2lyY2xlcyA9IGRhdGEubWFwKChwb2ludCwgaW5kZXgpID0+IDxjaXJjbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZG90XCIgcj17M30gY3g9e3gocG9pbnQuRHVyYXRpb24pfSBjeT17eShwb2ludC5NYWduaXR1ZGUpfSBmaWxsPSdibHVlJyAvPik7XHJcbiAgICAgICAgcmV0dXJuIGNpcmNsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17Y2hhcnR9IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCB3aWR0aDogcHJvcHMuV2lkdGggfX0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQUUlDaGFydDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hUcmVuREFQLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgZnJvbSAnLi4vT3BlblNFRS9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzIGZyb20gJy4uL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMnO1xyXG5jb25zdCBNb21lbnREYXRlVGltZUZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzJ1xyXG5jb25zdCBNb21lbnREYXRlRm9ybWF0ID0gJ1lZWVktTU0tREQnO1xyXG5jb25zdCBNb21lbnRUaW1lWm9uZSA9ICdBbWVyaWNhL0NoaWNhZ28nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hUcmVuREFQKHByb3BzOiB7IEV2ZW50OiBPcGVuWERBLkV2ZW50U2VhcmNoLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCB0b3BtYXJnaW4gPSB7IFRvcDogMTAsIFJpZ2h0OiAzMCwgQm90dG9tOiAyMCwgTGVmdDogNTAgfTtcclxuICAgIGNvbnN0IGJvdHRvbW1hcmdpbiA9IHsgVG9wOiAxMCwgUmlnaHQ6IDMwLCBCb3R0b206IDIwLCBMZWZ0OiA1MCB9O1xyXG4gICAgY29uc3QgbWFyZ2luID0geyBUb3A6IDAsIFJpZ2h0OiAzMCwgQm90dG9tOiAwLCBMZWZ0OiA1MCB9O1xyXG5cclxuICAgIGxldCBoZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSA1MDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj48YSBocmVmPXtgJHtob21lUGF0aH1UcmVuZGluZz9kYXRlUmFuZ2U9Y3VzdG9tJm1ldGVySUQ9JHtwcm9wcy5FdmVudC5NZXRlcklEfSZzdGFydERhdGU9JHttb21lbnQocHJvcHMuRXZlbnQuU3RhcnRUaW1lKS5mb3JtYXQoTW9tZW50RGF0ZUZvcm1hdCl9JmVuZERhdGU9JHttb21lbnQocHJvcHMuRXZlbnQuU3RhcnRUaW1lKS5hZGQoMSwgJ2RheScpLmZvcm1hdChNb21lbnREYXRlRm9ybWF0KX1gfSB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IFRyZW5kaW5nIERhdGE8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCwgcGFkZGluZzowIH19PlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnQ9e3Byb3BzLkV2ZW50fSBNZWFzdXJlbWVudFR5cGU9J1ZvbHRhZ2UnIERhdGFUeXBlPSdUcmVuZGluZycgTWFyZ2luPXt0b3BtYXJnaW59IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtoZWlnaHQgLyAyfSBBeGlzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnQ9e3Byb3BzLkV2ZW50fSBNZWFzdXJlbWVudFR5cGU9J0N1cnJlbnQnIERhdGFUeXBlPSdUcmVuZGluZycgTWFyZ2luPXtib3R0b21tYXJnaW59IFdpZHRoPXtwcm9wcy5XaWR0aH0gSGVpZ2h0PXtoZWlnaHQvIDJ9IEF4aXM9e3RydWV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAxLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwb3J0VG9Dc3Y8VD4oZGF0YTogVFtdLCBmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHJvd3MgPSBbT2JqZWN0LmtleXMoZGF0YVswXSldO1xyXG4gICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICByb3dzLnB1c2goT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVmFsdWUgPSByb3dbal0udG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbCArPSAnLCc7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjc3ZGaWxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2RmlsZV0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNYWdEdXJDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGF4aXNCb3R0b20sIHNjYWxlTGluZWFyLCBzY2FsZUxvZywgZm9ybWF0IGFzIGQzRm9ybWF0LCBheGlzTGVmdCwgbGluZSwgem9vbSBhcyBkM1pvb20sIEQzWm9vbUV2ZW50IH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuL2dsb2JhbCc7XHJcblxyXG5pbnRlcmZhY2UgaUN1cnZlIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFhIaWdoOiBudW1iZXIsXHJcbiAgICBYTG93OiBudW1iZXIsXHJcbiAgICBZTG93OiBudW1iZXIsXHJcbiAgICBZSGlnaDogbnVtYmVyLFxyXG4gICAgUGVyVW5pdE1hZ25pdHVkZTogbnVtYmVyLFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgTWFnRHVyQ2hhcnQgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsIFBvaW50czogT3BlblhEQS5FdmVudFNlYXJjaFtdLCBPblNlbGVjdDogKGV2dDogYW55LCBwb2ludDogT3BlblhEQS5FdmVudFNlYXJjaCkgPT4gdm9pZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNjAsIGxlZnQ6IDQwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgIGNvbnN0IGNoYXJ0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlRGF0YSwgc2V0TWFnRHVyQ3VydmVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPGlDdXJ2ZVtdPihbXSk7XHJcbiAgICBjb25zdCBbY3VydmUsIHNldEN1cnZlXSA9IFJlYWN0LnVzZVN0YXRlPCdJVElDJyB8ICdTRU1JJyB8ICdJICYgSUknIHwgJ0lJSScgfCAnTkVSQyc+KCdJVElDJyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBQcm9taXNlLmFsbChbR2V0TWFnRHVyQ3VydmVzKCldKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZURhdGEoZGF0YVswXSk7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoZGF0YVswXSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBJbml0aWFsaXplKG1hZ0R1ckN1cnZlRGF0YSk7XHJcbiAgICB9LCBbY3VydmUsIHByb3BzLlBvaW50c10pXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWFnRHVyQ3VydmVzKCk6IFByb21pc2U8aUN1cnZlW10+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NYWdEdXJDdXJ2ZXNgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoZCA9PiByZXMoZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFpvb20oZXZ0KSB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZShtYWdEdXJDdXJ2ZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoY3VydmVzOiBpQ3VydmVbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgICAgICBsZXQgZGF0YSA9IF8uZ3JvdXBCeShjdXJ2ZXMuZmlsdGVyKGQgPT4gZC5OYW1lLmluY2x1ZGVzKGN1cnZlKSksICdOYW1lJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFhIaWdoID0gWy4uLm5ldyBTZXQoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0/Lm1hcChkID0+IGQuWEhpZ2gpID8/IFsxMDBdKV1bMF07XHJcbiAgICAgICAgY29uc3QgWExvdyA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLlhMb3cpID8/IFswLjAwMDAwMV0pXVswXTtcclxuICAgICAgICBjb25zdCBZSGlnaCA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLllIaWdoKSA/PyBbNV0pXVswXTtcclxuICAgICAgICBjb25zdCBZTG93ID0gWy4uLm5ldyBTZXQoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0/Lm1hcChkID0+IGQuWUxvdykgPz8gWzBdKV1bMF07XHJcblxyXG4gICAgICAgIHNlbGVjdChjaGFydC5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IHNlbGVjdChjaGFydC5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKS5hdHRyKCd3aWR0aCcsIHByb3BzLldpZHRoKS5hdHRyKCdoZWlnaHQnLCBwcm9wcy5IZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgY2xpcCA9IHN2Zy5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcInN2ZzpjbGlwUGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiY2xpcFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnOnJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcClcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG1hcmdpbi5sZWZ0KVxyXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgbWFyZ2luLnRvcCk7XHJcblxyXG4gICAgICAgIGxldCBzY2F0dGVyID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNjbGlwKVwiKVxyXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnY2hhcnRkYXRhJyk7XHJcblxyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW1lMb3csIFlIaWdoXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtYTG93LCBYSGlnaF0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy54YXhpc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwieGF4aXNcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChwcm9wcy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tIC0gbWFyZ2luLnRvcCkgKyBcIilcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0geGcuY2FsbChheGlzQm90dG9tKHgpLnRpY2tTaXplKC0oc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCkpLnRpY2tGb3JtYXQoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmxvZzEwKHZhbHVlIGFzIG51bWJlcikgPT09IE1hdGguZmxvb3IoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBkM0Zvcm1hdChcIi4wc1wiKSh2YWx1ZSlcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gJyc7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgeGcuYXBwZW5kKCd0ZXh0JykudGV4dCgnRHVyYXRpb24ocyknKS5hdHRyKCd4JywgKHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0KSAvIDIgKyBtYXJnaW4ubGVmdCkuYXR0cigneScsIG1hcmdpbi5ib3R0b20gLyAyKS5hdHRyKCdmaWxsJywgJ2JsYWNrJykuc3R5bGUoJ2ZvbnQtc2l6ZScsICdzbWFsbCcpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy55YXhpc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwieWF4aXNcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwwKWApXHJcblxyXG4gICAgICAgIGxldCB0aWNrcyA9IDEwO1xyXG4gICAgICAgIGxldCBmb3JtYXQgPSAnLjFmJztcclxuICAgICAgICBpZiAoY3VydmUgPT09ICdORVJDJykge1xyXG4gICAgICAgICAgICB0aWNrcyA9IDIwXHJcbiAgICAgICAgICAgIGZvcm1hdCA9ICcuMmYnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSB5Zy5jYWxsKGF4aXNMZWZ0KHkpLnRpY2tzKHRpY2tzLCBmb3JtYXQpLnRpY2tTaXplKC0oc3ZnV2lkdGgpKSk7XHJcbiAgICAgICAgeWcuYXBwZW5kKCd0ZXh0JykudGV4dCgnUGVyIFVuaXQgVm9sdGFnZScpLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTkwIDAsMCknKS5hdHRyKCd4JywgLShzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSAvIDIgKyBtYXJnaW4udG9wKS5hdHRyKCd5JywgLW1hcmdpbi5sZWZ0ICogMyAvIDQpLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKS5zdHlsZSgnZm9udC1zaXplJywgJ3NtYWxsJyk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2xpbmUnKS5zdHlsZShcInN0cm9rZVwiLCBcImxpZ2h0Z3JleVwiKS5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDAuOCkuc3R5bGUoXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJjcmlzcEVkZ2VzXCIpLnN0eWxlKFwiei1pbmRleFwiLCBcIjBcIilcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGxpbmU8aUN1cnZlPigpLngoeGQgPT4geCh4ZC5EdXJhdGlvblNlY29uZHMpKS55KHlkID0+IHkoeWQuUGVyVW5pdE1hZ25pdHVkZSkpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cubGluZXMnKVxyXG4gICAgICAgICAgICAuZGF0YShbZGF0YV0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGluZXMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgICAgICAgICAgLmRhdGEoZCA9PiBPYmplY3Qua2V5cyhkKSBhcyBzdHJpbmdbXSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdkJywgKGQpID0+IGxpbmVGdW5jKGRhdGFbZF0pKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkaXYgZm9yIHRoZSB0b29sdGlwXHJcbiAgICAgICAgc2VsZWN0KGNoYXJ0LmN1cnJlbnQpLnNlbGVjdEFsbCgnLnRvb2x0aXAnKS5yZW1vdmUoKVxyXG4gICAgICAgIHZhciB0b29sdGlwID0gc2VsZWN0KGNoYXJ0LmN1cnJlbnQpLmFwcGVuZChcImRpdlwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnZGFya2dyYXknKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIC45KVxyXG4gICAgICAgICAgICAuYXR0cignaGlkZGVuJywgJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBjb25zdCBjaXJjbGVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cucG9pbnRzJylcclxuICAgICAgICAgICAgLmRhdGEoW3Byb3BzLlBvaW50c10pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxyXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsdWUnKVxyXG4gICAgICAgICAgICAuYXR0cignY3gnLCBkID0+IHgoZC5EdXJhdGlvblNlY29uZHMpKVxyXG4gICAgICAgICAgICAuYXR0cignY3knLCBkID0+IHkoZC5QZXJVbml0TWFnbml0dWRlKSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHByb3BzLk9uU2VsZWN0KG51bGwsIGQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihldmVudCwgZCApe1xyXG4gICAgICAgICAgICAgICAgLy9kMy5zZWxlY3QodGhpcykuYXR0cignc3Ryb2tlJywgJ2JsYWNrJyk7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hpZGRlbicsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUoXCJsZWZ0XCIsIChldmVudC5vZmZzZXRYIC0gMTUwKSArIFwicHhcIilcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGV2ZW50Lm9mZnNldFkgLSA3NSkgKyBcInB4XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoYFxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0nJz5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPk1ldGVyPC90ZD48dGQ+JHtkLk1ldGVyTmFtZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5TdGFydCBUaW1lPC90ZD48dGQ+JHtkLlN0YXJ0VGltZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5FdmVudCBUeXBlPC90ZD48dGQ+JHtkLkV2ZW50VHlwZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5NYWduaXR1ZGU8L3RkPjx0ZD4ke2QuUGVyVW5pdE1hZ25pdHVkZS50b0ZpeGVkKDIpfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkR1cmF0aW9uPC90ZD48dGQ+JHtkLkR1cmF0aW9uU2Vjb25kcy50b0ZpeGVkKDIpfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPiAgIFxyXG4gICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICAvL2QzLnNlbGVjdCh0aGlzKS5hdHRyKCdzdHJva2UnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIC8vfSwgNTAwKTtcclxuICAgICAgICAgICAgfSkgICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIGxldCB6b29tID0gZDNab29tKCkub24oJ3pvb20nLCBmdW5jdGlvbiAoZXZlbnQ6IEQzWm9vbUV2ZW50PFNWR0VsZW1lbnQsIGlDdXJ2ZT4sIGQpIHtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGV2ZW50LnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRYID0gdHJhbnNmb3JtLnJlc2NhbGVYKHgpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFkgPSB0cmFuc2Zvcm0ucmVzY2FsZVkoeSk7XHJcbiAgICAgICAgICAgIHhBeGlzLmNhbGwoYXhpc0JvdHRvbSh1cGRhdGVkWCkudGlja1NpemUoLShzdmdIZWlnaHQgLSBtYXJnaW4udG9wKSkudGlja0Zvcm1hdCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmxvZzEwKHZhbHVlIGFzIG51bWJlcikgPT09IE1hdGguZmxvb3IoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDNGb3JtYXQoXCIuMHNcIikodmFsdWUgYXMgbnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgeUF4aXMuY2FsbChheGlzTGVmdCh1cGRhdGVkWSkudGlja1NpemUoLShzdmdXaWR0aCkpKTtcclxuICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbCgnbGluZScpLnN0eWxlKFwic3Ryb2tlXCIsIFwibGlnaHRncmV5XCIpLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC44KS5zdHlsZShcInNoYXBlLXJlbmRlcmluZ1wiLCBcImNyaXNwRWRnZXNcIikuc3R5bGUoXCJ6LWluZGV4XCIsIFwiMFwiKVxyXG5cclxuICAgICAgICAgICAgY2lyY2xlcy5hdHRyKCdjeCcsIGQgPT4gdXBkYXRlZFgoZC5EdXJhdGlvblNlY29uZHMpKS5hdHRyKCdjeScsIGQgPT4gdXBkYXRlZFkoZC5QZXJVbml0TWFnbml0dWRlKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwTGluZUZ1bmMgPSBsaW5lPGlDdXJ2ZT4oKS54KHhkID0+IHVwZGF0ZWRYKHhkLkR1cmF0aW9uU2Vjb25kcykpLnkoeWQgPT4gdXBkYXRlZFkoeWQuUGVyVW5pdE1hZ25pdHVkZSkpXHJcbiAgICAgICAgICAgIGxpbmVzLmF0dHIoJ2QnLCBkID0+IHVwTGluZUZ1bmMoZGF0YVtkXSkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHN2Zy5jYWxsKHpvb20pXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoJ3VzZScpLmF0dHIoJ3hsaW5rOmhyZWYnLCAnI2NoYXJ0ZGF0YScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2NoYXJ0fSBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCwgd2lkdGg6IHByb3BzLldpZHRoIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtjdXJ2ZX0gY2hlY2tlZD17Y3VydmUgPT09ICdJVElDJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdJVElDJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5JVElDPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnU0VNSSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDdXJ2ZSgnU0VNSScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPlNFTUkgRjQ3PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnSSAmIElJJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdJICYgSUknKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPklFRUUgMTY2OCBSZWNvbW1lbmRlZCBUeXBlIEkgJiBJSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e2N1cnZlfSBjaGVja2VkPXtjdXJ2ZSA9PT0gJ0lJSSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDdXJ2ZSgnSUlJJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5JRUVFIDE2NjggUmVjb21tZW5kZWQgVHlwZSBJSUk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtjdXJ2ZX0gY2hlY2tlZD17Y3VydmUgPT09ICdORVJDJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdORVJDJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5ORVJDIFBSQy0wMjQtMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogOTUsIGxlZnQ6IHN2Z1dpZHRoIC0gIG1hcmdpbi5yaWdodCB9fSBvbkNsaWNrPXtyZXNldFpvb219PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hZ0R1ckNoYXJ0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBjb25zdGFudHMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbm5hbWVzcGFjZSBDb25zdGFudHMge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNb21lbnQge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEYXRlVGltZUZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzJ1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBEYXRlRm9ybWF0ID0gJ1lZWVktTU0tREQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUaW1lWm9uZSA9ICdBbWVyaWNhL0NoaWNhZ28nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHM7Il0sInNvdXJjZVJvb3QiOiIifQ==