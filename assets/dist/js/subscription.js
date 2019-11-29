$(document).ready(function () {
   $('.subscription__carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="button-arrow subscription__arrow subscription__arrow--left"><i class="icon-right-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow subscription__arrow subscription__arrow--right"><i class="icon-right-arrow"></i></button>',
      responsive: [
         {
            breakpoint: 1345,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });
});