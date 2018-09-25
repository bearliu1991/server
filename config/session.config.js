const uuid = require('../utils/util').genUUID
module.exports = {
    name: 'sessionId',
    domain: 'localhost', // 表示 cookie 的域；用于和请求 URL 的服务器的域进行比较。如果匹配，那么接下来检查路径属性。
    secret: 'bear',  // 用来对session id相关的cookie进行签名
    genid: function(req) {
      // console.error(req.sessionId)
      // console.error(req.body)
      // let ssid = null;
    //   if(!req.body[options.name] && !req.body['connect.sid']) {
    //     ssid = uuid(24);
    //   }
        return uuid(32)
    },
    sessionStore: {
        "host": "192.168.0.240",
        "port": "6379",
        "pass": "123456",
        "db": 1,
        "ttl": 1800,
        "logErrors": true
    },
    path: '/', // 表示 cookie 的路径；用于和请求路径进行比较。如果路径和域都匹配，那a么在请求中发送 cookie。
    // store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
        httpOnly: false,
        secure: false, // 确保浏览器只通过 HTTPS 发送 cookie
        maxAge:  60 * 10 * 1000
    }
}
