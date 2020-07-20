/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"PQDigest": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"MeterAvailability":"MeterAvailability","Trending":"Trending","vendors~EventSearch~Home~Lightning":"vendors~EventSearch~Home~Lightning","Home":"Home","vendors~EventSearch~Lightning":"vendors~EventSearch~Lightning","EventSearch":"EventSearch","vendors~Lightning":"vendors~Lightning","Lightning":"Lightning"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tsx/PQDigest.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./tsx/PQDigest.tsx":
/*!**************************!*\
  !*** ./tsx/PQDigest.tsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
//******************************************************************************************************
//  PQDigest.tsx - Gbtc
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
//  06/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



var PQDigest = function (props) {
    var Home = react__WEBPACK_IMPORTED_MODULE_0__["lazy"](function () { return Promise.all(/*! import() | Home */[__webpack_require__.e("vendors~EventSearch~Home~Lightning"), __webpack_require__.e("Home")]).then(__webpack_require__.bind(null, /*! ./Home/Home */ "./tsx/Home/Home.tsx")); });
    var Trending = react__WEBPACK_IMPORTED_MODULE_0__["lazy"](function () { return __webpack_require__.e(/*! import() | Trending */ "Trending").then(__webpack_require__.bind(null, /*! ./Trending/Trending */ "./tsx/Trending/Trending.tsx")); });
    var MeterAvailability = react__WEBPACK_IMPORTED_MODULE_0__["lazy"](function () { return __webpack_require__.e(/*! import() | MeterAvailability */ "MeterAvailability").then(__webpack_require__.bind(null, /*! ./MeterAvailability/MeterAvailability */ "./tsx/MeterAvailability/MeterAvailability.tsx")); });
    var Lightning = react__WEBPACK_IMPORTED_MODULE_0__["lazy"](function () { return Promise.all(/*! import() | Lightning */[__webpack_require__.e("vendors~EventSearch~Home~Lightning"), __webpack_require__.e("vendors~EventSearch~Lightning"), __webpack_require__.e("vendors~Lightning"), __webpack_require__.e("Lightning")]).then(__webpack_require__.bind(null, /*! ./Lightning/Lightning */ "./tsx/Lightning/Lightning.tsx")); });
    var EventSearch = react__WEBPACK_IMPORTED_MODULE_0__["lazy"](function () { return Promise.all(/*! import() | EventSearch */[__webpack_require__.e("vendors~EventSearch~Home~Lightning"), __webpack_require__.e("vendors~EventSearch~Lightning"), __webpack_require__.e("EventSearch")]).then(__webpack_require__.bind(null, /*! ./EventSearch/EventSearch */ "./tsx/EventSearch/EventSearch.tsx")); });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3", style: { height: 75 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "col-sm-3 col-md-2 mr-0", style: { textAlign: 'center' }, href: "https://www.gridprotectionalliance.org" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { width: 400, margin: 0 }, src: "../Image/PQDigest.png" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "navbar-nav flex-grow-1" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/' ? "active" : ""), href: "/" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/home.png" })),
                                "Home")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/Trending' ? "active" : ""), href: "/Trending" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/trending.png" })),
                                "Trending")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/EventSearch' ? "active" : ""), href: "/EventSearch" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/search.png" })),
                                "Find Events")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/Lightning' ? "active" : ""), href: "/Lightning" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/lightning.png" })),
                                "Lightning")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/MeterAvailability' ? "active" : ""), href: "/MeterAvailability" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/availability.png" })),
                                "Meter Availability")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { style: { marginTop: 4 }, className: "nav-link", href: "#" }, "Sign out")))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid", style: { top: 75, position: 'absolute', width: '100%', height: 'calc(100% - 135px)', overflow: 'hidden' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { height: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...") },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Home, null)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/Trending" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Trending, null)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/EventSearch" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](EventSearch, null)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/Lightning" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Lightning, null)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/MeterAvailability" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MeterAvailability, null)))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", { className: "border-top footer text-muted" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid" }, "\u00A9 2020 - PQDigest"))));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](PQDigest, null), document.getElementById('window'));


/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = d3;

/***/ }),

/***/ "leaflet":
/*!********************!*\
  !*** external "L" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = L;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHN4L1BRRGlnZXN0LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkM1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RSb3V0ZXJET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBSUE7UUFDQTtRQUNBLHlDQUF5QyxrVEFBa1Q7UUFDM1Y7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QixrQ0FBa0M7UUFDMUQsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QyxJQUFJLEVBQUMsb0JBQW9COzRCQUFDLG9EQUFDLGlCQUFpQixPQUFFLENBQVEsQ0FDaEQsQ0FDZixDQUVKLENBQ0o7UUFDTixnRUFBUSxTQUFTLEVBQUMsOEJBQThCO1lBQzVDLDZEQUFLLFNBQVMsRUFBQyxpQkFBaUIsNkJBRTFCLENBQ0QsQ0FHSixDQUNaO0FBQ0wsQ0FBQztBQUVELGdEQUFlLENBQUMsb0RBQUMsUUFBUSxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMzRmpFLG9COzs7Ozs7Ozs7OztBQ0FBLG1COzs7Ozs7Ozs7OztBQ0FBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6IlBRRGlnZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJQUURpZ2VzdFwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiTWV0ZXJBdmFpbGFiaWxpdHlcIjpcIk1ldGVyQXZhaWxhYmlsaXR5XCIsXCJUcmVuZGluZ1wiOlwiVHJlbmRpbmdcIixcInZlbmRvcnN+RXZlbnRTZWFyY2h+SG9tZX5MaWdodG5pbmdcIjpcInZlbmRvcnN+RXZlbnRTZWFyY2h+SG9tZX5MaWdodG5pbmdcIixcIkhvbWVcIjpcIkhvbWVcIixcInZlbmRvcnN+RXZlbnRTZWFyY2h+TGlnaHRuaW5nXCI6XCJ2ZW5kb3JzfkV2ZW50U2VhcmNofkxpZ2h0bmluZ1wiLFwiRXZlbnRTZWFyY2hcIjpcIkV2ZW50U2VhcmNoXCIsXCJ2ZW5kb3JzfkxpZ2h0bmluZ1wiOlwidmVuZG9yc35MaWdodG5pbmdcIixcIkxpZ2h0bmluZ1wiOlwiTGlnaHRuaW5nXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImpzL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzeC9QUURpZ2VzdC50c3hcIik7XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUFFEaWdlc3QudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA2LzExLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCJcclxuXHJcbmNvbnN0IFBRRGlnZXN0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IEhvbWUgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkhvbWVcIiAqLyAnLi9Ib21lL0hvbWUnKSk7XHJcbiAgICBjb25zdCBUcmVuZGluZyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiVHJlbmRpbmdcIiAqLyAnLi9UcmVuZGluZy9UcmVuZGluZycpKTtcclxuICAgIGNvbnN0IE1ldGVyQXZhaWxhYmlsaXR5ID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJNZXRlckF2YWlsYWJpbGl0eVwiICovICcuL01ldGVyQXZhaWxhYmlsaXR5L01ldGVyQXZhaWxhYmlsaXR5JykpO1xyXG4gICAgY29uc3QgTGlnaHRuaW5nID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJMaWdodG5pbmdcIiAqLyAnLi9MaWdodG5pbmcvTGlnaHRuaW5nJykpO1xyXG4gICAgY29uc3QgRXZlbnRTZWFyY2ggPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkV2ZW50U2VhcmNoXCIgKi8gJy4vRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gnKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIG5hdmJhci10b2dnbGVhYmxlLXNtIG5hdmJhci1saWdodCBiZy13aGl0ZSBib3JkZXItYm90dG9tIGJveC1zaGFkb3cgbWItM1wiIHN0eWxlPXt7IGhlaWdodDogNzUgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLW1kLTIgbXItMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0gaHJlZj1cImh0dHBzOi8vd3d3LmdyaWRwcm90ZWN0aW9uYWxsaWFuY2Uub3JnXCI+PGltZyBzdHlsZT17eyB3aWR0aDogNDAwLCBtYXJnaW46IDAgfX0gc3JjPXtcIi4uL0ltYWdlL1BRRGlnZXN0LnBuZ1wifSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBkLXNtLWlubGluZS1mbGV4IGZsZXgtc20tcm93LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgZmxleC1ncm93LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBcIiArIChsb2NhdGlvbi5wYXRobmFtZSA9PSAnLycgPyBcImFjdGl2ZVwiIDogXCJcIil9IGhyZWY9XCIvXCI+PHNwYW4+PGltZyBzdHlsZT17eyBoZWlnaHQ6IDM2IH19IHNyYz1cIi9JbWFnZS9ob21lLnBuZ1wiIC8+PC9zcGFuPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIFwiICsgKGxvY2F0aW9uLnBhdGhuYW1lID09ICcvVHJlbmRpbmcnPyBcImFjdGl2ZVwiIDogXCJcIiApIH0gaHJlZj1cIi9UcmVuZGluZ1wiPjxzcGFuPjxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAzNiB9fSBzcmM9XCIvSW1hZ2UvdHJlbmRpbmcucG5nXCIvPjwvc3Bhbj5UcmVuZGluZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgXCIgKyAobG9jYXRpb24ucGF0aG5hbWUgPT0gJy9FdmVudFNlYXJjaCcgPyBcImFjdGl2ZVwiIDogXCJcIil9IGhyZWY9XCIvRXZlbnRTZWFyY2hcIj48c3Bhbj48aW1nIHN0eWxlPXt7IGhlaWdodDogMzYgfX0gc3JjPVwiL0ltYWdlL3NlYXJjaC5wbmdcIiAvPjwvc3Bhbj5GaW5kIEV2ZW50czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgXCIgKyAobG9jYXRpb24ucGF0aG5hbWUgPT0gJy9MaWdodG5pbmcnID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBocmVmPVwiL0xpZ2h0bmluZ1wiPjxzcGFuPjxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAzNiB9fSBzcmM9XCIvSW1hZ2UvbGlnaHRuaW5nLnBuZ1wiIC8+PC9zcGFuPkxpZ2h0bmluZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgXCIgKyAobG9jYXRpb24ucGF0aG5hbWUgPT0gJy9NZXRlckF2YWlsYWJpbGl0eScgPyBcImFjdGl2ZVwiIDogXCJcIil9IGhyZWY9XCIvTWV0ZXJBdmFpbGFiaWxpdHlcIj48c3Bhbj48aW1nIHN0eWxlPXt7IGhlaWdodDogMzYgfX0gc3JjPVwiL0ltYWdlL2F2YWlsYWJpbGl0eS5wbmdcIiAvPjwvc3Bhbj5NZXRlciBBdmFpbGFiaWxpdHk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgbWFyZ2luVG9wOiA0IH19IGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5TaWduIG91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3sgdG9wOiA3NSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoMTAwJSAtIDEzNXB4KScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdpbmhlcml0JywgcGFkZGluZzogJzAgMCAwIDAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiPjxIb21lLz48L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvVHJlbmRpbmdcIj48VHJlbmRpbmcvPjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9FdmVudFNlYXJjaFwiPjxFdmVudFNlYXJjaC8+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL0xpZ2h0bmluZ1wiPjxMaWdodG5pbmcvPjwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9NZXRlckF2YWlsYWJpbGl0eVwiPjxNZXRlckF2YWlsYWJpbGl0eS8+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBmb290ZXIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAmY29weTsgMjAyMCAtIFBRRGlnZXN0XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcblxyXG5cclxuICAgICAgICA8L1JvdXRlcj5cclxuICAgIClcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxQUURpZ2VzdCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdycpKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBkMzsiLCJtb2R1bGUuZXhwb3J0cyA9IEw7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RSb3V0ZXJET007Il0sInNvdXJjZVJvb3QiOiIifQ==