var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	res.render('index', { title: 'API 首页' })
});


router.get('/all', function(req, res, next) {
	res.json({
		code: 200,
		data: [
			{
				id: 1,
				name: 'zhangsan'
			},
			{
				id: 2,
				name: 'lisi'
			},
		]
	})
});

module.exports = router;
