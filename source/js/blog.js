var blogNav = function() {
    var
        article = document.querySelector('.blog-article__item'),
        nav_item = document.querySelector('.js-blog-sidebar__item'),
        nav_wrap = document.querySelector('.js-blog-sidebar'),
        article_position = [],
        offsetHeight = 200,

        _articlePosition = function(el) {
            var len = el.length;

            for (var i = 0; i < len; i++) {
                article_position[i] = {};
                article_position[i].top = el.eq(i).offset().top - offsetHeight;
                article_position[i].bottom = el.eq(i).offset().top + el.eq(i).innerHeight();
            }
        },
        _fixNav = function() {
            var scroll = window.pageYOffset;

            if (scroll < article.offset().top) {
                nav_wrap.removeClass('fixed');
            } else {
                nav_wrap.addClass('fixed');
            }
        },
        _scrollPage = function() {
            var scroll = window.pageYOffset;

            for (var i = 0; i < article_position.length; i++) {
                if (scroll >= article_position[i].top && article_position[i].bottom >= scroll) {
                    nav_item.eq(i)
                        .addClass('blog-sidebar__item--active').siblings()
                        .removeClass('blog-sidebar__item--active');
                }
            }
        },
        _menuOnClick = function(evt) {
            evt.preventDefault();

            var target = evt.target;
            var index = target.index();
            var sectionOffset = article.eq(index).offset().top;

            $(document).off('scroll', _scrollPage);
            $('body').animate({
                'scrollTop': sectionOffset
            }, function() {
                target.addClass('blog-sidebar__item--active').siblings()
                    .removeClass('blog-sidebar__item--active');
                $(document).on('scroll', _scrollPage);
            });

        },
        addListener = function() {
            $('.js-blog-sidebar__list').on('click', _menuOnClick);

            $(document).on('scroll', _scrollPage);
            $(document).on('scroll', _fixNav);

            $(window).on('load', function(evt) {
                article_position(article);
            });

            $(window).on('resize', function(evt) {
                article_position(article);
            });
        };

    return {
        init: addListener
    }
}

module.exports = blogNav;