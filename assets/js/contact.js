$(function () {
  // contact form animations
  $("#sendMessage").click(function () {
    $("#contactForm").fadeToggle();
  });
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
    }
  });
});

$(function () {
  $("#closeBtn").click(function () {
    $("#contactForm").fadeOut();
  });
});
