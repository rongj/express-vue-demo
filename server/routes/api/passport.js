var express = require('express');
var router = express.Router();
var passport = require('../../controllers/passport');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('passport API')
});

// 注册
router.post('/register', passport.register);

// 登录
router.post('/login', passport.login);

// 检测是否登录
router.get('/checkLogin', passport.checkLogin);

// 登出
router.get('/logout', passport.logout);

module.exports = router;
