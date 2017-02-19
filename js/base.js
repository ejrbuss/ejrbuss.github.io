function redirect(url) {
    $(document).delay(300).queue(function() {
        location.href = url;
    });
}

console.log(
    '%c                                                \n' +
    '        _     __                           __     \n' +
    ' ___   (_)___/ /  __ _____ ___   ___  ___ / /_    \n' +
    '/ -_) / / __/ _ \\/ // (_-<(_-<_ / _ \\/ -_) __/  \n' +
    '\\__/_/ /_/ /_.__/\\_,_/___/___(_)_//_/\\__/\\__/ \n' +
    '    |___/                                       \n\n' +
    '    contact me at <ejrbuss@gmail.com>           \n\n',
    'color:#F44336'
);