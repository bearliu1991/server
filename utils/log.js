var log4js = require('log4js');

log4js.configure('config/log4js.json');
// var log = log4js.getLogger("startup");
var log = log4js.getLogger("app");

exports.info = function(msg){
    log.info(msg + "\n")
}

exports.err = function(msg){
    log.error(msg + "\n");
}

exports.use = function (app) {
    //页面请求日志,用auto的话,默认级别是WARN
    app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
};

