var $ = require('jquery');
var _a = require('./util'), match = _a.match, contains = _a.contains;
// Dependency globals
global.THREE = require('three');
global.jQuery = require('jQuery');
global.$ = jQuery;
var eventMap = {};
$(document).ready(function () {
    match(location.href)(contains('work'), require('./pages/work'), contains('about'), require('./pages/about'), contains('blog'), require('./pages/blog'), match.else, require('./pages/home'));
});
//# sourceMappingURL=index.js.map