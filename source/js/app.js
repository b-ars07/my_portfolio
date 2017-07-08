const
    blur = require('./blur-form'),
    parallax = require('./parallax'),
    arrow = require('./arrow'),
    flip = require('./flip'),
    hamburger = require('./hamburger'),
    blogMenu = require('./blog');

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
hamburger();

//blogNav
if ($('#blog').length) {
    blogMenu.init();
}