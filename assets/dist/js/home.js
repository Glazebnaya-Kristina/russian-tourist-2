$(function () {

   $('.header__slider').slick({
      arrows: true,
      prevArrow: $('.header__arrow--left'),
      nextArrow: $('.header__arrow--right'),
      dots: true
   });

   //карта
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

      map.addListener('click', function () {
         if (infoWindow) infoWindow.close();
      });
   }


   function addMarkers() {
      addMarker({
         coords: {lat: 57.6686531, lng: 46.5856643},
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>' +
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>' +
            '<ul class="map-popup__list">' +
            '<li class="map-popup__item">Сванетия</li>' +
            '<li class="map-popup__item">Эльбрус восточная вершина</li>' +
            '<li class="map-popup__item">Абхазия</li>' +
            '<li class="map-popup__item">Казбек</li>' +
            '<li class="map-popup__item">Тридцатка</li>' +
            '<li class="map-popup__item">Сванетия</li>' +
            '</ul>' +
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>' +
            '</div>',
      });
      addMarker({
         coords: {lat: 49.5509507, lng: 25.5893844},
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>' +
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>' +
            '<ul class="map-popup__list">' +
            '<li class="map-popup__item">Сванетия</li>' +
            '<li class="map-popup__item">Эльбрус восточная вершина</li>' +
            '<li class="map-popup__item">Абхазия</li>' +
            '<li class="map-popup__item">Казбек</li>' +
            '<li class="map-popup__item">Тридцатка</li>' +
            '<li class="map-popup__item">Сванетия</li>' +
            '</ul>' +
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>' +
            '</div>',
      });
      addMarker({
         coords: {lat: 47.9547219, lng: 21.7162095},
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>' +
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>' +
            '<ul class="map-popup__list">' +
            '<li class="map-popup__item">Сванетия</li>' +
            '<li class="map-popup__item">Эльбрус восточная вершина</li>' +
            '<li class="map-popup__item">Абхазия</li>' +
            '<li class="map-popup__item">Казбек</li>' +
            '<li class="map-popup__item">Тридцатка</li>' +
            '<li class="map-popup__item">Сванетия</li>' +
            '</ul>' +
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>' +
            '</div>',
      });
      addMarker({
         coords: {lat: 44.8017258, lng: 10.318929},
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>' +
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>' +
            '<ul class="map-popup__list">' +
            '<li class="map-popup__item">Сванетия</li>' +
            '<li class="map-popup__item">Эльбрус восточная вершина</li>' +
            '<li class="map-popup__item">Абхазия</li>' +
            '<li class="map-popup__item">Казбек</li>' +
            '<li class="map-popup__item">Тридцатка</li>' +
            '<li class="map-popup__item">Сванетия</li>' +
            '</ul>' +
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>' +
            '</div>',
      });
      addMarker({
         coords: {lat: 36.5563376, lng: 2.7858127},
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>' +
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>' +
            '<ul class="map-popup__list">' +
            '<li class="map-popup__item">Сванетия</li>' +
            '<li class="map-popup__item">Эльбрус восточная вершина</li>' +
            '<li class="map-popup__item">Абхазия</li>' +
            '<li class="map-popup__item">Казбек</li>' +
            '<li class="map-popup__item">Тридцатка</li>' +
            '<li class="map-popup__item">Сванетия</li>' +
            '</ul>' +
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>' +
            '</div>',
      });
      addMarker({
         coords: {lat: 41.7136682, lng: 44.7907789},
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>' +
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>' +
            '<ul class="map-popup__list">' +
            '<li class="map-popup__item">Сванетия</li>' +
            '<li class="map-popup__item">Эльбрус восточная вершина</li>' +
            '<li class="map-popup__item">Абхазия</li>' +
            '<li class="map-popup__item">Казбек</li>' +
            '<li class="map-popup__item">Тридцатка</li>' +
            '<li class="map-popup__item">Сванетия</li>' +
            '</ul>' +
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>' +
            '</div>',
      });
      addMarker({
         coords: {lat: 46.517961, lng: 58.387727},
         content: '<div id="content" class="map-popup">' +
            '<p class="map-popup__img"><img src="../img/map-img.jpg" alt="Фотография местости"></p>' +
            '<h3 class="map-popup__title">Название маршрута</h3>' +
            '<p class="map-popup__level"><span>Сложность:</span><img src="../img/trekking/level.png" alt="уровень сложности"></p>' +
            '<ul class="map-popup__list">' +
            '<li class="map-popup__item">Сванетия</li>' +
            '<li class="map-popup__item">Эльбрус восточная вершина</li>' +
            '<li class="map-popup__item">Абхазия</li>' +
            '<li class="map-popup__item">Казбек</li>' +
            '<li class="map-popup__item">Тридцатка</li>' +
            '<li class="map-popup__item">Сванетия</li>' +
            '</ul>' +
            '<a href="selected-hike.html" class="map-popup__link"><i class="icon-right-arrow right-arrow right-arrow--blue"></i></a>' +
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


