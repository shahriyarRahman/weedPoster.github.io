
$(document).ready(function () {
    $('.toggle-botton').on('click', () => {
        $(".collapsable").addClass("show");
    })
    $('.cross-botton').on('click', () => {
        $(".collapsable").removeClass("show");
    })
});
