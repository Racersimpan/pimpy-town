$(document).ready(function () {
    console.log("jQuery loaded");

    $("#leftText").on("click", function () {
        console.log("left clicked");
        $(this).hide(500);
    });

    $("#rightText").on("click", function () {
        console.log("right clicked");
        $(this).hide(500);
    });

    $("#effectText").on("click", function () {
        console.log("effect clicked");
        $(".submenu").slideToggle(500);
    });
});
