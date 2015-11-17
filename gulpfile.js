'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['start_web']);
gulp.task('start_web', shell.task('cd webapp && ./startserver.sh'))
