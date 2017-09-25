const colors  = require('../config/colors');
const links   = require('../config/links');
const $       = require('jquery');

const Component = require('../components/component');
const SiteLink  = require('../components/site-link');
const Webglogo  = require('../components/webglogo');

const { bottomUp }   = require('../lib/transition');
const { classJoin }  = require('../util');

const home = () => {
    $(document.body).css({ overflow: 'hidden' });
    bottomUp(colors.background, () => {

        document.body.appendChild(Component((attr, ...rest) => ({

            styles : {
                navbar : {
                    zIndex     : 100,
                    background : 'none'
                },
                footer : {
                    zIndex     : 100,
                    marginTop  : 'calc(100vh - 14em)',
                    background : 'none'
                },
            },

            html({ header, section, div, a, i }, { navbar, footer }) {
                return a({ id:'clickable', href:'#' },
                    div({ id:'content' },
                        header({ class:classJoin('navbar', navbar) },
                            section({ class:classJoin('navbar-section', navbar) },
                                div({ class:'centerd text-center', style:'width:100%;' },
                                    SiteLink({ href:links.work  }, 'work' ),
                                    SiteLink({ href:links.about }, 'about'),
                                    SiteLink({ href:links.blog  }, 'blog' ),
                                )
                        )),
                        header({ class:classJoin('navbar', footer) },
                            section({ class:classJoin('navbar-section', navbar) },
                                div({ class:'centered text-center', style:'width:100%;' },
                                    SiteLink({ href:links.twitter  }, i({ class:'fa fa-twitter',  'aria-hidden':true })),
                                    SiteLink({ href:links.github   }, i({ class:'fa fa-github',   'aria-hidden':true })),
                                    SiteLink({ href:links.linkedin }, i({ class:'fa fa-linkedin', 'aria-hidden':true }))
                                )
                        )),
                        Webglogo()
                    )
                );
            },

            ready() {
                $('#content').hide();
                $('#content').fadeIn(1000);
            }

        }))());
    });
};

module.exports = home;