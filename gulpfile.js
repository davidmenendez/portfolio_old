var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
  .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./public/css'))
  .pipe(browserSync.stream());
});

gulp.task('watch', ['nodemon', 'sass'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*"],
    browser: "google chrome",
    port: 3001,
  });
  gulp.watch('./src/styles/**/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.jade').on('change', browserSync.reload);
});

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: 'app.js'
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