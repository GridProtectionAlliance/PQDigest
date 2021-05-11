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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearch_EventSearchPreview__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: eventID, Height: window.innerHeight - 226, Width: window.innerWidth / 2 })))))));
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
    if (props.EventID <= 0)
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No Event Selected ... ");
    else
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchOpenSEE__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, Width: props.Width, Height: props.Height / 3 - 1 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TrenDAP_EventSearchTrenDAP__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Width: props.Width, Height: props.Height / 3 - 1 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PQI_EventSearchPQI__WEBPACK_IMPORTED_MODULE_3__["default"], { EventID: props.EventID, Width: props.Width, Height: props.Height / 3 - 1 })));
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
/* harmony import */ var _EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSearchPreviewD3ChartAxis */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx");
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
    var topmargin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };
    var bottommargin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };
    var margin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };
    //const svgWidth = props.Width - margin.left - margin.right;
    //const svgHeight = props.Height - margin.top - margin.bottom - 65;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'WaveformViewer?EventID=' + props.EventID, target: "_blank" }, "View Waveform")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Voltage', DataType: 'Time', Margin: topmargin, Height: (props.Height - 90) / 2, Width: props.Width }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Current', DataType: 'Time', Margin: margin, Width: props.Width, Height: (props.Height - 90) / 2 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Margin: margin, Width: props.Width - 10, Height: 40, DataType: 'Time' }))));
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
        return GetData();
    }, [props.EventID]);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Event/Data?eventId=" + props.EventID +
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
    function DrawChart(data) {
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(ref.current).selectAll('svg').remove();
        var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(ref.current)
            .append('svg')
            .attr('width', props.Width)
            .attr('height', props.Height);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([props.Margin.Left, props.Width - props.Margin.Right]);
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([props.Height - props.Margin.Top, props.Margin.Bottom]);
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
        var xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (props.Height - props.Margin.Bottom) + ")")
            .call(Object(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"])(x));
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

/***/ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx":
/*!*******************************************************************!*\
  !*** ./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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



var EventSearchPreviewD3ChartAxis = function (props) {
    //const margin = { top: 15, right: 20, bottom: 60, left: 40 };
    //const svgHeight = props.Height - margin.top - margin.bottom;
    var svgHeight = props.Height;
    var svgWidth = props.Width;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true), 2), hidden = _a[0], setHidden = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), xAxisTicks = _b[0], setXAxisTicks = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        return GetData();
    }, [props.EventID]);
    function GetData() {
        var handle = $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Event/Data?eventId=" + props.EventID +
                ("&pixels=" + Math.floor(svgWidth)) +
                "&type=Voltage" +
                ("&dataType=" + props.DataType),
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
    function defaultTickFormatter(value, axis) {
        var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
        var formatted = "" + Math.round(value * factor) / factor;
        // If tickDecimals was specified, ensure that we have exactly that
        // much precision; otherwise default to the value's own precision.
        if (axis.tickDecimals != null) {
            var decimal = formatted.indexOf(".");
            var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
            if (precision < axis.tickDecimals) {
                return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
            }
        }
        return formatted;
    }
    ;
    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }
    function DrawChart(data) {
        if (Object.keys(data).length == 0) {
            setHidden(true);
            return;
        }
        setHidden(false);
        var series = data[Object.keys(data)[0]];
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().rangeRound([0, svgWidth]).domain([series[0][0], series[series.length - 1][0]]);
        var ticks = [];
        var span = x.domain()[1] - x.domain()[0];
        for (var i = x.domain()[0] + span / 7; i < x.domain()[1]; i += span / 7) {
            ticks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", { key: i, className: "tick", transform: "translate(" + x(i) + "," + 0 + ")", style: { opacity: i < x.domain()[0] || i > x.domain()[1] ? 0 : 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M 0,6 V -6", strokeWidth: 0.5 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", y: "20", textAnchor: 'middle' }, moment__WEBPACK_IMPORTED_MODULE_2___default()('1970-01-01T00:00:00').add(i, 'milliseconds').format(props.DataType == 'Time' ? 'ss.SSS' : 'HH:ss'))));
        }
        setXAxisTicks(ticks);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: svgHeight /*, margin: '0x', padding: '0px'*/ }, hidden: hidden },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: svgWidth, height: svgHeight, style: { fill: 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { stroke: 'black', d: "M " + props.Margin.Left + " " + (props.Margin.Top + 1) + " H " + (props.Width - props.Margin.Right), style: { shapeRendering: 'crispEdges' } }),
            xAxisTicks,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", { fill: "black", fontSize: "small", x: svgWidth / 2, y: svgHeight - 10 }, "Time"))));
};
/* harmony default export */ __webpack_exports__["default"] = (EventSearchPreviewD3ChartAxis);


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OpenSEE/EventSearchPreviewD3Chart */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3Chart.tsx");
/* harmony import */ var _OpenSEE_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OpenSEE/EventSearchPreviewD3ChartAxis */ "./tsx/EventSearch/OpenSEE/EventSearchPreviewD3ChartAxis.tsx");
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



function EventSearchTrenDAP(props) {
    var topmargin = { Top: 10, Right: 30, Bottom: 0, Left: 50 };
    var bottommargin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };
    var margin = { Top: 0, Right: 30, Bottom: 0, Left: 50 };
    //const svgWidth = props.Width - margin.left - margin.right;
    //const svgHeight = props.Height - margin.top - margin.bottom - 65;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: homePath + 'TrenDAP?eventid=' + props.EventID, target: "_blank" }, "View Trending Data")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: props.Height - 50, padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Voltage', DataType: 'Trending', Margin: margin, Width: props.Width - 10, Height: props.Height / 3 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3Chart__WEBPACK_IMPORTED_MODULE_1__["default"], { EventID: props.EventID, MeasurementType: 'Current', DataType: 'Trending', Margin: margin, Width: props.Width - 10, Height: props.Height / 3 }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSEE_EventSearchPreviewD3ChartAxis__WEBPACK_IMPORTED_MODULE_2__["default"], { EventID: props.EventID, Margin: margin, Width: props.Width - 10, Height: 40, DataType: 'Trending' }))));
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi90c3gvRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9PcGVuU0VFL0V2ZW50U2VhcmNoT3BlblNFRS50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V2ZW50U2VhcmNoL09wZW5TRUUvRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvRXZlbnRTZWFyY2hQUUkudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9QUUkvUFFJQ2hhcnQudHN4Iiwid2VicGFjazovLy8uL3RzeC9FdmVudFNlYXJjaC9UcmVuREFQL0V2ZW50U2VhcmNoVHJlbkRBUC50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L0V4cG9ydENTVi50c3giLCJ3ZWJwYWNrOi8vLy4vdHN4L01hZ0R1ckNoYXJ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLFFBQVEsbUJBQU8sQ0FBQyxnREFBUTtBQUN4QixrQ0FBa0Msc0NBQXNDLFNBQVMsbUNBQW1DLGlFQUFpRSxHQUFHO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNEdBQTRHO0FBQzFKLDBDQUEwQywrQkFBK0I7QUFDekUsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFrRCwwQkFBMEIscURBQXFELEtBQUssRUFBRSxFQUFFO0FBQ3pMO0FBQ0Esd0ZBQXdGLG1DQUFtQztBQUMzSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsOEdBQThHLHVEQUF1RCxHQUFHO0FBQzNOLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQ0FBc0M7QUFDckYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUMsR0FBRyxJQUFLLGVBQVEsQ0FBQyxRQUFRLENBQUMsRUFBbEIsQ0FBa0IsR0FBSTtnQkFDckksc0VBQU8sU0FBUyxFQUFDLGtCQUFrQix3Q0FBMEMsQ0FDM0U7WUFDTixvRUFBSyxTQUFTLEVBQUMsOEJBQThCO2dCQUN6QyxzRUFBTyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQUssS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxlQUFRLENBQUMsS0FBSyxDQUFDLEVBQWYsQ0FBZSxHQUFJO2dCQUMvSCxzRUFBTyxTQUFTLEVBQUMsa0JBQWtCLHFDQUF1QyxDQUN4RTtZQUNOLG9FQUFLLFNBQVMsRUFBQyw4QkFBOEI7Z0JBQ3pDLHNFQUFPLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssS0FBSyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxJQUFLLGVBQVEsQ0FBQyxNQUFNLENBQUMsRUFBaEIsQ0FBZ0IsR0FBSTtnQkFDakksc0VBQU8sU0FBUyxFQUFDLGtCQUFrQixxQkFBdUIsQ0FDeEQsQ0FDSjtRQUNOLHVFQUFRLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxHQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxZQUFnQixDQUNsSCxDQUNUO0FBQ0wsQ0FBQztBQUVjLDBFQUFXLEVBQUMiLCJmaWxlIjoiRXZlbnRTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBUYWJsZS50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDE4LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwOC8wMi8yMDE4IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbnZhciBBbmdsZUljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbWFyZ2luOiAzIH0sIGNsYXNzTmFtZTogJ2ZhIGZhLWFuZ2xlLScgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJykgfSkpOyB9O1xudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcbiAgICAgICAgdmFyIGhlYWRlckNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy50YWJsZUNsYXNzICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJywgc3R5bGU6IHRoaXMucHJvcHMudGFibGVTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGhlYWRTdHlsZSB9LCBoZWFkZXJDb21wb25lbnRzKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCB7IHN0eWxlOiB0aGlzLnByb3BzLnRib2R5U3R5bGUgfSwgcm93Q29tcG9uZW50cykpKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5nZW5lcmF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoZnVuY3Rpb24gKGNvbERhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2xEYXRhLmhlYWRlclN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4LCBzdHlsZTogc3R5bGUsIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTb3J0KHsgY29sOiBjb2xEYXRhLmtleSwgYXNjZW5kaW5nOiBfdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSk7IH0gfSxcbiAgICAgICAgICAgICAgICBjb2xEYXRhLmxhYmVsLFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnNvcnRGaWVsZCA9PT0gY29sRGF0YS5rZXkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEFuZ2xlSWNvbiwgeyBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9KSA6IG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgY2VsbHMpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlUm93cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBfdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNvbERhdGEucm93U3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgY3NzID0ge307XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSBfLmNsb25lKGNvbERhdGEucm93U3R5bGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBpbmRleC50b1N0cmluZygpICsgaXRlbVtjb2xEYXRhLmtleV0gKyBjb2xEYXRhLmtleSwgc3R5bGU6IGNzcywgb25DbGljazogX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcywgeyBjb2w6IGNvbERhdGEua2V5LCByb3c6IGl0ZW0sIGRhdGE6IGl0ZW1bY29sRGF0YS5rZXldIH0pIH0sIGNvbERhdGEuY29udGVudCAhPT0gdW5kZWZpbmVkID8gY29sRGF0YS5jb250ZW50KGl0ZW0sIGNvbERhdGEua2V5LCBjc3MpIDogaXRlbVtjb2xEYXRhLmtleV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IF8uY2xvbmUoX3RoaXMucHJvcHMucm93U3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQgJiYgX3RoaXMucHJvcHMuc2VsZWN0ZWQoaXRlbSkpXG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IHN0eWxlOiBzdHlsZSwga2V5OiBpbmRleC50b1N0cmluZygpIH0sIGNlbGxzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhkYXRhLCBldmVudCk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlU29ydCA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU29ydChkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBUYWJsZTtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMTgvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUHJldmlldyBmcm9tICcuLi9FdmVudFNlYXJjaC9FdmVudFNlYXJjaFByZXZpZXcnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnLi4vZ2xvYmFsJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgeyBNdWx0aUNoZWNrQm94U2VsZWN0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcbmltcG9ydCB7IEV4cG9ydFRvQ3N2IH0gZnJvbSAnLi4vRXhwb3J0Q1NWJztcclxuaW1wb3J0IE1hZ0R1ckNoYXJ0IGZyb20gJy4uL01hZ0R1ckNoYXJ0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuY29uc3QgRXZlbnRTZWFyY2ggPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBxcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xyXG4gICAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLkV2ZW50VHlwZVtdPihbXSlcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHFzLnN0YXJ0RGF0ZSA9PSB1bmRlZmluZWQgPyBtb21lbnQoKS5zdWJ0cmFjdCgzMCwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIDogcXMuc3RhcnREYXRlIGFzIHN0cmluZylcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocXMuZW5kRGF0ZSA9PSB1bmRlZmluZWQgPyBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIDogcXMuZW5kRGF0ZSBhcyBzdHJpbmcpXHJcbiAgICBjb25zdCBbbWV0ZXJzLCBzZXRNZXRlcnNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5NZXRlcltdPihbXSk7XHJcbiAgICBjb25zdCBbcmV0dXJuTGltaXQsIHNldFJldHVybkxpbWl0XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocXMucmV0dXJuTGltaXQgPT0gdW5kZWZpbmVkID8gMTAwOiBwYXJzZUludChxcy5yZXR1cm5MaW1pdCBhcyBzdHJpbmcpKTtcclxuICAgIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLkV2ZW50U2VhcmNoW10+KFtdKTtcclxuICAgIGNvbnN0IFtldmVudENvdW50cywgc2V0RXZlbnRDb3VudHNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgT3BlblhEQS5FdmVudFNlYXJjaD4oJ1N0YXJ0VGltZScpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW2V2ZW50SUQsIHNldEV2ZW50SURdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihxcy5ldmVudElEID09IHVuZGVmaW5lZCA/IDAgOiBwYXJzZUludChxcy5ldmVudElEIGFzIHN0cmluZykpO1xyXG4gICAgY29uc3QgW3Nob3dFdmVudExpc3QsIHNldFNob3dFdmVudExpc3RdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldFR5cGVzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBPcGVuWERBLkV2ZW50VHlwZVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiNjRzdHJpbmcgPSAocXMudHlwZXMgPT0gdW5kZWZpbmVkID8gJyc6IHFzLnR5cGVzKVxyXG4gICAgICAgICAgICBsZXQgaWRzID0gYXRvYihiNjRzdHJpbmcgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcChhID0+IHBhcnNlSW50KGEpKVxyXG4gICAgICAgICAgICBpZihxcy50eXBlcyA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSB0cnVlKVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2godmFsdWUgPT4gdmFsdWUuU2VsZWN0ZWQgPSBpZHMuaW5kZXhPZih2YWx1ZS5JRCkgPj0gMClcclxuXHJcbiAgICAgICAgICAgIHNldFR5cGVzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldE1ldGVycygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YTogT3BlblhEQS5NZXRlcltdKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiNjRzdHJpbmcgPSAocXMubWV0ZXJzID09IHVuZGVmaW5lZCA/ICcnIDogcXMubWV0ZXJzKVxyXG4gICAgICAgICAgICBsZXQgaWRzID0gYXRvYihiNjRzdHJpbmcgYXMgc3RyaW5nKS5zcGxpdCgnLCcpLm1hcChhID0+IHBhcnNlSW50KGEpKVxyXG4gICAgICAgICAgICBpZiAocXMubWV0ZXJzID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IHRydWUpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh2YWx1ZSA9PiB2YWx1ZS5TZWxlY3RlZCA9IGlkcy5pbmRleE9mKHZhbHVlLklEKSA+PSAwKVxyXG5cclxuICAgICAgICAgICAgc2V0TWV0ZXJzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChtZXRlcnMubGVuZ3RoID09IDAgfHwgdHlwZXMubGVuZ3RoID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6IGhvbWVQYXRoICsgJ0V2ZW50U2VhcmNoJywgc2VhcmNoOiBgP2V2ZW50SUQ9JHtldmVudElEfSZzdGFydERhdGU9JHtzdGFydERhdGV9JmVuZERhdGU9JHtlbmREYXRlfSZyZXR1cm5MaW1pdD0ke3JldHVybkxpbWl0fSZ0eXBlcz0ke2J0b2EodHlwZXMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRCkudG9TdHJpbmcoKSl9Jm1ldGVycz0ke2J0b2EobWV0ZXJzLmZpbHRlcih4ID0+IHguU2VsZWN0ZWQpLm1hcCh4ID0+IHguSUQpLnRvU3RyaW5nKCkpfWB9KVxyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMSA9IEdldEV2ZW50U2VhcmNoKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBPcGVuWERBLkV2ZW50U2VhcmNoW10pID0+IHtcclxuICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBoYW5kbGUyPSBHZXRFdmVudFNlYXJjaENvdW50KCk7XHJcbiAgICAgICAgaGFuZGxlMi5kb25lKChkYXRhOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgc2V0RXZlbnRDb3VudHMoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTIuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUyLmFib3J0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSwgW3R5cGVzLCBzdGFydERhdGUsIGVuZERhdGUsIG1ldGVycywgcmV0dXJuTGltaXQsIHNvcnRGaWVsZCwgYXNjZW5kaW5nXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0VHlwZXMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuRXZlbnRUeXBlW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudFR5cGVgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldE1ldGVycygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5NZXRlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvTWV0ZXJgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldEV2ZW50U2VhcmNoKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLkV2ZW50U2VhcmNoW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvRXZlbnRTZWFyY2hgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFN0YXJ0RGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgRW5kRGF0ZTogZW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIENvdW50OiByZXR1cm5MaW1pdCxcclxuICAgICAgICAgICAgICAgIFNvcnRGaWVsZDogc29ydEZpZWxkLFxyXG4gICAgICAgICAgICAgICAgQXNjZW5kaW5nOiBhc2NlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBNZXRlcnM6IG1ldGVycy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKSxcclxuICAgICAgICAgICAgICAgIFR5cGVzOiB0eXBlcy5maWx0ZXIoeCA9PiB4LlNlbGVjdGVkKS5tYXAoeCA9PiB4LklEKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RXZlbnRTZWFyY2hDb3VudCgpOiBKUXVlcnkuanFYSFI8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50U2VhcmNoL2NvdW50YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBTdGFydERhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIEVuZERhdGU6IGVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICBDb3VudDogcmV0dXJuTGltaXQsXHJcbiAgICAgICAgICAgICAgICBTb3J0RmllbGQ6IHNvcnRGaWVsZCxcclxuICAgICAgICAgICAgICAgIEFzY2VuZGluZzogYXNjZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgTWV0ZXJzOiBtZXRlcnMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRCksXHJcbiAgICAgICAgICAgICAgICBUeXBlczogdHlwZXMuZmlsdGVyKHggPT4geC5TZWxlY3RlZCkubWFwKHggPT4geC5JRClcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiA3NSwgbWFyZ2luOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiA3NX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiIHN0eWxlPXt7Ym9yZGVyOiAnMHB4Jywgd2lkdGg6IDEwMH19PlJldHVybiAjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3JldHVybkxpbWl0fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17ZSA9PiBzZXRSZXR1cm5MaW1pdChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yNTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj41MDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xMDAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwIH19Pk1ldGVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlDaGVja0JveFNlbGVjdCBPcHRpb25zPXttZXRlcnMubWFwKHQgPT4gT2JqZWN0LmNyZWF0ZSh7IFRleHQ6IHQuTmFtZSwgVmFsdWU6IHQuSUQsIFNlbGVjdGVkOiB0LlNlbGVjdGVkIH0pKX0gT25DaGFuZ2U9eyhldnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld01ldGVycyA9IF8uY2xvbmVEZWVwKG1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWV0ZXJzLmZpbmQobWV0ZXIgPT4gbWV0ZXIuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1ldGVycyhuZXdNZXRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiIHN0eWxlPXt7IGJvcmRlcjogJzBweCcsIHdpZHRoOiAxMDAgfX0+VHlwZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlDaGVja0JveFNlbGVjdCBPcHRpb25zPXt0eXBlcy5tYXAodCA9PiBPYmplY3QuY3JlYXRlKHsgVGV4dDogdC5OYW1lLCBWYWx1ZTogdC5JRCwgU2VsZWN0ZWQ6IHQuU2VsZWN0ZWQgfSkpfSBPbkNoYW5nZT17KGV2dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHlwZXMgPSBfLmNsb25lRGVlcCh0eXBlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VHlwZXMuZmluZCh0eXBlID0+IHR5cGUuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFR5cGVzKG5ld1R5cGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIiBzdHlsZT17eyBib3JkZXI6ICcwcHgnLCB3aWR0aDogMTAwIH19PlN0YXJ0IERhdGU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtzdGFydERhdGV9IHR5cGU9XCJkYXRlXCIgb25DaGFuZ2U9e2UgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCIgc3R5bGU9e3sgYm9yZGVyOiAnMHB4Jywgd2lkdGg6IDEwMCB9fT5FbmQgRGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2VuZERhdGV9IHR5cGU9XCJkYXRlXCIgb25DaGFuZ2U9e2UgPT4gc2V0RW5kRGF0ZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gODBweClcIiwgbWFyZ2luOiAnNXB4IDVweCA1cHggNXB4ICcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggMnB4IDBweCAwcHgnLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAyfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50cyAoU2hvd2luZyB7IGV2ZW50cz8ubGVuZ3RoID8/IDB9IG9mIHsgZXZlbnRDb3VudHN9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDUsIHJpZ2h0OiAxMjAgfX0gb25DbGljaz17KCkgPT4gc2V0U2hvd0V2ZW50TGlzdCghc2hvd0V2ZW50TGlzdCl9PlZpZXcgYXMgeyhzaG93RXZlbnRMaXN0PyAnTWFnL0R1cicgOiAnTGlzdCcpfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiA1LCByaWdodDogNSB9fSBvbkNsaWNrPXsoKSA9PiBFeHBvcnRUb0NzdihldmVudHMsICdFdmVudFNlYXJjaC5jc3YnKX0+RXhwb3J0IENTVjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjc1LCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFdmVudExpc3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxPcGVuWERBLkV2ZW50U2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1N0YXJ0VGltZScsIGxhYmVsOiAnRGF0ZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnMjUlJyB9LCByb3dTdHlsZTogeyB3aWR0aDogJzI1JScgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW1ba2V5XSAhPSB1bmRlZmluZWQgPyBtb21lbnQoaXRlbVtrZXldKS5mb3JtYXQoJ01NL0REL1lZWVkgSEg6bW06c3MnKTonJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy97IGtleTogJ1N0YXJ0VGltZScsIGxhYmVsOiAnVGltZScsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICdhdXRvJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gbW9tZW50KGl0ZW1ba2V5XSkuZm9ybWF0KCdISDptbTpzcycpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01ldGVyTmFtZScsIGxhYmVsOiAnTWV0ZXInLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJ2F1dG8nIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnYXV0bycgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdFdmVudFR5cGUnLCBsYWJlbDogJ1R5cGUnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogJzEyJScgfSwgcm93U3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUGhhc2UnLCBsYWJlbDogJ1BoYXNlJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1BlclVuaXRNYWduaXR1ZGUnLCBsYWJlbDogJ01hZyAocHUpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbVtrZXldICE9IHVuZGVmaW5lZCA/KGl0ZW1ba2V5XSBhcyBudW1iZXIpLnRvRml4ZWQoMik6JycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRHVyYXRpb25TZWNvbmRzJywgbGFiZWw6ICdEdXIgKHMpJywgaGVhZGVyU3R5bGU6IHsgd2lkdGg6ICcxMiUnIH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAnMTIlJyB9LCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbVtrZXldICE9IHVuZGVmaW5lZCA/KGl0ZW1ba2V5XSBhcyBudW1iZXIpLnRvRml4ZWQoMik6JycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiAxNywgcGFkZGluZzogMCB9LCByb3dTdHlsZTogeyB3aWR0aDogMCwgcGFkZGluZzogMCB9IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtldmVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXsoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29sID09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IG9yZGVyZWQgPSBfLm9yZGVyQnkoZXZlbnRzLCBbc29ydEZpZWxkXSwgWyghYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYycpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRFdmVudHMob3JkZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKGFzY2VuZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGQuY29sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xldCBvcmRlcmVkID0gXy5vcmRlckJ5KGV2ZW50cywgW2QuY29sXSwgWyhhc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJyldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldEV2ZW50cyhvcmRlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHsgc2V0RXZlbnRJRChkYXRhLnJvdy5JRCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA2MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogaW5uZXJIZWlnaHQgLSAzNDAsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyhpdGVtKSA9PiBpdGVtLklEID09IGV2ZW50SUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWdEdXJDaGFydCBIZWlnaHQ9eyh3aW5kb3cuaW5uZXJIZWlnaHQpIC0gMjc1fSBXaWR0aD17d2luZG93LmlubmVyV2lkdGggLyAyIC0gMjB9IFBvaW50cz17ZXZlbnRzfSBPblNlbGVjdD17KGV2dCwgcG9pbnQpID0+IHNldEV2ZW50SUQocG9pbnQuSUQpfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDBweCAwcHggM3B4Jywgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5FdmVudCBQcmV2aWV3PC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAod2luZG93LmlubmVySGVpZ2h0KSAtIDIyNiwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXcgRXZlbnRJRD17ZXZlbnRJRH0gSGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMjZ9IFdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aCAvIDJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudFNlYXJjaDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hQcmV2aWV3LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8yOS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEV2ZW50U2VhcmNoT3BlblNFRSBmcm9tICcuL09wZW5TRUUvRXZlbnRTZWFyY2hPcGVuU0VFJztcclxuaW1wb3J0IEV2ZW50U2VhcmNoVHJlbkRBUCBmcm9tICcuL1RyZW5EQVAvRXZlbnRTZWFyY2hUcmVuREFQJztcclxuaW1wb3J0IEV2ZW50U2VhcmNoUFFJIGZyb20gJy4vUFFJL0V2ZW50U2VhcmNoUFFJJztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlldyA9IChwcm9wczogeyBFdmVudElEOiBudW1iZXIsIFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyIH0pID0+IHtcclxuICAgIGlmIChwcm9wcy5FdmVudElEIDw9IDApIHJldHVybiA8c3Bhbj5ObyBFdmVudCBTZWxlY3RlZCAuLi4gPC9zcGFuPjtcclxuICAgIGVsc2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEV2ZW50U2VhcmNoT3BlblNFRSBFdmVudElEPXtwcm9wcy5FdmVudElEfSBXaWR0aD17cHJvcHMuV2lkdGh9IEhlaWdodD17cHJvcHMuSGVpZ2h0IC8gMyAtIDF9IC8+XHJcbiAgICAgICAgICAgIDxFdmVudFNlYXJjaFRyZW5EQVAgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRofSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvIDMgLSAxfSAvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8RXZlbnRTZWFyY2hQUUkgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gV2lkdGg9e3Byb3BzLldpZHRofSBIZWlnaHQ9e3Byb3BzLkhlaWdodC8zIC0gMX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2VhcmNoUHJldmlldzsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hPcGVuU0VFLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMy8wMy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBmcm9tICcuL0V2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgZnJvbSAnLi9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFNlYXJjaE9wZW5TRUUocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCB0b3BtYXJnaW4gPSB7IFRvcDogMCwgUmlnaHQ6IDMwLCBCb3R0b206IDAsIExlZnQ6IDUwIH07XHJcbiAgICBjb25zdCBib3R0b21tYXJnaW4gPSB7IFRvcDogMCwgUmlnaHQ6IDMwLCBCb3R0b206MCwgTGVmdDogNTAgfTtcclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgVG9wOiAwLCBSaWdodDogMzAsIEJvdHRvbTogMCwgTGVmdDogNTAgfTtcclxuXHJcbiAgICAvL2NvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgIC8vY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20gLSA2NTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+PGEgaHJlZj17IGhvbWVQYXRoICsgJ1dhdmVmb3JtVmlld2VyP0V2ZW50SUQ9JyArIHByb3BzLkV2ZW50SUR9IHRhcmdldD1cIl9ibGFua1wiPlZpZXcgV2F2ZWZvcm08L2E+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgLSA1MCwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nVm9sdGFnZScgRGF0YVR5cGU9J1RpbWUnIE1hcmdpbj17dG9wbWFyZ2lufSBIZWlnaHQ9eyhwcm9wcy5IZWlnaHQgLSA5MCkgLyAyfSBXaWR0aD17cHJvcHMuV2lkdGh9Lz5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nQ3VycmVudCcgRGF0YVR5cGU9J1RpbWUnIE1hcmdpbj17bWFyZ2lufSBXaWR0aD17cHJvcHMuV2lkdGh9IEhlaWdodD17KHByb3BzLkhlaWdodCAtIDkwKSAvIDJ9Lz5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyBFdmVudElEPXtwcm9wcy5FdmVudElEfSBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17NDB9IERhdGFUeXBlPSdUaW1lJy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzIwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgbGluZSwgZXh0ZW50LCBheGlzQm90dG9tLCBheGlzTGVmdCwgZm9ybWF0IGFzIGQzRm9ybWF0IH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbnRlcmZhY2UgWERBRGljdGlvbmFyeSB7XHJcbiAgICBWQU46IFtudW1iZXIsIG51bWJlcl1bXSxcclxuICAgIFZCTjogW251bWJlciwgbnVtYmVyXVtdLFxyXG4gICAgVkNOOiBbbnVtYmVyLCBudW1iZXJdW10sXHJcbiAgICBJQU46IFtudW1iZXIsIG51bWJlcl1bXSxcclxuICAgIElCTjogW251bWJlciwgbnVtYmVyXVtdLFxyXG4gICAgSUNOOiBbbnVtYmVyLCBudW1iZXJdW10sXHJcbiAgICBJTkc6IFtudW1iZXIsIG51bWJlcl1bXSxcclxuXHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgPSAocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBNZWFzdXJlbWVudFR5cGU6ICdDdXJyZW50JyB8ICdWb2x0YWdlJyB8ICdUcmlwQ29pbEN1cnJlbnQnLCBEYXRhVHlwZTogJ1RpbWUnIHwgJ1N0YXRpc3RpYycgfCAnVHJlbmRpbmcnLCBNYXJnaW46IHsgTGVmdDogbnVtYmVyLCBSaWdodDogbnVtYmVyLCBUb3A6IG51bWJlciwgQm90dG9tOiBudW1iZXIgfSwgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEdldERhdGEoKTtcclxuICAgIH0sIFtwcm9wcy5FdmVudElEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9FdmVudC9EYXRhP2V2ZW50SWQ9JHtwcm9wcy5FdmVudElEfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZwaXhlbHM9JHtNYXRoLmZsb29yKHByb3BzLldpZHRoKX1gICtcclxuICAgICAgICAgICAgICAgIGAmdHlwZT0ke3Byb3BzLk1lYXN1cmVtZW50VHlwZX1gICtcclxuICAgICAgICAgICAgICAgIGAmZGF0YVR5cGU9JHtwcm9wcy5EYXRhVHlwZX1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiBEcmF3Q2hhcnQoZGF0YSkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBEcmF3Q2hhcnQoZGF0YTogWERBRGljdGlvbmFyeSkge1xyXG4gICAgICAgIHNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IHNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgcHJvcHMuV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBwcm9wcy5IZWlnaHQpXHJcblxyXG4gICAgICAgIGxldCB4ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtwcm9wcy5NYXJnaW4uTGVmdCwgcHJvcHMuV2lkdGggLSBwcm9wcy5NYXJnaW4uUmlnaHRdKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbcHJvcHMuSGVpZ2h0IC0gcHJvcHMuTWFyZ2luLlRvcCwgcHJvcHMuTWFyZ2luLkJvdHRvbV0pO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMuRGF0YVR5cGUgPT0gJ1RyZW5kaW5nJykge1xyXG4gICAgICAgICAgICBsZXQgeWV4dGVudCA9IGV4dGVudChbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiBkYXRhW2tleV0ubWFwKGQgPT4gZFsxXSkpKSlcclxuICAgICAgICAgICAgbGV0IHhleHRlbnQgPSBleHRlbnQoW10uY29uY2F0KC4uLk9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT4gZGF0YVtrZXldLm1hcChkID0+IGRbMF0pKSkpXHJcbiAgICAgICAgICAgIHkuZG9tYWluKHlleHRlbnQpO1xyXG4gICAgICAgICAgICB4LmRvbWFpbih4ZXh0ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB5ZXh0ZW50ID0gZXh0ZW50KFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IGRhdGFba2V5XS5tYXAoZCA9PiBkWzFdKSkpKVxyXG4gICAgICAgICAgICBsZXQgeGV4dGVudCA9IGV4dGVudChbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiBkYXRhW2tleV0ubWFwKGQgPT4gZFswXSkpKSlcclxuXHJcbiAgICAgICAgICAgIHlleHRlbnQgPSBbMS4yMCAqIHlleHRlbnRbMF0sIDEuMjAgKiB5ZXh0ZW50WzFdXVxyXG4gICAgICAgICAgICB5LmRvbWFpbih5ZXh0ZW50KTtcclxuICAgICAgICAgICAgeC5kb21haW4oeGV4dGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChwcm9wcy5IZWlnaHQgLSBwcm9wcy5NYXJnaW4uQm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChheGlzQm90dG9tKHgpKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cHJvcHMuTWFyZ2luLkxlZnR9LDApYClcclxuICAgICAgICAgICAgLmNhbGwoYXhpc0xlZnQoeSkudGlja3MoTWF0aC5mbG9vcihwcm9wcy5IZWlnaHQgLyA1MCkgKyAxKS50aWNrRm9ybWF0KCh2YWx1ZTogbnVtYmVyKSA9PiBkM0Zvcm1hdChcIn5zXCIpKHZhbHVlKSkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ3lheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnRleHQocHJvcHMuTWVhc3VyZW1lbnRUeXBlID09IFwiVm9sdGFnZVwiID8gXCJWb2x0YWdlXCIgOiBcIkN1cnJlbnRcIik7XHJcbiAgICAgICAgdGV4dC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MCkgdHJhbnNsYXRlKC1cIiArIHByb3BzLkhlaWdodCAvIDIgKyBcIixcIiArIChwcm9wcy5NYXJnaW4uTGVmdCAvIDMpICsgXCIpXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8W251bWJlciwgbnVtYmVyXT4oKS54KGQgPT4geChkWzBdKSkueShkID0+IHkoZFsxXSkpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5saW5lXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIilcclxuICAgICAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoZGF0YSkpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKGQ6IGtleW9mIFhEQURpY3Rpb25hcnkpID0+IGdldENvbG9yKGQpKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQ6IGtleW9mIFhEQURpY3Rpb25hcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lZnVuYyhkYXRhW2RdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IobGFiZWwpIHtcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVkEnKSA+PSAwKSByZXR1cm4gJyNBMzAwMDAnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdWQicpID49IDApIHJldHVybiAnIzAwMjlBMyc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ1ZDJykgPj0gMCkgcmV0dXJuICcjMDA3QTI5JztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignVk4nKSA+PSAwKSByZXR1cm4gJyNjM2MzYzMnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJQScpID49IDApIHJldHVybiAnI0ZGMDAwMCc7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluZGV4T2YoJ0lCJykgPj0gMCkgcmV0dXJuICcjMDA2NkNDJztcclxuICAgICAgICBpZiAobGFiZWwuaW5kZXhPZignSUMnKSA+PSAwKSByZXR1cm4gJyMzM0NDMzMnO1xyXG4gICAgICAgIGlmIChsYWJlbC5pbmRleE9mKCdJUicpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtT25lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1Ud28gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVRocmVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCMkeyhyYW5OdW1PbmUubGVuZ3RoID4gMSA/IHJhbk51bU9uZSA6IFwiMFwiICsgcmFuTnVtT25lKX0keyhyYW5OdW1Ud28ubGVuZ3RoID4gMSA/IHJhbk51bVR3byA6IFwiMFwiICsgcmFuTnVtVHdvKX0keyhyYW5OdW1UaHJlZS5sZW5ndGggPiAxID8gcmFuTnVtVGhyZWUgOiBcIjBcIiArIHJhbk51bVRocmVlKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0LCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAwIH19PjwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMjAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBzZWxlY3QsIGF4aXNCb3R0b20gfSBmcm9tICdkMyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnRBeGlzID0gKHByb3BzOiB7IEV2ZW50SUQ6IG51bWJlciwgTWFyZ2luOiB7IExlZnQ6IG51bWJlciwgUmlnaHQ6IG51bWJlciwgVG9wOiBudW1iZXIsIEJvdHRvbTogbnVtYmVyIH0sIFdpZHRoOiBudW1iZXIsIEhlaWdodDogbnVtYmVyLCBEYXRhVHlwZTogJ1RyZW5kaW5nJyB8ICdUaW1lJyB9KSA9PiB7XHJcbiAgICAvL2NvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgLy9jb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodDtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGg7XHJcblxyXG4gICAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW3hBeGlzVGlja3MsIHNldFhBeGlzVGlja3NdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8SlNYLkVsZW1lbnQ+PihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gR2V0RGF0YSgpO1xyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0V2ZW50L0RhdGE/ZXZlbnRJZD0ke3Byb3BzLkV2ZW50SUR9YCArXHJcbiAgICAgICAgICAgICAgICBgJnBpeGVscz0ke01hdGguZmxvb3Ioc3ZnV2lkdGgpfWAgK1xyXG4gICAgICAgICAgICAgICAgYCZ0eXBlPVZvbHRhZ2VgICtcclxuICAgICAgICAgICAgICAgIGAmZGF0YVR5cGU9JHtwcm9wcy5EYXRhVHlwZX1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhhbmRsZS5kb25lKGRhdGEgPT4gRHJhd0NoYXJ0KGRhdGEpKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRUaWNrRm9ybWF0dGVyKHZhbHVlLCBheGlzKSB7XHJcblxyXG4gICAgICAgIHZhciBmYWN0b3IgPSBheGlzLnRpY2tEZWNpbWFscyA/IE1hdGgucG93KDEwLCBheGlzLnRpY2tEZWNpbWFscykgOiAxO1xyXG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSBcIlwiICsgTWF0aC5yb3VuZCh2YWx1ZSAqIGZhY3RvcikgLyBmYWN0b3I7XHJcblxyXG4gICAgICAgIC8vIElmIHRpY2tEZWNpbWFscyB3YXMgc3BlY2lmaWVkLCBlbnN1cmUgdGhhdCB3ZSBoYXZlIGV4YWN0bHkgdGhhdFxyXG4gICAgICAgIC8vIG11Y2ggcHJlY2lzaW9uOyBvdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgdmFsdWUncyBvd24gcHJlY2lzaW9uLlxyXG5cclxuICAgICAgICBpZiAoYXhpcy50aWNrRGVjaW1hbHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbCA9IGZvcm1hdHRlZC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgICAgdmFyIHByZWNpc2lvbiA9IGRlY2ltYWwgPT0gLTEgPyAwIDogZm9ybWF0dGVkLmxlbmd0aCAtIGRlY2ltYWwgLSAxO1xyXG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uIDwgYXhpcy50aWNrRGVjaW1hbHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocHJlY2lzaW9uID8gZm9ybWF0dGVkIDogZm9ybWF0dGVkICsgXCIuXCIpICsgKFwiXCIgKyBmYWN0b3IpLnN1YnN0cigxLCBheGlzLnRpY2tEZWNpbWFscyAtIHByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XHJcbiAgICB9O1xyXG4gICAgLy8gcm91bmQgdG8gbmVhcmJ5IGxvd2VyIG11bHRpcGxlIG9mIGJhc2VcclxuICAgIGZ1bmN0aW9uIGZsb29ySW5CYXNlKG4sIGJhc2UpIHtcclxuICAgICAgICByZXR1cm4gYmFzZSAqIE1hdGguZmxvb3IobiAvIGJhc2UpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KGRhdGEpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgc2V0SGlkZGVuKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEhpZGRlbihmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCBzZXJpZXMgPSBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbMCwgc3ZnV2lkdGhdKS5kb21haW4oW3Nlcmllc1swXVswXSwgc2VyaWVzW3Nlcmllcy5sZW5ndGggLSAxXVswXV0pO1xyXG5cclxuICAgICAgICBsZXQgdGlja3MgPSBbXTtcclxuICAgICAgICBsZXQgc3BhbiA9IHguZG9tYWluKClbMV0gLSB4LmRvbWFpbigpWzBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB4LmRvbWFpbigpWzBdICsgc3BhbiAvIDc7IGkgPCB4LmRvbWFpbigpWzFdOyBpICs9IHNwYW4vNykge1xyXG4gICAgICAgICAgICB0aWNrcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPGcga2V5PXtpfSBjbGFzc05hbWU9XCJ0aWNrXCIgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eChpKX0sJHswfSlgfSBzdHlsZT17eyBvcGFjaXR5OiBpIDwgeC5kb21haW4oKVswXSB8fCBpID4geC5kb21haW4oKVsxXSA/IDAgOiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0nYmxhY2snIGQ9e2BNIDAsNiBWIC02YH0gc3Ryb2tlV2lkdGg9ezAuNX0+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZpbGw9XCJibGFja1wiIGZvbnRTaXplPVwic21hbGxcIiB5PVwiMjBcIiB0ZXh0QW5jaG9yPSdtaWRkbGUnPnttb21lbnQoJzE5NzAtMDEtMDFUMDA6MDA6MDAnKS5hZGQoaSwgJ21pbGxpc2Vjb25kcycpLmZvcm1hdChwcm9wcy5EYXRhVHlwZSA9PSAnVGltZScgPyAnc3MuU1NTJyA6ICdISDpzcycpfTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFhBeGlzVGlja3ModGlja3MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzdmdIZWlnaHQgLyosIG1hcmdpbjogJzB4JywgcGFkZGluZzogJzBweCcqLyB9fSBoaWRkZW49e2hpZGRlbn0+XHJcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gc3R5bGU9e3sgZmlsbDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9J2JsYWNrJyBkPXtgTSAke3Byb3BzLk1hcmdpbi5MZWZ0fSAke3Byb3BzLk1hcmdpbi5Ub3AgKyAxfSBIICR7cHJvcHMuV2lkdGggLSBwcm9wcy5NYXJnaW4uUmlnaHR9YH0gc3R5bGU9e3sgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAge3hBeGlzVGlja3N9XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBmaWxsPVwiYmxhY2tcIiBmb250U2l6ZT1cInNtYWxsXCIgeD17c3ZnV2lkdGggLyAyfSB5PXtzdmdIZWlnaHQgLSAxMH0+VGltZTwvdGV4dD5cclxuICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXM7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV2ZW50U2VhcmNoUFFJLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8wMi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBRSUNoYXJ0LCB7IFBvaW50IH0gZnJvbSAnLi9QUUlDaGFydCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRTZWFyY2hQUUkocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBbY29tcG9uZW50cywgc2V0Q29tcG9uZW50c10gPSBSZWFjdC51c2VTdGF0ZTxhbnlbXT4oW10pO1xyXG4gICAgY29uc3QgW2NvbXBvbmVudCwgc2V0Q29tcG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oe1Rlc3RDdXJ2ZUlEOiAwfSk7XHJcbiAgICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gUmVhY3QudXNlU3RhdGU8UG9pbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2N1cnZlLCBzZXRDdXJ2ZV0gPSBSZWFjdC51c2VTdGF0ZTxQb2ludFtdPihbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDb21wb25lbnQoeyBUZXN0Q3VydmVJRDogMCB9KTtcclxuICAgICAgICBzZXRDb21wb25lbnRzKFtdKTtcclxuICAgICAgICBzZXRQb2ludHMoW10pO1xyXG4gICAgICAgIHNldEN1cnZlKFtdKTtcclxuXHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgaGFuZGxlMS5kb25lKChkYXRhOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb21wb25lbnRzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlMiA9IEdldERpc3R1cmJhbmNlcygpO1xyXG4gICAgICAgIGhhbmRsZTIuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb2ludHMoZGF0YS5tYXAoZCA9PiBPYmplY3QuY3JlYXRlKHtEdXJhdGlvbjogZC5EdXJhdGlvblNlY29uZHMsIE1hZ25pdHVkZTogZC5QZXJVbml0TWFnbml0dWRlfSkpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZTEuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUxLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLkV2ZW50SURdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZTEgPSBHZXRDb21wb25lbnRDdXJ2ZSgpO1xyXG4gICAgICAgIGhhbmRsZTEuZG9uZSgoZGF0YTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgc2V0Q3VydmUoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlMS5hYm9ydCAhPSB1bmRlZmluZWQpIGhhbmRsZTEuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29tcG9uZW50XSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRDb21wb25lbnRzKCk6IEpRdWVyeS5qcVhIUjxhbnlbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9QUUkvQ29tcG9uZW50cy8ke3Byb3BzLkV2ZW50SUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRDb21wb25lbnRDdXJ2ZSgpOiBKUXVlcnkuanFYSFI8YW55W10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvUFFJL0NvbXBvbmVudC9DdXJ2ZS8ke2NvbXBvbmVudC5DdXJ2ZURCfS8ke2NvbXBvbmVudC5UZXN0Q3VydmVJRH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERpc3R1cmJhbmNlcygpOiBKUXVlcnkuanFYSFI8T3BlblhEQS5EaXN0dXJiYW5jZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL1BRSS9EaXN0cnViYW5jZXMvJHtwcm9wcy5FdmVudElEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+UFFJIC0gUmlkZS10aHJvdWdoIEN1cnZlc1xyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Y29tcG9uZW50LlRlc3RDdXJ2ZUlEfSBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgc3R5bGU9e3sgd2lkdGg6IDIwMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiA2LCB0b3A6IDQgfX0gb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmZpbmQoeCA9PiB4LlRlc3RDdXJ2ZUlEID09IGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb21wb25lbnQoYyA9PSB1bmRlZmluZWQgPyB7IFRlc3RDdXJ2ZUlEOiAwfTogYylcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+TkVSQyBQUkMtMDI0LTI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5tYXAoKGNvbXAsIGluZGV4KSA9PiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjb21wLlRlc3RDdXJ2ZUlEfT57Y29tcC5UaXRsZX08L29wdGlvbj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCAtIDUwLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQUUlDaGFydCBIZWlnaHQ9e3Byb3BzLkhlaWdodCAtIDUwfSBXaWR0aD17cHJvcHMuV2lkdGh9IFBvaW50cz17cG9pbnRzfSBDdXJ2ZT17Y3VydmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKXtcclxuICAgICAgICByZXR1cm4gZXJyIFxyXG4gICAgfVxyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFBRSUNoYXJ0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNy8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIGlEYXRhIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsIFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQZXJVbml0TWFnbml0dWRlOiBudW1iZXIsIFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICAgIE1hZ25pdHVkZTogbnVtYmVyLFxyXG4gICAgRHVyYXRpb246IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFnRHVyQ3VydmUge1xyXG4gICAgTmFtZTogc3RyaW5nLFxyXG4gICAgVmlzaWJsZTogYm9vbGVhbixcclxuICAgIENvbG9yOiBzdHJpbmcsXHJcbiAgICBQYXRoOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgUFFJQ2hhcnQgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsUG9pbnRzOiBQb2ludFtdLCBDdXJ2ZTogUG9pbnRbXSB9KSA9PiB7XHJcbiAgICBjb25zdCBjaGFydCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDMwLCBib3R0b206IDQwLCBsZWZ0OiA1MCB9O1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSBwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcbiAgICBjb25zdCB4bWF4ID0gKHByb3BzLkN1cnZlLmxlbmd0aCA+IDAgPyBkMy5tYXgocHJvcHMuQ3VydmUubWFwKGEgPT4gYS5EdXJhdGlvbikpOjQpXHJcbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoICsgbWFyZ2luLmxlZnRdKS5kb21haW4oWzAsIHhtYXhdKTtcclxuICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCwgbWFyZ2luLnRvcF0pLmRvbWFpbihbMCwxLjNdKTtcclxuICAgIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkMy5zZWxlY3QoY2hhcnQuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoY2hhcnQuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJykuYXR0cignd2lkdGgnLCBwcm9wcy5XaWR0aCkuYXR0cignaGVpZ2h0JywgcHJvcHMuSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGNsaXAgPSBzdmcuYXBwZW5kKFwiZGVmc1wiKS5hcHBlbmQoXCJzdmc6Y2xpcFBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcInBxaWNsaXBcIilcclxuICAgICAgICAgICAgLmFwcGVuZChcInN2ZzpyZWN0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHN2Z0hlaWdodCAtIG1hcmdpbi50b3ApXHJcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBtYXJnaW4ubGVmdClcclxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG1hcmdpbi50b3ApO1xyXG5cclxuICAgICAgICBsZXQgc2NhdHRlciA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjcHFpY2xpcClcIilcclxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgJ2NoYXJ0ZGF0YScpO1xyXG5cclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcueGF4aXNcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeGcgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcInhheGlzXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAocHJvcHMuSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSAtIG1hcmdpbi50b3ApICsgXCIpXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHhnLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrU2l6ZSgtKHN2Z0hlaWdodCAtIG1hcmdpbi50b3ApKSk7XHJcbiAgICAgICAgeGcuYXBwZW5kKCd0ZXh0JykudGV4dCgnRHVyYXRpb24ocyknKS5hdHRyKCd4JywgKHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0KSAvIDIgKyBtYXJnaW4ubGVmdCkuYXR0cigneScsIG1hcmdpbi5ib3R0b20gLyAyKS5hdHRyKCdmaWxsJywgJ2JsYWNrJykuc3R5bGUoJ2ZvbnQtc2l6ZScsICdzbWFsbCcpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy55YXhpc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwieWF4aXNcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwwKWApXHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0geWcuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyg4KS50aWNrU2l6ZSgtKHN2Z1dpZHRoKSkpO1xyXG4gICAgICAgIHlnLmFwcGVuZCgndGV4dCcpLnRleHQoJ1BlciBVbml0IFZvbHRhZ2UnKS5hdHRyKCd0cmFuc2Zvcm0nLCAncm90YXRlKC05MCAwLDApJykuYXR0cigneCcsIC0oc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgLyAyICsgbWFyZ2luLnRvcCkuYXR0cigneScsIC1tYXJnaW4ubGVmdCAqIDMgLyA0KS5hdHRyKCdmaWxsJywgJ2JsYWNrJykuc3R5bGUoJ2ZvbnQtc2l6ZScsICdzbWFsbCcpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdsaW5lJykuc3R5bGUoXCJzdHJva2VcIiwgXCJsaWdodGdyZXlcIikuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjgpLnN0eWxlKFwic2hhcGUtcmVuZGVyaW5nXCIsIFwiY3Jpc3BFZGdlc1wiKS5zdHlsZShcInotaW5kZXhcIiwgXCIwXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmVGdW5jID0gZDMubGluZTxQb2ludD4oKS54KHhkID0+IHgoeGQuRHVyYXRpb24pKS55KHlkID0+IHkoeWQuTWFnbml0dWRlKSk7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBzY2F0dGVyLnNlbGVjdEFsbCgncGF0aCcpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5DdXJ2ZV0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JlZCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ25vbmUnKVxyXG4gICAgICAgICAgICAuYXR0cignZCcsIChkKSA9PiBsaW5lRnVuYyhkKSk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5DdXJ2ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzY2F0dGVyLnNlbGVjdEFsbCgnZy5saW5lJylcclxuICAgICAgICAgICAgICAgIC5kYXRhKFtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAsIER1cmF0aW9uOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAsIER1cmF0aW9uOiAwLjE1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAuNDUsIER1cmF0aW9uOiAwLjE1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDAuNDUsIER1cmF0aW9uOiAwLjMgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMC42NSwgRHVyYXRpb246IDAuMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjY1LCBEdXJhdGlvbjogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjc1LCBEdXJhdGlvbjogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjc1LCBEdXJhdGlvbjogMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjkwLCBEdXJhdGlvbjogMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAwLjkwLCBEdXJhdGlvbjogNCB9XHJcbiAgICAgICAgICAgICAgICBdLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMiwgRHVyYXRpb246IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMS4yLCBEdXJhdGlvbjogMC4yMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgTWFnbml0dWRlOiAxLjE3NSwgRHVyYXRpb246IDAuMjAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1hZ25pdHVkZTogMS4xNzUsIER1cmF0aW9uOiAwLjUwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTUsIER1cmF0aW9uOiAwLjUwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTUsIER1cmF0aW9uOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTAsIER1cmF0aW9uOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNYWduaXR1ZGU6IDEuMTAsIER1cmF0aW9uOiA0IH1cclxuICAgICAgICAgICAgICAgICAgICBdXSlcclxuICAgICAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5lJylcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmUnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICdyZWQnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIChkKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVGdW5jKGQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaXJjbGVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cucG9pbnRzJylcclxuICAgICAgICAgICAgLmRhdGEoW3Byb3BzLlBvaW50c10pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxyXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsdWUnKVxyXG4gICAgICAgICAgICAuYXR0cignY3gnLCBkID0+IHgoZC5EdXJhdGlvbikpXHJcbiAgICAgICAgICAgIC5hdHRyKCdjeScsIGQgPT4geShkLk1hZ25pdHVkZSkpO1xyXG5cclxuICAgIH0sIFtwcm9wcy5Qb2ludHMsIHByb3BzLkN1cnZlXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIEdldFBhdGgoZGF0YTogUG9pbnRbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGxpbmVmdW5jID0gZDMubGluZTxQb2ludD4oKS54KGQgPT4geChkLkR1cmF0aW9uKSkueShkID0+IHkoZC5NYWduaXR1ZGUpKTtcclxuICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCdWlsZE1hZER1ckNpcmNsZXMoZGF0YTogUG9pbnRbXSkge1xyXG4gICAgICAgIGxldCBjaXJjbGVzID0gZGF0YS5tYXAoKHBvaW50LCBpbmRleCkgPT4gPGNpcmNsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkb3RcIiByPXszfSBjeD17eChwb2ludC5EdXJhdGlvbil9IGN5PXt5KHBvaW50Lk1hZ25pdHVkZSl9IGZpbGw9J2JsdWUnIC8+KTtcclxuICAgICAgICByZXR1cm4gY2lyY2xlcztcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtjaGFydH0gc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIHdpZHRoOiBwcm9wcy5XaWR0aCB9fT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBRSUNoYXJ0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFdmVudFNlYXJjaFRyZW5EQVAudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAyLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydCBmcm9tICcuLi9PcGVuU0VFL0V2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQnO1xyXG5pbXBvcnQgRXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgZnJvbSAnLi4vT3BlblNFRS9FdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0QXhpcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudFNlYXJjaFRyZW5EQVAocHJvcHM6IHsgRXZlbnRJRDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBIZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCB0b3BtYXJnaW4gPSB7IFRvcDogMTAsIFJpZ2h0OiAzMCwgQm90dG9tOiAwLCBMZWZ0OiA1MCB9O1xyXG4gICAgY29uc3QgYm90dG9tbWFyZ2luID0geyBUb3A6IDAsIFJpZ2h0OiAzMCwgQm90dG9tOiAwLCBMZWZ0OiA1MCB9O1xyXG4gICAgY29uc3QgbWFyZ2luID0geyBUb3A6IDAsIFJpZ2h0OiAzMCwgQm90dG9tOiAwLCBMZWZ0OiA1MCB9O1xyXG4gICAgLy9jb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICAvL2NvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tIC0gNjU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPjxhIGhyZWY9e2hvbWVQYXRoICsgJ1RyZW5EQVA/ZXZlbnRpZD0nICsgcHJvcHMuRXZlbnRJRH0gdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBUcmVuZGluZyBEYXRhPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogcHJvcHMuSGVpZ2h0IC0gNTAsIHBhZGRpbmc6MCB9fT5cclxuICAgICAgICAgICAgICAgIDxFdmVudFNlYXJjaFByZXZpZXdEM0NoYXJ0IEV2ZW50SUQ9e3Byb3BzLkV2ZW50SUR9IE1lYXN1cmVtZW50VHlwZT0nVm9sdGFnZScgRGF0YVR5cGU9J1RyZW5kaW5nJyBNYXJnaW49e21hcmdpbn0gV2lkdGg9e3Byb3BzLldpZHRoIC0gMTB9IEhlaWdodD17cHJvcHMuSGVpZ2h0IC8zfSAvPlxyXG4gICAgICAgICAgICAgICAgPEV2ZW50U2VhcmNoUHJldmlld0QzQ2hhcnQgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWVhc3VyZW1lbnRUeXBlPSdDdXJyZW50JyBEYXRhVHlwZT0nVHJlbmRpbmcnIE1hcmdpbj17bWFyZ2lufVdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9e3Byb3BzLkhlaWdodCAvIDN9IC8+XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRTZWFyY2hQcmV2aWV3RDNDaGFydEF4aXMgRXZlbnRJRD17cHJvcHMuRXZlbnRJRH0gTWFyZ2luPXttYXJnaW59IFdpZHRoPXtwcm9wcy5XaWR0aCAtIDEwfSBIZWlnaHQ9ezQwfSBEYXRhVHlwZT0nVHJlbmRpbmcnLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzAxLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhwb3J0VG9Dc3Y8VD4oZGF0YTogVFtdLCBmaWxlbmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPCAxKSByZXR1cm47XHJcblxyXG4gICAgdmFyIHJvd3MgPSBbT2JqZWN0LmtleXMoZGF0YVswXSldO1xyXG4gICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICByb3dzLnB1c2goT2JqZWN0LmtleXModmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldIH0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcm9jZXNzUm93ID0gZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbm5lclZhbHVlID0gcm93W2pdID09PSBudWxsID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlubmVyVmFsdWUgPSByb3dbal0udG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zZWFyY2goLyhcInwsfFxcbikvZykgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbCArPSAnLCc7XHJcbiAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVmFsICsgJ1xcbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjc3ZGaWxlID0gJyc7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY3N2RmlsZV0sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAvLyBCcm93c2VycyB0aGF0IHN1cHBvcnQgSFRNTDUgZG93bmxvYWQgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBNYWdEdXJDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDYvMjMvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGF4aXNCb3R0b20sIHNjYWxlTGluZWFyLCBzY2FsZUxvZywgZm9ybWF0IGFzIGQzRm9ybWF0LCBheGlzTGVmdCwgbGluZSwgem9vbSBhcyBkM1pvb20sIEQzWm9vbUV2ZW50IH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICcuL2dsb2JhbCc7XHJcblxyXG5pbnRlcmZhY2UgaUN1cnZlIHtcclxuICAgIElEOiBudW1iZXIsXHJcbiAgICBOYW1lOiBzdHJpbmcsXHJcbiAgICBWaXNpYmxlOiBib29sZWFuLFxyXG4gICAgQ29sb3I6IHN0cmluZyxcclxuICAgIFhIaWdoOiBudW1iZXIsXHJcbiAgICBYTG93OiBudW1iZXIsXHJcbiAgICBZTG93OiBudW1iZXIsXHJcbiAgICBZSGlnaDogbnVtYmVyLFxyXG4gICAgUGVyVW5pdE1hZ25pdHVkZTogbnVtYmVyLFxyXG4gICAgRHVyYXRpb25TZWNvbmRzOiBudW1iZXIsXHJcbiAgICBMb2FkT3JkZXI6IG51bWJlclxyXG59XHJcblxyXG5cclxuY29uc3QgTWFnRHVyQ2hhcnQgPSAocHJvcHM6IHsgV2lkdGg6IG51bWJlciwgSGVpZ2h0OiBudW1iZXIsIFBvaW50czogT3BlblhEQS5FdmVudFNlYXJjaFtdLCBPblNlbGVjdDogKGV2dDogYW55LCBwb2ludDogT3BlblhEQS5FdmVudFNlYXJjaCkgPT4gdm9pZCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDE1LCByaWdodDogMjAsIGJvdHRvbTogNjAsIGxlZnQ6IDQwIH07XHJcbiAgICBjb25zdCBzdmdXaWR0aCA9IHByb3BzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XHJcbiAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgIGNvbnN0IGNoYXJ0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW21hZ0R1ckN1cnZlRGF0YSwgc2V0TWFnRHVyQ3VydmVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPGlDdXJ2ZVtdPihbXSk7XHJcbiAgICBjb25zdCBbY3VydmUsIHNldEN1cnZlXSA9IFJlYWN0LnVzZVN0YXRlPCdJVElDJyB8ICdTRU1JJyB8ICdJICYgSUknIHwgJ0lJSScgfCAnTkVSQyc+KCdJVElDJyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBQcm9taXNlLmFsbChbR2V0TWFnRHVyQ3VydmVzKCldKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYWdEdXJDdXJ2ZURhdGEoZGF0YVswXSk7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUoZGF0YVswXSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBJbml0aWFsaXplKG1hZ0R1ckN1cnZlRGF0YSk7XHJcbiAgICB9LCBbY3VydmUsIHByb3BzLlBvaW50c10pXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWFnRHVyQ3VydmVzKCk6IFByb21pc2U8aUN1cnZlW10+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9NYWdEdXJDdXJ2ZXNgLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoZCA9PiByZXMoZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFpvb20oZXZ0KSB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZShtYWdEdXJDdXJ2ZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoY3VydmVzOiBpQ3VydmVbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDIwLCBib3R0b206IDYwLCBsZWZ0OiA0MCB9O1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gcHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuICAgICAgICBsZXQgZGF0YSA9IF8uZ3JvdXBCeShjdXJ2ZXMuZmlsdGVyKGQgPT4gZC5OYW1lLmluY2x1ZGVzKGN1cnZlKSksICdOYW1lJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFhIaWdoID0gWy4uLm5ldyBTZXQoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0/Lm1hcChkID0+IGQuWEhpZ2gpID8/IFsxMDBdKV1bMF07XHJcbiAgICAgICAgY29uc3QgWExvdyA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLlhMb3cpID8/IFswLjAwMDAwMV0pXVswXTtcclxuICAgICAgICBjb25zdCBZSGlnaCA9IFsuLi5uZXcgU2V0KGRhdGFbT2JqZWN0LmtleXMoZGF0YSlbMF1dPy5tYXAoZCA9PiBkLllIaWdoKSA/PyBbNV0pXVswXTtcclxuICAgICAgICBjb25zdCBZTG93ID0gWy4uLm5ldyBTZXQoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0/Lm1hcChkID0+IGQuWUxvdykgPz8gWzBdKV1bMF07XHJcblxyXG4gICAgICAgIHNlbGVjdChjaGFydC5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IHNlbGVjdChjaGFydC5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKS5hdHRyKCd3aWR0aCcsIHByb3BzLldpZHRoKS5hdHRyKCdoZWlnaHQnLCBwcm9wcy5IZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgY2xpcCA9IHN2Zy5hcHBlbmQoXCJkZWZzXCIpLmFwcGVuZChcInN2ZzpjbGlwUGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiY2xpcFwiKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnOnJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcClcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG1hcmdpbi5sZWZ0KVxyXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgbWFyZ2luLnRvcCk7XHJcblxyXG4gICAgICAgIGxldCBzY2F0dGVyID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNjbGlwKVwiKVxyXG4gICAgICAgICAgICAuYXR0cignaWQnLCAnY2hhcnRkYXRhJyk7XHJcblxyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQsIG1hcmdpbi50b3BdKS5kb21haW4oW1lMb3csIFlIaWdoXSk7XHJcbiAgICAgICAgbGV0IHggPSBzY2FsZUxvZygpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCArIG1hcmdpbi5sZWZ0XSkuZG9tYWluKFtYTG93LCBYSGlnaF0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy54YXhpc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwieGF4aXNcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChwcm9wcy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tIC0gbWFyZ2luLnRvcCkgKyBcIilcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0geGcuY2FsbChheGlzQm90dG9tKHgpLnRpY2tTaXplKC0oc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCkpLnRpY2tGb3JtYXQoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmxvZzEwKHZhbHVlIGFzIG51bWJlcikgPT09IE1hdGguZmxvb3IoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBkM0Zvcm1hdChcIi4wc1wiKSh2YWx1ZSlcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gJyc7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgeGcuYXBwZW5kKCd0ZXh0JykudGV4dCgnRHVyYXRpb24ocyknKS5hdHRyKCd4JywgKHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0KSAvIDIgKyBtYXJnaW4ubGVmdCkuYXR0cigneScsIG1hcmdpbi5ib3R0b20gLyAyKS5hdHRyKCdmaWxsJywgJ2JsYWNrJykuc3R5bGUoJ2ZvbnQtc2l6ZScsICdzbWFsbCcpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy55YXhpc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5ZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwieWF4aXNcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwwKWApXHJcblxyXG4gICAgICAgIGxldCB0aWNrcyA9IDEwO1xyXG4gICAgICAgIGxldCBmb3JtYXQgPSAnLjFmJztcclxuICAgICAgICBpZiAoY3VydmUgPT09ICdORVJDJykge1xyXG4gICAgICAgICAgICB0aWNrcyA9IDIwXHJcbiAgICAgICAgICAgIGZvcm1hdCA9ICcuMmYnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSB5Zy5jYWxsKGF4aXNMZWZ0KHkpLnRpY2tzKHRpY2tzLCBmb3JtYXQpLnRpY2tTaXplKC0oc3ZnV2lkdGgpKSk7XHJcbiAgICAgICAgeWcuYXBwZW5kKCd0ZXh0JykudGV4dCgnUGVyIFVuaXQgVm9sdGFnZScpLmF0dHIoJ3RyYW5zZm9ybScsICdyb3RhdGUoLTkwIDAsMCknKS5hdHRyKCd4JywgLShzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSAvIDIgKyBtYXJnaW4udG9wKS5hdHRyKCd5JywgLW1hcmdpbi5sZWZ0ICogMyAvIDQpLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKS5zdHlsZSgnZm9udC1zaXplJywgJ3NtYWxsJyk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2xpbmUnKS5zdHlsZShcInN0cm9rZVwiLCBcImxpZ2h0Z3JleVwiKS5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDAuOCkuc3R5bGUoXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJjcmlzcEVkZ2VzXCIpLnN0eWxlKFwiei1pbmRleFwiLCBcIjBcIilcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGxpbmU8aUN1cnZlPigpLngoeGQgPT4geCh4ZC5EdXJhdGlvblNlY29uZHMpKS55KHlkID0+IHkoeWQuUGVyVW5pdE1hZ25pdHVkZSkpO1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cubGluZXMnKVxyXG4gICAgICAgICAgICAuZGF0YShbZGF0YV0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGluZXMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcclxuICAgICAgICAgICAgLmRhdGEoZCA9PiBPYmplY3Qua2V5cyhkKSBhcyBzdHJpbmdbXSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdkJywgKGQpID0+IGxpbmVGdW5jKGRhdGFbZF0pKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBkaXYgZm9yIHRoZSB0b29sdGlwXHJcbiAgICAgICAgc2VsZWN0KGNoYXJ0LmN1cnJlbnQpLnNlbGVjdEFsbCgnLnRvb2x0aXAnKS5yZW1vdmUoKVxyXG4gICAgICAgIHZhciB0b29sdGlwID0gc2VsZWN0KGNoYXJ0LmN1cnJlbnQpLmFwcGVuZChcImRpdlwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCAnZGFya2dyYXknKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIC45KVxyXG4gICAgICAgICAgICAuYXR0cignaGlkZGVuJywgJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBjb25zdCBjaXJjbGVzID0gc2NhdHRlci5zZWxlY3RBbGwoJ2cucG9pbnRzJylcclxuICAgICAgICAgICAgLmRhdGEoW3Byb3BzLlBvaW50c10pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKVxyXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxyXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXHJcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsdWUnKVxyXG4gICAgICAgICAgICAuYXR0cignY3gnLCBkID0+IHgoZC5EdXJhdGlvblNlY29uZHMpKVxyXG4gICAgICAgICAgICAuYXR0cignY3knLCBkID0+IHkoZC5QZXJVbml0TWFnbml0dWRlKSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHByb3BzLk9uU2VsZWN0KG51bGwsIGQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihldmVudCwgZCApe1xyXG4gICAgICAgICAgICAgICAgLy9kMy5zZWxlY3QodGhpcykuYXR0cignc3Ryb2tlJywgJ2JsYWNrJyk7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbigyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hpZGRlbicsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUoXCJsZWZ0XCIsIChldmVudC5vZmZzZXRYIC0gMTUwKSArIFwicHhcIilcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGV2ZW50Lm9mZnNldFkgLSA3NSkgKyBcInB4XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoYFxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0nJz5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPk1ldGVyPC90ZD48dGQ+JHtkLk1ldGVyTmFtZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5TdGFydCBUaW1lPC90ZD48dGQ+JHtkLlN0YXJ0VGltZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5FdmVudCBUeXBlPC90ZD48dGQ+JHtkLkV2ZW50VHlwZX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD5NYWduaXR1ZGU8L3RkPjx0ZD4ke2QuUGVyVW5pdE1hZ25pdHVkZS50b0ZpeGVkKDIpfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPkR1cmF0aW9uPC90ZD48dGQ+JHtkLkR1cmF0aW9uU2Vjb25kcy50b0ZpeGVkKDIpfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPiAgIFxyXG4gICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICAvL2QzLnNlbGVjdCh0aGlzKS5hdHRyKCdzdHJva2UnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIC8vaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kdXJhdGlvbig1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIC8vfSwgNTAwKTtcclxuICAgICAgICAgICAgfSkgICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIGxldCB6b29tID0gZDNab29tKCkub24oJ3pvb20nLCBmdW5jdGlvbiAoZXZlbnQ6IEQzWm9vbUV2ZW50PFNWR0VsZW1lbnQsIGlDdXJ2ZT4sIGQpIHtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGV2ZW50LnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRYID0gdHJhbnNmb3JtLnJlc2NhbGVYKHgpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFkgPSB0cmFuc2Zvcm0ucmVzY2FsZVkoeSk7XHJcbiAgICAgICAgICAgIHhBeGlzLmNhbGwoYXhpc0JvdHRvbSh1cGRhdGVkWCkudGlja1NpemUoLShzdmdIZWlnaHQgLSBtYXJnaW4udG9wKSkudGlja0Zvcm1hdCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmxvZzEwKHZhbHVlIGFzIG51bWJlcikgPT09IE1hdGguZmxvb3IoTWF0aC5sb2cxMCh2YWx1ZSBhcyBudW1iZXIpKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDNGb3JtYXQoXCIuMHNcIikodmFsdWUgYXMgbnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgeUF4aXMuY2FsbChheGlzTGVmdCh1cGRhdGVkWSkudGlja1NpemUoLShzdmdXaWR0aCkpKTtcclxuICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbCgnbGluZScpLnN0eWxlKFwic3Ryb2tlXCIsIFwibGlnaHRncmV5XCIpLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC44KS5zdHlsZShcInNoYXBlLXJlbmRlcmluZ1wiLCBcImNyaXNwRWRnZXNcIikuc3R5bGUoXCJ6LWluZGV4XCIsIFwiMFwiKVxyXG5cclxuICAgICAgICAgICAgY2lyY2xlcy5hdHRyKCdjeCcsIGQgPT4gdXBkYXRlZFgoZC5EdXJhdGlvblNlY29uZHMpKS5hdHRyKCdjeScsIGQgPT4gdXBkYXRlZFkoZC5QZXJVbml0TWFnbml0dWRlKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwTGluZUZ1bmMgPSBsaW5lPGlDdXJ2ZT4oKS54KHhkID0+IHVwZGF0ZWRYKHhkLkR1cmF0aW9uU2Vjb25kcykpLnkoeWQgPT4gdXBkYXRlZFkoeWQuUGVyVW5pdE1hZ25pdHVkZSkpXHJcbiAgICAgICAgICAgIGxpbmVzLmF0dHIoJ2QnLCBkID0+IHVwTGluZUZ1bmMoZGF0YVtkXSkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHN2Zy5jYWxsKHpvb20pXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoJ3VzZScpLmF0dHIoJ3hsaW5rOmhyZWYnLCAnI2NoYXJ0ZGF0YScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2NoYXJ0fSBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCwgd2lkdGg6IHByb3BzLldpZHRoIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtjdXJ2ZX0gY2hlY2tlZD17Y3VydmUgPT09ICdJVElDJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdJVElDJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5JVElDPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnU0VNSSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDdXJ2ZSgnU0VNSScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgPlNFTUkgRjQ3PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17Y3VydmV9IGNoZWNrZWQ9e2N1cnZlID09PSAnSSAmIElJJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdJICYgSUknKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPklFRUUgMTY2OCBSZWNvbW1lbmRlZCBUeXBlIEkgJiBJSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e2N1cnZlfSBjaGVja2VkPXtjdXJ2ZSA9PT0gJ0lJSSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDdXJ2ZSgnSUlJJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5JRUVFIDE2NjggUmVjb21tZW5kZWQgVHlwZSBJSUk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtjdXJ2ZX0gY2hlY2tlZD17Y3VydmUgPT09ICdORVJDJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldEN1cnZlKCdORVJDJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5ORVJDIFBSQy0wMjQtMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogOTUsIGxlZnQ6IHN2Z1dpZHRoIC0gIG1hcmdpbi5yaWdodCB9fSBvbkNsaWNrPXtyZXNldFpvb219PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hZ0R1ckNoYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=