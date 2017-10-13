const Component = require('../components/component');
const Content   = require('../components/content');

const { classJoin } = require('../util');

const about = () => {

    document.body.appendChild(Component((attr, ...rest) => ({

        styles : {
            project : {
                paddingBottom : '2em',
                paddingTop    : '2em'
            },
            spacer : {
                height  : '16vh',
                display : 'block'
            },
            image  : {
                width    : '100%',
                height   : '100%',
                left     : '50%',
                zIndex   : -1000,
                margin   : 0,
                padding  : 0,
            }
        },

        html({ div, h2, h3, img, p }, { project, spacer, image }) {

            const imageRight = () => {
                return div({ class:classJoin('columns', project) },
                    div({ class:'column col-md-12 col-6' },
                        h3({ class:'centered text-center'}, 'UofA Sotware Developer'),
                        p('lorem ipusm asdklfmalskdfnasldf')
                    ),
                    div({ class:'column col-md-12 col-6' },
                        img({ class:image, src:'/assets/dice.jpg', alt:'UofA Donadeo ICE' })
                    ),
                );
            };

            const imageLeft = () => {
                return div({ class:classJoin('columns', project) },
                div({ class:'column col-md-12 col-6' },
                    img({ class:image, src:'/assets/mech.jpg', alt:'UofA Donadeo ICE' })
                ),
                div({ class:'column col-md-12 col-6' })
            );
            };

            return Content({
                page : 'work',
                nav  : [
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
            },
                div({ class:spacer }),
                div({ class:'container' },
                    h2('professional.'),
                    imageRight(),
                    imageLeft(),
                    h2('personal.'),
                    imageRight(),
                    imageLeft(),
                    imageRight(),
                    imageLeft()
                )
            );
        },

        ready() {
        }

    }))());

};

module.exports = about;