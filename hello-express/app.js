var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, function() {
  console.log('app listening on port 3000');
});

app.get('/about', function(req, res) {
  res.send("About Page");
});

app.get('/', function(req, res) {
  res.redirect('/99')
});

app.get('/:number', function(req, res) {
  var bottles = req.params.number;
  var next = bottles - 1;
  //   if (bottles > 0) {
  //   res.send(bottles + " Bottles of beer on the wall <br><a href='/" + next + "'>take one down pass it around</a>");
  // } else {
  //   res.send("No more bottles <a href='/'>Start Over</a>")
  // }
  res.render('index', {
    bottles: bottles,
    next: next
  });
});

// app.get('/:name', function(req, res) {
//   res.send('Hello, ' + req.params.name);
// })
