webpackHotUpdate(5,{

/***/ "./components/Atoms/Clock/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_color__ = __webpack_require__("./constants/color.js");
var _jsxFileName = "/Users/kato-syogo/Desktop/git/Private/practice_nextjs/components/Atoms/Clock/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    padding: 15px;\n    display: inline-block;\n    color: #82FA58;\n    font-family: menlo, monaco, monospace;\n    background-color: ", ";\n    &.light {\n        background-color:#999;\n    }\n        ", "\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n                    font-size: 25px;\n                "]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n                    font-size: 50px;\n                "]);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var pad = function pad(n) {
  return n < 10 ? "0".concat(n) : n;
};

var format = function format(t) {
  return "".concat(pad(t.getUTCHours()), ":").concat(pad(t.getUTCMinutes()), ":").concat(pad(t.getUTCSeconds()));
};

var ClockWapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__constants_color__["a" /* default */].black, function (size) {
  switch (size) {
    case 'small':
      return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* css */])(_templateObject2);

    default:
      return Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* css */])(_templateObject3);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light,
      props = _objectWithoutProperties(_ref, ["lastUpdate", "light"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ClockWapper, _extends({
    className: light ? 'light' : ''
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), format(new Date(lastUpdate)));
});

/***/ })

})
//# sourceMappingURL=5.6c2865e4857c1fa424c3.hot-update.js.map