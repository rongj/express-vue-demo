var jsonWrite = require('../utils/res');

module.exports = {
	checkLogin: function (req, res, next) {
		if(!req.session.username) {
			jsonWrite(res, 201, '你还没登录')
			return
		}
		next()
	}
}