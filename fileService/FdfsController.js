'use strict';
//fs storage domian http://192.168.0.244:8888/
const fs = require("fs");
const FdfsClient = require('./fdfs')
class fdfsController{
    async  upload(filePath, filename, res){
        try{
            const fileId = await FdfsClient.upload(filePath, filename, res);
            res.set('Content-Type','text/plain');
            res.send(fileId)
        }catch (e){
            res.end(500)
        }
    }
    async  download(req, res){
        try{
            const fileId = req.query.fileId;
            const {filepath,filename} = await FdfsClient.download(fileId);
            res.set({
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename=' + filename
              });
            const stream = fs.createReadStream(filepath);
            stream.on("open",()=>{
              stream.pipe(res)
            })
            stream.on("close",()=>{
                // console.log(filepath)
                fs.unlinkSync(filepath);
            })
        }catch (e){
         res.end('404')
        }
    }
}

module.exports = new fdfsController