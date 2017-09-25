const colors  = require('../config/colors');
const links   = require('../config/links');
const anime   = require('./anime');
const domjs   = require('domjs')(document);
const $       = require('jquery');

const SiteIconLink = require('../components/site-icon-link');

const { style, singleStyle, classJoin } = require('../util');

const { div, a, h1, hr, i, img, span } = domjs.ns;
const { classes }    = style({

    // Styles for links
    link: {
        margin:  '2vw',
        display: 'inline-block',
        '&::after': {
            width:      0,
            background: colors.accent,
            content:    '""',
            display:    'block',
            height:     '2px',
            transition: 'width 0.3s'
        },
        '&:hover::after': {
            width: '100%'
        }
    }, text: {
        color:        colors.foreground,
        fontSize:     '2.4rem',
        marginBottom: '0.25rem'
    }, icon: {
        margin: '1vw !important'

    // Styles for SiteNav
    }, siteNav: {
        padding:    0,
        margin:     '2em',
        display:    'block',
        position:   'fixed',
        cursor:     'pointer',
    }, navLogo: {
        margin:       'auto',
        marginBottom: '1vw',
        width:        '8vh',
        height:       '8vh',
        minWidth:     '50px',
        minHeight:    '50px',
        padding:      0,
    }, navLink: {
        margin:       'auto',
        marginBottom: '1vw',
        width:        '100%',
    }
});

const navLink = (el, link='#', customClasses) => {

    const internal = link.startsWith('/');
    const href     = internal ? '#' : link;
    const target   = internal ? ''  : '_blank';
    const onclick  = internal ? `goto("${link}");` : '';

    const attr = {
        href, target, onclick,
        class:classJoin('btn', 'btn-link anaglyph', classes.link, customClasses),
    };
    return a(attr, span({ class:classes.text }, el));
};

const iconLink = (() => {

    const style = singleStyle({ margin: '1vw !important' });

    return (el, link, classes=style) => navLink(el, link, classes);
})();

const siteNav = () => (
    div(
        div({ id:'mobile-home', class:classJoin('show-xs', classes.siteNav) },
            navLink(img({
                style:'margin-bottom:0;',
                src:'/assets/avabw.png',
                class:classJoin('img-anaglyph', classes.navLogo),
                alt:'home'
            }),
                links.home,
                classes.navLogo
            )
        ),
        div({ id:'site-nav', class:classJoin('hide-xs', classes.siteNav) },
            navLink(img({
                style:'margin-bottom:0;',
                src:'/assets/avabw.png',
                class:classJoin('img-anaglyph', classes.navLogo),
                alt:'home'
            }),
                links.home,
                classes.navLogo
            ),
            hr(),
            iconLink(i({ class:'fa fa-twitter',  'aria-hidden':true, style:'color:'+colors.background }),
                links.twitter,
                classes.navLink
            ),
            hr(),
            iconLink(i({ class:'fa fa-github',   'aria-hidden':true, style:'color:'+colors.background }),
                links.github,
                classes.navLink
            ),
            hr(),
            iconLink(i({ class:'fa fa-linkedin', 'aria-hidden':true, style:'color:'+colors.background }),
                links.linkedin,
                classes.navLink
            ),
            hr(),
            SiteIconLink({ href:'#', class:classes.navLink },
                i({ class:classJoin('fa fa-linkedin'), style:'color:#000;', 'aria-hidden':true })),
        )
    )
);

module.exports = { navLink, iconLink, siteNav };