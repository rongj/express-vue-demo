var express = require('express');
var router = express.Router();
var upload = require('../../controllers/upload');

var multer  = require('multer');
var fs  = require('fs');
// var imgupload = multer({ dest: './server/public/upload/' });

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

var imgupload = multer({ storage: storage })

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('upload API')
})

// 单文件上传
router.post('/single', imgupload.single('file'), upload.singleUpload)

// 多文件上传(限制一次最多上传10张)
router.post('/multi', imgupload.array('files', 10), upload.multiUpload)

module.exports = router
