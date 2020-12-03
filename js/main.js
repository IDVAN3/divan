'use strict'
$(document).ready(function () {
    $('.product__heart').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider-product",
    });

    $('.slider-product').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".sliderbig",
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0
    });
});