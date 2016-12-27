var express        = require('express');
var app            = express();
var path           = require('path');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var logger         = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

var Admin = require('./models/admin');

//MONGOOSE//
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', function(err){
  console.log(err);
});
db.once('open', function(){
  console.log('Gotta store \'em all');
});
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/PokeShow';
mongoose.connect(mongoURI);

//AUTHENTICATION//
var passport      = require('passport');
var localStrategy = require('passport-local').Strategy;
app.use(require('express-session')({
  secret: 'ash',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

var adminController = require('./controllers/admin.js');
app.use('/admin', adminController);

var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Cath \'em all on ' + port);
});
