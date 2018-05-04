var sequelize = require('../db/sequelize');
var Tag = require('../models/tag');
var jsonWrite = require('../utils/res');
var async = require('async');

module.exports = {
	// 增
	createTag: function (req, res, next) {
		sequelize
		.sync()
		.then(() => {
			return Tag.create({
				name: 'html5',
				weight: 11,
				state: 'pending'
			});
		})
		.then( results => {
			jsonWrite(res, 200, results)
		});
	}
}