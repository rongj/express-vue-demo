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
		accessKey: '1joW05X8I5nxM5clmmm2u7oxYudrva-II-uFs5Pc',
		secretKey: 'tZWWWKgiBNrUfn0N4UdL1K8ttPeBwF_bTTb6PkOP',
		bucket: 'load',
		origin: '',
		hosturl: 'http://ozusj43jr.bkt.clouddn.com',
	}
};