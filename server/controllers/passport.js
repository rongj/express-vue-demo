var pool = require('../db/pool');
var jsonWrite = require('../utils/res');
var { encrypt } = require('../utils/tools');

module.exports = {
	// 注册
	register: function (req, res, next) {
		var params = req.query || req.body;
		let { username, password } = params;
		if(!username || !password) {
			jsonWrite(res, 400, '账号或密码不能为空');
		}

		// 查询用户是否已注册 
		pool.query(`select * from users where username = "${username}"`, function (err, results) {
			if (results && results.length) {
				jsonWrite(res, 201, '用户已存在');
			} else {
				// 插入数据库
				var sql = `insert into users (username, password) values (?,?)`;
				pool.queryArgs(sql, [username, encrypt(password)] , function (err, results) {
					if (results) {
						jsonWrite(res, 200);
					} else {
						jsonWrite(res, 201, err);
					}
				})
			}
		})
	},

	// 登录
	login: function (req, res, next) {
		var params = req.query || req.body;
		let { username, password } = params;
		if(!username || !password) {
			jsonWrite(res, 400, '账号或密码不能为空');
		}

		// 查询用户是否已注册 
		pool.query(`select * from users where username = "${username}"`, function (err, results) {
			if (results) {
				if(results.length && encrypt(password) === results[0].password) {
					let { id, username } = results[0];
					req.session.username = username;
					jsonWrite(res, 200, { id, username });
				} else {
					jsonWrite(res, 400, '账号或密码错误');
				} 
			} else {
				jsonWrite(res, 201, err);
			}
		})
	},

	// 检测是否登录
	checkLogin: function (req, res, next) {
		if(req.session.username) {
			jsonWrite(res, 200, '已登录');
		} else {
			jsonWrite(res, 200, '未登录');
		}
	},

	// 登出
	logout: function (req, res, next) {
		req.session.username = null;
		if(!req.session.username) {
			jsonWrite(res, 200, '退出登录成功');
		} else {
			jsonWrite(res, 200, '退出登录失败');
		}
	},

}