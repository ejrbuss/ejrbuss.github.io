var colors = require('../config/colors');
var links = require('../config/links');
var anime = require('./anime');
var domjs = require('domjs')(document);
var $ = require('jquery');
var SiteIconLink = require('../components/site-icon-link');
var _a = require('../util'), style = _a.style, singleStyle = _a.singleStyle, classJoin = _a.classJoin;
var _b = domjs.ns, div = _b.div, a = _b.a, h1 = _b.h1, hr = _b.hr, i = _b.i, img = _b.img, span = _b.span;
var classes = style({
    // Styles for links
    link: {
        margin: '2vw',
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
        fontSize: '2.4rem',
        marginBottom: '0.25rem'
    }, icon: {
        margin: '1vw !important'
        // Styles for SiteNav
    }, siteNav: {
        padding: 0,
        margin: '2em',
        display: 'block',
        position: 'fixed',
        cursor: 'pointer',
    }, navLogo: {
        margin: 'auto',
        marginBottom: '1vw',
        width: '8vh',
        height: '8vh',
        minWidth: '50px',
        minHeight: '50px',
        padding: 0,
    }, navLink: {
        margin: 'auto',
        marginBottom: '1vw',
        width: '100%',
    }
}).classes;
var navLink = function (el, link, customClasses) {
    if (link === void 0) { link = '#'; }
    var internal = link.startsWith('/');
    var href = internal ? '#' : link;
    var target = internal ? '' : '_blank';
    var onclick = internal ? "goto(\"" + link + "\");" : '';
    var attr = {
        href: href, target: target, onclick: onclick,
        class: classJoin('btn', 'btn-link anaglyph', classes.link, customClasses),
    };
    return a(attr, span({ class: classes.text }, el));
};
var iconLink = (function () {
    var style = singleStyle({ margin: '1vw !important' });
    return function (el, link, classes) {
        if (classes === void 0) { classes = style; }
        return navLink(el, link, classes);
    };
})();
var siteNav = function () { return (div(div({ id: 'mobile-home', class: classJoin('show-xs', classes.siteNav) }, navLink(img({
    style: 'margin-bottom:0;',
    src: '/assets/avabw.png',
    class: classJoin('img-anaglyph', classes.navLogo),
    alt: 'home'
}), links.home, classes.navLogo)), div({ id: 'site-nav', class: classJoin('hide-xs', classes.siteNav) }, navLink(img({
    style: 'margin-bottom:0;',
    src: '/assets/avabw.png',
    class: classJoin('img-anaglyph', classes.navLogo),
    alt: 'home'
}), links.home, classes.navLogo), hr(), iconLink(i({ class: 'fa fa-twitter', 'aria-hidden': true, style: 'color:' + colors.background }), links.twitter, classes.navLink), hr(), iconLink(i({ class: 'fa fa-github', 'aria-hidden': true, style: 'color:' + colors.background }), links.github, classes.navLink), hr(), iconLink(i({ class: 'fa fa-linkedin', 'aria-hidden': true, style: 'color:' + colors.background }), links.linkedin, classes.navLink), hr(), SiteIconLink({ href: '#', class: classes.navLink }, i({ class: classJoin('fa fa-linkedin'), style: 'color:#000;', 'aria-hidden': true }))))); };
module.exports = { navLink: navLink, iconLink: iconLink, siteNav: siteNav };
