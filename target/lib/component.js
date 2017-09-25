var domjs = require('domjs')(document);
var type = require('type-mark');
var $ = require('jquery');
var _a = require('../util'), style = _a.style, classJoin = _a.classJoin;
var callbacks = [];
var componentID = 0;
var Component = function (obj) {
    var html = obj.html || defaults.html;
    var rawStyle = obj.style || defaults.style;
    var classes = obj.classes || defaults.classse;
    var ready = obj.ready || defaults.ready;
    var classes;
    if (type(rawStyle[Object.keys(rawStyle)[0]]).not.object) {
        styleClasses = style({ style: rawStyle }).classes;
    }
    else {
        styleClasses = style(rawStyle).classes;
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var id = componentID++;
        var attr = type(args[0]).object
            ? args.shift()
            : {};
        attr['data-componentid'] = id;
        attr.class = classJoin(attr.class, classes, ready ? 'component-callback' : '');
        callbacks.push([id, ready]);
        return html.apply(void 0, [domjs.ns, styleClasses, attr].concat(args));
    };
};
var defaults = {
    style: {},
    html: function (_a, _b, attr) {
        var div = _a.div;
        var style = _b.style;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        attr.class = classJoin(attr.class, style);
        return div.apply(void 0, [attr].concat(args));
    }
};
var event = function (e) {
    if (e.animationName === 'nodeInserted') {
        for (var i = 0; i < callbacks.length; i++) {
            var _a = callbacks[i], id = _a[0], ready = _a[1];
            // Double equals for string/number conversion
            if (id == e.target.dataset.componentid) {
                var $this = $("[data-componentid=" + id + "]");
                $this.removeClass('component-callback');
                callbacks.splice(i, 1);
                return ready($this);
            }
        }
    }
};
document.addEventListener('animationstart', event, false);
document.addEventListener('MSAnimationStart', event, false);
document.addEventListener('webkitAnimationStart', event, false);
global.Component = Component;
module.exports = Component;
