var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public'))
  .pipe(browserSync.stream());
});

gulp.task('watch', ['nodemon', 'sass'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:8000",
    files: ["public/**/*.*"],
    browser: "google chrome",
    port: 8001,
  });
  gulp.watch('./styles/**/*.scss', ['sass']);
  gulp.watch('./views/**/*.jade').on('change', browserSync.reload);
});

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    if (!started) {
      cb();
      started = true; 
    } 
  });
});

gulp.task('default', ['watch']);