if($(window).width() < 768) {
  $(".menu").slideUp();
  $(".navbar-login").slideUp();
}

$(window).resize(function() {
  if($(window).width() < 768) {
    $(".menu").slideUp();
    $(".navbar-login").slideUp();
  }
});

$("nav .hamburger").click(function () {
  $(".menu").slideToggle();
  $(".navbar-login").slideToggle();

});

$(document).ready(function () {
  $('.speciality-carousel').owlCarousel({
    items: 6,
    loop: true,
    margin: 50,
    stagePadding: 50,
    autoplay: true,
    // autoplayTimeout: 3500,
    mouseDrag: true,
    touchDrag: true,
    // nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        // nav: true
      },
      577: {
        items: 3,
        nav: false
      },
      769: {
        items: 4,
        nav: false
      },
      992: {
        items: 6,
        nav: false,
      }
    }
  });
  $('.doctor-carousel').owlCarousel({
    items: 3,
    // loop: true,
    margin: 50,
    stagePadding: 50,
    // autoplay: true,
    // autoplayTimeout: 3500,
    mouseDrag: true,
    touchDrag: true,
    // nav: true,
    // responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      577: {
        items: 2,
        nav: false
      },
      769: {
        items: 2,
        nav: false
      },
      992: {
        items: 3,
        nav: false,
      }
    }
  })
});
