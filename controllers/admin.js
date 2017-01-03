var express = require('express');
var router = express.Router();
var passport = require('passport');
var LcalStrategy = require('passport-local').Strategy;
var Admin = require('../models/admin');

router.post('/createAdmin', function(req, res){
  Admin.register(new Admin({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password}),
  req.body.password, function (err, admin){
    if (err) {
      console.log(err);
    } else {
      res.json({admin:admin})
    }
  })
});

router.post('/login', passport.authenticate('local'), function(req, res){
  req.session.save(function(err){
    if (err) return next(err);
    res.json({status:200, user: req.user})
    console.log(req.user);
  });
});

router.post('/addCard', function(req, res){
  var user = req.session.passport.user;
  Admin.find({username: user}).exec()
  .then(function(user){
    user[0].cards.push({
      name: req.body.name
    })
    return user[0].save();
  })
  .then(function(user){
    res.json({user: user});
  })
  .catch(function(err){
    console.log(err);
  })
})

module.exports = router
