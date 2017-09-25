const jss    = require('jss').default;
const preset = require('jss-preset-default').default;
const type   = require('type-mark');

jss.setup(preset());

/** curry **/
const curry = (fn, arity=fn.length) =>
    (...args) =>
        args.length >= arity
            ? fn.call(null, ...args)
            : curry(fn.bind(null, ...args), arity - args.length);
/** combinators **/
const compose = curry((...fns) =>
    fns.reduce((f, g) => (...args) => f(g(...args))), 2);
/**  jss **/
const style = style =>
    jss.createStyleSheet(style).attach();
const singleStyle = style =>
    jss.createStyleSheet({ style }).attach().classes.style;
/** print  **/
const print = obj =>
    (console.log(obj), obj);
/** match **/
const match = curry((value, ...conditions) => {

    type(conditions).assert.array;
    type(conditions.length).assert.even;

    let result;

    const action = conditions.find((_, index) => {
        if(index % 2 === 0) { return false; }
        const cond = conditions[index - 1];
        return (cond === match.else) ||
               (cond === value       ) ||
               (type(cond).function && (result = cond(value)));
    });
    if(action) {
        type(action).assert.function;
        return action(result);
    }
}, 2);
match.else = Symbol('match.else');
/** contains **/
const contains = curry((search, str)  =>
    str.includes(search));
/** range **/
const range = (start, end) => {
    if(type(end).undefined) {
        end   = start;
        start = 0;
    }
    return Array.from({length: (end - start)}, (v, k) => k + start);
}
/** classAdd **/
const classJoin = (...args) => args.filter(type.not.undefined).join(' ');
/** extendElement */
const extendElement = curry((el, attr) => (...args) => {
    if(type(args[0]).object) {
        const classes = classJoin(attr.class, args[0].class);
        Object.assign(attr, args.shift());
        attr.class = classes;
    }
    return el(attr, ...args);
});

module.exports = {
    flatMap:    curry(require('1-liners/flatMap')),
    map:        curry(require('1-liners/map')),
    split:      curry(require('1-liners/split')),
    prop:       curry(require('1-liners/property')),
    curry, compose, style, singleStyle,  print, match, contains, range,
    classJoin, extendElement
}