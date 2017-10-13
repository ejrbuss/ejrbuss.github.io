var Component = require('./component');
var SideNav = require('./side-nav');
var SiteNav = require('./site-nav');
var SideLinks = require('./side-links');
module.exports = Component(function (attr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return ({
        html: function (_a, _b) {
            var div = _a.div, canvas = _a.canvas;
            var center = _b.center, tetris = _b.tetris;
            return div({ id: 'content' }, SiteNav({ page: attr.page }), SideLinks(), attr.frontmatter || div(), div({ class: 'container' }, div({ class: 'columns' }, div({ class: 'column hide-md col-1' }), div({ class: 'column hide-md col-2' }, attr.nav
                ? SideNav({}, attr.nav)
                : ''), div({ class: 'column hide-xs show-md col-md-2 col-1' }), div.apply(void 0, [{ class: 'text column col-xs-12 col-sm-10 col-md-8 col-6' }].concat(rest)), div({ class: 'column hide-xs col-sm-1 col-lg-2' }))));
        },
        ready: function () {
            $('#content').hide().fadeIn(500);
        }
    });
});
