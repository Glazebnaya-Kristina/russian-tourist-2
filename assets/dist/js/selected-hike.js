$(document).ready(function () {
   jcf.replaceAll();

   jcf.setOptions('Scrollable', {
      alwaysPreventMouseWheel: true,
      mouseWheelStep: 15
   });

   var assistants = $('.carousel-3D__list');

   assistants.on("init", function (event, slick) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants.slick({
      infinite: true,
      slidesToShow: 3,
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      prevArrow: '<button type="button" class="button-arrow carousel-3D__arrow carousel-3D__arrow--left"><i class="icon-right-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow carousel-3D__arrow carousel-3D__arrow--right"><i class="icon-right-arrow"></i></button>',
      dots: false
   });

   var assistants2 = $('.participants__carousel');

   assistants2.on("init", function (event, slick) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants2.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   assistants2.slick({
      infinite: true,
      rows: 2,
      slidesPerRow: 4,
      responsive: [
         {
            breakpoint: 1345,
            settings: {
               slidesPerRow: 3,
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesPerRow: 2,
            }
         }
      ],
      arrows: true,
      nextArrow: document.querySelector('.participants__next'),
      prevArrow: document.querySelector('.participants__prev'),
      dots: false
   });


   // блок с картой
   var btnOpenMap = document.querySelector('.selected-hike-header__button'),
      blockMap = document.querySelector('.selected-hike-header__wrapper-route'),
      closeblockMap = document.querySelector('.selected-hike-header__close');

   btnOpenMap.addEventListener('click', function () {
      blockMap.classList.add('selected-hike-header__wrapper-route--active');
   });
   closeblockMap.addEventListener('click', function () {
      blockMap.classList.remove('selected-hike-header__wrapper-route--active');
   });

   // лайки и дизлайки
   $(".comment__feedback .button-like").click(function() {
      var $price = $(this).siblings(".comment__input");
      $price.val(parseInt($price.val()) + 1);
      $price.change();
      $(this).css('color', '#41a1b6');
      $(this).siblings(".button-dislike").css('color', '#a4a4a4');
   });

   $(".comment__feedback .button-dislike").click(function() {
      var $price = $(this).siblings(".comment__input");
      $price.val(parseInt($price.val()) - 1);
      $price.change();
      $(this).css('color', '#41a1b6');
      $(this).siblings(".button-like").css('color', '#a4a4a4');
   });

   // блок с ответом
   $('.comment__feedback a').click(function (e) {
      e.preventDefault();
      var comentHistory = $('.comment__history-answer');
      $(this).parents('.comment__history-item').append(comentHistory);
      $(this).parents('.comment__history').find('.comment__history-answer').toggle('comment__history-answer--active');
   });

   $('.jcf-real-element').on('mouseover', function(){
      $(this).parent().addClass('jcf-upload-button--active');
   }).on('mouseout', function(){
      $(this).parent().removeClass('jcf-upload-button--active');
   });


   // кнопка ютуб
   $('.button-play').click(function () {
      var dataYoutube = $('.youtube-video__wrapper-modal').attr('data-youtube');

      $('.youtube-video__wrapper-modal').addClass('youtube-video__wrapper-modal--active');

      $('.youtube-video__content-video').html('<iframe id="player" src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
   });

   $('.youtube-video__close').click(function () {
      $('.youtube-video__wrapper-modal').removeClass('youtube-video__wrapper-modal--active');
      $('.youtube-video__content-video').html('');
   });

   // карта
   var map;
   var infoWindow;

   function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 50.4403076, lng: 30.5187587},
         zoom: 5,
         icon: '../img/flag.png'
      });

      infoWindow = new google.maps.InfoWindow({
         pixelOffset: new google.maps.Size(0, 70)
      });
      addMarkers();

      map.addListener('click', function() {
         if (infoWindow) infoWindow.close();
      });
   }


   function addMarkers() {
      addMarker({
         coords: { lat: 57.6686531, lng: 46.5856643 },
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>'+
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>'+
            '<ul class="map-popup__list">'+
            '<li class="map-popup__item">Сванетия</li>'+
            '<li class="map-popup__item">Эльбрус восточная вершина</li>'+
            '<li class="map-popup__item">Абхазия</li>'+
            '<li class="map-popup__item">Казбек</li>'+
            '<li class="map-popup__item">Тридцатка</li>'+
            '<li class="map-popup__item">Сванетия</li>'+
            '</ul>'+
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
            '</div>',
      });
      addMarker({
         coords: { lat: 49.5509507, lng: 25.5893844 },
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>'+
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>'+
            '<ul class="map-popup__list">'+
            '<li class="map-popup__item">Сванетия</li>'+
            '<li class="map-popup__item">Эльбрус восточная вершина</li>'+
            '<li class="map-popup__item">Абхазия</li>'+
            '<li class="map-popup__item">Казбек</li>'+
            '<li class="map-popup__item">Тридцатка</li>'+
            '<li class="map-popup__item">Сванетия</li>'+
            '</ul>'+
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
            '</div>',
      });
      addMarker({
         coords: { lat: 47.9547219, lng: 21.7162095 },
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>'+
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>'+
            '<ul class="map-popup__list">'+
            '<li class="map-popup__item">Сванетия</li>'+
            '<li class="map-popup__item">Эльбрус восточная вершина</li>'+
            '<li class="map-popup__item">Абхазия</li>'+
            '<li class="map-popup__item">Казбек</li>'+
            '<li class="map-popup__item">Тридцатка</li>'+
            '<li class="map-popup__item">Сванетия</li>'+
            '</ul>'+
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
            '</div>',
      });
      addMarker({
         coords: { lat: 44.8017258, lng: 10.318929 },
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>'+
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>'+
            '<ul class="map-popup__list">'+
            '<li class="map-popup__item">Сванетия</li>'+
            '<li class="map-popup__item">Эльбрус восточная вершина</li>'+
            '<li class="map-popup__item">Абхазия</li>'+
            '<li class="map-popup__item">Казбек</li>'+
            '<li class="map-popup__item">Тридцатка</li>'+
            '<li class="map-popup__item">Сванетия</li>'+
            '</ul>'+
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
            '</div>',
      });
      addMarker({
         coords: { lat: 36.5563376, lng: 2.7858127 },
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>'+
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>'+
            '<ul class="map-popup__list">'+
            '<li class="map-popup__item">Сванетия</li>'+
            '<li class="map-popup__item">Эльбрус восточная вершина</li>'+
            '<li class="map-popup__item">Абхазия</li>'+
            '<li class="map-popup__item">Казбек</li>'+
            '<li class="map-popup__item">Тридцатка</li>'+
            '<li class="map-popup__item">Сванетия</li>'+
            '</ul>'+
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
            '</div>',
      });
      addMarker({
         coords: { lat: 41.7136682, lng: 44.7907789 },
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>'+
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>'+
            '<ul class="map-popup__list">'+
            '<li class="map-popup__item">Сванетия</li>'+
            '<li class="map-popup__item">Эльбрус восточная вершина</li>'+
            '<li class="map-popup__item">Абхазия</li>'+
            '<li class="map-popup__item">Казбек</li>'+
            '<li class="map-popup__item">Тридцатка</li>'+
            '<li class="map-popup__item">Сванетия</li>'+
            '</ul>'+
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
            '</div>',
      });
      addMarker({
         coords: { lat: 46.517961, lng: 58.387727 },
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>'+
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>'+
            '<ul class="map-popup__list">'+
            '<li class="map-popup__item">Сванетия</li>'+
            '<li class="map-popup__item">Эльбрус восточная вершина</li>'+
            '<li class="map-popup__item">Абхазия</li>'+
            '<li class="map-popup__item">Казбек</li>'+
            '<li class="map-popup__item">Тридцатка</li>'+
            '<li class="map-popup__item">Сванетия</li>'+
            '</ul>'+
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
            '</div>',
      });
   }


   var img1 = "../img/flag.png";

   function addMarker(props) {
      var marker = new google.maps.Marker({
         position: props.coords,
         map: map,
         icon: img1
      });

      if (props.content) {
         marker.addListener('click', function () {
            infoWindow.setContent(props.content);
            infoWindow.open(map, marker);
         });
      }
   }

   initMap();

});
