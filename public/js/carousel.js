$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        animateLeft: "slideOutLeft",
        autoWeigth: true,
        // animateRight: "slideInRight",
    });
  });

var owl = $(".owl-carousel");
owl.owlCarousel(sliderOptions);

$(".prev-slide").click(function() {
  owl.trigger('prev.owl.carousel');
});

$(".next-slide").click(function() {
  owl.trigger('next.owl.carousel');
});