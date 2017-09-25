const Component = require('./component');
const iswebgl   = require('detector-webgl');
const $         = require('jquery');

const { classJoin } = require('../util');
const { init, animate } = require('../logo-graphic');

module.exports = Component((attr, ...rest) => ({

    styles : {
        top        :  0,
        left       :  0,
        zIndex     : -100,
        position   : 'fixed',
        width      : '100vw',
        height     : '100vh',
        overflow   : 'hidden',
    },

    html({ div, h1 }, { style }) {
        if(iswebgl) {
            return div();
        } else {
            return div({ class:classJoin('centered text-center', style) },
                h1({ style:'line-height:100vh;' }, 'No webgl >_<')
            );
        }
    },

    ready(target) {
        if(iswebgl) {
            target.appendChild(init());
            $('canvas').addClass(this.styleClasses.style);
            animate();
        }
    }

}));