'use strict';

function adjustNavbarOnScroll(){
  let stickySidebar = $('.navbar-fixed-top').offset().top;
  $(window).scroll(function() {  
    if ($(window).scrollTop() > stickySidebar) {
      $('.navbar-fixed-top').addClass('affix');
      $('.dontshow').addClass('showit');
    }
    else {
      $('.navbar-fixed-top').removeClass('affix');
      $('.dontshow').removeClass('showit');
    }  
  });
}

function handleClickOutsideNavbar(){
  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $('.navbar-collapse');               
    var _opened = $navbar.hasClass('in');
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {      
      $navbar.collapse('hide');
    }
  }); //this is so that clicking outside of navbar closes/collapses navbar/collapses (doesn't work on mobile)
}

$(document).ready(function(){
  adjustNavbarOnScroll();
  handleClickOutsideNavbar();
});