(function() {
    var blur = (function() {
        var
            wrapper = document.querySelector('.js-feedback-wrapper'),
            form = document.querySelector('js-feedback-background');

        return {
            set: function() {
                var
                    imgWidth = document.querySelector('.js-reviews-background').offsetWidth,
                    posLeft = -wrapper.offsetLeft,
                    posTop = -wrapper.offsetTop,
                    blurCSS = form.style;

                blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
                blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';


            }
        }
    })();

    if ($('#feedbackForm').length) {
        blur.set();
    }

    window.onresize = function() {
        if ($('#feedbackForm').length) {
            blur.set();
        }
    }
});