var express = require('express');
var router = express.Router();
var article = require('../sqlMap/article');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' })
});

// 增
router.all('/article/create', function(req, res, next) {
    article.createArticle(req, res, next);
})

// 删
router.get('/article/delete/:id', function(req, res, next) {
    article.deleteArticle(req, res, next);
})

// 改
router.get('/article/update/:id', function(req, res, next) {
    article.updateArticle(req, res, next);
})

// 查
router.get('/article/:id', function(req, res, next) {
    article.showArticle(req, res, next);
})

// 查
router.get('/article/get', function(req, res, next) {
    article.getArticle(req, res, next);
})

module.exports = router;
