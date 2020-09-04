const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("index", done => {
    gulp.src("index.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});

gulp.task("html", done => {
    gulp.src("html/*.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());
    done();
});

gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            "outputStyle":"expanded"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());;
    done();
});

gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());;
    done();
});

gulp.task("font", done => {
    gulp.src("font/*")
        .pipe(gulp.dest("dist/font"))
        .pipe(connect.reload());;
    done();
});

gulp.task("img", done => {
    gulp.src("img/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());;
    done();
});

gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    });
    done();
});

gulp.task("watch", done => {
    gulp.watch("index.html", gulp.series("index"));
    gulp.watch("html/*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("js"));
    gulp.watch("font/*", gulp.series("font"));
    gulp.watch("img/*", gulp.series("img"));
    done();
});

gulp.task("build", gulp.series("index", "html", "sass", "js","font", "img"));

gulp.task("default", gulp.series("build", "watch", "server"));