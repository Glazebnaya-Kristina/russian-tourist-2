$(document).ready(function () {
   jcf.replaceAll();

   jcf.setOptions('Scrollable', {
      alwaysPreventMouseWheel: true,
      mouseWheelStep: 15
   });

   var assistants = $('.carousel-3D__list');

   assistants.on("init", function (event, slick) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants.slick({
      infinite: true,
      slidesToShow: 3,
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      prevArrow: '<button type="button" class="button-arrow carousel-3D__arrow carousel-3D__arrow--left"><i class="icon-right-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow carousel-3D__arrow carousel-3D__arrow--right"><i class="icon-right-arrow"></i></button>',
      dots: false
   });

   var btnLike = document.querySelectorAll('.button-like'),
      spanValue = document.querySelector('.comment__feedback span').textContent,
      spanValueTag = document.querySelector('.comment__feedback span'),
      btndisLike = document.querySelectorAll('.button-dislike');


   btnLike.forEach(function (item) {
      item.addEventListener('click', function () {
         item.classList.add('button-like--active');
         spanValueSum = +spanValue + 1;
         spanValueTag.innerHTML = spanValueSum;
      })
   });
   btndisLike.forEach(function (item) {
      item.addEventListener('click', function () {
         // btnLike.classList.remove('button-like--active');
         item.classList.add('button-dislike--active');
         spanValueSum = +spanValue - 1;
         spanValueTag.innerHTML = spanValueSum;
      })
   });

   var assistants2 = $('.participants__carousel');

   assistants2.on("init", function (event, slick) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants2.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants2.slick({
      infinite: true,
      rows: 2,
      slidesPerRow: 4,
      responsive: [
         {
            breakpoint: 1345,
            settings: {
               slidesPerRow: 3,
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesPerRow: 2,
            }
         }
      ],
      arrows: true,
      nextArrow: document.querySelector('.participants__next'),
      prevArrow: document.querySelector('.participants__prev'),
      dots: false
   });
});


$(document).on('click', '.button-play', function () {

   var wrapperYoutube = document.querySelector('.youtube-video__overlow');
   wrapperYoutube.classList.add('youtube-video__overlow--close');
   var $video = $('#video'),
      src = $video.attr('src');

   $video.attr('src', src + '&autoplay=1');
});