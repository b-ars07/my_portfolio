var hamburger = (function() {
    var hamburger = $('#hamburger-icon'),
        navigation = $('.js-navigation'),
        menu = $('.main-navigation');

    hamburger.on('click', function(evt) {
        evt.preventDefault();

        hamburger.toggleClass('active');

        var _this = $(this);

        _this.toggleClass('open');

        setTimeout(function() {
            menu.toggleClass('open');
        }, 500);
        navigation.toggleClass('open');
        $('body').toggleClass('active');


        return false;
    });
});

module.exports = hamburger;