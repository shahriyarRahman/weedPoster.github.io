
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 150,
    stagePadding: 60,
    URLhashListener: true,
    dots: true,
    dotsEach: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

