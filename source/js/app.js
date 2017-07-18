import prepareSend from './prepareSend';

const
    blur = require('./blur-form'),
    parallax = require('./parallax'),
    arrow = require('./arrow'),
    flip = require('./flip'),
    hamburger = require('./hamburger'),
    blogMenu = require('./blog'),
    preloader = require('./preloader'),
    slider = require('./slider'),
    // form = require('./form'),
    skills = require('./skills'),
    map = require('./map');

//blur effect form
if ($('#feedbackForm').length) {
    blur.set();
}

window.onresize = function() {
    if ($('#feedbackForm').length) {
        blur.set();
    }
}

//parralax header
window.onscroll = function() {
    var wScroll = window.pageYOffset;

    if ($('#paralaxScroll').length) {
        parallax.init(wScroll);
    }
}

//arrow animation
if ($('.arrow').length) {
    arrow.init();
}

//flip animation
flip();

//hamburger
if ($('#hamburger-icon').length) {
    hamburger();
}


//blogNav
if ($('#blog').length) {
    blogMenu.init();
}

preloader.init();

//Works slider
if ($('#slider').length) {
    slider.init();
}


//form();

if ($('.skills').length) {
    skills.init();
}

if ($('#map').length) {
    map.init();
}




var formMail = document.querySelector('#feedbackForm'),
    formLogin = document.querySelector('#authForm'),
    popup = $('#popup');
popup.hide();

if (formMail) {
    formMail.addEventListener('submit', prepareSendMail);
}
if (formLogin) {
    formLogin.addEventListener('submit', prepareSendLogin);
}

function prepareSendMail(e) {
    e.preventDefault();
    const data = {
        name: formMail.name.value,
        email: formMail.email.value,
        text: formMail.text.value
    };
    const url = '/works';

    prepareSend(formMail, url, data);
}

function prepareSendLogin(e) {
    e.preventDefault();
    const data = {
        login: formLogin.login.value,
        password: formLogin.password.value
    };
    const url = '/';

    if (!($(".checkbox__person").prop("checked") && $('input[name=radio]:checked', '#authForm').val() == 1)) {
        $('#popup').show()
        $(".popup-content__text").text('Вы робот, заходите позже');
        $('#authForm').trigger('reset');
        $('#popup').delay(1500).fadeOut(1000);

    } else {
        prepareSend(formLogin, url, data, 'POST', data => {
            if (data === 'Авторизация успешна!') {
                location.href = '/admin';
            }
        });
    }


}

$('.js-close-popup').on('click', function(e) {
    e.preventDefault();

    $(this).closest('#popup').fadeOut(500);
});