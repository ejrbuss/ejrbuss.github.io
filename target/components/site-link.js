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
        styles: {
            link: {
                margin: '2vw'
            },
            hover: {
                display: 'inline-block',
                '&::after': {
                    width: 0,
                    background: colors.accent,
                    content: '""',
                    display: 'block',
                    height: '2px',
                    transition: 'width 0.3s',
                    marginTop: '0.34rem'
                },
                '&:hover::after': {
                    width: '100%'
                },
                '&.active::after': {
                    width: '100%'
                }
            },
            text: {
                color: colors.foreground,
                fontSize: '2.4rem',
            }
        },
        html: function (_a, _b) {
            var a = _a.a, span = _a.span;
            var link = _b.link, hover = _b.hover, text = _b.text;
            // Allow css overriding
            if (attr.styles) {
                link = attr.styles.link || link;
                hover = attr.styles.hover || hover;
                text = attr.styles.text || text;
            }
            // Manage link behavior
            var internal = links.internal(attr.href);
            attr.target = attr.target || (internal ? void (0) : '_blank');
            attr.onclick = attr.onclick || (internal ? "goto('" + attr.href + "');" : void (0));
            // Concat classes
            attr.class = classJoin(attr.class, link, attr.hover === false
                ? ''
                : hover, attr.anaglyph === false
                ? 'btn btn-link'
                : 'anaglyph btn btn-link');
            // Return html
            return a(attr, span.apply(void 0, [{ class: text }].concat(rest)));
        },
        ready: function (target) {
            if (links.internal(attr.href)) {
                $(target).on('mousedown mouseup click', function (e) { return e.preventDefault(); });
            }
        }
    });
});
