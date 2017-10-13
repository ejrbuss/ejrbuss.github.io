const Component    = require('./component');
const SideNav      = require('./side-nav');
const SiteNav      = require('./site-nav');
const SideLinks    = require('./side-links');

module.exports = Component((attr, ...rest) => ({

    html({ div, canvas }, { center, tetris }) {
        return div({ id:'content' },
            SiteNav({ page:attr.page }),
            SideLinks(),
            attr.frontmatter || div(),
            div({ class:'container' },
                div({ class:'columns' },
                    div({ class:'column hide-md col-1' }),
                    div({ class:'column hide-md col-2' }, attr.nav
                        ? SideNav({}, attr.nav)
                        : ''),
                    div({ class:'column hide-xs show-md col-md-2 col-1'}),
                    div({ class:'text column col-xs-12 col-sm-10 col-md-8 col-6'},
                        ...rest
                    ),
                    div({ class:'column hide-xs col-sm-1 col-lg-2' })
            ))
        );
    },

    ready() {
        $('#content').hide().fadeIn(500);
    }

}));