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
                project: {
                    paddingBottom: '2em',
                    paddingTop: '2em'
                },
                spacer: {
                    height: '16vh',
                    display: 'block'
                },
                image: {
                    width: '100%',
                    height: '100%',
                    left: '50%',
                    zIndex: -1000,
                    margin: 0,
                    padding: 0,
                }
            },
            html: function (_a, _b) {
                var div = _a.div, h2 = _a.h2, h3 = _a.h3, img = _a.img, p = _a.p;
                var project = _b.project, spacer = _b.spacer, image = _b.image;
                var imageRight = function () {
                    return div({ class: classJoin('columns', project) }, div({ class: 'column col-md-12 col-6' }, h3({ class: 'centered text-center' }, 'UofA Sotware Developer'), p('lorem ipusm asdklfmalskdfnasldf')), div({ class: 'column col-md-12 col-6' }, img({ class: image, src: '/assets/dice.jpg', alt: 'UofA Donadeo ICE' })));
                };
                var imageLeft = function () {
                    return div({ class: classJoin('columns', project) }, div({ class: 'column col-md-12 col-6' }, img({ class: image, src: '/assets/mech.jpg', alt: 'UofA Donadeo ICE' })), div({ class: 'column col-md-12 col-6' }));
                };
                return Content({
                    page: 'work',
                    nav: [
                        'Professional', [
                            'UofA Software Developer',
                            'UofA Research Assistant'
                        ],
                        'Personal', [
                            'type-mark',
                            'Vorlds',
                            'Schema Reflector',
                            'Go'
                        ]
                    ]
                }, div({ class: spacer }), div({ class: 'container' }, h2('professional.'), imageRight(), imageLeft(), h2('personal.'), imageRight(), imageLeft(), imageRight(), imageLeft()));
            },
            ready: function () {
            }
        });
    })());
};
module.exports = about;
