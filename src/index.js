const $ = require('jquery');
const { match, contains } = require('./util');

// Dependency globals
global.THREE  = require('three');
global.jQuery = require('jQuery');
global.$      = jQuery;

// Page dispatch
$(document).ready(() => {
    match(location.href)(
        contains('work'),  require('./pages/blog'),
        contains('about'), require('./pages/about'),
        contains('blog'),  require('./pages/blog'),
        match.else,        require('./pages/home')
    );
});