const tetris = require('../tetris');

const Component = require('../components/component');
const Content   = require('../components/content');

const { classJoin } = require('../util');

const about = () => {

    document.body.appendChild(Component((attr, ...rest) => ({

        styles : {
            center: {
                margin    : 'auto',
                marginTop : '10vh',
                width     : '100%'
            },
            tetris : {
                width      : '40vh',
                height     : '40vh',
                marginLeft : 'calc(50vw - 20vh)'
            }
        },

        html({ div, canvas }, { center, tetris }) {
            return Content({
                page        : 'about',
                frontmatter : div({ class:classJoin('centered', center) },
                    canvas({ class:tetris })
                )
            });
        },

        ready() {
            $.ajax({ url: '/text/about', success: html => $('.text').append(html) });
            tetris($('canvas').get(0));
        }

    }))());

};

module.exports = about;