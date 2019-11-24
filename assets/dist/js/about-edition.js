$(document).ready(function () {

   $('.archive-edition__list').slick({
      centerMode: true,
      centerPadding: '0',
      infinite: true,
      slidesToShow: 5,
      arrows: true,
      prevArrow: '<button type="button" class="button-arrow archive-edition__arrow archive-edition__arrow--left"><i class="icon-right-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow archive-edition__arrow archive-edition__arrow--right"><i class="icon-right-arrow"></i></button>',
      dots: false,
      responsive: [
         {
            breakpoint: 1345,
            settings: {
               centerMode: true,
               centerPadding: '0',
               infinite: true,
               slidesToShow: 3,
               dots: false
            }
         },
         {
            breakpoint: 640,
            settings: {
               centerMode: false,
               centerPadding: '0',
               infinite: true,
               slidesToShow: 1,
               dots: false
            }
         }
      ]
   });

   $('.team__partners-carousel').slick({
      infinite: true,
      slidesToShow: 5,
      arrows: true,
      prevArrow: '<button type="button" class="button-arrow team__arrow team__arrow--left"><i class="icon-right-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow team__arrow team__arrow--right"><i class="icon-right-arrow"></i></button>',
      dots: false,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               infinite: true,
               slidesToShow: 5,
               variableWidth: false,
               dots: false
            }
         },
         {
            breakpoint: 768,
            settings: {
               infinite: true,
               slidesToShow: 3,
               variableWidth: false,
               dots: false
            }
         },
         {
            breakpoint: 480,
            settings: {
               infinite: true,
               slidesToShow: 2,
               variableWidth: false,
               dots: false
            }
         }
      ]
   });

   $('.archive-edition__list .fancybox-link').fancybox({
      backFocus: false
   });
});