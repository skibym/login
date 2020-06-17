'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var config = require('./config');

/**
 * Copia CSS
 *
 * @returns {Pipe}
 */
function copyCss() {

  return gulp.src(config.distOptions.css.source)
    .pipe(gulp.dest(config.distOptions.css.destination))

}

/**
 * Copia o HTML
 *
 * @returns {Pipe}
 */
function copyHtml() {

  return gulp.src(config.distOptions.html.source)
    .pipe(gulp.dest(config.distOptions.html.destination))

}

/**
 * Copia as Images
 *
 * @returns {Pipe}
 */
function copyImages() {

  return gulp.src(config.distOptions.images.source)
    .pipe(plugins.imagemin([
      plugins.imagemin.jpegtran({ progressive: true }),
      plugins.imagemin.optipng({ optimizationLevel: 5 }),
      plugins.imagemin.svgo({
        plugins: [
          { cleanupIDs: false },
          { removeViewBox: true },
          { removeUselessStrokeAndFill: true }
        ]
      })
    ]))
    .pipe(gulp.dest(config.distOptions.images.destination))

}

module.exports = {
  copyCss: copyCss,
  copyHtml: copyHtml,
  copyImages: copyImages
};
