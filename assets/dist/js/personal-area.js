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
      alwaysPreventMouseWheel: true,
      mouseWheelStep: 15
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
});