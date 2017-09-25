var Component = require('./component');
var SiteLink = require('./site-link');
var classJoin = require('../util').classJoin;
module.exports = Component({
    style: { margin: '1vw !important' },
    html: function (_a, _b, attr) {
        var style = _b.style;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        attr.class = classJoin(attr.class, style);
        return SiteLink.apply(void 0, [attr].concat(args));
    }
});
