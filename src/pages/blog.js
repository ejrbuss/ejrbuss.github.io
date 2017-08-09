const colors = require('../config/colors');
const domjs  = require('domjs')(document);

const blog = () => {

    const { div, h2 } = domjs.ns;

    document.body.appendChild(
        div({ id:'content' },
            h2('Work in Progress')
        )
    );
    $('#content').hide().fadeIn(500);
};

module.exports = blog;