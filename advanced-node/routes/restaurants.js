var express = require('express');
var router = express.Router();
var foods = require('./foods');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('restaurants index');
});

router.get('/chain', function(req, res, next) {
  res.send('chain restauruants');
});

router.get('/:restaurantId', function(req, res, next) {
  res.send('restaurant id: ' + req.params.restaurantId);
});

router.use('/:restaurantId/foods', foods);

module.exports = router;
