var gulp = require('gulp');
var liveServer = require('live-server');
var $ = require('gulp-load-plugins')();

var environment = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

gulp.task('build', function() {
  var concatted = gulp.src(
    [
    'vendor/react-' + environment + '-*.js',
    'vendor/react-dom-' + environment + '*.js',
    'src/setup.js',
    'src/components/*.js',
    'src/main.js'
    ]
  ).pipe($.concat(environment + '.js'))

  if (environment === 'prod') {
    concatted = concatted.pipe($.uglify());
  }

  return concatted.pipe(gulp.dest('./build'));
});

gulp.task('watch', ['build'], function() {
  $.watch(['vendor/*.js', 'src/**/*.js'], $.batch(function(events, done) {
    gulp.start('build', done);
  }));
});

gulp.task('serve', function() {
  liveServer.start({
    open: false,
    ignorePattern: /src|vendor/,
    port: process.env.PORT || 8004
  });
});
