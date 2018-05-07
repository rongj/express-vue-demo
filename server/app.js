var express = require('express');
var session = require('express-session');
// var FileStore = require('session-file-store')(session)
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var compression = require('compression');

var index = require('./routes/web');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// cors跨域处理
app.use(cors({
	origin: 'http://localhost',
	credentials: true
}));

// 开启gzip
app.use(compression());

// 解析 application/json
app.use(bodyParser.json());	
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 使用 session 中间件
app.use(session({
	secret :  'secret', // 对session id 相关的cookie 进行签名
	resave : true,
	// store: new FileStore(),
	saveUninitialized: false, // 是否保存未初始化的会话
	cookie : {
		maxAge : 1000 * 60 * 60 * 24 *30, // 设置 session 的有效时间，单位毫秒
	},
}));

// 路由
app.use('/api', api);
app.use('/', index);

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(cookieParser());

// 静态资源
// app.use(favicon(path.join(__dirname, '../', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '../', 'upload')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
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
