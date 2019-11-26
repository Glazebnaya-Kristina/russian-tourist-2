$(document).ready(function () {
   var postImg = document.querySelectorAll('.painting__article-img');


   postImg.forEach(function (item) {
      item.addEventListener('click', function () {
         var post = document.querySelectorAll('.preview-article__article');

         post.forEach(function (item2) {
            item2.classList.toggle('preview-article__article--active');
         });
      })
   });
});