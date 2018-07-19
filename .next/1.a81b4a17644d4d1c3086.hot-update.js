webpackHotUpdate(1,{

/***/ "./actions/action.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return startClock; });
/* harmony export (immutable) */ __webpack_exports__["b"] = incrementCount;
/* harmony export (immutable) */ __webpack_exports__["a"] = decrementCount;
/* harmony export (immutable) */ __webpack_exports__["c"] = resetCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__ = __webpack_require__("./constants/actionTypes.js");

var serverRenderClock = function serverRenderClock(isServer) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["a" /* actionTypes */].TICK,
    light: !isServer,
    ts: Date.now()
  };
};
var startClock = function startClock() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["a" /* actionTypes */].TICK,
    light: true // ts: Date.now()

  };
};
function incrementCount() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["a" /* actionTypes */].INCREMENT
  };
}
function decrementCount() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["a" /* actionTypes */].DECREMENT
  };
}
function resetCount() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants_actionTypes__["a" /* actionTypes */].RESET
  };
}

/***/ })

})
//# sourceMappingURL=1.a81b4a17644d4d1c3086.hot-update.js.map