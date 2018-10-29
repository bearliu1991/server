const express = require('express');
// const webUploader = require('node-webuploader-server');
const webUploader = require('../webuploader/index.js');
const FdfsController = require('../fileService/FdfsController')

const path = require('path');
const router = express.Router();

const uploaderConfig = { uploadDir: path.join(__dirname, '../public'), limitExtension: null };
const uploder = new webUploader(uploaderConfig);
uploder.mount(router);

module.exports = function (app) {
  app.use('/webuploader/upload', loginChecker, router, after);
  function loginChecker(req, res, next) {
    //check user login
    next();
  }
  function after(req, res, next) {
    let uploadData = res.uploadData
    const filepath = path.join(__dirname, '../public/', uploadData.path)    
    FdfsController.upload(filepath, 'fuckie', res)
  }  
};
