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

$(function() {
    if ($('.arrow').length) {
        arrow.init();
    }
});

$(function() {
    var
        auth_btn = $('.welcome__auth-btn'),
        main_btn = $('.welcome-menu__link'),
        card = $('.card__wrapper');

    auth_btn.on('click', function(evt) {
        evt.preventDefault();

        var _this = $(this);

        _this.toggleClass('active');
        setTimeout(function() {
            card.toggleClass('active');
        }, 400);
    });

    main_btn.on('click', function(evt) {
        evt.preventDefault();
        setTimeout(function() {
            card.toggleClass('active');
        }, 400);

    });
});