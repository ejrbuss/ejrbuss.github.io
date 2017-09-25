var jss = require('jss').default;
var preset = require('jss-preset-default').default;
var type = require('type-mark');
jss.setup(preset());
/** curry **/
var curry = function (fn, arity) {
    if (arity === void 0) { arity = fn.length; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.length >= arity
            ? fn.call.apply(fn, [null].concat(args)) : curry(fn.bind.apply(fn, [null].concat(args)), arity - args.length);
    };
};
/** combinators **/
var compose = curry(function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return fns.reduce(function (f, g) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return f(g.apply(void 0, args));
    }; });
}, 2);
/**  jss **/
var style = function (style) {
    return jss.createStyleSheet(style).attach();
};
var singleStyle = function (style) {
    return jss.createStyleSheet({ style: style }).attach().classes.style;
};
/** print  **/
var print = function (obj) {
    return (console.log(obj), obj);
};
/** match **/
var match = curry(function (value) {
    var conditions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        conditions[_i - 1] = arguments[_i];
    }
    type(conditions).assert.array;
    type(conditions.length).assert.even;
    var result;
    var action = conditions.find(function (_, index) {
        if (index % 2 === 0) {
            return false;
        }
        var cond = conditions[index - 1];
        return (cond === match.else) ||
            (cond === value) ||
            (type(cond).function && (result = cond(value)));
    });
    if (action) {
        type(action).assert.function;
        return action(result);
    }
}, 2);
match.else = Symbol('match.else');
/** contains **/
var contains = curry(function (search, str) {
    return str.includes(search);
});
/** range **/
var range = function (start, end) {
    if (type(end).undefined) {
        end = start;
        start = 0;
    }
    return Array.from({ length: (end - start) }, function (v, k) { return k + start; });
};
/** classAdd **/
var classJoin = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(type.not.undefined).join(' ');
};
/** extendElement */
var extendElement = curry(function (el, attr) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (type(args[0]).object) {
        var classes = classJoin(attr.class, args[0].class);
        Object.assign(attr, args.shift());
        attr.class = classes;
    }
    return el.apply(void 0, [attr].concat(args));
}; });
module.exports = {
    flatMap: curry(require('1-liners/flatMap')),
    map: curry(require('1-liners/map')),
    split: curry(require('1-liners/split')),
    prop: curry(require('1-liners/property')),
    curry: curry, compose: compose, style: style, singleStyle: singleStyle, print: print, match: match, contains: contains, range: range,
    classJoin: classJoin, extendElement: extendElement
};
