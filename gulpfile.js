global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  dev: process.argv[2] !== 'build',
  path: {
    config: require('./gulp/config/config.js'),
    serverDir: './app/dist',
    src: {
      html: './app/src/*.{html,pug}',
      css: './app/src/styles/*.scss',
      js: './app/src/scripts/*.js',
      img: './app/src/images/*.{png,jpg,webp}',
      font: './app/src/fonts/**/*.ttf'
      },
    build: {
      html: './app/dist/',
      css: './app/dist/styles/',
      js: './app/dist/scripts/',
      img: './app/dist/images/',
      font: './app/dist/fonts/'
      },
    watch: {
      html: ['./app/src/*.{pug,html}', './app/src/**/*.{pug,html}'],
      css: './app/src/styles/**/*.scss',
      js: './app/src/scripts/*.js',
      img: './app/src/images/*.*',
      font: './app/src/fonts/**/*.ttf'
      }
  }
}

$.path.config.forEach(task => require(task)())

if ($.dev) {
  $.gulp.series($.gulp.parallel('html', 'css', 'js', 'img', 'font', 'watch', 'serve'))()
} else {
  $.gulp.src($.path.serverDir, {read: false})
  .pipe($.gp.clean())
  .pipe($.gulp.dest('./app'))
  .on('end', $.gulp.series($.gulp.parallel('html', 'css', 'js', 'img', 'font')))
}