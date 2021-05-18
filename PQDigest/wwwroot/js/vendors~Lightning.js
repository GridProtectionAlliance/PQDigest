(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~Lightning"],{

/***/ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
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

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************/
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

/***/ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************/
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

/***/ "../node_modules/fast-deep-equal/index.js":
/*!************************************************!*\
  !*** ../node_modules/fast-deep-equal/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


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

/***/ "../node_modules/mgrs/mgrs.js":
/*!************************************!*\
  !*** ../node_modules/mgrs/mgrs.js ***!
  \************************************/
/*! exports provided: default, forward, inverse, toPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPoint", function() { return toPoint; });



/**
 * UTM zones are grouped, and assigned to one of a group of 6
 * sets.
 *
 * {int} @private
 */
var NUM_100K_SETS = 6;

/**
 * The column letters (for easting) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';

/**
 * The row letters (for northing) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';

var A = 65; // A
var I = 73; // I
var O = 79; // O
var V = 86; // V
var Z = 90; // Z
/* harmony default export */ __webpack_exports__["default"] = ({
  forward: forward,
  inverse: inverse,
  toPoint: toPoint
});
/**
 * Conversion of lat/lon to MGRS.
 *
 * @param {object} ll Object literal with lat and lon properties on a
 *     WGS84 ellipsoid.
 * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
 *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
 * @return {string} the MGRS string for the given location and accuracy.
 */
function forward(ll, accuracy) {
  accuracy = accuracy || 5; // default accuracy 1m
  return encode(LLtoUTM({
    lat: ll[1],
    lon: ll[0]
  }), accuracy);
};

/**
 * Conversion of MGRS to lat/lon.
 *
 * @param {string} mgrs MGRS string.
 * @return {array} An array with left (longitude), bottom (latitude), right
 *     (longitude) and top (latitude) values in WGS84, representing the
 *     bounding box for the provided MGRS reference.
 */
function inverse(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
  }
  return [bbox.left, bbox.bottom, bbox.right, bbox.top];
};

function toPoint(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat];
  }
  return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
};
/**
 * Conversion from degrees to radians.
 *
 * @private
 * @param {number} deg the angle in degrees.
 * @return {number} the angle in radians.
 */
function degToRad(deg) {
  return (deg * (Math.PI / 180.0));
}

/**
 * Conversion from radians to degrees.
 *
 * @private
 * @param {number} rad the angle in radians.
 * @return {number} the angle in degrees.
 */
function radToDeg(rad) {
  return (180.0 * (rad / Math.PI));
}

/**
 * Converts a set of Longitude and Latitude co-ordinates to UTM
 * using the WGS84 ellipsoid.
 *
 * @private
 * @param {object} ll Object literal with lat and lon properties
 *     representing the WGS84 coordinate to be converted.
 * @return {object} Object literal containing the UTM value with easting,
 *     northing, zoneNumber and zoneLetter properties, and an optional
 *     accuracy property in digits. Returns null if the conversion failed.
 */
function LLtoUTM(ll) {
  var Lat = ll.lat;
  var Long = ll.lon;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var k0 = 0.9996;
  var LongOrigin;
  var eccPrimeSquared;
  var N, T, C, A, M;
  var LatRad = degToRad(Lat);
  var LongRad = degToRad(Long);
  var LongOriginRad;
  var ZoneNumber;
  // (int)
  ZoneNumber = Math.floor((Long + 180) / 6) + 1;

  //Make sure the longitude 180.00 is in Zone 60
  if (Long === 180) {
    ZoneNumber = 60;
  }

  // Special zone for Norway
  if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
    ZoneNumber = 32;
  }

  // Special zones for Svalbard
  if (Lat >= 72.0 && Lat < 84.0) {
    if (Long >= 0.0 && Long < 9.0) {
      ZoneNumber = 31;
    }
    else if (Long >= 9.0 && Long < 21.0) {
      ZoneNumber = 33;
    }
    else if (Long >= 21.0 && Long < 33.0) {
      ZoneNumber = 35;
    }
    else if (Long >= 33.0 && Long < 42.0) {
      ZoneNumber = 37;
    }
  }

  LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
  // in middle of
  // zone
  LongOriginRad = degToRad(LongOrigin);

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
  T = Math.tan(LatRad) * Math.tan(LatRad);
  C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
  A = Math.cos(LatRad) * (LongRad - LongOriginRad);

  M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - (35 * eccSquared * eccSquared * eccSquared / 3072) * Math.sin(6 * LatRad));

  var UTMEasting = (k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0);

  var UTMNorthing = (k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0)));
  if (Lat < 0.0) {
    UTMNorthing += 10000000.0; //10000000 meter offset for
    // southern hemisphere
  }

  return {
    northing: Math.round(UTMNorthing),
    easting: Math.round(UTMEasting),
    zoneNumber: ZoneNumber,
    zoneLetter: getLetterDesignator(Lat)
  };
}

/**
 * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
 * class where the Zone can be specified as a single string eg."60N" which
 * is then broken down into the ZoneNumber and ZoneLetter.
 *
 * @private
 * @param {object} utm An object literal with northing, easting, zoneNumber
 *     and zoneLetter properties. If an optional accuracy property is
 *     provided (in meters), a bounding box will be returned instead of
 *     latitude and longitude.
 * @return {object} An object literal containing either lat and lon values
 *     (if no accuracy was provided), or top, right, bottom and left values
 *     for the bounding box calculated according to the provided accuracy.
 *     Returns null if the conversion failed.
 */
function UTMtoLL(utm) {

  var UTMNorthing = utm.northing;
  var UTMEasting = utm.easting;
  var zoneLetter = utm.zoneLetter;
  var zoneNumber = utm.zoneNumber;
  // check the ZoneNummber is valid
  if (zoneNumber < 0 || zoneNumber > 60) {
    return null;
  }

  var k0 = 0.9996;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var eccPrimeSquared;
  var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
  var N1, T1, C1, R1, D, M;
  var LongOrigin;
  var mu, phi1Rad;

  // remove 500,000 meter offset for longitude
  var x = UTMEasting - 500000.0;
  var y = UTMNorthing;

  // We must know somehow if we are in the Northern or Southern
  // hemisphere, this is the only time we use the letter So even
  // if the Zone letter isn't exactly correct it should indicate
  // the hemisphere correctly
  if (zoneLetter < 'N') {
    y -= 10000000.0; // remove 10,000,000 meter offset used
    // for southern hemisphere
  }

  // There are 60 zones with zone 1 being at West -180 to -174
  LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
  // in middle of
  // zone

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  M = y / k0;
  mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

  phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * mu);
  // double phi1 = ProjMath.radToDeg(phi1Rad);

  N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
  T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
  C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
  R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
  D = x / (N1 * k0);

  var lat = phi1Rad - (N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
  lat = radToDeg(lat);

  var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
  lon = LongOrigin + radToDeg(lon);

  var result;
  if (utm.accuracy) {
    var topRight = UTMtoLL({
      northing: utm.northing + utm.accuracy,
      easting: utm.easting + utm.accuracy,
      zoneLetter: utm.zoneLetter,
      zoneNumber: utm.zoneNumber
    });
    result = {
      top: topRight.lat,
      right: topRight.lon,
      bottom: lat,
      left: lon
    };
  }
  else {
    result = {
      lat: lat,
      lon: lon
    };
  }
  return result;
}

/**
 * Calculates the MGRS letter designator for the given latitude.
 *
 * @private
 * @param {number} lat The latitude in WGS84 to get the letter designator
 *     for.
 * @return {char} The letter designator.
 */
function getLetterDesignator(lat) {
  //This is here as an error flag to show that the Latitude is
  //outside MGRS limits
  var LetterDesignator = 'Z';

  if ((84 >= lat) && (lat >= 72)) {
    LetterDesignator = 'X';
  }
  else if ((72 > lat) && (lat >= 64)) {
    LetterDesignator = 'W';
  }
  else if ((64 > lat) && (lat >= 56)) {
    LetterDesignator = 'V';
  }
  else if ((56 > lat) && (lat >= 48)) {
    LetterDesignator = 'U';
  }
  else if ((48 > lat) && (lat >= 40)) {
    LetterDesignator = 'T';
  }
  else if ((40 > lat) && (lat >= 32)) {
    LetterDesignator = 'S';
  }
  else if ((32 > lat) && (lat >= 24)) {
    LetterDesignator = 'R';
  }
  else if ((24 > lat) && (lat >= 16)) {
    LetterDesignator = 'Q';
  }
  else if ((16 > lat) && (lat >= 8)) {
    LetterDesignator = 'P';
  }
  else if ((8 > lat) && (lat >= 0)) {
    LetterDesignator = 'N';
  }
  else if ((0 > lat) && (lat >= -8)) {
    LetterDesignator = 'M';
  }
  else if ((-8 > lat) && (lat >= -16)) {
    LetterDesignator = 'L';
  }
  else if ((-16 > lat) && (lat >= -24)) {
    LetterDesignator = 'K';
  }
  else if ((-24 > lat) && (lat >= -32)) {
    LetterDesignator = 'J';
  }
  else if ((-32 > lat) && (lat >= -40)) {
    LetterDesignator = 'H';
  }
  else if ((-40 > lat) && (lat >= -48)) {
    LetterDesignator = 'G';
  }
  else if ((-48 > lat) && (lat >= -56)) {
    LetterDesignator = 'F';
  }
  else if ((-56 > lat) && (lat >= -64)) {
    LetterDesignator = 'E';
  }
  else if ((-64 > lat) && (lat >= -72)) {
    LetterDesignator = 'D';
  }
  else if ((-72 > lat) && (lat >= -80)) {
    LetterDesignator = 'C';
  }
  return LetterDesignator;
}

/**
 * Encodes a UTM location as MGRS string.
 *
 * @private
 * @param {object} utm An object literal with easting, northing,
 *     zoneLetter, zoneNumber
 * @param {number} accuracy Accuracy in digits (1-5).
 * @return {string} MGRS string for the given UTM location.
 */
function encode(utm, accuracy) {
  // prepend with leading zeroes
  var seasting = "00000" + utm.easting,
    snorthing = "00000" + utm.northing;

  return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
}

/**
 * Get the two letter 100k designator for a given UTM easting,
 * northing and zone number value.
 *
 * @private
 * @param {number} easting
 * @param {number} northing
 * @param {number} zoneNumber
 * @return the two letter 100k designator for the given UTM location.
 */
function get100kID(easting, northing, zoneNumber) {
  var setParm = get100kSetForZone(zoneNumber);
  var setColumn = Math.floor(easting / 100000);
  var setRow = Math.floor(northing / 100000) % 20;
  return getLetter100kID(setColumn, setRow, setParm);
}

/**
 * Given a UTM zone number, figure out the MGRS 100K set it is in.
 *
 * @private
 * @param {number} i An UTM zone number.
 * @return {number} the 100k set the UTM zone is in.
 */
function get100kSetForZone(i) {
  var setParm = i % NUM_100K_SETS;
  if (setParm === 0) {
    setParm = NUM_100K_SETS;
  }

  return setParm;
}

/**
 * Get the two-letter MGRS 100k designator given information
 * translated from the UTM northing, easting and zone number.
 *
 * @private
 * @param {number} column the column index as it relates to the MGRS
 *        100k set spreadsheet, created from the UTM easting.
 *        Values are 1-8.
 * @param {number} row the row index as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM northing value. Values
 *        are from 0-19.
 * @param {number} parm the set block, as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM zone. Values are from
 *        1-60.
 * @return two letter MGRS 100k code.
 */
function getLetter100kID(column, row, parm) {
  // colOrigin and rowOrigin are the letters at the origin of the set
  var index = parm - 1;
  var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
  var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

  // colInt and rowInt are the letters to build to return
  var colInt = colOrigin + column - 1;
  var rowInt = rowOrigin + row;
  var rollover = false;

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
    rollover = true;
  }

  if (colInt === I || (colOrigin < I && colInt > I) || ((colInt > I || colOrigin < I) && rollover)) {
    colInt++;
  }

  if (colInt === O || (colOrigin < O && colInt > O) || ((colInt > O || colOrigin < O) && rollover)) {
    colInt++;

    if (colInt === I) {
      colInt++;
    }
  }

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
    rollover = true;
  }
  else {
    rollover = false;
  }

  if (((rowInt === I) || ((rowOrigin < I) && (rowInt > I))) || (((rowInt > I) || (rowOrigin < I)) && rollover)) {
    rowInt++;
  }

  if (((rowInt === O) || ((rowOrigin < O) && (rowInt > O))) || (((rowInt > O) || (rowOrigin < O)) && rollover)) {
    rowInt++;

    if (rowInt === I) {
      rowInt++;
    }
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
  }

  var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
  return twoLetter;
}

/**
 * Decode the UTM parameters from a MGRS string.
 *
 * @private
 * @param {string} mgrsString an UPPERCASE coordinate string is expected.
 * @return {object} An object literal with easting, northing, zoneLetter,
 *     zoneNumber and accuracy (in meters) properties.
 */
function decode(mgrsString) {

  if (mgrsString && mgrsString.length === 0) {
    throw ("MGRSPoint coverting from nothing");
  }

  var length = mgrsString.length;

  var hunK = null;
  var sb = "";
  var testChar;
  var i = 0;

  // get Zone number
  while (!(/[A-Z]/).test(testChar = mgrsString.charAt(i))) {
    if (i >= 2) {
      throw ("MGRSPoint bad conversion from: " + mgrsString);
    }
    sb += testChar;
    i++;
  }

  var zoneNumber = parseInt(sb, 10);

  if (i === 0 || i + 3 > length) {
    // A good MGRS string has to be 4-5 digits long,
    // ##AAA/#AAA at least.
    throw ("MGRSPoint bad conversion from: " + mgrsString);
  }

  var zoneLetter = mgrsString.charAt(i++);

  // Should we check the zone letter here? Why not.
  if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
    throw ("MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString);
  }

  hunK = mgrsString.substring(i, i += 2);

  var set = get100kSetForZone(zoneNumber);

  var east100k = getEastingFromChar(hunK.charAt(0), set);
  var north100k = getNorthingFromChar(hunK.charAt(1), set);

  // We have a bug where the northing may be 2000000 too low.
  // How
  // do we know when to roll over?

  while (north100k < getMinNorthing(zoneLetter)) {
    north100k += 2000000;
  }

  // calculate the char index for easting/northing separator
  var remainder = length - i;

  if (remainder % 2 !== 0) {
    throw ("MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString);
  }

  var sep = remainder / 2;

  var sepEasting = 0.0;
  var sepNorthing = 0.0;
  var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
  if (sep > 0) {
    accuracyBonus = 100000.0 / Math.pow(10, sep);
    sepEastingString = mgrsString.substring(i, i + sep);
    sepEasting = parseFloat(sepEastingString) * accuracyBonus;
    sepNorthingString = mgrsString.substring(i + sep);
    sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
  }

  easting = sepEasting + east100k;
  northing = sepNorthing + north100k;

  return {
    easting: easting,
    northing: northing,
    zoneLetter: zoneLetter,
    zoneNumber: zoneNumber,
    accuracy: accuracyBonus
  };
}

/**
 * Given the first letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the easting value that
 * should be added to the other, secondary easting value.
 *
 * @private
 * @param {char} e The first letter from a two-letter MGRS 100´k zone.
 * @param {number} set The MGRS table set for the zone number.
 * @return {number} The easting value for the given letter and set.
 */
function getEastingFromChar(e, set) {
  // colOrigin is the letter at the origin of the set for the
  // column
  var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
  var eastingValue = 100000.0;
  var rewindMarker = false;

  while (curCol !== e.charCodeAt(0)) {
    curCol++;
    if (curCol === I) {
      curCol++;
    }
    if (curCol === O) {
      curCol++;
    }
    if (curCol > Z) {
      if (rewindMarker) {
        throw ("Bad character: " + e);
      }
      curCol = A;
      rewindMarker = true;
    }
    eastingValue += 100000.0;
  }

  return eastingValue;
}

/**
 * Given the second letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the northing value that
 * should be added to the other, secondary northing value. You have to
 * remember that Northings are determined from the equator, and the vertical
 * cycle of letters mean a 2000000 additional northing meters. This happens
 * approx. every 18 degrees of latitude. This method does *NOT* count any
 * additional northings. You have to figure out how many 2000000 meters need
 * to be added for the zone letter of the MGRS coordinate.
 *
 * @private
 * @param {char} n Second letter of the MGRS 100k zone
 * @param {number} set The MGRS table set number, which is dependent on the
 *     UTM zone number.
 * @return {number} The northing value for the given letter and set.
 */
function getNorthingFromChar(n, set) {

  if (n > 'V') {
    throw ("MGRSPoint given invalid Northing " + n);
  }

  // rowOrigin is the letter at the origin of the set for the
  // column
  var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
  var northingValue = 0.0;
  var rewindMarker = false;

  while (curRow !== n.charCodeAt(0)) {
    curRow++;
    if (curRow === I) {
      curRow++;
    }
    if (curRow === O) {
      curRow++;
    }
    // fixing a bug making whole application hang in this loop
    // when 'n' is a wrong character
    if (curRow > V) {
      if (rewindMarker) { // making sure that this loop ends
        throw ("Bad character: " + n);
      }
      curRow = A;
      rewindMarker = true;
    }
    northingValue += 100000.0;
  }

  return northingValue;
}

/**
 * The function getMinNorthing returns the minimum northing value of a MGRS
 * zone.
 *
 * Ported from Geotrans' c Lattitude_Band_Value structure table.
 *
 * @private
 * @param {char} zoneLetter The MGRS zone to get the min northing for.
 * @return {number}
 */
function getMinNorthing(zoneLetter) {
  var northing;
  switch (zoneLetter) {
  case 'C':
    northing = 1100000.0;
    break;
  case 'D':
    northing = 2000000.0;
    break;
  case 'E':
    northing = 2800000.0;
    break;
  case 'F':
    northing = 3700000.0;
    break;
  case 'G':
    northing = 4600000.0;
    break;
  case 'H':
    northing = 5500000.0;
    break;
  case 'J':
    northing = 6400000.0;
    break;
  case 'K':
    northing = 7300000.0;
    break;
  case 'L':
    northing = 8200000.0;
    break;
  case 'M':
    northing = 9100000.0;
    break;
  case 'N':
    northing = 0.0;
    break;
  case 'P':
    northing = 800000.0;
    break;
  case 'Q':
    northing = 1700000.0;
    break;
  case 'R':
    northing = 2600000.0;
    break;
  case 'S':
    northing = 3500000.0;
    break;
  case 'T':
    northing = 4400000.0;
    break;
  case 'U':
    northing = 5300000.0;
    break;
  case 'V':
    northing = 6200000.0;
    break;
  case 'W':
    northing = 7000000.0;
    break;
  case 'X':
    northing = 7900000.0;
    break;
  default:
    northing = -1.0;
  }
  if (northing >= 0.0) {
    return northing;
  }
  else {
    throw ("Invalid zone letter: " + zoneLetter);
  }

}


/***/ }),

/***/ "../node_modules/proj4/lib/Point.js":
/*!******************************************!*\
  !*** ../node_modules/proj4/lib/Point.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mgrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mgrs */ "../node_modules/mgrs/mgrs.js");


function Point(x, y, z) {
  if (!(this instanceof Point)) {
    return new Point(x, y, z);
  }
  if (Array.isArray(x)) {
    this.x = x[0];
    this.y = x[1];
    this.z = x[2] || 0.0;
  } else if(typeof x === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.z = x.z || 0.0;
  } else if (typeof x === 'string' && typeof y === 'undefined') {
    var coords = x.split(',');
    this.x = parseFloat(coords[0], 10);
    this.y = parseFloat(coords[1], 10);
    this.z = parseFloat(coords[2], 10) || 0.0;
  } else {
    this.x = x;
    this.y = y;
    this.z = z || 0.0;
  }
  console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
}

Point.fromMGRS = function(mgrsStr) {
  return new Point(Object(mgrs__WEBPACK_IMPORTED_MODULE_0__["toPoint"])(mgrsStr));
};
Point.prototype.toMGRS = function(accuracy) {
  return Object(mgrs__WEBPACK_IMPORTED_MODULE_0__["forward"])([this.x, this.y], accuracy);
};
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "../node_modules/proj4/lib/Proj.js":
/*!*****************************************!*\
  !*** ../node_modules/proj4/lib/Proj.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseCode */ "../node_modules/proj4/lib/parseCode.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend */ "../node_modules/proj4/lib/extend.js");
/* harmony import */ var _projections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projections */ "../node_modules/proj4/lib/projections.js");
/* harmony import */ var _deriveConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deriveConstants */ "../node_modules/proj4/lib/deriveConstants.js");
/* harmony import */ var _constants_Datum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/Datum */ "../node_modules/proj4/lib/constants/Datum.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datum */ "../node_modules/proj4/lib/datum.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match */ "../node_modules/proj4/lib/match.js");








function Projection(srsCode,callback) {
  if (!(this instanceof Projection)) {
    return new Projection(srsCode);
  }
  callback = callback || function(error){
    if(error){
      throw error;
    }
  };
  var json = Object(_parseCode__WEBPACK_IMPORTED_MODULE_0__["default"])(srsCode);
  if(typeof json !== 'object'){
    callback(srsCode);
    return;
  }
  var ourProj = Projection.projections.get(json.projName);
  if(!ourProj){
    callback(srsCode);
    return;
  }
  if (json.datumCode && json.datumCode !== 'none') {
    var datumDef = Object(_match__WEBPACK_IMPORTED_MODULE_6__["default"])(_constants_Datum__WEBPACK_IMPORTED_MODULE_4__["default"], json.datumCode);
    if (datumDef) {
      json.datum_params = datumDef.towgs84 ? datumDef.towgs84.split(',') : null;
      json.ellps = datumDef.ellipse;
      json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
    }
  }
  json.k0 = json.k0 || 1.0;
  json.axis = json.axis || 'enu';
  json.ellps = json.ellps || 'wgs84';
  var sphere_ = Object(_deriveConstants__WEBPACK_IMPORTED_MODULE_3__["sphere"])(json.a, json.b, json.rf, json.ellps, json.sphere);
  var ecc = Object(_deriveConstants__WEBPACK_IMPORTED_MODULE_3__["eccentricity"])(sphere_.a, sphere_.b, sphere_.rf, json.R_A);
  var datumObj = json.datum || Object(_datum__WEBPACK_IMPORTED_MODULE_5__["default"])(json.datumCode, json.datum_params, sphere_.a, sphere_.b, ecc.es, ecc.ep2);

  Object(_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(this, json); // transfer everything over from the projection because we don't know what we'll need
  Object(_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ourProj); // transfer all the methods from the projection

  // copy the 4 things over we calulated in deriveConstants.sphere
  this.a = sphere_.a;
  this.b = sphere_.b;
  this.rf = sphere_.rf;
  this.sphere = sphere_.sphere;

  // copy the 3 things we calculated in deriveConstants.eccentricity
  this.es = ecc.es;
  this.e = ecc.e;
  this.ep2 = ecc.ep2;

  // add in the datum object
  this.datum = datumObj;

  // init the projection
  this.init();

  // legecy callback from back in the day when it went to spatialreference.org
  callback(null, this);

}
Projection.projections = _projections__WEBPACK_IMPORTED_MODULE_2__["default"];
Projection.projections.start();
/* harmony default export */ __webpack_exports__["default"] = (Projection);


/***/ }),

/***/ "../node_modules/proj4/lib/adjust_axis.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/adjust_axis.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(crs, denorm, point) {
  var xin = point.x,
    yin = point.y,
    zin = point.z || 0.0;
  var v, t, i;
  var out = {};
  for (i = 0; i < 3; i++) {
    if (denorm && i === 2 && point.z === undefined) {
      continue;
    }
    if (i === 0) {
      v = xin;
      if ("ew".indexOf(crs.axis[i]) !== -1) {
        t = 'x';
      } else {
        t = 'y';
      }

    }
    else if (i === 1) {
      v = yin;
      if ("ns".indexOf(crs.axis[i]) !== -1) {
        t = 'y';
      } else {
        t = 'x';
      }
    }
    else {
      v = zin;
      t = 'z';
    }
    switch (crs.axis[i]) {
    case 'e':
    case 'w':
    case 'n':
    case 's':
      out[t] = v;
      break;
    case 'u':
      if (point[t] !== undefined) {
        out.z = v;
      }
      break;
    case 'd':
      if (point[t] !== undefined) {
        out.z = -v;
      }
      break;
    default:
      //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
      return null;
    }
  }
  return out;
});


/***/ }),

/***/ "../node_modules/proj4/lib/checkSanity.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/checkSanity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (point) {
  checkCoord(point.x);
  checkCoord(point.y);
});
function checkCoord(num) {
  if (typeof Number.isFinite === 'function') {
    if (Number.isFinite(num)) {
      return;
    }
    throw new TypeError('coordinates must be finite numbers');
  }
  if (typeof num !== 'number' || num !== num || !isFinite(num)) {
    throw new TypeError('coordinates must be finite numbers');
  }
}


/***/ }),

/***/ "../node_modules/proj4/lib/common/adjust_lat.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/common/adjust_lat.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign */ "../node_modules/proj4/lib/common/sign.js");



/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (Math.abs(x) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) ? x : (x - (Object(_sign__WEBPACK_IMPORTED_MODULE_1__["default"])(x) * Math.PI));
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/adjust_lon.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/common/adjust_lon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign */ "../node_modules/proj4/lib/common/sign.js");




/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (Math.abs(x) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) ? x : (x - (Object(_sign__WEBPACK_IMPORTED_MODULE_1__["default"])(x) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["TWO_PI"]));
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/adjust_zone.js":
/*!*******************************************************!*\
  !*** ../node_modules/proj4/lib/common/adjust_zone.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");


/* harmony default export */ __webpack_exports__["default"] = (function(zone, lon) {
  if (zone === undefined) {
    zone = Math.floor((Object(_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon) + Math.PI) * 30 / Math.PI) + 1;

    if (zone < 0) {
      return 0;
    } else if (zone > 60) {
      return 60;
    }
  }
  return zone;
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/asinhy.js":
/*!**************************************************!*\
  !*** ../node_modules/proj4/lib/common/asinhy.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hypot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hypot */ "../node_modules/proj4/lib/common/hypot.js");
/* harmony import */ var _log1py__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log1py */ "../node_modules/proj4/lib/common/log1py.js");



/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var y = Math.abs(x);
  y = Object(_log1py__WEBPACK_IMPORTED_MODULE_1__["default"])(y * (1 + y / (Object(_hypot__WEBPACK_IMPORTED_MODULE_0__["default"])(1, y) + 1)));

  return x < 0 ? -y : y;
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/asinz.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/asinz.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  if (Math.abs(x) > 1) {
    x = (x > 1) ? 1 : -1;
  }
  return Math.asin(x);
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/clens.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/clens.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(pp, arg_r) {
  var r = 2 * Math.cos(arg_r);
  var i = pp.length - 1;
  var hr1 = pp[i];
  var hr2 = 0;
  var hr;

  while (--i >= 0) {
    hr = -hr2 + r * hr1 + pp[i];
    hr2 = hr1;
    hr1 = hr;
  }

  return Math.sin(arg_r) * hr;
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/clens_cmplx.js":
/*!*******************************************************!*\
  !*** ../node_modules/proj4/lib/common/clens_cmplx.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sinh */ "../node_modules/proj4/lib/common/sinh.js");
/* harmony import */ var _cosh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cosh */ "../node_modules/proj4/lib/common/cosh.js");



/* harmony default export */ __webpack_exports__["default"] = (function(pp, arg_r, arg_i) {
  var sin_arg_r = Math.sin(arg_r);
  var cos_arg_r = Math.cos(arg_r);
  var sinh_arg_i = Object(_sinh__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_i);
  var cosh_arg_i = Object(_cosh__WEBPACK_IMPORTED_MODULE_1__["default"])(arg_i);
  var r = 2 * cos_arg_r * cosh_arg_i;
  var i = -2 * sin_arg_r * sinh_arg_i;
  var j = pp.length - 1;
  var hr = pp[j];
  var hi1 = 0;
  var hr1 = 0;
  var hi = 0;
  var hr2;
  var hi2;

  while (--j >= 0) {
    hr2 = hr1;
    hi2 = hi1;
    hr1 = hr;
    hi1 = hi;
    hr = -hr2 + r * hr1 - i * hi1 + pp[j];
    hi = -hi2 + i * hr1 + r * hi1;
  }

  r = sin_arg_r * cosh_arg_i;
  i = cos_arg_r * sinh_arg_i;

  return [r * hr - i * hi, r * hi + i * hr];
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/cosh.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/cosh.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var r = Math.exp(x);
  r = (r + 1 / r) / 2;
  return r;
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/e0fn.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/e0fn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x)));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/e1fn.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/e1fn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x)));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/e2fn.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/e2fn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (0.05859375 * x * x * (1 + 0.75 * x));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/e3fn.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/e3fn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (x * x * x * (35 / 3072));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/gN.js":
/*!**********************************************!*\
  !*** ../node_modules/proj4/lib/common/gN.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, e, sinphi) {
  var temp = e * sinphi;
  return a / Math.sqrt(1 - temp * temp);
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/gatg.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/gatg.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(pp, B) {
  var cos_2B = 2 * Math.cos(2 * B);
  var i = pp.length - 1;
  var h1 = pp[i];
  var h2 = 0;
  var h;

  while (--i >= 0) {
    h = -h2 + cos_2B * h1 + pp[i];
    h2 = h1;
    h1 = h;
  }

  return (B + h * Math.sin(2 * B));
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/hypot.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/hypot.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  var a = Math.max(x, y);
  var b = Math.min(x, y) / (a ? a : 1);

  return a * Math.sqrt(1 + Math.pow(b, 2));
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/imlfn.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/imlfn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(ml, e0, e1, e2, e3) {
  var phi;
  var dphi;

  phi = ml / e0;
  for (var i = 0; i < 15; i++) {
    dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");
  return NaN;
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/iqsfnz.js":
/*!**************************************************!*\
  !*** ../node_modules/proj4/lib/common/iqsfnz.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");


/* harmony default export */ __webpack_exports__["default"] = (function(eccent, q) {
  var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
  if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
    if (q < 0) {
      return (-1 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    }
    else {
      return _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    }
  }
  //var phi = 0.5* q/(1-eccent*eccent);
  var phi = Math.asin(0.5 * q);
  var dphi;
  var sin_phi;
  var cos_phi;
  var con;
  for (var i = 0; i < 30; i++) {
    sin_phi = Math.sin(phi);
    cos_phi = Math.cos(phi);
    con = eccent * sin_phi;
    dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");
  return NaN;
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/log1py.js":
/*!**************************************************!*\
  !*** ../node_modules/proj4/lib/common/log1py.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var y = 1 + x;
  var z = y - 1;

  return z === 0 ? x : x * Math.log(y) / z;
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/mlfn.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/mlfn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e0, e1, e2, e3, phi) {
  return (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/msfnz.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/msfnz.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(eccent, sinphi, cosphi) {
  var con = eccent * sinphi;
  return cosphi / (Math.sqrt(1 - con * con));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/phi2z.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/phi2z.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");


/* harmony default export */ __webpack_exports__["default"] = (function(eccent, ts) {
  var eccnth = 0.5 * eccent;
  var con, dphi;
  var phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - 2 * Math.atan(ts);
  for (var i = 0; i <= 15; i++) {
    con = eccent * Math.sin(phi);
    dphi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - 2 * Math.atan(ts * (Math.pow(((1 - con) / (1 + con)), eccnth))) - phi;
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }
  //console.log("phi2z has NoConvergence");
  return -9999;
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/pj_enfn.js":
/*!***************************************************!*\
  !*** ../node_modules/proj4/lib/common/pj_enfn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var C00 = 1;
var C02 = 0.25;
var C04 = 0.046875;
var C06 = 0.01953125;
var C08 = 0.01068115234375;
var C22 = 0.75;
var C44 = 0.46875;
var C46 = 0.01302083333333333333;
var C48 = 0.00712076822916666666;
var C66 = 0.36458333333333333333;
var C68 = 0.00569661458333333333;
var C88 = 0.3076171875;

/* harmony default export */ __webpack_exports__["default"] = (function(es) {
  var en = [];
  en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
  en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
  var t = es * es;
  en[2] = t * (C44 - es * (C46 + es * C48));
  t *= es;
  en[3] = t * (C66 - es * C68);
  en[4] = t * es * C88;
  return en;
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/pj_inv_mlfn.js":
/*!*******************************************************!*\
  !*** ../node_modules/proj4/lib/common/pj_inv_mlfn.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pj_mlfn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pj_mlfn */ "../node_modules/proj4/lib/common/pj_mlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");



var MAX_ITER = 20;

/* harmony default export */ __webpack_exports__["default"] = (function(arg, es, en) {
  var k = 1 / (1 - es);
  var phi = arg;
  for (var i = MAX_ITER; i; --i) { /* rarely goes over 2 iterations */
    var s = Math.sin(phi);
    var t = 1 - es * s * s;
    //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
    //phi -= t * (t * Math.sqrt(t)) * k;
    t = (Object(_pj_mlfn__WEBPACK_IMPORTED_MODULE_0__["default"])(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
    phi -= t;
    if (Math.abs(t) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      return phi;
    }
  }
  //..reportError("cass:pj_inv_mlfn: Convergence error");
  return phi;
});


/***/ }),

/***/ "../node_modules/proj4/lib/common/pj_mlfn.js":
/*!***************************************************!*\
  !*** ../node_modules/proj4/lib/common/pj_mlfn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(phi, sphi, cphi, en) {
  cphi *= sphi;
  sphi *= sphi;
  return (en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4]))));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/qsfnz.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/qsfnz.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(eccent, sinphi) {
  var con;
  if (eccent > 1.0e-7) {
    con = eccent * sinphi;
    return ((1 - eccent * eccent) * (sinphi / (1 - con * con) - (0.5 / eccent) * Math.log((1 - con) / (1 + con))));
  }
  else {
    return (2 * sinphi);
  }
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/sign.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/sign.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x<0 ? -1 : 1;
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/sinh.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/sinh.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var r = Math.exp(x);
  r = (r - 1 / r) / 2;
  return r;
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/srat.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/common/srat.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(esinp, exp) {
  return (Math.pow((1 - esinp) / (1 + esinp), exp));
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/toPoint.js":
/*!***************************************************!*\
  !*** ../node_modules/proj4/lib/common/toPoint.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (array){
  var out = {
    x: array[0],
    y: array[1]
  };
  if (array.length>2) {
    out.z = array[2];
  }
  if (array.length>3) {
    out.m = array[3];
  }
  return out;
});

/***/ }),

/***/ "../node_modules/proj4/lib/common/tsfnz.js":
/*!*************************************************!*\
  !*** ../node_modules/proj4/lib/common/tsfnz.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");


/* harmony default export */ __webpack_exports__["default"] = (function(eccent, phi, sinphi) {
  var con = eccent * sinphi;
  var com = 0.5 * eccent;
  con = Math.pow(((1 - con) / (1 + con)), com);
  return (Math.tan(0.5 * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - phi)) / con);
});


/***/ }),

/***/ "../node_modules/proj4/lib/constants/Datum.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/constants/Datum.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exports; });
var exports = {};

exports.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};

exports.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};

exports.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};

exports.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};

exports.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};

exports.potsdam = {
  towgs84: "606.0,23.0,413.0",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};

exports.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};

exports.hermannskogel = {
  towgs84: "653.0,-212.0,449.0",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};

exports.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};

exports.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};

exports.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};

exports.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};

exports.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};

exports.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: 'bessel',
  datumName: 'S-JTSK (Ferro)'
};

exports.beduaram = {
  towgs84: '-106,-87,188',
  ellipse: 'clrk80',
  datumName: 'Beduaram'
};

exports.gunung_segara = {
  towgs84: '-403,684,41',
  ellipse: 'bessel',
  datumName: 'Gunung Segara Jakarta'
};

exports.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};


/***/ }),

/***/ "../node_modules/proj4/lib/constants/Ellipsoid.js":
/*!********************************************************!*\
  !*** ../node_modules/proj4/lib/constants/Ellipsoid.js ***!
  \********************************************************/
/*! exports provided: default, WGS84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84", function() { return WGS84; });
var exports = {};

exports.MERIT = {
  a: 6378137.0,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};

exports.SGS85 = {
  a: 6378136.0,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};

exports.GRS80 = {
  a: 6378137.0,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};

exports.IAU76 = {
  a: 6378140.0,
  rf: 298.257,
  ellipseName: "IAU 1976"
};

exports.airy = {
  a: 6377563.396,
  b: 6356256.910,
  ellipseName: "Airy 1830"
};

exports.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};

exports.NWL9D = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};

exports.mod_airy = {
  a: 6377340.189,
  b: 6356034.446,
  ellipseName: "Modified Airy"
};

exports.andrae = {
  a: 6377104.43,
  rf: 300.0,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};

exports.aust_SA = {
  a: 6378160.0,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};

exports.GRS67 = {
  a: 6378160.0,
  rf: 298.2471674270,
  ellipseName: "GRS 67(IUGG 1967)"
};

exports.bessel = {
  a: 6377397.155,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};

exports.bess_nam = {
  a: 6377483.865,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};

exports.clrk66 = {
  a: 6378206.4,
  b: 6356583.8,
  ellipseName: "Clarke 1866"
};

exports.clrk80 = {
  a: 6378249.145,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};

exports.clrk58 = {
  a: 6378293.645208759,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};

exports.CPM = {
  a: 6375738.7,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};

exports.delmbr = {
  a: 6376428.0,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};

exports.engelis = {
  a: 6378136.05,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};

exports.evrst30 = {
  a: 6377276.345,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};

exports.evrst48 = {
  a: 6377304.063,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};

exports.evrst56 = {
  a: 6377301.243,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};

exports.evrst69 = {
  a: 6377295.664,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};

exports.evrstSS = {
  a: 6377298.556,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};

exports.fschr60 = {
  a: 6378166.0,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};

exports.fschr60m = {
  a: 6378155.0,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};

exports.fschr68 = {
  a: 6378150.0,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};

exports.helmert = {
  a: 6378200.0,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};

exports.hough = {
  a: 6378270.0,
  rf: 297.0,
  ellipseName: "Hough"
};

exports.intl = {
  a: 6378388.0,
  rf: 297.0,
  ellipseName: "International 1909 (Hayford)"
};

exports.kaula = {
  a: 6378163.0,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};

exports.lerch = {
  a: 6378139.0,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};

exports.mprts = {
  a: 6397300.0,
  rf: 191.0,
  ellipseName: "Maupertius 1738"
};

exports.new_intl = {
  a: 6378157.5,
  b: 6356772.2,
  ellipseName: "New International 1967"
};

exports.plessis = {
  a: 6376523.0,
  rf: 6355863.0,
  ellipseName: "Plessis 1817 (France)"
};

exports.krass = {
  a: 6378245.0,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};

exports.SEasia = {
  a: 6378155.0,
  b: 6356773.3205,
  ellipseName: "Southeast Asia"
};

exports.walbeck = {
  a: 6376896.0,
  b: 6355834.8467,
  ellipseName: "Walbeck"
};

exports.WGS60 = {
  a: 6378165.0,
  rf: 298.3,
  ellipseName: "WGS 60"
};

exports.WGS66 = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "WGS 66"
};

exports.WGS7 = {
  a: 6378135.0,
  rf: 298.26,
  ellipseName: "WGS 72"
};

var WGS84 = exports.WGS84 = {
  a: 6378137.0,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};

exports.sphere = {
  a: 6370997.0,
  b: 6370997.0,
  ellipseName: "Normal Sphere (r=6370997)"
};


/***/ }),

/***/ "../node_modules/proj4/lib/constants/PrimeMeridian.js":
/*!************************************************************!*\
  !*** ../node_modules/proj4/lib/constants/PrimeMeridian.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exports; });
var exports = {};


exports.greenwich = 0.0; //"0dE",
exports.lisbon = -9.131906111111; //"9d07'54.862\"W",
exports.paris = 2.337229166667; //"2d20'14.025\"E",
exports.bogota = -74.080916666667; //"74d04'51.3\"W",
exports.madrid = -3.687938888889; //"3d41'16.58\"W",
exports.rome = 12.452333333333; //"12d27'8.4\"E",
exports.bern = 7.439583333333; //"7d26'22.5\"E",
exports.jakarta = 106.807719444444; //"106d48'27.79\"E",
exports.ferro = -17.666666666667; //"17d40'W",
exports.brussels = 4.367975; //"4d22'4.71\"E",
exports.stockholm = 18.058277777778; //"18d3'29.8\"E",
exports.athens = 23.7163375; //"23d42'58.815\"E",
exports.oslo = 10.722916666667; //"10d43'22.5\"E"


/***/ }),

/***/ "../node_modules/proj4/lib/constants/units.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/constants/units.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ft: {to_meter: 0.3048},
  'us-ft': {to_meter: 1200 / 3937}
});


/***/ }),

/***/ "../node_modules/proj4/lib/constants/values.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/constants/values.js ***!
  \*****************************************************/
/*! exports provided: PJD_3PARAM, PJD_7PARAM, PJD_WGS84, PJD_NODATUM, SEC_TO_RAD, HALF_PI, SIXTH, RA4, RA6, EPSLN, D2R, R2D, FORTPI, TWO_PI, SPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_3PARAM", function() { return PJD_3PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_7PARAM", function() { return PJD_7PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_WGS84", function() { return PJD_WGS84; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_NODATUM", function() { return PJD_NODATUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEC_TO_RAD", function() { return SEC_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HALF_PI", function() { return HALF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIXTH", function() { return SIXTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RA4", function() { return RA4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RA6", function() { return RA6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSLN", function() { return EPSLN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D2R", function() { return D2R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R2D", function() { return R2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORTPI", function() { return FORTPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_PI", function() { return TWO_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPI", function() { return SPI; });
var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_WGS84 = 4; // WGS84 or equivalent
var PJD_NODATUM = 5; // WGS84 or equivalent
var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
var HALF_PI = Math.PI/2;
// ellipoid pj_set_ell.c
var SIXTH = 0.1666666666666666667;
/* 1/6 */
var RA4 = 0.04722222222222222222;
/* 17/360 */
var RA6 = 0.02215608465608465608;
var EPSLN = 1.0e-10;
// you'd think you could use Number.EPSILON above but that makes
// Mollweide get into an infinate loop.

var D2R = 0.01745329251994329577;
var R2D = 57.29577951308232088;
var FORTPI = Math.PI/4;
var TWO_PI = Math.PI * 2;
// SPI is slightly greater than Math.PI, so values that exceed the -180..180
// degree range by a tiny amount don't get wrapped. This prevents points that
// have drifted from their original location along the 180th meridian (due to
// floating point error) from changing their sign.
var SPI = 3.14159265359;


/***/ }),

/***/ "../node_modules/proj4/lib/core.js":
/*!*****************************************!*\
  !*** ../node_modules/proj4/lib/core.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proj */ "../node_modules/proj4/lib/Proj.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ "../node_modules/proj4/lib/transform.js");


var wgs84 = Object(_Proj__WEBPACK_IMPORTED_MODULE_0__["default"])('WGS84');

function transformer(from, to, coords) {
  var transformedArray, out, keys;
  if (Array.isArray(coords)) {
    transformedArray = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(from, to, coords) || {x: NaN, y: NaN};
    if (coords.length > 2) {
      if ((typeof from.name !== 'undefined' && from.name === 'geocent') || (typeof to.name !== 'undefined' && to.name === 'geocent')) {
        if (typeof transformedArray.z === 'number') {
          return [transformedArray.x, transformedArray.y, transformedArray.z].concat(coords.splice(3));
        } else {
          return [transformedArray.x, transformedArray.y, coords[2]].concat(coords.splice(3));
        }
      } else {
        return [transformedArray.x, transformedArray.y].concat(coords.splice(2));
      }
    } else {
      return [transformedArray.x, transformedArray.y];
    }
  } else {
    out = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(from, to, coords);
    keys = Object.keys(coords);
    if (keys.length === 2) {
      return out;
    }
    keys.forEach(function (key) {
      if ((typeof from.name !== 'undefined' && from.name === 'geocent') || (typeof to.name !== 'undefined' && to.name === 'geocent')) {
        if (key === 'x' || key === 'y' || key === 'z') {
          return;
        }
      } else {
        if (key === 'x' || key === 'y') {
          return;
        }
      }
      out[key] = coords[key];
    });
    return out;
  }
}

function checkProj(item) {
  if (item instanceof _Proj__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return item;
  }
  if (item.oProj) {
    return item.oProj;
  }
  return Object(_Proj__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
}

function proj4(fromProj, toProj, coord) {
  fromProj = checkProj(fromProj);
  var single = false;
  var obj;
  if (typeof toProj === 'undefined') {
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  } else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
    coord = toProj;
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  toProj = checkProj(toProj);
  if (coord) {
    return transformer(fromProj, toProj, coord);
  } else {
    obj = {
      forward: function (coords) {
        return transformer(fromProj, toProj, coords);
      },
      inverse: function (coords) {
        return transformer(toProj, fromProj, coords);
      }
    };
    if (single) {
      obj.oProj = toProj;
    }
    return obj;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (proj4);

/***/ }),

/***/ "../node_modules/proj4/lib/datum.js":
/*!******************************************!*\
  !*** ../node_modules/proj4/lib/datum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "../node_modules/proj4/lib/constants/values.js");


function datum(datumCode, datum_params, a, b, es, ep2) {
  var out = {};

  if (datumCode === undefined || datumCode === 'none') {
    out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_NODATUM"];
  } else {
    out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_WGS84"];
  }

  if (datum_params) {
    out.datum_params = datum_params.map(parseFloat);
    if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) {
      out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"];
    }
    if (out.datum_params.length > 3) {
      if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
        out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"];
        out.datum_params[3] *= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"];
        out.datum_params[4] *= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"];
        out.datum_params[5] *= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"];
        out.datum_params[6] = (out.datum_params[6] / 1000000.0) + 1.0;
      }
    }
  }

  out.a = a; //datum object also uses these values
  out.b = b;
  out.es = es;
  out.ep2 = ep2;
  return out;
}

/* harmony default export */ __webpack_exports__["default"] = (datum);


/***/ }),

/***/ "../node_modules/proj4/lib/datumUtils.js":
/*!***********************************************!*\
  !*** ../node_modules/proj4/lib/datumUtils.js ***!
  \***********************************************/
/*! exports provided: compareDatums, geodeticToGeocentric, geocentricToGeodetic, geocentricToWgs84, geocentricFromWgs84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDatums", function() { return compareDatums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geodeticToGeocentric", function() { return geodeticToGeocentric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geocentricToGeodetic", function() { return geocentricToGeodetic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geocentricToWgs84", function() { return geocentricToWgs84; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geocentricFromWgs84", function() { return geocentricFromWgs84; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "../node_modules/proj4/lib/constants/values.js");


function compareDatums(source, dest) {
  if (source.datum_type !== dest.datum_type) {
    return false; // false, datums are not equal
  } else if (source.a !== dest.a || Math.abs(source.es - dest.es) > 0.000000000050) {
    // the tolerance for es is to ensure that GRS80 and WGS84
    // are considered identical
    return false;
  } else if (source.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"]) {
    return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2]);
  } else if (source.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) {
    return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6]);
  } else {
    return true; // datums are equal
  }
} // cs_compare_datums()

/*
 * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
 * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
 * according to the current ellipsoid parameters.
 *
 *    Latitude  : Geodetic latitude in radians                     (input)
 *    Longitude : Geodetic longitude in radians                    (input)
 *    Height    : Geodetic height, in meters                       (input)
 *    X         : Calculated Geocentric X coordinate, in meters    (output)
 *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
 *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
 *
 */
function geodeticToGeocentric(p, es, a) {
  var Longitude = p.x;
  var Latitude = p.y;
  var Height = p.z ? p.z : 0; //Z value not always supplied

  var Rn; /*  Earth radius at location  */
  var Sin_Lat; /*  Math.sin(Latitude)  */
  var Sin2_Lat; /*  Square of Math.sin(Latitude)  */
  var Cos_Lat; /*  Math.cos(Latitude)  */

  /*
   ** Don't blow up if Latitude is just a little out of the value
   ** range as it may just be a rounding issue.  Also removed longitude
   ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
   */
  if (Latitude < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] && Latitude > -1.001 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    Latitude = -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (Latitude > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] && Latitude < 1.001 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    Latitude = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (Latitude < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    /* Latitude out of range */
    //..reportError('geocent:lat out of range:' + Latitude);
    return { x: -Infinity, y: -Infinity, z: p.z };
  } else if (Latitude > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    /* Latitude out of range */
    return { x: Infinity, y: Infinity, z: p.z };
  }

  if (Longitude > Math.PI) {
    Longitude -= (2 * Math.PI);
  }
  Sin_Lat = Math.sin(Latitude);
  Cos_Lat = Math.cos(Latitude);
  Sin2_Lat = Sin_Lat * Sin_Lat;
  Rn = a / (Math.sqrt(1.0e0 - es * Sin2_Lat));
  return {
    x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
    y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
    z: ((Rn * (1 - es)) + Height) * Sin_Lat
  };
} // cs_geodetic_to_geocentric()

function geocentricToGeodetic(p, es, a, b) {
  /* local defintions and variables */
  /* end-criterium of loop, accuracy of sin(Latitude) */
  var genau = 1e-12;
  var genau2 = (genau * genau);
  var maxiter = 30;

  var P; /* distance between semi-minor axis and location */
  var RR; /* distance between center and location */
  var CT; /* sin of geocentric latitude */
  var ST; /* cos of geocentric latitude */
  var RX;
  var RK;
  var RN; /* Earth radius at location */
  var CPHI0; /* cos of start or old geodetic latitude in iterations */
  var SPHI0; /* sin of start or old geodetic latitude in iterations */
  var CPHI; /* cos of searched geodetic latitude */
  var SPHI; /* sin of searched geodetic latitude */
  var SDPHI; /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */
  var iter; /* # of continous iteration, max. 30 is always enough (s.a.) */

  var X = p.x;
  var Y = p.y;
  var Z = p.z ? p.z : 0.0; //Z value not always supplied
  var Longitude;
  var Latitude;
  var Height;

  P = Math.sqrt(X * X + Y * Y);
  RR = Math.sqrt(X * X + Y * Y + Z * Z);

  /*      special cases for latitude and longitude */
  if (P / a < genau) {

    /*  special case, if P=0. (X=0., Y=0.) */
    Longitude = 0.0;

    /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
     *  of ellipsoid (=center of mass), Latitude becomes PI/2 */
    if (RR / a < genau) {
      Latitude = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
      Height = -b;
      return {
        x: p.x,
        y: p.y,
        z: p.z
      };
    }
  } else {
    /*  ellipsoidal (geodetic) longitude
     *  interval: -PI < Longitude <= +PI */
    Longitude = Math.atan2(Y, X);
  }

  /* --------------------------------------------------------------
   * Following iterative algorithm was developped by
   * "Institut for Erdmessung", University of Hannover, July 1988.
   * Internet: www.ife.uni-hannover.de
   * Iterative computation of CPHI,SPHI and Height.
   * Iteration of CPHI and SPHI to 10**-12 radian resp.
   * 2*10**-7 arcsec.
   * --------------------------------------------------------------
   */
  CT = Z / RR;
  ST = P / RR;
  RX = 1.0 / Math.sqrt(1.0 - es * (2.0 - es) * ST * ST);
  CPHI0 = ST * (1.0 - es) * RX;
  SPHI0 = CT * RX;
  iter = 0;

  /* loop to find sin(Latitude) resp. Latitude
   * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */
  do {
    iter++;
    RN = a / Math.sqrt(1.0 - es * SPHI0 * SPHI0);

    /*  ellipsoidal (geodetic) height */
    Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - es * SPHI0 * SPHI0);

    RK = es * RN / (RN + Height);
    RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
    CPHI = ST * (1.0 - RK) * RX;
    SPHI = CT * RX;
    SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
    CPHI0 = CPHI;
    SPHI0 = SPHI;
  }
  while (SDPHI * SDPHI > genau2 && iter < maxiter);

  /*      ellipsoidal (geodetic) latitude */
  Latitude = Math.atan(SPHI / Math.abs(CPHI));
  return {
    x: Longitude,
    y: Latitude,
    z: Height
  };
} // cs_geocentric_to_geodetic()

/****************************************************************/
// pj_geocentic_to_wgs84( p )
//  p = point to transform in geocentric coordinates (x,y,z)


/** point object, nothing fancy, just allows values to be
    passed back and forth by reference rather than by value.
    Other point classes may be used as long as they have
    x and y properties, which will get modified in the transform method.
*/
function geocentricToWgs84(p, datum_type, datum_params) {

  if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"]) {
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x + datum_params[0],
      y: p.y + datum_params[1],
      z: p.z + datum_params[2],
    };
  } else if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
      y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
      z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
    };
  }
} // cs_geocentric_to_wgs84

/****************************************************************/
// pj_geocentic_from_wgs84()
//  coordinate system definition,
//  point to transform in geocentric coordinates (x,y,z)
function geocentricFromWgs84(p, datum_type, datum_params) {

  if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"]) {
    //if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x - datum_params[0],
      y: p.y - datum_params[1],
      z: p.z - datum_params[2],
    };

  } else if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    var x_tmp = (p.x - Dx_BF) / M_BF;
    var y_tmp = (p.y - Dy_BF) / M_BF;
    var z_tmp = (p.z - Dz_BF) / M_BF;
    //if( x[io] === HUGE_VAL )
    //    continue;

    return {
      x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
      y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
      z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
    };
  } //cs_geocentric_from_wgs84()
}


/***/ }),

/***/ "../node_modules/proj4/lib/datum_transform.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/datum_transform.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _datumUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datumUtils */ "../node_modules/proj4/lib/datumUtils.js");



function checkParams(type) {
  return (type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"] || type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]);
}

/* harmony default export */ __webpack_exports__["default"] = (function(source, dest, point) {
  // Short cut if the datums are identical.
  if (Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["compareDatums"])(source, dest)) {
    return point; // in this case, zero is sucess,
    // whereas cs_compare_datums returns 1 to indicate TRUE
    // confusing, should fix this
  }

  // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest
  if (source.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_NODATUM"] || dest.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_NODATUM"]) {
    return point;
  }

  // If this datum requires grid shifts, then apply it to geodetic coordinates.

  // Do we need to go through geocentric coordinates?
  if (source.es === dest.es && source.a === dest.a && !checkParams(source.datum_type) &&  !checkParams(dest.datum_type)) {
    return point;
  }

  // Convert to geocentric coordinates.
  point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geodeticToGeocentric"])(point, source.es, source.a);
  // Convert between datums
  if (checkParams(source.datum_type)) {
    point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geocentricToWgs84"])(point, source.datum_type, source.datum_params);
  }
  if (checkParams(dest.datum_type)) {
    point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geocentricFromWgs84"])(point, dest.datum_type, dest.datum_params);
  }
  return Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geocentricToGeodetic"])(point, dest.es, dest.a, dest.b);

});


/***/ }),

/***/ "../node_modules/proj4/lib/defs.js":
/*!*****************************************!*\
  !*** ../node_modules/proj4/lib/defs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "../node_modules/proj4/lib/global.js");
/* harmony import */ var _projString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projString */ "../node_modules/proj4/lib/projString.js");
/* harmony import */ var wkt_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wkt-parser */ "../node_modules/wkt-parser/index.js");




function defs(name) {
  /*global console*/
  var that = this;
  if (arguments.length === 2) {
    var def = arguments[1];
    if (typeof def === 'string') {
      if (def.charAt(0) === '+') {
        defs[name] = Object(_projString__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments[1]);
      }
      else {
        defs[name] = Object(wkt_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(arguments[1]);
      }
    } else {
      defs[name] = def;
    }
  }
  else if (arguments.length === 1) {
    if (Array.isArray(name)) {
      return name.map(function(v) {
        if (Array.isArray(v)) {
          defs.apply(that, v);
        }
        else {
          defs(v);
        }
      });
    }
    else if (typeof name === 'string') {
      if (name in defs) {
        return defs[name];
      }
    }
    else if ('EPSG' in name) {
      defs['EPSG:' + name.EPSG] = name;
    }
    else if ('ESRI' in name) {
      defs['ESRI:' + name.ESRI] = name;
    }
    else if ('IAU2000' in name) {
      defs['IAU2000:' + name.IAU2000] = name;
    }
    else {
      console.log(name);
    }
    return;
  }


}
Object(_global__WEBPACK_IMPORTED_MODULE_0__["default"])(defs);
/* harmony default export */ __webpack_exports__["default"] = (defs);


/***/ }),

/***/ "../node_modules/proj4/lib/deriveConstants.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/deriveConstants.js ***!
  \****************************************************/
/*! exports provided: eccentricity, sphere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eccentricity", function() { return eccentricity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphere", function() { return sphere; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _constants_Ellipsoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/Ellipsoid */ "../node_modules/proj4/lib/constants/Ellipsoid.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match */ "../node_modules/proj4/lib/match.js");




function eccentricity(a, b, rf, R_A) {
  var a2 = a * a; // used in geocentric
  var b2 = b * b; // used in geocentric
  var es = (a2 - b2) / a2; // e ^ 2
  var e = 0;
  if (R_A) {
    a *= 1 - es * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["SIXTH"] + es * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["RA4"] + es * _constants_values__WEBPACK_IMPORTED_MODULE_0__["RA6"]));
    a2 = a * a;
    es = 0;
  } else {
    e = Math.sqrt(es); // eccentricity
  }
  var ep2 = (a2 - b2) / b2; // used in geocentric
  return {
    es: es,
    e: e,
    ep2: ep2
  };
}
function sphere(a, b, rf, ellps, sphere) {
  if (!a) { // do we have an ellipsoid?
    var ellipse = Object(_match__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants_Ellipsoid__WEBPACK_IMPORTED_MODULE_1__["default"], ellps);
    if (!ellipse) {
      ellipse = _constants_Ellipsoid__WEBPACK_IMPORTED_MODULE_1__["WGS84"];
    }
    a = ellipse.a;
    b = ellipse.b;
    rf = ellipse.rf;
  }

  if (rf && !b) {
    b = (1.0 - 1.0 / rf) * a;
  }
  if (rf === 0 || Math.abs(a - b) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    sphere = true;
    b = a;
  }
  return {
    a: a,
    b: b,
    rf: rf,
    sphere: sphere
  };
}


/***/ }),

/***/ "../node_modules/proj4/lib/extend.js":
/*!*******************************************!*\
  !*** ../node_modules/proj4/lib/extend.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(destination, source) {
  destination = destination || {};
  var value, property;
  if (!source) {
    return destination;
  }
  for (property in source) {
    value = source[property];
    if (value !== undefined) {
      destination[property] = value;
    }
  }
  return destination;
});


/***/ }),

/***/ "../node_modules/proj4/lib/global.js":
/*!*******************************************!*\
  !*** ../node_modules/proj4/lib/global.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(defs) {
  defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
  defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
  defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

  defs.WGS84 = defs['EPSG:4326'];
  defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857
  defs.GOOGLE = defs['EPSG:3857'];
  defs['EPSG:900913'] = defs['EPSG:3857'];
  defs['EPSG:102113'] = defs['EPSG:3857'];
});


/***/ }),

/***/ "../node_modules/proj4/lib/index.js":
/*!******************************************!*\
  !*** ../node_modules/proj4/lib/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../node_modules/proj4/lib/core.js");
/* harmony import */ var _Proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proj */ "../node_modules/proj4/lib/Proj.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "../node_modules/proj4/lib/Point.js");
/* harmony import */ var _common_toPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/toPoint */ "../node_modules/proj4/lib/common/toPoint.js");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defs */ "../node_modules/proj4/lib/defs.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transform */ "../node_modules/proj4/lib/transform.js");
/* harmony import */ var mgrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mgrs */ "../node_modules/mgrs/mgrs.js");
/* harmony import */ var _projs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../projs */ "../node_modules/proj4/projs.js");









_core__WEBPACK_IMPORTED_MODULE_0__["default"].defaultDatum = 'WGS84'; //default datum
_core__WEBPACK_IMPORTED_MODULE_0__["default"].Proj = _Proj__WEBPACK_IMPORTED_MODULE_1__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].WGS84 = new _core__WEBPACK_IMPORTED_MODULE_0__["default"].Proj('WGS84');
_core__WEBPACK_IMPORTED_MODULE_0__["default"].Point = _Point__WEBPACK_IMPORTED_MODULE_2__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].toPoint = _common_toPoint__WEBPACK_IMPORTED_MODULE_3__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].defs = _defs__WEBPACK_IMPORTED_MODULE_4__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].transform = _transform__WEBPACK_IMPORTED_MODULE_5__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].mgrs = mgrs__WEBPACK_IMPORTED_MODULE_6__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].version = '__VERSION__';
Object(_projs__WEBPACK_IMPORTED_MODULE_7__["default"])(_core__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../node_modules/proj4/lib/match.js":
/*!******************************************!*\
  !*** ../node_modules/proj4/lib/match.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return match; });
var ignoredChar = /[\s_\-\/\(\)]/g;
function match(obj, key) {
  if (obj[key]) {
    return obj[key];
  }
  var keys = Object.keys(obj);
  var lkey = key.toLowerCase().replace(ignoredChar, '');
  var i = -1;
  var testkey, processedKey;
  while (++i < keys.length) {
    testkey = keys[i];
    processedKey = testkey.toLowerCase().replace(ignoredChar, '');
    if (processedKey === lkey) {
      return obj[testkey];
    }
  }
}


/***/ }),

/***/ "../node_modules/proj4/lib/parseCode.js":
/*!**********************************************!*\
  !*** ../node_modules/proj4/lib/parseCode.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "../node_modules/proj4/lib/defs.js");
/* harmony import */ var wkt_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wkt-parser */ "../node_modules/wkt-parser/index.js");
/* harmony import */ var _projString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projString */ "../node_modules/proj4/lib/projString.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match */ "../node_modules/proj4/lib/match.js");




function testObj(code){
  return typeof code === 'string';
}
function testDef(code){
  return code in _defs__WEBPACK_IMPORTED_MODULE_0__["default"];
}
 var codeWords = ['PROJECTEDCRS', 'PROJCRS', 'GEOGCS','GEOCCS','PROJCS','LOCAL_CS', 'GEODCRS', 'GEODETICCRS', 'GEODETICDATUM', 'ENGCRS', 'ENGINEERINGCRS'];
function testWKT(code){
  return codeWords.some(function (word) {
    return code.indexOf(word) > -1;
  });
}
var codes = ['3857', '900913', '3785', '102113'];
function checkMercator(item) {
  var auth = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(item, 'authority');
  if (!auth) {
    return;
  }
  var code = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(auth, 'epsg');
  return code && codes.indexOf(code) > -1;
}
function checkProjStr(item) {
  var ext = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(item, 'extension');
  if (!ext) {
    return;
  }
  return Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(ext, 'proj4');
}
function testProj(code){
  return code[0] === '+';
}
function parse(code){
  if (testObj(code)) {
    //check to see if this is a WKT string
    if (testDef(code)) {
      return _defs__WEBPACK_IMPORTED_MODULE_0__["default"][code];
    }
    if (testWKT(code)) {
      var out = Object(wkt_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(code);
      // test of spetial case, due to this being a very common and often malformed
      if (checkMercator(out)) {
        return _defs__WEBPACK_IMPORTED_MODULE_0__["default"]['EPSG:3857'];
      }
      var maybeProjStr = checkProjStr(out);
      if (maybeProjStr) {
        return Object(_projString__WEBPACK_IMPORTED_MODULE_2__["default"])(maybeProjStr);
      }
      return out;
    }
    if (testProj(code)) {
      return Object(_projString__WEBPACK_IMPORTED_MODULE_2__["default"])(code);
    }
  }else{
    return code;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (parse);


/***/ }),

/***/ "../node_modules/proj4/lib/projString.js":
/*!***********************************************!*\
  !*** ../node_modules/proj4/lib/projString.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _constants_PrimeMeridian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/PrimeMeridian */ "../node_modules/proj4/lib/constants/PrimeMeridian.js");
/* harmony import */ var _constants_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/units */ "../node_modules/proj4/lib/constants/units.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match */ "../node_modules/proj4/lib/match.js");





/* harmony default export */ __webpack_exports__["default"] = (function(defData) {
  var self = {};
  var paramObj = defData.split('+').map(function(v) {
    return v.trim();
  }).filter(function(a) {
    return a;
  }).reduce(function(p, a) {
    var split = a.split('=');
    split.push(true);
    p[split[0].toLowerCase()] = split[1];
    return p;
  }, {});
  var paramName, paramVal, paramOutname;
  var params = {
    proj: 'projName',
    datum: 'datumCode',
    rf: function(v) {
      self.rf = parseFloat(v);
    },
    lat_0: function(v) {
      self.lat0 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lat_1: function(v) {
      self.lat1 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lat_2: function(v) {
      self.lat2 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lat_ts: function(v) {
      self.lat_ts = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lon_0: function(v) {
      self.long0 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lon_1: function(v) {
      self.long1 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lon_2: function(v) {
      self.long2 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    alpha: function(v) {
      self.alpha = parseFloat(v) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lonc: function(v) {
      self.longc = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    x_0: function(v) {
      self.x0 = parseFloat(v);
    },
    y_0: function(v) {
      self.y0 = parseFloat(v);
    },
    k_0: function(v) {
      self.k0 = parseFloat(v);
    },
    k: function(v) {
      self.k0 = parseFloat(v);
    },
    a: function(v) {
      self.a = parseFloat(v);
    },
    b: function(v) {
      self.b = parseFloat(v);
    },
    r_a: function() {
      self.R_A = true;
    },
    zone: function(v) {
      self.zone = parseInt(v, 10);
    },
    south: function() {
      self.utmSouth = true;
    },
    towgs84: function(v) {
      self.datum_params = v.split(",").map(function(a) {
        return parseFloat(a);
      });
    },
    to_meter: function(v) {
      self.to_meter = parseFloat(v);
    },
    units: function(v) {
      self.units = v;
      var unit = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants_units__WEBPACK_IMPORTED_MODULE_2__["default"], v);
      if (unit) {
        self.to_meter = unit.to_meter;
      }
    },
    from_greenwich: function(v) {
      self.from_greenwich = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    pm: function(v) {
      var pm = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants_PrimeMeridian__WEBPACK_IMPORTED_MODULE_1__["default"], v);
      self.from_greenwich = (pm ? pm : parseFloat(v)) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    nadgrids: function(v) {
      if (v === '@null') {
        self.datumCode = 'none';
      }
      else {
        self.nadgrids = v;
      }
    },
    axis: function(v) {
      var legalAxis = "ewnsud";
      if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
        self.axis = v;
      }
    }
  };
  for (paramName in paramObj) {
    paramVal = paramObj[paramName];
    if (paramName in params) {
      paramOutname = params[paramName];
      if (typeof paramOutname === 'function') {
        paramOutname(paramVal);
      }
      else {
        self[paramOutname] = paramVal;
      }
    }
    else {
      self[paramName] = paramVal;
    }
  }
  if(typeof self.datumCode === 'string' && self.datumCode !== "WGS84"){
    self.datumCode = self.datumCode.toLowerCase();
  }
  return self;
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections.js":
/*!************************************************!*\
  !*** ../node_modules/proj4/lib/projections.js ***!
  \************************************************/
/*! exports provided: add, get, start, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var _projections_merc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projections/merc */ "../node_modules/proj4/lib/projections/merc.js");
/* harmony import */ var _projections_longlat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projections/longlat */ "../node_modules/proj4/lib/projections/longlat.js");


var projs = [_projections_merc__WEBPACK_IMPORTED_MODULE_0__["default"], _projections_longlat__WEBPACK_IMPORTED_MODULE_1__["default"]];
var names = {};
var projStore = [];

function add(proj, i) {
  var len = projStore.length;
  if (!proj.names) {
    console.log(i);
    return true;
  }
  projStore[len] = proj;
  proj.names.forEach(function(n) {
    names[n.toLowerCase()] = len;
  });
  return this;
}



function get(name) {
  if (!name) {
    return false;
  }
  var n = name.toLowerCase();
  if (typeof names[n] !== 'undefined' && projStore[names[n]]) {
    return projStore[names[n]];
  }
}

function start() {
  projs.forEach(add);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  start: start,
  add: add,
  get: get
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/aea.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/aea.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, phi1z, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi1z", function() { return phi1z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/msfnz */ "../node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_qsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/qsfnz */ "../node_modules/proj4/lib/common/qsfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/asinz */ "../node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");






function init() {

  if (Math.abs(this.lat1 + this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    return;
  }
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e3 = Math.sqrt(this.es);

  this.sin_po = Math.sin(this.lat1);
  this.cos_po = Math.cos(this.lat1);
  this.t1 = this.sin_po;
  this.con = this.sin_po;
  this.ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e3, this.sin_po, this.cos_po);
  this.qs1 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat2);
  this.cos_po = Math.cos(this.lat2);
  this.t2 = this.sin_po;
  this.ms2 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e3, this.sin_po, this.cos_po);
  this.qs2 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat0);
  this.cos_po = Math.cos(this.lat0);
  this.t3 = this.sin_po;
  this.qs0 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_po, this.cos_po);

  if (Math.abs(this.lat1 - this.lat2) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
  }
  else {
    this.ns0 = this.con;
  }
  this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
  this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
}

/* Albers Conical Equal Area forward equations--mapping lat,long to x,y
  -------------------------------------------------------------------*/
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  this.sin_phi = Math.sin(lat);
  this.cos_phi = Math.cos(lat);

  var qs = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_phi, this.cos_phi);
  var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
  var theta = this.ns0 * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(lon - this.long0);
  var x = rh1 * Math.sin(theta) + this.x0;
  var y = this.rh - rh1 * Math.cos(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh1, qs, con, theta, lon, lat;

  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  if (this.ns0 >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }
  con = rh1 * this.ns0 / this.a;
  if (this.sphere) {
    lat = Math.asin((this.c - con * con) / (2 * this.ns0));
  }
  else {
    qs = (this.c - con * con) / this.ns0;
    lat = this.phi1z(this.e3, qs);
  }

  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(theta / this.ns0 + this.long0);
  p.x = lon;
  p.y = lat;
  return p;
}

/* Function to compute phi1, the latitude for the inverse of the
   Albers Conical Equal-Area projection.
-------------------------------------------*/
function phi1z(eccent, qs) {
  var sinphi, cosphi, con, com, dphi;
  var phi = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5 * qs);
  if (eccent < _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    return phi;
  }

  var eccnts = eccent * eccent;
  for (var i = 1; i <= 25; i++) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    con = eccent * sinphi;
    com = 1 - con * con;
    dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi = phi + dphi;
    if (Math.abs(dphi) <= 1e-7) {
      return phi;
    }
  }
  return null;
}

var names = ["Albers_Conic_Equal_Area", "Albers", "aea"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  phi1z: phi1z
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/aeqd.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/aeqd.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/mlfn */ "../node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e0fn */ "../node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/e1fn */ "../node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/e2fn */ "../node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/e3fn */ "../node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_gN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/gN */ "../node_modules/proj4/lib/common/gN.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/asinz */ "../node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _common_imlfn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/imlfn */ "../node_modules/proj4/lib/common/imlfn.js");














function init() {
  this.sin_p12 = Math.sin(this.lat0);
  this.cos_p12 = Math.cos(this.lat0);
}

function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinphi = Math.sin(p.y);
  var cosphi = Math.cos(p.y);
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
  if (this.sphere) {
    if (Math.abs(this.sin_p12 - 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //North Pole case
      p.x = this.x0 + this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] - lat) * Math.sin(dlon);
      p.y = this.y0 - this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] - lat) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //South Pole case
      p.x = this.x0 + this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] + lat) * Math.sin(dlon);
      p.y = this.y0 + this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] + lat) * Math.cos(dlon);
      return p;
    }
    else {
      //default case
      cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
      c = Math.acos(cos_c);
      kp = c ? c / Math.sin(c) : 1;
      p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
      p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
      return p;
    }
  }
  else {
    e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
    e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_4__["default"])(this.es);
    e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.es);
    e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.es);
    if (Math.abs(this.sin_p12 - 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //North Pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      Ml = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
      p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //South Pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      Ml = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
      p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
      return p;
    }
    else {
      //Default case
      tanphi = sinphi / cosphi;
      Nl1 = Object(_common_gN__WEBPACK_IMPORTED_MODULE_7__["default"])(this.a, this.e, this.sin_p12);
      Nl = Object(_common_gN__WEBPACK_IMPORTED_MODULE_7__["default"])(this.a, this.e, sinphi);
      psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
      Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
      if (Az === 0) {
        s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else if (Math.abs(Math.abs(Az) - Math.PI) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
        s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else {
        s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
      }
      G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
      H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
      GH = G * H;
      Hs = H * H;
      s2 = s * s;
      s3 = s2 * s;
      s4 = s3 * s;
      s5 = s4 * s;
      c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
      p.x = this.x0 + c * Math.sin(Az);
      p.y = this.y0 + c * Math.cos(Az);
      return p;
    }
  }


}

function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F, sinpsi;
  if (this.sphere) {
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    if (rh > (2 * _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] * this.a)) {
      return;
    }
    z = rh / this.a;

    sinz = Math.sin(z);
    cosz = Math.cos(z);

    lon = this.long0;
    if (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      lat = this.lat0;
    }
    else {
      lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_8__["default"])(cosz * this.sin_p12 + (p.y * sinz * this.cos_p12) / rh);
      con = Math.abs(this.lat0) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"];
      if (Math.abs(con) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
        if (this.lat0 >= 0) {
          lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, - p.y));
        }
        else {
          lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 - Math.atan2(-p.x, p.y));
        }
      }
      else {
        /*con = cosz - this.sin_p12 * Math.sin(lat);
        if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
          //no-op, just keep the lon value as is
        } else {
          var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
          lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
        }*/
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
    e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_4__["default"])(this.es);
    e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.es);
    e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.es);
    if (Math.abs(this.sin_p12 - 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //North pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = Mlp - rh;
      lat = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_9__["default"])(M / this.a, e0, e1, e2, e3);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, - 1 * p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //South pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = rh - Mlp;

      lat = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_9__["default"])(M / this.a, e0, e1, e2, e3);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else {
      //default case
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      Az = Math.atan2(p.x, p.y);
      N1 = Object(_common_gN__WEBPACK_IMPORTED_MODULE_7__["default"])(this.a, this.e, this.sin_p12);
      cosAz = Math.cos(Az);
      tmp = this.e * this.cos_p12 * cosAz;
      A = -tmp * tmp / (1 - this.es);
      B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
      D = rh / N1;
      Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
      F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
      psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
      sinpsi = Math.sin(psi);
      lat = Math.atan2((sinpsi - this.es * F * this.sin_p12) * Math.tan(psi), sinpsi * (1 - this.es));
      p.x = lon;
      p.y = lat;
      return p;
    }
  }

}

var names = ["Azimuthal_Equidistant", "aeqd"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/cass.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/cass.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/mlfn */ "../node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/e0fn */ "../node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/e1fn */ "../node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e2fn */ "../node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/e3fn */ "../node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_gN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/gN */ "../node_modules/proj4/lib/common/gN.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/adjust_lat */ "../node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_imlfn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/imlfn */ "../node_modules/proj4/lib/common/imlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");











function init() {
  if (!this.sphere) {
    this.e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.es);
    this.e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
    this.e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
    this.e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_4__["default"])(this.es);
    this.ml0 = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
}

/* Cassini forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y;
  var lam = p.x;
  var phi = p.y;
  lam = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(lam - this.long0);

  if (this.sphere) {
    x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
    y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
  }
  else {
    //ellipsoid
    var sinphi = Math.sin(phi);
    var cosphi = Math.cos(phi);
    var nl = Object(_common_gN__WEBPACK_IMPORTED_MODULE_5__["default"])(this.a, this.e, sinphi);
    var tl = Math.tan(phi) * Math.tan(phi);
    var al = lam * Math.cos(phi);
    var asq = al * al;
    var cl = this.es * cosphi * cosphi / (1 - this.es);
    var ml = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e0, this.e1, this.e2, this.e3, phi);

    x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
    y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);


  }

  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var phi, lam;

  if (this.sphere) {
    var dd = y + this.lat0;
    phi = Math.asin(Math.sin(dd) * Math.cos(x));
    lam = Math.atan2(Math.tan(x), Math.cos(dd));
  }
  else {
    /* ellipsoid */
    var ml1 = this.ml0 / this.a + y;
    var phi1 = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_8__["default"])(ml1, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(phi1) - _constants_values__WEBPACK_IMPORTED_MODULE_9__["HALF_PI"]) <= _constants_values__WEBPACK_IMPORTED_MODULE_9__["EPSLN"]) {
      p.x = this.long0;
      p.y = _constants_values__WEBPACK_IMPORTED_MODULE_9__["HALF_PI"];
      if (y < 0) {
        p.y *= -1;
      }
      return p;
    }
    var nl1 = Object(_common_gN__WEBPACK_IMPORTED_MODULE_5__["default"])(this.a, this.e, Math.sin(phi1));

    var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
    var tl1 = Math.pow(Math.tan(phi1), 2);
    var dl = x * this.a / nl1;
    var dsq = dl * dl;
    phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
    lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);

  }

  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(lam + this.long0);
  p.y = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__["default"])(phi);
  return p;

}

var names = ["Cassini", "Cassini_Soldner", "cass"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/cea.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/cea.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_qsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/qsfnz */ "../node_modules/proj4/lib/common/qsfnz.js");
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/msfnz */ "../node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_iqsfnz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/iqsfnz */ "../node_modules/proj4/lib/common/iqsfnz.js");





/*
  reference:
    "Cartographic Projection Procedures for the UNIX Environment-
    A User's Manual" by Gerald I. Evenden,
    USGS Open File Report 90-284and Release 4 Interim Reports (2003)
*/
function init() {
  //no-op
  if (!this.sphere) {
    this.k0 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
  }
}

/* Cylindrical Equal Area forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y;
  /* Forward equations
      -----------------*/
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  if (this.sphere) {
    x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
    y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
  }
  else {
    var qs = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, Math.sin(lat));
    x = this.x0 + this.a * this.k0 * dlon;
    y = this.y0 + this.a * qs * 0.5 / this.k0;
  }

  p.x = x;
  p.y = y;
  return p;
}

/* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat;

  if (this.sphere) {
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + (p.x / this.a) / Math.cos(this.lat_ts));
    lat = Math.asin((p.y / this.a) * Math.cos(this.lat_ts));
  }
  else {
    lat = Object(_common_iqsfnz__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, 2 * p.y * this.k0 / this.a);
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + p.x / (this.a * this.k0));
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["cea"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/eqc.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/eqc.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lat */ "../node_modules/proj4/lib/common/adjust_lat.js");



function init() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Equidistant Cylindrical (Plate Carre)";

  this.rc = Math.cos(this.lat_ts);
}

// forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var dlat = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__["default"])(lat - this.lat0);
  p.x = this.x0 + (this.a * dlon * this.rc);
  p.y = this.y0 + (this.a * dlat);
  return p;
}

// inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {

  var x = p.x;
  var y = p.y;

  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + ((x - this.x0) / (this.a * this.rc)));
  p.y = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lat0 + ((y - this.y0) / (this.a)));
  return p;
}

var names = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/eqdc.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/eqdc.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/e0fn */ "../node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/e1fn */ "../node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/e2fn */ "../node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e3fn */ "../node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/msfnz */ "../node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/mlfn */ "../node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/adjust_lat */ "../node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_imlfn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/imlfn */ "../node_modules/proj4/lib/common/imlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");











function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_9__["EPSLN"]) {
    return;
  }
  this.lat2 = this.lat2 || this.lat1;
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e = Math.sqrt(this.es);
  this.e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.es);
  this.e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.es);
  this.e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
  this.e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);

  this.sinphi = Math.sin(this.lat1);
  this.cosphi = Math.cos(this.lat1);

  this.ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, this.sinphi, this.cosphi);
  this.ml1 = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat1);

  if (Math.abs(this.lat1 - this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_9__["EPSLN"]) {
    this.ns = this.sinphi;
  }
  else {
    this.sinphi = Math.sin(this.lat2);
    this.cosphi = Math.cos(this.lat2);
    this.ms2 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, this.sinphi, this.cosphi);
    this.ml2 = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat2);
    this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
  }
  this.g = this.ml1 + this.ms1 / this.ns;
  this.ml0 = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat0);
  this.rh = this.a * (this.g - this.ml0);
}

/* Equidistant Conic forward equations--mapping lat,long to x,y
  -----------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var rh1;

  /* Forward equations
      -----------------*/
  if (this.sphere) {
    rh1 = this.a * (this.g - lat);
  }
  else {
    var ml = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, lat);
    rh1 = this.a * (this.g - ml);
  }
  var theta = this.ns * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(lon - this.long0);
  var x = this.x0 + rh1 * Math.sin(theta);
  var y = this.y0 + this.rh - rh1 * Math.cos(theta);
  p.x = x;
  p.y = y;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  var con, rh1, lat, lon;
  if (this.ns >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }

  if (this.sphere) {
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(this.long0 + theta / this.ns);
    lat = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__["default"])(this.g - rh1 / this.a);
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    var ml = this.g - rh1 / this.a;
    lat = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_8__["default"])(ml, this.e0, this.e1, this.e2, this.e3);
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(this.long0 + theta / this.ns);
    p.x = lon;
    p.y = lat;
    return p;
  }

}

var names = ["Equidistant_Conic", "eqdc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/etmerc.js":
/*!*******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/etmerc.js ***!
  \*******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_sinh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/sinh */ "../node_modules/proj4/lib/common/sinh.js");
/* harmony import */ var _common_hypot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hypot */ "../node_modules/proj4/lib/common/hypot.js");
/* harmony import */ var _common_asinhy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/asinhy */ "../node_modules/proj4/lib/common/asinhy.js");
/* harmony import */ var _common_gatg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/gatg */ "../node_modules/proj4/lib/common/gatg.js");
/* harmony import */ var _common_clens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/clens */ "../node_modules/proj4/lib/common/clens.js");
/* harmony import */ var _common_clens_cmplx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/clens_cmplx */ "../node_modules/proj4/lib/common/clens_cmplx.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
// Heavily based on this etmerc projection implementation
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/etmerc.js









function init() {
  if (this.es === undefined || this.es <= 0) {
    throw new Error('incorrect elliptical usage');
  }

  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

  this.cgb = [];
  this.cbg = [];
  this.utg = [];
  this.gtu = [];

  var f = this.es / (1 + Math.sqrt(1 - this.es));
  var n = f / (2 - f);
  var np = n;

  this.cgb[0] = n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675 ))))));
  this.cbg[0] = n * (-2 + n * ( 2 / 3 + n * ( 4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725))))));

  np = np * n;
  this.cgb[1] = np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945)))));
  this.cbg[1] = np * (5 / 3 + n * (-16 / 15 + n * ( -13 / 9 + n * (904 / 315 + n * (-1522 / 945)))));

  np = np * n;
  this.cgb[2] = np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835))));
  this.cbg[2] = np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835))));

  np = np * n;
  this.cgb[3] = np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175)));
  this.cbg[3] = np * (1237 / 630 + n * (-12 / 5 + n * ( -24832 / 14175)));

  np = np * n;
  this.cgb[4] = np * (4174 / 315 + n * (-144838 / 6237));
  this.cbg[4] = np * (-734 / 315 + n * (109598 / 31185));

  np = np * n;
  this.cgb[5] = np * (601676 / 22275);
  this.cbg[5] = np * (444337 / 155925);

  np = Math.pow(n, 2);
  this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));

  this.utg[0] = n * (-0.5 + n * ( 2 / 3 + n * (-37 / 96 + n * ( 1 / 360 + n * (81 / 512 + n * (-96199 / 604800))))));
  this.gtu[0] = n * (0.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800))))));

  this.utg[1] = np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720)))));
  this.gtu[1] = np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360)))));

  np = np * n;
  this.utg[2] = np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720 ))));
  this.gtu[2] = np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440))));

  np = np * n;
  this.utg[3] = np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600)));
  this.gtu[3] = np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600)));

  np = np * n;
  this.utg[4] = np * (-4583 / 161280 + n * (108847 / 3991680));
  this.gtu[4] = np * (34729 / 80640 + n * (-3418889 / 1995840));

  np = np * n;
  this.utg[5] = np * (-20648693 / 638668800);
  this.gtu[5] = np * (212378941 / 319334400);

  var Z = Object(_common_gatg__WEBPACK_IMPORTED_MODULE_3__["default"])(this.cbg, this.lat0);
  this.Zb = -this.Qn * (Z + Object(_common_clens__WEBPACK_IMPORTED_MODULE_4__["default"])(this.gtu, 2 * Z));
}

function forward(p) {
  var Ce = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(p.x - this.long0);
  var Cn = p.y;

  Cn = Object(_common_gatg__WEBPACK_IMPORTED_MODULE_3__["default"])(this.cbg, Cn);
  var sin_Cn = Math.sin(Cn);
  var cos_Cn = Math.cos(Cn);
  var sin_Ce = Math.sin(Ce);
  var cos_Ce = Math.cos(Ce);

  Cn = Math.atan2(sin_Cn, cos_Ce * cos_Cn);
  Ce = Math.atan2(sin_Ce * cos_Cn, Object(_common_hypot__WEBPACK_IMPORTED_MODULE_1__["default"])(sin_Cn, cos_Cn * cos_Ce));
  Ce = Object(_common_asinhy__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.tan(Ce));

  var tmp = Object(_common_clens_cmplx__WEBPACK_IMPORTED_MODULE_5__["default"])(this.gtu, 2 * Cn, 2 * Ce);

  Cn = Cn + tmp[0];
  Ce = Ce + tmp[1];

  var x;
  var y;

  if (Math.abs(Ce) <= 2.623395162778) {
    x = this.a * (this.Qn * Ce) + this.x0;
    y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
  }
  else {
    x = Infinity;
    y = Infinity;
  }

  p.x = x;
  p.y = y;

  return p;
}

function inverse(p) {
  var Ce = (p.x - this.x0) * (1 / this.a);
  var Cn = (p.y - this.y0) * (1 / this.a);

  Cn = (Cn - this.Zb) / this.Qn;
  Ce = Ce / this.Qn;

  var lon;
  var lat;

  if (Math.abs(Ce) <= 2.623395162778) {
    var tmp = Object(_common_clens_cmplx__WEBPACK_IMPORTED_MODULE_5__["default"])(this.utg, 2 * Cn, 2 * Ce);

    Cn = Cn + tmp[0];
    Ce = Ce + tmp[1];
    Ce = Math.atan(Object(_common_sinh__WEBPACK_IMPORTED_MODULE_0__["default"])(Ce));

    var sin_Cn = Math.sin(Cn);
    var cos_Cn = Math.cos(Cn);
    var sin_Ce = Math.sin(Ce);
    var cos_Ce = Math.cos(Ce);

    Cn = Math.atan2(sin_Cn * cos_Ce, Object(_common_hypot__WEBPACK_IMPORTED_MODULE_1__["default"])(sin_Ce, cos_Ce * cos_Cn));
    Ce = Math.atan2(sin_Ce, cos_Ce * cos_Cn);

    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(Ce + this.long0);
    lat = Object(_common_gatg__WEBPACK_IMPORTED_MODULE_3__["default"])(this.cgb, Cn);
  }
  else {
    lon = Infinity;
    lat = Infinity;
  }

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/gauss.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/gauss.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_srat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/srat */ "../node_modules/proj4/lib/common/srat.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");

var MAX_ITER = 20;


function init() {
  var sphi = Math.sin(this.lat0);
  var cphi = Math.cos(this.lat0);
  cphi *= cphi;
  this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
  this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
  this.phic0 = Math.asin(sphi / this.C);
  this.ratexp = 0.5 * this.C * this.e;
  this.K = Math.tan(0.5 * this.phic0 + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]) / (Math.pow(Math.tan(0.5 * this.lat0 + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]), this.C) * Object(_common_srat__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e * sphi, this.ratexp));
}

function forward(p) {
  var lon = p.x;
  var lat = p.y;

  p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]), this.C) * Object(_common_srat__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e * Math.sin(lat), this.ratexp)) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"];
  p.x = this.C * lon;
  return p;
}

function inverse(p) {
  var DEL_TOL = 1e-14;
  var lon = p.x / this.C;
  var lat = p.y;
  var num = Math.pow(Math.tan(0.5 * lat + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]) / this.K, 1 / this.C);
  for (var i = MAX_ITER; i > 0; --i) {
    lat = 2 * Math.atan(num * Object(_common_srat__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e * Math.sin(p.y), - 0.5 * this.e)) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"];
    if (Math.abs(lat - p.y) < DEL_TOL) {
      break;
    }
    p.y = lat;
  }
  /* convergence failed */
  if (!i) {
    return null;
  }
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["gauss"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/geocent.js":
/*!********************************************************!*\
  !*** ../node_modules/proj4/lib/projections/geocent.js ***!
  \********************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _datumUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datumUtils */ "../node_modules/proj4/lib/datumUtils.js");


function init() {
    this.name = 'geocent';

}

function forward(p) {
    var point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_0__["geodeticToGeocentric"])(p, this.es, this.a);
    return point;
}

function inverse(p) {
    var point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_0__["geocentricToGeodetic"])(p, this.es, this.a, this.b);
    return point;
}

var names = ["Geocentric", 'geocentric', "geocent", "Geocent"];
/* harmony default export */ __webpack_exports__["default"] = ({
    init: init,
    forward: forward,
    inverse: inverse,
    names: names
});

/***/ }),

/***/ "../node_modules/proj4/lib/projections/gnom.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/gnom.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/asinz */ "../node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");




/*
  reference:
    Wolfram Mathworld "Gnomonic Projection"
    http://mathworld.wolfram.com/GnomonicProjection.html
    Accessed: 12th November 2009
  */
function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
  // Approximation for projecting points to the horizon (infinity)
  this.infinity_dist = 1000 * this.a;
  this.rc = 1;
}

/* Gnomonic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g;
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"])) {
    x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
  }
  else {

    // Point is in the opposing hemisphere and is unprojectable
    // We still need to return a reasonable point, so we project
    // to infinity, on a bearing
    // equivalent to the northern hemisphere equivalent
    // This is a reasonable approximation for short shapes and lines that
    // straddle the horizon.

    x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
    y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);

  }
  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh; /* Rho */
  var sinc, cosc;
  var c;
  var lon, lat;

  /* Inverse equations
      -----------------*/
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;

  if ((rh = Math.sqrt(p.x * p.x + p.y * p.y))) {
    c = Math.atan2(rh, this.rc);
    sinc = Math.sin(c);
    cosc = Math.cos(c);

    lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_1__["default"])(cosc * this.sin_p14 + (p.y * sinc * this.cos_p14) / rh);
    lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + lon);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["gnom"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/krovak.js":
/*!*******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/krovak.js ***!
  \*******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");


function init() {
  this.a = 6377397.155;
  this.es = 0.006674372230614;
  this.e = Math.sqrt(this.es);
  if (!this.lat0) {
    this.lat0 = 0.863937979737193;
  }
  if (!this.long0) {
    this.long0 = 0.7417649320975901 - 0.308341501185665;
  }
  /* if scale not set default to 0.9999 */
  if (!this.k0) {
    this.k0 = 0.9999;
  }
  this.s45 = 0.785398163397448; /* 45 */
  this.s90 = 2 * this.s45;
  this.fi0 = this.lat0;
  this.e2 = this.es;
  this.e = Math.sqrt(this.e2);
  this.alfa = Math.sqrt(1 + (this.e2 * Math.pow(Math.cos(this.fi0), 4)) / (1 - this.e2));
  this.uq = 1.04216856380474;
  this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
  this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
  this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
  this.k1 = this.k0;
  this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
  this.s0 = 1.37008346281555;
  this.n = Math.sin(this.s0);
  this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
  this.ad = this.s90 - this.uq;
}

/* ellipsoid */
/* calculate xy from lat/lon */
/* Constants, identical to inverse transform function */
function forward(p) {
  var gfi, u, deltav, s, d, eps, ro;
  var lon = p.x;
  var lat = p.y;
  var delta_lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  /* Transformation */
  gfi = Math.pow(((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat))), (this.alfa * this.e / 2));
  u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
  deltav = -delta_lon * this.alfa;
  s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
  d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
  eps = this.n * d;
  ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
  p.y = ro * Math.cos(eps) / 1;
  p.x = ro * Math.sin(eps) / 1;

  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  return (p);
}

/* calculate lat/lon from xy */
function inverse(p) {
  var u, deltav, s, d, eps, ro, fi1;
  var ok;

  /* Transformation */
  /* revert y, x*/
  var tmp = p.x;
  p.x = p.y;
  p.y = tmp;
  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  ro = Math.sqrt(p.x * p.x + p.y * p.y);
  eps = Math.atan2(p.y, p.x);
  d = eps / Math.sin(this.s0);
  s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
  u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
  deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
  p.x = this.long0 - deltav / this.alfa;
  fi1 = u;
  ok = 0;
  var iter = 0;
  do {
    p.y = 2 * (Math.atan(Math.pow(this.k, - 1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
    if (Math.abs(fi1 - p.y) < 0.0000000001) {
      ok = 1;
    }
    fi1 = p.y;
    iter += 1;
  } while (ok === 0 && iter < 15);
  if (iter >= 15) {
    return null;
  }

  return (p);
}

var names = ["Krovak", "krovak"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/laea.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/laea.js ***!
  \*****************************************************/
/*! exports provided: S_POLE, N_POLE, EQUIT, OBLIQ, init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_POLE", function() { return S_POLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N_POLE", function() { return N_POLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUIT", function() { return EQUIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBLIQ", function() { return OBLIQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_qsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/qsfnz */ "../node_modules/proj4/lib/common/qsfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");






/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */

var S_POLE = 1;

var N_POLE = 2;
var EQUIT = 3;
var OBLIQ = 4;

/* Initialize the Lambert Azimuthal Equal Area projection
  ------------------------------------------------------*/
function init() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
  }
  else if (Math.abs(t) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    this.mode = this.EQUIT;
  }
  else {
    this.mode = this.OBLIQ;
  }
  if (this.es > 0) {
    var sinphi;

    this.qp = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, 1);
    this.mmf = 0.5 / (1 - this.es);
    this.apa = authset(this.es);
    switch (this.mode) {
    case this.N_POLE:
      this.dd = 1;
      break;
    case this.S_POLE:
      this.dd = 1;
      break;
    case this.EQUIT:
      this.rq = Math.sqrt(0.5 * this.qp);
      this.dd = 1 / this.rq;
      this.xmf = 1;
      this.ymf = 0.5 * this.qp;
      break;
    case this.OBLIQ:
      this.rq = Math.sqrt(0.5 * this.qp);
      sinphi = Math.sin(this.lat0);
      this.sinb1 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, sinphi) / this.qp;
      this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
      this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
      this.ymf = (this.xmf = this.rq) / this.dd;
      this.xmf *= this.dd;
      break;
    }
  }
  else {
    if (this.mode === this.OBLIQ) {
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }
  }
}

/* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
  var lam = p.x;
  var phi = p.y;

  lam = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(lam - this.long0);
  if (this.sphere) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    coslam = Math.cos(lam);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      y = (this.mode === this.EQUIT) ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
      if (y <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        return null;
      }
      y = Math.sqrt(2 / y);
      x = y * cosphi * Math.sin(lam);
      y *= (this.mode === this.EQUIT) ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        coslam = -coslam;
      }
      if (Math.abs(phi + this.lat0) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        return null;
      }
      y = _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] - phi * 0.5;
      y = 2 * ((this.mode === this.S_POLE) ? Math.cos(y) : Math.sin(y));
      x = y * Math.sin(lam);
      y *= coslam;
    }
  }
  else {
    sinb = 0;
    cosb = 0;
    b = 0;
    coslam = Math.cos(lam);
    sinlam = Math.sin(lam);
    sinphi = Math.sin(phi);
    q = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, sinphi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinb = q / this.qp;
      cosb = Math.sqrt(1 - sinb * sinb);
    }
    switch (this.mode) {
    case this.OBLIQ:
      b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
      break;
    case this.EQUIT:
      b = 1 + cosb * coslam;
      break;
    case this.N_POLE:
      b = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + phi;
      q = this.qp - q;
      break;
    case this.S_POLE:
      b = phi - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
      q = this.qp + q;
      break;
    }
    if (Math.abs(b) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      return null;
    }
    switch (this.mode) {
    case this.OBLIQ:
    case this.EQUIT:
      b = Math.sqrt(2 / b);
      if (this.mode === this.OBLIQ) {
        y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
      }
      else {
        y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
      }
      x = this.xmf * b * cosb * sinlam;
      break;
    case this.N_POLE:
    case this.S_POLE:
      if (q >= 0) {
        x = (b = Math.sqrt(q)) * sinlam;
        y = coslam * ((this.mode === this.S_POLE) ? b : -b);
      }
      else {
        x = y = 0;
      }
      break;
    }
  }

  p.x = this.a * x + this.x0;
  p.y = this.a * y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var lam, phi, cCe, sCe, q, rho, ab;
  if (this.sphere) {
    var cosz = 0,
      rh, sinz = 0;

    rh = Math.sqrt(x * x + y * y);
    phi = rh * 0.5;
    if (phi > 1) {
      return null;
    }
    phi = 2 * Math.asin(phi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinz = Math.sin(phi);
      cosz = Math.cos(phi);
    }
    switch (this.mode) {
    case this.EQUIT:
      phi = (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) ? 0 : Math.asin(y * sinz / rh);
      x *= sinz;
      y = cosz * rh;
      break;
    case this.OBLIQ:
      phi = (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) ? this.lat0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
      x *= sinz * this.cosph0;
      y = (cosz - Math.sin(phi) * this.sinph0) * rh;
      break;
    case this.N_POLE:
      y = -y;
      phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - phi;
      break;
    case this.S_POLE:
      phi -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
      break;
    }
    lam = (y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ)) ? 0 : Math.atan2(x, y);
  }
  else {
    ab = 0;
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      x /= this.dd;
      y *= this.dd;
      rho = Math.sqrt(x * x + y * y);
      if (rho < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        p.x = this.long0;
        p.y = this.lat0;
        return p;
      }
      sCe = 2 * Math.asin(0.5 * rho / this.rq);
      cCe = Math.cos(sCe);
      x *= (sCe = Math.sin(sCe));
      if (this.mode === this.OBLIQ) {
        ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
        q = this.qp * ab;
        y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
      }
      else {
        ab = y * sCe / rho;
        q = this.qp * ab;
        y = rho * cCe;
      }
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        y = -y;
      }
      q = (x * x + y * y);
      if (!q) {
        p.x = this.long0;
        p.y = this.lat0;
        return p;
      }
      ab = 1 - q / this.qp;
      if (this.mode === this.S_POLE) {
        ab = -ab;
      }
    }
    lam = Math.atan2(x, y);
    phi = authlat(Math.asin(ab), this.apa);
  }

  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(this.long0 + lam);
  p.y = phi;
  return p;
}

/* determine latitude from authalic latitude */
var P00 = 0.33333333333333333333;

var P01 = 0.17222222222222222222;
var P02 = 0.10257936507936507936;
var P10 = 0.06388888888888888888;
var P11 = 0.06640211640211640211;
var P20 = 0.01641501294219154443;

function authset(es) {
  var t;
  var APA = [];
  APA[0] = es * P00;
  t = es * es;
  APA[0] += t * P01;
  APA[1] = t * P10;
  t *= es;
  APA[0] += t * P02;
  APA[1] += t * P11;
  APA[2] = t * P20;
  return APA;
}

function authlat(beta, APA) {
  var t = beta + beta;
  return (beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t));
}

var names = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  S_POLE: S_POLE,
  N_POLE: N_POLE,
  EQUIT: EQUIT,
  OBLIQ: OBLIQ
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/lcc.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/lcc.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/msfnz */ "../node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/tsfnz */ "../node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_sign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/sign */ "../node_modules/proj4/lib/common/sign.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/phi2z */ "../node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");






function init() {

  // array of:  r_maj,r_min,lat1,lat2,c_lon,c_lat,false_east,false_north
  //double c_lat;                   /* center latitude                      */
  //double c_lon;                   /* center longitude                     */
  //double lat1;                    /* first standard parallel              */
  //double lat2;                    /* second standard parallel             */
  //double r_maj;                   /* major axis                           */
  //double r_min;                   /* minor axis                           */
  //double false_east;              /* x offset in meters                   */
  //double false_north;             /* y offset in meters                   */

  if (!this.lat2) {
    this.lat2 = this.lat1;
  } //if lat2 is not defined
  if (!this.k0) {
    this.k0 = 1;
  }
  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    return;
  }

  var temp = this.b / this.a;
  this.e = Math.sqrt(1 - temp * temp);

  var sin1 = Math.sin(this.lat1);
  var cos1 = Math.cos(this.lat1);
  var ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, sin1, cos1);
  var ts1 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, this.lat1, sin1);

  var sin2 = Math.sin(this.lat2);
  var cos2 = Math.cos(this.lat2);
  var ms2 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, sin2, cos2);
  var ts2 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, this.lat2, sin2);

  var ts0 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, this.lat0, Math.sin(this.lat0));

  if (Math.abs(this.lat1 - this.lat2) > _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
  }
  else {
    this.ns = sin1;
  }
  if (isNaN(this.ns)) {
    this.ns = sin1;
  }
  this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
  this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
  if (!this.title) {
    this.title = "Lambert Conformal Conic";
  }
}

// Lambert Conformal conic forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  // singular cases :
  if (Math.abs(2 * Math.abs(lat) - Math.PI) <= _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    lat = Object(_common_sign__WEBPACK_IMPORTED_MODULE_2__["default"])(lat) * (_constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"] - 2 * _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]);
  }

  var con = Math.abs(Math.abs(lat) - _constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"]);
  var ts, rh1;
  if (con > _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    ts = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, lat, Math.sin(lat));
    rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
  }
  else {
    con = lat * this.ns;
    if (con <= 0) {
      return null;
    }
    rh1 = 0;
  }
  var theta = this.ns * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(lon - this.long0);
  p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
  p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;

  return p;
}

// Lambert Conformal Conic inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {

  var rh1, con, ts;
  var lat, lon;
  var x = (p.x - this.x0) / this.k0;
  var y = (this.rh - (p.y - this.y0) / this.k0);
  if (this.ns > 0) {
    rh1 = Math.sqrt(x * x + y * y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(x * x + y * y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2((con * x), (con * y));
  }
  if ((rh1 !== 0) || (this.ns > 0)) {
    con = 1 / this.ns;
    ts = Math.pow((rh1 / (this.a * this.f0)), con);
    lat = Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  else {
    lat = -_constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"];
  }
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(theta / this.ns + this.long0);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/longlat.js":
/*!********************************************************!*\
  !*** ../node_modules/proj4/lib/projections/longlat.js ***!
  \********************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
function init() {
  //no-op for longlat
}

function identity(pt) {
  return pt;
}


var names = ["longlat", "identity"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: identity,
  inverse: identity,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/merc.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/merc.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/msfnz */ "../node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/tsfnz */ "../node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/phi2z */ "../node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");






function init() {
  var con = this.b / this.a;
  this.es = 1 - con * con;
  if(!('x0' in this)){
    this.x0 = 0;
  }
  if(!('y0' in this)){
    this.y0 = 0;
  }
  this.e = Math.sqrt(this.es);
  if (this.lat_ts) {
    if (this.sphere) {
      this.k0 = Math.cos(this.lat_ts);
    }
    else {
      this.k0 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  }
  else {
    if (!this.k0) {
      if (this.k) {
        this.k0 = this.k;
      }
      else {
        this.k0 = 1;
      }
    }
  }
}

/* Mercator forward equations--mapping lat,long to x,y
  --------------------------------------------------*/

function forward(p) {
  var lon = p.x;
  var lat = p.y;
  // convert to radians
  if (lat * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] > 90 && lat * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] < -90 && lon * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] > 180 && lon * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] < -180) {
    return null;
  }

  var x, y;
  if (Math.abs(Math.abs(lat) - _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"]) <= _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    return null;
  }
  else {
    if (this.sphere) {
      x = this.x0 + this.a * this.k0 * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(lon - this.long0);
      y = this.y0 + this.a * this.k0 * Math.log(Math.tan(_constants_values__WEBPACK_IMPORTED_MODULE_4__["FORTPI"] + 0.5 * lat));
    }
    else {
      var sinphi = Math.sin(lat);
      var ts = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, lat, sinphi);
      x = this.x0 + this.a * this.k0 * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(lon - this.long0);
      y = this.y0 - this.a * this.k0 * Math.log(ts);
    }
    p.x = x;
    p.y = y;
    return p;
  }
}

/* Mercator inverse equations--mapping x,y to lat/long
  --------------------------------------------------*/
function inverse(p) {

  var x = p.x - this.x0;
  var y = p.y - this.y0;
  var lon, lat;

  if (this.sphere) {
    lat = _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"] - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
  }
  else {
    var ts = Math.exp(-y / (this.a * this.k0));
    lat = Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(this.long0 + x / (this.a * this.k0));

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/mill.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/mill.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");


/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */


/* Initialize the Miller Cylindrical projection
  -------------------------------------------*/
function init() {
  //no-op
}

/* Miller Cylindrical forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var x = this.x0 + this.a * dlon;
  var y = this.y0 + this.a * Math.log(Math.tan((Math.PI / 4) + (lat / 2.5))) * 1.25;

  p.x = x;
  p.y = y;
  return p;
}

/* Miller Cylindrical inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;

  var lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + p.x / this.a);
  var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Miller_Cylindrical", "mill"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/moll.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/moll.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");

function init() {}

/* Mollweide forward equations--mapping lat,long to x,y
    ----------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var lon = p.x;
  var lat = p.y;

  var delta_lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var theta = lat;
  var con = Math.PI * Math.sin(lat);

  /* Iterate using the Newton-Raphson method to find theta
      -----------------------------------------------------*/
  while (true) {
    var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
    theta += delta_theta;
    if (Math.abs(delta_theta) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      break;
    }
  }
  theta /= 2;

  /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
       this is done here because of precision problems with "cos(theta)"
       --------------------------------------------------------------------------*/
  if (Math.PI / 2 - Math.abs(lat) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
    delta_lon = 0;
  }
  var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
  var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var theta;
  var arg;

  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  arg = p.y / (1.4142135623731 * this.a);

  /* Because of division by zero problems, 'arg' can not be 1.  Therefore
       a number very close to one is used instead.
       -------------------------------------------------------------------*/
  if (Math.abs(arg) > 0.999999999999) {
    arg = 0.999999999999;
  }
  theta = Math.asin(arg);
  var lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + (p.x / (0.900316316158 * this.a * Math.cos(theta))));
  if (lon < (-Math.PI)) {
    lon = -Math.PI;
  }
  if (lon > Math.PI) {
    lon = Math.PI;
  }
  arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
  if (Math.abs(arg) > 1) {
    arg = 1;
  }
  var lat = Math.asin(arg);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Mollweide", "moll"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/nzmg.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/nzmg.js ***!
  \*****************************************************/
/*! exports provided: iterations, init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterations", function() { return iterations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");


/*
  reference
    Department of Land and Survey Technical Circular 1973/32
      http://www.linz.govt.nz/docs/miscellaneous/nz-map-definition.pdf
    OSG Technical Report 4.1
      http://www.linz.govt.nz/docs/miscellaneous/nzmg.pdf
  */

/**
 * iterations: Number of iterations to refine inverse transform.
 *     0 -> km accuracy
 *     1 -> m accuracy -- suitable for most mapping applications
 *     2 -> mm accuracy
 */
var iterations = 1;

function init() {
  this.A = [];
  this.A[1] = 0.6399175073;
  this.A[2] = -0.1358797613;
  this.A[3] = 0.063294409;
  this.A[4] = -0.02526853;
  this.A[5] = 0.0117879;
  this.A[6] = -0.0055161;
  this.A[7] = 0.0026906;
  this.A[8] = -0.001333;
  this.A[9] = 0.00067;
  this.A[10] = -0.00034;

  this.B_re = [];
  this.B_im = [];
  this.B_re[1] = 0.7557853228;
  this.B_im[1] = 0;
  this.B_re[2] = 0.249204646;
  this.B_im[2] = 0.003371507;
  this.B_re[3] = -0.001541739;
  this.B_im[3] = 0.041058560;
  this.B_re[4] = -0.10162907;
  this.B_im[4] = 0.01727609;
  this.B_re[5] = -0.26623489;
  this.B_im[5] = -0.36249218;
  this.B_re[6] = -0.6870983;
  this.B_im[6] = -1.1651967;

  this.C_re = [];
  this.C_im = [];
  this.C_re[1] = 1.3231270439;
  this.C_im[1] = 0;
  this.C_re[2] = -0.577245789;
  this.C_im[2] = -0.007809598;
  this.C_re[3] = 0.508307513;
  this.C_im[3] = -0.112208952;
  this.C_re[4] = -0.15094762;
  this.C_im[4] = 0.18200602;
  this.C_re[5] = 1.01418179;
  this.C_im[5] = 1.64497696;
  this.C_re[6] = 1.9660549;
  this.C_im[6] = 2.5127645;

  this.D = [];
  this.D[1] = 1.5627014243;
  this.D[2] = 0.5185406398;
  this.D[3] = -0.03333098;
  this.D[4] = -0.1052906;
  this.D[5] = -0.0368594;
  this.D[6] = 0.007317;
  this.D[7] = 0.01220;
  this.D[8] = 0.00394;
  this.D[9] = -0.0013;
}

/**
    New Zealand Map Grid Forward  - long/lat to x/y
    long/lat in radians
  */
function forward(p) {
  var n;
  var lon = p.x;
  var lat = p.y;

  var delta_lat = lat - this.lat0;
  var delta_lon = lon - this.long0;

  // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
  // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.
  var d_phi = delta_lat / _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"] * 1E-5;
  var d_lambda = delta_lon;
  var d_phi_n = 1; // d_phi^0

  var d_psi = 0;
  for (n = 1; n <= 10; n++) {
    d_phi_n = d_phi_n * d_phi;
    d_psi = d_psi + this.A[n] * d_phi_n;
  }

  // 2. Calculate theta
  var th_re = d_psi;
  var th_im = d_lambda;

  // 3. Calculate z
  var th_n_re = 1;
  var th_n_im = 0; // theta^0
  var th_n_re1;
  var th_n_im1;

  var z_re = 0;
  var z_im = 0;
  for (n = 1; n <= 6; n++) {
    th_n_re1 = th_n_re * th_re - th_n_im * th_im;
    th_n_im1 = th_n_im * th_re + th_n_re * th_im;
    th_n_re = th_n_re1;
    th_n_im = th_n_im1;
    z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
    z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
  }

  // 4. Calculate easting and northing
  p.x = (z_im * this.a) + this.x0;
  p.y = (z_re * this.a) + this.y0;

  return p;
}

/**
    New Zealand Map Grid Inverse  -  x/y to long/lat
  */
function inverse(p) {
  var n;
  var x = p.x;
  var y = p.y;

  var delta_x = x - this.x0;
  var delta_y = y - this.y0;

  // 1. Calculate z
  var z_re = delta_y / this.a;
  var z_im = delta_x / this.a;

  // 2a. Calculate theta - first approximation gives km accuracy
  var z_n_re = 1;
  var z_n_im = 0; // z^0
  var z_n_re1;
  var z_n_im1;

  var th_re = 0;
  var th_im = 0;
  for (n = 1; n <= 6; n++) {
    z_n_re1 = z_n_re * z_re - z_n_im * z_im;
    z_n_im1 = z_n_im * z_re + z_n_re * z_im;
    z_n_re = z_n_re1;
    z_n_im = z_n_im1;
    th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
    th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
  }

  // 2b. Iterate to refine the accuracy of the calculation
  //        0 iterations gives km accuracy
  //        1 iteration gives m accuracy -- good enough for most mapping applications
  //        2 iterations bives mm accuracy
  for (var i = 0; i < this.iterations; i++) {
    var th_n_re = th_re;
    var th_n_im = th_im;
    var th_n_re1;
    var th_n_im1;

    var num_re = z_re;
    var num_im = z_im;
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    th_n_re = 1;
    th_n_im = 0;
    var den_re = this.B_re[1];
    var den_im = this.B_im[1];
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    // Complex division
    var den2 = den_re * den_re + den_im * den_im;
    th_re = (num_re * den_re + num_im * den_im) / den2;
    th_im = (num_im * den_re - num_re * den_im) / den2;
  }

  // 3. Calculate d_phi              ...                                    // and d_lambda
  var d_psi = th_re;
  var d_lambda = th_im;
  var d_psi_n = 1; // d_psi^0

  var d_phi = 0;
  for (n = 1; n <= 9; n++) {
    d_psi_n = d_psi_n * d_psi;
    d_phi = d_phi + this.D[n] * d_psi_n;
  }

  // 4. Calculate latitude and longitude
  // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.
  var lat = this.lat0 + (d_phi * _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"] * 1E5);
  var lon = this.long0 + d_lambda;

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["New_Zealand_Map_Grid", "nzmg"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/omerc.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/omerc.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/tsfnz */ "../node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/phi2z */ "../node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");





/* Initialize the Oblique Mercator  projection
    ------------------------------------------*/
function init() {
  this.no_off = this.no_off || false;
  this.no_rot = this.no_rot || false;

  if (isNaN(this.k0)) {
    this.k0 = 1;
  }
  var sinlat = Math.sin(this.lat0);
  var coslat = Math.cos(this.lat0);
  var con = this.e * sinlat;

  this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(coslat, 4));
  this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - con * con);
  var t0 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, this.lat0, sinlat);
  var dl = this.bl / coslat * Math.sqrt((1 - this.es) / (1 - con * con));
  if (dl * dl < 1) {
    dl = 1;
  }
  var fl;
  var gl;
  if (!isNaN(this.longc)) {
    //Central point and azimuth method

    if (this.lat0 >= 0) {
      fl = dl + Math.sqrt(dl * dl - 1);
    }
    else {
      fl = dl - Math.sqrt(dl * dl - 1);
    }
    this.el = fl * Math.pow(t0, this.bl);
    gl = 0.5 * (fl - 1 / fl);
    this.gamma0 = Math.asin(Math.sin(this.alpha) / dl);
    this.long0 = this.longc - Math.asin(gl * Math.tan(this.gamma0)) / this.bl;

  }
  else {
    //2 points method
    var t1 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, this.lat1, Math.sin(this.lat1));
    var t2 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, this.lat2, Math.sin(this.lat2));
    if (this.lat0 >= 0) {
      this.el = (dl + Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    else {
      this.el = (dl - Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    var hl = Math.pow(t1, this.bl);
    var ll = Math.pow(t2, this.bl);
    fl = this.el / hl;
    gl = 0.5 * (fl - 1 / fl);
    var jl = (this.el * this.el - ll * hl) / (this.el * this.el + ll * hl);
    var pl = (ll - hl) / (ll + hl);
    var dlon12 = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(this.long1 - this.long2);
    this.long0 = 0.5 * (this.long1 + this.long2) - Math.atan(jl * Math.tan(0.5 * this.bl * (dlon12)) / pl) / this.bl;
    this.long0 = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(this.long0);
    var dlon10 = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(this.long1 - this.long0);
    this.gamma0 = Math.atan(Math.sin(this.bl * (dlon10)) / gl);
    this.alpha = Math.asin(dl * Math.sin(this.gamma0));
  }

  if (this.no_off) {
    this.uc = 0;
  }
  else {
    if (this.lat0 >= 0) {
      this.uc = this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
    else {
      this.uc = -1 * this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
  }

}

/* Oblique Mercator forward equations--mapping lat,long to x,y
    ----------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(lon - this.long0);
  var us, vs;
  var con;
  if (Math.abs(Math.abs(lat) - _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"]) <= _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
    if (lat > 0) {
      con = -1;
    }
    else {
      con = 1;
    }
    vs = this.al / this.bl * Math.log(Math.tan(_constants_values__WEBPACK_IMPORTED_MODULE_3__["FORTPI"] + con * this.gamma0 * 0.5));
    us = -1 * con * _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"] * this.al / this.bl;
  }
  else {
    var t = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, lat, Math.sin(lat));
    var ql = this.el / Math.pow(t, this.bl);
    var sl = 0.5 * (ql - 1 / ql);
    var tl = 0.5 * (ql + 1 / ql);
    var vl = Math.sin(this.bl * (dlon));
    var ul = (sl * Math.sin(this.gamma0) - vl * Math.cos(this.gamma0)) / tl;
    if (Math.abs(Math.abs(ul) - 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
      vs = Number.POSITIVE_INFINITY;
    }
    else {
      vs = 0.5 * this.al * Math.log((1 - ul) / (1 + ul)) / this.bl;
    }
    if (Math.abs(Math.cos(this.bl * (dlon))) <= _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
      us = this.al * this.bl * (dlon);
    }
    else {
      us = this.al * Math.atan2(sl * Math.cos(this.gamma0) + vl * Math.sin(this.gamma0), Math.cos(this.bl * dlon)) / this.bl;
    }
  }

  if (this.no_rot) {
    p.x = this.x0 + us;
    p.y = this.y0 + vs;
  }
  else {

    us -= this.uc;
    p.x = this.x0 + vs * Math.cos(this.alpha) + us * Math.sin(this.alpha);
    p.y = this.y0 + us * Math.cos(this.alpha) - vs * Math.sin(this.alpha);
  }
  return p;
}

function inverse(p) {
  var us, vs;
  if (this.no_rot) {
    vs = p.y - this.y0;
    us = p.x - this.x0;
  }
  else {
    vs = (p.x - this.x0) * Math.cos(this.alpha) - (p.y - this.y0) * Math.sin(this.alpha);
    us = (p.y - this.y0) * Math.cos(this.alpha) + (p.x - this.x0) * Math.sin(this.alpha);
    us += this.uc;
  }
  var qp = Math.exp(-1 * this.bl * vs / this.al);
  var sp = 0.5 * (qp - 1 / qp);
  var tp = 0.5 * (qp + 1 / qp);
  var vp = Math.sin(this.bl * us / this.al);
  var up = (vp * Math.cos(this.gamma0) + sp * Math.sin(this.gamma0)) / tp;
  var ts = Math.pow(this.el / Math.sqrt((1 + up) / (1 - up)), 1 / this.bl);
  if (Math.abs(up - 1) < _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
    p.x = this.long0;
    p.y = _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"];
  }
  else if (Math.abs(up + 1) < _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
    p.x = this.long0;
    p.y = -1 * _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"];
  }
  else {
    p.y = Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, ts);
    p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(this.long0 - Math.atan2(sp * Math.cos(this.gamma0) - vp * Math.sin(this.gamma0), Math.cos(this.bl * us / this.al)) / this.bl);
  }
  return p;
}

var names = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/ortho.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/ortho.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/asinz */ "../node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");




function init() {
  //double temp;      /* temporary variable    */

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
}

/* Orthographic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g, x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"])) {
    x = this.a * ksp * cosphi * Math.sin(dlon);
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
  }
  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh; /* height above ellipsoid      */
  var z; /* angle          */
  var sinz, cosz; /* sin of z and cos of z      */
  var con;
  var lon, lat;
  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  rh = Math.sqrt(p.x * p.x + p.y * p.y);
  z = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_1__["default"])(rh / this.a);

  sinz = Math.sin(z);
  cosz = Math.cos(z);

  lon = this.long0;
  if (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"]) {
    lat = this.lat0;
    p.x = lon;
    p.y = lat;
    return p;
  }
  lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_1__["default"])(cosz * this.sin_p14 + (p.y * sinz * this.cos_p14) / rh);
  con = Math.abs(this.lat0) - _constants_values__WEBPACK_IMPORTED_MODULE_2__["HALF_PI"];
  if (Math.abs(con) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"]) {
    if (this.lat0 >= 0) {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, - p.y));
    }
    else {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 - Math.atan2(-p.x, p.y));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2((p.x * sinz), rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz));
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["ortho"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/poly.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/poly.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/e0fn */ "../node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/e1fn */ "../node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/e2fn */ "../node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e3fn */ "../node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/adjust_lat */ "../node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/mlfn */ "../node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_gN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/gN */ "../node_modules/proj4/lib/common/gN.js");










var MAX_ITER = 20;

function init() {
  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles
  this.e = Math.sqrt(this.es);
  this.e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.es);
  this.e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.es);
  this.e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
  this.e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
  this.ml0 = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
}

/* Polyconic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y, el;
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(lon - this.long0);
  el = dlon * Math.sin(lat);
  if (this.sphere) {
    if (Math.abs(lat) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      x = this.a * dlon;
      y = -1 * this.a * this.lat0;
    }
    else {
      x = this.a * Math.sin(el) / Math.tan(lat);
      y = this.a * (Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_5__["default"])(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
    }
  }
  else {
    if (Math.abs(lat) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      x = this.a * dlon;
      y = -1 * this.ml0;
    }
    else {
      var nl = Object(_common_gN__WEBPACK_IMPORTED_MODULE_8__["default"])(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
      x = nl * Math.sin(el);
      y = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
    }

  }
  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  var lon, lat, x, y, i;
  var al, bl;
  var phi, dphi;
  x = p.x - this.x0;
  y = p.y - this.y0;

  if (this.sphere) {
    if (Math.abs(y + this.a * this.lat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(x / this.a + this.long0);
      lat = 0;
    }
    else {
      al = this.lat0 + y / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var tanphi;
      for (i = MAX_ITER; i; --i) {
        tanphi = Math.tan(phi);
        dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
        phi += dphi;
        if (Math.abs(dphi) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
          lat = phi;
          break;
        }
      }
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(this.long0 + (Math.asin(x * Math.tan(phi) / this.a)) / Math.sin(lat));
    }
  }
  else {
    if (Math.abs(y + this.ml0) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      lat = 0;
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(this.long0 + x / this.a);
    }
    else {

      al = (this.ml0 + y) / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var cl, mln, mlnp, ma;
      var con;
      for (i = MAX_ITER; i; --i) {
        con = this.e * Math.sin(phi);
        cl = Math.sqrt(1 - con * con) * Math.tan(phi);
        mln = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.e0, this.e1, this.e2, this.e3, phi);
        mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
        ma = mln / this.a;
        dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
        phi -= dphi;
        if (Math.abs(dphi) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
          lat = phi;
          break;
        }
      }

      //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);
      cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
    }
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Polyconic", "poly"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/qsc.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/qsc.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
// QSC projection rewritten from the original PROJ4
// https://github.com/OSGeo/proj.4/blob/master/src/PJ_qsc.c



/* constants */
var FACE_ENUM = {
    FRONT: 1,
    RIGHT: 2,
    BACK: 3,
    LEFT: 4,
    TOP: 5,
    BOTTOM: 6
};

var AREA_ENUM = {
    AREA_0: 1,
    AREA_1: 2,
    AREA_2: 3,
    AREA_3: 4
};

function init() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Quadrilateralized Spherical Cube";

  /* Determine the cube face from the center of projection. */
  if (this.lat0 >= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] / 2.0) {
    this.face = FACE_ENUM.TOP;
  } else if (this.lat0 <= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] / 2.0)) {
    this.face = FACE_ENUM.BOTTOM;
  } else if (Math.abs(this.long0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
    this.face = FACE_ENUM.FRONT;
  } else if (Math.abs(this.long0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
    this.face = this.long0 > 0.0 ? FACE_ENUM.RIGHT : FACE_ENUM.LEFT;
  } else {
    this.face = FACE_ENUM.BACK;
  }

  /* Fill in useful values for the ellipsoid <-> sphere shift
   * described in [LK12]. */
  if (this.es !== 0) {
    this.one_minus_f = 1 - (this.a - this.b) / this.a;
    this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
  }
}

// QSC forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {
  var xy = {x: 0, y: 0};
  var lat, lon;
  var theta, phi;
  var t, mu;
  /* nu; */
  var area = {value: 0};

  // move lon according to projection's lon
  p.x -= this.long0;

  /* Convert the geodetic latitude to a geocentric latitude.
   * This corresponds to the shift from the ellipsoid to the sphere
   * described in [LK12]. */
  if (this.es !== 0) {//if (P->es != 0) {
    lat = Math.atan(this.one_minus_f_squared * Math.tan(p.y));
  } else {
    lat = p.y;
  }

  /* Convert the input lat, lon into theta, phi as used by QSC.
   * This depends on the cube face and the area on it.
   * For the top and bottom face, we can compute theta and phi
   * directly from phi, lam. For the other faces, we must use
   * unit sphere cartesian coordinates as an intermediate step. */
  lon = p.x; //lon = lp.lam;
  if (this.face === FACE_ENUM.TOP) {
    phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - lat;
    if (lon >= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_0;
      theta = lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (lon > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] || lon <= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) {
      area.value = AREA_ENUM.AREA_1;
      theta = (lon > 0.0 ? lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (lon > -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) && lon <= -_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_2;
      theta = lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta = lon;
    }
  } else if (this.face === FACE_ENUM.BOTTOM) {
    phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + lat;
    if (lon >= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_0;
      theta = -lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (lon < _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon >= -_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_1;
      theta = -lon;
    } else if (lon < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon >= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) {
      area.value = AREA_ENUM.AREA_2;
      theta = -lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta = (lon > 0.0 ? -lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : -lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    }
  } else {
    var q, r, s;
    var sinlat, coslat;
    var sinlon, coslon;

    if (this.face === FACE_ENUM.RIGHT) {
      lon = qsc_shift_lon_origin(lon, +_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    } else if (this.face === FACE_ENUM.BACK) {
      lon = qsc_shift_lon_origin(lon, +_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (this.face === FACE_ENUM.LEFT) {
      lon = qsc_shift_lon_origin(lon, -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    }
    sinlat = Math.sin(lat);
    coslat = Math.cos(lat);
    sinlon = Math.sin(lon);
    coslon = Math.cos(lon);
    q = coslat * coslon;
    r = coslat * sinlon;
    s = sinlat;

    if (this.face === FACE_ENUM.FRONT) {
      phi = Math.acos(q);
      theta = qsc_fwd_equat_face_theta(phi, s, r, area);
    } else if (this.face === FACE_ENUM.RIGHT) {
      phi = Math.acos(r);
      theta = qsc_fwd_equat_face_theta(phi, s, -q, area);
    } else if (this.face === FACE_ENUM.BACK) {
      phi = Math.acos(-q);
      theta = qsc_fwd_equat_face_theta(phi, s, -r, area);
    } else if (this.face === FACE_ENUM.LEFT) {
      phi = Math.acos(-r);
      theta = qsc_fwd_equat_face_theta(phi, s, q, area);
    } else {
      /* Impossible */
      phi = theta = 0;
      area.value = AREA_ENUM.AREA_0;
    }
  }

  /* Compute mu and nu for the area of definition.
   * For mu, see Eq. (3-21) in [OL76], but note the typos:
   * compare with Eq. (3-14). For nu, see Eq. (3-38). */
  mu = Math.atan((12 / _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) * (theta + Math.acos(Math.sin(theta) * Math.cos(_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]));
  t = Math.sqrt((1 - Math.cos(phi)) / (Math.cos(mu) * Math.cos(mu)) / (1 - Math.cos(Math.atan(1 / Math.cos(theta)))));

  /* Apply the result to the real area. */
  if (area.value === AREA_ENUM.AREA_1) {
    mu += _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (area.value === AREA_ENUM.AREA_2) {
    mu += _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"];
  } else if (area.value === AREA_ENUM.AREA_3) {
    mu += 1.5 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"];
  }

  /* Now compute x, y from mu and nu */
  xy.x = t * Math.cos(mu);
  xy.y = t * Math.sin(mu);
  xy.x = xy.x * this.a + this.x0;
  xy.y = xy.y * this.a + this.y0;

  p.x = xy.x;
  p.y = xy.y;
  return p;
}

// QSC inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {
  var lp = {lam: 0, phi: 0};
  var mu, nu, cosmu, tannu;
  var tantheta, theta, cosphi, phi;
  var t;
  var area = {value: 0};

  /* de-offset */
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  /* Convert the input x, y to the mu and nu angles as used by QSC.
   * This depends on the area of the cube face. */
  nu = Math.atan(Math.sqrt(p.x * p.x + p.y * p.y));
  mu = Math.atan2(p.y, p.x);
  if (p.x >= 0.0 && p.x >= Math.abs(p.y)) {
    area.value = AREA_ENUM.AREA_0;
  } else if (p.y >= 0.0 && p.y >= Math.abs(p.x)) {
    area.value = AREA_ENUM.AREA_1;
    mu -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (p.x < 0.0 && -p.x >= Math.abs(p.y)) {
    area.value = AREA_ENUM.AREA_2;
    mu = (mu < 0.0 ? mu + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : mu - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
  } else {
    area.value = AREA_ENUM.AREA_3;
    mu += _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  }

  /* Compute phi and theta for the area of definition.
   * The inverse projection is not described in the original paper, but some
   * good hints can be found here (as of 2011-12-14):
   * http://fits.gsfc.nasa.gov/fitsbits/saf.93/saf.9302
   * (search for "Message-Id: <9302181759.AA25477 at fits.cv.nrao.edu>") */
  t = (_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] / 12) * Math.tan(mu);
  tantheta = Math.sin(t) / (Math.cos(t) - (1 / Math.sqrt(2)));
  theta = Math.atan(tantheta);
  cosmu = Math.cos(mu);
  tannu = Math.tan(nu);
  cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - Math.cos(Math.atan(1 / Math.cos(theta))));
  if (cosphi < -1) {
    cosphi = -1;
  } else if (cosphi > +1) {
    cosphi = +1;
  }

  /* Apply the result to the real area on the cube face.
   * For the top and bottom face, we can compute phi and lam directly.
   * For the other faces, we must use unit sphere cartesian coordinates
   * as an intermediate step. */
  if (this.face === FACE_ENUM.TOP) {
    phi = Math.acos(cosphi);
    lp.phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - phi;
    if (area.value === AREA_ENUM.AREA_0) {
      lp.lam = theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (area.value === AREA_ENUM.AREA_1) {
      lp.lam = (theta < 0.0 ? theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (area.value === AREA_ENUM.AREA_2) {
      lp.lam = theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else /* area.value == AREA_ENUM.AREA_3 */ {
      lp.lam = theta;
    }
  } else if (this.face === FACE_ENUM.BOTTOM) {
    phi = Math.acos(cosphi);
    lp.phi = phi - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    if (area.value === AREA_ENUM.AREA_0) {
      lp.lam = -theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (area.value === AREA_ENUM.AREA_1) {
      lp.lam = -theta;
    } else if (area.value === AREA_ENUM.AREA_2) {
      lp.lam = -theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else /* area.value == AREA_ENUM.AREA_3 */ {
      lp.lam = (theta < 0.0 ? -theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : -theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    }
  } else {
    /* Compute phi and lam via cartesian unit sphere coordinates. */
    var q, r, s;
    q = cosphi;
    t = q * q;
    if (t >= 1) {
      s = 0;
    } else {
      s = Math.sqrt(1 - t) * Math.sin(theta);
    }
    t += s * s;
    if (t >= 1) {
      r = 0;
    } else {
      r = Math.sqrt(1 - t);
    }
    /* Rotate q,r,s into the correct area. */
    if (area.value === AREA_ENUM.AREA_1) {
      t = r;
      r = -s;
      s = t;
    } else if (area.value === AREA_ENUM.AREA_2) {
      r = -r;
      s = -s;
    } else if (area.value === AREA_ENUM.AREA_3) {
      t = r;
      r = s;
      s = -t;
    }
    /* Rotate q,r,s into the correct cube face. */
    if (this.face === FACE_ENUM.RIGHT) {
      t = q;
      q = -r;
      r = t;
    } else if (this.face === FACE_ENUM.BACK) {
      q = -q;
      r = -r;
    } else if (this.face === FACE_ENUM.LEFT) {
      t = q;
      q = r;
      r = -t;
    }
    /* Now compute phi and lam from the unit sphere coordinates. */
    lp.phi = Math.acos(-s) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    lp.lam = Math.atan2(r, q);
    if (this.face === FACE_ENUM.RIGHT) {
      lp.lam = qsc_shift_lon_origin(lp.lam, -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    } else if (this.face === FACE_ENUM.BACK) {
      lp.lam = qsc_shift_lon_origin(lp.lam, -_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (this.face === FACE_ENUM.LEFT) {
      lp.lam = qsc_shift_lon_origin(lp.lam, +_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    }
  }

  /* Apply the shift from the sphere to the ellipsoid as described
   * in [LK12]. */
  if (this.es !== 0) {
    var invert_sign;
    var tanphi, xa;
    invert_sign = (lp.phi < 0 ? 1 : 0);
    tanphi = Math.tan(lp.phi);
    xa = this.b / Math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
    lp.phi = Math.atan(Math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa));
    if (invert_sign) {
      lp.phi = -lp.phi;
    }
  }

  lp.lam += this.long0;
  p.x = lp.lam;
  p.y = lp.phi;
  return p;
}

/* Helper function for forward projection: compute the theta angle
 * and determine the area number. */
function qsc_fwd_equat_face_theta(phi, y, x, area) {
  var theta;
  if (phi < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    area.value = AREA_ENUM.AREA_0;
    theta = 0.0;
  } else {
    theta = Math.atan2(y, x);
    if (Math.abs(theta) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_0;
    } else if (theta > _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && theta <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_1;
      theta -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (theta > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] || theta <= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) {
      area.value = AREA_ENUM.AREA_2;
      theta = (theta >= 0.0 ? theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta += _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    }
  }
  return theta;
}

/* Helper function: shift the longitude. */
function qsc_shift_lon_origin(lon, offset) {
  var slon = lon + offset;
  if (slon < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) {
    slon += _constants_values__WEBPACK_IMPORTED_MODULE_0__["TWO_PI"];
  } else if (slon > +_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) {
    slon -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["TWO_PI"];
  }
  return slon;
}

var names = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});



/***/ }),

/***/ "../node_modules/proj4/lib/projections/robin.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/robin.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
// Robinson projection
// Based on https://github.com/OSGeo/proj.4/blob/master/src/PJ_robin.c
// Polynomial coeficients from http://article.gmane.org/gmane.comp.gis.proj-4.devel/6039




var COEFS_X = [
    [1.0000, 2.2199e-17, -7.15515e-05, 3.1103e-06],
    [0.9986, -0.000482243, -2.4897e-05, -1.3309e-06],
    [0.9954, -0.00083103, -4.48605e-05, -9.86701e-07],
    [0.9900, -0.00135364, -5.9661e-05, 3.6777e-06],
    [0.9822, -0.00167442, -4.49547e-06, -5.72411e-06],
    [0.9730, -0.00214868, -9.03571e-05, 1.8736e-08],
    [0.9600, -0.00305085, -9.00761e-05, 1.64917e-06],
    [0.9427, -0.00382792, -6.53386e-05, -2.6154e-06],
    [0.9216, -0.00467746, -0.00010457, 4.81243e-06],
    [0.8962, -0.00536223, -3.23831e-05, -5.43432e-06],
    [0.8679, -0.00609363, -0.000113898, 3.32484e-06],
    [0.8350, -0.00698325, -6.40253e-05, 9.34959e-07],
    [0.7986, -0.00755338, -5.00009e-05, 9.35324e-07],
    [0.7597, -0.00798324, -3.5971e-05, -2.27626e-06],
    [0.7186, -0.00851367, -7.01149e-05, -8.6303e-06],
    [0.6732, -0.00986209, -0.000199569, 1.91974e-05],
    [0.6213, -0.010418, 8.83923e-05, 6.24051e-06],
    [0.5722, -0.00906601, 0.000182, 6.24051e-06],
    [0.5322, -0.00677797, 0.000275608, 6.24051e-06]
];

var COEFS_Y = [
    [-5.20417e-18, 0.0124, 1.21431e-18, -8.45284e-11],
    [0.0620, 0.0124, -1.26793e-09, 4.22642e-10],
    [0.1240, 0.0124, 5.07171e-09, -1.60604e-09],
    [0.1860, 0.0123999, -1.90189e-08, 6.00152e-09],
    [0.2480, 0.0124002, 7.10039e-08, -2.24e-08],
    [0.3100, 0.0123992, -2.64997e-07, 8.35986e-08],
    [0.3720, 0.0124029, 9.88983e-07, -3.11994e-07],
    [0.4340, 0.0123893, -3.69093e-06, -4.35621e-07],
    [0.4958, 0.0123198, -1.02252e-05, -3.45523e-07],
    [0.5571, 0.0121916, -1.54081e-05, -5.82288e-07],
    [0.6176, 0.0119938, -2.41424e-05, -5.25327e-07],
    [0.6769, 0.011713, -3.20223e-05, -5.16405e-07],
    [0.7346, 0.0113541, -3.97684e-05, -6.09052e-07],
    [0.7903, 0.0109107, -4.89042e-05, -1.04739e-06],
    [0.8435, 0.0103431, -6.4615e-05, -1.40374e-09],
    [0.8936, 0.00969686, -6.4636e-05, -8.547e-06],
    [0.9394, 0.00840947, -0.000192841, -4.2106e-06],
    [0.9761, 0.00616527, -0.000256, -4.2106e-06],
    [1.0000, 0.00328947, -0.000319159, -4.2106e-06]
];

var FXC = 0.8487;
var FYC = 1.3523;
var C1 = _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"]/5; // rad to 5-degree interval
var RC1 = 1/C1;
var NODES = 18;

var poly3_val = function(coefs, x) {
    return coefs[0] + x * (coefs[1] + x * (coefs[2] + x * coefs[3]));
};

var poly3_der = function(coefs, x) {
    return coefs[1] + x * (2 * coefs[2] + x * 3 * coefs[3]);
};

function newton_rapshon(f_df, start, max_err, iters) {
    var x = start;
    for (; iters; --iters) {
        var upd = f_df(x);
        x -= upd;
        if (Math.abs(upd) < max_err) {
            break;
        }
    }
    return x;
}

function init() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.long0 = this.long0 || 0;
    this.es = 0;
    this.title = this.title || "Robinson";
}

function forward(ll) {
    var lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(ll.x - this.long0);

    var dphi = Math.abs(ll.y);
    var i = Math.floor(dphi * C1);
    if (i < 0) {
        i = 0;
    } else if (i >= NODES) {
        i = NODES - 1;
    }
    dphi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"] * (dphi - RC1 * i);
    var xy = {
        x: poly3_val(COEFS_X[i], dphi) * lon,
        y: poly3_val(COEFS_Y[i], dphi)
    };
    if (ll.y < 0) {
        xy.y = -xy.y;
    }

    xy.x = xy.x * this.a * FXC + this.x0;
    xy.y = xy.y * this.a * FYC + this.y0;
    return xy;
}

function inverse(xy) {
    var ll = {
        x: (xy.x - this.x0) / (this.a * FXC),
        y: Math.abs(xy.y - this.y0) / (this.a * FYC)
    };

    if (ll.y >= 1) { // pathologic case
        ll.x /= COEFS_X[NODES][0];
        ll.y = xy.y < 0 ? -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] : _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else {
        // find table interval
        var i = Math.floor(ll.y * NODES);
        if (i < 0) {
            i = 0;
        } else if (i >= NODES) {
            i = NODES - 1;
        }
        for (;;) {
            if (COEFS_Y[i][0] > ll.y) {
                --i;
            } else if (COEFS_Y[i+1][0] <= ll.y) {
                ++i;
            } else {
                break;
            }
        }
        // linear interpolation in 5 degree interval
        var coefs = COEFS_Y[i];
        var t = 5 * (ll.y - coefs[0]) / (COEFS_Y[i+1][0] - coefs[0]);
        // find t so that poly3_val(coefs, t) = ll.y
        t = newton_rapshon(function(x) {
            return (poly3_val(coefs, x) - ll.y) / poly3_der(coefs, x);
        }, t, _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"], 100);

        ll.x /= poly3_val(COEFS_X[i], t);
        ll.y = (5 * i + t) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
        if (xy.y < 0) {
            ll.y = -ll.y;
        }
    }

    ll.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(ll.x + this.long0);
    return ll;
}

var names = ["Robinson", "robin"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/sinu.js":
/*!*****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/sinu.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lat */ "../node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_pj_enfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/pj_enfn */ "../node_modules/proj4/lib/common/pj_enfn.js");
/* harmony import */ var _common_pj_mlfn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/pj_mlfn */ "../node_modules/proj4/lib/common/pj_mlfn.js");
/* harmony import */ var _common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pj_inv_mlfn */ "../node_modules/proj4/lib/common/pj_inv_mlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/asinz */ "../node_modules/proj4/lib/common/asinz.js");



var MAX_ITER = 20;







function init() {
  /* Place parameters in static storage for common use
    -------------------------------------------------*/


  if (!this.sphere) {
    this.en = Object(_common_pj_enfn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
  }
  else {
    this.n = 1;
    this.m = 0;
    this.es = 0;
    this.C_y = Math.sqrt((this.m + 1) / this.n);
    this.C_x = this.C_y / (this.m + 1);
  }

}

/* Sinusoidal forward equations--mapping lat,long to x,y
  -----------------------------------------------------*/
function forward(p) {
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
    -----------------*/
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);

  if (this.sphere) {
    if (!this.m) {
      lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
    }
    else {
      var k = this.n * Math.sin(lat);
      for (var i = MAX_ITER; i; --i) {
        var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
        lat -= V;
        if (Math.abs(V) < _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
          break;
        }
      }
    }
    x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
    y = this.a * this.C_y * lat;

  }
  else {

    var s = Math.sin(lat);
    var c = Math.cos(lat);
    y = this.a * Object(_common_pj_mlfn__WEBPACK_IMPORTED_MODULE_3__["default"])(lat, s, c, this.en);
    x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
  }

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var lat, temp, lon, s;

  p.x -= this.x0;
  lon = p.x / this.a;
  p.y -= this.y0;
  lat = p.y / this.a;

  if (this.sphere) {
    lat /= this.C_y;
    lon = lon / (this.C_x * (this.m + Math.cos(lat)));
    if (this.m) {
      lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_6__["default"])((this.m * lat + Math.sin(lat)) / this.n);
    }
    else if (this.n !== 1) {
      lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_6__["default"])(Math.sin(lat) / this.n);
    }
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon + this.long0);
    lat = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__["default"])(lat);
  }
  else {
    lat = Object(_common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_4__["default"])(p.y / this.a, this.es, this.en);
    s = Math.abs(lat);
    if (s < _constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"]) {
      s = Math.sin(lat);
      temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
      //temp = this.long0 + p.x / (this.a * Math.cos(lat));
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(temp);
    }
    else if ((s - _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) < _constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"]) {
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Sinusoidal", "sinu"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/somerc.js":
/*!*******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/somerc.js ***!
  \*******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/*
  references:
    Formules et constantes pour le Calcul pour la
    projection cylindrique conforme à axe oblique et pour la transformation entre
    des systèmes de référence.
    http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
  */

function init() {
  var phy0 = this.lat0;
  this.lambda0 = this.long0;
  var sinPhy0 = Math.sin(phy0);
  var semiMajorAxis = this.a;
  var invF = this.rf;
  var flattening = 1 / invF;
  var e2 = 2 * flattening - Math.pow(flattening, 2);
  var e = this.e = Math.sqrt(e2);
  this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
  this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
  this.b0 = Math.asin(sinPhy0 / this.alpha);
  var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
  var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
  var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
  this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
}

function forward(p) {
  var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
  var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
  var S = -this.alpha * (Sa1 + Sa2) + this.K;

  // spheric latitude
  var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);

  // spheric longitude
  var I = this.alpha * (p.x - this.lambda0);

  // psoeudo equatorial rotation
  var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));

  var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));

  p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
  p.x = this.R * rotI + this.x0;
  return p;
}

function inverse(p) {
  var Y = p.x - this.x0;
  var X = p.y - this.y0;

  var rotI = Y / this.R;
  var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);

  var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
  var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));

  var lambda = this.lambda0 + I / this.alpha;

  var S = 0;
  var phy = b;
  var prevPhy = -1000;
  var iteration = 0;
  while (Math.abs(phy - prevPhy) > 0.0000001) {
    if (++iteration > 20) {
      //...reportError("omercFwdInfinity");
      return;
    }
    //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));
    S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
    prevPhy = phy;
    phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
  }

  p.x = lambda;
  p.y = phy;
  return p;
}

var names = ["somerc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/stere.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/stere.js ***!
  \******************************************************/
/*! exports provided: ssfn_, init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssfn_", function() { return ssfn_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/sign */ "../node_modules/proj4/lib/common/sign.js");
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/msfnz */ "../node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/tsfnz */ "../node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/phi2z */ "../node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");








function ssfn_(phit, sinphi, eccen) {
  sinphi *= eccen;
  return (Math.tan(0.5 * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen));
}

function init() {
  this.coslat0 = Math.cos(this.lat0);
  this.sinlat0 = Math.sin(this.lat0);
  if (this.sphere) {
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      this.k0 = 0.5 * (1 + Object(_common_sign__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lat0) * Math.sin(this.lat_ts));
    }
  }
  else {
    if (Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      if (this.lat0 > 0) {
        //North pole
        //trace('stere:north pole');
        this.con = 1;
      }
      else {
        //South pole
        //trace('stere:south pole');
        this.con = -1;
      }
    }
    this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      this.k0 = 0.5 * this.cons * Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
    }
    this.ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, this.sinlat0, this.coslat0);
    this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    this.cosX0 = Math.cos(this.X0);
    this.sinX0 = Math.sin(this.X0);
  }
}

// Stereographic forward equations--mapping lat,long to x,y
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinlat = Math.sin(lat);
  var coslat = Math.cos(lat);
  var A, X, sinX, cosX, ts, rh;
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(lon - this.long0);

  if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"] && Math.abs(lat + this.lat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    //case of the origine point
    //trace('stere:this is the origin point');
    p.x = NaN;
    p.y = NaN;
    return p;
  }
  if (this.sphere) {
    //trace('stere:sphere case');
    A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
    p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
    p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
    return p;
  }
  else {
    X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    cosX = Math.cos(X);
    sinX = Math.sin(X);
    if (Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      ts = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, lat * this.con, this.con * sinlat);
      rh = 2 * this.a * this.k0 * ts / this.cons;
      p.x = this.x0 + rh * Math.sin(lon - this.long0);
      p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
      //trace(p.toString());
      return p;
    }
    else if (Math.abs(this.sinlat0) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      //Eq
      //trace('stere:equateur');
      A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
      p.y = A * sinX;
    }
    else {
      //other case
      //trace('stere:normal case');
      A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
      p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
    }
    p.x = A * cosX * Math.sin(dlon) + this.x0;
  }
  //trace(p.toString());
  return p;
}

//* Stereographic inverse equations--mapping x,y to lat/long
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat, ts, ce, Chi;
  var rh = Math.sqrt(p.x * p.x + p.y * p.y);
  if (this.sphere) {
    var c = 2 * Math.atan(rh / (2 * this.a * this.k0));
    lon = this.long0;
    lat = this.lat0;
    if (rh <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      p.x = lon;
      p.y = lat;
      return p;
    }
    lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
    if (Math.abs(this.coslat0) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      if (this.lat0 > 0) {
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x, - 1 * p.y));
      }
      else {
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x, p.y));
      }
    }
    else {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    if (Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      if (rh <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        lat = this.lat0;
        lon = this.long0;
        p.x = lon;
        p.y = lat;
        //trace(p.toString());
        return p;
      }
      p.x *= this.con;
      p.y *= this.con;
      ts = rh * this.cons / (2 * this.a * this.k0);
      lat = this.con * Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, ts);
      lon = this.con * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.con * this.long0 + Math.atan2(p.x, - 1 * p.y));
    }
    else {
      ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
      lon = this.long0;
      if (rh <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        Chi = this.X0;
      }
      else {
        Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
      }
      lat = -1 * Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, Math.tan(0.5 * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + Chi)));
    }
  }
  p.x = lon;
  p.y = lat;

  //trace(p.toString());
  return p;

}

var names = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  ssfn_: ssfn_
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/sterea.js":
/*!*******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/sterea.js ***!
  \*******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _gauss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauss */ "../node_modules/proj4/lib/projections/gauss.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");



function init() {
  _gauss__WEBPACK_IMPORTED_MODULE_0__["default"].init.apply(this);
  if (!this.rc) {
    return;
  }
  this.sinc0 = Math.sin(this.phic0);
  this.cosc0 = Math.cos(this.phic0);
  this.R2 = 2 * this.rc;
  if (!this.title) {
    this.title = "Oblique Stereographic Alternative";
  }
}

function forward(p) {
  var sinc, cosc, cosl, k;
  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(p.x - this.long0);
  _gauss__WEBPACK_IMPORTED_MODULE_0__["default"].forward.apply(this, [p]);
  sinc = Math.sin(p.y);
  cosc = Math.cos(p.y);
  cosl = Math.cos(p.x);
  k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
  p.x = k * cosc * Math.sin(p.x);
  p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
  p.x = this.a * p.x + this.x0;
  p.y = this.a * p.y + this.y0;
  return p;
}

function inverse(p) {
  var sinc, cosc, lon, lat, rho;
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;
  if ((rho = Math.sqrt(p.x * p.x + p.y * p.y))) {
    var c = 2 * Math.atan2(rho, this.R2);
    sinc = Math.sin(c);
    cosc = Math.cos(c);
    lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
    lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  _gauss__WEBPACK_IMPORTED_MODULE_0__["default"].inverse.apply(this, [p]);
  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(p.x + this.long0);
  return p;
}

var names = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea","Oblique Stereographic Alternative","Double_Stereographic"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/tmerc.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/tmerc.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_pj_enfn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pj_enfn */ "../node_modules/proj4/lib/common/pj_enfn.js");
/* harmony import */ var _common_pj_mlfn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/pj_mlfn */ "../node_modules/proj4/lib/common/pj_mlfn.js");
/* harmony import */ var _common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/pj_inv_mlfn */ "../node_modules/proj4/lib/common/pj_inv_mlfn.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_sign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/sign */ "../node_modules/proj4/lib/common/sign.js");
// Heavily based on this tmerc projection implementation
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/tmerc.js









function init() {
  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

  if (this.es) {
    this.en = Object(_common_pj_enfn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.es);
    this.ml0 = Object(_common_pj_mlfn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
  }
}

/**
    Transverse Mercator Forward  - long/lat to x/y
    long/lat in radians
  */
function forward(p) {
  var lon = p.x;
  var lat = p.y;

  var delta_lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(lon - this.long0);
  var con;
  var x, y;
  var sin_phi = Math.sin(lat);
  var cos_phi = Math.cos(lat);

  if (!this.es) {
    var b = cos_phi * Math.sin(delta_lon);

    if ((Math.abs(Math.abs(b) - 1)) < _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
      return (93);
    }
    else {
      x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
      y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
      b = Math.abs(y);

      if (b >= 1) {
        if ((b - 1) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
          return (93);
        }
        else {
          y = 0;
        }
      }
      else {
        y = Math.acos(y);
      }

      if (lat < 0) {
        y = -y;
      }

      y = this.a * this.k0 * (y - this.lat0) + this.y0;
    }
  }
  else {
    var al = cos_phi * delta_lon;
    var als = Math.pow(al, 2);
    var c = this.ep2 * Math.pow(cos_phi, 2);
    var cs = Math.pow(c, 2);
    var tq = Math.abs(cos_phi) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"] ? Math.tan(lat) : 0;
    var t = Math.pow(tq, 2);
    var ts = Math.pow(t, 2);
    con = 1 - this.es * Math.pow(sin_phi, 2);
    al = al / Math.sqrt(con);
    var ml = Object(_common_pj_mlfn__WEBPACK_IMPORTED_MODULE_1__["default"])(lat, sin_phi, cos_phi, this.en);

    x = this.a * (this.k0 * al * (1 +
      als / 6 * (1 - t + c +
      als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c +
      als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) +
      this.x0;

    y = this.a * (this.k0 * (ml - this.ml0 +
      sin_phi * delta_lon * al / 2 * (1 +
      als / 12 * (5 - t + 9 * c + 4 * cs +
      als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c +
      als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) +
      this.y0;
  }

  p.x = x;
  p.y = y;

  return p;
}

/**
    Transverse Mercator Inverse  -  x/y to long/lat
  */
function inverse(p) {
  var con, phi;
  var lat, lon;
  var x = (p.x - this.x0) * (1 / this.a);
  var y = (p.y - this.y0) * (1 / this.a);

  if (!this.es) {
    var f = Math.exp(x / this.k0);
    var g = 0.5 * (f - 1 / f);
    var temp = this.lat0 + y / this.k0;
    var h = Math.cos(temp);
    con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
    lat = Math.asin(con);

    if (y < 0) {
      lat = -lat;
    }

    if ((g === 0) && (h === 0)) {
      lon = 0;
    }
    else {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(Math.atan2(g, h) + this.long0);
    }
  }
  else { // ellipsoidal form
    con = this.ml0 + y / this.k0;
    phi = Object(_common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(con, this.es, this.en);

    if (Math.abs(phi) < _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"]) {
      var sin_phi = Math.sin(phi);
      var cos_phi = Math.cos(phi);
      var tan_phi = Math.abs(cos_phi) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"] ? Math.tan(phi) : 0;
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var t = Math.pow(tan_phi, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      var d = x * Math.sqrt(con) / this.k0;
      var ds = Math.pow(d, 2);
      con = con * tan_phi;

      lat = phi - (con * ds / (1 - this.es)) * 0.5 * (1 -
        ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs -
        ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c -
        ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));

      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(this.long0 + (d * (1 -
        ds / 6 * (1 + 2 * t + c -
        ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c -
        ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi));
    }
    else {
      lat = _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"] * Object(_common_sign__WEBPACK_IMPORTED_MODULE_5__["default"])(y);
      lon = 0;
    }
  }

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["Transverse_Mercator", "Transverse Mercator", "tmerc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/utm.js":
/*!****************************************************!*\
  !*** ../node_modules/proj4/lib/projections/utm.js ***!
  \****************************************************/
/*! exports provided: dependsOn, init, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dependsOn", function() { return dependsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_zone */ "../node_modules/proj4/lib/common/adjust_zone.js");
/* harmony import */ var _etmerc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etmerc */ "../node_modules/proj4/lib/projections/etmerc.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");


var dependsOn = 'etmerc';



function init() {
  var zone = Object(_common_adjust_zone__WEBPACK_IMPORTED_MODULE_0__["default"])(this.zone, this.long0);
  if (zone === undefined) {
    throw new Error('unknown utm zone');
  }
  this.lat0 = 0;
  this.long0 =  ((6 * Math.abs(zone)) - 183) * _constants_values__WEBPACK_IMPORTED_MODULE_2__["D2R"];
  this.x0 = 500000;
  this.y0 = this.utmSouth ? 10000000 : 0;
  this.k0 = 0.9996;

  _etmerc__WEBPACK_IMPORTED_MODULE_1__["default"].init.apply(this);
  this.forward = _etmerc__WEBPACK_IMPORTED_MODULE_1__["default"].forward;
  this.inverse = _etmerc__WEBPACK_IMPORTED_MODULE_1__["default"].inverse;
}

var names = ["Universal Transverse Mercator System", "utm"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  names: names,
  dependsOn: dependsOn
});


/***/ }),

/***/ "../node_modules/proj4/lib/projections/vandg.js":
/*!******************************************************!*\
  !*** ../node_modules/proj4/lib/projections/vandg.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "../node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/asinz */ "../node_modules/proj4/lib/common/asinz.js");






/* Initialize the Van Der Grinten projection
  ----------------------------------------*/
function init() {
  //this.R = 6370997; //Radius of earth
  this.R = this.a;
}

function forward(p) {

  var lon = p.x;
  var lat = p.y;

  /* Forward equations
    -----------------*/
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var x, y;

  if (Math.abs(lat) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
    x = this.x0 + this.R * dlon;
    y = this.y0;
  }
  var theta = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_2__["default"])(2 * Math.abs(lat / Math.PI));
  if ((Math.abs(dlon) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) || (Math.abs(Math.abs(lat) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"])) {
    x = this.x0;
    if (lat >= 0) {
      y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
    }
    else {
      y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
    }
    //  return(OK);
  }
  var al = 0.5 * Math.abs((Math.PI / dlon) - (dlon / Math.PI));
  var asq = al * al;
  var sinth = Math.sin(theta);
  var costh = Math.cos(theta);

  var g = costh / (sinth + costh - 1);
  var gsq = g * g;
  var m = g * (2 / sinth - 1);
  var msq = m * m;
  var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
  if (dlon < 0) {
    con = -con;
  }
  x = this.x0 + con;
  //con = Math.abs(con / (Math.PI * this.R));
  var q = asq + g;
  con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
  if (lat >= 0) {
    //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 + con;
  }
  else {
    //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 - con;
  }
  p.x = x;
  p.y = y;
  return p;
}

/* Van Der Grinten inverse equations--mapping x,y to lat/long
  ---------------------------------------------------------*/
function inverse(p) {
  var lon, lat;
  var xx, yy, xys, c1, c2, c3;
  var a1;
  var m1;
  var con;
  var th1;
  var d;

  /* inverse equations
    -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  con = Math.PI * this.R;
  xx = p.x / con;
  yy = p.y / con;
  xys = xx * xx + yy * yy;
  c1 = -Math.abs(yy) * (1 + xys);
  c2 = c1 - 2 * yy * yy + xx * xx;
  c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
  d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
  a1 = (c1 - c2 * c2 / 3 / c3) / c3;
  m1 = 2 * Math.sqrt(-a1 / 3);
  con = ((3 * d) / a1) / m1;
  if (Math.abs(con) > 1) {
    if (con >= 0) {
      con = 1;
    }
    else {
      con = -1;
    }
  }
  th1 = Math.acos(con) / 3;
  if (p.y >= 0) {
    lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }
  else {
    lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }

  if (Math.abs(xx) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
    lon = this.long0;
  }
  else {
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "../node_modules/proj4/lib/transform.js":
/*!**********************************************!*\
  !*** ../node_modules/proj4/lib/transform.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transform; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "../node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _datum_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datum_transform */ "../node_modules/proj4/lib/datum_transform.js");
/* harmony import */ var _adjust_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust_axis */ "../node_modules/proj4/lib/adjust_axis.js");
/* harmony import */ var _Proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Proj */ "../node_modules/proj4/lib/Proj.js");
/* harmony import */ var _common_toPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/toPoint */ "../node_modules/proj4/lib/common/toPoint.js");
/* harmony import */ var _checkSanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkSanity */ "../node_modules/proj4/lib/checkSanity.js");







function checkNotWGS(source, dest) {
  return ((source.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"] || source.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) && dest.datumCode !== 'WGS84') || ((dest.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"] || dest.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) && source.datumCode !== 'WGS84');
}

function transform(source, dest, point) {
  var wgs84;
  if (Array.isArray(point)) {
    point = Object(_common_toPoint__WEBPACK_IMPORTED_MODULE_4__["default"])(point);
  }
  Object(_checkSanity__WEBPACK_IMPORTED_MODULE_5__["default"])(point);
  // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84
  if (source.datum && dest.datum && checkNotWGS(source, dest)) {
    wgs84 = new _Proj__WEBPACK_IMPORTED_MODULE_3__["default"]('WGS84');
    point = transform(source, wgs84, point);
    source = wgs84;
  }
  // DGR, 2010/11/12
  if (source.axis !== 'enu') {
    point = Object(_adjust_axis__WEBPACK_IMPORTED_MODULE_2__["default"])(source, false, point);
  }
  // Transform source points to long/lat, if they aren't already.
  if (source.projName === 'longlat') {
    point = {
      x: point.x * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"],
      y: point.y * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"],
      z: point.z || 0
    };
  } else {
    if (source.to_meter) {
      point = {
        x: point.x * source.to_meter,
        y: point.y * source.to_meter,
        z: point.z || 0
      };
    }
    point = source.inverse(point); // Convert Cartesian to longlat
    if (!point) {
      return;
    }
  }
  // Adjust for the prime meridian if necessary
  if (source.from_greenwich) {
    point.x += source.from_greenwich;
  }

  // Convert datums if needed, and if possible.
  point = Object(_datum_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(source.datum, dest.datum, point);

  // Adjust for the prime meridian if necessary
  if (dest.from_greenwich) {
    point = {
      x: point.x - dest.from_greenwich,
      y: point.y,
      z: point.z || 0
    };
  }

  if (dest.projName === 'longlat') {
    // convert radians to decimal degrees
    point = {
      x: point.x * _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"],
      y: point.y * _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"],
      z: point.z || 0
    };
  } else { // else project
    point = dest.forward(point);
    if (dest.to_meter) {
      point = {
        x: point.x / dest.to_meter,
        y: point.y / dest.to_meter,
        z: point.z || 0
      };
    }
  }

  // DGR, 2010/11/12
  if (dest.axis !== 'enu') {
    return Object(_adjust_axis__WEBPACK_IMPORTED_MODULE_2__["default"])(dest, true, point);
  }

  return point;
}


/***/ }),

/***/ "../node_modules/proj4/projs.js":
/*!**************************************!*\
  !*** ../node_modules/proj4/projs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_projections_tmerc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/projections/tmerc */ "../node_modules/proj4/lib/projections/tmerc.js");
/* harmony import */ var _lib_projections_etmerc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/projections/etmerc */ "../node_modules/proj4/lib/projections/etmerc.js");
/* harmony import */ var _lib_projections_utm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/projections/utm */ "../node_modules/proj4/lib/projections/utm.js");
/* harmony import */ var _lib_projections_sterea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/projections/sterea */ "../node_modules/proj4/lib/projections/sterea.js");
/* harmony import */ var _lib_projections_stere__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/projections/stere */ "../node_modules/proj4/lib/projections/stere.js");
/* harmony import */ var _lib_projections_somerc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/projections/somerc */ "../node_modules/proj4/lib/projections/somerc.js");
/* harmony import */ var _lib_projections_omerc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/projections/omerc */ "../node_modules/proj4/lib/projections/omerc.js");
/* harmony import */ var _lib_projections_lcc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/projections/lcc */ "../node_modules/proj4/lib/projections/lcc.js");
/* harmony import */ var _lib_projections_krovak__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/projections/krovak */ "../node_modules/proj4/lib/projections/krovak.js");
/* harmony import */ var _lib_projections_cass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/projections/cass */ "../node_modules/proj4/lib/projections/cass.js");
/* harmony import */ var _lib_projections_laea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/projections/laea */ "../node_modules/proj4/lib/projections/laea.js");
/* harmony import */ var _lib_projections_aea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/projections/aea */ "../node_modules/proj4/lib/projections/aea.js");
/* harmony import */ var _lib_projections_gnom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/projections/gnom */ "../node_modules/proj4/lib/projections/gnom.js");
/* harmony import */ var _lib_projections_cea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/projections/cea */ "../node_modules/proj4/lib/projections/cea.js");
/* harmony import */ var _lib_projections_eqc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/projections/eqc */ "../node_modules/proj4/lib/projections/eqc.js");
/* harmony import */ var _lib_projections_poly__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/projections/poly */ "../node_modules/proj4/lib/projections/poly.js");
/* harmony import */ var _lib_projections_nzmg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/projections/nzmg */ "../node_modules/proj4/lib/projections/nzmg.js");
/* harmony import */ var _lib_projections_mill__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/projections/mill */ "../node_modules/proj4/lib/projections/mill.js");
/* harmony import */ var _lib_projections_sinu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/projections/sinu */ "../node_modules/proj4/lib/projections/sinu.js");
/* harmony import */ var _lib_projections_moll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/projections/moll */ "../node_modules/proj4/lib/projections/moll.js");
/* harmony import */ var _lib_projections_eqdc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/projections/eqdc */ "../node_modules/proj4/lib/projections/eqdc.js");
/* harmony import */ var _lib_projections_vandg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/projections/vandg */ "../node_modules/proj4/lib/projections/vandg.js");
/* harmony import */ var _lib_projections_aeqd__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/projections/aeqd */ "../node_modules/proj4/lib/projections/aeqd.js");
/* harmony import */ var _lib_projections_ortho__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/projections/ortho */ "../node_modules/proj4/lib/projections/ortho.js");
/* harmony import */ var _lib_projections_qsc__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/projections/qsc */ "../node_modules/proj4/lib/projections/qsc.js");
/* harmony import */ var _lib_projections_robin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/projections/robin */ "../node_modules/proj4/lib/projections/robin.js");
/* harmony import */ var _lib_projections_geocent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/projections/geocent */ "../node_modules/proj4/lib/projections/geocent.js");



























/* harmony default export */ __webpack_exports__["default"] = (function(proj4){
  proj4.Proj.projections.add(_lib_projections_tmerc__WEBPACK_IMPORTED_MODULE_0__["default"]);
  proj4.Proj.projections.add(_lib_projections_etmerc__WEBPACK_IMPORTED_MODULE_1__["default"]);
  proj4.Proj.projections.add(_lib_projections_utm__WEBPACK_IMPORTED_MODULE_2__["default"]);
  proj4.Proj.projections.add(_lib_projections_sterea__WEBPACK_IMPORTED_MODULE_3__["default"]);
  proj4.Proj.projections.add(_lib_projections_stere__WEBPACK_IMPORTED_MODULE_4__["default"]);
  proj4.Proj.projections.add(_lib_projections_somerc__WEBPACK_IMPORTED_MODULE_5__["default"]);
  proj4.Proj.projections.add(_lib_projections_omerc__WEBPACK_IMPORTED_MODULE_6__["default"]);
  proj4.Proj.projections.add(_lib_projections_lcc__WEBPACK_IMPORTED_MODULE_7__["default"]);
  proj4.Proj.projections.add(_lib_projections_krovak__WEBPACK_IMPORTED_MODULE_8__["default"]);
  proj4.Proj.projections.add(_lib_projections_cass__WEBPACK_IMPORTED_MODULE_9__["default"]);
  proj4.Proj.projections.add(_lib_projections_laea__WEBPACK_IMPORTED_MODULE_10__["default"]);
  proj4.Proj.projections.add(_lib_projections_aea__WEBPACK_IMPORTED_MODULE_11__["default"]);
  proj4.Proj.projections.add(_lib_projections_gnom__WEBPACK_IMPORTED_MODULE_12__["default"]);
  proj4.Proj.projections.add(_lib_projections_cea__WEBPACK_IMPORTED_MODULE_13__["default"]);
  proj4.Proj.projections.add(_lib_projections_eqc__WEBPACK_IMPORTED_MODULE_14__["default"]);
  proj4.Proj.projections.add(_lib_projections_poly__WEBPACK_IMPORTED_MODULE_15__["default"]);
  proj4.Proj.projections.add(_lib_projections_nzmg__WEBPACK_IMPORTED_MODULE_16__["default"]);
  proj4.Proj.projections.add(_lib_projections_mill__WEBPACK_IMPORTED_MODULE_17__["default"]);
  proj4.Proj.projections.add(_lib_projections_sinu__WEBPACK_IMPORTED_MODULE_18__["default"]);
  proj4.Proj.projections.add(_lib_projections_moll__WEBPACK_IMPORTED_MODULE_19__["default"]);
  proj4.Proj.projections.add(_lib_projections_eqdc__WEBPACK_IMPORTED_MODULE_20__["default"]);
  proj4.Proj.projections.add(_lib_projections_vandg__WEBPACK_IMPORTED_MODULE_21__["default"]);
  proj4.Proj.projections.add(_lib_projections_aeqd__WEBPACK_IMPORTED_MODULE_22__["default"]);
  proj4.Proj.projections.add(_lib_projections_ortho__WEBPACK_IMPORTED_MODULE_23__["default"]);
  proj4.Proj.projections.add(_lib_projections_qsc__WEBPACK_IMPORTED_MODULE_24__["default"]);
  proj4.Proj.projections.add(_lib_projections_robin__WEBPACK_IMPORTED_MODULE_25__["default"]);
  proj4.Proj.projections.add(_lib_projections_geocent__WEBPACK_IMPORTED_MODULE_26__["default"]);
});

/***/ }),

/***/ "../node_modules/proj4leaflet/src/proj4leaflet.js":
/*!********************************************************!*\
  !*** ../node_modules/proj4leaflet/src/proj4leaflet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
	var L, proj4;
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! leaflet */ "leaflet"), __webpack_require__(/*! proj4 */ "../node_modules/proj4/lib/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function (L, proj4) {
	if (proj4.__esModule && proj4.default) {
		// If proj4 was bundled as an ES6 module, unwrap it to get
		// to the actual main proj4 object.
		// See discussion in https://github.com/kartena/Proj4Leaflet/pull/147
		proj4 = proj4.default;
	}
 
	L.Proj = {};

	L.Proj._isProj4Obj = function(a) {
		return (typeof a.inverse !== 'undefined' &&
			typeof a.forward !== 'undefined');
	};

	L.Proj.Projection = L.Class.extend({
		initialize: function(code, def, bounds) {
			var isP4 = L.Proj._isProj4Obj(code);
			this._proj = isP4 ? code : this._projFromCodeDef(code, def);
			this.bounds = isP4 ? def : bounds;
		},

		project: function (latlng) {
			var point = this._proj.forward([latlng.lng, latlng.lat]);
			return new L.Point(point[0], point[1]);
		},

		unproject: function (point, unbounded) {
			var point2 = this._proj.inverse([point.x, point.y]);
			return new L.LatLng(point2[1], point2[0], unbounded);
		},

		_projFromCodeDef: function(code, def) {
			if (def) {
				proj4.defs(code, def);
			} else if (proj4.defs[code] === undefined) {
				var urn = code.split(':');
				if (urn.length > 3) {
					code = urn[urn.length - 3] + ':' + urn[urn.length - 1];
				}
				if (proj4.defs[code] === undefined) {
					throw 'No projection definition for code ' + code;
				}
			}

			return proj4(code);
		}
	});

	L.Proj.CRS = L.Class.extend({
		includes: L.CRS,

		options: {
			transformation: new L.Transformation(1, 0, -1, 0)
		},

		initialize: function(a, b, c) {
			var code,
			    proj,
			    def,
			    options;

			if (L.Proj._isProj4Obj(a)) {
				proj = a;
				code = proj.srsCode;
				options = b || {};

				this.projection = new L.Proj.Projection(proj, options.bounds);
			} else {
				code = a;
				def = b;
				options = c || {};
				this.projection = new L.Proj.Projection(code, def, options.bounds);
			}

			L.Util.setOptions(this, options);
			this.code = code;
			this.transformation = this.options.transformation;

			if (this.options.origin) {
				this.transformation =
					new L.Transformation(1, -this.options.origin[0],
						-1, this.options.origin[1]);
			}

			if (this.options.scales) {
				this._scales = this.options.scales;
			} else if (this.options.resolutions) {
				this._scales = [];
				for (var i = this.options.resolutions.length - 1; i >= 0; i--) {
					if (this.options.resolutions[i]) {
						this._scales[i] = 1 / this.options.resolutions[i];
					}
				}
			}

			this.infinite = !this.options.bounds;

		},

		scale: function(zoom) {
			var iZoom = Math.floor(zoom),
				baseScale,
				nextScale,
				scaleDiff,
				zDiff;
			if (zoom === iZoom) {
				return this._scales[zoom];
			} else {
				// Non-integer zoom, interpolate
				baseScale = this._scales[iZoom];
				nextScale = this._scales[iZoom + 1];
				scaleDiff = nextScale - baseScale;
				zDiff = (zoom - iZoom);
				return baseScale + scaleDiff * zDiff;
			}
		},

		zoom: function(scale) {
			// Find closest number in this._scales, down
			var downScale = this._closestElement(this._scales, scale),
				downZoom = this._scales.indexOf(downScale),
				nextScale,
				nextZoom,
				scaleDiff;
			// Check if scale is downScale => return array index
			if (scale === downScale) {
				return downZoom;
			}
			if (downScale === undefined) {
				return -Infinity;
			}
			// Interpolate
			nextZoom = downZoom + 1;
			nextScale = this._scales[nextZoom];
			if (nextScale === undefined) {
				return Infinity;
			}
			scaleDiff = nextScale - downScale;
			return (scale - downScale) / scaleDiff + downZoom;
		},

		distance: L.CRS.Earth.distance,

		R: L.CRS.Earth.R,

		/* Get the closest lowest element in an array */
		_closestElement: function(array, element) {
			var low;
			for (var i = array.length; i--;) {
				if (array[i] <= element && (low === undefined || low < array[i])) {
					low = array[i];
				}
			}
			return low;
		}
	});

	L.Proj.GeoJSON = L.GeoJSON.extend({
		initialize: function(geojson, options) {
			this._callLevel = 0;
			L.GeoJSON.prototype.initialize.call(this, geojson, options);
		},

		addData: function(geojson) {
			var crs;

			if (geojson) {
				if (geojson.crs && geojson.crs.type === 'name') {
					crs = new L.Proj.CRS(geojson.crs.properties.name);
				} else if (geojson.crs && geojson.crs.type) {
					crs = new L.Proj.CRS(geojson.crs.type + ':' + geojson.crs.properties.code);
				}

				if (crs !== undefined) {
					this.options.coordsToLatLng = function(coords) {
						var point = L.point(coords[0], coords[1]);
						return crs.projection.unproject(point);
					};
				}
			}

			// Base class' addData might call us recursively, but
			// CRS shouldn't be cleared in that case, since CRS applies
			// to the whole GeoJSON, inluding sub-features.
			this._callLevel++;
			try {
				L.GeoJSON.prototype.addData.call(this, geojson);
			} finally {
				this._callLevel--;
				if (this._callLevel === 0) {
					delete this.options.coordsToLatLng;
				}
			}
		}
	});

	L.Proj.geoJson = function(geojson, options) {
		return new L.Proj.GeoJSON(geojson, options);
	};

	L.Proj.ImageOverlay = L.ImageOverlay.extend({
		initialize: function (url, bounds, options) {
			L.ImageOverlay.prototype.initialize.call(this, url, null, options);
			this._projectedBounds = bounds;
		},

		// Danger ahead: Overriding internal methods in Leaflet.
		// Decided to do this rather than making a copy of L.ImageOverlay
		// and doing very tiny modifications to it.
		// Future will tell if this was wise or not.
		_animateZoom: function (event) {
			var scale = this._map.getZoomScale(event.zoom);
			var northWest = L.point(this._projectedBounds.min.x, this._projectedBounds.max.y);
			var offset = this._projectedToNewLayerPoint(northWest, event.zoom, event.center);

			L.DomUtil.setTransform(this._image, offset, scale);
		},

		_reset: function () {
			var zoom = this._map.getZoom();
			var pixelOrigin = this._map.getPixelOrigin();
			var bounds = L.bounds(
				this._transform(this._projectedBounds.min, zoom)._subtract(pixelOrigin),
				this._transform(this._projectedBounds.max, zoom)._subtract(pixelOrigin)
			);
			var size = bounds.getSize();

			L.DomUtil.setPosition(this._image, bounds.min);
			this._image.style.width = size.x + 'px';
			this._image.style.height = size.y + 'px';
		},

		_projectedToNewLayerPoint: function (point, zoom, center) {
			var viewHalf = this._map.getSize()._divideBy(2);
			var newTopLeft = this._map.project(center, zoom)._subtract(viewHalf)._round();
			var topLeft = newTopLeft.add(this._map._getMapPanePos());

			return this._transform(point, zoom)._subtract(topLeft);
		},

		_transform: function (point, zoom) {
			var crs = this._map.options.crs;
			var transformation = crs.transformation;
			var scale = crs.scale(zoom);

			return transformation.transform(point, scale);
		}
	});

	L.Proj.imageOverlay = function (url, bounds, options) {
		return new L.Proj.ImageOverlay(url, bounds, options);
	};

	return L.Proj;
}));


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

/***/ "../node_modules/react-leaflet/es/AttributionControl.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-leaflet/es/AttributionControl.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "../node_modules/react-leaflet/es/MapControl.js");







var AttributionControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AttributionControl, _MapControl);

  function AttributionControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = AttributionControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Attribution(props);
  };

  return AttributionControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(AttributionControl));

/***/ }),

/***/ "../node_modules/react-leaflet/es/Circle.js":
/*!**************************************************!*\
  !*** ../node_modules/react-leaflet/es/Circle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");








var Circle = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Circle, _Path);

  function Circle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var center = props.center,
        radius = props.radius,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["center", "radius"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["Circle"](center, radius, this.getOptions(options));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return Circle;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(Circle));

/***/ }),

/***/ "../node_modules/react-leaflet/es/CircleMarker.js":
/*!********************************************************!*\
  !*** ../node_modules/react-leaflet/es/CircleMarker.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");








var CircleMarker = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CircleMarker, _Path);

  function CircleMarker() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = CircleMarker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["CircleMarker"](props.center, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet), {}, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return CircleMarker;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(CircleMarker));

/***/ }),

/***/ "../node_modules/react-leaflet/es/DivOverlay.js":
/*!******************************************************!*\
  !*** ../node_modules/react-leaflet/es/DivOverlay.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DivOverlay; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapComponent */ "../node_modules/react-leaflet/es/MapComponent.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/updateClassName */ "../node_modules/react-leaflet/es/utils/updateClassName.js");









var DivOverlay = /*#__PURE__*/function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DivOverlay, _MapComponent);

  function DivOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onClose", function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onOpen", function () {
      _this.forceUpdate(); // Re-render now that leafletElement is created


      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = DivOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_prevProps, _props) {};

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(this.leafletElement._container, prevProps.className, this.props.className);
    this.updateLeafletElement(prevProps, this.props);

    if (this.leafletElement.isOpen()) {
      this.leafletElement.update();
      this.onRender();
    }
  };

  _proto.onRender = function onRender() {};

  _proto.render = function render() {
    if (this.leafletElement._contentNode) {
      return Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(this.props.children, this.leafletElement._contentNode);
    }

    return null;
  };

  return DivOverlay;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/FeatureGroup.js":
/*!********************************************************!*\
  !*** ../node_modules/react-leaflet/es/FeatureGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");








var FeatureGroup = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatureGroup, _Path);

  function FeatureGroup() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = FeatureGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"](this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet), {}, {
      layerContainer: el,
      popupContainer: el
    });
    return el;
  };

  _proto.componentDidMount = function componentDidMount() {
    _Path.prototype.componentDidMount.call(this);

    this.setStyle(this.props);
  };

  return FeatureGroup;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(FeatureGroup));

/***/ }),

/***/ "../node_modules/react-leaflet/es/GeoJSON.js":
/*!***************************************************!*\
  !*** ../node_modules/react-leaflet/es/GeoJSON.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");







var GeoJSON = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GeoJSON, _Path);

  function GeoJSON() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = GeoJSON.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["GeoJSON"](props.data, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (typeof toProps.style === 'function') {
      this.leafletElement.setStyle(toProps.style);
    } else {
      this.setStyleIfChanged(fromProps, toProps);
    }
  };

  return GeoJSON;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(GeoJSON));

/***/ }),

/***/ "../node_modules/react-leaflet/es/GridLayer.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-leaflet/es/GridLayer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "../node_modules/react-leaflet/es/MapLayer.js");







var GridLayer = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GridLayer, _MapLayer);

  function GridLayer() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = GridLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["GridLayer"](this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    var opacity = toProps.opacity,
        zIndex = toProps.zIndex;

    if (opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(opacity);
    }

    if (zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(zIndex);
    }
  };

  _proto.getOptions = function getOptions(props) {
    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _MapLayer.prototype.getOptions.call(this, props));

    var map = props.leaflet.map;

    if (map != null) {
      // $FlowFixMe: Object spread
      if (options.maxZoom == null && map.options.maxZoom != null) {
        // $FlowFixMe: Object spread
        options.maxZoom = map.options.maxZoom;
      } // $FlowFixMe: Object spread


      if (options.minZoom == null && map.options.minZoom != null) {
        // $FlowFixMe: Object spread
        options.minZoom = map.options.minZoom;
      }
    }

    return options;
  };

  _proto.render = function render() {
    return null;
  };

  return GridLayer;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/ImageOverlay.js":
/*!********************************************************!*\
  !*** ../node_modules/react-leaflet/es/ImageOverlay.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapLayer */ "../node_modules/react-leaflet/es/MapLayer.js");








var ImageOverlay = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageOverlay, _MapLayer);

  function ImageOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = ImageOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["ImageOverlay"](props.url, props.bounds, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet), {}, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLngBounds"])(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  return ImageOverlay;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(ImageOverlay));

/***/ }),

/***/ "../node_modules/react-leaflet/es/LayerGroup.js":
/*!******************************************************!*\
  !*** ../node_modules/react-leaflet/es/LayerGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapLayer */ "../node_modules/react-leaflet/es/MapLayer.js");








var LayerGroup = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(LayerGroup, _MapLayer);

  function LayerGroup() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = LayerGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LayerGroup"]([], this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet), {}, {
      layerContainer: el
    });
    return el;
  };

  return LayerGroup;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(LayerGroup));

/***/ }),

/***/ "../node_modules/react-leaflet/es/LayersControl.js":
/*!*********************************************************!*\
  !*** ../node_modules/react-leaflet/es/LayersControl.js ***!
  \*********************************************************/
/*! exports provided: ControlledLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlledLayer", function() { return ControlledLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MapControl */ "../node_modules/react-leaflet/es/MapControl.js");











// Abtract class for layer container, extended by BaseLayer and Overlay
var ControlledLayer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlledLayer, _Component);

  function ControlledLayer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "layer", void 0);

    return _this;
  }

  var _proto = ControlledLayer.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(_ref) {
    var checked = _ref.checked;

    if (this.props.leaflet.map == null) {
      return;
    } // Handle dynamically (un)checking the layer => adding/removing from the map


    if (this.props.checked === true && (checked == null || checked === false)) {
      this.props.leaflet.map.addLayer(this.layer);
    } else if (checked === true && (this.props.checked == null || this.props.checked === false)) {
      this.props.leaflet.map.removeLayer(this.layer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.removeLayerControl(this.layer);
  };

  _proto.addLayer = function addLayer() {
    throw new Error('Must be implemented in extending class');
  };

  _proto.removeLayer = function removeLayer(layer) {
    this.props.removeLayer(layer);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["LeafletProvider"], {
      value: this.contextValue
    }, children) : null;
  };

  return ControlledLayer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var BaseLayer = /*#__PURE__*/function (_ControlledLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(BaseLayer, _ControlledLayer);

  function BaseLayer(props) {
    var _this2;

    _this2 = _ControlledLayer.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "addLayer", function (layer) {
      _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this2$props = _this2.props,
          addBaseLayer = _this2$props.addBaseLayer,
          checked = _this2$props.checked,
          name = _this2$props.name;
      addBaseLayer(layer, name, checked);
    });

    _this2.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet), {}, {
      layerContainer: {
        addLayer: _this2.addLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2)),
        removeLayer: _this2.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2))
      }
    });
    return _this2;
  }

  return BaseLayer;
}(ControlledLayer);

var Overlay = /*#__PURE__*/function (_ControlledLayer2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Overlay, _ControlledLayer2);

  function Overlay(props) {
    var _this3;

    _this3 = _ControlledLayer2.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3), "addLayer", function (layer) {
      _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this3$props = _this3.props,
          addOverlay = _this3$props.addOverlay,
          checked = _this3$props.checked,
          name = _this3$props.name;
      addOverlay(layer, name, checked);
    });

    _this3.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet), {}, {
      layerContainer: {
        addLayer: _this3.addLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3)),
        removeLayer: _this3.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3))
      }
    });
    return _this3;
  }

  return Overlay;
}(ControlledLayer);

var LayersControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(LayersControl, _MapControl);

  function LayersControl(props) {
    var _this4;

    _this4 = _MapControl.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4), "controlProps", void 0);

    _this4.controlProps = {
      addBaseLayer: _this4.addBaseLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      addOverlay: _this4.addOverlay.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      leaflet: props.leaflet,
      removeLayer: _this4.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      removeLayerControl: _this4.removeLayerControl.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4))
    };
    return _this4;
  }

  var _proto2 = LayersControl.prototype;

  _proto2.createLeafletElement = function createLeafletElement(props) {
    var _children = props.children,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_5__["Control"].Layers(undefined, undefined, options);
  };

  _proto2.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _MapControl.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.collapsed !== fromProps.collapsed) {
      if (toProps.collapsed === true) {
        this.leafletElement.collapse();
      } else {
        this.leafletElement.expand();
      }
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    var _this5 = this;

    setTimeout(function () {
      _MapControl.prototype.componentWillUnmount.call(_this5);
    }, 0);
  };

  _proto2.addBaseLayer = function addBaseLayer(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addBaseLayer(layer, name);
  };

  _proto2.addOverlay = function addOverlay(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addOverlay(layer, name);
  };

  _proto2.removeLayer = function removeLayer(layer) {
    if (this.props.leaflet.map != null) {
      this.props.leaflet.map.removeLayer(layer);
    }
  };

  _proto2.removeLayerControl = function removeLayerControl(layer) {
    this.leafletElement.removeLayer(layer);
  };

  _proto2.render = function render() {
    var _this6 = this;

    var children = react__WEBPACK_IMPORTED_MODULE_6__["Children"].map(this.props.children, function (child) {
      return child ? Object(react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"])(child, _this6.controlProps) : null;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, children);
  };

  return LayersControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_8__["default"]);

var LayersControlExport = Object(_context__WEBPACK_IMPORTED_MODULE_7__["withLeaflet"])(LayersControl);
LayersControlExport.BaseLayer = BaseLayer;
LayersControlExport.Overlay = Overlay;
/* harmony default export */ __webpack_exports__["default"] = (LayersControlExport);

/***/ }),

/***/ "../node_modules/react-leaflet/es/Map.js":
/*!***********************************************!*\
  !*** ../node_modules/react-leaflet/es/Map.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MapEvented */ "../node_modules/react-leaflet/es/MapEvented.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/updateClassName */ "../node_modules/react-leaflet/es/utils/updateClassName.js");
/* harmony import */ var _utils_omit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/omit */ "../node_modules/react-leaflet/es/utils/omit.js");













var OTHER_PROPS = ['children', 'className', 'id', 'style', 'useFlyTo', 'whenReady'];

var normalizeCenter = function normalizeCenter(pos) {
  return Array.isArray(pos) ? [pos[0], pos[1]] : [pos.lat, pos.lon ? pos.lon : pos.lng];
};

var Map = /*#__PURE__*/function (_MapEvented) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Map, _MapEvented);

  function Map(props) {
    var _this;

    _this = _MapEvented.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "className", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "container", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "viewport", {
      center: undefined,
      zoom: undefined
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_ready", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_updating", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onViewportChange", function () {
      var center = _this.leafletElement.getCenter();

      _this.viewport = {
        center: center ? [center.lat, center.lng] : undefined,
        zoom: _this.leafletElement.getZoom()
      };

      if (_this.props.onViewportChange && !_this._updating) {
        _this.props.onViewportChange(_this.viewport);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onViewportChanged", function () {
      if (_this.props.onViewportChanged && !_this._updating) {
        _this.props.onViewportChanged(_this.viewport);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "bindContainer", function (container) {
      _this.container = container;
    });

    _this.className = props.className;
    return _this;
  }

  var _proto = Map.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var viewport = props.viewport,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["viewport"]);

    if (viewport) {
      if (viewport.center) {
        options.center = viewport.center;
      }

      if (typeof viewport.zoom === 'number') {
        options.zoom = viewport.zoom;
      }
    }

    return new leaflet__WEBPACK_IMPORTED_MODULE_5__["Map"](this.container, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    this._updating = true;
    var bounds = toProps.bounds,
        boundsOptions = toProps.boundsOptions,
        boxZoom = toProps.boxZoom,
        center = toProps.center,
        className = toProps.className,
        doubleClickZoom = toProps.doubleClickZoom,
        dragging = toProps.dragging,
        keyboard = toProps.keyboard,
        maxBounds = toProps.maxBounds,
        scrollWheelZoom = toProps.scrollWheelZoom,
        tap = toProps.tap,
        touchZoom = toProps.touchZoom,
        useFlyTo = toProps.useFlyTo,
        viewport = toProps.viewport,
        zoom = toProps.zoom;
    Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(this.container, fromProps.className, className);

    if (viewport && viewport !== fromProps.viewport) {
      var c = viewport.center ? viewport.center : center;
      var z = viewport.zoom == null ? zoom : viewport.zoom;

      if (useFlyTo === true) {
        this.leafletElement.flyTo(c, z, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(c, z, this.getZoomPanOptions(toProps));
      }
    } else if (center && this.shouldUpdateCenter(center, fromProps.center)) {
      if (useFlyTo === true) {
        this.leafletElement.flyTo(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      }
    } else if (typeof zoom === 'number' && zoom !== fromProps.zoom) {
      if (fromProps.zoom == null) {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setZoom(zoom, this.getZoomPanOptions(toProps));
      }
    }

    if (maxBounds && this.shouldUpdateBounds(maxBounds, fromProps.maxBounds)) {
      this.leafletElement.setMaxBounds(maxBounds);
    }

    if (bounds && (this.shouldUpdateBounds(bounds, fromProps.bounds) || boundsOptions !== fromProps.boundsOptions)) {
      if (useFlyTo === true) {
        this.leafletElement.flyToBounds(bounds, this.getFitBoundsOptions(toProps));
      } else {
        this.leafletElement.fitBounds(bounds, this.getFitBoundsOptions(toProps));
      }
    }

    if (boxZoom !== fromProps.boxZoom) {
      if (boxZoom === true) {
        this.leafletElement.boxZoom.enable();
      } else {
        this.leafletElement.boxZoom.disable();
      }
    }

    if (doubleClickZoom !== fromProps.doubleClickZoom) {
      if (doubleClickZoom === true || typeof doubleClickZoom === 'string') {
        this.leafletElement.options.doubleClickZoom = doubleClickZoom;
        this.leafletElement.doubleClickZoom.enable();
      } else {
        this.leafletElement.doubleClickZoom.disable();
      }
    }

    if (dragging !== fromProps.dragging) {
      if (dragging === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }

    if (keyboard !== fromProps.keyboard) {
      if (keyboard === true) {
        this.leafletElement.keyboard.enable();
      } else {
        this.leafletElement.keyboard.disable();
      }
    }

    if (scrollWheelZoom !== fromProps.scrollWheelZoom) {
      if (scrollWheelZoom === true || typeof scrollWheelZoom === 'string') {
        this.leafletElement.options.scrollWheelZoom = scrollWheelZoom;
        this.leafletElement.scrollWheelZoom.enable();
      } else {
        this.leafletElement.scrollWheelZoom.disable();
      }
    }

    if (tap !== fromProps.tap) {
      if (tap === true) {
        this.leafletElement.tap.enable();
      } else {
        this.leafletElement.tap.disable();
      }
    }

    if (touchZoom !== fromProps.touchZoom) {
      if (touchZoom === true || typeof touchZoom === 'string') {
        this.leafletElement.options.touchZoom = touchZoom;
        this.leafletElement.touchZoom.enable();
      } else {
        this.leafletElement.touchZoom.disable();
      }
    }

    this._updating = false;
  };

  _proto.getZoomPanOptions = function getZoomPanOptions(props) {
    var animate = props.animate,
        duration = props.duration,
        easeLinearity = props.easeLinearity,
        noMoveStart = props.noMoveStart;
    return {
      animate: animate,
      duration: duration,
      easeLinearity: easeLinearity,
      noMoveStart: noMoveStart
    };
  };

  _proto.getFitBoundsOptions = function getFitBoundsOptions(props) {
    var zoomPanOptions = this.getZoomPanOptions(props);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, zoomPanOptions), props.boundsOptions);
  };

  _proto.componentDidMount = function componentDidMount() {
    var props = _utils_omit__WEBPACK_IMPORTED_MODULE_10__["default"].apply(void 0, [this.props].concat(OTHER_PROPS));
    this.leafletElement = this.createLeafletElement(props);
    this.leafletElement.on('move', this.onViewportChange);
    this.leafletElement.on('moveend', this.onViewportChanged);

    if (props.bounds != null) {
      this.leafletElement.fitBounds(props.bounds, this.getFitBoundsOptions(props));
    }

    this.contextValue = {
      layerContainer: this.leafletElement,
      map: this.leafletElement
    };

    _MapEvented.prototype.componentDidMount.call(this);

    this.forceUpdate(); // Re-render now that leafletElement is created
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._ready === false) {
      this._ready = true;

      if (this.props.whenReady) {
        this.leafletElement.whenReady(this.props.whenReady);
      }
    }

    _MapEvented.prototype.componentDidUpdate.call(this, prevProps);

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapEvented.prototype.componentWillUnmount.call(this);

    this.leafletElement.off('move', this.onViewportChange);
    this.leafletElement.off('moveend', this.onViewportChanged); // The canvas renderer uses requestAnimationFrame, making a deferred call to a deleted object
    // When preferCanvas is set, use simpler teardown logic

    if (this.props.preferCanvas === true) {
      this.leafletElement._initEvents(true);

      this.leafletElement._stop();
    } else {
      this.leafletElement.remove();
    }
  };

  _proto.shouldUpdateCenter = function shouldUpdateCenter(next, prev) {
    if (!prev) return true;
    next = normalizeCenter(next);
    prev = normalizeCenter(prev);
    return next[0] !== prev[0] || next[1] !== prev[1];
  };

  _proto.shouldUpdateBounds = function shouldUpdateBounds(next, prev) {
    return prev ? !Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLngBounds"])(next).equals(Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLngBounds"])(prev)) : true;
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: this.className,
      id: this.props.id,
      ref: this.bindContainer,
      style: this.props.style
    }, this.contextValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["LeafletProvider"], {
      value: this.contextValue
    }, this.props.children) : null);
  };

  return Map;
}(_MapEvented__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/MapComponent.js":
/*!********************************************************!*\
  !*** ../node_modules/react-leaflet/es/MapComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapComponent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapEvented */ "../node_modules/react-leaflet/es/MapEvented.js");






var MapComponent = /*#__PURE__*/function (_MapEvented) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapComponent, _MapEvented);

  function MapComponent() {
    return _MapEvented.apply(this, arguments) || this;
  }

  var _proto = MapComponent.prototype;

  _proto.getOptions = function getOptions(props) {
    if (props.pane != null) {
      return props;
    }

    if (props.leaflet != null && props.leaflet.pane != null) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
        pane: props.leaflet.pane
      });
    }

    return props;
  };

  return MapComponent;
}(_MapEvented__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/MapControl.js":
/*!******************************************************!*\
  !*** ../node_modules/react-leaflet/es/MapControl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapControl; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);








var MapControl = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapControl, _Component);

  function MapControl(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(_this.props);
    return _this;
  }

  var _proto = MapControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setPosition(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.leafletElement.addTo(this.props.leaflet.map);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.leafletElement.remove();
  };

  _proto.render = function render() {
    return null;
  };

  return MapControl;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/MapEvented.js":
/*!******************************************************!*\
  !*** ../node_modules/react-leaflet/es/MapEvented.js ***!
  \******************************************************/
/*! exports provided: EVENTS_RE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_RE", function() { return EVENTS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapEvented; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);







var EVENTS_RE = /^on(.+)$/i;

var MapEvented = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapEvented, _Component);

  function MapEvented(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "_leafletEvents", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this._leafletEvents = _this.extractLeafletEvents(props);
    return _this;
  }

  var _proto = MapEvented.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.bindLeafletEvents(this._leafletEvents);
  };

  _proto.componentDidUpdate = function componentDidUpdate(_prevProps) {
    this._leafletEvents = this.bindLeafletEvents(this.extractLeafletEvents(this.props), this._leafletEvents);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    var el = this.leafletElement;
    if (!el) return;
    Object.keys(this._leafletEvents).forEach(function (ev) {
      el.off(ev, _this2._leafletEvents[ev]);
    });
  };

  _proto.extractLeafletEvents = function extractLeafletEvents(props) {
    return Object.keys(props).reduce(function (res, prop) {
      if (EVENTS_RE.test(prop)) {
        if (props[prop] != null) {
          var _key = prop.replace(EVENTS_RE, function (match, p) {
            return p.toLowerCase();
          });

          res[_key] = props[prop];
        }
      }

      return res;
    }, {});
  };

  _proto.bindLeafletEvents = function bindLeafletEvents(next, prev) {
    if (next === void 0) {
      next = {};
    }

    if (prev === void 0) {
      prev = {};
    }

    var el = this.leafletElement;
    if (el == null || el.on == null) return {};

    var diff = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev);

    Object.keys(prev).forEach(function (ev) {
      if (next[ev] == null || prev[ev] !== next[ev]) {
        delete diff[ev];
        el.off(ev, prev[ev]);
      }
    });
    Object.keys(next).forEach(function (ev) {
      if (prev[ev] == null || next[ev] !== prev[ev]) {
        diff[ev] = next[ev];
        el.on(ev, next[ev]);
      }
    });
    return diff;
  };

  _proto.fireLeafletEvent = function fireLeafletEvent(type, data) {
    var el = this.leafletElement;
    if (el) el.fire(type, data);
  };

  return MapEvented;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/MapLayer.js":
/*!****************************************************!*\
  !*** ../node_modules/react-leaflet/es/MapLayer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapComponent */ "../node_modules/react-leaflet/es/MapComponent.js");










var MapLayer = /*#__PURE__*/function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapLayer, _MapComponent);

  function MapLayer(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = MapLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_fromProps, _toProps) {};

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null) {
      return null;
    }

    return this.contextValue == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__["LeafletProvider"], {
      value: this.contextValue
    }, children);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MapLayer, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return MapLayer;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/Marker.js":
/*!**************************************************!*\
  !*** ../node_modules/react-leaflet/es/Marker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapLayer */ "../node_modules/react-leaflet/es/MapLayer.js");









var Marker = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Marker, _MapLayer);

  function Marker() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"](props.position, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet), {}, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }

    if (toProps.icon !== fromProps.icon) {
      this.leafletElement.setIcon(toProps.icon);
    }

    if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
      this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.draggable !== fromProps.draggable) {
      if (toProps.draggable === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children == null || this.contextValue == null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["LeafletProvider"], {
      value: this.contextValue
    }, children);
  };

  return Marker;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(Marker));

/***/ }),

/***/ "../node_modules/react-leaflet/es/Pane.js":
/*!************************************************!*\
  !*** ../node_modules/react-leaflet/es/Pane.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "../node_modules/react-leaflet/node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/updateClassName */ "../node_modules/react-leaflet/es/utils/updateClassName.js");
/* harmony import */ var _utils_omit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/omit */ "../node_modules/react-leaflet/es/utils/omit.js");






// flowlint sketchy-null-string:off





var idCounter = 0;

var uniqueId = function uniqueId() {
  return ++idCounter;
};

var LEAFLET_PANES = ['tile', 'shadow', 'overlay', 'map', 'marker', 'tooltip', 'popup'];
var PANE_RE = /-*pane/gi;

var isLeafletPane = function isLeafletPane(name) {
  return LEAFLET_PANES.indexOf(name.replace(PANE_RE, '')) !== -1;
};

var paneStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var Pane = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Pane, _Component);

  function Pane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "state", {
      name: undefined,
      context: undefined
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "setStyle", function (_temp) {
      var _ref = _temp === void 0 ? _this.props : _temp,
          style = _ref.style,
          className = _ref.className;

      var pane = _this.getPane(_this.state.name);

      if (pane) {
        if (className) {
          Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__["addClassName"])(pane, className);
        }

        if (style) {
          // Without the cast, Flow throws this error:
          //   Cannot assign style[key] to pane.style[key] because string
          //   is incompatible with number.
          Object.keys(style).forEach(function (key) {
            pane.style[key] = style[key];
          });
        }
      }
    });

    return _this;
  }

  var _proto = Pane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.createPane(this.props);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.state.name) {
      // Do nothing if this.state.name is undefined due to errors or
      // an invalid props.name value
      return;
    } // If the 'name' prop has changed the current pane is unmounted and a new
    // pane is created.


    if (this.props.name !== prevProps.name) {
      this.removePane();
      this.createPane(this.props);
    } else {
      // Remove the previous css class name from the pane if it has changed.
      // setStyle() will take care of adding in the updated className
      if (prevProps.className && this.props.className !== prevProps.className) {
        var pane = this.getPane(this.state.name);

        if (pane != null && prevProps.className != null) {
          Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__["removeClassName"])(pane, prevProps.className);
        }
      } // Update the pane's DOM node style and class


      this.setStyle(this.props);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removePane();
  };

  _proto.createPane = function createPane(props) {
    var map = props.leaflet.map;
    var name = props.name || "pane-" + uniqueId();

    if (map != null && map.createPane != null) {
      var isDefault = isLeafletPane(name);
      var existing = isDefault || this.getPane(name);

      if (existing == null) {
        map.createPane(name, this.getParentPane());
      } else {
        var message = isDefault ? "You must use a unique name for a pane that is not a default leaflet pane (" + name + ")" : "A pane with this name already exists. (" + name + ")";
         true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(false, message) : undefined;
      }

      this.setState({
        name: name,
        context: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet), {}, {
          pane: name
        })
      }, this.setStyle);
    }
  };

  _proto.removePane = function removePane() {
    // Remove the created pane
    var name = this.state.name;

    if (name != null) {
      var pane = this.getPane(name);
      if (pane != null && pane.remove) pane.remove();
      var map = this.props.leaflet.map;

      if (map != null && map._panes != null) {
        map._panes = Object(_utils_omit__WEBPACK_IMPORTED_MODULE_8__["default"])(map._panes, name);
        map._paneRenderers = Object(_utils_omit__WEBPACK_IMPORTED_MODULE_8__["default"])(map._paneRenderers, name);
      }
    }
  };

  _proto.getParentPane = function getParentPane() {
    return this.getPane(this.props.pane || this.props.leaflet.pane);
  };

  _proto.getPane = function getPane(name) {
    if (name != null && this.props.leaflet.map != null) {
      return this.props.leaflet.map.getPane(name);
    }
  };

  _proto.render = function render() {
    var context = this.state.context;
    return context ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_6__["LeafletProvider"], {
      value: context
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: paneStyles
    }, this.props.children)) : null;
  };

  return Pane;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_6__["withLeaflet"])(Pane));

/***/ }),

/***/ "../node_modules/react-leaflet/es/Path.js":
/*!************************************************!*\
  !*** ../node_modules/react-leaflet/es/Path.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "../node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "../node_modules/react-leaflet/es/MapLayer.js");
/* harmony import */ var _utils_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/pick */ "../node_modules/react-leaflet/es/utils/pick.js");







var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'lineCap', 'lineJoin', 'dashArray', 'dashOffset', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'bubblingMouseEvents', 'renderer', 'className', // Interactive Layer
'interactive', // Layer
'pane', 'attribution'];

var Path = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Path, _MapLayer);

  function Path(props) {
    var _this;

    _this = _MapLayer.call(this, props) || this;

    if (_this.contextValue == null) {
      _this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet), {}, {
        popupContainer: _this.leafletElement
      });
    }

    return _this;
  }

  var _proto = Path.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapLayer.prototype.componentDidUpdate.call(this, prevProps);

    this.setStyleIfChanged(prevProps, this.props);
  };

  _proto.getPathOptions = function getPathOptions(props) {
    return Object(_utils_pick__WEBPACK_IMPORTED_MODULE_4__["default"])(props, OPTIONS);
  };

  _proto.setStyle = function setStyle(options) {
    if (options === void 0) {
      options = {};
    }

    this.leafletElement.setStyle(options);
  };

  _proto.setStyleIfChanged = function setStyleIfChanged(fromProps, toProps) {
    var nextStyle = this.getPathOptions(toProps);

    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(nextStyle, this.getPathOptions(fromProps))) {
      this.setStyle(nextStyle);
    }
  };

  return Path;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "../node_modules/react-leaflet/es/Polygon.js":
/*!***************************************************!*\
  !*** ../node_modules/react-leaflet/es/Polygon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");







var Polygon = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Polygon, _Path);

  function Polygon() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Polygon"](props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polygon;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Polygon));

/***/ }),

/***/ "../node_modules/react-leaflet/es/Polyline.js":
/*!****************************************************!*\
  !*** ../node_modules/react-leaflet/es/Polyline.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");







var Polyline = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Polyline, _Path);

  function Polyline() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Polyline"](props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polyline;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Polyline));

/***/ }),

/***/ "../node_modules/react-leaflet/es/Popup.js":
/*!*************************************************!*\
  !*** ../node_modules/react-leaflet/es/Popup.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DivOverlay */ "../node_modules/react-leaflet/es/DivOverlay.js");










var Popup = /*#__PURE__*/function (_DivOverlay) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Popup, _DivOverlay);

  function Popup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onPopupOpen", function (_ref) {
      var popup = _ref.popup;

      if (popup === _this.leafletElement) {
        _this.onOpen();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onPopupClose", function (_ref2) {
      var popup = _ref2.popup;

      if (popup === _this.leafletElement) {
        _this.onClose();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onRender", function () {
      if (_this.props.autoPan !== false && _this.leafletElement.isOpen()) {
        if (_this.leafletElement._map && _this.leafletElement._map._panAnim) {
          _this.leafletElement._map._panAnim = undefined;
        }

        _this.leafletElement._adjustPan();
      }
    });

    return _this;
  }

  var _proto = Popup.prototype;

  _proto.getOptions = function getOptions(props) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _DivOverlay.prototype.getOptions.call(this, props)), {}, {
      autoPan: false
    });
  };

  _proto.createLeafletElement = function createLeafletElement(props) {
    var options = this.getOptions(props);
    options.autoPan = props.autoPan !== false;
    return new leaflet__WEBPACK_IMPORTED_MODULE_4__["Popup"](options, props.leaflet.popupContainer);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    var position = this.props.position;
    var _this$props$leaflet = this.props.leaflet,
        map = _this$props$leaflet.map,
        popupContainer = _this$props$leaflet.popupContainer;
    var el = this.leafletElement;

    if (map != null) {
      map.on({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
    }

    if (popupContainer) {
      // Attach to container component
      popupContainer.bindPopup(el);
    } else {
      // Attach to a Map
      if (position) {
        el.setLatLng(position);
      }

      el.openOn(map);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var map = this.props.leaflet.map;

    if (map != null) {
      map.off({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
      map.removeLayer(this.leafletElement);
    }

    _DivOverlay.prototype.componentWillUnmount.call(this);
  };

  return Popup;
}(_DivOverlay__WEBPACK_IMPORTED_MODULE_6__["default"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Popup, "defaultProps", {
  pane: 'popupPane'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_5__["withLeaflet"])(Popup));

/***/ }),

/***/ "../node_modules/react-leaflet/es/Rectangle.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-leaflet/es/Rectangle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");







var Rectangle = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rectangle, _Path);

  function Rectangle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Rectangle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Rectangle;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Rectangle));

/***/ }),

/***/ "../node_modules/react-leaflet/es/SVGOverlay.js":
/*!******************************************************!*\
  !*** ../node_modules/react-leaflet/es/SVGOverlay.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MapComponent */ "../node_modules/react-leaflet/es/MapComponent.js");











function setAttribute(el, name, value) {
  if (value != null) {
    el.setAttribute(name, value);
  } else {
    el.removeAttribute(name);
  }
}

var SVGOverlay = /*#__PURE__*/function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(SVGOverlay, _MapComponent);

  function SVGOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "container", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = SVGOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setAttribute(container, 'xmlns', 'http://www.w3.org/2000/svg');
    setAttribute(container, 'preserveAspectRatio', props.preserveAspectRatio);
    setAttribute(container, 'viewBox', props.viewBox);
    this.container = container;
    return new leaflet__WEBPACK_IMPORTED_MODULE_4__["SVGOverlay"](container, props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (this.container && toProps.preserveAspectRatio !== fromProps.preserveAspectRatio) {
      setAttribute(this.container, 'preserveAspectRatio', toProps.preserveAspectRatio);
    }

    if (this.container && toProps.viewBox !== fromProps.viewBox) {
      setAttribute(this.container, 'viewBox', toProps.viewBox);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
    this.container = null;
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null || this.container == null) {
      return null;
    }

    return Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["createPortal"])(children, this.container);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(SVGOverlay, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return SVGOverlay;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_6__["withLeaflet"])(SVGOverlay));

/***/ }),

/***/ "../node_modules/react-leaflet/es/ScaleControl.js":
/*!********************************************************!*\
  !*** ../node_modules/react-leaflet/es/ScaleControl.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "../node_modules/react-leaflet/es/MapControl.js");







var ScaleControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ScaleControl, _MapControl);

  function ScaleControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ScaleControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Scale(props);
  };

  return ScaleControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(ScaleControl));

/***/ }),

/***/ "../node_modules/react-leaflet/es/TileLayer.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-leaflet/es/TileLayer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridLayer */ "../node_modules/react-leaflet/es/GridLayer.js");







var TileLayer = /*#__PURE__*/function (_GridLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TileLayer, _GridLayer);

  function TileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = TileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"](props.url, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }
  };

  return TileLayer;
}(_GridLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(TileLayer));

/***/ }),

/***/ "../node_modules/react-leaflet/es/Tooltip.js":
/*!***************************************************!*\
  !*** ../node_modules/react-leaflet/es/Tooltip.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DivOverlay */ "../node_modules/react-leaflet/es/DivOverlay.js");









var Tooltip = /*#__PURE__*/function (_DivOverlay) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Tooltip, _DivOverlay);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onTooltipOpen", function (_ref) {
      var tooltip = _ref.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onOpen();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onTooltipClose", function (_ref2) {
      var tooltip = _ref2.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onClose();
      }
    });

    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_3__["Tooltip"](this.getOptions(props), props.leaflet.popupContainer);
  };

  _proto.componentDidMount = function componentDidMount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.on({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });
    popupContainer.bindTooltip(this.leafletElement);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.off({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });

    if (popupContainer._map != null) {
      popupContainer.unbindTooltip(this.leafletElement);
    }
  };

  return Tooltip;
}(_DivOverlay__WEBPACK_IMPORTED_MODULE_5__["default"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Tooltip, "defaultProps", {
  pane: 'tooltipPane'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(Tooltip));

/***/ }),

/***/ "../node_modules/react-leaflet/es/VideoOverlay.js":
/*!********************************************************!*\
  !*** ../node_modules/react-leaflet/es/VideoOverlay.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "../node_modules/react-leaflet/es/MapLayer.js");







var VideoOverlay = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(VideoOverlay, _MapLayer);

  function VideoOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = VideoOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["VideoOverlay"](props.url, props.bounds, this.getOptions(props));
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapLayer.prototype.componentDidMount.call(this);

    if (this.props.play === true) {
      this.leafletElement.getElement().play();
    }
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLngBounds"])(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    } // flowlint-next-line sketchy-null-bool:off


    if (toProps.play === true && !fromProps.play) {
      this.leafletElement.getElement().play(); // flowlint-next-line sketchy-null-bool:off
    } else if (!toProps.play && fromProps.play === true) {
      this.leafletElement.getElement().pause();
    }
  };

  return VideoOverlay;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(VideoOverlay));

/***/ }),

/***/ "../node_modules/react-leaflet/es/WMSTileLayer.js":
/*!********************************************************!*\
  !*** ../node_modules/react-leaflet/es/WMSTileLayer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-deep-equal */ "../node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridLayer */ "../node_modules/react-leaflet/es/GridLayer.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapEvented */ "../node_modules/react-leaflet/es/MapEvented.js");










var WMSTileLayer = /*#__PURE__*/function (_GridLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WMSTileLayer, _GridLayer);

  function WMSTileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = WMSTileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var url = props.url,
        params = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["url"]);

    var _this$getOptions = this.getOptions(params),
        _l = _this$getOptions.leaflet,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions, ["leaflet"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"].WMS(url, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    var prevUrl = fromProps.url,
        _po = fromProps.opacity,
        _pz = fromProps.zIndex,
        prevProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(fromProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions2 = this.getOptions(prevProps),
        _pl = _this$getOptions2.leaflet,
        prevParams = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions2, ["leaflet"]);

    var url = toProps.url,
        _o = toProps.opacity,
        _z = toProps.zIndex,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(toProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions3 = this.getOptions(props),
        _l = _this$getOptions3.leaflet,
        params = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions3, ["leaflet"]);

    if (url !== prevUrl) {
      this.leafletElement.setUrl(url);
    }

    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(params, prevParams)) {
      this.leafletElement.setParams(params);
    }
  };

  _proto.getOptions = function getOptions(params) {
    var superOptions = _GridLayer.prototype.getOptions.call(this, params);

    return Object.keys(superOptions).reduce(function (options, key) {
      if (!_MapEvented__WEBPACK_IMPORTED_MODULE_6__["EVENTS_RE"].test(key)) {
        options[key] = superOptions[key];
      }

      return options;
    }, {});
  };

  return WMSTileLayer;
}(_GridLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(WMSTileLayer));

/***/ }),

/***/ "../node_modules/react-leaflet/es/ZoomControl.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-leaflet/es/ZoomControl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "../node_modules/react-leaflet/es/MapControl.js");







var ZoomControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ZoomControl, _MapControl);

  function ZoomControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ZoomControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Zoom(props);
  };

  return ZoomControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(ZoomControl));

/***/ }),

/***/ "../node_modules/react-leaflet/es/context.js":
/*!***************************************************!*\
  !*** ../node_modules/react-leaflet/es/context.js ***!
  \***************************************************/
/*! exports provided: useLeaflet, LeafletConsumer, LeafletProvider, withLeaflet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLeaflet", function() { return useLeaflet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletConsumer", function() { return LeafletConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletProvider", function() { return LeafletProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLeaflet", function() { return withLeaflet; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





var leafletContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
var useLeaflet = function useLeaflet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(leafletContext);
};
var LeafletConsumer = leafletContext.Consumer;
var LeafletProvider = leafletContext.Provider;
var withLeaflet = function withLeaflet(WrappedComponent) {
  var WithLeafletComponent = function WithLeafletComponent(props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LeafletConsumer, null, function (leaflet) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        leaflet: leaflet,
        ref: ref
      }));
    });
  };

  var name = // flowlint-next-line sketchy-null-string:off
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLeafletComponent.displayName = "Leaflet(" + name + ")";
  var LeafletComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(WithLeafletComponent);
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(LeafletComponent, WrappedComponent);
  return LeafletComponent;
};

/***/ }),

/***/ "../node_modules/react-leaflet/es/index.js":
/*!*************************************************!*\
  !*** ../node_modules/react-leaflet/es/index.js ***!
  \*************************************************/
/*! exports provided: LeafletConsumer, LeafletProvider, withLeaflet, useLeaflet, AttributionControl, Circle, CircleMarker, DivOverlay, FeatureGroup, GeoJSON, GridLayer, ImageOverlay, LayerGroup, LayersControl, ControlledLayer, Map, MapComponent, MapControl, MapEvented, MapLayer, Marker, Pane, Path, Polygon, Polyline, Popup, Rectangle, ScaleControl, SVGOverlay, TileLayer, Tooltip, VideoOverlay, WMSTileLayer, ZoomControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "../node_modules/react-leaflet/es/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletConsumer", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["LeafletConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletProvider", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["LeafletProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLeaflet", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["withLeaflet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLeaflet", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["useLeaflet"]; });

/* harmony import */ var _AttributionControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttributionControl */ "../node_modules/react-leaflet/es/AttributionControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributionControl", function() { return _AttributionControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "../node_modules/react-leaflet/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CircleMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CircleMarker */ "../node_modules/react-leaflet/es/CircleMarker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleMarker", function() { return _CircleMarker__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DivOverlay */ "../node_modules/react-leaflet/es/DivOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivOverlay", function() { return _DivOverlay__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FeatureGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeatureGroup */ "../node_modules/react-leaflet/es/FeatureGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureGroup", function() { return _FeatureGroup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _GeoJSON__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GeoJSON */ "../node_modules/react-leaflet/es/GeoJSON.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoJSON", function() { return _GeoJSON__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GridLayer */ "../node_modules/react-leaflet/es/GridLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayer", function() { return _GridLayer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ImageOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageOverlay */ "../node_modules/react-leaflet/es/ImageOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageOverlay", function() { return _ImageOverlay__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _LayerGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerGroup */ "../node_modules/react-leaflet/es/LayerGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerGroup", function() { return _LayerGroup__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _LayersControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayersControl */ "../node_modules/react-leaflet/es/LayersControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayersControl", function() { return _LayersControl__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlledLayer", function() { return _LayersControl__WEBPACK_IMPORTED_MODULE_10__["ControlledLayer"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Map */ "../node_modules/react-leaflet/es/Map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MapComponent */ "../node_modules/react-leaflet/es/MapComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return _MapComponent__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MapControl */ "../node_modules/react-leaflet/es/MapControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapControl", function() { return _MapControl__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MapEvented */ "../node_modules/react-leaflet/es/MapEvented.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapEvented", function() { return _MapEvented__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MapLayer */ "../node_modules/react-leaflet/es/MapLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapLayer", function() { return _MapLayer__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Marker */ "../node_modules/react-leaflet/es/Marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _Marker__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pane */ "../node_modules/react-leaflet/es/Pane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pane", function() { return _Pane__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Path */ "../node_modules/react-leaflet/es/Path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _Path__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Polygon */ "../node_modules/react-leaflet/es/Polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _Polygon__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Polyline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Polyline */ "../node_modules/react-leaflet/es/Polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _Polyline__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Popup */ "../node_modules/react-leaflet/es/Popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Rectangle */ "../node_modules/react-leaflet/es/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ScaleControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ScaleControl */ "../node_modules/react-leaflet/es/ScaleControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleControl", function() { return _ScaleControl__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _SVGOverlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SVGOverlay */ "../node_modules/react-leaflet/es/SVGOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGOverlay", function() { return _SVGOverlay__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _TileLayer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TileLayer */ "../node_modules/react-leaflet/es/TileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayer", function() { return _TileLayer__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Tooltip */ "../node_modules/react-leaflet/es/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _VideoOverlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./VideoOverlay */ "../node_modules/react-leaflet/es/VideoOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOverlay", function() { return _VideoOverlay__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _WMSTileLayer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./WMSTileLayer */ "../node_modules/react-leaflet/es/WMSTileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WMSTileLayer", function() { return _WMSTileLayer__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _ZoomControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ZoomControl */ "../node_modules/react-leaflet/es/ZoomControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomControl", function() { return _ZoomControl__WEBPACK_IMPORTED_MODULE_29__["default"]; });


































/***/ }),

/***/ "../node_modules/react-leaflet/es/utils/omit.js":
/*!******************************************************!*\
  !*** ../node_modules/react-leaflet/es/utils/omit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return omit; });


function omit(obj) {
  for (var _len = arguments.length, keysToOmit = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keysToOmit[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "../node_modules/react-leaflet/es/utils/pick.js":
/*!******************************************************!*\
  !*** ../node_modules/react-leaflet/es/utils/pick.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pick; });


function pick(object, keys) {
  return keys.reduce(function (obj, key) {
    if (typeof object[key] !== 'undefined') {
      obj[key] = object[key];
    }

    return obj;
  }, {});
}

/***/ }),

/***/ "../node_modules/react-leaflet/es/utils/updateClassName.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-leaflet/es/utils/updateClassName.js ***!
  \*****************************************************************/
/*! exports provided: addClassName, removeClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassName", function() { return addClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassName", function() { return removeClassName; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "leaflet");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);




var splitClassName = function splitClassName(className) {
  if (className === void 0) {
    className = '';
  }

  return className.split(' ').filter(Boolean);
};

var addClassName = function addClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].addClass(container, cls);
  });
};
var removeClassName = function removeClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].removeClass(container, cls);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function (container, prevClassName, nextClassName) {
  if (container != null && nextClassName !== prevClassName) {
    if (prevClassName != null && prevClassName.length > 0) {
      removeClassName(container, prevClassName);
    }

    if (nextClassName != null && nextClassName.length > 0) {
      addClassName(container, nextClassName);
    }
  }
});

/***/ }),

/***/ "../node_modules/react-leaflet/node_modules/warning/warning.js":
/*!*********************************************************************!*\
  !*** ../node_modules/react-leaflet/node_modules/warning/warning.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "../node_modules/wkt-parser/index.js":
/*!*******************************************!*\
  !*** ../node_modules/wkt-parser/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "../node_modules/wkt-parser/parser.js");
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process */ "../node_modules/wkt-parser/process.js");
var D2R = 0.01745329251994329577;





function rename(obj, params) {
  var outName = params[0];
  var inName = params[1];
  if (!(outName in obj) && (inName in obj)) {
    obj[outName] = obj[inName];
    if (params.length === 3) {
      obj[outName] = params[2](obj[outName]);
    }
  }
}

function d2r(input) {
  return input * D2R;
}

function cleanWKT(wkt) {
  if (wkt.type === 'GEOGCS') {
    wkt.projName = 'longlat';
  } else if (wkt.type === 'LOCAL_CS') {
    wkt.projName = 'identity';
    wkt.local = true;
  } else {
    if (typeof wkt.PROJECTION === 'object') {
      wkt.projName = Object.keys(wkt.PROJECTION)[0];
    } else {
      wkt.projName = wkt.PROJECTION;
    }
  }
  if (wkt.AXIS) {
    var axisOrder = '';
    for (var i = 0, ii = wkt.AXIS.length; i < ii; ++i) {
      var axis = wkt.AXIS[i];
      var descriptor = axis[0].toLowerCase();
      if (descriptor.indexOf('north') !== -1) {
        axisOrder += 'n';
      } else if (descriptor.indexOf('south') !== -1) {
        axisOrder += 's';
      } else if (descriptor.indexOf('east') !== -1) {
        axisOrder += 'e';
      } else if (descriptor.indexOf('west') !== -1) {
        axisOrder += 'w';
      }
    }
    if (axisOrder.length === 2) {
      axisOrder += 'u';
    }
    if (axisOrder.length === 3) {
      wkt.axis = axisOrder;
    }
  }
  if (wkt.UNIT) {
    wkt.units = wkt.UNIT.name.toLowerCase();
    if (wkt.units === 'metre') {
      wkt.units = 'meter';
    }
    if (wkt.UNIT.convert) {
      if (wkt.type === 'GEOGCS') {
        if (wkt.DATUM && wkt.DATUM.SPHEROID) {
          wkt.to_meter = wkt.UNIT.convert*wkt.DATUM.SPHEROID.a;
        }
      } else {
        wkt.to_meter = wkt.UNIT.convert;
      }
    }
  }
  var geogcs = wkt.GEOGCS;
  if (wkt.type === 'GEOGCS') {
    geogcs = wkt;
  }
  if (geogcs) {
    //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
    //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
    //}
    if (geogcs.DATUM) {
      wkt.datumCode = geogcs.DATUM.name.toLowerCase();
    } else {
      wkt.datumCode = geogcs.name.toLowerCase();
    }
    if (wkt.datumCode.slice(0, 2) === 'd_') {
      wkt.datumCode = wkt.datumCode.slice(2);
    }
    if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
      wkt.datumCode = 'nzgd49';
    }
    if (wkt.datumCode === 'wgs_1984' || wkt.datumCode === 'world_geodetic_system_1984') {
      if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
        wkt.sphere = true;
      }
      wkt.datumCode = 'wgs84';
    }
    if (wkt.datumCode.slice(-6) === '_ferro') {
      wkt.datumCode = wkt.datumCode.slice(0, - 6);
    }
    if (wkt.datumCode.slice(-8) === '_jakarta') {
      wkt.datumCode = wkt.datumCode.slice(0, - 8);
    }
    if (~wkt.datumCode.indexOf('belge')) {
      wkt.datumCode = 'rnb72';
    }
    if (geogcs.DATUM && geogcs.DATUM.SPHEROID) {
      wkt.ellps = geogcs.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');
      if (wkt.ellps.toLowerCase().slice(0, 13) === 'international') {
        wkt.ellps = 'intl';
      }

      wkt.a = geogcs.DATUM.SPHEROID.a;
      wkt.rf = parseFloat(geogcs.DATUM.SPHEROID.rf, 10);
    }

    if (geogcs.DATUM && geogcs.DATUM.TOWGS84) {
      wkt.datum_params = geogcs.DATUM.TOWGS84;
    }
    if (~wkt.datumCode.indexOf('osgb_1936')) {
      wkt.datumCode = 'osgb36';
    }
    if (~wkt.datumCode.indexOf('osni_1952')) {
      wkt.datumCode = 'osni52';
    }
    if (~wkt.datumCode.indexOf('tm65')
      || ~wkt.datumCode.indexOf('geodetic_datum_of_1965')) {
      wkt.datumCode = 'ire65';
    }
    if (wkt.datumCode === 'ch1903+') {
      wkt.datumCode = 'ch1903';
    }
    if (~wkt.datumCode.indexOf('israel')) {
      wkt.datumCode = 'isr93';
    }
  }
  if (wkt.b && !isFinite(wkt.b)) {
    wkt.b = wkt.a;
  }

  function toMeter(input) {
    var ratio = wkt.to_meter || 1;
    return input * ratio;
  }
  var renamer = function(a) {
    return rename(wkt, a);
  };
  var list = [
    ['standard_parallel_1', 'Standard_Parallel_1'],
    ['standard_parallel_2', 'Standard_Parallel_2'],
    ['false_easting', 'False_Easting'],
    ['false_northing', 'False_Northing'],
    ['central_meridian', 'Central_Meridian'],
    ['latitude_of_origin', 'Latitude_Of_Origin'],
    ['latitude_of_origin', 'Central_Parallel'],
    ['scale_factor', 'Scale_Factor'],
    ['k0', 'scale_factor'],
    ['latitude_of_center', 'Latitude_Of_Center'],
    ['latitude_of_center', 'Latitude_of_center'],
    ['lat0', 'latitude_of_center', d2r],
    ['longitude_of_center', 'Longitude_Of_Center'],
    ['longitude_of_center', 'Longitude_of_center'],
    ['longc', 'longitude_of_center', d2r],
    ['x0', 'false_easting', toMeter],
    ['y0', 'false_northing', toMeter],
    ['long0', 'central_meridian', d2r],
    ['lat0', 'latitude_of_origin', d2r],
    ['lat0', 'standard_parallel_1', d2r],
    ['lat1', 'standard_parallel_1', d2r],
    ['lat2', 'standard_parallel_2', d2r],
    ['azimuth', 'Azimuth'],
    ['alpha', 'azimuth', d2r],
    ['srsCode', 'name']
  ];
  list.forEach(renamer);
  if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === 'Lambert_Azimuthal_Equal_Area')) {
    wkt.long0 = wkt.longc;
  }
  if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
    wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
    wkt.lat_ts = wkt.lat1;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (function(wkt) {
  var lisp = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(wkt);
  var type = lisp.shift();
  var name = lisp.shift();
  lisp.unshift(['name', name]);
  lisp.unshift(['type', type]);
  var obj = {};
  Object(_process__WEBPACK_IMPORTED_MODULE_1__["sExpr"])(lisp, obj);
  cleanWKT(obj);
  return obj;
});


/***/ }),

/***/ "../node_modules/wkt-parser/parser.js":
/*!********************************************!*\
  !*** ../node_modules/wkt-parser/parser.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (parseString);

var NEUTRAL = 1;
var KEYWORD = 2;
var NUMBER = 3;
var QUOTED = 4;
var AFTERQUOTE = 5;
var ENDED = -1;
var whitespace = /\s/;
var latin = /[A-Za-z]/;
var keyword = /[A-Za-z84]/;
var endThings = /[,\]]/;
var digets = /[\d\.E\-\+]/;
// const ignoredChar = /[\s_\-\/\(\)]/g;
function Parser(text) {
  if (typeof text !== 'string') {
    throw new Error('not a string');
  }
  this.text = text.trim();
  this.level = 0;
  this.place = 0;
  this.root = null;
  this.stack = [];
  this.currentObject = null;
  this.state = NEUTRAL;
}
Parser.prototype.readCharicter = function() {
  var char = this.text[this.place++];
  if (this.state !== QUOTED) {
    while (whitespace.test(char)) {
      if (this.place >= this.text.length) {
        return;
      }
      char = this.text[this.place++];
    }
  }
  switch (this.state) {
    case NEUTRAL:
      return this.neutral(char);
    case KEYWORD:
      return this.keyword(char)
    case QUOTED:
      return this.quoted(char);
    case AFTERQUOTE:
      return this.afterquote(char);
    case NUMBER:
      return this.number(char);
    case ENDED:
      return;
  }
};
Parser.prototype.afterquote = function(char) {
  if (char === '"') {
    this.word += '"';
    this.state = QUOTED;
    return;
  }
  if (endThings.test(char)) {
    this.word = this.word.trim();
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in afterquote yet, index ' + this.place);
};
Parser.prototype.afterItem = function(char) {
  if (char === ',') {
    if (this.word !== null) {
      this.currentObject.push(this.word);
    }
    this.word = null;
    this.state = NEUTRAL;
    return;
  }
  if (char === ']') {
    this.level--;
    if (this.word !== null) {
      this.currentObject.push(this.word);
      this.word = null;
    }
    this.state = NEUTRAL;
    this.currentObject = this.stack.pop();
    if (!this.currentObject) {
      this.state = ENDED;
    }

    return;
  }
};
Parser.prototype.number = function(char) {
  if (digets.test(char)) {
    this.word += char;
    return;
  }
  if (endThings.test(char)) {
    this.word = parseFloat(this.word);
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in number yet, index ' + this.place);
};
Parser.prototype.quoted = function(char) {
  if (char === '"') {
    this.state = AFTERQUOTE;
    return;
  }
  this.word += char;
  return;
};
Parser.prototype.keyword = function(char) {
  if (keyword.test(char)) {
    this.word += char;
    return;
  }
  if (char === '[') {
    var newObjects = [];
    newObjects.push(this.word);
    this.level++;
    if (this.root === null) {
      this.root = newObjects;
    } else {
      this.currentObject.push(newObjects);
    }
    this.stack.push(this.currentObject);
    this.currentObject = newObjects;
    this.state = NEUTRAL;
    return;
  }
  if (endThings.test(char)) {
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in keyword yet, index ' + this.place);
};
Parser.prototype.neutral = function(char) {
  if (latin.test(char)) {
    this.word = char;
    this.state = KEYWORD;
    return;
  }
  if (char === '"') {
    this.word = '';
    this.state = QUOTED;
    return;
  }
  if (digets.test(char)) {
    this.word = char;
    this.state = NUMBER;
    return;
  }
  if (endThings.test(char)) {
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in neutral yet, index ' + this.place);
};
Parser.prototype.output = function() {
  while (this.place < this.text.length) {
    this.readCharicter();
  }
  if (this.state === ENDED) {
    return this.root;
  }
  throw new Error('unable to parse string "' +this.text + '". State is ' + this.state);
};

function parseString(txt) {
  var parser = new Parser(txt);
  return parser.output();
}


/***/ }),

/***/ "../node_modules/wkt-parser/process.js":
/*!*********************************************!*\
  !*** ../node_modules/wkt-parser/process.js ***!
  \*********************************************/
/*! exports provided: sExpr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sExpr", function() { return sExpr; });


function mapit(obj, key, value) {
  if (Array.isArray(key)) {
    value.unshift(key);
    key = null;
  }
  var thing = key ? {} : obj;

  var out = value.reduce(function(newObj, item) {
    sExpr(item, newObj);
    return newObj
  }, thing);
  if (key) {
    obj[key] = out;
  }
}

function sExpr(v, obj) {
  if (!Array.isArray(v)) {
    obj[v] = true;
    return;
  }
  var key = v.shift();
  if (key === 'PARAMETER') {
    key = v.shift();
  }
  if (v.length === 1) {
    if (Array.isArray(v[0])) {
      obj[key] = {};
      sExpr(v[0], obj[key]);
      return;
    }
    obj[key] = v[0];
    return;
  }
  if (!v.length) {
    obj[key] = true;
    return;
  }
  if (key === 'TOWGS84') {
    obj[key] = v;
    return;
  }
  if (key === 'AXIS') {
    if (!(key in obj)) {
      obj[key] = [];
    }
    obj[key].push(v);
    return;
  }
  if (!Array.isArray(key)) {
    obj[key] = {};
  }

  var i;
  switch (key) {
    case 'UNIT':
    case 'PRIMEM':
    case 'VERT_DATUM':
      obj[key] = {
        name: v[0].toLowerCase(),
        convert: v[1]
      };
      if (v.length === 3) {
        sExpr(v[2], obj[key]);
      }
      return;
    case 'SPHEROID':
    case 'ELLIPSOID':
      obj[key] = {
        name: v[0],
        a: v[1],
        rf: v[2]
      };
      if (v.length === 4) {
        sExpr(v[3], obj[key]);
      }
      return;
    case 'PROJECTEDCRS':
    case 'PROJCRS':
    case 'GEOGCS':
    case 'GEOCCS':
    case 'PROJCS':
    case 'LOCAL_CS':
    case 'GEODCRS':
    case 'GEODETICCRS':
    case 'GEODETICDATUM':
    case 'EDATUM':
    case 'ENGINEERINGDATUM':
    case 'VERT_CS':
    case 'VERTCRS':
    case 'VERTICALCRS':
    case 'COMPD_CS':
    case 'COMPOUNDCRS':
    case 'ENGINEERINGCRS':
    case 'ENGCRS':
    case 'FITTED_CS':
    case 'LOCAL_DATUM':
    case 'DATUM':
      v[0] = ['name', v[0]];
      mapit(obj, key, v);
      return;
    default:
      i = -1;
      while (++i < v.length) {
        if (!Array.isArray(v[i])) {
          return sExpr(v, obj[key]);
        }
      }
      return mapit(obj, key, v);
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tZ3JzL21ncnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvUHJvai5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9hZGp1c3RfYXhpcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jaGVja1Nhbml0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vYWRqdXN0X2xhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vYWRqdXN0X2xvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vYWRqdXN0X3pvbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL2FzaW5oeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vYXNpbnouanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL2NsZW5zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi9jbGVuc19jbXBseC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vY29zaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vZTBmbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vZTFmbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vZTJmbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vZTNmbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vZ04uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL2dhdGcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL2h5cG90LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi9pbWxmbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vaXFzZm56LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi9sb2cxcHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL21sZm4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL21zZm56LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi9waGkyei5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vcGpfZW5mbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb21tb24vcGpfaW52X21sZm4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL3BqX21sZm4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29tbW9uL3FzZm56LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi9zaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi9zaW5oLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi9zcmF0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi90b1BvaW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2NvbW1vbi90c2Zuei5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb25zdGFudHMvRGF0dW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29uc3RhbnRzL0VsbGlwc29pZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb25zdGFudHMvUHJpbWVNZXJpZGlhbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb25zdGFudHMvdW5pdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvY29uc3RhbnRzL3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2RhdHVtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2RhdHVtVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvZGF0dW1fdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2RlZnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvZGVyaXZlQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcGFyc2VDb2RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2pTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvYWVhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL2FlcWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvY2Fzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9wcm9qZWN0aW9ucy9jZWEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvZXFjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL2VxZGMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvZXRtZXJjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL2dhdXNzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL2dlb2NlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvZ25vbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9wcm9qZWN0aW9ucy9rcm92YWsuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvbGFlYS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9wcm9qZWN0aW9ucy9sY2MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvbG9uZ2xhdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9wcm9qZWN0aW9ucy9tZXJjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL21pbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvbW9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9wcm9qZWN0aW9ucy9uem1nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL29tZXJjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL29ydGhvLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL3BvbHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvcXNjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL3JvYmluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL3NpbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvc29tZXJjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL3N0ZXJlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvbGliL3Byb2plY3Rpb25zL3N0ZXJlYS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9wcm9qZWN0aW9ucy90bWVyYy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2o0L2xpYi9wcm9qZWN0aW9ucy91dG0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvcHJvamVjdGlvbnMvdmFuZGcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNC9saWIvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcHJvajQvcHJvanMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9qNGxlYWZsZXQvc3JjL3Byb2o0bGVhZmxldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9BdHRyaWJ1dGlvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvQ2lyY2xlTWFya2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9EaXZPdmVybGF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9GZWF0dXJlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL0dlb0pTT04uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL0dyaWRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvSW1hZ2VPdmVybGF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9MYXllckdyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9MYXllcnNDb250cm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9NYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL01hcENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvTWFwQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvTWFwRXZlbnRlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvTWFwTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL01hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvUGFuZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvUG9seWdvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvUG9seWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL1BvcHVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL1NWR092ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL1NjYWxlQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvVGlsZUxheWVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9Ub29sdGlwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy9WaWRlb092ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL1dNU1RpbGVMYXllci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxlYWZsZXQvZXMvWm9vbUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy91dGlscy9vbWl0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy91dGlscy9waWNrLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGVhZmxldC9lcy91dGlscy91cGRhdGVDbGFzc05hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1sZWFmbGV0L25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93a3QtcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2t0LXBhcnNlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93a3QtcGFyc2VyL3Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEI7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQTRDOztBQUU3QjtBQUNmO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5REFBTztBQUNqQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUEQ7QUFBQTtBQUFBO0FBQzRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQUE7QUFBQTtBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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LE1BQU0sRUFVTjtBQUNGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FB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Ozs7Ozs7Ozs7OztBQ25EWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7QUFFNkM7QUFDNEI7QUFDaEI7QUFDRTtBQUN0QztBQUMzQjs7QUFFUDtBQUNBLEVBQUUsd0ZBQWM7O0FBRWhCO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSx5RkFBZSxDQUFDLGdHQUFzQjs7QUFFMUMsSUFBSSx5RkFBZSxDQUFDLGdHQUFzQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsa0ZBQVEsR0FBRzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQVM7Ozs7Ozs7Ozs7Ozs7O0FDaEdYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7O0FBRXFEO0FBQ29CO0FBQ2hCO0FBQ0U7QUFDaEM7QUFDSTtBQUNGOztBQUUxQztBQUNBLEVBQUUsd0ZBQWM7O0FBRWhCO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSx5RkFBZSxDQUFDLGdHQUFzQjs7QUFFMUMsSUFBSSx5RkFBZSxDQUFDLGdHQUFzQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFBO0FBQUE7QUFBQTtBQUM4QjtBQUNFOzs7O0FBSWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLGFBQWEsdURBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQUs7QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hNRDtBQUFlLDBFQUFXLEVBQUM7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35MaWdodG5pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBUYWJsZS50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDE4LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwOC8wMi8yMDE4IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbnZhciBBbmdsZUljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbWFyZ2luOiAzIH0sIGNsYXNzTmFtZTogJ2ZhIGZhLWFuZ2xlLScgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJykgfSkpOyB9O1xudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcbiAgICAgICAgdmFyIGhlYWRlckNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy50YWJsZUNsYXNzICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJywgc3R5bGU6IHRoaXMucHJvcHMudGFibGVTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGhlYWRTdHlsZSB9LCBoZWFkZXJDb21wb25lbnRzKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCB7IHN0eWxlOiB0aGlzLnByb3BzLnRib2R5U3R5bGUgfSwgcm93Q29tcG9uZW50cykpKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5nZW5lcmF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoZnVuY3Rpb24gKGNvbERhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2xEYXRhLmhlYWRlclN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4LCBzdHlsZTogc3R5bGUsIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTb3J0KHsgY29sOiBjb2xEYXRhLmtleSwgYXNjZW5kaW5nOiBfdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSk7IH0gfSxcbiAgICAgICAgICAgICAgICBjb2xEYXRhLmxhYmVsLFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnNvcnRGaWVsZCA9PT0gY29sRGF0YS5rZXkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEFuZ2xlSWNvbiwgeyBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9KSA6IG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgY2VsbHMpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlUm93cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBfdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNvbERhdGEucm93U3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgY3NzID0ge307XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSBfLmNsb25lKGNvbERhdGEucm93U3R5bGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBpbmRleC50b1N0cmluZygpICsgaXRlbVtjb2xEYXRhLmtleV0gKyBjb2xEYXRhLmtleSwgc3R5bGU6IGNzcywgb25DbGljazogX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcywgeyBjb2w6IGNvbERhdGEua2V5LCByb3c6IGl0ZW0sIGRhdGE6IGl0ZW1bY29sRGF0YS5rZXldIH0pIH0sIGNvbERhdGEuY29udGVudCAhPT0gdW5kZWZpbmVkID8gY29sRGF0YS5jb250ZW50KGl0ZW0sIGNvbERhdGEua2V5LCBjc3MpIDogaXRlbVtjb2xEYXRhLmtleV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IF8uY2xvbmUoX3RoaXMucHJvcHMucm93U3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQgJiYgX3RoaXMucHJvcHMuc2VsZWN0ZWQoaXRlbSkpXG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IHN0eWxlOiBzdHlsZSwga2V5OiBpbmRleC50b1N0cmluZygpIH0sIGNlbGxzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhkYXRhLCBldmVudCk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlU29ydCA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU29ydChkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBUYWJsZTtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gZG8gbm90IGVkaXQgLmpzIGZpbGVzIGRpcmVjdGx5IC0gZWRpdCBzcmMvaW5kZXguanN0XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYS5jb25zdHJ1Y3RvciAhPT0gYi5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGxlbmd0aCwgaSwga2V5cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG5cbiAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwKSByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3M7XG4gICAgaWYgKGEudmFsdWVPZiAhPT0gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mKSByZXR1cm4gYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpO1xuICAgIGlmIChhLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRydWUgaWYgYm90aCBOYU4sIGZhbHNlIG90aGVyd2lzZVxuICByZXR1cm4gYSE9PWEgJiYgYiE9PWI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJcblxuXG4vKipcbiAqIFVUTSB6b25lcyBhcmUgZ3JvdXBlZCwgYW5kIGFzc2lnbmVkIHRvIG9uZSBvZiBhIGdyb3VwIG9mIDZcbiAqIHNldHMuXG4gKlxuICoge2ludH0gQHByaXZhdGVcbiAqL1xudmFyIE5VTV8xMDBLX1NFVFMgPSA2O1xuXG4vKipcbiAqIFRoZSBjb2x1bW4gbGV0dGVycyAoZm9yIGVhc3RpbmcpIG9mIHRoZSBsb3dlciBsZWZ0IHZhbHVlLCBwZXJcbiAqIHNldC5cbiAqXG4gKiB7c3RyaW5nfSBAcHJpdmF0ZVxuICovXG52YXIgU0VUX09SSUdJTl9DT0xVTU5fTEVUVEVSUyA9ICdBSlNBSlMnO1xuXG4vKipcbiAqIFRoZSByb3cgbGV0dGVycyAoZm9yIG5vcnRoaW5nKSBvZiB0aGUgbG93ZXIgbGVmdCB2YWx1ZSwgcGVyXG4gKiBzZXQuXG4gKlxuICoge3N0cmluZ30gQHByaXZhdGVcbiAqL1xudmFyIFNFVF9PUklHSU5fUk9XX0xFVFRFUlMgPSAnQUZBRkFGJztcblxudmFyIEEgPSA2NTsgLy8gQVxudmFyIEkgPSA3MzsgLy8gSVxudmFyIE8gPSA3OTsgLy8gT1xudmFyIFYgPSA4NjsgLy8gVlxudmFyIFogPSA5MDsgLy8gWlxuZXhwb3J0IGRlZmF1bHQge1xuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICB0b1BvaW50OiB0b1BvaW50XG59O1xuLyoqXG4gKiBDb252ZXJzaW9uIG9mIGxhdC9sb24gdG8gTUdSUy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gbGwgT2JqZWN0IGxpdGVyYWwgd2l0aCBsYXQgYW5kIGxvbiBwcm9wZXJ0aWVzIG9uIGFcbiAqICAgICBXR1M4NCBlbGxpcHNvaWQuXG4gKiBAcGFyYW0ge2ludH0gYWNjdXJhY3kgQWNjdXJhY3kgaW4gZGlnaXRzICg1IGZvciAxIG0sIDQgZm9yIDEwIG0sIDMgZm9yXG4gKiAgICAgIDEwMCBtLCAyIGZvciAxMDAwIG0gb3IgMSBmb3IgMTAwMDAgbSkuIE9wdGlvbmFsLCBkZWZhdWx0IGlzIDUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBNR1JTIHN0cmluZyBmb3IgdGhlIGdpdmVuIGxvY2F0aW9uIGFuZCBhY2N1cmFjeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQobGwsIGFjY3VyYWN5KSB7XG4gIGFjY3VyYWN5ID0gYWNjdXJhY3kgfHwgNTsgLy8gZGVmYXVsdCBhY2N1cmFjeSAxbVxuICByZXR1cm4gZW5jb2RlKExMdG9VVE0oe1xuICAgIGxhdDogbGxbMV0sXG4gICAgbG9uOiBsbFswXVxuICB9KSwgYWNjdXJhY3kpO1xufTtcblxuLyoqXG4gKiBDb252ZXJzaW9uIG9mIE1HUlMgdG8gbGF0L2xvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWdycyBNR1JTIHN0cmluZy5cbiAqIEByZXR1cm4ge2FycmF5fSBBbiBhcnJheSB3aXRoIGxlZnQgKGxvbmdpdHVkZSksIGJvdHRvbSAobGF0aXR1ZGUpLCByaWdodFxuICogICAgIChsb25naXR1ZGUpIGFuZCB0b3AgKGxhdGl0dWRlKSB2YWx1ZXMgaW4gV0dTODQsIHJlcHJlc2VudGluZyB0aGVcbiAqICAgICBib3VuZGluZyBib3ggZm9yIHRoZSBwcm92aWRlZCBNR1JTIHJlZmVyZW5jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UobWdycykge1xuICB2YXIgYmJveCA9IFVUTXRvTEwoZGVjb2RlKG1ncnMudG9VcHBlckNhc2UoKSkpO1xuICBpZiAoYmJveC5sYXQgJiYgYmJveC5sb24pIHtcbiAgICByZXR1cm4gW2Jib3gubG9uLCBiYm94LmxhdCwgYmJveC5sb24sIGJib3gubGF0XTtcbiAgfVxuICByZXR1cm4gW2Jib3gubGVmdCwgYmJveC5ib3R0b20sIGJib3gucmlnaHQsIGJib3gudG9wXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1BvaW50KG1ncnMpIHtcbiAgdmFyIGJib3ggPSBVVE10b0xMKGRlY29kZShtZ3JzLnRvVXBwZXJDYXNlKCkpKTtcbiAgaWYgKGJib3gubGF0ICYmIGJib3gubG9uKSB7XG4gICAgcmV0dXJuIFtiYm94LmxvbiwgYmJveC5sYXRdO1xuICB9XG4gIHJldHVybiBbKGJib3gubGVmdCArIGJib3gucmlnaHQpIC8gMiwgKGJib3gudG9wICsgYmJveC5ib3R0b20pIC8gMl07XG59O1xuLyoqXG4gKiBDb252ZXJzaW9uIGZyb20gZGVncmVlcyB0byByYWRpYW5zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gZGVnIHRoZSBhbmdsZSBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgYW5nbGUgaW4gcmFkaWFucy5cbiAqL1xuZnVuY3Rpb24gZGVnVG9SYWQoZGVnKSB7XG4gIHJldHVybiAoZGVnICogKE1hdGguUEkgLyAxODAuMCkpO1xufVxuXG4vKipcbiAqIENvbnZlcnNpb24gZnJvbSByYWRpYW5zIHRvIGRlZ3JlZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgdGhlIGFuZ2xlIGluIHJhZGlhbnMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBhbmdsZSBpbiBkZWdyZWVzLlxuICovXG5mdW5jdGlvbiByYWRUb0RlZyhyYWQpIHtcbiAgcmV0dXJuICgxODAuMCAqIChyYWQgLyBNYXRoLlBJKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBzZXQgb2YgTG9uZ2l0dWRlIGFuZCBMYXRpdHVkZSBjby1vcmRpbmF0ZXMgdG8gVVRNXG4gKiB1c2luZyB0aGUgV0dTODQgZWxsaXBzb2lkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gbGwgT2JqZWN0IGxpdGVyYWwgd2l0aCBsYXQgYW5kIGxvbiBwcm9wZXJ0aWVzXG4gKiAgICAgcmVwcmVzZW50aW5nIHRoZSBXR1M4NCBjb29yZGluYXRlIHRvIGJlIGNvbnZlcnRlZC5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyB0aGUgVVRNIHZhbHVlIHdpdGggZWFzdGluZyxcbiAqICAgICBub3J0aGluZywgem9uZU51bWJlciBhbmQgem9uZUxldHRlciBwcm9wZXJ0aWVzLCBhbmQgYW4gb3B0aW9uYWxcbiAqICAgICBhY2N1cmFjeSBwcm9wZXJ0eSBpbiBkaWdpdHMuIFJldHVybnMgbnVsbCBpZiB0aGUgY29udmVyc2lvbiBmYWlsZWQuXG4gKi9cbmZ1bmN0aW9uIExMdG9VVE0obGwpIHtcbiAgdmFyIExhdCA9IGxsLmxhdDtcbiAgdmFyIExvbmcgPSBsbC5sb247XG4gIHZhciBhID0gNjM3ODEzNy4wOyAvL2VsbGlwLnJhZGl1cztcbiAgdmFyIGVjY1NxdWFyZWQgPSAwLjAwNjY5NDM4OyAvL2VsbGlwLmVjY3NxO1xuICB2YXIgazAgPSAwLjk5OTY7XG4gIHZhciBMb25nT3JpZ2luO1xuICB2YXIgZWNjUHJpbWVTcXVhcmVkO1xuICB2YXIgTiwgVCwgQywgQSwgTTtcbiAgdmFyIExhdFJhZCA9IGRlZ1RvUmFkKExhdCk7XG4gIHZhciBMb25nUmFkID0gZGVnVG9SYWQoTG9uZyk7XG4gIHZhciBMb25nT3JpZ2luUmFkO1xuICB2YXIgWm9uZU51bWJlcjtcbiAgLy8gKGludClcbiAgWm9uZU51bWJlciA9IE1hdGguZmxvb3IoKExvbmcgKyAxODApIC8gNikgKyAxO1xuXG4gIC8vTWFrZSBzdXJlIHRoZSBsb25naXR1ZGUgMTgwLjAwIGlzIGluIFpvbmUgNjBcbiAgaWYgKExvbmcgPT09IDE4MCkge1xuICAgIFpvbmVOdW1iZXIgPSA2MDtcbiAgfVxuXG4gIC8vIFNwZWNpYWwgem9uZSBmb3IgTm9yd2F5XG4gIGlmIChMYXQgPj0gNTYuMCAmJiBMYXQgPCA2NC4wICYmIExvbmcgPj0gMy4wICYmIExvbmcgPCAxMi4wKSB7XG4gICAgWm9uZU51bWJlciA9IDMyO1xuICB9XG5cbiAgLy8gU3BlY2lhbCB6b25lcyBmb3IgU3ZhbGJhcmRcbiAgaWYgKExhdCA+PSA3Mi4wICYmIExhdCA8IDg0LjApIHtcbiAgICBpZiAoTG9uZyA+PSAwLjAgJiYgTG9uZyA8IDkuMCkge1xuICAgICAgWm9uZU51bWJlciA9IDMxO1xuICAgIH1cbiAgICBlbHNlIGlmIChMb25nID49IDkuMCAmJiBMb25nIDwgMjEuMCkge1xuICAgICAgWm9uZU51bWJlciA9IDMzO1xuICAgIH1cbiAgICBlbHNlIGlmIChMb25nID49IDIxLjAgJiYgTG9uZyA8IDMzLjApIHtcbiAgICAgIFpvbmVOdW1iZXIgPSAzNTtcbiAgICB9XG4gICAgZWxzZSBpZiAoTG9uZyA+PSAzMy4wICYmIExvbmcgPCA0Mi4wKSB7XG4gICAgICBab25lTnVtYmVyID0gMzc7XG4gICAgfVxuICB9XG5cbiAgTG9uZ09yaWdpbiA9IChab25lTnVtYmVyIC0gMSkgKiA2IC0gMTgwICsgMzsgLy8rMyBwdXRzIG9yaWdpblxuICAvLyBpbiBtaWRkbGUgb2ZcbiAgLy8gem9uZVxuICBMb25nT3JpZ2luUmFkID0gZGVnVG9SYWQoTG9uZ09yaWdpbik7XG5cbiAgZWNjUHJpbWVTcXVhcmVkID0gKGVjY1NxdWFyZWQpIC8gKDEgLSBlY2NTcXVhcmVkKTtcblxuICBOID0gYSAvIE1hdGguc3FydCgxIC0gZWNjU3F1YXJlZCAqIE1hdGguc2luKExhdFJhZCkgKiBNYXRoLnNpbihMYXRSYWQpKTtcbiAgVCA9IE1hdGgudGFuKExhdFJhZCkgKiBNYXRoLnRhbihMYXRSYWQpO1xuICBDID0gZWNjUHJpbWVTcXVhcmVkICogTWF0aC5jb3MoTGF0UmFkKSAqIE1hdGguY29zKExhdFJhZCk7XG4gIEEgPSBNYXRoLmNvcyhMYXRSYWQpICogKExvbmdSYWQgLSBMb25nT3JpZ2luUmFkKTtcblxuICBNID0gYSAqICgoMSAtIGVjY1NxdWFyZWQgLyA0IC0gMyAqIGVjY1NxdWFyZWQgKiBlY2NTcXVhcmVkIC8gNjQgLSA1ICogZWNjU3F1YXJlZCAqIGVjY1NxdWFyZWQgKiBlY2NTcXVhcmVkIC8gMjU2KSAqIExhdFJhZCAtICgzICogZWNjU3F1YXJlZCAvIDggKyAzICogZWNjU3F1YXJlZCAqIGVjY1NxdWFyZWQgLyAzMiArIDQ1ICogZWNjU3F1YXJlZCAqIGVjY1NxdWFyZWQgKiBlY2NTcXVhcmVkIC8gMTAyNCkgKiBNYXRoLnNpbigyICogTGF0UmFkKSArICgxNSAqIGVjY1NxdWFyZWQgKiBlY2NTcXVhcmVkIC8gMjU2ICsgNDUgKiBlY2NTcXVhcmVkICogZWNjU3F1YXJlZCAqIGVjY1NxdWFyZWQgLyAxMDI0KSAqIE1hdGguc2luKDQgKiBMYXRSYWQpIC0gKDM1ICogZWNjU3F1YXJlZCAqIGVjY1NxdWFyZWQgKiBlY2NTcXVhcmVkIC8gMzA3MikgKiBNYXRoLnNpbig2ICogTGF0UmFkKSk7XG5cbiAgdmFyIFVUTUVhc3RpbmcgPSAoazAgKiBOICogKEEgKyAoMSAtIFQgKyBDKSAqIEEgKiBBICogQSAvIDYuMCArICg1IC0gMTggKiBUICsgVCAqIFQgKyA3MiAqIEMgLSA1OCAqIGVjY1ByaW1lU3F1YXJlZCkgKiBBICogQSAqIEEgKiBBICogQSAvIDEyMC4wKSArIDUwMDAwMC4wKTtcblxuICB2YXIgVVRNTm9ydGhpbmcgPSAoazAgKiAoTSArIE4gKiBNYXRoLnRhbihMYXRSYWQpICogKEEgKiBBIC8gMiArICg1IC0gVCArIDkgKiBDICsgNCAqIEMgKiBDKSAqIEEgKiBBICogQSAqIEEgLyAyNC4wICsgKDYxIC0gNTggKiBUICsgVCAqIFQgKyA2MDAgKiBDIC0gMzMwICogZWNjUHJpbWVTcXVhcmVkKSAqIEEgKiBBICogQSAqIEEgKiBBICogQSAvIDcyMC4wKSkpO1xuICBpZiAoTGF0IDwgMC4wKSB7XG4gICAgVVRNTm9ydGhpbmcgKz0gMTAwMDAwMDAuMDsgLy8xMDAwMDAwMCBtZXRlciBvZmZzZXQgZm9yXG4gICAgLy8gc291dGhlcm4gaGVtaXNwaGVyZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBub3J0aGluZzogTWF0aC5yb3VuZChVVE1Ob3J0aGluZyksXG4gICAgZWFzdGluZzogTWF0aC5yb3VuZChVVE1FYXN0aW5nKSxcbiAgICB6b25lTnVtYmVyOiBab25lTnVtYmVyLFxuICAgIHpvbmVMZXR0ZXI6IGdldExldHRlckRlc2lnbmF0b3IoTGF0KVxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIFVUTSBjb29yZHMgdG8gbGF0L2xvbmcsIHVzaW5nIHRoZSBXR1M4NCBlbGxpcHNvaWQuIFRoaXMgaXMgYSBjb252ZW5pZW5jZVxuICogY2xhc3Mgd2hlcmUgdGhlIFpvbmUgY2FuIGJlIHNwZWNpZmllZCBhcyBhIHNpbmdsZSBzdHJpbmcgZWcuXCI2ME5cIiB3aGljaFxuICogaXMgdGhlbiBicm9rZW4gZG93biBpbnRvIHRoZSBab25lTnVtYmVyIGFuZCBab25lTGV0dGVyLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gdXRtIEFuIG9iamVjdCBsaXRlcmFsIHdpdGggbm9ydGhpbmcsIGVhc3RpbmcsIHpvbmVOdW1iZXJcbiAqICAgICBhbmQgem9uZUxldHRlciBwcm9wZXJ0aWVzLiBJZiBhbiBvcHRpb25hbCBhY2N1cmFjeSBwcm9wZXJ0eSBpc1xuICogICAgIHByb3ZpZGVkIChpbiBtZXRlcnMpLCBhIGJvdW5kaW5nIGJveCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2ZcbiAqICAgICBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgbGl0ZXJhbCBjb250YWluaW5nIGVpdGhlciBsYXQgYW5kIGxvbiB2YWx1ZXNcbiAqICAgICAoaWYgbm8gYWNjdXJhY3kgd2FzIHByb3ZpZGVkKSwgb3IgdG9wLCByaWdodCwgYm90dG9tIGFuZCBsZWZ0IHZhbHVlc1xuICogICAgIGZvciB0aGUgYm91bmRpbmcgYm94IGNhbGN1bGF0ZWQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCBhY2N1cmFjeS5cbiAqICAgICBSZXR1cm5zIG51bGwgaWYgdGhlIGNvbnZlcnNpb24gZmFpbGVkLlxuICovXG5mdW5jdGlvbiBVVE10b0xMKHV0bSkge1xuXG4gIHZhciBVVE1Ob3J0aGluZyA9IHV0bS5ub3J0aGluZztcbiAgdmFyIFVUTUVhc3RpbmcgPSB1dG0uZWFzdGluZztcbiAgdmFyIHpvbmVMZXR0ZXIgPSB1dG0uem9uZUxldHRlcjtcbiAgdmFyIHpvbmVOdW1iZXIgPSB1dG0uem9uZU51bWJlcjtcbiAgLy8gY2hlY2sgdGhlIFpvbmVOdW1tYmVyIGlzIHZhbGlkXG4gIGlmICh6b25lTnVtYmVyIDwgMCB8fCB6b25lTnVtYmVyID4gNjApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBrMCA9IDAuOTk5NjtcbiAgdmFyIGEgPSA2Mzc4MTM3LjA7IC8vZWxsaXAucmFkaXVzO1xuICB2YXIgZWNjU3F1YXJlZCA9IDAuMDA2Njk0Mzg7IC8vZWxsaXAuZWNjc3E7XG4gIHZhciBlY2NQcmltZVNxdWFyZWQ7XG4gIHZhciBlMSA9ICgxIC0gTWF0aC5zcXJ0KDEgLSBlY2NTcXVhcmVkKSkgLyAoMSArIE1hdGguc3FydCgxIC0gZWNjU3F1YXJlZCkpO1xuICB2YXIgTjEsIFQxLCBDMSwgUjEsIEQsIE07XG4gIHZhciBMb25nT3JpZ2luO1xuICB2YXIgbXUsIHBoaTFSYWQ7XG5cbiAgLy8gcmVtb3ZlIDUwMCwwMDAgbWV0ZXIgb2Zmc2V0IGZvciBsb25naXR1ZGVcbiAgdmFyIHggPSBVVE1FYXN0aW5nIC0gNTAwMDAwLjA7XG4gIHZhciB5ID0gVVRNTm9ydGhpbmc7XG5cbiAgLy8gV2UgbXVzdCBrbm93IHNvbWVob3cgaWYgd2UgYXJlIGluIHRoZSBOb3J0aGVybiBvciBTb3V0aGVyblxuICAvLyBoZW1pc3BoZXJlLCB0aGlzIGlzIHRoZSBvbmx5IHRpbWUgd2UgdXNlIHRoZSBsZXR0ZXIgU28gZXZlblxuICAvLyBpZiB0aGUgWm9uZSBsZXR0ZXIgaXNuJ3QgZXhhY3RseSBjb3JyZWN0IGl0IHNob3VsZCBpbmRpY2F0ZVxuICAvLyB0aGUgaGVtaXNwaGVyZSBjb3JyZWN0bHlcbiAgaWYgKHpvbmVMZXR0ZXIgPCAnTicpIHtcbiAgICB5IC09IDEwMDAwMDAwLjA7IC8vIHJlbW92ZSAxMCwwMDAsMDAwIG1ldGVyIG9mZnNldCB1c2VkXG4gICAgLy8gZm9yIHNvdXRoZXJuIGhlbWlzcGhlcmVcbiAgfVxuXG4gIC8vIFRoZXJlIGFyZSA2MCB6b25lcyB3aXRoIHpvbmUgMSBiZWluZyBhdCBXZXN0IC0xODAgdG8gLTE3NFxuICBMb25nT3JpZ2luID0gKHpvbmVOdW1iZXIgLSAxKSAqIDYgLSAxODAgKyAzOyAvLyArMyBwdXRzIG9yaWdpblxuICAvLyBpbiBtaWRkbGUgb2ZcbiAgLy8gem9uZVxuXG4gIGVjY1ByaW1lU3F1YXJlZCA9IChlY2NTcXVhcmVkKSAvICgxIC0gZWNjU3F1YXJlZCk7XG5cbiAgTSA9IHkgLyBrMDtcbiAgbXUgPSBNIC8gKGEgKiAoMSAtIGVjY1NxdWFyZWQgLyA0IC0gMyAqIGVjY1NxdWFyZWQgKiBlY2NTcXVhcmVkIC8gNjQgLSA1ICogZWNjU3F1YXJlZCAqIGVjY1NxdWFyZWQgKiBlY2NTcXVhcmVkIC8gMjU2KSk7XG5cbiAgcGhpMVJhZCA9IG11ICsgKDMgKiBlMSAvIDIgLSAyNyAqIGUxICogZTEgKiBlMSAvIDMyKSAqIE1hdGguc2luKDIgKiBtdSkgKyAoMjEgKiBlMSAqIGUxIC8gMTYgLSA1NSAqIGUxICogZTEgKiBlMSAqIGUxIC8gMzIpICogTWF0aC5zaW4oNCAqIG11KSArICgxNTEgKiBlMSAqIGUxICogZTEgLyA5NikgKiBNYXRoLnNpbig2ICogbXUpO1xuICAvLyBkb3VibGUgcGhpMSA9IFByb2pNYXRoLnJhZFRvRGVnKHBoaTFSYWQpO1xuXG4gIE4xID0gYSAvIE1hdGguc3FydCgxIC0gZWNjU3F1YXJlZCAqIE1hdGguc2luKHBoaTFSYWQpICogTWF0aC5zaW4ocGhpMVJhZCkpO1xuICBUMSA9IE1hdGgudGFuKHBoaTFSYWQpICogTWF0aC50YW4ocGhpMVJhZCk7XG4gIEMxID0gZWNjUHJpbWVTcXVhcmVkICogTWF0aC5jb3MocGhpMVJhZCkgKiBNYXRoLmNvcyhwaGkxUmFkKTtcbiAgUjEgPSBhICogKDEgLSBlY2NTcXVhcmVkKSAvIE1hdGgucG93KDEgLSBlY2NTcXVhcmVkICogTWF0aC5zaW4ocGhpMVJhZCkgKiBNYXRoLnNpbihwaGkxUmFkKSwgMS41KTtcbiAgRCA9IHggLyAoTjEgKiBrMCk7XG5cbiAgdmFyIGxhdCA9IHBoaTFSYWQgLSAoTjEgKiBNYXRoLnRhbihwaGkxUmFkKSAvIFIxKSAqIChEICogRCAvIDIgLSAoNSArIDMgKiBUMSArIDEwICogQzEgLSA0ICogQzEgKiBDMSAtIDkgKiBlY2NQcmltZVNxdWFyZWQpICogRCAqIEQgKiBEICogRCAvIDI0ICsgKDYxICsgOTAgKiBUMSArIDI5OCAqIEMxICsgNDUgKiBUMSAqIFQxIC0gMjUyICogZWNjUHJpbWVTcXVhcmVkIC0gMyAqIEMxICogQzEpICogRCAqIEQgKiBEICogRCAqIEQgKiBEIC8gNzIwKTtcbiAgbGF0ID0gcmFkVG9EZWcobGF0KTtcblxuICB2YXIgbG9uID0gKEQgLSAoMSArIDIgKiBUMSArIEMxKSAqIEQgKiBEICogRCAvIDYgKyAoNSAtIDIgKiBDMSArIDI4ICogVDEgLSAzICogQzEgKiBDMSArIDggKiBlY2NQcmltZVNxdWFyZWQgKyAyNCAqIFQxICogVDEpICogRCAqIEQgKiBEICogRCAqIEQgLyAxMjApIC8gTWF0aC5jb3MocGhpMVJhZCk7XG4gIGxvbiA9IExvbmdPcmlnaW4gKyByYWRUb0RlZyhsb24pO1xuXG4gIHZhciByZXN1bHQ7XG4gIGlmICh1dG0uYWNjdXJhY3kpIHtcbiAgICB2YXIgdG9wUmlnaHQgPSBVVE10b0xMKHtcbiAgICAgIG5vcnRoaW5nOiB1dG0ubm9ydGhpbmcgKyB1dG0uYWNjdXJhY3ksXG4gICAgICBlYXN0aW5nOiB1dG0uZWFzdGluZyArIHV0bS5hY2N1cmFjeSxcbiAgICAgIHpvbmVMZXR0ZXI6IHV0bS56b25lTGV0dGVyLFxuICAgICAgem9uZU51bWJlcjogdXRtLnpvbmVOdW1iZXJcbiAgICB9KTtcbiAgICByZXN1bHQgPSB7XG4gICAgICB0b3A6IHRvcFJpZ2h0LmxhdCxcbiAgICAgIHJpZ2h0OiB0b3BSaWdodC5sb24sXG4gICAgICBib3R0b206IGxhdCxcbiAgICAgIGxlZnQ6IGxvblxuICAgIH07XG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0ge1xuICAgICAgbGF0OiBsYXQsXG4gICAgICBsb246IGxvblxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBNR1JTIGxldHRlciBkZXNpZ25hdG9yIGZvciB0aGUgZ2l2ZW4gbGF0aXR1ZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgVGhlIGxhdGl0dWRlIGluIFdHUzg0IHRvIGdldCB0aGUgbGV0dGVyIGRlc2lnbmF0b3JcbiAqICAgICBmb3IuXG4gKiBAcmV0dXJuIHtjaGFyfSBUaGUgbGV0dGVyIGRlc2lnbmF0b3IuXG4gKi9cbmZ1bmN0aW9uIGdldExldHRlckRlc2lnbmF0b3IobGF0KSB7XG4gIC8vVGhpcyBpcyBoZXJlIGFzIGFuIGVycm9yIGZsYWcgdG8gc2hvdyB0aGF0IHRoZSBMYXRpdHVkZSBpc1xuICAvL291dHNpZGUgTUdSUyBsaW1pdHNcbiAgdmFyIExldHRlckRlc2lnbmF0b3IgPSAnWic7XG5cbiAgaWYgKCg4NCA+PSBsYXQpICYmIChsYXQgPj0gNzIpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdYJztcbiAgfVxuICBlbHNlIGlmICgoNzIgPiBsYXQpICYmIChsYXQgPj0gNjQpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdXJztcbiAgfVxuICBlbHNlIGlmICgoNjQgPiBsYXQpICYmIChsYXQgPj0gNTYpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdWJztcbiAgfVxuICBlbHNlIGlmICgoNTYgPiBsYXQpICYmIChsYXQgPj0gNDgpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdVJztcbiAgfVxuICBlbHNlIGlmICgoNDggPiBsYXQpICYmIChsYXQgPj0gNDApKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdUJztcbiAgfVxuICBlbHNlIGlmICgoNDAgPiBsYXQpICYmIChsYXQgPj0gMzIpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdTJztcbiAgfVxuICBlbHNlIGlmICgoMzIgPiBsYXQpICYmIChsYXQgPj0gMjQpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdSJztcbiAgfVxuICBlbHNlIGlmICgoMjQgPiBsYXQpICYmIChsYXQgPj0gMTYpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdRJztcbiAgfVxuICBlbHNlIGlmICgoMTYgPiBsYXQpICYmIChsYXQgPj0gOCkpIHtcbiAgICBMZXR0ZXJEZXNpZ25hdG9yID0gJ1AnO1xuICB9XG4gIGVsc2UgaWYgKCg4ID4gbGF0KSAmJiAobGF0ID49IDApKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdOJztcbiAgfVxuICBlbHNlIGlmICgoMCA+IGxhdCkgJiYgKGxhdCA+PSAtOCkpIHtcbiAgICBMZXR0ZXJEZXNpZ25hdG9yID0gJ00nO1xuICB9XG4gIGVsc2UgaWYgKCgtOCA+IGxhdCkgJiYgKGxhdCA+PSAtMTYpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdMJztcbiAgfVxuICBlbHNlIGlmICgoLTE2ID4gbGF0KSAmJiAobGF0ID49IC0yNCkpIHtcbiAgICBMZXR0ZXJEZXNpZ25hdG9yID0gJ0snO1xuICB9XG4gIGVsc2UgaWYgKCgtMjQgPiBsYXQpICYmIChsYXQgPj0gLTMyKSkge1xuICAgIExldHRlckRlc2lnbmF0b3IgPSAnSic7XG4gIH1cbiAgZWxzZSBpZiAoKC0zMiA+IGxhdCkgJiYgKGxhdCA+PSAtNDApKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdIJztcbiAgfVxuICBlbHNlIGlmICgoLTQwID4gbGF0KSAmJiAobGF0ID49IC00OCkpIHtcbiAgICBMZXR0ZXJEZXNpZ25hdG9yID0gJ0cnO1xuICB9XG4gIGVsc2UgaWYgKCgtNDggPiBsYXQpICYmIChsYXQgPj0gLTU2KSkge1xuICAgIExldHRlckRlc2lnbmF0b3IgPSAnRic7XG4gIH1cbiAgZWxzZSBpZiAoKC01NiA+IGxhdCkgJiYgKGxhdCA+PSAtNjQpKSB7XG4gICAgTGV0dGVyRGVzaWduYXRvciA9ICdFJztcbiAgfVxuICBlbHNlIGlmICgoLTY0ID4gbGF0KSAmJiAobGF0ID49IC03MikpIHtcbiAgICBMZXR0ZXJEZXNpZ25hdG9yID0gJ0QnO1xuICB9XG4gIGVsc2UgaWYgKCgtNzIgPiBsYXQpICYmIChsYXQgPj0gLTgwKSkge1xuICAgIExldHRlckRlc2lnbmF0b3IgPSAnQyc7XG4gIH1cbiAgcmV0dXJuIExldHRlckRlc2lnbmF0b3I7XG59XG5cbi8qKlxuICogRW5jb2RlcyBhIFVUTSBsb2NhdGlvbiBhcyBNR1JTIHN0cmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtvYmplY3R9IHV0bSBBbiBvYmplY3QgbGl0ZXJhbCB3aXRoIGVhc3RpbmcsIG5vcnRoaW5nLFxuICogICAgIHpvbmVMZXR0ZXIsIHpvbmVOdW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhY2N1cmFjeSBBY2N1cmFjeSBpbiBkaWdpdHMgKDEtNSkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE1HUlMgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gVVRNIGxvY2F0aW9uLlxuICovXG5mdW5jdGlvbiBlbmNvZGUodXRtLCBhY2N1cmFjeSkge1xuICAvLyBwcmVwZW5kIHdpdGggbGVhZGluZyB6ZXJvZXNcbiAgdmFyIHNlYXN0aW5nID0gXCIwMDAwMFwiICsgdXRtLmVhc3RpbmcsXG4gICAgc25vcnRoaW5nID0gXCIwMDAwMFwiICsgdXRtLm5vcnRoaW5nO1xuXG4gIHJldHVybiB1dG0uem9uZU51bWJlciArIHV0bS56b25lTGV0dGVyICsgZ2V0MTAwa0lEKHV0bS5lYXN0aW5nLCB1dG0ubm9ydGhpbmcsIHV0bS56b25lTnVtYmVyKSArIHNlYXN0aW5nLnN1YnN0cihzZWFzdGluZy5sZW5ndGggLSA1LCBhY2N1cmFjeSkgKyBzbm9ydGhpbmcuc3Vic3RyKHNub3J0aGluZy5sZW5ndGggLSA1LCBhY2N1cmFjeSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSB0d28gbGV0dGVyIDEwMGsgZGVzaWduYXRvciBmb3IgYSBnaXZlbiBVVE0gZWFzdGluZyxcbiAqIG5vcnRoaW5nIGFuZCB6b25lIG51bWJlciB2YWx1ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGVhc3RpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBub3J0aGluZ1xuICogQHBhcmFtIHtudW1iZXJ9IHpvbmVOdW1iZXJcbiAqIEByZXR1cm4gdGhlIHR3byBsZXR0ZXIgMTAwayBkZXNpZ25hdG9yIGZvciB0aGUgZ2l2ZW4gVVRNIGxvY2F0aW9uLlxuICovXG5mdW5jdGlvbiBnZXQxMDBrSUQoZWFzdGluZywgbm9ydGhpbmcsIHpvbmVOdW1iZXIpIHtcbiAgdmFyIHNldFBhcm0gPSBnZXQxMDBrU2V0Rm9yWm9uZSh6b25lTnVtYmVyKTtcbiAgdmFyIHNldENvbHVtbiA9IE1hdGguZmxvb3IoZWFzdGluZyAvIDEwMDAwMCk7XG4gIHZhciBzZXRSb3cgPSBNYXRoLmZsb29yKG5vcnRoaW5nIC8gMTAwMDAwKSAlIDIwO1xuICByZXR1cm4gZ2V0TGV0dGVyMTAwa0lEKHNldENvbHVtbiwgc2V0Um93LCBzZXRQYXJtKTtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIFVUTSB6b25lIG51bWJlciwgZmlndXJlIG91dCB0aGUgTUdSUyAxMDBLIHNldCBpdCBpcyBpbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQW4gVVRNIHpvbmUgbnVtYmVyLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgMTAwayBzZXQgdGhlIFVUTSB6b25lIGlzIGluLlxuICovXG5mdW5jdGlvbiBnZXQxMDBrU2V0Rm9yWm9uZShpKSB7XG4gIHZhciBzZXRQYXJtID0gaSAlIE5VTV8xMDBLX1NFVFM7XG4gIGlmIChzZXRQYXJtID09PSAwKSB7XG4gICAgc2V0UGFybSA9IE5VTV8xMDBLX1NFVFM7XG4gIH1cblxuICByZXR1cm4gc2V0UGFybTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHR3by1sZXR0ZXIgTUdSUyAxMDBrIGRlc2lnbmF0b3IgZ2l2ZW4gaW5mb3JtYXRpb25cbiAqIHRyYW5zbGF0ZWQgZnJvbSB0aGUgVVRNIG5vcnRoaW5nLCBlYXN0aW5nIGFuZCB6b25lIG51bWJlci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiB0aGUgY29sdW1uIGluZGV4IGFzIGl0IHJlbGF0ZXMgdG8gdGhlIE1HUlNcbiAqICAgICAgICAxMDBrIHNldCBzcHJlYWRzaGVldCwgY3JlYXRlZCBmcm9tIHRoZSBVVE0gZWFzdGluZy5cbiAqICAgICAgICBWYWx1ZXMgYXJlIDEtOC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByb3cgdGhlIHJvdyBpbmRleCBhcyBpdCByZWxhdGVzIHRvIHRoZSBNR1JTIDEwMGsgc2V0XG4gKiAgICAgICAgc3ByZWFkc2hlZXQsIGNyZWF0ZWQgZnJvbSB0aGUgVVRNIG5vcnRoaW5nIHZhbHVlLiBWYWx1ZXNcbiAqICAgICAgICBhcmUgZnJvbSAwLTE5LlxuICogQHBhcmFtIHtudW1iZXJ9IHBhcm0gdGhlIHNldCBibG9jaywgYXMgaXQgcmVsYXRlcyB0byB0aGUgTUdSUyAxMDBrIHNldFxuICogICAgICAgIHNwcmVhZHNoZWV0LCBjcmVhdGVkIGZyb20gdGhlIFVUTSB6b25lLiBWYWx1ZXMgYXJlIGZyb21cbiAqICAgICAgICAxLTYwLlxuICogQHJldHVybiB0d28gbGV0dGVyIE1HUlMgMTAwayBjb2RlLlxuICovXG5mdW5jdGlvbiBnZXRMZXR0ZXIxMDBrSUQoY29sdW1uLCByb3csIHBhcm0pIHtcbiAgLy8gY29sT3JpZ2luIGFuZCByb3dPcmlnaW4gYXJlIHRoZSBsZXR0ZXJzIGF0IHRoZSBvcmlnaW4gb2YgdGhlIHNldFxuICB2YXIgaW5kZXggPSBwYXJtIC0gMTtcbiAgdmFyIGNvbE9yaWdpbiA9IFNFVF9PUklHSU5fQ09MVU1OX0xFVFRFUlMuY2hhckNvZGVBdChpbmRleCk7XG4gIHZhciByb3dPcmlnaW4gPSBTRVRfT1JJR0lOX1JPV19MRVRURVJTLmNoYXJDb2RlQXQoaW5kZXgpO1xuXG4gIC8vIGNvbEludCBhbmQgcm93SW50IGFyZSB0aGUgbGV0dGVycyB0byBidWlsZCB0byByZXR1cm5cbiAgdmFyIGNvbEludCA9IGNvbE9yaWdpbiArIGNvbHVtbiAtIDE7XG4gIHZhciByb3dJbnQgPSByb3dPcmlnaW4gKyByb3c7XG4gIHZhciByb2xsb3ZlciA9IGZhbHNlO1xuXG4gIGlmIChjb2xJbnQgPiBaKSB7XG4gICAgY29sSW50ID0gY29sSW50IC0gWiArIEEgLSAxO1xuICAgIHJvbGxvdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjb2xJbnQgPT09IEkgfHwgKGNvbE9yaWdpbiA8IEkgJiYgY29sSW50ID4gSSkgfHwgKChjb2xJbnQgPiBJIHx8IGNvbE9yaWdpbiA8IEkpICYmIHJvbGxvdmVyKSkge1xuICAgIGNvbEludCsrO1xuICB9XG5cbiAgaWYgKGNvbEludCA9PT0gTyB8fCAoY29sT3JpZ2luIDwgTyAmJiBjb2xJbnQgPiBPKSB8fCAoKGNvbEludCA+IE8gfHwgY29sT3JpZ2luIDwgTykgJiYgcm9sbG92ZXIpKSB7XG4gICAgY29sSW50Kys7XG5cbiAgICBpZiAoY29sSW50ID09PSBJKSB7XG4gICAgICBjb2xJbnQrKztcbiAgICB9XG4gIH1cblxuICBpZiAoY29sSW50ID4gWikge1xuICAgIGNvbEludCA9IGNvbEludCAtIFogKyBBIC0gMTtcbiAgfVxuXG4gIGlmIChyb3dJbnQgPiBWKSB7XG4gICAgcm93SW50ID0gcm93SW50IC0gViArIEEgLSAxO1xuICAgIHJvbGxvdmVyID0gdHJ1ZTtcbiAgfVxuICBlbHNlIHtcbiAgICByb2xsb3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCgocm93SW50ID09PSBJKSB8fCAoKHJvd09yaWdpbiA8IEkpICYmIChyb3dJbnQgPiBJKSkpIHx8ICgoKHJvd0ludCA+IEkpIHx8IChyb3dPcmlnaW4gPCBJKSkgJiYgcm9sbG92ZXIpKSB7XG4gICAgcm93SW50Kys7XG4gIH1cblxuICBpZiAoKChyb3dJbnQgPT09IE8pIHx8ICgocm93T3JpZ2luIDwgTykgJiYgKHJvd0ludCA+IE8pKSkgfHwgKCgocm93SW50ID4gTykgfHwgKHJvd09yaWdpbiA8IE8pKSAmJiByb2xsb3ZlcikpIHtcbiAgICByb3dJbnQrKztcblxuICAgIGlmIChyb3dJbnQgPT09IEkpIHtcbiAgICAgIHJvd0ludCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyb3dJbnQgPiBWKSB7XG4gICAgcm93SW50ID0gcm93SW50IC0gViArIEEgLSAxO1xuICB9XG5cbiAgdmFyIHR3b0xldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29sSW50KSArIFN0cmluZy5mcm9tQ2hhckNvZGUocm93SW50KTtcbiAgcmV0dXJuIHR3b0xldHRlcjtcbn1cblxuLyoqXG4gKiBEZWNvZGUgdGhlIFVUTSBwYXJhbWV0ZXJzIGZyb20gYSBNR1JTIHN0cmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ncnNTdHJpbmcgYW4gVVBQRVJDQVNFIGNvb3JkaW5hdGUgc3RyaW5nIGlzIGV4cGVjdGVkLlxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgbGl0ZXJhbCB3aXRoIGVhc3RpbmcsIG5vcnRoaW5nLCB6b25lTGV0dGVyLFxuICogICAgIHpvbmVOdW1iZXIgYW5kIGFjY3VyYWN5IChpbiBtZXRlcnMpIHByb3BlcnRpZXMuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShtZ3JzU3RyaW5nKSB7XG5cbiAgaWYgKG1ncnNTdHJpbmcgJiYgbWdyc1N0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyAoXCJNR1JTUG9pbnQgY292ZXJ0aW5nIGZyb20gbm90aGluZ1wiKTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBtZ3JzU3RyaW5nLmxlbmd0aDtcblxuICB2YXIgaHVuSyA9IG51bGw7XG4gIHZhciBzYiA9IFwiXCI7XG4gIHZhciB0ZXN0Q2hhcjtcbiAgdmFyIGkgPSAwO1xuXG4gIC8vIGdldCBab25lIG51bWJlclxuICB3aGlsZSAoISgvW0EtWl0vKS50ZXN0KHRlc3RDaGFyID0gbWdyc1N0cmluZy5jaGFyQXQoaSkpKSB7XG4gICAgaWYgKGkgPj0gMikge1xuICAgICAgdGhyb3cgKFwiTUdSU1BvaW50IGJhZCBjb252ZXJzaW9uIGZyb206IFwiICsgbWdyc1N0cmluZyk7XG4gICAgfVxuICAgIHNiICs9IHRlc3RDaGFyO1xuICAgIGkrKztcbiAgfVxuXG4gIHZhciB6b25lTnVtYmVyID0gcGFyc2VJbnQoc2IsIDEwKTtcblxuICBpZiAoaSA9PT0gMCB8fCBpICsgMyA+IGxlbmd0aCkge1xuICAgIC8vIEEgZ29vZCBNR1JTIHN0cmluZyBoYXMgdG8gYmUgNC01IGRpZ2l0cyBsb25nLFxuICAgIC8vICMjQUFBLyNBQUEgYXQgbGVhc3QuXG4gICAgdGhyb3cgKFwiTUdSU1BvaW50IGJhZCBjb252ZXJzaW9uIGZyb206IFwiICsgbWdyc1N0cmluZyk7XG4gIH1cblxuICB2YXIgem9uZUxldHRlciA9IG1ncnNTdHJpbmcuY2hhckF0KGkrKyk7XG5cbiAgLy8gU2hvdWxkIHdlIGNoZWNrIHRoZSB6b25lIGxldHRlciBoZXJlPyBXaHkgbm90LlxuICBpZiAoem9uZUxldHRlciA8PSAnQScgfHwgem9uZUxldHRlciA9PT0gJ0InIHx8IHpvbmVMZXR0ZXIgPT09ICdZJyB8fCB6b25lTGV0dGVyID49ICdaJyB8fCB6b25lTGV0dGVyID09PSAnSScgfHwgem9uZUxldHRlciA9PT0gJ08nKSB7XG4gICAgdGhyb3cgKFwiTUdSU1BvaW50IHpvbmUgbGV0dGVyIFwiICsgem9uZUxldHRlciArIFwiIG5vdCBoYW5kbGVkOiBcIiArIG1ncnNTdHJpbmcpO1xuICB9XG5cbiAgaHVuSyA9IG1ncnNTdHJpbmcuc3Vic3RyaW5nKGksIGkgKz0gMik7XG5cbiAgdmFyIHNldCA9IGdldDEwMGtTZXRGb3Jab25lKHpvbmVOdW1iZXIpO1xuXG4gIHZhciBlYXN0MTAwayA9IGdldEVhc3RpbmdGcm9tQ2hhcihodW5LLmNoYXJBdCgwKSwgc2V0KTtcbiAgdmFyIG5vcnRoMTAwayA9IGdldE5vcnRoaW5nRnJvbUNoYXIoaHVuSy5jaGFyQXQoMSksIHNldCk7XG5cbiAgLy8gV2UgaGF2ZSBhIGJ1ZyB3aGVyZSB0aGUgbm9ydGhpbmcgbWF5IGJlIDIwMDAwMDAgdG9vIGxvdy5cbiAgLy8gSG93XG4gIC8vIGRvIHdlIGtub3cgd2hlbiB0byByb2xsIG92ZXI/XG5cbiAgd2hpbGUgKG5vcnRoMTAwayA8IGdldE1pbk5vcnRoaW5nKHpvbmVMZXR0ZXIpKSB7XG4gICAgbm9ydGgxMDBrICs9IDIwMDAwMDA7XG4gIH1cblxuICAvLyBjYWxjdWxhdGUgdGhlIGNoYXIgaW5kZXggZm9yIGVhc3Rpbmcvbm9ydGhpbmcgc2VwYXJhdG9yXG4gIHZhciByZW1haW5kZXIgPSBsZW5ndGggLSBpO1xuXG4gIGlmIChyZW1haW5kZXIgJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgKFwiTUdSU1BvaW50IGhhcyB0byBoYXZlIGFuIGV2ZW4gbnVtYmVyIFxcbm9mIGRpZ2l0cyBhZnRlciB0aGUgem9uZSBsZXR0ZXIgYW5kIHR3byAxMDBrbSBsZXR0ZXJzIC0gZnJvbnQgXFxuaGFsZiBmb3IgZWFzdGluZyBtZXRlcnMsIHNlY29uZCBoYWxmIGZvciBcXG5ub3J0aGluZyBtZXRlcnNcIiArIG1ncnNTdHJpbmcpO1xuICB9XG5cbiAgdmFyIHNlcCA9IHJlbWFpbmRlciAvIDI7XG5cbiAgdmFyIHNlcEVhc3RpbmcgPSAwLjA7XG4gIHZhciBzZXBOb3J0aGluZyA9IDAuMDtcbiAgdmFyIGFjY3VyYWN5Qm9udXMsIHNlcEVhc3RpbmdTdHJpbmcsIHNlcE5vcnRoaW5nU3RyaW5nLCBlYXN0aW5nLCBub3J0aGluZztcbiAgaWYgKHNlcCA+IDApIHtcbiAgICBhY2N1cmFjeUJvbnVzID0gMTAwMDAwLjAgLyBNYXRoLnBvdygxMCwgc2VwKTtcbiAgICBzZXBFYXN0aW5nU3RyaW5nID0gbWdyc1N0cmluZy5zdWJzdHJpbmcoaSwgaSArIHNlcCk7XG4gICAgc2VwRWFzdGluZyA9IHBhcnNlRmxvYXQoc2VwRWFzdGluZ1N0cmluZykgKiBhY2N1cmFjeUJvbnVzO1xuICAgIHNlcE5vcnRoaW5nU3RyaW5nID0gbWdyc1N0cmluZy5zdWJzdHJpbmcoaSArIHNlcCk7XG4gICAgc2VwTm9ydGhpbmcgPSBwYXJzZUZsb2F0KHNlcE5vcnRoaW5nU3RyaW5nKSAqIGFjY3VyYWN5Qm9udXM7XG4gIH1cblxuICBlYXN0aW5nID0gc2VwRWFzdGluZyArIGVhc3QxMDBrO1xuICBub3J0aGluZyA9IHNlcE5vcnRoaW5nICsgbm9ydGgxMDBrO1xuXG4gIHJldHVybiB7XG4gICAgZWFzdGluZzogZWFzdGluZyxcbiAgICBub3J0aGluZzogbm9ydGhpbmcsXG4gICAgem9uZUxldHRlcjogem9uZUxldHRlcixcbiAgICB6b25lTnVtYmVyOiB6b25lTnVtYmVyLFxuICAgIGFjY3VyYWN5OiBhY2N1cmFjeUJvbnVzXG4gIH07XG59XG5cbi8qKlxuICogR2l2ZW4gdGhlIGZpcnN0IGxldHRlciBmcm9tIGEgdHdvLWxldHRlciBNR1JTIDEwMGsgem9uZSwgYW5kIGdpdmVuIHRoZVxuICogTUdSUyB0YWJsZSBzZXQgZm9yIHRoZSB6b25lIG51bWJlciwgZmlndXJlIG91dCB0aGUgZWFzdGluZyB2YWx1ZSB0aGF0XG4gKiBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIG90aGVyLCBzZWNvbmRhcnkgZWFzdGluZyB2YWx1ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtjaGFyfSBlIFRoZSBmaXJzdCBsZXR0ZXIgZnJvbSBhIHR3by1sZXR0ZXIgTUdSUyAxMDDCtGsgem9uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzZXQgVGhlIE1HUlMgdGFibGUgc2V0IGZvciB0aGUgem9uZSBudW1iZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBlYXN0aW5nIHZhbHVlIGZvciB0aGUgZ2l2ZW4gbGV0dGVyIGFuZCBzZXQuXG4gKi9cbmZ1bmN0aW9uIGdldEVhc3RpbmdGcm9tQ2hhcihlLCBzZXQpIHtcbiAgLy8gY29sT3JpZ2luIGlzIHRoZSBsZXR0ZXIgYXQgdGhlIG9yaWdpbiBvZiB0aGUgc2V0IGZvciB0aGVcbiAgLy8gY29sdW1uXG4gIHZhciBjdXJDb2wgPSBTRVRfT1JJR0lOX0NPTFVNTl9MRVRURVJTLmNoYXJDb2RlQXQoc2V0IC0gMSk7XG4gIHZhciBlYXN0aW5nVmFsdWUgPSAxMDAwMDAuMDtcbiAgdmFyIHJld2luZE1hcmtlciA9IGZhbHNlO1xuXG4gIHdoaWxlIChjdXJDb2wgIT09IGUuY2hhckNvZGVBdCgwKSkge1xuICAgIGN1ckNvbCsrO1xuICAgIGlmIChjdXJDb2wgPT09IEkpIHtcbiAgICAgIGN1ckNvbCsrO1xuICAgIH1cbiAgICBpZiAoY3VyQ29sID09PSBPKSB7XG4gICAgICBjdXJDb2wrKztcbiAgICB9XG4gICAgaWYgKGN1ckNvbCA+IFopIHtcbiAgICAgIGlmIChyZXdpbmRNYXJrZXIpIHtcbiAgICAgICAgdGhyb3cgKFwiQmFkIGNoYXJhY3RlcjogXCIgKyBlKTtcbiAgICAgIH1cbiAgICAgIGN1ckNvbCA9IEE7XG4gICAgICByZXdpbmRNYXJrZXIgPSB0cnVlO1xuICAgIH1cbiAgICBlYXN0aW5nVmFsdWUgKz0gMTAwMDAwLjA7XG4gIH1cblxuICByZXR1cm4gZWFzdGluZ1ZhbHVlO1xufVxuXG4vKipcbiAqIEdpdmVuIHRoZSBzZWNvbmQgbGV0dGVyIGZyb20gYSB0d28tbGV0dGVyIE1HUlMgMTAwayB6b25lLCBhbmQgZ2l2ZW4gdGhlXG4gKiBNR1JTIHRhYmxlIHNldCBmb3IgdGhlIHpvbmUgbnVtYmVyLCBmaWd1cmUgb3V0IHRoZSBub3J0aGluZyB2YWx1ZSB0aGF0XG4gKiBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIG90aGVyLCBzZWNvbmRhcnkgbm9ydGhpbmcgdmFsdWUuIFlvdSBoYXZlIHRvXG4gKiByZW1lbWJlciB0aGF0IE5vcnRoaW5ncyBhcmUgZGV0ZXJtaW5lZCBmcm9tIHRoZSBlcXVhdG9yLCBhbmQgdGhlIHZlcnRpY2FsXG4gKiBjeWNsZSBvZiBsZXR0ZXJzIG1lYW4gYSAyMDAwMDAwIGFkZGl0aW9uYWwgbm9ydGhpbmcgbWV0ZXJzLiBUaGlzIGhhcHBlbnNcbiAqIGFwcHJveC4gZXZlcnkgMTggZGVncmVlcyBvZiBsYXRpdHVkZS4gVGhpcyBtZXRob2QgZG9lcyAqTk9UKiBjb3VudCBhbnlcbiAqIGFkZGl0aW9uYWwgbm9ydGhpbmdzLiBZb3UgaGF2ZSB0byBmaWd1cmUgb3V0IGhvdyBtYW55IDIwMDAwMDAgbWV0ZXJzIG5lZWRcbiAqIHRvIGJlIGFkZGVkIGZvciB0aGUgem9uZSBsZXR0ZXIgb2YgdGhlIE1HUlMgY29vcmRpbmF0ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtjaGFyfSBuIFNlY29uZCBsZXR0ZXIgb2YgdGhlIE1HUlMgMTAwayB6b25lXG4gKiBAcGFyYW0ge251bWJlcn0gc2V0IFRoZSBNR1JTIHRhYmxlIHNldCBudW1iZXIsIHdoaWNoIGlzIGRlcGVuZGVudCBvbiB0aGVcbiAqICAgICBVVE0gem9uZSBudW1iZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBub3J0aGluZyB2YWx1ZSBmb3IgdGhlIGdpdmVuIGxldHRlciBhbmQgc2V0LlxuICovXG5mdW5jdGlvbiBnZXROb3J0aGluZ0Zyb21DaGFyKG4sIHNldCkge1xuXG4gIGlmIChuID4gJ1YnKSB7XG4gICAgdGhyb3cgKFwiTUdSU1BvaW50IGdpdmVuIGludmFsaWQgTm9ydGhpbmcgXCIgKyBuKTtcbiAgfVxuXG4gIC8vIHJvd09yaWdpbiBpcyB0aGUgbGV0dGVyIGF0IHRoZSBvcmlnaW4gb2YgdGhlIHNldCBmb3IgdGhlXG4gIC8vIGNvbHVtblxuICB2YXIgY3VyUm93ID0gU0VUX09SSUdJTl9ST1dfTEVUVEVSUy5jaGFyQ29kZUF0KHNldCAtIDEpO1xuICB2YXIgbm9ydGhpbmdWYWx1ZSA9IDAuMDtcbiAgdmFyIHJld2luZE1hcmtlciA9IGZhbHNlO1xuXG4gIHdoaWxlIChjdXJSb3cgIT09IG4uY2hhckNvZGVBdCgwKSkge1xuICAgIGN1clJvdysrO1xuICAgIGlmIChjdXJSb3cgPT09IEkpIHtcbiAgICAgIGN1clJvdysrO1xuICAgIH1cbiAgICBpZiAoY3VyUm93ID09PSBPKSB7XG4gICAgICBjdXJSb3crKztcbiAgICB9XG4gICAgLy8gZml4aW5nIGEgYnVnIG1ha2luZyB3aG9sZSBhcHBsaWNhdGlvbiBoYW5nIGluIHRoaXMgbG9vcFxuICAgIC8vIHdoZW4gJ24nIGlzIGEgd3JvbmcgY2hhcmFjdGVyXG4gICAgaWYgKGN1clJvdyA+IFYpIHtcbiAgICAgIGlmIChyZXdpbmRNYXJrZXIpIHsgLy8gbWFraW5nIHN1cmUgdGhhdCB0aGlzIGxvb3AgZW5kc1xuICAgICAgICB0aHJvdyAoXCJCYWQgY2hhcmFjdGVyOiBcIiArIG4pO1xuICAgICAgfVxuICAgICAgY3VyUm93ID0gQTtcbiAgICAgIHJld2luZE1hcmtlciA9IHRydWU7XG4gICAgfVxuICAgIG5vcnRoaW5nVmFsdWUgKz0gMTAwMDAwLjA7XG4gIH1cblxuICByZXR1cm4gbm9ydGhpbmdWYWx1ZTtcbn1cblxuLyoqXG4gKiBUaGUgZnVuY3Rpb24gZ2V0TWluTm9ydGhpbmcgcmV0dXJucyB0aGUgbWluaW11bSBub3J0aGluZyB2YWx1ZSBvZiBhIE1HUlNcbiAqIHpvbmUuXG4gKlxuICogUG9ydGVkIGZyb20gR2VvdHJhbnMnIGMgTGF0dGl0dWRlX0JhbmRfVmFsdWUgc3RydWN0dXJlIHRhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2NoYXJ9IHpvbmVMZXR0ZXIgVGhlIE1HUlMgem9uZSB0byBnZXQgdGhlIG1pbiBub3J0aGluZyBmb3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE1pbk5vcnRoaW5nKHpvbmVMZXR0ZXIpIHtcbiAgdmFyIG5vcnRoaW5nO1xuICBzd2l0Y2ggKHpvbmVMZXR0ZXIpIHtcbiAgY2FzZSAnQyc6XG4gICAgbm9ydGhpbmcgPSAxMTAwMDAwLjA7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ0QnOlxuICAgIG5vcnRoaW5nID0gMjAwMDAwMC4wO1xuICAgIGJyZWFrO1xuICBjYXNlICdFJzpcbiAgICBub3J0aGluZyA9IDI4MDAwMDAuMDtcbiAgICBicmVhaztcbiAgY2FzZSAnRic6XG4gICAgbm9ydGhpbmcgPSAzNzAwMDAwLjA7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ0cnOlxuICAgIG5vcnRoaW5nID0gNDYwMDAwMC4wO1xuICAgIGJyZWFrO1xuICBjYXNlICdIJzpcbiAgICBub3J0aGluZyA9IDU1MDAwMDAuMDtcbiAgICBicmVhaztcbiAgY2FzZSAnSic6XG4gICAgbm9ydGhpbmcgPSA2NDAwMDAwLjA7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ0snOlxuICAgIG5vcnRoaW5nID0gNzMwMDAwMC4wO1xuICAgIGJyZWFrO1xuICBjYXNlICdMJzpcbiAgICBub3J0aGluZyA9IDgyMDAwMDAuMDtcbiAgICBicmVhaztcbiAgY2FzZSAnTSc6XG4gICAgbm9ydGhpbmcgPSA5MTAwMDAwLjA7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ04nOlxuICAgIG5vcnRoaW5nID0gMC4wO1xuICAgIGJyZWFrO1xuICBjYXNlICdQJzpcbiAgICBub3J0aGluZyA9IDgwMDAwMC4wO1xuICAgIGJyZWFrO1xuICBjYXNlICdRJzpcbiAgICBub3J0aGluZyA9IDE3MDAwMDAuMDtcbiAgICBicmVhaztcbiAgY2FzZSAnUic6XG4gICAgbm9ydGhpbmcgPSAyNjAwMDAwLjA7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ1MnOlxuICAgIG5vcnRoaW5nID0gMzUwMDAwMC4wO1xuICAgIGJyZWFrO1xuICBjYXNlICdUJzpcbiAgICBub3J0aGluZyA9IDQ0MDAwMDAuMDtcbiAgICBicmVhaztcbiAgY2FzZSAnVSc6XG4gICAgbm9ydGhpbmcgPSA1MzAwMDAwLjA7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ1YnOlxuICAgIG5vcnRoaW5nID0gNjIwMDAwMC4wO1xuICAgIGJyZWFrO1xuICBjYXNlICdXJzpcbiAgICBub3J0aGluZyA9IDcwMDAwMDAuMDtcbiAgICBicmVhaztcbiAgY2FzZSAnWCc6XG4gICAgbm9ydGhpbmcgPSA3OTAwMDAwLjA7XG4gICAgYnJlYWs7XG4gIGRlZmF1bHQ6XG4gICAgbm9ydGhpbmcgPSAtMS4wO1xuICB9XG4gIGlmIChub3J0aGluZyA+PSAwLjApIHtcbiAgICByZXR1cm4gbm9ydGhpbmc7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgKFwiSW52YWxpZCB6b25lIGxldHRlcjogXCIgKyB6b25lTGV0dGVyKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge3RvUG9pbnQsIGZvcndhcmR9IGZyb20gJ21ncnMnO1xuXG5mdW5jdGlvbiBQb2ludCh4LCB5LCB6KSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQb2ludCkpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHksIHopO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgdGhpcy54ID0geFswXTtcbiAgICB0aGlzLnkgPSB4WzFdO1xuICAgIHRoaXMueiA9IHhbMl0gfHwgMC4wO1xuICB9IGVsc2UgaWYodHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy54ID0geC54O1xuICAgIHRoaXMueSA9IHgueTtcbiAgICB0aGlzLnogPSB4LnogfHwgMC4wO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY29vcmRzID0geC5zcGxpdCgnLCcpO1xuICAgIHRoaXMueCA9IHBhcnNlRmxvYXQoY29vcmRzWzBdLCAxMCk7XG4gICAgdGhpcy55ID0gcGFyc2VGbG9hdChjb29yZHNbMV0sIDEwKTtcbiAgICB0aGlzLnogPSBwYXJzZUZsb2F0KGNvb3Jkc1syXSwgMTApIHx8IDAuMDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy56ID0geiB8fCAwLjA7XG4gIH1cbiAgY29uc29sZS53YXJuKCdwcm9qNC5Qb2ludCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAzLCB1c2UgcHJvajQudG9Qb2ludCcpO1xufVxuXG5Qb2ludC5mcm9tTUdSUyA9IGZ1bmN0aW9uKG1ncnNTdHIpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0b1BvaW50KG1ncnNTdHIpKTtcbn07XG5Qb2ludC5wcm90b3R5cGUudG9NR1JTID0gZnVuY3Rpb24oYWNjdXJhY3kpIHtcbiAgcmV0dXJuIGZvcndhcmQoW3RoaXMueCwgdGhpcy55XSwgYWNjdXJhY3kpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiaW1wb3J0IHBhcnNlQ29kZSBmcm9tICcuL3BhcnNlQ29kZSc7XG5pbXBvcnQgZXh0ZW5kIGZyb20gJy4vZXh0ZW5kJztcbmltcG9ydCBwcm9qZWN0aW9ucyBmcm9tICcuL3Byb2plY3Rpb25zJztcbmltcG9ydCB7c3BoZXJlIGFzIGRjX3NwaGVyZSwgZWNjZW50cmljaXR5IGFzIGRjX2VjY2VudHJpY2l0eX0gZnJvbSAnLi9kZXJpdmVDb25zdGFudHMnO1xuaW1wb3J0IERhdHVtIGZyb20gJy4vY29uc3RhbnRzL0RhdHVtJztcbmltcG9ydCBkYXR1bSBmcm9tICcuL2RhdHVtJztcbmltcG9ydCBtYXRjaCBmcm9tICcuL21hdGNoJztcblxuZnVuY3Rpb24gUHJvamVjdGlvbihzcnNDb2RlLGNhbGxiYWNrKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9qZWN0aW9uKSkge1xuICAgIHJldHVybiBuZXcgUHJvamVjdGlvbihzcnNDb2RlKTtcbiAgfVxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKGVycm9yKXtcbiAgICBpZihlcnJvcil7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH07XG4gIHZhciBqc29uID0gcGFyc2VDb2RlKHNyc0NvZGUpO1xuICBpZih0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpe1xuICAgIGNhbGxiYWNrKHNyc0NvZGUpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgb3VyUHJvaiA9IFByb2plY3Rpb24ucHJvamVjdGlvbnMuZ2V0KGpzb24ucHJvak5hbWUpO1xuICBpZighb3VyUHJvail7XG4gICAgY2FsbGJhY2soc3JzQ29kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChqc29uLmRhdHVtQ29kZSAmJiBqc29uLmRhdHVtQ29kZSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIGRhdHVtRGVmID0gbWF0Y2goRGF0dW0sIGpzb24uZGF0dW1Db2RlKTtcbiAgICBpZiAoZGF0dW1EZWYpIHtcbiAgICAgIGpzb24uZGF0dW1fcGFyYW1zID0gZGF0dW1EZWYudG93Z3M4NCA/IGRhdHVtRGVmLnRvd2dzODQuc3BsaXQoJywnKSA6IG51bGw7XG4gICAgICBqc29uLmVsbHBzID0gZGF0dW1EZWYuZWxsaXBzZTtcbiAgICAgIGpzb24uZGF0dW1OYW1lID0gZGF0dW1EZWYuZGF0dW1OYW1lID8gZGF0dW1EZWYuZGF0dW1OYW1lIDoganNvbi5kYXR1bUNvZGU7XG4gICAgfVxuICB9XG4gIGpzb24uazAgPSBqc29uLmswIHx8IDEuMDtcbiAganNvbi5heGlzID0ganNvbi5heGlzIHx8ICdlbnUnO1xuICBqc29uLmVsbHBzID0ganNvbi5lbGxwcyB8fCAnd2dzODQnO1xuICB2YXIgc3BoZXJlXyA9IGRjX3NwaGVyZShqc29uLmEsIGpzb24uYiwganNvbi5yZiwganNvbi5lbGxwcywganNvbi5zcGhlcmUpO1xuICB2YXIgZWNjID0gZGNfZWNjZW50cmljaXR5KHNwaGVyZV8uYSwgc3BoZXJlXy5iLCBzcGhlcmVfLnJmLCBqc29uLlJfQSk7XG4gIHZhciBkYXR1bU9iaiA9IGpzb24uZGF0dW0gfHwgZGF0dW0oanNvbi5kYXR1bUNvZGUsIGpzb24uZGF0dW1fcGFyYW1zLCBzcGhlcmVfLmEsIHNwaGVyZV8uYiwgZWNjLmVzLCBlY2MuZXAyKTtcblxuICBleHRlbmQodGhpcywganNvbik7IC8vIHRyYW5zZmVyIGV2ZXJ5dGhpbmcgb3ZlciBmcm9tIHRoZSBwcm9qZWN0aW9uIGJlY2F1c2Ugd2UgZG9uJ3Qga25vdyB3aGF0IHdlJ2xsIG5lZWRcbiAgZXh0ZW5kKHRoaXMsIG91clByb2opOyAvLyB0cmFuc2ZlciBhbGwgdGhlIG1ldGhvZHMgZnJvbSB0aGUgcHJvamVjdGlvblxuXG4gIC8vIGNvcHkgdGhlIDQgdGhpbmdzIG92ZXIgd2UgY2FsdWxhdGVkIGluIGRlcml2ZUNvbnN0YW50cy5zcGhlcmVcbiAgdGhpcy5hID0gc3BoZXJlXy5hO1xuICB0aGlzLmIgPSBzcGhlcmVfLmI7XG4gIHRoaXMucmYgPSBzcGhlcmVfLnJmO1xuICB0aGlzLnNwaGVyZSA9IHNwaGVyZV8uc3BoZXJlO1xuXG4gIC8vIGNvcHkgdGhlIDMgdGhpbmdzIHdlIGNhbGN1bGF0ZWQgaW4gZGVyaXZlQ29uc3RhbnRzLmVjY2VudHJpY2l0eVxuICB0aGlzLmVzID0gZWNjLmVzO1xuICB0aGlzLmUgPSBlY2MuZTtcbiAgdGhpcy5lcDIgPSBlY2MuZXAyO1xuXG4gIC8vIGFkZCBpbiB0aGUgZGF0dW0gb2JqZWN0XG4gIHRoaXMuZGF0dW0gPSBkYXR1bU9iajtcblxuICAvLyBpbml0IHRoZSBwcm9qZWN0aW9uXG4gIHRoaXMuaW5pdCgpO1xuXG4gIC8vIGxlZ2VjeSBjYWxsYmFjayBmcm9tIGJhY2sgaW4gdGhlIGRheSB3aGVuIGl0IHdlbnQgdG8gc3BhdGlhbHJlZmVyZW5jZS5vcmdcbiAgY2FsbGJhY2sobnVsbCwgdGhpcyk7XG5cbn1cblByb2plY3Rpb24ucHJvamVjdGlvbnMgPSBwcm9qZWN0aW9ucztcblByb2plY3Rpb24ucHJvamVjdGlvbnMuc3RhcnQoKTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Rpb247XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjcnMsIGRlbm9ybSwgcG9pbnQpIHtcbiAgdmFyIHhpbiA9IHBvaW50LngsXG4gICAgeWluID0gcG9pbnQueSxcbiAgICB6aW4gPSBwb2ludC56IHx8IDAuMDtcbiAgdmFyIHYsIHQsIGk7XG4gIHZhciBvdXQgPSB7fTtcbiAgZm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGlmIChkZW5vcm0gJiYgaSA9PT0gMiAmJiBwb2ludC56ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgdiA9IHhpbjtcbiAgICAgIGlmIChcImV3XCIuaW5kZXhPZihjcnMuYXhpc1tpXSkgIT09IC0xKSB7XG4gICAgICAgIHQgPSAneCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ID0gJ3knO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgIHYgPSB5aW47XG4gICAgICBpZiAoXCJuc1wiLmluZGV4T2YoY3JzLmF4aXNbaV0pICE9PSAtMSkge1xuICAgICAgICB0ID0gJ3knO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCA9ICd4JztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2ID0gemluO1xuICAgICAgdCA9ICd6JztcbiAgICB9XG4gICAgc3dpdGNoIChjcnMuYXhpc1tpXSkge1xuICAgIGNhc2UgJ2UnOlxuICAgIGNhc2UgJ3cnOlxuICAgIGNhc2UgJ24nOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgb3V0W3RdID0gdjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3UnOlxuICAgICAgaWYgKHBvaW50W3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0LnogPSB2O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZCc6XG4gICAgICBpZiAocG9pbnRbdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvdXQueiA9IC12O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vY29uc29sZS5sb2coXCJFUlJPUjogdW5rbm93IGF4aXMgKFwiK2Nycy5heGlzW2ldK1wiKSAtIGNoZWNrIGRlZmluaXRpb24gb2YgXCIrY3JzLnByb2pOYW1lKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBvaW50KSB7XG4gIGNoZWNrQ29vcmQocG9pbnQueCk7XG4gIGNoZWNrQ29vcmQocG9pbnQueSk7XG59XG5mdW5jdGlvbiBjaGVja0Nvb3JkKG51bSkge1xuICBpZiAodHlwZW9mIE51bWJlci5pc0Zpbml0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobnVtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjb29yZGluYXRlcyBtdXN0IGJlIGZpbml0ZSBudW1iZXJzJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInIHx8IG51bSAhPT0gbnVtIHx8ICFpc0Zpbml0ZShudW0pKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY29vcmRpbmF0ZXMgbXVzdCBiZSBmaW5pdGUgbnVtYmVycycpO1xuICB9XG59XG4iLCJpbXBvcnQge0hBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuaW1wb3J0IHNpZ24gZnJvbSAnLi9zaWduJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gKE1hdGguYWJzKHgpIDwgSEFMRl9QSSkgPyB4IDogKHggLSAoc2lnbih4KSAqIE1hdGguUEkpKTtcbn1cbiIsIlxuaW1wb3J0IHtUV09fUEksIFNQSX0gZnJvbSAnLi4vY29uc3RhbnRzL3ZhbHVlcyc7XG5pbXBvcnQgc2lnbiBmcm9tICcuL3NpZ24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiAoTWF0aC5hYnMoeCkgPD0gU1BJKSA/IHggOiAoeCAtIChzaWduKHgpICogVFdPX1BJKSk7XG59XG4iLCJpbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuL2FkanVzdF9sb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih6b25lLCBsb24pIHtcbiAgaWYgKHpvbmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHpvbmUgPSBNYXRoLmZsb29yKChhZGp1c3RfbG9uKGxvbikgKyBNYXRoLlBJKSAqIDMwIC8gTWF0aC5QSSkgKyAxO1xuXG4gICAgaWYgKHpvbmUgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKHpvbmUgPiA2MCkge1xuICAgICAgcmV0dXJuIDYwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gem9uZTtcbn1cbiIsImltcG9ydCBoeXBvdCBmcm9tICcuL2h5cG90JztcbmltcG9ydCBsb2cxcHkgZnJvbSAnLi9sb2cxcHknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHZhciB5ID0gTWF0aC5hYnMoeCk7XG4gIHkgPSBsb2cxcHkoeSAqICgxICsgeSAvIChoeXBvdCgxLCB5KSArIDEpKSk7XG5cbiAgcmV0dXJuIHggPCAwID8gLXkgOiB5O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICBpZiAoTWF0aC5hYnMoeCkgPiAxKSB7XG4gICAgeCA9ICh4ID4gMSkgPyAxIDogLTE7XG4gIH1cbiAgcmV0dXJuIE1hdGguYXNpbih4KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcCwgYXJnX3IpIHtcbiAgdmFyIHIgPSAyICogTWF0aC5jb3MoYXJnX3IpO1xuICB2YXIgaSA9IHBwLmxlbmd0aCAtIDE7XG4gIHZhciBocjEgPSBwcFtpXTtcbiAgdmFyIGhyMiA9IDA7XG4gIHZhciBocjtcblxuICB3aGlsZSAoLS1pID49IDApIHtcbiAgICBociA9IC1ocjIgKyByICogaHIxICsgcHBbaV07XG4gICAgaHIyID0gaHIxO1xuICAgIGhyMSA9IGhyO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc2luKGFyZ19yKSAqIGhyO1xufVxuIiwiaW1wb3J0IHNpbmggZnJvbSAnLi9zaW5oJztcbmltcG9ydCBjb3NoIGZyb20gJy4vY29zaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBwLCBhcmdfciwgYXJnX2kpIHtcbiAgdmFyIHNpbl9hcmdfciA9IE1hdGguc2luKGFyZ19yKTtcbiAgdmFyIGNvc19hcmdfciA9IE1hdGguY29zKGFyZ19yKTtcbiAgdmFyIHNpbmhfYXJnX2kgPSBzaW5oKGFyZ19pKTtcbiAgdmFyIGNvc2hfYXJnX2kgPSBjb3NoKGFyZ19pKTtcbiAgdmFyIHIgPSAyICogY29zX2FyZ19yICogY29zaF9hcmdfaTtcbiAgdmFyIGkgPSAtMiAqIHNpbl9hcmdfciAqIHNpbmhfYXJnX2k7XG4gIHZhciBqID0gcHAubGVuZ3RoIC0gMTtcbiAgdmFyIGhyID0gcHBbal07XG4gIHZhciBoaTEgPSAwO1xuICB2YXIgaHIxID0gMDtcbiAgdmFyIGhpID0gMDtcbiAgdmFyIGhyMjtcbiAgdmFyIGhpMjtcblxuICB3aGlsZSAoLS1qID49IDApIHtcbiAgICBocjIgPSBocjE7XG4gICAgaGkyID0gaGkxO1xuICAgIGhyMSA9IGhyO1xuICAgIGhpMSA9IGhpO1xuICAgIGhyID0gLWhyMiArIHIgKiBocjEgLSBpICogaGkxICsgcHBbal07XG4gICAgaGkgPSAtaGkyICsgaSAqIGhyMSArIHIgKiBoaTE7XG4gIH1cblxuICByID0gc2luX2FyZ19yICogY29zaF9hcmdfaTtcbiAgaSA9IGNvc19hcmdfciAqIHNpbmhfYXJnX2k7XG5cbiAgcmV0dXJuIFtyICogaHIgLSBpICogaGksIHIgKiBoaSArIGkgKiBocl07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHZhciByID0gTWF0aC5leHAoeCk7XG4gIHIgPSAociArIDEgLyByKSAvIDI7XG4gIHJldHVybiByO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuICgxIC0gMC4yNSAqIHggKiAoMSArIHggLyAxNiAqICgzICsgMS4yNSAqIHgpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gKDAuMzc1ICogeCAqICgxICsgMC4yNSAqIHggKiAoMSArIDAuNDY4NzUgKiB4KSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuICgwLjA1ODU5Mzc1ICogeCAqIHggKiAoMSArIDAuNzUgKiB4KSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gKHggKiB4ICogeCAqICgzNSAvIDMwNzIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBlLCBzaW5waGkpIHtcbiAgdmFyIHRlbXAgPSBlICogc2lucGhpO1xuICByZXR1cm4gYSAvIE1hdGguc3FydCgxIC0gdGVtcCAqIHRlbXApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBwLCBCKSB7XG4gIHZhciBjb3NfMkIgPSAyICogTWF0aC5jb3MoMiAqIEIpO1xuICB2YXIgaSA9IHBwLmxlbmd0aCAtIDE7XG4gIHZhciBoMSA9IHBwW2ldO1xuICB2YXIgaDIgPSAwO1xuICB2YXIgaDtcblxuICB3aGlsZSAoLS1pID49IDApIHtcbiAgICBoID0gLWgyICsgY29zXzJCICogaDEgKyBwcFtpXTtcbiAgICBoMiA9IGgxO1xuICAgIGgxID0gaDtcbiAgfVxuXG4gIHJldHVybiAoQiArIGggKiBNYXRoLnNpbigyICogQikpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgeSkge1xuICB4ID0gTWF0aC5hYnMoeCk7XG4gIHkgPSBNYXRoLmFicyh5KTtcbiAgdmFyIGEgPSBNYXRoLm1heCh4LCB5KTtcbiAgdmFyIGIgPSBNYXRoLm1pbih4LCB5KSAvIChhID8gYSA6IDEpO1xuXG4gIHJldHVybiBhICogTWF0aC5zcXJ0KDEgKyBNYXRoLnBvdyhiLCAyKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtbCwgZTAsIGUxLCBlMiwgZTMpIHtcbiAgdmFyIHBoaTtcbiAgdmFyIGRwaGk7XG5cbiAgcGhpID0gbWwgLyBlMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XG4gICAgZHBoaSA9IChtbCAtIChlMCAqIHBoaSAtIGUxICogTWF0aC5zaW4oMiAqIHBoaSkgKyBlMiAqIE1hdGguc2luKDQgKiBwaGkpIC0gZTMgKiBNYXRoLnNpbig2ICogcGhpKSkpIC8gKGUwIC0gMiAqIGUxICogTWF0aC5jb3MoMiAqIHBoaSkgKyA0ICogZTIgKiBNYXRoLmNvcyg0ICogcGhpKSAtIDYgKiBlMyAqIE1hdGguY29zKDYgKiBwaGkpKTtcbiAgICBwaGkgKz0gZHBoaTtcbiAgICBpZiAoTWF0aC5hYnMoZHBoaSkgPD0gMC4wMDAwMDAwMDAxKSB7XG4gICAgICByZXR1cm4gcGhpO1xuICAgIH1cbiAgfVxuXG4gIC8vLi5yZXBvcnRFcnJvcihcIklNTEZOLUNPTlY6TGF0aXR1ZGUgZmFpbGVkIHRvIGNvbnZlcmdlIGFmdGVyIDE1IGl0ZXJhdGlvbnNcIik7XG4gIHJldHVybiBOYU47XG59IiwiaW1wb3J0IHtIQUxGX1BJfSBmcm9tICcuLi9jb25zdGFudHMvdmFsdWVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWNjZW50LCBxKSB7XG4gIHZhciB0ZW1wID0gMSAtICgxIC0gZWNjZW50ICogZWNjZW50KSAvICgyICogZWNjZW50KSAqIE1hdGgubG9nKCgxIC0gZWNjZW50KSAvICgxICsgZWNjZW50KSk7XG4gIGlmIChNYXRoLmFicyhNYXRoLmFicyhxKSAtIHRlbXApIDwgMS4wRS02KSB7XG4gICAgaWYgKHEgPCAwKSB7XG4gICAgICByZXR1cm4gKC0xICogSEFMRl9QSSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIEhBTEZfUEk7XG4gICAgfVxuICB9XG4gIC8vdmFyIHBoaSA9IDAuNSogcS8oMS1lY2NlbnQqZWNjZW50KTtcbiAgdmFyIHBoaSA9IE1hdGguYXNpbigwLjUgKiBxKTtcbiAgdmFyIGRwaGk7XG4gIHZhciBzaW5fcGhpO1xuICB2YXIgY29zX3BoaTtcbiAgdmFyIGNvbjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgc2luX3BoaSA9IE1hdGguc2luKHBoaSk7XG4gICAgY29zX3BoaSA9IE1hdGguY29zKHBoaSk7XG4gICAgY29uID0gZWNjZW50ICogc2luX3BoaTtcbiAgICBkcGhpID0gTWF0aC5wb3coMSAtIGNvbiAqIGNvbiwgMikgLyAoMiAqIGNvc19waGkpICogKHEgLyAoMSAtIGVjY2VudCAqIGVjY2VudCkgLSBzaW5fcGhpIC8gKDEgLSBjb24gKiBjb24pICsgMC41IC8gZWNjZW50ICogTWF0aC5sb2coKDEgLSBjb24pIC8gKDEgKyBjb24pKSk7XG4gICAgcGhpICs9IGRwaGk7XG4gICAgaWYgKE1hdGguYWJzKGRwaGkpIDw9IDAuMDAwMDAwMDAwMSkge1xuICAgICAgcmV0dXJuIHBoaTtcbiAgICB9XG4gIH1cblxuICAvL2NvbnNvbGUubG9nKFwiSVFTRk4tQ09OVjpMYXRpdHVkZSBmYWlsZWQgdG8gY29udmVyZ2UgYWZ0ZXIgMzAgaXRlcmF0aW9uc1wiKTtcbiAgcmV0dXJuIE5hTjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgdmFyIHkgPSAxICsgeDtcbiAgdmFyIHogPSB5IC0gMTtcblxuICByZXR1cm4geiA9PT0gMCA/IHggOiB4ICogTWF0aC5sb2coeSkgLyB6O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZTAsIGUxLCBlMiwgZTMsIHBoaSkge1xuICByZXR1cm4gKGUwICogcGhpIC0gZTEgKiBNYXRoLnNpbigyICogcGhpKSArIGUyICogTWF0aC5zaW4oNCAqIHBoaSkgLSBlMyAqIE1hdGguc2luKDYgKiBwaGkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlY2NlbnQsIHNpbnBoaSwgY29zcGhpKSB7XG4gIHZhciBjb24gPSBlY2NlbnQgKiBzaW5waGk7XG4gIHJldHVybiBjb3NwaGkgLyAoTWF0aC5zcXJ0KDEgLSBjb24gKiBjb24pKTtcbn0iLCJpbXBvcnQge0hBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlY2NlbnQsIHRzKSB7XG4gIHZhciBlY2NudGggPSAwLjUgKiBlY2NlbnQ7XG4gIHZhciBjb24sIGRwaGk7XG4gIHZhciBwaGkgPSBIQUxGX1BJIC0gMiAqIE1hdGguYXRhbih0cyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IDE1OyBpKyspIHtcbiAgICBjb24gPSBlY2NlbnQgKiBNYXRoLnNpbihwaGkpO1xuICAgIGRwaGkgPSBIQUxGX1BJIC0gMiAqIE1hdGguYXRhbih0cyAqIChNYXRoLnBvdygoKDEgLSBjb24pIC8gKDEgKyBjb24pKSwgZWNjbnRoKSkpIC0gcGhpO1xuICAgIHBoaSArPSBkcGhpO1xuICAgIGlmIChNYXRoLmFicyhkcGhpKSA8PSAwLjAwMDAwMDAwMDEpIHtcbiAgICAgIHJldHVybiBwaGk7XG4gICAgfVxuICB9XG4gIC8vY29uc29sZS5sb2coXCJwaGkyeiBoYXMgTm9Db252ZXJnZW5jZVwiKTtcbiAgcmV0dXJuIC05OTk5O1xufVxuIiwidmFyIEMwMCA9IDE7XG52YXIgQzAyID0gMC4yNTtcbnZhciBDMDQgPSAwLjA0Njg3NTtcbnZhciBDMDYgPSAwLjAxOTUzMTI1O1xudmFyIEMwOCA9IDAuMDEwNjgxMTUyMzQzNzU7XG52YXIgQzIyID0gMC43NTtcbnZhciBDNDQgPSAwLjQ2ODc1O1xudmFyIEM0NiA9IDAuMDEzMDIwODMzMzMzMzMzMzMzMzM7XG52YXIgQzQ4ID0gMC4wMDcxMjA3NjgyMjkxNjY2NjY2NjtcbnZhciBDNjYgPSAwLjM2NDU4MzMzMzMzMzMzMzMzMzMzO1xudmFyIEM2OCA9IDAuMDA1Njk2NjE0NTgzMzMzMzMzMzM7XG52YXIgQzg4ID0gMC4zMDc2MTcxODc1O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlcykge1xuICB2YXIgZW4gPSBbXTtcbiAgZW5bMF0gPSBDMDAgLSBlcyAqIChDMDIgKyBlcyAqIChDMDQgKyBlcyAqIChDMDYgKyBlcyAqIEMwOCkpKTtcbiAgZW5bMV0gPSBlcyAqIChDMjIgLSBlcyAqIChDMDQgKyBlcyAqIChDMDYgKyBlcyAqIEMwOCkpKTtcbiAgdmFyIHQgPSBlcyAqIGVzO1xuICBlblsyXSA9IHQgKiAoQzQ0IC0gZXMgKiAoQzQ2ICsgZXMgKiBDNDgpKTtcbiAgdCAqPSBlcztcbiAgZW5bM10gPSB0ICogKEM2NiAtIGVzICogQzY4KTtcbiAgZW5bNF0gPSB0ICogZXMgKiBDODg7XG4gIHJldHVybiBlbjtcbn0iLCJpbXBvcnQgcGpfbWxmbiBmcm9tIFwiLi9wal9tbGZuXCI7XG5pbXBvcnQge0VQU0xOfSBmcm9tICcuLi9jb25zdGFudHMvdmFsdWVzJztcblxudmFyIE1BWF9JVEVSID0gMjA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFyZywgZXMsIGVuKSB7XG4gIHZhciBrID0gMSAvICgxIC0gZXMpO1xuICB2YXIgcGhpID0gYXJnO1xuICBmb3IgKHZhciBpID0gTUFYX0lURVI7IGk7IC0taSkgeyAvKiByYXJlbHkgZ29lcyBvdmVyIDIgaXRlcmF0aW9ucyAqL1xuICAgIHZhciBzID0gTWF0aC5zaW4ocGhpKTtcbiAgICB2YXIgdCA9IDEgLSBlcyAqIHMgKiBzO1xuICAgIC8vdCA9IHRoaXMucGpfbWxmbihwaGksIHMsIE1hdGguY29zKHBoaSksIGVuKSAtIGFyZztcbiAgICAvL3BoaSAtPSB0ICogKHQgKiBNYXRoLnNxcnQodCkpICogaztcbiAgICB0ID0gKHBqX21sZm4ocGhpLCBzLCBNYXRoLmNvcyhwaGkpLCBlbikgLSBhcmcpICogKHQgKiBNYXRoLnNxcnQodCkpICogaztcbiAgICBwaGkgLT0gdDtcbiAgICBpZiAoTWF0aC5hYnModCkgPCBFUFNMTikge1xuICAgICAgcmV0dXJuIHBoaTtcbiAgICB9XG4gIH1cbiAgLy8uLnJlcG9ydEVycm9yKFwiY2Fzczpwal9pbnZfbWxmbjogQ29udmVyZ2VuY2UgZXJyb3JcIik7XG4gIHJldHVybiBwaGk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwaGksIHNwaGksIGNwaGksIGVuKSB7XG4gIGNwaGkgKj0gc3BoaTtcbiAgc3BoaSAqPSBzcGhpO1xuICByZXR1cm4gKGVuWzBdICogcGhpIC0gY3BoaSAqIChlblsxXSArIHNwaGkgKiAoZW5bMl0gKyBzcGhpICogKGVuWzNdICsgc3BoaSAqIGVuWzRdKSkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlY2NlbnQsIHNpbnBoaSkge1xuICB2YXIgY29uO1xuICBpZiAoZWNjZW50ID4gMS4wZS03KSB7XG4gICAgY29uID0gZWNjZW50ICogc2lucGhpO1xuICAgIHJldHVybiAoKDEgLSBlY2NlbnQgKiBlY2NlbnQpICogKHNpbnBoaSAvICgxIC0gY29uICogY29uKSAtICgwLjUgLyBlY2NlbnQpICogTWF0aC5sb2coKDEgLSBjb24pIC8gKDEgKyBjb24pKSkpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAoMiAqIHNpbnBoaSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4PDAgPyAtMSA6IDE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICB2YXIgciA9IE1hdGguZXhwKHgpO1xuICByID0gKHIgLSAxIC8gcikgLyAyO1xuICByZXR1cm4gcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlc2lucCwgZXhwKSB7XG4gIHJldHVybiAoTWF0aC5wb3coKDEgLSBlc2lucCkgLyAoMSArIGVzaW5wKSwgZXhwKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFycmF5KXtcbiAgdmFyIG91dCA9IHtcbiAgICB4OiBhcnJheVswXSxcbiAgICB5OiBhcnJheVsxXVxuICB9O1xuICBpZiAoYXJyYXkubGVuZ3RoPjIpIHtcbiAgICBvdXQueiA9IGFycmF5WzJdO1xuICB9XG4gIGlmIChhcnJheS5sZW5ndGg+Mykge1xuICAgIG91dC5tID0gYXJyYXlbM107XG4gIH1cbiAgcmV0dXJuIG91dDtcbn0iLCJpbXBvcnQge0hBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlY2NlbnQsIHBoaSwgc2lucGhpKSB7XG4gIHZhciBjb24gPSBlY2NlbnQgKiBzaW5waGk7XG4gIHZhciBjb20gPSAwLjUgKiBlY2NlbnQ7XG4gIGNvbiA9IE1hdGgucG93KCgoMSAtIGNvbikgLyAoMSArIGNvbikpLCBjb20pO1xuICByZXR1cm4gKE1hdGgudGFuKDAuNSAqIChIQUxGX1BJIC0gcGhpKSkgLyBjb24pO1xufVxuIiwidmFyIGV4cG9ydHMgPSB7fTtcbmV4cG9ydCB7ZXhwb3J0cyBhcyBkZWZhdWx0fTtcbmV4cG9ydHMud2dzODQgPSB7XG4gIHRvd2dzODQ6IFwiMCwwLDBcIixcbiAgZWxsaXBzZTogXCJXR1M4NFwiLFxuICBkYXR1bU5hbWU6IFwiV0dTODRcIlxufTtcblxuZXhwb3J0cy5jaDE5MDMgPSB7XG4gIHRvd2dzODQ6IFwiNjc0LjM3NCwxNS4wNTYsNDA1LjM0NlwiLFxuICBlbGxpcHNlOiBcImJlc3NlbFwiLFxuICBkYXR1bU5hbWU6IFwic3dpc3NcIlxufTtcblxuZXhwb3J0cy5nZ3JzODcgPSB7XG4gIHRvd2dzODQ6IFwiLTE5OS44Nyw3NC43OSwyNDYuNjJcIixcbiAgZWxsaXBzZTogXCJHUlM4MFwiLFxuICBkYXR1bU5hbWU6IFwiR3JlZWtfR2VvZGV0aWNfUmVmZXJlbmNlX1N5c3RlbV8xOTg3XCJcbn07XG5cbmV4cG9ydHMubmFkODMgPSB7XG4gIHRvd2dzODQ6IFwiMCwwLDBcIixcbiAgZWxsaXBzZTogXCJHUlM4MFwiLFxuICBkYXR1bU5hbWU6IFwiTm9ydGhfQW1lcmljYW5fRGF0dW1fMTk4M1wiXG59O1xuXG5leHBvcnRzLm5hZDI3ID0ge1xuICBuYWRncmlkczogXCJAY29udXMsQGFsYXNrYSxAbnR2Ml8wLmdzYixAbnR2MV9jYW4uZGF0XCIsXG4gIGVsbGlwc2U6IFwiY2xyazY2XCIsXG4gIGRhdHVtTmFtZTogXCJOb3J0aF9BbWVyaWNhbl9EYXR1bV8xOTI3XCJcbn07XG5cbmV4cG9ydHMucG90c2RhbSA9IHtcbiAgdG93Z3M4NDogXCI2MDYuMCwyMy4wLDQxMy4wXCIsXG4gIGVsbGlwc2U6IFwiYmVzc2VsXCIsXG4gIGRhdHVtTmFtZTogXCJQb3RzZGFtIFJhdWVuYmVyZyAxOTUwIERIRE5cIlxufTtcblxuZXhwb3J0cy5jYXJ0aGFnZSA9IHtcbiAgdG93Z3M4NDogXCItMjYzLjAsNi4wLDQzMS4wXCIsXG4gIGVsbGlwc2U6IFwiY2xhcms4MFwiLFxuICBkYXR1bU5hbWU6IFwiQ2FydGhhZ2UgMTkzNCBUdW5pc2lhXCJcbn07XG5cbmV4cG9ydHMuaGVybWFubnNrb2dlbCA9IHtcbiAgdG93Z3M4NDogXCI2NTMuMCwtMjEyLjAsNDQ5LjBcIixcbiAgZWxsaXBzZTogXCJiZXNzZWxcIixcbiAgZGF0dW1OYW1lOiBcIkhlcm1hbm5za29nZWxcIlxufTtcblxuZXhwb3J0cy5vc25pNTIgPSB7XG4gIHRvd2dzODQ6IFwiNDgyLjUzMCwtMTMwLjU5Niw1NjQuNTU3LC0xLjA0MiwtMC4yMTQsLTAuNjMxLDguMTVcIixcbiAgZWxsaXBzZTogXCJhaXJ5XCIsXG4gIGRhdHVtTmFtZTogXCJJcmlzaCBOYXRpb25hbFwiXG59O1xuXG5leHBvcnRzLmlyZTY1ID0ge1xuICB0b3dnczg0OiBcIjQ4Mi41MzAsLTEzMC41OTYsNTY0LjU1NywtMS4wNDIsLTAuMjE0LC0wLjYzMSw4LjE1XCIsXG4gIGVsbGlwc2U6IFwibW9kX2FpcnlcIixcbiAgZGF0dW1OYW1lOiBcIklyZWxhbmQgMTk2NVwiXG59O1xuXG5leHBvcnRzLnJhc3NhZGlyYW4gPSB7XG4gIHRvd2dzODQ6IFwiLTEzMy42MywtMTU3LjUsLTE1OC42MlwiLFxuICBlbGxpcHNlOiBcImludGxcIixcbiAgZGF0dW1OYW1lOiBcIlJhc3NhZGlyYW5cIlxufTtcblxuZXhwb3J0cy5uemdkNDkgPSB7XG4gIHRvd2dzODQ6IFwiNTkuNDcsLTUuMDQsMTg3LjQ0LDAuNDcsLTAuMSwxLjAyNCwtNC41OTkzXCIsXG4gIGVsbGlwc2U6IFwiaW50bFwiLFxuICBkYXR1bU5hbWU6IFwiTmV3IFplYWxhbmQgR2VvZGV0aWMgRGF0dW0gMTk0OVwiXG59O1xuXG5leHBvcnRzLm9zZ2IzNiA9IHtcbiAgdG93Z3M4NDogXCI0NDYuNDQ4LC0xMjUuMTU3LDU0Mi4wNjAsMC4xNTAyLDAuMjQ3MCwwLjg0MjEsLTIwLjQ4OTRcIixcbiAgZWxsaXBzZTogXCJhaXJ5XCIsXG4gIGRhdHVtTmFtZTogXCJBaXJ5IDE4MzBcIlxufTtcblxuZXhwb3J0cy5zX2p0c2sgPSB7XG4gIHRvd2dzODQ6IFwiNTg5LDc2LDQ4MFwiLFxuICBlbGxpcHNlOiAnYmVzc2VsJyxcbiAgZGF0dW1OYW1lOiAnUy1KVFNLIChGZXJybyknXG59O1xuXG5leHBvcnRzLmJlZHVhcmFtID0ge1xuICB0b3dnczg0OiAnLTEwNiwtODcsMTg4JyxcbiAgZWxsaXBzZTogJ2Nscms4MCcsXG4gIGRhdHVtTmFtZTogJ0JlZHVhcmFtJ1xufTtcblxuZXhwb3J0cy5ndW51bmdfc2VnYXJhID0ge1xuICB0b3dnczg0OiAnLTQwMyw2ODQsNDEnLFxuICBlbGxpcHNlOiAnYmVzc2VsJyxcbiAgZGF0dW1OYW1lOiAnR3VudW5nIFNlZ2FyYSBKYWthcnRhJ1xufTtcblxuZXhwb3J0cy5ybmI3MiA9IHtcbiAgdG93Z3M4NDogXCIxMDYuODY5LC01Mi4yOTc4LDEwMy43MjQsLTAuMzM2NTcsMC40NTY5NTUsLTEuODQyMTgsMVwiLFxuICBlbGxpcHNlOiBcImludGxcIixcbiAgZGF0dW1OYW1lOiBcIlJlc2VhdSBOYXRpb25hbCBCZWxnZSAxOTcyXCJcbn07XG4iLCJ2YXIgZXhwb3J0cyA9IHt9O1xuZXhwb3J0IHtleHBvcnRzIGFzIGRlZmF1bHR9O1xuZXhwb3J0cy5NRVJJVCA9IHtcbiAgYTogNjM3ODEzNy4wLFxuICByZjogMjk4LjI1NyxcbiAgZWxsaXBzZU5hbWU6IFwiTUVSSVQgMTk4M1wiXG59O1xuXG5leHBvcnRzLlNHUzg1ID0ge1xuICBhOiA2Mzc4MTM2LjAsXG4gIHJmOiAyOTguMjU3LFxuICBlbGxpcHNlTmFtZTogXCJTb3ZpZXQgR2VvZGV0aWMgU3lzdGVtIDg1XCJcbn07XG5cbmV4cG9ydHMuR1JTODAgPSB7XG4gIGE6IDYzNzgxMzcuMCxcbiAgcmY6IDI5OC4yNTcyMjIxMDEsXG4gIGVsbGlwc2VOYW1lOiBcIkdSUyAxOTgwKElVR0csIDE5ODApXCJcbn07XG5cbmV4cG9ydHMuSUFVNzYgPSB7XG4gIGE6IDYzNzgxNDAuMCxcbiAgcmY6IDI5OC4yNTcsXG4gIGVsbGlwc2VOYW1lOiBcIklBVSAxOTc2XCJcbn07XG5cbmV4cG9ydHMuYWlyeSA9IHtcbiAgYTogNjM3NzU2My4zOTYsXG4gIGI6IDYzNTYyNTYuOTEwLFxuICBlbGxpcHNlTmFtZTogXCJBaXJ5IDE4MzBcIlxufTtcblxuZXhwb3J0cy5BUEw0ID0ge1xuICBhOiA2Mzc4MTM3LFxuICByZjogMjk4LjI1LFxuICBlbGxpcHNlTmFtZTogXCJBcHBsLiBQaHlzaWNzLiAxOTY1XCJcbn07XG5cbmV4cG9ydHMuTldMOUQgPSB7XG4gIGE6IDYzNzgxNDUuMCxcbiAgcmY6IDI5OC4yNSxcbiAgZWxsaXBzZU5hbWU6IFwiTmF2YWwgV2VhcG9ucyBMYWIuLCAxOTY1XCJcbn07XG5cbmV4cG9ydHMubW9kX2FpcnkgPSB7XG4gIGE6IDYzNzczNDAuMTg5LFxuICBiOiA2MzU2MDM0LjQ0NixcbiAgZWxsaXBzZU5hbWU6IFwiTW9kaWZpZWQgQWlyeVwiXG59O1xuXG5leHBvcnRzLmFuZHJhZSA9IHtcbiAgYTogNjM3NzEwNC40MyxcbiAgcmY6IDMwMC4wLFxuICBlbGxpcHNlTmFtZTogXCJBbmRyYWUgMTg3NiAoRGVuLiwgSWNsbmQuKVwiXG59O1xuXG5leHBvcnRzLmF1c3RfU0EgPSB7XG4gIGE6IDYzNzgxNjAuMCxcbiAgcmY6IDI5OC4yNSxcbiAgZWxsaXBzZU5hbWU6IFwiQXVzdHJhbGlhbiBOYXRsICYgUy4gQW1lci4gMTk2OVwiXG59O1xuXG5leHBvcnRzLkdSUzY3ID0ge1xuICBhOiA2Mzc4MTYwLjAsXG4gIHJmOiAyOTguMjQ3MTY3NDI3MCxcbiAgZWxsaXBzZU5hbWU6IFwiR1JTIDY3KElVR0cgMTk2NylcIlxufTtcblxuZXhwb3J0cy5iZXNzZWwgPSB7XG4gIGE6IDYzNzczOTcuMTU1LFxuICByZjogMjk5LjE1MjgxMjgsXG4gIGVsbGlwc2VOYW1lOiBcIkJlc3NlbCAxODQxXCJcbn07XG5cbmV4cG9ydHMuYmVzc19uYW0gPSB7XG4gIGE6IDYzNzc0ODMuODY1LFxuICByZjogMjk5LjE1MjgxMjgsXG4gIGVsbGlwc2VOYW1lOiBcIkJlc3NlbCAxODQxIChOYW1pYmlhKVwiXG59O1xuXG5leHBvcnRzLmNscms2NiA9IHtcbiAgYTogNjM3ODIwNi40LFxuICBiOiA2MzU2NTgzLjgsXG4gIGVsbGlwc2VOYW1lOiBcIkNsYXJrZSAxODY2XCJcbn07XG5cbmV4cG9ydHMuY2xyazgwID0ge1xuICBhOiA2Mzc4MjQ5LjE0NSxcbiAgcmY6IDI5My40NjYzLFxuICBlbGxpcHNlTmFtZTogXCJDbGFya2UgMTg4MCBtb2QuXCJcbn07XG5cbmV4cG9ydHMuY2xyazU4ID0ge1xuICBhOiA2Mzc4MjkzLjY0NTIwODc1OSxcbiAgcmY6IDI5NC4yNjA2NzYzNjkyNjU0LFxuICBlbGxpcHNlTmFtZTogXCJDbGFya2UgMTg1OFwiXG59O1xuXG5leHBvcnRzLkNQTSA9IHtcbiAgYTogNjM3NTczOC43LFxuICByZjogMzM0LjI5LFxuICBlbGxpcHNlTmFtZTogXCJDb21tLiBkZXMgUG9pZHMgZXQgTWVzdXJlcyAxNzk5XCJcbn07XG5cbmV4cG9ydHMuZGVsbWJyID0ge1xuICBhOiA2Mzc2NDI4LjAsXG4gIHJmOiAzMTEuNSxcbiAgZWxsaXBzZU5hbWU6IFwiRGVsYW1icmUgMTgxMCAoQmVsZ2l1bSlcIlxufTtcblxuZXhwb3J0cy5lbmdlbGlzID0ge1xuICBhOiA2Mzc4MTM2LjA1LFxuICByZjogMjk4LjI1NjYsXG4gIGVsbGlwc2VOYW1lOiBcIkVuZ2VsaXMgMTk4NVwiXG59O1xuXG5leHBvcnRzLmV2cnN0MzAgPSB7XG4gIGE6IDYzNzcyNzYuMzQ1LFxuICByZjogMzAwLjgwMTcsXG4gIGVsbGlwc2VOYW1lOiBcIkV2ZXJlc3QgMTgzMFwiXG59O1xuXG5leHBvcnRzLmV2cnN0NDggPSB7XG4gIGE6IDYzNzczMDQuMDYzLFxuICByZjogMzAwLjgwMTcsXG4gIGVsbGlwc2VOYW1lOiBcIkV2ZXJlc3QgMTk0OFwiXG59O1xuXG5leHBvcnRzLmV2cnN0NTYgPSB7XG4gIGE6IDYzNzczMDEuMjQzLFxuICByZjogMzAwLjgwMTcsXG4gIGVsbGlwc2VOYW1lOiBcIkV2ZXJlc3QgMTk1NlwiXG59O1xuXG5leHBvcnRzLmV2cnN0NjkgPSB7XG4gIGE6IDYzNzcyOTUuNjY0LFxuICByZjogMzAwLjgwMTcsXG4gIGVsbGlwc2VOYW1lOiBcIkV2ZXJlc3QgMTk2OVwiXG59O1xuXG5leHBvcnRzLmV2cnN0U1MgPSB7XG4gIGE6IDYzNzcyOTguNTU2LFxuICByZjogMzAwLjgwMTcsXG4gIGVsbGlwc2VOYW1lOiBcIkV2ZXJlc3QgKFNhYmFoICYgU2FyYXdhaylcIlxufTtcblxuZXhwb3J0cy5mc2NocjYwID0ge1xuICBhOiA2Mzc4MTY2LjAsXG4gIHJmOiAyOTguMyxcbiAgZWxsaXBzZU5hbWU6IFwiRmlzY2hlciAoTWVyY3VyeSBEYXR1bSkgMTk2MFwiXG59O1xuXG5leHBvcnRzLmZzY2hyNjBtID0ge1xuICBhOiA2Mzc4MTU1LjAsXG4gIHJmOiAyOTguMyxcbiAgZWxsaXBzZU5hbWU6IFwiRmlzY2hlciAxOTYwXCJcbn07XG5cbmV4cG9ydHMuZnNjaHI2OCA9IHtcbiAgYTogNjM3ODE1MC4wLFxuICByZjogMjk4LjMsXG4gIGVsbGlwc2VOYW1lOiBcIkZpc2NoZXIgMTk2OFwiXG59O1xuXG5leHBvcnRzLmhlbG1lcnQgPSB7XG4gIGE6IDYzNzgyMDAuMCxcbiAgcmY6IDI5OC4zLFxuICBlbGxpcHNlTmFtZTogXCJIZWxtZXJ0IDE5MDZcIlxufTtcblxuZXhwb3J0cy5ob3VnaCA9IHtcbiAgYTogNjM3ODI3MC4wLFxuICByZjogMjk3LjAsXG4gIGVsbGlwc2VOYW1lOiBcIkhvdWdoXCJcbn07XG5cbmV4cG9ydHMuaW50bCA9IHtcbiAgYTogNjM3ODM4OC4wLFxuICByZjogMjk3LjAsXG4gIGVsbGlwc2VOYW1lOiBcIkludGVybmF0aW9uYWwgMTkwOSAoSGF5Zm9yZClcIlxufTtcblxuZXhwb3J0cy5rYXVsYSA9IHtcbiAgYTogNjM3ODE2My4wLFxuICByZjogMjk4LjI0LFxuICBlbGxpcHNlTmFtZTogXCJLYXVsYSAxOTYxXCJcbn07XG5cbmV4cG9ydHMubGVyY2ggPSB7XG4gIGE6IDYzNzgxMzkuMCxcbiAgcmY6IDI5OC4yNTcsXG4gIGVsbGlwc2VOYW1lOiBcIkxlcmNoIDE5NzlcIlxufTtcblxuZXhwb3J0cy5tcHJ0cyA9IHtcbiAgYTogNjM5NzMwMC4wLFxuICByZjogMTkxLjAsXG4gIGVsbGlwc2VOYW1lOiBcIk1hdXBlcnRpdXMgMTczOFwiXG59O1xuXG5leHBvcnRzLm5ld19pbnRsID0ge1xuICBhOiA2Mzc4MTU3LjUsXG4gIGI6IDYzNTY3NzIuMixcbiAgZWxsaXBzZU5hbWU6IFwiTmV3IEludGVybmF0aW9uYWwgMTk2N1wiXG59O1xuXG5leHBvcnRzLnBsZXNzaXMgPSB7XG4gIGE6IDYzNzY1MjMuMCxcbiAgcmY6IDYzNTU4NjMuMCxcbiAgZWxsaXBzZU5hbWU6IFwiUGxlc3NpcyAxODE3IChGcmFuY2UpXCJcbn07XG5cbmV4cG9ydHMua3Jhc3MgPSB7XG4gIGE6IDYzNzgyNDUuMCxcbiAgcmY6IDI5OC4zLFxuICBlbGxpcHNlTmFtZTogXCJLcmFzc292c2t5LCAxOTQyXCJcbn07XG5cbmV4cG9ydHMuU0Vhc2lhID0ge1xuICBhOiA2Mzc4MTU1LjAsXG4gIGI6IDYzNTY3NzMuMzIwNSxcbiAgZWxsaXBzZU5hbWU6IFwiU291dGhlYXN0IEFzaWFcIlxufTtcblxuZXhwb3J0cy53YWxiZWNrID0ge1xuICBhOiA2Mzc2ODk2LjAsXG4gIGI6IDYzNTU4MzQuODQ2NyxcbiAgZWxsaXBzZU5hbWU6IFwiV2FsYmVja1wiXG59O1xuXG5leHBvcnRzLldHUzYwID0ge1xuICBhOiA2Mzc4MTY1LjAsXG4gIHJmOiAyOTguMyxcbiAgZWxsaXBzZU5hbWU6IFwiV0dTIDYwXCJcbn07XG5cbmV4cG9ydHMuV0dTNjYgPSB7XG4gIGE6IDYzNzgxNDUuMCxcbiAgcmY6IDI5OC4yNSxcbiAgZWxsaXBzZU5hbWU6IFwiV0dTIDY2XCJcbn07XG5cbmV4cG9ydHMuV0dTNyA9IHtcbiAgYTogNjM3ODEzNS4wLFxuICByZjogMjk4LjI2LFxuICBlbGxpcHNlTmFtZTogXCJXR1MgNzJcIlxufTtcblxuZXhwb3J0IHZhciBXR1M4NCA9IGV4cG9ydHMuV0dTODQgPSB7XG4gIGE6IDYzNzgxMzcuMCxcbiAgcmY6IDI5OC4yNTcyMjM1NjMsXG4gIGVsbGlwc2VOYW1lOiBcIldHUyA4NFwiXG59O1xuXG5leHBvcnRzLnNwaGVyZSA9IHtcbiAgYTogNjM3MDk5Ny4wLFxuICBiOiA2MzcwOTk3LjAsXG4gIGVsbGlwc2VOYW1lOiBcIk5vcm1hbCBTcGhlcmUgKHI9NjM3MDk5NylcIlxufTtcbiIsInZhciBleHBvcnRzID0ge307XG5leHBvcnQge2V4cG9ydHMgYXMgZGVmYXVsdH07XG5cbmV4cG9ydHMuZ3JlZW53aWNoID0gMC4wOyAvL1wiMGRFXCIsXG5leHBvcnRzLmxpc2JvbiA9IC05LjEzMTkwNjExMTExMTsgLy9cIjlkMDcnNTQuODYyXFxcIldcIixcbmV4cG9ydHMucGFyaXMgPSAyLjMzNzIyOTE2NjY2NzsgLy9cIjJkMjAnMTQuMDI1XFxcIkVcIixcbmV4cG9ydHMuYm9nb3RhID0gLTc0LjA4MDkxNjY2NjY2NzsgLy9cIjc0ZDA0JzUxLjNcXFwiV1wiLFxuZXhwb3J0cy5tYWRyaWQgPSAtMy42ODc5Mzg4ODg4ODk7IC8vXCIzZDQxJzE2LjU4XFxcIldcIixcbmV4cG9ydHMucm9tZSA9IDEyLjQ1MjMzMzMzMzMzMzsgLy9cIjEyZDI3JzguNFxcXCJFXCIsXG5leHBvcnRzLmJlcm4gPSA3LjQzOTU4MzMzMzMzMzsgLy9cIjdkMjYnMjIuNVxcXCJFXCIsXG5leHBvcnRzLmpha2FydGEgPSAxMDYuODA3NzE5NDQ0NDQ0OyAvL1wiMTA2ZDQ4JzI3Ljc5XFxcIkVcIixcbmV4cG9ydHMuZmVycm8gPSAtMTcuNjY2NjY2NjY2NjY3OyAvL1wiMTdkNDAnV1wiLFxuZXhwb3J0cy5icnVzc2VscyA9IDQuMzY3OTc1OyAvL1wiNGQyMic0LjcxXFxcIkVcIixcbmV4cG9ydHMuc3RvY2tob2xtID0gMTguMDU4Mjc3Nzc3Nzc4OyAvL1wiMThkMycyOS44XFxcIkVcIixcbmV4cG9ydHMuYXRoZW5zID0gMjMuNzE2MzM3NTsgLy9cIjIzZDQyJzU4LjgxNVxcXCJFXCIsXG5leHBvcnRzLm9zbG8gPSAxMC43MjI5MTY2NjY2Njc7IC8vXCIxMGQ0MycyMi41XFxcIkVcIlxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmdDoge3RvX21ldGVyOiAwLjMwNDh9LFxuICAndXMtZnQnOiB7dG9fbWV0ZXI6IDEyMDAgLyAzOTM3fVxufTtcbiIsImV4cG9ydCB2YXIgUEpEXzNQQVJBTSA9IDE7XG5leHBvcnQgdmFyIFBKRF83UEFSQU0gPSAyO1xuZXhwb3J0IHZhciBQSkRfV0dTODQgPSA0OyAvLyBXR1M4NCBvciBlcXVpdmFsZW50XG5leHBvcnQgdmFyIFBKRF9OT0RBVFVNID0gNTsgLy8gV0dTODQgb3IgZXF1aXZhbGVudFxuZXhwb3J0IHZhciBTRUNfVE9fUkFEID0gNC44NDgxMzY4MTEwOTUzNTk5MzU4OTkxNDEwMjM1N2UtNjtcbmV4cG9ydCB2YXIgSEFMRl9QSSA9IE1hdGguUEkvMjtcbi8vIGVsbGlwb2lkIHBqX3NldF9lbGwuY1xuZXhwb3J0IHZhciBTSVhUSCA9IDAuMTY2NjY2NjY2NjY2NjY2NjY2Nztcbi8qIDEvNiAqL1xuZXhwb3J0IHZhciBSQTQgPSAwLjA0NzIyMjIyMjIyMjIyMjIyMjIyO1xuLyogMTcvMzYwICovXG5leHBvcnQgdmFyIFJBNiA9IDAuMDIyMTU2MDg0NjU2MDg0NjU2MDg7XG5leHBvcnQgdmFyIEVQU0xOID0gMS4wZS0xMDtcbi8vIHlvdSdkIHRoaW5rIHlvdSBjb3VsZCB1c2UgTnVtYmVyLkVQU0lMT04gYWJvdmUgYnV0IHRoYXQgbWFrZXNcbi8vIE1vbGx3ZWlkZSBnZXQgaW50byBhbiBpbmZpbmF0ZSBsb29wLlxuXG5leHBvcnQgdmFyIEQyUiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1Nzc7XG5leHBvcnQgdmFyIFIyRCA9IDU3LjI5NTc3OTUxMzA4MjMyMDg4O1xuZXhwb3J0IHZhciBGT1JUUEkgPSBNYXRoLlBJLzQ7XG5leHBvcnQgdmFyIFRXT19QSSA9IE1hdGguUEkgKiAyO1xuLy8gU1BJIGlzIHNsaWdodGx5IGdyZWF0ZXIgdGhhbiBNYXRoLlBJLCBzbyB2YWx1ZXMgdGhhdCBleGNlZWQgdGhlIC0xODAuLjE4MFxuLy8gZGVncmVlIHJhbmdlIGJ5IGEgdGlueSBhbW91bnQgZG9uJ3QgZ2V0IHdyYXBwZWQuIFRoaXMgcHJldmVudHMgcG9pbnRzIHRoYXRcbi8vIGhhdmUgZHJpZnRlZCBmcm9tIHRoZWlyIG9yaWdpbmFsIGxvY2F0aW9uIGFsb25nIHRoZSAxODB0aCBtZXJpZGlhbiAoZHVlIHRvXG4vLyBmbG9hdGluZyBwb2ludCBlcnJvcikgZnJvbSBjaGFuZ2luZyB0aGVpciBzaWduLlxuZXhwb3J0IHZhciBTUEkgPSAzLjE0MTU5MjY1MzU5O1xuIiwiaW1wb3J0IHByb2ogZnJvbSAnLi9Qcm9qJztcbmltcG9ydCB0cmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xudmFyIHdnczg0ID0gcHJvaignV0dTODQnKTtcblxuZnVuY3Rpb24gdHJhbnNmb3JtZXIoZnJvbSwgdG8sIGNvb3Jkcykge1xuICB2YXIgdHJhbnNmb3JtZWRBcnJheSwgb3V0LCBrZXlzO1xuICBpZiAoQXJyYXkuaXNBcnJheShjb29yZHMpKSB7XG4gICAgdHJhbnNmb3JtZWRBcnJheSA9IHRyYW5zZm9ybShmcm9tLCB0bywgY29vcmRzKSB8fCB7eDogTmFOLCB5OiBOYU59O1xuICAgIGlmIChjb29yZHMubGVuZ3RoID4gMikge1xuICAgICAgaWYgKCh0eXBlb2YgZnJvbS5uYW1lICE9PSAndW5kZWZpbmVkJyAmJiBmcm9tLm5hbWUgPT09ICdnZW9jZW50JykgfHwgKHR5cGVvZiB0by5uYW1lICE9PSAndW5kZWZpbmVkJyAmJiB0by5uYW1lID09PSAnZ2VvY2VudCcpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtZWRBcnJheS56ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybiBbdHJhbnNmb3JtZWRBcnJheS54LCB0cmFuc2Zvcm1lZEFycmF5LnksIHRyYW5zZm9ybWVkQXJyYXkuel0uY29uY2F0KGNvb3Jkcy5zcGxpY2UoMykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbdHJhbnNmb3JtZWRBcnJheS54LCB0cmFuc2Zvcm1lZEFycmF5LnksIGNvb3Jkc1syXV0uY29uY2F0KGNvb3Jkcy5zcGxpY2UoMykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW3RyYW5zZm9ybWVkQXJyYXkueCwgdHJhbnNmb3JtZWRBcnJheS55XS5jb25jYXQoY29vcmRzLnNwbGljZSgyKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdHJhbnNmb3JtZWRBcnJheS54LCB0cmFuc2Zvcm1lZEFycmF5LnldO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvdXQgPSB0cmFuc2Zvcm0oZnJvbSwgdG8sIGNvb3Jkcyk7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGNvb3Jkcyk7XG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCh0eXBlb2YgZnJvbS5uYW1lICE9PSAndW5kZWZpbmVkJyAmJiBmcm9tLm5hbWUgPT09ICdnZW9jZW50JykgfHwgKHR5cGVvZiB0by5uYW1lICE9PSAndW5kZWZpbmVkJyAmJiB0by5uYW1lID09PSAnZ2VvY2VudCcpKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICd4JyB8fCBrZXkgPT09ICd5JyB8fCBrZXkgPT09ICd6Jykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3gnIHx8IGtleSA9PT0gJ3knKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvdXRba2V5XSA9IGNvb3Jkc1trZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9qKGl0ZW0pIHtcbiAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBwcm9qKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cbiAgaWYgKGl0ZW0ub1Byb2opIHtcbiAgICByZXR1cm4gaXRlbS5vUHJvajtcbiAgfVxuICByZXR1cm4gcHJvaihpdGVtKTtcbn1cblxuZnVuY3Rpb24gcHJvajQoZnJvbVByb2osIHRvUHJvaiwgY29vcmQpIHtcbiAgZnJvbVByb2ogPSBjaGVja1Byb2ooZnJvbVByb2opO1xuICB2YXIgc2luZ2xlID0gZmFsc2U7XG4gIHZhciBvYmo7XG4gIGlmICh0eXBlb2YgdG9Qcm9qID09PSAndW5kZWZpbmVkJykge1xuICAgIHRvUHJvaiA9IGZyb21Qcm9qO1xuICAgIGZyb21Qcm9qID0gd2dzODQ7XG4gICAgc2luZ2xlID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdG9Qcm9qLnggIT09ICd1bmRlZmluZWQnIHx8IEFycmF5LmlzQXJyYXkodG9Qcm9qKSkge1xuICAgIGNvb3JkID0gdG9Qcm9qO1xuICAgIHRvUHJvaiA9IGZyb21Qcm9qO1xuICAgIGZyb21Qcm9qID0gd2dzODQ7XG4gICAgc2luZ2xlID0gdHJ1ZTtcbiAgfVxuICB0b1Byb2ogPSBjaGVja1Byb2oodG9Qcm9qKTtcbiAgaWYgKGNvb3JkKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVyKGZyb21Qcm9qLCB0b1Byb2osIGNvb3JkKTtcbiAgfSBlbHNlIHtcbiAgICBvYmogPSB7XG4gICAgICBmb3J3YXJkOiBmdW5jdGlvbiAoY29vcmRzKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1lcihmcm9tUHJvaiwgdG9Qcm9qLCBjb29yZHMpO1xuICAgICAgfSxcbiAgICAgIGludmVyc2U6IGZ1bmN0aW9uIChjb29yZHMpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyKHRvUHJvaiwgZnJvbVByb2osIGNvb3Jkcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoc2luZ2xlKSB7XG4gICAgICBvYmoub1Byb2ogPSB0b1Byb2o7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHByb2o0OyIsImltcG9ydCB7UEpEXzNQQVJBTSwgUEpEXzdQQVJBTSwgUEpEX1dHUzg0LCBQSkRfTk9EQVRVTSwgU0VDX1RPX1JBRH0gZnJvbSAnLi9jb25zdGFudHMvdmFsdWVzJztcblxuZnVuY3Rpb24gZGF0dW0oZGF0dW1Db2RlLCBkYXR1bV9wYXJhbXMsIGEsIGIsIGVzLCBlcDIpIHtcbiAgdmFyIG91dCA9IHt9O1xuXG4gIGlmIChkYXR1bUNvZGUgPT09IHVuZGVmaW5lZCB8fCBkYXR1bUNvZGUgPT09ICdub25lJykge1xuICAgIG91dC5kYXR1bV90eXBlID0gUEpEX05PREFUVU07XG4gIH0gZWxzZSB7XG4gICAgb3V0LmRhdHVtX3R5cGUgPSBQSkRfV0dTODQ7XG4gIH1cblxuICBpZiAoZGF0dW1fcGFyYW1zKSB7XG4gICAgb3V0LmRhdHVtX3BhcmFtcyA9IGRhdHVtX3BhcmFtcy5tYXAocGFyc2VGbG9hdCk7XG4gICAgaWYgKG91dC5kYXR1bV9wYXJhbXNbMF0gIT09IDAgfHwgb3V0LmRhdHVtX3BhcmFtc1sxXSAhPT0gMCB8fCBvdXQuZGF0dW1fcGFyYW1zWzJdICE9PSAwKSB7XG4gICAgICBvdXQuZGF0dW1fdHlwZSA9IFBKRF8zUEFSQU07XG4gICAgfVxuICAgIGlmIChvdXQuZGF0dW1fcGFyYW1zLmxlbmd0aCA+IDMpIHtcbiAgICAgIGlmIChvdXQuZGF0dW1fcGFyYW1zWzNdICE9PSAwIHx8IG91dC5kYXR1bV9wYXJhbXNbNF0gIT09IDAgfHwgb3V0LmRhdHVtX3BhcmFtc1s1XSAhPT0gMCB8fCBvdXQuZGF0dW1fcGFyYW1zWzZdICE9PSAwKSB7XG4gICAgICAgIG91dC5kYXR1bV90eXBlID0gUEpEXzdQQVJBTTtcbiAgICAgICAgb3V0LmRhdHVtX3BhcmFtc1szXSAqPSBTRUNfVE9fUkFEO1xuICAgICAgICBvdXQuZGF0dW1fcGFyYW1zWzRdICo9IFNFQ19UT19SQUQ7XG4gICAgICAgIG91dC5kYXR1bV9wYXJhbXNbNV0gKj0gU0VDX1RPX1JBRDtcbiAgICAgICAgb3V0LmRhdHVtX3BhcmFtc1s2XSA9IChvdXQuZGF0dW1fcGFyYW1zWzZdIC8gMTAwMDAwMC4wKSArIDEuMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvdXQuYSA9IGE7IC8vZGF0dW0gb2JqZWN0IGFsc28gdXNlcyB0aGVzZSB2YWx1ZXNcbiAgb3V0LmIgPSBiO1xuICBvdXQuZXMgPSBlcztcbiAgb3V0LmVwMiA9IGVwMjtcbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0dW07XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQge1BKRF8zUEFSQU0sIFBKRF83UEFSQU0sIEhBTEZfUEl9IGZyb20gJy4vY29uc3RhbnRzL3ZhbHVlcyc7XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZURhdHVtcyhzb3VyY2UsIGRlc3QpIHtcbiAgaWYgKHNvdXJjZS5kYXR1bV90eXBlICE9PSBkZXN0LmRhdHVtX3R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7IC8vIGZhbHNlLCBkYXR1bXMgYXJlIG5vdCBlcXVhbFxuICB9IGVsc2UgaWYgKHNvdXJjZS5hICE9PSBkZXN0LmEgfHwgTWF0aC5hYnMoc291cmNlLmVzIC0gZGVzdC5lcykgPiAwLjAwMDAwMDAwMDA1MCkge1xuICAgIC8vIHRoZSB0b2xlcmFuY2UgZm9yIGVzIGlzIHRvIGVuc3VyZSB0aGF0IEdSUzgwIGFuZCBXR1M4NFxuICAgIC8vIGFyZSBjb25zaWRlcmVkIGlkZW50aWNhbFxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChzb3VyY2UuZGF0dW1fdHlwZSA9PT0gUEpEXzNQQVJBTSkge1xuICAgIHJldHVybiAoc291cmNlLmRhdHVtX3BhcmFtc1swXSA9PT0gZGVzdC5kYXR1bV9wYXJhbXNbMF0gJiYgc291cmNlLmRhdHVtX3BhcmFtc1sxXSA9PT0gZGVzdC5kYXR1bV9wYXJhbXNbMV0gJiYgc291cmNlLmRhdHVtX3BhcmFtc1syXSA9PT0gZGVzdC5kYXR1bV9wYXJhbXNbMl0pO1xuICB9IGVsc2UgaWYgKHNvdXJjZS5kYXR1bV90eXBlID09PSBQSkRfN1BBUkFNKSB7XG4gICAgcmV0dXJuIChzb3VyY2UuZGF0dW1fcGFyYW1zWzBdID09PSBkZXN0LmRhdHVtX3BhcmFtc1swXSAmJiBzb3VyY2UuZGF0dW1fcGFyYW1zWzFdID09PSBkZXN0LmRhdHVtX3BhcmFtc1sxXSAmJiBzb3VyY2UuZGF0dW1fcGFyYW1zWzJdID09PSBkZXN0LmRhdHVtX3BhcmFtc1syXSAmJiBzb3VyY2UuZGF0dW1fcGFyYW1zWzNdID09PSBkZXN0LmRhdHVtX3BhcmFtc1szXSAmJiBzb3VyY2UuZGF0dW1fcGFyYW1zWzRdID09PSBkZXN0LmRhdHVtX3BhcmFtc1s0XSAmJiBzb3VyY2UuZGF0dW1fcGFyYW1zWzVdID09PSBkZXN0LmRhdHVtX3BhcmFtc1s1XSAmJiBzb3VyY2UuZGF0dW1fcGFyYW1zWzZdID09PSBkZXN0LmRhdHVtX3BhcmFtc1s2XSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7IC8vIGRhdHVtcyBhcmUgZXF1YWxcbiAgfVxufSAvLyBjc19jb21wYXJlX2RhdHVtcygpXG5cbi8qXG4gKiBUaGUgZnVuY3Rpb24gQ29udmVydF9HZW9kZXRpY19Ub19HZW9jZW50cmljIGNvbnZlcnRzIGdlb2RldGljIGNvb3JkaW5hdGVzXG4gKiAobGF0aXR1ZGUsIGxvbmdpdHVkZSwgYW5kIGhlaWdodCkgdG8gZ2VvY2VudHJpYyBjb29yZGluYXRlcyAoWCwgWSwgWiksXG4gKiBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgZWxsaXBzb2lkIHBhcmFtZXRlcnMuXG4gKlxuICogICAgTGF0aXR1ZGUgIDogR2VvZGV0aWMgbGF0aXR1ZGUgaW4gcmFkaWFucyAgICAgICAgICAgICAgICAgICAgIChpbnB1dClcbiAqICAgIExvbmdpdHVkZSA6IEdlb2RldGljIGxvbmdpdHVkZSBpbiByYWRpYW5zICAgICAgICAgICAgICAgICAgICAoaW5wdXQpXG4gKiAgICBIZWlnaHQgICAgOiBHZW9kZXRpYyBoZWlnaHQsIGluIG1ldGVycyAgICAgICAgICAgICAgICAgICAgICAgKGlucHV0KVxuICogICAgWCAgICAgICAgIDogQ2FsY3VsYXRlZCBHZW9jZW50cmljIFggY29vcmRpbmF0ZSwgaW4gbWV0ZXJzICAgIChvdXRwdXQpXG4gKiAgICBZICAgICAgICAgOiBDYWxjdWxhdGVkIEdlb2NlbnRyaWMgWSBjb29yZGluYXRlLCBpbiBtZXRlcnMgICAgKG91dHB1dClcbiAqICAgIFogICAgICAgICA6IENhbGN1bGF0ZWQgR2VvY2VudHJpYyBaIGNvb3JkaW5hdGUsIGluIG1ldGVycyAgICAob3V0cHV0KVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlb2RldGljVG9HZW9jZW50cmljKHAsIGVzLCBhKSB7XG4gIHZhciBMb25naXR1ZGUgPSBwLng7XG4gIHZhciBMYXRpdHVkZSA9IHAueTtcbiAgdmFyIEhlaWdodCA9IHAueiA/IHAueiA6IDA7IC8vWiB2YWx1ZSBub3QgYWx3YXlzIHN1cHBsaWVkXG5cbiAgdmFyIFJuOyAvKiAgRWFydGggcmFkaXVzIGF0IGxvY2F0aW9uICAqL1xuICB2YXIgU2luX0xhdDsgLyogIE1hdGguc2luKExhdGl0dWRlKSAgKi9cbiAgdmFyIFNpbjJfTGF0OyAvKiAgU3F1YXJlIG9mIE1hdGguc2luKExhdGl0dWRlKSAgKi9cbiAgdmFyIENvc19MYXQ7IC8qICBNYXRoLmNvcyhMYXRpdHVkZSkgICovXG5cbiAgLypcbiAgICoqIERvbid0IGJsb3cgdXAgaWYgTGF0aXR1ZGUgaXMganVzdCBhIGxpdHRsZSBvdXQgb2YgdGhlIHZhbHVlXG4gICAqKiByYW5nZSBhcyBpdCBtYXkganVzdCBiZSBhIHJvdW5kaW5nIGlzc3VlLiAgQWxzbyByZW1vdmVkIGxvbmdpdHVkZVxuICAgKiogdGVzdCwgaXQgc2hvdWxkIGJlIHdyYXBwZWQgYnkgTWF0aC5jb3MoKSBhbmQgTWF0aC5zaW4oKS4gIE5GVyBmb3IgUFJPSi40LCBTZXAvMjAwMS5cbiAgICovXG4gIGlmIChMYXRpdHVkZSA8IC1IQUxGX1BJICYmIExhdGl0dWRlID4gLTEuMDAxICogSEFMRl9QSSkge1xuICAgIExhdGl0dWRlID0gLUhBTEZfUEk7XG4gIH0gZWxzZSBpZiAoTGF0aXR1ZGUgPiBIQUxGX1BJICYmIExhdGl0dWRlIDwgMS4wMDEgKiBIQUxGX1BJKSB7XG4gICAgTGF0aXR1ZGUgPSBIQUxGX1BJO1xuICB9IGVsc2UgaWYgKExhdGl0dWRlIDwgLUhBTEZfUEkpIHtcbiAgICAvKiBMYXRpdHVkZSBvdXQgb2YgcmFuZ2UgKi9cbiAgICAvLy4ucmVwb3J0RXJyb3IoJ2dlb2NlbnQ6bGF0IG91dCBvZiByYW5nZTonICsgTGF0aXR1ZGUpO1xuICAgIHJldHVybiB7IHg6IC1JbmZpbml0eSwgeTogLUluZmluaXR5LCB6OiBwLnogfTtcbiAgfSBlbHNlIGlmIChMYXRpdHVkZSA+IEhBTEZfUEkpIHtcbiAgICAvKiBMYXRpdHVkZSBvdXQgb2YgcmFuZ2UgKi9cbiAgICByZXR1cm4geyB4OiBJbmZpbml0eSwgeTogSW5maW5pdHksIHo6IHAueiB9O1xuICB9XG5cbiAgaWYgKExvbmdpdHVkZSA+IE1hdGguUEkpIHtcbiAgICBMb25naXR1ZGUgLT0gKDIgKiBNYXRoLlBJKTtcbiAgfVxuICBTaW5fTGF0ID0gTWF0aC5zaW4oTGF0aXR1ZGUpO1xuICBDb3NfTGF0ID0gTWF0aC5jb3MoTGF0aXR1ZGUpO1xuICBTaW4yX0xhdCA9IFNpbl9MYXQgKiBTaW5fTGF0O1xuICBSbiA9IGEgLyAoTWF0aC5zcXJ0KDEuMGUwIC0gZXMgKiBTaW4yX0xhdCkpO1xuICByZXR1cm4ge1xuICAgIHg6IChSbiArIEhlaWdodCkgKiBDb3NfTGF0ICogTWF0aC5jb3MoTG9uZ2l0dWRlKSxcbiAgICB5OiAoUm4gKyBIZWlnaHQpICogQ29zX0xhdCAqIE1hdGguc2luKExvbmdpdHVkZSksXG4gICAgejogKChSbiAqICgxIC0gZXMpKSArIEhlaWdodCkgKiBTaW5fTGF0XG4gIH07XG59IC8vIGNzX2dlb2RldGljX3RvX2dlb2NlbnRyaWMoKVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VvY2VudHJpY1RvR2VvZGV0aWMocCwgZXMsIGEsIGIpIHtcbiAgLyogbG9jYWwgZGVmaW50aW9ucyBhbmQgdmFyaWFibGVzICovXG4gIC8qIGVuZC1jcml0ZXJpdW0gb2YgbG9vcCwgYWNjdXJhY3kgb2Ygc2luKExhdGl0dWRlKSAqL1xuICB2YXIgZ2VuYXUgPSAxZS0xMjtcbiAgdmFyIGdlbmF1MiA9IChnZW5hdSAqIGdlbmF1KTtcbiAgdmFyIG1heGl0ZXIgPSAzMDtcblxuICB2YXIgUDsgLyogZGlzdGFuY2UgYmV0d2VlbiBzZW1pLW1pbm9yIGF4aXMgYW5kIGxvY2F0aW9uICovXG4gIHZhciBSUjsgLyogZGlzdGFuY2UgYmV0d2VlbiBjZW50ZXIgYW5kIGxvY2F0aW9uICovXG4gIHZhciBDVDsgLyogc2luIG9mIGdlb2NlbnRyaWMgbGF0aXR1ZGUgKi9cbiAgdmFyIFNUOyAvKiBjb3Mgb2YgZ2VvY2VudHJpYyBsYXRpdHVkZSAqL1xuICB2YXIgUlg7XG4gIHZhciBSSztcbiAgdmFyIFJOOyAvKiBFYXJ0aCByYWRpdXMgYXQgbG9jYXRpb24gKi9cbiAgdmFyIENQSEkwOyAvKiBjb3Mgb2Ygc3RhcnQgb3Igb2xkIGdlb2RldGljIGxhdGl0dWRlIGluIGl0ZXJhdGlvbnMgKi9cbiAgdmFyIFNQSEkwOyAvKiBzaW4gb2Ygc3RhcnQgb3Igb2xkIGdlb2RldGljIGxhdGl0dWRlIGluIGl0ZXJhdGlvbnMgKi9cbiAgdmFyIENQSEk7IC8qIGNvcyBvZiBzZWFyY2hlZCBnZW9kZXRpYyBsYXRpdHVkZSAqL1xuICB2YXIgU1BISTsgLyogc2luIG9mIHNlYXJjaGVkIGdlb2RldGljIGxhdGl0dWRlICovXG4gIHZhciBTRFBISTsgLyogZW5kLWNyaXRlcml1bTogYWRkaXRpb24tdGhlb3JlbSBvZiBzaW4oTGF0aXR1ZGUoaXRlciktTGF0aXR1ZGUoaXRlci0xKSkgKi9cbiAgdmFyIGl0ZXI7IC8qICMgb2YgY29udGlub3VzIGl0ZXJhdGlvbiwgbWF4LiAzMCBpcyBhbHdheXMgZW5vdWdoIChzLmEuKSAqL1xuXG4gIHZhciBYID0gcC54O1xuICB2YXIgWSA9IHAueTtcbiAgdmFyIFogPSBwLnogPyBwLnogOiAwLjA7IC8vWiB2YWx1ZSBub3QgYWx3YXlzIHN1cHBsaWVkXG4gIHZhciBMb25naXR1ZGU7XG4gIHZhciBMYXRpdHVkZTtcbiAgdmFyIEhlaWdodDtcblxuICBQID0gTWF0aC5zcXJ0KFggKiBYICsgWSAqIFkpO1xuICBSUiA9IE1hdGguc3FydChYICogWCArIFkgKiBZICsgWiAqIFopO1xuXG4gIC8qICAgICAgc3BlY2lhbCBjYXNlcyBmb3IgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSAqL1xuICBpZiAoUCAvIGEgPCBnZW5hdSkge1xuXG4gICAgLyogIHNwZWNpYWwgY2FzZSwgaWYgUD0wLiAoWD0wLiwgWT0wLikgKi9cbiAgICBMb25naXR1ZGUgPSAwLjA7XG5cbiAgICAvKiAgaWYgKFgsWSxaKT0oMC4sMC4sMC4pIHRoZW4gSGVpZ2h0IGJlY29tZXMgc2VtaS1taW5vciBheGlzXG4gICAgICogIG9mIGVsbGlwc29pZCAoPWNlbnRlciBvZiBtYXNzKSwgTGF0aXR1ZGUgYmVjb21lcyBQSS8yICovXG4gICAgaWYgKFJSIC8gYSA8IGdlbmF1KSB7XG4gICAgICBMYXRpdHVkZSA9IEhBTEZfUEk7XG4gICAgICBIZWlnaHQgPSAtYjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHAueCxcbiAgICAgICAgeTogcC55LFxuICAgICAgICB6OiBwLnpcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8qICBlbGxpcHNvaWRhbCAoZ2VvZGV0aWMpIGxvbmdpdHVkZVxuICAgICAqICBpbnRlcnZhbDogLVBJIDwgTG9uZ2l0dWRlIDw9ICtQSSAqL1xuICAgIExvbmdpdHVkZSA9IE1hdGguYXRhbjIoWSwgWCk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBGb2xsb3dpbmcgaXRlcmF0aXZlIGFsZ29yaXRobSB3YXMgZGV2ZWxvcHBlZCBieVxuICAgKiBcIkluc3RpdHV0IGZvciBFcmRtZXNzdW5nXCIsIFVuaXZlcnNpdHkgb2YgSGFubm92ZXIsIEp1bHkgMTk4OC5cbiAgICogSW50ZXJuZXQ6IHd3dy5pZmUudW5pLWhhbm5vdmVyLmRlXG4gICAqIEl0ZXJhdGl2ZSBjb21wdXRhdGlvbiBvZiBDUEhJLFNQSEkgYW5kIEhlaWdodC5cbiAgICogSXRlcmF0aW9uIG9mIENQSEkgYW5kIFNQSEkgdG8gMTAqKi0xMiByYWRpYW4gcmVzcC5cbiAgICogMioxMCoqLTcgYXJjc2VjLlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgQ1QgPSBaIC8gUlI7XG4gIFNUID0gUCAvIFJSO1xuICBSWCA9IDEuMCAvIE1hdGguc3FydCgxLjAgLSBlcyAqICgyLjAgLSBlcykgKiBTVCAqIFNUKTtcbiAgQ1BISTAgPSBTVCAqICgxLjAgLSBlcykgKiBSWDtcbiAgU1BISTAgPSBDVCAqIFJYO1xuICBpdGVyID0gMDtcblxuICAvKiBsb29wIHRvIGZpbmQgc2luKExhdGl0dWRlKSByZXNwLiBMYXRpdHVkZVxuICAgKiB1bnRpbCB8c2luKExhdGl0dWRlKGl0ZXIpLUxhdGl0dWRlKGl0ZXItMSkpfCA8IGdlbmF1ICovXG4gIGRvIHtcbiAgICBpdGVyKys7XG4gICAgUk4gPSBhIC8gTWF0aC5zcXJ0KDEuMCAtIGVzICogU1BISTAgKiBTUEhJMCk7XG5cbiAgICAvKiAgZWxsaXBzb2lkYWwgKGdlb2RldGljKSBoZWlnaHQgKi9cbiAgICBIZWlnaHQgPSBQICogQ1BISTAgKyBaICogU1BISTAgLSBSTiAqICgxLjAgLSBlcyAqIFNQSEkwICogU1BISTApO1xuXG4gICAgUksgPSBlcyAqIFJOIC8gKFJOICsgSGVpZ2h0KTtcbiAgICBSWCA9IDEuMCAvIE1hdGguc3FydCgxLjAgLSBSSyAqICgyLjAgLSBSSykgKiBTVCAqIFNUKTtcbiAgICBDUEhJID0gU1QgKiAoMS4wIC0gUkspICogUlg7XG4gICAgU1BISSA9IENUICogUlg7XG4gICAgU0RQSEkgPSBTUEhJICogQ1BISTAgLSBDUEhJICogU1BISTA7XG4gICAgQ1BISTAgPSBDUEhJO1xuICAgIFNQSEkwID0gU1BISTtcbiAgfVxuICB3aGlsZSAoU0RQSEkgKiBTRFBISSA+IGdlbmF1MiAmJiBpdGVyIDwgbWF4aXRlcik7XG5cbiAgLyogICAgICBlbGxpcHNvaWRhbCAoZ2VvZGV0aWMpIGxhdGl0dWRlICovXG4gIExhdGl0dWRlID0gTWF0aC5hdGFuKFNQSEkgLyBNYXRoLmFicyhDUEhJKSk7XG4gIHJldHVybiB7XG4gICAgeDogTG9uZ2l0dWRlLFxuICAgIHk6IExhdGl0dWRlLFxuICAgIHo6IEhlaWdodFxuICB9O1xufSAvLyBjc19nZW9jZW50cmljX3RvX2dlb2RldGljKClcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBwal9nZW9jZW50aWNfdG9fd2dzODQoIHAgKVxuLy8gIHAgPSBwb2ludCB0byB0cmFuc2Zvcm0gaW4gZ2VvY2VudHJpYyBjb29yZGluYXRlcyAoeCx5LHopXG5cblxuLyoqIHBvaW50IG9iamVjdCwgbm90aGluZyBmYW5jeSwganVzdCBhbGxvd3MgdmFsdWVzIHRvIGJlXG4gICAgcGFzc2VkIGJhY2sgYW5kIGZvcnRoIGJ5IHJlZmVyZW5jZSByYXRoZXIgdGhhbiBieSB2YWx1ZS5cbiAgICBPdGhlciBwb2ludCBjbGFzc2VzIG1heSBiZSB1c2VkIGFzIGxvbmcgYXMgdGhleSBoYXZlXG4gICAgeCBhbmQgeSBwcm9wZXJ0aWVzLCB3aGljaCB3aWxsIGdldCBtb2RpZmllZCBpbiB0aGUgdHJhbnNmb3JtIG1ldGhvZC5cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2VvY2VudHJpY1RvV2dzODQocCwgZGF0dW1fdHlwZSwgZGF0dW1fcGFyYW1zKSB7XG5cbiAgaWYgKGRhdHVtX3R5cGUgPT09IFBKRF8zUEFSQU0pIHtcbiAgICAvLyBpZiggeFtpb10gPT09IEhVR0VfVkFMIClcbiAgICAvLyAgICBjb250aW51ZTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcC54ICsgZGF0dW1fcGFyYW1zWzBdLFxuICAgICAgeTogcC55ICsgZGF0dW1fcGFyYW1zWzFdLFxuICAgICAgejogcC56ICsgZGF0dW1fcGFyYW1zWzJdLFxuICAgIH07XG4gIH0gZWxzZSBpZiAoZGF0dW1fdHlwZSA9PT0gUEpEXzdQQVJBTSkge1xuICAgIHZhciBEeF9CRiA9IGRhdHVtX3BhcmFtc1swXTtcbiAgICB2YXIgRHlfQkYgPSBkYXR1bV9wYXJhbXNbMV07XG4gICAgdmFyIER6X0JGID0gZGF0dW1fcGFyYW1zWzJdO1xuICAgIHZhciBSeF9CRiA9IGRhdHVtX3BhcmFtc1szXTtcbiAgICB2YXIgUnlfQkYgPSBkYXR1bV9wYXJhbXNbNF07XG4gICAgdmFyIFJ6X0JGID0gZGF0dW1fcGFyYW1zWzVdO1xuICAgIHZhciBNX0JGID0gZGF0dW1fcGFyYW1zWzZdO1xuICAgIC8vIGlmKCB4W2lvXSA9PT0gSFVHRV9WQUwgKVxuICAgIC8vICAgIGNvbnRpbnVlO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBNX0JGICogKHAueCAtIFJ6X0JGICogcC55ICsgUnlfQkYgKiBwLnopICsgRHhfQkYsXG4gICAgICB5OiBNX0JGICogKFJ6X0JGICogcC54ICsgcC55IC0gUnhfQkYgKiBwLnopICsgRHlfQkYsXG4gICAgICB6OiBNX0JGICogKC1SeV9CRiAqIHAueCArIFJ4X0JGICogcC55ICsgcC56KSArIER6X0JGXG4gICAgfTtcbiAgfVxufSAvLyBjc19nZW9jZW50cmljX3RvX3dnczg0XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gcGpfZ2VvY2VudGljX2Zyb21fd2dzODQoKVxuLy8gIGNvb3JkaW5hdGUgc3lzdGVtIGRlZmluaXRpb24sXG4vLyAgcG9pbnQgdG8gdHJhbnNmb3JtIGluIGdlb2NlbnRyaWMgY29vcmRpbmF0ZXMgKHgseSx6KVxuZXhwb3J0IGZ1bmN0aW9uIGdlb2NlbnRyaWNGcm9tV2dzODQocCwgZGF0dW1fdHlwZSwgZGF0dW1fcGFyYW1zKSB7XG5cbiAgaWYgKGRhdHVtX3R5cGUgPT09IFBKRF8zUEFSQU0pIHtcbiAgICAvL2lmKCB4W2lvXSA9PT0gSFVHRV9WQUwgKVxuICAgIC8vICAgIGNvbnRpbnVlO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBwLnggLSBkYXR1bV9wYXJhbXNbMF0sXG4gICAgICB5OiBwLnkgLSBkYXR1bV9wYXJhbXNbMV0sXG4gICAgICB6OiBwLnogLSBkYXR1bV9wYXJhbXNbMl0sXG4gICAgfTtcblxuICB9IGVsc2UgaWYgKGRhdHVtX3R5cGUgPT09IFBKRF83UEFSQU0pIHtcbiAgICB2YXIgRHhfQkYgPSBkYXR1bV9wYXJhbXNbMF07XG4gICAgdmFyIER5X0JGID0gZGF0dW1fcGFyYW1zWzFdO1xuICAgIHZhciBEel9CRiA9IGRhdHVtX3BhcmFtc1syXTtcbiAgICB2YXIgUnhfQkYgPSBkYXR1bV9wYXJhbXNbM107XG4gICAgdmFyIFJ5X0JGID0gZGF0dW1fcGFyYW1zWzRdO1xuICAgIHZhciBSel9CRiA9IGRhdHVtX3BhcmFtc1s1XTtcbiAgICB2YXIgTV9CRiA9IGRhdHVtX3BhcmFtc1s2XTtcbiAgICB2YXIgeF90bXAgPSAocC54IC0gRHhfQkYpIC8gTV9CRjtcbiAgICB2YXIgeV90bXAgPSAocC55IC0gRHlfQkYpIC8gTV9CRjtcbiAgICB2YXIgel90bXAgPSAocC56IC0gRHpfQkYpIC8gTV9CRjtcbiAgICAvL2lmKCB4W2lvXSA9PT0gSFVHRV9WQUwgKVxuICAgIC8vICAgIGNvbnRpbnVlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHhfdG1wICsgUnpfQkYgKiB5X3RtcCAtIFJ5X0JGICogel90bXAsXG4gICAgICB5OiAtUnpfQkYgKiB4X3RtcCArIHlfdG1wICsgUnhfQkYgKiB6X3RtcCxcbiAgICAgIHo6IFJ5X0JGICogeF90bXAgLSBSeF9CRiAqIHlfdG1wICsgel90bXBcbiAgICB9O1xuICB9IC8vY3NfZ2VvY2VudHJpY19mcm9tX3dnczg0KClcbn1cbiIsImltcG9ydCB7UEpEXzNQQVJBTSwgUEpEXzdQQVJBTSwgUEpEX05PREFUVU19IGZyb20gJy4vY29uc3RhbnRzL3ZhbHVlcyc7XG5cbmltcG9ydCB7Z2VvZGV0aWNUb0dlb2NlbnRyaWMsIGdlb2NlbnRyaWNUb0dlb2RldGljLCBnZW9jZW50cmljVG9XZ3M4NCwgZ2VvY2VudHJpY0Zyb21XZ3M4NCwgY29tcGFyZURhdHVtc30gZnJvbSAnLi9kYXR1bVV0aWxzJztcbmZ1bmN0aW9uIGNoZWNrUGFyYW1zKHR5cGUpIHtcbiAgcmV0dXJuICh0eXBlID09PSBQSkRfM1BBUkFNIHx8IHR5cGUgPT09IFBKRF83UEFSQU0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzb3VyY2UsIGRlc3QsIHBvaW50KSB7XG4gIC8vIFNob3J0IGN1dCBpZiB0aGUgZGF0dW1zIGFyZSBpZGVudGljYWwuXG4gIGlmIChjb21wYXJlRGF0dW1zKHNvdXJjZSwgZGVzdCkpIHtcbiAgICByZXR1cm4gcG9pbnQ7IC8vIGluIHRoaXMgY2FzZSwgemVybyBpcyBzdWNlc3MsXG4gICAgLy8gd2hlcmVhcyBjc19jb21wYXJlX2RhdHVtcyByZXR1cm5zIDEgdG8gaW5kaWNhdGUgVFJVRVxuICAgIC8vIGNvbmZ1c2luZywgc2hvdWxkIGZpeCB0aGlzXG4gIH1cblxuICAvLyBFeHBsaWNpdGx5IHNraXAgZGF0dW0gdHJhbnNmb3JtIGJ5IHNldHRpbmcgJ2RhdHVtPW5vbmUnIGFzIHBhcmFtZXRlciBmb3IgZWl0aGVyIHNvdXJjZSBvciBkZXN0XG4gIGlmIChzb3VyY2UuZGF0dW1fdHlwZSA9PT0gUEpEX05PREFUVU0gfHwgZGVzdC5kYXR1bV90eXBlID09PSBQSkRfTk9EQVRVTSkge1xuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIC8vIElmIHRoaXMgZGF0dW0gcmVxdWlyZXMgZ3JpZCBzaGlmdHMsIHRoZW4gYXBwbHkgaXQgdG8gZ2VvZGV0aWMgY29vcmRpbmF0ZXMuXG5cbiAgLy8gRG8gd2UgbmVlZCB0byBnbyB0aHJvdWdoIGdlb2NlbnRyaWMgY29vcmRpbmF0ZXM/XG4gIGlmIChzb3VyY2UuZXMgPT09IGRlc3QuZXMgJiYgc291cmNlLmEgPT09IGRlc3QuYSAmJiAhY2hlY2tQYXJhbXMoc291cmNlLmRhdHVtX3R5cGUpICYmICAhY2hlY2tQYXJhbXMoZGVzdC5kYXR1bV90eXBlKSkge1xuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdG8gZ2VvY2VudHJpYyBjb29yZGluYXRlcy5cbiAgcG9pbnQgPSBnZW9kZXRpY1RvR2VvY2VudHJpYyhwb2ludCwgc291cmNlLmVzLCBzb3VyY2UuYSk7XG4gIC8vIENvbnZlcnQgYmV0d2VlbiBkYXR1bXNcbiAgaWYgKGNoZWNrUGFyYW1zKHNvdXJjZS5kYXR1bV90eXBlKSkge1xuICAgIHBvaW50ID0gZ2VvY2VudHJpY1RvV2dzODQocG9pbnQsIHNvdXJjZS5kYXR1bV90eXBlLCBzb3VyY2UuZGF0dW1fcGFyYW1zKTtcbiAgfVxuICBpZiAoY2hlY2tQYXJhbXMoZGVzdC5kYXR1bV90eXBlKSkge1xuICAgIHBvaW50ID0gZ2VvY2VudHJpY0Zyb21XZ3M4NChwb2ludCwgZGVzdC5kYXR1bV90eXBlLCBkZXN0LmRhdHVtX3BhcmFtcyk7XG4gIH1cbiAgcmV0dXJuIGdlb2NlbnRyaWNUb0dlb2RldGljKHBvaW50LCBkZXN0LmVzLCBkZXN0LmEsIGRlc3QuYik7XG5cbn1cbiIsImltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFsJztcbmltcG9ydCBwYXJzZVByb2ogZnJvbSAnLi9wcm9qU3RyaW5nJztcbmltcG9ydCB3a3QgZnJvbSAnd2t0LXBhcnNlcic7XG5cbmZ1bmN0aW9uIGRlZnMobmFtZSkge1xuICAvKmdsb2JhbCBjb25zb2xlKi9cbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhciBkZWYgPSBhcmd1bWVudHNbMV07XG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZGVmLmNoYXJBdCgwKSA9PT0gJysnKSB7XG4gICAgICAgIGRlZnNbbmFtZV0gPSBwYXJzZVByb2ooYXJndW1lbnRzWzFdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZWZzW25hbWVdID0gd2t0KGFyZ3VtZW50c1sxXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZnNbbmFtZV0gPSBkZWY7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgICAgcmV0dXJuIG5hbWUubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgICBkZWZzLmFwcGx5KHRoYXQsIHYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlZnModik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChuYW1lIGluIGRlZnMpIHtcbiAgICAgICAgcmV0dXJuIGRlZnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKCdFUFNHJyBpbiBuYW1lKSB7XG4gICAgICBkZWZzWydFUFNHOicgKyBuYW1lLkVQU0ddID0gbmFtZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoJ0VTUkknIGluIG5hbWUpIHtcbiAgICAgIGRlZnNbJ0VTUkk6JyArIG5hbWUuRVNSSV0gPSBuYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmICgnSUFVMjAwMCcgaW4gbmFtZSkge1xuICAgICAgZGVmc1snSUFVMjAwMDonICsgbmFtZS5JQVUyMDAwXSA9IG5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG5cbn1cbmdsb2JhbHMoZGVmcyk7XG5leHBvcnQgZGVmYXVsdCBkZWZzO1xuIiwiaW1wb3J0IHtTSVhUSCwgUkE0LCBSQTYsIEVQU0xOfSBmcm9tICcuL2NvbnN0YW50cy92YWx1ZXMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEVsbGlwc29pZCwgV0dTODR9IGZyb20gJy4vY29uc3RhbnRzL0VsbGlwc29pZCc7XG5pbXBvcnQgbWF0Y2ggZnJvbSAnLi9tYXRjaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBlY2NlbnRyaWNpdHkoYSwgYiwgcmYsIFJfQSkge1xuICB2YXIgYTIgPSBhICogYTsgLy8gdXNlZCBpbiBnZW9jZW50cmljXG4gIHZhciBiMiA9IGIgKiBiOyAvLyB1c2VkIGluIGdlb2NlbnRyaWNcbiAgdmFyIGVzID0gKGEyIC0gYjIpIC8gYTI7IC8vIGUgXiAyXG4gIHZhciBlID0gMDtcbiAgaWYgKFJfQSkge1xuICAgIGEgKj0gMSAtIGVzICogKFNJWFRIICsgZXMgKiAoUkE0ICsgZXMgKiBSQTYpKTtcbiAgICBhMiA9IGEgKiBhO1xuICAgIGVzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5zcXJ0KGVzKTsgLy8gZWNjZW50cmljaXR5XG4gIH1cbiAgdmFyIGVwMiA9IChhMiAtIGIyKSAvIGIyOyAvLyB1c2VkIGluIGdlb2NlbnRyaWNcbiAgcmV0dXJuIHtcbiAgICBlczogZXMsXG4gICAgZTogZSxcbiAgICBlcDI6IGVwMlxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNwaGVyZShhLCBiLCByZiwgZWxscHMsIHNwaGVyZSkge1xuICBpZiAoIWEpIHsgLy8gZG8gd2UgaGF2ZSBhbiBlbGxpcHNvaWQ/XG4gICAgdmFyIGVsbGlwc2UgPSBtYXRjaChFbGxpcHNvaWQsIGVsbHBzKTtcbiAgICBpZiAoIWVsbGlwc2UpIHtcbiAgICAgIGVsbGlwc2UgPSBXR1M4NDtcbiAgICB9XG4gICAgYSA9IGVsbGlwc2UuYTtcbiAgICBiID0gZWxsaXBzZS5iO1xuICAgIHJmID0gZWxsaXBzZS5yZjtcbiAgfVxuXG4gIGlmIChyZiAmJiAhYikge1xuICAgIGIgPSAoMS4wIC0gMS4wIC8gcmYpICogYTtcbiAgfVxuICBpZiAocmYgPT09IDAgfHwgTWF0aC5hYnMoYSAtIGIpIDwgRVBTTE4pIHtcbiAgICBzcGhlcmUgPSB0cnVlO1xuICAgIGIgPSBhO1xuICB9XG4gIHJldHVybiB7XG4gICAgYTogYSxcbiAgICBiOiBiLFxuICAgIHJmOiByZixcbiAgICBzcGhlcmU6IHNwaGVyZVxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICBkZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uIHx8IHt9O1xuICB2YXIgdmFsdWUsIHByb3BlcnR5O1xuICBpZiAoIXNvdXJjZSkge1xuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbiAgfVxuICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgIHZhbHVlID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlZnMpIHtcbiAgZGVmcygnRVBTRzo0MzI2JywgXCIrdGl0bGU9V0dTIDg0IChsb25nL2xhdCkgK3Byb2o9bG9uZ2xhdCArZWxscHM9V0dTODQgK2RhdHVtPVdHUzg0ICt1bml0cz1kZWdyZWVzXCIpO1xuICBkZWZzKCdFUFNHOjQyNjknLCBcIit0aXRsZT1OQUQ4MyAobG9uZy9sYXQpICtwcm9qPWxvbmdsYXQgK2E9NjM3ODEzNy4wICtiPTYzNTY3NTIuMzE0MTQwMzYgK2VsbHBzPUdSUzgwICtkYXR1bT1OQUQ4MyArdW5pdHM9ZGVncmVlc1wiKTtcbiAgZGVmcygnRVBTRzozODU3JywgXCIrdGl0bGU9V0dTIDg0IC8gUHNldWRvLU1lcmNhdG9yICtwcm9qPW1lcmMgK2E9NjM3ODEzNyArYj02Mzc4MTM3ICtsYXRfdHM9MC4wICtsb25fMD0wLjAgK3hfMD0wLjAgK3lfMD0wICtrPTEuMCArdW5pdHM9bSArbmFkZ3JpZHM9QG51bGwgK25vX2RlZnNcIik7XG5cbiAgZGVmcy5XR1M4NCA9IGRlZnNbJ0VQU0c6NDMyNiddO1xuICBkZWZzWydFUFNHOjM3ODUnXSA9IGRlZnNbJ0VQU0c6Mzg1NyddOyAvLyBtYWludGFpbiBiYWNrd2FyZCBjb21wYXQsIG9mZmljaWFsIGNvZGUgaXMgMzg1N1xuICBkZWZzLkdPT0dMRSA9IGRlZnNbJ0VQU0c6Mzg1NyddO1xuICBkZWZzWydFUFNHOjkwMDkxMyddID0gZGVmc1snRVBTRzozODU3J107XG4gIGRlZnNbJ0VQU0c6MTAyMTEzJ10gPSBkZWZzWydFUFNHOjM4NTcnXTtcbn1cbiIsImltcG9ydCBwcm9qNCBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IFByb2ogZnJvbSBcIi4vUHJvalwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2NvbW1vbi90b1BvaW50XCI7XG5pbXBvcnQgZGVmcyBmcm9tIFwiLi9kZWZzXCI7XG5pbXBvcnQgdHJhbnNmb3JtIGZyb20gXCIuL3RyYW5zZm9ybVwiO1xuaW1wb3J0IG1ncnMgZnJvbSBcIm1ncnNcIjtcbmltcG9ydCBpbmNsdWRlZFByb2plY3Rpb25zIGZyb20gXCIuLi9wcm9qc1wiO1xuXG5wcm9qNC5kZWZhdWx0RGF0dW0gPSAnV0dTODQnOyAvL2RlZmF1bHQgZGF0dW1cbnByb2o0LlByb2ogPSBQcm9qO1xucHJvajQuV0dTODQgPSBuZXcgcHJvajQuUHJvaignV0dTODQnKTtcbnByb2o0LlBvaW50ID0gUG9pbnQ7XG5wcm9qNC50b1BvaW50ID0gY29tbW9uO1xucHJvajQuZGVmcyA9IGRlZnM7XG5wcm9qNC50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5wcm9qNC5tZ3JzID0gbWdycztcbnByb2o0LnZlcnNpb24gPSAnX19WRVJTSU9OX18nO1xuaW5jbHVkZWRQcm9qZWN0aW9ucyhwcm9qNCk7XG5leHBvcnQgZGVmYXVsdCBwcm9qNDtcbiIsInZhciBpZ25vcmVkQ2hhciA9IC9bXFxzX1xcLVxcL1xcKFxcKV0vZztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hdGNoKG9iaiwga2V5KSB7XG4gIGlmIChvYmpba2V5XSkge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIHZhciBsa2V5ID0ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZShpZ25vcmVkQ2hhciwgJycpO1xuICB2YXIgaSA9IC0xO1xuICB2YXIgdGVzdGtleSwgcHJvY2Vzc2VkS2V5O1xuICB3aGlsZSAoKytpIDwga2V5cy5sZW5ndGgpIHtcbiAgICB0ZXN0a2V5ID0ga2V5c1tpXTtcbiAgICBwcm9jZXNzZWRLZXkgPSB0ZXN0a2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZShpZ25vcmVkQ2hhciwgJycpO1xuICAgIGlmIChwcm9jZXNzZWRLZXkgPT09IGxrZXkpIHtcbiAgICAgIHJldHVybiBvYmpbdGVzdGtleV07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgZGVmcyBmcm9tICcuL2RlZnMnO1xuaW1wb3J0IHdrdCBmcm9tICd3a3QtcGFyc2VyJztcbmltcG9ydCBwcm9qU3RyIGZyb20gJy4vcHJvalN0cmluZyc7XG5pbXBvcnQgbWF0Y2ggZnJvbSAnLi9tYXRjaCc7XG5mdW5jdGlvbiB0ZXN0T2JqKGNvZGUpe1xuICByZXR1cm4gdHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gdGVzdERlZihjb2RlKXtcbiAgcmV0dXJuIGNvZGUgaW4gZGVmcztcbn1cbiB2YXIgY29kZVdvcmRzID0gWydQUk9KRUNURURDUlMnLCAnUFJPSkNSUycsICdHRU9HQ1MnLCdHRU9DQ1MnLCdQUk9KQ1MnLCdMT0NBTF9DUycsICdHRU9EQ1JTJywgJ0dFT0RFVElDQ1JTJywgJ0dFT0RFVElDREFUVU0nLCAnRU5HQ1JTJywgJ0VOR0lORUVSSU5HQ1JTJ107XG5mdW5jdGlvbiB0ZXN0V0tUKGNvZGUpe1xuICByZXR1cm4gY29kZVdvcmRzLnNvbWUoZnVuY3Rpb24gKHdvcmQpIHtcbiAgICByZXR1cm4gY29kZS5pbmRleE9mKHdvcmQpID4gLTE7XG4gIH0pO1xufVxudmFyIGNvZGVzID0gWyczODU3JywgJzkwMDkxMycsICczNzg1JywgJzEwMjExMyddO1xuZnVuY3Rpb24gY2hlY2tNZXJjYXRvcihpdGVtKSB7XG4gIHZhciBhdXRoID0gbWF0Y2goaXRlbSwgJ2F1dGhvcml0eScpO1xuICBpZiAoIWF1dGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGNvZGUgPSBtYXRjaChhdXRoLCAnZXBzZycpO1xuICByZXR1cm4gY29kZSAmJiBjb2Rlcy5pbmRleE9mKGNvZGUpID4gLTE7XG59XG5mdW5jdGlvbiBjaGVja1Byb2pTdHIoaXRlbSkge1xuICB2YXIgZXh0ID0gbWF0Y2goaXRlbSwgJ2V4dGVuc2lvbicpO1xuICBpZiAoIWV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gbWF0Y2goZXh0LCAncHJvajQnKTtcbn1cbmZ1bmN0aW9uIHRlc3RQcm9qKGNvZGUpe1xuICByZXR1cm4gY29kZVswXSA9PT0gJysnO1xufVxuZnVuY3Rpb24gcGFyc2UoY29kZSl7XG4gIGlmICh0ZXN0T2JqKGNvZGUpKSB7XG4gICAgLy9jaGVjayB0byBzZWUgaWYgdGhpcyBpcyBhIFdLVCBzdHJpbmdcbiAgICBpZiAodGVzdERlZihjb2RlKSkge1xuICAgICAgcmV0dXJuIGRlZnNbY29kZV07XG4gICAgfVxuICAgIGlmICh0ZXN0V0tUKGNvZGUpKSB7XG4gICAgICB2YXIgb3V0ID0gd2t0KGNvZGUpO1xuICAgICAgLy8gdGVzdCBvZiBzcGV0aWFsIGNhc2UsIGR1ZSB0byB0aGlzIGJlaW5nIGEgdmVyeSBjb21tb24gYW5kIG9mdGVuIG1hbGZvcm1lZFxuICAgICAgaWYgKGNoZWNrTWVyY2F0b3Iob3V0KSkge1xuICAgICAgICByZXR1cm4gZGVmc1snRVBTRzozODU3J107XG4gICAgICB9XG4gICAgICB2YXIgbWF5YmVQcm9qU3RyID0gY2hlY2tQcm9qU3RyKG91dCk7XG4gICAgICBpZiAobWF5YmVQcm9qU3RyKSB7XG4gICAgICAgIHJldHVybiBwcm9qU3RyKG1heWJlUHJvalN0cik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBpZiAodGVzdFByb2ooY29kZSkpIHtcbiAgICAgIHJldHVybiBwcm9qU3RyKGNvZGUpO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7XG4iLCJpbXBvcnQge0QyUn0gZnJvbSAnLi9jb25zdGFudHMvdmFsdWVzJztcbmltcG9ydCBQcmltZU1lcmlkaWFuIGZyb20gJy4vY29uc3RhbnRzL1ByaW1lTWVyaWRpYW4nO1xuaW1wb3J0IHVuaXRzIGZyb20gJy4vY29uc3RhbnRzL3VuaXRzJztcbmltcG9ydCBtYXRjaCBmcm9tICcuL21hdGNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGVmRGF0YSkge1xuICB2YXIgc2VsZiA9IHt9O1xuICB2YXIgcGFyYW1PYmogPSBkZWZEYXRhLnNwbGl0KCcrJykubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICByZXR1cm4gdi50cmltKCk7XG4gIH0pLmZpbHRlcihmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGE7XG4gIH0pLnJlZHVjZShmdW5jdGlvbihwLCBhKSB7XG4gICAgdmFyIHNwbGl0ID0gYS5zcGxpdCgnPScpO1xuICAgIHNwbGl0LnB1c2godHJ1ZSk7XG4gICAgcFtzcGxpdFswXS50b0xvd2VyQ2FzZSgpXSA9IHNwbGl0WzFdO1xuICAgIHJldHVybiBwO1xuICB9LCB7fSk7XG4gIHZhciBwYXJhbU5hbWUsIHBhcmFtVmFsLCBwYXJhbU91dG5hbWU7XG4gIHZhciBwYXJhbXMgPSB7XG4gICAgcHJvajogJ3Byb2pOYW1lJyxcbiAgICBkYXR1bTogJ2RhdHVtQ29kZScsXG4gICAgcmY6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHNlbGYucmYgPSBwYXJzZUZsb2F0KHYpO1xuICAgIH0sXG4gICAgbGF0XzA6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHNlbGYubGF0MCA9IHYgKiBEMlI7XG4gICAgfSxcbiAgICBsYXRfMTogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi5sYXQxID0gdiAqIEQyUjtcbiAgICB9LFxuICAgIGxhdF8yOiBmdW5jdGlvbih2KSB7XG4gICAgICBzZWxmLmxhdDIgPSB2ICogRDJSO1xuICAgIH0sXG4gICAgbGF0X3RzOiBmdW5jdGlvbih2KSB7XG4gICAgICBzZWxmLmxhdF90cyA9IHYgKiBEMlI7XG4gICAgfSxcbiAgICBsb25fMDogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi5sb25nMCA9IHYgKiBEMlI7XG4gICAgfSxcbiAgICBsb25fMTogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi5sb25nMSA9IHYgKiBEMlI7XG4gICAgfSxcbiAgICBsb25fMjogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi5sb25nMiA9IHYgKiBEMlI7XG4gICAgfSxcbiAgICBhbHBoYTogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi5hbHBoYSA9IHBhcnNlRmxvYXQodikgKiBEMlI7XG4gICAgfSxcbiAgICBsb25jOiBmdW5jdGlvbih2KSB7XG4gICAgICBzZWxmLmxvbmdjID0gdiAqIEQyUjtcbiAgICB9LFxuICAgIHhfMDogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi54MCA9IHBhcnNlRmxvYXQodik7XG4gICAgfSxcbiAgICB5XzA6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHNlbGYueTAgPSBwYXJzZUZsb2F0KHYpO1xuICAgIH0sXG4gICAga18wOiBmdW5jdGlvbih2KSB7XG4gICAgICBzZWxmLmswID0gcGFyc2VGbG9hdCh2KTtcbiAgICB9LFxuICAgIGs6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHNlbGYuazAgPSBwYXJzZUZsb2F0KHYpO1xuICAgIH0sXG4gICAgYTogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi5hID0gcGFyc2VGbG9hdCh2KTtcbiAgICB9LFxuICAgIGI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHNlbGYuYiA9IHBhcnNlRmxvYXQodik7XG4gICAgfSxcbiAgICByX2E6IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5SX0EgPSB0cnVlO1xuICAgIH0sXG4gICAgem9uZTogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi56b25lID0gcGFyc2VJbnQodiwgMTApO1xuICAgIH0sXG4gICAgc291dGg6IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi51dG1Tb3V0aCA9IHRydWU7XG4gICAgfSxcbiAgICB0b3dnczg0OiBmdW5jdGlvbih2KSB7XG4gICAgICBzZWxmLmRhdHVtX3BhcmFtcyA9IHYuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGEpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0b19tZXRlcjogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi50b19tZXRlciA9IHBhcnNlRmxvYXQodik7XG4gICAgfSxcbiAgICB1bml0czogZnVuY3Rpb24odikge1xuICAgICAgc2VsZi51bml0cyA9IHY7XG4gICAgICB2YXIgdW5pdCA9IG1hdGNoKHVuaXRzLCB2KTtcbiAgICAgIGlmICh1bml0KSB7XG4gICAgICAgIHNlbGYudG9fbWV0ZXIgPSB1bml0LnRvX21ldGVyO1xuICAgICAgfVxuICAgIH0sXG4gICAgZnJvbV9ncmVlbndpY2g6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHNlbGYuZnJvbV9ncmVlbndpY2ggPSB2ICogRDJSO1xuICAgIH0sXG4gICAgcG06IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHZhciBwbSA9IG1hdGNoKFByaW1lTWVyaWRpYW4sIHYpO1xuICAgICAgc2VsZi5mcm9tX2dyZWVud2ljaCA9IChwbSA/IHBtIDogcGFyc2VGbG9hdCh2KSkgKiBEMlI7XG4gICAgfSxcbiAgICBuYWRncmlkczogZnVuY3Rpb24odikge1xuICAgICAgaWYgKHYgPT09ICdAbnVsbCcpIHtcbiAgICAgICAgc2VsZi5kYXR1bUNvZGUgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VsZi5uYWRncmlkcyA9IHY7XG4gICAgICB9XG4gICAgfSxcbiAgICBheGlzOiBmdW5jdGlvbih2KSB7XG4gICAgICB2YXIgbGVnYWxBeGlzID0gXCJld25zdWRcIjtcbiAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMyAmJiBsZWdhbEF4aXMuaW5kZXhPZih2LnN1YnN0cigwLCAxKSkgIT09IC0xICYmIGxlZ2FsQXhpcy5pbmRleE9mKHYuc3Vic3RyKDEsIDEpKSAhPT0gLTEgJiYgbGVnYWxBeGlzLmluZGV4T2Yodi5zdWJzdHIoMiwgMSkpICE9PSAtMSkge1xuICAgICAgICBzZWxmLmF4aXMgPSB2O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgZm9yIChwYXJhbU5hbWUgaW4gcGFyYW1PYmopIHtcbiAgICBwYXJhbVZhbCA9IHBhcmFtT2JqW3BhcmFtTmFtZV07XG4gICAgaWYgKHBhcmFtTmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgIHBhcmFtT3V0bmFtZSA9IHBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiBwYXJhbU91dG5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGFyYW1PdXRuYW1lKHBhcmFtVmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZWxmW3BhcmFtT3V0bmFtZV0gPSBwYXJhbVZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZWxmW3BhcmFtTmFtZV0gPSBwYXJhbVZhbDtcbiAgICB9XG4gIH1cbiAgaWYodHlwZW9mIHNlbGYuZGF0dW1Db2RlID09PSAnc3RyaW5nJyAmJiBzZWxmLmRhdHVtQ29kZSAhPT0gXCJXR1M4NFwiKXtcbiAgICBzZWxmLmRhdHVtQ29kZSA9IHNlbGYuZGF0dW1Db2RlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59XG4iLCJpbXBvcnQgbWVyYyBmcm9tIFwiLi9wcm9qZWN0aW9ucy9tZXJjXCI7XG5pbXBvcnQgbG9uZ2xhdCBmcm9tIFwiLi9wcm9qZWN0aW9ucy9sb25nbGF0XCI7XG52YXIgcHJvanMgPSBbbWVyYywgbG9uZ2xhdF07XG52YXIgbmFtZXMgPSB7fTtcbnZhciBwcm9qU3RvcmUgPSBbXTtcblxuZnVuY3Rpb24gYWRkKHByb2osIGkpIHtcbiAgdmFyIGxlbiA9IHByb2pTdG9yZS5sZW5ndGg7XG4gIGlmICghcHJvai5uYW1lcykge1xuICAgIGNvbnNvbGUubG9nKGkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHByb2pTdG9yZVtsZW5dID0gcHJvajtcbiAgcHJvai5uYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICBuYW1lc1tuLnRvTG93ZXJDYXNlKCldID0gbGVuO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCB7YWRkfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gIGlmICghbmFtZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbiA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHR5cGVvZiBuYW1lc1tuXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvalN0b3JlW25hbWVzW25dXSkge1xuICAgIHJldHVybiBwcm9qU3RvcmVbbmFtZXNbbl1dO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpIHtcbiAgcHJvanMuZm9yRWFjaChhZGQpO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGFydDogc3RhcnQsXG4gIGFkZDogYWRkLFxuICBnZXQ6IGdldFxufTtcbiIsImltcG9ydCBtc2ZueiBmcm9tICcuLi9jb21tb24vbXNmbnonO1xuaW1wb3J0IHFzZm56IGZyb20gJy4uL2NvbW1vbi9xc2Zueic7XG5pbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5pbXBvcnQgYXNpbnogZnJvbSAnLi4vY29tbW9uL2FzaW56JztcbmltcG9ydCB7RVBTTE59IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcblxuICBpZiAoTWF0aC5hYnModGhpcy5sYXQxICsgdGhpcy5sYXQyKSA8IEVQU0xOKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMudGVtcCA9IHRoaXMuYiAvIHRoaXMuYTtcbiAgdGhpcy5lcyA9IDEgLSBNYXRoLnBvdyh0aGlzLnRlbXAsIDIpO1xuICB0aGlzLmUzID0gTWF0aC5zcXJ0KHRoaXMuZXMpO1xuXG4gIHRoaXMuc2luX3BvID0gTWF0aC5zaW4odGhpcy5sYXQxKTtcbiAgdGhpcy5jb3NfcG8gPSBNYXRoLmNvcyh0aGlzLmxhdDEpO1xuICB0aGlzLnQxID0gdGhpcy5zaW5fcG87XG4gIHRoaXMuY29uID0gdGhpcy5zaW5fcG87XG4gIHRoaXMubXMxID0gbXNmbnoodGhpcy5lMywgdGhpcy5zaW5fcG8sIHRoaXMuY29zX3BvKTtcbiAgdGhpcy5xczEgPSBxc2Zueih0aGlzLmUzLCB0aGlzLnNpbl9wbywgdGhpcy5jb3NfcG8pO1xuXG4gIHRoaXMuc2luX3BvID0gTWF0aC5zaW4odGhpcy5sYXQyKTtcbiAgdGhpcy5jb3NfcG8gPSBNYXRoLmNvcyh0aGlzLmxhdDIpO1xuICB0aGlzLnQyID0gdGhpcy5zaW5fcG87XG4gIHRoaXMubXMyID0gbXNmbnoodGhpcy5lMywgdGhpcy5zaW5fcG8sIHRoaXMuY29zX3BvKTtcbiAgdGhpcy5xczIgPSBxc2Zueih0aGlzLmUzLCB0aGlzLnNpbl9wbywgdGhpcy5jb3NfcG8pO1xuXG4gIHRoaXMuc2luX3BvID0gTWF0aC5zaW4odGhpcy5sYXQwKTtcbiAgdGhpcy5jb3NfcG8gPSBNYXRoLmNvcyh0aGlzLmxhdDApO1xuICB0aGlzLnQzID0gdGhpcy5zaW5fcG87XG4gIHRoaXMucXMwID0gcXNmbnoodGhpcy5lMywgdGhpcy5zaW5fcG8sIHRoaXMuY29zX3BvKTtcblxuICBpZiAoTWF0aC5hYnModGhpcy5sYXQxIC0gdGhpcy5sYXQyKSA+IEVQU0xOKSB7XG4gICAgdGhpcy5uczAgPSAodGhpcy5tczEgKiB0aGlzLm1zMSAtIHRoaXMubXMyICogdGhpcy5tczIpIC8gKHRoaXMucXMyIC0gdGhpcy5xczEpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMubnMwID0gdGhpcy5jb247XG4gIH1cbiAgdGhpcy5jID0gdGhpcy5tczEgKiB0aGlzLm1zMSArIHRoaXMubnMwICogdGhpcy5xczE7XG4gIHRoaXMucmggPSB0aGlzLmEgKiBNYXRoLnNxcnQodGhpcy5jIC0gdGhpcy5uczAgKiB0aGlzLnFzMCkgLyB0aGlzLm5zMDtcbn1cblxuLyogQWxiZXJzIENvbmljYWwgRXF1YWwgQXJlYSBmb3J3YXJkIGVxdWF0aW9ucy0tbWFwcGluZyBsYXQsbG9uZyB0byB4LHlcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG5cbiAgdmFyIGxvbiA9IHAueDtcbiAgdmFyIGxhdCA9IHAueTtcblxuICB0aGlzLnNpbl9waGkgPSBNYXRoLnNpbihsYXQpO1xuICB0aGlzLmNvc19waGkgPSBNYXRoLmNvcyhsYXQpO1xuXG4gIHZhciBxcyA9IHFzZm56KHRoaXMuZTMsIHRoaXMuc2luX3BoaSwgdGhpcy5jb3NfcGhpKTtcbiAgdmFyIHJoMSA9IHRoaXMuYSAqIE1hdGguc3FydCh0aGlzLmMgLSB0aGlzLm5zMCAqIHFzKSAvIHRoaXMubnMwO1xuICB2YXIgdGhldGEgPSB0aGlzLm5zMCAqIGFkanVzdF9sb24obG9uIC0gdGhpcy5sb25nMCk7XG4gIHZhciB4ID0gcmgxICogTWF0aC5zaW4odGhldGEpICsgdGhpcy54MDtcbiAgdmFyIHkgPSB0aGlzLnJoIC0gcmgxICogTWF0aC5jb3ModGhldGEpICsgdGhpcy55MDtcblxuICBwLnggPSB4O1xuICBwLnkgPSB5O1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgcmgxLCBxcywgY29uLCB0aGV0YSwgbG9uLCBsYXQ7XG5cbiAgcC54IC09IHRoaXMueDA7XG4gIHAueSA9IHRoaXMucmggLSBwLnkgKyB0aGlzLnkwO1xuICBpZiAodGhpcy5uczAgPj0gMCkge1xuICAgIHJoMSA9IE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICAgIGNvbiA9IDE7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmgxID0gLU1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICAgIGNvbiA9IC0xO1xuICB9XG4gIHRoZXRhID0gMDtcbiAgaWYgKHJoMSAhPT0gMCkge1xuICAgIHRoZXRhID0gTWF0aC5hdGFuMihjb24gKiBwLngsIGNvbiAqIHAueSk7XG4gIH1cbiAgY29uID0gcmgxICogdGhpcy5uczAgLyB0aGlzLmE7XG4gIGlmICh0aGlzLnNwaGVyZSkge1xuICAgIGxhdCA9IE1hdGguYXNpbigodGhpcy5jIC0gY29uICogY29uKSAvICgyICogdGhpcy5uczApKTtcbiAgfVxuICBlbHNlIHtcbiAgICBxcyA9ICh0aGlzLmMgLSBjb24gKiBjb24pIC8gdGhpcy5uczA7XG4gICAgbGF0ID0gdGhpcy5waGkxeih0aGlzLmUzLCBxcyk7XG4gIH1cblxuICBsb24gPSBhZGp1c3RfbG9uKHRoZXRhIC8gdGhpcy5uczAgKyB0aGlzLmxvbmcwKTtcbiAgcC54ID0gbG9uO1xuICBwLnkgPSBsYXQ7XG4gIHJldHVybiBwO1xufVxuXG4vKiBGdW5jdGlvbiB0byBjb21wdXRlIHBoaTEsIHRoZSBsYXRpdHVkZSBmb3IgdGhlIGludmVyc2Ugb2YgdGhlXG4gICBBbGJlcnMgQ29uaWNhbCBFcXVhbC1BcmVhIHByb2plY3Rpb24uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBwaGkxeihlY2NlbnQsIHFzKSB7XG4gIHZhciBzaW5waGksIGNvc3BoaSwgY29uLCBjb20sIGRwaGk7XG4gIHZhciBwaGkgPSBhc2lueigwLjUgKiBxcyk7XG4gIGlmIChlY2NlbnQgPCBFUFNMTikge1xuICAgIHJldHVybiBwaGk7XG4gIH1cblxuICB2YXIgZWNjbnRzID0gZWNjZW50ICogZWNjZW50O1xuICBmb3IgKHZhciBpID0gMTsgaSA8PSAyNTsgaSsrKSB7XG4gICAgc2lucGhpID0gTWF0aC5zaW4ocGhpKTtcbiAgICBjb3NwaGkgPSBNYXRoLmNvcyhwaGkpO1xuICAgIGNvbiA9IGVjY2VudCAqIHNpbnBoaTtcbiAgICBjb20gPSAxIC0gY29uICogY29uO1xuICAgIGRwaGkgPSAwLjUgKiBjb20gKiBjb20gLyBjb3NwaGkgKiAocXMgLyAoMSAtIGVjY250cykgLSBzaW5waGkgLyBjb20gKyAwLjUgLyBlY2NlbnQgKiBNYXRoLmxvZygoMSAtIGNvbikgLyAoMSArIGNvbikpKTtcbiAgICBwaGkgPSBwaGkgKyBkcGhpO1xuICAgIGlmIChNYXRoLmFicyhkcGhpKSA8PSAxZS03KSB7XG4gICAgICByZXR1cm4gcGhpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIkFsYmVyc19Db25pY19FcXVhbF9BcmVhXCIsIFwiQWxiZXJzXCIsIFwiYWVhXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXMsXG4gIHBoaTF6OiBwaGkxelxufTtcbiIsImltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcbmltcG9ydCB7SEFMRl9QSSwgRVBTTE59IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5pbXBvcnQgbWxmbiBmcm9tICcuLi9jb21tb24vbWxmbic7XG5pbXBvcnQgZTBmbiBmcm9tICcuLi9jb21tb24vZTBmbic7XG5pbXBvcnQgZTFmbiBmcm9tICcuLi9jb21tb24vZTFmbic7XG5pbXBvcnQgZTJmbiBmcm9tICcuLi9jb21tb24vZTJmbic7XG5pbXBvcnQgZTNmbiBmcm9tICcuLi9jb21tb24vZTNmbic7XG5pbXBvcnQgZ04gZnJvbSAnLi4vY29tbW9uL2dOJztcbmltcG9ydCBhc2lueiBmcm9tICcuLi9jb21tb24vYXNpbnonO1xuaW1wb3J0IGltbGZuIGZyb20gJy4uL2NvbW1vbi9pbWxmbic7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgdGhpcy5zaW5fcDEyID0gTWF0aC5zaW4odGhpcy5sYXQwKTtcbiAgdGhpcy5jb3NfcDEyID0gTWF0aC5jb3ModGhpcy5sYXQwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgbG9uID0gcC54O1xuICB2YXIgbGF0ID0gcC55O1xuICB2YXIgc2lucGhpID0gTWF0aC5zaW4ocC55KTtcbiAgdmFyIGNvc3BoaSA9IE1hdGguY29zKHAueSk7XG4gIHZhciBkbG9uID0gYWRqdXN0X2xvbihsb24gLSB0aGlzLmxvbmcwKTtcbiAgdmFyIGUwLCBlMSwgZTIsIGUzLCBNbHAsIE1sLCB0YW5waGksIE5sMSwgTmwsIHBzaSwgQXosIEcsIEgsIEdILCBIcywgYywga3AsIGNvc19jLCBzLCBzMiwgczMsIHM0LCBzNTtcbiAgaWYgKHRoaXMuc3BoZXJlKSB7XG4gICAgaWYgKE1hdGguYWJzKHRoaXMuc2luX3AxMiAtIDEpIDw9IEVQU0xOKSB7XG4gICAgICAvL05vcnRoIFBvbGUgY2FzZVxuICAgICAgcC54ID0gdGhpcy54MCArIHRoaXMuYSAqIChIQUxGX1BJIC0gbGF0KSAqIE1hdGguc2luKGRsb24pO1xuICAgICAgcC55ID0gdGhpcy55MCAtIHRoaXMuYSAqIChIQUxGX1BJIC0gbGF0KSAqIE1hdGguY29zKGRsb24pO1xuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGVsc2UgaWYgKE1hdGguYWJzKHRoaXMuc2luX3AxMiArIDEpIDw9IEVQU0xOKSB7XG4gICAgICAvL1NvdXRoIFBvbGUgY2FzZVxuICAgICAgcC54ID0gdGhpcy54MCArIHRoaXMuYSAqIChIQUxGX1BJICsgbGF0KSAqIE1hdGguc2luKGRsb24pO1xuICAgICAgcC55ID0gdGhpcy55MCArIHRoaXMuYSAqIChIQUxGX1BJICsgbGF0KSAqIE1hdGguY29zKGRsb24pO1xuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9kZWZhdWx0IGNhc2VcbiAgICAgIGNvc19jID0gdGhpcy5zaW5fcDEyICogc2lucGhpICsgdGhpcy5jb3NfcDEyICogY29zcGhpICogTWF0aC5jb3MoZGxvbik7XG4gICAgICBjID0gTWF0aC5hY29zKGNvc19jKTtcbiAgICAgIGtwID0gYyA/IGMgLyBNYXRoLnNpbihjKSA6IDE7XG4gICAgICBwLnggPSB0aGlzLngwICsgdGhpcy5hICoga3AgKiBjb3NwaGkgKiBNYXRoLnNpbihkbG9uKTtcbiAgICAgIHAueSA9IHRoaXMueTAgKyB0aGlzLmEgKiBrcCAqICh0aGlzLmNvc19wMTIgKiBzaW5waGkgLSB0aGlzLnNpbl9wMTIgKiBjb3NwaGkgKiBNYXRoLmNvcyhkbG9uKSk7XG4gICAgICByZXR1cm4gcDtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgZTAgPSBlMGZuKHRoaXMuZXMpO1xuICAgIGUxID0gZTFmbih0aGlzLmVzKTtcbiAgICBlMiA9IGUyZm4odGhpcy5lcyk7XG4gICAgZTMgPSBlM2ZuKHRoaXMuZXMpO1xuICAgIGlmIChNYXRoLmFicyh0aGlzLnNpbl9wMTIgLSAxKSA8PSBFUFNMTikge1xuICAgICAgLy9Ob3J0aCBQb2xlIGNhc2VcbiAgICAgIE1scCA9IHRoaXMuYSAqIG1sZm4oZTAsIGUxLCBlMiwgZTMsIEhBTEZfUEkpO1xuICAgICAgTWwgPSB0aGlzLmEgKiBtbGZuKGUwLCBlMSwgZTIsIGUzLCBsYXQpO1xuICAgICAgcC54ID0gdGhpcy54MCArIChNbHAgLSBNbCkgKiBNYXRoLnNpbihkbG9uKTtcbiAgICAgIHAueSA9IHRoaXMueTAgLSAoTWxwIC0gTWwpICogTWF0aC5jb3MoZGxvbik7XG4gICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5zaW5fcDEyICsgMSkgPD0gRVBTTE4pIHtcbiAgICAgIC8vU291dGggUG9sZSBjYXNlXG4gICAgICBNbHAgPSB0aGlzLmEgKiBtbGZuKGUwLCBlMSwgZTIsIGUzLCBIQUxGX1BJKTtcbiAgICAgIE1sID0gdGhpcy5hICogbWxmbihlMCwgZTEsIGUyLCBlMywgbGF0KTtcbiAgICAgIHAueCA9IHRoaXMueDAgKyAoTWxwICsgTWwpICogTWF0aC5zaW4oZGxvbik7XG4gICAgICBwLnkgPSB0aGlzLnkwICsgKE1scCArIE1sKSAqIE1hdGguY29zKGRsb24pO1xuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9EZWZhdWx0IGNhc2VcbiAgICAgIHRhbnBoaSA9IHNpbnBoaSAvIGNvc3BoaTtcbiAgICAgIE5sMSA9IGdOKHRoaXMuYSwgdGhpcy5lLCB0aGlzLnNpbl9wMTIpO1xuICAgICAgTmwgPSBnTih0aGlzLmEsIHRoaXMuZSwgc2lucGhpKTtcbiAgICAgIHBzaSA9IE1hdGguYXRhbigoMSAtIHRoaXMuZXMpICogdGFucGhpICsgdGhpcy5lcyAqIE5sMSAqIHRoaXMuc2luX3AxMiAvIChObCAqIGNvc3BoaSkpO1xuICAgICAgQXogPSBNYXRoLmF0YW4yKE1hdGguc2luKGRsb24pLCB0aGlzLmNvc19wMTIgKiBNYXRoLnRhbihwc2kpIC0gdGhpcy5zaW5fcDEyICogTWF0aC5jb3MoZGxvbikpO1xuICAgICAgaWYgKEF6ID09PSAwKSB7XG4gICAgICAgIHMgPSBNYXRoLmFzaW4odGhpcy5jb3NfcDEyICogTWF0aC5zaW4ocHNpKSAtIHRoaXMuc2luX3AxMiAqIE1hdGguY29zKHBzaSkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoTWF0aC5hYnMoQXopIC0gTWF0aC5QSSkgPD0gRVBTTE4pIHtcbiAgICAgICAgcyA9IC1NYXRoLmFzaW4odGhpcy5jb3NfcDEyICogTWF0aC5zaW4ocHNpKSAtIHRoaXMuc2luX3AxMiAqIE1hdGguY29zKHBzaSkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHMgPSBNYXRoLmFzaW4oTWF0aC5zaW4oZGxvbikgKiBNYXRoLmNvcyhwc2kpIC8gTWF0aC5zaW4oQXopKTtcbiAgICAgIH1cbiAgICAgIEcgPSB0aGlzLmUgKiB0aGlzLnNpbl9wMTIgLyBNYXRoLnNxcnQoMSAtIHRoaXMuZXMpO1xuICAgICAgSCA9IHRoaXMuZSAqIHRoaXMuY29zX3AxMiAqIE1hdGguY29zKEF6KSAvIE1hdGguc3FydCgxIC0gdGhpcy5lcyk7XG4gICAgICBHSCA9IEcgKiBIO1xuICAgICAgSHMgPSBIICogSDtcbiAgICAgIHMyID0gcyAqIHM7XG4gICAgICBzMyA9IHMyICogcztcbiAgICAgIHM0ID0gczMgKiBzO1xuICAgICAgczUgPSBzNCAqIHM7XG4gICAgICBjID0gTmwxICogcyAqICgxIC0gczIgKiBIcyAqICgxIC0gSHMpIC8gNiArIHMzIC8gOCAqIEdIICogKDEgLSAyICogSHMpICsgczQgLyAxMjAgKiAoSHMgKiAoNCAtIDcgKiBIcykgLSAzICogRyAqIEcgKiAoMSAtIDcgKiBIcykpIC0gczUgLyA0OCAqIEdIKTtcbiAgICAgIHAueCA9IHRoaXMueDAgKyBjICogTWF0aC5zaW4oQXopO1xuICAgICAgcC55ID0gdGhpcy55MCArIGMgKiBNYXRoLmNvcyhBeik7XG4gICAgICByZXR1cm4gcDtcbiAgICB9XG4gIH1cblxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKHApIHtcbiAgcC54IC09IHRoaXMueDA7XG4gIHAueSAtPSB0aGlzLnkwO1xuICB2YXIgcmgsIHosIHNpbnosIGNvc3osIGxvbiwgbGF0LCBjb24sIGUwLCBlMSwgZTIsIGUzLCBNbHAsIE0sIE4xLCBwc2ksIEF6LCBjb3NBeiwgdG1wLCBBLCBCLCBELCBFZSwgRiwgc2lucHNpO1xuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICByaCA9IE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICAgIGlmIChyaCA+ICgyICogSEFMRl9QSSAqIHRoaXMuYSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgeiA9IHJoIC8gdGhpcy5hO1xuXG4gICAgc2lueiA9IE1hdGguc2luKHopO1xuICAgIGNvc3ogPSBNYXRoLmNvcyh6KTtcblxuICAgIGxvbiA9IHRoaXMubG9uZzA7XG4gICAgaWYgKE1hdGguYWJzKHJoKSA8PSBFUFNMTikge1xuICAgICAgbGF0ID0gdGhpcy5sYXQwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxhdCA9IGFzaW56KGNvc3ogKiB0aGlzLnNpbl9wMTIgKyAocC55ICogc2lueiAqIHRoaXMuY29zX3AxMikgLyByaCk7XG4gICAgICBjb24gPSBNYXRoLmFicyh0aGlzLmxhdDApIC0gSEFMRl9QSTtcbiAgICAgIGlmIChNYXRoLmFicyhjb24pIDw9IEVQU0xOKSB7XG4gICAgICAgIGlmICh0aGlzLmxhdDAgPj0gMCkge1xuICAgICAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIE1hdGguYXRhbjIocC54LCAtIHAueSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCAtIE1hdGguYXRhbjIoLXAueCwgcC55KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvKmNvbiA9IGNvc3ogLSB0aGlzLnNpbl9wMTIgKiBNYXRoLnNpbihsYXQpO1xuICAgICAgICBpZiAoKE1hdGguYWJzKGNvbikgPCBFUFNMTikgJiYgKE1hdGguYWJzKHAueCkgPCBFUFNMTikpIHtcbiAgICAgICAgICAvL25vLW9wLCBqdXN0IGtlZXAgdGhlIGxvbiB2YWx1ZSBhcyBpc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0ZW1wID0gTWF0aC5hdGFuMigocC54ICogc2lueiAqIHRoaXMuY29zX3AxMiksIChjb24gKiByaCkpO1xuICAgICAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIE1hdGguYXRhbjIoKHAueCAqIHNpbnogKiB0aGlzLmNvc19wMTIpLCAoY29uICogcmgpKSk7XG4gICAgICAgIH0qL1xuICAgICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyBNYXRoLmF0YW4yKHAueCAqIHNpbnosIHJoICogdGhpcy5jb3NfcDEyICogY29zeiAtIHAueSAqIHRoaXMuc2luX3AxMiAqIHNpbnopKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwLnggPSBsb247XG4gICAgcC55ID0gbGF0O1xuICAgIHJldHVybiBwO1xuICB9XG4gIGVsc2Uge1xuICAgIGUwID0gZTBmbih0aGlzLmVzKTtcbiAgICBlMSA9IGUxZm4odGhpcy5lcyk7XG4gICAgZTIgPSBlMmZuKHRoaXMuZXMpO1xuICAgIGUzID0gZTNmbih0aGlzLmVzKTtcbiAgICBpZiAoTWF0aC5hYnModGhpcy5zaW5fcDEyIC0gMSkgPD0gRVBTTE4pIHtcbiAgICAgIC8vTm9ydGggcG9sZSBjYXNlXG4gICAgICBNbHAgPSB0aGlzLmEgKiBtbGZuKGUwLCBlMSwgZTIsIGUzLCBIQUxGX1BJKTtcbiAgICAgIHJoID0gTWF0aC5zcXJ0KHAueCAqIHAueCArIHAueSAqIHAueSk7XG4gICAgICBNID0gTWxwIC0gcmg7XG4gICAgICBsYXQgPSBpbWxmbihNIC8gdGhpcy5hLCBlMCwgZTEsIGUyLCBlMyk7XG4gICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyBNYXRoLmF0YW4yKHAueCwgLSAxICogcC55KSk7XG4gICAgICBwLnggPSBsb247XG4gICAgICBwLnkgPSBsYXQ7XG4gICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5zaW5fcDEyICsgMSkgPD0gRVBTTE4pIHtcbiAgICAgIC8vU291dGggcG9sZSBjYXNlXG4gICAgICBNbHAgPSB0aGlzLmEgKiBtbGZuKGUwLCBlMSwgZTIsIGUzLCBIQUxGX1BJKTtcbiAgICAgIHJoID0gTWF0aC5zcXJ0KHAueCAqIHAueCArIHAueSAqIHAueSk7XG4gICAgICBNID0gcmggLSBNbHA7XG5cbiAgICAgIGxhdCA9IGltbGZuKE0gLyB0aGlzLmEsIGUwLCBlMSwgZTIsIGUzKTtcbiAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIE1hdGguYXRhbjIocC54LCBwLnkpKTtcbiAgICAgIHAueCA9IGxvbjtcbiAgICAgIHAueSA9IGxhdDtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vZGVmYXVsdCBjYXNlXG4gICAgICByaCA9IE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICAgICAgQXogPSBNYXRoLmF0YW4yKHAueCwgcC55KTtcbiAgICAgIE4xID0gZ04odGhpcy5hLCB0aGlzLmUsIHRoaXMuc2luX3AxMik7XG4gICAgICBjb3NBeiA9IE1hdGguY29zKEF6KTtcbiAgICAgIHRtcCA9IHRoaXMuZSAqIHRoaXMuY29zX3AxMiAqIGNvc0F6O1xuICAgICAgQSA9IC10bXAgKiB0bXAgLyAoMSAtIHRoaXMuZXMpO1xuICAgICAgQiA9IDMgKiB0aGlzLmVzICogKDEgLSBBKSAqIHRoaXMuc2luX3AxMiAqIHRoaXMuY29zX3AxMiAqIGNvc0F6IC8gKDEgLSB0aGlzLmVzKTtcbiAgICAgIEQgPSByaCAvIE4xO1xuICAgICAgRWUgPSBEIC0gQSAqICgxICsgQSkgKiBNYXRoLnBvdyhELCAzKSAvIDYgLSBCICogKDEgKyAzICogQSkgKiBNYXRoLnBvdyhELCA0KSAvIDI0O1xuICAgICAgRiA9IDEgLSBBICogRWUgKiBFZSAvIDIgLSBEICogRWUgKiBFZSAqIEVlIC8gNjtcbiAgICAgIHBzaSA9IE1hdGguYXNpbih0aGlzLnNpbl9wMTIgKiBNYXRoLmNvcyhFZSkgKyB0aGlzLmNvc19wMTIgKiBNYXRoLnNpbihFZSkgKiBjb3NBeik7XG4gICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyBNYXRoLmFzaW4oTWF0aC5zaW4oQXopICogTWF0aC5zaW4oRWUpIC8gTWF0aC5jb3MocHNpKSkpO1xuICAgICAgc2lucHNpID0gTWF0aC5zaW4ocHNpKTtcbiAgICAgIGxhdCA9IE1hdGguYXRhbjIoKHNpbnBzaSAtIHRoaXMuZXMgKiBGICogdGhpcy5zaW5fcDEyKSAqIE1hdGgudGFuKHBzaSksIHNpbnBzaSAqICgxIC0gdGhpcy5lcykpO1xuICAgICAgcC54ID0gbG9uO1xuICAgICAgcC55ID0gbGF0O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIkF6aW11dGhhbF9FcXVpZGlzdGFudFwiLCBcImFlcWRcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsImltcG9ydCBtbGZuIGZyb20gJy4uL2NvbW1vbi9tbGZuJztcbmltcG9ydCBlMGZuIGZyb20gJy4uL2NvbW1vbi9lMGZuJztcbmltcG9ydCBlMWZuIGZyb20gJy4uL2NvbW1vbi9lMWZuJztcbmltcG9ydCBlMmZuIGZyb20gJy4uL2NvbW1vbi9lMmZuJztcbmltcG9ydCBlM2ZuIGZyb20gJy4uL2NvbW1vbi9lM2ZuJztcbmltcG9ydCBnTiBmcm9tICcuLi9jb21tb24vZ04nO1xuaW1wb3J0IGFkanVzdF9sb24gZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sb24nO1xuaW1wb3J0IGFkanVzdF9sYXQgZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sYXQnO1xuaW1wb3J0IGltbGZuIGZyb20gJy4uL2NvbW1vbi9pbWxmbic7XG5pbXBvcnQge0hBTEZfUEksIEVQU0xOfSBmcm9tICcuLi9jb25zdGFudHMvdmFsdWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGlmICghdGhpcy5zcGhlcmUpIHtcbiAgICB0aGlzLmUwID0gZTBmbih0aGlzLmVzKTtcbiAgICB0aGlzLmUxID0gZTFmbih0aGlzLmVzKTtcbiAgICB0aGlzLmUyID0gZTJmbih0aGlzLmVzKTtcbiAgICB0aGlzLmUzID0gZTNmbih0aGlzLmVzKTtcbiAgICB0aGlzLm1sMCA9IHRoaXMuYSAqIG1sZm4odGhpcy5lMCwgdGhpcy5lMSwgdGhpcy5lMiwgdGhpcy5lMywgdGhpcy5sYXQwKTtcbiAgfVxufVxuXG4vKiBDYXNzaW5pIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG5cbiAgLyogRm9yd2FyZCBlcXVhdGlvbnNcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgdmFyIHgsIHk7XG4gIHZhciBsYW0gPSBwLng7XG4gIHZhciBwaGkgPSBwLnk7XG4gIGxhbSA9IGFkanVzdF9sb24obGFtIC0gdGhpcy5sb25nMCk7XG5cbiAgaWYgKHRoaXMuc3BoZXJlKSB7XG4gICAgeCA9IHRoaXMuYSAqIE1hdGguYXNpbihNYXRoLmNvcyhwaGkpICogTWF0aC5zaW4obGFtKSk7XG4gICAgeSA9IHRoaXMuYSAqIChNYXRoLmF0YW4yKE1hdGgudGFuKHBoaSksIE1hdGguY29zKGxhbSkpIC0gdGhpcy5sYXQwKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvL2VsbGlwc29pZFxuICAgIHZhciBzaW5waGkgPSBNYXRoLnNpbihwaGkpO1xuICAgIHZhciBjb3NwaGkgPSBNYXRoLmNvcyhwaGkpO1xuICAgIHZhciBubCA9IGdOKHRoaXMuYSwgdGhpcy5lLCBzaW5waGkpO1xuICAgIHZhciB0bCA9IE1hdGgudGFuKHBoaSkgKiBNYXRoLnRhbihwaGkpO1xuICAgIHZhciBhbCA9IGxhbSAqIE1hdGguY29zKHBoaSk7XG4gICAgdmFyIGFzcSA9IGFsICogYWw7XG4gICAgdmFyIGNsID0gdGhpcy5lcyAqIGNvc3BoaSAqIGNvc3BoaSAvICgxIC0gdGhpcy5lcyk7XG4gICAgdmFyIG1sID0gdGhpcy5hICogbWxmbih0aGlzLmUwLCB0aGlzLmUxLCB0aGlzLmUyLCB0aGlzLmUzLCBwaGkpO1xuXG4gICAgeCA9IG5sICogYWwgKiAoMSAtIGFzcSAqIHRsICogKDEgLyA2IC0gKDggLSB0bCArIDggKiBjbCkgKiBhc3EgLyAxMjApKTtcbiAgICB5ID0gbWwgLSB0aGlzLm1sMCArIG5sICogc2lucGhpIC8gY29zcGhpICogYXNxICogKDAuNSArICg1IC0gdGwgKyA2ICogY2wpICogYXNxIC8gMjQpO1xuXG5cbiAgfVxuXG4gIHAueCA9IHggKyB0aGlzLngwO1xuICBwLnkgPSB5ICsgdGhpcy55MDtcbiAgcmV0dXJuIHA7XG59XG5cbi8qIEludmVyc2UgZXF1YXRpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKHApIHtcbiAgcC54IC09IHRoaXMueDA7XG4gIHAueSAtPSB0aGlzLnkwO1xuICB2YXIgeCA9IHAueCAvIHRoaXMuYTtcbiAgdmFyIHkgPSBwLnkgLyB0aGlzLmE7XG4gIHZhciBwaGksIGxhbTtcblxuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICB2YXIgZGQgPSB5ICsgdGhpcy5sYXQwO1xuICAgIHBoaSA9IE1hdGguYXNpbihNYXRoLnNpbihkZCkgKiBNYXRoLmNvcyh4KSk7XG4gICAgbGFtID0gTWF0aC5hdGFuMihNYXRoLnRhbih4KSwgTWF0aC5jb3MoZGQpKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvKiBlbGxpcHNvaWQgKi9cbiAgICB2YXIgbWwxID0gdGhpcy5tbDAgLyB0aGlzLmEgKyB5O1xuICAgIHZhciBwaGkxID0gaW1sZm4obWwxLCB0aGlzLmUwLCB0aGlzLmUxLCB0aGlzLmUyLCB0aGlzLmUzKTtcbiAgICBpZiAoTWF0aC5hYnMoTWF0aC5hYnMocGhpMSkgLSBIQUxGX1BJKSA8PSBFUFNMTikge1xuICAgICAgcC54ID0gdGhpcy5sb25nMDtcbiAgICAgIHAueSA9IEhBTEZfUEk7XG4gICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgcC55ICo9IC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICAgIHZhciBubDEgPSBnTih0aGlzLmEsIHRoaXMuZSwgTWF0aC5zaW4ocGhpMSkpO1xuXG4gICAgdmFyIHJsMSA9IG5sMSAqIG5sMSAqIG5sMSAvIHRoaXMuYSAvIHRoaXMuYSAqICgxIC0gdGhpcy5lcyk7XG4gICAgdmFyIHRsMSA9IE1hdGgucG93KE1hdGgudGFuKHBoaTEpLCAyKTtcbiAgICB2YXIgZGwgPSB4ICogdGhpcy5hIC8gbmwxO1xuICAgIHZhciBkc3EgPSBkbCAqIGRsO1xuICAgIHBoaSA9IHBoaTEgLSBubDEgKiBNYXRoLnRhbihwaGkxKSAvIHJsMSAqIGRsICogZGwgKiAoMC41IC0gKDEgKyAzICogdGwxKSAqIGRsICogZGwgLyAyNCk7XG4gICAgbGFtID0gZGwgKiAoMSAtIGRzcSAqICh0bDEgLyAzICsgKDEgKyAzICogdGwxKSAqIHRsMSAqIGRzcSAvIDE1KSkgLyBNYXRoLmNvcyhwaGkxKTtcblxuICB9XG5cbiAgcC54ID0gYWRqdXN0X2xvbihsYW0gKyB0aGlzLmxvbmcwKTtcbiAgcC55ID0gYWRqdXN0X2xhdChwaGkpO1xuICByZXR1cm4gcDtcblxufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wiQ2Fzc2luaVwiLCBcIkNhc3NpbmlfU29sZG5lclwiLCBcImNhc3NcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsImltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcbmltcG9ydCBxc2ZueiBmcm9tICcuLi9jb21tb24vcXNmbnonO1xuaW1wb3J0IG1zZm56IGZyb20gJy4uL2NvbW1vbi9tc2Zueic7XG5pbXBvcnQgaXFzZm56IGZyb20gJy4uL2NvbW1vbi9pcXNmbnonO1xuXG4vKlxuICByZWZlcmVuY2U6XG4gICAgXCJDYXJ0b2dyYXBoaWMgUHJvamVjdGlvbiBQcm9jZWR1cmVzIGZvciB0aGUgVU5JWCBFbnZpcm9ubWVudC1cbiAgICBBIFVzZXIncyBNYW51YWxcIiBieSBHZXJhbGQgSS4gRXZlbmRlbixcbiAgICBVU0dTIE9wZW4gRmlsZSBSZXBvcnQgOTAtMjg0YW5kIFJlbGVhc2UgNCBJbnRlcmltIFJlcG9ydHMgKDIwMDMpXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vbm8tb3BcbiAgaWYgKCF0aGlzLnNwaGVyZSkge1xuICAgIHRoaXMuazAgPSBtc2Zueih0aGlzLmUsIE1hdGguc2luKHRoaXMubGF0X3RzKSwgTWF0aC5jb3ModGhpcy5sYXRfdHMpKTtcbiAgfVxufVxuXG4vKiBDeWxpbmRyaWNhbCBFcXVhbCBBcmVhIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG4gIHZhciB4LCB5O1xuICAvKiBGb3J3YXJkIGVxdWF0aW9uc1xuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0qL1xuICB2YXIgZGxvbiA9IGFkanVzdF9sb24obG9uIC0gdGhpcy5sb25nMCk7XG4gIGlmICh0aGlzLnNwaGVyZSkge1xuICAgIHggPSB0aGlzLngwICsgdGhpcy5hICogZGxvbiAqIE1hdGguY29zKHRoaXMubGF0X3RzKTtcbiAgICB5ID0gdGhpcy55MCArIHRoaXMuYSAqIE1hdGguc2luKGxhdCkgLyBNYXRoLmNvcyh0aGlzLmxhdF90cyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIHFzID0gcXNmbnoodGhpcy5lLCBNYXRoLnNpbihsYXQpKTtcbiAgICB4ID0gdGhpcy54MCArIHRoaXMuYSAqIHRoaXMuazAgKiBkbG9uO1xuICAgIHkgPSB0aGlzLnkwICsgdGhpcy5hICogcXMgKiAwLjUgLyB0aGlzLmswO1xuICB9XG5cbiAgcC54ID0geDtcbiAgcC55ID0geTtcbiAgcmV0dXJuIHA7XG59XG5cbi8qIEN5bGluZHJpY2FsIEVxdWFsIEFyZWEgaW52ZXJzZSBlcXVhdGlvbnMtLW1hcHBpbmcgeCx5IHRvIGxhdC9sb25nXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKHApIHtcbiAgcC54IC09IHRoaXMueDA7XG4gIHAueSAtPSB0aGlzLnkwO1xuICB2YXIgbG9uLCBsYXQ7XG5cbiAgaWYgKHRoaXMuc3BoZXJlKSB7XG4gICAgbG9uID0gYWRqdXN0X2xvbih0aGlzLmxvbmcwICsgKHAueCAvIHRoaXMuYSkgLyBNYXRoLmNvcyh0aGlzLmxhdF90cykpO1xuICAgIGxhdCA9IE1hdGguYXNpbigocC55IC8gdGhpcy5hKSAqIE1hdGguY29zKHRoaXMubGF0X3RzKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgbGF0ID0gaXFzZm56KHRoaXMuZSwgMiAqIHAueSAqIHRoaXMuazAgLyB0aGlzLmEpO1xuICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIHAueCAvICh0aGlzLmEgKiB0aGlzLmswKSk7XG4gIH1cblxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJjZWFcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsImltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcbmltcG9ydCBhZGp1c3RfbGF0IGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbGF0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgdGhpcy54MCA9IHRoaXMueDAgfHwgMDtcbiAgdGhpcy55MCA9IHRoaXMueTAgfHwgMDtcbiAgdGhpcy5sYXQwID0gdGhpcy5sYXQwIHx8IDA7XG4gIHRoaXMubG9uZzAgPSB0aGlzLmxvbmcwIHx8IDA7XG4gIHRoaXMubGF0X3RzID0gdGhpcy5sYXRfdHMgfHwgMDtcbiAgdGhpcy50aXRsZSA9IHRoaXMudGl0bGUgfHwgXCJFcXVpZGlzdGFudCBDeWxpbmRyaWNhbCAoUGxhdGUgQ2FycmUpXCI7XG5cbiAgdGhpcy5yYyA9IE1hdGguY29zKHRoaXMubGF0X3RzKTtcbn1cblxuLy8gZm9yd2FyZCBlcXVhdGlvbnMtLW1hcHBpbmcgbGF0LGxvbmcgdG8geCx5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuXG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG5cbiAgdmFyIGRsb24gPSBhZGp1c3RfbG9uKGxvbiAtIHRoaXMubG9uZzApO1xuICB2YXIgZGxhdCA9IGFkanVzdF9sYXQobGF0IC0gdGhpcy5sYXQwKTtcbiAgcC54ID0gdGhpcy54MCArICh0aGlzLmEgKiBkbG9uICogdGhpcy5yYyk7XG4gIHAueSA9IHRoaXMueTAgKyAodGhpcy5hICogZGxhdCk7XG4gIHJldHVybiBwO1xufVxuXG4vLyBpbnZlcnNlIGVxdWF0aW9ucy0tbWFwcGluZyB4LHkgdG8gbGF0L2xvbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShwKSB7XG5cbiAgdmFyIHggPSBwLng7XG4gIHZhciB5ID0gcC55O1xuXG4gIHAueCA9IGFkanVzdF9sb24odGhpcy5sb25nMCArICgoeCAtIHRoaXMueDApIC8gKHRoaXMuYSAqIHRoaXMucmMpKSk7XG4gIHAueSA9IGFkanVzdF9sYXQodGhpcy5sYXQwICsgKCh5IC0gdGhpcy55MCkgLyAodGhpcy5hKSkpO1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIkVxdWlyZWN0YW5ndWxhclwiLCBcIkVxdWlkaXN0YW50X0N5bGluZHJpY2FsXCIsIFwiZXFjXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXNcbn07XG4iLCJpbXBvcnQgZTBmbiBmcm9tICcuLi9jb21tb24vZTBmbic7XG5pbXBvcnQgZTFmbiBmcm9tICcuLi9jb21tb24vZTFmbic7XG5pbXBvcnQgZTJmbiBmcm9tICcuLi9jb21tb24vZTJmbic7XG5pbXBvcnQgZTNmbiBmcm9tICcuLi9jb21tb24vZTNmbic7XG5pbXBvcnQgbXNmbnogZnJvbSAnLi4vY29tbW9uL21zZm56JztcbmltcG9ydCBtbGZuIGZyb20gJy4uL2NvbW1vbi9tbGZuJztcbmltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcbmltcG9ydCBhZGp1c3RfbGF0IGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbGF0JztcbmltcG9ydCBpbWxmbiBmcm9tICcuLi9jb21tb24vaW1sZm4nO1xuaW1wb3J0IHtFUFNMTn0gZnJvbSAnLi4vY29uc3RhbnRzL3ZhbHVlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuXG4gIC8qIFBsYWNlIHBhcmFtZXRlcnMgaW4gc3RhdGljIHN0b3JhZ2UgZm9yIGNvbW1vbiB1c2VcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvLyBTdGFuZGFyZCBQYXJhbGxlbHMgY2Fubm90IGJlIGVxdWFsIGFuZCBvbiBvcHBvc2l0ZSBzaWRlcyBvZiB0aGUgZXF1YXRvclxuICBpZiAoTWF0aC5hYnModGhpcy5sYXQxICsgdGhpcy5sYXQyKSA8IEVQU0xOKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMubGF0MiA9IHRoaXMubGF0MiB8fCB0aGlzLmxhdDE7XG4gIHRoaXMudGVtcCA9IHRoaXMuYiAvIHRoaXMuYTtcbiAgdGhpcy5lcyA9IDEgLSBNYXRoLnBvdyh0aGlzLnRlbXAsIDIpO1xuICB0aGlzLmUgPSBNYXRoLnNxcnQodGhpcy5lcyk7XG4gIHRoaXMuZTAgPSBlMGZuKHRoaXMuZXMpO1xuICB0aGlzLmUxID0gZTFmbih0aGlzLmVzKTtcbiAgdGhpcy5lMiA9IGUyZm4odGhpcy5lcyk7XG4gIHRoaXMuZTMgPSBlM2ZuKHRoaXMuZXMpO1xuXG4gIHRoaXMuc2lucGhpID0gTWF0aC5zaW4odGhpcy5sYXQxKTtcbiAgdGhpcy5jb3NwaGkgPSBNYXRoLmNvcyh0aGlzLmxhdDEpO1xuXG4gIHRoaXMubXMxID0gbXNmbnoodGhpcy5lLCB0aGlzLnNpbnBoaSwgdGhpcy5jb3NwaGkpO1xuICB0aGlzLm1sMSA9IG1sZm4odGhpcy5lMCwgdGhpcy5lMSwgdGhpcy5lMiwgdGhpcy5lMywgdGhpcy5sYXQxKTtcblxuICBpZiAoTWF0aC5hYnModGhpcy5sYXQxIC0gdGhpcy5sYXQyKSA8IEVQU0xOKSB7XG4gICAgdGhpcy5ucyA9IHRoaXMuc2lucGhpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMuc2lucGhpID0gTWF0aC5zaW4odGhpcy5sYXQyKTtcbiAgICB0aGlzLmNvc3BoaSA9IE1hdGguY29zKHRoaXMubGF0Mik7XG4gICAgdGhpcy5tczIgPSBtc2Zueih0aGlzLmUsIHRoaXMuc2lucGhpLCB0aGlzLmNvc3BoaSk7XG4gICAgdGhpcy5tbDIgPSBtbGZuKHRoaXMuZTAsIHRoaXMuZTEsIHRoaXMuZTIsIHRoaXMuZTMsIHRoaXMubGF0Mik7XG4gICAgdGhpcy5ucyA9ICh0aGlzLm1zMSAtIHRoaXMubXMyKSAvICh0aGlzLm1sMiAtIHRoaXMubWwxKTtcbiAgfVxuICB0aGlzLmcgPSB0aGlzLm1sMSArIHRoaXMubXMxIC8gdGhpcy5ucztcbiAgdGhpcy5tbDAgPSBtbGZuKHRoaXMuZTAsIHRoaXMuZTEsIHRoaXMuZTIsIHRoaXMuZTMsIHRoaXMubGF0MCk7XG4gIHRoaXMucmggPSB0aGlzLmEgKiAodGhpcy5nIC0gdGhpcy5tbDApO1xufVxuXG4vKiBFcXVpZGlzdGFudCBDb25pYyBmb3J3YXJkIGVxdWF0aW9ucy0tbWFwcGluZyBsYXQsbG9uZyB0byB4LHlcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgbG9uID0gcC54O1xuICB2YXIgbGF0ID0gcC55O1xuICB2YXIgcmgxO1xuXG4gIC8qIEZvcndhcmQgZXF1YXRpb25zXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLSovXG4gIGlmICh0aGlzLnNwaGVyZSkge1xuICAgIHJoMSA9IHRoaXMuYSAqICh0aGlzLmcgLSBsYXQpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBtbCA9IG1sZm4odGhpcy5lMCwgdGhpcy5lMSwgdGhpcy5lMiwgdGhpcy5lMywgbGF0KTtcbiAgICByaDEgPSB0aGlzLmEgKiAodGhpcy5nIC0gbWwpO1xuICB9XG4gIHZhciB0aGV0YSA9IHRoaXMubnMgKiBhZGp1c3RfbG9uKGxvbiAtIHRoaXMubG9uZzApO1xuICB2YXIgeCA9IHRoaXMueDAgKyByaDEgKiBNYXRoLnNpbih0aGV0YSk7XG4gIHZhciB5ID0gdGhpcy55MCArIHRoaXMucmggLSByaDEgKiBNYXRoLmNvcyh0aGV0YSk7XG4gIHAueCA9IHg7XG4gIHAueSA9IHk7XG4gIHJldHVybiBwO1xufVxuXG4vKiBJbnZlcnNlIGVxdWF0aW9uc1xuICAtLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShwKSB7XG4gIHAueCAtPSB0aGlzLngwO1xuICBwLnkgPSB0aGlzLnJoIC0gcC55ICsgdGhpcy55MDtcbiAgdmFyIGNvbiwgcmgxLCBsYXQsIGxvbjtcbiAgaWYgKHRoaXMubnMgPj0gMCkge1xuICAgIHJoMSA9IE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICAgIGNvbiA9IDE7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmgxID0gLU1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICAgIGNvbiA9IC0xO1xuICB9XG4gIHZhciB0aGV0YSA9IDA7XG4gIGlmIChyaDEgIT09IDApIHtcbiAgICB0aGV0YSA9IE1hdGguYXRhbjIoY29uICogcC54LCBjb24gKiBwLnkpO1xuICB9XG5cbiAgaWYgKHRoaXMuc3BoZXJlKSB7XG4gICAgbG9uID0gYWRqdXN0X2xvbih0aGlzLmxvbmcwICsgdGhldGEgLyB0aGlzLm5zKTtcbiAgICBsYXQgPSBhZGp1c3RfbGF0KHRoaXMuZyAtIHJoMSAvIHRoaXMuYSk7XG4gICAgcC54ID0gbG9uO1xuICAgIHAueSA9IGxhdDtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgbWwgPSB0aGlzLmcgLSByaDEgLyB0aGlzLmE7XG4gICAgbGF0ID0gaW1sZm4obWwsIHRoaXMuZTAsIHRoaXMuZTEsIHRoaXMuZTIsIHRoaXMuZTMpO1xuICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIHRoZXRhIC8gdGhpcy5ucyk7XG4gICAgcC54ID0gbG9uO1xuICAgIHAueSA9IGxhdDtcbiAgICByZXR1cm4gcDtcbiAgfVxuXG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJFcXVpZGlzdGFudF9Db25pY1wiLCBcImVxZGNcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsIi8vIEhlYXZpbHkgYmFzZWQgb24gdGhpcyBldG1lcmMgcHJvamVjdGlvbiBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21ibG9jaC9tYXBzaGFwZXItcHJvai9ibG9iL21hc3Rlci9zcmMvcHJvamVjdGlvbnMvZXRtZXJjLmpzXG5cbmltcG9ydCBzaW5oIGZyb20gJy4uL2NvbW1vbi9zaW5oJztcbmltcG9ydCBoeXBvdCBmcm9tICcuLi9jb21tb24vaHlwb3QnO1xuaW1wb3J0IGFzaW5oeSBmcm9tICcuLi9jb21tb24vYXNpbmh5JztcbmltcG9ydCBnYXRnIGZyb20gJy4uL2NvbW1vbi9nYXRnJztcbmltcG9ydCBjbGVucyBmcm9tICcuLi9jb21tb24vY2xlbnMnO1xuaW1wb3J0IGNsZW5zX2NtcGx4IGZyb20gJy4uL2NvbW1vbi9jbGVuc19jbXBseCc7XG5pbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBpZiAodGhpcy5lcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZXMgPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW5jb3JyZWN0IGVsbGlwdGljYWwgdXNhZ2UnKTtcbiAgfVxuXG4gIHRoaXMueDAgPSB0aGlzLngwICE9PSB1bmRlZmluZWQgPyB0aGlzLngwIDogMDtcbiAgdGhpcy55MCA9IHRoaXMueTAgIT09IHVuZGVmaW5lZCA/IHRoaXMueTAgOiAwO1xuICB0aGlzLmxvbmcwID0gdGhpcy5sb25nMCAhPT0gdW5kZWZpbmVkID8gdGhpcy5sb25nMCA6IDA7XG4gIHRoaXMubGF0MCA9IHRoaXMubGF0MCAhPT0gdW5kZWZpbmVkID8gdGhpcy5sYXQwIDogMDtcblxuICB0aGlzLmNnYiA9IFtdO1xuICB0aGlzLmNiZyA9IFtdO1xuICB0aGlzLnV0ZyA9IFtdO1xuICB0aGlzLmd0dSA9IFtdO1xuXG4gIHZhciBmID0gdGhpcy5lcyAvICgxICsgTWF0aC5zcXJ0KDEgLSB0aGlzLmVzKSk7XG4gIHZhciBuID0gZiAvICgyIC0gZik7XG4gIHZhciBucCA9IG47XG5cbiAgdGhpcy5jZ2JbMF0gPSBuICogKDIgKyBuICogKC0yIC8gMyArIG4gKiAoLTIgKyBuICogKDExNiAvIDQ1ICsgbiAqICgyNiAvIDQ1ICsgbiAqICgtMjg1NCAvIDY3NSApKSkpKSk7XG4gIHRoaXMuY2JnWzBdID0gbiAqICgtMiArIG4gKiAoIDIgLyAzICsgbiAqICggNCAvIDMgKyBuICogKC04MiAvIDQ1ICsgbiAqICgzMiAvIDQ1ICsgbiAqICg0NjQyIC8gNDcyNSkpKSkpKTtcblxuICBucCA9IG5wICogbjtcbiAgdGhpcy5jZ2JbMV0gPSBucCAqICg3IC8gMyArIG4gKiAoLTggLyA1ICsgbiAqICgtMjI3IC8gNDUgKyBuICogKDI3MDQgLyAzMTUgKyBuICogKDIzMjMgLyA5NDUpKSkpKTtcbiAgdGhpcy5jYmdbMV0gPSBucCAqICg1IC8gMyArIG4gKiAoLTE2IC8gMTUgKyBuICogKCAtMTMgLyA5ICsgbiAqICg5MDQgLyAzMTUgKyBuICogKC0xNTIyIC8gOTQ1KSkpKSk7XG5cbiAgbnAgPSBucCAqIG47XG4gIHRoaXMuY2diWzJdID0gbnAgKiAoNTYgLyAxNSArIG4gKiAoLTEzNiAvIDM1ICsgbiAqICgtMTI2MiAvIDEwNSArIG4gKiAoNzM4MTQgLyAyODM1KSkpKTtcbiAgdGhpcy5jYmdbMl0gPSBucCAqICgtMjYgLyAxNSArIG4gKiAoMzQgLyAyMSArIG4gKiAoOCAvIDUgKyBuICogKC0xMjY4NiAvIDI4MzUpKSkpO1xuXG4gIG5wID0gbnAgKiBuO1xuICB0aGlzLmNnYlszXSA9IG5wICogKDQyNzkgLyA2MzAgKyBuICogKC0zMzIgLyAzNSArIG4gKiAoLTM5OTU3MiAvIDE0MTc1KSkpO1xuICB0aGlzLmNiZ1szXSA9IG5wICogKDEyMzcgLyA2MzAgKyBuICogKC0xMiAvIDUgKyBuICogKCAtMjQ4MzIgLyAxNDE3NSkpKTtcblxuICBucCA9IG5wICogbjtcbiAgdGhpcy5jZ2JbNF0gPSBucCAqICg0MTc0IC8gMzE1ICsgbiAqICgtMTQ0ODM4IC8gNjIzNykpO1xuICB0aGlzLmNiZ1s0XSA9IG5wICogKC03MzQgLyAzMTUgKyBuICogKDEwOTU5OCAvIDMxMTg1KSk7XG5cbiAgbnAgPSBucCAqIG47XG4gIHRoaXMuY2diWzVdID0gbnAgKiAoNjAxNjc2IC8gMjIyNzUpO1xuICB0aGlzLmNiZ1s1XSA9IG5wICogKDQ0NDMzNyAvIDE1NTkyNSk7XG5cbiAgbnAgPSBNYXRoLnBvdyhuLCAyKTtcbiAgdGhpcy5RbiA9IHRoaXMuazAgLyAoMSArIG4pICogKDEgKyBucCAqICgxIC8gNCArIG5wICogKDEgLyA2NCArIG5wIC8gMjU2KSkpO1xuXG4gIHRoaXMudXRnWzBdID0gbiAqICgtMC41ICsgbiAqICggMiAvIDMgKyBuICogKC0zNyAvIDk2ICsgbiAqICggMSAvIDM2MCArIG4gKiAoODEgLyA1MTIgKyBuICogKC05NjE5OSAvIDYwNDgwMCkpKSkpKTtcbiAgdGhpcy5ndHVbMF0gPSBuICogKDAuNSArIG4gKiAoLTIgLyAzICsgbiAqICg1IC8gMTYgKyBuICogKDQxIC8gMTgwICsgbiAqICgtMTI3IC8gMjg4ICsgbiAqICg3ODkxIC8gMzc4MDApKSkpKSk7XG5cbiAgdGhpcy51dGdbMV0gPSBucCAqICgtMSAvIDQ4ICsgbiAqICgtMSAvIDE1ICsgbiAqICg0MzcgLyAxNDQwICsgbiAqICgtNDYgLyAxMDUgKyBuICogKDExMTg3MTEgLyAzODcwNzIwKSkpKSk7XG4gIHRoaXMuZ3R1WzFdID0gbnAgKiAoMTMgLyA0OCArIG4gKiAoLTMgLyA1ICsgbiAqICg1NTcgLyAxNDQwICsgbiAqICgyODEgLyA2MzAgKyBuICogKC0xOTgzNDMzIC8gMTkzNTM2MCkpKSkpO1xuXG4gIG5wID0gbnAgKiBuO1xuICB0aGlzLnV0Z1syXSA9IG5wICogKC0xNyAvIDQ4MCArIG4gKiAoMzcgLyA4NDAgKyBuICogKDIwOSAvIDQ0ODAgKyBuICogKC01NTY5IC8gOTA3MjAgKSkpKTtcbiAgdGhpcy5ndHVbMl0gPSBucCAqICg2MSAvIDI0MCArIG4gKiAoLTEwMyAvIDE0MCArIG4gKiAoMTUwNjEgLyAyNjg4MCArIG4gKiAoMTY3NjAzIC8gMTgxNDQwKSkpKTtcblxuICBucCA9IG5wICogbjtcbiAgdGhpcy51dGdbM10gPSBucCAqICgtNDM5NyAvIDE2MTI4MCArIG4gKiAoMTEgLyA1MDQgKyBuICogKDgzMDI1MSAvIDcyNTc2MDApKSk7XG4gIHRoaXMuZ3R1WzNdID0gbnAgKiAoNDk1NjEgLyAxNjEyODAgKyBuICogKC0xNzkgLyAxNjggKyBuICogKDY2MDE2NjEgLyA3MjU3NjAwKSkpO1xuXG4gIG5wID0gbnAgKiBuO1xuICB0aGlzLnV0Z1s0XSA9IG5wICogKC00NTgzIC8gMTYxMjgwICsgbiAqICgxMDg4NDcgLyAzOTkxNjgwKSk7XG4gIHRoaXMuZ3R1WzRdID0gbnAgKiAoMzQ3MjkgLyA4MDY0MCArIG4gKiAoLTM0MTg4ODkgLyAxOTk1ODQwKSk7XG5cbiAgbnAgPSBucCAqIG47XG4gIHRoaXMudXRnWzVdID0gbnAgKiAoLTIwNjQ4NjkzIC8gNjM4NjY4ODAwKTtcbiAgdGhpcy5ndHVbNV0gPSBucCAqICgyMTIzNzg5NDEgLyAzMTkzMzQ0MDApO1xuXG4gIHZhciBaID0gZ2F0Zyh0aGlzLmNiZywgdGhpcy5sYXQwKTtcbiAgdGhpcy5aYiA9IC10aGlzLlFuICogKFogKyBjbGVucyh0aGlzLmd0dSwgMiAqIFopKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgQ2UgPSBhZGp1c3RfbG9uKHAueCAtIHRoaXMubG9uZzApO1xuICB2YXIgQ24gPSBwLnk7XG5cbiAgQ24gPSBnYXRnKHRoaXMuY2JnLCBDbik7XG4gIHZhciBzaW5fQ24gPSBNYXRoLnNpbihDbik7XG4gIHZhciBjb3NfQ24gPSBNYXRoLmNvcyhDbik7XG4gIHZhciBzaW5fQ2UgPSBNYXRoLnNpbihDZSk7XG4gIHZhciBjb3NfQ2UgPSBNYXRoLmNvcyhDZSk7XG5cbiAgQ24gPSBNYXRoLmF0YW4yKHNpbl9DbiwgY29zX0NlICogY29zX0NuKTtcbiAgQ2UgPSBNYXRoLmF0YW4yKHNpbl9DZSAqIGNvc19DbiwgaHlwb3Qoc2luX0NuLCBjb3NfQ24gKiBjb3NfQ2UpKTtcbiAgQ2UgPSBhc2luaHkoTWF0aC50YW4oQ2UpKTtcblxuICB2YXIgdG1wID0gY2xlbnNfY21wbHgodGhpcy5ndHUsIDIgKiBDbiwgMiAqIENlKTtcblxuICBDbiA9IENuICsgdG1wWzBdO1xuICBDZSA9IENlICsgdG1wWzFdO1xuXG4gIHZhciB4O1xuICB2YXIgeTtcblxuICBpZiAoTWF0aC5hYnMoQ2UpIDw9IDIuNjIzMzk1MTYyNzc4KSB7XG4gICAgeCA9IHRoaXMuYSAqICh0aGlzLlFuICogQ2UpICsgdGhpcy54MDtcbiAgICB5ID0gdGhpcy5hICogKHRoaXMuUW4gKiBDbiArIHRoaXMuWmIpICsgdGhpcy55MDtcbiAgfVxuICBlbHNlIHtcbiAgICB4ID0gSW5maW5pdHk7XG4gICAgeSA9IEluZmluaXR5O1xuICB9XG5cbiAgcC54ID0geDtcbiAgcC55ID0geTtcblxuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgQ2UgPSAocC54IC0gdGhpcy54MCkgKiAoMSAvIHRoaXMuYSk7XG4gIHZhciBDbiA9IChwLnkgLSB0aGlzLnkwKSAqICgxIC8gdGhpcy5hKTtcblxuICBDbiA9IChDbiAtIHRoaXMuWmIpIC8gdGhpcy5RbjtcbiAgQ2UgPSBDZSAvIHRoaXMuUW47XG5cbiAgdmFyIGxvbjtcbiAgdmFyIGxhdDtcblxuICBpZiAoTWF0aC5hYnMoQ2UpIDw9IDIuNjIzMzk1MTYyNzc4KSB7XG4gICAgdmFyIHRtcCA9IGNsZW5zX2NtcGx4KHRoaXMudXRnLCAyICogQ24sIDIgKiBDZSk7XG5cbiAgICBDbiA9IENuICsgdG1wWzBdO1xuICAgIENlID0gQ2UgKyB0bXBbMV07XG4gICAgQ2UgPSBNYXRoLmF0YW4oc2luaChDZSkpO1xuXG4gICAgdmFyIHNpbl9DbiA9IE1hdGguc2luKENuKTtcbiAgICB2YXIgY29zX0NuID0gTWF0aC5jb3MoQ24pO1xuICAgIHZhciBzaW5fQ2UgPSBNYXRoLnNpbihDZSk7XG4gICAgdmFyIGNvc19DZSA9IE1hdGguY29zKENlKTtcblxuICAgIENuID0gTWF0aC5hdGFuMihzaW5fQ24gKiBjb3NfQ2UsIGh5cG90KHNpbl9DZSwgY29zX0NlICogY29zX0NuKSk7XG4gICAgQ2UgPSBNYXRoLmF0YW4yKHNpbl9DZSwgY29zX0NlICogY29zX0NuKTtcblxuICAgIGxvbiA9IGFkanVzdF9sb24oQ2UgKyB0aGlzLmxvbmcwKTtcbiAgICBsYXQgPSBnYXRnKHRoaXMuY2diLCBDbik7XG4gIH1cbiAgZWxzZSB7XG4gICAgbG9uID0gSW5maW5pdHk7XG4gICAgbGF0ID0gSW5maW5pdHk7XG4gIH1cblxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcblxuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIkV4dGVuZGVkX1RyYW5zdmVyc2VfTWVyY2F0b3JcIiwgXCJFeHRlbmRlZCBUcmFuc3ZlcnNlIE1lcmNhdG9yXCIsIFwiZXRtZXJjXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXNcbn07XG4iLCJpbXBvcnQgc3JhdCBmcm9tICcuLi9jb21tb24vc3JhdCc7XG52YXIgTUFYX0lURVIgPSAyMDtcbmltcG9ydCB7SEFMRl9QSSwgRk9SVFBJfSBmcm9tICcuLi9jb25zdGFudHMvdmFsdWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBzcGhpID0gTWF0aC5zaW4odGhpcy5sYXQwKTtcbiAgdmFyIGNwaGkgPSBNYXRoLmNvcyh0aGlzLmxhdDApO1xuICBjcGhpICo9IGNwaGk7XG4gIHRoaXMucmMgPSBNYXRoLnNxcnQoMSAtIHRoaXMuZXMpIC8gKDEgLSB0aGlzLmVzICogc3BoaSAqIHNwaGkpO1xuICB0aGlzLkMgPSBNYXRoLnNxcnQoMSArIHRoaXMuZXMgKiBjcGhpICogY3BoaSAvICgxIC0gdGhpcy5lcykpO1xuICB0aGlzLnBoaWMwID0gTWF0aC5hc2luKHNwaGkgLyB0aGlzLkMpO1xuICB0aGlzLnJhdGV4cCA9IDAuNSAqIHRoaXMuQyAqIHRoaXMuZTtcbiAgdGhpcy5LID0gTWF0aC50YW4oMC41ICogdGhpcy5waGljMCArIEZPUlRQSSkgLyAoTWF0aC5wb3coTWF0aC50YW4oMC41ICogdGhpcy5sYXQwICsgRk9SVFBJKSwgdGhpcy5DKSAqIHNyYXQodGhpcy5lICogc3BoaSwgdGhpcy5yYXRleHApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgbG9uID0gcC54O1xuICB2YXIgbGF0ID0gcC55O1xuXG4gIHAueSA9IDIgKiBNYXRoLmF0YW4odGhpcy5LICogTWF0aC5wb3coTWF0aC50YW4oMC41ICogbGF0ICsgRk9SVFBJKSwgdGhpcy5DKSAqIHNyYXQodGhpcy5lICogTWF0aC5zaW4obGF0KSwgdGhpcy5yYXRleHApKSAtIEhBTEZfUEk7XG4gIHAueCA9IHRoaXMuQyAqIGxvbjtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKHApIHtcbiAgdmFyIERFTF9UT0wgPSAxZS0xNDtcbiAgdmFyIGxvbiA9IHAueCAvIHRoaXMuQztcbiAgdmFyIGxhdCA9IHAueTtcbiAgdmFyIG51bSA9IE1hdGgucG93KE1hdGgudGFuKDAuNSAqIGxhdCArIEZPUlRQSSkgLyB0aGlzLkssIDEgLyB0aGlzLkMpO1xuICBmb3IgKHZhciBpID0gTUFYX0lURVI7IGkgPiAwOyAtLWkpIHtcbiAgICBsYXQgPSAyICogTWF0aC5hdGFuKG51bSAqIHNyYXQodGhpcy5lICogTWF0aC5zaW4ocC55KSwgLSAwLjUgKiB0aGlzLmUpKSAtIEhBTEZfUEk7XG4gICAgaWYgKE1hdGguYWJzKGxhdCAtIHAueSkgPCBERUxfVE9MKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcC55ID0gbGF0O1xuICB9XG4gIC8qIGNvbnZlcmdlbmNlIGZhaWxlZCAqL1xuICBpZiAoIWkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJnYXVzc1wiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiaW1wb3J0IHtcbiAgICBnZW9kZXRpY1RvR2VvY2VudHJpYyxcbiAgICBnZW9jZW50cmljVG9HZW9kZXRpY1xufSBmcm9tICcuLi9kYXR1bVV0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gJ2dlb2NlbnQnO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkKHApIHtcbiAgICB2YXIgcG9pbnQgPSBnZW9kZXRpY1RvR2VvY2VudHJpYyhwLCB0aGlzLmVzLCB0aGlzLmEpO1xuICAgIHJldHVybiBwb2ludDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICAgIHZhciBwb2ludCA9IGdlb2NlbnRyaWNUb0dlb2RldGljKHAsIHRoaXMuZXMsIHRoaXMuYSwgdGhpcy5iKTtcbiAgICByZXR1cm4gcG9pbnQ7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJHZW9jZW50cmljXCIsICdnZW9jZW50cmljJywgXCJnZW9jZW50XCIsIFwiR2VvY2VudFwiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiBpbml0LFxuICAgIGZvcndhcmQ6IGZvcndhcmQsXG4gICAgaW52ZXJzZTogaW52ZXJzZSxcbiAgICBuYW1lczogbmFtZXNcbn07IiwiaW1wb3J0IGFkanVzdF9sb24gZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sb24nO1xuaW1wb3J0IGFzaW56IGZyb20gJy4uL2NvbW1vbi9hc2lueic7XG5pbXBvcnQge0VQU0xOfSBmcm9tICcuLi9jb25zdGFudHMvdmFsdWVzJztcblxuLypcbiAgcmVmZXJlbmNlOlxuICAgIFdvbGZyYW0gTWF0aHdvcmxkIFwiR25vbW9uaWMgUHJvamVjdGlvblwiXG4gICAgaHR0cDovL21hdGh3b3JsZC53b2xmcmFtLmNvbS9Hbm9tb25pY1Byb2plY3Rpb24uaHRtbFxuICAgIEFjY2Vzc2VkOiAxMnRoIE5vdmVtYmVyIDIwMDlcbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuXG4gIC8qIFBsYWNlIHBhcmFtZXRlcnMgaW4gc3RhdGljIHN0b3JhZ2UgZm9yIGNvbW1vbiB1c2VcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICB0aGlzLnNpbl9wMTQgPSBNYXRoLnNpbih0aGlzLmxhdDApO1xuICB0aGlzLmNvc19wMTQgPSBNYXRoLmNvcyh0aGlzLmxhdDApO1xuICAvLyBBcHByb3hpbWF0aW9uIGZvciBwcm9qZWN0aW5nIHBvaW50cyB0byB0aGUgaG9yaXpvbiAoaW5maW5pdHkpXG4gIHRoaXMuaW5maW5pdHlfZGlzdCA9IDEwMDAgKiB0aGlzLmE7XG4gIHRoaXMucmMgPSAxO1xufVxuXG4vKiBHbm9tb25pYyBmb3J3YXJkIGVxdWF0aW9ucy0tbWFwcGluZyBsYXQsbG9uZyB0byB4LHlcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgc2lucGhpLCBjb3NwaGk7IC8qIHNpbiBhbmQgY29zIHZhbHVlICAgICAgICAqL1xuICB2YXIgZGxvbjsgLyogZGVsdGEgbG9uZ2l0dWRlIHZhbHVlICAgICAgKi9cbiAgdmFyIGNvc2xvbjsgLyogY29zIG9mIGxvbmdpdHVkZSAgICAgICAgKi9cbiAgdmFyIGtzcDsgLyogc2NhbGUgZmFjdG9yICAgICAgICAgICovXG4gIHZhciBnO1xuICB2YXIgeCwgeTtcbiAgdmFyIGxvbiA9IHAueDtcbiAgdmFyIGxhdCA9IHAueTtcbiAgLyogRm9yd2FyZCBlcXVhdGlvbnNcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgZGxvbiA9IGFkanVzdF9sb24obG9uIC0gdGhpcy5sb25nMCk7XG5cbiAgc2lucGhpID0gTWF0aC5zaW4obGF0KTtcbiAgY29zcGhpID0gTWF0aC5jb3MobGF0KTtcblxuICBjb3Nsb24gPSBNYXRoLmNvcyhkbG9uKTtcbiAgZyA9IHRoaXMuc2luX3AxNCAqIHNpbnBoaSArIHRoaXMuY29zX3AxNCAqIGNvc3BoaSAqIGNvc2xvbjtcbiAga3NwID0gMTtcbiAgaWYgKChnID4gMCkgfHwgKE1hdGguYWJzKGcpIDw9IEVQU0xOKSkge1xuICAgIHggPSB0aGlzLngwICsgdGhpcy5hICoga3NwICogY29zcGhpICogTWF0aC5zaW4oZGxvbikgLyBnO1xuICAgIHkgPSB0aGlzLnkwICsgdGhpcy5hICoga3NwICogKHRoaXMuY29zX3AxNCAqIHNpbnBoaSAtIHRoaXMuc2luX3AxNCAqIGNvc3BoaSAqIGNvc2xvbikgLyBnO1xuICB9XG4gIGVsc2Uge1xuXG4gICAgLy8gUG9pbnQgaXMgaW4gdGhlIG9wcG9zaW5nIGhlbWlzcGhlcmUgYW5kIGlzIHVucHJvamVjdGFibGVcbiAgICAvLyBXZSBzdGlsbCBuZWVkIHRvIHJldHVybiBhIHJlYXNvbmFibGUgcG9pbnQsIHNvIHdlIHByb2plY3RcbiAgICAvLyB0byBpbmZpbml0eSwgb24gYSBiZWFyaW5nXG4gICAgLy8gZXF1aXZhbGVudCB0byB0aGUgbm9ydGhlcm4gaGVtaXNwaGVyZSBlcXVpdmFsZW50XG4gICAgLy8gVGhpcyBpcyBhIHJlYXNvbmFibGUgYXBwcm94aW1hdGlvbiBmb3Igc2hvcnQgc2hhcGVzIGFuZCBsaW5lcyB0aGF0XG4gICAgLy8gc3RyYWRkbGUgdGhlIGhvcml6b24uXG5cbiAgICB4ID0gdGhpcy54MCArIHRoaXMuaW5maW5pdHlfZGlzdCAqIGNvc3BoaSAqIE1hdGguc2luKGRsb24pO1xuICAgIHkgPSB0aGlzLnkwICsgdGhpcy5pbmZpbml0eV9kaXN0ICogKHRoaXMuY29zX3AxNCAqIHNpbnBoaSAtIHRoaXMuc2luX3AxNCAqIGNvc3BoaSAqIGNvc2xvbik7XG5cbiAgfVxuICBwLnggPSB4O1xuICBwLnkgPSB5O1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgcmg7IC8qIFJobyAqL1xuICB2YXIgc2luYywgY29zYztcbiAgdmFyIGM7XG4gIHZhciBsb24sIGxhdDtcblxuICAvKiBJbnZlcnNlIGVxdWF0aW9uc1xuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBwLnggPSAocC54IC0gdGhpcy54MCkgLyB0aGlzLmE7XG4gIHAueSA9IChwLnkgLSB0aGlzLnkwKSAvIHRoaXMuYTtcblxuICBwLnggLz0gdGhpcy5rMDtcbiAgcC55IC89IHRoaXMuazA7XG5cbiAgaWYgKChyaCA9IE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpKSkge1xuICAgIGMgPSBNYXRoLmF0YW4yKHJoLCB0aGlzLnJjKTtcbiAgICBzaW5jID0gTWF0aC5zaW4oYyk7XG4gICAgY29zYyA9IE1hdGguY29zKGMpO1xuXG4gICAgbGF0ID0gYXNpbnooY29zYyAqIHRoaXMuc2luX3AxNCArIChwLnkgKiBzaW5jICogdGhpcy5jb3NfcDE0KSAvIHJoKTtcbiAgICBsb24gPSBNYXRoLmF0YW4yKHAueCAqIHNpbmMsIHJoICogdGhpcy5jb3NfcDE0ICogY29zYyAtIHAueSAqIHRoaXMuc2luX3AxNCAqIHNpbmMpO1xuICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIGxvbik7XG4gIH1cbiAgZWxzZSB7XG4gICAgbGF0ID0gdGhpcy5waGljMDtcbiAgICBsb24gPSAwO1xuICB9XG5cbiAgcC54ID0gbG9uO1xuICBwLnkgPSBsYXQ7XG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wiZ25vbVwiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiaW1wb3J0IGFkanVzdF9sb24gZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgdGhpcy5hID0gNjM3NzM5Ny4xNTU7XG4gIHRoaXMuZXMgPSAwLjAwNjY3NDM3MjIzMDYxNDtcbiAgdGhpcy5lID0gTWF0aC5zcXJ0KHRoaXMuZXMpO1xuICBpZiAoIXRoaXMubGF0MCkge1xuICAgIHRoaXMubGF0MCA9IDAuODYzOTM3OTc5NzM3MTkzO1xuICB9XG4gIGlmICghdGhpcy5sb25nMCkge1xuICAgIHRoaXMubG9uZzAgPSAwLjc0MTc2NDkzMjA5NzU5MDEgLSAwLjMwODM0MTUwMTE4NTY2NTtcbiAgfVxuICAvKiBpZiBzY2FsZSBub3Qgc2V0IGRlZmF1bHQgdG8gMC45OTk5ICovXG4gIGlmICghdGhpcy5rMCkge1xuICAgIHRoaXMuazAgPSAwLjk5OTk7XG4gIH1cbiAgdGhpcy5zNDUgPSAwLjc4NTM5ODE2MzM5NzQ0ODsgLyogNDUgKi9cbiAgdGhpcy5zOTAgPSAyICogdGhpcy5zNDU7XG4gIHRoaXMuZmkwID0gdGhpcy5sYXQwO1xuICB0aGlzLmUyID0gdGhpcy5lcztcbiAgdGhpcy5lID0gTWF0aC5zcXJ0KHRoaXMuZTIpO1xuICB0aGlzLmFsZmEgPSBNYXRoLnNxcnQoMSArICh0aGlzLmUyICogTWF0aC5wb3coTWF0aC5jb3ModGhpcy5maTApLCA0KSkgLyAoMSAtIHRoaXMuZTIpKTtcbiAgdGhpcy51cSA9IDEuMDQyMTY4NTYzODA0NzQ7XG4gIHRoaXMudTAgPSBNYXRoLmFzaW4oTWF0aC5zaW4odGhpcy5maTApIC8gdGhpcy5hbGZhKTtcbiAgdGhpcy5nID0gTWF0aC5wb3coKDEgKyB0aGlzLmUgKiBNYXRoLnNpbih0aGlzLmZpMCkpIC8gKDEgLSB0aGlzLmUgKiBNYXRoLnNpbih0aGlzLmZpMCkpLCB0aGlzLmFsZmEgKiB0aGlzLmUgLyAyKTtcbiAgdGhpcy5rID0gTWF0aC50YW4odGhpcy51MCAvIDIgKyB0aGlzLnM0NSkgLyBNYXRoLnBvdyhNYXRoLnRhbih0aGlzLmZpMCAvIDIgKyB0aGlzLnM0NSksIHRoaXMuYWxmYSkgKiB0aGlzLmc7XG4gIHRoaXMuazEgPSB0aGlzLmswO1xuICB0aGlzLm4wID0gdGhpcy5hICogTWF0aC5zcXJ0KDEgLSB0aGlzLmUyKSAvICgxIC0gdGhpcy5lMiAqIE1hdGgucG93KE1hdGguc2luKHRoaXMuZmkwKSwgMikpO1xuICB0aGlzLnMwID0gMS4zNzAwODM0NjI4MTU1NTtcbiAgdGhpcy5uID0gTWF0aC5zaW4odGhpcy5zMCk7XG4gIHRoaXMucm8wID0gdGhpcy5rMSAqIHRoaXMubjAgLyBNYXRoLnRhbih0aGlzLnMwKTtcbiAgdGhpcy5hZCA9IHRoaXMuczkwIC0gdGhpcy51cTtcbn1cblxuLyogZWxsaXBzb2lkICovXG4vKiBjYWxjdWxhdGUgeHkgZnJvbSBsYXQvbG9uICovXG4vKiBDb25zdGFudHMsIGlkZW50aWNhbCB0byBpbnZlcnNlIHRyYW5zZm9ybSBmdW5jdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgZ2ZpLCB1LCBkZWx0YXYsIHMsIGQsIGVwcywgcm87XG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG4gIHZhciBkZWx0YV9sb24gPSBhZGp1c3RfbG9uKGxvbiAtIHRoaXMubG9uZzApO1xuICAvKiBUcmFuc2Zvcm1hdGlvbiAqL1xuICBnZmkgPSBNYXRoLnBvdygoKDEgKyB0aGlzLmUgKiBNYXRoLnNpbihsYXQpKSAvICgxIC0gdGhpcy5lICogTWF0aC5zaW4obGF0KSkpLCAodGhpcy5hbGZhICogdGhpcy5lIC8gMikpO1xuICB1ID0gMiAqIChNYXRoLmF0YW4odGhpcy5rICogTWF0aC5wb3coTWF0aC50YW4obGF0IC8gMiArIHRoaXMuczQ1KSwgdGhpcy5hbGZhKSAvIGdmaSkgLSB0aGlzLnM0NSk7XG4gIGRlbHRhdiA9IC1kZWx0YV9sb24gKiB0aGlzLmFsZmE7XG4gIHMgPSBNYXRoLmFzaW4oTWF0aC5jb3ModGhpcy5hZCkgKiBNYXRoLnNpbih1KSArIE1hdGguc2luKHRoaXMuYWQpICogTWF0aC5jb3ModSkgKiBNYXRoLmNvcyhkZWx0YXYpKTtcbiAgZCA9IE1hdGguYXNpbihNYXRoLmNvcyh1KSAqIE1hdGguc2luKGRlbHRhdikgLyBNYXRoLmNvcyhzKSk7XG4gIGVwcyA9IHRoaXMubiAqIGQ7XG4gIHJvID0gdGhpcy5ybzAgKiBNYXRoLnBvdyhNYXRoLnRhbih0aGlzLnMwIC8gMiArIHRoaXMuczQ1KSwgdGhpcy5uKSAvIE1hdGgucG93KE1hdGgudGFuKHMgLyAyICsgdGhpcy5zNDUpLCB0aGlzLm4pO1xuICBwLnkgPSBybyAqIE1hdGguY29zKGVwcykgLyAxO1xuICBwLnggPSBybyAqIE1hdGguc2luKGVwcykgLyAxO1xuXG4gIGlmICghdGhpcy5jemVjaCkge1xuICAgIHAueSAqPSAtMTtcbiAgICBwLnggKj0gLTE7XG4gIH1cbiAgcmV0dXJuIChwKTtcbn1cblxuLyogY2FsY3VsYXRlIGxhdC9sb24gZnJvbSB4eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgdSwgZGVsdGF2LCBzLCBkLCBlcHMsIHJvLCBmaTE7XG4gIHZhciBvaztcblxuICAvKiBUcmFuc2Zvcm1hdGlvbiAqL1xuICAvKiByZXZlcnQgeSwgeCovXG4gIHZhciB0bXAgPSBwLng7XG4gIHAueCA9IHAueTtcbiAgcC55ID0gdG1wO1xuICBpZiAoIXRoaXMuY3plY2gpIHtcbiAgICBwLnkgKj0gLTE7XG4gICAgcC54ICo9IC0xO1xuICB9XG4gIHJvID0gTWF0aC5zcXJ0KHAueCAqIHAueCArIHAueSAqIHAueSk7XG4gIGVwcyA9IE1hdGguYXRhbjIocC55LCBwLngpO1xuICBkID0gZXBzIC8gTWF0aC5zaW4odGhpcy5zMCk7XG4gIHMgPSAyICogKE1hdGguYXRhbihNYXRoLnBvdyh0aGlzLnJvMCAvIHJvLCAxIC8gdGhpcy5uKSAqIE1hdGgudGFuKHRoaXMuczAgLyAyICsgdGhpcy5zNDUpKSAtIHRoaXMuczQ1KTtcbiAgdSA9IE1hdGguYXNpbihNYXRoLmNvcyh0aGlzLmFkKSAqIE1hdGguc2luKHMpIC0gTWF0aC5zaW4odGhpcy5hZCkgKiBNYXRoLmNvcyhzKSAqIE1hdGguY29zKGQpKTtcbiAgZGVsdGF2ID0gTWF0aC5hc2luKE1hdGguY29zKHMpICogTWF0aC5zaW4oZCkgLyBNYXRoLmNvcyh1KSk7XG4gIHAueCA9IHRoaXMubG9uZzAgLSBkZWx0YXYgLyB0aGlzLmFsZmE7XG4gIGZpMSA9IHU7XG4gIG9rID0gMDtcbiAgdmFyIGl0ZXIgPSAwO1xuICBkbyB7XG4gICAgcC55ID0gMiAqIChNYXRoLmF0YW4oTWF0aC5wb3codGhpcy5rLCAtIDEgLyB0aGlzLmFsZmEpICogTWF0aC5wb3coTWF0aC50YW4odSAvIDIgKyB0aGlzLnM0NSksIDEgLyB0aGlzLmFsZmEpICogTWF0aC5wb3coKDEgKyB0aGlzLmUgKiBNYXRoLnNpbihmaTEpKSAvICgxIC0gdGhpcy5lICogTWF0aC5zaW4oZmkxKSksIHRoaXMuZSAvIDIpKSAtIHRoaXMuczQ1KTtcbiAgICBpZiAoTWF0aC5hYnMoZmkxIC0gcC55KSA8IDAuMDAwMDAwMDAwMSkge1xuICAgICAgb2sgPSAxO1xuICAgIH1cbiAgICBmaTEgPSBwLnk7XG4gICAgaXRlciArPSAxO1xuICB9IHdoaWxlIChvayA9PT0gMCAmJiBpdGVyIDwgMTUpO1xuICBpZiAoaXRlciA+PSAxNSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChwKTtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIktyb3Zha1wiLCBcImtyb3Zha1wiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiXG5pbXBvcnQge0hBTEZfUEksIEVQU0xOLCBGT1JUUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5pbXBvcnQgcXNmbnogZnJvbSAnLi4vY29tbW9uL3FzZm56JztcbmltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcblxuLypcbiAgcmVmZXJlbmNlXG4gICAgXCJOZXcgRXF1YWwtQXJlYSBNYXAgUHJvamVjdGlvbnMgZm9yIE5vbmNpcmN1bGFyIFJlZ2lvbnNcIiwgSm9obiBQLiBTbnlkZXIsXG4gICAgVGhlIEFtZXJpY2FuIENhcnRvZ3JhcGhlciwgVm9sIDE1LCBOby4gNCwgT2N0b2JlciAxOTg4LCBwcC4gMzQxLTM1NS5cbiAgKi9cblxuZXhwb3J0IHZhciBTX1BPTEUgPSAxO1xuXG5leHBvcnQgdmFyIE5fUE9MRSA9IDI7XG5leHBvcnQgdmFyIEVRVUlUID0gMztcbmV4cG9ydCB2YXIgT0JMSVEgPSA0O1xuXG4vKiBJbml0aWFsaXplIHRoZSBMYW1iZXJ0IEF6aW11dGhhbCBFcXVhbCBBcmVhIHByb2plY3Rpb25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICB2YXIgdCA9IE1hdGguYWJzKHRoaXMubGF0MCk7XG4gIGlmIChNYXRoLmFicyh0IC0gSEFMRl9QSSkgPCBFUFNMTikge1xuICAgIHRoaXMubW9kZSA9IHRoaXMubGF0MCA8IDAgPyB0aGlzLlNfUE9MRSA6IHRoaXMuTl9QT0xFO1xuICB9XG4gIGVsc2UgaWYgKE1hdGguYWJzKHQpIDwgRVBTTE4pIHtcbiAgICB0aGlzLm1vZGUgPSB0aGlzLkVRVUlUO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMubW9kZSA9IHRoaXMuT0JMSVE7XG4gIH1cbiAgaWYgKHRoaXMuZXMgPiAwKSB7XG4gICAgdmFyIHNpbnBoaTtcblxuICAgIHRoaXMucXAgPSBxc2Zueih0aGlzLmUsIDEpO1xuICAgIHRoaXMubW1mID0gMC41IC8gKDEgLSB0aGlzLmVzKTtcbiAgICB0aGlzLmFwYSA9IGF1dGhzZXQodGhpcy5lcyk7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICBjYXNlIHRoaXMuTl9QT0xFOlxuICAgICAgdGhpcy5kZCA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIHRoaXMuU19QT0xFOlxuICAgICAgdGhpcy5kZCA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIHRoaXMuRVFVSVQ6XG4gICAgICB0aGlzLnJxID0gTWF0aC5zcXJ0KDAuNSAqIHRoaXMucXApO1xuICAgICAgdGhpcy5kZCA9IDEgLyB0aGlzLnJxO1xuICAgICAgdGhpcy54bWYgPSAxO1xuICAgICAgdGhpcy55bWYgPSAwLjUgKiB0aGlzLnFwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0aGlzLk9CTElROlxuICAgICAgdGhpcy5ycSA9IE1hdGguc3FydCgwLjUgKiB0aGlzLnFwKTtcbiAgICAgIHNpbnBoaSA9IE1hdGguc2luKHRoaXMubGF0MCk7XG4gICAgICB0aGlzLnNpbmIxID0gcXNmbnoodGhpcy5lLCBzaW5waGkpIC8gdGhpcy5xcDtcbiAgICAgIHRoaXMuY29zYjEgPSBNYXRoLnNxcnQoMSAtIHRoaXMuc2luYjEgKiB0aGlzLnNpbmIxKTtcbiAgICAgIHRoaXMuZGQgPSBNYXRoLmNvcyh0aGlzLmxhdDApIC8gKE1hdGguc3FydCgxIC0gdGhpcy5lcyAqIHNpbnBoaSAqIHNpbnBoaSkgKiB0aGlzLnJxICogdGhpcy5jb3NiMSk7XG4gICAgICB0aGlzLnltZiA9ICh0aGlzLnhtZiA9IHRoaXMucnEpIC8gdGhpcy5kZDtcbiAgICAgIHRoaXMueG1mICo9IHRoaXMuZGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gdGhpcy5PQkxJUSkge1xuICAgICAgdGhpcy5zaW5waDAgPSBNYXRoLnNpbih0aGlzLmxhdDApO1xuICAgICAgdGhpcy5jb3NwaDAgPSBNYXRoLmNvcyh0aGlzLmxhdDApO1xuICAgIH1cbiAgfVxufVxuXG4vKiBMYW1iZXJ0IEF6aW11dGhhbCBFcXVhbCBBcmVhIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG5cbiAgLyogRm9yd2FyZCBlcXVhdGlvbnNcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgdmFyIHgsIHksIGNvc2xhbSwgc2lubGFtLCBzaW5waGksIHEsIHNpbmIsIGNvc2IsIGIsIGNvc3BoaTtcbiAgdmFyIGxhbSA9IHAueDtcbiAgdmFyIHBoaSA9IHAueTtcblxuICBsYW0gPSBhZGp1c3RfbG9uKGxhbSAtIHRoaXMubG9uZzApO1xuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICBzaW5waGkgPSBNYXRoLnNpbihwaGkpO1xuICAgIGNvc3BoaSA9IE1hdGguY29zKHBoaSk7XG4gICAgY29zbGFtID0gTWF0aC5jb3MobGFtKTtcbiAgICBpZiAodGhpcy5tb2RlID09PSB0aGlzLk9CTElRIHx8IHRoaXMubW9kZSA9PT0gdGhpcy5FUVVJVCkge1xuICAgICAgeSA9ICh0aGlzLm1vZGUgPT09IHRoaXMuRVFVSVQpID8gMSArIGNvc3BoaSAqIGNvc2xhbSA6IDEgKyB0aGlzLnNpbnBoMCAqIHNpbnBoaSArIHRoaXMuY29zcGgwICogY29zcGhpICogY29zbGFtO1xuICAgICAgaWYgKHkgPD0gRVBTTE4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB5ID0gTWF0aC5zcXJ0KDIgLyB5KTtcbiAgICAgIHggPSB5ICogY29zcGhpICogTWF0aC5zaW4obGFtKTtcbiAgICAgIHkgKj0gKHRoaXMubW9kZSA9PT0gdGhpcy5FUVVJVCkgPyBzaW5waGkgOiB0aGlzLmNvc3BoMCAqIHNpbnBoaSAtIHRoaXMuc2lucGgwICogY29zcGhpICogY29zbGFtO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT09IHRoaXMuTl9QT0xFIHx8IHRoaXMubW9kZSA9PT0gdGhpcy5TX1BPTEUpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IHRoaXMuTl9QT0xFKSB7XG4gICAgICAgIGNvc2xhbSA9IC1jb3NsYW07XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMocGhpICsgdGhpcy5sYXQwKSA8IEVQU0xOKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgeSA9IEZPUlRQSSAtIHBoaSAqIDAuNTtcbiAgICAgIHkgPSAyICogKCh0aGlzLm1vZGUgPT09IHRoaXMuU19QT0xFKSA/IE1hdGguY29zKHkpIDogTWF0aC5zaW4oeSkpO1xuICAgICAgeCA9IHkgKiBNYXRoLnNpbihsYW0pO1xuICAgICAgeSAqPSBjb3NsYW07XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHNpbmIgPSAwO1xuICAgIGNvc2IgPSAwO1xuICAgIGIgPSAwO1xuICAgIGNvc2xhbSA9IE1hdGguY29zKGxhbSk7XG4gICAgc2lubGFtID0gTWF0aC5zaW4obGFtKTtcbiAgICBzaW5waGkgPSBNYXRoLnNpbihwaGkpO1xuICAgIHEgPSBxc2Zueih0aGlzLmUsIHNpbnBoaSk7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gdGhpcy5PQkxJUSB8fCB0aGlzLm1vZGUgPT09IHRoaXMuRVFVSVQpIHtcbiAgICAgIHNpbmIgPSBxIC8gdGhpcy5xcDtcbiAgICAgIGNvc2IgPSBNYXRoLnNxcnQoMSAtIHNpbmIgKiBzaW5iKTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICBjYXNlIHRoaXMuT0JMSVE6XG4gICAgICBiID0gMSArIHRoaXMuc2luYjEgKiBzaW5iICsgdGhpcy5jb3NiMSAqIGNvc2IgKiBjb3NsYW07XG4gICAgICBicmVhaztcbiAgICBjYXNlIHRoaXMuRVFVSVQ6XG4gICAgICBiID0gMSArIGNvc2IgKiBjb3NsYW07XG4gICAgICBicmVhaztcbiAgICBjYXNlIHRoaXMuTl9QT0xFOlxuICAgICAgYiA9IEhBTEZfUEkgKyBwaGk7XG4gICAgICBxID0gdGhpcy5xcCAtIHE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIHRoaXMuU19QT0xFOlxuICAgICAgYiA9IHBoaSAtIEhBTEZfUEk7XG4gICAgICBxID0gdGhpcy5xcCArIHE7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKE1hdGguYWJzKGIpIDwgRVBTTE4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgIGNhc2UgdGhpcy5PQkxJUTpcbiAgICBjYXNlIHRoaXMuRVFVSVQ6XG4gICAgICBiID0gTWF0aC5zcXJ0KDIgLyBiKTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IHRoaXMuT0JMSVEpIHtcbiAgICAgICAgeSA9IHRoaXMueW1mICogYiAqICh0aGlzLmNvc2IxICogc2luYiAtIHRoaXMuc2luYjEgKiBjb3NiICogY29zbGFtKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB5ID0gKGIgPSBNYXRoLnNxcnQoMiAvICgxICsgY29zYiAqIGNvc2xhbSkpKSAqIHNpbmIgKiB0aGlzLnltZjtcbiAgICAgIH1cbiAgICAgIHggPSB0aGlzLnhtZiAqIGIgKiBjb3NiICogc2lubGFtO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0aGlzLk5fUE9MRTpcbiAgICBjYXNlIHRoaXMuU19QT0xFOlxuICAgICAgaWYgKHEgPj0gMCkge1xuICAgICAgICB4ID0gKGIgPSBNYXRoLnNxcnQocSkpICogc2lubGFtO1xuICAgICAgICB5ID0gY29zbGFtICogKCh0aGlzLm1vZGUgPT09IHRoaXMuU19QT0xFKSA/IGIgOiAtYik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgeCA9IHkgPSAwO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcC54ID0gdGhpcy5hICogeCArIHRoaXMueDA7XG4gIHAueSA9IHRoaXMuYSAqIHkgKyB0aGlzLnkwO1xuICByZXR1cm4gcDtcbn1cblxuLyogSW52ZXJzZSBlcXVhdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICBwLnggLT0gdGhpcy54MDtcbiAgcC55IC09IHRoaXMueTA7XG4gIHZhciB4ID0gcC54IC8gdGhpcy5hO1xuICB2YXIgeSA9IHAueSAvIHRoaXMuYTtcbiAgdmFyIGxhbSwgcGhpLCBjQ2UsIHNDZSwgcSwgcmhvLCBhYjtcbiAgaWYgKHRoaXMuc3BoZXJlKSB7XG4gICAgdmFyIGNvc3ogPSAwLFxuICAgICAgcmgsIHNpbnogPSAwO1xuXG4gICAgcmggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgcGhpID0gcmggKiAwLjU7XG4gICAgaWYgKHBoaSA+IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwaGkgPSAyICogTWF0aC5hc2luKHBoaSk7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gdGhpcy5PQkxJUSB8fCB0aGlzLm1vZGUgPT09IHRoaXMuRVFVSVQpIHtcbiAgICAgIHNpbnogPSBNYXRoLnNpbihwaGkpO1xuICAgICAgY29zeiA9IE1hdGguY29zKHBoaSk7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgY2FzZSB0aGlzLkVRVUlUOlxuICAgICAgcGhpID0gKE1hdGguYWJzKHJoKSA8PSBFUFNMTikgPyAwIDogTWF0aC5hc2luKHkgKiBzaW56IC8gcmgpO1xuICAgICAgeCAqPSBzaW56O1xuICAgICAgeSA9IGNvc3ogKiByaDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdGhpcy5PQkxJUTpcbiAgICAgIHBoaSA9IChNYXRoLmFicyhyaCkgPD0gRVBTTE4pID8gdGhpcy5sYXQwIDogTWF0aC5hc2luKGNvc3ogKiB0aGlzLnNpbnBoMCArIHkgKiBzaW56ICogdGhpcy5jb3NwaDAgLyByaCk7XG4gICAgICB4ICo9IHNpbnogKiB0aGlzLmNvc3BoMDtcbiAgICAgIHkgPSAoY29zeiAtIE1hdGguc2luKHBoaSkgKiB0aGlzLnNpbnBoMCkgKiByaDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgdGhpcy5OX1BPTEU6XG4gICAgICB5ID0gLXk7XG4gICAgICBwaGkgPSBIQUxGX1BJIC0gcGhpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSB0aGlzLlNfUE9MRTpcbiAgICAgIHBoaSAtPSBIQUxGX1BJO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxhbSA9ICh5ID09PSAwICYmICh0aGlzLm1vZGUgPT09IHRoaXMuRVFVSVQgfHwgdGhpcy5tb2RlID09PSB0aGlzLk9CTElRKSkgPyAwIDogTWF0aC5hdGFuMih4LCB5KTtcbiAgfVxuICBlbHNlIHtcbiAgICBhYiA9IDA7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gdGhpcy5PQkxJUSB8fCB0aGlzLm1vZGUgPT09IHRoaXMuRVFVSVQpIHtcbiAgICAgIHggLz0gdGhpcy5kZDtcbiAgICAgIHkgKj0gdGhpcy5kZDtcbiAgICAgIHJobyA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgIGlmIChyaG8gPCBFUFNMTikge1xuICAgICAgICBwLnggPSB0aGlzLmxvbmcwO1xuICAgICAgICBwLnkgPSB0aGlzLmxhdDA7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfVxuICAgICAgc0NlID0gMiAqIE1hdGguYXNpbigwLjUgKiByaG8gLyB0aGlzLnJxKTtcbiAgICAgIGNDZSA9IE1hdGguY29zKHNDZSk7XG4gICAgICB4ICo9IChzQ2UgPSBNYXRoLnNpbihzQ2UpKTtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IHRoaXMuT0JMSVEpIHtcbiAgICAgICAgYWIgPSBjQ2UgKiB0aGlzLnNpbmIxICsgeSAqIHNDZSAqIHRoaXMuY29zYjEgLyByaG87XG4gICAgICAgIHEgPSB0aGlzLnFwICogYWI7XG4gICAgICAgIHkgPSByaG8gKiB0aGlzLmNvc2IxICogY0NlIC0geSAqIHRoaXMuc2luYjEgKiBzQ2U7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYWIgPSB5ICogc0NlIC8gcmhvO1xuICAgICAgICBxID0gdGhpcy5xcCAqIGFiO1xuICAgICAgICB5ID0gcmhvICogY0NlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT09IHRoaXMuTl9QT0xFIHx8IHRoaXMubW9kZSA9PT0gdGhpcy5TX1BPTEUpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09IHRoaXMuTl9QT0xFKSB7XG4gICAgICAgIHkgPSAteTtcbiAgICAgIH1cbiAgICAgIHEgPSAoeCAqIHggKyB5ICogeSk7XG4gICAgICBpZiAoIXEpIHtcbiAgICAgICAgcC54ID0gdGhpcy5sb25nMDtcbiAgICAgICAgcC55ID0gdGhpcy5sYXQwO1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICAgIGFiID0gMSAtIHEgLyB0aGlzLnFwO1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gdGhpcy5TX1BPTEUpIHtcbiAgICAgICAgYWIgPSAtYWI7XG4gICAgICB9XG4gICAgfVxuICAgIGxhbSA9IE1hdGguYXRhbjIoeCwgeSk7XG4gICAgcGhpID0gYXV0aGxhdChNYXRoLmFzaW4oYWIpLCB0aGlzLmFwYSk7XG4gIH1cblxuICBwLnggPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyBsYW0pO1xuICBwLnkgPSBwaGk7XG4gIHJldHVybiBwO1xufVxuXG4vKiBkZXRlcm1pbmUgbGF0aXR1ZGUgZnJvbSBhdXRoYWxpYyBsYXRpdHVkZSAqL1xudmFyIFAwMCA9IDAuMzMzMzMzMzMzMzMzMzMzMzMzMzM7XG5cbnZhciBQMDEgPSAwLjE3MjIyMjIyMjIyMjIyMjIyMjIyO1xudmFyIFAwMiA9IDAuMTAyNTc5MzY1MDc5MzY1MDc5MzY7XG52YXIgUDEwID0gMC4wNjM4ODg4ODg4ODg4ODg4ODg4ODtcbnZhciBQMTEgPSAwLjA2NjQwMjExNjQwMjExNjQwMjExO1xudmFyIFAyMCA9IDAuMDE2NDE1MDEyOTQyMTkxNTQ0NDM7XG5cbmZ1bmN0aW9uIGF1dGhzZXQoZXMpIHtcbiAgdmFyIHQ7XG4gIHZhciBBUEEgPSBbXTtcbiAgQVBBWzBdID0gZXMgKiBQMDA7XG4gIHQgPSBlcyAqIGVzO1xuICBBUEFbMF0gKz0gdCAqIFAwMTtcbiAgQVBBWzFdID0gdCAqIFAxMDtcbiAgdCAqPSBlcztcbiAgQVBBWzBdICs9IHQgKiBQMDI7XG4gIEFQQVsxXSArPSB0ICogUDExO1xuICBBUEFbMl0gPSB0ICogUDIwO1xuICByZXR1cm4gQVBBO1xufVxuXG5mdW5jdGlvbiBhdXRobGF0KGJldGEsIEFQQSkge1xuICB2YXIgdCA9IGJldGEgKyBiZXRhO1xuICByZXR1cm4gKGJldGEgKyBBUEFbMF0gKiBNYXRoLnNpbih0KSArIEFQQVsxXSAqIE1hdGguc2luKHQgKyB0KSArIEFQQVsyXSAqIE1hdGguc2luKHQgKyB0ICsgdCkpO1xufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wiTGFtYmVydCBBemltdXRoYWwgRXF1YWwgQXJlYVwiLCBcIkxhbWJlcnRfQXppbXV0aGFsX0VxdWFsX0FyZWFcIiwgXCJsYWVhXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXMsXG4gIFNfUE9MRTogU19QT0xFLFxuICBOX1BPTEU6IE5fUE9MRSxcbiAgRVFVSVQ6IEVRVUlULFxuICBPQkxJUTogT0JMSVFcbn07XG4iLCJpbXBvcnQgbXNmbnogZnJvbSAnLi4vY29tbW9uL21zZm56JztcbmltcG9ydCB0c2ZueiBmcm9tICcuLi9jb21tb24vdHNmbnonO1xuaW1wb3J0IHNpZ24gZnJvbSAnLi4vY29tbW9uL3NpZ24nO1xuaW1wb3J0IGFkanVzdF9sb24gZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sb24nO1xuaW1wb3J0IHBoaTJ6IGZyb20gJy4uL2NvbW1vbi9waGkyeic7XG5pbXBvcnQge0hBTEZfUEksIEVQU0xOfSBmcm9tICcuLi9jb25zdGFudHMvdmFsdWVzJztcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuXG4gIC8vIGFycmF5IG9mOiAgcl9tYWoscl9taW4sbGF0MSxsYXQyLGNfbG9uLGNfbGF0LGZhbHNlX2Vhc3QsZmFsc2Vfbm9ydGhcbiAgLy9kb3VibGUgY19sYXQ7ICAgICAgICAgICAgICAgICAgIC8qIGNlbnRlciBsYXRpdHVkZSAgICAgICAgICAgICAgICAgICAgICAqL1xuICAvL2RvdWJsZSBjX2xvbjsgICAgICAgICAgICAgICAgICAgLyogY2VudGVyIGxvbmdpdHVkZSAgICAgICAgICAgICAgICAgICAgICovXG4gIC8vZG91YmxlIGxhdDE7ICAgICAgICAgICAgICAgICAgICAvKiBmaXJzdCBzdGFuZGFyZCBwYXJhbGxlbCAgICAgICAgICAgICAgKi9cbiAgLy9kb3VibGUgbGF0MjsgICAgICAgICAgICAgICAgICAgIC8qIHNlY29uZCBzdGFuZGFyZCBwYXJhbGxlbCAgICAgICAgICAgICAqL1xuICAvL2RvdWJsZSByX21hajsgICAgICAgICAgICAgICAgICAgLyogbWFqb3IgYXhpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gIC8vZG91YmxlIHJfbWluOyAgICAgICAgICAgICAgICAgICAvKiBtaW5vciBheGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgLy9kb3VibGUgZmFsc2VfZWFzdDsgICAgICAgICAgICAgIC8qIHggb2Zmc2V0IGluIG1ldGVycyAgICAgICAgICAgICAgICAgICAqL1xuICAvL2RvdWJsZSBmYWxzZV9ub3J0aDsgICAgICAgICAgICAgLyogeSBvZmZzZXQgaW4gbWV0ZXJzICAgICAgICAgICAgICAgICAgICovXG5cbiAgaWYgKCF0aGlzLmxhdDIpIHtcbiAgICB0aGlzLmxhdDIgPSB0aGlzLmxhdDE7XG4gIH0gLy9pZiBsYXQyIGlzIG5vdCBkZWZpbmVkXG4gIGlmICghdGhpcy5rMCkge1xuICAgIHRoaXMuazAgPSAxO1xuICB9XG4gIHRoaXMueDAgPSB0aGlzLngwIHx8IDA7XG4gIHRoaXMueTAgPSB0aGlzLnkwIHx8IDA7XG4gIC8vIFN0YW5kYXJkIFBhcmFsbGVscyBjYW5ub3QgYmUgZXF1YWwgYW5kIG9uIG9wcG9zaXRlIHNpZGVzIG9mIHRoZSBlcXVhdG9yXG4gIGlmIChNYXRoLmFicyh0aGlzLmxhdDEgKyB0aGlzLmxhdDIpIDwgRVBTTE4pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGVtcCA9IHRoaXMuYiAvIHRoaXMuYTtcbiAgdGhpcy5lID0gTWF0aC5zcXJ0KDEgLSB0ZW1wICogdGVtcCk7XG5cbiAgdmFyIHNpbjEgPSBNYXRoLnNpbih0aGlzLmxhdDEpO1xuICB2YXIgY29zMSA9IE1hdGguY29zKHRoaXMubGF0MSk7XG4gIHZhciBtczEgPSBtc2Zueih0aGlzLmUsIHNpbjEsIGNvczEpO1xuICB2YXIgdHMxID0gdHNmbnoodGhpcy5lLCB0aGlzLmxhdDEsIHNpbjEpO1xuXG4gIHZhciBzaW4yID0gTWF0aC5zaW4odGhpcy5sYXQyKTtcbiAgdmFyIGNvczIgPSBNYXRoLmNvcyh0aGlzLmxhdDIpO1xuICB2YXIgbXMyID0gbXNmbnoodGhpcy5lLCBzaW4yLCBjb3MyKTtcbiAgdmFyIHRzMiA9IHRzZm56KHRoaXMuZSwgdGhpcy5sYXQyLCBzaW4yKTtcblxuICB2YXIgdHMwID0gdHNmbnoodGhpcy5lLCB0aGlzLmxhdDAsIE1hdGguc2luKHRoaXMubGF0MCkpO1xuXG4gIGlmIChNYXRoLmFicyh0aGlzLmxhdDEgLSB0aGlzLmxhdDIpID4gRVBTTE4pIHtcbiAgICB0aGlzLm5zID0gTWF0aC5sb2cobXMxIC8gbXMyKSAvIE1hdGgubG9nKHRzMSAvIHRzMik7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhpcy5ucyA9IHNpbjE7XG4gIH1cbiAgaWYgKGlzTmFOKHRoaXMubnMpKSB7XG4gICAgdGhpcy5ucyA9IHNpbjE7XG4gIH1cbiAgdGhpcy5mMCA9IG1zMSAvICh0aGlzLm5zICogTWF0aC5wb3codHMxLCB0aGlzLm5zKSk7XG4gIHRoaXMucmggPSB0aGlzLmEgKiB0aGlzLmYwICogTWF0aC5wb3codHMwLCB0aGlzLm5zKTtcbiAgaWYgKCF0aGlzLnRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IFwiTGFtYmVydCBDb25mb3JtYWwgQ29uaWNcIjtcbiAgfVxufVxuXG4vLyBMYW1iZXJ0IENvbmZvcm1hbCBjb25pYyBmb3J3YXJkIGVxdWF0aW9ucy0tbWFwcGluZyBsYXQsbG9uZyB0byB4LHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG5cbiAgdmFyIGxvbiA9IHAueDtcbiAgdmFyIGxhdCA9IHAueTtcblxuICAvLyBzaW5ndWxhciBjYXNlcyA6XG4gIGlmIChNYXRoLmFicygyICogTWF0aC5hYnMobGF0KSAtIE1hdGguUEkpIDw9IEVQU0xOKSB7XG4gICAgbGF0ID0gc2lnbihsYXQpICogKEhBTEZfUEkgLSAyICogRVBTTE4pO1xuICB9XG5cbiAgdmFyIGNvbiA9IE1hdGguYWJzKE1hdGguYWJzKGxhdCkgLSBIQUxGX1BJKTtcbiAgdmFyIHRzLCByaDE7XG4gIGlmIChjb24gPiBFUFNMTikge1xuICAgIHRzID0gdHNmbnoodGhpcy5lLCBsYXQsIE1hdGguc2luKGxhdCkpO1xuICAgIHJoMSA9IHRoaXMuYSAqIHRoaXMuZjAgKiBNYXRoLnBvdyh0cywgdGhpcy5ucyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uID0gbGF0ICogdGhpcy5ucztcbiAgICBpZiAoY29uIDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByaDEgPSAwO1xuICB9XG4gIHZhciB0aGV0YSA9IHRoaXMubnMgKiBhZGp1c3RfbG9uKGxvbiAtIHRoaXMubG9uZzApO1xuICBwLnggPSB0aGlzLmswICogKHJoMSAqIE1hdGguc2luKHRoZXRhKSkgKyB0aGlzLngwO1xuICBwLnkgPSB0aGlzLmswICogKHRoaXMucmggLSByaDEgKiBNYXRoLmNvcyh0aGV0YSkpICsgdGhpcy55MDtcblxuICByZXR1cm4gcDtcbn1cblxuLy8gTGFtYmVydCBDb25mb3JtYWwgQ29uaWMgaW52ZXJzZSBlcXVhdGlvbnMtLW1hcHBpbmcgeCx5IHRvIGxhdC9sb25nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuXG4gIHZhciByaDEsIGNvbiwgdHM7XG4gIHZhciBsYXQsIGxvbjtcbiAgdmFyIHggPSAocC54IC0gdGhpcy54MCkgLyB0aGlzLmswO1xuICB2YXIgeSA9ICh0aGlzLnJoIC0gKHAueSAtIHRoaXMueTApIC8gdGhpcy5rMCk7XG4gIGlmICh0aGlzLm5zID4gMCkge1xuICAgIHJoMSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICBjb24gPSAxO1xuICB9XG4gIGVsc2Uge1xuICAgIHJoMSA9IC1NYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgY29uID0gLTE7XG4gIH1cbiAgdmFyIHRoZXRhID0gMDtcbiAgaWYgKHJoMSAhPT0gMCkge1xuICAgIHRoZXRhID0gTWF0aC5hdGFuMigoY29uICogeCksIChjb24gKiB5KSk7XG4gIH1cbiAgaWYgKChyaDEgIT09IDApIHx8ICh0aGlzLm5zID4gMCkpIHtcbiAgICBjb24gPSAxIC8gdGhpcy5ucztcbiAgICB0cyA9IE1hdGgucG93KChyaDEgLyAodGhpcy5hICogdGhpcy5mMCkpLCBjb24pO1xuICAgIGxhdCA9IHBoaTJ6KHRoaXMuZSwgdHMpO1xuICAgIGlmIChsYXQgPT09IC05OTk5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbGF0ID0gLUhBTEZfUEk7XG4gIH1cbiAgbG9uID0gYWRqdXN0X2xvbih0aGV0YSAvIHRoaXMubnMgKyB0aGlzLmxvbmcwKTtcblxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJMYW1iZXJ0IFRhbmdlbnRpYWwgQ29uZm9ybWFsIENvbmljIFByb2plY3Rpb25cIiwgXCJMYW1iZXJ0X0NvbmZvcm1hbF9Db25pY1wiLCBcIkxhbWJlcnRfQ29uZm9ybWFsX0NvbmljXzJTUFwiLCBcImxjY1wiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vbm8tb3AgZm9yIGxvbmdsYXRcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkocHQpIHtcbiAgcmV0dXJuIHB0O1xufVxuZXhwb3J0IHtpZGVudGl0eSBhcyBmb3J3YXJkfTtcbmV4cG9ydCB7aWRlbnRpdHkgYXMgaW52ZXJzZX07XG5leHBvcnQgdmFyIG5hbWVzID0gW1wibG9uZ2xhdFwiLCBcImlkZW50aXR5XCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBpZGVudGl0eSxcbiAgaW52ZXJzZTogaWRlbnRpdHksXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsImltcG9ydCBtc2ZueiBmcm9tICcuLi9jb21tb24vbXNmbnonO1xuXG5pbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5pbXBvcnQgdHNmbnogZnJvbSAnLi4vY29tbW9uL3RzZm56JztcbmltcG9ydCBwaGkyeiBmcm9tICcuLi9jb21tb24vcGhpMnonO1xuaW1wb3J0IHtGT1JUUEksIFIyRCwgRVBTTE4sIEhBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBjb24gPSB0aGlzLmIgLyB0aGlzLmE7XG4gIHRoaXMuZXMgPSAxIC0gY29uICogY29uO1xuICBpZighKCd4MCcgaW4gdGhpcykpe1xuICAgIHRoaXMueDAgPSAwO1xuICB9XG4gIGlmKCEoJ3kwJyBpbiB0aGlzKSl7XG4gICAgdGhpcy55MCA9IDA7XG4gIH1cbiAgdGhpcy5lID0gTWF0aC5zcXJ0KHRoaXMuZXMpO1xuICBpZiAodGhpcy5sYXRfdHMpIHtcbiAgICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICAgIHRoaXMuazAgPSBNYXRoLmNvcyh0aGlzLmxhdF90cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5rMCA9IG1zZm56KHRoaXMuZSwgTWF0aC5zaW4odGhpcy5sYXRfdHMpLCBNYXRoLmNvcyh0aGlzLmxhdF90cykpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoIXRoaXMuazApIHtcbiAgICAgIGlmICh0aGlzLmspIHtcbiAgICAgICAgdGhpcy5rMCA9IHRoaXMuaztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmswID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogTWVyY2F0b3IgZm9yd2FyZCBlcXVhdGlvbnMtLW1hcHBpbmcgbGF0LGxvbmcgdG8geCx5XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgbG9uID0gcC54O1xuICB2YXIgbGF0ID0gcC55O1xuICAvLyBjb252ZXJ0IHRvIHJhZGlhbnNcbiAgaWYgKGxhdCAqIFIyRCA+IDkwICYmIGxhdCAqIFIyRCA8IC05MCAmJiBsb24gKiBSMkQgPiAxODAgJiYgbG9uICogUjJEIDwgLTE4MCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHgsIHk7XG4gIGlmIChNYXRoLmFicyhNYXRoLmFicyhsYXQpIC0gSEFMRl9QSSkgPD0gRVBTTE4pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICAgIHggPSB0aGlzLngwICsgdGhpcy5hICogdGhpcy5rMCAqIGFkanVzdF9sb24obG9uIC0gdGhpcy5sb25nMCk7XG4gICAgICB5ID0gdGhpcy55MCArIHRoaXMuYSAqIHRoaXMuazAgKiBNYXRoLmxvZyhNYXRoLnRhbihGT1JUUEkgKyAwLjUgKiBsYXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgc2lucGhpID0gTWF0aC5zaW4obGF0KTtcbiAgICAgIHZhciB0cyA9IHRzZm56KHRoaXMuZSwgbGF0LCBzaW5waGkpO1xuICAgICAgeCA9IHRoaXMueDAgKyB0aGlzLmEgKiB0aGlzLmswICogYWRqdXN0X2xvbihsb24gLSB0aGlzLmxvbmcwKTtcbiAgICAgIHkgPSB0aGlzLnkwIC0gdGhpcy5hICogdGhpcy5rMCAqIE1hdGgubG9nKHRzKTtcbiAgICB9XG4gICAgcC54ID0geDtcbiAgICBwLnkgPSB5O1xuICAgIHJldHVybiBwO1xuICB9XG59XG5cbi8qIE1lcmNhdG9yIGludmVyc2UgZXF1YXRpb25zLS1tYXBwaW5nIHgseSB0byBsYXQvbG9uZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShwKSB7XG5cbiAgdmFyIHggPSBwLnggLSB0aGlzLngwO1xuICB2YXIgeSA9IHAueSAtIHRoaXMueTA7XG4gIHZhciBsb24sIGxhdDtcblxuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICBsYXQgPSBIQUxGX1BJIC0gMiAqIE1hdGguYXRhbihNYXRoLmV4cCgteSAvICh0aGlzLmEgKiB0aGlzLmswKSkpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciB0cyA9IE1hdGguZXhwKC15IC8gKHRoaXMuYSAqIHRoaXMuazApKTtcbiAgICBsYXQgPSBwaGkyeih0aGlzLmUsIHRzKTtcbiAgICBpZiAobGF0ID09PSAtOTk5OSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIHggLyAodGhpcy5hICogdGhpcy5rMCkpO1xuXG4gIHAueCA9IGxvbjtcbiAgcC55ID0gbGF0O1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIk1lcmNhdG9yXCIsIFwiUG9wdWxhciBWaXN1YWxpc2F0aW9uIFBzZXVkbyBNZXJjYXRvclwiLCBcIk1lcmNhdG9yXzFTUFwiLCBcIk1lcmNhdG9yX0F1eGlsaWFyeV9TcGhlcmVcIiwgXCJtZXJjXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXNcbn07XG4iLCJpbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5cbi8qXG4gIHJlZmVyZW5jZVxuICAgIFwiTmV3IEVxdWFsLUFyZWEgTWFwIFByb2plY3Rpb25zIGZvciBOb25jaXJjdWxhciBSZWdpb25zXCIsIEpvaG4gUC4gU255ZGVyLFxuICAgIFRoZSBBbWVyaWNhbiBDYXJ0b2dyYXBoZXIsIFZvbCAxNSwgTm8uIDQsIE9jdG9iZXIgMTk4OCwgcHAuIDM0MS0zNTUuXG4gICovXG5cblxuLyogSW5pdGlhbGl6ZSB0aGUgTWlsbGVyIEN5bGluZHJpY2FsIHByb2plY3Rpb25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy9uby1vcFxufVxuXG4vKiBNaWxsZXIgQ3lsaW5kcmljYWwgZm9yd2FyZCBlcXVhdGlvbnMtLW1hcHBpbmcgbGF0LGxvbmcgdG8geCx5XG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkKHApIHtcbiAgdmFyIGxvbiA9IHAueDtcbiAgdmFyIGxhdCA9IHAueTtcbiAgLyogRm9yd2FyZCBlcXVhdGlvbnNcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgdmFyIGRsb24gPSBhZGp1c3RfbG9uKGxvbiAtIHRoaXMubG9uZzApO1xuICB2YXIgeCA9IHRoaXMueDAgKyB0aGlzLmEgKiBkbG9uO1xuICB2YXIgeSA9IHRoaXMueTAgKyB0aGlzLmEgKiBNYXRoLmxvZyhNYXRoLnRhbigoTWF0aC5QSSAvIDQpICsgKGxhdCAvIDIuNSkpKSAqIDEuMjU7XG5cbiAgcC54ID0geDtcbiAgcC55ID0geTtcbiAgcmV0dXJuIHA7XG59XG5cbi8qIE1pbGxlciBDeWxpbmRyaWNhbCBpbnZlcnNlIGVxdWF0aW9ucy0tbWFwcGluZyB4LHkgdG8gbGF0L2xvbmdcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICBwLnggLT0gdGhpcy54MDtcbiAgcC55IC09IHRoaXMueTA7XG5cbiAgdmFyIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIHAueCAvIHRoaXMuYSk7XG4gIHZhciBsYXQgPSAyLjUgKiAoTWF0aC5hdGFuKE1hdGguZXhwKDAuOCAqIHAueSAvIHRoaXMuYSkpIC0gTWF0aC5QSSAvIDQpO1xuXG4gIHAueCA9IGxvbjtcbiAgcC55ID0gbGF0O1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIk1pbGxlcl9DeWxpbmRyaWNhbFwiLCBcIm1pbGxcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsImltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge31cbmltcG9ydCB7RVBTTE59IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuLyogTW9sbHdlaWRlIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuXG4gIC8qIEZvcndhcmQgZXF1YXRpb25zXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLSovXG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG5cbiAgdmFyIGRlbHRhX2xvbiA9IGFkanVzdF9sb24obG9uIC0gdGhpcy5sb25nMCk7XG4gIHZhciB0aGV0YSA9IGxhdDtcbiAgdmFyIGNvbiA9IE1hdGguUEkgKiBNYXRoLnNpbihsYXQpO1xuXG4gIC8qIEl0ZXJhdGUgdXNpbmcgdGhlIE5ld3Rvbi1SYXBoc29uIG1ldGhvZCB0byBmaW5kIHRoZXRhXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGRlbHRhX3RoZXRhID0gLSh0aGV0YSArIE1hdGguc2luKHRoZXRhKSAtIGNvbikgLyAoMSArIE1hdGguY29zKHRoZXRhKSk7XG4gICAgdGhldGEgKz0gZGVsdGFfdGhldGE7XG4gICAgaWYgKE1hdGguYWJzKGRlbHRhX3RoZXRhKSA8IEVQU0xOKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgdGhldGEgLz0gMjtcblxuICAvKiBJZiB0aGUgbGF0aXR1ZGUgaXMgOTAgZGVnLCBmb3JjZSB0aGUgeCBjb29yZGluYXRlIHRvIGJlIFwiMCArIGZhbHNlIGVhc3RpbmdcIlxuICAgICAgIHRoaXMgaXMgZG9uZSBoZXJlIGJlY2F1c2Ugb2YgcHJlY2lzaW9uIHByb2JsZW1zIHdpdGggXCJjb3ModGhldGEpXCJcbiAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIGlmIChNYXRoLlBJIC8gMiAtIE1hdGguYWJzKGxhdCkgPCBFUFNMTikge1xuICAgIGRlbHRhX2xvbiA9IDA7XG4gIH1cbiAgdmFyIHggPSAwLjkwMDMxNjMxNjE1OCAqIHRoaXMuYSAqIGRlbHRhX2xvbiAqIE1hdGguY29zKHRoZXRhKSArIHRoaXMueDA7XG4gIHZhciB5ID0gMS40MTQyMTM1NjIzNzMxICogdGhpcy5hICogTWF0aC5zaW4odGhldGEpICsgdGhpcy55MDtcblxuICBwLnggPSB4O1xuICBwLnkgPSB5O1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgdGhldGE7XG4gIHZhciBhcmc7XG5cbiAgLyogSW52ZXJzZSBlcXVhdGlvbnNcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgcC54IC09IHRoaXMueDA7XG4gIHAueSAtPSB0aGlzLnkwO1xuICBhcmcgPSBwLnkgLyAoMS40MTQyMTM1NjIzNzMxICogdGhpcy5hKTtcblxuICAvKiBCZWNhdXNlIG9mIGRpdmlzaW9uIGJ5IHplcm8gcHJvYmxlbXMsICdhcmcnIGNhbiBub3QgYmUgMS4gIFRoZXJlZm9yZVxuICAgICAgIGEgbnVtYmVyIHZlcnkgY2xvc2UgdG8gb25lIGlzIHVzZWQgaW5zdGVhZC5cbiAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgaWYgKE1hdGguYWJzKGFyZykgPiAwLjk5OTk5OTk5OTk5OSkge1xuICAgIGFyZyA9IDAuOTk5OTk5OTk5OTk5O1xuICB9XG4gIHRoZXRhID0gTWF0aC5hc2luKGFyZyk7XG4gIHZhciBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyAocC54IC8gKDAuOTAwMzE2MzE2MTU4ICogdGhpcy5hICogTWF0aC5jb3ModGhldGEpKSkpO1xuICBpZiAobG9uIDwgKC1NYXRoLlBJKSkge1xuICAgIGxvbiA9IC1NYXRoLlBJO1xuICB9XG4gIGlmIChsb24gPiBNYXRoLlBJKSB7XG4gICAgbG9uID0gTWF0aC5QSTtcbiAgfVxuICBhcmcgPSAoMiAqIHRoZXRhICsgTWF0aC5zaW4oMiAqIHRoZXRhKSkgLyBNYXRoLlBJO1xuICBpZiAoTWF0aC5hYnMoYXJnKSA+IDEpIHtcbiAgICBhcmcgPSAxO1xuICB9XG4gIHZhciBsYXQgPSBNYXRoLmFzaW4oYXJnKTtcblxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJNb2xsd2VpZGVcIiwgXCJtb2xsXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXNcbn07XG4iLCJpbXBvcnQge1NFQ19UT19SQUR9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG4vKlxuICByZWZlcmVuY2VcbiAgICBEZXBhcnRtZW50IG9mIExhbmQgYW5kIFN1cnZleSBUZWNobmljYWwgQ2lyY3VsYXIgMTk3My8zMlxuICAgICAgaHR0cDovL3d3dy5saW56LmdvdnQubnovZG9jcy9taXNjZWxsYW5lb3VzL256LW1hcC1kZWZpbml0aW9uLnBkZlxuICAgIE9TRyBUZWNobmljYWwgUmVwb3J0IDQuMVxuICAgICAgaHR0cDovL3d3dy5saW56LmdvdnQubnovZG9jcy9taXNjZWxsYW5lb3VzL256bWcucGRmXG4gICovXG5cbi8qKlxuICogaXRlcmF0aW9uczogTnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcmVmaW5lIGludmVyc2UgdHJhbnNmb3JtLlxuICogICAgIDAgLT4ga20gYWNjdXJhY3lcbiAqICAgICAxIC0+IG0gYWNjdXJhY3kgLS0gc3VpdGFibGUgZm9yIG1vc3QgbWFwcGluZyBhcHBsaWNhdGlvbnNcbiAqICAgICAyIC0+IG1tIGFjY3VyYWN5XG4gKi9cbmV4cG9ydCB2YXIgaXRlcmF0aW9ucyA9IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICB0aGlzLkEgPSBbXTtcbiAgdGhpcy5BWzFdID0gMC42Mzk5MTc1MDczO1xuICB0aGlzLkFbMl0gPSAtMC4xMzU4Nzk3NjEzO1xuICB0aGlzLkFbM10gPSAwLjA2MzI5NDQwOTtcbiAgdGhpcy5BWzRdID0gLTAuMDI1MjY4NTM7XG4gIHRoaXMuQVs1XSA9IDAuMDExNzg3OTtcbiAgdGhpcy5BWzZdID0gLTAuMDA1NTE2MTtcbiAgdGhpcy5BWzddID0gMC4wMDI2OTA2O1xuICB0aGlzLkFbOF0gPSAtMC4wMDEzMzM7XG4gIHRoaXMuQVs5XSA9IDAuMDAwNjc7XG4gIHRoaXMuQVsxMF0gPSAtMC4wMDAzNDtcblxuICB0aGlzLkJfcmUgPSBbXTtcbiAgdGhpcy5CX2ltID0gW107XG4gIHRoaXMuQl9yZVsxXSA9IDAuNzU1Nzg1MzIyODtcbiAgdGhpcy5CX2ltWzFdID0gMDtcbiAgdGhpcy5CX3JlWzJdID0gMC4yNDkyMDQ2NDY7XG4gIHRoaXMuQl9pbVsyXSA9IDAuMDAzMzcxNTA3O1xuICB0aGlzLkJfcmVbM10gPSAtMC4wMDE1NDE3Mzk7XG4gIHRoaXMuQl9pbVszXSA9IDAuMDQxMDU4NTYwO1xuICB0aGlzLkJfcmVbNF0gPSAtMC4xMDE2MjkwNztcbiAgdGhpcy5CX2ltWzRdID0gMC4wMTcyNzYwOTtcbiAgdGhpcy5CX3JlWzVdID0gLTAuMjY2MjM0ODk7XG4gIHRoaXMuQl9pbVs1XSA9IC0wLjM2MjQ5MjE4O1xuICB0aGlzLkJfcmVbNl0gPSAtMC42ODcwOTgzO1xuICB0aGlzLkJfaW1bNl0gPSAtMS4xNjUxOTY3O1xuXG4gIHRoaXMuQ19yZSA9IFtdO1xuICB0aGlzLkNfaW0gPSBbXTtcbiAgdGhpcy5DX3JlWzFdID0gMS4zMjMxMjcwNDM5O1xuICB0aGlzLkNfaW1bMV0gPSAwO1xuICB0aGlzLkNfcmVbMl0gPSAtMC41NzcyNDU3ODk7XG4gIHRoaXMuQ19pbVsyXSA9IC0wLjAwNzgwOTU5ODtcbiAgdGhpcy5DX3JlWzNdID0gMC41MDgzMDc1MTM7XG4gIHRoaXMuQ19pbVszXSA9IC0wLjExMjIwODk1MjtcbiAgdGhpcy5DX3JlWzRdID0gLTAuMTUwOTQ3NjI7XG4gIHRoaXMuQ19pbVs0XSA9IDAuMTgyMDA2MDI7XG4gIHRoaXMuQ19yZVs1XSA9IDEuMDE0MTgxNzk7XG4gIHRoaXMuQ19pbVs1XSA9IDEuNjQ0OTc2OTY7XG4gIHRoaXMuQ19yZVs2XSA9IDEuOTY2MDU0OTtcbiAgdGhpcy5DX2ltWzZdID0gMi41MTI3NjQ1O1xuXG4gIHRoaXMuRCA9IFtdO1xuICB0aGlzLkRbMV0gPSAxLjU2MjcwMTQyNDM7XG4gIHRoaXMuRFsyXSA9IDAuNTE4NTQwNjM5ODtcbiAgdGhpcy5EWzNdID0gLTAuMDMzMzMwOTg7XG4gIHRoaXMuRFs0XSA9IC0wLjEwNTI5MDY7XG4gIHRoaXMuRFs1XSA9IC0wLjAzNjg1OTQ7XG4gIHRoaXMuRFs2XSA9IDAuMDA3MzE3O1xuICB0aGlzLkRbN10gPSAwLjAxMjIwO1xuICB0aGlzLkRbOF0gPSAwLjAwMzk0O1xuICB0aGlzLkRbOV0gPSAtMC4wMDEzO1xufVxuXG4vKipcbiAgICBOZXcgWmVhbGFuZCBNYXAgR3JpZCBGb3J3YXJkICAtIGxvbmcvbGF0IHRvIHgveVxuICAgIGxvbmcvbGF0IGluIHJhZGlhbnNcbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkKHApIHtcbiAgdmFyIG47XG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG5cbiAgdmFyIGRlbHRhX2xhdCA9IGxhdCAtIHRoaXMubGF0MDtcbiAgdmFyIGRlbHRhX2xvbiA9IGxvbiAtIHRoaXMubG9uZzA7XG5cbiAgLy8gMS4gQ2FsY3VsYXRlIGRfcGhpIGFuZCBkX3BzaSAgICAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBkX2xhbWJkYVxuICAvLyBGb3IgdGhpcyBhbGdvcml0aG0sIGRlbHRhX2xhdGl0dWRlIGlzIGluIHNlY29uZHMgb2YgYXJjIHggMTAtNSwgc28gd2UgbmVlZCB0byBzY2FsZSB0byB0aG9zZSB1bml0cy4gTG9uZ2l0dWRlIGlzIHJhZGlhbnMuXG4gIHZhciBkX3BoaSA9IGRlbHRhX2xhdCAvIFNFQ19UT19SQUQgKiAxRS01O1xuICB2YXIgZF9sYW1iZGEgPSBkZWx0YV9sb247XG4gIHZhciBkX3BoaV9uID0gMTsgLy8gZF9waGleMFxuXG4gIHZhciBkX3BzaSA9IDA7XG4gIGZvciAobiA9IDE7IG4gPD0gMTA7IG4rKykge1xuICAgIGRfcGhpX24gPSBkX3BoaV9uICogZF9waGk7XG4gICAgZF9wc2kgPSBkX3BzaSArIHRoaXMuQVtuXSAqIGRfcGhpX247XG4gIH1cblxuICAvLyAyLiBDYWxjdWxhdGUgdGhldGFcbiAgdmFyIHRoX3JlID0gZF9wc2k7XG4gIHZhciB0aF9pbSA9IGRfbGFtYmRhO1xuXG4gIC8vIDMuIENhbGN1bGF0ZSB6XG4gIHZhciB0aF9uX3JlID0gMTtcbiAgdmFyIHRoX25faW0gPSAwOyAvLyB0aGV0YV4wXG4gIHZhciB0aF9uX3JlMTtcbiAgdmFyIHRoX25faW0xO1xuXG4gIHZhciB6X3JlID0gMDtcbiAgdmFyIHpfaW0gPSAwO1xuICBmb3IgKG4gPSAxOyBuIDw9IDY7IG4rKykge1xuICAgIHRoX25fcmUxID0gdGhfbl9yZSAqIHRoX3JlIC0gdGhfbl9pbSAqIHRoX2ltO1xuICAgIHRoX25faW0xID0gdGhfbl9pbSAqIHRoX3JlICsgdGhfbl9yZSAqIHRoX2ltO1xuICAgIHRoX25fcmUgPSB0aF9uX3JlMTtcbiAgICB0aF9uX2ltID0gdGhfbl9pbTE7XG4gICAgel9yZSA9IHpfcmUgKyB0aGlzLkJfcmVbbl0gKiB0aF9uX3JlIC0gdGhpcy5CX2ltW25dICogdGhfbl9pbTtcbiAgICB6X2ltID0gel9pbSArIHRoaXMuQl9pbVtuXSAqIHRoX25fcmUgKyB0aGlzLkJfcmVbbl0gKiB0aF9uX2ltO1xuICB9XG5cbiAgLy8gNC4gQ2FsY3VsYXRlIGVhc3RpbmcgYW5kIG5vcnRoaW5nXG4gIHAueCA9ICh6X2ltICogdGhpcy5hKSArIHRoaXMueDA7XG4gIHAueSA9ICh6X3JlICogdGhpcy5hKSArIHRoaXMueTA7XG5cbiAgcmV0dXJuIHA7XG59XG5cbi8qKlxuICAgIE5ldyBaZWFsYW5kIE1hcCBHcmlkIEludmVyc2UgIC0gIHgveSB0byBsb25nL2xhdFxuICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgbjtcbiAgdmFyIHggPSBwLng7XG4gIHZhciB5ID0gcC55O1xuXG4gIHZhciBkZWx0YV94ID0geCAtIHRoaXMueDA7XG4gIHZhciBkZWx0YV95ID0geSAtIHRoaXMueTA7XG5cbiAgLy8gMS4gQ2FsY3VsYXRlIHpcbiAgdmFyIHpfcmUgPSBkZWx0YV95IC8gdGhpcy5hO1xuICB2YXIgel9pbSA9IGRlbHRhX3ggLyB0aGlzLmE7XG5cbiAgLy8gMmEuIENhbGN1bGF0ZSB0aGV0YSAtIGZpcnN0IGFwcHJveGltYXRpb24gZ2l2ZXMga20gYWNjdXJhY3lcbiAgdmFyIHpfbl9yZSA9IDE7XG4gIHZhciB6X25faW0gPSAwOyAvLyB6XjBcbiAgdmFyIHpfbl9yZTE7XG4gIHZhciB6X25faW0xO1xuXG4gIHZhciB0aF9yZSA9IDA7XG4gIHZhciB0aF9pbSA9IDA7XG4gIGZvciAobiA9IDE7IG4gPD0gNjsgbisrKSB7XG4gICAgel9uX3JlMSA9IHpfbl9yZSAqIHpfcmUgLSB6X25faW0gKiB6X2ltO1xuICAgIHpfbl9pbTEgPSB6X25faW0gKiB6X3JlICsgel9uX3JlICogel9pbTtcbiAgICB6X25fcmUgPSB6X25fcmUxO1xuICAgIHpfbl9pbSA9IHpfbl9pbTE7XG4gICAgdGhfcmUgPSB0aF9yZSArIHRoaXMuQ19yZVtuXSAqIHpfbl9yZSAtIHRoaXMuQ19pbVtuXSAqIHpfbl9pbTtcbiAgICB0aF9pbSA9IHRoX2ltICsgdGhpcy5DX2ltW25dICogel9uX3JlICsgdGhpcy5DX3JlW25dICogel9uX2ltO1xuICB9XG5cbiAgLy8gMmIuIEl0ZXJhdGUgdG8gcmVmaW5lIHRoZSBhY2N1cmFjeSBvZiB0aGUgY2FsY3VsYXRpb25cbiAgLy8gICAgICAgIDAgaXRlcmF0aW9ucyBnaXZlcyBrbSBhY2N1cmFjeVxuICAvLyAgICAgICAgMSBpdGVyYXRpb24gZ2l2ZXMgbSBhY2N1cmFjeSAtLSBnb29kIGVub3VnaCBmb3IgbW9zdCBtYXBwaW5nIGFwcGxpY2F0aW9uc1xuICAvLyAgICAgICAgMiBpdGVyYXRpb25zIGJpdmVzIG1tIGFjY3VyYWN5XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVyYXRpb25zOyBpKyspIHtcbiAgICB2YXIgdGhfbl9yZSA9IHRoX3JlO1xuICAgIHZhciB0aF9uX2ltID0gdGhfaW07XG4gICAgdmFyIHRoX25fcmUxO1xuICAgIHZhciB0aF9uX2ltMTtcblxuICAgIHZhciBudW1fcmUgPSB6X3JlO1xuICAgIHZhciBudW1faW0gPSB6X2ltO1xuICAgIGZvciAobiA9IDI7IG4gPD0gNjsgbisrKSB7XG4gICAgICB0aF9uX3JlMSA9IHRoX25fcmUgKiB0aF9yZSAtIHRoX25faW0gKiB0aF9pbTtcbiAgICAgIHRoX25faW0xID0gdGhfbl9pbSAqIHRoX3JlICsgdGhfbl9yZSAqIHRoX2ltO1xuICAgICAgdGhfbl9yZSA9IHRoX25fcmUxO1xuICAgICAgdGhfbl9pbSA9IHRoX25faW0xO1xuICAgICAgbnVtX3JlID0gbnVtX3JlICsgKG4gLSAxKSAqICh0aGlzLkJfcmVbbl0gKiB0aF9uX3JlIC0gdGhpcy5CX2ltW25dICogdGhfbl9pbSk7XG4gICAgICBudW1faW0gPSBudW1faW0gKyAobiAtIDEpICogKHRoaXMuQl9pbVtuXSAqIHRoX25fcmUgKyB0aGlzLkJfcmVbbl0gKiB0aF9uX2ltKTtcbiAgICB9XG5cbiAgICB0aF9uX3JlID0gMTtcbiAgICB0aF9uX2ltID0gMDtcbiAgICB2YXIgZGVuX3JlID0gdGhpcy5CX3JlWzFdO1xuICAgIHZhciBkZW5faW0gPSB0aGlzLkJfaW1bMV07XG4gICAgZm9yIChuID0gMjsgbiA8PSA2OyBuKyspIHtcbiAgICAgIHRoX25fcmUxID0gdGhfbl9yZSAqIHRoX3JlIC0gdGhfbl9pbSAqIHRoX2ltO1xuICAgICAgdGhfbl9pbTEgPSB0aF9uX2ltICogdGhfcmUgKyB0aF9uX3JlICogdGhfaW07XG4gICAgICB0aF9uX3JlID0gdGhfbl9yZTE7XG4gICAgICB0aF9uX2ltID0gdGhfbl9pbTE7XG4gICAgICBkZW5fcmUgPSBkZW5fcmUgKyBuICogKHRoaXMuQl9yZVtuXSAqIHRoX25fcmUgLSB0aGlzLkJfaW1bbl0gKiB0aF9uX2ltKTtcbiAgICAgIGRlbl9pbSA9IGRlbl9pbSArIG4gKiAodGhpcy5CX2ltW25dICogdGhfbl9yZSArIHRoaXMuQl9yZVtuXSAqIHRoX25faW0pO1xuICAgIH1cblxuICAgIC8vIENvbXBsZXggZGl2aXNpb25cbiAgICB2YXIgZGVuMiA9IGRlbl9yZSAqIGRlbl9yZSArIGRlbl9pbSAqIGRlbl9pbTtcbiAgICB0aF9yZSA9IChudW1fcmUgKiBkZW5fcmUgKyBudW1faW0gKiBkZW5faW0pIC8gZGVuMjtcbiAgICB0aF9pbSA9IChudW1faW0gKiBkZW5fcmUgLSBudW1fcmUgKiBkZW5faW0pIC8gZGVuMjtcbiAgfVxuXG4gIC8vIDMuIENhbGN1bGF0ZSBkX3BoaSAgICAgICAgICAgICAgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGRfbGFtYmRhXG4gIHZhciBkX3BzaSA9IHRoX3JlO1xuICB2YXIgZF9sYW1iZGEgPSB0aF9pbTtcbiAgdmFyIGRfcHNpX24gPSAxOyAvLyBkX3BzaV4wXG5cbiAgdmFyIGRfcGhpID0gMDtcbiAgZm9yIChuID0gMTsgbiA8PSA5OyBuKyspIHtcbiAgICBkX3BzaV9uID0gZF9wc2lfbiAqIGRfcHNpO1xuICAgIGRfcGhpID0gZF9waGkgKyB0aGlzLkRbbl0gKiBkX3BzaV9uO1xuICB9XG5cbiAgLy8gNC4gQ2FsY3VsYXRlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcbiAgLy8gZF9waGkgaXMgY2FsY3VhdGVkIGluIHNlY29uZCBvZiBhcmMgKiAxMF4tNSwgc28gd2UgbmVlZCB0byBzY2FsZSBiYWNrIHRvIHJhZGlhbnMuIGRfbGFtYmRhIGlzIGluIHJhZGlhbnMuXG4gIHZhciBsYXQgPSB0aGlzLmxhdDAgKyAoZF9waGkgKiBTRUNfVE9fUkFEICogMUU1KTtcbiAgdmFyIGxvbiA9IHRoaXMubG9uZzAgKyBkX2xhbWJkYTtcblxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcblxuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIk5ld19aZWFsYW5kX01hcF9HcmlkXCIsIFwibnptZ1wiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiaW1wb3J0IHRzZm56IGZyb20gJy4uL2NvbW1vbi90c2Zueic7XG5pbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5pbXBvcnQgcGhpMnogZnJvbSAnLi4vY29tbW9uL3BoaTJ6JztcbmltcG9ydCB7RVBTTE4sIEhBTEZfUEksIEZPUlRQSX0gZnJvbSAnLi4vY29uc3RhbnRzL3ZhbHVlcyc7XG5cbi8qIEluaXRpYWxpemUgdGhlIE9ibGlxdWUgTWVyY2F0b3IgIHByb2plY3Rpb25cbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHRoaXMubm9fb2ZmID0gdGhpcy5ub19vZmYgfHwgZmFsc2U7XG4gIHRoaXMubm9fcm90ID0gdGhpcy5ub19yb3QgfHwgZmFsc2U7XG5cbiAgaWYgKGlzTmFOKHRoaXMuazApKSB7XG4gICAgdGhpcy5rMCA9IDE7XG4gIH1cbiAgdmFyIHNpbmxhdCA9IE1hdGguc2luKHRoaXMubGF0MCk7XG4gIHZhciBjb3NsYXQgPSBNYXRoLmNvcyh0aGlzLmxhdDApO1xuICB2YXIgY29uID0gdGhpcy5lICogc2lubGF0O1xuXG4gIHRoaXMuYmwgPSBNYXRoLnNxcnQoMSArIHRoaXMuZXMgLyAoMSAtIHRoaXMuZXMpICogTWF0aC5wb3coY29zbGF0LCA0KSk7XG4gIHRoaXMuYWwgPSB0aGlzLmEgKiB0aGlzLmJsICogdGhpcy5rMCAqIE1hdGguc3FydCgxIC0gdGhpcy5lcykgLyAoMSAtIGNvbiAqIGNvbik7XG4gIHZhciB0MCA9IHRzZm56KHRoaXMuZSwgdGhpcy5sYXQwLCBzaW5sYXQpO1xuICB2YXIgZGwgPSB0aGlzLmJsIC8gY29zbGF0ICogTWF0aC5zcXJ0KCgxIC0gdGhpcy5lcykgLyAoMSAtIGNvbiAqIGNvbikpO1xuICBpZiAoZGwgKiBkbCA8IDEpIHtcbiAgICBkbCA9IDE7XG4gIH1cbiAgdmFyIGZsO1xuICB2YXIgZ2w7XG4gIGlmICghaXNOYU4odGhpcy5sb25nYykpIHtcbiAgICAvL0NlbnRyYWwgcG9pbnQgYW5kIGF6aW11dGggbWV0aG9kXG5cbiAgICBpZiAodGhpcy5sYXQwID49IDApIHtcbiAgICAgIGZsID0gZGwgKyBNYXRoLnNxcnQoZGwgKiBkbCAtIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZsID0gZGwgLSBNYXRoLnNxcnQoZGwgKiBkbCAtIDEpO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZmwgKiBNYXRoLnBvdyh0MCwgdGhpcy5ibCk7XG4gICAgZ2wgPSAwLjUgKiAoZmwgLSAxIC8gZmwpO1xuICAgIHRoaXMuZ2FtbWEwID0gTWF0aC5hc2luKE1hdGguc2luKHRoaXMuYWxwaGEpIC8gZGwpO1xuICAgIHRoaXMubG9uZzAgPSB0aGlzLmxvbmdjIC0gTWF0aC5hc2luKGdsICogTWF0aC50YW4odGhpcy5nYW1tYTApKSAvIHRoaXMuYmw7XG5cbiAgfVxuICBlbHNlIHtcbiAgICAvLzIgcG9pbnRzIG1ldGhvZFxuICAgIHZhciB0MSA9IHRzZm56KHRoaXMuZSwgdGhpcy5sYXQxLCBNYXRoLnNpbih0aGlzLmxhdDEpKTtcbiAgICB2YXIgdDIgPSB0c2Zueih0aGlzLmUsIHRoaXMubGF0MiwgTWF0aC5zaW4odGhpcy5sYXQyKSk7XG4gICAgaWYgKHRoaXMubGF0MCA+PSAwKSB7XG4gICAgICB0aGlzLmVsID0gKGRsICsgTWF0aC5zcXJ0KGRsICogZGwgLSAxKSkgKiBNYXRoLnBvdyh0MCwgdGhpcy5ibCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbCA9IChkbCAtIE1hdGguc3FydChkbCAqIGRsIC0gMSkpICogTWF0aC5wb3codDAsIHRoaXMuYmwpO1xuICAgIH1cbiAgICB2YXIgaGwgPSBNYXRoLnBvdyh0MSwgdGhpcy5ibCk7XG4gICAgdmFyIGxsID0gTWF0aC5wb3codDIsIHRoaXMuYmwpO1xuICAgIGZsID0gdGhpcy5lbCAvIGhsO1xuICAgIGdsID0gMC41ICogKGZsIC0gMSAvIGZsKTtcbiAgICB2YXIgamwgPSAodGhpcy5lbCAqIHRoaXMuZWwgLSBsbCAqIGhsKSAvICh0aGlzLmVsICogdGhpcy5lbCArIGxsICogaGwpO1xuICAgIHZhciBwbCA9IChsbCAtIGhsKSAvIChsbCArIGhsKTtcbiAgICB2YXIgZGxvbjEyID0gYWRqdXN0X2xvbih0aGlzLmxvbmcxIC0gdGhpcy5sb25nMik7XG4gICAgdGhpcy5sb25nMCA9IDAuNSAqICh0aGlzLmxvbmcxICsgdGhpcy5sb25nMikgLSBNYXRoLmF0YW4oamwgKiBNYXRoLnRhbigwLjUgKiB0aGlzLmJsICogKGRsb24xMikpIC8gcGwpIC8gdGhpcy5ibDtcbiAgICB0aGlzLmxvbmcwID0gYWRqdXN0X2xvbih0aGlzLmxvbmcwKTtcbiAgICB2YXIgZGxvbjEwID0gYWRqdXN0X2xvbih0aGlzLmxvbmcxIC0gdGhpcy5sb25nMCk7XG4gICAgdGhpcy5nYW1tYTAgPSBNYXRoLmF0YW4oTWF0aC5zaW4odGhpcy5ibCAqIChkbG9uMTApKSAvIGdsKTtcbiAgICB0aGlzLmFscGhhID0gTWF0aC5hc2luKGRsICogTWF0aC5zaW4odGhpcy5nYW1tYTApKTtcbiAgfVxuXG4gIGlmICh0aGlzLm5vX29mZikge1xuICAgIHRoaXMudWMgPSAwO1xuICB9XG4gIGVsc2Uge1xuICAgIGlmICh0aGlzLmxhdDAgPj0gMCkge1xuICAgICAgdGhpcy51YyA9IHRoaXMuYWwgLyB0aGlzLmJsICogTWF0aC5hdGFuMihNYXRoLnNxcnQoZGwgKiBkbCAtIDEpLCBNYXRoLmNvcyh0aGlzLmFscGhhKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy51YyA9IC0xICogdGhpcy5hbCAvIHRoaXMuYmwgKiBNYXRoLmF0YW4yKE1hdGguc3FydChkbCAqIGRsIC0gMSksIE1hdGguY29zKHRoaXMuYWxwaGEpKTtcbiAgICB9XG4gIH1cblxufVxuXG4vKiBPYmxpcXVlIE1lcmNhdG9yIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgbG9uID0gcC54O1xuICB2YXIgbGF0ID0gcC55O1xuICB2YXIgZGxvbiA9IGFkanVzdF9sb24obG9uIC0gdGhpcy5sb25nMCk7XG4gIHZhciB1cywgdnM7XG4gIHZhciBjb247XG4gIGlmIChNYXRoLmFicyhNYXRoLmFicyhsYXQpIC0gSEFMRl9QSSkgPD0gRVBTTE4pIHtcbiAgICBpZiAobGF0ID4gMCkge1xuICAgICAgY29uID0gLTE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uID0gMTtcbiAgICB9XG4gICAgdnMgPSB0aGlzLmFsIC8gdGhpcy5ibCAqIE1hdGgubG9nKE1hdGgudGFuKEZPUlRQSSArIGNvbiAqIHRoaXMuZ2FtbWEwICogMC41KSk7XG4gICAgdXMgPSAtMSAqIGNvbiAqIEhBTEZfUEkgKiB0aGlzLmFsIC8gdGhpcy5ibDtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgdCA9IHRzZm56KHRoaXMuZSwgbGF0LCBNYXRoLnNpbihsYXQpKTtcbiAgICB2YXIgcWwgPSB0aGlzLmVsIC8gTWF0aC5wb3codCwgdGhpcy5ibCk7XG4gICAgdmFyIHNsID0gMC41ICogKHFsIC0gMSAvIHFsKTtcbiAgICB2YXIgdGwgPSAwLjUgKiAocWwgKyAxIC8gcWwpO1xuICAgIHZhciB2bCA9IE1hdGguc2luKHRoaXMuYmwgKiAoZGxvbikpO1xuICAgIHZhciB1bCA9IChzbCAqIE1hdGguc2luKHRoaXMuZ2FtbWEwKSAtIHZsICogTWF0aC5jb3ModGhpcy5nYW1tYTApKSAvIHRsO1xuICAgIGlmIChNYXRoLmFicyhNYXRoLmFicyh1bCkgLSAxKSA8PSBFUFNMTikge1xuICAgICAgdnMgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdnMgPSAwLjUgKiB0aGlzLmFsICogTWF0aC5sb2coKDEgLSB1bCkgLyAoMSArIHVsKSkgLyB0aGlzLmJsO1xuICAgIH1cbiAgICBpZiAoTWF0aC5hYnMoTWF0aC5jb3ModGhpcy5ibCAqIChkbG9uKSkpIDw9IEVQU0xOKSB7XG4gICAgICB1cyA9IHRoaXMuYWwgKiB0aGlzLmJsICogKGRsb24pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVzID0gdGhpcy5hbCAqIE1hdGguYXRhbjIoc2wgKiBNYXRoLmNvcyh0aGlzLmdhbW1hMCkgKyB2bCAqIE1hdGguc2luKHRoaXMuZ2FtbWEwKSwgTWF0aC5jb3ModGhpcy5ibCAqIGRsb24pKSAvIHRoaXMuYmw7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMubm9fcm90KSB7XG4gICAgcC54ID0gdGhpcy54MCArIHVzO1xuICAgIHAueSA9IHRoaXMueTAgKyB2cztcbiAgfVxuICBlbHNlIHtcblxuICAgIHVzIC09IHRoaXMudWM7XG4gICAgcC54ID0gdGhpcy54MCArIHZzICogTWF0aC5jb3ModGhpcy5hbHBoYSkgKyB1cyAqIE1hdGguc2luKHRoaXMuYWxwaGEpO1xuICAgIHAueSA9IHRoaXMueTAgKyB1cyAqIE1hdGguY29zKHRoaXMuYWxwaGEpIC0gdnMgKiBNYXRoLnNpbih0aGlzLmFscGhhKTtcbiAgfVxuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgdXMsIHZzO1xuICBpZiAodGhpcy5ub19yb3QpIHtcbiAgICB2cyA9IHAueSAtIHRoaXMueTA7XG4gICAgdXMgPSBwLnggLSB0aGlzLngwO1xuICB9XG4gIGVsc2Uge1xuICAgIHZzID0gKHAueCAtIHRoaXMueDApICogTWF0aC5jb3ModGhpcy5hbHBoYSkgLSAocC55IC0gdGhpcy55MCkgKiBNYXRoLnNpbih0aGlzLmFscGhhKTtcbiAgICB1cyA9IChwLnkgLSB0aGlzLnkwKSAqIE1hdGguY29zKHRoaXMuYWxwaGEpICsgKHAueCAtIHRoaXMueDApICogTWF0aC5zaW4odGhpcy5hbHBoYSk7XG4gICAgdXMgKz0gdGhpcy51YztcbiAgfVxuICB2YXIgcXAgPSBNYXRoLmV4cCgtMSAqIHRoaXMuYmwgKiB2cyAvIHRoaXMuYWwpO1xuICB2YXIgc3AgPSAwLjUgKiAocXAgLSAxIC8gcXApO1xuICB2YXIgdHAgPSAwLjUgKiAocXAgKyAxIC8gcXApO1xuICB2YXIgdnAgPSBNYXRoLnNpbih0aGlzLmJsICogdXMgLyB0aGlzLmFsKTtcbiAgdmFyIHVwID0gKHZwICogTWF0aC5jb3ModGhpcy5nYW1tYTApICsgc3AgKiBNYXRoLnNpbih0aGlzLmdhbW1hMCkpIC8gdHA7XG4gIHZhciB0cyA9IE1hdGgucG93KHRoaXMuZWwgLyBNYXRoLnNxcnQoKDEgKyB1cCkgLyAoMSAtIHVwKSksIDEgLyB0aGlzLmJsKTtcbiAgaWYgKE1hdGguYWJzKHVwIC0gMSkgPCBFUFNMTikge1xuICAgIHAueCA9IHRoaXMubG9uZzA7XG4gICAgcC55ID0gSEFMRl9QSTtcbiAgfVxuICBlbHNlIGlmIChNYXRoLmFicyh1cCArIDEpIDwgRVBTTE4pIHtcbiAgICBwLnggPSB0aGlzLmxvbmcwO1xuICAgIHAueSA9IC0xICogSEFMRl9QSTtcbiAgfVxuICBlbHNlIHtcbiAgICBwLnkgPSBwaGkyeih0aGlzLmUsIHRzKTtcbiAgICBwLnggPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgLSBNYXRoLmF0YW4yKHNwICogTWF0aC5jb3ModGhpcy5nYW1tYTApIC0gdnAgKiBNYXRoLnNpbih0aGlzLmdhbW1hMCksIE1hdGguY29zKHRoaXMuYmwgKiB1cyAvIHRoaXMuYWwpKSAvIHRoaXMuYmwpO1xuICB9XG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wiSG90aW5lX09ibGlxdWVfTWVyY2F0b3JcIiwgXCJIb3RpbmUgT2JsaXF1ZSBNZXJjYXRvclwiLCBcIkhvdGluZV9PYmxpcXVlX01lcmNhdG9yX0F6aW11dGhfTmF0dXJhbF9PcmlnaW5cIiwgXCJIb3RpbmVfT2JsaXF1ZV9NZXJjYXRvcl9BemltdXRoX0NlbnRlclwiLCBcIm9tZXJjXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXNcbn07XG4iLCJpbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5pbXBvcnQgYXNpbnogZnJvbSAnLi4vY29tbW9uL2FzaW56JztcbmltcG9ydCB7RVBTTE4sIEhBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy9kb3VibGUgdGVtcDsgICAgICAvKiB0ZW1wb3JhcnkgdmFyaWFibGUgICAgKi9cblxuICAvKiBQbGFjZSBwYXJhbWV0ZXJzIGluIHN0YXRpYyBzdG9yYWdlIGZvciBjb21tb24gdXNlXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgdGhpcy5zaW5fcDE0ID0gTWF0aC5zaW4odGhpcy5sYXQwKTtcbiAgdGhpcy5jb3NfcDE0ID0gTWF0aC5jb3ModGhpcy5sYXQwKTtcbn1cblxuLyogT3J0aG9ncmFwaGljIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG4gIHZhciBzaW5waGksIGNvc3BoaTsgLyogc2luIGFuZCBjb3MgdmFsdWUgICAgICAgICovXG4gIHZhciBkbG9uOyAvKiBkZWx0YSBsb25naXR1ZGUgdmFsdWUgICAgICAqL1xuICB2YXIgY29zbG9uOyAvKiBjb3Mgb2YgbG9uZ2l0dWRlICAgICAgICAqL1xuICB2YXIga3NwOyAvKiBzY2FsZSBmYWN0b3IgICAgICAgICAgKi9cbiAgdmFyIGcsIHgsIHk7XG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG4gIC8qIEZvcndhcmQgZXF1YXRpb25zXG4gICAgICAtLS0tLS0tLS0tLS0tLS0tLSovXG4gIGRsb24gPSBhZGp1c3RfbG9uKGxvbiAtIHRoaXMubG9uZzApO1xuXG4gIHNpbnBoaSA9IE1hdGguc2luKGxhdCk7XG4gIGNvc3BoaSA9IE1hdGguY29zKGxhdCk7XG5cbiAgY29zbG9uID0gTWF0aC5jb3MoZGxvbik7XG4gIGcgPSB0aGlzLnNpbl9wMTQgKiBzaW5waGkgKyB0aGlzLmNvc19wMTQgKiBjb3NwaGkgKiBjb3Nsb247XG4gIGtzcCA9IDE7XG4gIGlmICgoZyA+IDApIHx8IChNYXRoLmFicyhnKSA8PSBFUFNMTikpIHtcbiAgICB4ID0gdGhpcy5hICoga3NwICogY29zcGhpICogTWF0aC5zaW4oZGxvbik7XG4gICAgeSA9IHRoaXMueTAgKyB0aGlzLmEgKiBrc3AgKiAodGhpcy5jb3NfcDE0ICogc2lucGhpIC0gdGhpcy5zaW5fcDE0ICogY29zcGhpICogY29zbG9uKTtcbiAgfVxuICBwLnggPSB4O1xuICBwLnkgPSB5O1xuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgcmg7IC8qIGhlaWdodCBhYm92ZSBlbGxpcHNvaWQgICAgICAqL1xuICB2YXIgejsgLyogYW5nbGUgICAgICAgICAgKi9cbiAgdmFyIHNpbnosIGNvc3o7IC8qIHNpbiBvZiB6IGFuZCBjb3Mgb2YgeiAgICAgICovXG4gIHZhciBjb247XG4gIHZhciBsb24sIGxhdDtcbiAgLyogSW52ZXJzZSBlcXVhdGlvbnNcbiAgICAgIC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgcC54IC09IHRoaXMueDA7XG4gIHAueSAtPSB0aGlzLnkwO1xuICByaCA9IE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICB6ID0gYXNpbnoocmggLyB0aGlzLmEpO1xuXG4gIHNpbnogPSBNYXRoLnNpbih6KTtcbiAgY29zeiA9IE1hdGguY29zKHopO1xuXG4gIGxvbiA9IHRoaXMubG9uZzA7XG4gIGlmIChNYXRoLmFicyhyaCkgPD0gRVBTTE4pIHtcbiAgICBsYXQgPSB0aGlzLmxhdDA7XG4gICAgcC54ID0gbG9uO1xuICAgIHAueSA9IGxhdDtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBsYXQgPSBhc2lueihjb3N6ICogdGhpcy5zaW5fcDE0ICsgKHAueSAqIHNpbnogKiB0aGlzLmNvc19wMTQpIC8gcmgpO1xuICBjb24gPSBNYXRoLmFicyh0aGlzLmxhdDApIC0gSEFMRl9QSTtcbiAgaWYgKE1hdGguYWJzKGNvbikgPD0gRVBTTE4pIHtcbiAgICBpZiAodGhpcy5sYXQwID49IDApIHtcbiAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIE1hdGguYXRhbjIocC54LCAtIHAueSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCAtIE1hdGguYXRhbjIoLXAueCwgcC55KSk7XG4gICAgfVxuICAgIHAueCA9IGxvbjtcbiAgICBwLnkgPSBsYXQ7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgbG9uID0gYWRqdXN0X2xvbih0aGlzLmxvbmcwICsgTWF0aC5hdGFuMigocC54ICogc2lueiksIHJoICogdGhpcy5jb3NfcDE0ICogY29zeiAtIHAueSAqIHRoaXMuc2luX3AxNCAqIHNpbnopKTtcbiAgcC54ID0gbG9uO1xuICBwLnkgPSBsYXQ7XG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wib3J0aG9cIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsImltcG9ydCBlMGZuIGZyb20gJy4uL2NvbW1vbi9lMGZuJztcbmltcG9ydCBlMWZuIGZyb20gJy4uL2NvbW1vbi9lMWZuJztcbmltcG9ydCBlMmZuIGZyb20gJy4uL2NvbW1vbi9lMmZuJztcbmltcG9ydCBlM2ZuIGZyb20gJy4uL2NvbW1vbi9lM2ZuJztcbmltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcbmltcG9ydCBhZGp1c3RfbGF0IGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbGF0JztcbmltcG9ydCBtbGZuIGZyb20gJy4uL2NvbW1vbi9tbGZuJztcbmltcG9ydCB7RVBTTE59IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5pbXBvcnQgZ04gZnJvbSAnLi4vY29tbW9uL2dOJztcbnZhciBNQVhfSVRFUiA9IDIwO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLyogUGxhY2UgcGFyYW1ldGVycyBpbiBzdGF0aWMgc3RvcmFnZSBmb3IgY29tbW9uIHVzZVxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIHRoaXMudGVtcCA9IHRoaXMuYiAvIHRoaXMuYTtcbiAgdGhpcy5lcyA9IDEgLSBNYXRoLnBvdyh0aGlzLnRlbXAsIDIpOyAvLyBkZXZhaXQgZXRyZSBkYW5zIHRtZXJjLmpzIG1haXMgbiB5IGVzdCBwYXMgZG9uYyBqZSBjb21tZW50ZSBzaW5vbiByZXRvdXIgZGUgdmFsZXVycyBudWxsZXNcbiAgdGhpcy5lID0gTWF0aC5zcXJ0KHRoaXMuZXMpO1xuICB0aGlzLmUwID0gZTBmbih0aGlzLmVzKTtcbiAgdGhpcy5lMSA9IGUxZm4odGhpcy5lcyk7XG4gIHRoaXMuZTIgPSBlMmZuKHRoaXMuZXMpO1xuICB0aGlzLmUzID0gZTNmbih0aGlzLmVzKTtcbiAgdGhpcy5tbDAgPSB0aGlzLmEgKiBtbGZuKHRoaXMuZTAsIHRoaXMuZTEsIHRoaXMuZTIsIHRoaXMuZTMsIHRoaXMubGF0MCk7IC8vc2kgcXVlIGRlcyB6ZXJvcyBsZSBjYWxjdWwgbmUgc2UgZmFpdCBwYXNcbn1cblxuLyogUG9seWNvbmljIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG4gIHZhciB4LCB5LCBlbDtcbiAgdmFyIGRsb24gPSBhZGp1c3RfbG9uKGxvbiAtIHRoaXMubG9uZzApO1xuICBlbCA9IGRsb24gKiBNYXRoLnNpbihsYXQpO1xuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICBpZiAoTWF0aC5hYnMobGF0KSA8PSBFUFNMTikge1xuICAgICAgeCA9IHRoaXMuYSAqIGRsb247XG4gICAgICB5ID0gLTEgKiB0aGlzLmEgKiB0aGlzLmxhdDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgeCA9IHRoaXMuYSAqIE1hdGguc2luKGVsKSAvIE1hdGgudGFuKGxhdCk7XG4gICAgICB5ID0gdGhpcy5hICogKGFkanVzdF9sYXQobGF0IC0gdGhpcy5sYXQwKSArICgxIC0gTWF0aC5jb3MoZWwpKSAvIE1hdGgudGFuKGxhdCkpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoTWF0aC5hYnMobGF0KSA8PSBFUFNMTikge1xuICAgICAgeCA9IHRoaXMuYSAqIGRsb247XG4gICAgICB5ID0gLTEgKiB0aGlzLm1sMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmwgPSBnTih0aGlzLmEsIHRoaXMuZSwgTWF0aC5zaW4obGF0KSkgLyBNYXRoLnRhbihsYXQpO1xuICAgICAgeCA9IG5sICogTWF0aC5zaW4oZWwpO1xuICAgICAgeSA9IHRoaXMuYSAqIG1sZm4odGhpcy5lMCwgdGhpcy5lMSwgdGhpcy5lMiwgdGhpcy5lMywgbGF0KSAtIHRoaXMubWwwICsgbmwgKiAoMSAtIE1hdGguY29zKGVsKSk7XG4gICAgfVxuXG4gIH1cbiAgcC54ID0geCArIHRoaXMueDA7XG4gIHAueSA9IHkgKyB0aGlzLnkwO1xuICByZXR1cm4gcDtcbn1cblxuLyogSW52ZXJzZSBlcXVhdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgbG9uLCBsYXQsIHgsIHksIGk7XG4gIHZhciBhbCwgYmw7XG4gIHZhciBwaGksIGRwaGk7XG4gIHggPSBwLnggLSB0aGlzLngwO1xuICB5ID0gcC55IC0gdGhpcy55MDtcblxuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICBpZiAoTWF0aC5hYnMoeSArIHRoaXMuYSAqIHRoaXMubGF0MCkgPD0gRVBTTE4pIHtcbiAgICAgIGxvbiA9IGFkanVzdF9sb24oeCAvIHRoaXMuYSArIHRoaXMubG9uZzApO1xuICAgICAgbGF0ID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhbCA9IHRoaXMubGF0MCArIHkgLyB0aGlzLmE7XG4gICAgICBibCA9IHggKiB4IC8gdGhpcy5hIC8gdGhpcy5hICsgYWwgKiBhbDtcbiAgICAgIHBoaSA9IGFsO1xuICAgICAgdmFyIHRhbnBoaTtcbiAgICAgIGZvciAoaSA9IE1BWF9JVEVSOyBpOyAtLWkpIHtcbiAgICAgICAgdGFucGhpID0gTWF0aC50YW4ocGhpKTtcbiAgICAgICAgZHBoaSA9IC0xICogKGFsICogKHBoaSAqIHRhbnBoaSArIDEpIC0gcGhpIC0gMC41ICogKHBoaSAqIHBoaSArIGJsKSAqIHRhbnBoaSkgLyAoKHBoaSAtIGFsKSAvIHRhbnBoaSAtIDEpO1xuICAgICAgICBwaGkgKz0gZHBoaTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRwaGkpIDw9IEVQU0xOKSB7XG4gICAgICAgICAgbGF0ID0gcGhpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyAoTWF0aC5hc2luKHggKiBNYXRoLnRhbihwaGkpIC8gdGhpcy5hKSkgLyBNYXRoLnNpbihsYXQpKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKE1hdGguYWJzKHkgKyB0aGlzLm1sMCkgPD0gRVBTTE4pIHtcbiAgICAgIGxhdCA9IDA7XG4gICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyB4IC8gdGhpcy5hKTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICAgIGFsID0gKHRoaXMubWwwICsgeSkgLyB0aGlzLmE7XG4gICAgICBibCA9IHggKiB4IC8gdGhpcy5hIC8gdGhpcy5hICsgYWwgKiBhbDtcbiAgICAgIHBoaSA9IGFsO1xuICAgICAgdmFyIGNsLCBtbG4sIG1sbnAsIG1hO1xuICAgICAgdmFyIGNvbjtcbiAgICAgIGZvciAoaSA9IE1BWF9JVEVSOyBpOyAtLWkpIHtcbiAgICAgICAgY29uID0gdGhpcy5lICogTWF0aC5zaW4ocGhpKTtcbiAgICAgICAgY2wgPSBNYXRoLnNxcnQoMSAtIGNvbiAqIGNvbikgKiBNYXRoLnRhbihwaGkpO1xuICAgICAgICBtbG4gPSB0aGlzLmEgKiBtbGZuKHRoaXMuZTAsIHRoaXMuZTEsIHRoaXMuZTIsIHRoaXMuZTMsIHBoaSk7XG4gICAgICAgIG1sbnAgPSB0aGlzLmUwIC0gMiAqIHRoaXMuZTEgKiBNYXRoLmNvcygyICogcGhpKSArIDQgKiB0aGlzLmUyICogTWF0aC5jb3MoNCAqIHBoaSkgLSA2ICogdGhpcy5lMyAqIE1hdGguY29zKDYgKiBwaGkpO1xuICAgICAgICBtYSA9IG1sbiAvIHRoaXMuYTtcbiAgICAgICAgZHBoaSA9IChhbCAqIChjbCAqIG1hICsgMSkgLSBtYSAtIDAuNSAqIGNsICogKG1hICogbWEgKyBibCkpIC8gKHRoaXMuZXMgKiBNYXRoLnNpbigyICogcGhpKSAqIChtYSAqIG1hICsgYmwgLSAyICogYWwgKiBtYSkgLyAoNCAqIGNsKSArIChhbCAtIG1hKSAqIChjbCAqIG1sbnAgLSAyIC8gTWF0aC5zaW4oMiAqIHBoaSkpIC0gbWxucCk7XG4gICAgICAgIHBoaSAtPSBkcGhpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZHBoaSkgPD0gRVBTTE4pIHtcbiAgICAgICAgICBsYXQgPSBwaGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9sYXQ9cGhpNHoodGhpcy5lLHRoaXMuZTAsdGhpcy5lMSx0aGlzLmUyLHRoaXMuZTMsYWwsYmwsMCwwKTtcbiAgICAgIGNsID0gTWF0aC5zcXJ0KDEgLSB0aGlzLmVzICogTWF0aC5wb3coTWF0aC5zaW4obGF0KSwgMikpICogTWF0aC50YW4obGF0KTtcbiAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIE1hdGguYXNpbih4ICogY2wgLyB0aGlzLmEpIC8gTWF0aC5zaW4obGF0KSk7XG4gICAgfVxuICB9XG5cbiAgcC54ID0gbG9uO1xuICBwLnkgPSBsYXQ7XG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wiUG9seWNvbmljXCIsIFwicG9seVwiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiLy8gUVNDIHByb2plY3Rpb24gcmV3cml0dGVuIGZyb20gdGhlIG9yaWdpbmFsIFBST0o0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vT1NHZW8vcHJvai40L2Jsb2IvbWFzdGVyL3NyYy9QSl9xc2MuY1xuXG5pbXBvcnQge0VQU0xOLCBUV09fUEksIFNQSSwgSEFMRl9QSSwgRk9SVFBJfSBmcm9tICcuLi9jb25zdGFudHMvdmFsdWVzJztcblxuLyogY29uc3RhbnRzICovXG52YXIgRkFDRV9FTlVNID0ge1xuICAgIEZST05UOiAxLFxuICAgIFJJR0hUOiAyLFxuICAgIEJBQ0s6IDMsXG4gICAgTEVGVDogNCxcbiAgICBUT1A6IDUsXG4gICAgQk9UVE9NOiA2XG59O1xuXG52YXIgQVJFQV9FTlVNID0ge1xuICAgIEFSRUFfMDogMSxcbiAgICBBUkVBXzE6IDIsXG4gICAgQVJFQV8yOiAzLFxuICAgIEFSRUFfMzogNFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgdGhpcy54MCA9IHRoaXMueDAgfHwgMDtcbiAgdGhpcy55MCA9IHRoaXMueTAgfHwgMDtcbiAgdGhpcy5sYXQwID0gdGhpcy5sYXQwIHx8IDA7XG4gIHRoaXMubG9uZzAgPSB0aGlzLmxvbmcwIHx8IDA7XG4gIHRoaXMubGF0X3RzID0gdGhpcy5sYXRfdHMgfHwgMDtcbiAgdGhpcy50aXRsZSA9IHRoaXMudGl0bGUgfHwgXCJRdWFkcmlsYXRlcmFsaXplZCBTcGhlcmljYWwgQ3ViZVwiO1xuXG4gIC8qIERldGVybWluZSB0aGUgY3ViZSBmYWNlIGZyb20gdGhlIGNlbnRlciBvZiBwcm9qZWN0aW9uLiAqL1xuICBpZiAodGhpcy5sYXQwID49IEhBTEZfUEkgLSBGT1JUUEkgLyAyLjApIHtcbiAgICB0aGlzLmZhY2UgPSBGQUNFX0VOVU0uVE9QO1xuICB9IGVsc2UgaWYgKHRoaXMubGF0MCA8PSAtKEhBTEZfUEkgLSBGT1JUUEkgLyAyLjApKSB7XG4gICAgdGhpcy5mYWNlID0gRkFDRV9FTlVNLkJPVFRPTTtcbiAgfSBlbHNlIGlmIChNYXRoLmFicyh0aGlzLmxvbmcwKSA8PSBGT1JUUEkpIHtcbiAgICB0aGlzLmZhY2UgPSBGQUNFX0VOVU0uRlJPTlQ7XG4gIH0gZWxzZSBpZiAoTWF0aC5hYnModGhpcy5sb25nMCkgPD0gSEFMRl9QSSArIEZPUlRQSSkge1xuICAgIHRoaXMuZmFjZSA9IHRoaXMubG9uZzAgPiAwLjAgPyBGQUNFX0VOVU0uUklHSFQgOiBGQUNFX0VOVU0uTEVGVDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmZhY2UgPSBGQUNFX0VOVU0uQkFDSztcbiAgfVxuXG4gIC8qIEZpbGwgaW4gdXNlZnVsIHZhbHVlcyBmb3IgdGhlIGVsbGlwc29pZCA8LT4gc3BoZXJlIHNoaWZ0XG4gICAqIGRlc2NyaWJlZCBpbiBbTEsxMl0uICovXG4gIGlmICh0aGlzLmVzICE9PSAwKSB7XG4gICAgdGhpcy5vbmVfbWludXNfZiA9IDEgLSAodGhpcy5hIC0gdGhpcy5iKSAvIHRoaXMuYTtcbiAgICB0aGlzLm9uZV9taW51c19mX3NxdWFyZWQgPSB0aGlzLm9uZV9taW51c19mICogdGhpcy5vbmVfbWludXNfZjtcbiAgfVxufVxuXG4vLyBRU0MgZm9yd2FyZCBlcXVhdGlvbnMtLW1hcHBpbmcgbGF0LGxvbmcgdG8geCx5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgeHkgPSB7eDogMCwgeTogMH07XG4gIHZhciBsYXQsIGxvbjtcbiAgdmFyIHRoZXRhLCBwaGk7XG4gIHZhciB0LCBtdTtcbiAgLyogbnU7ICovXG4gIHZhciBhcmVhID0ge3ZhbHVlOiAwfTtcblxuICAvLyBtb3ZlIGxvbiBhY2NvcmRpbmcgdG8gcHJvamVjdGlvbidzIGxvblxuICBwLnggLT0gdGhpcy5sb25nMDtcblxuICAvKiBDb252ZXJ0IHRoZSBnZW9kZXRpYyBsYXRpdHVkZSB0byBhIGdlb2NlbnRyaWMgbGF0aXR1ZGUuXG4gICAqIFRoaXMgY29ycmVzcG9uZHMgdG8gdGhlIHNoaWZ0IGZyb20gdGhlIGVsbGlwc29pZCB0byB0aGUgc3BoZXJlXG4gICAqIGRlc2NyaWJlZCBpbiBbTEsxMl0uICovXG4gIGlmICh0aGlzLmVzICE9PSAwKSB7Ly9pZiAoUC0+ZXMgIT0gMCkge1xuICAgIGxhdCA9IE1hdGguYXRhbih0aGlzLm9uZV9taW51c19mX3NxdWFyZWQgKiBNYXRoLnRhbihwLnkpKTtcbiAgfSBlbHNlIHtcbiAgICBsYXQgPSBwLnk7XG4gIH1cblxuICAvKiBDb252ZXJ0IHRoZSBpbnB1dCBsYXQsIGxvbiBpbnRvIHRoZXRhLCBwaGkgYXMgdXNlZCBieSBRU0MuXG4gICAqIFRoaXMgZGVwZW5kcyBvbiB0aGUgY3ViZSBmYWNlIGFuZCB0aGUgYXJlYSBvbiBpdC5cbiAgICogRm9yIHRoZSB0b3AgYW5kIGJvdHRvbSBmYWNlLCB3ZSBjYW4gY29tcHV0ZSB0aGV0YSBhbmQgcGhpXG4gICAqIGRpcmVjdGx5IGZyb20gcGhpLCBsYW0uIEZvciB0aGUgb3RoZXIgZmFjZXMsIHdlIG11c3QgdXNlXG4gICAqIHVuaXQgc3BoZXJlIGNhcnRlc2lhbiBjb29yZGluYXRlcyBhcyBhbiBpbnRlcm1lZGlhdGUgc3RlcC4gKi9cbiAgbG9uID0gcC54OyAvL2xvbiA9IGxwLmxhbTtcbiAgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLlRPUCkge1xuICAgIHBoaSA9IEhBTEZfUEkgLSBsYXQ7XG4gICAgaWYgKGxvbiA+PSBGT1JUUEkgJiYgbG9uIDw9IEhBTEZfUEkgKyBGT1JUUEkpIHtcbiAgICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8wO1xuICAgICAgdGhldGEgPSBsb24gLSBIQUxGX1BJO1xuICAgIH0gZWxzZSBpZiAobG9uID4gSEFMRl9QSSArIEZPUlRQSSB8fCBsb24gPD0gLShIQUxGX1BJICsgRk9SVFBJKSkge1xuICAgICAgYXJlYS52YWx1ZSA9IEFSRUFfRU5VTS5BUkVBXzE7XG4gICAgICB0aGV0YSA9IChsb24gPiAwLjAgPyBsb24gLSBTUEkgOiBsb24gKyBTUEkpO1xuICAgIH0gZWxzZSBpZiAobG9uID4gLShIQUxGX1BJICsgRk9SVFBJKSAmJiBsb24gPD0gLUZPUlRQSSkge1xuICAgICAgYXJlYS52YWx1ZSA9IEFSRUFfRU5VTS5BUkVBXzI7XG4gICAgICB0aGV0YSA9IGxvbiArIEhBTEZfUEk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8zO1xuICAgICAgdGhldGEgPSBsb247XG4gICAgfVxuICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLkJPVFRPTSkge1xuICAgIHBoaSA9IEhBTEZfUEkgKyBsYXQ7XG4gICAgaWYgKGxvbiA+PSBGT1JUUEkgJiYgbG9uIDw9IEhBTEZfUEkgKyBGT1JUUEkpIHtcbiAgICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8wO1xuICAgICAgdGhldGEgPSAtbG9uICsgSEFMRl9QSTtcbiAgICB9IGVsc2UgaWYgKGxvbiA8IEZPUlRQSSAmJiBsb24gPj0gLUZPUlRQSSkge1xuICAgICAgYXJlYS52YWx1ZSA9IEFSRUFfRU5VTS5BUkVBXzE7XG4gICAgICB0aGV0YSA9IC1sb247XG4gICAgfSBlbHNlIGlmIChsb24gPCAtRk9SVFBJICYmIGxvbiA+PSAtKEhBTEZfUEkgKyBGT1JUUEkpKSB7XG4gICAgICBhcmVhLnZhbHVlID0gQVJFQV9FTlVNLkFSRUFfMjtcbiAgICAgIHRoZXRhID0gLWxvbiAtIEhBTEZfUEk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8zO1xuICAgICAgdGhldGEgPSAobG9uID4gMC4wID8gLWxvbiArIFNQSSA6IC1sb24gLSBTUEkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgcSwgciwgcztcbiAgICB2YXIgc2lubGF0LCBjb3NsYXQ7XG4gICAgdmFyIHNpbmxvbiwgY29zbG9uO1xuXG4gICAgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLlJJR0hUKSB7XG4gICAgICBsb24gPSBxc2Nfc2hpZnRfbG9uX29yaWdpbihsb24sICtIQUxGX1BJKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLkJBQ0spIHtcbiAgICAgIGxvbiA9IHFzY19zaGlmdF9sb25fb3JpZ2luKGxvbiwgK1NQSSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZhY2UgPT09IEZBQ0VfRU5VTS5MRUZUKSB7XG4gICAgICBsb24gPSBxc2Nfc2hpZnRfbG9uX29yaWdpbihsb24sIC1IQUxGX1BJKTtcbiAgICB9XG4gICAgc2lubGF0ID0gTWF0aC5zaW4obGF0KTtcbiAgICBjb3NsYXQgPSBNYXRoLmNvcyhsYXQpO1xuICAgIHNpbmxvbiA9IE1hdGguc2luKGxvbik7XG4gICAgY29zbG9uID0gTWF0aC5jb3MobG9uKTtcbiAgICBxID0gY29zbGF0ICogY29zbG9uO1xuICAgIHIgPSBjb3NsYXQgKiBzaW5sb247XG4gICAgcyA9IHNpbmxhdDtcblxuICAgIGlmICh0aGlzLmZhY2UgPT09IEZBQ0VfRU5VTS5GUk9OVCkge1xuICAgICAgcGhpID0gTWF0aC5hY29zKHEpO1xuICAgICAgdGhldGEgPSBxc2NfZndkX2VxdWF0X2ZhY2VfdGhldGEocGhpLCBzLCByLCBhcmVhKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLlJJR0hUKSB7XG4gICAgICBwaGkgPSBNYXRoLmFjb3Mocik7XG4gICAgICB0aGV0YSA9IHFzY19md2RfZXF1YXRfZmFjZV90aGV0YShwaGksIHMsIC1xLCBhcmVhKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLkJBQ0spIHtcbiAgICAgIHBoaSA9IE1hdGguYWNvcygtcSk7XG4gICAgICB0aGV0YSA9IHFzY19md2RfZXF1YXRfZmFjZV90aGV0YShwaGksIHMsIC1yLCBhcmVhKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLkxFRlQpIHtcbiAgICAgIHBoaSA9IE1hdGguYWNvcygtcik7XG4gICAgICB0aGV0YSA9IHFzY19md2RfZXF1YXRfZmFjZV90aGV0YShwaGksIHMsIHEsIGFyZWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBJbXBvc3NpYmxlICovXG4gICAgICBwaGkgPSB0aGV0YSA9IDA7XG4gICAgICBhcmVhLnZhbHVlID0gQVJFQV9FTlVNLkFSRUFfMDtcbiAgICB9XG4gIH1cblxuICAvKiBDb21wdXRlIG11IGFuZCBudSBmb3IgdGhlIGFyZWEgb2YgZGVmaW5pdGlvbi5cbiAgICogRm9yIG11LCBzZWUgRXEuICgzLTIxKSBpbiBbT0w3Nl0sIGJ1dCBub3RlIHRoZSB0eXBvczpcbiAgICogY29tcGFyZSB3aXRoIEVxLiAoMy0xNCkuIEZvciBudSwgc2VlIEVxLiAoMy0zOCkuICovXG4gIG11ID0gTWF0aC5hdGFuKCgxMiAvIFNQSSkgKiAodGhldGEgKyBNYXRoLmFjb3MoTWF0aC5zaW4odGhldGEpICogTWF0aC5jb3MoRk9SVFBJKSkgLSBIQUxGX1BJKSk7XG4gIHQgPSBNYXRoLnNxcnQoKDEgLSBNYXRoLmNvcyhwaGkpKSAvIChNYXRoLmNvcyhtdSkgKiBNYXRoLmNvcyhtdSkpIC8gKDEgLSBNYXRoLmNvcyhNYXRoLmF0YW4oMSAvIE1hdGguY29zKHRoZXRhKSkpKSk7XG5cbiAgLyogQXBwbHkgdGhlIHJlc3VsdCB0byB0aGUgcmVhbCBhcmVhLiAqL1xuICBpZiAoYXJlYS52YWx1ZSA9PT0gQVJFQV9FTlVNLkFSRUFfMSkge1xuICAgIG11ICs9IEhBTEZfUEk7XG4gIH0gZWxzZSBpZiAoYXJlYS52YWx1ZSA9PT0gQVJFQV9FTlVNLkFSRUFfMikge1xuICAgIG11ICs9IFNQSTtcbiAgfSBlbHNlIGlmIChhcmVhLnZhbHVlID09PSBBUkVBX0VOVU0uQVJFQV8zKSB7XG4gICAgbXUgKz0gMS41ICogU1BJO1xuICB9XG5cbiAgLyogTm93IGNvbXB1dGUgeCwgeSBmcm9tIG11IGFuZCBudSAqL1xuICB4eS54ID0gdCAqIE1hdGguY29zKG11KTtcbiAgeHkueSA9IHQgKiBNYXRoLnNpbihtdSk7XG4gIHh5LnggPSB4eS54ICogdGhpcy5hICsgdGhpcy54MDtcbiAgeHkueSA9IHh5LnkgKiB0aGlzLmEgKyB0aGlzLnkwO1xuXG4gIHAueCA9IHh5Lng7XG4gIHAueSA9IHh5Lnk7XG4gIHJldHVybiBwO1xufVxuXG4vLyBRU0MgaW52ZXJzZSBlcXVhdGlvbnMtLW1hcHBpbmcgeCx5IHRvIGxhdC9sb25nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICB2YXIgbHAgPSB7bGFtOiAwLCBwaGk6IDB9O1xuICB2YXIgbXUsIG51LCBjb3NtdSwgdGFubnU7XG4gIHZhciB0YW50aGV0YSwgdGhldGEsIGNvc3BoaSwgcGhpO1xuICB2YXIgdDtcbiAgdmFyIGFyZWEgPSB7dmFsdWU6IDB9O1xuXG4gIC8qIGRlLW9mZnNldCAqL1xuICBwLnggPSAocC54IC0gdGhpcy54MCkgLyB0aGlzLmE7XG4gIHAueSA9IChwLnkgLSB0aGlzLnkwKSAvIHRoaXMuYTtcblxuICAvKiBDb252ZXJ0IHRoZSBpbnB1dCB4LCB5IHRvIHRoZSBtdSBhbmQgbnUgYW5nbGVzIGFzIHVzZWQgYnkgUVNDLlxuICAgKiBUaGlzIGRlcGVuZHMgb24gdGhlIGFyZWEgb2YgdGhlIGN1YmUgZmFjZS4gKi9cbiAgbnUgPSBNYXRoLmF0YW4oTWF0aC5zcXJ0KHAueCAqIHAueCArIHAueSAqIHAueSkpO1xuICBtdSA9IE1hdGguYXRhbjIocC55LCBwLngpO1xuICBpZiAocC54ID49IDAuMCAmJiBwLnggPj0gTWF0aC5hYnMocC55KSkge1xuICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8wO1xuICB9IGVsc2UgaWYgKHAueSA+PSAwLjAgJiYgcC55ID49IE1hdGguYWJzKHAueCkpIHtcbiAgICBhcmVhLnZhbHVlID0gQVJFQV9FTlVNLkFSRUFfMTtcbiAgICBtdSAtPSBIQUxGX1BJO1xuICB9IGVsc2UgaWYgKHAueCA8IDAuMCAmJiAtcC54ID49IE1hdGguYWJzKHAueSkpIHtcbiAgICBhcmVhLnZhbHVlID0gQVJFQV9FTlVNLkFSRUFfMjtcbiAgICBtdSA9IChtdSA8IDAuMCA/IG11ICsgU1BJIDogbXUgLSBTUEkpO1xuICB9IGVsc2Uge1xuICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8zO1xuICAgIG11ICs9IEhBTEZfUEk7XG4gIH1cblxuICAvKiBDb21wdXRlIHBoaSBhbmQgdGhldGEgZm9yIHRoZSBhcmVhIG9mIGRlZmluaXRpb24uXG4gICAqIFRoZSBpbnZlcnNlIHByb2plY3Rpb24gaXMgbm90IGRlc2NyaWJlZCBpbiB0aGUgb3JpZ2luYWwgcGFwZXIsIGJ1dCBzb21lXG4gICAqIGdvb2QgaGludHMgY2FuIGJlIGZvdW5kIGhlcmUgKGFzIG9mIDIwMTEtMTItMTQpOlxuICAgKiBodHRwOi8vZml0cy5nc2ZjLm5hc2EuZ292L2ZpdHNiaXRzL3NhZi45My9zYWYuOTMwMlxuICAgKiAoc2VhcmNoIGZvciBcIk1lc3NhZ2UtSWQ6IDw5MzAyMTgxNzU5LkFBMjU0NzcgYXQgZml0cy5jdi5ucmFvLmVkdT5cIikgKi9cbiAgdCA9IChTUEkgLyAxMikgKiBNYXRoLnRhbihtdSk7XG4gIHRhbnRoZXRhID0gTWF0aC5zaW4odCkgLyAoTWF0aC5jb3ModCkgLSAoMSAvIE1hdGguc3FydCgyKSkpO1xuICB0aGV0YSA9IE1hdGguYXRhbih0YW50aGV0YSk7XG4gIGNvc211ID0gTWF0aC5jb3MobXUpO1xuICB0YW5udSA9IE1hdGgudGFuKG51KTtcbiAgY29zcGhpID0gMSAtIGNvc211ICogY29zbXUgKiB0YW5udSAqIHRhbm51ICogKDEgLSBNYXRoLmNvcyhNYXRoLmF0YW4oMSAvIE1hdGguY29zKHRoZXRhKSkpKTtcbiAgaWYgKGNvc3BoaSA8IC0xKSB7XG4gICAgY29zcGhpID0gLTE7XG4gIH0gZWxzZSBpZiAoY29zcGhpID4gKzEpIHtcbiAgICBjb3NwaGkgPSArMTtcbiAgfVxuXG4gIC8qIEFwcGx5IHRoZSByZXN1bHQgdG8gdGhlIHJlYWwgYXJlYSBvbiB0aGUgY3ViZSBmYWNlLlxuICAgKiBGb3IgdGhlIHRvcCBhbmQgYm90dG9tIGZhY2UsIHdlIGNhbiBjb21wdXRlIHBoaSBhbmQgbGFtIGRpcmVjdGx5LlxuICAgKiBGb3IgdGhlIG90aGVyIGZhY2VzLCB3ZSBtdXN0IHVzZSB1bml0IHNwaGVyZSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZXNcbiAgICogYXMgYW4gaW50ZXJtZWRpYXRlIHN0ZXAuICovXG4gIGlmICh0aGlzLmZhY2UgPT09IEZBQ0VfRU5VTS5UT1ApIHtcbiAgICBwaGkgPSBNYXRoLmFjb3MoY29zcGhpKTtcbiAgICBscC5waGkgPSBIQUxGX1BJIC0gcGhpO1xuICAgIGlmIChhcmVhLnZhbHVlID09PSBBUkVBX0VOVU0uQVJFQV8wKSB7XG4gICAgICBscC5sYW0gPSB0aGV0YSArIEhBTEZfUEk7XG4gICAgfSBlbHNlIGlmIChhcmVhLnZhbHVlID09PSBBUkVBX0VOVU0uQVJFQV8xKSB7XG4gICAgICBscC5sYW0gPSAodGhldGEgPCAwLjAgPyB0aGV0YSArIFNQSSA6IHRoZXRhIC0gU1BJKTtcbiAgICB9IGVsc2UgaWYgKGFyZWEudmFsdWUgPT09IEFSRUFfRU5VTS5BUkVBXzIpIHtcbiAgICAgIGxwLmxhbSA9IHRoZXRhIC0gSEFMRl9QSTtcbiAgICB9IGVsc2UgLyogYXJlYS52YWx1ZSA9PSBBUkVBX0VOVU0uQVJFQV8zICovIHtcbiAgICAgIGxwLmxhbSA9IHRoZXRhO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLmZhY2UgPT09IEZBQ0VfRU5VTS5CT1RUT00pIHtcbiAgICBwaGkgPSBNYXRoLmFjb3MoY29zcGhpKTtcbiAgICBscC5waGkgPSBwaGkgLSBIQUxGX1BJO1xuICAgIGlmIChhcmVhLnZhbHVlID09PSBBUkVBX0VOVU0uQVJFQV8wKSB7XG4gICAgICBscC5sYW0gPSAtdGhldGEgKyBIQUxGX1BJO1xuICAgIH0gZWxzZSBpZiAoYXJlYS52YWx1ZSA9PT0gQVJFQV9FTlVNLkFSRUFfMSkge1xuICAgICAgbHAubGFtID0gLXRoZXRhO1xuICAgIH0gZWxzZSBpZiAoYXJlYS52YWx1ZSA9PT0gQVJFQV9FTlVNLkFSRUFfMikge1xuICAgICAgbHAubGFtID0gLXRoZXRhIC0gSEFMRl9QSTtcbiAgICB9IGVsc2UgLyogYXJlYS52YWx1ZSA9PSBBUkVBX0VOVU0uQVJFQV8zICovIHtcbiAgICAgIGxwLmxhbSA9ICh0aGV0YSA8IDAuMCA/IC10aGV0YSAtIFNQSSA6IC10aGV0YSArIFNQSSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8qIENvbXB1dGUgcGhpIGFuZCBsYW0gdmlhIGNhcnRlc2lhbiB1bml0IHNwaGVyZSBjb29yZGluYXRlcy4gKi9cbiAgICB2YXIgcSwgciwgcztcbiAgICBxID0gY29zcGhpO1xuICAgIHQgPSBxICogcTtcbiAgICBpZiAodCA+PSAxKSB7XG4gICAgICBzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcyA9IE1hdGguc3FydCgxIC0gdCkgKiBNYXRoLnNpbih0aGV0YSk7XG4gICAgfVxuICAgIHQgKz0gcyAqIHM7XG4gICAgaWYgKHQgPj0gMSkge1xuICAgICAgciA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBNYXRoLnNxcnQoMSAtIHQpO1xuICAgIH1cbiAgICAvKiBSb3RhdGUgcSxyLHMgaW50byB0aGUgY29ycmVjdCBhcmVhLiAqL1xuICAgIGlmIChhcmVhLnZhbHVlID09PSBBUkVBX0VOVU0uQVJFQV8xKSB7XG4gICAgICB0ID0gcjtcbiAgICAgIHIgPSAtcztcbiAgICAgIHMgPSB0O1xuICAgIH0gZWxzZSBpZiAoYXJlYS52YWx1ZSA9PT0gQVJFQV9FTlVNLkFSRUFfMikge1xuICAgICAgciA9IC1yO1xuICAgICAgcyA9IC1zO1xuICAgIH0gZWxzZSBpZiAoYXJlYS52YWx1ZSA9PT0gQVJFQV9FTlVNLkFSRUFfMykge1xuICAgICAgdCA9IHI7XG4gICAgICByID0gcztcbiAgICAgIHMgPSAtdDtcbiAgICB9XG4gICAgLyogUm90YXRlIHEscixzIGludG8gdGhlIGNvcnJlY3QgY3ViZSBmYWNlLiAqL1xuICAgIGlmICh0aGlzLmZhY2UgPT09IEZBQ0VfRU5VTS5SSUdIVCkge1xuICAgICAgdCA9IHE7XG4gICAgICBxID0gLXI7XG4gICAgICByID0gdDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLkJBQ0spIHtcbiAgICAgIHEgPSAtcTtcbiAgICAgIHIgPSAtcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLkxFRlQpIHtcbiAgICAgIHQgPSBxO1xuICAgICAgcSA9IHI7XG4gICAgICByID0gLXQ7XG4gICAgfVxuICAgIC8qIE5vdyBjb21wdXRlIHBoaSBhbmQgbGFtIGZyb20gdGhlIHVuaXQgc3BoZXJlIGNvb3JkaW5hdGVzLiAqL1xuICAgIGxwLnBoaSA9IE1hdGguYWNvcygtcykgLSBIQUxGX1BJO1xuICAgIGxwLmxhbSA9IE1hdGguYXRhbjIociwgcSk7XG4gICAgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLlJJR0hUKSB7XG4gICAgICBscC5sYW0gPSBxc2Nfc2hpZnRfbG9uX29yaWdpbihscC5sYW0sIC1IQUxGX1BJKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFjZSA9PT0gRkFDRV9FTlVNLkJBQ0spIHtcbiAgICAgIGxwLmxhbSA9IHFzY19zaGlmdF9sb25fb3JpZ2luKGxwLmxhbSwgLVNQSSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZhY2UgPT09IEZBQ0VfRU5VTS5MRUZUKSB7XG4gICAgICBscC5sYW0gPSBxc2Nfc2hpZnRfbG9uX29yaWdpbihscC5sYW0sICtIQUxGX1BJKTtcbiAgICB9XG4gIH1cblxuICAvKiBBcHBseSB0aGUgc2hpZnQgZnJvbSB0aGUgc3BoZXJlIHRvIHRoZSBlbGxpcHNvaWQgYXMgZGVzY3JpYmVkXG4gICAqIGluIFtMSzEyXS4gKi9cbiAgaWYgKHRoaXMuZXMgIT09IDApIHtcbiAgICB2YXIgaW52ZXJ0X3NpZ247XG4gICAgdmFyIHRhbnBoaSwgeGE7XG4gICAgaW52ZXJ0X3NpZ24gPSAobHAucGhpIDwgMCA/IDEgOiAwKTtcbiAgICB0YW5waGkgPSBNYXRoLnRhbihscC5waGkpO1xuICAgIHhhID0gdGhpcy5iIC8gTWF0aC5zcXJ0KHRhbnBoaSAqIHRhbnBoaSArIHRoaXMub25lX21pbnVzX2Zfc3F1YXJlZCk7XG4gICAgbHAucGhpID0gTWF0aC5hdGFuKE1hdGguc3FydCh0aGlzLmEgKiB0aGlzLmEgLSB4YSAqIHhhKSAvICh0aGlzLm9uZV9taW51c19mICogeGEpKTtcbiAgICBpZiAoaW52ZXJ0X3NpZ24pIHtcbiAgICAgIGxwLnBoaSA9IC1scC5waGk7XG4gICAgfVxuICB9XG5cbiAgbHAubGFtICs9IHRoaXMubG9uZzA7XG4gIHAueCA9IGxwLmxhbTtcbiAgcC55ID0gbHAucGhpO1xuICByZXR1cm4gcDtcbn1cblxuLyogSGVscGVyIGZ1bmN0aW9uIGZvciBmb3J3YXJkIHByb2plY3Rpb246IGNvbXB1dGUgdGhlIHRoZXRhIGFuZ2xlXG4gKiBhbmQgZGV0ZXJtaW5lIHRoZSBhcmVhIG51bWJlci4gKi9cbmZ1bmN0aW9uIHFzY19md2RfZXF1YXRfZmFjZV90aGV0YShwaGksIHksIHgsIGFyZWEpIHtcbiAgdmFyIHRoZXRhO1xuICBpZiAocGhpIDwgRVBTTE4pIHtcbiAgICBhcmVhLnZhbHVlID0gQVJFQV9FTlVNLkFSRUFfMDtcbiAgICB0aGV0YSA9IDAuMDtcbiAgfSBlbHNlIHtcbiAgICB0aGV0YSA9IE1hdGguYXRhbjIoeSwgeCk7XG4gICAgaWYgKE1hdGguYWJzKHRoZXRhKSA8PSBGT1JUUEkpIHtcbiAgICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8wO1xuICAgIH0gZWxzZSBpZiAodGhldGEgPiBGT1JUUEkgJiYgdGhldGEgPD0gSEFMRl9QSSArIEZPUlRQSSkge1xuICAgICAgYXJlYS52YWx1ZSA9IEFSRUFfRU5VTS5BUkVBXzE7XG4gICAgICB0aGV0YSAtPSBIQUxGX1BJO1xuICAgIH0gZWxzZSBpZiAodGhldGEgPiBIQUxGX1BJICsgRk9SVFBJIHx8IHRoZXRhIDw9IC0oSEFMRl9QSSArIEZPUlRQSSkpIHtcbiAgICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8yO1xuICAgICAgdGhldGEgPSAodGhldGEgPj0gMC4wID8gdGhldGEgLSBTUEkgOiB0aGV0YSArIFNQSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZWEudmFsdWUgPSBBUkVBX0VOVU0uQVJFQV8zO1xuICAgICAgdGhldGEgKz0gSEFMRl9QSTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoZXRhO1xufVxuXG4vKiBIZWxwZXIgZnVuY3Rpb246IHNoaWZ0IHRoZSBsb25naXR1ZGUuICovXG5mdW5jdGlvbiBxc2Nfc2hpZnRfbG9uX29yaWdpbihsb24sIG9mZnNldCkge1xuICB2YXIgc2xvbiA9IGxvbiArIG9mZnNldDtcbiAgaWYgKHNsb24gPCAtU1BJKSB7XG4gICAgc2xvbiArPSBUV09fUEk7XG4gIH0gZWxzZSBpZiAoc2xvbiA+ICtTUEkpIHtcbiAgICBzbG9uIC09IFRXT19QSTtcbiAgfVxuICByZXR1cm4gc2xvbjtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIlF1YWRyaWxhdGVyYWxpemVkIFNwaGVyaWNhbCBDdWJlXCIsIFwiUXVhZHJpbGF0ZXJhbGl6ZWRfU3BoZXJpY2FsX0N1YmVcIiwgXCJxc2NcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcblxuIiwiLy8gUm9iaW5zb24gcHJvamVjdGlvblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL09TR2VvL3Byb2ouNC9ibG9iL21hc3Rlci9zcmMvUEpfcm9iaW4uY1xuLy8gUG9seW5vbWlhbCBjb2VmaWNpZW50cyBmcm9tIGh0dHA6Ly9hcnRpY2xlLmdtYW5lLm9yZy9nbWFuZS5jb21wLmdpcy5wcm9qLTQuZGV2ZWwvNjAzOVxuXG5pbXBvcnQge0hBTEZfUEksIEQyUiwgUjJELCBFUFNMTn0gZnJvbSAnLi4vY29uc3RhbnRzL3ZhbHVlcyc7XG5pbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5cbnZhciBDT0VGU19YID0gW1xuICAgIFsxLjAwMDAsIDIuMjE5OWUtMTcsIC03LjE1NTE1ZS0wNSwgMy4xMTAzZS0wNl0sXG4gICAgWzAuOTk4NiwgLTAuMDAwNDgyMjQzLCAtMi40ODk3ZS0wNSwgLTEuMzMwOWUtMDZdLFxuICAgIFswLjk5NTQsIC0wLjAwMDgzMTAzLCAtNC40ODYwNWUtMDUsIC05Ljg2NzAxZS0wN10sXG4gICAgWzAuOTkwMCwgLTAuMDAxMzUzNjQsIC01Ljk2NjFlLTA1LCAzLjY3NzdlLTA2XSxcbiAgICBbMC45ODIyLCAtMC4wMDE2NzQ0MiwgLTQuNDk1NDdlLTA2LCAtNS43MjQxMWUtMDZdLFxuICAgIFswLjk3MzAsIC0wLjAwMjE0ODY4LCAtOS4wMzU3MWUtMDUsIDEuODczNmUtMDhdLFxuICAgIFswLjk2MDAsIC0wLjAwMzA1MDg1LCAtOS4wMDc2MWUtMDUsIDEuNjQ5MTdlLTA2XSxcbiAgICBbMC45NDI3LCAtMC4wMDM4Mjc5MiwgLTYuNTMzODZlLTA1LCAtMi42MTU0ZS0wNl0sXG4gICAgWzAuOTIxNiwgLTAuMDA0Njc3NDYsIC0wLjAwMDEwNDU3LCA0LjgxMjQzZS0wNl0sXG4gICAgWzAuODk2MiwgLTAuMDA1MzYyMjMsIC0zLjIzODMxZS0wNSwgLTUuNDM0MzJlLTA2XSxcbiAgICBbMC44Njc5LCAtMC4wMDYwOTM2MywgLTAuMDAwMTEzODk4LCAzLjMyNDg0ZS0wNl0sXG4gICAgWzAuODM1MCwgLTAuMDA2OTgzMjUsIC02LjQwMjUzZS0wNSwgOS4zNDk1OWUtMDddLFxuICAgIFswLjc5ODYsIC0wLjAwNzU1MzM4LCAtNS4wMDAwOWUtMDUsIDkuMzUzMjRlLTA3XSxcbiAgICBbMC43NTk3LCAtMC4wMDc5ODMyNCwgLTMuNTk3MWUtMDUsIC0yLjI3NjI2ZS0wNl0sXG4gICAgWzAuNzE4NiwgLTAuMDA4NTEzNjcsIC03LjAxMTQ5ZS0wNSwgLTguNjMwM2UtMDZdLFxuICAgIFswLjY3MzIsIC0wLjAwOTg2MjA5LCAtMC4wMDAxOTk1NjksIDEuOTE5NzRlLTA1XSxcbiAgICBbMC42MjEzLCAtMC4wMTA0MTgsIDguODM5MjNlLTA1LCA2LjI0MDUxZS0wNl0sXG4gICAgWzAuNTcyMiwgLTAuMDA5MDY2MDEsIDAuMDAwMTgyLCA2LjI0MDUxZS0wNl0sXG4gICAgWzAuNTMyMiwgLTAuMDA2Nzc3OTcsIDAuMDAwMjc1NjA4LCA2LjI0MDUxZS0wNl1cbl07XG5cbnZhciBDT0VGU19ZID0gW1xuICAgIFstNS4yMDQxN2UtMTgsIDAuMDEyNCwgMS4yMTQzMWUtMTgsIC04LjQ1Mjg0ZS0xMV0sXG4gICAgWzAuMDYyMCwgMC4wMTI0LCAtMS4yNjc5M2UtMDksIDQuMjI2NDJlLTEwXSxcbiAgICBbMC4xMjQwLCAwLjAxMjQsIDUuMDcxNzFlLTA5LCAtMS42MDYwNGUtMDldLFxuICAgIFswLjE4NjAsIDAuMDEyMzk5OSwgLTEuOTAxODllLTA4LCA2LjAwMTUyZS0wOV0sXG4gICAgWzAuMjQ4MCwgMC4wMTI0MDAyLCA3LjEwMDM5ZS0wOCwgLTIuMjRlLTA4XSxcbiAgICBbMC4zMTAwLCAwLjAxMjM5OTIsIC0yLjY0OTk3ZS0wNywgOC4zNTk4NmUtMDhdLFxuICAgIFswLjM3MjAsIDAuMDEyNDAyOSwgOS44ODk4M2UtMDcsIC0zLjExOTk0ZS0wN10sXG4gICAgWzAuNDM0MCwgMC4wMTIzODkzLCAtMy42OTA5M2UtMDYsIC00LjM1NjIxZS0wN10sXG4gICAgWzAuNDk1OCwgMC4wMTIzMTk4LCAtMS4wMjI1MmUtMDUsIC0zLjQ1NTIzZS0wN10sXG4gICAgWzAuNTU3MSwgMC4wMTIxOTE2LCAtMS41NDA4MWUtMDUsIC01LjgyMjg4ZS0wN10sXG4gICAgWzAuNjE3NiwgMC4wMTE5OTM4LCAtMi40MTQyNGUtMDUsIC01LjI1MzI3ZS0wN10sXG4gICAgWzAuNjc2OSwgMC4wMTE3MTMsIC0zLjIwMjIzZS0wNSwgLTUuMTY0MDVlLTA3XSxcbiAgICBbMC43MzQ2LCAwLjAxMTM1NDEsIC0zLjk3Njg0ZS0wNSwgLTYuMDkwNTJlLTA3XSxcbiAgICBbMC43OTAzLCAwLjAxMDkxMDcsIC00Ljg5MDQyZS0wNSwgLTEuMDQ3MzllLTA2XSxcbiAgICBbMC44NDM1LCAwLjAxMDM0MzEsIC02LjQ2MTVlLTA1LCAtMS40MDM3NGUtMDldLFxuICAgIFswLjg5MzYsIDAuMDA5Njk2ODYsIC02LjQ2MzZlLTA1LCAtOC41NDdlLTA2XSxcbiAgICBbMC45Mzk0LCAwLjAwODQwOTQ3LCAtMC4wMDAxOTI4NDEsIC00LjIxMDZlLTA2XSxcbiAgICBbMC45NzYxLCAwLjAwNjE2NTI3LCAtMC4wMDAyNTYsIC00LjIxMDZlLTA2XSxcbiAgICBbMS4wMDAwLCAwLjAwMzI4OTQ3LCAtMC4wMDAzMTkxNTksIC00LjIxMDZlLTA2XVxuXTtcblxudmFyIEZYQyA9IDAuODQ4NztcbnZhciBGWUMgPSAxLjM1MjM7XG52YXIgQzEgPSBSMkQvNTsgLy8gcmFkIHRvIDUtZGVncmVlIGludGVydmFsXG52YXIgUkMxID0gMS9DMTtcbnZhciBOT0RFUyA9IDE4O1xuXG52YXIgcG9seTNfdmFsID0gZnVuY3Rpb24oY29lZnMsIHgpIHtcbiAgICByZXR1cm4gY29lZnNbMF0gKyB4ICogKGNvZWZzWzFdICsgeCAqIChjb2Vmc1syXSArIHggKiBjb2Vmc1szXSkpO1xufTtcblxudmFyIHBvbHkzX2RlciA9IGZ1bmN0aW9uKGNvZWZzLCB4KSB7XG4gICAgcmV0dXJuIGNvZWZzWzFdICsgeCAqICgyICogY29lZnNbMl0gKyB4ICogMyAqIGNvZWZzWzNdKTtcbn07XG5cbmZ1bmN0aW9uIG5ld3Rvbl9yYXBzaG9uKGZfZGYsIHN0YXJ0LCBtYXhfZXJyLCBpdGVycykge1xuICAgIHZhciB4ID0gc3RhcnQ7XG4gICAgZm9yICg7IGl0ZXJzOyAtLWl0ZXJzKSB7XG4gICAgICAgIHZhciB1cGQgPSBmX2RmKHgpO1xuICAgICAgICB4IC09IHVwZDtcbiAgICAgICAgaWYgKE1hdGguYWJzKHVwZCkgPCBtYXhfZXJyKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy54MCA9IHRoaXMueDAgfHwgMDtcbiAgICB0aGlzLnkwID0gdGhpcy55MCB8fCAwO1xuICAgIHRoaXMubG9uZzAgPSB0aGlzLmxvbmcwIHx8IDA7XG4gICAgdGhpcy5lcyA9IDA7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMudGl0bGUgfHwgXCJSb2JpbnNvblwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChsbCkge1xuICAgIHZhciBsb24gPSBhZGp1c3RfbG9uKGxsLnggLSB0aGlzLmxvbmcwKTtcblxuICAgIHZhciBkcGhpID0gTWF0aC5hYnMobGwueSk7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKGRwaGkgKiBDMSk7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgPSAwO1xuICAgIH0gZWxzZSBpZiAoaSA+PSBOT0RFUykge1xuICAgICAgICBpID0gTk9ERVMgLSAxO1xuICAgIH1cbiAgICBkcGhpID0gUjJEICogKGRwaGkgLSBSQzEgKiBpKTtcbiAgICB2YXIgeHkgPSB7XG4gICAgICAgIHg6IHBvbHkzX3ZhbChDT0VGU19YW2ldLCBkcGhpKSAqIGxvbixcbiAgICAgICAgeTogcG9seTNfdmFsKENPRUZTX1lbaV0sIGRwaGkpXG4gICAgfTtcbiAgICBpZiAobGwueSA8IDApIHtcbiAgICAgICAgeHkueSA9IC14eS55O1xuICAgIH1cblxuICAgIHh5LnggPSB4eS54ICogdGhpcy5hICogRlhDICsgdGhpcy54MDtcbiAgICB4eS55ID0geHkueSAqIHRoaXMuYSAqIEZZQyArIHRoaXMueTA7XG4gICAgcmV0dXJuIHh5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZSh4eSkge1xuICAgIHZhciBsbCA9IHtcbiAgICAgICAgeDogKHh5LnggLSB0aGlzLngwKSAvICh0aGlzLmEgKiBGWEMpLFxuICAgICAgICB5OiBNYXRoLmFicyh4eS55IC0gdGhpcy55MCkgLyAodGhpcy5hICogRllDKVxuICAgIH07XG5cbiAgICBpZiAobGwueSA+PSAxKSB7IC8vIHBhdGhvbG9naWMgY2FzZVxuICAgICAgICBsbC54IC89IENPRUZTX1hbTk9ERVNdWzBdO1xuICAgICAgICBsbC55ID0geHkueSA8IDAgPyAtSEFMRl9QSSA6IEhBTEZfUEk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZmluZCB0YWJsZSBpbnRlcnZhbFxuICAgICAgICB2YXIgaSA9IE1hdGguZmxvb3IobGwueSAqIE5PREVTKTtcbiAgICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChpID49IE5PREVTKSB7XG4gICAgICAgICAgICBpID0gTk9ERVMgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGlmIChDT0VGU19ZW2ldWzBdID4gbGwueSkge1xuICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQ09FRlNfWVtpKzFdWzBdIDw9IGxsLnkpIHtcbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uIGluIDUgZGVncmVlIGludGVydmFsXG4gICAgICAgIHZhciBjb2VmcyA9IENPRUZTX1lbaV07XG4gICAgICAgIHZhciB0ID0gNSAqIChsbC55IC0gY29lZnNbMF0pIC8gKENPRUZTX1lbaSsxXVswXSAtIGNvZWZzWzBdKTtcbiAgICAgICAgLy8gZmluZCB0IHNvIHRoYXQgcG9seTNfdmFsKGNvZWZzLCB0KSA9IGxsLnlcbiAgICAgICAgdCA9IG5ld3Rvbl9yYXBzaG9uKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgICAgIHJldHVybiAocG9seTNfdmFsKGNvZWZzLCB4KSAtIGxsLnkpIC8gcG9seTNfZGVyKGNvZWZzLCB4KTtcbiAgICAgICAgfSwgdCwgRVBTTE4sIDEwMCk7XG5cbiAgICAgICAgbGwueCAvPSBwb2x5M192YWwoQ09FRlNfWFtpXSwgdCk7XG4gICAgICAgIGxsLnkgPSAoNSAqIGkgKyB0KSAqIEQyUjtcbiAgICAgICAgaWYgKHh5LnkgPCAwKSB7XG4gICAgICAgICAgICBsbC55ID0gLWxsLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsbC54ID0gYWRqdXN0X2xvbihsbC54ICsgdGhpcy5sb25nMCk7XG4gICAgcmV0dXJuIGxsO1xufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wiUm9iaW5zb25cIiwgXCJyb2JpblwiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiaW1wb3J0IGFkanVzdF9sb24gZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sb24nO1xuaW1wb3J0IGFkanVzdF9sYXQgZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sYXQnO1xuaW1wb3J0IHBqX2VuZm4gZnJvbSAnLi4vY29tbW9uL3BqX2VuZm4nO1xudmFyIE1BWF9JVEVSID0gMjA7XG5pbXBvcnQgcGpfbWxmbiBmcm9tICcuLi9jb21tb24vcGpfbWxmbic7XG5pbXBvcnQgcGpfaW52X21sZm4gZnJvbSAnLi4vY29tbW9uL3BqX2ludl9tbGZuJztcbmltcG9ydCB7RVBTTE4sIEhBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5pbXBvcnQgYXNpbnogZnJvbSAnLi4vY29tbW9uL2FzaW56JztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLyogUGxhY2UgcGFyYW1ldGVycyBpbiBzdGF0aWMgc3RvcmFnZSBmb3IgY29tbW9uIHVzZVxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgaWYgKCF0aGlzLnNwaGVyZSkge1xuICAgIHRoaXMuZW4gPSBwal9lbmZuKHRoaXMuZXMpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMubiA9IDE7XG4gICAgdGhpcy5tID0gMDtcbiAgICB0aGlzLmVzID0gMDtcbiAgICB0aGlzLkNfeSA9IE1hdGguc3FydCgodGhpcy5tICsgMSkgLyB0aGlzLm4pO1xuICAgIHRoaXMuQ194ID0gdGhpcy5DX3kgLyAodGhpcy5tICsgMSk7XG4gIH1cblxufVxuXG4vKiBTaW51c29pZGFsIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZChwKSB7XG4gIHZhciB4LCB5O1xuICB2YXIgbG9uID0gcC54O1xuICB2YXIgbGF0ID0gcC55O1xuICAvKiBGb3J3YXJkIGVxdWF0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgbG9uID0gYWRqdXN0X2xvbihsb24gLSB0aGlzLmxvbmcwKTtcblxuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICBpZiAoIXRoaXMubSkge1xuICAgICAgbGF0ID0gdGhpcy5uICE9PSAxID8gTWF0aC5hc2luKHRoaXMubiAqIE1hdGguc2luKGxhdCkpIDogbGF0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBrID0gdGhpcy5uICogTWF0aC5zaW4obGF0KTtcbiAgICAgIGZvciAodmFyIGkgPSBNQVhfSVRFUjsgaTsgLS1pKSB7XG4gICAgICAgIHZhciBWID0gKHRoaXMubSAqIGxhdCArIE1hdGguc2luKGxhdCkgLSBrKSAvICh0aGlzLm0gKyBNYXRoLmNvcyhsYXQpKTtcbiAgICAgICAgbGF0IC09IFY7XG4gICAgICAgIGlmIChNYXRoLmFicyhWKSA8IEVQU0xOKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeCA9IHRoaXMuYSAqIHRoaXMuQ194ICogbG9uICogKHRoaXMubSArIE1hdGguY29zKGxhdCkpO1xuICAgIHkgPSB0aGlzLmEgKiB0aGlzLkNfeSAqIGxhdDtcblxuICB9XG4gIGVsc2Uge1xuXG4gICAgdmFyIHMgPSBNYXRoLnNpbihsYXQpO1xuICAgIHZhciBjID0gTWF0aC5jb3MobGF0KTtcbiAgICB5ID0gdGhpcy5hICogcGpfbWxmbihsYXQsIHMsIGMsIHRoaXMuZW4pO1xuICAgIHggPSB0aGlzLmEgKiBsb24gKiBjIC8gTWF0aC5zcXJ0KDEgLSB0aGlzLmVzICogcyAqIHMpO1xuICB9XG5cbiAgcC54ID0geDtcbiAgcC55ID0geTtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKHApIHtcbiAgdmFyIGxhdCwgdGVtcCwgbG9uLCBzO1xuXG4gIHAueCAtPSB0aGlzLngwO1xuICBsb24gPSBwLnggLyB0aGlzLmE7XG4gIHAueSAtPSB0aGlzLnkwO1xuICBsYXQgPSBwLnkgLyB0aGlzLmE7XG5cbiAgaWYgKHRoaXMuc3BoZXJlKSB7XG4gICAgbGF0IC89IHRoaXMuQ195O1xuICAgIGxvbiA9IGxvbiAvICh0aGlzLkNfeCAqICh0aGlzLm0gKyBNYXRoLmNvcyhsYXQpKSk7XG4gICAgaWYgKHRoaXMubSkge1xuICAgICAgbGF0ID0gYXNpbnooKHRoaXMubSAqIGxhdCArIE1hdGguc2luKGxhdCkpIC8gdGhpcy5uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5uICE9PSAxKSB7XG4gICAgICBsYXQgPSBhc2lueihNYXRoLnNpbihsYXQpIC8gdGhpcy5uKTtcbiAgICB9XG4gICAgbG9uID0gYWRqdXN0X2xvbihsb24gKyB0aGlzLmxvbmcwKTtcbiAgICBsYXQgPSBhZGp1c3RfbGF0KGxhdCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgbGF0ID0gcGpfaW52X21sZm4ocC55IC8gdGhpcy5hLCB0aGlzLmVzLCB0aGlzLmVuKTtcbiAgICBzID0gTWF0aC5hYnMobGF0KTtcbiAgICBpZiAocyA8IEhBTEZfUEkpIHtcbiAgICAgIHMgPSBNYXRoLnNpbihsYXQpO1xuICAgICAgdGVtcCA9IHRoaXMubG9uZzAgKyBwLnggKiBNYXRoLnNxcnQoMSAtIHRoaXMuZXMgKiBzICogcykgLyAodGhpcy5hICogTWF0aC5jb3MobGF0KSk7XG4gICAgICAvL3RlbXAgPSB0aGlzLmxvbmcwICsgcC54IC8gKHRoaXMuYSAqIE1hdGguY29zKGxhdCkpO1xuICAgICAgbG9uID0gYWRqdXN0X2xvbih0ZW1wKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKHMgLSBFUFNMTikgPCBIQUxGX1BJKSB7XG4gICAgICBsb24gPSB0aGlzLmxvbmcwO1xuICAgIH1cbiAgfVxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJTaW51c29pZGFsXCIsIFwic2ludVwiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiLypcbiAgcmVmZXJlbmNlczpcbiAgICBGb3JtdWxlcyBldCBjb25zdGFudGVzIHBvdXIgbGUgQ2FsY3VsIHBvdXIgbGFcbiAgICBwcm9qZWN0aW9uIGN5bGluZHJpcXVlIGNvbmZvcm1lIMOgIGF4ZSBvYmxpcXVlIGV0IHBvdXIgbGEgdHJhbnNmb3JtYXRpb24gZW50cmVcbiAgICBkZXMgc3lzdMOobWVzIGRlIHLDqWbDqXJlbmNlLlxuICAgIGh0dHA6Ly93d3cuc3dpc3N0b3BvLmFkbWluLmNoL2ludGVybmV0L3N3aXNzdG9wby9mci9ob21lL3RvcGljcy9zdXJ2ZXkvc3lzL3JlZnN5cy9zd2l0emVybGFuZC5wYXJzeXNyZWxhdGVkMS4zMTIxNi5kb3dubG9hZExpc3QuNzcwMDQuRG93bmxvYWRGaWxlLnRtcC9zd2lzc3Byb2plY3Rpb25mci5wZGZcbiAgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBwaHkwID0gdGhpcy5sYXQwO1xuICB0aGlzLmxhbWJkYTAgPSB0aGlzLmxvbmcwO1xuICB2YXIgc2luUGh5MCA9IE1hdGguc2luKHBoeTApO1xuICB2YXIgc2VtaU1ham9yQXhpcyA9IHRoaXMuYTtcbiAgdmFyIGludkYgPSB0aGlzLnJmO1xuICB2YXIgZmxhdHRlbmluZyA9IDEgLyBpbnZGO1xuICB2YXIgZTIgPSAyICogZmxhdHRlbmluZyAtIE1hdGgucG93KGZsYXR0ZW5pbmcsIDIpO1xuICB2YXIgZSA9IHRoaXMuZSA9IE1hdGguc3FydChlMik7XG4gIHRoaXMuUiA9IHRoaXMuazAgKiBzZW1pTWFqb3JBeGlzICogTWF0aC5zcXJ0KDEgLSBlMikgLyAoMSAtIGUyICogTWF0aC5wb3coc2luUGh5MCwgMikpO1xuICB0aGlzLmFscGhhID0gTWF0aC5zcXJ0KDEgKyBlMiAvICgxIC0gZTIpICogTWF0aC5wb3coTWF0aC5jb3MocGh5MCksIDQpKTtcbiAgdGhpcy5iMCA9IE1hdGguYXNpbihzaW5QaHkwIC8gdGhpcy5hbHBoYSk7XG4gIHZhciBrMSA9IE1hdGgubG9nKE1hdGgudGFuKE1hdGguUEkgLyA0ICsgdGhpcy5iMCAvIDIpKTtcbiAgdmFyIGsyID0gTWF0aC5sb2coTWF0aC50YW4oTWF0aC5QSSAvIDQgKyBwaHkwIC8gMikpO1xuICB2YXIgazMgPSBNYXRoLmxvZygoMSArIGUgKiBzaW5QaHkwKSAvICgxIC0gZSAqIHNpblBoeTApKTtcbiAgdGhpcy5LID0gazEgLSB0aGlzLmFscGhhICogazIgKyB0aGlzLmFscGhhICogZSAvIDIgKiBrMztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgU2ExID0gTWF0aC5sb2coTWF0aC50YW4oTWF0aC5QSSAvIDQgLSBwLnkgLyAyKSk7XG4gIHZhciBTYTIgPSB0aGlzLmUgLyAyICogTWF0aC5sb2coKDEgKyB0aGlzLmUgKiBNYXRoLnNpbihwLnkpKSAvICgxIC0gdGhpcy5lICogTWF0aC5zaW4ocC55KSkpO1xuICB2YXIgUyA9IC10aGlzLmFscGhhICogKFNhMSArIFNhMikgKyB0aGlzLks7XG5cbiAgLy8gc3BoZXJpYyBsYXRpdHVkZVxuICB2YXIgYiA9IDIgKiAoTWF0aC5hdGFuKE1hdGguZXhwKFMpKSAtIE1hdGguUEkgLyA0KTtcblxuICAvLyBzcGhlcmljIGxvbmdpdHVkZVxuICB2YXIgSSA9IHRoaXMuYWxwaGEgKiAocC54IC0gdGhpcy5sYW1iZGEwKTtcblxuICAvLyBwc29ldWRvIGVxdWF0b3JpYWwgcm90YXRpb25cbiAgdmFyIHJvdEkgPSBNYXRoLmF0YW4oTWF0aC5zaW4oSSkgLyAoTWF0aC5zaW4odGhpcy5iMCkgKiBNYXRoLnRhbihiKSArIE1hdGguY29zKHRoaXMuYjApICogTWF0aC5jb3MoSSkpKTtcblxuICB2YXIgcm90QiA9IE1hdGguYXNpbihNYXRoLmNvcyh0aGlzLmIwKSAqIE1hdGguc2luKGIpIC0gTWF0aC5zaW4odGhpcy5iMCkgKiBNYXRoLmNvcyhiKSAqIE1hdGguY29zKEkpKTtcblxuICBwLnkgPSB0aGlzLlIgLyAyICogTWF0aC5sb2coKDEgKyBNYXRoLnNpbihyb3RCKSkgLyAoMSAtIE1hdGguc2luKHJvdEIpKSkgKyB0aGlzLnkwO1xuICBwLnggPSB0aGlzLlIgKiByb3RJICsgdGhpcy54MDtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKHApIHtcbiAgdmFyIFkgPSBwLnggLSB0aGlzLngwO1xuICB2YXIgWCA9IHAueSAtIHRoaXMueTA7XG5cbiAgdmFyIHJvdEkgPSBZIC8gdGhpcy5SO1xuICB2YXIgcm90QiA9IDIgKiAoTWF0aC5hdGFuKE1hdGguZXhwKFggLyB0aGlzLlIpKSAtIE1hdGguUEkgLyA0KTtcblxuICB2YXIgYiA9IE1hdGguYXNpbihNYXRoLmNvcyh0aGlzLmIwKSAqIE1hdGguc2luKHJvdEIpICsgTWF0aC5zaW4odGhpcy5iMCkgKiBNYXRoLmNvcyhyb3RCKSAqIE1hdGguY29zKHJvdEkpKTtcbiAgdmFyIEkgPSBNYXRoLmF0YW4oTWF0aC5zaW4ocm90SSkgLyAoTWF0aC5jb3ModGhpcy5iMCkgKiBNYXRoLmNvcyhyb3RJKSAtIE1hdGguc2luKHRoaXMuYjApICogTWF0aC50YW4ocm90QikpKTtcblxuICB2YXIgbGFtYmRhID0gdGhpcy5sYW1iZGEwICsgSSAvIHRoaXMuYWxwaGE7XG5cbiAgdmFyIFMgPSAwO1xuICB2YXIgcGh5ID0gYjtcbiAgdmFyIHByZXZQaHkgPSAtMTAwMDtcbiAgdmFyIGl0ZXJhdGlvbiA9IDA7XG4gIHdoaWxlIChNYXRoLmFicyhwaHkgLSBwcmV2UGh5KSA+IDAuMDAwMDAwMSkge1xuICAgIGlmICgrK2l0ZXJhdGlvbiA+IDIwKSB7XG4gICAgICAvLy4uLnJlcG9ydEVycm9yKFwib21lcmNGd2RJbmZpbml0eVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9TID0gTWF0aC5sb2coTWF0aC50YW4oTWF0aC5QSSAvIDQgKyBwaHkgLyAyKSk7XG4gICAgUyA9IDEgLyB0aGlzLmFscGhhICogKE1hdGgubG9nKE1hdGgudGFuKE1hdGguUEkgLyA0ICsgYiAvIDIpKSAtIHRoaXMuSykgKyB0aGlzLmUgKiBNYXRoLmxvZyhNYXRoLnRhbihNYXRoLlBJIC8gNCArIE1hdGguYXNpbih0aGlzLmUgKiBNYXRoLnNpbihwaHkpKSAvIDIpKTtcbiAgICBwcmV2UGh5ID0gcGh5O1xuICAgIHBoeSA9IDIgKiBNYXRoLmF0YW4oTWF0aC5leHAoUykpIC0gTWF0aC5QSSAvIDI7XG4gIH1cblxuICBwLnggPSBsYW1iZGE7XG4gIHAueSA9IHBoeTtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJzb21lcmNcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lc1xufTtcbiIsImltcG9ydCB7RVBTTE4sIEhBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuXG5pbXBvcnQgc2lnbiBmcm9tICcuLi9jb21tb24vc2lnbic7XG5pbXBvcnQgbXNmbnogZnJvbSAnLi4vY29tbW9uL21zZm56JztcbmltcG9ydCB0c2ZueiBmcm9tICcuLi9jb21tb24vdHNmbnonO1xuaW1wb3J0IHBoaTJ6IGZyb20gJy4uL2NvbW1vbi9waGkyeic7XG5pbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzc2ZuXyhwaGl0LCBzaW5waGksIGVjY2VuKSB7XG4gIHNpbnBoaSAqPSBlY2NlbjtcbiAgcmV0dXJuIChNYXRoLnRhbigwLjUgKiAoSEFMRl9QSSArIHBoaXQpKSAqIE1hdGgucG93KCgxIC0gc2lucGhpKSAvICgxICsgc2lucGhpKSwgMC41ICogZWNjZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHRoaXMuY29zbGF0MCA9IE1hdGguY29zKHRoaXMubGF0MCk7XG4gIHRoaXMuc2lubGF0MCA9IE1hdGguc2luKHRoaXMubGF0MCk7XG4gIGlmICh0aGlzLnNwaGVyZSkge1xuICAgIGlmICh0aGlzLmswID09PSAxICYmICFpc05hTih0aGlzLmxhdF90cykgJiYgTWF0aC5hYnModGhpcy5jb3NsYXQwKSA8PSBFUFNMTikge1xuICAgICAgdGhpcy5rMCA9IDAuNSAqICgxICsgc2lnbih0aGlzLmxhdDApICogTWF0aC5zaW4odGhpcy5sYXRfdHMpKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKE1hdGguYWJzKHRoaXMuY29zbGF0MCkgPD0gRVBTTE4pIHtcbiAgICAgIGlmICh0aGlzLmxhdDAgPiAwKSB7XG4gICAgICAgIC8vTm9ydGggcG9sZVxuICAgICAgICAvL3RyYWNlKCdzdGVyZTpub3J0aCBwb2xlJyk7XG4gICAgICAgIHRoaXMuY29uID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1NvdXRoIHBvbGVcbiAgICAgICAgLy90cmFjZSgnc3RlcmU6c291dGggcG9sZScpO1xuICAgICAgICB0aGlzLmNvbiA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnMgPSBNYXRoLnNxcnQoTWF0aC5wb3coMSArIHRoaXMuZSwgMSArIHRoaXMuZSkgKiBNYXRoLnBvdygxIC0gdGhpcy5lLCAxIC0gdGhpcy5lKSk7XG4gICAgaWYgKHRoaXMuazAgPT09IDEgJiYgIWlzTmFOKHRoaXMubGF0X3RzKSAmJiBNYXRoLmFicyh0aGlzLmNvc2xhdDApIDw9IEVQU0xOKSB7XG4gICAgICB0aGlzLmswID0gMC41ICogdGhpcy5jb25zICogbXNmbnoodGhpcy5lLCBNYXRoLnNpbih0aGlzLmxhdF90cyksIE1hdGguY29zKHRoaXMubGF0X3RzKSkgLyB0c2Zueih0aGlzLmUsIHRoaXMuY29uICogdGhpcy5sYXRfdHMsIHRoaXMuY29uICogTWF0aC5zaW4odGhpcy5sYXRfdHMpKTtcbiAgICB9XG4gICAgdGhpcy5tczEgPSBtc2Zueih0aGlzLmUsIHRoaXMuc2lubGF0MCwgdGhpcy5jb3NsYXQwKTtcbiAgICB0aGlzLlgwID0gMiAqIE1hdGguYXRhbih0aGlzLnNzZm5fKHRoaXMubGF0MCwgdGhpcy5zaW5sYXQwLCB0aGlzLmUpKSAtIEhBTEZfUEk7XG4gICAgdGhpcy5jb3NYMCA9IE1hdGguY29zKHRoaXMuWDApO1xuICAgIHRoaXMuc2luWDAgPSBNYXRoLnNpbih0aGlzLlgwKTtcbiAgfVxufVxuXG4vLyBTdGVyZW9ncmFwaGljIGZvcndhcmQgZXF1YXRpb25zLS1tYXBwaW5nIGxhdCxsb25nIHRvIHgseVxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuICB2YXIgbG9uID0gcC54O1xuICB2YXIgbGF0ID0gcC55O1xuICB2YXIgc2lubGF0ID0gTWF0aC5zaW4obGF0KTtcbiAgdmFyIGNvc2xhdCA9IE1hdGguY29zKGxhdCk7XG4gIHZhciBBLCBYLCBzaW5YLCBjb3NYLCB0cywgcmg7XG4gIHZhciBkbG9uID0gYWRqdXN0X2xvbihsb24gLSB0aGlzLmxvbmcwKTtcblxuICBpZiAoTWF0aC5hYnMoTWF0aC5hYnMobG9uIC0gdGhpcy5sb25nMCkgLSBNYXRoLlBJKSA8PSBFUFNMTiAmJiBNYXRoLmFicyhsYXQgKyB0aGlzLmxhdDApIDw9IEVQU0xOKSB7XG4gICAgLy9jYXNlIG9mIHRoZSBvcmlnaW5lIHBvaW50XG4gICAgLy90cmFjZSgnc3RlcmU6dGhpcyBpcyB0aGUgb3JpZ2luIHBvaW50Jyk7XG4gICAgcC54ID0gTmFOO1xuICAgIHAueSA9IE5hTjtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICAvL3RyYWNlKCdzdGVyZTpzcGhlcmUgY2FzZScpO1xuICAgIEEgPSAyICogdGhpcy5rMCAvICgxICsgdGhpcy5zaW5sYXQwICogc2lubGF0ICsgdGhpcy5jb3NsYXQwICogY29zbGF0ICogTWF0aC5jb3MoZGxvbikpO1xuICAgIHAueCA9IHRoaXMuYSAqIEEgKiBjb3NsYXQgKiBNYXRoLnNpbihkbG9uKSArIHRoaXMueDA7XG4gICAgcC55ID0gdGhpcy5hICogQSAqICh0aGlzLmNvc2xhdDAgKiBzaW5sYXQgLSB0aGlzLnNpbmxhdDAgKiBjb3NsYXQgKiBNYXRoLmNvcyhkbG9uKSkgKyB0aGlzLnkwO1xuICAgIHJldHVybiBwO1xuICB9XG4gIGVsc2Uge1xuICAgIFggPSAyICogTWF0aC5hdGFuKHRoaXMuc3Nmbl8obGF0LCBzaW5sYXQsIHRoaXMuZSkpIC0gSEFMRl9QSTtcbiAgICBjb3NYID0gTWF0aC5jb3MoWCk7XG4gICAgc2luWCA9IE1hdGguc2luKFgpO1xuICAgIGlmIChNYXRoLmFicyh0aGlzLmNvc2xhdDApIDw9IEVQU0xOKSB7XG4gICAgICB0cyA9IHRzZm56KHRoaXMuZSwgbGF0ICogdGhpcy5jb24sIHRoaXMuY29uICogc2lubGF0KTtcbiAgICAgIHJoID0gMiAqIHRoaXMuYSAqIHRoaXMuazAgKiB0cyAvIHRoaXMuY29ucztcbiAgICAgIHAueCA9IHRoaXMueDAgKyByaCAqIE1hdGguc2luKGxvbiAtIHRoaXMubG9uZzApO1xuICAgICAgcC55ID0gdGhpcy55MCAtIHRoaXMuY29uICogcmggKiBNYXRoLmNvcyhsb24gLSB0aGlzLmxvbmcwKTtcbiAgICAgIC8vdHJhY2UocC50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBlbHNlIGlmIChNYXRoLmFicyh0aGlzLnNpbmxhdDApIDwgRVBTTE4pIHtcbiAgICAgIC8vRXFcbiAgICAgIC8vdHJhY2UoJ3N0ZXJlOmVxdWF0ZXVyJyk7XG4gICAgICBBID0gMiAqIHRoaXMuYSAqIHRoaXMuazAgLyAoMSArIGNvc1ggKiBNYXRoLmNvcyhkbG9uKSk7XG4gICAgICBwLnkgPSBBICogc2luWDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL290aGVyIGNhc2VcbiAgICAgIC8vdHJhY2UoJ3N0ZXJlOm5vcm1hbCBjYXNlJyk7XG4gICAgICBBID0gMiAqIHRoaXMuYSAqIHRoaXMuazAgKiB0aGlzLm1zMSAvICh0aGlzLmNvc1gwICogKDEgKyB0aGlzLnNpblgwICogc2luWCArIHRoaXMuY29zWDAgKiBjb3NYICogTWF0aC5jb3MoZGxvbikpKTtcbiAgICAgIHAueSA9IEEgKiAodGhpcy5jb3NYMCAqIHNpblggLSB0aGlzLnNpblgwICogY29zWCAqIE1hdGguY29zKGRsb24pKSArIHRoaXMueTA7XG4gICAgfVxuICAgIHAueCA9IEEgKiBjb3NYICogTWF0aC5zaW4oZGxvbikgKyB0aGlzLngwO1xuICB9XG4gIC8vdHJhY2UocC50b1N0cmluZygpKTtcbiAgcmV0dXJuIHA7XG59XG5cbi8vKiBTdGVyZW9ncmFwaGljIGludmVyc2UgZXF1YXRpb25zLS1tYXBwaW5nIHgseSB0byBsYXQvbG9uZ1xuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2UocCkge1xuICBwLnggLT0gdGhpcy54MDtcbiAgcC55IC09IHRoaXMueTA7XG4gIHZhciBsb24sIGxhdCwgdHMsIGNlLCBDaGk7XG4gIHZhciByaCA9IE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xuICBpZiAodGhpcy5zcGhlcmUpIHtcbiAgICB2YXIgYyA9IDIgKiBNYXRoLmF0YW4ocmggLyAoMiAqIHRoaXMuYSAqIHRoaXMuazApKTtcbiAgICBsb24gPSB0aGlzLmxvbmcwO1xuICAgIGxhdCA9IHRoaXMubGF0MDtcbiAgICBpZiAocmggPD0gRVBTTE4pIHtcbiAgICAgIHAueCA9IGxvbjtcbiAgICAgIHAueSA9IGxhdDtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgICBsYXQgPSBNYXRoLmFzaW4oTWF0aC5jb3MoYykgKiB0aGlzLnNpbmxhdDAgKyBwLnkgKiBNYXRoLnNpbihjKSAqIHRoaXMuY29zbGF0MCAvIHJoKTtcbiAgICBpZiAoTWF0aC5hYnModGhpcy5jb3NsYXQwKSA8IEVQU0xOKSB7XG4gICAgICBpZiAodGhpcy5sYXQwID4gMCkge1xuICAgICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyBNYXRoLmF0YW4yKHAueCwgLSAxICogcC55KSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbG9uID0gYWRqdXN0X2xvbih0aGlzLmxvbmcwICsgTWF0aC5hdGFuMihwLngsIHAueSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIE1hdGguYXRhbjIocC54ICogTWF0aC5zaW4oYyksIHJoICogdGhpcy5jb3NsYXQwICogTWF0aC5jb3MoYykgLSBwLnkgKiB0aGlzLnNpbmxhdDAgKiBNYXRoLnNpbihjKSkpO1xuICAgIH1cbiAgICBwLnggPSBsb247XG4gICAgcC55ID0gbGF0O1xuICAgIHJldHVybiBwO1xuICB9XG4gIGVsc2Uge1xuICAgIGlmIChNYXRoLmFicyh0aGlzLmNvc2xhdDApIDw9IEVQU0xOKSB7XG4gICAgICBpZiAocmggPD0gRVBTTE4pIHtcbiAgICAgICAgbGF0ID0gdGhpcy5sYXQwO1xuICAgICAgICBsb24gPSB0aGlzLmxvbmcwO1xuICAgICAgICBwLnggPSBsb247XG4gICAgICAgIHAueSA9IGxhdDtcbiAgICAgICAgLy90cmFjZShwLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICAgIHAueCAqPSB0aGlzLmNvbjtcbiAgICAgIHAueSAqPSB0aGlzLmNvbjtcbiAgICAgIHRzID0gcmggKiB0aGlzLmNvbnMgLyAoMiAqIHRoaXMuYSAqIHRoaXMuazApO1xuICAgICAgbGF0ID0gdGhpcy5jb24gKiBwaGkyeih0aGlzLmUsIHRzKTtcbiAgICAgIGxvbiA9IHRoaXMuY29uICogYWRqdXN0X2xvbih0aGlzLmNvbiAqIHRoaXMubG9uZzAgKyBNYXRoLmF0YW4yKHAueCwgLSAxICogcC55KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2UgPSAyICogTWF0aC5hdGFuKHJoICogdGhpcy5jb3NYMCAvICgyICogdGhpcy5hICogdGhpcy5rMCAqIHRoaXMubXMxKSk7XG4gICAgICBsb24gPSB0aGlzLmxvbmcwO1xuICAgICAgaWYgKHJoIDw9IEVQU0xOKSB7XG4gICAgICAgIENoaSA9IHRoaXMuWDA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgQ2hpID0gTWF0aC5hc2luKE1hdGguY29zKGNlKSAqIHRoaXMuc2luWDAgKyBwLnkgKiBNYXRoLnNpbihjZSkgKiB0aGlzLmNvc1gwIC8gcmgpO1xuICAgICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyBNYXRoLmF0YW4yKHAueCAqIE1hdGguc2luKGNlKSwgcmggKiB0aGlzLmNvc1gwICogTWF0aC5jb3MoY2UpIC0gcC55ICogdGhpcy5zaW5YMCAqIE1hdGguc2luKGNlKSkpO1xuICAgICAgfVxuICAgICAgbGF0ID0gLTEgKiBwaGkyeih0aGlzLmUsIE1hdGgudGFuKDAuNSAqIChIQUxGX1BJICsgQ2hpKSkpO1xuICAgIH1cbiAgfVxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcblxuICAvL3RyYWNlKHAudG9TdHJpbmcoKSk7XG4gIHJldHVybiBwO1xuXG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJzdGVyZVwiLCBcIlN0ZXJlb2dyYXBoaWNfU291dGhfUG9sZVwiLCBcIlBvbGFyIFN0ZXJlb2dyYXBoaWMgKHZhcmlhbnQgQilcIl07XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGluaXQsXG4gIGZvcndhcmQ6IGZvcndhcmQsXG4gIGludmVyc2U6IGludmVyc2UsXG4gIG5hbWVzOiBuYW1lcyxcbiAgc3Nmbl86IHNzZm5fXG59O1xuIiwiaW1wb3J0IGdhdXNzIGZyb20gJy4vZ2F1c3MnO1xuaW1wb3J0IGFkanVzdF9sb24gZnJvbSAnLi4vY29tbW9uL2FkanVzdF9sb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgZ2F1c3MuaW5pdC5hcHBseSh0aGlzKTtcbiAgaWYgKCF0aGlzLnJjKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuc2luYzAgPSBNYXRoLnNpbih0aGlzLnBoaWMwKTtcbiAgdGhpcy5jb3NjMCA9IE1hdGguY29zKHRoaXMucGhpYzApO1xuICB0aGlzLlIyID0gMiAqIHRoaXMucmM7XG4gIGlmICghdGhpcy50aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSBcIk9ibGlxdWUgU3RlcmVvZ3JhcGhpYyBBbHRlcm5hdGl2ZVwiO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkKHApIHtcbiAgdmFyIHNpbmMsIGNvc2MsIGNvc2wsIGs7XG4gIHAueCA9IGFkanVzdF9sb24ocC54IC0gdGhpcy5sb25nMCk7XG4gIGdhdXNzLmZvcndhcmQuYXBwbHkodGhpcywgW3BdKTtcbiAgc2luYyA9IE1hdGguc2luKHAueSk7XG4gIGNvc2MgPSBNYXRoLmNvcyhwLnkpO1xuICBjb3NsID0gTWF0aC5jb3MocC54KTtcbiAgayA9IHRoaXMuazAgKiB0aGlzLlIyIC8gKDEgKyB0aGlzLnNpbmMwICogc2luYyArIHRoaXMuY29zYzAgKiBjb3NjICogY29zbCk7XG4gIHAueCA9IGsgKiBjb3NjICogTWF0aC5zaW4ocC54KTtcbiAgcC55ID0gayAqICh0aGlzLmNvc2MwICogc2luYyAtIHRoaXMuc2luYzAgKiBjb3NjICogY29zbCk7XG4gIHAueCA9IHRoaXMuYSAqIHAueCArIHRoaXMueDA7XG4gIHAueSA9IHRoaXMuYSAqIHAueSArIHRoaXMueTA7XG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShwKSB7XG4gIHZhciBzaW5jLCBjb3NjLCBsb24sIGxhdCwgcmhvO1xuICBwLnggPSAocC54IC0gdGhpcy54MCkgLyB0aGlzLmE7XG4gIHAueSA9IChwLnkgLSB0aGlzLnkwKSAvIHRoaXMuYTtcblxuICBwLnggLz0gdGhpcy5rMDtcbiAgcC55IC89IHRoaXMuazA7XG4gIGlmICgocmhvID0gTWF0aC5zcXJ0KHAueCAqIHAueCArIHAueSAqIHAueSkpKSB7XG4gICAgdmFyIGMgPSAyICogTWF0aC5hdGFuMihyaG8sIHRoaXMuUjIpO1xuICAgIHNpbmMgPSBNYXRoLnNpbihjKTtcbiAgICBjb3NjID0gTWF0aC5jb3MoYyk7XG4gICAgbGF0ID0gTWF0aC5hc2luKGNvc2MgKiB0aGlzLnNpbmMwICsgcC55ICogc2luYyAqIHRoaXMuY29zYzAgLyByaG8pO1xuICAgIGxvbiA9IE1hdGguYXRhbjIocC54ICogc2luYywgcmhvICogdGhpcy5jb3NjMCAqIGNvc2MgLSBwLnkgKiB0aGlzLnNpbmMwICogc2luYyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgbGF0ID0gdGhpcy5waGljMDtcbiAgICBsb24gPSAwO1xuICB9XG5cbiAgcC54ID0gbG9uO1xuICBwLnkgPSBsYXQ7XG4gIGdhdXNzLmludmVyc2UuYXBwbHkodGhpcywgW3BdKTtcbiAgcC54ID0gYWRqdXN0X2xvbihwLnggKyB0aGlzLmxvbmcwKTtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJTdGVyZW9ncmFwaGljX05vcnRoX1BvbGVcIiwgXCJPYmxpcXVlX1N0ZXJlb2dyYXBoaWNcIiwgXCJQb2xhcl9TdGVyZW9ncmFwaGljXCIsIFwic3RlcmVhXCIsXCJPYmxpcXVlIFN0ZXJlb2dyYXBoaWMgQWx0ZXJuYXRpdmVcIixcIkRvdWJsZV9TdGVyZW9ncmFwaGljXCJdO1xuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBpbml0LFxuICBmb3J3YXJkOiBmb3J3YXJkLFxuICBpbnZlcnNlOiBpbnZlcnNlLFxuICBuYW1lczogbmFtZXNcbn07XG4iLCIvLyBIZWF2aWx5IGJhc2VkIG9uIHRoaXMgdG1lcmMgcHJvamVjdGlvbiBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21ibG9jaC9tYXBzaGFwZXItcHJvai9ibG9iL21hc3Rlci9zcmMvcHJvamVjdGlvbnMvdG1lcmMuanNcblxuaW1wb3J0IHBqX2VuZm4gZnJvbSAnLi4vY29tbW9uL3BqX2VuZm4nO1xuaW1wb3J0IHBqX21sZm4gZnJvbSAnLi4vY29tbW9uL3BqX21sZm4nO1xuaW1wb3J0IHBqX2ludl9tbGZuIGZyb20gJy4uL2NvbW1vbi9wal9pbnZfbWxmbic7XG5pbXBvcnQgYWRqdXN0X2xvbiBmcm9tICcuLi9jb21tb24vYWRqdXN0X2xvbic7XG5cbmltcG9ydCB7RVBTTE4sIEhBTEZfUEl9IGZyb20gJy4uL2NvbnN0YW50cy92YWx1ZXMnO1xuaW1wb3J0IHNpZ24gZnJvbSAnLi4vY29tbW9uL3NpZ24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgdGhpcy54MCA9IHRoaXMueDAgIT09IHVuZGVmaW5lZCA/IHRoaXMueDAgOiAwO1xuICB0aGlzLnkwID0gdGhpcy55MCAhPT0gdW5kZWZpbmVkID8gdGhpcy55MCA6IDA7XG4gIHRoaXMubG9uZzAgPSB0aGlzLmxvbmcwICE9PSB1bmRlZmluZWQgPyB0aGlzLmxvbmcwIDogMDtcbiAgdGhpcy5sYXQwID0gdGhpcy5sYXQwICE9PSB1bmRlZmluZWQgPyB0aGlzLmxhdDAgOiAwO1xuXG4gIGlmICh0aGlzLmVzKSB7XG4gICAgdGhpcy5lbiA9IHBqX2VuZm4odGhpcy5lcyk7XG4gICAgdGhpcy5tbDAgPSBwal9tbGZuKHRoaXMubGF0MCwgTWF0aC5zaW4odGhpcy5sYXQwKSwgTWF0aC5jb3ModGhpcy5sYXQwKSwgdGhpcy5lbik7XG4gIH1cbn1cblxuLyoqXG4gICAgVHJhbnN2ZXJzZSBNZXJjYXRvciBGb3J3YXJkICAtIGxvbmcvbGF0IHRvIHgveVxuICAgIGxvbmcvbGF0IGluIHJhZGlhbnNcbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkKHApIHtcbiAgdmFyIGxvbiA9IHAueDtcbiAgdmFyIGxhdCA9IHAueTtcblxuICB2YXIgZGVsdGFfbG9uID0gYWRqdXN0X2xvbihsb24gLSB0aGlzLmxvbmcwKTtcbiAgdmFyIGNvbjtcbiAgdmFyIHgsIHk7XG4gIHZhciBzaW5fcGhpID0gTWF0aC5zaW4obGF0KTtcbiAgdmFyIGNvc19waGkgPSBNYXRoLmNvcyhsYXQpO1xuXG4gIGlmICghdGhpcy5lcykge1xuICAgIHZhciBiID0gY29zX3BoaSAqIE1hdGguc2luKGRlbHRhX2xvbik7XG5cbiAgICBpZiAoKE1hdGguYWJzKE1hdGguYWJzKGIpIC0gMSkpIDwgRVBTTE4pIHtcbiAgICAgIHJldHVybiAoOTMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHggPSAwLjUgKiB0aGlzLmEgKiB0aGlzLmswICogTWF0aC5sb2coKDEgKyBiKSAvICgxIC0gYikpICsgdGhpcy54MDtcbiAgICAgIHkgPSBjb3NfcGhpICogTWF0aC5jb3MoZGVsdGFfbG9uKSAvIE1hdGguc3FydCgxIC0gTWF0aC5wb3coYiwgMikpO1xuICAgICAgYiA9IE1hdGguYWJzKHkpO1xuXG4gICAgICBpZiAoYiA+PSAxKSB7XG4gICAgICAgIGlmICgoYiAtIDEpID4gRVBTTE4pIHtcbiAgICAgICAgICByZXR1cm4gKDkzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHkgPSBNYXRoLmFjb3MoeSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYXQgPCAwKSB7XG4gICAgICAgIHkgPSAteTtcbiAgICAgIH1cblxuICAgICAgeSA9IHRoaXMuYSAqIHRoaXMuazAgKiAoeSAtIHRoaXMubGF0MCkgKyB0aGlzLnkwO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgYWwgPSBjb3NfcGhpICogZGVsdGFfbG9uO1xuICAgIHZhciBhbHMgPSBNYXRoLnBvdyhhbCwgMik7XG4gICAgdmFyIGMgPSB0aGlzLmVwMiAqIE1hdGgucG93KGNvc19waGksIDIpO1xuICAgIHZhciBjcyA9IE1hdGgucG93KGMsIDIpO1xuICAgIHZhciB0cSA9IE1hdGguYWJzKGNvc19waGkpID4gRVBTTE4gPyBNYXRoLnRhbihsYXQpIDogMDtcbiAgICB2YXIgdCA9IE1hdGgucG93KHRxLCAyKTtcbiAgICB2YXIgdHMgPSBNYXRoLnBvdyh0LCAyKTtcbiAgICBjb24gPSAxIC0gdGhpcy5lcyAqIE1hdGgucG93KHNpbl9waGksIDIpO1xuICAgIGFsID0gYWwgLyBNYXRoLnNxcnQoY29uKTtcbiAgICB2YXIgbWwgPSBwal9tbGZuKGxhdCwgc2luX3BoaSwgY29zX3BoaSwgdGhpcy5lbik7XG5cbiAgICB4ID0gdGhpcy5hICogKHRoaXMuazAgKiBhbCAqICgxICtcbiAgICAgIGFscyAvIDYgKiAoMSAtIHQgKyBjICtcbiAgICAgIGFscyAvIDIwICogKDUgLSAxOCAqIHQgKyB0cyArIDE0ICogYyAtIDU4ICogdCAqIGMgK1xuICAgICAgYWxzIC8gNDIgKiAoNjEgKyAxNzkgKiB0cyAtIHRzICogdCAtIDQ3OSAqIHQpKSkpKSArXG4gICAgICB0aGlzLngwO1xuXG4gICAgeSA9IHRoaXMuYSAqICh0aGlzLmswICogKG1sIC0gdGhpcy5tbDAgK1xuICAgICAgc2luX3BoaSAqIGRlbHRhX2xvbiAqIGFsIC8gMiAqICgxICtcbiAgICAgIGFscyAvIDEyICogKDUgLSB0ICsgOSAqIGMgKyA0ICogY3MgK1xuICAgICAgYWxzIC8gMzAgKiAoNjEgKyB0cyAtIDU4ICogdCArIDI3MCAqIGMgLSAzMzAgKiB0ICogYyArXG4gICAgICBhbHMgLyA1NiAqICgxMzg1ICsgNTQzICogdHMgLSB0cyAqIHQgLSAzMTExICogdCkpKSkpKSArXG4gICAgICB0aGlzLnkwO1xuICB9XG5cbiAgcC54ID0geDtcbiAgcC55ID0geTtcblxuICByZXR1cm4gcDtcbn1cblxuLyoqXG4gICAgVHJhbnN2ZXJzZSBNZXJjYXRvciBJbnZlcnNlICAtICB4L3kgdG8gbG9uZy9sYXRcbiAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKHApIHtcbiAgdmFyIGNvbiwgcGhpO1xuICB2YXIgbGF0LCBsb247XG4gIHZhciB4ID0gKHAueCAtIHRoaXMueDApICogKDEgLyB0aGlzLmEpO1xuICB2YXIgeSA9IChwLnkgLSB0aGlzLnkwKSAqICgxIC8gdGhpcy5hKTtcblxuICBpZiAoIXRoaXMuZXMpIHtcbiAgICB2YXIgZiA9IE1hdGguZXhwKHggLyB0aGlzLmswKTtcbiAgICB2YXIgZyA9IDAuNSAqIChmIC0gMSAvIGYpO1xuICAgIHZhciB0ZW1wID0gdGhpcy5sYXQwICsgeSAvIHRoaXMuazA7XG4gICAgdmFyIGggPSBNYXRoLmNvcyh0ZW1wKTtcbiAgICBjb24gPSBNYXRoLnNxcnQoKDEgLSBNYXRoLnBvdyhoLCAyKSkgLyAoMSArIE1hdGgucG93KGcsIDIpKSk7XG4gICAgbGF0ID0gTWF0aC5hc2luKGNvbik7XG5cbiAgICBpZiAoeSA8IDApIHtcbiAgICAgIGxhdCA9IC1sYXQ7XG4gICAgfVxuXG4gICAgaWYgKChnID09PSAwKSAmJiAoaCA9PT0gMCkpIHtcbiAgICAgIGxvbiA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbG9uID0gYWRqdXN0X2xvbihNYXRoLmF0YW4yKGcsIGgpICsgdGhpcy5sb25nMCk7XG4gICAgfVxuICB9XG4gIGVsc2UgeyAvLyBlbGxpcHNvaWRhbCBmb3JtXG4gICAgY29uID0gdGhpcy5tbDAgKyB5IC8gdGhpcy5rMDtcbiAgICBwaGkgPSBwal9pbnZfbWxmbihjb24sIHRoaXMuZXMsIHRoaXMuZW4pO1xuXG4gICAgaWYgKE1hdGguYWJzKHBoaSkgPCBIQUxGX1BJKSB7XG4gICAgICB2YXIgc2luX3BoaSA9IE1hdGguc2luKHBoaSk7XG4gICAgICB2YXIgY29zX3BoaSA9IE1hdGguY29zKHBoaSk7XG4gICAgICB2YXIgdGFuX3BoaSA9IE1hdGguYWJzKGNvc19waGkpID4gRVBTTE4gPyBNYXRoLnRhbihwaGkpIDogMDtcbiAgICAgIHZhciBjID0gdGhpcy5lcDIgKiBNYXRoLnBvdyhjb3NfcGhpLCAyKTtcbiAgICAgIHZhciBjcyA9IE1hdGgucG93KGMsIDIpO1xuICAgICAgdmFyIHQgPSBNYXRoLnBvdyh0YW5fcGhpLCAyKTtcbiAgICAgIHZhciB0cyA9IE1hdGgucG93KHQsIDIpO1xuICAgICAgY29uID0gMSAtIHRoaXMuZXMgKiBNYXRoLnBvdyhzaW5fcGhpLCAyKTtcbiAgICAgIHZhciBkID0geCAqIE1hdGguc3FydChjb24pIC8gdGhpcy5rMDtcbiAgICAgIHZhciBkcyA9IE1hdGgucG93KGQsIDIpO1xuICAgICAgY29uID0gY29uICogdGFuX3BoaTtcblxuICAgICAgbGF0ID0gcGhpIC0gKGNvbiAqIGRzIC8gKDEgLSB0aGlzLmVzKSkgKiAwLjUgKiAoMSAtXG4gICAgICAgIGRzIC8gMTIgKiAoNSArIDMgKiB0IC0gOSAqIGMgKiB0ICsgYyAtIDQgKiBjcyAtXG4gICAgICAgIGRzIC8gMzAgKiAoNjEgKyA5MCAqIHQgLSAyNTIgKiBjICogdCArIDQ1ICogdHMgKyA0NiAqIGMgLVxuICAgICAgICBkcyAvIDU2ICogKDEzODUgKyAzNjMzICogdCArIDQwOTUgKiB0cyArIDE1NzQgKiB0cyAqIHQpKSkpO1xuXG4gICAgICBsb24gPSBhZGp1c3RfbG9uKHRoaXMubG9uZzAgKyAoZCAqICgxIC1cbiAgICAgICAgZHMgLyA2ICogKDEgKyAyICogdCArIGMgLVxuICAgICAgICBkcyAvIDIwICogKDUgKyAyOCAqIHQgKyAyNCAqIHRzICsgOCAqIGMgKiB0ICsgNiAqIGMgLVxuICAgICAgICBkcyAvIDQyICogKDYxICsgNjYyICogdCArIDEzMjAgKiB0cyArIDcyMCAqIHRzICogdCkpKSkgLyBjb3NfcGhpKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGF0ID0gSEFMRl9QSSAqIHNpZ24oeSk7XG4gICAgICBsb24gPSAwO1xuICAgIH1cbiAgfVxuXG4gIHAueCA9IGxvbjtcbiAgcC55ID0gbGF0O1xuXG4gIHJldHVybiBwO1xufVxuXG5leHBvcnQgdmFyIG5hbWVzID0gW1wiVHJhbnN2ZXJzZV9NZXJjYXRvclwiLCBcIlRyYW5zdmVyc2UgTWVyY2F0b3JcIiwgXCJ0bWVyY1wiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiaW1wb3J0IGFkanVzdF96b25lIGZyb20gJy4uL2NvbW1vbi9hZGp1c3Rfem9uZSc7XG5pbXBvcnQgZXRtZXJjIGZyb20gJy4vZXRtZXJjJztcbmV4cG9ydCB2YXIgZGVwZW5kc09uID0gJ2V0bWVyYyc7XG5pbXBvcnQge0QyUn0gZnJvbSAnLi4vY29uc3RhbnRzL3ZhbHVlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciB6b25lID0gYWRqdXN0X3pvbmUodGhpcy56b25lLCB0aGlzLmxvbmcwKTtcbiAgaWYgKHpvbmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biB1dG0gem9uZScpO1xuICB9XG4gIHRoaXMubGF0MCA9IDA7XG4gIHRoaXMubG9uZzAgPSAgKCg2ICogTWF0aC5hYnMoem9uZSkpIC0gMTgzKSAqIEQyUjtcbiAgdGhpcy54MCA9IDUwMDAwMDtcbiAgdGhpcy55MCA9IHRoaXMudXRtU291dGggPyAxMDAwMDAwMCA6IDA7XG4gIHRoaXMuazAgPSAwLjk5OTY7XG5cbiAgZXRtZXJjLmluaXQuYXBwbHkodGhpcyk7XG4gIHRoaXMuZm9yd2FyZCA9IGV0bWVyYy5mb3J3YXJkO1xuICB0aGlzLmludmVyc2UgPSBldG1lcmMuaW52ZXJzZTtcbn1cblxuZXhwb3J0IHZhciBuYW1lcyA9IFtcIlVuaXZlcnNhbCBUcmFuc3ZlcnNlIE1lcmNhdG9yIFN5c3RlbVwiLCBcInV0bVwiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgbmFtZXM6IG5hbWVzLFxuICBkZXBlbmRzT246IGRlcGVuZHNPblxufTtcbiIsImltcG9ydCBhZGp1c3RfbG9uIGZyb20gJy4uL2NvbW1vbi9hZGp1c3RfbG9uJztcblxuaW1wb3J0IHtIQUxGX1BJLCBFUFNMTn0gZnJvbSAnLi4vY29uc3RhbnRzL3ZhbHVlcyc7XG5cbmltcG9ydCBhc2lueiBmcm9tICcuLi9jb21tb24vYXNpbnonO1xuXG4vKiBJbml0aWFsaXplIHRoZSBWYW4gRGVyIEdyaW50ZW4gcHJvamVjdGlvblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAvL3RoaXMuUiA9IDYzNzA5OTc7IC8vUmFkaXVzIG9mIGVhcnRoXG4gIHRoaXMuUiA9IHRoaXMuYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmQocCkge1xuXG4gIHZhciBsb24gPSBwLng7XG4gIHZhciBsYXQgPSBwLnk7XG5cbiAgLyogRm9yd2FyZCBlcXVhdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLSovXG4gIHZhciBkbG9uID0gYWRqdXN0X2xvbihsb24gLSB0aGlzLmxvbmcwKTtcbiAgdmFyIHgsIHk7XG5cbiAgaWYgKE1hdGguYWJzKGxhdCkgPD0gRVBTTE4pIHtcbiAgICB4ID0gdGhpcy54MCArIHRoaXMuUiAqIGRsb247XG4gICAgeSA9IHRoaXMueTA7XG4gIH1cbiAgdmFyIHRoZXRhID0gYXNpbnooMiAqIE1hdGguYWJzKGxhdCAvIE1hdGguUEkpKTtcbiAgaWYgKChNYXRoLmFicyhkbG9uKSA8PSBFUFNMTikgfHwgKE1hdGguYWJzKE1hdGguYWJzKGxhdCkgLSBIQUxGX1BJKSA8PSBFUFNMTikpIHtcbiAgICB4ID0gdGhpcy54MDtcbiAgICBpZiAobGF0ID49IDApIHtcbiAgICAgIHkgPSB0aGlzLnkwICsgTWF0aC5QSSAqIHRoaXMuUiAqIE1hdGgudGFuKDAuNSAqIHRoZXRhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB5ID0gdGhpcy55MCArIE1hdGguUEkgKiB0aGlzLlIgKiAtTWF0aC50YW4oMC41ICogdGhldGEpO1xuICAgIH1cbiAgICAvLyAgcmV0dXJuKE9LKTtcbiAgfVxuICB2YXIgYWwgPSAwLjUgKiBNYXRoLmFicygoTWF0aC5QSSAvIGRsb24pIC0gKGRsb24gLyBNYXRoLlBJKSk7XG4gIHZhciBhc3EgPSBhbCAqIGFsO1xuICB2YXIgc2ludGggPSBNYXRoLnNpbih0aGV0YSk7XG4gIHZhciBjb3N0aCA9IE1hdGguY29zKHRoZXRhKTtcblxuICB2YXIgZyA9IGNvc3RoIC8gKHNpbnRoICsgY29zdGggLSAxKTtcbiAgdmFyIGdzcSA9IGcgKiBnO1xuICB2YXIgbSA9IGcgKiAoMiAvIHNpbnRoIC0gMSk7XG4gIHZhciBtc3EgPSBtICogbTtcbiAgdmFyIGNvbiA9IE1hdGguUEkgKiB0aGlzLlIgKiAoYWwgKiAoZyAtIG1zcSkgKyBNYXRoLnNxcnQoYXNxICogKGcgLSBtc3EpICogKGcgLSBtc3EpIC0gKG1zcSArIGFzcSkgKiAoZ3NxIC0gbXNxKSkpIC8gKG1zcSArIGFzcSk7XG4gIGlmIChkbG9uIDwgMCkge1xuICAgIGNvbiA9IC1jb247XG4gIH1cbiAgeCA9IHRoaXMueDAgKyBjb247XG4gIC8vY29uID0gTWF0aC5hYnMoY29uIC8gKE1hdGguUEkgKiB0aGlzLlIpKTtcbiAgdmFyIHEgPSBhc3EgKyBnO1xuICBjb24gPSBNYXRoLlBJICogdGhpcy5SICogKG0gKiBxIC0gYWwgKiBNYXRoLnNxcnQoKG1zcSArIGFzcSkgKiAoYXNxICsgMSkgLSBxICogcSkpIC8gKG1zcSArIGFzcSk7XG4gIGlmIChsYXQgPj0gMCkge1xuICAgIC8veSA9IHRoaXMueTAgKyBNYXRoLlBJICogdGhpcy5SICogTWF0aC5zcXJ0KDEgLSBjb24gKiBjb24gLSAyICogYWwgKiBjb24pO1xuICAgIHkgPSB0aGlzLnkwICsgY29uO1xuICB9XG4gIGVsc2Uge1xuICAgIC8veSA9IHRoaXMueTAgLSBNYXRoLlBJICogdGhpcy5SICogTWF0aC5zcXJ0KDEgLSBjb24gKiBjb24gLSAyICogYWwgKiBjb24pO1xuICAgIHkgPSB0aGlzLnkwIC0gY29uO1xuICB9XG4gIHAueCA9IHg7XG4gIHAueSA9IHk7XG4gIHJldHVybiBwO1xufVxuXG4vKiBWYW4gRGVyIEdyaW50ZW4gaW52ZXJzZSBlcXVhdGlvbnMtLW1hcHBpbmcgeCx5IHRvIGxhdC9sb25nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShwKSB7XG4gIHZhciBsb24sIGxhdDtcbiAgdmFyIHh4LCB5eSwgeHlzLCBjMSwgYzIsIGMzO1xuICB2YXIgYTE7XG4gIHZhciBtMTtcbiAgdmFyIGNvbjtcbiAgdmFyIHRoMTtcbiAgdmFyIGQ7XG5cbiAgLyogaW52ZXJzZSBlcXVhdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLSovXG4gIHAueCAtPSB0aGlzLngwO1xuICBwLnkgLT0gdGhpcy55MDtcbiAgY29uID0gTWF0aC5QSSAqIHRoaXMuUjtcbiAgeHggPSBwLnggLyBjb247XG4gIHl5ID0gcC55IC8gY29uO1xuICB4eXMgPSB4eCAqIHh4ICsgeXkgKiB5eTtcbiAgYzEgPSAtTWF0aC5hYnMoeXkpICogKDEgKyB4eXMpO1xuICBjMiA9IGMxIC0gMiAqIHl5ICogeXkgKyB4eCAqIHh4O1xuICBjMyA9IC0yICogYzEgKyAxICsgMiAqIHl5ICogeXkgKyB4eXMgKiB4eXM7XG4gIGQgPSB5eSAqIHl5IC8gYzMgKyAoMiAqIGMyICogYzIgKiBjMiAvIGMzIC8gYzMgLyBjMyAtIDkgKiBjMSAqIGMyIC8gYzMgLyBjMykgLyAyNztcbiAgYTEgPSAoYzEgLSBjMiAqIGMyIC8gMyAvIGMzKSAvIGMzO1xuICBtMSA9IDIgKiBNYXRoLnNxcnQoLWExIC8gMyk7XG4gIGNvbiA9ICgoMyAqIGQpIC8gYTEpIC8gbTE7XG4gIGlmIChNYXRoLmFicyhjb24pID4gMSkge1xuICAgIGlmIChjb24gPj0gMCkge1xuICAgICAgY29uID0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb24gPSAtMTtcbiAgICB9XG4gIH1cbiAgdGgxID0gTWF0aC5hY29zKGNvbikgLyAzO1xuICBpZiAocC55ID49IDApIHtcbiAgICBsYXQgPSAoLW0xICogTWF0aC5jb3ModGgxICsgTWF0aC5QSSAvIDMpIC0gYzIgLyAzIC8gYzMpICogTWF0aC5QSTtcbiAgfVxuICBlbHNlIHtcbiAgICBsYXQgPSAtKC1tMSAqIE1hdGguY29zKHRoMSArIE1hdGguUEkgLyAzKSAtIGMyIC8gMyAvIGMzKSAqIE1hdGguUEk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoeHgpIDwgRVBTTE4pIHtcbiAgICBsb24gPSB0aGlzLmxvbmcwO1xuICB9XG4gIGVsc2Uge1xuICAgIGxvbiA9IGFkanVzdF9sb24odGhpcy5sb25nMCArIE1hdGguUEkgKiAoeHlzIC0gMSArIE1hdGguc3FydCgxICsgMiAqICh4eCAqIHh4IC0geXkgKiB5eSkgKyB4eXMgKiB4eXMpKSAvIDIgLyB4eCk7XG4gIH1cblxuICBwLnggPSBsb247XG4gIHAueSA9IGxhdDtcbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCB2YXIgbmFtZXMgPSBbXCJWYW5fZGVyX0dyaW50ZW5fSVwiLCBcIlZhbkRlckdyaW50ZW5cIiwgXCJ2YW5kZ1wiXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogaW5pdCxcbiAgZm9yd2FyZDogZm9yd2FyZCxcbiAgaW52ZXJzZTogaW52ZXJzZSxcbiAgbmFtZXM6IG5hbWVzXG59O1xuIiwiaW1wb3J0IHtEMlIsIFIyRCwgUEpEXzNQQVJBTSwgUEpEXzdQQVJBTX0gZnJvbSAnLi9jb25zdGFudHMvdmFsdWVzJztcbmltcG9ydCBkYXR1bV90cmFuc2Zvcm0gZnJvbSAnLi9kYXR1bV90cmFuc2Zvcm0nO1xuaW1wb3J0IGFkanVzdF9heGlzIGZyb20gJy4vYWRqdXN0X2F4aXMnO1xuaW1wb3J0IHByb2ogZnJvbSAnLi9Qcm9qJztcbmltcG9ydCB0b1BvaW50IGZyb20gJy4vY29tbW9uL3RvUG9pbnQnO1xuaW1wb3J0IGNoZWNrU2FuaXR5IGZyb20gJy4vY2hlY2tTYW5pdHknO1xuXG5mdW5jdGlvbiBjaGVja05vdFdHUyhzb3VyY2UsIGRlc3QpIHtcbiAgcmV0dXJuICgoc291cmNlLmRhdHVtLmRhdHVtX3R5cGUgPT09IFBKRF8zUEFSQU0gfHwgc291cmNlLmRhdHVtLmRhdHVtX3R5cGUgPT09IFBKRF83UEFSQU0pICYmIGRlc3QuZGF0dW1Db2RlICE9PSAnV0dTODQnKSB8fCAoKGRlc3QuZGF0dW0uZGF0dW1fdHlwZSA9PT0gUEpEXzNQQVJBTSB8fCBkZXN0LmRhdHVtLmRhdHVtX3R5cGUgPT09IFBKRF83UEFSQU0pICYmIHNvdXJjZS5kYXR1bUNvZGUgIT09ICdXR1M4NCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm0oc291cmNlLCBkZXN0LCBwb2ludCkge1xuICB2YXIgd2dzODQ7XG4gIGlmIChBcnJheS5pc0FycmF5KHBvaW50KSkge1xuICAgIHBvaW50ID0gdG9Qb2ludChwb2ludCk7XG4gIH1cbiAgY2hlY2tTYW5pdHkocG9pbnQpO1xuICAvLyBXb3JrYXJvdW5kIGZvciBkYXR1bSBzaGlmdHMgdG93Z3M4NCwgaWYgZWl0aGVyIHNvdXJjZSBvciBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uIGlzIG5vdCB3Z3M4NFxuICBpZiAoc291cmNlLmRhdHVtICYmIGRlc3QuZGF0dW0gJiYgY2hlY2tOb3RXR1Moc291cmNlLCBkZXN0KSkge1xuICAgIHdnczg0ID0gbmV3IHByb2ooJ1dHUzg0Jyk7XG4gICAgcG9pbnQgPSB0cmFuc2Zvcm0oc291cmNlLCB3Z3M4NCwgcG9pbnQpO1xuICAgIHNvdXJjZSA9IHdnczg0O1xuICB9XG4gIC8vIERHUiwgMjAxMC8xMS8xMlxuICBpZiAoc291cmNlLmF4aXMgIT09ICdlbnUnKSB7XG4gICAgcG9pbnQgPSBhZGp1c3RfYXhpcyhzb3VyY2UsIGZhbHNlLCBwb2ludCk7XG4gIH1cbiAgLy8gVHJhbnNmb3JtIHNvdXJjZSBwb2ludHMgdG8gbG9uZy9sYXQsIGlmIHRoZXkgYXJlbid0IGFscmVhZHkuXG4gIGlmIChzb3VyY2UucHJvak5hbWUgPT09ICdsb25nbGF0Jykge1xuICAgIHBvaW50ID0ge1xuICAgICAgeDogcG9pbnQueCAqIEQyUixcbiAgICAgIHk6IHBvaW50LnkgKiBEMlIsXG4gICAgICB6OiBwb2ludC56IHx8IDBcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGlmIChzb3VyY2UudG9fbWV0ZXIpIHtcbiAgICAgIHBvaW50ID0ge1xuICAgICAgICB4OiBwb2ludC54ICogc291cmNlLnRvX21ldGVyLFxuICAgICAgICB5OiBwb2ludC55ICogc291cmNlLnRvX21ldGVyLFxuICAgICAgICB6OiBwb2ludC56IHx8IDBcbiAgICAgIH07XG4gICAgfVxuICAgIHBvaW50ID0gc291cmNlLmludmVyc2UocG9pbnQpOyAvLyBDb252ZXJ0IENhcnRlc2lhbiB0byBsb25nbGF0XG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvLyBBZGp1c3QgZm9yIHRoZSBwcmltZSBtZXJpZGlhbiBpZiBuZWNlc3NhcnlcbiAgaWYgKHNvdXJjZS5mcm9tX2dyZWVud2ljaCkge1xuICAgIHBvaW50LnggKz0gc291cmNlLmZyb21fZ3JlZW53aWNoO1xuICB9XG5cbiAgLy8gQ29udmVydCBkYXR1bXMgaWYgbmVlZGVkLCBhbmQgaWYgcG9zc2libGUuXG4gIHBvaW50ID0gZGF0dW1fdHJhbnNmb3JtKHNvdXJjZS5kYXR1bSwgZGVzdC5kYXR1bSwgcG9pbnQpO1xuXG4gIC8vIEFkanVzdCBmb3IgdGhlIHByaW1lIG1lcmlkaWFuIGlmIG5lY2Vzc2FyeVxuICBpZiAoZGVzdC5mcm9tX2dyZWVud2ljaCkge1xuICAgIHBvaW50ID0ge1xuICAgICAgeDogcG9pbnQueCAtIGRlc3QuZnJvbV9ncmVlbndpY2gsXG4gICAgICB5OiBwb2ludC55LFxuICAgICAgejogcG9pbnQueiB8fCAwXG4gICAgfTtcbiAgfVxuXG4gIGlmIChkZXN0LnByb2pOYW1lID09PSAnbG9uZ2xhdCcpIHtcbiAgICAvLyBjb252ZXJ0IHJhZGlhbnMgdG8gZGVjaW1hbCBkZWdyZWVzXG4gICAgcG9pbnQgPSB7XG4gICAgICB4OiBwb2ludC54ICogUjJELFxuICAgICAgeTogcG9pbnQueSAqIFIyRCxcbiAgICAgIHo6IHBvaW50LnogfHwgMFxuICAgIH07XG4gIH0gZWxzZSB7IC8vIGVsc2UgcHJvamVjdFxuICAgIHBvaW50ID0gZGVzdC5mb3J3YXJkKHBvaW50KTtcbiAgICBpZiAoZGVzdC50b19tZXRlcikge1xuICAgICAgcG9pbnQgPSB7XG4gICAgICAgIHg6IHBvaW50LnggLyBkZXN0LnRvX21ldGVyLFxuICAgICAgICB5OiBwb2ludC55IC8gZGVzdC50b19tZXRlcixcbiAgICAgICAgejogcG9pbnQueiB8fCAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIERHUiwgMjAxMC8xMS8xMlxuICBpZiAoZGVzdC5heGlzICE9PSAnZW51Jykge1xuICAgIHJldHVybiBhZGp1c3RfYXhpcyhkZXN0LCB0cnVlLCBwb2ludCk7XG4gIH1cblxuICByZXR1cm4gcG9pbnQ7XG59XG4iLCJpbXBvcnQgdG1lcmMgZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvdG1lcmMnO1xuaW1wb3J0IGV0bWVyYyBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9ldG1lcmMnO1xuaW1wb3J0IHV0bSBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy91dG0nO1xuaW1wb3J0IHN0ZXJlYSBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9zdGVyZWEnO1xuaW1wb3J0IHN0ZXJlIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL3N0ZXJlJztcbmltcG9ydCBzb21lcmMgZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvc29tZXJjJztcbmltcG9ydCBvbWVyYyBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9vbWVyYyc7XG5pbXBvcnQgbGNjIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL2xjYyc7XG5pbXBvcnQga3JvdmFrIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL2tyb3Zhayc7XG5pbXBvcnQgY2FzcyBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9jYXNzJztcbmltcG9ydCBsYWVhIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL2xhZWEnO1xuaW1wb3J0IGFlYSBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9hZWEnO1xuaW1wb3J0IGdub20gZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvZ25vbSc7XG5pbXBvcnQgY2VhIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL2NlYSc7XG5pbXBvcnQgZXFjIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL2VxYyc7XG5pbXBvcnQgcG9seSBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9wb2x5JztcbmltcG9ydCBuem1nIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL256bWcnO1xuaW1wb3J0IG1pbGwgZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvbWlsbCc7XG5pbXBvcnQgc2ludSBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9zaW51JztcbmltcG9ydCBtb2xsIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL21vbGwnO1xuaW1wb3J0IGVxZGMgZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvZXFkYyc7XG5pbXBvcnQgdmFuZGcgZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvdmFuZGcnO1xuaW1wb3J0IGFlcWQgZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvYWVxZCc7XG5pbXBvcnQgb3J0aG8gZnJvbSAnLi9saWIvcHJvamVjdGlvbnMvb3J0aG8nO1xuaW1wb3J0IHFzYyBmcm9tICcuL2xpYi9wcm9qZWN0aW9ucy9xc2MnO1xuaW1wb3J0IHJvYmluIGZyb20gJy4vbGliL3Byb2plY3Rpb25zL3JvYmluJztcbmltcG9ydCBnZW9jZW50IGZyb20gJy4vbGliL3Byb2plY3Rpb25zL2dlb2NlbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvajQpe1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZCh0bWVyYyk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKGV0bWVyYyk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKHV0bSk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKHN0ZXJlYSk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKHN0ZXJlKTtcbiAgcHJvajQuUHJvai5wcm9qZWN0aW9ucy5hZGQoc29tZXJjKTtcbiAgcHJvajQuUHJvai5wcm9qZWN0aW9ucy5hZGQob21lcmMpO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChsY2MpO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChrcm92YWspO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChjYXNzKTtcbiAgcHJvajQuUHJvai5wcm9qZWN0aW9ucy5hZGQobGFlYSk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKGFlYSk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKGdub20pO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChjZWEpO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChlcWMpO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChwb2x5KTtcbiAgcHJvajQuUHJvai5wcm9qZWN0aW9ucy5hZGQobnptZyk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKG1pbGwpO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChzaW51KTtcbiAgcHJvajQuUHJvai5wcm9qZWN0aW9ucy5hZGQobW9sbCk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKGVxZGMpO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZCh2YW5kZyk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKGFlcWQpO1xuICBwcm9qNC5Qcm9qLnByb2plY3Rpb25zLmFkZChvcnRobyk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKHFzYyk7XG4gIHByb2o0LlByb2oucHJvamVjdGlvbnMuYWRkKHJvYmluKTtcbiAgcHJvajQuUHJvai5wcm9qZWN0aW9ucy5hZGQoZ2VvY2VudCk7XG59IiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XHJcblx0dmFyIEwsIHByb2o0O1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFsnbGVhZmxldCcsICdwcm9qNCddLCBmYWN0b3J5KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gTm9kZS9Db21tb25KU1xyXG5cdFx0TCA9IHJlcXVpcmUoJ2xlYWZsZXQnKTtcclxuXHRcdHByb2o0ID0gcmVxdWlyZSgncHJvajQnKTtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShMLCBwcm9qNCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cuTCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5wcm9qNCA9PT0gJ3VuZGVmaW5lZCcpXHJcblx0XHRcdHRocm93ICdMZWFmbGV0IGFuZCBwcm9qNCBtdXN0IGJlIGxvYWRlZCBmaXJzdCc7XHJcblx0XHRmYWN0b3J5KHdpbmRvdy5MLCB3aW5kb3cucHJvajQpO1xyXG5cdH1cclxufShmdW5jdGlvbiAoTCwgcHJvajQpIHtcclxuXHRpZiAocHJvajQuX19lc01vZHVsZSAmJiBwcm9qNC5kZWZhdWx0KSB7XHJcblx0XHQvLyBJZiBwcm9qNCB3YXMgYnVuZGxlZCBhcyBhbiBFUzYgbW9kdWxlLCB1bndyYXAgaXQgdG8gZ2V0XHJcblx0XHQvLyB0byB0aGUgYWN0dWFsIG1haW4gcHJvajQgb2JqZWN0LlxyXG5cdFx0Ly8gU2VlIGRpc2N1c3Npb24gaW4gaHR0cHM6Ly9naXRodWIuY29tL2thcnRlbmEvUHJvajRMZWFmbGV0L3B1bGwvMTQ3XHJcblx0XHRwcm9qNCA9IHByb2o0LmRlZmF1bHQ7XHJcblx0fVxyXG4gXHJcblx0TC5Qcm9qID0ge307XHJcblxyXG5cdEwuUHJvai5faXNQcm9qNE9iaiA9IGZ1bmN0aW9uKGEpIHtcclxuXHRcdHJldHVybiAodHlwZW9mIGEuaW52ZXJzZSAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuXHRcdFx0dHlwZW9mIGEuZm9yd2FyZCAhPT0gJ3VuZGVmaW5lZCcpO1xyXG5cdH07XHJcblxyXG5cdEwuUHJvai5Qcm9qZWN0aW9uID0gTC5DbGFzcy5leHRlbmQoe1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oY29kZSwgZGVmLCBib3VuZHMpIHtcclxuXHRcdFx0dmFyIGlzUDQgPSBMLlByb2ouX2lzUHJvajRPYmooY29kZSk7XHJcblx0XHRcdHRoaXMuX3Byb2ogPSBpc1A0ID8gY29kZSA6IHRoaXMuX3Byb2pGcm9tQ29kZURlZihjb2RlLCBkZWYpO1xyXG5cdFx0XHR0aGlzLmJvdW5kcyA9IGlzUDQgPyBkZWYgOiBib3VuZHM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHByb2plY3Q6IGZ1bmN0aW9uIChsYXRsbmcpIHtcclxuXHRcdFx0dmFyIHBvaW50ID0gdGhpcy5fcHJvai5mb3J3YXJkKFtsYXRsbmcubG5nLCBsYXRsbmcubGF0XSk7XHJcblx0XHRcdHJldHVybiBuZXcgTC5Qb2ludChwb2ludFswXSwgcG9pbnRbMV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1bnByb2plY3Q6IGZ1bmN0aW9uIChwb2ludCwgdW5ib3VuZGVkKSB7XHJcblx0XHRcdHZhciBwb2ludDIgPSB0aGlzLl9wcm9qLmludmVyc2UoW3BvaW50LngsIHBvaW50LnldKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBMLkxhdExuZyhwb2ludDJbMV0sIHBvaW50MlswXSwgdW5ib3VuZGVkKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X3Byb2pGcm9tQ29kZURlZjogZnVuY3Rpb24oY29kZSwgZGVmKSB7XHJcblx0XHRcdGlmIChkZWYpIHtcclxuXHRcdFx0XHRwcm9qNC5kZWZzKGNvZGUsIGRlZik7XHJcblx0XHRcdH0gZWxzZSBpZiAocHJvajQuZGVmc1tjb2RlXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dmFyIHVybiA9IGNvZGUuc3BsaXQoJzonKTtcclxuXHRcdFx0XHRpZiAodXJuLmxlbmd0aCA+IDMpIHtcclxuXHRcdFx0XHRcdGNvZGUgPSB1cm5bdXJuLmxlbmd0aCAtIDNdICsgJzonICsgdXJuW3Vybi5sZW5ndGggLSAxXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHByb2o0LmRlZnNbY29kZV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dGhyb3cgJ05vIHByb2plY3Rpb24gZGVmaW5pdGlvbiBmb3IgY29kZSAnICsgY29kZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBwcm9qNChjb2RlKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0TC5Qcm9qLkNSUyA9IEwuQ2xhc3MuZXh0ZW5kKHtcclxuXHRcdGluY2x1ZGVzOiBMLkNSUyxcclxuXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHRyYW5zZm9ybWF0aW9uOiBuZXcgTC5UcmFuc2Zvcm1hdGlvbigxLCAwLCAtMSwgMClcclxuXHRcdH0sXHJcblxyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oYSwgYiwgYykge1xyXG5cdFx0XHR2YXIgY29kZSxcclxuXHRcdFx0ICAgIHByb2osXHJcblx0XHRcdCAgICBkZWYsXHJcblx0XHRcdCAgICBvcHRpb25zO1xyXG5cclxuXHRcdFx0aWYgKEwuUHJvai5faXNQcm9qNE9iaihhKSkge1xyXG5cdFx0XHRcdHByb2ogPSBhO1xyXG5cdFx0XHRcdGNvZGUgPSBwcm9qLnNyc0NvZGU7XHJcblx0XHRcdFx0b3B0aW9ucyA9IGIgfHwge307XHJcblxyXG5cdFx0XHRcdHRoaXMucHJvamVjdGlvbiA9IG5ldyBMLlByb2ouUHJvamVjdGlvbihwcm9qLCBvcHRpb25zLmJvdW5kcyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29kZSA9IGE7XHJcblx0XHRcdFx0ZGVmID0gYjtcclxuXHRcdFx0XHRvcHRpb25zID0gYyB8fCB7fTtcclxuXHRcdFx0XHR0aGlzLnByb2plY3Rpb24gPSBuZXcgTC5Qcm9qLlByb2plY3Rpb24oY29kZSwgZGVmLCBvcHRpb25zLmJvdW5kcyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0XHR0aGlzLmNvZGUgPSBjb2RlO1xyXG5cdFx0XHR0aGlzLnRyYW5zZm9ybWF0aW9uID0gdGhpcy5vcHRpb25zLnRyYW5zZm9ybWF0aW9uO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmlnaW4pIHtcclxuXHRcdFx0XHR0aGlzLnRyYW5zZm9ybWF0aW9uID1cclxuXHRcdFx0XHRcdG5ldyBMLlRyYW5zZm9ybWF0aW9uKDEsIC10aGlzLm9wdGlvbnMub3JpZ2luWzBdLFxyXG5cdFx0XHRcdFx0XHQtMSwgdGhpcy5vcHRpb25zLm9yaWdpblsxXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2NhbGVzKSB7XHJcblx0XHRcdFx0dGhpcy5fc2NhbGVzID0gdGhpcy5vcHRpb25zLnNjYWxlcztcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucmVzb2x1dGlvbnMpIHtcclxuXHRcdFx0XHR0aGlzLl9zY2FsZXMgPSBbXTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gdGhpcy5vcHRpb25zLnJlc29sdXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJlc29sdXRpb25zW2ldKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3NjYWxlc1tpXSA9IDEgLyB0aGlzLm9wdGlvbnMucmVzb2x1dGlvbnNbaV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmluZmluaXRlID0gIXRoaXMub3B0aW9ucy5ib3VuZHM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzY2FsZTogZnVuY3Rpb24oem9vbSkge1xyXG5cdFx0XHR2YXIgaVpvb20gPSBNYXRoLmZsb29yKHpvb20pLFxyXG5cdFx0XHRcdGJhc2VTY2FsZSxcclxuXHRcdFx0XHRuZXh0U2NhbGUsXHJcblx0XHRcdFx0c2NhbGVEaWZmLFxyXG5cdFx0XHRcdHpEaWZmO1xyXG5cdFx0XHRpZiAoem9vbSA9PT0gaVpvb20pIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc2NhbGVzW3pvb21dO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIE5vbi1pbnRlZ2VyIHpvb20sIGludGVycG9sYXRlXHJcblx0XHRcdFx0YmFzZVNjYWxlID0gdGhpcy5fc2NhbGVzW2lab29tXTtcclxuXHRcdFx0XHRuZXh0U2NhbGUgPSB0aGlzLl9zY2FsZXNbaVpvb20gKyAxXTtcclxuXHRcdFx0XHRzY2FsZURpZmYgPSBuZXh0U2NhbGUgLSBiYXNlU2NhbGU7XHJcblx0XHRcdFx0ekRpZmYgPSAoem9vbSAtIGlab29tKTtcclxuXHRcdFx0XHRyZXR1cm4gYmFzZVNjYWxlICsgc2NhbGVEaWZmICogekRpZmY7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0em9vbTogZnVuY3Rpb24oc2NhbGUpIHtcclxuXHRcdFx0Ly8gRmluZCBjbG9zZXN0IG51bWJlciBpbiB0aGlzLl9zY2FsZXMsIGRvd25cclxuXHRcdFx0dmFyIGRvd25TY2FsZSA9IHRoaXMuX2Nsb3Nlc3RFbGVtZW50KHRoaXMuX3NjYWxlcywgc2NhbGUpLFxyXG5cdFx0XHRcdGRvd25ab29tID0gdGhpcy5fc2NhbGVzLmluZGV4T2YoZG93blNjYWxlKSxcclxuXHRcdFx0XHRuZXh0U2NhbGUsXHJcblx0XHRcdFx0bmV4dFpvb20sXHJcblx0XHRcdFx0c2NhbGVEaWZmO1xyXG5cdFx0XHQvLyBDaGVjayBpZiBzY2FsZSBpcyBkb3duU2NhbGUgPT4gcmV0dXJuIGFycmF5IGluZGV4XHJcblx0XHRcdGlmIChzY2FsZSA9PT0gZG93blNjYWxlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRvd25ab29tO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkb3duU2NhbGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiAtSW5maW5pdHk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gSW50ZXJwb2xhdGVcclxuXHRcdFx0bmV4dFpvb20gPSBkb3duWm9vbSArIDE7XHJcblx0XHRcdG5leHRTY2FsZSA9IHRoaXMuX3NjYWxlc1tuZXh0Wm9vbV07XHJcblx0XHRcdGlmIChuZXh0U2NhbGUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHJldHVybiBJbmZpbml0eTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzY2FsZURpZmYgPSBuZXh0U2NhbGUgLSBkb3duU2NhbGU7XHJcblx0XHRcdHJldHVybiAoc2NhbGUgLSBkb3duU2NhbGUpIC8gc2NhbGVEaWZmICsgZG93blpvb207XHJcblx0XHR9LFxyXG5cclxuXHRcdGRpc3RhbmNlOiBMLkNSUy5FYXJ0aC5kaXN0YW5jZSxcclxuXHJcblx0XHRSOiBMLkNSUy5FYXJ0aC5SLFxyXG5cclxuXHRcdC8qIEdldCB0aGUgY2xvc2VzdCBsb3dlc3QgZWxlbWVudCBpbiBhbiBhcnJheSAqL1xyXG5cdFx0X2Nsb3Nlc3RFbGVtZW50OiBmdW5jdGlvbihhcnJheSwgZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgbG93O1xyXG5cdFx0XHRmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XHJcblx0XHRcdFx0aWYgKGFycmF5W2ldIDw9IGVsZW1lbnQgJiYgKGxvdyA9PT0gdW5kZWZpbmVkIHx8IGxvdyA8IGFycmF5W2ldKSkge1xyXG5cdFx0XHRcdFx0bG93ID0gYXJyYXlbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBsb3c7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdEwuUHJvai5HZW9KU09OID0gTC5HZW9KU09OLmV4dGVuZCh7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbihnZW9qc29uLCBvcHRpb25zKSB7XHJcblx0XHRcdHRoaXMuX2NhbGxMZXZlbCA9IDA7XHJcblx0XHRcdEwuR2VvSlNPTi5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGdlb2pzb24sIG9wdGlvbnMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhZGREYXRhOiBmdW5jdGlvbihnZW9qc29uKSB7XHJcblx0XHRcdHZhciBjcnM7XHJcblxyXG5cdFx0XHRpZiAoZ2VvanNvbikge1xyXG5cdFx0XHRcdGlmIChnZW9qc29uLmNycyAmJiBnZW9qc29uLmNycy50eXBlID09PSAnbmFtZScpIHtcclxuXHRcdFx0XHRcdGNycyA9IG5ldyBMLlByb2ouQ1JTKGdlb2pzb24uY3JzLnByb3BlcnRpZXMubmFtZSk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChnZW9qc29uLmNycyAmJiBnZW9qc29uLmNycy50eXBlKSB7XHJcblx0XHRcdFx0XHRjcnMgPSBuZXcgTC5Qcm9qLkNSUyhnZW9qc29uLmNycy50eXBlICsgJzonICsgZ2VvanNvbi5jcnMucHJvcGVydGllcy5jb2RlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChjcnMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLmNvb3Jkc1RvTGF0TG5nID0gZnVuY3Rpb24oY29vcmRzKSB7XHJcblx0XHRcdFx0XHRcdHZhciBwb2ludCA9IEwucG9pbnQoY29vcmRzWzBdLCBjb29yZHNbMV0pO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY3JzLnByb2plY3Rpb24udW5wcm9qZWN0KHBvaW50KTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBCYXNlIGNsYXNzJyBhZGREYXRhIG1pZ2h0IGNhbGwgdXMgcmVjdXJzaXZlbHksIGJ1dFxyXG5cdFx0XHQvLyBDUlMgc2hvdWxkbid0IGJlIGNsZWFyZWQgaW4gdGhhdCBjYXNlLCBzaW5jZSBDUlMgYXBwbGllc1xyXG5cdFx0XHQvLyB0byB0aGUgd2hvbGUgR2VvSlNPTiwgaW5sdWRpbmcgc3ViLWZlYXR1cmVzLlxyXG5cdFx0XHR0aGlzLl9jYWxsTGV2ZWwrKztcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRMLkdlb0pTT04ucHJvdG90eXBlLmFkZERhdGEuY2FsbCh0aGlzLCBnZW9qc29uKTtcclxuXHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHR0aGlzLl9jYWxsTGV2ZWwtLTtcclxuXHRcdFx0XHRpZiAodGhpcy5fY2FsbExldmVsID09PSAwKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vcHRpb25zLmNvb3Jkc1RvTGF0TG5nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRMLlByb2ouZ2VvSnNvbiA9IGZ1bmN0aW9uKGdlb2pzb24sIG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiBuZXcgTC5Qcm9qLkdlb0pTT04oZ2VvanNvbiwgb3B0aW9ucyk7XHJcblx0fTtcclxuXHJcblx0TC5Qcm9qLkltYWdlT3ZlcmxheSA9IEwuSW1hZ2VPdmVybGF5LmV4dGVuZCh7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbiAodXJsLCBib3VuZHMsIG9wdGlvbnMpIHtcclxuXHRcdFx0TC5JbWFnZU92ZXJsYXkucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCB1cmwsIG51bGwsIG9wdGlvbnMpO1xyXG5cdFx0XHR0aGlzLl9wcm9qZWN0ZWRCb3VuZHMgPSBib3VuZHM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIERhbmdlciBhaGVhZDogT3ZlcnJpZGluZyBpbnRlcm5hbCBtZXRob2RzIGluIExlYWZsZXQuXHJcblx0XHQvLyBEZWNpZGVkIHRvIGRvIHRoaXMgcmF0aGVyIHRoYW4gbWFraW5nIGEgY29weSBvZiBMLkltYWdlT3ZlcmxheVxyXG5cdFx0Ly8gYW5kIGRvaW5nIHZlcnkgdGlueSBtb2RpZmljYXRpb25zIHRvIGl0LlxyXG5cdFx0Ly8gRnV0dXJlIHdpbGwgdGVsbCBpZiB0aGlzIHdhcyB3aXNlIG9yIG5vdC5cclxuXHRcdF9hbmltYXRlWm9vbTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRcdHZhciBzY2FsZSA9IHRoaXMuX21hcC5nZXRab29tU2NhbGUoZXZlbnQuem9vbSk7XHJcblx0XHRcdHZhciBub3J0aFdlc3QgPSBMLnBvaW50KHRoaXMuX3Byb2plY3RlZEJvdW5kcy5taW4ueCwgdGhpcy5fcHJvamVjdGVkQm91bmRzLm1heC55KTtcclxuXHRcdFx0dmFyIG9mZnNldCA9IHRoaXMuX3Byb2plY3RlZFRvTmV3TGF5ZXJQb2ludChub3J0aFdlc3QsIGV2ZW50Lnpvb20sIGV2ZW50LmNlbnRlcik7XHJcblxyXG5cdFx0XHRMLkRvbVV0aWwuc2V0VHJhbnNmb3JtKHRoaXMuX2ltYWdlLCBvZmZzZXQsIHNjYWxlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X3Jlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB6b29tID0gdGhpcy5fbWFwLmdldFpvb20oKTtcclxuXHRcdFx0dmFyIHBpeGVsT3JpZ2luID0gdGhpcy5fbWFwLmdldFBpeGVsT3JpZ2luKCk7XHJcblx0XHRcdHZhciBib3VuZHMgPSBMLmJvdW5kcyhcclxuXHRcdFx0XHR0aGlzLl90cmFuc2Zvcm0odGhpcy5fcHJvamVjdGVkQm91bmRzLm1pbiwgem9vbSkuX3N1YnRyYWN0KHBpeGVsT3JpZ2luKSxcclxuXHRcdFx0XHR0aGlzLl90cmFuc2Zvcm0odGhpcy5fcHJvamVjdGVkQm91bmRzLm1heCwgem9vbSkuX3N1YnRyYWN0KHBpeGVsT3JpZ2luKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR2YXIgc2l6ZSA9IGJvdW5kcy5nZXRTaXplKCk7XHJcblxyXG5cdFx0XHRMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5faW1hZ2UsIGJvdW5kcy5taW4pO1xyXG5cdFx0XHR0aGlzLl9pbWFnZS5zdHlsZS53aWR0aCA9IHNpemUueCArICdweCc7XHJcblx0XHRcdHRoaXMuX2ltYWdlLnN0eWxlLmhlaWdodCA9IHNpemUueSArICdweCc7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9wcm9qZWN0ZWRUb05ld0xheWVyUG9pbnQ6IGZ1bmN0aW9uIChwb2ludCwgem9vbSwgY2VudGVyKSB7XHJcblx0XHRcdHZhciB2aWV3SGFsZiA9IHRoaXMuX21hcC5nZXRTaXplKCkuX2RpdmlkZUJ5KDIpO1xyXG5cdFx0XHR2YXIgbmV3VG9wTGVmdCA9IHRoaXMuX21hcC5wcm9qZWN0KGNlbnRlciwgem9vbSkuX3N1YnRyYWN0KHZpZXdIYWxmKS5fcm91bmQoKTtcclxuXHRcdFx0dmFyIHRvcExlZnQgPSBuZXdUb3BMZWZ0LmFkZCh0aGlzLl9tYXAuX2dldE1hcFBhbmVQb3MoKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fdHJhbnNmb3JtKHBvaW50LCB6b29tKS5fc3VidHJhY3QodG9wTGVmdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF90cmFuc2Zvcm06IGZ1bmN0aW9uIChwb2ludCwgem9vbSkge1xyXG5cdFx0XHR2YXIgY3JzID0gdGhpcy5fbWFwLm9wdGlvbnMuY3JzO1xyXG5cdFx0XHR2YXIgdHJhbnNmb3JtYXRpb24gPSBjcnMudHJhbnNmb3JtYXRpb247XHJcblx0XHRcdHZhciBzY2FsZSA9IGNycy5zY2FsZSh6b29tKTtcclxuXHJcblx0XHRcdHJldHVybiB0cmFuc2Zvcm1hdGlvbi50cmFuc2Zvcm0ocG9pbnQsIHNjYWxlKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0TC5Qcm9qLmltYWdlT3ZlcmxheSA9IGZ1bmN0aW9uICh1cmwsIGJvdW5kcywgb3B0aW9ucykge1xyXG5cdFx0cmV0dXJuIG5ldyBMLlByb2ouSW1hZ2VPdmVybGF5KHVybCwgYm91bmRzLCBvcHRpb25zKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gTC5Qcm9qO1xyXG59KSk7XHJcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyB3aXRoTGVhZmxldCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgTWFwQ29udHJvbCBmcm9tICcuL01hcENvbnRyb2wnO1xuXG52YXIgQXR0cmlidXRpb25Db250cm9sID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwQ29udHJvbCkge1xuICBfaW5oZXJpdHNMb29zZShBdHRyaWJ1dGlvbkNvbnRyb2wsIF9NYXBDb250cm9sKTtcblxuICBmdW5jdGlvbiBBdHRyaWJ1dGlvbkNvbnRyb2woKSB7XG4gICAgcmV0dXJuIF9NYXBDb250cm9sLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBdHRyaWJ1dGlvbkNvbnRyb2wucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sLkF0dHJpYnV0aW9uKHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gQXR0cmlidXRpb25Db250cm9sO1xufShNYXBDb250cm9sKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExlYWZsZXQoQXR0cmlidXRpb25Db250cm9sKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IENpcmNsZSBhcyBMZWFmbGV0Q2lyY2xlIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyB3aXRoTGVhZmxldCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xuXG52YXIgQ2lyY2xlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGF0aCkge1xuICBfaW5oZXJpdHNMb29zZShDaXJjbGUsIF9QYXRoKTtcblxuICBmdW5jdGlvbiBDaXJjbGUoKSB7XG4gICAgcmV0dXJuIF9QYXRoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDaXJjbGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgdmFyIGNlbnRlciA9IHByb3BzLmNlbnRlcixcbiAgICAgICAgcmFkaXVzID0gcHJvcHMucmFkaXVzLFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImNlbnRlclwiLCBcInJhZGl1c1wiXSk7XG5cbiAgICByZXR1cm4gbmV3IExlYWZsZXRDaXJjbGUoY2VudGVyLCByYWRpdXMsIHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoZnJvbVByb3BzLCB0b1Byb3BzKSB7XG4gICAgaWYgKHRvUHJvcHMuY2VudGVyICE9PSBmcm9tUHJvcHMuY2VudGVyKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldExhdExuZyh0b1Byb3BzLmNlbnRlcik7XG4gICAgfVxuXG4gICAgaWYgKHRvUHJvcHMucmFkaXVzICE9PSBmcm9tUHJvcHMucmFkaXVzKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldFJhZGl1cyh0b1Byb3BzLnJhZGl1cyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDaXJjbGU7XG59KFBhdGgpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGVhZmxldChDaXJjbGUpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgQ2lyY2xlTWFya2VyIGFzIExlYWZsZXRDaXJjbGVNYXJrZXIgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IHdpdGhMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XG5cbnZhciBDaXJjbGVNYXJrZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXRoKSB7XG4gIF9pbmhlcml0c0xvb3NlKENpcmNsZU1hcmtlciwgX1BhdGgpO1xuXG4gIGZ1bmN0aW9uIENpcmNsZU1hcmtlcigpIHtcbiAgICByZXR1cm4gX1BhdGguYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENpcmNsZU1hcmtlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgZWwgPSBuZXcgTGVhZmxldENpcmNsZU1hcmtlcihwcm9wcy5jZW50ZXIsIHRoaXMuZ2V0T3B0aW9ucyhwcm9wcykpO1xuICAgIHRoaXMuY29udGV4dFZhbHVlID0gX2V4dGVuZHMoX2V4dGVuZHMoe30sIHByb3BzLmxlYWZsZXQpLCB7fSwge1xuICAgICAgcG9wdXBDb250YWluZXI6IGVsXG4gICAgfSk7XG4gICAgcmV0dXJuIGVsO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIHVwZGF0ZUxlYWZsZXRFbGVtZW50KGZyb21Qcm9wcywgdG9Qcm9wcykge1xuICAgIGlmICh0b1Byb3BzLmNlbnRlciAhPT0gZnJvbVByb3BzLmNlbnRlcikge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRMYXRMbmcodG9Qcm9wcy5jZW50ZXIpO1xuICAgIH1cblxuICAgIGlmICh0b1Byb3BzLnJhZGl1cyAhPT0gZnJvbVByb3BzLnJhZGl1cykge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRSYWRpdXModG9Qcm9wcy5yYWRpdXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ2lyY2xlTWFya2VyO1xufShQYXRoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExlYWZsZXQoQ2lyY2xlTWFya2VyKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9NYXBDb21wb25lbnQnO1xuaW1wb3J0IHVwZGF0ZUNsYXNzTmFtZSBmcm9tICcuL3V0aWxzL3VwZGF0ZUNsYXNzTmFtZSc7XG5cbnZhciBEaXZPdmVybGF5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERpdk92ZXJsYXksIF9NYXBDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERpdk92ZXJsYXkocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9NYXBDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkNsb3NlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbk9wZW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTsgLy8gUmUtcmVuZGVyIG5vdyB0aGF0IGxlYWZsZXRFbGVtZW50IGlzIGNyZWF0ZWRcblxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25PcGVuKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uT3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX3RoaXMubGVhZmxldEVsZW1lbnQgPSBfdGhpcy5jcmVhdGVMZWFmbGV0RWxlbWVudChwcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERpdk92ZXJsYXkucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KF9wcm9wcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlTGVhZmxldEVsZW1lbnQoKSBtdXN0IGJlIGltcGxlbWVudGVkJyk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoX3ByZXZQcm9wcywgX3Byb3BzKSB7fTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHVwZGF0ZUNsYXNzTmFtZSh0aGlzLmxlYWZsZXRFbGVtZW50Ll9jb250YWluZXIsIHByZXZQcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICB0aGlzLnVwZGF0ZUxlYWZsZXRFbGVtZW50KHByZXZQcm9wcywgdGhpcy5wcm9wcyk7XG5cbiAgICBpZiAodGhpcy5sZWFmbGV0RWxlbWVudC5pc09wZW4oKSkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC51cGRhdGUoKTtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7fTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmxlYWZsZXRFbGVtZW50Ll9jb250ZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLmxlYWZsZXRFbGVtZW50Ll9jb250ZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIERpdk92ZXJsYXk7XG59KE1hcENvbXBvbmVudCk7XG5cbmV4cG9ydCB7IERpdk92ZXJsYXkgYXMgZGVmYXVsdCB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgRmVhdHVyZUdyb3VwIGFzIExlYWZsZXRGZWF0dXJlR3JvdXAgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IHdpdGhMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XG5cbnZhciBGZWF0dXJlR3JvdXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXRoKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZlYXR1cmVHcm91cCwgX1BhdGgpO1xuXG4gIGZ1bmN0aW9uIEZlYXR1cmVHcm91cCgpIHtcbiAgICByZXR1cm4gX1BhdGguYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZlYXR1cmVHcm91cC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgZWwgPSBuZXcgTGVhZmxldEZlYXR1cmVHcm91cCh0aGlzLmdldE9wdGlvbnMocHJvcHMpKTtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZSA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBwcm9wcy5sZWFmbGV0KSwge30sIHtcbiAgICAgIGxheWVyQ29udGFpbmVyOiBlbCxcbiAgICAgIHBvcHVwQ29udGFpbmVyOiBlbFxuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBfUGF0aC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuc2V0U3R5bGUodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIEZlYXR1cmVHcm91cDtcbn0oUGF0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KEZlYXR1cmVHcm91cCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgR2VvSlNPTiBhcyBMZWFmbGV0R2VvSlNPTiB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgd2l0aExlYWZsZXQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcblxudmFyIEdlb0pTT04gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXRoKSB7XG4gIF9pbmhlcml0c0xvb3NlKEdlb0pTT04sIF9QYXRoKTtcblxuICBmdW5jdGlvbiBHZW9KU09OKCkge1xuICAgIHJldHVybiBfUGF0aC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gR2VvSlNPTi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IExlYWZsZXRHZW9KU09OKHByb3BzLmRhdGEsIHRoaXMuZ2V0T3B0aW9ucyhwcm9wcykpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIHVwZGF0ZUxlYWZsZXRFbGVtZW50KGZyb21Qcm9wcywgdG9Qcm9wcykge1xuICAgIGlmICh0eXBlb2YgdG9Qcm9wcy5zdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRTdHlsZSh0b1Byb3BzLnN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdHlsZUlmQ2hhbmdlZChmcm9tUHJvcHMsIHRvUHJvcHMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gR2VvSlNPTjtcbn0oUGF0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KEdlb0pTT04pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgR3JpZExheWVyIGFzIExlYWZsZXRHcmlkTGF5ZXIgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCBNYXBMYXllciBmcm9tICcuL01hcExheWVyJztcblxudmFyIEdyaWRMYXllciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hcExheWVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEdyaWRMYXllciwgX01hcExheWVyKTtcblxuICBmdW5jdGlvbiBHcmlkTGF5ZXIoKSB7XG4gICAgcmV0dXJuIF9NYXBMYXllci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gR3JpZExheWVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY3JlYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMZWFmbGV0RWxlbWVudChwcm9wcykge1xuICAgIHJldHVybiBuZXcgTGVhZmxldEdyaWRMYXllcih0aGlzLmdldE9wdGlvbnMocHJvcHMpKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiB1cGRhdGVMZWFmbGV0RWxlbWVudChmcm9tUHJvcHMsIHRvUHJvcHMpIHtcbiAgICB2YXIgb3BhY2l0eSA9IHRvUHJvcHMub3BhY2l0eSxcbiAgICAgICAgekluZGV4ID0gdG9Qcm9wcy56SW5kZXg7XG5cbiAgICBpZiAob3BhY2l0eSAhPT0gZnJvbVByb3BzLm9wYWNpdHkpIHtcbiAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgICB9XG5cbiAgICBpZiAoekluZGV4ICE9PSBmcm9tUHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldFpJbmRleCh6SW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMocHJvcHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBfTWFwTGF5ZXIucHJvdG90eXBlLmdldE9wdGlvbnMuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIG1hcCA9IHByb3BzLmxlYWZsZXQubWFwO1xuXG4gICAgaWYgKG1hcCAhPSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lOiBPYmplY3Qgc3ByZWFkXG4gICAgICBpZiAob3B0aW9ucy5tYXhab29tID09IG51bGwgJiYgbWFwLm9wdGlvbnMubWF4Wm9vbSAhPSBudWxsKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWU6IE9iamVjdCBzcHJlYWRcbiAgICAgICAgb3B0aW9ucy5tYXhab29tID0gbWFwLm9wdGlvbnMubWF4Wm9vbTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZTogT2JqZWN0IHNwcmVhZFxuXG5cbiAgICAgIGlmIChvcHRpb25zLm1pblpvb20gPT0gbnVsbCAmJiBtYXAub3B0aW9ucy5taW5ab29tICE9IG51bGwpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZTogT2JqZWN0IHNwcmVhZFxuICAgICAgICBvcHRpb25zLm1pblpvb20gPSBtYXAub3B0aW9ucy5taW5ab29tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEdyaWRMYXllcjtcbn0oTWFwTGF5ZXIpO1xuXG5leHBvcnQgeyBHcmlkTGF5ZXIgYXMgZGVmYXVsdCB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgSW1hZ2VPdmVybGF5IGFzIExlYWZsZXRJbWFnZU92ZXJsYXksIGxhdExuZ0JvdW5kcyB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgd2l0aExlYWZsZXQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IE1hcExheWVyIGZyb20gJy4vTWFwTGF5ZXInO1xuXG52YXIgSW1hZ2VPdmVybGF5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwTGF5ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW1hZ2VPdmVybGF5LCBfTWFwTGF5ZXIpO1xuXG4gIGZ1bmN0aW9uIEltYWdlT3ZlcmxheSgpIHtcbiAgICByZXR1cm4gX01hcExheWVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbWFnZU92ZXJsYXkucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgdmFyIGVsID0gbmV3IExlYWZsZXRJbWFnZU92ZXJsYXkocHJvcHMudXJsLCBwcm9wcy5ib3VuZHMsIHRoaXMuZ2V0T3B0aW9ucyhwcm9wcykpO1xuICAgIHRoaXMuY29udGV4dFZhbHVlID0gX2V4dGVuZHMoX2V4dGVuZHMoe30sIHByb3BzLmxlYWZsZXQpLCB7fSwge1xuICAgICAgcG9wdXBDb250YWluZXI6IGVsXG4gICAgfSk7XG4gICAgcmV0dXJuIGVsO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIHVwZGF0ZUxlYWZsZXRFbGVtZW50KGZyb21Qcm9wcywgdG9Qcm9wcykge1xuICAgIGlmICh0b1Byb3BzLnVybCAhPT0gZnJvbVByb3BzLnVybCkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRVcmwodG9Qcm9wcy51cmwpO1xuICAgIH1cblxuICAgIGlmICh0b1Byb3BzLmJvdW5kcyAhPT0gZnJvbVByb3BzLmJvdW5kcykge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRCb3VuZHMobGF0TG5nQm91bmRzKHRvUHJvcHMuYm91bmRzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRvUHJvcHMub3BhY2l0eSAhPT0gZnJvbVByb3BzLm9wYWNpdHkpIHtcbiAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0T3BhY2l0eSh0b1Byb3BzLm9wYWNpdHkpO1xuICAgIH1cblxuICAgIGlmICh0b1Byb3BzLnpJbmRleCAhPT0gZnJvbVByb3BzLnpJbmRleCkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRaSW5kZXgodG9Qcm9wcy56SW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSW1hZ2VPdmVybGF5O1xufShNYXBMYXllcik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KEltYWdlT3ZlcmxheSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBMYXllckdyb3VwIGFzIExlYWZsZXRMYXllckdyb3VwIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyB3aXRoTGVhZmxldCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgTWFwTGF5ZXIgZnJvbSAnLi9NYXBMYXllcic7XG5cbnZhciBMYXllckdyb3VwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwTGF5ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGF5ZXJHcm91cCwgX01hcExheWVyKTtcblxuICBmdW5jdGlvbiBMYXllckdyb3VwKCkge1xuICAgIHJldHVybiBfTWFwTGF5ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExheWVyR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgdmFyIGVsID0gbmV3IExlYWZsZXRMYXllckdyb3VwKFtdLCB0aGlzLmdldE9wdGlvbnMocHJvcHMpKTtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZSA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBwcm9wcy5sZWFmbGV0KSwge30sIHtcbiAgICAgIGxheWVyQ29udGFpbmVyOiBlbFxuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbiAgfTtcblxuICByZXR1cm4gTGF5ZXJHcm91cDtcbn0oTWFwTGF5ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGVhZmxldChMYXllckdyb3VwKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIENvbXBvbmVudCwgQ2hpbGRyZW4sIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGVhZmxldFByb3ZpZGVyLCB3aXRoTGVhZmxldCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgTWFwQ29udHJvbCBmcm9tICcuL01hcENvbnRyb2wnO1xuLy8gQWJ0cmFjdCBjbGFzcyBmb3IgbGF5ZXIgY29udGFpbmVyLCBleHRlbmRlZCBieSBCYXNlTGF5ZXIgYW5kIE92ZXJsYXlcbmV4cG9ydCB2YXIgQ29udHJvbGxlZExheWVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENvbnRyb2xsZWRMYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlZExheWVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbnRleHRWYWx1ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxheWVyXCIsIHZvaWQgMCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udHJvbGxlZExheWVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKF9yZWYpIHtcbiAgICB2YXIgY2hlY2tlZCA9IF9yZWYuY2hlY2tlZDtcblxuICAgIGlmICh0aGlzLnByb3BzLmxlYWZsZXQubWFwID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEhhbmRsZSBkeW5hbWljYWxseSAodW4pY2hlY2tpbmcgdGhlIGxheWVyID0+IGFkZGluZy9yZW1vdmluZyBmcm9tIHRoZSBtYXBcblxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZCA9PT0gdHJ1ZSAmJiAoY2hlY2tlZCA9PSBudWxsIHx8IGNoZWNrZWQgPT09IGZhbHNlKSkge1xuICAgICAgdGhpcy5wcm9wcy5sZWFmbGV0Lm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICB9IGVsc2UgaWYgKGNoZWNrZWQgPT09IHRydWUgJiYgKHRoaXMucHJvcHMuY2hlY2tlZCA9PSBudWxsIHx8IHRoaXMucHJvcHMuY2hlY2tlZCA9PT0gZmFsc2UpKSB7XG4gICAgICB0aGlzLnByb3BzLmxlYWZsZXQubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZUxheWVyQ29udHJvbCh0aGlzLmxheWVyKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkTGF5ZXIgPSBmdW5jdGlvbiBhZGRMYXllcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgaW1wbGVtZW50ZWQgaW4gZXh0ZW5kaW5nIGNsYXNzJyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gcmVtb3ZlTGF5ZXIobGF5ZXIpIHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgcmV0dXJuIGNoaWxkcmVuID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGVhZmxldFByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5jb250ZXh0VmFsdWVcbiAgICB9LCBjaGlsZHJlbikgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBDb250cm9sbGVkTGF5ZXI7XG59KENvbXBvbmVudCk7XG5cbnZhciBCYXNlTGF5ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVkTGF5ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoQmFzZUxheWVyLCBfQ29udHJvbGxlZExheWVyKTtcblxuICBmdW5jdGlvbiBCYXNlTGF5ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyO1xuXG4gICAgX3RoaXMyID0gX0NvbnRyb2xsZWRMYXllci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSwgXCJhZGRMYXllclwiLCBmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgIF90aGlzMi5sYXllciA9IGxheWVyOyAvLyBLZWVwIGxheWVyIHJlZmVyZW5jZSB0byBoYW5kbGUgZHluYW1pYyBjaGFuZ2VzIG9mIHByb3BzXG5cbiAgICAgIHZhciBfdGhpczIkcHJvcHMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgICAgYWRkQmFzZUxheWVyID0gX3RoaXMyJHByb3BzLmFkZEJhc2VMYXllcixcbiAgICAgICAgICBjaGVja2VkID0gX3RoaXMyJHByb3BzLmNoZWNrZWQsXG4gICAgICAgICAgbmFtZSA9IF90aGlzMiRwcm9wcy5uYW1lO1xuICAgICAgYWRkQmFzZUxheWVyKGxheWVyLCBuYW1lLCBjaGVja2VkKTtcbiAgICB9KTtcblxuICAgIF90aGlzMi5jb250ZXh0VmFsdWUgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgcHJvcHMubGVhZmxldCksIHt9LCB7XG4gICAgICBsYXllckNvbnRhaW5lcjoge1xuICAgICAgICBhZGRMYXllcjogX3RoaXMyLmFkZExheWVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpKSxcbiAgICAgICAgcmVtb3ZlTGF5ZXI6IF90aGlzMi5yZW1vdmVMYXllci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgcmV0dXJuIEJhc2VMYXllcjtcbn0oQ29udHJvbGxlZExheWVyKTtcblxudmFyIE92ZXJsYXkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db250cm9sbGVkTGF5ZXIyKSB7XG4gIF9pbmhlcml0c0xvb3NlKE92ZXJsYXksIF9Db250cm9sbGVkTGF5ZXIyKTtcblxuICBmdW5jdGlvbiBPdmVybGF5KHByb3BzKSB7XG4gICAgdmFyIF90aGlzMztcblxuICAgIF90aGlzMyA9IF9Db250cm9sbGVkTGF5ZXIyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBcImFkZExheWVyXCIsIGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgX3RoaXMzLmxheWVyID0gbGF5ZXI7IC8vIEtlZXAgbGF5ZXIgcmVmZXJlbmNlIHRvIGhhbmRsZSBkeW5hbWljIGNoYW5nZXMgb2YgcHJvcHNcblxuICAgICAgdmFyIF90aGlzMyRwcm9wcyA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAgICBhZGRPdmVybGF5ID0gX3RoaXMzJHByb3BzLmFkZE92ZXJsYXksXG4gICAgICAgICAgY2hlY2tlZCA9IF90aGlzMyRwcm9wcy5jaGVja2VkLFxuICAgICAgICAgIG5hbWUgPSBfdGhpczMkcHJvcHMubmFtZTtcbiAgICAgIGFkZE92ZXJsYXkobGF5ZXIsIG5hbWUsIGNoZWNrZWQpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMzLmNvbnRleHRWYWx1ZSA9IF9leHRlbmRzKF9leHRlbmRzKHt9LCBwcm9wcy5sZWFmbGV0KSwge30sIHtcbiAgICAgIGxheWVyQ29udGFpbmVyOiB7XG4gICAgICAgIGFkZExheWVyOiBfdGhpczMuYWRkTGF5ZXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpLFxuICAgICAgICByZW1vdmVMYXllcjogX3RoaXMzLnJlbW92ZUxheWVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICByZXR1cm4gT3ZlcmxheTtcbn0oQ29udHJvbGxlZExheWVyKTtcblxudmFyIExheWVyc0NvbnRyb2wgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXBDb250cm9sKSB7XG4gIF9pbmhlcml0c0xvb3NlKExheWVyc0NvbnRyb2wsIF9NYXBDb250cm9sKTtcblxuICBmdW5jdGlvbiBMYXllcnNDb250cm9sKHByb3BzKSB7XG4gICAgdmFyIF90aGlzNDtcblxuICAgIF90aGlzNCA9IF9NYXBDb250cm9sLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczQpLCBcImNvbnRyb2xQcm9wc1wiLCB2b2lkIDApO1xuXG4gICAgX3RoaXM0LmNvbnRyb2xQcm9wcyA9IHtcbiAgICAgIGFkZEJhc2VMYXllcjogX3RoaXM0LmFkZEJhc2VMYXllci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXM0KSksXG4gICAgICBhZGRPdmVybGF5OiBfdGhpczQuYWRkT3ZlcmxheS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXM0KSksXG4gICAgICBsZWFmbGV0OiBwcm9wcy5sZWFmbGV0LFxuICAgICAgcmVtb3ZlTGF5ZXI6IF90aGlzNC5yZW1vdmVMYXllci5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXM0KSksXG4gICAgICByZW1vdmVMYXllckNvbnRyb2w6IF90aGlzNC5yZW1vdmVMYXllckNvbnRyb2wuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzNCkpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM0O1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBMYXllcnNDb250cm9sLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgX2NoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgcmV0dXJuIG5ldyBDb250cm9sLkxheWVycyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvMi51cGRhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIHVwZGF0ZUxlYWZsZXRFbGVtZW50KGZyb21Qcm9wcywgdG9Qcm9wcykge1xuICAgIF9NYXBDb250cm9sLnByb3RvdHlwZS51cGRhdGVMZWFmbGV0RWxlbWVudC5jYWxsKHRoaXMsIGZyb21Qcm9wcywgdG9Qcm9wcyk7XG5cbiAgICBpZiAodG9Qcm9wcy5jb2xsYXBzZWQgIT09IGZyb21Qcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgIGlmICh0b1Byb3BzLmNvbGxhcHNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LmNvbGxhcHNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LmV4cGFuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF9NYXBDb250cm9sLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKF90aGlzNSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRCYXNlTGF5ZXIgPSBmdW5jdGlvbiBhZGRCYXNlTGF5ZXIobGF5ZXIsIG5hbWUsIGNoZWNrZWQpIHtcbiAgICBpZiAoY2hlY2tlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBjaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrZWQgJiYgdGhpcy5wcm9wcy5sZWFmbGV0Lm1hcCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnByb3BzLmxlYWZsZXQubWFwLmFkZExheWVyKGxheWVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmxlYWZsZXRFbGVtZW50LmFkZEJhc2VMYXllcihsYXllciwgbmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRPdmVybGF5ID0gZnVuY3Rpb24gYWRkT3ZlcmxheShsYXllciwgbmFtZSwgY2hlY2tlZCkge1xuICAgIGlmIChjaGVja2VkID09PSB2b2lkIDApIHtcbiAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tlZCAmJiB0aGlzLnByb3BzLmxlYWZsZXQubWFwICE9IG51bGwpIHtcbiAgICAgIHRoaXMucHJvcHMubGVhZmxldC5tYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICAgIH1cblxuICAgIHRoaXMubGVhZmxldEVsZW1lbnQuYWRkT3ZlcmxheShsYXllciwgbmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVMYXllciA9IGZ1bmN0aW9uIHJlbW92ZUxheWVyKGxheWVyKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGVhZmxldC5tYXAgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wcm9wcy5sZWFmbGV0Lm1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlTGF5ZXJDb250cm9sID0gZnVuY3Rpb24gcmVtb3ZlTGF5ZXJDb250cm9sKGxheWVyKSB7XG4gICAgdGhpcy5sZWFmbGV0RWxlbWVudC5yZW1vdmVMYXllcihsYXllcik7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQgPyBjbG9uZUVsZW1lbnQoY2hpbGQsIF90aGlzNi5jb250cm9sUHJvcHMpIDogbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gTGF5ZXJzQ29udHJvbDtcbn0oTWFwQ29udHJvbCk7XG5cbnZhciBMYXllcnNDb250cm9sRXhwb3J0ID0gd2l0aExlYWZsZXQoTGF5ZXJzQ29udHJvbCk7XG5MYXllcnNDb250cm9sRXhwb3J0LkJhc2VMYXllciA9IEJhc2VMYXllcjtcbkxheWVyc0NvbnRyb2xFeHBvcnQuT3ZlcmxheSA9IE92ZXJsYXk7XG5leHBvcnQgZGVmYXVsdCBMYXllcnNDb250cm9sRXhwb3J0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IHsgbGF0TG5nQm91bmRzLCBNYXAgYXMgTGVhZmxldE1hcCB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExlYWZsZXRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgTWFwRXZlbnRlZCBmcm9tICcuL01hcEV2ZW50ZWQnO1xuaW1wb3J0IHVwZGF0ZUNsYXNzTmFtZSBmcm9tICcuL3V0aWxzL3VwZGF0ZUNsYXNzTmFtZSc7XG5pbXBvcnQgb21pdCBmcm9tICcuL3V0aWxzL29taXQnO1xudmFyIE9USEVSX1BST1BTID0gWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnaWQnLCAnc3R5bGUnLCAndXNlRmx5VG8nLCAnd2hlblJlYWR5J107XG5cbnZhciBub3JtYWxpemVDZW50ZXIgPSBmdW5jdGlvbiBub3JtYWxpemVDZW50ZXIocG9zKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBvcykgPyBbcG9zWzBdLCBwb3NbMV1dIDogW3Bvcy5sYXQsIHBvcy5sb24gPyBwb3MubG9uIDogcG9zLmxuZ107XG59O1xuXG52YXIgTWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwRXZlbnRlZCkge1xuICBfaW5oZXJpdHNMb29zZShNYXAsIF9NYXBFdmVudGVkKTtcblxuICBmdW5jdGlvbiBNYXAocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9NYXBFdmVudGVkLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xhc3NOYW1lXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29udGV4dFZhbHVlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29udGFpbmVyXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidmlld3BvcnRcIiwge1xuICAgICAgY2VudGVyOiB1bmRlZmluZWQsXG4gICAgICB6b29tOiB1bmRlZmluZWRcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVhZHlcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl91cGRhdGluZ1wiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25WaWV3cG9ydENoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2VudGVyID0gX3RoaXMubGVhZmxldEVsZW1lbnQuZ2V0Q2VudGVyKCk7XG5cbiAgICAgIF90aGlzLnZpZXdwb3J0ID0ge1xuICAgICAgICBjZW50ZXI6IGNlbnRlciA/IFtjZW50ZXIubGF0LCBjZW50ZXIubG5nXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgem9vbTogX3RoaXMubGVhZmxldEVsZW1lbnQuZ2V0Wm9vbSgpXG4gICAgICB9O1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25WaWV3cG9ydENoYW5nZSAmJiAhX3RoaXMuX3VwZGF0aW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVmlld3BvcnRDaGFuZ2UoX3RoaXMudmlld3BvcnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uVmlld3BvcnRDaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblZpZXdwb3J0Q2hhbmdlZCAmJiAhX3RoaXMuX3VwZGF0aW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVmlld3BvcnRDaGFuZ2VkKF90aGlzLnZpZXdwb3J0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJiaW5kQ29udGFpbmVyXCIsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIF90aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9KTtcblxuICAgIF90aGlzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTWFwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY3JlYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMZWFmbGV0RWxlbWVudChwcm9wcykge1xuICAgIHZhciB2aWV3cG9ydCA9IHByb3BzLnZpZXdwb3J0LFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInZpZXdwb3J0XCJdKTtcblxuICAgIGlmICh2aWV3cG9ydCkge1xuICAgICAgaWYgKHZpZXdwb3J0LmNlbnRlcikge1xuICAgICAgICBvcHRpb25zLmNlbnRlciA9IHZpZXdwb3J0LmNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2aWV3cG9ydC56b29tID09PSAnbnVtYmVyJykge1xuICAgICAgICBvcHRpb25zLnpvb20gPSB2aWV3cG9ydC56b29tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgTGVhZmxldE1hcCh0aGlzLmNvbnRhaW5lciwgb3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoZnJvbVByb3BzLCB0b1Byb3BzKSB7XG4gICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xuICAgIHZhciBib3VuZHMgPSB0b1Byb3BzLmJvdW5kcyxcbiAgICAgICAgYm91bmRzT3B0aW9ucyA9IHRvUHJvcHMuYm91bmRzT3B0aW9ucyxcbiAgICAgICAgYm94Wm9vbSA9IHRvUHJvcHMuYm94Wm9vbSxcbiAgICAgICAgY2VudGVyID0gdG9Qcm9wcy5jZW50ZXIsXG4gICAgICAgIGNsYXNzTmFtZSA9IHRvUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBkb3VibGVDbGlja1pvb20gPSB0b1Byb3BzLmRvdWJsZUNsaWNrWm9vbSxcbiAgICAgICAgZHJhZ2dpbmcgPSB0b1Byb3BzLmRyYWdnaW5nLFxuICAgICAgICBrZXlib2FyZCA9IHRvUHJvcHMua2V5Ym9hcmQsXG4gICAgICAgIG1heEJvdW5kcyA9IHRvUHJvcHMubWF4Qm91bmRzLFxuICAgICAgICBzY3JvbGxXaGVlbFpvb20gPSB0b1Byb3BzLnNjcm9sbFdoZWVsWm9vbSxcbiAgICAgICAgdGFwID0gdG9Qcm9wcy50YXAsXG4gICAgICAgIHRvdWNoWm9vbSA9IHRvUHJvcHMudG91Y2hab29tLFxuICAgICAgICB1c2VGbHlUbyA9IHRvUHJvcHMudXNlRmx5VG8sXG4gICAgICAgIHZpZXdwb3J0ID0gdG9Qcm9wcy52aWV3cG9ydCxcbiAgICAgICAgem9vbSA9IHRvUHJvcHMuem9vbTtcbiAgICB1cGRhdGVDbGFzc05hbWUodGhpcy5jb250YWluZXIsIGZyb21Qcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSk7XG5cbiAgICBpZiAodmlld3BvcnQgJiYgdmlld3BvcnQgIT09IGZyb21Qcm9wcy52aWV3cG9ydCkge1xuICAgICAgdmFyIGMgPSB2aWV3cG9ydC5jZW50ZXIgPyB2aWV3cG9ydC5jZW50ZXIgOiBjZW50ZXI7XG4gICAgICB2YXIgeiA9IHZpZXdwb3J0Lnpvb20gPT0gbnVsbCA/IHpvb20gOiB2aWV3cG9ydC56b29tO1xuXG4gICAgICBpZiAodXNlRmx5VG8gPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5mbHlUbyhjLCB6LCB0aGlzLmdldFpvb21QYW5PcHRpb25zKHRvUHJvcHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0VmlldyhjLCB6LCB0aGlzLmdldFpvb21QYW5PcHRpb25zKHRvUHJvcHMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNlbnRlciAmJiB0aGlzLnNob3VsZFVwZGF0ZUNlbnRlcihjZW50ZXIsIGZyb21Qcm9wcy5jZW50ZXIpKSB7XG4gICAgICBpZiAodXNlRmx5VG8gPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5mbHlUbyhjZW50ZXIsIHpvb20sIHRoaXMuZ2V0Wm9vbVBhbk9wdGlvbnModG9Qcm9wcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRWaWV3KGNlbnRlciwgem9vbSwgdGhpcy5nZXRab29tUGFuT3B0aW9ucyh0b1Byb3BzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygem9vbSA9PT0gJ251bWJlcicgJiYgem9vbSAhPT0gZnJvbVByb3BzLnpvb20pIHtcbiAgICAgIGlmIChmcm9tUHJvcHMuem9vbSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0VmlldyhjZW50ZXIsIHpvb20sIHRoaXMuZ2V0Wm9vbVBhbk9wdGlvbnModG9Qcm9wcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRab29tKHpvb20sIHRoaXMuZ2V0Wm9vbVBhbk9wdGlvbnModG9Qcm9wcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXhCb3VuZHMgJiYgdGhpcy5zaG91bGRVcGRhdGVCb3VuZHMobWF4Qm91bmRzLCBmcm9tUHJvcHMubWF4Qm91bmRzKSkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRNYXhCb3VuZHMobWF4Qm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAoYm91bmRzICYmICh0aGlzLnNob3VsZFVwZGF0ZUJvdW5kcyhib3VuZHMsIGZyb21Qcm9wcy5ib3VuZHMpIHx8IGJvdW5kc09wdGlvbnMgIT09IGZyb21Qcm9wcy5ib3VuZHNPcHRpb25zKSkge1xuICAgICAgaWYgKHVzZUZseVRvID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuZmx5VG9Cb3VuZHMoYm91bmRzLCB0aGlzLmdldEZpdEJvdW5kc09wdGlvbnModG9Qcm9wcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5maXRCb3VuZHMoYm91bmRzLCB0aGlzLmdldEZpdEJvdW5kc09wdGlvbnModG9Qcm9wcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChib3hab29tICE9PSBmcm9tUHJvcHMuYm94Wm9vbSkge1xuICAgICAgaWYgKGJveFpvb20gPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5ib3hab29tLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5ib3hab29tLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG91YmxlQ2xpY2tab29tICE9PSBmcm9tUHJvcHMuZG91YmxlQ2xpY2tab29tKSB7XG4gICAgICBpZiAoZG91YmxlQ2xpY2tab29tID09PSB0cnVlIHx8IHR5cGVvZiBkb3VibGVDbGlja1pvb20gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQub3B0aW9ucy5kb3VibGVDbGlja1pvb20gPSBkb3VibGVDbGlja1pvb207XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuZG91YmxlQ2xpY2tab29tLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5kb3VibGVDbGlja1pvb20uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkcmFnZ2luZyAhPT0gZnJvbVByb3BzLmRyYWdnaW5nKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5kcmFnZ2luZy5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuZHJhZ2dpbmcuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXlib2FyZCAhPT0gZnJvbVByb3BzLmtleWJvYXJkKSB7XG4gICAgICBpZiAoa2V5Ym9hcmQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5rZXlib2FyZC5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQua2V5Ym9hcmQuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxXaGVlbFpvb20gIT09IGZyb21Qcm9wcy5zY3JvbGxXaGVlbFpvb20pIHtcbiAgICAgIGlmIChzY3JvbGxXaGVlbFpvb20gPT09IHRydWUgfHwgdHlwZW9mIHNjcm9sbFdoZWVsWm9vbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5vcHRpb25zLnNjcm9sbFdoZWVsWm9vbSA9IHNjcm9sbFdoZWVsWm9vbTtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zY3JvbGxXaGVlbFpvb20uZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcCAhPT0gZnJvbVByb3BzLnRhcCkge1xuICAgICAgaWYgKHRhcCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnRhcC5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQudGFwLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG91Y2hab29tICE9PSBmcm9tUHJvcHMudG91Y2hab29tKSB7XG4gICAgICBpZiAodG91Y2hab29tID09PSB0cnVlIHx8IHR5cGVvZiB0b3VjaFpvb20gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQub3B0aW9ucy50b3VjaFpvb20gPSB0b3VjaFpvb207XG4gICAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQudG91Y2hab29tLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC50b3VjaFpvb20uZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmdldFpvb21QYW5PcHRpb25zID0gZnVuY3Rpb24gZ2V0Wm9vbVBhbk9wdGlvbnMocHJvcHMpIHtcbiAgICB2YXIgYW5pbWF0ZSA9IHByb3BzLmFuaW1hdGUsXG4gICAgICAgIGR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGVhc2VMaW5lYXJpdHkgPSBwcm9wcy5lYXNlTGluZWFyaXR5LFxuICAgICAgICBub01vdmVTdGFydCA9IHByb3BzLm5vTW92ZVN0YXJ0O1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRlOiBhbmltYXRlLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZUxpbmVhcml0eTogZWFzZUxpbmVhcml0eSxcbiAgICAgIG5vTW92ZVN0YXJ0OiBub01vdmVTdGFydFxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldEZpdEJvdW5kc09wdGlvbnMgPSBmdW5jdGlvbiBnZXRGaXRCb3VuZHNPcHRpb25zKHByb3BzKSB7XG4gICAgdmFyIHpvb21QYW5PcHRpb25zID0gdGhpcy5nZXRab29tUGFuT3B0aW9ucyhwcm9wcyk7XG4gICAgcmV0dXJuIF9leHRlbmRzKF9leHRlbmRzKHt9LCB6b29tUGFuT3B0aW9ucyksIHByb3BzLmJvdW5kc09wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBwcm9wcyA9IG9taXQuYXBwbHkodm9pZCAwLCBbdGhpcy5wcm9wc10uY29uY2F0KE9USEVSX1BST1BTKSk7XG4gICAgdGhpcy5sZWFmbGV0RWxlbWVudCA9IHRoaXMuY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpO1xuICAgIHRoaXMubGVhZmxldEVsZW1lbnQub24oJ21vdmUnLCB0aGlzLm9uVmlld3BvcnRDaGFuZ2UpO1xuICAgIHRoaXMubGVhZmxldEVsZW1lbnQub24oJ21vdmVlbmQnLCB0aGlzLm9uVmlld3BvcnRDaGFuZ2VkKTtcblxuICAgIGlmIChwcm9wcy5ib3VuZHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5maXRCb3VuZHMocHJvcHMuYm91bmRzLCB0aGlzLmdldEZpdEJvdW5kc09wdGlvbnMocHJvcHMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHRWYWx1ZSA9IHtcbiAgICAgIGxheWVyQ29udGFpbmVyOiB0aGlzLmxlYWZsZXRFbGVtZW50LFxuICAgICAgbWFwOiB0aGlzLmxlYWZsZXRFbGVtZW50XG4gICAgfTtcblxuICAgIF9NYXBFdmVudGVkLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpOyAvLyBSZS1yZW5kZXIgbm93IHRoYXQgbGVhZmxldEVsZW1lbnQgaXMgY3JlYXRlZFxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMuX3JlYWR5ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy53aGVuUmVhZHkpIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC53aGVuUmVhZHkodGhpcy5wcm9wcy53aGVuUmVhZHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9NYXBFdmVudGVkLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMpO1xuXG4gICAgdGhpcy51cGRhdGVMZWFmbGV0RWxlbWVudChwcmV2UHJvcHMsIHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIF9NYXBFdmVudGVkLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5sZWFmbGV0RWxlbWVudC5vZmYoJ21vdmUnLCB0aGlzLm9uVmlld3BvcnRDaGFuZ2UpO1xuICAgIHRoaXMubGVhZmxldEVsZW1lbnQub2ZmKCdtb3ZlZW5kJywgdGhpcy5vblZpZXdwb3J0Q2hhbmdlZCk7IC8vIFRoZSBjYW52YXMgcmVuZGVyZXIgdXNlcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIG1ha2luZyBhIGRlZmVycmVkIGNhbGwgdG8gYSBkZWxldGVkIG9iamVjdFxuICAgIC8vIFdoZW4gcHJlZmVyQ2FudmFzIGlzIHNldCwgdXNlIHNpbXBsZXIgdGVhcmRvd24gbG9naWNcblxuICAgIGlmICh0aGlzLnByb3BzLnByZWZlckNhbnZhcyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5faW5pdEV2ZW50cyh0cnVlKTtcblxuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5fc3RvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2hvdWxkVXBkYXRlQ2VudGVyID0gZnVuY3Rpb24gc2hvdWxkVXBkYXRlQ2VudGVyKG5leHQsIHByZXYpIHtcbiAgICBpZiAoIXByZXYpIHJldHVybiB0cnVlO1xuICAgIG5leHQgPSBub3JtYWxpemVDZW50ZXIobmV4dCk7XG4gICAgcHJldiA9IG5vcm1hbGl6ZUNlbnRlcihwcmV2KTtcbiAgICByZXR1cm4gbmV4dFswXSAhPT0gcHJldlswXSB8fCBuZXh0WzFdICE9PSBwcmV2WzFdO1xuICB9O1xuXG4gIF9wcm90by5zaG91bGRVcGRhdGVCb3VuZHMgPSBmdW5jdGlvbiBzaG91bGRVcGRhdGVCb3VuZHMobmV4dCwgcHJldikge1xuICAgIHJldHVybiBwcmV2ID8gIWxhdExuZ0JvdW5kcyhuZXh0KS5lcXVhbHMobGF0TG5nQm91bmRzKHByZXYpKSA6IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB0aGlzLmNsYXNzTmFtZSxcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgcmVmOiB0aGlzLmJpbmRDb250YWluZXIsXG4gICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZVxuICAgIH0sIHRoaXMuY29udGV4dFZhbHVlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGVhZmxldFByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5jb250ZXh0VmFsdWVcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSA6IG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBNYXA7XG59KE1hcEV2ZW50ZWQpO1xuXG5leHBvcnQgeyBNYXAgYXMgZGVmYXVsdCB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IE1hcEV2ZW50ZWQgZnJvbSAnLi9NYXBFdmVudGVkJztcblxudmFyIE1hcENvbXBvbmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hcEV2ZW50ZWQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWFwQ29tcG9uZW50LCBfTWFwRXZlbnRlZCk7XG5cbiAgZnVuY3Rpb24gTWFwQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBfTWFwRXZlbnRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTWFwQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMocHJvcHMpIHtcbiAgICBpZiAocHJvcHMucGFuZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmxlYWZsZXQgIT0gbnVsbCAmJiBwcm9wcy5sZWFmbGV0LnBhbmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKF9leHRlbmRzKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgICAgIHBhbmU6IHByb3BzLmxlYWZsZXQucGFuZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xuICB9O1xuXG4gIHJldHVybiBNYXBDb21wb25lbnQ7XG59KE1hcEV2ZW50ZWQpO1xuXG5leHBvcnQgeyBNYXBDb21wb25lbnQgYXMgZGVmYXVsdCB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBNYXBDb250cm9sID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hcENvbnRyb2wsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1hcENvbnRyb2wocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJsZWFmbGV0RWxlbWVudFwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMubGVhZmxldEVsZW1lbnQgPSBfdGhpcy5jcmVhdGVMZWFmbGV0RWxlbWVudChfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hcENvbnRyb2wucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KF9wcm9wcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlTGVhZmxldEVsZW1lbnQoKSBtdXN0IGJlIGltcGxlbWVudGVkJyk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoZnJvbVByb3BzLCB0b1Byb3BzKSB7XG4gICAgaWYgKHRvUHJvcHMucG9zaXRpb24gIT09IGZyb21Qcm9wcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRQb3NpdGlvbih0b1Byb3BzLnBvc2l0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5sZWFmbGV0RWxlbWVudC5hZGRUbyh0aGlzLnByb3BzLmxlYWZsZXQubWFwKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHRoaXMudXBkYXRlTGVhZmxldEVsZW1lbnQocHJldlByb3BzLCB0aGlzLnByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnJlbW92ZSgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIE1hcENvbnRyb2w7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCB7IE1hcENvbnRyb2wgYXMgZGVmYXVsdCB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgRVZFTlRTX1JFID0gL15vbiguKykkL2k7XG5cbnZhciBNYXBFdmVudGVkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hcEV2ZW50ZWQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1hcEV2ZW50ZWQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfbGVhZmxldEV2ZW50c1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxlYWZsZXRFbGVtZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5fbGVhZmxldEV2ZW50cyA9IF90aGlzLmV4dHJhY3RMZWFmbGV0RXZlbnRzKHByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTWFwRXZlbnRlZC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5iaW5kTGVhZmxldEV2ZW50cyh0aGlzLl9sZWFmbGV0RXZlbnRzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKF9wcmV2UHJvcHMpIHtcbiAgICB0aGlzLl9sZWFmbGV0RXZlbnRzID0gdGhpcy5iaW5kTGVhZmxldEV2ZW50cyh0aGlzLmV4dHJhY3RMZWFmbGV0RXZlbnRzKHRoaXMucHJvcHMpLCB0aGlzLl9sZWFmbGV0RXZlbnRzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbCA9IHRoaXMubGVhZmxldEVsZW1lbnQ7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX2xlYWZsZXRFdmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2KSB7XG4gICAgICBlbC5vZmYoZXYsIF90aGlzMi5fbGVhZmxldEV2ZW50c1tldl0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5leHRyYWN0TGVhZmxldEV2ZW50cyA9IGZ1bmN0aW9uIGV4dHJhY3RMZWFmbGV0RXZlbnRzKHByb3BzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKHJlcywgcHJvcCkge1xuICAgICAgaWYgKEVWRU5UU19SRS50ZXN0KHByb3ApKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wXSAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIF9rZXkgPSBwcm9wLnJlcGxhY2UoRVZFTlRTX1JFLCBmdW5jdGlvbiAobWF0Y2gsIHApIHtcbiAgICAgICAgICAgIHJldHVybiBwLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXNbX2tleV0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBfcHJvdG8uYmluZExlYWZsZXRFdmVudHMgPSBmdW5jdGlvbiBiaW5kTGVhZmxldEV2ZW50cyhuZXh0LCBwcmV2KSB7XG4gICAgaWYgKG5leHQgPT09IHZvaWQgMCkge1xuICAgICAgbmV4dCA9IHt9O1xuICAgIH1cblxuICAgIGlmIChwcmV2ID09PSB2b2lkIDApIHtcbiAgICAgIHByZXYgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgZWwgPSB0aGlzLmxlYWZsZXRFbGVtZW50O1xuICAgIGlmIChlbCA9PSBudWxsIHx8IGVsLm9uID09IG51bGwpIHJldHVybiB7fTtcblxuICAgIHZhciBkaWZmID0gX2V4dGVuZHMoe30sIHByZXYpO1xuXG4gICAgT2JqZWN0LmtleXMocHJldikuZm9yRWFjaChmdW5jdGlvbiAoZXYpIHtcbiAgICAgIGlmIChuZXh0W2V2XSA9PSBudWxsIHx8IHByZXZbZXZdICE9PSBuZXh0W2V2XSkge1xuICAgICAgICBkZWxldGUgZGlmZltldl07XG4gICAgICAgIGVsLm9mZihldiwgcHJldltldl0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKG5leHQpLmZvckVhY2goZnVuY3Rpb24gKGV2KSB7XG4gICAgICBpZiAocHJldltldl0gPT0gbnVsbCB8fCBuZXh0W2V2XSAhPT0gcHJldltldl0pIHtcbiAgICAgICAgZGlmZltldl0gPSBuZXh0W2V2XTtcbiAgICAgICAgZWwub24oZXYsIG5leHRbZXZdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGlmZjtcbiAgfTtcblxuICBfcHJvdG8uZmlyZUxlYWZsZXRFdmVudCA9IGZ1bmN0aW9uIGZpcmVMZWFmbGV0RXZlbnQodHlwZSwgZGF0YSkge1xuICAgIHZhciBlbCA9IHRoaXMubGVhZmxldEVsZW1lbnQ7XG4gICAgaWYgKGVsKSBlbC5maXJlKHR5cGUsIGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiBNYXBFdmVudGVkO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgeyBNYXBFdmVudGVkIGFzIGRlZmF1bHQgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExlYWZsZXRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vTWFwQ29tcG9uZW50JztcblxudmFyIE1hcExheWVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hcExheWVyLCBfTWFwQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNYXBMYXllcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX01hcENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbnRleHRWYWx1ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxlYWZsZXRFbGVtZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5sZWFmbGV0RWxlbWVudCA9IF90aGlzLmNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTWFwTGF5ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KF9wcm9wcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlTGVhZmxldEVsZW1lbnQoKSBtdXN0IGJlIGltcGxlbWVudGVkJyk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoX2Zyb21Qcm9wcywgX3RvUHJvcHMpIHt9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIF9NYXBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmxheWVyQ29udGFpbmVyLmFkZExheWVyKHRoaXMubGVhZmxldEVsZW1lbnQpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgX01hcENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmF0dHJpYnV0aW9uICE9PSBwcmV2UHJvcHMuYXR0cmlidXRpb24pIHtcbiAgICAgIHZhciBtYXAgPSB0aGlzLnByb3BzLmxlYWZsZXQubWFwO1xuXG4gICAgICBpZiAobWFwICE9IG51bGwgJiYgbWFwLmF0dHJpYnV0aW9uQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICAgIG1hcC5hdHRyaWJ1dGlvbkNvbnRyb2wucmVtb3ZlQXR0cmlidXRpb24ocHJldlByb3BzLmF0dHJpYnV0aW9uKTtcbiAgICAgICAgbWFwLmF0dHJpYnV0aW9uQ29udHJvbC5hZGRBdHRyaWJ1dGlvbih0aGlzLnByb3BzLmF0dHJpYnV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUxlYWZsZXRFbGVtZW50KHByZXZQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgX01hcENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMubGF5ZXJDb250YWluZXIucmVtb3ZlTGF5ZXIodGhpcy5sZWFmbGV0RWxlbWVudCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnRleHRWYWx1ZSA9PSBudWxsID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExlYWZsZXRQcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuY29udGV4dFZhbHVlXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhNYXBMYXllciwgW3tcbiAgICBrZXk6IFwibGF5ZXJDb250YWluZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmxlYWZsZXQubGF5ZXJDb250YWluZXIgfHwgdGhpcy5wcm9wcy5sZWFmbGV0Lm1hcDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFwTGF5ZXI7XG59KE1hcENvbXBvbmVudCk7XG5cbmV4cG9ydCB7IE1hcExheWVyIGFzIGRlZmF1bHQgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IE1hcmtlciBhcyBMZWFmbGV0TWFya2VyIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGVhZmxldFByb3ZpZGVyLCB3aXRoTGVhZmxldCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgTWFwTGF5ZXIgZnJvbSAnLi9NYXBMYXllcic7XG5cbnZhciBNYXJrZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXBMYXllcikge1xuICBfaW5oZXJpdHNMb29zZShNYXJrZXIsIF9NYXBMYXllcik7XG5cbiAgZnVuY3Rpb24gTWFya2VyKCkge1xuICAgIHJldHVybiBfTWFwTGF5ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hcmtlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgZWwgPSBuZXcgTGVhZmxldE1hcmtlcihwcm9wcy5wb3NpdGlvbiwgdGhpcy5nZXRPcHRpb25zKHByb3BzKSk7XG4gICAgdGhpcy5jb250ZXh0VmFsdWUgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgcHJvcHMubGVhZmxldCksIHt9LCB7XG4gICAgICBwb3B1cENvbnRhaW5lcjogZWxcbiAgICB9KTtcbiAgICByZXR1cm4gZWw7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoZnJvbVByb3BzLCB0b1Byb3BzKSB7XG4gICAgaWYgKHRvUHJvcHMucG9zaXRpb24gIT09IGZyb21Qcm9wcy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRMYXRMbmcodG9Qcm9wcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRvUHJvcHMuaWNvbiAhPT0gZnJvbVByb3BzLmljb24pIHtcbiAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0SWNvbih0b1Byb3BzLmljb24pO1xuICAgIH1cblxuICAgIGlmICh0b1Byb3BzLnpJbmRleE9mZnNldCAhPT0gZnJvbVByb3BzLnpJbmRleE9mZnNldCkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRaSW5kZXhPZmZzZXQodG9Qcm9wcy56SW5kZXhPZmZzZXQpO1xuICAgIH1cblxuICAgIGlmICh0b1Byb3BzLm9wYWNpdHkgIT09IGZyb21Qcm9wcy5vcGFjaXR5KSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldE9wYWNpdHkodG9Qcm9wcy5vcGFjaXR5KTtcbiAgICB9XG5cbiAgICBpZiAodG9Qcm9wcy5kcmFnZ2FibGUgIT09IGZyb21Qcm9wcy5kcmFnZ2FibGUpIHtcbiAgICAgIGlmICh0b1Byb3BzLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LmRyYWdnaW5nLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICByZXR1cm4gY2hpbGRyZW4gPT0gbnVsbCB8fCB0aGlzLmNvbnRleHRWYWx1ZSA9PSBudWxsID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExlYWZsZXRQcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuY29udGV4dFZhbHVlXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBNYXJrZXI7XG59KE1hcExheWVyKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExlYWZsZXQoTWFya2VyKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG4vLyBmbG93bGludCBza2V0Y2h5LW51bGwtc3RyaW5nOm9mZlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IHsgTGVhZmxldFByb3ZpZGVyLCB3aXRoTGVhZmxldCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgeyBhZGRDbGFzc05hbWUsIHJlbW92ZUNsYXNzTmFtZSB9IGZyb20gJy4vdXRpbHMvdXBkYXRlQ2xhc3NOYW1lJztcbmltcG9ydCBvbWl0IGZyb20gJy4vdXRpbHMvb21pdCc7XG52YXIgaWRDb3VudGVyID0gMDtcblxudmFyIHVuaXF1ZUlkID0gZnVuY3Rpb24gdW5pcXVlSWQoKSB7XG4gIHJldHVybiArK2lkQ291bnRlcjtcbn07XG5cbnZhciBMRUFGTEVUX1BBTkVTID0gWyd0aWxlJywgJ3NoYWRvdycsICdvdmVybGF5JywgJ21hcCcsICdtYXJrZXInLCAndG9vbHRpcCcsICdwb3B1cCddO1xudmFyIFBBTkVfUkUgPSAvLSpwYW5lL2dpO1xuXG52YXIgaXNMZWFmbGV0UGFuZSA9IGZ1bmN0aW9uIGlzTGVhZmxldFBhbmUobmFtZSkge1xuICByZXR1cm4gTEVBRkxFVF9QQU5FUy5pbmRleE9mKG5hbWUucmVwbGFjZShQQU5FX1JFLCAnJykpICE9PSAtMTtcbn07XG5cbnZhciBwYW5lU3R5bGVzID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICBsZWZ0OiAwXG59O1xuXG52YXIgUGFuZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQYW5lLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgIG5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIGNvbnRleHQ6IHVuZGVmaW5lZFxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFN0eWxlXCIsIGZ1bmN0aW9uIChfdGVtcCkge1xuICAgICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8gX3RoaXMucHJvcHMgOiBfdGVtcCxcbiAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG5cbiAgICAgIHZhciBwYW5lID0gX3RoaXMuZ2V0UGFuZShfdGhpcy5zdGF0ZS5uYW1lKTtcblxuICAgICAgaWYgKHBhbmUpIHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgIGFkZENsYXNzTmFtZShwYW5lLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgLy8gV2l0aG91dCB0aGUgY2FzdCwgRmxvdyB0aHJvd3MgdGhpcyBlcnJvcjpcbiAgICAgICAgICAvLyAgIENhbm5vdCBhc3NpZ24gc3R5bGVba2V5XSB0byBwYW5lLnN0eWxlW2tleV0gYmVjYXVzZSBzdHJpbmdcbiAgICAgICAgICAvLyAgIGlzIGluY29tcGF0aWJsZSB3aXRoIG51bWJlci5cbiAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBwYW5lLnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUGFuZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jcmVhdGVQYW5lKHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm5hbWUpIHtcbiAgICAgIC8vIERvIG5vdGhpbmcgaWYgdGhpcy5zdGF0ZS5uYW1lIGlzIHVuZGVmaW5lZCBkdWUgdG8gZXJyb3JzIG9yXG4gICAgICAvLyBhbiBpbnZhbGlkIHByb3BzLm5hbWUgdmFsdWVcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHRoZSAnbmFtZScgcHJvcCBoYXMgY2hhbmdlZCB0aGUgY3VycmVudCBwYW5lIGlzIHVubW91bnRlZCBhbmQgYSBuZXdcbiAgICAvLyBwYW5lIGlzIGNyZWF0ZWQuXG5cblxuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHByZXZQcm9wcy5uYW1lKSB7XG4gICAgICB0aGlzLnJlbW92ZVBhbmUoKTtcbiAgICAgIHRoaXMuY3JlYXRlUGFuZSh0aGlzLnByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBwcmV2aW91cyBjc3MgY2xhc3MgbmFtZSBmcm9tIHRoZSBwYW5lIGlmIGl0IGhhcyBjaGFuZ2VkLlxuICAgICAgLy8gc2V0U3R5bGUoKSB3aWxsIHRha2UgY2FyZSBvZiBhZGRpbmcgaW4gdGhlIHVwZGF0ZWQgY2xhc3NOYW1lXG4gICAgICBpZiAocHJldlByb3BzLmNsYXNzTmFtZSAmJiB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gcHJldlByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgcGFuZSA9IHRoaXMuZ2V0UGFuZSh0aGlzLnN0YXRlLm5hbWUpO1xuXG4gICAgICAgIGlmIChwYW5lICE9IG51bGwgJiYgcHJldlByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3NOYW1lKHBhbmUsIHByZXZQcm9wcy5jbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFVwZGF0ZSB0aGUgcGFuZSdzIERPTSBub2RlIHN0eWxlIGFuZCBjbGFzc1xuXG5cbiAgICAgIHRoaXMuc2V0U3R5bGUodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlUGFuZSgpO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVQYW5lID0gZnVuY3Rpb24gY3JlYXRlUGFuZShwcm9wcykge1xuICAgIHZhciBtYXAgPSBwcm9wcy5sZWFmbGV0Lm1hcDtcbiAgICB2YXIgbmFtZSA9IHByb3BzLm5hbWUgfHwgXCJwYW5lLVwiICsgdW5pcXVlSWQoKTtcblxuICAgIGlmIChtYXAgIT0gbnVsbCAmJiBtYXAuY3JlYXRlUGFuZSAhPSBudWxsKSB7XG4gICAgICB2YXIgaXNEZWZhdWx0ID0gaXNMZWFmbGV0UGFuZShuYW1lKTtcbiAgICAgIHZhciBleGlzdGluZyA9IGlzRGVmYXVsdCB8fCB0aGlzLmdldFBhbmUobmFtZSk7XG5cbiAgICAgIGlmIChleGlzdGluZyA9PSBudWxsKSB7XG4gICAgICAgIG1hcC5jcmVhdGVQYW5lKG5hbWUsIHRoaXMuZ2V0UGFyZW50UGFuZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gaXNEZWZhdWx0ID8gXCJZb3UgbXVzdCB1c2UgYSB1bmlxdWUgbmFtZSBmb3IgYSBwYW5lIHRoYXQgaXMgbm90IGEgZGVmYXVsdCBsZWFmbGV0IHBhbmUgKFwiICsgbmFtZSArIFwiKVwiIDogXCJBIHBhbmUgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuIChcIiArIG5hbWUgKyBcIilcIjtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBjb250ZXh0OiBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgcHJvcHMubGVhZmxldCksIHt9LCB7XG4gICAgICAgICAgcGFuZTogbmFtZVxuICAgICAgICB9KVxuICAgICAgfSwgdGhpcy5zZXRTdHlsZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVQYW5lID0gZnVuY3Rpb24gcmVtb3ZlUGFuZSgpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGNyZWF0ZWQgcGFuZVxuICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5uYW1lO1xuXG4gICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgdmFyIHBhbmUgPSB0aGlzLmdldFBhbmUobmFtZSk7XG4gICAgICBpZiAocGFuZSAhPSBudWxsICYmIHBhbmUucmVtb3ZlKSBwYW5lLnJlbW92ZSgpO1xuICAgICAgdmFyIG1hcCA9IHRoaXMucHJvcHMubGVhZmxldC5tYXA7XG5cbiAgICAgIGlmIChtYXAgIT0gbnVsbCAmJiBtYXAuX3BhbmVzICE9IG51bGwpIHtcbiAgICAgICAgbWFwLl9wYW5lcyA9IG9taXQobWFwLl9wYW5lcywgbmFtZSk7XG4gICAgICAgIG1hcC5fcGFuZVJlbmRlcmVycyA9IG9taXQobWFwLl9wYW5lUmVuZGVyZXJzLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFBhcmVudFBhbmUgPSBmdW5jdGlvbiBnZXRQYXJlbnRQYW5lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFBhbmUodGhpcy5wcm9wcy5wYW5lIHx8IHRoaXMucHJvcHMubGVhZmxldC5wYW5lKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UGFuZSA9IGZ1bmN0aW9uIGdldFBhbmUobmFtZSkge1xuICAgIGlmIChuYW1lICE9IG51bGwgJiYgdGhpcy5wcm9wcy5sZWFmbGV0Lm1hcCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5sZWFmbGV0Lm1hcC5nZXRQYW5lKG5hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5zdGF0ZS5jb250ZXh0O1xuICAgIHJldHVybiBjb250ZXh0ID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGVhZmxldFByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29udGV4dFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHN0eWxlOiBwYW5lU3R5bGVzXG4gICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUGFuZTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExlYWZsZXQoUGFuZSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IE1hcExheWVyIGZyb20gJy4vTWFwTGF5ZXInO1xuaW1wb3J0IHBpY2sgZnJvbSAnLi91dGlscy9waWNrJztcbnZhciBPUFRJT05TID0gWydzdHJva2UnLCAnY29sb3InLCAnd2VpZ2h0JywgJ29wYWNpdHknLCAnbGluZUNhcCcsICdsaW5lSm9pbicsICdkYXNoQXJyYXknLCAnZGFzaE9mZnNldCcsICdmaWxsJywgJ2ZpbGxDb2xvcicsICdmaWxsT3BhY2l0eScsICdmaWxsUnVsZScsICdidWJibGluZ01vdXNlRXZlbnRzJywgJ3JlbmRlcmVyJywgJ2NsYXNzTmFtZScsIC8vIEludGVyYWN0aXZlIExheWVyXG4naW50ZXJhY3RpdmUnLCAvLyBMYXllclxuJ3BhbmUnLCAnYXR0cmlidXRpb24nXTtcblxudmFyIFBhdGggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXBMYXllcikge1xuICBfaW5oZXJpdHNMb29zZShQYXRoLCBfTWFwTGF5ZXIpO1xuXG4gIGZ1bmN0aW9uIFBhdGgocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9NYXBMYXllci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgaWYgKF90aGlzLmNvbnRleHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBfdGhpcy5jb250ZXh0VmFsdWUgPSBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgcHJvcHMubGVhZmxldCksIHt9LCB7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyOiBfdGhpcy5sZWFmbGV0RWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFBhdGgucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgX01hcExheWVyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMpO1xuXG4gICAgdGhpcy5zZXRTdHlsZUlmQ2hhbmdlZChwcmV2UHJvcHMsIHRoaXMucHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5nZXRQYXRoT3B0aW9ucyA9IGZ1bmN0aW9uIGdldFBhdGhPcHRpb25zKHByb3BzKSB7XG4gICAgcmV0dXJuIHBpY2socHJvcHMsIE9QVElPTlMpO1xuICB9O1xuXG4gIF9wcm90by5zZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRTdHlsZShvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0U3R5bGVJZkNoYW5nZWQgPSBmdW5jdGlvbiBzZXRTdHlsZUlmQ2hhbmdlZChmcm9tUHJvcHMsIHRvUHJvcHMpIHtcbiAgICB2YXIgbmV4dFN0eWxlID0gdGhpcy5nZXRQYXRoT3B0aW9ucyh0b1Byb3BzKTtcblxuICAgIGlmICghaXNFcXVhbChuZXh0U3R5bGUsIHRoaXMuZ2V0UGF0aE9wdGlvbnMoZnJvbVByb3BzKSkpIHtcbiAgICAgIHRoaXMuc2V0U3R5bGUobmV4dFN0eWxlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBhdGg7XG59KE1hcExheWVyKTtcblxuZXhwb3J0IHsgUGF0aCBhcyBkZWZhdWx0IH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgUG9seWdvbiBhcyBMZWFmbGV0UG9seWdvbiB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgd2l0aExlYWZsZXQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcblxudmFyIFBvbHlnb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXRoKSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvbHlnb24sIF9QYXRoKTtcblxuICBmdW5jdGlvbiBQb2x5Z29uKCkge1xuICAgIHJldHVybiBfUGF0aC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9seWdvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IExlYWZsZXRQb2x5Z29uKHByb3BzLnBvc2l0aW9ucywgdGhpcy5nZXRPcHRpb25zKHByb3BzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoZnJvbVByb3BzLCB0b1Byb3BzKSB7XG4gICAgaWYgKHRvUHJvcHMucG9zaXRpb25zICE9PSBmcm9tUHJvcHMucG9zaXRpb25zKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldExhdExuZ3ModG9Qcm9wcy5wb3NpdGlvbnMpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3R5bGVJZkNoYW5nZWQoZnJvbVByb3BzLCB0b1Byb3BzKTtcbiAgfTtcblxuICByZXR1cm4gUG9seWdvbjtcbn0oUGF0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFBvbHlnb24pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IFBvbHlsaW5lIGFzIExlYWZsZXRQb2x5bGluZSB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgd2l0aExlYWZsZXQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcblxudmFyIFBvbHlsaW5lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGF0aCkge1xuICBfaW5oZXJpdHNMb29zZShQb2x5bGluZSwgX1BhdGgpO1xuXG4gIGZ1bmN0aW9uIFBvbHlsaW5lKCkge1xuICAgIHJldHVybiBfUGF0aC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9seWxpbmUucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBMZWFmbGV0UG9seWxpbmUocHJvcHMucG9zaXRpb25zLCB0aGlzLmdldE9wdGlvbnMocHJvcHMpKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiB1cGRhdGVMZWFmbGV0RWxlbWVudChmcm9tUHJvcHMsIHRvUHJvcHMpIHtcbiAgICBpZiAodG9Qcm9wcy5wb3NpdGlvbnMgIT09IGZyb21Qcm9wcy5wb3NpdGlvbnMpIHtcbiAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0TGF0TG5ncyh0b1Byb3BzLnBvc2l0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdHlsZUlmQ2hhbmdlZChmcm9tUHJvcHMsIHRvUHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBQb2x5bGluZTtcbn0oUGF0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFBvbHlsaW5lKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyBQb3B1cCBhcyBMZWFmbGV0UG9wdXAgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IHdpdGhMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBEaXZPdmVybGF5IGZyb20gJy4vRGl2T3ZlcmxheSc7XG5cbnZhciBQb3B1cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Rpdk92ZXJsYXkpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9wdXAsIF9EaXZPdmVybGF5KTtcblxuICBmdW5jdGlvbiBQb3B1cCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfRGl2T3ZlcmxheS5jYWxsLmFwcGx5KF9EaXZPdmVybGF5LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUG9wdXBPcGVuXCIsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgcG9wdXAgPSBfcmVmLnBvcHVwO1xuXG4gICAgICBpZiAocG9wdXAgPT09IF90aGlzLmxlYWZsZXRFbGVtZW50KSB7XG4gICAgICAgIF90aGlzLm9uT3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUG9wdXBDbG9zZVwiLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBwb3B1cCA9IF9yZWYyLnBvcHVwO1xuXG4gICAgICBpZiAocG9wdXAgPT09IF90aGlzLmxlYWZsZXRFbGVtZW50KSB7XG4gICAgICAgIF90aGlzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblJlbmRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuYXV0b1BhbiAhPT0gZmFsc2UgJiYgX3RoaXMubGVhZmxldEVsZW1lbnQuaXNPcGVuKCkpIHtcbiAgICAgICAgaWYgKF90aGlzLmxlYWZsZXRFbGVtZW50Ll9tYXAgJiYgX3RoaXMubGVhZmxldEVsZW1lbnQuX21hcC5fcGFuQW5pbSkge1xuICAgICAgICAgIF90aGlzLmxlYWZsZXRFbGVtZW50Ll9tYXAuX3BhbkFuaW0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5sZWFmbGV0RWxlbWVudC5fYWRqdXN0UGFuKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9wdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyhwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyhfZXh0ZW5kcyh7fSwgX0Rpdk92ZXJsYXkucHJvdG90eXBlLmdldE9wdGlvbnMuY2FsbCh0aGlzLCBwcm9wcykpLCB7fSwge1xuICAgICAgYXV0b1BhbjogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMZWFmbGV0RWxlbWVudChwcm9wcykge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHByb3BzKTtcbiAgICBvcHRpb25zLmF1dG9QYW4gPSBwcm9wcy5hdXRvUGFuICE9PSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IExlYWZsZXRQb3B1cChvcHRpb25zLCBwcm9wcy5sZWFmbGV0LnBvcHVwQ29udGFpbmVyKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiB1cGRhdGVMZWFmbGV0RWxlbWVudChmcm9tUHJvcHMsIHRvUHJvcHMpIHtcbiAgICBpZiAodG9Qcm9wcy5wb3NpdGlvbiAhPT0gZnJvbVByb3BzLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldExhdExuZyh0b1Byb3BzLnBvc2l0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcbiAgICB2YXIgX3RoaXMkcHJvcHMkbGVhZmxldCA9IHRoaXMucHJvcHMubGVhZmxldCxcbiAgICAgICAgbWFwID0gX3RoaXMkcHJvcHMkbGVhZmxldC5tYXAsXG4gICAgICAgIHBvcHVwQ29udGFpbmVyID0gX3RoaXMkcHJvcHMkbGVhZmxldC5wb3B1cENvbnRhaW5lcjtcbiAgICB2YXIgZWwgPSB0aGlzLmxlYWZsZXRFbGVtZW50O1xuXG4gICAgaWYgKG1hcCAhPSBudWxsKSB7XG4gICAgICBtYXAub24oe1xuICAgICAgICBwb3B1cG9wZW46IHRoaXMub25Qb3B1cE9wZW4sXG4gICAgICAgIHBvcHVwY2xvc2U6IHRoaXMub25Qb3B1cENsb3NlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocG9wdXBDb250YWluZXIpIHtcbiAgICAgIC8vIEF0dGFjaCB0byBjb250YWluZXIgY29tcG9uZW50XG4gICAgICBwb3B1cENvbnRhaW5lci5iaW5kUG9wdXAoZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBdHRhY2ggdG8gYSBNYXBcbiAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICBlbC5zZXRMYXRMbmcocG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBlbC5vcGVuT24obWFwKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIG1hcCA9IHRoaXMucHJvcHMubGVhZmxldC5tYXA7XG5cbiAgICBpZiAobWFwICE9IG51bGwpIHtcbiAgICAgIG1hcC5vZmYoe1xuICAgICAgICBwb3B1cG9wZW46IHRoaXMub25Qb3B1cE9wZW4sXG4gICAgICAgIHBvcHVwY2xvc2U6IHRoaXMub25Qb3B1cENsb3NlXG4gICAgICB9KTtcbiAgICAgIG1hcC5yZW1vdmVMYXllcih0aGlzLmxlYWZsZXRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBfRGl2T3ZlcmxheS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gUG9wdXA7XG59KERpdk92ZXJsYXkpO1xuXG5fZGVmaW5lUHJvcGVydHkoUG9wdXAsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgcGFuZTogJ3BvcHVwUGFuZSdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoTGVhZmxldChQb3B1cCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIGFzIExlYWZsZXRSZWN0YW5nbGUgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IHdpdGhMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XG5cbnZhciBSZWN0YW5nbGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXRoKSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlY3RhbmdsZSwgX1BhdGgpO1xuXG4gIGZ1bmN0aW9uIFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gX1BhdGguYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlY3RhbmdsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IExlYWZsZXRSZWN0YW5nbGUocHJvcHMuYm91bmRzLCB0aGlzLmdldE9wdGlvbnMocHJvcHMpKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiB1cGRhdGVMZWFmbGV0RWxlbWVudChmcm9tUHJvcHMsIHRvUHJvcHMpIHtcbiAgICBpZiAodG9Qcm9wcy5ib3VuZHMgIT09IGZyb21Qcm9wcy5ib3VuZHMpIHtcbiAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0Qm91bmRzKHRvUHJvcHMuYm91bmRzKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0eWxlSWZDaGFuZ2VkKGZyb21Qcm9wcywgdG9Qcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIFJlY3RhbmdsZTtcbn0oUGF0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFJlY3RhbmdsZSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyBMYXllciwgU1ZHT3ZlcmxheSBhcyBMZWFmbGV0U1ZHT3ZlcmxheSB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHdpdGhMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9NYXBDb21wb25lbnQnO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWwsIG5hbWUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH1cbn1cblxudmFyIFNWR092ZXJsYXkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXBDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoU1ZHT3ZlcmxheSwgX01hcENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU1ZHT3ZlcmxheShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX01hcENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxlYWZsZXRFbGVtZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29udGFpbmVyXCIsIHZvaWQgMCk7XG5cbiAgICBfdGhpcy5sZWFmbGV0RWxlbWVudCA9IF90aGlzLmNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU1ZHT3ZlcmxheS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzZXRBdHRyaWJ1dGUoY29udGFpbmVyLCAneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICBzZXRBdHRyaWJ1dGUoY29udGFpbmVyLCAncHJlc2VydmVBc3BlY3RSYXRpbycsIHByb3BzLnByZXNlcnZlQXNwZWN0UmF0aW8pO1xuICAgIHNldEF0dHJpYnV0ZShjb250YWluZXIsICd2aWV3Qm94JywgcHJvcHMudmlld0JveCk7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgcmV0dXJuIG5ldyBMZWFmbGV0U1ZHT3ZlcmxheShjb250YWluZXIsIHByb3BzLmJvdW5kcywgdGhpcy5nZXRPcHRpb25zKHByb3BzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoZnJvbVByb3BzLCB0b1Byb3BzKSB7XG4gICAgaWYgKHRvUHJvcHMuYm91bmRzICE9PSBmcm9tUHJvcHMuYm91bmRzKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldEJvdW5kcyh0b1Byb3BzLmJvdW5kcyk7XG4gICAgfVxuXG4gICAgaWYgKHRvUHJvcHMub3BhY2l0eSAhPT0gZnJvbVByb3BzLm9wYWNpdHkpIHtcbiAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0T3BhY2l0eSh0b1Byb3BzLm9wYWNpdHkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0b1Byb3BzLnByZXNlcnZlQXNwZWN0UmF0aW8gIT09IGZyb21Qcm9wcy5wcmVzZXJ2ZUFzcGVjdFJhdGlvKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgdG9Qcm9wcy5wcmVzZXJ2ZUFzcGVjdFJhdGlvKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdG9Qcm9wcy52aWV3Qm94ICE9PSBmcm9tUHJvcHMudmlld0JveCkge1xuICAgICAgc2V0QXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCAndmlld0JveCcsIHRvUHJvcHMudmlld0JveCk7XG4gICAgfVxuXG4gICAgaWYgKHRvUHJvcHMuekluZGV4ICE9PSBmcm9tUHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldFpJbmRleCh0b1Byb3BzLnpJbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIF9NYXBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmxheWVyQ29udGFpbmVyLmFkZExheWVyKHRoaXMubGVhZmxldEVsZW1lbnQpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgX01hcENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmF0dHJpYnV0aW9uICE9PSBwcmV2UHJvcHMuYXR0cmlidXRpb24pIHtcbiAgICAgIHZhciBtYXAgPSB0aGlzLnByb3BzLmxlYWZsZXQubWFwO1xuXG4gICAgICBpZiAobWFwICE9IG51bGwgJiYgbWFwLmF0dHJpYnV0aW9uQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICAgIG1hcC5hdHRyaWJ1dGlvbkNvbnRyb2wucmVtb3ZlQXR0cmlidXRpb24ocHJldlByb3BzLmF0dHJpYnV0aW9uKTtcbiAgICAgICAgbWFwLmF0dHJpYnV0aW9uQ29udHJvbC5hZGRBdHRyaWJ1dGlvbih0aGlzLnByb3BzLmF0dHJpYnV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUxlYWZsZXRFbGVtZW50KHByZXZQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgX01hcENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMubGF5ZXJDb250YWluZXIucmVtb3ZlTGF5ZXIodGhpcy5sZWFmbGV0RWxlbWVudCk7XG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgIGlmIChjaGlsZHJlbiA9PSBudWxsIHx8IHRoaXMuY29udGFpbmVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoY2hpbGRyZW4sIHRoaXMuY29udGFpbmVyKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU1ZHT3ZlcmxheSwgW3tcbiAgICBrZXk6IFwibGF5ZXJDb250YWluZXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmxlYWZsZXQubGF5ZXJDb250YWluZXIgfHwgdGhpcy5wcm9wcy5sZWFmbGV0Lm1hcDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU1ZHT3ZlcmxheTtcbn0oTWFwQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExlYWZsZXQoU1ZHT3ZlcmxheSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgd2l0aExlYWZsZXQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IE1hcENvbnRyb2wgZnJvbSAnLi9NYXBDb250cm9sJztcblxudmFyIFNjYWxlQ29udHJvbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hcENvbnRyb2wpIHtcbiAgX2luaGVyaXRzTG9vc2UoU2NhbGVDb250cm9sLCBfTWFwQ29udHJvbCk7XG5cbiAgZnVuY3Rpb24gU2NhbGVDb250cm9sKCkge1xuICAgIHJldHVybiBfTWFwQ29udHJvbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2NhbGVDb250cm9sLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY3JlYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMZWFmbGV0RWxlbWVudChwcm9wcykge1xuICAgIHJldHVybiBuZXcgQ29udHJvbC5TY2FsZShwcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIFNjYWxlQ29udHJvbDtcbn0oTWFwQ29udHJvbCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFNjYWxlQ29udHJvbCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgVGlsZUxheWVyIGFzIExlYWZsZXRUaWxlTGF5ZXIgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IHdpdGhMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBHcmlkTGF5ZXIgZnJvbSAnLi9HcmlkTGF5ZXInO1xuXG52YXIgVGlsZUxheWVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfR3JpZExheWVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKFRpbGVMYXllciwgX0dyaWRMYXllcik7XG5cbiAgZnVuY3Rpb24gVGlsZUxheWVyKCkge1xuICAgIHJldHVybiBfR3JpZExheWVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUaWxlTGF5ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBMZWFmbGV0VGlsZUxheWVyKHByb3BzLnVybCwgdGhpcy5nZXRPcHRpb25zKHByb3BzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gdXBkYXRlTGVhZmxldEVsZW1lbnQoZnJvbVByb3BzLCB0b1Byb3BzKSB7XG4gICAgX0dyaWRMYXllci5wcm90b3R5cGUudXBkYXRlTGVhZmxldEVsZW1lbnQuY2FsbCh0aGlzLCBmcm9tUHJvcHMsIHRvUHJvcHMpO1xuXG4gICAgaWYgKHRvUHJvcHMudXJsICE9PSBmcm9tUHJvcHMudXJsKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldFVybCh0b1Byb3BzLnVybCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUaWxlTGF5ZXI7XG59KEdyaWRMYXllcik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFRpbGVMYXllcik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCB7IFRvb2x0aXAgYXMgTGVhZmxldFRvb2x0aXAgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IHdpdGhMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBEaXZPdmVybGF5IGZyb20gJy4vRGl2T3ZlcmxheSc7XG5cbnZhciBUb29sdGlwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRGl2T3ZlcmxheSkge1xuICBfaW5oZXJpdHNMb29zZShUb29sdGlwLCBfRGl2T3ZlcmxheSk7XG5cbiAgZnVuY3Rpb24gVG9vbHRpcCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfRGl2T3ZlcmxheS5jYWxsLmFwcGx5KF9EaXZPdmVybGF5LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uVG9vbHRpcE9wZW5cIiwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB0b29sdGlwID0gX3JlZi50b29sdGlwO1xuXG4gICAgICBpZiAodG9vbHRpcCA9PT0gX3RoaXMubGVhZmxldEVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMub25PcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Ub29sdGlwQ2xvc2VcIiwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdG9vbHRpcCA9IF9yZWYyLnRvb2x0aXA7XG5cbiAgICAgIGlmICh0b29sdGlwID09PSBfdGhpcy5sZWFmbGV0RWxlbWVudCkge1xuICAgICAgICBfdGhpcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVG9vbHRpcC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICByZXR1cm4gbmV3IExlYWZsZXRUb29sdGlwKHRoaXMuZ2V0T3B0aW9ucyhwcm9wcyksIHByb3BzLmxlYWZsZXQucG9wdXBDb250YWluZXIpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBwb3B1cENvbnRhaW5lciA9IHRoaXMucHJvcHMubGVhZmxldC5wb3B1cENvbnRhaW5lcjtcbiAgICBpZiAocG9wdXBDb250YWluZXIgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHBvcHVwQ29udGFpbmVyLm9uKHtcbiAgICAgIHRvb2x0aXBvcGVuOiB0aGlzLm9uVG9vbHRpcE9wZW4sXG4gICAgICB0b29sdGlwY2xvc2U6IHRoaXMub25Ub29sdGlwQ2xvc2VcbiAgICB9KTtcbiAgICBwb3B1cENvbnRhaW5lci5iaW5kVG9vbHRpcCh0aGlzLmxlYWZsZXRFbGVtZW50KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgcG9wdXBDb250YWluZXIgPSB0aGlzLnByb3BzLmxlYWZsZXQucG9wdXBDb250YWluZXI7XG4gICAgaWYgKHBvcHVwQ29udGFpbmVyID09IG51bGwpIHJldHVybjtcbiAgICBwb3B1cENvbnRhaW5lci5vZmYoe1xuICAgICAgdG9vbHRpcG9wZW46IHRoaXMub25Ub29sdGlwT3BlbixcbiAgICAgIHRvb2x0aXBjbG9zZTogdGhpcy5vblRvb2x0aXBDbG9zZVxuICAgIH0pO1xuXG4gICAgaWYgKHBvcHVwQ29udGFpbmVyLl9tYXAgIT0gbnVsbCkge1xuICAgICAgcG9wdXBDb250YWluZXIudW5iaW5kVG9vbHRpcCh0aGlzLmxlYWZsZXRFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFRvb2x0aXA7XG59KERpdk92ZXJsYXkpO1xuXG5fZGVmaW5lUHJvcGVydHkoVG9vbHRpcCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBwYW5lOiAndG9vbHRpcFBhbmUnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExlYWZsZXQoVG9vbHRpcCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgVmlkZW9PdmVybGF5IGFzIExlYWZsZXRWaWRlb092ZXJsYXksIGxhdExuZ0JvdW5kcyB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgd2l0aExlYWZsZXQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IE1hcExheWVyIGZyb20gJy4vTWFwTGF5ZXInO1xuXG52YXIgVmlkZW9PdmVybGF5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwTGF5ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoVmlkZW9PdmVybGF5LCBfTWFwTGF5ZXIpO1xuXG4gIGZ1bmN0aW9uIFZpZGVvT3ZlcmxheSgpIHtcbiAgICByZXR1cm4gX01hcExheWVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBWaWRlb092ZXJsYXkucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBMZWFmbGV0VmlkZW9PdmVybGF5KHByb3BzLnVybCwgcHJvcHMuYm91bmRzLCB0aGlzLmdldE9wdGlvbnMocHJvcHMpKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBfTWFwTGF5ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5wbGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LmdldEVsZW1lbnQoKS5wbGF5KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by51cGRhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIHVwZGF0ZUxlYWZsZXRFbGVtZW50KGZyb21Qcm9wcywgdG9Qcm9wcykge1xuICAgIGlmICh0b1Byb3BzLnVybCAhPT0gZnJvbVByb3BzLnVybCkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRVcmwodG9Qcm9wcy51cmwpO1xuICAgIH1cblxuICAgIGlmICh0b1Byb3BzLmJvdW5kcyAhPT0gZnJvbVByb3BzLmJvdW5kcykge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRCb3VuZHMobGF0TG5nQm91bmRzKHRvUHJvcHMuYm91bmRzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRvUHJvcHMub3BhY2l0eSAhPT0gZnJvbVByb3BzLm9wYWNpdHkpIHtcbiAgICAgIHRoaXMubGVhZmxldEVsZW1lbnQuc2V0T3BhY2l0eSh0b1Byb3BzLm9wYWNpdHkpO1xuICAgIH1cblxuICAgIGlmICh0b1Byb3BzLnpJbmRleCAhPT0gZnJvbVByb3BzLnpJbmRleCkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5zZXRaSW5kZXgodG9Qcm9wcy56SW5kZXgpO1xuICAgIH0gLy8gZmxvd2xpbnQtbmV4dC1saW5lIHNrZXRjaHktbnVsbC1ib29sOm9mZlxuXG5cbiAgICBpZiAodG9Qcm9wcy5wbGF5ID09PSB0cnVlICYmICFmcm9tUHJvcHMucGxheSkge1xuICAgICAgdGhpcy5sZWFmbGV0RWxlbWVudC5nZXRFbGVtZW50KCkucGxheSgpOyAvLyBmbG93bGludC1uZXh0LWxpbmUgc2tldGNoeS1udWxsLWJvb2w6b2ZmXG4gICAgfSBlbHNlIGlmICghdG9Qcm9wcy5wbGF5ICYmIGZyb21Qcm9wcy5wbGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LmdldEVsZW1lbnQoKS5wYXVzZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVmlkZW9PdmVybGF5O1xufShNYXBMYXllcik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFZpZGVvT3ZlcmxheSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgeyBUaWxlTGF5ZXIgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyB3aXRoTGVhZmxldCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgR3JpZExheWVyIGZyb20gJy4vR3JpZExheWVyJztcbmltcG9ydCB7IEVWRU5UU19SRSB9IGZyb20gJy4vTWFwRXZlbnRlZCc7XG5cbnZhciBXTVNUaWxlTGF5ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9HcmlkTGF5ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoV01TVGlsZUxheWVyLCBfR3JpZExheWVyKTtcblxuICBmdW5jdGlvbiBXTVNUaWxlTGF5ZXIoKSB7XG4gICAgcmV0dXJuIF9HcmlkTGF5ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFdNU1RpbGVMYXllci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZUxlYWZsZXRFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlTGVhZmxldEVsZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgdXJsID0gcHJvcHMudXJsLFxuICAgICAgICBwYXJhbXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1widXJsXCJdKTtcblxuICAgIHZhciBfdGhpcyRnZXRPcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHBhcmFtcyksXG4gICAgICAgIF9sID0gX3RoaXMkZ2V0T3B0aW9ucy5sZWFmbGV0LFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkZ2V0T3B0aW9ucywgW1wibGVhZmxldFwiXSk7XG5cbiAgICByZXR1cm4gbmV3IFRpbGVMYXllci5XTVModXJsLCBvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlTGVhZmxldEVsZW1lbnQgPSBmdW5jdGlvbiB1cGRhdGVMZWFmbGV0RWxlbWVudChmcm9tUHJvcHMsIHRvUHJvcHMpIHtcbiAgICBfR3JpZExheWVyLnByb3RvdHlwZS51cGRhdGVMZWFmbGV0RWxlbWVudC5jYWxsKHRoaXMsIGZyb21Qcm9wcywgdG9Qcm9wcyk7XG5cbiAgICB2YXIgcHJldlVybCA9IGZyb21Qcm9wcy51cmwsXG4gICAgICAgIF9wbyA9IGZyb21Qcm9wcy5vcGFjaXR5LFxuICAgICAgICBfcHogPSBmcm9tUHJvcHMuekluZGV4LFxuICAgICAgICBwcmV2UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShmcm9tUHJvcHMsIFtcInVybFwiLCBcIm9wYWNpdHlcIiwgXCJ6SW5kZXhcIl0pO1xuXG4gICAgdmFyIF90aGlzJGdldE9wdGlvbnMyID0gdGhpcy5nZXRPcHRpb25zKHByZXZQcm9wcyksXG4gICAgICAgIF9wbCA9IF90aGlzJGdldE9wdGlvbnMyLmxlYWZsZXQsXG4gICAgICAgIHByZXZQYXJhbXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRnZXRPcHRpb25zMiwgW1wibGVhZmxldFwiXSk7XG5cbiAgICB2YXIgdXJsID0gdG9Qcm9wcy51cmwsXG4gICAgICAgIF9vID0gdG9Qcm9wcy5vcGFjaXR5LFxuICAgICAgICBfeiA9IHRvUHJvcHMuekluZGV4LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHRvUHJvcHMsIFtcInVybFwiLCBcIm9wYWNpdHlcIiwgXCJ6SW5kZXhcIl0pO1xuXG4gICAgdmFyIF90aGlzJGdldE9wdGlvbnMzID0gdGhpcy5nZXRPcHRpb25zKHByb3BzKSxcbiAgICAgICAgX2wgPSBfdGhpcyRnZXRPcHRpb25zMy5sZWFmbGV0LFxuICAgICAgICBwYXJhbXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRnZXRPcHRpb25zMywgW1wibGVhZmxldFwiXSk7XG5cbiAgICBpZiAodXJsICE9PSBwcmV2VXJsKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldFVybCh1cmwpO1xuICAgIH1cblxuICAgIGlmICghaXNFcXVhbChwYXJhbXMsIHByZXZQYXJhbXMpKSB7XG4gICAgICB0aGlzLmxlYWZsZXRFbGVtZW50LnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMocGFyYW1zKSB7XG4gICAgdmFyIHN1cGVyT3B0aW9ucyA9IF9HcmlkTGF5ZXIucHJvdG90eXBlLmdldE9wdGlvbnMuY2FsbCh0aGlzLCBwYXJhbXMpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN1cGVyT3B0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChvcHRpb25zLCBrZXkpIHtcbiAgICAgIGlmICghRVZFTlRTX1JFLnRlc3Qoa2V5KSkge1xuICAgICAgICBvcHRpb25zW2tleV0gPSBzdXBlck9wdGlvbnNba2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBXTVNUaWxlTGF5ZXI7XG59KEdyaWRMYXllcik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFdNU1RpbGVMYXllcik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgd2l0aExlYWZsZXQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IE1hcENvbnRyb2wgZnJvbSAnLi9NYXBDb250cm9sJztcblxudmFyIFpvb21Db250cm9sID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFwQ29udHJvbCkge1xuICBfaW5oZXJpdHNMb29zZShab29tQ29udHJvbCwgX01hcENvbnRyb2wpO1xuXG4gIGZ1bmN0aW9uIFpvb21Db250cm9sKCkge1xuICAgIHJldHVybiBfTWFwQ29udHJvbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gWm9vbUNvbnRyb2wucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVMZWFmbGV0RWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRFbGVtZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBDb250cm9sLlpvb20ocHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBab29tQ29udHJvbDtcbn0oTWFwQ29udHJvbCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMZWFmbGV0KFpvb21Db250cm9sKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIGZvcndhcmRSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG52YXIgbGVhZmxldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCB2YXIgdXNlTGVhZmxldCA9IGZ1bmN0aW9uIHVzZUxlYWZsZXQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KGxlYWZsZXRDb250ZXh0KTtcbn07XG5leHBvcnQgdmFyIExlYWZsZXRDb25zdW1lciA9IGxlYWZsZXRDb250ZXh0LkNvbnN1bWVyO1xuZXhwb3J0IHZhciBMZWFmbGV0UHJvdmlkZXIgPSBsZWFmbGV0Q29udGV4dC5Qcm92aWRlcjtcbmV4cG9ydCB2YXIgd2l0aExlYWZsZXQgPSBmdW5jdGlvbiB3aXRoTGVhZmxldChXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHZhciBXaXRoTGVhZmxldENvbXBvbmVudCA9IGZ1bmN0aW9uIFdpdGhMZWFmbGV0Q29tcG9uZW50KHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGVhZmxldENvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAobGVhZmxldCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBsZWFmbGV0OiBsZWFmbGV0LFxuICAgICAgICByZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBuYW1lID0gLy8gZmxvd2xpbnQtbmV4dC1saW5lIHNrZXRjaHktbnVsbC1zdHJpbmc6b2ZmXG4gIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICBXaXRoTGVhZmxldENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiTGVhZmxldChcIiArIG5hbWUgKyBcIilcIjtcbiAgdmFyIExlYWZsZXRDb21wb25lbnQgPSBmb3J3YXJkUmVmKFdpdGhMZWFmbGV0Q29tcG9uZW50KTtcbiAgaG9pc3ROb25SZWFjdFN0YXRpY3MoTGVhZmxldENvbXBvbmVudCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIHJldHVybiBMZWFmbGV0Q29tcG9uZW50O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgTGVhZmxldENvbnN1bWVyLCBMZWFmbGV0UHJvdmlkZXIsIHdpdGhMZWFmbGV0LCB1c2VMZWFmbGV0IH0gZnJvbSAnLi9jb250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXR0cmlidXRpb25Db250cm9sIH0gZnJvbSAnLi9BdHRyaWJ1dGlvbkNvbnRyb2wnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaXJjbGUgfSBmcm9tICcuL0NpcmNsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENpcmNsZU1hcmtlciB9IGZyb20gJy4vQ2lyY2xlTWFya2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGl2T3ZlcmxheSB9IGZyb20gJy4vRGl2T3ZlcmxheSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZlYXR1cmVHcm91cCB9IGZyb20gJy4vRmVhdHVyZUdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2VvSlNPTiB9IGZyb20gJy4vR2VvSlNPTic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWRMYXllciB9IGZyb20gJy4vR3JpZExheWVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VPdmVybGF5IH0gZnJvbSAnLi9JbWFnZU92ZXJsYXknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXllckdyb3VwIH0gZnJvbSAnLi9MYXllckdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5ZXJzQ29udHJvbCwgQ29udHJvbGxlZExheWVyIH0gZnJvbSAnLi9MYXllcnNDb250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFwIH0gZnJvbSAnLi9NYXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXBDb21wb25lbnQgfSBmcm9tICcuL01hcENvbXBvbmVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcENvbnRyb2wgfSBmcm9tICcuL01hcENvbnRyb2wnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXBFdmVudGVkIH0gZnJvbSAnLi9NYXBFdmVudGVkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFwTGF5ZXIgfSBmcm9tICcuL01hcExheWVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya2VyIH0gZnJvbSAnLi9NYXJrZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYW5lIH0gZnJvbSAnLi9QYW5lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGF0aCB9IGZyb20gJy4vUGF0aCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvbHlnb24gfSBmcm9tICcuL1BvbHlnb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb2x5bGluZSB9IGZyb20gJy4vUG9seWxpbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWN0YW5nbGUgfSBmcm9tICcuL1JlY3RhbmdsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjYWxlQ29udHJvbCB9IGZyb20gJy4vU2NhbGVDb250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU1ZHT3ZlcmxheSB9IGZyb20gJy4vU1ZHT3ZlcmxheSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRpbGVMYXllciB9IGZyb20gJy4vVGlsZUxheWVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZpZGVvT3ZlcmxheSB9IGZyb20gJy4vVmlkZW9PdmVybGF5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV01TVGlsZUxheWVyIH0gZnJvbSAnLi9XTVNUaWxlTGF5ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBab29tQ29udHJvbCB9IGZyb20gJy4vWm9vbUNvbnRyb2wnOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbWl0KG9iaikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwga2V5c1RvT21pdCA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAga2V5c1RvT21pdFtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgaWYgKGtleXNUb09taXQuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpY2sob2JqZWN0LCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIG9iamVjdFtrZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgb2JqW2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERvbVV0aWwgfSBmcm9tICdsZWFmbGV0JztcblxudmFyIHNwbGl0Q2xhc3NOYW1lID0gZnVuY3Rpb24gc3BsaXRDbGFzc05hbWUoY2xhc3NOYW1lKSB7XG4gIGlmIChjbGFzc05hbWUgPT09IHZvaWQgMCkge1xuICAgIGNsYXNzTmFtZSA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZpbHRlcihCb29sZWFuKTtcbn07XG5cbmV4cG9ydCB2YXIgYWRkQ2xhc3NOYW1lID0gZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKGNvbnRhaW5lciwgY2xhc3NOYW1lKSB7XG4gIHNwbGl0Q2xhc3NOYW1lKGNsYXNzTmFtZSkuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgRG9tVXRpbC5hZGRDbGFzcyhjb250YWluZXIsIGNscyk7XG4gIH0pO1xufTtcbmV4cG9ydCB2YXIgcmVtb3ZlQ2xhc3NOYW1lID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3NOYW1lKGNvbnRhaW5lciwgY2xhc3NOYW1lKSB7XG4gIHNwbGl0Q2xhc3NOYW1lKGNsYXNzTmFtZSkuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgRG9tVXRpbC5yZW1vdmVDbGFzcyhjb250YWluZXIsIGNscyk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoY29udGFpbmVyLCBwcmV2Q2xhc3NOYW1lLCBuZXh0Q2xhc3NOYW1lKSB7XG4gIGlmIChjb250YWluZXIgIT0gbnVsbCAmJiBuZXh0Q2xhc3NOYW1lICE9PSBwcmV2Q2xhc3NOYW1lKSB7XG4gICAgaWYgKHByZXZDbGFzc05hbWUgIT0gbnVsbCAmJiBwcmV2Q2xhc3NOYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlbW92ZUNsYXNzTmFtZShjb250YWluZXIsIHByZXZDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmIChuZXh0Q2xhc3NOYW1lICE9IG51bGwgJiYgbmV4dENsYXNzTmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICBhZGRDbGFzc05hbWUoY29udGFpbmVyLCBuZXh0Q2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbn0pOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJ2YXIgRDJSID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU3NztcbmltcG9ydCBwYXJzZXIgZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHtzRXhwcn0gZnJvbSAnLi9wcm9jZXNzJztcblxuXG5cbmZ1bmN0aW9uIHJlbmFtZShvYmosIHBhcmFtcykge1xuICB2YXIgb3V0TmFtZSA9IHBhcmFtc1swXTtcbiAgdmFyIGluTmFtZSA9IHBhcmFtc1sxXTtcbiAgaWYgKCEob3V0TmFtZSBpbiBvYmopICYmIChpbk5hbWUgaW4gb2JqKSkge1xuICAgIG9ialtvdXROYW1lXSA9IG9ialtpbk5hbWVdO1xuICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAzKSB7XG4gICAgICBvYmpbb3V0TmFtZV0gPSBwYXJhbXNbMl0ob2JqW291dE5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZDJyKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dCAqIEQyUjtcbn1cblxuZnVuY3Rpb24gY2xlYW5XS1Qod2t0KSB7XG4gIGlmICh3a3QudHlwZSA9PT0gJ0dFT0dDUycpIHtcbiAgICB3a3QucHJvak5hbWUgPSAnbG9uZ2xhdCc7XG4gIH0gZWxzZSBpZiAod2t0LnR5cGUgPT09ICdMT0NBTF9DUycpIHtcbiAgICB3a3QucHJvak5hbWUgPSAnaWRlbnRpdHknO1xuICAgIHdrdC5sb2NhbCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiB3a3QuUFJPSkVDVElPTiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHdrdC5wcm9qTmFtZSA9IE9iamVjdC5rZXlzKHdrdC5QUk9KRUNUSU9OKVswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2t0LnByb2pOYW1lID0gd2t0LlBST0pFQ1RJT047XG4gICAgfVxuICB9XG4gIGlmICh3a3QuQVhJUykge1xuICAgIHZhciBheGlzT3JkZXIgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMCwgaWkgPSB3a3QuQVhJUy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICB2YXIgYXhpcyA9IHdrdC5BWElTW2ldO1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBheGlzWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoZGVzY3JpcHRvci5pbmRleE9mKCdub3J0aCcpICE9PSAtMSkge1xuICAgICAgICBheGlzT3JkZXIgKz0gJ24nO1xuICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdG9yLmluZGV4T2YoJ3NvdXRoJykgIT09IC0xKSB7XG4gICAgICAgIGF4aXNPcmRlciArPSAncyc7XG4gICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0b3IuaW5kZXhPZignZWFzdCcpICE9PSAtMSkge1xuICAgICAgICBheGlzT3JkZXIgKz0gJ2UnO1xuICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdG9yLmluZGV4T2YoJ3dlc3QnKSAhPT0gLTEpIHtcbiAgICAgICAgYXhpc09yZGVyICs9ICd3JztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF4aXNPcmRlci5sZW5ndGggPT09IDIpIHtcbiAgICAgIGF4aXNPcmRlciArPSAndSc7XG4gICAgfVxuICAgIGlmIChheGlzT3JkZXIubGVuZ3RoID09PSAzKSB7XG4gICAgICB3a3QuYXhpcyA9IGF4aXNPcmRlcjtcbiAgICB9XG4gIH1cbiAgaWYgKHdrdC5VTklUKSB7XG4gICAgd2t0LnVuaXRzID0gd2t0LlVOSVQubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh3a3QudW5pdHMgPT09ICdtZXRyZScpIHtcbiAgICAgIHdrdC51bml0cyA9ICdtZXRlcic7XG4gICAgfVxuICAgIGlmICh3a3QuVU5JVC5jb252ZXJ0KSB7XG4gICAgICBpZiAod2t0LnR5cGUgPT09ICdHRU9HQ1MnKSB7XG4gICAgICAgIGlmICh3a3QuREFUVU0gJiYgd2t0LkRBVFVNLlNQSEVST0lEKSB7XG4gICAgICAgICAgd2t0LnRvX21ldGVyID0gd2t0LlVOSVQuY29udmVydCp3a3QuREFUVU0uU1BIRVJPSUQuYTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2t0LnRvX21ldGVyID0gd2t0LlVOSVQuY29udmVydDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGdlb2djcyA9IHdrdC5HRU9HQ1M7XG4gIGlmICh3a3QudHlwZSA9PT0gJ0dFT0dDUycpIHtcbiAgICBnZW9nY3MgPSB3a3Q7XG4gIH1cbiAgaWYgKGdlb2djcykge1xuICAgIC8vaWYod2t0LkdFT0dDUy5QUklNRU0mJndrdC5HRU9HQ1MuUFJJTUVNLmNvbnZlcnQpe1xuICAgIC8vICB3a3QuZnJvbV9ncmVlbndpY2g9d2t0LkdFT0dDUy5QUklNRU0uY29udmVydCpEMlI7XG4gICAgLy99XG4gICAgaWYgKGdlb2djcy5EQVRVTSkge1xuICAgICAgd2t0LmRhdHVtQ29kZSA9IGdlb2djcy5EQVRVTS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdrdC5kYXR1bUNvZGUgPSBnZW9nY3MubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAod2t0LmRhdHVtQ29kZS5zbGljZSgwLCAyKSA9PT0gJ2RfJykge1xuICAgICAgd2t0LmRhdHVtQ29kZSA9IHdrdC5kYXR1bUNvZGUuc2xpY2UoMik7XG4gICAgfVxuICAgIGlmICh3a3QuZGF0dW1Db2RlID09PSAnbmV3X3plYWxhbmRfZ2VvZGV0aWNfZGF0dW1fMTk0OScgfHwgd2t0LmRhdHVtQ29kZSA9PT0gJ25ld196ZWFsYW5kXzE5NDknKSB7XG4gICAgICB3a3QuZGF0dW1Db2RlID0gJ256Z2Q0OSc7XG4gICAgfVxuICAgIGlmICh3a3QuZGF0dW1Db2RlID09PSAnd2dzXzE5ODQnIHx8IHdrdC5kYXR1bUNvZGUgPT09ICd3b3JsZF9nZW9kZXRpY19zeXN0ZW1fMTk4NCcpIHtcbiAgICAgIGlmICh3a3QuUFJPSkVDVElPTiA9PT0gJ01lcmNhdG9yX0F1eGlsaWFyeV9TcGhlcmUnKSB7XG4gICAgICAgIHdrdC5zcGhlcmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgd2t0LmRhdHVtQ29kZSA9ICd3Z3M4NCc7XG4gICAgfVxuICAgIGlmICh3a3QuZGF0dW1Db2RlLnNsaWNlKC02KSA9PT0gJ19mZXJybycpIHtcbiAgICAgIHdrdC5kYXR1bUNvZGUgPSB3a3QuZGF0dW1Db2RlLnNsaWNlKDAsIC0gNik7XG4gICAgfVxuICAgIGlmICh3a3QuZGF0dW1Db2RlLnNsaWNlKC04KSA9PT0gJ19qYWthcnRhJykge1xuICAgICAgd2t0LmRhdHVtQ29kZSA9IHdrdC5kYXR1bUNvZGUuc2xpY2UoMCwgLSA4KTtcbiAgICB9XG4gICAgaWYgKH53a3QuZGF0dW1Db2RlLmluZGV4T2YoJ2JlbGdlJykpIHtcbiAgICAgIHdrdC5kYXR1bUNvZGUgPSAncm5iNzInO1xuICAgIH1cbiAgICBpZiAoZ2VvZ2NzLkRBVFVNICYmIGdlb2djcy5EQVRVTS5TUEhFUk9JRCkge1xuICAgICAgd2t0LmVsbHBzID0gZ2VvZ2NzLkRBVFVNLlNQSEVST0lELm5hbWUucmVwbGFjZSgnXzE5JywgJycpLnJlcGxhY2UoL1tDY11sYXJrZVxcXzE4LywgJ2NscmsnKTtcbiAgICAgIGlmICh3a3QuZWxscHMudG9Mb3dlckNhc2UoKS5zbGljZSgwLCAxMykgPT09ICdpbnRlcm5hdGlvbmFsJykge1xuICAgICAgICB3a3QuZWxscHMgPSAnaW50bCc7XG4gICAgICB9XG5cbiAgICAgIHdrdC5hID0gZ2VvZ2NzLkRBVFVNLlNQSEVST0lELmE7XG4gICAgICB3a3QucmYgPSBwYXJzZUZsb2F0KGdlb2djcy5EQVRVTS5TUEhFUk9JRC5yZiwgMTApO1xuICAgIH1cblxuICAgIGlmIChnZW9nY3MuREFUVU0gJiYgZ2VvZ2NzLkRBVFVNLlRPV0dTODQpIHtcbiAgICAgIHdrdC5kYXR1bV9wYXJhbXMgPSBnZW9nY3MuREFUVU0uVE9XR1M4NDtcbiAgICB9XG4gICAgaWYgKH53a3QuZGF0dW1Db2RlLmluZGV4T2YoJ29zZ2JfMTkzNicpKSB7XG4gICAgICB3a3QuZGF0dW1Db2RlID0gJ29zZ2IzNic7XG4gICAgfVxuICAgIGlmICh+d2t0LmRhdHVtQ29kZS5pbmRleE9mKCdvc25pXzE5NTInKSkge1xuICAgICAgd2t0LmRhdHVtQ29kZSA9ICdvc25pNTInO1xuICAgIH1cbiAgICBpZiAofndrdC5kYXR1bUNvZGUuaW5kZXhPZigndG02NScpXG4gICAgICB8fCB+d2t0LmRhdHVtQ29kZS5pbmRleE9mKCdnZW9kZXRpY19kYXR1bV9vZl8xOTY1JykpIHtcbiAgICAgIHdrdC5kYXR1bUNvZGUgPSAnaXJlNjUnO1xuICAgIH1cbiAgICBpZiAod2t0LmRhdHVtQ29kZSA9PT0gJ2NoMTkwMysnKSB7XG4gICAgICB3a3QuZGF0dW1Db2RlID0gJ2NoMTkwMyc7XG4gICAgfVxuICAgIGlmICh+d2t0LmRhdHVtQ29kZS5pbmRleE9mKCdpc3JhZWwnKSkge1xuICAgICAgd2t0LmRhdHVtQ29kZSA9ICdpc3I5Myc7XG4gICAgfVxuICB9XG4gIGlmICh3a3QuYiAmJiAhaXNGaW5pdGUod2t0LmIpKSB7XG4gICAgd2t0LmIgPSB3a3QuYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvTWV0ZXIoaW5wdXQpIHtcbiAgICB2YXIgcmF0aW8gPSB3a3QudG9fbWV0ZXIgfHwgMTtcbiAgICByZXR1cm4gaW5wdXQgKiByYXRpbztcbiAgfVxuICB2YXIgcmVuYW1lciA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gcmVuYW1lKHdrdCwgYSk7XG4gIH07XG4gIHZhciBsaXN0ID0gW1xuICAgIFsnc3RhbmRhcmRfcGFyYWxsZWxfMScsICdTdGFuZGFyZF9QYXJhbGxlbF8xJ10sXG4gICAgWydzdGFuZGFyZF9wYXJhbGxlbF8yJywgJ1N0YW5kYXJkX1BhcmFsbGVsXzInXSxcbiAgICBbJ2ZhbHNlX2Vhc3RpbmcnLCAnRmFsc2VfRWFzdGluZyddLFxuICAgIFsnZmFsc2Vfbm9ydGhpbmcnLCAnRmFsc2VfTm9ydGhpbmcnXSxcbiAgICBbJ2NlbnRyYWxfbWVyaWRpYW4nLCAnQ2VudHJhbF9NZXJpZGlhbiddLFxuICAgIFsnbGF0aXR1ZGVfb2Zfb3JpZ2luJywgJ0xhdGl0dWRlX09mX09yaWdpbiddLFxuICAgIFsnbGF0aXR1ZGVfb2Zfb3JpZ2luJywgJ0NlbnRyYWxfUGFyYWxsZWwnXSxcbiAgICBbJ3NjYWxlX2ZhY3RvcicsICdTY2FsZV9GYWN0b3InXSxcbiAgICBbJ2swJywgJ3NjYWxlX2ZhY3RvciddLFxuICAgIFsnbGF0aXR1ZGVfb2ZfY2VudGVyJywgJ0xhdGl0dWRlX09mX0NlbnRlciddLFxuICAgIFsnbGF0aXR1ZGVfb2ZfY2VudGVyJywgJ0xhdGl0dWRlX29mX2NlbnRlciddLFxuICAgIFsnbGF0MCcsICdsYXRpdHVkZV9vZl9jZW50ZXInLCBkMnJdLFxuICAgIFsnbG9uZ2l0dWRlX29mX2NlbnRlcicsICdMb25naXR1ZGVfT2ZfQ2VudGVyJ10sXG4gICAgWydsb25naXR1ZGVfb2ZfY2VudGVyJywgJ0xvbmdpdHVkZV9vZl9jZW50ZXInXSxcbiAgICBbJ2xvbmdjJywgJ2xvbmdpdHVkZV9vZl9jZW50ZXInLCBkMnJdLFxuICAgIFsneDAnLCAnZmFsc2VfZWFzdGluZycsIHRvTWV0ZXJdLFxuICAgIFsneTAnLCAnZmFsc2Vfbm9ydGhpbmcnLCB0b01ldGVyXSxcbiAgICBbJ2xvbmcwJywgJ2NlbnRyYWxfbWVyaWRpYW4nLCBkMnJdLFxuICAgIFsnbGF0MCcsICdsYXRpdHVkZV9vZl9vcmlnaW4nLCBkMnJdLFxuICAgIFsnbGF0MCcsICdzdGFuZGFyZF9wYXJhbGxlbF8xJywgZDJyXSxcbiAgICBbJ2xhdDEnLCAnc3RhbmRhcmRfcGFyYWxsZWxfMScsIGQycl0sXG4gICAgWydsYXQyJywgJ3N0YW5kYXJkX3BhcmFsbGVsXzInLCBkMnJdLFxuICAgIFsnYXppbXV0aCcsICdBemltdXRoJ10sXG4gICAgWydhbHBoYScsICdhemltdXRoJywgZDJyXSxcbiAgICBbJ3Nyc0NvZGUnLCAnbmFtZSddXG4gIF07XG4gIGxpc3QuZm9yRWFjaChyZW5hbWVyKTtcbiAgaWYgKCF3a3QubG9uZzAgJiYgd2t0LmxvbmdjICYmICh3a3QucHJvak5hbWUgPT09ICdBbGJlcnNfQ29uaWNfRXF1YWxfQXJlYScgfHwgd2t0LnByb2pOYW1lID09PSAnTGFtYmVydF9BemltdXRoYWxfRXF1YWxfQXJlYScpKSB7XG4gICAgd2t0LmxvbmcwID0gd2t0LmxvbmdjO1xuICB9XG4gIGlmICghd2t0LmxhdF90cyAmJiB3a3QubGF0MSAmJiAod2t0LnByb2pOYW1lID09PSAnU3RlcmVvZ3JhcGhpY19Tb3V0aF9Qb2xlJyB8fCB3a3QucHJvak5hbWUgPT09ICdQb2xhciBTdGVyZW9ncmFwaGljICh2YXJpYW50IEIpJykpIHtcbiAgICB3a3QubGF0MCA9IGQycih3a3QubGF0MSA+IDAgPyA5MCA6IC05MCk7XG4gICAgd2t0LmxhdF90cyA9IHdrdC5sYXQxO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih3a3QpIHtcbiAgdmFyIGxpc3AgPSBwYXJzZXIod2t0KTtcbiAgdmFyIHR5cGUgPSBsaXNwLnNoaWZ0KCk7XG4gIHZhciBuYW1lID0gbGlzcC5zaGlmdCgpO1xuICBsaXNwLnVuc2hpZnQoWyduYW1lJywgbmFtZV0pO1xuICBsaXNwLnVuc2hpZnQoWyd0eXBlJywgdHlwZV0pO1xuICB2YXIgb2JqID0ge307XG4gIHNFeHByKGxpc3AsIG9iaik7XG4gIGNsZWFuV0tUKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBwYXJzZVN0cmluZztcblxudmFyIE5FVVRSQUwgPSAxO1xudmFyIEtFWVdPUkQgPSAyO1xudmFyIE5VTUJFUiA9IDM7XG52YXIgUVVPVEVEID0gNDtcbnZhciBBRlRFUlFVT1RFID0gNTtcbnZhciBFTkRFRCA9IC0xO1xudmFyIHdoaXRlc3BhY2UgPSAvXFxzLztcbnZhciBsYXRpbiA9IC9bQS1aYS16XS87XG52YXIga2V5d29yZCA9IC9bQS1aYS16ODRdLztcbnZhciBlbmRUaGluZ3MgPSAvWyxcXF1dLztcbnZhciBkaWdldHMgPSAvW1xcZFxcLkVcXC1cXCtdLztcbi8vIGNvbnN0IGlnbm9yZWRDaGFyID0gL1tcXHNfXFwtXFwvXFwoXFwpXS9nO1xuZnVuY3Rpb24gUGFyc2VyKHRleHQpIHtcbiAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignbm90IGEgc3RyaW5nJyk7XG4gIH1cbiAgdGhpcy50ZXh0ID0gdGV4dC50cmltKCk7XG4gIHRoaXMubGV2ZWwgPSAwO1xuICB0aGlzLnBsYWNlID0gMDtcbiAgdGhpcy5yb290ID0gbnVsbDtcbiAgdGhpcy5zdGFjayA9IFtdO1xuICB0aGlzLmN1cnJlbnRPYmplY3QgPSBudWxsO1xuICB0aGlzLnN0YXRlID0gTkVVVFJBTDtcbn1cblBhcnNlci5wcm90b3R5cGUucmVhZENoYXJpY3RlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgY2hhciA9IHRoaXMudGV4dFt0aGlzLnBsYWNlKytdO1xuICBpZiAodGhpcy5zdGF0ZSAhPT0gUVVPVEVEKSB7XG4gICAgd2hpbGUgKHdoaXRlc3BhY2UudGVzdChjaGFyKSkge1xuICAgICAgaWYgKHRoaXMucGxhY2UgPj0gdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjaGFyID0gdGhpcy50ZXh0W3RoaXMucGxhY2UrK107XG4gICAgfVxuICB9XG4gIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgIGNhc2UgTkVVVFJBTDpcbiAgICAgIHJldHVybiB0aGlzLm5ldXRyYWwoY2hhcik7XG4gICAgY2FzZSBLRVlXT1JEOlxuICAgICAgcmV0dXJuIHRoaXMua2V5d29yZChjaGFyKVxuICAgIGNhc2UgUVVPVEVEOlxuICAgICAgcmV0dXJuIHRoaXMucXVvdGVkKGNoYXIpO1xuICAgIGNhc2UgQUZURVJRVU9URTpcbiAgICAgIHJldHVybiB0aGlzLmFmdGVycXVvdGUoY2hhcik7XG4gICAgY2FzZSBOVU1CRVI6XG4gICAgICByZXR1cm4gdGhpcy5udW1iZXIoY2hhcik7XG4gICAgY2FzZSBFTkRFRDpcbiAgICAgIHJldHVybjtcbiAgfVxufTtcblBhcnNlci5wcm90b3R5cGUuYWZ0ZXJxdW90ZSA9IGZ1bmN0aW9uKGNoYXIpIHtcbiAgaWYgKGNoYXIgPT09ICdcIicpIHtcbiAgICB0aGlzLndvcmQgKz0gJ1wiJztcbiAgICB0aGlzLnN0YXRlID0gUVVPVEVEO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZW5kVGhpbmdzLnRlc3QoY2hhcikpIHtcbiAgICB0aGlzLndvcmQgPSB0aGlzLndvcmQudHJpbSgpO1xuICAgIHRoaXMuYWZ0ZXJJdGVtKGNoYXIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ2hhdm5cXCd0IGhhbmRsZWQgXCInICtjaGFyICsgJ1wiIGluIGFmdGVycXVvdGUgeWV0LCBpbmRleCAnICsgdGhpcy5wbGFjZSk7XG59O1xuUGFyc2VyLnByb3RvdHlwZS5hZnRlckl0ZW0gPSBmdW5jdGlvbihjaGFyKSB7XG4gIGlmIChjaGFyID09PSAnLCcpIHtcbiAgICBpZiAodGhpcy53b3JkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmN1cnJlbnRPYmplY3QucHVzaCh0aGlzLndvcmQpO1xuICAgIH1cbiAgICB0aGlzLndvcmQgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSBORVVUUkFMO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY2hhciA9PT0gJ10nKSB7XG4gICAgdGhpcy5sZXZlbC0tO1xuICAgIGlmICh0aGlzLndvcmQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY3VycmVudE9iamVjdC5wdXNoKHRoaXMud29yZCk7XG4gICAgICB0aGlzLndvcmQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gTkVVVFJBTDtcbiAgICB0aGlzLmN1cnJlbnRPYmplY3QgPSB0aGlzLnN0YWNrLnBvcCgpO1xuICAgIGlmICghdGhpcy5jdXJyZW50T2JqZWN0KSB7XG4gICAgICB0aGlzLnN0YXRlID0gRU5ERUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG59O1xuUGFyc2VyLnByb3RvdHlwZS5udW1iZXIgPSBmdW5jdGlvbihjaGFyKSB7XG4gIGlmIChkaWdldHMudGVzdChjaGFyKSkge1xuICAgIHRoaXMud29yZCArPSBjaGFyO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZW5kVGhpbmdzLnRlc3QoY2hhcikpIHtcbiAgICB0aGlzLndvcmQgPSBwYXJzZUZsb2F0KHRoaXMud29yZCk7XG4gICAgdGhpcy5hZnRlckl0ZW0oY2hhcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignaGF2blxcJ3QgaGFuZGxlZCBcIicgK2NoYXIgKyAnXCIgaW4gbnVtYmVyIHlldCwgaW5kZXggJyArIHRoaXMucGxhY2UpO1xufTtcblBhcnNlci5wcm90b3R5cGUucXVvdGVkID0gZnVuY3Rpb24oY2hhcikge1xuICBpZiAoY2hhciA9PT0gJ1wiJykge1xuICAgIHRoaXMuc3RhdGUgPSBBRlRFUlFVT1RFO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLndvcmQgKz0gY2hhcjtcbiAgcmV0dXJuO1xufTtcblBhcnNlci5wcm90b3R5cGUua2V5d29yZCA9IGZ1bmN0aW9uKGNoYXIpIHtcbiAgaWYgKGtleXdvcmQudGVzdChjaGFyKSkge1xuICAgIHRoaXMud29yZCArPSBjaGFyO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY2hhciA9PT0gJ1snKSB7XG4gICAgdmFyIG5ld09iamVjdHMgPSBbXTtcbiAgICBuZXdPYmplY3RzLnB1c2godGhpcy53b3JkKTtcbiAgICB0aGlzLmxldmVsKys7XG4gICAgaWYgKHRoaXMucm9vdCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yb290ID0gbmV3T2JqZWN0cztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50T2JqZWN0LnB1c2gobmV3T2JqZWN0cyk7XG4gICAgfVxuICAgIHRoaXMuc3RhY2sucHVzaCh0aGlzLmN1cnJlbnRPYmplY3QpO1xuICAgIHRoaXMuY3VycmVudE9iamVjdCA9IG5ld09iamVjdHM7XG4gICAgdGhpcy5zdGF0ZSA9IE5FVVRSQUw7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChlbmRUaGluZ3MudGVzdChjaGFyKSkge1xuICAgIHRoaXMuYWZ0ZXJJdGVtKGNoYXIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ2hhdm5cXCd0IGhhbmRsZWQgXCInICtjaGFyICsgJ1wiIGluIGtleXdvcmQgeWV0LCBpbmRleCAnICsgdGhpcy5wbGFjZSk7XG59O1xuUGFyc2VyLnByb3RvdHlwZS5uZXV0cmFsID0gZnVuY3Rpb24oY2hhcikge1xuICBpZiAobGF0aW4udGVzdChjaGFyKSkge1xuICAgIHRoaXMud29yZCA9IGNoYXI7XG4gICAgdGhpcy5zdGF0ZSA9IEtFWVdPUkQ7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChjaGFyID09PSAnXCInKSB7XG4gICAgdGhpcy53b3JkID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IFFVT1RFRDtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGRpZ2V0cy50ZXN0KGNoYXIpKSB7XG4gICAgdGhpcy53b3JkID0gY2hhcjtcbiAgICB0aGlzLnN0YXRlID0gTlVNQkVSO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZW5kVGhpbmdzLnRlc3QoY2hhcikpIHtcbiAgICB0aGlzLmFmdGVySXRlbShjaGFyKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdoYXZuXFwndCBoYW5kbGVkIFwiJyArY2hhciArICdcIiBpbiBuZXV0cmFsIHlldCwgaW5kZXggJyArIHRoaXMucGxhY2UpO1xufTtcblBhcnNlci5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24oKSB7XG4gIHdoaWxlICh0aGlzLnBsYWNlIDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgIHRoaXMucmVhZENoYXJpY3RlcigpO1xuICB9XG4gIGlmICh0aGlzLnN0YXRlID09PSBFTkRFRCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gcGFyc2Ugc3RyaW5nIFwiJyArdGhpcy50ZXh0ICsgJ1wiLiBTdGF0ZSBpcyAnICsgdGhpcy5zdGF0ZSk7XG59O1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyh0eHQpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIodHh0KTtcbiAgcmV0dXJuIHBhcnNlci5vdXRwdXQoKTtcbn1cbiIsIlxuXG5mdW5jdGlvbiBtYXBpdChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgIHZhbHVlLnVuc2hpZnQoa2V5KTtcbiAgICBrZXkgPSBudWxsO1xuICB9XG4gIHZhciB0aGluZyA9IGtleSA/IHt9IDogb2JqO1xuXG4gIHZhciBvdXQgPSB2YWx1ZS5yZWR1Y2UoZnVuY3Rpb24obmV3T2JqLCBpdGVtKSB7XG4gICAgc0V4cHIoaXRlbSwgbmV3T2JqKTtcbiAgICByZXR1cm4gbmV3T2JqXG4gIH0sIHRoaW5nKTtcbiAgaWYgKGtleSkge1xuICAgIG9ialtrZXldID0gb3V0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzRXhwcih2LCBvYmopIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgb2JqW3ZdID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGtleSA9IHYuc2hpZnQoKTtcbiAgaWYgKGtleSA9PT0gJ1BBUkFNRVRFUicpIHtcbiAgICBrZXkgPSB2LnNoaWZ0KCk7XG4gIH1cbiAgaWYgKHYubGVuZ3RoID09PSAxKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodlswXSkpIHtcbiAgICAgIG9ialtrZXldID0ge307XG4gICAgICBzRXhwcih2WzBdLCBvYmpba2V5XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9ialtrZXldID0gdlswXTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF2Lmxlbmd0aCkge1xuICAgIG9ialtrZXldID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGtleSA9PT0gJ1RPV0dTODQnKSB7XG4gICAgb2JqW2tleV0gPSB2O1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoa2V5ID09PSAnQVhJUycpIHtcbiAgICBpZiAoIShrZXkgaW4gb2JqKSkge1xuICAgICAgb2JqW2tleV0gPSBbXTtcbiAgICB9XG4gICAgb2JqW2tleV0ucHVzaCh2KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHt9O1xuICB9XG5cbiAgdmFyIGk7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnVU5JVCc6XG4gICAgY2FzZSAnUFJJTUVNJzpcbiAgICBjYXNlICdWRVJUX0RBVFVNJzpcbiAgICAgIG9ialtrZXldID0ge1xuICAgICAgICBuYW1lOiB2WzBdLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGNvbnZlcnQ6IHZbMV1cbiAgICAgIH07XG4gICAgICBpZiAodi5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgc0V4cHIodlsyXSwgb2JqW2tleV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgJ1NQSEVST0lEJzpcbiAgICBjYXNlICdFTExJUFNPSUQnOlxuICAgICAgb2JqW2tleV0gPSB7XG4gICAgICAgIG5hbWU6IHZbMF0sXG4gICAgICAgIGE6IHZbMV0sXG4gICAgICAgIHJmOiB2WzJdXG4gICAgICB9O1xuICAgICAgaWYgKHYubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNFeHByKHZbM10sIG9ialtrZXldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlICdQUk9KRUNURURDUlMnOlxuICAgIGNhc2UgJ1BST0pDUlMnOlxuICAgIGNhc2UgJ0dFT0dDUyc6XG4gICAgY2FzZSAnR0VPQ0NTJzpcbiAgICBjYXNlICdQUk9KQ1MnOlxuICAgIGNhc2UgJ0xPQ0FMX0NTJzpcbiAgICBjYXNlICdHRU9EQ1JTJzpcbiAgICBjYXNlICdHRU9ERVRJQ0NSUyc6XG4gICAgY2FzZSAnR0VPREVUSUNEQVRVTSc6XG4gICAgY2FzZSAnRURBVFVNJzpcbiAgICBjYXNlICdFTkdJTkVFUklOR0RBVFVNJzpcbiAgICBjYXNlICdWRVJUX0NTJzpcbiAgICBjYXNlICdWRVJUQ1JTJzpcbiAgICBjYXNlICdWRVJUSUNBTENSUyc6XG4gICAgY2FzZSAnQ09NUERfQ1MnOlxuICAgIGNhc2UgJ0NPTVBPVU5EQ1JTJzpcbiAgICBjYXNlICdFTkdJTkVFUklOR0NSUyc6XG4gICAgY2FzZSAnRU5HQ1JTJzpcbiAgICBjYXNlICdGSVRURURfQ1MnOlxuICAgIGNhc2UgJ0xPQ0FMX0RBVFVNJzpcbiAgICBjYXNlICdEQVRVTSc6XG4gICAgICB2WzBdID0gWyduYW1lJywgdlswXV07XG4gICAgICBtYXBpdChvYmosIGtleSwgdik7XG4gICAgICByZXR1cm47XG4gICAgZGVmYXVsdDpcbiAgICAgIGkgPSAtMTtcbiAgICAgIHdoaWxlICgrK2kgPCB2Lmxlbmd0aCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gc0V4cHIodiwgb2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFwaXQob2JqLCBrZXksIHYpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9