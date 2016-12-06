"use strict"
var passport = require('../passport')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(!req.user) {
		next();
	}
  else {
    res.render('index',{loggedIn: "yes"});
	}
});

router.get('/',function(req,res,next){
	res.render('login', {title: "Login"});
})


router.post('/', passport.authenticate('local', {
	successRedirect: '/#/',
	failureRedirect: '/login',
	failureFlash: "Incorrect username or password.",
	successFlash: "Welcome!"
}));

module.exports = router;
