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

   function initMap() {

      var bluhera = {lat: 57.6686531, lng: 46.5856643};
      var ducy = {lat: 49.5509507, lng: 25.5893844};
      var ipp = {lat: 47.9547219, lng: 21.7162095};
      var mayak = {lat: 44.8017258, lng: 10.318929};
      var mokko = {lat: 36.5563376, lng: 2.7858127};
      var tbilici = {lat: 41.7136682, lng: 44.7907789};
      var yzbek = {lat: 46.517961, lng: 58.387727};

      var map = new google.maps.Map(
         document.getElementById('map'), {zoom: 11, center: bluhera});

      var marker1 = new google.maps.Marker({position: bluhera, map: map, icon: '../img/flag.png'});
      var marker2 = new google.maps.Marker({position: ducy, map: map, icon: '../img/flag.png'});
      var marker3 = new google.maps.Marker({position: ipp, map: map, icon: '../img/flag.png'});
      var marker4 = new google.maps.Marker({position: mayak, map: map, icon: '../img/flag.png'});
      var marker5 = new google.maps.Marker({position: mokko, map: map, icon: '../img/flag.png'});
      var marker6 = new google.maps.Marker({position: tbilici, map: map, icon: '../img/flag.png'});
      var marker7 = new google.maps.Marker({position: yzbek, map: map, icon: '../img/flag.png'});

      var StreetBlu = '<div id="content" class="map-popup">' +
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
         '<a href="article-post.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
         '</div>';
      var StreetDucy = '<div id="content" class="map-popup">' +
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
         '<a href="article-post.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
         '</div>';
      var StreetIpp = '<div id="content" class="map-popup">' +
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
         '<a href="article-post.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
         '</div>';
      var StreetMayak = '<div id="content" class="map-popup">' +
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
         '<a href="article-post.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
         '</div>';
      var StreetMokko = '<div id="content" class="map-popup">' +
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
         '<a href="article-post.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
         '</div>';
      var StreetTbilici = '<div id="content" class="map-popup">' +
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
         '<a href="article-post.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
         '</div>';
      var Streetyzbek = '<div id="content" class="map-popup">' +
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
         '<a href="article-post.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>'+
         '</div>';

      // Создаем информационное окно
      var infoBlu = new google.maps.InfoWindow({
         content: StreetBlu,
         maxWidth: 355
      });
      var infoDucy = new google.maps.InfoWindow({
         content: StreetDucy,
         maxWidth: 400
      });
      var infoIpp = new google.maps.InfoWindow({
         content: StreetIpp,
         maxWidth: 400
      });
      var infoMayak = new google.maps.InfoWindow({
         content: StreetMayak,
         maxWidth: 400
      });
      var infoMokko = new google.maps.InfoWindow({
         content: StreetMokko,
         maxWidth: 400
      });
      var infoTbilici = new google.maps.InfoWindow({
         content: StreetTbilici,
         maxWidth: 400
      });
      var infoyzbek = new google.maps.InfoWindow({
         content: Streetyzbek,
         maxWidth: 400
      });

      // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
      marker1.addListener('click', function () {
         infoBlu.open(map, marker1);
         // marker1 = new google.maps.Marker({position: bluhera, map: map, icon: '../img/user.png'});
      });

      marker2.addListener('click', function () {
         infoDucy.open(map, marker2);
      });
      marker3.addListener('click', function () {
         infoIpp.open(map, marker3);
      });
      marker4.addListener('click', function () {
         infoMayak.open(map, marker4);
      });
      marker5.addListener('click', function () {
         infoMokko.open(map, marker5);
      });
      marker6.addListener('click', function () {
         infoTbilici.open(map, marker6);
      });
      marker7.addListener('click', function () {
         infoyzbek.open(map, marker7);
      });
   }

   initMap();

});
