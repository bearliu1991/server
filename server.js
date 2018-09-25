const express = require('express')
const path = require('path')
const appconfig = require('./config/app.config')
const manage = require('./router/manage')
const cscs = require('./router/cscs')
const admin = require('./router/admin')
const apiRoute = require('./router/apiService')
const fileRoute = require('./router/fileService')
const htmlRoute = require('./router/htmlService')
// const account = require('./router/account')
const intercept = require('./router/intercept')
const redisClient = require('./redisService');
const logger = require('./utils/log.js');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')))
logger.use(app)
// 请求同的配置
appconfig(app);
// app.use(account);
//运营管理页面
manage(app);
cscs(app);
admin(app)
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


server.listen(8091, function () {
  logger.info('server start at time: ' + Date().toLocaleString())
  console.log('listen 8091...')
});