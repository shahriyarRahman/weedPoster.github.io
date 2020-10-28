
$('.owl-carousel').owlCarousel({
    loop: false,
    autoWidth: true,
    margin: 150,
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
        },
        1400: {
            items: 4
        }
    }
})

$(document).ready(function () {
    $('.toggle-botton').on('click', () => {
        $(".collapsable").addClass("show");
    })
    $('.cross-botton').on('click', () => {
        $(".collapsable").removeClass("show");
    })
});