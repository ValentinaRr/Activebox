$(document).ready(function(){

  $('.bxslider').bxSlider({
      mode: 'fade',
      speed: 1000,
      auto: true,
      pause: 1200
  });

});



$("#menu-toggle").click(function() {
    $("#menu").slideToggle();
});