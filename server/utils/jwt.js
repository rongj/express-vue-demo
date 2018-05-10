var jwt = require('jsonwebtoken');
var config = require('../db/config').jwt;
var redisClient = require('../db/redis');
var { secret, expiresIn, redis_item, redis_item_key } = config;

module.exports = {
	/**
	 * 生成token 存入redis
	 * @param {[type]} payload jwt对象
	 * @param {[type]} key     存入redis的区分key
	 */
	setToken: function (payload, key) {
		var token = jwt.sign(payload, secret, {
			expiresIn: expiresIn
		})
		// 将jwttoken存入redis 用户id作为key
		var item = redis_item + redis_item_key + key
		redisClient.set(item, token)
		redisClient.expire(item, expiresIn)
		return token
	},

	/**
	 * 删除redis中的token
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	delToken: function (key, cb) {
		redisClient.del(redis_item + redis_item_key + key, function (err, data) {
			cb && typeof cb === 'function' && cb(err, data)
		})
	},

	/**
	 * 从redis中获取token
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	getToken: function (key, cb) {
		redisClient.get(redis_item + redis_item_key+ key, function (err, data) {
			cb && typeof cb === 'function' && cb(err, data)
		})
	}
}