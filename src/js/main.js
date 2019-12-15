$(document).ready(function(){
   var button = $('#button');
   var modal = $('#modal');
   var close = $('#close');

   button.on('click', function(){
      modal.addClass('modal_active');
   });

   close.on('click', function(){
      modal.removeClass('modal_active');
   });

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
});