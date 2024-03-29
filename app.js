"use strict"

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./passport')
var flash = require('connect-flash');

var routes = require('./routes/index');
var login = require('./routes/login')
var logout = require('./routes/logout')
var users = require('./routes/users');
var api = require('./routes/api')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// required for passport
app.use(session({
	secret: 'oaijervq0v4rq2u3rjq12039',
	saveUninitialized: true,
	resave: false
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session. This is the connect-flash way of getting flashdata in the session.

app.use('/login', login)

app.use(function(req,res,next){
    if(req.user){
      next();
    }else{
        res.redirect('/login'); // 401 Not Authorized
    }
});


app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/logout', logout)
app.use('/users', users);
app.use('/api', api)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
