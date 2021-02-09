module.exports = ()=>
  $.gulp.task('img',()=>
    $.gulp.src($.path.src.img)
      .pipe($.gp.imagemin([
        $.gp.imagemin.gifsicle({interlaced: true}),
        $.gp.imagemin.mozjpeg({quality: 75, progressive: true}),
        $.gp.imagemin.optipng({optimizationLevel: 5}),
        $.gp.imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
      ]))
      .pipe($.gp.webp())
      .pipe($.gulp.dest($.path.build.img)).on('end',$.bs.reload))