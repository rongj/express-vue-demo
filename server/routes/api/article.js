var express = require('express');
var router = express.Router();
var article = require('../../controllers/article');

var check = require('../../middlewares/check');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('article API')
});

// 增
router.post('/create', check.checkLogin, article.createArticle)

// 删
router.post('/delete/:id', check.checkLogin, article.deleteArticle)

// 改
router.post('/update/:id', check.checkLogin, article.updateArticle)

// 查
router.get('/:id([0-9]+)', article.showArticle)

// 查
router.get('/get', article.getArticle)

module.exports = router;
