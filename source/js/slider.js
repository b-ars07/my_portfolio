/**
 * Slider Works
 */
var slider = (function() {
    var Slider = function(container) {
        var nextBtn = container.find('.js-slider-btn--left'),
            prevBtn = container.find('.js-slider-btn--right'),
            items = nextBtn.find('.js-slider__item'),
            imgWrapper = container.find('.js-slider__image-wrapper'),
            title = container.find('.block-title--works-slider'),
            skills = container.find('.js-slider-tehnologes'),
            link = container.find('.js-slider-site'),
            itemsLength = items.length,
            duration = 500,
            flag = true;

        var timeout;

        this.counter = 0;

        var generateMarkups = function() {
            var list = nextBtn.find('.js-slider__list'),
                markups = list.clone();

            prevBtn.append(markups).find('.js-slider__item').removeClass('active').eq(this.counter + 1).addClass('active');
        };
        /**
         * @param  pics - image src
         * @param  title - text
         * @param  skills - text
         * @param  link - src
         */
        var getDataArrays = function() {
            var dataObject = {
                pics: [],
                title: [],
                skills: [],
                link: []
            };

            $.each(items, function() {
                var $this = $(this);

                dataObject.pics.push($this.data('full'));
                dataObject.title.push($this.data('title'));
                dataObject.skills.push($this.data('skills'));
                dataObject.link.push($this.data('link'));
            });

            return dataObject;
        };

        var slideNext = function(slide) {
            var reqItem = items.eq(slide - 1),
                activeItem = items.filter('.active');

            activeItem.stop(true, true).animate({
                'top': '100%'
            }, duration);

            reqItem.stop(true, true).animate({
                'top': '0%'
            }, duration, function() {
                $(this).addClass('active').siblings().removeClass('active').css('top', '-100%')
            });

        };

        var slidePrev = function(slide) {
            var items = prevBtn.find('.js-slider__item'),
                activeItem = items.filter('.active'),
                reqSlide = slide + 1;

            if (reqSlide > itemsLength - 1) {
                reqSlide = 0;
            }

            var reqItem = items.eq(reqSlide);

            activeItem.stop(true, true).animate({
                'top': '-100%'
            }, duration);

            reqItem.stop(true, true).animate({
                'top': '0%'
            }, duration, function() {
                $(this).addClass('active').siblings().removeClass('active').css('top', '100%')
            });
        };

        var changeImgWrapper = function(slide) {
            var image = imgWrapper.find('.js-works-slider__image');
            var data = getDataArrays();

            image.stop(true, true).fadeOut(duration / 2, function() {
                image.attr('src', data.pics[slide]);
                $(this).fadeIn(duration / 2);
            });
        };

        var changeData = function(slide) {
            var data = getDataArrays();

            title.text(data.title[slide]);
            skills.text(data.skills[slide]);
            link.attr('href', data.link[slide]);
        };

        this.setDefaults = function() {
            var _that = this,
                data = getDataArrays();

            generateMarkups();

            nextBtn.find('.js-slider__item').eq(_that.counter - 1).addClass('active');

            prevBtn.find('.js-slider__item').eq(_that.counter + 1).addClass('active');

            imgWrapper.find('.js-works-slider__image').attr('src', data.pics[_that.counter]);

            changeData(_that.counter);

        };

        this.moveSlide = function(direction) {
            var _that = this;

            var directions = {
                next: function() {

                    if (_that.counter < itemsLength - 1) {
                        _that.counter++;
                    } else {
                        _that.counter = 0;
                    }
                },

                prev: function() {
                    if (_that.counter > 0) {
                        _that.counter--;
                    } else {
                        _that.counter = itemsLength - 1;
                    }
                }
            };

            directions[direction]();

            if (flag) {
                flag = false;

                if (typeof timeout != 'undefined') {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(function() {
                    flag = true;
                }, duration + 50);

                slideNext(_that.counter);
                slidePrev(_that.counter);
                changeImgWrapper(_that.counter);
                changeData(_that.counter);
            }
        }
    };
    return {
        init: function() {
            var slider = new Slider($('.works-slider'));
            slider.setDefaults();

            $('.js-slider-btn--left').on('click', function(e) {
                e.preventDefault();
                slider.moveSlide('prev');
            });

            $('.js-slider-btn--right').on('click', function(e) {
                e.preventDefault();
                slider.moveSlide('next');
            });
        }
    }
}());

module.exports = slider;