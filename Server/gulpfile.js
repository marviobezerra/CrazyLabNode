var gulp = require("gulp");
var ts = require("gulp-typescript");
var merge = require("merge2");

var tsProject = ts.createProject({
    declaration: true,
    noExternalResolve: true
});

gulp.task("scripts", function() {
    var tsResult = gulp.src("scr/**/*.ts")
        .pipe(ts(tsProject));

    return merge([
        
        tsResult.js.pipe(gulp.dest("./bin/src"))
    ]);
});

gulp.task("watch", ["scripts"], function() {
    gulp.watch("scr/**/*.ts", ["scripts"]);
});