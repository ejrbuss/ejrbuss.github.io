const app = {
    set(object, path, data) {
        let parent;
        let finalKey;
        path.split(/\/+|\.+/).forEach(key => {
            finalKey = key;
            parent = object;
            object = object[key] = object[key] || {};
        });
        return parent[finalKey] = data;
    },
    get(object, path) {
        let parent;
        let finalKey;
        path.split(/\/+|\.+/).forEach(key => {
            finalKey = key;
            parent = object || {};
            object = object && object[key];
        });
        return parent[finalKey];
    }
};
app.set(app, 'color', {
    'red': {
        'lighten5': '#FFEBEE',
        'lighten4': '#FFCDD2',
        'lighten3': '#EF9A9A',
        'lighten2': '#E57373',
        'lighten1': '#EF5350',
        'base': '#F44336',
        'darken1': '#E53935',
        'darken2': '#D32F2F',
        'darken3': '#C62828',
        'darken4': '#B71C1C',
        'accent1': '#FF8A80',
        'accent2': '#FF5252',
        'accent3': '#FF1744',
        'accent4': '#D50000'
    },
    'pink': {
        'lighten5': '#FCE4EC',
        'lighten4': '#F8BBD0',
        'lighten3': '#F48FB1',
        'lighten2': '#F06292',
        'lighten1': '#EC407A',
        'base': '#E91E63',
        'darken1': '#D81B60',
        'darken2': '#C2185B',
        'darken3': '#AD1457',
        'darken4': '#880E4F',
        'accent1': '#FF80AB',
        'accent2': '#FF4081',
        'accent3': '#F50057',
        'accent4': '#C51162'
    },
    'purple': {
        'lighten5': '#F3E5F5',
        'lighten4': '#E1BEE7',
        'lighten3': '#CE93D8',
        'lighten2': '#BA68C8',
        'lighten1': '#AB47BC',
        'base': '#9C27B0',
        'darken1': '#8E24AA',
        'darken2': '#7B1FA2',
        'darken3': '#6A1B9A',
        'darken4': '#4A148C',
        'accent1': '#EA80FC',
        'accent2': '#E040FB',
        'accent3': '#D500F9',
        'accent4': '#AA00FF'
    },
    'deeppurple': {
        'lighten5': '#EDE7F6',
        'lighten4': '#D1C4E9',
        'lighten3': '#B39DDB',
        'lighten2': '#9575CD',
        'lighten1': '#7E57C2',
        'base': '#673AB7',
        'darken1': '#5E35B1',
        'darken2': '#512DA8',
        'darken3': '#4527A0',
        'darken4': '#311B92',
        'accent1': '#B388FF',
        'accent2': '#7C4DFF',
        'accent3': '#651FFF',
        'accent4': '#6200EA'
    },
    'indigo': {
        'lighten5': '#E8EAF6',
        'lighten4': '#C5CAE9',
        'lighten3': '#9FA8DA',
        'lighten2': '#7986CB',
        'lighten1': '#5C6BC0',
        'base': '#3F51B5',
        'darken1': '#3949AB',
        'darken2': '#303F9F',
        'darken3': '#283593',
        'darken4': '#1A237E',
        'accent1': '#8C9EFF',
        'accent2': '#536DFE',
        'accent3': '#3D5AFE',
        'accent4': '#304FFE'
    },
    'blue': {
        'lighten5': '#E3F2FD',
        'lighten4': '#BBDEFB',
        'lighten3': '#90CAF9',
        'lighten2': '#64B5F6',
        'lighten1': '#42A5F5',
        'base': '#2196F3',
        'darken1': '#1E88E5',
        'darken2': '#1976D2',
        'darken3': '#1565C0',
        'darken4': '#0D47A1',
        'accent1': '#82B1FF',
        'accent2': '#448AFF',
        'accent3': '#2979FF',
        'accent4': '#2962FF'
    },
    'lightblue': {
        'lighten5': '#E1F5FE',
        'lighten4': '#B3E5FC',
        'lighten3': '#81D4FA',
        'lighten2': '#4FC3F7',
        'lighten1': '#29B6F6',
        'base': '#03A9F4',
        'darken1': '#039BE5',
        'darken2': '#0288D1',
        'darken3': '#0277BD',
        'darken4': '#01579B',
        'accent1': '#80D8FF',
        'accent2': '#40C4FF',
        'accent3': '#00B0FF',
        'accent4': '#0091EA'
    },
    'cyan': {
        'lighten5': '#E0F7FA',
        'lighten4': '#B2EBF2',
        'lighten3': '#80DEEA',
        'lighten2': '#4DD0E1',
        'lighten1': '#26C6DA',
        'base': '#00BCD4',
        'darken1': '#00ACC1',
        'darken2': '#0097A7',
        'darken3': '#00838F',
        'darken4': '#006064',
        'accent1': '#84FFFF',
        'accent2': '#18FFFF',
        'accent3': '#00E5FF',
        'accent4': '#00B8D4'
    },
    'teal': {
        'lighten5': '#E0F2F1',
        'lighten4': '#B2DFDB',
        'lighten3': '#80CBC4',
        'lighten2': '#4DB6AC',
        'lighten1': '#26A69A',
        'base': '#009688',
        'darken1': '#00897B',
        'darken2': '#00796B',
        'darken3': '#00695C',
        'darken4': '#004D40',
        'accent1': '#A7FFEB',
        'accent2': '#64FFDA',
        'accent3': '#1DE9B6',
        'accent4': '#00BFA5'
    },
    'green': {
        'lighten5': '#E8F5E9',
        'lighten4': '#C8E6C9',
        'lighten3': '#A5D6A7',
        'lighten2': '#81C784',
        'lighten1': '#66BB6A',
        'base': '#4CAF50',
        'darken1': '#43A047',
        'darken2': '#388E3C',
        'darken3': '#2E7D32',
        'darken4': '#1B5E20',
        'accent1': '#B9F6CA',
        'accent2': '#69F0AE',
        'accent3': '#00E676',
        'accent4': '#00C853'
    },
    'lightgreen': {
        'lighten5': '#F1F8E9',
        'lighten4': '#DCEDC8',
        'lighten3': '#C5E1A5',
        'lighten2': '#AED581',
        'lighten1': '#9CCC65',
        'base': '#8BC34A',
        'darken1': '#7CB342',
        'darken2': '#689F38',
        'darken3': '#558B2F',
        'darken4': '#33691E',
        'accent1': '#CCFF90',
        'accent2': '#B2FF59',
        'accent3': '#76FF03',
        'accent4': '#64DD17'
    },
    'lime': {
        'lighten5': '#F9FBE7',
        'lighten4': '#F0F4C3',
        'lighten3': '#E6EE9C',
        'lighten2': '#DCE775',
        'lighten1': '#D4E157',
        'base': '#CDDC39',
        'darken1': '#C0CA33',
        'darken2': '#AFB42B',
        'darken3': '#9E9D24',
        'darken4': '#827717',
        'accent1': '#F4FF81',
        'accent2': '#EEFF41',
        'accent3': '#C6FF00',
        'accent4': '#AEEA00'
    },
    'yellow': {
        'lighten5': '#FFFDE7',
        'lighten4': '#FFF9C4',
        'lighten3': '#FFF59D',
        'lighten2': '#FFF176',
        'lighten1': '#FFEE58',
        'base': '#FFEB3B',
        'darken1': '#FDD835',
        'darken2': '#FBC02D',
        'darken3': '#F9A825',
        'darken4': '#F57F17',
        'accent1': '#FFFF8D',
        'accent2': '#FFFF00',
        'accent3': '#FFEA00',
        'accent4': '#FFD600'
    },
    'amber': {
        'lighten5': '#FFF8E1',
        'lighten4': '#FFECB3',
        'lighten3': '#FFE082',
        'lighten2': '#FFD54F',
        'lighten1': '#FFCA28',
        'base': '#FFC107',
        'darken1': '#FFB300',
        'darken2': '#FFA000',
        'darken3': '#FF8F00',
        'darken4': '#FF6F00',
        'accent1': '#FFE57F',
        'accent2': '#FFD740',
        'accent3': '#FFC400',
        'accent4': '#FFAB00'
    },
    'orange': {
        'lighten5': '#FFF3E0',
        'lighten4': '#FFE0B2',
        'lighten3': '#FFCC80',
        'lighten2': '#FFB74D',
        'lighten1': '#FFA726',
        'base': '#FF9800',
        'darken1': '#FB8C00',
        'darken2': '#F57C00',
        'darken3': '#EF6C00',
        'darken4': '#E65100',
        'accent1': '#FFD180',
        'accent2': '#FFAB40',
        'accent3': '#FF9100',
        'accent4': '#FF6D00'
    },
    'deeporange': {
        'lighten5': '#FBE9E7',
        'lighten4': '#FFCCBC',
        'lighten3': '#FFAB91',
        'lighten2': '#FF8A65',
        'lighten1': '#FF7043',
        'base': '#FF5722',
        'darken1': '#F4511E',
        'darken2': '#E64A19',
        'darken3': '#D84315',
        'darken4': '#BF360C',
        'accent1': '#FF9E80',
        'accent2': '#FF6E40',
        'accent3': '#FF3D00',
        'accent4': '#DD2C00'
    },
    'brown': {
        'lighten5': '#EFEBE9',
        'lighten4': '#D7CCC8',
        'lighten3': '#BCAAA4',
        'lighten2': '#A1887F',
        'lighten1': '#8D6E63',
        'base': '#795548',
        'darken1': '#6D4C41',
        'darken2': '#5D4037',
        'darken3': '#4E342E',
        'darken4': '#3E2723'
    },
    'grey': {
        'lighten5': '#FAFAFA',
        'lighten4': '#F5F5F5',
        'lighten3': '#EEEEEE',
        'lighten2': '#E0E0E0',
        'lighten1': '#BDBDBD',
        'base': '#9E9E9E',
        'darken1': '#757575',
        'darken2': '#616161',
        'darken3': '#424242',
        'darken4': '#212121'
    },
    'bluegrey': {
        'lighten5': '#ECEFF1',
        'lighten4': '#CFD8DC',
        'lighten3': '#B0BEC5',
        'lighten2': '#90A4AE',
        'lighten1': '#78909C',
        'base': '#607D8B',
        'darken1': '#546E7A',
        'darken2': '#455A64',
        'darken3': '#37474F',
        'darken4': '#263238'
    },
    'black': '#000000',
    'white': '#FFFFFF'
});
app.set(app, 'link', {
    'github': 'https://github.com/ejrbuss',
    'twitter': '',
    'linkedin': ''
});
app.set(app, 'content/home', '<h1 id="home-page">Home Page</h1>\n<p>Here is some paragraph content</p>\n');
app.set(app, 'data/data', 'hello');
app.set(app, 'data/test', {
    'a': 4,
    'b': 7,
    'c': 8
});
app.set(app, 'template/footer', function () {
    module = {};
    ;
    var templatizer = {};
    templatizer['base'] = function tmpl_base(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function (content, footer, header, title) {
            buf.push('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="ejrbuss.github.io"><meta name="author" content="ejrbuss"><title>' + jade.escape((jade_interp = title) == null ? '' : jade_interp) + '</title><!-- Styles--><link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" type="text/css" href="css/materialize.min.css"><link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="css/materialize.bootstrap.fill.css"><link rel="stylesheet" type="text/css" href="css/animate.css"><link rel="stylesheet" type="text/css" href="css/ejrbuss.github.io.css"><!-- Scripts--><script type="text/javascript" src="js/jade-runtime.js"></script><script type="text/javascript" src="js/jquery.min.js"></script><script type="text/javascript" src="js/effects.min.js"></script><script type="text/javascript" src="js/easing.js"></script><script type="text/javascript" src="js/jquery.colors.min.js"></script><script type="text/javascript" src="js/materialize.min.js"></script><script type="text/javascript" src="js/app.js"></script><script type="text/javascript" src="js/base.js"></script><!-- mobile--><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><header>' + ((jade_interp = header) == null ? '' : jade_interp) + '</header><div class="content">' + ((jade_interp = content) == null ? '' : jade_interp) + '</div><footer>' + ((jade_interp = footer) == null ? '' : jade_interp) + '</footer></body></html>');
        }.call(this, 'content' in locals_for_with ? locals_for_with.content : typeof content !== 'undefined' ? content : undefined, 'footer' in locals_for_with ? locals_for_with.footer : typeof footer !== 'undefined' ? footer : undefined, 'header' in locals_for_with ? locals_for_with.header : typeof header !== 'undefined' ? header : undefined, 'title' in locals_for_with ? locals_for_with.title : typeof title !== 'undefined' ? title : undefined));
        return buf.join('');
    };
    templatizer['footer'] = function tmpl_footer(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless black"><div class="col s12 white-text center-align"><p><br/><br/>Created with love and care by<code><span class="red-text">' + jade.escape((jade_interp = ' <ejrbuss> ') == null ? '' : jade_interp) + '</span></code>in 2017</p></div><div class="col s12 center-align"><ul class="inline"><li class="pointer hover"><a onclick="redirect(app.link.twitter)"><i class="fa fa-lg fa-twitter white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.linkedin)"><i class="fa fa-lg fa-linkedin white-text"></i></a></li></ul></div></div><div class="row marginless black v-fill-1"></div>');
        return buf.join('');
    };
    templatizer['header'] = function tmpl_header() {
        return '<div class="row marginless inherit-background"><div id="nav-block" class="col s12 black"><ul class="tabs black"></ul><br/></div><div id="home-nav" class="col s5 offset-s1"><ul class="tabs black hover"><li class="tab"><a class="white-text">home</a></li><li class="tab"><a class="white-text">work</a></li><li class="tab"><a class="white-text">blog</a></li><li class="tab"><a class="white-text">contact</a></li><li class="tab"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text float-right"></i></a></li></ul></div></div>';
    };
    templatizer['home'] = function tmpl_home(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless"><div id="side-block" class="col s12 black"></div><div id="base-block" class="col s12 white"></div><div id="title" class="col s9 v-fill-12 offset-s3 valign-wrapper"><span class="red-text">code.</span><span class="change-text">is.life.</span></div><div id="sub-title" class="col s6 offset-s6"><h5><small>the personal website of eric buss<code>' + jade.escape((jade_interp = ' <ejrbuss@gmail.com>') == null ? '' : jade_interp) + '</code></small></h5></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>hi.</b></h1><p class="flow-text white-text">I am<span class="black-text">' + jade.escape((jade_interp = ' Eric Buss') == null ? '' : jade_interp) + '</span>, an up and coming developer.<br/>Take a look at my work.<br/><br/></p></div></div></div><div class="row marginless"><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div><div class="col s12 m6 l4 v-fill-4 yellow"></div><div class="col s12 m6 l4 v-fill-4 purple"></div><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>blog.</b></h1><p class="flow-text white-text">My most recent blog post</p></div></div></div><div class="row marginless"><div class="col s12"><div class="container"><br/><h1 class="center-align red-text">Some title</h1><p class="flow-text black-text">alskfa lks dfjl asdlk fa ms ldfka lsdfmla sdflas fadeI asdfa s dfasdf\nadkfnal sdkf jals dfjl ask dfjla klasd fj las kdjfl asjdflajs dlf jasl\najdfal kasdjf asflk alsdfj lasdf lsaflkk ak kl  k akal l ads...</p></div></div></div><script>$(document).ready(function() {\n\n    $(\'#side-block\')\n        .delay(200)\n        .switchClass(\'s12\', \'s6\', 1000, \'easeInCirc\');\n    $(\'#title .change-text\')\n        .css({ color : app.color.white })\n        .fadeOut(900, () => {\n            $(\'#title .change-text\')\n                .text(\'is.law.\')\n                .css({ color : app.color.black })\n                .fadeIn(0);\n        });\n    $(\'#sub-title\')\n        .css({ color : app.color.white })\n        .delay(200)\n        .animate({ color : app.color.black }, 1000, \'easeInCirc\');\n\n    $(document).scroll(function() {\n\n        let height = $(window).height();\n        let top    = $(window).scrollTop();\n        let resize = height - top;\n        //if(resize < height / 20) {\n        //    resize = height / 20;\n        //}\n        if(top < height) {\n            $(\'#title\').height(resize);\n            $(\'#sub-title\').css({ top : 60 * (resize / height) + \'vh\'});\n        }\n\n    });\n});</script>');
        return buf.join('');
    };
    module.exports = templatizer;
    return module.exports['footer'];
}());
app.set(app, 'template/header', function () {
    module = {};
    ;
    var templatizer = {};
    templatizer['base'] = function tmpl_base(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function (content, footer, header, title) {
            buf.push('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="ejrbuss.github.io"><meta name="author" content="ejrbuss"><title>' + jade.escape((jade_interp = title) == null ? '' : jade_interp) + '</title><!-- Styles--><link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" type="text/css" href="css/materialize.min.css"><link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="css/materialize.bootstrap.fill.css"><link rel="stylesheet" type="text/css" href="css/animate.css"><link rel="stylesheet" type="text/css" href="css/ejrbuss.github.io.css"><!-- Scripts--><script type="text/javascript" src="js/jade-runtime.js"></script><script type="text/javascript" src="js/jquery.min.js"></script><script type="text/javascript" src="js/effects.min.js"></script><script type="text/javascript" src="js/easing.js"></script><script type="text/javascript" src="js/jquery.colors.min.js"></script><script type="text/javascript" src="js/materialize.min.js"></script><script type="text/javascript" src="js/app.js"></script><script type="text/javascript" src="js/base.js"></script><!-- mobile--><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><header>' + ((jade_interp = header) == null ? '' : jade_interp) + '</header><div class="content">' + ((jade_interp = content) == null ? '' : jade_interp) + '</div><footer>' + ((jade_interp = footer) == null ? '' : jade_interp) + '</footer></body></html>');
        }.call(this, 'content' in locals_for_with ? locals_for_with.content : typeof content !== 'undefined' ? content : undefined, 'footer' in locals_for_with ? locals_for_with.footer : typeof footer !== 'undefined' ? footer : undefined, 'header' in locals_for_with ? locals_for_with.header : typeof header !== 'undefined' ? header : undefined, 'title' in locals_for_with ? locals_for_with.title : typeof title !== 'undefined' ? title : undefined));
        return buf.join('');
    };
    templatizer['footer'] = function tmpl_footer(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless black"><div class="col s12 white-text center-align"><p><br/><br/>Created with love and care by<code><span class="red-text">' + jade.escape((jade_interp = ' <ejrbuss> ') == null ? '' : jade_interp) + '</span></code>in 2017</p></div><div class="col s12 center-align"><ul class="inline"><li class="pointer hover"><a onclick="redirect(app.link.twitter)"><i class="fa fa-lg fa-twitter white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.linkedin)"><i class="fa fa-lg fa-linkedin white-text"></i></a></li></ul></div></div><div class="row marginless black v-fill-1"></div>');
        return buf.join('');
    };
    templatizer['header'] = function tmpl_header() {
        return '<div class="row marginless inherit-background"><div id="nav-block" class="col s12 black"><ul class="tabs black"></ul><br/></div><div id="home-nav" class="col s5 offset-s1"><ul class="tabs black hover"><li class="tab"><a class="white-text">home</a></li><li class="tab"><a class="white-text">work</a></li><li class="tab"><a class="white-text">blog</a></li><li class="tab"><a class="white-text">contact</a></li><li class="tab"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text float-right"></i></a></li></ul></div></div>';
    };
    templatizer['home'] = function tmpl_home(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless"><div id="side-block" class="col s12 black"></div><div id="base-block" class="col s12 white"></div><div id="title" class="col s9 v-fill-12 offset-s3 valign-wrapper"><span class="red-text">code.</span><span class="change-text">is.life.</span></div><div id="sub-title" class="col s6 offset-s6"><h5><small>the personal website of eric buss<code>' + jade.escape((jade_interp = ' <ejrbuss@gmail.com>') == null ? '' : jade_interp) + '</code></small></h5></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>hi.</b></h1><p class="flow-text white-text">I am<span class="black-text">' + jade.escape((jade_interp = ' Eric Buss') == null ? '' : jade_interp) + '</span>, an up and coming developer.<br/>Take a look at my work.<br/><br/></p></div></div></div><div class="row marginless"><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div><div class="col s12 m6 l4 v-fill-4 yellow"></div><div class="col s12 m6 l4 v-fill-4 purple"></div><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>blog.</b></h1><p class="flow-text white-text">My most recent blog post</p></div></div></div><div class="row marginless"><div class="col s12"><div class="container"><br/><h1 class="center-align red-text">Some title</h1><p class="flow-text black-text">alskfa lks dfjl asdlk fa ms ldfka lsdfmla sdflas fadeI asdfa s dfasdf\nadkfnal sdkf jals dfjl ask dfjla klasd fj las kdjfl asjdflajs dlf jasl\najdfal kasdjf asflk alsdfj lasdf lsaflkk ak kl  k akal l ads...</p></div></div></div><script>$(document).ready(function() {\n\n    $(\'#side-block\')\n        .delay(200)\n        .switchClass(\'s12\', \'s6\', 1000, \'easeInCirc\');\n    $(\'#title .change-text\')\n        .css({ color : app.color.white })\n        .fadeOut(900, () => {\n            $(\'#title .change-text\')\n                .text(\'is.law.\')\n                .css({ color : app.color.black })\n                .fadeIn(0);\n        });\n    $(\'#sub-title\')\n        .css({ color : app.color.white })\n        .delay(200)\n        .animate({ color : app.color.black }, 1000, \'easeInCirc\');\n\n    $(document).scroll(function() {\n\n        let height = $(window).height();\n        let top    = $(window).scrollTop();\n        let resize = height - top;\n        //if(resize < height / 20) {\n        //    resize = height / 20;\n        //}\n        if(top < height) {\n            $(\'#title\').height(resize);\n            $(\'#sub-title\').css({ top : 60 * (resize / height) + \'vh\'});\n        }\n\n    });\n});</script>');
        return buf.join('');
    };
    module.exports = templatizer;
    return module.exports['header'];
}());
app.set(app, 'template/base', function () {
    module = {};
    ;
    var templatizer = {};
    templatizer['base'] = function tmpl_base(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function (content, footer, header, title) {
            buf.push('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="ejrbuss.github.io"><meta name="author" content="ejrbuss"><title>' + jade.escape((jade_interp = title) == null ? '' : jade_interp) + '</title><!-- Styles--><link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" type="text/css" href="css/materialize.min.css"><link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="css/materialize.bootstrap.fill.css"><link rel="stylesheet" type="text/css" href="css/animate.css"><link rel="stylesheet" type="text/css" href="css/ejrbuss.github.io.css"><!-- Scripts--><script type="text/javascript" src="js/jade-runtime.js"></script><script type="text/javascript" src="js/jquery.min.js"></script><script type="text/javascript" src="js/effects.min.js"></script><script type="text/javascript" src="js/easing.js"></script><script type="text/javascript" src="js/jquery.colors.min.js"></script><script type="text/javascript" src="js/materialize.min.js"></script><script type="text/javascript" src="js/app.js"></script><script type="text/javascript" src="js/base.js"></script><!-- mobile--><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><header>' + ((jade_interp = header) == null ? '' : jade_interp) + '</header><div class="content">' + ((jade_interp = content) == null ? '' : jade_interp) + '</div><footer>' + ((jade_interp = footer) == null ? '' : jade_interp) + '</footer></body></html>');
        }.call(this, 'content' in locals_for_with ? locals_for_with.content : typeof content !== 'undefined' ? content : undefined, 'footer' in locals_for_with ? locals_for_with.footer : typeof footer !== 'undefined' ? footer : undefined, 'header' in locals_for_with ? locals_for_with.header : typeof header !== 'undefined' ? header : undefined, 'title' in locals_for_with ? locals_for_with.title : typeof title !== 'undefined' ? title : undefined));
        return buf.join('');
    };
    templatizer['footer'] = function tmpl_footer(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless black"><div class="col s12 white-text center-align"><p><br/><br/>Created with love and care by<code><span class="red-text">' + jade.escape((jade_interp = ' <ejrbuss> ') == null ? '' : jade_interp) + '</span></code>in 2017</p></div><div class="col s12 center-align"><ul class="inline"><li class="pointer hover"><a onclick="redirect(app.link.twitter)"><i class="fa fa-lg fa-twitter white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.linkedin)"><i class="fa fa-lg fa-linkedin white-text"></i></a></li></ul></div></div><div class="row marginless black v-fill-1"></div>');
        return buf.join('');
    };
    templatizer['header'] = function tmpl_header() {
        return '<div class="row marginless inherit-background"><div id="nav-block" class="col s12 black"><ul class="tabs black"></ul><br/></div><div id="home-nav" class="col s5 offset-s1"><ul class="tabs black hover"><li class="tab"><a class="white-text">home</a></li><li class="tab"><a class="white-text">work</a></li><li class="tab"><a class="white-text">blog</a></li><li class="tab"><a class="white-text">contact</a></li><li class="tab"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text float-right"></i></a></li></ul></div></div>';
    };
    templatizer['home'] = function tmpl_home(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless"><div id="side-block" class="col s12 black"></div><div id="base-block" class="col s12 white"></div><div id="title" class="col s9 v-fill-12 offset-s3 valign-wrapper"><span class="red-text">code.</span><span class="change-text">is.life.</span></div><div id="sub-title" class="col s6 offset-s6"><h5><small>the personal website of eric buss<code>' + jade.escape((jade_interp = ' <ejrbuss@gmail.com>') == null ? '' : jade_interp) + '</code></small></h5></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>hi.</b></h1><p class="flow-text white-text">I am<span class="black-text">' + jade.escape((jade_interp = ' Eric Buss') == null ? '' : jade_interp) + '</span>, an up and coming developer.<br/>Take a look at my work.<br/><br/></p></div></div></div><div class="row marginless"><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div><div class="col s12 m6 l4 v-fill-4 yellow"></div><div class="col s12 m6 l4 v-fill-4 purple"></div><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>blog.</b></h1><p class="flow-text white-text">My most recent blog post</p></div></div></div><div class="row marginless"><div class="col s12"><div class="container"><br/><h1 class="center-align red-text">Some title</h1><p class="flow-text black-text">alskfa lks dfjl asdlk fa ms ldfka lsdfmla sdflas fadeI asdfa s dfasdf\nadkfnal sdkf jals dfjl ask dfjla klasd fj las kdjfl asjdflajs dlf jasl\najdfal kasdjf asflk alsdfj lasdf lsaflkk ak kl  k akal l ads...</p></div></div></div><script>$(document).ready(function() {\n\n    $(\'#side-block\')\n        .delay(200)\n        .switchClass(\'s12\', \'s6\', 1000, \'easeInCirc\');\n    $(\'#title .change-text\')\n        .css({ color : app.color.white })\n        .fadeOut(900, () => {\n            $(\'#title .change-text\')\n                .text(\'is.law.\')\n                .css({ color : app.color.black })\n                .fadeIn(0);\n        });\n    $(\'#sub-title\')\n        .css({ color : app.color.white })\n        .delay(200)\n        .animate({ color : app.color.black }, 1000, \'easeInCirc\');\n\n    $(document).scroll(function() {\n\n        let height = $(window).height();\n        let top    = $(window).scrollTop();\n        let resize = height - top;\n        //if(resize < height / 20) {\n        //    resize = height / 20;\n        //}\n        if(top < height) {\n            $(\'#title\').height(resize);\n            $(\'#sub-title\').css({ top : 60 * (resize / height) + \'vh\'});\n        }\n\n    });\n});</script>');
        return buf.join('');
    };
    module.exports = templatizer;
    return module.exports['base'];
}());
app.set(app, 'template/home', function () {
    module = {};
    ;
    var templatizer = {};
    templatizer['base'] = function tmpl_base(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function (content, footer, header, title) {
            buf.push('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="description" content="ejrbuss.github.io"><meta name="author" content="ejrbuss"><title>' + jade.escape((jade_interp = title) == null ? '' : jade_interp) + '</title><!-- Styles--><link rel="stylesheet" href="http://fonts.googleapis.com/icon?family=Material+Icons"><link rel="stylesheet" type="text/css" href="css/materialize.min.css"><link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"><link rel="stylesheet" type="text/css" href="css/materialize.bootstrap.fill.css"><link rel="stylesheet" type="text/css" href="css/animate.css"><link rel="stylesheet" type="text/css" href="css/ejrbuss.github.io.css"><!-- Scripts--><script type="text/javascript" src="js/jade-runtime.js"></script><script type="text/javascript" src="js/jquery.min.js"></script><script type="text/javascript" src="js/effects.min.js"></script><script type="text/javascript" src="js/easing.js"></script><script type="text/javascript" src="js/jquery.colors.min.js"></script><script type="text/javascript" src="js/materialize.min.js"></script><script type="text/javascript" src="js/app.js"></script><script type="text/javascript" src="js/base.js"></script><!-- mobile--><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><header>' + ((jade_interp = header) == null ? '' : jade_interp) + '</header><div class="content">' + ((jade_interp = content) == null ? '' : jade_interp) + '</div><footer>' + ((jade_interp = footer) == null ? '' : jade_interp) + '</footer></body></html>');
        }.call(this, 'content' in locals_for_with ? locals_for_with.content : typeof content !== 'undefined' ? content : undefined, 'footer' in locals_for_with ? locals_for_with.footer : typeof footer !== 'undefined' ? footer : undefined, 'header' in locals_for_with ? locals_for_with.header : typeof header !== 'undefined' ? header : undefined, 'title' in locals_for_with ? locals_for_with.title : typeof title !== 'undefined' ? title : undefined));
        return buf.join('');
    };
    templatizer['footer'] = function tmpl_footer(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless black"><div class="col s12 white-text center-align"><p><br/><br/>Created with love and care by<code><span class="red-text">' + jade.escape((jade_interp = ' <ejrbuss> ') == null ? '' : jade_interp) + '</span></code>in 2017</p></div><div class="col s12 center-align"><ul class="inline"><li class="pointer hover"><a onclick="redirect(app.link.twitter)"><i class="fa fa-lg fa-twitter white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text"></i></a></li><li class="pointer hover"><a onclick="redirect(app.link.linkedin)"><i class="fa fa-lg fa-linkedin white-text"></i></a></li></ul></div></div><div class="row marginless black v-fill-1"></div>');
        return buf.join('');
    };
    templatizer['header'] = function tmpl_header() {
        return '<div class="row marginless inherit-background"><div id="nav-block" class="col s12 black"><ul class="tabs black"></ul><br/></div><div id="home-nav" class="col s5 offset-s1"><ul class="tabs black hover"><li class="tab"><a class="white-text">home</a></li><li class="tab"><a class="white-text">work</a></li><li class="tab"><a class="white-text">blog</a></li><li class="tab"><a class="white-text">contact</a></li><li class="tab"><a onclick="redirect(app.link.github)"><i class="fa fa-lg fa-github-alt white-text float-right"></i></a></li></ul></div></div>';
    };
    templatizer['home'] = function tmpl_home(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="row marginless"><div id="side-block" class="col s12 black"></div><div id="base-block" class="col s12 white"></div><div id="title" class="col s9 v-fill-12 offset-s3 valign-wrapper"><span class="red-text">code.</span><span class="change-text">is.life.</span></div><div id="sub-title" class="col s6 offset-s6"><h5><small>the personal website of eric buss<code>' + jade.escape((jade_interp = ' <ejrbuss@gmail.com>') == null ? '' : jade_interp) + '</code></small></h5></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>hi.</b></h1><p class="flow-text white-text">I am<span class="black-text">' + jade.escape((jade_interp = ' Eric Buss') == null ? '' : jade_interp) + '</span>, an up and coming developer.<br/>Take a look at my work.<br/><br/></p></div></div></div><div class="row marginless"><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div><div class="col s12 m6 l4 v-fill-4 yellow"></div><div class="col s12 m6 l4 v-fill-4 purple"></div><div class="col s12 m6 l4 v-fill-4 blue"></div><div class="col s12 m6 l4 v-fill-4 green"></div></div><div class="row marginless"><div class="col s12 red"><div class="container center-align"><br/><h1 class="black-text"><b>blog.</b></h1><p class="flow-text white-text">My most recent blog post</p></div></div></div><div class="row marginless"><div class="col s12"><div class="container"><br/><h1 class="center-align red-text">Some title</h1><p class="flow-text black-text">alskfa lks dfjl asdlk fa ms ldfka lsdfmla sdflas fadeI asdfa s dfasdf\nadkfnal sdkf jals dfjl ask dfjla klasd fj las kdjfl asjdflajs dlf jasl\najdfal kasdjf asflk alsdfj lasdf lsaflkk ak kl  k akal l ads...</p></div></div></div><script>$(document).ready(function() {\n\n    $(\'#side-block\')\n        .delay(200)\n        .switchClass(\'s12\', \'s6\', 1000, \'easeInCirc\');\n    $(\'#title .change-text\')\n        .css({ color : app.color.white })\n        .fadeOut(900, () => {\n            $(\'#title .change-text\')\n                .text(\'is.law.\')\n                .css({ color : app.color.black })\n                .fadeIn(0);\n        });\n    $(\'#sub-title\')\n        .css({ color : app.color.white })\n        .delay(200)\n        .animate({ color : app.color.black }, 1000, \'easeInCirc\');\n\n    $(document).scroll(function() {\n\n        let height = $(window).height();\n        let top    = $(window).scrollTop();\n        let resize = height - top;\n        //if(resize < height / 20) {\n        //    resize = height / 20;\n        //}\n        if(top < height) {\n            $(\'#title\').height(resize);\n            $(\'#sub-title\').css({ top : 60 * (resize / height) + \'vh\'});\n        }\n\n    });\n});</script>');
        return buf.join('');
    };
    module.exports = templatizer;
    return module.exports['home'];
}());