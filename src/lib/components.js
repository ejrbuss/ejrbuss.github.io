const colors  = require('../config/colors');
const anime   = require('./anime');
const domjs   = require('domjs')(document);
const $       = require('jquery');

const { style, classJoin } = require('../util');

const { div, a, h4 } = domjs.ns;
const { classes }    = style({
    link: {
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
        marginBottom: '0.25em'
    }
});

const navLink = (text, link='#', margin='2vw') => {

    const internal = link.startsWith('/');
    const href     = internal ? '#' : link;
    const target   = internal ? ''  : '_blank';
    const onclick  = internal ? `goto("${link}");` : '';

    const attr = {
        href, target, onclick,
        class:classJoin('btn', 'btn-link anaglyph', classes.link),
        style:`margin:${margin};`
    };
    return a(attr, h4({ class:classes.text }, text));
};


const iconLink = (text, href, margin) => navLink(text, href, '1vw');

module.exports = { navLink, iconLink };