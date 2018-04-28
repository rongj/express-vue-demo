var express = require('express');
var router = express.Router();

var article = require('./article');
var passport = require('./passport');

router.get('/', function(req, res, next) {
	res.send('API 首页' )
});

router.use('/article', article);
router.use('/passport', passport);

module.exports = router;
