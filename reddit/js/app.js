$(document).ready(function() {

  $('nav a').on('click', function(e) {
    e.preventDefault();
    $('#main').empty();
    var context = $(this).text();

    loadResults(context);
  });

  loadResults('top');

  function loadResults(sortOrder) {
    var options = {
      url: "https://www.reddit.com/" + sortOrder + ".json"
    };
    var request = $.ajax(options);

    request.done(function(response) {
      // console.log('success:', response.data.children);
      var responseCount = response.data.children.length;

      for (var i = 0; i < responseCount; i++) {
        console.log(i + ': ', response.data.children[i]);
        var post = response.data.children[i];

        /*
            <div class="row">
              <div class="col-md-2">Image</div>
              <div class="col-md-10">Title</div>
            </div>
            */

        var $row = $('<div />').addClass('row');
        var $imageColumn = $('<div />').addClass('col-md-2');

        var imageSrc = (post.data.thumbnail !== 'default' && post.data.thumbnail !== 'self')
          ? post.data.thumbnail
          : '';

        if (imageSrc) {
          console.log(imageSrc);
          $image = $('<img />').attr('src', post.data.thumbnail)
          $imageLink = $('<a />').attr('href', post.data.url).append($image);
          $imageColumn.append($imageLink);
        }

        var $link = $('<a />').attr('href', post.data.url).text(post.data.title);
        var $title = $('<h4 />').html($link);
        var $content = $('<div />').html($title).addClass('col-md-9');

        var $score = $('<div />').addClass('col-md-1');
        $score.text(response.data.score);

        $row.append($score);
        $row.append($imageColumn);
        $row.append($content);

        $('#main').append($row);
        $('#main').append('<hr>');

      }
    });
  }
});
