$(document).ready(function() {
  // functionality for book collection page
  ['gow', 'omm', 'tp', 'tc', 'tr', 'tg'].forEach(x => {
    $(".novels-page__img-" + x).click(function(e) {
      e.preventDefault();

      $(".novels-page__img-info-container")
        .not(".novels-page__info-" + x)
        .hide();

      $(".novels-page__info-" + x).slideToggle("fast");
    });
  });
});
$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000, //3000ms = 3s;
  autoplayHoverPause: true,
  nav:true
});



