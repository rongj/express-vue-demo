var express = require('express');
var router = express.Router();
var jwt = require('../../controllers/jwt');

var token = require('../../middlewares/token');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('jwt API')
});

// 注册
router.post('/register', jwt.register);

// 登录
router.all('/login', jwt.login);

// 检测是否登录
router.get('/checkLogin', token.verifyToken, jwt.checkLogin);

// 登出
router.get('/logout', token.verifyToken, jwt.logout);

module.exports = router;
