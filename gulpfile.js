var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('jade', async function(){
  gulp.src('./src/*.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
})

gulp.task('stylus', async function () {
  gulp.src('./css/*.stylus')
  .pipe(stylus())
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
});

gulp.task('js', async function () {
  gulp.src('./scripts/*.js')
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
});

gulp.task('img', async function(){
  gulp.src('./images/*')
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
});

gulp.task('sync', async function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('default', gulp.series(['jade', 'stylus', 'js', 'img', 'sync'], function() {
  gulp.watch('./src/*.jade', gulp.series(['jade']));
  gulp.watch('./css/*.stylus', gulp.series(['stylus']));
  gulp.watch('./scripts/*.js', gulp.series(['js']));
  gulp.watch('./images/*', gulp.series(['img']));
  gulp.watch('*.html').on('change', reload);
}));