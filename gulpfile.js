const gulp = require("gulp");
const sass = require("gulp-sass");

// gulp.task('sass', function(){
//   gulp.src('assets/style.scss')
//     .pipe(sass({outputStyle: 'expanded'}))
//     .pipe(gulp.dest('css'));
// });

// gulp.task('sass-watch', gulp.task('sass'), function() {
//   var watcher = gulp.watch('assets/style.scss', gulp.task('sass'));
//   watcher.on('change', function(event) {

//   });
// });

// gulp.task('default', gulp.task('sass-watch'));

gulp.task('default', function() {
  return gulp.watch('assets/style.scss', function() {
    return (
      gulp.src('assets/style.scss')
      .pipe(
        sass({
          outputStyle: 'expanded'
        })
        .on('error', sass.logError)
      )
      .pipe(gulp.dest('css'))
    );
  });
});