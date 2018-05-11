var { jsonWrite } = require('../utils/ret');

module.exports = {
	checkLogin: function (req, res, next) {
		if(!req.session.user) {
			return jsonWrite(res, 201, '你还没登录')
		}
		next()
	}
}