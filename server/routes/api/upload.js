var express = require('express');
var router = express.Router();
var upload = require('../../controllers/upload');
var imgupload = require('../../utils/fileUpload');

var multer  = require('multer');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('upload API')
})

// 单文件上传
router.post('/single', imgupload.single('file'), upload.singleUpload)

// 多文件上传(限制一次最多上传10张)
router.post('/multi', imgupload.array('files', 10), upload.multiUpload)

// 上传至七牛
router.post('/qiniu', multer({ storage: multer.memoryStorage() }).single('qiniu'), upload.qiniuUpload)

module.exports = router
