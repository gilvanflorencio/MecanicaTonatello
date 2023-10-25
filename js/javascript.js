$(document).ready(function () {
  var owl = $("#owl-demo")

  owl.owlCarousel({
    loop: true,
    margin: 0,
    //nav: true,
    // navText: ["<", ">"],
    autoplay: true,
    autoPlayTimeout: 2000,
    dots: false,
    responsive: {
      0: {
        items: 4
      },
      480: {
        items: 4
      },
      767: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });

    // itemsDesktop : [1199,3],
    // itemsDesktopSmall : [979,3]
    $("#botao_anterior").on('click', function(){
      owl.trigger("prev.owl.carousel");
    });

    $("#botao_proximo").on('click', function(){
      owl.trigger("next.owl.carousel");
    });
  });



