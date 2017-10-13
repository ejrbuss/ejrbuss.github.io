var tetris = require('../tetris');
var Component = require('../components/component');
var Content = require('../components/content');
var classJoin = require('../util').classJoin;
var about = function () {
    document.body.appendChild(Component(function (attr) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return ({
            styles: {
                center: {
                    margin: 'auto',
                    marginTop: '10vh',
                    width: '100%'
                },
                tetris: {
                    width: '40vh',
                    height: '40vh',
                    marginLeft: 'calc(50vw - 20vh)'
                }
            },
            html: function (_a, _b) {
                var div = _a.div, canvas = _a.canvas;
                var center = _b.center, tetris = _b.tetris;
                return Content({
                    page: 'about',
                    frontmatter: div({ class: classJoin('centered', center) }, canvas({ class: tetris }))
                });
            },
            ready: function () {
                $.ajax({ url: '/text/about', success: function (html) { return $('.text').append(html); } });
                tetris($('canvas').get(0));
            }
        });
    })());
};
module.exports = about;
