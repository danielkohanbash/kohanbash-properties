'use strict';

function adjustNavbarOnScroll() {
  let stickySidebar = $('.navbar-fixed-top').offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() > stickySidebar) {
      $('.navbar-fixed-top').addClass('affix');
      $('.dontshow').addClass('showit');
    } else {
      $('.navbar-fixed-top').removeClass('affix');
      $('.dontshow').removeClass('showit');
    }
  });
}

adjustNavbarOnScroll();
// needs to happen before document is ready

function handleClickOutsideNavbar() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var $navbar = $('.navbar-collapse');
    var _opened = $navbar.hasClass('in');
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {
      $navbar.collapse('hide');
    }
  }); //this is so that clicking outside of navbar closes/collapses navbar/collapses (doesn't work on mobile)
}

function navbarGenerator() {
  $('.navbar').html(`
  <div class="container">
  <!-- this will center whats in the navbar -->
  <div class="navbar-header">
    <!-- this is where you can put the brand -->
    <button type="button" class="pull-left navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
      <!-- this is the hamburger  loooking thing that shows up when we collapse our navbar. the attribute data-target is whats important here - it has to much the id - i put it on the left-->
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    
    <a href="index.html#mission" class="navbar-brand"><img src="img/dkb.png"></a>
  </div>
  <div class="collapse navbar-collapse" id="bs-nav-demo" style = "height:40px">
    <!-- whatever is in here is what disappears when we get to a certain size -->
    <ul class="nav navbar-nav">
      <!-- this is the main content of the nav -->
      <li><a href="index.html#mission"> <i class="fas fa-home"></i> Home</a></li>

      <li class = "diff"><a href="about.html#about"><i class="fas fa-user"></i> About </a></li>

      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fas fa-key"></i> Listings <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li class = "diff"><a href="index.html#active_listings"><i class="fas fa-map-marker"></i> Active Listings</a></li>
          <li role="separator" class="divider"></li>
          <li class = "diff"><a href="index.html#recent_sales"><i class="fas fa-handshake"></i> Recent Sales</a></li>
        </ul>
      </li>

      <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fas fa-briefcase"></i> Services <span class="caret"></spsan></a>
      <ul class="dropdown-menu">
        <li class = "diff"><a href="services.html#services"><i class="fas fa-building"></i> Asset Management</a></li>
        <!-- <li role="separator" class="divider"></li>
          <li class = "diff"><a href="#"><i class="far fa-handshake"></i> Buyer & Seller</a></li> -->
        </ul>
      </li>
      
      <li class = "dontshow"><a href="index.html#mission" class="navbar-bra"><img class = "imagek" src="img/dkb.png"></a></li> 
      
      <li class = "diff"><a href="testimonials.html"> <i class="fas fa-edit"></i> Testimonials</a></li>

      <li class = "diff"><a href="index.html#neighborhoods"><i class="fas fa-map-pin"></i> Neighborhoods</a></li>
       
        <li><a href="index.html#contact"> <i class="far fa-envelope"></i> Contact</a></li>
      </ul>
    </div>
  </div>
  `);
}

function footerGenerator() {
  $('footer').html(`
  <div class = "row">
  <div class = "col-sm-4 col-sm-push-4 col-xs-12" id = "middle">
    <p><a href="index.html#mission"> <strong> DKB Realty</strong></a></p>
    <p> <a href="index.html#mission"> Home</a> | <a href="about.html#about"> About</a> | <a href="index.html#active_listings"> Listings</a> | <a href="services.html#services"> Services</a> |</a><a href="index.html#neighborhoods"> Neighborhoods</a></p>
  </div>
  
  <div class = "col-sm-4 col-sm-pull-4 col-xs-6" id = "left">
    <address>
      <p>
        <strong>Office</strong><br>
        Keller Williams Realty Westside<br>
        10960 Wilshire Blvd Suite 100<br>
        Los Angeles, California 90024<br>
        BRE #01484104
      </p>        
    </address>
  </div>
  
  <div class = "col-sm-4 col-xs-6" id = "right">
    <p> <strong>Daniel Kohanbash </strong> <br>
    <a href="tel:310-770-6247"> <i class="fas fa-phone"></i> 310-770-6247</a><br>
    <a href="mailto:danielkohanbashproperties@gmail.com?subject=Inquiry%20(From%20Website)&body=*Please%20include%20your%20name%20and%20number%20along%20with%20your%20inquiry.%20Thank%20you!"> <i class="far fa-envelope"></i> Email</a><br>
    BRE #02046316</p>
  </div>
</div>
  `);
}

function footer2Generator() {
  $('.created_by').html(`
  <p><i class="fas fa-paint-brush"></i> Website by <a class="nikmash" href="https://nikmash.com/" target="_blank"> NikMash Creations</a></p>
  `);
}

$(document).ready(function() {
  handleClickOutsideNavbar();
  navbarGenerator();
  footerGenerator();
  footer2Generator();
});
