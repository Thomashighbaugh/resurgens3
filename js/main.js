$(document).ready(function() {
  // Logo
  const $logo = $("#logo");
  const $3hellologo = $("#helloworld");
  if (location.href.indexOf("#") !== -1) {
    if (location.href.substr(location.href.indexOf("#")) !== "#about") {
      $logo.show();
    } else {
      $hellologo.show();
    }
  }

  // Show logo
  $("#tab-container .tab a").click(function() {
    $logo.slideDown("slow");
    $hellologo.slideUp("slow");
  });
  // Hide logo
  $("#tab-about").click(function() {
    $logo.slideUp("slow");
    $hellologo.slideDown("slow");
  });
  //animations for the skill meters
  function animMeter() {
    $(".meter > span").each(function() {
      $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate(
          {
            width: $(this).data("origWidth")
          },
          1200
        );
    });
  }
  animMeter();
// create tabs for organizing content
  $("#tab-container")
    .easytabs({
      animate: true,
      updateHash: true,
      transitionIn: "slideDown",
      transitionOut: "slideUp",
      animationSpeed: 800,
      tabActiveClass: "active"
    })
    .bind("easytabs:midTransition", function(event, $clicked, $targetPanel) {
      if ($targetPanel.selector === "#resume") {
        animMeter();
      }
    });
});
