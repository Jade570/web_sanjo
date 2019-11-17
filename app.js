var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mysql = require('mysql');
var dbconfig = require('./database.js');
var connection = mysql.createConnection(dbconfig);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var musicRouter = require('./routes/music');
var testRouter = require('./routes/test');

var app = express();

// configuration =================================

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/music', musicRouter);
app.use('/test', testRouter);


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

/*
app.post('/music', function(req,res){
  res.send("je :", req.body.je[0], req.body.je[1], req.body.je[2]);
  res.send("mori :", req.body.mori);
  res.send("type :", req.body.type);
  res.send("jo :", req.body.jo);
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
