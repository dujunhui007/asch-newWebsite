$(document).ready(
  // $("nav .navRightItems ").addClass("equalThan").removeClass("moreThan")
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("nav").css("background", "#d3edf6");
      $("nav .navRightItems ").addClass("moreThan").removeClass("equalThan");
    } else {
      $("nav").css("background", "#28a5d0");
      $("nav .navRightItems ").addClass("equalThan").removeClass("moreThan");
    }
  })
);