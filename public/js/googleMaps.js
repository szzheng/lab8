function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.885009, lng:-117.24132};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });

  var center = new google.maps.LatLng(32.885009, -117.24132);
  map.panTo(center);

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      map: map,
      title: 'UCSD'
  });
}