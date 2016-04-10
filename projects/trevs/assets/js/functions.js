$(document).ready(function(){

  $('#nav-icon').on('click', function( event ) {
    //
    // var s-ic  = '.services-intro-container';
    // var s-mc = '.services-message-container';
    // var iic = '.index-intro-container';
    // var s-smic = '.services-middle-container';


    $('#nav-icon span').toggleClass('open');
    $('.services-intro-container, .services-message-container, .index-intro-container, .services-middle-container, .services-contact-container, footer').toggleClass('slide-open');

    event.stopPropagation();
    event.preventDefault();
  });

  $(window).on('scroll', function() {
    var scrollCheck = $(this).scrollTop();


    $('#mobile-nav-wrapper').css({
      'top' : scrollCheck + 'px'
    });

  });

});
