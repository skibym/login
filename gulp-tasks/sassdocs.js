'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var sassdoc = require('sassdoc');

var config = require('./config');

/**
 * Builda a documentação
 *
 * @returns {Pipe}
 */
function build() {

  return gulp.src(config.sass.source)
    .pipe(sassdoc(config.sass.sassdocOptions))

}

/**
 * Copia  a documentação
 *
 * @returns {Pipe}
 */
function publish() {

  return gulp.src(config.sass.sassdocOptions.publishFrom)
    .pipe(gulp.dest(config.sass.sassdocOptions.publishTo));

}

module.exports = {
  build: build,
  publish: publish
};