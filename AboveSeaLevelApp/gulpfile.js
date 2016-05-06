var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

var paths = [
  './javascript/*.js',
  './javascript/**/*module.js',
  './javascript/**/!(*module).js',
  './javascript/**/**/*.js'
]

gulp.task('default', ['concat', 'watch']);

gulp.task('watch', function() {
  gulp.watch(paths, ['concat']);
});

gulp.task('concat', function() {
  return gulp.src(paths)
    .pipe(concat('js/above-sea-level.js'))
    .pipe(minify({
      mangle : false
    }))
    .pipe(gulp.dest('./www/'));
});
