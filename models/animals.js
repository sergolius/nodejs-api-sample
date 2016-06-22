var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  created: {type: Date, 'default': Date.now},
  farm: {ref: 'farms', type: mongoose.Schema.ObjectId},
  name: String,
  params: {
    color: String, // black, red
    tail: String, // long, short
    animal: String // chicken, pig
  }
});

module.exports = mongoose.model('animals', schema);
