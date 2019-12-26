const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-htmlmin');
const tinify = require('gulp-tinypng-compress');

/* Сожми и перенеси CSS файлы  */
gulp.task('minify-css', () => {
   return gulp.src('src/css/*.css')
   .pipe(cleanCSS())
   .pipe(gulp.dest('build/css/'))
});

/* Сожми JS-файлы и перенеси в build */
gulp.task('minify-js', () => {
   return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
   .pipe(jsmin())
   .pipe(gulp.dest('build/js'))
 });

/* Перенеси сжатые JS-файлы */
gulp.task('move-js', () => {
   return gulp.src('src/js/*.min.js')
   .pipe(gulp.dest('build/js'))
});

/* Перенеси шрифты */
gulp.task('fonts', () => {
   return gulp.src('src/fonts/**/*')
   .pipe(gulp.dest('build/fonts'))
});

/* Сожми и перенеси HTML файлы  */
gulp.task('html-min', () => {
   return gulp.src('src/*.html')
   //.pipe(htmlmin({ collapseWhitespace: true }))
   .pipe(gulp.dest('build/'))
});

/* Сожми изображения и перенеси их в Build */
gulp.task('image-min', () => {
   return gulp.src('src/img/**/*.*')
   .pipe(tinify('7v32kGcVZSKJVGVhWVY10w71sCBhs3Br'))
   .pipe(gulp.dest('build/img/'))
});

gulp.task('default', defaultTask);

function defaultTask(done) {
   console.log('Задача выполнена');
   done();
};

gulp.task('build', gulp.series('minify-css', 'move-js', 'minify-js', 'html-min', 'image-min', 'fonts'))