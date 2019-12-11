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

      if ($price.val() > 0){
         $price.val(parseInt($price.val()) - 1);
         $price.change();
         $(this).css('color', '#41a1b6');
         $(this).siblings(".button-like").css('color', '#a4a4a4');
         console.log(0);
      }
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
   });


   // блок с ответом
   $('.comment__feedback a').click(function (e) {
      e.preventDefault();
      var comentHistory = $('.comment__history-answer');
      $(this).parents('.comment__history-item').append(comentHistory);
      $(this).parents('.comment__history').find('.comment__history-answer').toggle('comment__history-answer--active');
   });


   $('.jcf-real-element').on('mouseover', function(){
      $(this).parent().addClass('jcf-upload-button--active');
   }).on('mouseout', function(){
      $(this).parent().removeClass('jcf-upload-button--active');
   })
});