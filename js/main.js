$(function () {

    $(".rateYo").rateYo({
        "normalFil": "#D7D1C7",
        "ratedFill": "#FFB648",
        "rating": "4.5",
        "spacing": "7px",
    });

    $('.review__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        appendDots: $('.review__dots'),
        slidesToShow: 2,
        draggable: true,
        waitForAnimate: true,
    });
    $('.review__prev').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickPrev')
    })
    $('.review__next').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickNext')
    })

    $('.questions__acc-button').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__acc-button--active')) {
            $(this).removeClass('questions__acc-button--active')
            $(this).children('.questions__acc-text').slideUp()
        } else {
            $('.questions__acc-button').removeClass('questions__acc-button--active')
            $('.questions__acc-text').slideUp()
            $(this).addClass('questions__acc-button--active')
            $(this).children('.questions__acc-text').slideDown()
        }
    })
});