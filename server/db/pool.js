var mysql = require('mysql');
var config = require('./config');
var pool = mysql.createPool(config.mysql);

module.exports = {
	/**
	 * 带查询参数
	 * @param  {[type]}   sql      [description]
	 * @param  {[type]}   args     [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	queryArgs: function(sql, args, callback) {
		pool.getConnection(function (err, connection) {
			connection.query(sql, args, function (err, results) {
				callback(err, results);
				connection.release();
			});
		});
	},

	/**
	 * 不带查询参数
	 * @param  {[type]}   sql      [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	query: function(sql, callback) {
		pool.getConnection(function (err, connection) {
			connection.query(sql, function (err, results) {
				callback(err, results);
				connection.release();
			});
		});
	},
}