// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
    gulp.src('./style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./style'));
    
});

gulp.task('default', gulp.series('sass', function(cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
}));