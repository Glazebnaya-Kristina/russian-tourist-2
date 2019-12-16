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

   // календарь
   $('#calendar').fullCalendar({
      // plugins: ['dayGrid'],
      firstDay: 1,
      header: {
         // left: '',
         left: 'today',
         center: '',
         right: 'title'
      },
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
      dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      defaultDate: '2019-12-07',
      defaultView: 'month',//тебе нужно указать отображение по умолчанию
      fixedWeekCount: false,
      views: {
         month: {
            titleFormat: 'MMMM, YYYY',//тут уже можешь добавить запятую
            titleRangeSeparator: ' to ',
         }
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
         {
            title: 'Чемпионат России по водному туризму',
            start: '2019-12-09',
            end: '2019-12-13',
            className: 'events-block'
         },
         {
            title: 'Чемпионат России по водному туризму',
            start: '2019-12-19',
            end: '2019-12-24',
            className: 'events-block'
         },
         {

            title: 'Встреча перед  походом ',
            start: '2019-12-25',
            end: '2019-12-25',
            className: 'meeting',
            url: 'https://www.google.com/',
            /* что бы закрашивался весь квадрат, нужно в опициях прописать - customRender: true */
            customRender: true
         }
      ],

      eventRender: function(event, element, view) {
         if (event.customRender === true)
         {
            var dataToFind = moment(event.start).format('YYYY-MM-DD');
            $("td[data-date='"+dataToFind+"']").addClass('activeDay');
            console.log(dataToFind)
         }
      },
   });


   // цвет title
   $('.fc-right h2').each(function (index, element) {
      var heading = $(element);
      var Word_array, last_Word, first_part;

      Word_array = heading.html().split(/\s+/); // split on spaces
      last_Word = Word_array.pop();             // pop the last Word
      first_part = Word_array.join(' ');        // rejoin the first words together

      heading.html([first_part, ' <span class="last-Word">', last_Word, '</span>'].join(''));
   });

   $('.fc-right').append("<span class='open-calendar'></span>");

   $('.fc-right h2 .last-Word').css('color', '#9a9a9a');


   // текущее время
   var d = new Date();

   var mnt = new Array("января", "февраля", "марта", "апреля", "мая",
      "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");

   var todeyValue = $('.fc-today .fc-day-number').text();

   $('.fc-today-button ').html('<p class="today-btn">Сегодня</p><span>' + todeyValue + ' ' + mnt[d.getMonth()] + '</span>');


   $('.calendar__arrow--left').on('click', function () {
      $('#calendar').fullCalendar('prev'); // call method
   });

   $('.calendar__arrow--right').on('click', function () {
      $('#calendar').fullCalendar('next'); // call method
   });



   //каледарь маленький
   $(".datepicker-here").datepicker({
      firstDay: 1,
      changeMonth: true,
      changeYear: true,
      altFormat: "MMMM, dd",
      monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      onChangeMonthYear: function (year, month, inst) {
         var date = new Date();
         $('#calendar').fullCalendar('gotoDate', date);
      },
      onSelect: function (dateText, inst) {
         var date = new Date(dateText);
         $('#calendar').fullCalendar('gotoDate', date);
      }
   });

   var openCalendar = document.querySelector('.open-calendar');
   var calendarBlock = document.querySelector('.datepicker-here');

   openCalendar.addEventListener('click', function () {
      calendarBlock.classList.toggle('datepicker-here--opened');
   });


   var btnCabinet = document.querySelector('.header__button-cabinet');

   btnCabinet.addEventListener('click', function () {
      var caledarPick = document.querySelector('.datepicker-here');
      caledarPick.classList.remove('datepicker-here--opened');
   });


});
