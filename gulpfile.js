var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');

gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
  .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./public/css'))
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

gulp.task('deploy', function(){
  var directories = ['./public/css', './public/images', './public/scripts'];
  gulp.src('./views/**/*.jade')
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest('./deploy/'));
  gulp.src(directories)
  .pipe(gulp.dest('./deploy'));
});

gulp.task('build', ['sass']);
gulp.task('default', ['watch']);