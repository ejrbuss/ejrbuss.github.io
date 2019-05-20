webpackHotUpdate("static/development/pages/blog/rtos1.js",{

/***/ "./components/EjrbussMarkdown.js":
/*!***************************************!*\
  !*** ./components/EjrbussMarkdown.js ***!
  \***************************************/
/*! exports provided: registerEvaluator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEvaluator", function() { return registerEvaluator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor */ "./components/Editor.js");
/* harmony import */ var _lib_no_space_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/no-space-lang */ "./lib/no-space-lang.js");
var _jsxFileName = "/Users/ejrbuss/GitHub/ejrbuss.net-source/components/EjrbussMarkdown.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Components

 // Libraries


var evaluators = {
  jsEvaluator: function jsEvaluator(value) {
    try {
      return eval(value).toString();
    } catch (err) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "clr-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, err.toString());
    }
  },
  echo: function echo(value) {
    return value;
  }
};
var registerEvaluator = function registerEvaluator(name, evaluator) {
  evaluators[name] = evaluator;
};

var getHeaderText = function getHeaderText(_ref) {
  var _ref$children = _slicedToArray(_ref.children, 1),
      value = _ref$children[0].props.value;

  return value;
};

var getHeaderId = function getHeaderId(props) {
  return getHeaderText(props).replace(/\s/g, '').toLowerCase();
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var source = _ref2.source,
      noHeaderLinks = _ref2.noHeaderLinks;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "md indexable",
    source: source,
    renderers: {
      code: function code(_ref3) {
        var value = _ref3.value,
            language = _ref3.language;

        var _noSpaceLang = Object(_lib_no_space_lang__WEBPACK_IMPORTED_MODULE_3__["default"])(language, {
          defaults: {
            lang: ''
          },
          allowed: ['lang', 'immediate', 'readonly', 'evaluator', 'placeholder', 'nolines', 'math']
        }),
            lang = _noSpaceLang.lang,
            immediate = _noSpaceLang.immediate,
            readonly = _noSpaceLang.readonly,
            evaluator = _noSpaceLang.evaluator,
            placeholder = _noSpaceLang.placeholder,
            nolines = _noSpaceLang.nolines,
            math = _noSpaceLang.math;

        if (math) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "math",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, value);
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Editor__WEBPACK_IMPORTED_MODULE_2__["default"], {
          initialText: placeholder ? undefined : value,
          language: lang,
          evaluator: evaluators[evaluator],
          placeholder: placeholder ? value : undefined,
          readonly: readonly,
          immediate: immediate,
          nolines: nolines,
          nooutput: evaluator ? false : true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
      },
      inlineCode: function inlineCode(_ref4) {
        var value = _ref4.value;

        if (/^icon:/.test(value)) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: value.split(':')[1],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, value);
      },
      heading: function heading(props) {
        var id = getHeaderId(props);

        switch (props.level) {
          case 1:
            {
              if (noHeaderLinks) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  },
                  __self: this
                }, props.children);
              }

              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                className: "anchor-point",
                id: id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                className: "anchor",
                href: '#' + id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                },
                __self: this
              }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                },
                __self: this
              })));
            }

          case 2:
            {
              if (noHeaderLinks) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  },
                  __self: this
                }, props.children);
              }

              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                className: "anchor-point",
                id: id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                className: "anchor",
                href: '#' + id,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                },
                __self: this
              }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: this
              })));
            }

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
              id: getHeaderId(props),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            }, props.children);

          case 4:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
              id: getHeaderId(props),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            }, props.children);

          case 5:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
              id: getHeaderId(props),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            }, props.children);

          case 6:
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
              id: getHeaderId(props),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            }, props.children);

          default:
            throw new Error('Unknown header depth: ' + props.level);
        }
      },
      table: function table(props) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
          className: "table table-striped table-scroll",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, props.children);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  });
});

/***/ }),

/***/ "./node_modules/katex/dist/katex.js":
false

})
//# sourceMappingURL=rtos1.js.0f1c63fb06cd72f8a23f.hot-update.js.map