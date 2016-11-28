$(document).ready(function() {
  $('#zipform').on('submit', getWeather)
});

function getWeather(e) {
  e.preventDefault();
  var zipcode = $('#zipcode').val();
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {
      zip: zipcode + ',us',
      appid: '7aad8e7e079bda4aaf13abd272c41ae2',
      units: 'imperial'
    }
  }).done(function(response) {
    loadWeather(response);
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.log('broke');
  }).always(function(){
    console.log('always run');
  })

};
function loadWeather(response) {
  console.log(response);
  $('#city').text(response.name);
  var sunset = response.sys.sunset;
  sunset = new Date(sunset*1000);
  $('#sunset').text(sunset);
  var sunrise = response.sys.sunrise;
  sunrise = new Date(sunrise*1000);
  $('#sunrise').text(sunrise);
  $('#temp').text(response.main.temp);
  $('#lat').text(response.coord.lat);
  $('#lon').text(response.coord.lon);
  $('#description').text(response.weather[0].description);
  $('#weather-image').attr('src', 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png');
  $('#forecast').show();

}


//7aad8e7e079bda4aaf13abd272c41ae2
