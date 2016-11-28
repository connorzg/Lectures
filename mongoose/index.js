require('dotenv').config({silent: true});

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Todo = require("./models/todo");

// CREATE
// var todo = new Todo({
//   task: 'Go to H-E-B',
//   completed: false,
//   userId: '1'
//  });
//
//  todo.save(function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(todo);
//   }
// });

// READ COLLECTION
// Todo.find({
//   completed: false
// }, function(err, todos) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(todos);
//   }
// })

// READ MEMBER
// Todo.findOne({
//   _id: '57fd49d7f275f96d164044f5'
// }, function(err, todo) {
//   if (err) {
//     console.error(err);
//   } else {
//     if (todo) {
//       console.log(todo);
//     } else {
//       console.log('Todo Not Found');
//     }
//   }
// });

// DELETE
// Todo.findOne({
//   _id: '57fd49d7f275f96d164044f5'
// }, function(err, todo) {
//   if (err) {
//     console.error(err);
//   } else {
//     if (todo) {
//       console.log(todo);
//       todo.remove();
//     } else {
//       console.log('Todo Not Found');
//     }
//   }
// });

// UPDATE
// Todo.findOne({
//   _id: '57fd4a11817ec46d2a3a7778'
// }, function(err, todo) {
//   if (err) {
//     console.error(err);
//   } else {
//     if (todo) {
//       var updatedTodo = Object.assign(todo, { completed: true });
//       updatedTodo.save(function (err) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(updatedTodo);
//         }
//       })
//       console.log(todo);
//     } else {
//       console.log('Todo Not Found');
//     }
//   }
// });
