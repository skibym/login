'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var config = require('./config');

/**
 * Executa o Parker 
 *
 * @returns {Pipe}
 */
function run() {

  return gulp.src(config.parkerOptions.source)
    .pipe(plugins.parker(config.parkerOptions));

}

/**
 * // Limpa o arquivo gerado pelo parker, previne que o arquivo cresça
 *
 * @returns {Pipe}
 */
function clear(){

   return gulp.src(config.parkerOptions.file, { read: false })
    .pipe(plugins.clean());

}

module.exports = {
  run : run,
  clear: clear
};