const type      = require('type-mark');
const colors    = require('../config/colors');
const Component = require('./component');

const { classJoin } = require('../util');


module.exports = Component((attr, ...rest) => ({

    styles : {
        container : {
            position : 'fixed',
            top      : '16vh'
        },
        link : {
            overflow  : 'auto',
            color     : colors.background + ' !important',
            '&:hover' : {
                color : colors.accent + ' !important'
            }
        },
        sectionLink : {
            fontWeight : 'bold',
            fontFamily : 'Fira Mono'
        }
    },

    html({ div, ul, li, a, b }, { container, link, sectionLink }) {

        const generate = list => {
            const html = '';
            if(list.length) {
                const inner = list.reduce((acc, item, i) => {
                    if(type(item).array) {
                        return acc;
                    }
                    if(type(list[i + 1]).array) {
                        acc.push(li({ class:'nav-item' },
                            a({
                                href:'#' + item.replace(/\s/g, '-'),
                                class:classJoin(sectionLink, link)
                            }, b(item)),
                            ...generate(list[i + 1])
                        ));
                    } else {
                        acc.push(li({ class:'nav-item' },
                            a({ href:'#' + item.replace(/\s/g, '-'), class:link }, item)
                        ));
                    }
                    return acc;
                }, []);
                html = ul({ class:'nav' }, ...inner);
            }
            return html;
        };

        return div({ class:container }, generate(...rest));
    }

}));