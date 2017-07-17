var form = function() {
    var feedbackForm = function() {
        var formMail = document.querySelector('#feedbackForm'),
            popup = $('#popup');
        popup.hide();

        if (formMail) {
            formMail.addEventListener('submit', sendMail);
        }

        function sendMail(evt) {
            evt.preventDefault();

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
                $('#authForm').trigger('reset');

            }).fail(function() {
                popup.fadeIn('fast');
            });

            return false;
        }

        $('.js-close-popup').click(function() {
            popup.fadeOut('fast');
            $('#authForm').trigger('reset');
        });
    }

    var authForm = function() {
        var authForm = document.querySelector('#authForm');

        if (authForm) {
            authForm.addEventListener('submit', submitAuth);
        }

        function submitAuth(evt) {
            evt.preventDefault();

            if (!($("#person").prop("checked") && $('input[name=radio]:checked', '#authForm').val() == 1)) {
                $(".js-valid-text").text('Вы робот, заходите позже');
                $('#authForm').trigger('reset');
            } else {
                $(".js-valid-text").text('Log in...');
                $('#authForm').trigger('reset');
            }

            return false;

        }
    }

    return {
        init: function() {
            if ($('#feedbackForm').length) {
                feedbackForm();
            }
            if ($('#authForm').length) {
                authForm();
            }
        }


    }

}();

module.exports = form;