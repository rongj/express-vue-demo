var pool = require('../db/pool');
var jsonWrite = require('../utils/res');
var async = require('async');

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
				jsonWrite(res, 200)
			} else {
				jsonWrite(res, 201, err)
			}
		})
	},

	// 改
	updateArticle: function (req, res, next) {
		var id = req.params.id;
		var params = req.query || req.body
		if(!id || !params.title || !params.content) {
			jsonWrite(res, 400)
		}
		var sql = `update articles set title = "${params.title}", content = "${params.content}" where id = ${id}`;
		pool.query(sql, function (err, results) {
			if (results) {
				jsonWrite(res, 200)
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
		var sql = `select user_id,title,content from articles where id = ${id}`;
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

		// 单表查询
		// var sql = `select id,title,content from articles limit ${pageSize*(pageNum-1)}, ${pageSize}`;

		// 查询用户名
		// var sql = `select articles.id, title, content, users.username from articles
		// 	inner join users
		// 	where articles.user_id = users.id
		// 	limit ${pageSize*(pageNum-1)}, ${pageSize}`

		// 多表联查
		var sql = `select articles.id, title, content, users.username, ifnull(new_cs.comment_num, 0) as comment_num from articles
				join users
				on articles.user_id = users.id
				left join (select article_id, count(c_content) as comment_num from comments GROUP BY article_id) as new_cs
				on articles.id = new_cs.article_id
				limit ${pageSize*(pageNum-1)}, ${pageSize}`

		pool.query(sql, function (err, results) {
			if (results) {
				// 查询文章对应评论

				// promise
				// var promiseArr = []
				// for (let i = 0; i < results.length; i++) {
				// 	promiseArr.push(new Promise((resolve, reject) => {
				// 		pool.query(`select comments.id, comments.c_content, users.username from comments 
				// 			join users
				// 			on comments.c_user_id = users.id
				// 			where article_id = ${results[i].id}`, function (err, results2) {
				// 			results[i].comments_list = results2
				// 			resolve(results[i])
				// 		})
				// 	}))
				// }
				// Promise.all(promiseArr).then(results => {
				// 	jsonWrite(res, 200, {results, totalPage})
				// })

				// async
				async.map(results, function (item, cb) {
					pool.query(`select comments.id, comments.c_content, users.username from comments 
						join users
						on comments.c_user_id = users.id
						where article_id = ${item.id}`, function (err, results2) {
						item.comments_list = results2
						cb(null, item);
					})
				}, function (err, results) {
					jsonWrite(res, 200, {results, totalPage})
				})
			} else {
				jsonWrite(res, 201, err)
			}
		})
	},
}