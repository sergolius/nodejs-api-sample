var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.uri, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Mongoose connected');
});

module.exports = mongoose;