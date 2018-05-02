var pool = require('../db/pool');
var jsonWrite = require('../utils/res');
var { getuploadPath } = require('../utils/tools');
var path = require('path');

/**
 * 文件上传
 * @param  {[type]} req  [description]
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
function uploadFile (req, file) {
	var filePath = getuploadPath(file)
	var data = {
		mimetype: file.mimetype,
		originalname: file.originalname,
		size: file.size,
		filename: filePath,
		accessUrl: 'http://'+req.headers.host +'/' + filePath,
	}
	return data
}

module.exports = {
	// 单文件上传
	singleUpload: function (req, res, next) {
		var file = req.file;
		if(file) {
			jsonWrite(res, 200, uploadFile(req, file));
		} else {
			jsonWrite(res, 201)
		}
	},

	// 多文件上传
	multiUpload: function (req, res, next) {
		// res.send(req);
		var files = req.files;
		var results = []
		if(files.length) {
			for (var i = 0; i < files.length; i++) {
				var file = files[i]
				results.push(uploadFile(req, file))
			}
			jsonWrite(res, 200, results);
		} else {
			jsonWrite(res, 201)
		}
	},
}