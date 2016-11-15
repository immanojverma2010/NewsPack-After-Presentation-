var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news');
var User = require('./models/users');
var connectflash = require('connect-flash');

var passport= require('passport'),
LocalStrategy= require('passport-local').Strategy;;



var mongoose = require('mongoose');
//connection with database
mongoose.connect("mongodb://localhost/newsdb")
//assign the mongoose connection to a variable
var db= mongoose.connection;
//verify the connection status with the database
db.on('error',console.error.bind(console,'connection error......!!!!!'));
db.once('open',function(){
  console.log("Connected to MongoDB successfully");
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../server/dist')));


app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());

//app.use('/', index);
app.use('/users', users);
app.use('/news', news);

app.post('/login',
passport.authenticate('local',
{ failureFlash: 'Error',
succssFlash: 'Success'
}),
function(req, res) {
  res.json({responseText:'authenticated'});
  console.log("in login");
});


app.get('/logout', function(req, res){

  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
});

passport.use(new LocalStrategy(
  function(username, password, cb) {
    console.log("username"+username+"    "+"pwd:"+password);
    User.findOne({ "username": username }, function (err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password !=password) { return cb(null, false); }
      console.log("Authentication success");
      return cb(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});



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
