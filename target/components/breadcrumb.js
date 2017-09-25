var colors = require('../config/colors');
var links = require('../config/links');
var Component = require('./component');
var $ = require('jquery');
var classJoin = require('../util').classJoin;
module.exports = Component(function (attr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return ({
        html: function (_a, _b) {
            var ul = _a.ul, li = _a.li, a = _a.a;
            var link = _b.link, text = _b.text;
            return ul.apply(void 0, [{ class: 'breadcrumb' }].concat(attr.path.map(function (_a) {
                var name = _a[0], link = _a[1];
                return li({ class: 'breadcrumb-item' }, a({ href: link }, name));
            })));
        },
    });
});
