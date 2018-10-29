
const path = require('path')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sidconfig = require('./session.config.js');

module.exports = function (app) {
    app.use(cookieParser());
    //设置session
    app.use(session(sidconfig));
    app.use(function (req, res, next) {
        //更新session过期时间
        req.session._garbage = Date();
        req.session.touch();
        next();
    });
    //设置允许跨域
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
        next();
    });

    //处理请求数据
    app.use(bodyParser.urlencoded({
        limit: '100mb',
        extended: true
    }));
    app.use(bodyParser.json({
        limit: '100mb'
    }));

    // ssr
    app.engine('html', require('express-art-template'));
    // app.use('/api', express.static(__dirname + '/api'))
    app.set('views', path.join(__dirname, 'views'));
    app.set('view options', {
        debug: process.env.NODE_ENV !== 'production'
    });

    // webuploader
    
}