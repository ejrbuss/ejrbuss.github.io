var colors = require('../config/colors');
var domjs = require('domjs')(document);
var work = function () {
    var _a = domjs.ns, div = _a.div, h2 = _a.h2;
    document.body.appendChild(div({ id: 'content' }, h2('Work in Progress')));
    $('#content').hide().fadeIn(500);
};
module.exports = work;
//# sourceMappingURL=work.js.map