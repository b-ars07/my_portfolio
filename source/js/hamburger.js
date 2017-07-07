var hamburger = (function() {
    var hamburger = $('#hamburger-icon');

    hamburger.on('click', function(evt) {
        evt.preventDefault();

        hamburger.toggleClass('active');
        return false;
    });
});

module.exports = hamburger;