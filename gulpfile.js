var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-ruby-sass');
var plumber      = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("assets/scss/**/*.scss", ['sass']);
    gulp.watch("assets/js/*.js").on('change', browserSync.reload);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});


// Compiles SASS and Adds browser support
gulp.task('sass', function() {
    return sass('assets/scss/main.scss')
        .on('error', sass.logError)
        .pipe(plumber())
        // .pipe(uglify())
        .pipe(autoprefixer({
                browser: ['last 2 versions'],
                cascade: false
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({stream: true}));
});

// Default Task -- Excutes all other task in order
gulp.task('default', ['sass', 'serve']);
