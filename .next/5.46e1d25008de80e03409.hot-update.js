webpackHotUpdate(5,{

/***/ "./components/Atoms/Clock/index.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/kato-syogo/Desktop/git/Private/practice_nextjs/components/Atoms/Clock/index.js: Unexpected token (18:7)\n\n  16 |     }\n  17 | \n> 18 |     ${()}\n     |        ^\n  19 | `\n  20 | \n  21 | export default ({lastUpdate, light}) => {\n    at _class.raise (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseParenAndDistinguishExpression (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:3298:12)\n    at _class.parseExprAtom (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:3081:21)\n    at _class.parseExprAtom (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2499:21)\n    at _class.parseTemplate (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:3411:34)\n    at _class.parseSubscript (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2855:28)\n    at _class.parseSubscripts (/Users/kato-syogo/Desktop/git/Private/practice_nextjs/node_modules/@babel/core/node_modules/babylon/lib/index.js:2745:19)");

/***/ }),

/***/ "./components/Molecules/example.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Atoms_Clock__ = __webpack_require__("./components/Atoms/Clock/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Atoms_Clock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Atoms_Clock__);
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
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Atoms_Clock__["default"], {
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

/***/ }),

/***/ "./constants/color.js":
false

})
//# sourceMappingURL=5.46e1d25008de80e03409.hot-update.js.map