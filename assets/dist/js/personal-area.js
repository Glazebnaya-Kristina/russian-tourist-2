$(document).ready(function () {
   jcf.replaceAll();

   var btnHike = document.querySelectorAll('.hike__wrapper-want');

   btnHike.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
         jcf.replaceAll();
      });
      item.addEventListener('click', function () {
         item.classList.toggle('hike__wrapper-want--active');
      })
   });


   jcf.setOptions('Scrollable', {
      alwaysPreventMouseWheel: false,
      mouseWheelStep: 1
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


   $(".input-file").change(function(){
      var input = (this);
      var image = $('.input-image');
      var imageUser = $('.user__img');
      if (input.files && input.files[0]) {
         var reader = new FileReader();
         reader.onload = function (e) {
            image.attr('src', e.target.result);
            imageUser.attr('src', e.target.result);
         };
         reader.readAsDataURL(input.files[0]);
      }
   });

   $(".input-file--trip").change(function(){
      var input = (this);
      var image = $('.input-image--trip');
      if (input.files && input.files[0]) {
         var reader = new FileReader();
         reader.onload = function (e) {
            image.attr('src', e.target.result);
         };
         reader.readAsDataURL(input.files[0]);
      }
   });

   $(".input-file--trip-more").change(function(){
      var input = (this);
      var imageMore = $(this).closest('.label').find('.input-image--trip-more');
      if (input.files && input.files[0]) {
         var reader = new FileReader();
         reader.onload = function (e) {
            imageMore.attr('src', e.target.result);
         };
         reader.readAsDataURL(input.files[0]);
      }
   });

   var message = document.querySelectorAll('.message__top');

   message.forEach(function (item) {
      item.addEventListener('click', function () {
         this.closest('.message__item').classList.toggle('message__item--active');
      })
   });

   $('.message__top').bind('click', function(){
      $(this).next('.message__wrapper').toggle('message__wrapper--active');
   });
});