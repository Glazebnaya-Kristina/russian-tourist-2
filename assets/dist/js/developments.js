$(document).ready(function () {
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