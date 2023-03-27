$("li").mouseenter(function () {
  var image = $(this).attr("data-image");
  $("body").css({
    "background-image": "url(" + image + ")",
  });
});

$("li").mouseleave(function () {
  $("body").css({
    "background-image": "",
  });
});
