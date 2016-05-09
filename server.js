var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index', { title: 'David Menendez Portfolio' });
});

app.get('/portfolio', function(req, res) {
    res.render('portfolio', { title: 'Portfolio' });
});

app.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});

app.listen(8000, function () {
  console.log('App listening on port 8000!');
});