var express = require('express');
var router = express.Router();
var passport = require('passport');
var LcalStrategy = require('passport-local').Strategy;
var Admin = require('../models/admin');

module.exports = router
