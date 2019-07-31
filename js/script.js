$(document).ready(function(){
  // console.log('ready');

  $.ajax({
    url: 'https://api.geonet.org.nz/intensity?type=reported',
    type: 'GET',
    dataType: 'json',
    success: function(dataFromJSON){
      console.log(dataFromJSON);
    },
    error: function(){
      console.log('something has gone wrong');
    }
  })


});
