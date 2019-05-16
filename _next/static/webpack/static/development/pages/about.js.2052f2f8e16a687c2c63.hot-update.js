webpackHotUpdate("static/development/pages/about.js",{

/***/ "./lib/Pages.js":
/*!**********************!*\
  !*** ./lib/Pages.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./lib/Page.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
// Generated by Page Builder


/* harmony default export */ __webpack_exports__["default"] = ({
  $pages: function $pages() {
    return Object.values(this).filter(function (page) {
      return page instanceof _Page__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
  },
  $blogs: function $blogs() {
    return this.$pages().filter(function (page) {
      return page.blog;
    }).sort(_Page__WEBPACK_IMPORTED_MODULE_0__["default"].compareDates);
  },
  $search: function $search(searchText) {
    var regex = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escapeRegExp(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escape(searchText)), 'i');
    var results = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.$pages()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var page = _step.value;

        if (page.$searchRegex(regex)) {
          results.push(page);
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

    return results;
  },
  about: new _Page__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: 'about',
    content: 'I am Eric Buss. I am a developer, designer, and soon to be Software Engineer. I have a love for programming language design, functional programming, open source projects, and horror movies.\n\n# Skills\nA list of the technologies I am familiar with. Related subskills are \nlisted in \\[brackets\\].\n\n> JavaScript \\[TypeScript React CoffeeScript Express\\] / HTML \\[Jade/Pug\\] /\n> CSS \\[Sass Less Bootstrap\\] / Python \\[Matplotlib Numpy Pandas SciPy TensorFlow\\] / \n> C \\[C++ Objective-C iOS AVR ARM OpenGL\\] / Java \\[Clojure\\] / \n> PHP \\[CodeIgniter\\] / Databases \\[SQL MongoDB\\] / R / Git / MATLAB / \n> OS-familiarity \\[`icon:fab fa-windows` `icon:fab fa-apple` Ubuntu openSUSE Fedora\\]\n\nFor more information feel free to [contact me](mailto:root@ejrbuss.net) or look at my [resume](/static/rsc/resume.pdf).\n\n# Testimonials\nSome nice people have had nice things to say about my work!\n\n> *“Thanks Eric for leading the \\[...\\] prototype. You have set a strong foundation for the coming \\[...\\] WebApp. The beauty is that, with you and John, I had no worries we would had come up with the right solution. It is also a big thank you for being that thorough on code quality which also has been a big part of \\[the app\'s\\] success.”*\n>\n> **— Gino Lord (Former Supervisor)**\n>\n> *“Thanks for excellent work on the \\[App\\] features”*\n>\n> **— Aroosh Elahi (Former Supervisor)** \n>\n> *“Incredibly talented! Introduced style guidelines and function blocks so our app won’t be too ugly inside. Good job on your \\[...\\] prototype!"* \n> \n> **— John Peng (Former Fellow Coop)**\n>\n> *“Unreasonably hardworking. Terribly good at what they do”*\n> \n> **— David Choi (Former Fellow Coop)**\n\n# Contact\n\nroot@ejrbuss.net',
    plainTxt: 'I am Eric Buss. I am a developer, designer, and soon to be Software Engineer. I have a love for programming language design, functional programming, open source projects, and horror movies.\nSkills\nA list of the technologies I am familiar with. Related subskills are \nlisted in [brackets].\nJavaScript [TypeScript React CoffeeScript Express] / HTML [Jade/Pug] /\nCSS [Sass Less Bootstrap] / Python [Matplotlib Numpy Pandas SciPy TensorFlow] / \nC [C++ Objective-C iOS AVR ARM OpenGL] / Java [Clojure] / \nPHP [CodeIgniter] / Databases [SQL MongoDB] / R / Git / MATLAB / \nOS-familiarity [icon:fab fa-windows icon:fab fa-apple Ubuntu openSUSE Fedora]\n\nFor more information feel free to contact me or look at my resume.\nTestimonials\nSome nice people have had nice things to say about my work!\n“Thanks Eric for leading the [...] prototype. You have set a strong foundation for the coming [...] WebApp. The beauty is that, with you and John, I had no worries we would had come up with the right solution. It is also a big thank you for being that thorough on code quality which also has been a big part of [the app&amp;#39;s] success.”\n— Gino Lord (Former Supervisor)\n“Thanks for excellent work on the [App] features”\n— Aroosh Elahi (Former Supervisor) \n“Incredibly talented! Introduced style guidelines and function blocks so our app won’t be too ugly inside. Good job on your [...] prototype!&amp;quot; \n— John Peng (Former Fellow Coop)\n“Unreasonably hardworking. Terribly good at what they do”\n— David Choi (Former Fellow Coop)\n\nContact\nroot@ejrbuss.net\n',
    route: '/about',
    layout: '../layouts/About',
    title: 'About'
  }),
  blog: new _Page__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: 'blog',
    content: '',
    plainTxt: '',
    route: '/blog',
    layout: '../layouts/Archive',
    title: 'Blog Archive'
  }),
  github: new _Page__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: 'github',
    content: '',
    plainTxt: '',
    route: '/blog/github',
    layout: '../../layouts/Blog',
    title: 'GitHub Catalog',
    subtitle: 'A trip down memory lane. I catalog all of my GitHub repositories, both finished projects, and those that never got off the ground.',
    blog: true,
    date: '05-15-2019'
  }),
  siteHistory: new _Page__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: 'siteHistory',
    content: '',
    plainTxt: '',
    route: '/blog/siteHistory',
    layout: '../../layouts/Blog',
    title: 'Site History',
    subtitle: 'A look at the technologies used to build this site, and its past iteration.',
    blog: true,
    date: '05-16-2019'
  }),
  index: new _Page__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: 'index',
    content: '',
    plainTxt: '',
    route: '/index',
    title: 'ejrbuss.net',
    layout: '../layouts/Home'
  }),
  work: new _Page__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: 'work',
    content: '',
    plainTxt: '',
    route: '/work',
    layout: '../layouts/Work',
    title: 'Work',
    projects: [{
      logo: 'TypeMark',
      title: 'type-mark',
      href: 'http://ejrbuss.net/type-mark/',
      summary: 'A runtime type-checking library for JavaScript that supports complex predicates and object inerfaces. Available through npm.'
    }, {
      logo: 'Mekpie',
      title: 'Mekpie',
      href: 'https://ejrbuss.net/mekpie/',
      summary: 'An opinionated build system for small scale C projects, written and configured using Python. Available through pip.'
    }, {
      logo: 'DndInitTracker',
      title: 'D&D Initiative Tracker',
      href: 'https://ejrbuss.net/dnd-initiative-tracker/',
      summary: 'A tool to help Dungeon Masters manage players and enemies when playing Dungeons and Dragons. Visit the site and step up your game.'
    }, {
      logo: 'Ejrbuss',
      title: 'ejrbuss.net',
      href: '',
      summary: 'This website has gone through redevelopment a few times over the years. Read about past mistakes here.'
    }],
    work: [{
      logo: 'UofA',
      title: 'UofA Engineering Department',
      href: '',
      summary: "I worked 8 months at the University of Alberta on two seperate coops. I got to work one-on-one with a Mechanical Engineering Professor as well as help maintain the engineering department's intranet."
    }, {
      logo: 'Ericsson',
      title: 'Ericsson',
      href: '',
      summary: "I worked as an iOS and web developer coop for 8 months at Ericsson's Ottawa site. I got to work on a diverse and distributed team of engineers."
    }]
  })
});

/***/ })

})
//# sourceMappingURL=about.js.2052f2f8e16a687c2c63.hot-update.js.map