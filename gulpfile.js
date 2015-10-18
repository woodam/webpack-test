var gulp = require('gulp');

var webpackConfig = require('./webpack/config');
var webpackBuild  = require('./webpack/build')(webpackConfig());


gulp.task('build', webpackBuild);
