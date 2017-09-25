var domjs = require('domjs')(document);
var type = require('type-mark');
var $ = require('jquery');
var _a = require('../util'), style = _a.style, classJoin = _a.classJoin;
var livemap = new Map();
var Component = function (fn) { return function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    type(fn).assert.function;
    var attr = rest.shift() || {};
    var component = fn.apply(void 0, [attr].concat(rest));
    var _a = component.styles, styles = _a === void 0 ? {} : _a, html = component.html, classes = component.classes, ready = component.ready;
    var styleClasses = type(styles[Object.keys(styles)[0]]).not.object
        ? style({ style: styles }).classes
        : style(styles).classes;
    component.styleClasses = styleClasses;
    attr.class = classJoin(attr.class, classes);
    var node = html
        ? html.bind(component)(domjs.ns, styleClasses)
        : (_b = domjs.ns).div.apply(_b, [attr].concat(rest));
    if (ready) {
        livemap.set(node, ready.bind(component));
    }
    return node;
    var _b;
}; };
var fireIfReady = function () { return livemap.forEach(function (ready, node) {
    if (document.body.contains(node)) {
        livemap.delete(node);
        ready(node);
    }
}); };
document.body.addEventListener('DOMNodeInserted', fireIfReady, false);
document.body.addEventListener('DOMNodeRemoved', fireIfReady, false);
module.exports = Component;
