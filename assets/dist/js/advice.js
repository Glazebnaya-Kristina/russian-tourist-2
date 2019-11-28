$(document).ready(function () {
   $('.equipment__carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: 'equipment__dots',
      customPaging: function (slider, i) {
         var current = i + 1;
         current = current < 10 ? "0" + current : current;
         var thumb = $(slider.$slides[current]).data();
         return '<button type="button" class="equipment__dot-item">' + current + '</button>';
      },
      fade: true
   });

   /*--- Пагинация ---*/
   var paginatinItem = document.querySelectorAll('.pagination li');

   for (var i = 0; i < paginatinItem.length; i++) {
      paginatinItem[i].onclick = function (e) {
         e.preventDefault();
         if (this.classList) {
            for (var j = 0; j < paginatinItem.length; j++) {
               paginatinItem[j].classList.remove('active');
            }
            this.classList.add('active');
         } else {
            this.active += ' ' + active;
         }
      }
   }

   $('.carousel-3D__list').slick({
      infinite: true,
      slidesToShow: 3,
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      variableWidth: true,
      prevArrow: '<button type="button" class="button-arrow literature__arrow literature__arrow--left"><i class="icon-right-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow literature__arrow literature__arrow--right"><i class="icon-right-arrow"></i></button>',
      dots: false,
      asNavFor: '.carousel-content__list',
      responsive: [
         {
            breakpoint: 1880,
            settings: {
               arrows: false
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               centerMode: false,
               variableWidth: false
            }
         }
      ]
   });
   $('.carousel-content__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="button-arrow button-arrow--gold carousel-content__arrow carousel-content__arrow--left"><i class="icon-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow button-arrow--gold carousel-content__arrow carousel-content__arrow--right"><i class="icon-arrow"></i></button>',
      fade: true,
      asNavFor: '.carousel-3D__list'
   });

});