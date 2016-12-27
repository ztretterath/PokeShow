var mongoose   = require('mongoose');
var CardSchema = require('./card.js').schema;
var passportLocalMongoose = require('passport-local-mongoose');

var AdminSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  cards: [CardSchema]
})

AdminSchema.plugin(passportLocalMongoose);
var Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
