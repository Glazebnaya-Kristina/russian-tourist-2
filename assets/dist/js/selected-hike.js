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


   // блок с картой
   var btnOpenMap = document.querySelector('.selected-hike-header__button'),
      blockMap = document.querySelector('.selected-hike-header__wrapper-route'),
      closeblockMap = document.querySelector('.selected-hike-header__close');

   btnOpenMap.addEventListener('click', function () {
      blockMap.classList.add('selected-hike-header__wrapper-route--active');
   });
   closeblockMap.addEventListener('click', function () {
      blockMap.classList.remove('selected-hike-header__wrapper-route--active');
   });

   // лайки и дизлайки
   $(".comment__feedback .button-like").click(function() {
      var $price = $(this).siblings(".comment__input");
      $price.val(parseInt($price.val()) + 1);
      $price.change();
      $(this).css('color', '#41a1b6');
      $(this).siblings(".button-dislike").css('color', '#a4a4a4');
   });

   $(".comment__feedback .button-dislike").click(function() {
      var $price = $(this).siblings(".comment__input");
      $price.val(parseInt($price.val()) - 1);
      $price.change();
      $(this).css('color', '#41a1b6');
      $(this).siblings(".button-like").css('color', '#a4a4a4');
   });

   // блок с ответом
   $('.comment__feedback a').click(function (e) {
      e.preventDefault();
      var comentHistory = $('.comment__history-answer');
      $(this).parents('.comment__history-item').append(comentHistory);
      $(this).parents('.comment__history').find('.comment__history-answer').toggle('comment__history-answer--active');
   });


   // кнопка ютуб
   $('.button-play').click(function () {
      var dataYoutube = $('.youtube-video__wrapper-modal').attr('data-youtube');

      $('.youtube-video__wrapper-modal').addClass('youtube-video__wrapper-modal--active');

      $('.youtube-video__content-video').html('<iframe id="player" src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
   });

   $('.youtube-video__close').click(function () {
      $('.youtube-video__wrapper-modal').removeClass('youtube-video__wrapper-modal--active');
      $('.youtube-video__content-video').html('');
   })

});
