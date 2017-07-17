var flip = (function() {
    var
        auth_btn = $('.welcome__auth-btn'),
        main_btn = $('.welcome-menu-auth__item:first-child'),
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

module.exports = flip;