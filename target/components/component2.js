var domjs = require('domjs')(document);
var type = require('type-mark');
var $ = require('jquery');
var _a = require('../util'), style = _a.style, classJoin = _a.classJoin;
var livemap = new Map();
var defaultHTML = function (_a, _b, attr) {
    var div = _a.div;
    var style = _b.style;
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    attr.class = classJoin(attr.class, style);
    return div.apply(void 0, [attr].concat(args));
};
var Component = function (component) {
    var _a = component.html, html = _a === void 0 ? defaultHTML : _a, _b = component.rawStyle, rawStyle = _b === void 0 ? {} : _b, classes = component.classes, ready = component.ready;
    var styleClasses = type(rawStyle[Object.keys(rawStyle)[0]]).not.object
        ? style({ style: rawStyle }).classes
        : style(rawStyle).classes;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var attr = type(args[0]).object ? args.shift() : {};
        attr.class = classJoin(attr.class, classes);
        var node = html.apply(void 0, [domjs.ns, styleClasses, attr].concat(args));
        if (ready) {
            livemap.set(node, { ready: ready, styleClasses: styleClasses, attr: attr });
        }
        return node;
    };
};
new MutationObserver(function (mutations) {
    mutations.forEach(function (muatation) {
        if (livemap.has(mutation.target)) {
            var component = livemap.get(mutation.target);
            livemap.delete(mutation.target);
            component.ready(mutation.target, component);
        }
    });
});
module.exports = Component;
