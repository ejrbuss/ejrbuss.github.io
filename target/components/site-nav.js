var links = require('../config/links');
var colors = require('../config/colors');
var Component = require('./component');
var SiteLink = require('./site-link');
var SiteIconLink = require('./site-icon-link');
var classJoin = require('../util').classJoin;
module.exports = Component(function (attr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return ({
        styles: {
            nav: {
                background: colors.foreground,
                position: 'fixed',
                width: '100%',
                marginLeft: '6vh',
                top: 0,
            },
            logo: {
                margin: '-0.5em',
                marginRight: '1em',
                marginLeft: '0.5em',
                width: '6vh',
                height: '6vh',
                minWidth: '25px',
                minHeight: '25px',
                transition: 'width 0.2s, min-width 0.2s, height 0.2s, min-height 0.2s',
                padding: 0,
                '&.shrink': {
                    width: 0,
                    height: 0,
                    minWidth: 0,
                    minHeight: 0
                }
            },
            link: {
                margin: '1vw',
                transition: 'margin 0.2s',
                '&.shrink': {
                    margin: '0.4vw',
                }
            },
            title: {
                display: 'inline-block',
                fontFamily: 'Fira Mono',
                transition: 'font-size 0.2s',
                textShadow: 'none',
                '&.shrink': {
                    fontSize: 0
                }
            },
            text: {
                color: colors.background,
                fontSize: '2.4rem',
                transition: 'font-size 0.2s',
                '&.shrink': {
                    fontSize: '1.6rem',
                }
            },
        },
        html: function (_a, _b) {
            var header = _a.header, section = _a.section, div = _a.div, img = _a.img, hr = _a.hr, h1 = _a.h1, i = _a.i, span = _a.span, br = _a.br;
            var nav = _b.nav, logo = _b.logo, link = _b.link, title = _b.title, text = _b.text;
            // ALlow css overriding
            if (attr.styles) {
                nav = attr.styles.nav || nav;
                logo = attr.styles.logo || logo;
                link = attr.styles.link || link;
                text = attr.styles.text || text;
            }
            // Return html
            return header({ class: classJoin('navbar', nav) }, section({ class: 'navbar-section' }, div(SiteLink({ styles: { link: link }, href: links.home, class: logo, hover: false }, img({ class: logo, src: '/assets/ava.png', alt: 'home' }), h1({ class: title }, attr.page + '.')), br(), SiteLink({ styles: { link: link, text: text }, href: links.home }, 'home'), SiteLink({ class: attr.page === 'work' ? 'active' : '', styles: { link: link, text: text }, href: links.work }, 'work'), SiteLink({ class: attr.page === 'about' ? 'active' : '', styles: { link: link, text: text }, href: links.about }, 'about'), SiteLink({ class: attr.page === 'blog' ? 'active' : '', styles: { link: link, text: text }, href: links.blog }, 'blog'))), section({ class: 'navbar-center' }), section({ class: 'navbar-section' }));
        },
        ready: function () {
            var _this = this;
            $(window).scroll(function () {
                if ($(document).scrollTop() > 50) {
                    $('.' + _this.styleClasses.nav).addClass('shrink');
                    $('.' + _this.styleClasses.logo).addClass('shrink');
                    $('.' + _this.styleClasses.link).addClass('shrink');
                    $('.' + _this.styleClasses.title).addClass('shrink');
                    $('.' + _this.styleClasses.text).addClass('shrink');
                }
                else {
                    $('.' + _this.styleClasses.nav).removeClass('shrink');
                    $('.' + _this.styleClasses.logo).removeClass('shrink');
                    $('.' + _this.styleClasses.link).removeClass('shrink');
                    $('.' + _this.styleClasses.title).removeClass('shrink');
                    $('.' + _this.styleClasses.text).removeClass('shrink');
                }
            });
        }
    });
});
