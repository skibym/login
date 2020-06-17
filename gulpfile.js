'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var tasks = require('./gulp-tasks');
var config = require('./gulp-tasks/config');
var browserSync = require('browser-sync').create();

// Builda o Sass
gulp.task('build:sass', tasks.sass.build);

// Tarefas de formatação
gulp.task('format:css', tasks.formatters.css);
gulp.task('format:scss', tasks.formatters.scss);

// Executa o Lint
gulp.task('run:lint:css', ['format:css'], tasks.lint.css);
gulp.task('run:lint:scss', ['format:scss'], tasks.lint.scss);
gulp.task('run:lint:html', ['run:lint:html-clear'], tasks.lint.html);
gulp.task('run:lint:html-clear', tasks.lint.clearHtmlReport);

// Executa o Parker
gulp.task('run:parker', ['clear:parker'], tasks.parker.run);
gulp.task('clear:parker', tasks.parker.clear);

// Builda o Sassdocs e atualiza o sass docs

// Execute o build depois o publish
gulp.task('build:sassdocs', tasks.sassdocs.build);
gulp.task('publish:sassdocs', tasks.sassdocs.publish);

// Copia os arquivos para a pasta 'dist', efetuando as transformações necessarias
gulp.task('build:dist', ['format:css', 'dist:copy:css', 'dist:copy:html', 'dist:copy:images']);

gulp.task('dist:copy:css', tasks.dist.copyCss);
gulp.task('dist:copy:html', tasks.dist.copyHtml);
gulp.task('dist:copy:images', tasks.dist.copyImages);

// Task Default, Build do Sass
gulp.task('default', function () {

  browserSync.init({
    server: "./src",
    port: 3007
  });

  gulp.watch('src/sass/**/*.scss', ['build:sass']);
  gulp.watch("src/**/*.html").on('change', browserSync.reload);
  gulp.watch("src/**/*.css").on('change', browserSync.reload);
})
