const colors  = require('../config/colors');
const links   = require('../config/links');
const iswebgl = require('detector-webgl');
const domjs   = require('domjs')(document);
const $       = require('jquery');

const { bottomUp }          = require('../lib/transition');
const { navLink, iconLink } = require('../lib/components');
const { init, animate }     = require('../logo-graphic');
const { style, classJoin }  = require('../util');

const { classes } = style({
        navbar: {
        zIndex:     100,
        background: 'none'
    },
    footer: {
        zIndex:     100,
        marginTop:  'calc(100vh - 14em)',
        background: 'none'
    },
    canvas: {
        zIndex:   -100,
        top:      0,
        left:     0,
        position: 'fixed',
        width:    '100vw',
        height:   '100vh',
        overflow: 'hidden',
    }
});

const home = () => {
    bottomUp(colors.background, () => {
        if(iswebgl) {
            const { header, section, div, a, i } = domjs.ns;
            $(document.body).css({ overflow: 'hidden' });
            document.body.appendChild(
                a({ id:'clickable', href:'#' },
                    div({ id:'content' },
                        header({ class:classJoin('navbar', classes.navbar) },
                            section({ class:classJoin('navbar-section', classes.navbar) },
                                div({ class:'centerd text-center', style:'width:100%;' },
                                    navLink('work',  links.work),
                                    navLink('about', links.about),
                                    navLink('blog',  links.blog)
                                )
                        )),
                        header({ class:classJoin('navbar', classes.footer) },
                            section({ class:classJoin('navbar-section', classes.navbar) },
                                div({ class:'centerd text-center', style:'width:100%;' },
                                    iconLink(i({ class:'fa fa-twitter',  'aria-hidden':true }), links.twitter),
                                    iconLink(i({ class:'fa fa-github',   'aria-hidden':true }), links.github),
                                    iconLink(i({ class:'fa fa-linkedin', 'aria-hidden':true }), links.linkedin)
                                )
                        )),
                        init(document.body),
            )));
            $('#content').hide();
            $('canvas').addClass(classes.canvas);
            animate();
            $('#content').fadeIn(1000);
        } else {
            document.body.appendChild(document.createTextNode('No webgl >_<'));
        }
    });
};

module.exports = home;