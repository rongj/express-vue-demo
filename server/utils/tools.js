var crypto = require('crypto');
var fs = require('fs');

module.exports = {
	/**
	 * 加密
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	encrypt: function (str) {
		var md5 = crypto.createHash('md5');
		return md5.update('gx2018'+str).digest('hex');
	},

	/**
	 * 获取上传文件后缀
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	getuploadExt: function (str) {
		var arr = str.split('.')
		return '.'+arr[arr.length-1];
	},

	/**
	 * 获取上传文件路径
	 * @param  {[type]} str [description]
	 * @return {[type]}     [description]
	 */
	getuploadPath: function (file) {
		var extArr = file.originalname.split('.');
		var fileExt = '.' + extArr[extArr.length-1];
		var pathArr = file.path.split("\\");
		var filePath = 'upload/'+pathArr[pathArr.length-1];
		fs.renameSync(file.path, file.path + fileExt);
		return filePath + fileExt
	}
};