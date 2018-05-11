# nodejs + vue前后端分离开发

> server: express、mysql、redis、jwt、multer

> client: vue、vuex、vue-router(history)、axios、element-ui

[![express](https://img.shields.io/badge/express-^4.15.2-blue.svg?style=flat-square)](http://www.expressjs.com.cn/)
[![nodejs](https://img.shields.io/badge/node-^6.0.0-green.svg?style=flat-square)](http://nodejs.cn/)
[![npm](https://img.shields.io/badge/npm-^3.0.0-red.svg?style=flat-square)](https://www.npmjs.com/)
[![vue](https://img.shields.io/badge/vue-^2.5.16-brightgreen.svg?style=flat-square)](https://cn.vuejs.org/)

### 目录结构
> 基于vue-cli生成的目录结构开发,打包路径../server/public

```bash
├─bin
│  └─www                # 服务入口文件
├─controllers           # 控制器
├─db                    # 数据库配置
│  ├─sql                # sql表
│  ├─pool.js            # mysql连接池
│  ├─sequelize.js       # sequelize链接
│  └─config.js          # 数据库配置
├─middlewares           # 中间件
├─models                # 数据模型
├─public                # 静态资源目录
│  ├─static             # vue打包目录
│  │  ├─css
│  │  ├─fonts
│  │  ├─img
│  │  └─js
│  ├─upload             # 文件上传目录
│  └─view               # 模板引用静态资源
│      ├─css
│      ├─images
│      └─js
├─routes                # 路由
│  ├─api                # api路由
│  └─web                # view路由
├─utils                 # 工具js
└─views                 # 模板
```

### 服务端依赖
```bash
  "dependencies": {
    "async": "^2.6.0",                            # nodejs异步操作模块
    "body-parser": "~1.17.1",                     # 对post请求的请求体进行解析
    "bytes": "^3.0.0",                            # 文件大模块
    "compression": "^1.7.2",                      # 开启gzip
    "connect-history-api-fallback": "^1.5.0",     # 客户端路由开启history模式
    "connect-redis": "^3.3.3",                    # session-redis连接
    "cookie-parser": "~1.4.3",                    # cookie
    "cors": "^2.8.4",                             # cors跨域
    "crypto": "^1.0.1",                           # 加密解密
    "debug": "~2.6.3",                            # debug
    "ejs": "~2.5.6",                              # ejs模板引擎
    "express": "~4.15.2",                         # nodejs框架
    "express-jwt": "^5.3.1",                      # express的jwt库
    "express-session": "^1.15.6",                 # express的session模块
    "jsonwebtoken": "^8.2.1",                     # jwt模块
    "morgan": "~1.8.1",                           # 日志记录模块
    "multer": "^1.3.0",                           # 文件上传
    "mysql": "^2.15.0",                           # 使用原生mysql语句依赖
    "mysql2": "^1.5.3",                           # 使用orm操作mysql依赖
    "node-inspector": "^1.1.2",                   # 浏览器nodejs调试模块
    "nodemon": "^1.17.3",                         # 热更新
    "qn": "^1.3.0",                               # 七牛云存储模块
    "redis": "^2.8.0",                            # redis模块
    "request": "^2.83.0",                         # 服务器接口请求库
    "sequelize": "^4.37.6",                       # 数据库orm模块
    "serve-favicon": "~2.4.2"                     # favicon模块
  }

```

### 实现功能
- [x] 简单增删改查、多表联查
- [x] 单/多文件上传、七牛云存储
- [x] 简单登录注册
- [x] mysql orm查询
- [x] session-cookie登录退出
- [x] jwt-redis的登录退出

### 开发部署

``` bash
# 安装依赖
npm install

# 运行客户端 localhost:8088
npm run dev

# 运行服务端 localhost:3080
npm start

# 开启调试模式
npm run debug

# 打包发布
npm run build

# 部署
cp server/ & package.json
npm install --production
pm2 start ./server/bind/www --name 'app'
```