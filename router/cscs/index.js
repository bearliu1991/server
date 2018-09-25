/**
 * 动态遍历目录加载路由工具
 * author: bear
 */
var fs = require("fs");
var Path = require('path');
// 动态路由
var loadRoute = {
    // 遍历目录
    listDir: function (app, dir) {
        var fileList = fs.readdirSync(dir, 'utf-8');
        for (var i = 0; i < fileList.length; i++) {
            var filePath = Path.join(dir, fileList[i])
            var stat = fs.lstatSync(filePath);
            // 是目录，需要继续
            if (stat.isDirectory()) {
                this.listDir(app, filePath);
            } else {
                fileList[i] !== 'index.js' && this.load(filePath, app);
            }
        }
    },
    // 加载路由
    load: function (filePath, app) {
        var route = require(filePath);
        app.use('/api', route);
    }
};

module.exports = function(app) {
    loadRoute.listDir(app, __dirname)
};