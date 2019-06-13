var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var gulpsync = require('gulp-sync')(gulp);
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('less', function() {
    return gulp.src('./src/styles/react-nhathung.less').pipe(less({
           plugins: [autoprefix]
       }))
        .pipe(gulp.dest('./src/styles'));
});
gulp.task('watch', gulpsync.sync([
    'less'
]), function () {
    gulp.watch(['./src/styles/*.less'], ['less']);
});

gulp.task('default', ['watch']);
