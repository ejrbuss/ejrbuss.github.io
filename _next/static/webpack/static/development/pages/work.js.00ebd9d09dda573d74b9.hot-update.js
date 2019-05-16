webpackHotUpdate("static/development/pages/work.js",{

/***/ "./layouts/Work.js":
/*!*************************!*\
  !*** ./layouts/Work.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Boot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Boot */ "./components/Boot.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_Tani__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Tani */ "./components/Tani.js");
/* harmony import */ var _components_Places__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Places */ "./components/Places.js");
/* harmony import */ var _components_Logos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Logos */ "./components/Logos.js");
/* harmony import */ var _lib_Pages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/Pages */ "./lib/Pages.js");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/hooks */ "./lib/hooks.js");
var _jsxFileName = "/Users/ejrbuss/GitHub/ejrbuss.net-source/layouts/Work.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // Components







 // Libraries



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var pageName = _ref.pageName;
  var page = _lib_Pages__WEBPACK_IMPORTED_MODULE_10__["default"][pageName];
  var searchCtx = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_11__["useSearch"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Boot__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    searchCtx: searchCtx,
    showScrollMarker: true,
    showSearch: true,
    leftLinks: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Places__WEBPACK_IMPORTED_MODULE_8__["default"], {
      work: true,
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchResults__WEBPACK_IMPORTED_MODULE_6__["default"], {
    searchCtx: searchCtx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content container grid-md work",
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
    viewBox: "0 0 250 130",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].HLines, {
    n: 12,
    width: 250,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tani__WEBPACK_IMPORTED_MODULE_7__["default"].VLines, {
    n: 24,
    height: 130,
    delay: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), [// W
  [40, 40], [40, 50], [40, 60], [40, 70], [40, 80], [50, 80], [60, 80], [60, 70], [60, 60], [60, 50], [60, 40], [70, 80], [80, 80], [80, 70], [80, 60], [80, 50], [80, 40]].map(function (_ref2, key) {
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
        lineNumber: 60
      },
      __self: this
    });
  }), [// O
  [100, 40], [100, 50], [100, 60], [100, 70], [100, 80], [110, 80], [120, 80], [120, 70], [120, 60], [120, 50], [120, 40], [110, 40]].map(function (_ref4, key) {
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
        lineNumber: 74
      },
      __self: this
    });
  }), [// R
  [150, 40], [160, 40], [140, 40], [140, 50], [140, 60], [140, 70], [140, 80], [150, 60], [160, 60], [160, 50], [160, 70], [160, 80]].map(function (_ref6, key) {
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
        lineNumber: 88
      },
      __self: this
    });
  }), [// K
  [180, 40], [180, 50], [180, 60], [180, 70], [180, 80], [190, 60], [200, 40], [200, 50], [200, 60], [200, 70], [200, 80]].map(function (_ref8, key) {
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
        lineNumber: 101
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Here is a curated list of some of my open source projects. For an exhaustive list, I catalog my github repositories ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog/github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "here")), "."), page.projects.map(function (_ref10, key) {
    var logo = _ref10.logo,
        title = _ref10.title,
        href = _ref10.href,
        summary = _ref10.summary;
    var Logo = _components_Logos__WEBPACK_IMPORTED_MODULE_9__["default"][logo];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: key,
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "space-keeper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, summary)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, summary))));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Prior Employment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "My prior employers have helped shaped me into the developer I am today. Follow these links to read about my experiences."), page.work.map(function (_ref11, key) {
    var logo = _ref11.logo,
        title = _ref11.title,
        href = _ref11.href,
        summary = _ref11.summary;
    var Logo = _components_Logos__WEBPACK_IMPORTED_MODULE_9__["default"][logo];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: key,
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "space-keeper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, summary)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, summary))));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=work.js.00ebd9d09dda573d74b9.hot-update.js.map