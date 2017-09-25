var colors = require('../config/colors');
var links = require('../config/links');
var $ = require('jquery');
var Component = require('../components/component');
var SiteLink = require('../components/site-link');
var Webglogo = require('../components/webglogo');
var bottomUp = require('../lib/transition').bottomUp;
var classJoin = require('../util').classJoin;
var home = function () {
    $(document.body).css({ overflow: 'hidden' });
    bottomUp(colors.background, function () {
        document.body.appendChild(Component(function (attr) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            return ({
                styles: {
                    navbar: {
                        zIndex: 100,
                        background: 'none'
                    },
                    footer: {
                        zIndex: 100,
                        marginTop: 'calc(100vh - 14em)',
                        background: 'none'
                    },
                },
                html: function (_a, _b) {
                    var header = _a.header, section = _a.section, div = _a.div, a = _a.a, i = _a.i;
                    var navbar = _b.navbar, footer = _b.footer;
                    return a({ id: 'clickable', href: '#' }, div({ id: 'content' }, header({ class: classJoin('navbar', navbar) }, section({ class: classJoin('navbar-section', navbar) }, div({ class: 'centerd text-center', style: 'width:100%;' }, SiteLink({ href: links.work }, 'work'), SiteLink({ href: links.about }, 'about'), SiteLink({ href: links.blog }, 'blog')))), header({ class: classJoin('navbar', footer) }, section({ class: classJoin('navbar-section', navbar) }, div({ class: 'centered text-center', style: 'width:100%;' }, SiteLink({ href: links.twitter }, i({ class: 'fa fa-twitter', 'aria-hidden': true })), SiteLink({ href: links.github }, i({ class: 'fa fa-github', 'aria-hidden': true })), SiteLink({ href: links.linkedin }, i({ class: 'fa fa-linkedin', 'aria-hidden': true }))))), Webglogo()));
                },
                ready: function () {
                    $('#content').hide();
                    $('#content').fadeIn(1000);
                }
            });
        })());
    });
};
module.exports = home;
