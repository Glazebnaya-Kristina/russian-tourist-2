$(document).ready(function () {
   $('.equipment__carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: 'equipment__dots',
      customPaging : function(slider, i) {
         var current = i + 1;
         current = current < 10 ? "0" + current : current;
         var thumb = $(slider.$slides[current]).data();
         return '<button type="button" class="equipment__dot-item">'+current+'</button>';
      },
      fade: true
   });

   /*--- Пагинация ---*/
   var paginatinItem = document.querySelectorAll('.pagination li');

   for( var i = 0; i < paginatinItem.length; i++){
      paginatinItem[i].onclick = function(e){
         e.preventDefault();
         if(this.classList) {
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