var mongoose   = require('mongoose');

var CardSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String
  // image: idk
})

var Card = mongoose.model('Card', CardSchema);
module.exports = Card;
