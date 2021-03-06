module.exports = ()=>
  $.gulp.task('js',()=> $.dev ?
    $.gulp.src($.path.src.js)
    .pipe($.gp.sourcemaps.init())
    .pipe($.gp.plumber())
    .pipe($.gp.include())
    .pipe($.gp.babel({
      presets: ['@babel/preset-env']
    }))
    .pipe($.gp.sourcemaps.write())
    .pipe($.gulp.dest($.path.build.js).on('end',$.bs.reload)):
    $.gulp.src($.path.src.js)
    .pipe($.gp.include())
    .pipe($.gp.babel({
      presets: ['@babel/preset-env', 'minify']
    }))
    .pipe($.gulp.dest($.path.build.js)))