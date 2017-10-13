var colors = require('../config/colors');
var links = require('../config/links');
var Component = require('./component');
var SiteLink = require('./site-link');
var classJoin = require('../util').classJoin;
module.exports = Component(function (attr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return ({
        styles: {
            sideLink: {
                boxShadow: '1px 0 0 0 #eaeaea, 2px 0 0 0 #f3f3f3',
                position: 'fixed',
                right: 0,
                top: '40vh'
            },
            text: {
                color: colors.background,
                fontSize: '2.4rem',
            },
            link: {
                margin: '1em'
            },
        },
        html: function (_a, _b) {
            var div = _a.div, br = _a.br, i = _a.i;
            var sideLink = _b.sideLink, text = _b.text, link = _b.link;
            return div({ class: classJoin('hide-sm', sideLink) }, SiteLink({ styles: { text: text, link: link }, href: links.twitter }, i({ class: 'fa fa-twitter', 'aria-hidden': true })), br(), SiteLink({ styles: { text: text, link: link }, href: links.github }, i({ class: 'fa fa-github', 'aria-hidden': true })), br(), SiteLink({ styles: { text: text, link: link }, href: links.linkedin }, i({ class: 'fa fa-linkedin', 'aria-hidden': true })));
        }
    });
});
