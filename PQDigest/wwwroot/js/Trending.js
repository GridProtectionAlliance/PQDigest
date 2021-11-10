(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Trending"],{

/***/ "../node_modules/isnumber/index.js":
/*!*****************************************!*\
  !*** ../node_modules/isnumber/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isNumber

/**
 * Determine if something is a non-infinite javascript number.
 * @param  {Number}  n A (potential) number to see if it is a number.
 * @return {Boolean}   True for non-infinite numbers, false for all else.
 */
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

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

/***/ "../node_modules/stats-lite/stats.js":
/*!*******************************************!*\
  !*** ../node_modules/stats-lite/stats.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.numbers = numbers
module.exports.sum = sum
module.exports.mean = mean
module.exports.median = median
module.exports.mode = mode
module.exports.variance = populationVariance
module.exports.sampleVariance = sampleVariance
module.exports.populationVariance = populationVariance
module.exports.stdev = populationStdev
module.exports.sampleStdev = sampleStdev
module.exports.populationStdev = populationStdev
module.exports.percentile = percentile
module.exports.histogram = histogram

var isNumber = __webpack_require__(/*! isnumber */ "../node_modules/isnumber/index.js")

function numbers(vals) {
  var nums = []
  if (vals == null)
    return nums

  for (var i = 0; i < vals.length; i++) {
    if (isNumber(vals[i]))
      nums.push(+vals[i])
  }
  return nums
}

function nsort(vals) {
  return vals.sort(function numericSort(a, b) { return a - b })
}

function sum(vals) {
  vals = numbers(vals)
  var total = 0
  for (var i = 0; i < vals.length; i++) {
    total += vals[i]
  }
  return total
}

function mean(vals) {
  vals = numbers(vals)
  if (vals.length === 0) return NaN
  return (sum(vals) / vals.length)
}

function median(vals) {
  vals = numbers(vals)
  if (vals.length === 0) return NaN

  var half = (vals.length / 2) | 0

  vals = nsort(vals)
  if (vals.length % 2) {
    // Odd length, true middle element
    return vals[half]
  }
  else {
    // Even length, average middle two elements
    return (vals[half-1] + vals[half]) / 2.0
  }
}

// Returns the mode of a unimodal dataset
// If the dataset is multi-modal, returns a Set containing the modes
function mode(vals) {
  vals = numbers(vals)
  if (vals.length === 0) return NaN
  var mode = NaN
  var dist = {}

  for (var i = 0; i < vals.length; i++) {
    var value = vals[i]
    var me = dist[value] || 0
    me++
    dist[value] = me
  }

  var rank = numbers(Object.keys(dist).sort(function sortMembers(a, b) { return dist[b] - dist[a] }))
  mode = rank[0]
  if (dist[rank[1]] == dist[mode]) {
    // multi-modal
    if (rank.length == vals.length) {
      // all values are modes
      return vals
    }
    var modes = new Set([mode])
    var modeCount = dist[mode]
    for (var i = 1; i < rank.length; i++) {
      if (dist[rank[i]] == modeCount) {
        modes.add(rank[i])
      }
      else {
        break
      }
    }
    return modes
  }
  return mode
}

// This helper finds the mean of all the values, then squares the difference
// from the mean for each value and returns the resulting array.  This is the
// core of the varience functions - the difference being dividing by N or N-1.
function valuesMinusMeanSquared(vals) {
  vals = numbers(vals)
  var avg = mean(vals)
  var diffs = []
  for (var i = 0; i < vals.length; i++) {
    diffs.push(Math.pow((vals[i] - avg), 2))
  }
  return diffs
}

// Population Variance = average squared deviation from mean
function populationVariance(vals) {
  return mean(valuesMinusMeanSquared(vals))
}

// Sample Variance
function sampleVariance(vals) {
  var diffs = valuesMinusMeanSquared(vals)
  if (diffs.length <= 1) return NaN

  return sum(diffs) / (diffs.length - 1)
}


// Population Standard Deviation = sqrt of population variance
function populationStdev(vals) {
  return Math.sqrt(populationVariance(vals))
}

// Sample Standard Deviation = sqrt of sample variance
function sampleStdev(vals) {
  return Math.sqrt(sampleVariance(vals))
}

function percentile(vals, ptile) {
  vals = numbers(vals)
  if (vals.length === 0 || ptile == null || ptile < 0) return NaN

  // Fudge anything over 100 to 1.0
  if (ptile > 1) ptile = 1
  vals = nsort(vals)
  var i = (vals.length * ptile) - 0.5
  if ((i | 0) === i) return vals[i]
  // interpolated percentile -- using Estimation method
  var int_part = i | 0
  var fract = i - int_part
  return (1 - fract) * vals[int_part] + fract * vals[Math.min(int_part + 1, vals.length - 1)]
}

function histogram (vals, bins) {
  if (vals == null) {
    return null
  }
  vals = nsort(numbers(vals))
  if (vals.length === 0) {
    return null
  }
  if (bins == null) {
    // pick bins by simple method: Math.sqrt(n)
    bins = Math.sqrt(vals.length)
  }
  bins = Math.round(bins)
  if (bins < 1) {
    bins = 1
  }

  var min = vals[0]
  var max = vals[vals.length - 1]
  if (min === max) {
    // fudge for non-variant data
    min = min - 0.5
    max = max + 0.5
  }

  var range = (max - min)
  // make the bins slightly larger by expanding the range about 10%
  // this helps with dumb floating point stuff
  var binWidth = (range + (range * 0.05)) / bins
  var midpoint = (min + max) / 2
  // even bin count, midpoint makes an edge
  var leftEdge = midpoint - (binWidth * Math.floor(bins / 2))
  if (bins % 2 !== 0) {
    // odd bin count, center middle bin on midpoint
    var leftEdge = (midpoint - (binWidth / 2)) - (binWidth * Math.floor(bins / 2))
  }

  var hist = {
    values: Array(bins).fill(0),
    bins: bins,
    binWidth: binWidth,
    binLimits: [leftEdge, leftEdge + (binWidth * bins)]
  }

  var binIndex = 0
  for (var i = 0; i < vals.length; i++) {
    while (vals[i] > (((binIndex + 1) * binWidth) + leftEdge)) {
      binIndex++
    }
    hist.values[binIndex]++
  }

  return hist
}


/***/ }),

/***/ "./tsx/Trending/ExportCSV.tsx":
/*!************************************!*\
  !*** ./tsx/Trending/ExportCSV.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ "../node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
//******************************************************************************************************
//  ExportCSV.tsx - Gbtc
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
//  05/17/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



var MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
var MomentDateFormat = 'YYYY-MM-DD';
var ExportCSV = function (props) {
    function GetData() {
        var query = "\n            from(bucket: \"" + bucket + "\")\n            |> range(start: " + moment__WEBPACK_IMPORTED_MODULE_1___default.a.tz(props.StartDate, 'America/Chicago').utc().format(MomentDateTimeFormat) + "Z, stop: " + moment__WEBPACK_IMPORTED_MODULE_1___default.a.tz(props.EndDate, 'America/Chicago').utc().format(MomentDateTimeFormat) + "Z)\n            |> filter(fn: (r) => " + props.Channels.map(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8); }).map(function (c) { return 'r.tag == "' + c + '"'; }).join(' or ') + ")\n        ";
        return $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', "Token " + token);
            },
            type: "POST",
            url: host + "/api/v2/query?org=" + org,
            contentType: "application/json; encoding=utf-8",
            data: JSON.stringify({ query: query, type: 'flux' }),
            cache: true,
            async: true
        });
    }
    function Process(data) {
        var rows = data.split('\r\n');
        var i = 0;
        var header = rows[i++].split(',');
        var tagIndex = header.indexOf('tag');
        var timeIndex = header.indexOf('_time');
        var valueIndex = header.indexOf('_value');
        var fieldIndex = header.indexOf('_field');
        var dict = {};
        var _loop_1 = function () {
            var _a;
            var row = rows[i].split(',');
            if (row[tagIndex] == undefined || row[tagIndex] == "tag" || row[fieldIndex] == "flags")
                return "continue";
            var channel = props.Channels.find(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8) == row[tagIndex]; });
            var field = row[fieldIndex];
            var timeStamp = row[timeIndex];
            var channelName = channel.MeasurementType + " " + channel.MeasurementCharacteristic + " " + channel.Phase + " " + field;
            if (dict.hasOwnProperty(timeStamp)) {
                dict[timeStamp][channelName] = parseFloat(row[valueIndex]);
            }
            else {
                dict[timeStamp] = (_a = {}, _a[channelName] = parseFloat(row[valueIndex]), _a);
            }
        };
        for (; i < rows.length; i++) {
            _loop_1();
        }
        return dict;
    }
    function ExportToCsv(fileName, data) {
        if (Object.keys(data).length < 1)
            return;
        var headers = __spread(['time'], Object.keys(data[Object.keys(data)[0]]));
        var rows = [headers];
        $.each(Object.keys(data), function (index, timeStamp) {
            rows.push(headers.map(function (header) {
                if (header == 'time')
                    return moment__WEBPACK_IMPORTED_MODULE_1___default.a.utc(timeStamp).tz('America/Chicago').format(MomentDateTimeFormat);
                else
                    return data[timeStamp][header];
            }));
        });
        var processRow = function (row) {
            var finalVal = '';
            for (var j = 0; j < row.length; j++) {
                var innerValue = row[j] == undefined ? '' : row[j].toString();
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
            navigator.msSaveBlob(blob, fileName);
        }
        else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: 'btn btn-primary', onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, dict;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GetData()];
                    case 1:
                        data = _a.sent();
                        dict = Process(data);
                        ExportToCsv(props.Meter.Name + "_" + props.StartDate + "_" + props.EndDate + ".csv", dict);
                        return [2 /*return*/];
                }
            });
        }); } }, " Export CSV");
};
/* harmony default export */ __webpack_exports__["default"] = (ExportCSV);


/***/ }),

/***/ "./tsx/Trending/Trending.tsx":
/*!***********************************!*\
  !*** ./tsx/Trending/Trending.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "../node_modules/history/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-timezone */ "../node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "../node_modules/d3-selection/src/index.js");
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! stats-lite */ "../node_modules/stats-lite/stats.js");
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(stats_lite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ExportCSV__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExportCSV */ "./tsx/Trending/ExportCSV.tsx");
//******************************************************************************************************
//  Trending.tsx - Gbtc
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
var __assign = (undefined && undefined.__assign) || function () {
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











var DateRanges = ['1 day', '3 days', '7 days', '1 month', '3 months', '6 months', 'Year to date', '1 year', 'custom'];
var MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
var MomentDateFormat = 'YYYY-MM-DD';
var MomentTimeZone = 'America/Chicago';
var Trending = function (props) {
    var _a, _b;
    var history = Object(history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"])();
    var qs = querystring__WEBPACK_IMPORTED_MODULE_3___default.a.parse(history.location.search.substring(1));
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([qs.startDate == undefined ? moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(30, 'days').format(MomentDateTimeFormat) : qs.startDate, qs.endDate == undefined ? moment__WEBPACK_IMPORTED_MODULE_5___default()().format(MomentDateTimeFormat) : qs.endDate]), 2), dates = _c[0], setDates = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), meters = _d[0], setMeters = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(undefined), 2), meter = _e[0], setMeter = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]), 2), channels = _f[0], setChannels = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(qs.dateRange == undefined ? '7 days' : qs.dateRange), 2), dateRange = _g[0], setDateRange = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('stats'), 2), showStats = _h[0], setShowStats = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState((_a = qs === null || qs === void 0 ? void 0 : qs.aggregation) !== null && _a !== void 0 ? _a : 'none'), 2), aggregation = _j[0], setAggregation = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0), 2), hover = _k[0], setHover = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var handle = GetMeters();
        handle.done(function (data) { return setMeters(data); });
        history.listen(function () {
            setDates([qs.startDate, qs.endDate]);
            console.log('listening');
        });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
            history.listen = null;
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        console.log('update');
        return function () {
        };
    }, [history.location.search]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var meterID = qs.meterID;
        if (meters.length == 0 || meter != undefined)
            return;
        else if (meterID == undefined) {
            setMeter(meters[0]);
        }
        else if (meterID != undefined) {
            var index = meters.findIndex(function (m) { return m.ID.toString() == meterID; });
            if (index >= 0)
                setMeter(meters[index]);
            else
                setMeter(meters[0]);
        }
    }, [meters]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (meter != undefined) {
            var handle_1 = GetChannels(meter.ID);
            handle_1.done(function (data) { return setChannels(data.map(function (d) { return ({ Channel: d, Selected: GetDefault(d) }); })); });
            return function () {
                if (handle_1.abort != undefined)
                    handle_1.abort();
            };
        }
    }, [meter]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var nqs = {
            startDate: dates[0],
            endDate: dates[1],
            dateRange: dateRange,
        };
        if (meter != undefined)
            nqs['meterID'] = meter.ID;
        else if (qs.meterID != undefined)
            nqs['meterID'] = qs.meterID;
        window.history.pushState({}, '', "" + window.location.origin + window.location.pathname + "?" + querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(nqs));
    }, [dates, meter]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var ed = moment__WEBPACK_IMPORTED_MODULE_5___default()();
        var sd = ed;
        if (dateRange == '1 day')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(1, 'days');
        else if (dateRange == '3 days')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(3, 'days');
        else if (dateRange == '7 days')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(7, 'days');
        else if (dateRange == '1 month')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(1, 'months');
        else if (dateRange == '3 months')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(3, 'months');
        else if (dateRange == '6 months')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(6, 'months');
        else if (dateRange == '1 year')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().subtract(1, 'year');
        else if (dateRange == 'Year to date')
            sd = moment__WEBPACK_IMPORTED_MODULE_5___default()().date(1).month('January');
        else
            return;
        setDates([sd.format(MomentDateTimeFormat), ed.format(MomentDateTimeFormat)]);
    }, [dateRange]);
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
    function GetChannels(id) {
        return $.ajax({
            type: "GET",
            url: homePath + "api/OpenXDA/Channel/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            cache: true,
            async: true
        });
    }
    function GetDefault(channel) {
        if (channel.MeasurementCharacteristic == 'RMS')
            return true;
        else
            return false;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { height: "100%", width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { height: 130, margin: 5 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { height: 130 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Meter"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: 'form-control', value: (_b = meter === null || meter === void 0 ? void 0 : meter.ID) !== null && _b !== void 0 ? _b : 0, onChange: function (evt) { return setMeter(meters.find(function (m) { return m.ID.toString() === evt.target.value; })); } }, meters.map(function (m, i) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { key: i, value: m.ID }, m.Name); }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Channels"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_2__["MultiCheckBoxSelect"], { Options: channels.map(function (t) { return Object.create({ Text: t.Channel.Name, Value: t.Channel.ID, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                        var newChannels = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.cloneDeep(channels);
                                        $.each(options, function (index, option) {
                                            newChannels.find(function (type) { return type.Channel.ID == option.Value; }).Selected = !option.Selected;
                                        });
                                        setChannels(newChannels);
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col-4" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "pull-left" }, "Date Range"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { position: 'relative', width: '100%', top: 32 } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: 'form-control', style: { width: 150, position: 'absolute', left: 0 }, value: dateRange, onChange: function (evt) { return setDateRange(evt.target.value); } }, DateRanges.map(function (dr, i) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { key: i, value: dr }, dr); })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { style: { width: 200, position: 'absolute', left: 150 }, className: "form-control", value: moment__WEBPACK_IMPORTED_MODULE_5___default()(dates[0], MomentDateTimeFormat).format(MomentDateFormat), type: "date", onChange: function (e) { return setDates([e.target.value, dates[1]]); }, disabled: dateRange != 'custom' }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { style: { width: 200, position: 'absolute', left: 350 }, className: "form-control", value: moment__WEBPACK_IMPORTED_MODULE_5___default()(dates[1], MomentDateTimeFormat).format(MomentDateFormat), type: "date", onChange: function (e) { return setDates([dates[0], e.target.value]); }, disabled: dateRange != 'custom' }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'col-1' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Summary"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { className: 'form-control', value: showStats, onChange: function (evt) { return setShowStats(evt.target.value); } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'stats' }, "Stats"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: 'cp' }, "CP"))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'col-1', style: { paddingTop: 30 } },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExportCSV__WEBPACK_IMPORTED_MODULE_10__["default"], { Meter: meter, Channels: channels.filter(function (c) { return c.Selected; }).map(function (c) { return c.Channel; }), StartDate: dates[0], EndDate: dates[1] }))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "row", style: { maxHeight: "calc(100% - 135px)", overflowY: 'auto', margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px' } }, __spread(new Set(channels.filter(function (c) { return c.Selected; }).map(function (c) { return c.Channel.MeasurementType + ' ' + c.Channel.MeasurementCharacteristic; }))).map(function (k) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chart, { key: k, ShowStats: showStats, Name: k, Channels: channels.filter(function (c) { return c.Selected && (c.Channel.MeasurementType + ' ' + c.Channel.MeasurementCharacteristic) == k; }).map(function (c) { return c.Channel; }), StartDate: dates[0], EndDate: dates[1], Hover: hover, SetHover: setHover, SetZoom: function (s, e) {
                    setDates([s, e]);
                } }); })))));
};
var Chart = function (props) {
    var svgHeight = 300;
    var svgWidth = window.innerWidth * 2 / 3;
    var margin = { top: 40, right: 0, bottom: 40, left: 50 };
    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}), 2), data = _a[0], setData = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.Channels), 2), channels = _b[0], setChannels = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}), 2), hoverData = _c[0], setHoverData = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var channelsjson = JSON.stringify(channels);
        var propsChannelsjson = JSON.stringify(props.Channels);
        if (channelsjson != propsChannelsjson)
            setChannels(props.Channels);
    }, [props.Channels]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (channels.length > 0)
            return GetData();
    }, [channels, props.StartDate, props.EndDate]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (Object.keys(data).length > 0)
            return DrawChart(data);
    }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (props.Hover < margin.left)
            return;
        else if (props.Hover > svgWidth - margin.right)
            return;
        var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"])(ref.current).select('svg');
        svg.selectAll("g.hover-line").remove();
        svg.append("g")
            .classed("hover-line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", 'red')
            .attr("d", "M " + props.Hover + " " + (svgHeight - margin.bottom) + " V " + margin.top);
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_7__["scaleUtc"])().rangeRound([margin.left, svgWidth - margin.right]);
        x.domain([moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(props.StartDate, MomentDateTimeFormat), moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(props.EndDate, MomentDateTimeFormat)]);
        var ts = moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(x.invert(props.Hover)).format(MomentDateTimeFormat);
        var hovDict = {};
        $.each(Object.keys(data), function (i, key) {
            var length = data[key].Data.length;
            var mult = (props.Hover - margin.left - margin.right) / (svgWidth - margin.left - margin.right);
            var index = Math.floor(mult * length);
            //console.log(ts, data[key].Data[index].TimeStamp);
            hovDict[key] = data[key].Data[index].Value;
        });
        setHoverData(hovDict);
    }, [props.Hover]);
    function GetData() {
        var query = "\n            from(bucket: \"" + bucket + "\")\n            |> range(start: " + moment__WEBPACK_IMPORTED_MODULE_5___default.a.tz(props.StartDate, MomentTimeZone).utc().format(MomentDateTimeFormat) + "Z, stop: " + moment__WEBPACK_IMPORTED_MODULE_5___default.a.tz(props.EndDate, MomentTimeZone).utc().format(MomentDateTimeFormat) + "Z)\n            |> filter(fn: (r) => " + props.Channels.map(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8); }).map(function (c) { return 'r.tag == "' + c + '"'; }).join(' or ') + ")\n        ";
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
                else if (dict.hasOwnProperty(row[tagIndex] + '-' + row[fieldIndex])) {
                    dict[row[tagIndex] + '-' + row[fieldIndex]].Data.push({ TimeStamp: moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(row[timeIndex]).tz(MomentTimeZone).format(MomentDateTimeFormat) + 'Z', Value: parseFloat(row[valueIndex]) });
                }
                else {
                    dict[row[tagIndex] + '-' + row[fieldIndex]] = {
                        Channel: props.Channels.find(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8) == row[tagIndex]; }),
                        Field: row[fieldIndex],
                        Selected: true,
                        Data: [{ TimeStamp: moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(row[timeIndex]).tz(MomentTimeZone).format(MomentDateTimeFormat) + 'Z', Value: parseFloat(row[valueIndex]) }],
                        Max: 0,
                        Min: 0,
                        Avg: 0,
                        StDev: 0
                    };
                }
            };
            for (; i < rows.length; i++) {
                _loop_1();
            }
            var hovDict = {};
            $.each(Object.keys(dict), function (i, key) {
                dict[key].Min = Math.min.apply(Math, __spread(dict[key].Data.map(function (d) { return d.Value; })));
                dict[key].Max = Math.max.apply(Math, __spread(dict[key].Data.map(function (d) { return d.Value; })));
                dict[key].Avg = stats_lite__WEBPACK_IMPORTED_MODULE_9___default.a.mean(dict[key].Data.map(function (d) { return d.Value; }));
                dict[key].StDev = stats_lite__WEBPACK_IMPORTED_MODULE_9___default.a.stdev(dict[key].Data.map(function (d) { return d.Value; }));
                dict[key].CP99 = stats_lite__WEBPACK_IMPORTED_MODULE_9___default.a.percentile(dict[key].Data.map(function (d) { return d.Value; }), 0.99);
                dict[key].CP95 = stats_lite__WEBPACK_IMPORTED_MODULE_9___default.a.percentile(dict[key].Data.map(function (d) { return d.Value; }), 0.95);
                dict[key].CP50 = stats_lite__WEBPACK_IMPORTED_MODULE_9___default.a.percentile(dict[key].Data.map(function (d) { return d.Value; }), 0.5);
                dict[key].CP05 = stats_lite__WEBPACK_IMPORTED_MODULE_9___default.a.percentile(dict[key].Data.map(function (d) { return d.Value; }), 0.05);
                dict[key].CP01 = stats_lite__WEBPACK_IMPORTED_MODULE_9___default.a.percentile(dict[key].Data.map(function (d) { return d.Value; }), 0.01);
                var lowerBound = dict[key].Avg - 3 * dict[key].StDev;
                var upperBound = dict[key].Avg + 3 * dict[key].StDev;
                dict[key].Outliers = dict[key].Data.filter(function (d) { return d.Value < lowerBound || d.Value > upperBound; }).length;
                dict[key].DataPoints = dict[key].Data.length;
                hovDict[key] = dict[key].Data[0].Value;
            });
            setData(dict);
            setHoverData(hovDict);
        });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }
    function DrawChart(data) {
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_7__["scaleUtc"])().rangeRound([margin.left, svgWidth - margin.right]);
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"])().rangeRound([svgHeight - margin.top, margin.bottom]);
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"])(ref.current).selectAll('svg').remove();
        var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"])(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('user-select', 'none')
            .on('mousemove', function (d) { return props.SetHover(d.offsetX); })
            .on('mousedown', function (d) { return OnXZoom(d, svg, x); });
        var yextent = Object(d3__WEBPACK_IMPORTED_MODULE_7__["extent"])([].concat.apply([], __spread(Object.keys(data).filter(function (key) { return data[key].Selected; }).map(function (key) { return data[key].Data.map(function (d) { return d.Value; }); }))));
        y.domain(yextent);
        x.domain([moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(props.StartDate, MomentDateTimeFormat), moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(props.EndDate, MomentDateTimeFormat)]);
        var xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(Object(d3__WEBPACK_IMPORTED_MODULE_7__["axisBottom"])(x));
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(Object(d3__WEBPACK_IMPORTED_MODULE_7__["axisLeft"])(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return Object(d3__WEBPACK_IMPORTED_MODULE_7__["format"])("~s")(value); }));
        var linefunc = Object(d3__WEBPACK_IMPORTED_MODULE_7__["line"])().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_5___default.a.utc(d.TimeStamp)); }).y(function (d) { return y(d.Value); });
        svg.selectAll("g.min-line").remove();
        svg.selectAll("g.min-line")
            .data(Object.keys(data).filter(function (key) { return data[key].Field == 'min' && data[key].Selected; }))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", 4)
            .attr("stroke", function (d) { return getColor(data[d].Channel.Phase); })
            .attr("d", function (d) {
            return linefunc(data[d].Data);
        });
        svg.selectAll("g.avg-line").remove();
        svg.selectAll("g.avg-line")
            .data(Object.keys(data).filter(function (key) { return data[key].Field == 'avg' && data[key].Selected; }))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", function (d) { return getColor(data[d].Channel.Phase); })
            .attr("d", function (d) {
            return linefunc(data[d].Data);
        });
        svg.selectAll("g.max-line").remove();
        svg.selectAll("g.max-line")
            .data(Object.keys(data).filter(function (key) { return data[key].Field == 'max' && data[key].Selected; }))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", function (d) { return 2; })
            .attr("stroke", function (d) { return getColor(data[d].Channel.Phase); })
            .attr("d", function (d) {
            return linefunc(data[d].Data);
        });
    }
    function getColor(label) {
        if (label.toUpperCase().indexOf('AN') >= 0)
            return '#A30000'; // darker red
        else if (label.toUpperCase().indexOf('BN') >= 0)
            return '#0029A3';
        else if (label.toUpperCase().indexOf('CN') >= 0)
            return '#007A29';
        else if (label.toUpperCase().indexOf('NG') >= 0)
            return '#c3c3c3'; // grey
        else if (label.toUpperCase().indexOf('AB') >= 0)
            return '#FF0000'; // brighter red
        else if (label.toUpperCase().indexOf('BC') >= 0)
            return '#0066CC';
        else if (label.toUpperCase().indexOf('CA') >= 0)
            return '#33CC33'; // grey
        else if (label.toUpperCase().indexOf('RES') >= 0)
            return '#c3c3c3'; // grey
        else if (label.toUpperCase().indexOf('ALL') >= 0)
            return '#c3c3c3'; // grey
        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);
            return "#" + (ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne) + (ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo) + (ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree);
        }
    }
    function getlabel(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0)
            return 'Max';
        else if (label.toUpperCase().indexOf('MIN') >= 0)
            return 'Min';
        else
            return 'Avg';
    }
    function getDashArray(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0)
            return 2;
        else if (label.toUpperCase().indexOf('MIN') >= 0)
            return 4;
        else
            return null;
    }
    function getLine(tag, measurement) {
        var path = "M 0 17  C 10 0, 20 0, 25 10 S 32 25, 45 17";
        if (measurement.Selected)
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { height: 25, width: 50, onClick: function () {
                    var newData = __assign({}, data);
                    newData[tag].Selected = false;
                    setData(newData);
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: path, stroke: getColor(measurement.Channel.Phase), strokeDasharray: getDashArray(measurement.Field), strokeWidth: 1.5, fill: "transparent" }));
        else
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { height: 25, width: 50, onClick: function () {
                    var newData = __assign({}, data);
                    newData[tag].Selected = true;
                    setData(newData);
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: path, stroke: getColor(measurement.Channel.Phase), strokeDasharray: getDashArray(measurement.Field), strokeWidth: 1.5, fill: "transparent", opacity: 0.2 }));
    }
    function formatText(num) {
        if (num >= 10)
            return num.toFixed(0);
        else if (num >= 0)
            return num.toFixed(2);
        else if (num >= 0.0001)
            return num.toFixed(4);
        else if (num >= 0.000001)
            return num.toFixed(6);
        else
            return num;
    }
    function OnXZoom(evt, svg, scale) {
        var start = evt.offsetX;
        var brush = Object(d3__WEBPACK_IMPORTED_MODULE_7__["brushX"])()
            .extent([[margin.left, margin.top + 0.5], [svgWidth - margin.right, svgHeight - margin.bottom + 0.5]]);
        var br = svg.append('g').call(brush);
        br.call(brush.move, [start, start + 1]);
        svg.on('mousemove.brush', function (e) {
            br.call(brush.move, [start, e.offsetX]);
        });
        svg.on('mouseup.brush', function (e) {
            var min = Math.min(start, e.offsetX);
            var max = Math.max(start, e.offsetX);
            props.SetZoom(moment__WEBPACK_IMPORTED_MODULE_5___default()(scale.invert(min)).format(MomentDateTimeFormat), moment__WEBPACK_IMPORTED_MODULE_5___default()(scale.invert(max)).format(MomentDateTimeFormat));
            br.remove();
            svg.on('mousemove.brush', null);
            svg.on('mouseup.brush', null);
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-header" }, props.Name),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "card-body", style: { padding: 0, position: 'relative' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: ref, className: 'pull-left', style: { height: 300, width: 'calc(100% - 400px)', position: 'absolute', top: 0, left: 0 } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'pull-right', style: { height: 300, maxHeight: 300, overflowY: 'auto', width: window.innerWidth / 3 - 75, position: 'relative', right: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: 'table' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Phase"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Hover"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Min"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Avg"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Max"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "StDev"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP99"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP95"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP50"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP05"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP01"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Counts"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Outliers"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.keys(data).map(function (key) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: key },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null,
                                data[key].Channel.Phase,
                                "-",
                                getlabel(key)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, getLine(key, data[key])),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, formatText(hoverData[key])),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].Min)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].Avg)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].Max)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].StDev)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP99)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP95)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP50)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP05)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP01)),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, data[key].DataPoints),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, data[key].Outliers));
                    })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Trending);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lzbnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdGF0cy1saXRlL3N0YXRzLmpzIiwid2VicGFjazovLy8uL3RzeC9UcmVuZGluZy9FeHBvcnRDU1YudHN4Iiwid2VicGFjazovLy8uL3RzeC9UcmVuZGluZy9UcmVuZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RTs7Ozs7Ozs7Ozs7O0FDcFJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyxtREFBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGVBQWU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQXdFLDJCQUEyQjtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBQyxDQUFDLEdBQUcsR0FBRyxpREFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLGlEQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTFFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBRXJELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUE1QyxDQUE0QyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNyRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENB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QUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDLENBQUcsT0FBTzthQUN2RSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDLENBQUcsZUFBZTthQUMvRSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sU0FBUyxDQUFDO2FBQzdELElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUMsQ0FBRyxPQUFPO2FBQ3ZFLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUMsQ0FBRSxPQUFPO2FBQ3ZFLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUMsQ0FBRSxPQUFPO2FBQ3ZFO1lBQ0QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFL0QsT0FBTyxNQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FB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RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBTTs0QkFDbEMsdUVBQUssVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFNOzRCQUNyQyxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNOzRCQUN4SCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNOzRCQUN4SCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNOzRCQUN4SCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFNOzRCQUMxSCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNOzRCQUNySCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNOzRCQUN0SCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNOzRCQUN0SCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNOzRCQUN0SCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNOzRCQUN0SCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFNOzRCQUNuSCxtRUFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFNLENBQ2hIO29CQWZMLENBZUssQ0FBQyxDQUVOLENBQ0osQ0FDTixDQUNKLENBQ0osQ0FFVCxDQUFDO0FBQ04sQ0FBQztBQUVjLHVFQUFRLEVBQUMiLCJmaWxlIjoiVHJlbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGlzTnVtYmVyXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHNvbWV0aGluZyBpcyBhIG5vbi1pbmZpbml0ZSBqYXZhc2NyaXB0IG51bWJlci5cbiAqIEBwYXJhbSAge051bWJlcn0gIG4gQSAocG90ZW50aWFsKSBudW1iZXIgdG8gc2VlIGlmIGl0IGlzIGEgbnVtYmVyLlxuICogQHJldHVybiB7Qm9vbGVhbn0gICBUcnVlIGZvciBub24taW5maW5pdGUgbnVtYmVycywgZmFsc2UgZm9yIGFsbCBlbHNlLlxuICovXG5mdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzLm51bWJlcnMgPSBudW1iZXJzXG5tb2R1bGUuZXhwb3J0cy5zdW0gPSBzdW1cbm1vZHVsZS5leHBvcnRzLm1lYW4gPSBtZWFuXG5tb2R1bGUuZXhwb3J0cy5tZWRpYW4gPSBtZWRpYW5cbm1vZHVsZS5leHBvcnRzLm1vZGUgPSBtb2RlXG5tb2R1bGUuZXhwb3J0cy52YXJpYW5jZSA9IHBvcHVsYXRpb25WYXJpYW5jZVxubW9kdWxlLmV4cG9ydHMuc2FtcGxlVmFyaWFuY2UgPSBzYW1wbGVWYXJpYW5jZVxubW9kdWxlLmV4cG9ydHMucG9wdWxhdGlvblZhcmlhbmNlID0gcG9wdWxhdGlvblZhcmlhbmNlXG5tb2R1bGUuZXhwb3J0cy5zdGRldiA9IHBvcHVsYXRpb25TdGRldlxubW9kdWxlLmV4cG9ydHMuc2FtcGxlU3RkZXYgPSBzYW1wbGVTdGRldlxubW9kdWxlLmV4cG9ydHMucG9wdWxhdGlvblN0ZGV2ID0gcG9wdWxhdGlvblN0ZGV2XG5tb2R1bGUuZXhwb3J0cy5wZXJjZW50aWxlID0gcGVyY2VudGlsZVxubW9kdWxlLmV4cG9ydHMuaGlzdG9ncmFtID0gaGlzdG9ncmFtXG5cbnZhciBpc051bWJlciA9IHJlcXVpcmUoXCJpc251bWJlclwiKVxuXG5mdW5jdGlvbiBudW1iZXJzKHZhbHMpIHtcbiAgdmFyIG51bXMgPSBbXVxuICBpZiAodmFscyA9PSBudWxsKVxuICAgIHJldHVybiBudW1zXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlzTnVtYmVyKHZhbHNbaV0pKVxuICAgICAgbnVtcy5wdXNoKCt2YWxzW2ldKVxuICB9XG4gIHJldHVybiBudW1zXG59XG5cbmZ1bmN0aW9uIG5zb3J0KHZhbHMpIHtcbiAgcmV0dXJuIHZhbHMuc29ydChmdW5jdGlvbiBudW1lcmljU29ydChhLCBiKSB7IHJldHVybiBhIC0gYiB9KVxufVxuXG5mdW5jdGlvbiBzdW0odmFscykge1xuICB2YWxzID0gbnVtYmVycyh2YWxzKVxuICB2YXIgdG90YWwgPSAwXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgIHRvdGFsICs9IHZhbHNbaV1cbiAgfVxuICByZXR1cm4gdG90YWxcbn1cblxuZnVuY3Rpb24gbWVhbih2YWxzKSB7XG4gIHZhbHMgPSBudW1iZXJzKHZhbHMpXG4gIGlmICh2YWxzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIE5hTlxuICByZXR1cm4gKHN1bSh2YWxzKSAvIHZhbHMubGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBtZWRpYW4odmFscykge1xuICB2YWxzID0gbnVtYmVycyh2YWxzKVxuICBpZiAodmFscy5sZW5ndGggPT09IDApIHJldHVybiBOYU5cblxuICB2YXIgaGFsZiA9ICh2YWxzLmxlbmd0aCAvIDIpIHwgMFxuXG4gIHZhbHMgPSBuc29ydCh2YWxzKVxuICBpZiAodmFscy5sZW5ndGggJSAyKSB7XG4gICAgLy8gT2RkIGxlbmd0aCwgdHJ1ZSBtaWRkbGUgZWxlbWVudFxuICAgIHJldHVybiB2YWxzW2hhbGZdXG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gRXZlbiBsZW5ndGgsIGF2ZXJhZ2UgbWlkZGxlIHR3byBlbGVtZW50c1xuICAgIHJldHVybiAodmFsc1toYWxmLTFdICsgdmFsc1toYWxmXSkgLyAyLjBcbiAgfVxufVxuXG4vLyBSZXR1cm5zIHRoZSBtb2RlIG9mIGEgdW5pbW9kYWwgZGF0YXNldFxuLy8gSWYgdGhlIGRhdGFzZXQgaXMgbXVsdGktbW9kYWwsIHJldHVybnMgYSBTZXQgY29udGFpbmluZyB0aGUgbW9kZXNcbmZ1bmN0aW9uIG1vZGUodmFscykge1xuICB2YWxzID0gbnVtYmVycyh2YWxzKVxuICBpZiAodmFscy5sZW5ndGggPT09IDApIHJldHVybiBOYU5cbiAgdmFyIG1vZGUgPSBOYU5cbiAgdmFyIGRpc3QgPSB7fVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWx1ZSA9IHZhbHNbaV1cbiAgICB2YXIgbWUgPSBkaXN0W3ZhbHVlXSB8fCAwXG4gICAgbWUrK1xuICAgIGRpc3RbdmFsdWVdID0gbWVcbiAgfVxuXG4gIHZhciByYW5rID0gbnVtYmVycyhPYmplY3Qua2V5cyhkaXN0KS5zb3J0KGZ1bmN0aW9uIHNvcnRNZW1iZXJzKGEsIGIpIHsgcmV0dXJuIGRpc3RbYl0gLSBkaXN0W2FdIH0pKVxuICBtb2RlID0gcmFua1swXVxuICBpZiAoZGlzdFtyYW5rWzFdXSA9PSBkaXN0W21vZGVdKSB7XG4gICAgLy8gbXVsdGktbW9kYWxcbiAgICBpZiAocmFuay5sZW5ndGggPT0gdmFscy5sZW5ndGgpIHtcbiAgICAgIC8vIGFsbCB2YWx1ZXMgYXJlIG1vZGVzXG4gICAgICByZXR1cm4gdmFsc1xuICAgIH1cbiAgICB2YXIgbW9kZXMgPSBuZXcgU2V0KFttb2RlXSlcbiAgICB2YXIgbW9kZUNvdW50ID0gZGlzdFttb2RlXVxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcmFuay5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpc3RbcmFua1tpXV0gPT0gbW9kZUNvdW50KSB7XG4gICAgICAgIG1vZGVzLmFkZChyYW5rW2ldKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2Rlc1xuICB9XG4gIHJldHVybiBtb2RlXG59XG5cbi8vIFRoaXMgaGVscGVyIGZpbmRzIHRoZSBtZWFuIG9mIGFsbCB0aGUgdmFsdWVzLCB0aGVuIHNxdWFyZXMgdGhlIGRpZmZlcmVuY2Vcbi8vIGZyb20gdGhlIG1lYW4gZm9yIGVhY2ggdmFsdWUgYW5kIHJldHVybnMgdGhlIHJlc3VsdGluZyBhcnJheS4gIFRoaXMgaXMgdGhlXG4vLyBjb3JlIG9mIHRoZSB2YXJpZW5jZSBmdW5jdGlvbnMgLSB0aGUgZGlmZmVyZW5jZSBiZWluZyBkaXZpZGluZyBieSBOIG9yIE4tMS5cbmZ1bmN0aW9uIHZhbHVlc01pbnVzTWVhblNxdWFyZWQodmFscykge1xuICB2YWxzID0gbnVtYmVycyh2YWxzKVxuICB2YXIgYXZnID0gbWVhbih2YWxzKVxuICB2YXIgZGlmZnMgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICBkaWZmcy5wdXNoKE1hdGgucG93KCh2YWxzW2ldIC0gYXZnKSwgMikpXG4gIH1cbiAgcmV0dXJuIGRpZmZzXG59XG5cbi8vIFBvcHVsYXRpb24gVmFyaWFuY2UgPSBhdmVyYWdlIHNxdWFyZWQgZGV2aWF0aW9uIGZyb20gbWVhblxuZnVuY3Rpb24gcG9wdWxhdGlvblZhcmlhbmNlKHZhbHMpIHtcbiAgcmV0dXJuIG1lYW4odmFsdWVzTWludXNNZWFuU3F1YXJlZCh2YWxzKSlcbn1cblxuLy8gU2FtcGxlIFZhcmlhbmNlXG5mdW5jdGlvbiBzYW1wbGVWYXJpYW5jZSh2YWxzKSB7XG4gIHZhciBkaWZmcyA9IHZhbHVlc01pbnVzTWVhblNxdWFyZWQodmFscylcbiAgaWYgKGRpZmZzLmxlbmd0aCA8PSAxKSByZXR1cm4gTmFOXG5cbiAgcmV0dXJuIHN1bShkaWZmcykgLyAoZGlmZnMubGVuZ3RoIC0gMSlcbn1cblxuXG4vLyBQb3B1bGF0aW9uIFN0YW5kYXJkIERldmlhdGlvbiA9IHNxcnQgb2YgcG9wdWxhdGlvbiB2YXJpYW5jZVxuZnVuY3Rpb24gcG9wdWxhdGlvblN0ZGV2KHZhbHMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChwb3B1bGF0aW9uVmFyaWFuY2UodmFscykpXG59XG5cbi8vIFNhbXBsZSBTdGFuZGFyZCBEZXZpYXRpb24gPSBzcXJ0IG9mIHNhbXBsZSB2YXJpYW5jZVxuZnVuY3Rpb24gc2FtcGxlU3RkZXYodmFscykge1xuICByZXR1cm4gTWF0aC5zcXJ0KHNhbXBsZVZhcmlhbmNlKHZhbHMpKVxufVxuXG5mdW5jdGlvbiBwZXJjZW50aWxlKHZhbHMsIHB0aWxlKSB7XG4gIHZhbHMgPSBudW1iZXJzKHZhbHMpXG4gIGlmICh2YWxzLmxlbmd0aCA9PT0gMCB8fCBwdGlsZSA9PSBudWxsIHx8IHB0aWxlIDwgMCkgcmV0dXJuIE5hTlxuXG4gIC8vIEZ1ZGdlIGFueXRoaW5nIG92ZXIgMTAwIHRvIDEuMFxuICBpZiAocHRpbGUgPiAxKSBwdGlsZSA9IDFcbiAgdmFscyA9IG5zb3J0KHZhbHMpXG4gIHZhciBpID0gKHZhbHMubGVuZ3RoICogcHRpbGUpIC0gMC41XG4gIGlmICgoaSB8IDApID09PSBpKSByZXR1cm4gdmFsc1tpXVxuICAvLyBpbnRlcnBvbGF0ZWQgcGVyY2VudGlsZSAtLSB1c2luZyBFc3RpbWF0aW9uIG1ldGhvZFxuICB2YXIgaW50X3BhcnQgPSBpIHwgMFxuICB2YXIgZnJhY3QgPSBpIC0gaW50X3BhcnRcbiAgcmV0dXJuICgxIC0gZnJhY3QpICogdmFsc1tpbnRfcGFydF0gKyBmcmFjdCAqIHZhbHNbTWF0aC5taW4oaW50X3BhcnQgKyAxLCB2YWxzLmxlbmd0aCAtIDEpXVxufVxuXG5mdW5jdGlvbiBoaXN0b2dyYW0gKHZhbHMsIGJpbnMpIHtcbiAgaWYgKHZhbHMgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmFscyA9IG5zb3J0KG51bWJlcnModmFscykpXG4gIGlmICh2YWxzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgaWYgKGJpbnMgPT0gbnVsbCkge1xuICAgIC8vIHBpY2sgYmlucyBieSBzaW1wbGUgbWV0aG9kOiBNYXRoLnNxcnQobilcbiAgICBiaW5zID0gTWF0aC5zcXJ0KHZhbHMubGVuZ3RoKVxuICB9XG4gIGJpbnMgPSBNYXRoLnJvdW5kKGJpbnMpXG4gIGlmIChiaW5zIDwgMSkge1xuICAgIGJpbnMgPSAxXG4gIH1cblxuICB2YXIgbWluID0gdmFsc1swXVxuICB2YXIgbWF4ID0gdmFsc1t2YWxzLmxlbmd0aCAtIDFdXG4gIGlmIChtaW4gPT09IG1heCkge1xuICAgIC8vIGZ1ZGdlIGZvciBub24tdmFyaWFudCBkYXRhXG4gICAgbWluID0gbWluIC0gMC41XG4gICAgbWF4ID0gbWF4ICsgMC41XG4gIH1cblxuICB2YXIgcmFuZ2UgPSAobWF4IC0gbWluKVxuICAvLyBtYWtlIHRoZSBiaW5zIHNsaWdodGx5IGxhcmdlciBieSBleHBhbmRpbmcgdGhlIHJhbmdlIGFib3V0IDEwJVxuICAvLyB0aGlzIGhlbHBzIHdpdGggZHVtYiBmbG9hdGluZyBwb2ludCBzdHVmZlxuICB2YXIgYmluV2lkdGggPSAocmFuZ2UgKyAocmFuZ2UgKiAwLjA1KSkgLyBiaW5zXG4gIHZhciBtaWRwb2ludCA9IChtaW4gKyBtYXgpIC8gMlxuICAvLyBldmVuIGJpbiBjb3VudCwgbWlkcG9pbnQgbWFrZXMgYW4gZWRnZVxuICB2YXIgbGVmdEVkZ2UgPSBtaWRwb2ludCAtIChiaW5XaWR0aCAqIE1hdGguZmxvb3IoYmlucyAvIDIpKVxuICBpZiAoYmlucyAlIDIgIT09IDApIHtcbiAgICAvLyBvZGQgYmluIGNvdW50LCBjZW50ZXIgbWlkZGxlIGJpbiBvbiBtaWRwb2ludFxuICAgIHZhciBsZWZ0RWRnZSA9IChtaWRwb2ludCAtIChiaW5XaWR0aCAvIDIpKSAtIChiaW5XaWR0aCAqIE1hdGguZmxvb3IoYmlucyAvIDIpKVxuICB9XG5cbiAgdmFyIGhpc3QgPSB7XG4gICAgdmFsdWVzOiBBcnJheShiaW5zKS5maWxsKDApLFxuICAgIGJpbnM6IGJpbnMsXG4gICAgYmluV2lkdGg6IGJpbldpZHRoLFxuICAgIGJpbkxpbWl0czogW2xlZnRFZGdlLCBsZWZ0RWRnZSArIChiaW5XaWR0aCAqIGJpbnMpXVxuICB9XG5cbiAgdmFyIGJpbkluZGV4ID0gMFxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB3aGlsZSAodmFsc1tpXSA+ICgoKGJpbkluZGV4ICsgMSkgKiBiaW5XaWR0aCkgKyBsZWZ0RWRnZSkpIHtcbiAgICAgIGJpbkluZGV4KytcbiAgICB9XG4gICAgaGlzdC52YWx1ZXNbYmluSW5kZXhdKytcbiAgfVxuXG4gIHJldHVybiBoaXN0XG59XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRXhwb3J0Q1NWLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNS8xNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC10aW1lem9uZSc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2FwcGxpY2F0aW9uLXR5cGluZ3MnO1xyXG5jb25zdCBNb21lbnREYXRlVGltZUZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzJ1xyXG5jb25zdCBNb21lbnREYXRlRm9ybWF0ID0gJ1lZWVktTU0tREQnO1xyXG5cclxuY29uc3QgRXhwb3J0Q1NWID0gKHByb3BzOiB7IE1ldGVyOiBPcGVuWERBLlR5cGVzLk1ldGVyLCBDaGFubmVsczogT3BlblhEQS5UeXBlcy5DaGFubmVsW10sIFN0YXJ0RGF0ZTogc3RyaW5nLCBFbmREYXRlOiBzdHJpbmd9KSA9PiB7XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgICAgICAgICAgZnJvbShidWNrZXQ6IFwiJHtidWNrZXR9XCIpXHJcbiAgICAgICAgICAgIHw+IHJhbmdlKHN0YXJ0OiAke21vbWVudC50eihwcm9wcy5TdGFydERhdGUsICdBbWVyaWNhL0NoaWNhZ28nKS51dGMoKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpfVosIHN0b3A6ICR7bW9tZW50LnR6KHByb3BzLkVuZERhdGUsICdBbWVyaWNhL0NoaWNhZ28nKS51dGMoKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpfVopXHJcbiAgICAgICAgICAgIHw+IGZpbHRlcihmbjogKHIpID0+ICR7cHJvcHMuQ2hhbm5lbHMubWFwKGMgPT4gKFwiMDAwMDAwMDAwMDAwMDAwXCIgKyBjLklELnRvU3RyaW5nKDE2KSkuc3Vic3RyKC04KSkubWFwKGMgPT4gJ3IudGFnID09IFwiJyArIGMgKyAnXCInKS5qb2luKCcgb3IgJyl9KVxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiByZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIGBUb2tlbiAke3Rva2VufWApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob3N0fS9hcGkvdjIvcXVlcnk/b3JnPSR7b3JnfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGVuY29kaW5nPXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnksIHR5cGU6ICdmbHV4JyB9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUHJvY2VzcyhkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcm93cyA9IGRhdGEuc3BsaXQoJ1xcclxcbicpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgaGVhZGVyID0gcm93c1tpKytdLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgbGV0IHRhZ0luZGV4ID0gaGVhZGVyLmluZGV4T2YoJ3RhZycpO1xyXG4gICAgICAgIGxldCB0aW1lSW5kZXggPSBoZWFkZXIuaW5kZXhPZignX3RpbWUnKTtcclxuICAgICAgICBsZXQgdmFsdWVJbmRleCA9IGhlYWRlci5pbmRleE9mKCdfdmFsdWUnKTtcclxuICAgICAgICBsZXQgZmllbGRJbmRleCA9IGhlYWRlci5pbmRleE9mKCdfZmllbGQnKTtcclxuICAgICAgICBsZXQgZGljdCA9IHt9O1xyXG4gICAgICAgIGZvciAoOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gcm93c1tpXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBpZiAocm93W3RhZ0luZGV4XSA9PSB1bmRlZmluZWQgfHwgcm93W3RhZ0luZGV4XSA9PSBcInRhZ1wiIHx8IHJvd1tmaWVsZEluZGV4XSA9PSBcImZsYWdzXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsZXQgY2hhbm5lbCA9IHByb3BzLkNoYW5uZWxzLmZpbmQoYyA9PiAoXCIwMDAwMDAwMDAwMDAwMDBcIiArIGMuSUQudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTgpID09IHJvd1t0YWdJbmRleF0pO1xyXG4gICAgICAgICAgICBsZXQgZmllbGQgPSByb3dbZmllbGRJbmRleF07XHJcbiAgICAgICAgICAgIGxldCB0aW1lU3RhbXAgPSByb3dbdGltZUluZGV4XTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjaGFubmVsTmFtZSA9IGAke2NoYW5uZWwuTWVhc3VyZW1lbnRUeXBlfSAke2NoYW5uZWwuTWVhc3VyZW1lbnRDaGFyYWN0ZXJpc3RpY30gJHtjaGFubmVsLlBoYXNlfSAke2ZpZWxkfWA7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGRpY3QuaGFzT3duUHJvcGVydHkodGltZVN0YW1wKSkge1xyXG4gICAgICAgICAgICAgICAgZGljdFt0aW1lU3RhbXBdW2NoYW5uZWxOYW1lXSA9IHBhcnNlRmxvYXQocm93W3ZhbHVlSW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpY3RbdGltZVN0YW1wXSA9IHsgW2NoYW5uZWxOYW1lXTogcGFyc2VGbG9hdChyb3dbdmFsdWVJbmRleF0pIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkaWN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBFeHBvcnRUb0NzdihmaWxlTmFtZTogc3RyaW5nLCBkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoIDwgMSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBbJ3RpbWUnLCAuLi5PYmplY3Qua2V5cyhkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXSldO1xyXG4gICAgICAgIGxldCByb3dzID0gW2hlYWRlcnNdO1xyXG4gICAgICAgICQuZWFjaChPYmplY3Qua2V5cyhkYXRhKSwgZnVuY3Rpb24gKGluZGV4LCB0aW1lU3RhbXApIHtcclxuICAgICAgICAgICAgcm93cy5wdXNoKGhlYWRlcnMubWFwKChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXIgPT0gJ3RpbWUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb21lbnQudXRjKHRpbWVTdGFtcCkudHooJ0FtZXJpY2EvQ2hpY2FnbycpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbdGltZVN0YW1wXVtoZWFkZXJdXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvY2Vzc1JvdyA9IGZ1bmN0aW9uIChyb3cpIHtcclxuICAgICAgICAgICAgbGV0IGZpbmFsVmFsID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJWYWx1ZSA9IHJvd1tqXSA9PSB1bmRlZmluZWQgPyAnJyA6IHJvd1tqXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd1tqXSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lclZhbHVlID0gcm93W2pdLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGlubmVyVmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc2VhcmNoKC8oXCJ8LHxcXG4pL2cpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJ1wiJyArIHJlc3VsdCArICdcIic7XHJcbiAgICAgICAgICAgICAgICBpZiAoaiA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxWYWwgKz0gJywnO1xyXG4gICAgICAgICAgICAgICAgZmluYWxWYWwgKz0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmaW5hbFZhbCArICdcXG4nO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjc3ZGaWxlID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNzdkZpbGUgKz0gcHJvY2Vzc1Jvdyhyb3dzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NzdkZpbGVdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFIDEwK1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgaWYgKGxpbmsuZG93bmxvYWQgIT09IHVuZGVmaW5lZCkgeyAvLyBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gQnJvd3NlcnMgdGhhdCBzdXBwb3J0IEhUTUw1IGRvd25sb2FkIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IEdldERhdGEoKTtcclxuICAgICAgICBsZXQgZGljdCA9IFByb2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgRXhwb3J0VG9Dc3YoYCR7cHJvcHMuTWV0ZXIuTmFtZX1fJHtwcm9wcy5TdGFydERhdGV9XyR7cHJvcHMuRW5kRGF0ZX0uY3N2YCwgZGljdCk7XHJcbiAgICB9fT4gRXhwb3J0IENTVjwvYnV0dG9uID47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydENTVjsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVHJlbmRpbmcudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzE4LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9hcHBsaWNhdGlvbi10eXBpbmdzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTXVsdGlDaGVja0JveFNlbGVjdCwgU2VsZWN0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcbmltcG9ydCB7IEV4cG9ydFRvQ3N2IH0gZnJvbSAnLi4vRXhwb3J0Q1NWJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC10aW1lem9uZSc7XHJcbmltcG9ydCB7IHNjYWxlTGluZWFyLCBsaW5lLCBleHRlbnQsIGF4aXNCb3R0b20sIGF4aXNMZWZ0LCBmb3JtYXQgYXMgZDNGb3JtYXQsIHNjYWxlVXRjLCBzY2FsZVRpbWUsIGJydXNoWCB9IGZyb20gJ2QzJztcclxuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcclxuaW1wb3J0IHN0YXRzIGZyb20gJ3N0YXRzLWxpdGUnO1xyXG5pbXBvcnQgRXhwb3J0Q1NWIGZyb20gJy4vRXhwb3J0Q1NWJztcclxuXHJcbnR5cGUgRGF0ZVJhbmdlID0gJzEgZGF5JyB8ICczIGRheXMnIHwgJzcgZGF5cycgfCAnMSBtb250aCcgfCAnMyBtb250aHMnIHwgJzYgbW9udGhzJyB8ICdZZWFyIHRvIGRhdGUnIHwgJzEgeWVhcicgfCAnY3VzdG9tJ1xyXG5jb25zdCBEYXRlUmFuZ2VzOiBEYXRlUmFuZ2VbXSA9IFsnMSBkYXknLCAnMyBkYXlzJywgJzcgZGF5cycsICcxIG1vbnRoJywgJzMgbW9udGhzJywgJzYgbW9udGhzJywgJ1llYXIgdG8gZGF0ZScsICcxIHllYXInLCAnY3VzdG9tJ107XHJcbmNvbnN0IE1vbWVudERhdGVUaW1lRm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3MnXHJcbmNvbnN0IE1vbWVudERhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7XHJcbmNvbnN0IE1vbWVudFRpbWVab25lID0gJ0FtZXJpY2EvQ2hpY2Fnbyc7XHJcbmNvbnN0IFRyZW5kaW5nID0gKHByb3BzOiB7fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHFzID0gcXVlcnlTdHJpbmcucGFyc2UoaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcclxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtxcy5zdGFydERhdGUgPT0gdW5kZWZpbmVkID8gbW9tZW50KCkuc3VidHJhY3QoMzAsICdkYXlzJykuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KSA6IHFzLnN0YXJ0RGF0ZSBhcyBzdHJpbmcsIHFzLmVuZERhdGUgPT0gdW5kZWZpbmVkID8gbW9tZW50KCkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KSA6IHFzLmVuZERhdGUgYXMgc3RyaW5nXSlcclxuICAgIGNvbnN0IFttZXRlcnMsIHNldE1ldGVyc10gPSBSZWFjdC51c2VTdGF0ZTxPcGVuWERBLlR5cGVzLk1ldGVyW10+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlciwgc2V0TWV0ZXJdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5UeXBlcy5NZXRlcj4odW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtjaGFubmVscywgc2V0Q2hhbm5lbHNdID0gUmVhY3QudXNlU3RhdGU8eyBDaGFubmVsOiBPcGVuWERBLlR5cGVzLkNoYW5uZWwsIFNlbGVjdGVkOiBib29sZWFuIH1bXT4oW10pO1xyXG4gICAgY29uc3QgW2RhdGVSYW5nZSwgc2V0RGF0ZVJhbmdlXSA9IFJlYWN0LnVzZVN0YXRlPERhdGVSYW5nZT4ocXMuZGF0ZVJhbmdlID09IHVuZGVmaW5lZCA/ICc3IGRheXMnIDogcXMuZGF0ZVJhbmdlIGFzIERhdGVSYW5nZSk7XHJcbiAgICBjb25zdCBbc2hvd1N0YXRzLCBzZXRTaG93U3RhdHNdID0gUmVhY3QudXNlU3RhdGU8J3N0YXRzJyB8ICdjcCc+KCdzdGF0cycpO1xyXG4gICAgY29uc3QgW2FnZ3JlZ2F0aW9uLCBzZXRBZ2dyZWdhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTwnbm9uZScgfCAnaG91cicgfCAnZGF5Jz4ocXM/LmFnZ3JlZ2F0aW9uIGFzIGFueT8/ICdub25lJyk7XHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gR2V0TWV0ZXJzKCk7XHJcbiAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IE9wZW5YREEuVHlwZXMuTWV0ZXJbXSkgPT4gc2V0TWV0ZXJzKGRhdGEpKTtcclxuXHJcbiAgICAgICAgaGlzdG9yeS5saXN0ZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXREYXRlcyhbcXMuc3RhcnREYXRlIGFzIHN0cmluZywgcXMuZW5kRGF0ZSBhcyBzdHJpbmddKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdGVuaW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGhpc3RvcnkubGlzdGVuID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlJylcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2hdKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgbWV0ZXJJRCA9IHFzLm1ldGVySUQ7XHJcbiAgICAgICAgaWYgKG1ldGVycy5sZW5ndGggPT0gMCB8fCBtZXRlciAhPSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBlbHNlIGlmIChtZXRlcklEID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRNZXRlcihtZXRlcnNbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZXRlcklEICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBtZXRlcnMuZmluZEluZGV4KG0gPT4gbS5JRC50b1N0cmluZygpID09IG1ldGVySUQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMClcclxuICAgICAgICAgICAgICAgIHNldE1ldGVyKG1ldGVyc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRNZXRlcihtZXRlcnNbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFttZXRlcnNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXRlciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZSA9IEdldENoYW5uZWxzKG1ldGVyLklEKTtcclxuICAgICAgICAgICAgaGFuZGxlLmRvbmUoKGRhdGE6IE9wZW5YREEuVHlwZXMuQ2hhbm5lbFtdKSA9PiBzZXRDaGFubmVscyhkYXRhLm1hcChkID0+ICh7IENoYW5uZWw6IGQsIFNlbGVjdGVkOiBHZXREZWZhdWx0KGQpIH0pKSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFttZXRlcl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5xcyA9IHtcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBkYXRlc1swXSxcclxuICAgICAgICAgICAgZW5kRGF0ZTogZGF0ZXNbMV0sXHJcbiAgICAgICAgICAgIGRhdGVSYW5nZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXRlciAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIG5xc1snbWV0ZXJJRCddID0gbWV0ZXIuSUQ7XHJcbiAgICAgICAgZWxzZSBpZiAocXMubWV0ZXJJRCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIG5xc1snbWV0ZXJJRCddID0gcXMubWV0ZXJJRDtcclxuXHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkobnFzKX1gKVxyXG4gICAgfSwgW2RhdGVzLCBtZXRlcl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVkID0gbW9tZW50KCkgYXMgbW9tZW50Lk1vbWVudDtcclxuICAgICAgICBsZXQgc2QgPSBlZDtcclxuICAgICAgICBpZiAoZGF0ZVJhbmdlID09ICcxIGRheScpXHJcbiAgICAgICAgICAgIHNkID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKTtcclxuICAgICAgICBlbHNlIGlmIChkYXRlUmFuZ2UgPT0gJzMgZGF5cycpXHJcbiAgICAgICAgICAgIHNkID0gbW9tZW50KCkuc3VidHJhY3QoMywgJ2RheXMnKTtcclxuICAgICAgICBlbHNlIGlmIChkYXRlUmFuZ2UgPT0gJzcgZGF5cycpXHJcbiAgICAgICAgICAgIHNkID0gbW9tZW50KCkuc3VidHJhY3QoNywgJ2RheXMnKTtcclxuICAgICAgICBlbHNlIGlmIChkYXRlUmFuZ2UgPT0gJzEgbW9udGgnKVxyXG4gICAgICAgICAgICBzZCA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aHMnKTtcclxuICAgICAgICBlbHNlIGlmIChkYXRlUmFuZ2UgPT0gJzMgbW9udGhzJylcclxuICAgICAgICAgICAgc2QgPSBtb21lbnQoKS5zdWJ0cmFjdCgzLCAnbW9udGhzJyk7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0ZVJhbmdlID09ICc2IG1vbnRocycpXHJcbiAgICAgICAgICAgIHNkID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ21vbnRocycpO1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGVSYW5nZSA9PSAnMSB5ZWFyJylcclxuICAgICAgICAgICAgc2QgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAneWVhcicpO1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGVSYW5nZSA9PSAnWWVhciB0byBkYXRlJylcclxuICAgICAgICAgICAgc2QgPSBtb21lbnQoKS5kYXRlKDEpLm1vbnRoKCdKYW51YXJ5Jyk7XHJcbiAgICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgICAgc2V0RGF0ZXMoW3NkLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCksIGVkLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCldKTtcclxuXHJcbiAgICB9LCBbZGF0ZVJhbmdlXSlcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRNZXRlcnMoKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuVHlwZXMuTWV0ZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL01ldGVyYCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRDaGFubmVscyhpZDogbnVtYmVyKTogSlF1ZXJ5LmpxWEhSPE9wZW5YREEuVHlwZXMuQ2hhbm5lbFtdPiB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL09wZW5YREEvQ2hhbm5lbC8ke2lkfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGVmYXVsdChjaGFubmVsOiBPcGVuWERBLlR5cGVzLkNoYW5uZWwpIHtcclxuICAgICAgICBpZiAoY2hhbm5lbC5NZWFzdXJlbWVudENoYXJhY3RlcmlzdGljID09ICdSTVMnKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBoZWlnaHQ6IDEzMCwgbWFyZ2luOiA1IH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogMTMwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWV0ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17bWV0ZXI/LklEID8/IDB9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRNZXRlcihtZXRlcnMuZmluZChtID0+IG0uSUQudG9TdHJpbmcoKSA9PT0gZXZ0LnRhcmdldC52YWx1ZSkpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0ZXJzLm1hcCgobSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXttLklEfT57bS5OYW1lIH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hhbm5lbHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlDaGVja0JveFNlbGVjdCBPcHRpb25zPXtjaGFubmVscy5tYXAodCA9PiBPYmplY3QuY3JlYXRlKHsgVGV4dDogdC5DaGFubmVsLk5hbWUsIFZhbHVlOiB0LkNoYW5uZWwuSUQsIFNlbGVjdGVkOiB0LlNlbGVjdGVkIH0pKX0gT25DaGFuZ2U9eyhldnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdDaGFubmVscyA9IF8uY2xvbmVEZWVwKGNoYW5uZWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoYW5uZWxzLmZpbmQodHlwZSA9PiB0eXBlLkNoYW5uZWwuSUQgPT0gb3B0aW9uLlZhbHVlKS5TZWxlY3RlZCA9ICFvcHRpb24uU2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hhbm5lbHMobmV3Q2hhbm5lbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiID5EYXRlIFJhbmdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOiAnMTAwJScsIHRvcDogMzIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBzdHlsZT17eyB3aWR0aDogMTUwLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCB9fSB2YWx1ZT17ZGF0ZVJhbmdlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RGF0ZVJhbmdlKGV2dC50YXJnZXQudmFsdWUgYXMgRGF0ZVJhbmdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0RhdGVSYW5nZXMubWFwKChkciwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtkcn0+e2RyfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3sgd2lkdGg6IDIwMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDE1MCB9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bW9tZW50KGRhdGVzWzBdLCBNb21lbnREYXRlVGltZUZvcm1hdCkuZm9ybWF0KE1vbWVudERhdGVGb3JtYXQpfSB0eXBlPVwiZGF0ZVwiIG9uQ2hhbmdlPXtlID0+IHNldERhdGVzKFtlLnRhcmdldC52YWx1ZSwgZGF0ZXNbMV1dKX0gZGlzYWJsZWQ9e2RhdGVSYW5nZSAhPSAnY3VzdG9tJyB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17eyB3aWR0aDogMjAwLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMzUwIH19IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXttb21lbnQoZGF0ZXNbMV0sIE1vbWVudERhdGVUaW1lRm9ybWF0KS5mb3JtYXQoTW9tZW50RGF0ZUZvcm1hdCl9IHR5cGU9XCJkYXRlXCIgb25DaGFuZ2U9e2UgPT4gc2V0RGF0ZXMoW2RhdGVzWzBdLGUudGFyZ2V0LnZhbHVlXSl9IGRpc2FibGVkPXtkYXRlUmFuZ2UgIT0gJ2N1c3RvbSd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ey8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXVlcnkgQWdncmVnYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2FnZ3JlZ2F0aW9ufSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QWdncmVnYXRpb24oZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdub25lJz5Ob25lPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0naG91cmx5Jz5Ib3VybHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdkYWlseSc+RGFpbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN1bW1hcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17c2hvd1N0YXRzfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0U2hvd1N0YXRzKGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzdGF0cyc+U3RhdHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2NwJz5DUDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xJyBzdHlsZT17e3BhZGRpbmdUb3A6IDMwfX0+PEV4cG9ydENTViBNZXRlcj17bWV0ZXJ9IENoYW5uZWxzPXtjaGFubmVscy5maWx0ZXIoYyA9PiBjLlNlbGVjdGVkKS5tYXAoYyA9PiBjLkNoYW5uZWwpfSBTdGFydERhdGU9e2RhdGVzWzBdfSBFbmREYXRlPXtkYXRlc1sxXX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiY2FsYygxMDAlIC0gMTM1cHgpXCIsIG92ZXJmbG93WTogJ2F1dG8nLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1suLi5uZXcgU2V0KGNoYW5uZWxzLmZpbHRlcihjID0+IGMuU2VsZWN0ZWQpLm1hcChjID0+IGMuQ2hhbm5lbC5NZWFzdXJlbWVudFR5cGUgKyAnICcgKyBjLkNoYW5uZWwuTWVhc3VyZW1lbnRDaGFyYWN0ZXJpc3RpYykpXS5tYXAoayA9PiA8Q2hhcnQga2V5PXtrfSBTaG93U3RhdHM9e3Nob3dTdGF0c30gTmFtZT17a30gQ2hhbm5lbHM9e2NoYW5uZWxzLmZpbHRlcihjID0+IGMuU2VsZWN0ZWQgJiYgKGMuQ2hhbm5lbC5NZWFzdXJlbWVudFR5cGUgKyAnICcgKyBjLkNoYW5uZWwuTWVhc3VyZW1lbnRDaGFyYWN0ZXJpc3RpYykgPT0gaykubWFwKGMgPT4gYy5DaGFubmVsKX0gU3RhcnREYXRlPXtkYXRlc1swXX0gRW5kRGF0ZT17ZGF0ZXNbMV19IEhvdmVyPXtob3Zlcn0gU2V0SG92ZXI9e3NldEhvdmVyfSBTZXRab29tPXsocywgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRlcyhbcyxlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXJ0U2VyaWVzIHtcclxuICAgIENoYW5uZWw6IE9wZW5YREEuVHlwZXMuQ2hhbm5lbCwgRmllbGQ6ICdtaW4nIHwgJ21heCcgfCAnYXZnJywgU2VsZWN0ZWQ6IGJvb2xlYW4sIERhdGE6IHsgVGltZVN0YW1wOiBzdHJpbmcsIFZhbHVlOiBudW1iZXIgfVtdLCBNaW46IG51bWJlciwgTWF4OiBudW1iZXIsIEF2ZzogbnVtYmVyLCBTdERldjogbnVtYmVyLCBDUDk5OiBudW1iZXIsIENQOTU6IG51bWJlciwgQ1A1MDogbnVtYmVyLCBDUDA1OiBudW1iZXIsIENQMDE6IG51bWJlciwgT3V0bGllcnM6IG51bWJlciwgRGF0YVBvaW50czogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0ID0gKHByb3BzOiB7IE5hbWU6IHN0cmluZywgQ2hhbm5lbHM6IE9wZW5YREEuVHlwZXMuQ2hhbm5lbFtdLCBTdGFydERhdGU6IHN0cmluZywgRW5kRGF0ZTogc3RyaW5nLCBTaG93U3RhdHM6ICdzdGF0cycgfCAnY3AnLCBIb3ZlcjogbnVtYmVyLCBTZXRIb3ZlcjogKGhvdjogbnVtYmVyKSA9PiB2b2lkLCBTZXRab29tOiAoc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykgPT4gdm9pZCB9KSA9PiB7ICBcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IDMwMDtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAyIC8gMztcclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDAsIGJvdHRvbTogNDAsIGxlZnQ6IDUwIH07XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxvYmplY3Q+KHt9KTtcclxuICAgIGNvbnN0IFtjaGFubmVscywgc2V0Q2hhbm5lbHNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5UeXBlcy5DaGFubmVsW10+KHByb3BzLkNoYW5uZWxzKTtcclxuICAgIGNvbnN0IFtob3ZlckRhdGEsIHNldEhvdmVyRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxvYmplY3Q+KHt9KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGFubmVsc2pzb24gPSBKU09OLnN0cmluZ2lmeShjaGFubmVscyk7XHJcbiAgICAgICAgbGV0IHByb3BzQ2hhbm5lbHNqc29uID0gSlNPTi5zdHJpbmdpZnkocHJvcHMuQ2hhbm5lbHMpO1xyXG4gICAgICAgIGlmIChjaGFubmVsc2pzb24gIT0gcHJvcHNDaGFubmVsc2pzb24pXHJcbiAgICAgICAgICAgIHNldENoYW5uZWxzKHByb3BzLkNoYW5uZWxzKTtcclxuICAgIH0sIFtwcm9wcy5DaGFubmVsc10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbY2hhbm5lbHMsIHByb3BzLlN0YXJ0RGF0ZSwgcHJvcHMuRW5kRGF0ZV0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gRHJhd0NoYXJ0KGRhdGEpO1xyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5Ib3ZlciA8IG1hcmdpbi5sZWZ0KSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuSG92ZXIgPiBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzdmcgPSBzZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdCgnc3ZnJyk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcuaG92ZXItbGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcImhvdmVyLWxpbmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsJ3JlZCcpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBgTSAke3Byb3BzLkhvdmVyfSAke3N2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b219IFYgJHttYXJnaW4udG9wfWApXHJcblxyXG4gICAgICAgIGxldCB4ID0gc2NhbGVVdGMoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcclxuICAgICAgICB4LmRvbWFpbihbbW9tZW50LnV0Yyhwcm9wcy5TdGFydERhdGUsIE1vbWVudERhdGVUaW1lRm9ybWF0KSwgbW9tZW50LnV0Yyhwcm9wcy5FbmREYXRlLCBNb21lbnREYXRlVGltZUZvcm1hdCldKTtcclxuICAgICAgICBsZXQgdHMgPSBtb21lbnQudXRjKHguaW52ZXJ0KHByb3BzLkhvdmVyKSkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KTtcclxuXHJcbiAgICAgICAgbGV0IGhvdkRpY3QgPSB7fTtcclxuICAgICAgICAkLmVhY2goT2JqZWN0LmtleXMoZGF0YSksIChpLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGRhdGFba2V5XS5EYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IG11bHQgPSAocHJvcHMuSG92ZXIgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCkgLyAoc3ZnV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IobXVsdCAqIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codHMsIGRhdGFba2V5XS5EYXRhW2luZGV4XS5UaW1lU3RhbXApO1xyXG5cclxuICAgICAgICAgICAgaG92RGljdFtrZXldID0gZGF0YVtrZXldLkRhdGFbaW5kZXhdLlZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEhvdmVyRGF0YShob3ZEaWN0KTtcclxuXHJcbiAgICB9LCBbcHJvcHMuSG92ZXJdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RGF0YSgpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgICAgICAgICAgZnJvbShidWNrZXQ6IFwiJHtidWNrZXR9XCIpXHJcbiAgICAgICAgICAgIHw+IHJhbmdlKHN0YXJ0OiAke21vbWVudC50eihwcm9wcy5TdGFydERhdGUsIE1vbWVudFRpbWVab25lKS51dGMoKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpfVosIHN0b3A6ICR7bW9tZW50LnR6KHByb3BzLkVuZERhdGUsIE1vbWVudFRpbWVab25lKS51dGMoKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpfVopXHJcbiAgICAgICAgICAgIHw+IGZpbHRlcihmbjogKHIpID0+ICR7cHJvcHMuQ2hhbm5lbHMubWFwKGMgPT4gKFwiMDAwMDAwMDAwMDAwMDAwXCIgKyBjLklELnRvU3RyaW5nKDE2KSkuc3Vic3RyKC04KSkubWFwKGMgPT4gJ3IudGFnID09IFwiJyArIGMgKyAnXCInKS5qb2luKCcgb3IgJyl9KVxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGUgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiByZXF1ZXN0ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIGBUb2tlbiAke3Rva2VufWApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob3N0fS9hcGkvdjIvcXVlcnk/b3JnPSR7b3JnfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGVuY29kaW5nPXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnksIHR5cGU6ICdmbHV4J30pLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKChkYXRhOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvd3MgPSBkYXRhLnNwbGl0KCdcXHJcXG4nKTtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVyID0gcm93c1tpKytdLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGxldCB0YWdJbmRleCA9IGhlYWRlci5pbmRleE9mKCd0YWcnKTtcclxuICAgICAgICAgICAgbGV0IHRpbWVJbmRleCA9IGhlYWRlci5pbmRleE9mKCdfdGltZScpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVJbmRleCA9IGhlYWRlci5pbmRleE9mKCdfdmFsdWUnKTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkSW5kZXggPSBoZWFkZXIuaW5kZXhPZignX2ZpZWxkJyk7XHJcbiAgICAgICAgICAgIGxldCBkaWN0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdyA9IHJvd3NbaV0uc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dbdGFnSW5kZXhdID09IHVuZGVmaW5lZCB8fCByb3dbdGFnSW5kZXhdID09IFwidGFnXCIgfHwgcm93W2ZpZWxkSW5kZXhdID09IFwiZmxhZ3NcIiApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGljdC5oYXNPd25Qcm9wZXJ0eShyb3dbdGFnSW5kZXhdICsgJy0nICsgcm93W2ZpZWxkSW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpY3Rbcm93W3RhZ0luZGV4XSArICctJyArIHJvd1tmaWVsZEluZGV4XV0uRGF0YS5wdXNoKHsgVGltZVN0YW1wOiBtb21lbnQudXRjKHJvd1t0aW1lSW5kZXhdKS50eihNb21lbnRUaW1lWm9uZSkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KSArICdaJywgVmFsdWU6IHBhcnNlRmxvYXQocm93W3ZhbHVlSW5kZXhdKSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWN0W3Jvd1t0YWdJbmRleF0gKyAnLScgKyByb3dbZmllbGRJbmRleF1dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFubmVsOiBwcm9wcy5DaGFubmVscy5maW5kKGMgPT4gKFwiMDAwMDAwMDAwMDAwMDAwXCIgKyBjLklELnRvU3RyaW5nKDE2KSkuc3Vic3RyKC04KSA9PSByb3dbdGFnSW5kZXhdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmllbGQ6IHJvd1tmaWVsZEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGE6IFt7IFRpbWVTdGFtcDogbW9tZW50LnV0Yyhyb3dbdGltZUluZGV4XSkudHooTW9tZW50VGltZVpvbmUpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCkgKyAnWicsIFZhbHVlOiBwYXJzZUZsb2F0KHJvd1t2YWx1ZUluZGV4XSkgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1heDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0RGV2OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBDaGFydFNlcmllcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGhvdkRpY3QgPSB7fTtcclxuICAgICAgICAgICAgJC5lYWNoKE9iamVjdC5rZXlzKGRpY3QpLCAoaSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uTWluID0gTWF0aC5taW4oLi4uZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLk1heCA9IE1hdGgubWF4KC4uLmRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5BdmcgPSBzdGF0cy5tZWFuKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5TdERldiA9IHN0YXRzLnN0ZGV2KGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5DUDk5ID0gc3RhdHMucGVyY2VudGlsZShkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSwwLjk5KTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5DUDk1ID0gc3RhdHMucGVyY2VudGlsZShkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSwgMC45NSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uQ1A1MCA9IHN0YXRzLnBlcmNlbnRpbGUoZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSksIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uQ1AwNSA9IHN0YXRzLnBlcmNlbnRpbGUoZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSksIDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkNQMDEgPSBzdGF0cy5wZXJjZW50aWxlKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpLCAwLjAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbG93ZXJCb3VuZCA9IGRpY3Rba2V5XS5BdmcgLSAzICogZGljdFtrZXldLlN0RGV2O1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwcGVyQm91bmQgPSBkaWN0W2tleV0uQXZnICsgMyAqIGRpY3Rba2V5XS5TdERldjtcclxuXHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uT3V0bGllcnMgPSBkaWN0W2tleV0uRGF0YS5maWx0ZXIoZCA9PiBkLlZhbHVlIDwgbG93ZXJCb3VuZCB8fCBkLlZhbHVlID4gdXBwZXJCb3VuZCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkRhdGFQb2ludHMgPSBkaWN0W2tleV0uRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBob3ZEaWN0W2tleV0gPSBkaWN0W2tleV0uRGF0YVswXS5WYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldERhdGEoZGljdCk7XHJcbiAgICAgICAgICAgIHNldEhvdmVyRGF0YShob3ZEaWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGUuYWJvcnQgIT0gdW5kZWZpbmVkKSBoYW5kbGUuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVVdGMoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCwgbWFyZ2luLmJvdHRvbV0pO1xyXG5cclxuXHJcbiAgICAgICAgc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodClcclxuICAgICAgICAgICAgLnN0eWxlKCd1c2VyLXNlbGVjdCcsICdub25lJylcclxuICAgICAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZDogTW91c2VFdmVudCkgPT4gcHJvcHMuU2V0SG92ZXIoZC5vZmZzZXRYKSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZWRvd24nLCAoZDogTW91c2VFdmVudCkgPT4gT25YWm9vbShkLCBzdmcsIHgpKTtcclxuXHJcbiAgICAgICAgbGV0IHlleHRlbnQgPSBleHRlbnQoW10uY29uY2F0KC4uLk9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihrZXkgPT4gZGF0YVtrZXldLlNlbGVjdGVkKS5tYXAoa2V5ID0+IGRhdGFba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKSkpO1xyXG4gICAgICAgIHkuZG9tYWluKHlleHRlbnQpO1xyXG4gICAgICAgIHguZG9tYWluKFttb21lbnQudXRjKHByb3BzLlN0YXJ0RGF0ZSwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBtb21lbnQudXRjKHByb3BzLkVuZERhdGUsIE1vbWVudERhdGVUaW1lRm9ybWF0KV0pO1xyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChheGlzQm90dG9tKHgpKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LDApYClcclxuICAgICAgICAgICAgLmNhbGwoYXhpc0xlZnQoeSkudGlja3MoTWF0aC5mbG9vcihzdmdIZWlnaHQgLyA1MCkgKyAxKS50aWNrRm9ybWF0KCh2YWx1ZTogbnVtYmVyKSA9PiBkM0Zvcm1hdChcIn5zXCIpKHZhbHVlKSkpO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPHsgVGltZVN0YW1wOnN0cmluZywgVmFsdWU6IG51bWJlciwgRmllbGQ6IHN0cmluZyB9PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lU3RhbXApKSkueShkID0+IHkoZC5WYWx1ZSkpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5taW4tbGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5taW4tbGluZVwiKVxyXG4gICAgICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoa2V5ID0+IGRhdGFba2V5XS5GaWVsZCA9PSAnbWluJyAmJiBkYXRhW2tleV0uU2VsZWN0ZWQpKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcImxpbmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCA0KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCAoZDogc3RyaW5nKSA9PiBnZXRDb2xvcihkYXRhW2RdLkNoYW5uZWwuUGhhc2UpKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVmdW5jKGRhdGFbZF0uRGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmF2Zy1saW5lXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmF2Zy1saW5lXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihrZXkgPT4gZGF0YVtrZXldLkZpZWxkID09ICdhdmcnICYmIGRhdGFba2V5XS5TZWxlY3RlZCkpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKGQ6IHN0cmluZykgPT4gZ2V0Q29sb3IoZGF0YVtkXS5DaGFubmVsLlBoYXNlKSlcclxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lZnVuYyhkYXRhW2RdLkRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubWF4LWxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubWF4LWxpbmVcIilcclxuICAgICAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGtleSA9PiBkYXRhW2tleV0uRmllbGQgPT0gJ21heCcgJiYgZGF0YVtrZXldLlNlbGVjdGVkKSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5lXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgKGQpID0+IDIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIChkOiBzdHJpbmcpID0+IGdldENvbG9yKGRhdGFbZF0uQ2hhbm5lbC5QaGFzZSkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YVtkXS5EYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IobGFiZWwpIHtcclxuICAgICAgICBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdBTicpID49IDApIHJldHVybiAnI0EzMDAwMCc7ICAgLy8gZGFya2VyIHJlZFxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQk4nKSA+PSAwKSByZXR1cm4gJyMwMDI5QTMnOyAgIFxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQ04nKSA+PSAwKSByZXR1cm4gJyMwMDdBMjknO1xyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTkcnKSA+PSAwKSByZXR1cm4gJyNjM2MzYzMnOyAgIC8vIGdyZXlcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0FCJykgPj0gMCkgcmV0dXJuICcjRkYwMDAwJzsgICAvLyBicmlnaHRlciByZWRcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0JDJykgPj0gMCkgcmV0dXJuICcjMDA2NkNDJztcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0NBJykgPj0gMCkgcmV0dXJuICcjMzNDQzMzJzsgICAvLyBncmV5XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdSRVMnKSA+PSAwKSByZXR1cm4gJyNjM2MzYzMnOyAgLy8gZ3JleVxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQUxMJykgPj0gMCkgcmV0dXJuICcjYzNjM2MzJzsgIC8vIGdyZXlcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJhbk51bU9uZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtVHdvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1UaHJlZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGAjJHsocmFuTnVtT25lLmxlbmd0aCA+IDEgPyByYW5OdW1PbmUgOiBcIjBcIiArIHJhbk51bU9uZSl9JHsocmFuTnVtVHdvLmxlbmd0aCA+IDEgPyByYW5OdW1Ud28gOiBcIjBcIiArIHJhbk51bVR3byl9JHsocmFuTnVtVGhyZWUubGVuZ3RoID4gMSA/IHJhbk51bVRocmVlIDogXCIwXCIgKyByYW5OdW1UaHJlZSl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0bGFiZWwobGFiZWwpIHtcclxuICAgICAgICBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQVgnKSA+PSAwKSByZXR1cm4gJ01heCc7XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdNSU4nKSA+PSAwKSByZXR1cm4gJ01pbic7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gJ0F2Zyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGFzaEFycmF5KGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFYJykgPj0gMCkgcmV0dXJuIDI7XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdNSU4nKSA+PSAwKSByZXR1cm4gNDtcclxuICAgICAgICBlbHNlIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldExpbmUodGFnLCBtZWFzdXJlbWVudCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCJNIDAgMTcgIEMgMTAgMCwgMjAgMCwgMjUgMTAgUyAzMiAyNSwgNDUgMTdcIjtcclxuICAgICAgICBpZiAobWVhc3VyZW1lbnQuU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybiA8c3ZnIGhlaWdodD17MjV9IHdpZHRoPXs1MH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFbdGFnXS5TZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShuZXdEYXRhKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtwYXRofSBzdHJva2U9e2dldENvbG9yKG1lYXN1cmVtZW50LkNoYW5uZWwuUGhhc2UpfSBzdHJva2VEYXNoYXJyYXk9e2dldERhc2hBcnJheShtZWFzdXJlbWVudC5GaWVsZCl9IHN0cm9rZVdpZHRoPXsxLjV9IGZpbGw9XCJ0cmFuc3BhcmVudFwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiA8c3ZnIGhlaWdodD17MjV9IHdpZHRoPXs1MH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB7IC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFbdGFnXS5TZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtwYXRofSBzdHJva2U9e2dldENvbG9yKG1lYXN1cmVtZW50LkNoYW5uZWwuUGhhc2UpfSBzdHJva2VEYXNoYXJyYXk9e2dldERhc2hBcnJheShtZWFzdXJlbWVudC5GaWVsZCl9IHN0cm9rZVdpZHRoPXsxLjV9IGZpbGw9XCJ0cmFuc3BhcmVudFwiIG9wYWNpdHk9ezAuMn0vPlxyXG4gICAgICAgICAgICA8L3N2Zz47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdFRleHQobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtID49IDEwKSByZXR1cm4gbnVtLnRvRml4ZWQoMCk7XHJcbiAgICAgICAgZWxzZSBpZiAobnVtID49IDApIHJldHVybiBudW0udG9GaXhlZCgyKTtcclxuICAgICAgICBlbHNlIGlmIChudW0gPj0gMC4wMDAxKSByZXR1cm4gbnVtLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgZWxzZSBpZiAobnVtID49IDAuMDAwMDAxKSByZXR1cm4gbnVtLnRvRml4ZWQoNik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbnVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBPblhab29tKGV2dDogTW91c2VFdmVudCwgc3ZnOiBkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgbnVsbCwgdW5kZWZpbmVkPiwgc2NhbGU6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4pIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGV2dC5vZmZzZXRYO1xyXG4gICAgICAgIGNvbnN0IGJydXNoID0gYnJ1c2hYKClcclxuICAgICAgICAgICAgLmV4dGVudChbW21hcmdpbi5sZWZ0LCBtYXJnaW4udG9wICsgMC41XSwgW3N2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0LCBzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tICsgMC41XV0pXHJcblxyXG4gICAgICAgIGNvbnN0IGJyID0gc3ZnLmFwcGVuZCgnZycpLmNhbGwoYnJ1c2gpXHJcbiAgICAgICAgYnIuY2FsbChicnVzaC5tb3ZlLCBbc3RhcnQsIHN0YXJ0ICsgMV0pO1xyXG4gICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgYnIuY2FsbChicnVzaC5tb3ZlLCBbc3RhcnQsIGUub2Zmc2V0WF0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3ZnLm9uKCdtb3VzZXVwLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oc3RhcnQsIGUub2Zmc2V0WCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHN0YXJ0LCBlLm9mZnNldFgpO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXRab29tKG1vbWVudChzY2FsZS5pbnZlcnQobWluKSkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KSwgbW9tZW50KHNjYWxlLmludmVydChtYXgpKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpKTtcclxuICAgICAgICAgICAgYnIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlLmJydXNoJywgbnVsbCk7XHJcbiAgICAgICAgICAgIHN2Zy5vbignbW91c2V1cC5icnVzaCcsIG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57cHJvcHMuTmFtZSB9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3twYWRkaW5nOjAsIHBvc2l0aW9uOiAncmVsYXRpdmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9J3B1bGwtbGVmdCcgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiAnY2FsYygxMDAlIC0gNDAwcHgpJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdWxsLXJpZ2h0JyBzdHlsZT17eyBoZWlnaHQ6IDMwMCwgbWF4SGVpZ2h0OiAzMDAsIG92ZXJmbG93WTogJ2F1dG8nLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAzIC0gNzUsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCByaWdodDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGhhc2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ib3ZlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pk1pbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkF2ZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pk1heDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PlN0RGV2PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q1A5OTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNQOTU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5DUDUwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q1AwNTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNQMDE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5Db3VudHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5PdXRsaWVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YVtrZXldLkNoYW5uZWwuUGhhc2V9LXtnZXRsYWJlbChrZXkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0TGluZShrZXksIGRhdGFba2V5XSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmb3JtYXRUZXh0KGhvdmVyRGF0YVtrZXldKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLk1pbil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5BdmcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uTWF4KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLlN0RGV2KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDV9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQ1A5OSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5DUDk1KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLkNQNTApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQ1AwNSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5DUDAxKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2RhdGFba2V5XS5EYXRhUG9pbnRzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57ZGF0YVtrZXldLk91dGxpZXJzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbmRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==