var express = require('express');
var router = express.Router();
var history = require('connect-history-api-fallback');
var article = require('../../controllers/article');

// 首页
router.get('/', function (req, res, next) {
	res.render('index', { title: '模板首页' })
});

router.get('/form', function (req, res, next) {
	res.render('form', { title: '文件上传' })
});

// 处理vue路由history模式
router.use(history({ verbose: true}));
router.use('/admin', function (req, res, next) {

});

module.exports = router;