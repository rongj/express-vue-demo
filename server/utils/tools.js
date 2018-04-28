var crypto = require('crypto');

/**
 * 加密
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
var encrypt = function (str) {
	var md5 = crypto.createHash('md5');
	return md5.update('gx2018'+str).digest('hex');
}

module.exports = {
	encrypt
};