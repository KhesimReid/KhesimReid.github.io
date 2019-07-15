$(function() {
  // contact form animations
  $("#sendMessage").click(function() {
    $("#contactForm").fadeToggle();
  });
  $(document).mouseup(function(e) {
    var container = $("#contactForm");

    if (
      !container.is(e.target) && // if the target of the click isn't the container...
      container.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      container.fadeOut();
    }
  });
});

$(function() {
  var messageForm = document.getElementById("messageForm");
  messageForm.setAttribute(
    "action",
    "https:" +
      "//formspree.io/" +
      "khesim" +
      "." +
      "reid" +
      "@" +
      "gmail" +
      "." +
      "com"
  );
});
