$(document).ready(function () {
    $(function () {
        $("#leftText").click(function () {
            //$(this).fadeTo(600, 0.3);
            $(this).hide();
        });

        $("#rightText").click(function () {
            //$(this).fadeTo(600, 0.8);
            $(this).hide();
        });

        $("#effectText").click(function () {
            $(".submenu").slideToggle(500);
        });
    });
});
