$(document).ready(function () {

   var postImg = document.querySelectorAll('.painting__article-img');

   postImg.forEach(function (item) {
      item.addEventListener('click', function () {
         this.closest('.preview-article__article').classList.toggle('preview-article__article--active');
      })
   });


   $('.books__carousel-nav').slick({
      slidesToShow: 19,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      asNavFor: '.carousel-content__list',
      centerMode: true,
      variableWidth: true
   });
   $('.carousel-content__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="button-arrow button-arrow--gold carousel-content__arrow carousel-content__arrow--left"><i class="icon-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow button-arrow--gold carousel-content__arrow carousel-content__arrow--right"><i class="icon-arrow"></i></button>',
      fade: true,
      asNavFor: '.books__carousel-nav'
   });
});