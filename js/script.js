var map;

$(document).ready(function() {
  createMarker();
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 37.7749, lng: -122.4194}
  });
};

function latitude() {
  var input_lat = parseInt($('input[name="lat"]').val(), 10);
  console.log(input_lat);
  return input_lat;
}

function longitude() {
  var input_lng = parseInt($('input[name="lng"]').val(), 10);
  console.log(input_lng);
  return input_lng;
}

function message() {
  var input_message = $('input[name="message"]').val();
  console.log(input_message);
  return input_message;
}

function createMarker() {
  $('form').submit(function() {
    var marker = new google.maps.Marker({
      position: {lat: latitude(), lng: longitude()},
      map: map,
      title: message(),
    });
    setInfoWindow(marker);
  })
  console.log(latitude());
  console.log(longitude());
  console.log(message());
}

function setInfoWindow(marker) {
  var infoWindow = new google.maps.InfoWindow({
    content: marker.title
  });

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
  });
};
