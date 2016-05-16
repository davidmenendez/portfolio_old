var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes/index');

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});