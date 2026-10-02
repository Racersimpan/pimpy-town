function fadeFirstText() {
  $("#leftText").fadeTo(600, 0.3);
}

function fadeSecondText() {
  $("#rightText").fadeTo(600, 0.8);
}

$("#leftText").click(fadeFirstText);
  $("#rightText").click(fadeSecondText);

$(".effectText").click(function () {
  $(".submenu").slideToggle(500);
});