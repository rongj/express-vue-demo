var multer  = require('multer');
var fs  = require('fs');
var bytes  = require('bytes');

var uploadFolder = 'server/public/upload';

// 如果上传目录不存在则创建
var createFolder = function(folder){
    try {
        fs.accessSync(folder); 
    } catch (e) {
        fs.mkdirSync(folder);
    }  
}

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		createFolder(uploadFolder);
		cb(null, uploadFolder);
	},
	// filename: function (req, file, cb) {
	// 	cb(null, file.fieldname);  
	// }
})

var imgupload = multer({
	storage: storage,
	limits: {
		fileSize: bytes('2MB') // 限制文件在2MB以内，或者2048KB
	},
	fileFilter: function (req, file, cb) {
		// 只允许上传jpg|png|jpeg|gif格式的文件
		var type = '|' + file.mimetype.slice(file.mimetype.lastIndexOf('/') + 1) + '|'
		var fileTypeValid = '|jpg|png|jpeg|gif|'.indexOf(type) !== -1
		cb(null, !!fileTypeValid)
	}
})

module.exports = imgupload