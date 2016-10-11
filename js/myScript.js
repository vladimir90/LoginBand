$(document).ready(function(){
	 $(".button-collapse").sideNav();
	 $('.parallax').parallax();
	 $('.modal-trigger').leanModal();
	 $('.carousel.carousel-slider').carousel({full_width: true});
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



var previousScroll = 0,
headerOrgOffset = $('#header').offset().top;

$('#header-wrap').height($('#header').height());

$(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    console.log(currentScroll + " and " + previousScroll + " and " + headerOrgOffset);
    if(currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#header').fadeOut();
        } else {
            $('#header').fadeIn();
            $('#header').addClass('fixed');
        }
    } else {
         $('#header').removeClass('fixed');   
    }
    previousScroll = currentScroll;
});