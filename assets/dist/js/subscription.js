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

   jcf.setOptions('Scrollable', {
      alwaysPreventMouseWheel: false,
      mouseWheelStep: 15
   });

   // jcf.setOptions('Select', {
   //    useCustomScroll: false,
   //    maxVisibleItems: 4
   // });

   jcf.replaceAll();

   // $('input[id="radio-7"]').change(function () {
   //    if ($(this).prop('checked', true)) {
   //       $('.buy-print-journal__pickup').css("display", "block")
   //    } else if ($(this).prop('checked', false)) {
   //       $('.buy-print-journal__pickup').css("display", "none")
   //    }
   // });


});