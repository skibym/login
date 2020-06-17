'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var config = require('./config');

/**
 * Transpila o Sass
 *
 * @returns {Pipe}
 */
function build() {

  return gulp.src(config.sass.source)
    .pipe(plugins.sassThemes(config.sass.sassThemesOptions.source))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.sass.compileOptions))
    .on('error', (error) => console.log(error))
    .pipe(plugins.postcss(config.postcssPlugins))
    .pipe(plugins.sourcemaps.write(config.sourcemaps.destination))
    .pipe(gulp.dest(config.sass.buildDestination));

}

module.exports = {
  build: build
};
