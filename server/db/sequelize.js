var Sequelize = require('sequelize');
var config = require('./config');
var { database, user, password, host } = config.mysql;

var sequelize = new Sequelize(database, user, password, {
	host: host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	operatorsAliases: false
});

module.exports = sequelize