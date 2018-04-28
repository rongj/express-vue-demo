var express = require('express');
var router = express.Router();
var history = require('connect-history-api-fallback');
var admin = require('./admin');

// 首页
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' })
});

// 处理vue路由history模式
router.use(history({ verbose: true}));
router.use('/admin', admin);

module.exports = router;
	