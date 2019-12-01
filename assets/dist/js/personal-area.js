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
});