'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var fs = require('fs');

var config = require('./config');


/**
 * Executa o lint
 *
 * @returns {Pipe}
 */
function css() {

  return gulp.src(config.cssStylelintOptions.source)
    .pipe(plugins.stylelint(config.cssStylelintOptions));

}

/**
 * Executa o lint
 *
 * @returns {Pipe}
 */
function scss() {

  return gulp.src(config.scssStylelintOptions.source)
    .pipe(plugins.stylelint(config.scssStylelintOptions));

}

/**
 * Executa o lint
 *
 * @returns {Pipe}
 */
function html() {

  return gulp.src(config.htmllintOptions.source)
    .pipe(plugins.htmllint({}, htmllintReporter));

}

/**
 * // Limpa o arquivo gerado pelo htmllint, previne que o arquivo cresça
 *
 * @returns {Pipe}
 */
function clearHtmlReport() {

  return gulp.src(config.htmllintOptions.reportOutputFile, { read: false })
    .pipe(plugins.clean());

}

/**
 * Formata os dados para o relatorio
 */
function htmllintReporter(filepath, issues) {

  if (issues.length > 0) {

    var logger = fs.createWriteStream(config.htmllintOptions.reportOutputFile, {
      flags: 'a', encoding: 'utf-8'
    });

    logger.on('open', function () {

      issues.forEach(function (issue) {
        logger.write(filepath.toString() + ' [' + issue.line.toString() + ',' + issue.column.toString() + ']: (' + issue.code.toString() + ': ' + issue.rule + ') ' + issue.msg + '\r\n');
      });

      logger.end();
      process.exitCode = 1;
    });

  }
}

module.exports = {
  css: css,
  scss: scss,
  html: html,
  clearHtmlReport: clearHtmlReport
};
