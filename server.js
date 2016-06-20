var express = require('express');
var app = express();

var routes = require('./routes');

app.use('/', routes);

app.listen(3000, '127.0.0.1', function () {
  console.log('App ready');
});
