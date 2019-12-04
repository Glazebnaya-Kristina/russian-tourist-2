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


   $('.comment__feedback a').click(function (e) {
      e.preventDefault();
      var comentHistory = $('.comment__history-answer');
      $(this).parents('.comment__history-item').append(comentHistory);
      $(this).parents('.comment__history').find('.comment__history-answer').toggle('comment__history-answer--active');
   })
});