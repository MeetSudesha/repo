$(document).ready(function() {
    $('.slick-1').slick({
        autoplay: false,
        autoplayspeed: 2000,
        dots: true,
        arrows: true,
        slidestoshow: 1,
        slidestoscroll: 1,
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,

    });
});