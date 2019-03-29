//Google map initializer

var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: 41.603222, lng: -73.087746},
    zoom: 8
  });
}

window.addEventListener('scroll', function(){
  if (window.scrollY >150 ){
    document.querySelector('#navbar').style.opacity = 0.9; 
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

$('#navbar a').on('click', function(){
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 65
    }, 800
  );
  }
});