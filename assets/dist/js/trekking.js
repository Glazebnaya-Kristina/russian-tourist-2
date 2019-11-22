$(document).ready(function () {
   jcf.replaceAll();


   jcf.setOptions('Scrollable', {
      alwaysPreventMouseWheel: true,
      mouseWheelStep: 15
   });


   var btnHike = document.querySelector('.hike__wrapper-want');

   btnHike.addEventListener('click', function () {
      btnHike.classList.toggle('hike__wrapper-want--active');
   })
});
