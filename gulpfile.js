var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});
// gulp.task('default', function() {
//   // place code for your default task here
//   console.log("Hello SA");
// });

// // // Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    browserSync.stream();
});

gulp.task('default', [ 'browser-sync'], function() {
	console.log('done');
});
// var browserSync = require('browser-sync').create();
//  browserSync.init({
//      server: "./"
//  });
// browserSync.stream();
// default gulp task
// gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function() {
//   // watch for HTML changes
//   gulp.watch('./src/*.html', function() {
//     gulp.run('htmlpage');
//   });

//   // watch for JS changes
//   gulp.watch('./src/scripts/*.js', function() {
//     gulp.run('jshint', 'scripts');
//   });

//   // watch for CSS changes
//   gulp.watch('./src/styles/*.css', function() {
//     gulp.run('styles');
//   });
// });


