
$(document).ready(function () {
    $('.toggle-botton').on('click', () => {
        $(".collapsable").addClass("show");
    })
    $('.cross-botton').on('click', () => {
        $(".collapsable").removeClass("show");
    })
    $('.account .toggle-botton').on('click', () => {
        $(".account-sidebar").addClass("show");
    })
    $('.account .cross-botton').on('click', () => {
        $(".account-sidebar").removeClass("show");
    })
    $("td .checkbox-container input[type='checkbox']").on('click', (e) => {
        selectCheckBox();
    })
    var checboxes = $("td .checkbox-container input[type='checkbox']");
    $("#selectAll input[type='checkbox']").on('click', (e) => {

        $("#deSelectAll input[type='checkbox']").prop("checked", false);
        if ($("#selectAll input[type='checkbox']:checked").length > 0) {
            checboxes.prop("checked", true);
        }
        else if ($("#selectAll input[type='checkbox']:not(:checked)").length > 0) {
            checboxes.prop("checked", false);
        }
        selectCheckBox();
    });
    $("#deSelectAll input[type='checkbox']").on('click', (e) => {
        $("#selectAll input[type='checkbox']").prop("checked", false);
        checboxes.prop("checked", false);
        selectCheckBox();
    });
    function selectCheckBox() {
        $("td .checkbox-container input[type='checkbox']:checked").parent().parent().parent().addClass("active");
        $("td .checkbox-container input[type='checkbox']:not(:checked)").parent().parent().parent().removeClass("active");

    }

});
