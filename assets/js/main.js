
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
    var checboxes;

    $("td .checkbox-container input[type='checkbox']").on('click', (e) => {
        $(e.target).parents('tr').toggleClass('active')
    })
    $("#selectAll input[type='checkbox']").on('click', (e) => {
        checboxes = $(e.target).parents('table').find("td .checkbox-container input[type='checkbox']");
        $("#deSelectAll input[type='checkbox']").prop("checked", false);
        if ($("#selectAll input[type='checkbox']:checked").length > 0) {
            checboxes.prop("checked", true);
        }
        else if ($("#selectAll input[type='checkbox']:not(:checked)").length > 0) {
            checboxes.prop("checked", false);
        }
        if (checboxes.prop("checked") == true) {
            checboxes.parents('tr').addClass("active");
        } else if (checboxes.prop("checked") == false) {
            checboxes.parents('tr').removeClass("active");
        }
    });
    $("#deSelectAll input[type='checkbox']").on('click', (e) => {
        $("#selectAll input[type='checkbox']").prop("checked", false);
        checboxes = $(e.target).parents('table').find("td .checkbox-container input[type='checkbox']");
        checboxes.prop("checked", false);
        if (checboxes.prop("checked") == true) {
            checboxes.parents('tr').addClass("active");
        } else if (checboxes.prop("checked") == false) {
            checboxes.parents('tr').removeClass("active");
        }
    });
});
//bulk action checkbox drop down
var expanded = false;

function showCheckboxes(index) {
    checkboxes = document.querySelectorAll(".checkboxes");
    if (!expanded) {
        checkboxes[index].style.display = "block";
        expanded = true;
    } else {
        checkboxes[index].style.display = "none";
        expanded = false;
    }
}