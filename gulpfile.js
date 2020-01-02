var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");

var typeScriptOptions = {
  noImplicitAny: true,
  target: "es5",
  esModuleInterop: true
};

var sourcemapsOptions = {
  sourceRoot: "../src/"
};

gulp.task("default", function() {
  return gulp
    .src("src/**/*.ts", { since: gulp.lastRun("default") })
    .pipe(sourcemaps.init())
    .pipe(ts(typeScriptOptions))
    .pipe(sourcemaps.write(sourcemapsOptions))
    .pipe(gulp.dest("dist"));
});
