var pool = require('../db/pool');
var jsonWrite = require('../utils/res');

module.exports = {
	// 增
	createArticle: function (req, res, next) {
		var params = req.query || req.body;
		if(!params.title || !params.content) {
			jsonWrite(res, 400)
		}
		var sql = 'insert into articles(title, content) values (?,?)';
		pool.queryArgs(sql, [params.title, params.content] , function (err, results) {
			if (results) {
				jsonWrite(res, 200, params)
			}
			jsonWrite(res, 201, err)
		})
	},

	// 删
	deleteArticle: function (req, res, next) {
		var id = req.params.id;
		var sql = 'delete from articles where id = ' + id;
		pool.query(sql, function (err, results) {
			if (results) {
				jsonWrite(res, 200);
			}
			jsonWrite(res, 201, err)
		})
	},

	// 改
	updateArticle: function (req, res, next) {
		var id = req.params.id;
		var params = req.query || req.body;
		if(!params.title || !params.content) {
			jsonWrite(res, 400)
		}
		var sql = 'update articles set title = ' + params.title + ', content = '+ params.content +' where id = ' + id;
		pool.query(sql, function (err, results) {
			if (results) {
				jsonWrite(res, 200);
			}
			jsonWrite(res, 201, err)
		})
	},

	// 查
	showArticle: function (req, res, next) {
		res.json({
			data: '单独'
		})
	},		

	// 查
	getArticle: function (req, res, next) {
		res.json({
			data: '列表'
		})
	},
}