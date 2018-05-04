var express = require('express');
var router = express.Router();
var tag = require('../../controllers/tag');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('tag API')
});

/**
 * 使用sequelize操作mysql
 */

router.all('/create', tag.createTag)


module.exports = router;
