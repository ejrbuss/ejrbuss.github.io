const domjs = require('domjs')(document);
const type  = require('type-mark');
const $     = require('jquery');

const { style, classJoin } = require('../util');

const livemap = new Map();

const Component = fn => (...rest) => {

    type(fn).assert.function;

    const attr = rest.shift() || {};
    const component = fn(attr, ...rest);
    const { styles={}, html, classes, ready } = component;
    const styleClasses = type(styles[Object.keys(styles)[0]]).not.object
        ? style({ style:styles }).classes
        : style(styles).classes;
    component.styleClasses = styleClasses;
    attr.class = classJoin(attr.class, classes);
    const node = html
        ? html.bind(component)(domjs.ns, styleClasses)
        : domjs.ns.div(attr, ...rest);
    if(ready) {
        livemap.set(node, ready.bind(component));
    }
    return node;
};


const fireIfReady = () => livemap.forEach((ready, node) => {
    if(document.body.contains(node)) {
        livemap.delete(node);
        ready(node);
    }
});
document.body.addEventListener('DOMNodeInserted', fireIfReady, false);
document.body.addEventListener('DOMNodeRemoved',  fireIfReady, false);


module.exports = Component;