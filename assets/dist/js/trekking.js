$(document).ready(function () {
   jcf.replaceAll();


   jcf.setOptions('Scrollable', {
      alwaysPreventMouseWheel: true,
      mouseWheelStep: 15
   });


   var btnHike = document.querySelectorAll('.hike__wrapper-want');

   btnHike.forEach(function (item) {
      item.addEventListener('click', function () {
         item.classList.toggle('hike__wrapper-want--active');
      })
   });
});
