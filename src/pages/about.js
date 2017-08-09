const domjs  = require('domjs')(document);
const tetris = require('../tetris');

const { style, classJoin } = require('../util');
const { icon }             = require('../lib/transition');

const { classes } = style({
    image: {
        width:  '35vh',
        height: '35vh'
    }, center: {
        width: '100%',
    }, canvas: {
        width:  '40vh',
        height: '40vh',
        marginLeft: 'calc(50vw - 18vh)'
    }
});

const about = () => {

    const { div, img, canvas } = domjs.ns;
    const [ html, cb ]         = icon();

    document.body.appendChild(
        div({ id:'content' },
            html,
            div({ class:classJoin('centered', classes.center) },
                canvas({ class:classes.canvas })
            ),
            div({ class:'container' },
                div({ class:'columns' },
                    div({ class:'column hide-md col-1' }),
                    div({ class:'column hide-md col-2' } /* nav would go here */),
                    div({ class:'column hide-xs show-md col-md-2 col-1'}),
                    div({ class:'content column col-xs-12 col-sm-10 col-md-8 col-6'}),
                    div({ class:'column hide-xs col-sm-1 col-lg-2' })
        )))
    );
    $('#content').hide().fadeIn(500);
    cb();
    $.ajax({ url: '/text/about', success: html => $('.content').html(html) });
    tetris($('canvas').get(0));
};

module.exports = about;