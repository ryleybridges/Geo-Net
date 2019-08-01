$(document).ready(function(){
  // console.log('ready');


  $.ajax({
    url: 'https://api.geonet.org.nz/intensity?type=measured',
    type: 'GET',
    dataType: 'json',
    success: function(dataFromJSON){
      (console.log("working")
    },
    error: function(){
      console.log('something has gone wrong');
    }
  })


});
