$(document).ready(function () {

  $('#newTodoForm').on('submit', handleSubmit)
  $(document).on('click', '#todos li', toggleTodo)
  $(document).on('click', 'a.delete-todo', deleteTask)
})

function toggleTodo(e) {
  e.preventDefault();
  var li = $(e.currentTarget)
  var completed = li.data('completed')

  if (completed) {
    li.removeClass('completed')
  } else {
    li.addClass('completed')
  }
  li.data('completed', !completed)
}

function deleteTask(e) {
  e.preventDefault();
  var a = $(this)
  a.parent('li').remove()
}

function handleSubmit(e) {
  e.preventDefault();
  if (newTodoIsValid()) {
    addTodo()
    $('#newTodoTask').val('')

  } else {
    alert('Enter text in order to add it to the list')
  }
}

function addTodo() {
//create li and add text
  var li = $('<li></li>');
  var text = $('#newTodoTask').val();
  li.text(text + ' ')
  li.data('complete', false)
//delete a
  var a = $('<a></a>')
  a.attr('href', '#')
  a.text('Delete')
  a.addClass('delete-todo')
  li.append(a)
  $('#todos').append(li)
}

function newTodoIsValid() {
  return $('#newTodoTask').val().length > 0;
}
