const domjs  = require('domjs')(document);
const tetris = require('../tetris');
const links  = require('../config/links');

const Component    = require('../components/component');
const Breadcrumb   = require('../components/breadcrumb');
const SiteNav      = require('../components/site-nav');
const SiteIconLink = require('../components/site-icon-link');

const { style, classJoin } = require('../util');

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
            return div({ id:'content' },
                SiteNav({ page:'about' }),
                div({ class:classJoin('centered', center) },
                    canvas({ class:tetris })
                ),
                div({ class:'container' },
                    div({ class:'columns' },
                        div({ class:'column hide-md col-1' }),
                        div({ class:'column hide-md col-2' } /* nav would go here */),
                        div({ class:'column hide-xs show-md col-md-2 col-1'}),
                        div({ class:'text column col-xs-12 col-sm-10 col-md-8 col-6'}),
                        div({ class:'column hide-xs col-sm-1 col-lg-2' })
                ))
            );
        },

        ready() {
            $('#content').hide().fadeIn(500);
            $.ajax({ url: '/text/about', success: html => $('.text').append(html) });
            tetris($('canvas').get(0));
        }

    }))());
};

module.exports = about;