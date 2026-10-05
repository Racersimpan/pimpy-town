$(document).ready(function () {
    $(".submenu").hide();

    $("#leftText").on("click", function () {
        $(this).hide(500);
    });

    $("#rightText").on("click", function () {
        $(this).hide(500);
    });

    $("#effectText").on("click", function () {
        $(".submenu").slideToggle(500);
    });
});
