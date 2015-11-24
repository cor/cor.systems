'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['scss_watch']);

var paths = {
	styles : {
		src: 'webapp/static/scss/**/*.scss',
		dest: 'webapp/static/css/'
	}
};

gulp.task('scss', function() {
	gulp.src(paths.styles.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.styles.dest))
});

gulp.task('scss_watch', function() {
	gulp.watch(paths.styles.src, ['scss']);
});

