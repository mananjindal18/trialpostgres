var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
const cors = require('cors');
 var customlogger = require('./middleware/customlogger')
// var userRouter = require('./routes/user');
// var eventRouter = require('./routes/event');
// var itemRouter = require('./routes/item');
// var quizRouter = require('./routes/quiz');
// var roleRouter = require('./routes/role');

// var loginRouter = require('./routes/login');

// var uploadsRouter = require('./routes/uploads');
// var ocrRouter = require('./routes/ocr');

var app = express();
app.use(cors())
// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   console.log(`${req.method}`) 
//   console.log(`${req.protocol}`);
  
//   //console.log(`${req.get(host)}`)
//   //console.log(`${req.priginalUrl}`)
//   next()
// }
app.use(customlogger({"req":"logg"}));
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

 //app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
// app.use('/', (req,res)=>{
//     //console.log(process.env.PORT)
//     //res.send("Hello mister new");
// });
app.use('/', require('./routes'));
// app.use('/event', eventRouter);
// app.use('/item', itemRouter);
// app.use('/quiz', quizRouter);
// app.use('/role', roleRouter);
// app.use('/login', loginRouter);

//endpoint android & skripsi
// app.use('/uploads', uploadsRouter);
// app.use('/ocr', ocrRouter);

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