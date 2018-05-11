var pool = require('../db/pool');
var { jsonWrite, reqData } = require('../utils/ret');
var async = require('async');

module.exports = {
	// 增
	createArticle: function (req, res, next) {
		var params = reqData(req);
		if(!params.title || !params.content) {
			return jsonWrite(res, 400)
		}
		var sql = `insert into articles (user_id, title, content, created_at, updated_at) values (?,?,?,?,?)`;
		pool.queryArgs(sql, [req.session.user.id, params.title, params.content, new Date(), new Date()] , function (err, results) {
			if (results) {
				return jsonWrite(res, 200, {id: results.insertId, ...params})
			} else {
				return jsonWrite(res, 201, err)
			}
		})
	},

	// 删
	deleteArticle: function (req, res, next) {
		var id = req.params.id;
		var sql_article = `select user_id from articles where id = ${id}`;
		var sql = `delete from articles where id = ${id}`;

		async.waterfall([
			// 查看文章用户与登录用户是否一致
			function (cb) {
				pool.query(sql_article, function (err, results) {
					if(results && results.length) {
						if(results[0].user_id === req.session.user.id) {
							cb(null)
						} else {
							cb('你没有权限')
						}
					}
				})
			},

			// 删除文章
			function (cb) {
				pool.query(sql, function (err, results) {
					if(results) {
						cb(null, results)
					} else {
						cb(err)
					}
				})
			}
		], function (err, results) {
				if (results) {
					jsonWrite(res, 200, '删除成功')
				} else {
					jsonWrite(res, 201, err)
				}
		})
	},

	// 改
	updateArticle: function (req, res, next) {
		var id = req.params.id;
		var params = reqData(req);

		if(!id || !params.title || !params.content) {
			return jsonWrite(res, 400)
		}

		var sql_article = `select user_id from articles where id = ${id}`;
		var sql = `update articles set title = "${params.title}", content = "${params.content}", updated_at = ? where id = ${id}`;

		async.waterfall([
			// 查看文章用户与登录用户是否一致
			function (cb) {
				pool.query(sql_article, function (err, results) {
					if(results && results.length) {
						if(results[0].user_id === req.session.user.id) {
							cb(null)
						} else {
							cb('你没有权限')
						}
					}
				})
			},

			// 删除文章
			function (cb) {
				pool.queryArgs(sql, [new Date()], function (err, results) {
					if(results) {
						cb(null, results)
					} else {
						cb(err)
					}
				})
			}
		], function (err, results) {
				if (results) {
					jsonWrite(res, 200, '修改成功')
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
		var sql = `select articles.id, title, content, users.username from articles
				join users
				on articles.user_id = users.id
				where articles.id = ${id}`;
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
		var params = reqData(req);
		var pageNum = ~~params.pageNum || 1;
		var pageSize = ~~params.pageSize || 10;

		// var sql = `select * from articles where id >= (select id from articles order by id limit ${pageSize*(pageNum-1)},1) limit ${pageSize}`;

		// 单表查询
		// var sql = `select id,title,content from articles limit ${pageSize*(pageNum-1)}, ${pageSize}`;

		// 查询用户名
		// var sql = `select articles.id, title, content, users.username from articles
		// 	inner join users
		// 	where articles.user_id = users.id
		// 	limit ${pageSize*(pageNum-1)}, ${pageSize}`

		// 多表联查
		var sql = `select articles.id, user_id, title, content, users.username, ifnull(new_cs.comment_num, 0) as comment_num from articles
				join users
				on articles.user_id = users.id
				left join (select article_id, count(c_content) as comment_num from comments GROUP BY article_id) as new_cs
				on articles.id = new_cs.article_id
				order by id
				limit ${pageSize*(pageNum-1)}, ${pageSize}`

		var sql_comment = `select comments.id, comments.c_content, users.username from comments 
						join users
						on comments.c_user_id = users.id
						where article_id = ?`

		/*
		* 获取分页和列表并行执行
		* 列表和获取列表关联的评论串行执行
		*/
		async.auto({
			// 获取页数
			pageInfo: function(cb) {
				pool.query(`select count(*) as sum from articles`, function (err, results) {
					if(results) {
						var totalCount = results[0].sum
						var totalPage = Math.ceil(totalCount/pageSize) 
 						cb(null, { totalPage, totalCount })
					}
				})
			},

			// 获取列表
			dataList: function(cb) {
				pool.query(sql, function (err, results) {
					if(results) {
						cb(null, results)
					}
				})
			},

			// 获取列表评论 依赖dataList执行完
			comments: ['dataList', function(results, cb) {
				var results = results.dataList;
				// 限制同时查询五条
				async.mapLimit(results, 5, function (item, cb) {
					pool.queryArgs(sql_comment, [item.id] ,function (err, results2) {
						item.comments_list = results2
						cb(null, item);
					})
				}, function (err, results) {
					cb(null, results.dataList)
				})
			}]
		}, function(err, results) {
			if(err) {
				jsonWrite(res, 201, err)
			} else {
				jsonWrite(res, 200, results)
			}
		})

		// -------------- async await ----------
		// function getTotalPage () {
		// 	return new Promise(function (resolve, reject) {
		// 		pool.query(`select count(*) as sum from articles`, function (err, results) {
		// 			if(results) {
		// 				totalPage = Math.ceil(results[0].sum/pageSize) 
		// 				resolve(totalPage)
		// 			}
		// 		})
		// 	})
		// }

		// function getList () {
		// 	return new Promise(function (resolve, reject) {
		// 		pool.query(sql, function (err, results) {
		// 			if (results) {
		// 				async.map(results, function (item, cb) {
		// 					pool.query(`select comments.id, comments.c_content, users.username from comments 
		// 						join users
		// 						on comments.c_user_id = users.id
		// 						where article_id = ${item.id}`, function (err, results2) {
		// 						item.comments_list = results2
		// 						cb(null, item);
		// 					})
		// 				}, function (err, results) {
		// 					resolve(results)
		// 				})
		// 			}
		// 		})
		// 	})
		// }

		// async function returnDate () {
		// 	var totalPage = await getTotalPage()
		// 	var results = await getList()
		// 	return {results, totalPage}
		// }

		// returnDate().then(function (data) {
		// 	jsonWrite(res, 200, data)
		// })
		
		// -------------- async await ----------


		// -------------- 分开获取 ----------
		// pool.query(`select count(*) as sum from articles`, function (err, results) {
		// 	if(results) {
		// 		totalPage = Math.ceil(results[0].sum/pageSize) 
		// 	}
		// })
		// pool.query(sql, function (err, results) {
		// 	if (results) {
		// 		// 查询文章对应评论
		// 		// promise
		// 		// var promiseArr = []
		// 		// for (let i = 0; i < results.length; i++) {
		// 		// 	promiseArr.push(new Promise((resolve, reject) => {
		// 		// 		pool.query(`select comments.id, comments.c_content, users.username from comments 
		// 		// 			join users
		// 		// 			on comments.c_user_id = users.id
		// 		// 			where article_id = ${results[i].id}`, function (err, results2) {
		// 		// 			results[i].comments_list = results2
		// 		// 			resolve(results[i])
		// 		// 		})
		// 		// 	}))
		// 		// }
		// 		// Promise.all(promiseArr).then(results => {
		// 		// 	jsonWrite(res, 200, {results, totalPage})
		// 		// })

		// 		// async
		// 		async.mapLimit(results, 5, function (item, cb) {
		// 			pool.query(`select comments.id, comments.c_content, users.username from comments 
		// 				join users
		// 				on comments.c_user_id = users.id
		// 				where article_id = ${item.id}`, function (err, results2) {
		// 				item.comments_list = results2
		// 				cb(null, item);
		// 			})
		// 		}, function (err, results) {
		// 			jsonWrite(res, 200, {results, totalPage})
		// 		})
		// 	} else {
		// 		jsonWrite(res, 201, err)
		// 	}
		// })
		// -------------- 分开获取 ----------
	},
}