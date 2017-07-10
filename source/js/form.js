var form = function() {
    const formMail = document.querySelector('#feedbackForm');
    var popup = $('#popup');
    popup.hide();

    if (formMail) {
        formMail.addEventListener('submit', sendMail);
    }

    function sendMail(e) {
        e.preventDefault();

        var data = {
            name: formMail.name.value,
            email: formMail.email.value,
            text: formMail.text.value
        };

        $.ajax({
            type: "POST",
            url: "mail.js",
            data: data
        }).done(function() {

        }).fail(function() {
            popup.fadeIn('fast');
        });
    }

    $('.js-close-popup').click(function() {
        popup.fadeOut('fast');
    });
}

module.exports = form;