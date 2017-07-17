// var skills = function() {

//     var distance = function(scrollTop, element) {
//         var
//             offset = element.offset().top,
//             windowMargin = Math.ceil($(window).height() / 1.2),
//             topBorder = offset - scrollTop - windowMargin,
//             bottom = element.outerHeight(true) + offset,
//             bottomBorder = scrollTop + windowMargin - bottom;

//         return topBorder <= 0 && bottomBorder <= 0;
//     };

//     var item = $('.skill-section__item');

//     var animation = {
//         toSkills: function() {
//             item.addClass('animate');
//         }
//     };

//     return {
//         init: function() {
//             $(window).on('scroll', function() {
//                 var scrollTop = $(window).scrollTop();

//                 if (distance(scrollTop, $('.js-animate'))) {
//                     animation['toSkills']();
//                 }
//             })
//         }
//     }
// }();

// 

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