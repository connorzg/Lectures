$(document).ready(function() {

  var options = {
    url: 'http://localhost:3000/todos'
  };

  var request = $.ajax(options);

  request.done(function(res) {
    for (var i = 0; i < res.length; i++) {
      $('.todos').append(`<li>${res[i].task}</li><input class='edit' type='button' value='change'>`);
      $('li').last().attr("data-id", res[i]._id);
    }
  });

  request.fail(function(jqx, status, errThrown) {
    console.log('err:' + errThrown);
  });

  $('form').submit(function(e) {
    e.preventDefault();
    value = $('#new').val();
    var options = {
      type: "POST",
      url: 'http://localhost:3000/todos',
      data: {
        task: value,
        completed: false
      }
    }
    var request = $.ajax(options);

    request.done(function(res) {
      $('.todos').append(`<li>${res.task}</li><input class='edit' type='button' value='change'></input>`);
    });
  });
  
  $('ul').on('click', 'li', deleteTodo);
  $(document).on('click', '.edit', editItem);

});

function editItem() {
  value = $('#change').val();
  id = $(this).prev().attr('data-id');
  var options = {
    type: "PUT",
    url: 'http://localhost:3000/todos/' + id,
    data: {
      task: value
    }
  }
  var request = $.ajax(options);
};

function deleteTodo(e) {
  e.preventDefault();
  $(this).remove();
  $('button').remove();
  id = $(this).attr('data-id')
  var options = {
    type: "DELETE",
    url: 'http://localhost:3000/todos/' + id
  }
  var request = $.ajax(options);
}
