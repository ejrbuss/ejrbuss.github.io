const colors    = require('../config/colors');
const links     = require('../config/links');
const Component = require('./component');
const $         = require('jquery');

const { classJoin } = require('../util');

module.exports = Component((attr, ...rest) => ({

    styles : {
        link : {
            margin : '2vw'
        },
        hover : {
            display : 'inline-block',
            '&::after' : {
                width      : 0,
                background : colors.accent,
                content    : '""',
                display    : 'block',
                height     : '2px',
                transition : 'width 0.3s',
                marginTop  : '0.34rem'
            },
            '&:hover::after' : {
                width : '100%'
            },
            '&.active::after' : {
                width : '100%'
            }
        },
        text : {
            color    :  colors.foreground,
            fontSize : '2.4rem',
        }
    },

    html({ a, span }, { link, hover, text }) {
        // Allow css overriding
        if(attr.styles) {
            link  = attr.styles.link  || link;
            hover = attr.styles.hover || hover;
            text  = attr.styles.text  || text;
        }
        // Manage link behavior
        const internal = links.internal(attr.href);
        attr.target    = attr.target  || (internal ? void(0) : '_blank');
        attr.onclick   = attr.onclick || (internal ? `goto('${attr.href}');` : void(0));
        // Concat classes
        attr.class = classJoin(attr.class, link,
            attr.hover === false
                ? ''
                : hover,
            attr.anaglyph === false
                ? 'btn btn-link'
                : 'anaglyph btn btn-link'
        );
        // Return html
        return a(attr, span({ class:text }, ...rest));
    },

    ready(target) {
        if(links.internal(attr.href)) {
            $(target).on('mousedown mouseup click', e => e.preventDefault());
        }
    }

}));