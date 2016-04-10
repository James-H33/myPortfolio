$(document).ready(function() {
    
    // Reveals information on hover about projects
    $('.index-project-display div').on('mouseover', function() {
        $(this).addClass('reveal'); 
    });

    $('.index-project-display div').on('mouseout', function() {
        $(this).removeClass('reveal'); 
    });
    
    
    // Nav menu transform and display
    $('#nav-icon').on('click', function() {
        
         $('.menu-overlay').toggleClass('open-menu');
         $('.menu-wrapper').toggleClass('open-menu');
         $('#nav-icon span').toggleClass('open');
    });
    
    
        // Page Scroll Event
    $('.index-page-scroll').click(function() {
        $('html,body').animate({
            scrollTop: $('.index-project-wrapper').offset().top},
            1000);
    });
    
        // Page Scroll Event
    $('.about-page-scroll').click(function() {
        $('html,body').animate({
            scrollTop: $('.about-info-wrapper').offset().top},
            1000);
    });
    
    
    // slide In Sections
    $(window).on('scroll', function() {
        var scrollCheck = $(window).scrollTop();
 
        
        if(scrollCheck > $('.about-lang-wrapper').offset().top - ($(window).height() / 1.2)) {
            $('.about-lang-wrapper').css({
               'transform' : 'translateY(0)',
               'opacity' : 1 
            });
        }
        
        
    }); 

});









