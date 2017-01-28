var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync');
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');

// Where our files are located
var jsFiles = "src/js/**/*.js";
var viewFiles = "src/js/**/*.html";

// This function is used to deal with task errors
var interceptErrors = function(error) {
    var args = Array.prototype.slice.call(arguments);

    // Sends error to notification center with gulp-notify
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
};

// Transpiles ES6 syntax, injects AngularJS dependencies...
// into controllers and services, bundles the JS files,
// converts the Browserify output into a vinyl-source-stream...
// so Gulp can understand and output the file to /build folder
gulp.task('browserify', ['views'], function() {
    return browserify('./src/js/app.js')
        .transform(babelify, { presets: ["es2015"] })
        .transform(ngAnnotate)
        .bundle()
        .on('error', interceptErrors)
        // Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        .pipe(gulp.dest('./build/'));
});

// Copies the index.html file into /build folder...
// so BrowserSync use /build as root folder
gulp.task('html', function() {
    return gulp.src("src/index.html")
        .on('error', interceptErrors)
        .pipe(gulp.dest('./build/'));
});

// Generates a file that injects template files into... 
// AngularJS $templateCache so views doesn't need to... 
// load via AJAX
gulp.task('views', function() {
    return gulp.src(viewFiles)
        .pipe(templateCache({
            standalone: true // to create inside a new AngularJS module, set to true
        }))
        .on('error', interceptErrors)
        .pipe(rename("app.templates.js"))
        .pipe(gulp.dest('./src/js/config/'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
    var html = gulp.src("build/index.html")
                   .pipe(gulp.dest('./dist/'));

    var js = gulp.src("build/main.js")
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));

    // the task is returned when both streams (html, js)...
    // are completed
    return merge(html, js);
});

// By default, gulp will compile the JS files, start a web...
// server and watch for file changes
gulp.task('default', ['html', 'browserify'], function() {

    browserSync.init(['./build/**/**.**'], {
        server: "./build",
        port: 4000,
        notify: false,
        ui: {
            port: 4001
        }
    });

    gulp.watch("src/index.html", ['html']);
    gulp.watch(viewFiles, ['views']);
    gulp.watch(jsFiles, ['browserify']);
})