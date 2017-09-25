const colors = require('../config/colors');
const links  = require('../config/links');
const anime  = require('./anime');
const domjs  = require('domjs')(document);
const $      = require('jquery');

const { iconLink, navLink } = require('../lib/components');
const { style, classJoin, extendElement }  = require('../util');
const { div } = domjs.ns;


const withSvg = tag => (...args) => {
    const [attr, ...children] = args;
    el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attr).forEach(key => el.setAttribute(key, attr[key]));
    children.forEach(child => el.appendChild(child));
    return el;
};

const svg    = withSvg('svg');
const poly   = withSvg('polygon');

const { classes } = style({
    transition: {
        top:        window.innerHeight,
        zIndex:     200,
        width:      '100vw',
        height:     '100vh',
        display:    'block',
        position:   'fixed',
        overflow:   'hidden',
        background: '#000000'
    }, logo: {
        margin:     0,
        padding:    0,
        marginTop:  '46vh',
        marginLeft: 'calc(50vw - 4vh)',
        width:      '8vh',
        height:     '8vh',
        display:    'block',
    }, svg: {
        width:     '8vh',
        height:    '8vh',
        minWidth:  '50px',
        minHeight: '50px',
        margin:    'auto',
        filter:    'drop-shadow(-3px 0 1px rgb(30,242,241)), drop-shadow(3px 0 1px rgb(246,5,10))'
    }
});

const bottomUp = (background, callback) => {
    $('#transition').remove();
    document.body.appendChild(
        div({ id:'transition', class:classes.transition },
            div({ id:'transition-logo', class:classes.logo },
                svg({ viewBox:'0 0 12 12', class:classes.svg },
                    poly({ class:'logo-p-1', points:'3,1 1,1 1,1 3,1',   style:'fill:'+colors.accent }),
                    poly({ class:'logo-p-2', points:'3,11 3,9 3,9 3,11', style:'fill:'+colors.accent }),
                    poly({ class:'logo-p-3', points:'11,9 9,9 9,9 11,9', style:'fill:'+colors.accent }),
                    poly({ class:'logo-p-4', points:'9,3 9,1 9,1 9,3',   style:'fill:'+colors.accent }),
                    poly({ class:'logo-p-5', points:'7,3 5,3 5,3 7,3',   style:'fill:'+colors.accent }),
        )))
    );
    return anime.timeline().add({
        targets:   '#transition',
        easing:    'easeInQuint',
        translateY: -window.innerHeight,
        duration:   500,
        offset:     0,
    }).add({
        targets:  '.logo-p-1',
        points:   '3,1 1,1 1,11, 3,11',
        duration: '175',
        easing:   'linear'
    }).add({
        targets:  '.logo-p-2',
        points:   '3,11 3,9 11,9 11,11',
        duration: '100',
        easing:   'linear'
    }).add({
        targets:  '.logo-p-3',
        points:   '11,9 9,9 9,1 11,1',
        duration: '75',
        easing:   'linear'
    }).add({
        targets:  '.logo-p-4',
        points:   '9,3 9,1 5,1 5,3',
        duration: '50',
        easing:   'linear'
    }).add({
        targets:  '.logo-p-5',
        points:   '7,3 5,3 5,7 7,7',
        duration: '25',
        easing:   'linear',
        complete: () => {
            $(document.body).css({ background });
            $('body div, nav').not('#transition, #transition-logo').remove();
        }
    }).add({
        targets:   '#transition',
        easing:    'easeOutQuint',
        translateY: window.innerHeight,
        delay:      500,
        duration:   500,
        complete:   callback
    });
};

global.goto = (href, color = colors.foreground) => {
    if(href === links.home) {
        location.href = href;
    } else {
        bottomUp(color, () => { location.href = href; });
    }
};

module.exports = { bottomUp };