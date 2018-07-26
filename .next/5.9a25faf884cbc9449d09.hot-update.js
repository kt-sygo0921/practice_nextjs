webpackHotUpdate(5,{

/***/ "./components/Molecules/example.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Atoms_Clock__ = __webpack_require__("./components/Atoms/Clock/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Atoms_Counter__ = __webpack_require__("./components/Atoms/Counter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
var _jsxFileName = "/Users/kato-syogo/Desktop/git/Private/practice_nextjs/components/Molecules/example.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MoleculesWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["b" /* default */].div(_templateObject);

function Examples(_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MoleculesWrapper, {
    innerRef: function innerRef(elem) {
      return console.log(elem);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Atoms_Clock__["a" /* default */], {
    lastUpdate: lastUpdate,
    light: light,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Atoms_Counter__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
}

function mapStateToProps(state) {
  var _state$reducer = state.reducer,
      lastUpdate = _state$reducer.lastUpdate,
      light = _state$reducer.light;
  return {
    lastUpdate: lastUpdate,
    light: light
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(Examples));

/***/ })

})
//# sourceMappingURL=5.9a25faf884cbc9449d09.hot-update.js.map