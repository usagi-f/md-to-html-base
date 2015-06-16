var gulp = require('gulp'),
    frontMatter = require('gulp-front-matter'),
    renderer = require('gulp-multi-renderer'),
    markdown = require('gulp-markdown');

gulp.task('markdown', function() {
    gulp.src('src/md/**/*.md')
        .pipe(frontMatter({
            remove: true
        }))
        .pipe(markdown())
        .pipe(renderer({
            templateDir: "src/_template"
        }))
        .pipe(gulp.dest('app/view/'))
});

gulp.task('watch', function () {
    gulp.watch('src/md/**/*.md', ['markdown']);
});

gulp.task('default', ['watch']);