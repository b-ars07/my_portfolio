const
    blur = require('./blur-form'),
    parallax = require('./parallax'),
    arrow = require('./arrow'),
    flip = require('./flip'),
    hamburger = require('./hamburger'),
    blogMenu = require('./blog'),
    preloader = require('./preloader'),
    slider = require('./slider'),
    form = require('./form'),
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

if ($('#feedbackForm').length) {
    form();
}

if ($('#skills').length) {
    skills.init();
}

if ($('#map').length) {
    map.init();
}