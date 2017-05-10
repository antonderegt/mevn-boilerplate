const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

var Count = new Schema({
  count: Number
});

module.exports = mongoose.model('Count', Count);
