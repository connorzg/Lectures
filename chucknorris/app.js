$(document).ready(function() {
  norrisJoke();
  $('#anothaone').on('click', newJoke);
});

function norrisJoke() {
  $('#joke').empty();
  var $first = $('#first').val();
  var $last = $('#last').val();
  var $numberofjokes = $('.howmany').val();

  if ($first == '' && $last == '') {
    url = 'http://api.icndb.com/jokes/random/' + $numberofjokes + '/'
    var options = {
      url: url
    }
  } else if ($first.length > 0 && $last.length > 0) {
    var url = 'http://api.icndb.com/jokes/random/' + $numberofjokes + '?firstName=' + $first + '&lastName=' + $last;
    options = {
      url: url
    }
  } else if ($first.length > 0) {
    var url = 'http://api.icndb.com/jokes/random/' + $numberofjokes + '?firstName=' + $first;
    options = {
      url: url
    }
  } else if ($last.length > 0) {
    var url = 'http://api.icndb.com/jokes/random/' + $numberofjokes + '?lastName=' + $last;
    options = {
      url: url
    }
  }

  var request = $.ajax(options);
  request.done(function(response) {
    for (var i = 0; i < response.value.length; i++) {
      var joke = response.value[i].joke
      $('#joke').append('<li>' + joke + '</li>');
    }
  });
};

function newJoke(e) {
  e.preventDefault();
  var currentJoke = $('#joke').html();
  $('#oldjokes').append(currentJoke);
  norrisJoke();
}
