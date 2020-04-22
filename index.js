var express = require('express');
var hbs = require('express-hbs');
var app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


//Páginas//////////////

app.get('/', function (req, res) {
  var x = 1 + 5;
  res.render('home', {x: x});
});


app.get('/sobre', function (req, res) {
  res.render('sobre');
});

app.get('/contato', function (req, res) {
  res.render('contato');
});


/////////////////////

app.listen(8080);
