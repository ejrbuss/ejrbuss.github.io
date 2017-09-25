const links        = require('../config/links');
const colors       = require('../config/colors');
const Component    = require('./component');
const SiteLink     = require('./site-link');
const SiteIconLink = require('./site-icon-link');

const { classJoin } = require('../util');

module.exports = Component((attr, ...rest) => ({

    styles : {
        nav : {
            background : colors.foreground,
            position   : 'fixed',
            width      : '100%',
            marginLeft : '6vh',
            top        : 0,
        },
        logo : {
            margin      : '-0.5em',
            marginRight : '1em',
            marginLeft  : '0.5em',
            width       : '6vh',
            height      : '6vh',
            minWidth    : '25px',
            minHeight   : '25px',
            transition  : 'width 0.2s, min-width 0.2s, height 0.2s, min-height 0.2s',
            padding     : 0,
            '&.shrink'  : {
                width     : 0,
                height    : 0,
                minWidth  : 0,
                minHeight : 0
            }
        },
        link : {
            margin     : '1vw',
            transition : 'margin 0.2s',
            '&.shrink' : {
                margin : '0.4vw',
            }
        },
        title : {
            display    : 'inline-block',
            fontFamily : 'Fira Mono',
            transition : 'font-size 0.2s',
            textShadow : 'none',
            '&.shrink' : {
                fontSize : 0
            }
        },
        text : {
            color      : colors.background,
            fontSize   : '2.4rem',
            transition : 'font-size 0.2s',
            '&.shrink' : {
                fontSize : '1.6rem',
            }
        },
    },

    html({ header, section, div, img, hr, h1, i, span, br }, { nav, logo, link, title, text }) {
        // ALlow css overriding
        if(attr.styles) {
            nav  = attr.styles.nav  || nav;
            logo = attr.styles.logo || logo;
            link = attr.styles.link || link;
            text = attr.styles.text || text;
        }
        // Return html
        return header({ class:classJoin('navbar', nav) },
            section({ class:'navbar-section' },
                div(
                    SiteLink({ styles:{ link }, href: links.home, class:logo, hover:false },
                        img({ class:logo, src:'/assets/ava.png', alt:'home' }),
                        h1({ class:title }, attr.page + '.')
                    ),
                    br(),
                    SiteLink({ styles:{ link, text }, href:links.home  },
                        'home'),
                    SiteLink({ class:attr.page === 'work' ? 'active' : '', styles:{ link, text }, href:links.work  },
                        'work' ),
                    SiteLink({ class:attr.page === 'about' ? 'active' : '', styles:{ link, text }, href:links.about },
                        'about'),
                    SiteLink({ class:attr.page === 'blog' ? 'active' : '', styles:{ link, text }, href:links.blog  },
                        'blog' )
                )
            ),
            section({ class:'navbar-center' }),
            section({ class:'navbar-section' })
        );
    },

    ready() {
        $(window).scroll(() => {
            if($(document).scrollTop() > 50) {
                $('.' + this.styleClasses.nav).addClass('shrink');
                $('.' + this.styleClasses.logo).addClass('shrink');
                $('.' + this.styleClasses.link).addClass('shrink');
                $('.' + this.styleClasses.title).addClass('shrink');
                $('.' + this.styleClasses.text).addClass('shrink');
            } else {
                $('.' + this.styleClasses.nav).removeClass('shrink');
                $('.' + this.styleClasses.logo).removeClass('shrink');
                $('.' + this.styleClasses.link).removeClass('shrink');
                $('.' + this.styleClasses.title).removeClass('shrink');
                $('.' + this.styleClasses.text).removeClass('shrink');
            }
        });
    }

}));