'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function() {
        var sprite = $.gulp.src('./source/sprite/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                padding: 20
            }));

        var imgStream = sprite.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = sprite.css
            .pipe($.gulp.dest('./source/style/helpers'));

        return $.merge(imgStream, cssStream);
    });
};