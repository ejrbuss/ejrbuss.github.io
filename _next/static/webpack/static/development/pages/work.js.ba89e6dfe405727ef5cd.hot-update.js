webpackHotUpdate("static/development/pages/work.js",{

/***/ "./lib/hooks.js":
/*!**********************!*\
  !*** ./lib/hooks.js ***!
  \**********************/
/*! exports provided: useScroll, useSearch, usePageIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return useScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return useSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageIndex", function() { return usePageIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Pages */ "./lib/Pages.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useScroll = function useScroll() {
  var getScrollState = function getScrollState() {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
      xr: window.pageXOffset / (document.body.offsetWidth - screen.width),
      yr: window.pageYOffset / (document.body.offsetHeight - screen.height)
    };
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 0,
    y: 0,
    xr: 0,
    xy: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleScroll = function handleScroll() {
      setScroll(getScrollState());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scroll;
};
var useSearch = function useSearch() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      results = _useState8[0],
      setResults = _useState8[1];

  return {
    open: open,
    search: search,
    results: results,
    change: function change(search) {
      setSearch(search);

      if (search.length > 0) {
        var pages = _lib_Pages__WEBPACK_IMPORTED_MODULE_1__["default"].$search(search);
        setResults(pages.map(function (page) {
          return {
            title: page.title,
            href: page.route,
            previews: page.$previews(search)
          };
        }));
      } else {
        setResults([]);
      }
    },
    toggle: function toggle() {
      setSearch('');
      setOpen(!open);
      setResults([]);
    }
  };
};

var getYOffset = function getYOffset(e) {
  var y = 0;

  while (e && !isNaN(e.offsetTop)) {
    y += e.offsetTop - e.scrollTop;
    e = e.offsetParent;
  }

  return y;
};

var ANCHOR_OFFSET = 200;
var usePageIndex = function usePageIndex() {
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      index = _useState10[0],
      setIndex = _useState10[1];

  var scroll = useScroll();

  var handleUpdate = function handleUpdate() {
    var getBestHeader = function getBestHeader(best, h) {
      best.active = false;
      h.active = false;
      return h.yOffset - ANCHOR_OFFSET < scroll.y ? h : best;
    };

    if (index.length) {
      var activeH1 = index.reduce(getBestHeader);
      activeH1.active = true;

      if (activeH1.children.length) {
        var activeH2 = activeH1.children.reduce(getBestHeader);
        activeH2.active = true;
      }

      setIndex(index);
    }
  }; // Create Index


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = document.querySelectorAll('.indexable h1')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var h1 = _step.value;
        index.push({
          text: h1.textContent,
          href: h1.parentNode.getAttribute('href'),
          active: false,
          children: [],
          yOffset: getYOffset(h1)
        });
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

    var i = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = document.querySelectorAll('.indexable h2')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var h2 = _step2.value;
        var yOffset = getYOffset(h2);

        while (index[i + 1] && index[i + 1].yOffset < yOffset) {
          i++;
        }

        index[i].children.push({
          text: h2.textContent,
          href: h2.parentNode.getAttribute('href'),
          active: false,
          yOffset: yOffset
        });
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    handleUpdate();
  }, []); // Update Index

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(handleUpdate, [index, scroll]);
  return index;
};

/***/ })

})
//# sourceMappingURL=work.js.ba89e6dfe405727ef5cd.hot-update.js.map