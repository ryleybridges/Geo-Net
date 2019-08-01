$(document).ready(function(){
  // console.log('ready');


  $.ajax({
    url: 'https://api.geonet.org.nz/intensity?type=measured',
    type: 'GET',
    dataType: 'json',
    success: function(dataFromJSON){
      console.log('the coordinates are ' + dataFromJSON.features[0].geometry.coordinates[0] + ' and ');
      console.log(dataFromJSON.features[0].geometry.coordinates[1]);
    },
    error: function(){
      console.log("bad");
    }
  })


});
