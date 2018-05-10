var { jsonWrite } = require('../utils/ret');

module.exports = {
	checkLogin: function (req, res, next) {
		if(!req.session.username) {
			return jsonWrite(res, 201, '你还没登录')
		}
		next()
	}
}