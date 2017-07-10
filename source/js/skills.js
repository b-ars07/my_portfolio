var skills = function() {

    var distance = function(scrollTop, element) {
        var
            offset = element.offset().top,
            windowMargin = Math.ceil($(window).height() / 1.2),
            topBorder = offset - scrollTop - windowMargin,
            bottom = element.outerHeight(true) + offset,
            bottomBorder = scrollTop + windowMargin - bottom;

        return topBorder <= 0 && bottomBorder <= 0;
    };

    var item = $('.skills__item');

    var animation = {
        toSkills: function() {
            item.addClass('active');
        }
    };

    return {
        init: function() {
            $(window).on('scroll', function() {
                var scrollTop = $(window).scrollTop();

                if (distance(scrollTop, $('.js-animate'))) {
                    animation['toSkills']();
                }
            })
        }
    }
}();

module.exports = skills;