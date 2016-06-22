var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  created: {type: Date, 'default': Date.now},
  owner: String,
  name: String
});

module.exports = mongoose.model('farms', schema);
