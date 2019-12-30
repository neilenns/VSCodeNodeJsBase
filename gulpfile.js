var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var typeScriptOptions = {
    noImplicitAny: true,
    target: "es5"
};

var sourcemapsOptions = {
    sourceRoot: "../src/"
};

gulp.task('default', function () {
    return gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(ts(typeScriptOptions))
        .pipe(sourcemaps.write(sourcemapsOptions))
        .pipe(gulp.dest('dist'));
});