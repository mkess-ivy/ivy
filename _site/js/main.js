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
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }]
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