const express = require('express')
const path = require('path')
const appconfig = require('./config/app.config')
const manage = require('./router/manage')
const cscs = require('./router/cscs')
const admin = require('./router/admin')
const apiRoute = require('./router/apiService')
const fileRoute = require('./router/fileService')
const htmlRoute = require('./router/htmlService')
const webuploader = require("./router/webuploader");
// const account = require('./router/account')
const intercept = require('./router/intercept')
const wxapi = require('./router/wxapi')
const part3pay = require('./router/part3pay')
const mobile = require("./router/mobile");
const logger = require('./utils/log.js')
const wxmsg = require('./wxmsg')
const wechatService = require('./router/wechatService')

const app = express();
// 静态资源路径
app.use(express.static(path.join(__dirname, 'public')))
// 监听日志
logger.use(app)
// 请求同的配置
appconfig(app);
// 放弃使用的账号管理
// app.use(account);
// 运营管理系统
manage(app);
// 企业管理系统
admin(app)
// H5手机端
mobile(app);
// 聊天系统/客服系统
cscs(app);
// 聊天系统/客服系统websocket
var server = require('http').createServer(app);
var io = require('socket.io')(server);
let count = 0
io.on('connection', function(socket){
  // 接受消息，返回数据
  socket.on('chat_msg',function(res){
    io.emit('chat_msg', res);
  })
  socket.on('send_msg',function(res){
    io.emit('send_msg', res);
  })
  socket.on('HeartBeat',function(res){
    io.emit('HeartBeat', res);
  })
});

// app.use(htmlRoute)
app.use(apiRoute)
app.use(intercept)
app.use(fileRoute)
app.use(part3pay)
app.use(wxapi)
app.use(wxmsg)
app.use(wechatService)
webuploader(app)

// 启动node服务
server.listen(8091, function () {
  logger.info('server start at time: ' + Date().toLocaleString())
  console.log('listen 8091...')
});