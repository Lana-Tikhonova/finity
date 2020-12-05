$(document).ready(function () {
    $('.category-slider').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 5,
        slidesToScroll: 2,
        prevArrow: $('.sliders-arrow__prev'),
        nextArrow: $('.sliders-arrow__next'),
        // speed: 300,
        responsive: [
            {
                breakpoint: 1660,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            },
        ]
    });
});