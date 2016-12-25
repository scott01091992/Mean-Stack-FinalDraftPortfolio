var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('default', ['watch'], function () {
});

gulp.task('watch',['sass', 'jade'], function(){

  gulp.watch('client/sass/*.sass', ['sass']);
  gulp.watch('client/jade/*.jade', ['jade']);
});

gulp.task('sass', function(){
  return gulp.src('client/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('client/css'));
    });

gulp.task('jade', function(){
  return gulp.src('client/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('client/html'));
});
