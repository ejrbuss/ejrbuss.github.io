webpackHotUpdate("static/development/pages/work.js",{

/***/ "./lib/Page.js":
/*!*********************!*\
  !*** ./lib/Page.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ejrbuss/GitHub/ejrbuss.net-source/lib/Page.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var MAX_PREVIEWS = 3;

var Page =
/*#__PURE__*/
function () {
  function Page(data) {
    _classCallCheck(this, Page);

    Object.assign(this, data);
    this.date = new Date(this.date);
  }

  _createClass(Page, [{
    key: "$search",
    value: function $search(searchText) {
      var regex = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escapeRegExp(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escape(searchText)), 'i');
      return this.$searchRegex(regex);
    }
  }, {
    key: "$searchRegex",
    value: function $searchRegex(regex) {
      if (this.title && regex.test(this.title)) {
        return true;
      }

      if (this.subtitle && regex.test(this.subtitle)) {
        return true;
      }

      if (this.$formattedDate && regex.test(this.$formattedDate)) {
        return true;
      }

      if (this.plainTxt && regex.test(this.plainTxt)) {
        return true;
      }

      return false;
    }
  }, {
    key: "$previews",
    value: function $previews(searchText) {
      var regex = new RegExp("(".concat(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escapeRegExp(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escape(searchText)), ")"), 'gi');
      var lines = [this.title || '', this.subtitle || '', this.$formattedDate || ''].concat(_toConsumableArray(this.plainTxt.split('\n')));
      var previews = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var line = _step.value;

          if (regex.test(line)) {
            previews.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              dangerouslySetInnerHTML: {
                __html: line.replace(regex, "<mark>$1</mark>") + '...'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }));

            if (previews.length === MAX_PREVIEWS) {
              previews.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: '<i>Some results have been hidden</i>.'
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              }));
              break;
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return previews;
    }
  }, {
    key: "$day",
    get: function get() {
      return this.date.getUTCDate();
    }
  }, {
    key: "$month",
    get: function get() {
      return this.date.getUTCMonth();
    }
  }, {
    key: "$year",
    get: function get() {
      return this.date.getUTCFullYear();
    }
  }, {
    key: "$formattedDate",
    get: function get() {
      console.log(this.date);
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      if (isNaN(this.$month) || isNaN(this.$day) || isNaN(this.$year)) {
        return false;
      }

      return "".concat(months[this.$month], " ").concat(this.$day, " ").concat(this.$year);
    }
  }]);

  return Page;
}();



Page.compareDates = function (page1, page2) {
  return page2.date - page1.date;
};

/***/ })

})
//# sourceMappingURL=work.js.c5e95a20783c0577e6c6.hot-update.js.map