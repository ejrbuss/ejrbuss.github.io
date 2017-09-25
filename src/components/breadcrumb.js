const colors    = require('../config/colors');
const links     = require('../config/links');
const Component = require('./component');
const $         = require('jquery');

const { classJoin } = require('../util');

module.exports = Component((attr, ...rest) => ({

    html({ ul, li, a }, { link, text }) {
        return ul({ class:'breadcrumb' },
            ...attr.path.map(([name, link]) =>
                li({ class:'breadcrumb-item' }, a({ href:link }, name) )
            )
        );
    },

}));