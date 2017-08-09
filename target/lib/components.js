var colors = require('../config/colors');
var anime = require('./anime');
var domjs = require('domjs')(document);
var $ = require('jquery');
var _a = require('../util'), style = _a.style, classJoin = _a.classJoin;
var _b = domjs.ns, div = _b.div, a = _b.a, h4 = _b.h4;
var classes = style({
    link: {
        display: 'inline-block',
        '&::after': {
            width: 0,
            background: colors.accent,
            content: '""',
            display: 'block',
            height: '2px',
            transition: 'width 0.3s'
        },
        '&:hover::after': {
            width: '100%'
        }
    }, text: {
        color: colors.foreground,
        marginBottom: '0.25em'
    }
}).classes;
var navLink = function (text, link, margin) {
    if (link === void 0) { link = '#'; }
    if (margin === void 0) { margin = '2em'; }
    var internal = link.startsWith('/');
    var href = internal ? '#' : link;
    var target = internal ? '' : '_blank';
    var onclick = internal ? "goto(\"" + link + "\");" : '';
    var attr = {
        href: href, target: target, onclick: onclick,
        class: classJoin('btn', 'btn-link', classes.link),
        style: "margin:" + margin + ";"
    };
    return a(attr, h4({ class: classes.text }, text));
};
var iconLink = function (text, href, margin) { return navLink(text, href, '1em'); };
module.exports = { navLink: navLink, iconLink: iconLink };
//# sourceMappingURL=components.js.map