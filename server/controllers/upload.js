var pool = require('../db/pool');
var { jsonWrite } = require('../utils/ret');
var { getuploadPath } = require('../utils/tools');
var qn = require('qn');
var config = require('../db/config');

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

	// 上传至七牛
	qiniuUpload: function (req, res, next) {
		console.log(config.qiniu);
		var qiniuClient = qn.create(config.qiniu);
		var file = req.file;
		if(file) {
			let fileFormat = (req.file.originalname).split('.')
      		// 设置上传到七牛的文件名
      		let filePath = '/upload/' + req.file.fieldname + '-' + Date.now() + '.' + fileFormat[fileFormat.length - 1]
			qiniuClient.upload(file.buffer, {
				key: filePath
			}, function (err, results) {
				if (results) {
					jsonWrite(res, 200, { accessUrl: config.qiniu.hosturl + filePath })
				} else {
					jsonWrite(res, 201, '上传失败')
				}
			})
		} else {
			jsonWrite(res, 201)
		}
	}
}