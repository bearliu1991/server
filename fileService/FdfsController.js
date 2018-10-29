'use strict';
//fs storage domian http://192.168.0.244:8888/
const fs = require("fs");
const FdfsClient = require('./fdfs')
class fdfsController {
  async upload(filePath, filename, res) {
    try {
      const fileId = await FdfsClient.upload(filePath, filename, res);
      res.set("Content-Type", "text/plain");
      res.send({ code: 1, data: fileId });
    } catch (e) {
      res.send({ code: 0, data: e, message: "上传失败" });
    }
  }

  async download(req, res) {
    try {
      const fileId = req.query.fileId;
      const { filepath, filename } = await FdfsClient.download(fileId);
      res.set({
        "Content-Type": "application/octet-stream",
        "Content-Disposition": "attachment; filename=" + filename
      });
      const stream = fs.createReadStream(filepath);
      stream.on("open", () => {
        stream.pipe(res);
      });
      stream.on("close", () => {
        fs.unlinkSync(filepath);
      });
    } catch (e) {
      res.send(e);
    }
  }

  async downloadCertificate(req, res) {
    try {
      const fileId = req.query.fileId;
      const { filepath, filename } = await FdfsClient.download(fileId);
      let date = fs.readFileSync(filepath, "utf-8");
      fs.unlinkSync(filepath);
      let bbbb = new Blob([date]);
      res.send(bbbb);
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  }
  async overviewCertificate(req, res, next) {
    // try {
    //   const fileId = req.query.fileId;
    //   const { filepath, filename } = await FdfsClient.read(fileId);
    //   res.json({ code: 1, data: filename });
    // } catch (e) {
    //   res.json({ code: 0, data: e, message: "文件不存在" });
    // }
    FdfsClient.overview(req, res, next);
  }

  async del(req, res) {
    let fileId = req.query.fileId
    let result = await FdfsClient.del(fileId);
    res.json({ code: 1, data: result });
  }

  async group(req, res) {
    try {
      let result = await FdfsClient.listGroups();
      res.json({ code: 1, data: result });
    } catch (e) {
      res.send(e);
    }
   
  }

  async listStorages(req, res) {    
    try {
      let result = await FdfsClient.listStorages("group1");
      res.json({ code: 1, data: result });
    } catch (e) {
      res.send(e);
    }
  }
}

module.exports = new fdfsController