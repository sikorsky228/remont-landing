/*Google maps*/

function contaktMap() {
      var latlng = new google.maps.LatLng(55.7527938, 37.6470594);
      var settings = {
        zoom: 17,
        scrollwheel: false,
        center: latlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP};
      var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
      var contentString = '<div id="content">';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var trainImage = new google.maps.MarkerImage('img/point.png',
        new google.maps.Size(46,60),
        new google.maps.Point(0,0),
        new google.maps.Point(30,55)
      );
      var trainPos = new google.maps.LatLng(59.936289, 30.320837);
      var trainMarker = new google.maps.Marker({
        position: trainPos,
        map: map,
        icon: trainImage,
        zIndex: 2
      });
}
$(function() {
    contaktMap();
});  

/*Add custom selects*/
(function($) {
$(function() {
  $('select').styler();
});
})(jQuery);

/*Sliders*/

jQuery(function($) {
$('.color-items').sss({
    slideShow : false,
    showNav : true
});
});

jQuery(function($) {
$('.galery-image').sss({
    slideShow : false,
    showNav : true    
});
});

jQuery(function($) {
$('.galery-work').sss({
    slideShow : false,
    showNav : true    
});
});

/*Popup*/
$('.callback').click(function(event){
    event.preventDefault();
   $('.popup-wrapper').show();
   $('.popup-block').show();
});

$('.popup-wrapper').click(function(event){
    event.preventDefault();
   $('.popup-wrapper').hide();
   $('.popup-block').hide();
});
$('.popup-block').click(function(event){
event.stopPropagation();
});

/*Menu*/
$('.menu-button').click(function(event){
    event.preventDefault();
    $('.menu-wrap').toggle('show');
});