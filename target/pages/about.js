var domjs = require('domjs')(document);
var tetris = require('../tetris');
var links = require('../config/links');
var Component = require('../components/component');
var Breadcrumb = require('../components/breadcrumb');
var SiteNav = require('../components/site-nav');
var SiteIconLink = require('../components/site-icon-link');
var _a = require('../util'), style = _a.style, classJoin = _a.classJoin;
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
                return div({ id: 'content' }, SiteNav({ page: 'about' }), div({ class: classJoin('centered', center) }, canvas({ class: tetris })), div({ class: 'container' }, div({ class: 'columns' }, div({ class: 'column hide-md col-1' }), div({ class: 'column hide-md col-2' } /* nav would go here */), div({ class: 'column hide-xs show-md col-md-2 col-1' }), div({ class: 'text column col-xs-12 col-sm-10 col-md-8 col-6' }), div({ class: 'column hide-xs col-sm-1 col-lg-2' }))));
            },
            ready: function () {
                $('#content').hide().fadeIn(500);
                $.ajax({ url: '/text/about', success: function (html) { return $('.text').append(html); } });
                tetris($('canvas').get(0));
            }
        });
    })());
};
module.exports = about;
