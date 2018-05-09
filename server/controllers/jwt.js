var pool = require('../db/pool');
var { jsonWrite, reqData } = require('../utils/ret');
var { encrypt } = require('../utils/tools');
var { setToken, delToken } = require('../utils/jwt');

module.exports = {
	// 注册
	register: function (req, res, next) {
		var params = reqData(req);
		let { username, password } = params;
		if(!username || !password) {
			return jsonWrite(res, 400, '账号或密码不能为空');
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
						return jsonWrite(res, 200);
					} else {
						return jsonWrite(res, 201, err);
					}
				})
			}
		})
	},

	// 登录
	login: function (req, res, next) {
		var params = reqData(req);
		let { username, password } = params;
	
		if(!username || !password) {
			return jsonWrite(res, 400, '账号或密码不能为空');
		}
		// 查询用户是否已注册 
		pool.query(`select * from users where username = "${username}"`, function (err, results) {
			if (results) {
				if(results.length && encrypt(password) === results[0].password) {
					let { id, username } = results[0];
					token = setToken({ 
						username, 
						id,
						password: encrypt(password),
						key: 'user'
					}, id)
					return jsonWrite(res, 200, { id, username, token });
				} else {
					return jsonWrite(res, 400, '账号或密码错误');
				} 
			} else {
				return jsonWrite(res, 201, err);
			}
		})
	},

	// 检测是否登录
	checkLogin: function (req, res, next) {
		if(req.decoded.username) {
			var { id, username } = req.decoded;
			return jsonWrite(res, 200, { id, username });
		} else {
			return jsonWrite(res, 200, '未登录');
		}
	},

	// 登出
	logout: function (req, res, next) {
		// 删除redis中对应用户的key  即使传入token也无效需重新登录存入新的token 
		if(req.decoded) {
			delToken(req.decoded.id, function (err, data) {
				if(data === 1) {
					return jsonWrite(res, 200, '退出登录成功');
				} else {
					return jsonWrite(res, 200, '退出登录失败');
				}
			})
		} else {
			return jsonWrite(res, 201);
		}
	},

}