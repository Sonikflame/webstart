$(document).ready(function(){
   /* Модальное окно */
   var button = $('#button');
   var modal = $('#modal');
   var close = $('#close');

   button.on('click', function(){
      modal.addClass('modal_active');
   });

   close.on('click', function(){
      modal.removeClass('modal_active');
   });

   /* Слайдер */
   $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.arrows__left'),
      nextArrow: $('.arrows__right'),
      responsive: [
         {
           breakpoint: 1200,
           settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
           }
         },
         {
           breakpoint: 993,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
      ]
   });

   /* Инициализация анимации */
   new WOW().init();

   /* Валидация формы */
   $('#brif-form').validate({
      rules: {
         phone: {
            required: true
         }
      }, 
      messages: {
         phone: {
            required: "Укажите телефон"
         }
      }
   });
   $('#modal-form').validate({
      rules: {
         phone: {
            required: true
         }
      }, 
      messages: {
         phone: {
            required: "<br>Укажите телефон<br>"
         }
      }
   });

   /* Маска для телефона */
   $('.phone').mask('+7 (999) 999-99-99');
});