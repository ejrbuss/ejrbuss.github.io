const colors    = require('../config/colors');
const links     = require('../config/links');
const Component = require('./component');
const SiteLink  = require('./site-link');

const { classJoin } = require('../util');

module.exports = Component((attr, ...rest) => ({

    styles : {
        sideLink : {
            boxShadow : '1px 0 0 0 #eaeaea, 2px 0 0 0 #f3f3f3',
            position  : 'fixed',
            right     : 0,
            top       : '40vh'
        },
        text : {
            color    :  colors.background,
            fontSize : '2.4rem',
        },
        link : {
            margin : '1em'
        },
    },

    html({ div, br, i }, { sideLink, text, link }) {
        return div({ class:classJoin('hide-sm', sideLink) },
            SiteLink({ styles:{ text, link }, href:links.twitter },
                i({ class:'fa fa-twitter',  'aria-hidden':true })),
            br(),
            SiteLink({ styles:{ text, link }, href:links.github },
                i({ class:'fa fa-github',   'aria-hidden':true })),
            br(),
            SiteLink({ styles:{ text, link }, href:links.linkedin },
                i({ class:'fa fa-linkedin', 'aria-hidden':true }))
        );
    }

}));