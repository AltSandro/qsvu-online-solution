$(document).ready(function () {
  function setCustomElementHeight() {
    var afterHeight = $(".menuTop").height();
    $(".menuTop-after").css("height", afterHeight + "px");
  }
  setCustomElementHeight();

  $(window).resize(function () {
    setCustomElementHeight();
  });
});
