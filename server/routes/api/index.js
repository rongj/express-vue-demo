var express = require('express');
var router = express.Router();

var article = require('./article');
var passport = require('./passport');
var upload = require('./upload');
var tag = require('./tag');

router.get('/', function(req, res, next) {
	res.send('API 首页' )
});

router.use('/article', article);
router.use('/passport', passport);
router.use('/upload', upload);
router.use('/tag', tag);

module.exports = router;
