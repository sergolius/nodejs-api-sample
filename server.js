var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var config = require('./config');
var models = require('./models');
var routes = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

// error handlers
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.error(err);

    res
    .status(err.status || 500)
    .send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  console.error(err);

  res
  .status(err.status || 500)
  .send({
    message: err.message,
    error: {}
  });
});

// if oops happen
process.on('uncaughtException', function (err) {
  console.error('Caught exception:', err);
});

app.listen(config.port, config.ip, function () {
  console.log('App ready on %s:%s', config.ip, config.port);
});
