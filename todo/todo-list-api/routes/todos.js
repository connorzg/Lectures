var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Todo = require('../models/todo');

router.use(function(req, res, next) {
  req.body = _.pick(req.body, ['task', 'completed']);
  next();
});


router.get('/', function(req, res) {
  Todo.find({ userId: req.user.sub }, function(err, todos) {
    if (err) {
      console.log(err);
      res.status(500).send()
    } else {
      res.json(todos)
    };
  });
});

router.get('/incomplete', function(req, res) {
  Todo.find({ completed: false, userId: req.user.sub }, function(err, todos) {
    if (err) {
      console.log(err);
      res.status(500).send()
    } else {
      res.json(todos)
    };
  });
});

router.get('/completed', function(req, res) {
  Todo.find({ completed: true, userId: req.user.sub }, function(err, todos) {
    if (err) {
      console.log(err);
      res.status(500).send()
    } else {
      res.json(todos)
    };
  });
});

router.post('/', function(req, res) {
  var todo = new Todo(req.body);
  todo.userId = req.user.sub;
  todo.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(todo);
    }
  });
});

router.use('/:id', function(req, res, next) {
  Todo.findOne({ '_id': req.params.id, userId: req.user.sub }, function (err, todo) {
    if (err) {
      res.status(500).send();
    } else if (!todo) {
      res.status(404).send();
    } else {
      res.todo = todo;
      next();
    }
  });
});

router.get('/:id', function(req, res) {
  res.json(res.todo);
});

router.put('/:id', function (req, res) {
  var updatedTodo = Object.assign(res.todo, req.body);
  updatedTodo.save(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(updatedTodo)
    };
  });
});

router.delete('/:id', function(req, res) {
  res.todo.remove(function (err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  })
})

module.exports = router;
