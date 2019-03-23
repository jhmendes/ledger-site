//Google map initializer

var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 41.603222, lng: -73.087746},
    zoom: 8
  });
}