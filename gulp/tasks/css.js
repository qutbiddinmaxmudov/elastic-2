module.exports = ()=>
  $.gulp.task('css',()=> $.dev ?
    $.gulp.src($.path.src.css)
    .pipe($.gp.sourcemaps.init())
    .pipe($.gp.plumber())
    .pipe($.gp.sass({outputStyle: 'expanded'}))
    .pipe($.gp.autoprefixer())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.sourcemaps.write())
    .pipe($.gulp.dest($.path.build.css)).on('end',$.bs.reload) :
    $.gulp.src($.path.src.css)
    .pipe($.gp.sass({outputStyle: 'expanded'}))
    .pipe($.gp.autoprefixer())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.sass({outputStyle: 'compressed'}))
    .pipe($.gulp.dest($.path.build.css)))
    