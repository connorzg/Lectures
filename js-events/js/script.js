$(document).ready(function () {
  $('a.delete-todo').on('click', deleteTodo)
  $('a.toggle-todo').on('click', toggleTodo)
  $('#theField').on('keyup', handleKeyUp)
  $('.jumbotron').on('mouseover', handleMouseover)
  $('.jumbotron').on('mouseout', handleMouseOut)
  $('#theForm').on('submit', handleSubmit)

  // on input, change: on loss of focus, keyup
})

function handleSubmit(e) {
  e.preventDefault()
  var theText = $('#theField').val()
  if (theText === '') {
    alert('The form is empty, fill it in')
  } else {
    alert(theText)
    $('#theField').val('')
  }

}

function handleMouseover(e) {
  $('.body').hide()
}

function handleMouseOut(e) {
  $('.body').show()
}

function handleKeyUp(e) {
  console.log(e.keyCode);
  var theText = $('#theField').val()
  $('#theText').text(theText)
}

function toggleTodo(e) {
  e.preventDefault()
  var link = $(e.currentTarget)
  link.parent('li').toggleClass('done')
}

function deleteTodo(event) {
  event.preventDefault()

  // var linkThatWasClicked = $(this)
  var linkThatWasClicked = $(event.currentTarget)
  console.log(linkThatWasClicked.text());
  linkThatWasClicked.text('I was clicked')
  linkThatWasClicked.parent('li').remove()
}
