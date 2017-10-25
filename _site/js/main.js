$(document).ready(function() {
  
  // Preloader
  $(window).load(function() {
    $(".se-pre-con").fadeOut("slow");;
  });

  // Slick Slider + Properties
  $('.primary_slider').slick({
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 500,
    cssEase: 'linear'
  });

  // Catalog Hover Feature
  $(".js-background-trigger").hover(function(){
   	$(".js-background-receiver", this).addClass('hover');
  }
  , 
  function(){
    $(".js-background-receiver", this).removeClass('hover');
  });

});