google.maps.event.addDomListener(window, 'load', initMap);

function initMap(){
  $.ajax({
    url: 'https://api.geonet.org.nz/intensity?type=measured',
    type: 'GET',
    dataType: 'json',
    success: function(dataFromJSON){
      var newZealand = {lat: -41.838875, lng: 174.8860};
      var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: newZealand});
      console.log(dataFromJSON.features);
      for (var i = 0; i < dataFromJSON.features.length; i++) {
        const mapCoordinates = dataFromJSON.features[i].geometry.coordinates;
          var marker = new google.maps.Marker({
            position: {
                      lat: mapCoordinates[1],
                      lng: mapCoordinates[0]
                  },
                  map: map,
              });
      }
    },
    error: function(){
      console.log('bad');
    }
  });

}
