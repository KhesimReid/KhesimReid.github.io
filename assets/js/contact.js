$(function() {
  // contact form animations
  $("#sendMessage").click(function() {
    $("#contactForm").fadeToggle();
  });
  $(document).mouseup(function(e) {
    var container = $("#contactForm");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
    }
  });
});

$(function() {
  $("#closeBtn").click(function() {
    $("#contactForm").fadeOut();
  });
});

$(function() {
  x = 2;
  y = 2 * 3;
  z = 2 + 2;
  var messageForm = document.getElementById("messageForm");
  messageForm.setAttribute(
    "action",
    "https:" +
      "//formspree.io/" +
      "k" +
      "." +
      "a" +
      "." +
      "reid" +
      "" +
      x +
      "" +
      y +
      "" +
      z +
      "@" +
      "gmail" +
      "." +
      "com"
  );
});
