'use strict';

var stickySidebar = $('.navbar-fixed-top').offset().top;
$(window).scroll(function() {  
  if ($(window).scrollTop() > stickySidebar) {
    $('.navbar-fixed-top').addClass('affix');
    $('.dontshow').addClass('showit');
    $('.navbar').css('border-bottom' , '3px solid rgb(209,164,35)');
  }
  else {
    $('.navbar-fixed-top').removeClass('affix');
    $('.dontshow').removeClass('showit');
    $('.navbar').css('border-bottom' , 'none'); 
  }  
});