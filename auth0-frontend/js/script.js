$.ajaxSetup({
  headers: {
  'Authorization': 'Bearer '+localStorage.getItem('idToken')
}});

$(document).ready(function() {

  var lock = new Auth0Lock('CW21HA9LFBYIm8tKNbzlqNDgd2eawIz6', 'connorzg.auth0.com', {
    auth: {
      params: {
        scope: 'openid email'
      }
    }
  });

  lock.on('authenticated', function(authResult) {
    console.log('authResult:', authResult);
    localStorage.setItem('idToken', authResult.idToken);
    loadTodos();
  });

  $('#btn-login').on('click', function(e) {
    e.preventDefault();
    lock.show();
  });

  $('#btn-logout').on('click', function(e) {
    console.log('out');
    e.preventDefault();
    logout();
  });


  $(document).on('click', '#todos li', toggleTodo);

  if (isLoggedIn()) {
    loadTodos();
    var token = localStorage.getItem('idToken');
    var payload = token.split('.')[1];
    payload = atob(payload);
    payload = JSON.parse(payload);
    var expir = (payload.exp * 1000);
    expDate = new Date(expir);
    rightNow = new Date();
    if (token) {
      return isJwtValid(token);
    } else {
      return false;
    }
  }

});

function isJwtValid(token){
  console.log(token);

}

function loadTodos() {
  $('#btn-login').hide();
  $('#userinfo').show();

  $.ajax({
    url: 'http://127.0.0.1:3000/todos'
  }).done(function(data) {
    data.forEach(function(datum) {
      loadTodo(datum);
    })
  })
};

function loadTodo(todo) {
  var li = $('<li />');
  li.text(todo.task);
  li.data('id', todo._id)
  if (todo.completed) {
    li.addClass('done');
  }
  var deleteLink = $()
  $('#todos').append(li);
}

function logout() {
  localStorage.removeItem('idToken');
  window.location.href = '/';
};

function isLoggedIn() {
  if (localStorage.getItem('idToken')) {
    return true
  } else {
    return false
  }
};

function toggleTodo(e) {
  e.preventDefault();
  var li = $(this);
  var url = 'http://localhost:3000/todos/' + li.data('id');
  var newCompleted = !li.hasClass('done');
  console.log('click');
  $.ajax({
    url: url,
    method: 'PUT',
    data: {
      completed: newCompleted
    }
  }).done(function(){
    li.toggleClass('done');
  })
}
