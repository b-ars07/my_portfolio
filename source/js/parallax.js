(function() {

    /**
     * Parralax on header
     */
    var parallax = (function() {
        var
            bg = document.querySelector('.js-bg-header'),
            user = document.querySelector('.js-user'),
            sectionText = document.querySelector('.js-header-title');

        return {
            move: function(block, windowScroll, strafeAmount) {
                var
                    strafe = windowScroll / -strafeAmount + '%',
                    style = block.style,
                    transformString = 'translate3d(0,' + strafe + ', 0)';

                style.transform = transformString;
                style.webkitTransform = transformString;
            },
            init: function(wScroll) {
                this.move(bg, wScroll, 45);
                this.move(sectionText, wScroll, 20);
                this.move(user, wScroll, 4);
            }
        }



    })();


    /**
     * window scroll
     */
    window.onscroll = function() {
        var wScroll = window.pageYOffset;

        if ($('#paralaxScroll').length) {
            parallax.init(wScroll);
        }


    }
})();