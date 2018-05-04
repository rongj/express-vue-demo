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
		user: 'root',
		password: '',
		port: 6379
	},

	// 七牛云
	qiniu: {
		accessKey: '1joW05X8I5nxM5clmmm2u7oxYudrva-II-uFs5Pc',
		secretKey: 'tZWWWKgiBNrUfn0N4UdL1K8ttPeBwF_bTTb6PkOP',
		bucket: 'load', // 空间名称
		origin: '',
		hosturl: 'http://ozusj43jr.bkt.clouddn.com',
	}
};