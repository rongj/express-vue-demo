var mysql = require('mysql');
var config = require('../conf/db');
var pool = mysql.createPool(config.mysql);
var jsonWrite = require('../utils/res');

module.exports = {
	// 增
	createArticle: function (req, res, next) {
		var params = req.query || req.body;
		if(!params.title || !params.content) {
			jsonWrite(res, 400)
		}
		var sql = 'insert into articles(title, content) values (?,?)';
		pool.query(sql, [params.title, params.content] , function (error, results, fields) {
			if (error) throw error
			if (results) {
				jsonWrite(res, 200, params)
			} else {
				jsonWrite(res, 201, error)
			}
		})
	},

	// 删
	deleteArticle: function (req, res, next) {
		var id = req.params.id;
		var sql = 'delete from articles where id = ' + id;
		pool.query(sql, function (error, results, fields) {
			res.json(results)
			if(error) {
				// res.json(error);
			}
			jsonWrite(res, 201, { error: error })
		})
	},

	// 改
	updateArticle: function (req, res, next) {
		res.json({
			data: '修改'
		})
	},

	// 查
	getArticle: function (req, res, next) {
		res.json({
			data: '列表'
		})
	},

	// 查
	showArticle: function (req, res, next) {
		res.json({
			data: '单独'
		})
	},		
}