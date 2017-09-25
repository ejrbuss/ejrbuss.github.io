const gulp        = require('gulp');
const sass        = require('gulp-sass');
const concat      = require('gulp-concat');
const minify      = require('gulp-minify-css');
const streamqueue = require('streamqueue');

const { exec } = require('child_process');

gulp.task('build-css', () =>
    streamqueue({ objectMode : true },
        gulp.src([
            './src/css/normalize.css',
            './src/css/spectre.min.css',
            './src/css/font-awesome.min.css'
        ])
            .pipe(concat('css-files.css')),
        gulp.src([ './src/css/styles.scss'])
            .pipe(sass())
            .pipe(concat('scss-files.scss'))
    )
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('./css'))
);