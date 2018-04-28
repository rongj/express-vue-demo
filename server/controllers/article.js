var pool = require('../db/pool');
var jsonWrite = require('../utils/res');

module.exports = {
	// 增
	createArticle: function (req, res, next) {
		var params = req.query || req.body;
		if(!params.title || !params.content) {
			jsonWrite(res, 400)
		}
		var sql = `insert into articles (title, content) values (?,?)`;
		pool.queryArgs(sql, [params.title, params.content] , function (err, results) {
			if (results) {
				jsonWrite(res, 200, params)
			} else {
				jsonWrite(res, 201, err)
			}
		})
	},

	// 删
	deleteArticle: function (req, res, next) {
		var id = req.params.id;
		var sql = `delete from articles where id = ${id}`;
		pool.query(sql, function (err, results) {
			if (results) {
				jsonWrite(res, 200);
			} else {
				jsonWrite(res, 201, err)
			}
		})
	},

	// 改
	updateArticle: function (req, res, next) {
		var id = req.params.id;
		var params = req.query || req.body;
		if(!id || !params.title || !params.content) {
			jsonWrite(res, 400)
		}
		var sql = `update articles set title = "${params.title}", content = "${params.content}" where id = ${id}`;
		pool.query(sql, function (err, results) {
			if (results) {
				jsonWrite(res, 200);
			} else {
				jsonWrite(res, 201, err)
			}
		})
	},

	// 查
	showArticle: function (req, res, next) {
		var id = req.params.id;
		if(!id) {
			jsonWrite(res, 400)
		}
		var sql = `select title,content from articles where id = ${id}`;
		pool.query(sql, function (err, results) {
			if (results) {
				jsonWrite(res, 200, results[0] || '数据不存在');
			} else {
				jsonWrite(res, 201, err)
			}
		})
	},		

	// 查
	getArticle: function (req, res, next) {
		var params = req.query || req.body;
		var pageNum = ~~params.pageNum || 1;
		var pageSize = ~~params.pageSize || 10;
		var totalPage;
		pool.query(`select count(*) as sum from articles`, function (err, results) {
			if(results) {
				totalPage = Math.ceil(results[0].sum/pageSize) 
			}
		})
		// var sql = `select * from articles where id >= (select id from articles order by id limit ${pageSize*(pageNum-1)},1) limit ${pageSize}`;
		var sql = `select title,content from articles limit ${pageSize*(pageNum-1)}, ${pageSize} `;

		pool.query(sql, function (err, results) {
			if (results) {
				jsonWrite(res, 200, {results, totalPage});
			} else {
				jsonWrite(res, 201, err)
			}
		})
	},
}