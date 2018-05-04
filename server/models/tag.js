var Sequelize = require('sequelize')
var sequelize = require('../db/sequelize');

var Tag = sequelize.define('tag', {
	name: Sequelize.STRING,
	weight: {
		type: Sequelize.INTEGER,
		defaultValue: 1,
	},
	state: {
		type: Sequelize.ENUM,
		defaultValue: 'active',
		values: ['active', 'pending', 'deleted']
	}
});

module.exports = Tag