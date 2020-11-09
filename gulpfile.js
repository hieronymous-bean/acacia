var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("mainBuild", function () {
  return gulp.src("src/index.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest("dist"));
});
