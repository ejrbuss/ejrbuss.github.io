webpackHotUpdate("static/development/pages/about.js",{

/***/ "./layouts/About.js":
/*!**************************!*\
  !*** ./layouts/About.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Boot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Boot */ "./components/Boot.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_EjrbussMarkdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EjrbussMarkdown */ "./components/EjrbussMarkdown.js");
/* harmony import */ var _components_Tani__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Tani */ "./components/Tani.js");
/* harmony import */ var _components_Places__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Places */ "./components/Places.js");
/* harmony import */ var _lib_Pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/Pages */ "./lib/Pages.js");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/hooks */ "./lib/hooks.js");
var _jsxFileName = "/Users/ejrbuss/GitHub/ejrbuss.net-source/layouts/About.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // Components







 // Libraries



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var pageName = _ref.pageName;
  var page = _lib_Pages__WEBPACK_IMPORTED_MODULE_9__["default"][pageName];
  var searchCtx = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_10__["useSearch"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Boot__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    searchCtx: searchCtx,
    showScrollMarker: true,
    showSearch: true,
    leftLinks: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Places__WEBPACK_IMPORTED_MODULE_8__["default"], {
      about: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }),
    rightLinks: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      href: "https://github.com/ejrbuss",
      className: "p-md subtle-accent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fab fa-github fa-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__["default"], {
    searchCtx: searchCtx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content container grid-md about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tani",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 270 130",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].HLines, {
    n: 12,
    width: 270,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].VLines, {
    n: 26,
    height: 130,
    delay: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), [// A
  [40, 40], [40, 50], [40, 60], [40, 70], [40, 80], [60, 80], [60, 70], [60, 60], [50, 60], [60, 50], [60, 40], [50, 40]].map(function (_ref2, key) {
    var _ref3 = _slicedToArray(_ref2, 2),
        x = _ref3[0],
        y = _ref3[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].Tile, {
      key: key,
      x: x,
      y: y,
      delayIndex: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }), [// B
  [80, 40], [80, 50], [80, 60], [80, 70], [80, 80], [90, 80], [100, 80], [100, 70], [100, 60], [90, 60], [100, 50], [100, 40], [90, 40]].map(function (_ref4, key) {
    var _ref5 = _slicedToArray(_ref4, 2),
        x = _ref5[0],
        y = _ref5[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].Tile, {
      key: key,
      x: x,
      y: y,
      delayIndex: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    });
  }), [// O
  [120, 40], [120, 50], [120, 60], [120, 70], [120, 80], [130, 80], [140, 80], [140, 70], [140, 60], [140, 50], [140, 40], [130, 40]].map(function (_ref6, key) {
    var _ref7 = _slicedToArray(_ref6, 2),
        x = _ref7[0],
        y = _ref7[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].Tile, {
      key: key,
      x: x,
      y: y,
      delayIndex: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    });
  }), [// U
  [160, 40], [160, 50], [160, 60], [160, 70], [160, 80], [170, 80], [180, 80], [180, 70], [180, 60], [180, 50], [180, 40]].map(function (_ref8, key) {
    var _ref9 = _slicedToArray(_ref8, 2),
        x = _ref9[0],
        y = _ref9[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].Tile, {
      key: key,
      x: x,
      y: y,
      delayIndex: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    });
  }), [// T
  [200, 40], [210, 40], [220, 40], [210, 50], [210, 60], [210, 70], [210, 80]].map(function (_ref10, key) {
    var _ref11 = _slicedToArray(_ref10, 2),
        x = _ref11[0],
        y = _ref11[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].Tile, {
      key: key,
      x: x,
      y: y,
      delayIndex: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EjrbussMarkdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    source: page.content,
    noHeaderLinks: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=about.js.939059f1a4aa40743da7.hot-update.js.map