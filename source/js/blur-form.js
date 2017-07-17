var blur = (function() {
    var
        wrapper = document.querySelector('.js-feedback-wrapper'),
        form = document.querySelector('.js-feedback-background'),
        cWidth = document.body.clientWidth;

    return {
        set: function() {
            var
                imgWidth = document.querySelector('.js-reviews-background').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop + 70,
                blurCSS = form.style;

            if (cWidth <= 1800) {
                posTop = -wrapper.offsetTop + 70;
            }
            if (cWidth <= 768) {
                posTop = -wrapper.offsetTop + 43;
            }

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';

        }
    }
})();

module.exports = blur;