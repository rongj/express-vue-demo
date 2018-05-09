var { jsonWrite } = require('../utils/ret');
var { getToken } = require('../utils/jwt');
var jwt = require('jsonwebtoken');
var { secret } = require('../db/config').jwt;

module.exports = {
	verifyToken: function (req, res, next) {
		var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.get('Authorization');
		if(token) {
			jwt.verify(token, secret, function (err, decoded) {
				if(err) {
					return jsonWrite(res, 201, '无效的token')
				} else {
					getToken(decoded.id, function (err, data) {
						if(data) {
							req.decoded = decoded;
							next();
						} else {
							return jsonWrite(res, 201, '无效的token')
						}
					})
				}
			})
		} else {
			return jsonWrite(res, 201, '缺少token')	
		}
	}
}