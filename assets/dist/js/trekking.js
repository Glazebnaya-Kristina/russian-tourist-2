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

   $('.jcf-real-element').on('mouseover', function(){
      $(this).parent().addClass('jcf-upload-button--active');
   }).on('mouseout', function(){
      $(this).parent().removeClass('jcf-upload-button--active');
   })
});
