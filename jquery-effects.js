$(document).ready(function () {
    $(function () {
  $("#leftText").click(function () {
    $(this).fadeTo(600, 0.3);
  });

  $("#rightText").click(function () {
    $(this).fadeTo(600, 0.8);
  });

  $("#effectText").click(function () {
    $(".submenu").slideToggle(500);
  });
});
});
