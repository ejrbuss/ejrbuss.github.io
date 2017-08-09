var colors = require('../config/colors');
var links = require('../config/links');
var iswebgl = require('detector-webgl');
var domjs = require('domjs')(document);
var $ = require('jquery');
var bottomUp = require('../lib/transition').bottomUp;
var _a = require('../lib/components'), navLink = _a.navLink, iconLink = _a.iconLink;
var _b = require('../logo-graphic'), init = _b.init, animate = _b.animate;
var _c = require('../util'), style = _c.style, classJoin = _c.classJoin;
var classes = style({
    navbar: {
        zIndex: 100,
        background: 'none'
    },
    footer: {
        zIndex: 100,
        marginTop: 'calc(100vh - 14em)',
        background: 'none'
    },
    canvas: {
        zIndex: -100,
        top: 0,
        left: 0,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    }
}).classes;
var home = function () {
    bottomUp(colors.background, function () {
        if (iswebgl) {
            var _a = domjs.ns, header = _a.header, section = _a.section, div = _a.div, a = _a.a, i = _a.i;
            $(document.body).css({ overflow: 'hidden' });
            document.body.appendChild(a({ id: 'clickable', href: '#' }, div({ id: 'content' }, header({ class: classJoin('navbar', classes.navbar) }, section({ class: classJoin('navbar-section', classes.navbar) }, div({ class: 'centerd text-center', style: 'width:100%;' }, navLink('work', links.work), navLink('about', links.about), navLink('blog', links.blog)))), header({ class: classJoin('navbar', classes.footer) }, section({ class: classJoin('navbar-section', classes.navbar) }, div({ class: 'centerd text-center', style: 'width:100%;' }, iconLink(i({ class: 'fa fa-twitter', 'aria-hidden': true }), links.twitter), iconLink(i({ class: 'fa fa-github', 'aria-hidden': true }), links.github), iconLink(i({ class: 'fa fa-linkedin', 'aria-hidden': true }), links.linkedin)))), init(document.body))));
            $('#content').hide();
            $('canvas').addClass(classes.canvas);
            animate();
            $('#content').fadeIn(1000);
        }
        else {
            document.body.appendChild(document.createTextNode('No webgl >_<'));
        }
    });
};
module.exports = home;
//# sourceMappingURL=home.js.map