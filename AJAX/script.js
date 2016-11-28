$(document).ready(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();
    var query = $('#search').val();
    loadGiphys(query);
  });
  $('.content').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).next().attr('src', '');
    $(this).remove();
  })
});

var loadGiphys = function(query) {
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
    data: {
      api_key: 'dc6zaTOxFJmzC',
      q: query
    }
  }).done(function(response) {
    $('.content').empty();
    for (var i = 0; i < 5; i++) {
      console.log('data', response.data[i].images.downsized.url);
      var $img = $('<img />').attr('src', response.data[i].images.downsized.url);
      $('.content').append('<a href="#" class="close">X</a>')
      $('.content').append($img);

    }
  }).fail(function(jqXHR, textStatus, errorThrown) {
    alert('oh no!');
    console.log(textStatus, errorThrown);
  }).always(function() {
    console.log('I always run no matter what');
  })
}
// $.ajax(options)
//   .done(function(data) {
//     console.log('data', data);
//
//     $('.content').html(data);
//   })
//   .fail(function(jqXHR, textStatus, errorThrown) {
//     console.log(textStatus, errorThrown);
//   });

//   var options = {
//     url: 'http://api.giphy.com/v1/gifs/search',
//     //method: 'get',
//     data: {
//       api_key: 'dc6zaTOxFJmzC',
//       q: query
//     }
//   };
//
//   var request = $.ajax(options);
//
//   request.done(function(response) {
//     console.log('data', response.data[0].images.downsized.url);
//
//     var $img = $('<img />').attr('src', response.data[0].images.downsized.url);
//
//     $('.content').html($img);
//   });
//
//   request.fail(function(jqXHR, textStatus, errorThrown) {
//     alert('oh noes!');
//     console.log(textStatus, errorThrown);
//   });
//
//   request.always(function() {
//     console.log('I always run no matter what');
//   });
// });
