var pool = require('../db/pool');
var { jsonWrite, reqData } = require('../utils/ret');
var { encrypt } = require('../utils/tools');
var { setToken, delToken } = require('../utils/jwt');
var async = require('async');

module.exports = {
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

	// 修改密码
	resetPassword: function (req, res, next) {
		var params = reqData(req);
		var { username, oldpwd1, oldpwd2, newpwd } = params;

		// 缺少参数
		if(!username || !oldpwd1 || !oldpwd2 || !newpwd) {
			return jsonWrite(res, 400);
		}

		if(oldpwd1 !== oldpwd2) {
			return jsonWrite(res, 201, '两次输入的旧密码不一致');
		}

		if(oldpwd1 === newpwd) {
			return jsonWrite(res, 201, '旧密码和新密码不能一样');
		}

		async.waterfall([
			// 查找用户匹配密码是否正确
			function (cb) {
				pool.query(`select * from users where username = "${username}"`, function (err, results) {
					if(results && encrypt(oldpwd1) === results[0].password) {
						cb(null, true)
					} else {
						cb('账号或密码错误')
					}
				})
			},

			// 修改密码
			function (arg, cb) {
				pool.query(`update users set password = "${encrypt(newpwd)}" where username = "${username}"`, function (err, results) {
					if(results) {
						cb(null, results)
					} else {
						cb('密码修改失败')
					}
				})
			},

			// 删除redis中的token
			function (arg, cb) {
				if(arg && req.decoded) {
					delToken(req.decoded.id, function (err, data) {
						// token删除 不传个results
						if(data === 1) {
							cb(null, 'token delete success')
						} else {
							cb(null, 'token delete fail')
						}
					})
				}
				cb(null, arg)
			}
		], function (err, results) {
			if(results) {
				return jsonWrite(res, 200, '密码修改成功');
			} else {
				return jsonWrite(res, 201, err);
			}
		})
	}

}