const express = require('express');
const router = express.Router();
const _ = require('lodash');

var Student = require('../models/student');

router.use(function(req, res, next) {
  req.body = _.pick(req.body, ['firstName', 'lastName', 'email', 'slackHandle', 'currentlyEnrolled']);
  next();
});

router.use('/:studentId', function(req, res, next) {
  Student.findById(req.params.studentId, function(err, student) {
    if (err) {
      res.status(500).send();
    } else if (!student) {
      res.status(404).send();
    } else {
      res.student = student;
      next();
    }
  })
})

// GET /students/
router.get('/', function(req, res, next) {
  Student.find({}, function(err, students) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(students);
    }
  })
});

// POST /students/
router.post('/', function(req, res, next) {
  var student = new Student(req.body);
  student.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.json(student);
    }
  })
});

router.get('/:studentId', function (req, res, next) {
  res.json(res.student);
});

// DELETE /students/:id
router.delete('/:studentId', function(req, res, next) {
  res.student.remove(function(err){
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });
})

// PUT /students/:id
router.put('/:studentId', function(req, res, next) {
  var updatedStudent = Object.assign(res.student, req.body);
  updatedStudent.save(function(err){
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
      res.json(updatedStudent);
    }
  });
})

module.exports = router;
