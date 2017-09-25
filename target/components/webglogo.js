var Component = require('./component');
var iswebgl = require('detector-webgl');
var $ = require('jquery');
var classJoin = require('../util').classJoin;
var _a = require('../logo-graphic'), init = _a.init, animate = _a.animate;
module.exports = Component(function (attr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return ({
        styles: {
            top: 0,
            left: 0,
            zIndex: -100,
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
        },
        html: function (_a, _b) {
            var div = _a.div, h1 = _a.h1;
            var style = _b.style;
            if (iswebgl) {
                return div();
            }
            else {
                return div({ class: classJoin('centered text-center', style) }, h1({ style: 'line-height:100vh;' }, 'No webgl >_<'));
            }
        },
        ready: function (target) {
            if (iswebgl) {
                target.appendChild(init());
                $('canvas').addClass(this.styleClasses.style);
                animate();
            }
        }
    });
});
