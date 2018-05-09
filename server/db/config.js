module.exports = {
	// mysql
	mysql: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'admin',
		port: 3306
	},

	// redis
	redis: {
		host: '127.0.0.1',
		password: '',
		port: 6379
	},

	// jsonwebtoken
	jwt: {
		secret: 'jwt_user_token',
		expiresIn: 60 * 10,
		redis_item: 'user_token:', 
		redis_item_key: 'user_'
	},

	// 七牛云
	qiniu: {
		accessKey: '',
		secretKey: '',
		bucket: '',
		origin: '',
		hosturl: '',
	}
};