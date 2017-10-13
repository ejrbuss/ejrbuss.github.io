var type = require('type-mark');
var colors = require('../config/colors');
var Component = require('./component');
var classJoin = require('../util').classJoin;
module.exports = Component(function (attr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return ({
        styles: {
            container: {
                position: 'fixed',
                top: '16vh'
            },
            link: {
                overflow: 'auto',
                color: colors.background + ' !important',
                '&:hover': {
                    color: colors.accent + ' !important'
                }
            },
            sectionLink: {
                fontWeight: 'bold',
                fontFamily: 'Fira Mono'
            }
        },
        html: function (_a, _b) {
            var div = _a.div, ul = _a.ul, li = _a.li, a = _a.a, b = _a.b;
            var container = _b.container, link = _b.link, sectionLink = _b.sectionLink;
            var generate = function (list) {
                var html = '';
                if (list.length) {
                    var inner = list.reduce(function (acc, item, i) {
                        if (type(item).array) {
                            return acc;
                        }
                        if (type(list[i + 1]).array) {
                            acc.push(li.apply(void 0, [{ class: 'nav-item' },
                                a({
                                    href: '#' + item.replace(/\s/g, '-'),
                                    class: classJoin(sectionLink, link)
                                }, b(item))].concat(generate(list[i + 1]))));
                        }
                        else {
                            acc.push(li({ class: 'nav-item' }, a({ href: '#' + item.replace(/\s/g, '-'), class: link }, item)));
                        }
                        return acc;
                    }, []);
                    html = ul.apply(void 0, [{ class: 'nav' }].concat(inner));
                }
                return html;
            };
            return div({ class: container }, generate.apply(void 0, rest));
        }
    });
});
