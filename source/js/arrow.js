var arrow = (function() {
    return {
        init: function() {
            const scrollHeight = $('.js-section-content').offset().top;

            $('.arrow').on('click', function() {

                $('body').animate({
                    scrollTop: scrollHeight
                }, 1800);

                return false;
            });
        }
    }
})();

module.exports = arrow;