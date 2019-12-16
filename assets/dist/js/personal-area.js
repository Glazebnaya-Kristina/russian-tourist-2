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


   $('.types__close').click(function () {
      $(this).parent('.types__item').css('display', 'none');
   });


   // добавление и закрытия карточек
   var typesAddBtn = document.querySelectorAll('.types__item--add');

   typesAddBtn.forEach(function(item){

      item.addEventListener('click', function(e) {
         e.preventDefault();

         var typesAddId = this.getAttribute('data-add'),
            typesAddElem = document.querySelector('.types__item[data-add="' + typesAddId + '"]');


         var popupAdd  = document.querySelector('.popup[data-modal="add"]');
         var overlay = document.querySelector('.js-overlay-modal');
         var modal = document.querySelector('.modal');
         var btnToggle = document.querySelector('.hike__want-link');

         popupAdd.classList.remove('popup--opened');
         overlay.classList.remove('modal__overlay--opened');
         modal.classList.remove('modal--opened');
         document.querySelector('body').classList.remove('hidden');

         /* на случай, если надо что бы было переключалкой для блока hike.
          Но тога не корректно работает если в личном кабинете карточка есть, то при нажатии на hike__link
          с личного кабинета карточка убирается, а по виду, что наооборот она там есть*/

         if (item.classList.contains('hike__want-link')){
            typesAddElem.classList.toggle('types__item--active');
         } else {
            typesAddElem.classList.add('types__item--active');
         }

         /* если только добавление класса */
         // typesAddElem.classList.add('types__item--active');
      });

   });

   var closeAddTypes = document.querySelectorAll('.types__close');

   closeAddTypes.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentTypes = this.closest('.types__item');

         parentTypes.classList.remove('types__item--active');
         parentTypes.style.display = '';
      });

   });

   $('.jcf-real-element').on('mouseover', function(){
      $(this).parent().addClass('jcf-upload-button--active');
   }).on('mouseout', function(){
      $(this).parent().removeClass('jcf-upload-button--active');
   })

});