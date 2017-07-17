var skills = function() {

    var _animateSkills = function _animateSkills(scroll) {
        var offset = $('.js-animate').offset().top - 100;
        var skills = $('.skill');
        if (scroll >= offset) {
            skills.each(function(index, element) {
                setTimeout(function() {
                    $(element).addClass('animate');
                }, index * 150);
            });
        }
    };

    return {
        init: function() {
            $(window).on('scroll', function() {
                var scrollTop = $(window).scrollTop();
                _animateSkills(scrollTop);
            });
        }
    };
}();

module.exports = skills;