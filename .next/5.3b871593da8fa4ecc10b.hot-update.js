webpackHotUpdate(5,{

/***/ "./components/Atoms/Clock/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_color__ = __webpack_require__("./constants/color.js");
var _jsxFileName = "/Users/kato-syogo/Desktop/git/Private/practice_nextjs/components/Atoms/Clock/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    padding: 15px;\n    display: inline-block;\n    color: #82FA58;\n    font: 50px menlo, monaco, monospace;\n    background-color: ", ";\n    &.light {\n        background-color:#999;\n    }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var pad = function pad(n) {
  return n < 10 ? "0".concat(n) : n;
};

var format = function format(t) {
  return "".concat(pad(t.getUTCHours()), ":").concat(pad(t.getUTCMinutes()), ":").concat(pad(t.getUTCSeconds()));
};

var ClockWapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__constants_color__["a" /* default */].black);
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ClockWapper, {
    className: light ? 'light' : '',
    innerRef: function innerRef(elem) {
      return console.log(elem);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, format(new Date(lastUpdate)));
});

/***/ })

})
//# sourceMappingURL=5.3b871593da8fa4ecc10b.hot-update.js.map