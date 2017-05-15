/*
Theme Name: Tribus - Multipurpose Template
Theme URI: https://wrapbootstrap.com/theme/tribus-multipurpose-template-WB0367H15
Author: Webpixels
Author URI: http://www.webpixels.io
License URI: http://wrapbootstrap.com
*/

$(document).ready(function() {
    var Scroll = function() {
        $('html, body').stop(true, true).animate({
            scrollTop: $(this.hash).offset().top - navHeight + 1
        }, 600);
        return false;
    };
    $winWidth = $(window).width()
    nav = $(".navbar-main");
    if ($winWidth > 767) {
        nav.stick_in_parent({
            'parent': '.body-wrap',
            'recalc_every': 1
        });

        $('.navbar-nav li a[role="nav-link"]').on('click', function() {

            navHeight = $(".navbar-main").height();

            $('html, body').stop(true, true).animate({
                scrollTop: $(this.hash).offset().top - navHeight + 1
            }, 600);
            return false;
        });
    }
})

$(window).bind('scroll resize', function() {
    $winWidth = $(window).width()
    if ($winWidth > 767) {
        var nav = $(".navbar-main");
        var currentSection = null;
        $('[data-target]').each(function() {
            var element = $(this).attr('id');
            if ($('#' + element).is('*')) {
                if ($(window).scrollTop() >= $('#' + element).offset().top - nav.height()) {
                    currentSection = element;
                }
            }
        });
        $('.navbar-nav li').removeClass('active').find('a[href="#' + currentSection + '"]').parent().addClass('active');
    }
});

$(window).load(function(argument) {

})
