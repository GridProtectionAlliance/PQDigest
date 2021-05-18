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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'col-1' },
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
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (props.Channels.length > 0)
            return GetData();
    }, [props.Channels, props.StartDate, props.EndDate]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (Object.keys(data).length > 0)
            return DrawChart(data);
    }, [data]);
    //React.useEffect(() => {
    //    if (props.Hover < margin.left) return;
    //    else if (props.Hover > svgWidth - margin.right) return;
    //    const svg = select(ref.current).select('svg');
    //    svg.selectAll("g.hover-line").remove();
    //    svg.append("g")
    //        .classed("hover-line", true)
    //        .append("path")
    //        .attr("fill", "none")
    //        .attr("stroke-width", 1.5)
    //        .attr("stroke",'red')
    //        .attr("d", `M ${props.Hover} ${svgHeight - margin.bottom} V ${margin.top}`)
    //}, [props.Hover]);
    function GetData() {
        var query = "\n            from(bucket: \"" + bucket + "\")\n            |> range(start: " + moment__WEBPACK_IMPORTED_MODULE_5___default.a.tz(props.StartDate, 'America/Chicago').utc().format(MomentDateTimeFormat) + "Z, stop: " + moment__WEBPACK_IMPORTED_MODULE_5___default.a.tz(props.EndDate, 'America/Chicago').utc().format(MomentDateTimeFormat) + "Z)\n            |> filter(fn: (r) => " + props.Channels.map(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8); }).map(function (c) { return 'r.tag == "' + c + '"'; }).join(' or ') + ")\n        ";
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
                    dict[row[tagIndex] + '-' + row[fieldIndex]].Data.push({ TimeStamp: row[timeIndex], Value: parseFloat(row[valueIndex]) });
                }
                else {
                    dict[row[tagIndex] + '-' + row[fieldIndex]] = {
                        Channel: props.Channels.find(function (c) { return ("000000000000000" + c.ID.toString(16)).substr(-8) == row[tagIndex]; }),
                        Field: row[fieldIndex],
                        Selected: true,
                        Data: [{ TimeStamp: row[timeIndex], Value: parseFloat(row[valueIndex]) }],
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
            });
            setData(dict);
        });
        return function () {
            if (handle.abort != undefined)
                handle.abort();
        };
    }
    function DrawChart(data) {
        var x = Object(d3__WEBPACK_IMPORTED_MODULE_7__["scaleTime"])().rangeRound([margin.left, svgWidth - margin.right]);
        var y = Object(d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"])().rangeRound([svgHeight - margin.top, margin.bottom]);
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"])(ref.current).selectAll('svg').remove();
        var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"])(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('user-select', 'none')
            //.on('mouseover', (d: MouseEvent) => props.SetHover(d.offsetX))
            .on('mousedown', function (d) { return OnXZoom(d, svg, x); });
        var yextent = Object(d3__WEBPACK_IMPORTED_MODULE_7__["extent"])([].concat.apply([], __spread(Object.keys(data).filter(function (key) { return data[key].Selected; }).map(function (key) { return data[key].Data.map(function (d) { return d.Value; }); }))));
        y.domain(yextent);
        x.domain([moment__WEBPACK_IMPORTED_MODULE_5___default()(props.StartDate, MomentDateTimeFormat), moment__WEBPACK_IMPORTED_MODULE_5___default()(props.EndDate, MomentDateTimeFormat)]);
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
            //console.log(moment(scale.invert(min)).format('MM/DD/YYYY HH:mm:ss'));
            //console.log(moment(scale.invert(max)).format('MM/DD/YYYY HH:mm:ss'));
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lzbnVtYmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdGF0cy1saXRlL3N0YXRzLmpzIiwid2VicGFjazovLy8uL3RzeC9UcmVuZGluZy9FeHBvcnRDU1YudHN4Iiwid2VicGFjazovLy8uL3RzeC9UcmVuZGluZy9UcmVuZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RTs7Ozs7Ozs7Ozs7O0FDcFJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsbUJBQU8sQ0FBQyxtREFBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGVBQWU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0VBQXdFLDJCQUEyQjtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsaURBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTFFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFH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QyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBTTs0QkFDeEgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBTTs0QkFDMUgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTTs0QkFDckgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTTs0QkFDdEgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTTs0QkFDdEgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTTs0QkFDdEgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTTs0QkFDdEgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBTTs0QkFDbkgsbUVBQUksS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBTSxDQUNoSDtvQkFmTCxDQWVLLENBQUMsQ0FFTixDQUNKLENBQ04sQ0FDSixDQUNKLENBRVQsQ0FBQztBQUNOLENBQUM7QUFFYyx1RUFBUSxFQUFDIiwiZmlsZSI6IlRyZW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBpc051bWJlclxuXG4vKipcbiAqIERldGVybWluZSBpZiBzb21ldGhpbmcgaXMgYSBub24taW5maW5pdGUgamF2YXNjcmlwdCBudW1iZXIuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICBuIEEgKHBvdGVudGlhbCkgbnVtYmVyIHRvIHNlZSBpZiBpdCBpcyBhIG51bWJlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgVHJ1ZSBmb3Igbm9uLWluZmluaXRlIG51bWJlcnMsIGZhbHNlIGZvciBhbGwgZWxzZS5cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIobikge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xufSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cy5udW1iZXJzID0gbnVtYmVyc1xubW9kdWxlLmV4cG9ydHMuc3VtID0gc3VtXG5tb2R1bGUuZXhwb3J0cy5tZWFuID0gbWVhblxubW9kdWxlLmV4cG9ydHMubWVkaWFuID0gbWVkaWFuXG5tb2R1bGUuZXhwb3J0cy5tb2RlID0gbW9kZVxubW9kdWxlLmV4cG9ydHMudmFyaWFuY2UgPSBwb3B1bGF0aW9uVmFyaWFuY2Vcbm1vZHVsZS5leHBvcnRzLnNhbXBsZVZhcmlhbmNlID0gc2FtcGxlVmFyaWFuY2Vcbm1vZHVsZS5leHBvcnRzLnBvcHVsYXRpb25WYXJpYW5jZSA9IHBvcHVsYXRpb25WYXJpYW5jZVxubW9kdWxlLmV4cG9ydHMuc3RkZXYgPSBwb3B1bGF0aW9uU3RkZXZcbm1vZHVsZS5leHBvcnRzLnNhbXBsZVN0ZGV2ID0gc2FtcGxlU3RkZXZcbm1vZHVsZS5leHBvcnRzLnBvcHVsYXRpb25TdGRldiA9IHBvcHVsYXRpb25TdGRldlxubW9kdWxlLmV4cG9ydHMucGVyY2VudGlsZSA9IHBlcmNlbnRpbGVcbm1vZHVsZS5leHBvcnRzLmhpc3RvZ3JhbSA9IGhpc3RvZ3JhbVxuXG52YXIgaXNOdW1iZXIgPSByZXF1aXJlKFwiaXNudW1iZXJcIilcblxuZnVuY3Rpb24gbnVtYmVycyh2YWxzKSB7XG4gIHZhciBudW1zID0gW11cbiAgaWYgKHZhbHMgPT0gbnVsbClcbiAgICByZXR1cm4gbnVtc1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc051bWJlcih2YWxzW2ldKSlcbiAgICAgIG51bXMucHVzaCgrdmFsc1tpXSlcbiAgfVxuICByZXR1cm4gbnVtc1xufVxuXG5mdW5jdGlvbiBuc29ydCh2YWxzKSB7XG4gIHJldHVybiB2YWxzLnNvcnQoZnVuY3Rpb24gbnVtZXJpY1NvcnQoYSwgYikgeyByZXR1cm4gYSAtIGIgfSlcbn1cblxuZnVuY3Rpb24gc3VtKHZhbHMpIHtcbiAgdmFscyA9IG51bWJlcnModmFscylcbiAgdmFyIHRvdGFsID0gMFxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB0b3RhbCArPSB2YWxzW2ldXG4gIH1cbiAgcmV0dXJuIHRvdGFsXG59XG5cbmZ1bmN0aW9uIG1lYW4odmFscykge1xuICB2YWxzID0gbnVtYmVycyh2YWxzKVxuICBpZiAodmFscy5sZW5ndGggPT09IDApIHJldHVybiBOYU5cbiAgcmV0dXJuIChzdW0odmFscykgLyB2YWxzLmxlbmd0aClcbn1cblxuZnVuY3Rpb24gbWVkaWFuKHZhbHMpIHtcbiAgdmFscyA9IG51bWJlcnModmFscylcbiAgaWYgKHZhbHMubGVuZ3RoID09PSAwKSByZXR1cm4gTmFOXG5cbiAgdmFyIGhhbGYgPSAodmFscy5sZW5ndGggLyAyKSB8IDBcblxuICB2YWxzID0gbnNvcnQodmFscylcbiAgaWYgKHZhbHMubGVuZ3RoICUgMikge1xuICAgIC8vIE9kZCBsZW5ndGgsIHRydWUgbWlkZGxlIGVsZW1lbnRcbiAgICByZXR1cm4gdmFsc1toYWxmXVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIEV2ZW4gbGVuZ3RoLCBhdmVyYWdlIG1pZGRsZSB0d28gZWxlbWVudHNcbiAgICByZXR1cm4gKHZhbHNbaGFsZi0xXSArIHZhbHNbaGFsZl0pIC8gMi4wXG4gIH1cbn1cblxuLy8gUmV0dXJucyB0aGUgbW9kZSBvZiBhIHVuaW1vZGFsIGRhdGFzZXRcbi8vIElmIHRoZSBkYXRhc2V0IGlzIG11bHRpLW1vZGFsLCByZXR1cm5zIGEgU2V0IGNvbnRhaW5pbmcgdGhlIG1vZGVzXG5mdW5jdGlvbiBtb2RlKHZhbHMpIHtcbiAgdmFscyA9IG51bWJlcnModmFscylcbiAgaWYgKHZhbHMubGVuZ3RoID09PSAwKSByZXR1cm4gTmFOXG4gIHZhciBtb2RlID0gTmFOXG4gIHZhciBkaXN0ID0ge31cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdmFsdWUgPSB2YWxzW2ldXG4gICAgdmFyIG1lID0gZGlzdFt2YWx1ZV0gfHwgMFxuICAgIG1lKytcbiAgICBkaXN0W3ZhbHVlXSA9IG1lXG4gIH1cblxuICB2YXIgcmFuayA9IG51bWJlcnMoT2JqZWN0LmtleXMoZGlzdCkuc29ydChmdW5jdGlvbiBzb3J0TWVtYmVycyhhLCBiKSB7IHJldHVybiBkaXN0W2JdIC0gZGlzdFthXSB9KSlcbiAgbW9kZSA9IHJhbmtbMF1cbiAgaWYgKGRpc3RbcmFua1sxXV0gPT0gZGlzdFttb2RlXSkge1xuICAgIC8vIG11bHRpLW1vZGFsXG4gICAgaWYgKHJhbmsubGVuZ3RoID09IHZhbHMubGVuZ3RoKSB7XG4gICAgICAvLyBhbGwgdmFsdWVzIGFyZSBtb2Rlc1xuICAgICAgcmV0dXJuIHZhbHNcbiAgICB9XG4gICAgdmFyIG1vZGVzID0gbmV3IFNldChbbW9kZV0pXG4gICAgdmFyIG1vZGVDb3VudCA9IGRpc3RbbW9kZV1cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHJhbmsubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaXN0W3JhbmtbaV1dID09IG1vZGVDb3VudCkge1xuICAgICAgICBtb2Rlcy5hZGQocmFua1tpXSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9kZXNcbiAgfVxuICByZXR1cm4gbW9kZVxufVxuXG4vLyBUaGlzIGhlbHBlciBmaW5kcyB0aGUgbWVhbiBvZiBhbGwgdGhlIHZhbHVlcywgdGhlbiBzcXVhcmVzIHRoZSBkaWZmZXJlbmNlXG4vLyBmcm9tIHRoZSBtZWFuIGZvciBlYWNoIHZhbHVlIGFuZCByZXR1cm5zIHRoZSByZXN1bHRpbmcgYXJyYXkuICBUaGlzIGlzIHRoZVxuLy8gY29yZSBvZiB0aGUgdmFyaWVuY2UgZnVuY3Rpb25zIC0gdGhlIGRpZmZlcmVuY2UgYmVpbmcgZGl2aWRpbmcgYnkgTiBvciBOLTEuXG5mdW5jdGlvbiB2YWx1ZXNNaW51c01lYW5TcXVhcmVkKHZhbHMpIHtcbiAgdmFscyA9IG51bWJlcnModmFscylcbiAgdmFyIGF2ZyA9IG1lYW4odmFscylcbiAgdmFyIGRpZmZzID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGlmZnMucHVzaChNYXRoLnBvdygodmFsc1tpXSAtIGF2ZyksIDIpKVxuICB9XG4gIHJldHVybiBkaWZmc1xufVxuXG4vLyBQb3B1bGF0aW9uIFZhcmlhbmNlID0gYXZlcmFnZSBzcXVhcmVkIGRldmlhdGlvbiBmcm9tIG1lYW5cbmZ1bmN0aW9uIHBvcHVsYXRpb25WYXJpYW5jZSh2YWxzKSB7XG4gIHJldHVybiBtZWFuKHZhbHVlc01pbnVzTWVhblNxdWFyZWQodmFscykpXG59XG5cbi8vIFNhbXBsZSBWYXJpYW5jZVxuZnVuY3Rpb24gc2FtcGxlVmFyaWFuY2UodmFscykge1xuICB2YXIgZGlmZnMgPSB2YWx1ZXNNaW51c01lYW5TcXVhcmVkKHZhbHMpXG4gIGlmIChkaWZmcy5sZW5ndGggPD0gMSkgcmV0dXJuIE5hTlxuXG4gIHJldHVybiBzdW0oZGlmZnMpIC8gKGRpZmZzLmxlbmd0aCAtIDEpXG59XG5cblxuLy8gUG9wdWxhdGlvbiBTdGFuZGFyZCBEZXZpYXRpb24gPSBzcXJ0IG9mIHBvcHVsYXRpb24gdmFyaWFuY2VcbmZ1bmN0aW9uIHBvcHVsYXRpb25TdGRldih2YWxzKSB7XG4gIHJldHVybiBNYXRoLnNxcnQocG9wdWxhdGlvblZhcmlhbmNlKHZhbHMpKVxufVxuXG4vLyBTYW1wbGUgU3RhbmRhcmQgRGV2aWF0aW9uID0gc3FydCBvZiBzYW1wbGUgdmFyaWFuY2VcbmZ1bmN0aW9uIHNhbXBsZVN0ZGV2KHZhbHMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChzYW1wbGVWYXJpYW5jZSh2YWxzKSlcbn1cblxuZnVuY3Rpb24gcGVyY2VudGlsZSh2YWxzLCBwdGlsZSkge1xuICB2YWxzID0gbnVtYmVycyh2YWxzKVxuICBpZiAodmFscy5sZW5ndGggPT09IDAgfHwgcHRpbGUgPT0gbnVsbCB8fCBwdGlsZSA8IDApIHJldHVybiBOYU5cblxuICAvLyBGdWRnZSBhbnl0aGluZyBvdmVyIDEwMCB0byAxLjBcbiAgaWYgKHB0aWxlID4gMSkgcHRpbGUgPSAxXG4gIHZhbHMgPSBuc29ydCh2YWxzKVxuICB2YXIgaSA9ICh2YWxzLmxlbmd0aCAqIHB0aWxlKSAtIDAuNVxuICBpZiAoKGkgfCAwKSA9PT0gaSkgcmV0dXJuIHZhbHNbaV1cbiAgLy8gaW50ZXJwb2xhdGVkIHBlcmNlbnRpbGUgLS0gdXNpbmcgRXN0aW1hdGlvbiBtZXRob2RcbiAgdmFyIGludF9wYXJ0ID0gaSB8IDBcbiAgdmFyIGZyYWN0ID0gaSAtIGludF9wYXJ0XG4gIHJldHVybiAoMSAtIGZyYWN0KSAqIHZhbHNbaW50X3BhcnRdICsgZnJhY3QgKiB2YWxzW01hdGgubWluKGludF9wYXJ0ICsgMSwgdmFscy5sZW5ndGggLSAxKV1cbn1cblxuZnVuY3Rpb24gaGlzdG9ncmFtICh2YWxzLCBiaW5zKSB7XG4gIGlmICh2YWxzID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZhbHMgPSBuc29ydChudW1iZXJzKHZhbHMpKVxuICBpZiAodmFscy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGlmIChiaW5zID09IG51bGwpIHtcbiAgICAvLyBwaWNrIGJpbnMgYnkgc2ltcGxlIG1ldGhvZDogTWF0aC5zcXJ0KG4pXG4gICAgYmlucyA9IE1hdGguc3FydCh2YWxzLmxlbmd0aClcbiAgfVxuICBiaW5zID0gTWF0aC5yb3VuZChiaW5zKVxuICBpZiAoYmlucyA8IDEpIHtcbiAgICBiaW5zID0gMVxuICB9XG5cbiAgdmFyIG1pbiA9IHZhbHNbMF1cbiAgdmFyIG1heCA9IHZhbHNbdmFscy5sZW5ndGggLSAxXVxuICBpZiAobWluID09PSBtYXgpIHtcbiAgICAvLyBmdWRnZSBmb3Igbm9uLXZhcmlhbnQgZGF0YVxuICAgIG1pbiA9IG1pbiAtIDAuNVxuICAgIG1heCA9IG1heCArIDAuNVxuICB9XG5cbiAgdmFyIHJhbmdlID0gKG1heCAtIG1pbilcbiAgLy8gbWFrZSB0aGUgYmlucyBzbGlnaHRseSBsYXJnZXIgYnkgZXhwYW5kaW5nIHRoZSByYW5nZSBhYm91dCAxMCVcbiAgLy8gdGhpcyBoZWxwcyB3aXRoIGR1bWIgZmxvYXRpbmcgcG9pbnQgc3R1ZmZcbiAgdmFyIGJpbldpZHRoID0gKHJhbmdlICsgKHJhbmdlICogMC4wNSkpIC8gYmluc1xuICB2YXIgbWlkcG9pbnQgPSAobWluICsgbWF4KSAvIDJcbiAgLy8gZXZlbiBiaW4gY291bnQsIG1pZHBvaW50IG1ha2VzIGFuIGVkZ2VcbiAgdmFyIGxlZnRFZGdlID0gbWlkcG9pbnQgLSAoYmluV2lkdGggKiBNYXRoLmZsb29yKGJpbnMgLyAyKSlcbiAgaWYgKGJpbnMgJSAyICE9PSAwKSB7XG4gICAgLy8gb2RkIGJpbiBjb3VudCwgY2VudGVyIG1pZGRsZSBiaW4gb24gbWlkcG9pbnRcbiAgICB2YXIgbGVmdEVkZ2UgPSAobWlkcG9pbnQgLSAoYmluV2lkdGggLyAyKSkgLSAoYmluV2lkdGggKiBNYXRoLmZsb29yKGJpbnMgLyAyKSlcbiAgfVxuXG4gIHZhciBoaXN0ID0ge1xuICAgIHZhbHVlczogQXJyYXkoYmlucykuZmlsbCgwKSxcbiAgICBiaW5zOiBiaW5zLFxuICAgIGJpbldpZHRoOiBiaW5XaWR0aCxcbiAgICBiaW5MaW1pdHM6IFtsZWZ0RWRnZSwgbGVmdEVkZ2UgKyAoYmluV2lkdGggKiBiaW5zKV1cbiAgfVxuXG4gIHZhciBiaW5JbmRleCA9IDBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2hpbGUgKHZhbHNbaV0gPiAoKChiaW5JbmRleCArIDEpICogYmluV2lkdGgpICsgbGVmdEVkZ2UpKSB7XG4gICAgICBiaW5JbmRleCsrXG4gICAgfVxuICAgIGhpc3QudmFsdWVzW2JpbkluZGV4XSsrXG4gIH1cblxuICByZXR1cm4gaGlzdFxufVxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEV4cG9ydENTVi50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDUvMTcvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQtdGltZXpvbmUnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9hcHBsaWNhdGlvbi10eXBpbmdzJztcclxuY29uc3QgTW9tZW50RGF0ZVRpbWVGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzcydcclxuY29uc3QgTW9tZW50RGF0ZUZvcm1hdCA9ICdZWVlZLU1NLUREJztcclxuXHJcbmNvbnN0IEV4cG9ydENTViA9IChwcm9wczogeyBNZXRlcjogT3BlblhEQS5UeXBlcy5NZXRlciwgQ2hhbm5lbHM6IE9wZW5YREEuVHlwZXMuQ2hhbm5lbFtdLCBTdGFydERhdGU6IHN0cmluZywgRW5kRGF0ZTogc3RyaW5nfSkgPT4ge1xyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgXHJcbiAgICAgICAgICAgIGZyb20oYnVja2V0OiBcIiR7YnVja2V0fVwiKVxyXG4gICAgICAgICAgICB8PiByYW5nZShzdGFydDogJHttb21lbnQudHoocHJvcHMuU3RhcnREYXRlLCAnQW1lcmljYS9DaGljYWdvJykudXRjKCkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KX1aLCBzdG9wOiAke21vbWVudC50eihwcm9wcy5FbmREYXRlLCAnQW1lcmljYS9DaGljYWdvJykudXRjKCkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KX1aKVxyXG4gICAgICAgICAgICB8PiBmaWx0ZXIoZm46IChyKSA9PiAke3Byb3BzLkNoYW5uZWxzLm1hcChjID0+IChcIjAwMDAwMDAwMDAwMDAwMFwiICsgYy5JRC50b1N0cmluZygxNikpLnN1YnN0cigtOCkpLm1hcChjID0+ICdyLnRhZyA9PSBcIicgKyBjICsgJ1wiJykuam9pbignIG9yICcpfSlcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogcmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBgVG9rZW4gJHt0b2tlbn1gKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9zdH0vYXBpL3YyL3F1ZXJ5P29yZz0ke29yZ31gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBlbmNvZGluZz11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5LCB0eXBlOiAnZmx1eCcgfSksXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFByb2Nlc3MoZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJvd3MgPSBkYXRhLnNwbGl0KCdcXHJcXG4nKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHJvd3NbaSsrXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGxldCB0YWdJbmRleCA9IGhlYWRlci5pbmRleE9mKCd0YWcnKTtcclxuICAgICAgICBsZXQgdGltZUluZGV4ID0gaGVhZGVyLmluZGV4T2YoJ190aW1lJyk7XHJcbiAgICAgICAgbGV0IHZhbHVlSW5kZXggPSBoZWFkZXIuaW5kZXhPZignX3ZhbHVlJyk7XHJcbiAgICAgICAgbGV0IGZpZWxkSW5kZXggPSBoZWFkZXIuaW5kZXhPZignX2ZpZWxkJyk7XHJcbiAgICAgICAgbGV0IGRpY3QgPSB7fTtcclxuICAgICAgICBmb3IgKDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHJvd3NbaV0uc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgaWYgKHJvd1t0YWdJbmRleF0gPT0gdW5kZWZpbmVkIHx8IHJvd1t0YWdJbmRleF0gPT0gXCJ0YWdcIiB8fCByb3dbZmllbGRJbmRleF0gPT0gXCJmbGFnc1wiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgbGV0IGNoYW5uZWwgPSBwcm9wcy5DaGFubmVscy5maW5kKGMgPT4gKFwiMDAwMDAwMDAwMDAwMDAwXCIgKyBjLklELnRvU3RyaW5nKDE2KSkuc3Vic3RyKC04KSA9PSByb3dbdGFnSW5kZXhdKTtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gcm93W2ZpZWxkSW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgdGltZVN0YW1wID0gcm93W3RpbWVJbmRleF07XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hhbm5lbE5hbWUgPSBgJHtjaGFubmVsLk1lYXN1cmVtZW50VHlwZX0gJHtjaGFubmVsLk1lYXN1cmVtZW50Q2hhcmFjdGVyaXN0aWN9ICR7Y2hhbm5lbC5QaGFzZX0gJHtmaWVsZH1gO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChkaWN0Lmhhc093blByb3BlcnR5KHRpbWVTdGFtcCkpIHtcclxuICAgICAgICAgICAgICAgIGRpY3RbdGltZVN0YW1wXVtjaGFubmVsTmFtZV0gPSBwYXJzZUZsb2F0KHJvd1t2YWx1ZUluZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaWN0W3RpbWVTdGFtcF0gPSB7IFtjaGFubmVsTmFtZV06IHBhcnNlRmxvYXQocm93W3ZhbHVlSW5kZXhdKSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGljdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRXhwb3J0VG9Dc3YoZmlsZU5hbWU6IHN0cmluZywgZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA8IDEpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gWyd0aW1lJywgLi4uT2JqZWN0LmtleXMoZGF0YVtPYmplY3Qua2V5cyhkYXRhKVswXV0pXTtcclxuICAgICAgICBsZXQgcm93cyA9IFtoZWFkZXJzXTtcclxuICAgICAgICAkLmVhY2goT2JqZWN0LmtleXMoZGF0YSksIGZ1bmN0aW9uIChpbmRleCwgdGltZVN0YW1wKSB7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaChoZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyID09ICd0aW1lJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tZW50LnV0Yyh0aW1lU3RhbXApLnR6KCdBbWVyaWNhL0NoaWNhZ28nKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3RpbWVTdGFtcF1baGVhZGVyXVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NSb3cgPSBmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFZhbCA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlubmVyVmFsdWUgPSByb3dbal0gPT0gdW5kZWZpbmVkID8gJycgOiByb3dbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dbal0gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJWYWx1ZSA9IHJvd1tqXS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBpbm5lclZhbHVlLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNlYXJjaCgvKFwifCx8XFxuKS9nKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICdcIicgKyByZXN1bHQgKyAnXCInO1xyXG4gICAgICAgICAgICAgICAgaWYgKGogPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsICs9ICcsJztcclxuICAgICAgICAgICAgICAgIGZpbmFsVmFsICs9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmluYWxWYWwgKyAnXFxuJztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgY3N2RmlsZSA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjc3ZGaWxlICs9IHByb2Nlc3NSb3cocm93c1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtjc3ZGaWxlXSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZU5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGlmIChsaW5rLmRvd25sb2FkICE9PSB1bmRlZmluZWQpIHsgLy8gZmVhdHVyZSBkZXRlY3Rpb25cclxuICAgICAgICAgICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCBIVE1MNSBkb3dubG9hZCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBHZXREYXRhKCk7XHJcbiAgICAgICAgbGV0IGRpY3QgPSBQcm9jZXNzKGRhdGEpO1xyXG4gICAgICAgIEV4cG9ydFRvQ3N2KGAke3Byb3BzLk1ldGVyLk5hbWV9XyR7cHJvcHMuU3RhcnREYXRlfV8ke3Byb3BzLkVuZERhdGV9LmNzdmAsIGRpY3QpO1xyXG4gICAgfX0+IEV4cG9ydCBDU1Y8L2J1dHRvbiA+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRDU1Y7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRyZW5kaW5nLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwNi8xOC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgT3BlblhEQSB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvYXBwbGljYXRpb24tdHlwaW5ncyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE11bHRpQ2hlY2tCb3hTZWxlY3QsIFNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIlxyXG5pbXBvcnQgeyBFeHBvcnRUb0NzdiB9IGZyb20gJy4uL0V4cG9ydENTVic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQtdGltZXpvbmUnO1xyXG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgbGluZSwgZXh0ZW50LCBheGlzQm90dG9tLCBheGlzTGVmdCwgZm9ybWF0IGFzIGQzRm9ybWF0LCBzY2FsZVV0Yywgc2NhbGVUaW1lLCBicnVzaFggfSBmcm9tICdkMyc7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCBzdGF0cyBmcm9tICdzdGF0cy1saXRlJztcclxuaW1wb3J0IEV4cG9ydENTViBmcm9tICcuL0V4cG9ydENTVic7XHJcblxyXG50eXBlIERhdGVSYW5nZSA9ICcxIGRheScgfCAnMyBkYXlzJyB8ICc3IGRheXMnIHwgJzEgbW9udGgnIHwgJzMgbW9udGhzJyB8ICc2IG1vbnRocycgfCAnWWVhciB0byBkYXRlJyB8ICcxIHllYXInIHwgJ2N1c3RvbSdcclxuY29uc3QgRGF0ZVJhbmdlczogRGF0ZVJhbmdlW10gPSBbJzEgZGF5JywgJzMgZGF5cycsICc3IGRheXMnLCAnMSBtb250aCcsICczIG1vbnRocycsICc2IG1vbnRocycsICdZZWFyIHRvIGRhdGUnLCAnMSB5ZWFyJywgJ2N1c3RvbSddO1xyXG5jb25zdCBNb21lbnREYXRlVGltZUZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzJ1xyXG5jb25zdCBNb21lbnREYXRlRm9ybWF0ID0gJ1lZWVktTU0tREQnO1xyXG5jb25zdCBUcmVuZGluZyA9IChwcm9wczoge30pID0+IHtcclxuXHJcbiAgICBjb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBxcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGhpc3RvcnkubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XHJcbiAgICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbcXMuc3RhcnREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLnN1YnRyYWN0KDMwLCAnZGF5cycpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCkgOiBxcy5zdGFydERhdGUgYXMgc3RyaW5nLCBxcy5lbmREYXRlID09IHVuZGVmaW5lZCA/IG1vbWVudCgpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCkgOiBxcy5lbmREYXRlIGFzIHN0cmluZ10pXHJcbiAgICBjb25zdCBbbWV0ZXJzLCBzZXRNZXRlcnNdID0gUmVhY3QudXNlU3RhdGU8T3BlblhEQS5UeXBlcy5NZXRlcltdPihbXSk7XHJcbiAgICBjb25zdCBbbWV0ZXIsIHNldE1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPE9wZW5YREEuVHlwZXMuTWV0ZXI+KHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBbY2hhbm5lbHMsIHNldENoYW5uZWxzXSA9IFJlYWN0LnVzZVN0YXRlPHsgQ2hhbm5lbDogT3BlblhEQS5UeXBlcy5DaGFubmVsLCBTZWxlY3RlZDogYm9vbGVhbiB9W10+KFtdKTtcclxuICAgIGNvbnN0IFtkYXRlUmFuZ2UsIHNldERhdGVSYW5nZV0gPSBSZWFjdC51c2VTdGF0ZTxEYXRlUmFuZ2U+KHFzLmRhdGVSYW5nZSA9PSB1bmRlZmluZWQgPyAnNyBkYXlzJyA6IHFzLmRhdGVSYW5nZSBhcyBEYXRlUmFuZ2UpO1xyXG4gICAgY29uc3QgW3Nob3dTdGF0cywgc2V0U2hvd1N0YXRzXSA9IFJlYWN0LnVzZVN0YXRlPCdzdGF0cycgfCAnY3AnPignc3RhdHMnKTtcclxuICAgIGNvbnN0IFthZ2dyZWdhdGlvbiwgc2V0QWdncmVnYXRpb25dID0gUmVhY3QudXNlU3RhdGU8J25vbmUnIHwgJ2hvdXInIHwgJ2RheSc+KHFzPy5hZ2dyZWdhdGlvbiBhcyBhbnk/PyAnbm9uZScpO1xyXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhhbmRsZSA9IEdldE1ldGVycygpO1xyXG4gICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBPcGVuWERBLlR5cGVzLk1ldGVyW10pID0+IHNldE1ldGVycyhkYXRhKSk7XHJcblxyXG4gICAgICAgIGhpc3RvcnkubGlzdGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0ZXMoW3FzLnN0YXJ0RGF0ZSBhcyBzdHJpbmcsIHFzLmVuZERhdGUgYXMgc3RyaW5nXSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3RlbmluZycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5Lmxpc3RlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScpXHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2hpc3RvcnkubG9jYXRpb24uc2VhcmNoXSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1ldGVySUQgPSBxcy5tZXRlcklEO1xyXG4gICAgICAgIGlmIChtZXRlcnMubGVuZ3RoID09IDAgfHwgbWV0ZXIgIT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAobWV0ZXJJRCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0TWV0ZXIobWV0ZXJzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobWV0ZXJJRCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbWV0ZXJzLmZpbmRJbmRleChtID0+IG0uSUQudG9TdHJpbmcoKSA9PSBtZXRlcklEKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApXHJcbiAgICAgICAgICAgICAgICBzZXRNZXRlcihtZXRlcnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2V0TWV0ZXIobWV0ZXJzWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbbWV0ZXJzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWV0ZXIgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGUgPSBHZXRDaGFubmVscyhtZXRlci5JRCk7XHJcbiAgICAgICAgICAgIGhhbmRsZS5kb25lKChkYXRhOiBPcGVuWERBLlR5cGVzLkNoYW5uZWxbXSkgPT4gc2V0Q2hhbm5lbHMoZGF0YS5tYXAoZCA9PiAoeyBDaGFubmVsOiBkLCBTZWxlY3RlZDogR2V0RGVmYXVsdChkKSB9KSkpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbbWV0ZXJdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBucXMgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogZGF0ZXNbMF0sXHJcbiAgICAgICAgICAgIGVuZERhdGU6IGRhdGVzWzFdLFxyXG4gICAgICAgICAgICBkYXRlUmFuZ2UsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWV0ZXIgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBucXNbJ21ldGVySUQnXSA9IG1ldGVyLklEO1xyXG4gICAgICAgIGVsc2UgaWYgKHFzLm1ldGVySUQgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBucXNbJ21ldGVySUQnXSA9IHFzLm1ldGVySUQ7XHJcblxyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7cXVlcnlTdHJpbmcuc3RyaW5naWZ5KG5xcyl9YClcclxuICAgIH0sIFtkYXRlcywgbWV0ZXJdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBlZCA9IG1vbWVudCgpIGFzIG1vbWVudC5Nb21lbnQ7XHJcbiAgICAgICAgbGV0IHNkID0gZWQ7XHJcbiAgICAgICAgaWYgKGRhdGVSYW5nZSA9PSAnMSBkYXknKVxyXG4gICAgICAgICAgICBzZCA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJyk7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0ZVJhbmdlID09ICczIGRheXMnKVxyXG4gICAgICAgICAgICBzZCA9IG1vbWVudCgpLnN1YnRyYWN0KDMsICdkYXlzJyk7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0ZVJhbmdlID09ICc3IGRheXMnKVxyXG4gICAgICAgICAgICBzZCA9IG1vbWVudCgpLnN1YnRyYWN0KDcsICdkYXlzJyk7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0ZVJhbmdlID09ICcxIG1vbnRoJylcclxuICAgICAgICAgICAgc2QgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGhzJyk7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0ZVJhbmdlID09ICczIG1vbnRocycpXHJcbiAgICAgICAgICAgIHNkID0gbW9tZW50KCkuc3VidHJhY3QoMywgJ21vbnRocycpO1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGVSYW5nZSA9PSAnNiBtb250aHMnKVxyXG4gICAgICAgICAgICBzZCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdtb250aHMnKTtcclxuICAgICAgICBlbHNlIGlmIChkYXRlUmFuZ2UgPT0gJzEgeWVhcicpXHJcbiAgICAgICAgICAgIHNkID0gbW9tZW50KCkuc3VidHJhY3QoMSwgJ3llYXInKTtcclxuICAgICAgICBlbHNlIGlmIChkYXRlUmFuZ2UgPT0gJ1llYXIgdG8gZGF0ZScpXHJcbiAgICAgICAgICAgIHNkID0gbW9tZW50KCkuZGF0ZSgxKS5tb250aCgnSmFudWFyeScpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuO1xyXG4gICAgICAgIHNldERhdGVzKFtzZC5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBlZC5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpXSk7XHJcblxyXG4gICAgfSwgW2RhdGVSYW5nZV0pXHJcblxyXG4gICAgZnVuY3Rpb24gR2V0TWV0ZXJzKCk6IEpRdWVyeS5qcVhIUjxPcGVuWERBLlR5cGVzLk1ldGVyW10+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvT3BlblhEQS9NZXRlcmAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0Q2hhbm5lbHMoaWQ6IG51bWJlcik6IEpRdWVyeS5qcVhIUjxPcGVuWERBLlR5cGVzLkNoYW5uZWxbXT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9PcGVuWERBL0NoYW5uZWwvJHtpZH1gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNhY2hlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERlZmF1bHQoY2hhbm5lbDogT3BlblhEQS5UeXBlcy5DaGFubmVsKSB7XHJcbiAgICAgICAgaWYgKGNoYW5uZWwuTWVhc3VyZW1lbnRDaGFyYWN0ZXJpc3RpYyA9PSAnUk1TJykgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiAxMzAsIG1hcmdpbjogNSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IDEzMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1ldGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e21ldGVyPy5JRCA/PyAwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0TWV0ZXIobWV0ZXJzLmZpbmQobSA9PiBtLklELnRvU3RyaW5nKCkgPT09IGV2dC50YXJnZXQudmFsdWUpKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGVycy5tYXAoKG0sIGkpID0+IDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17bS5JRH0+e20uTmFtZSB9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoYW5uZWxzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpQ2hlY2tCb3hTZWxlY3QgT3B0aW9ucz17Y2hhbm5lbHMubWFwKHQgPT4gT2JqZWN0LmNyZWF0ZSh7IFRleHQ6IHQuQ2hhbm5lbC5OYW1lLCBWYWx1ZTogdC5DaGFubmVsLklELCBTZWxlY3RlZDogdC5TZWxlY3RlZCB9KSl9IE9uQ2hhbmdlPXsoZXZ0LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q2hhbm5lbHMgPSBfLmNsb25lRGVlcChjaGFubmVscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gob3B0aW9ucywgKGluZGV4LCBvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGFubmVscy5maW5kKHR5cGUgPT4gdHlwZS5DaGFubmVsLklEID09IG9wdGlvbi5WYWx1ZSkuU2VsZWN0ZWQgPSAhb3B0aW9uLlNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5uZWxzKG5ld0NoYW5uZWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIiA+RGF0ZSBSYW5nZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzEwMCUnLCB0b3A6IDMyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgc3R5bGU9e3sgd2lkdGg6IDE1MCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAgfX0gdmFsdWU9e2RhdGVSYW5nZX0gb25DaGFuZ2U9eyhldnQpID0+IHNldERhdGVSYW5nZShldnQudGFyZ2V0LnZhbHVlIGFzIERhdGVSYW5nZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtEYXRlUmFuZ2VzLm1hcCgoZHIsIGkpID0+IDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17ZHJ9Pntkcn08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7IHdpZHRoOiAyMDAsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAxNTAgfX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e21vbWVudChkYXRlc1swXSwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpLmZvcm1hdChNb21lbnREYXRlRm9ybWF0KX0gdHlwZT1cImRhdGVcIiBvbkNoYW5nZT17ZSA9PiBzZXREYXRlcyhbZS50YXJnZXQudmFsdWUsIGRhdGVzWzFdXSl9IGRpc2FibGVkPXtkYXRlUmFuZ2UgIT0gJ2N1c3RvbScgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3sgd2lkdGg6IDIwMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDM1MCB9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17bW9tZW50KGRhdGVzWzFdLCBNb21lbnREYXRlVGltZUZvcm1hdCkuZm9ybWF0KE1vbWVudERhdGVGb3JtYXQpfSB0eXBlPVwiZGF0ZVwiIG9uQ2hhbmdlPXtlID0+IHNldERhdGVzKFtkYXRlc1swXSxlLnRhcmdldC52YWx1ZV0pfSBkaXNhYmxlZD17ZGF0ZVJhbmdlICE9ICdjdXN0b20nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PnsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlF1ZXJ5IEFnZ3JlZ2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXthZ2dyZWdhdGlvbn0gb25DaGFuZ2U9eyhldnQpID0+IHNldEFnZ3JlZ2F0aW9uKGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbm9uZSc+Tm9uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2hvdXJseSc+SG91cmx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZGFpbHknPkRhaWx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdW1tYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e3Nob3dTdGF0c30gb25DaGFuZ2U9eyhldnQpID0+IHNldFNob3dTdGF0cyhldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc3RhdHMnPlN0YXRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdjcCc+Q1A8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMSc+PEV4cG9ydENTViBNZXRlcj17bWV0ZXJ9IENoYW5uZWxzPXtjaGFubmVscy5maWx0ZXIoYyA9PiBjLlNlbGVjdGVkKS5tYXAoYyA9PiBjLkNoYW5uZWwpfSBTdGFydERhdGU9e2RhdGVzWzBdfSBFbmREYXRlPXtkYXRlc1sxXX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiY2FsYygxMDAlIC0gMTM1cHgpXCIsIG92ZXJmbG93WTogJ2F1dG8nLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1suLi5uZXcgU2V0KGNoYW5uZWxzLmZpbHRlcihjID0+IGMuU2VsZWN0ZWQpLm1hcChjID0+IGMuQ2hhbm5lbC5NZWFzdXJlbWVudFR5cGUgKyAnICcgKyBjLkNoYW5uZWwuTWVhc3VyZW1lbnRDaGFyYWN0ZXJpc3RpYykpXS5tYXAoayA9PiA8Q2hhcnQga2V5PXtrfSBTaG93U3RhdHM9e3Nob3dTdGF0c30gTmFtZT17a30gQ2hhbm5lbHM9e2NoYW5uZWxzLmZpbHRlcihjID0+IGMuU2VsZWN0ZWQgJiYgKGMuQ2hhbm5lbC5NZWFzdXJlbWVudFR5cGUgKyAnICcgKyBjLkNoYW5uZWwuTWVhc3VyZW1lbnRDaGFyYWN0ZXJpc3RpYykgPT0gaykubWFwKGMgPT4gYy5DaGFubmVsKX0gU3RhcnREYXRlPXtkYXRlc1swXX0gRW5kRGF0ZT17ZGF0ZXNbMV19IEhvdmVyPXtob3Zlcn0gU2V0SG92ZXI9e3NldEhvdmVyfSBTZXRab29tPXsocywgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRlcyhbcyxlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXJ0U2VyaWVzIHtcclxuICAgIENoYW5uZWw6IE9wZW5YREEuVHlwZXMuQ2hhbm5lbCwgRmllbGQ6ICdtaW4nIHwgJ21heCcgfCAnYXZnJywgU2VsZWN0ZWQ6IGJvb2xlYW4sIERhdGE6IHsgVGltZVN0YW1wOiBzdHJpbmcsIFZhbHVlOiBudW1iZXIgfVtdLCBNaW46IG51bWJlciwgTWF4OiBudW1iZXIsIEF2ZzogbnVtYmVyLCBTdERldjogbnVtYmVyLCBDUDk5OiBudW1iZXIsIENQOTU6IG51bWJlciwgQ1A1MDogbnVtYmVyLCBDUDA1OiBudW1iZXIsIENQMDE6IG51bWJlciwgT3V0bGllcnM6IG51bWJlciwgRGF0YVBvaW50czogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0ID0gKHByb3BzOiB7IE5hbWU6IHN0cmluZywgQ2hhbm5lbHM6IE9wZW5YREEuVHlwZXMuQ2hhbm5lbFtdLCBTdGFydERhdGU6IHN0cmluZywgRW5kRGF0ZTogc3RyaW5nLCBTaG93U3RhdHM6ICdzdGF0cycgfCAnY3AnLCBIb3ZlcjogbnVtYmVyLCBTZXRIb3ZlcjogKGhvdjogbnVtYmVyKSA9PiB2b2lkLCBTZXRab29tOiAoc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykgPT4gdm9pZCB9KSA9PiB7ICBcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IDMwMDtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAyIC8gMztcclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDAsIGJvdHRvbTogNDAsIGxlZnQ6IDUwIH07XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxvYmplY3Q+KHt9KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHByb3BzLkNoYW5uZWxzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBHZXREYXRhKCk7XHJcbiAgICB9LCBbcHJvcHMuQ2hhbm5lbHMsIHByb3BzLlN0YXJ0RGF0ZSwgcHJvcHMuRW5kRGF0ZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBEcmF3Q2hhcnQoZGF0YSk7XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIC8vUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgIGlmIChwcm9wcy5Ib3ZlciA8IG1hcmdpbi5sZWZ0KSByZXR1cm47XHJcbiAgICAvLyAgICBlbHNlIGlmIChwcm9wcy5Ib3ZlciA+IHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgLy8gICAgY29uc3Qgc3ZnID0gc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3QoJ3N2ZycpO1xyXG4gICAgLy8gICAgc3ZnLnNlbGVjdEFsbChcImcuaG92ZXItbGluZVwiKS5yZW1vdmUoKTtcclxuICAgIC8vICAgIHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAvLyAgICAgICAgLmNsYXNzZWQoXCJob3Zlci1saW5lXCIsIHRydWUpXHJcbiAgICAvLyAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgIC8vICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAvLyAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgLy8gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsJ3JlZCcpXHJcbiAgICAvLyAgICAgICAgLmF0dHIoXCJkXCIsIGBNICR7cHJvcHMuSG92ZXJ9ICR7c3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbX0gViAke21hcmdpbi50b3B9YClcclxuXHJcblxyXG5cclxuICAgIC8vfSwgW3Byb3BzLkhvdmVyXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgXHJcbiAgICAgICAgICAgIGZyb20oYnVja2V0OiBcIiR7YnVja2V0fVwiKVxyXG4gICAgICAgICAgICB8PiByYW5nZShzdGFydDogJHttb21lbnQudHoocHJvcHMuU3RhcnREYXRlLCAnQW1lcmljYS9DaGljYWdvJykudXRjKCkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KX1aLCBzdG9wOiAke21vbWVudC50eihwcm9wcy5FbmREYXRlLCAnQW1lcmljYS9DaGljYWdvJykudXRjKCkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KX1aKVxyXG4gICAgICAgICAgICB8PiBmaWx0ZXIoZm46IChyKSA9PiAke3Byb3BzLkNoYW5uZWxzLm1hcChjID0+IChcIjAwMDAwMDAwMDAwMDAwMFwiICsgYy5JRC50b1N0cmluZygxNikpLnN1YnN0cigtOCkpLm1hcChjID0+ICdyLnRhZyA9PSBcIicgKyBjICsgJ1wiJykuam9pbignIG9yICcpfSlcclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBsZXQgaGFuZGxlID0gJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogcmVxdWVzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBgVG9rZW4gJHt0b2tlbn1gKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9zdH0vYXBpL3YyL3F1ZXJ5P29yZz0ke29yZ31gLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBlbmNvZGluZz11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5LCB0eXBlOiAnZmx1eCd9KSxcclxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlXHJcbiAgICAgICAgfSkuZG9uZSgoZGF0YTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb3dzID0gZGF0YS5zcGxpdCgnXFxyXFxuJyk7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHJvd3NbaSsrXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBsZXQgdGFnSW5kZXggPSBoZWFkZXIuaW5kZXhPZigndGFnJyk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lSW5kZXggPSBoZWFkZXIuaW5kZXhPZignX3RpbWUnKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlSW5kZXggPSBoZWFkZXIuaW5kZXhPZignX3ZhbHVlJyk7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZEluZGV4ID0gaGVhZGVyLmluZGV4T2YoJ19maWVsZCcpO1xyXG4gICAgICAgICAgICBsZXQgZGljdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSByb3dzW2ldLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93W3RhZ0luZGV4XSA9PSB1bmRlZmluZWQgfHwgcm93W3RhZ0luZGV4XSA9PSBcInRhZ1wiIHx8IHJvd1tmaWVsZEluZGV4XSA9PSBcImZsYWdzXCIgKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRpY3QuaGFzT3duUHJvcGVydHkocm93W3RhZ0luZGV4XSArICctJyArIHJvd1tmaWVsZEluZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWN0W3Jvd1t0YWdJbmRleF0gKyAnLScgKyByb3dbZmllbGRJbmRleF1dLkRhdGEucHVzaCh7IFRpbWVTdGFtcDogcm93W3RpbWVJbmRleF0sIFZhbHVlOiBwYXJzZUZsb2F0KHJvd1t2YWx1ZUluZGV4XSkgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGljdFtyb3dbdGFnSW5kZXhdICsgJy0nICsgcm93W2ZpZWxkSW5kZXhdXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbm5lbDogcHJvcHMuQ2hhbm5lbHMuZmluZChjID0+IChcIjAwMDAwMDAwMDAwMDAwMFwiICsgYy5JRC50b1N0cmluZygxNikpLnN1YnN0cigtOCkgPT0gcm93W3RhZ0luZGV4XSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpZWxkOiByb3dbZmllbGRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhOiBbeyBUaW1lU3RhbXA6IHJvd1t0aW1lSW5kZXhdLCBWYWx1ZTogcGFyc2VGbG9hdChyb3dbdmFsdWVJbmRleF0pIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXZnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdERldjogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgQ2hhcnRTZXJpZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuZWFjaChPYmplY3Qua2V5cyhkaWN0KSwgKGksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLk1pbiA9IE1hdGgubWluKC4uLmRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5NYXggPSBNYXRoLm1heCguLi5kaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uQXZnID0gc3RhdHMubWVhbihkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uU3REZXYgPSBzdGF0cy5zdGRldihkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uQ1A5OSA9IHN0YXRzLnBlcmNlbnRpbGUoZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSksMC45OSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uQ1A5NSA9IHN0YXRzLnBlcmNlbnRpbGUoZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSksIDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkNQNTAgPSBzdGF0cy5wZXJjZW50aWxlKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkNQMDUgPSBzdGF0cy5wZXJjZW50aWxlKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpLCAwLjA1KTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5DUDAxID0gc3RhdHMucGVyY2VudGlsZShkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSwgMC4wMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VyQm91bmQgPSBkaWN0W2tleV0uQXZnIC0gMyAqIGRpY3Rba2V5XS5TdERldjtcclxuICAgICAgICAgICAgICAgIGxldCB1cHBlckJvdW5kID0gZGljdFtrZXldLkF2ZyArIDMgKiBkaWN0W2tleV0uU3REZXY7XHJcblxyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLk91dGxpZXJzID0gZGljdFtrZXldLkRhdGEuZmlsdGVyKGQgPT4gZC5WYWx1ZSA8IGxvd2VyQm91bmQgfHwgZC5WYWx1ZSA+IHVwcGVyQm91bmQpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5EYXRhUG9pbnRzID0gZGljdFtrZXldLkRhdGEubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldERhdGEoZGljdCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlLmFib3J0ICE9IHVuZGVmaW5lZCkgaGFuZGxlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERyYXdDaGFydChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlVGltZSgpLnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodF0pO1xyXG4gICAgICAgIGxldCB5ID0gc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtzdmdIZWlnaHQgLSBtYXJnaW4udG9wLCBtYXJnaW4uYm90dG9tXSk7XHJcblxyXG5cclxuICAgICAgICBzZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnc3ZnJykucmVtb3ZlKClcclxuICAgICAgICBjb25zdCBzdmcgPSBzZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHN2Z1dpZHRoKVxyXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgc3ZnSGVpZ2h0KVxyXG4gICAgICAgICAgICAuc3R5bGUoJ3VzZXItc2VsZWN0JywgJ25vbmUnKVxyXG4gICAgICAgICAgICAvLy5vbignbW91c2VvdmVyJywgKGQ6IE1vdXNlRXZlbnQpID0+IHByb3BzLlNldEhvdmVyKGQub2Zmc2V0WCkpXHJcbiAgICAgICAgICAgIC5vbignbW91c2Vkb3duJywgKGQ6IE1vdXNlRXZlbnQpID0+IE9uWFpvb20oZCwgc3ZnLCB4KSk7XHJcblxyXG4gICAgICAgIGxldCB5ZXh0ZW50ID0gZXh0ZW50KFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoa2V5ID0+IGRhdGFba2V5XS5TZWxlY3RlZCkubWFwKGtleSA9PiBkYXRhW2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSkpKTtcclxuICAgICAgICB5LmRvbWFpbih5ZXh0ZW50KTtcclxuICAgICAgICB4LmRvbWFpbihbbW9tZW50KHByb3BzLlN0YXJ0RGF0ZSwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBtb21lbnQocHJvcHMuRW5kRGF0ZSwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneGF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGF4aXNCb3R0b20oeCkpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sMClgKVxyXG4gICAgICAgICAgICAuY2FsbChheGlzTGVmdCh5KS50aWNrcyhNYXRoLmZsb29yKHN2Z0hlaWdodCAvIDUwKSArIDEpLnRpY2tGb3JtYXQoKHZhbHVlOiBudW1iZXIpID0+IGQzRm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8eyBUaW1lU3RhbXA6c3RyaW5nLCBWYWx1ZTogbnVtYmVyLCBGaWVsZDogc3RyaW5nIH0+KCkueChkID0+IHgobW9tZW50LnV0YyhkLlRpbWVTdGFtcCkpKS55KGQgPT4geShkLlZhbHVlKSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLm1pbi1saW5lXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLm1pbi1saW5lXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihrZXkgPT4gZGF0YVtrZXldLkZpZWxkID09ICdtaW4nICYmIGRhdGFba2V5XS5TZWxlY3RlZCkpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIDQpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIChkOiBzdHJpbmcpID0+IGdldENvbG9yKGRhdGFbZF0uQ2hhbm5lbC5QaGFzZSkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YVtkXS5EYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcuYXZnLWxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcuYXZnLWxpbmVcIilcclxuICAgICAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGtleSA9PiBkYXRhW2tleV0uRmllbGQgPT0gJ2F2ZycgJiYgZGF0YVtrZXldLlNlbGVjdGVkKSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5lXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCAoZDogc3RyaW5nKSA9PiBnZXRDb2xvcihkYXRhW2RdLkNoYW5uZWwuUGhhc2UpKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVmdW5jKGRhdGFbZF0uRGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5tYXgtbGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5tYXgtbGluZVwiKVxyXG4gICAgICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoa2V5ID0+IGRhdGFba2V5XS5GaWVsZCA9PSAnbWF4JyAmJiBkYXRhW2tleV0uU2VsZWN0ZWQpKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcImxpbmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCAoZCkgPT4gMilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKGQ6IHN0cmluZykgPT4gZ2V0Q29sb3IoZGF0YVtkXS5DaGFubmVsLlBoYXNlKSlcclxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lZnVuYyhkYXRhW2RdLkRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0FOJykgPj0gMCkgcmV0dXJuICcjQTMwMDAwJzsgICAvLyBkYXJrZXIgcmVkXHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdCTicpID49IDApIHJldHVybiAnIzAwMjlBMyc7ICAgXHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdDTicpID49IDApIHJldHVybiAnIzAwN0EyOSc7XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdORycpID49IDApIHJldHVybiAnI2MzYzNjMyc7ICAgLy8gZ3JleVxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQUInKSA+PSAwKSByZXR1cm4gJyNGRjAwMDAnOyAgIC8vIGJyaWdodGVyIHJlZFxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQkMnKSA+PSAwKSByZXR1cm4gJyMwMDY2Q0MnO1xyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQ0EnKSA+PSAwKSByZXR1cm4gJyMzM0NDMzMnOyAgIC8vIGdyZXlcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ1JFUycpID49IDApIHJldHVybiAnI2MzYzNjMyc7ICAvLyBncmV5XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdBTEwnKSA+PSAwKSByZXR1cm4gJyNjM2MzYzMnOyAgLy8gZ3JleVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtT25lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1Ud28gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVRocmVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCMkeyhyYW5OdW1PbmUubGVuZ3RoID4gMSA/IHJhbk51bU9uZSA6IFwiMFwiICsgcmFuTnVtT25lKX0keyhyYW5OdW1Ud28ubGVuZ3RoID4gMSA/IHJhbk51bVR3byA6IFwiMFwiICsgcmFuTnVtVHdvKX0keyhyYW5OdW1UaHJlZS5sZW5ndGggPiAxID8gcmFuTnVtVGhyZWUgOiBcIjBcIiArIHJhbk51bVRocmVlKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRsYWJlbChsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BWCcpID49IDApIHJldHVybiAnTWF4JztcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01JTicpID49IDApIHJldHVybiAnTWluJztcclxuICAgICAgICBlbHNlIHJldHVybiAnQXZnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREYXNoQXJyYXkobGFiZWwpIHtcclxuICAgICAgICBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQVgnKSA+PSAwKSByZXR1cm4gMjtcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01JTicpID49IDApIHJldHVybiA0O1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGluZSh0YWcsIG1lYXN1cmVtZW50KSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBcIk0gMCAxNyAgQyAxMCAwLCAyMCAwLCAyNSAxMCBTIDMyIDI1LCA0NSAxN1wiO1xyXG4gICAgICAgIGlmIChtZWFzdXJlbWVudC5TZWxlY3RlZClcclxuICAgICAgICAgICAgcmV0dXJuIDxzdmcgaGVpZ2h0PXsyNX0gd2lkdGg9ezUwfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVt0YWddLlNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e3BhdGh9IHN0cm9rZT17Z2V0Q29sb3IobWVhc3VyZW1lbnQuQ2hhbm5lbC5QaGFzZSl9IHN0cm9rZURhc2hhcnJheT17Z2V0RGFzaEFycmF5KG1lYXN1cmVtZW50LkZpZWxkKX0gc3Ryb2tlV2lkdGg9ezEuNX0gZmlsbD1cInRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIDxzdmcgaGVpZ2h0PXsyNX0gd2lkdGg9ezUwfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVt0YWddLlNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEobmV3RGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e3BhdGh9IHN0cm9rZT17Z2V0Q29sb3IobWVhc3VyZW1lbnQuQ2hhbm5lbC5QaGFzZSl9IHN0cm9rZURhc2hhcnJheT17Z2V0RGFzaEFycmF5KG1lYXN1cmVtZW50LkZpZWxkKX0gc3Ryb2tlV2lkdGg9ezEuNX0gZmlsbD1cInRyYW5zcGFyZW50XCIgb3BhY2l0eT17MC4yfS8+XHJcbiAgICAgICAgICAgIDwvc3ZnPjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0VGV4dChudW06IG51bWJlcikge1xyXG4gICAgICAgIGlmIChudW0gPj0gMTApIHJldHVybiBudW0udG9GaXhlZCgwKTtcclxuICAgICAgICBlbHNlIGlmIChudW0gPj0gMCkgcmV0dXJuIG51bS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGVsc2UgaWYgKG51bSA+PSAwLjAwMDEpIHJldHVybiBudW0udG9GaXhlZCg0KTtcclxuICAgICAgICBlbHNlIGlmIChudW0gPj0gMC4wMDAwMDEpIHJldHVybiBudW0udG9GaXhlZCg2KTtcclxuICAgICAgICBlbHNlIHJldHVybiBudW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE9uWFpvb20oZXZ0OiBNb3VzZUV2ZW50LCBzdmc6IGQzLlNlbGVjdGlvbjxTVkdTVkdFbGVtZW50LCB1bmtub3duLCBudWxsLCB1bmRlZmluZWQ+LCBzY2FsZTogZDMuU2NhbGVUaW1lPG51bWJlciwgbnVtYmVyPikge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gZXZ0Lm9mZnNldFg7XHJcbiAgICAgICAgY29uc3QgYnJ1c2ggPSBicnVzaFgoKVxyXG4gICAgICAgICAgICAuZXh0ZW50KFtbbWFyZ2luLmxlZnQsIG1hcmdpbi50b3AgKyAwLjVdLCBbc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHQsIHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gKyAwLjVdXSlcclxuXHJcbiAgICAgICAgY29uc3QgYnIgPSBzdmcuYXBwZW5kKCdnJykuY2FsbChicnVzaClcclxuICAgICAgICBici5jYWxsKGJydXNoLm1vdmUsIFtzdGFydCwgc3RhcnQgKyAxXSk7XHJcbiAgICAgICAgc3ZnLm9uKCdtb3VzZW1vdmUuYnJ1c2gnLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBici5jYWxsKGJydXNoLm1vdmUsIFtzdGFydCwgZS5vZmZzZXRYXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdmcub24oJ21vdXNldXAuYnJ1c2gnLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihzdGFydCwgZS5vZmZzZXRYKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoc3RhcnQsIGUub2Zmc2V0WCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW9tZW50KHNjYWxlLmludmVydChtaW4pKS5mb3JtYXQoJ01NL0REL1lZWVkgSEg6bW06c3MnKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW9tZW50KHNjYWxlLmludmVydChtYXgpKS5mb3JtYXQoJ01NL0REL1lZWVkgSEg6bW06c3MnKSk7XHJcbiAgICAgICAgICAgIHByb3BzLlNldFpvb20obW9tZW50KHNjYWxlLmludmVydChtaW4pKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBtb21lbnQoc2NhbGUuaW52ZXJ0KG1heCkpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCkpO1xyXG4gICAgICAgICAgICBici5yZW1vdmUoKTtcclxuICAgICAgICAgICAgc3ZnLm9uKCdtb3VzZW1vdmUuYnJ1c2gnLCBudWxsKTtcclxuICAgICAgICAgICAgc3ZnLm9uKCdtb3VzZXVwLmJydXNoJywgbnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntwcm9wcy5OYW1lIH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e3BhZGRpbmc6MCwgcG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT0ncHVsbC1sZWZ0JyBzdHlsZT17eyBoZWlnaHQ6IDMwMCwgd2lkdGg6ICdjYWxjKDEwMCUgLSA0MDBweCknLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBsZWZ0OiAwIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bGwtcmlnaHQnIHN0eWxlPXt7IGhlaWdodDogMzAwLCBtYXhIZWlnaHQ6IDMwMCwgb3ZlcmZsb3dZOiAnYXV0bycsIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAvIDMgLSA3NSwgcG9zaXRpb246ICdyZWxhdGl2ZScsIHJpZ2h0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QaGFzZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkhvdmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+TWluPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+QXZnPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+TWF4PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+U3REZXY8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5DUDk5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q1A5NTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNQNTA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5DUDA1PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q1AwMTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNvdW50czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pk91dGxpZXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhW2tleV0uQ2hhbm5lbC5QaGFzZX0te2dldGxhYmVsKGtleSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRMaW5lKGtleSwgZGF0YVtrZXldKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5NaW4pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQXZnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLk1heCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5TdERldil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1fX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLkNQOTkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQ1A5NSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5DUDUwKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLkNQMDUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQ1AwMSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PntkYXRhW2tleV0uRGF0YVBvaW50c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2RhdGFba2V5XS5PdXRsaWVyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZW5kaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=