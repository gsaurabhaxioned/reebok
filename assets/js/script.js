$(document).ready(function () {
    $(".ham").click(function () {
        $(".banner-menus-container").slideToggle();
        $(this).toggleClass("cross");
    });


$('.slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
          
});



let title = document.querySelectorAll(".banner-menus li span");
title.forEach(i => {
    i.addEventListener('click', function () {
        title.forEach(i => {
            i.nextSibling.nextSibling.style.display = "none";
        })
        i.nextSibling.nextSibling.style.display = "flex";
    })
})