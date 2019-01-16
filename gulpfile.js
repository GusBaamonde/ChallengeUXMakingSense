var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  processHtml = require('gulp-processhtml'),
  gulpUglify = require('gulp-uglify');

gulp.task('sass', function() {
  gulp.src('./dev/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      sourceComments: false,
    }))
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('processHtml', function() {
  return gulp.src('./dev/*.html')
    .pipe(processHtml({
      recursive: true,
      environment: 'public'
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('imgCopy', function() {
  return gulp.src('./dev/img/*.*')
    .pipe(gulp.dest('./public/img'));
});

gulp.task('fontsCopy', function() {
  return gulp.src('./dev/fonts/*.*')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('jsfiles', function() {
  return gulp.src(['./dev/js/*.js'])
    .pipe(gulpUglify())
    .pipe(gulp.dest('./public/js'));
});


gulp.task('default', function() {
  gulp.watch('./dev/scss/*.scss', ['sass']),
    gulp.watch('./dev/*.html', ['processHtml']),
    gulp.watch('./dev/js/*.js', ['jsfiles']),
    gulp.watch('./dev/fonts/*.*', ['fontsCopy']),
    gulp.watch('./dev/img/*.*', ['imgCopy']);
});
