$(document).ready(function(){
  // console.log('ready');

  $.ajax({
    url: 'https://api.geonet.org.nz/intensity?type=measured',
    type: 'GET',
    dataType: 'json',
    success: function(dataFromJSON){
      for (var i = 0; i < dataFromJSON.features.length; i++) {
        console.log(dataFromJSON.features[i].geometry.coordinates);
        $('#listData').html(`<li>${dataFromJSON.features[i].geometry.coordinates}</li>`);
      }
    },
    error: function(){
      console.log('bad');
    }
  })


});
