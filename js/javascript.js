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



  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});
