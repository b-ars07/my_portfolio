'use strict';
var blogMenu = (function() {
    var $article = $('.blog-article__item'),
        $item = $('.js-blog-sidebar__item'),
        $menu = $('.js-blog-sidebar__list'),
        $wrapMenu = $('.js-blog-sidebar'),
        body = document.body,
        article_position = [],
        offsetHeight = 80,

        _positionArticle = function(el) {
            var len = el.length;
            for (var i = 0; i < len; i++) {
                article_position[i] = {};
                article_position[i].top = el.eq(i).offset().top - offsetHeight;
                article_position[i].bottom = article_position[i].top + el.eq(i).innerHeight();
            }
        },

        _fixMenu = function() {
            var scroll = window.pageYOffset,
                width = $wrapMenu.width();
            if (scroll < $article.offset().top) {
                $menu.removeClass('fixed');
            } else {
                $menu.addClass('fixed');
            }
        },

        _scrollPage = function() {
            var scroll = window.pageYOffset;
            for (var i = 0; i < article_position.length; i++) {
                if (scroll >= article_position[i].top && scroll <= article_position[i].bottom) {
                    $item.eq(i).addClass('blog-sidebar__item--active').siblings().removeClass('blog-sidebar__item--active');
                }
            }
        },

        _click = function(evt) {
            var index = $(evt.target).index();
            var sectionOffset = $article.eq(index).offset().top;

            $(document).off('scroll', _scrollPage);

            $('body, html').animate({
                'scrollTop': sectionOffset
            }, function() {
                $(evt.target).addClass('blog-sidebar__item--active').siblings()
                    .removeClass('blog-sidebar__item--active');
                $(document).on('scroll', _scrollPage);
            });
        },

        _addListener = function() {
            $menu.on('click', _click);

            $(document).on('scroll', _scrollPage);
            $(document).on('scroll', _fixMenu);

            $(window).on('load', function() {
                _positionArticle($article);
            });

            $(window).on('resize', function() {
                _positionArticle($article);
                _fixMenu();
            });

            $('.js-blog-article__handler').on('click', function(evt) {
                evt.preventDefault();

                $(this).parents('.t-blog-article').toggleClass('close');
            });
        };

    return {
        init: _addListener
    }
})();

module.exports = blogMenu;