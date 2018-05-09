var redis = require('redis');
var redisConfig = require('./config').redis;

var redisClient = redis.createClient(redisConfig)

// redis 连接测试
// redisClient.on('connect', function() {
//     console.log('Redis connected success');
// })

module.exports = redisClient