'use strict';
var http = require("http");
const FdfsClient = require("fdfs");
var debug = require('debug')('fdfs');
const fs = require("fs");
const path = require("path");
let client = null;
let config = {
    // tracker servers
    trackers: [
        {
            host: '192.168.0.244',
            port: 6000
        }
    ],
    logger: {
        log: debug
    },
    // 默认超时时间10s
    timeout: 10000,
    // 默认后缀
    // 当获取不到文件后缀时使用
    defaultExt: 'txt',
    // charset默认utf8
    charset: 'utf8'
}
const getWXqrcode = (req, res, next) => {
    // http://192.168.0.244:8888/
    try {
        let fileId = req.query.fileId;
        if (!fileId) throw "图片地址错误";
        http.get("http://192.168.0.244:8888/" + fileId, function(_res) {
          var chunks = []; //用于保存网络请求不断加载传输的缓冲数据
          var size = 0; //保存缓冲数据的总长度
          _res.on("data", function(chunk) {
            chunks.push(chunk);
            size += chunk.length; //累加缓冲数据的长度
          });
          _res.on("end", function(err) {
            var data = Buffer.concat(chunks, size); //Buffer.concat将chunks数组中的缓冲数据拼接起来，返回一个新的Buffer对象赋值给data
            var base64Img = data.toString("base64"); //将Buffer对象转换为字符串并以base64编码格式显示
            res.json({code: 1, data: {base64: "data:image/jpeg;base64," + base64Img} });
          });
        });
    } catch (err) {
        res.json(err)
    }
};

class fdfs {
  constructor(config) {
    if (!client) {
      client = new FdfsClient(config);
    }
    this.client = client;
  }

  async upload(filepath, filename, res) {
    let ext = path.extname(filename);
    if (ext[0] == ".") {
      ext = ext.substr(1);
    }
    const fileId = await this.client.upload(filepath, { ext });
    fs.unlinkSync(filepath);
    return fileId;
  }

  async download(fileId) {
    const filename = fileId.split("/").pop();
    const filepath = path.resolve(__dirname, "./", filename);
    await this.client.download(fileId, filepath);
    return { filepath, filename };
  }

  async read(fileId) {
    const filename = fileId.split("/").pop();
    const filepath = path.resolve(__dirname, "../public/", filename);
    await this.client.download(fileId, filepath);
    return { filepath, filename };
  }

  overview(req, res, next) {
    getWXqrcode(req, res, next);
  }

  async del(fileId) {
    let result = await this.client.del(fileId);
    return result;
  }

  async listGroups(fileId) {
    try {
      let result = await this.client.listGroups();
      return result;
    } catch (e) {
      return e
    }
  }

  async listStorages() {
    try {
        let result = await this.client.listStorages("group1");
        return result;
    } catch (e) {
      return e;
    }
  }
}

module.exports = new fdfs(config)
