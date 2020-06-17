'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var cssConfig = require("./stylelintrc-css");
var scssConfig = require("./stylelintrc-scss");
var config = require('./config');

/**
 * Executa o formatter
 *
 * @returns {Pipe}
 */
function css() {

  return gulp.src('src/css/*.css')
    .pipe(plugins.stylefmt({ config: cssConfig }))
    .pipe(gulp.dest('src/css/'));

}

/**
 * Executa o formatter
 *
 * @returns {Pipe}
 */
function scss() {

  return gulp.src(["src/sass/**/*.scss", "!src/sass/main.themed.scss"])
    .pipe(plugins.stylefmt({ config: scssConfig }))
    .pipe(gulp.dest('src/sass/'));

}

module.exports = {
  css: css,
  scss: scss
};
