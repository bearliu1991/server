var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require("path");
const multer = require('multer')
const FdfsController = require('../fileService/FdfsController')
// fdfs单点部署
// 通过 filename 属性定制
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'fileService/upload/');    // 保存的路径，备注：需要自己创建
  },
  filename: function (req, file, cb) {
    // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    cb(null, file.originalname);
    // cb(null, file.fieldname + '-' + Date.now());  
  }
});
var upload = multer({ storage: storage })
// 单图上传
router.post('/upload', upload.single('logo'), function (req, res, next) {
  // An error occurred when uploading
  var file = req.file;
  var filepath = path.join(__dirname, '../'+file.path)
  console.log(req.file)
  FdfsController.upload(filepath, file.originalname, res)
});
router.get('/download', function (req, res, next) {
  FdfsController.download(req, res)
})
router.get('/form', function (req, res, next) {
  var form = fs.readFileSync(path.join(__dirname, '../form.html'), { encoding: 'utf8' });
  res.send(form);
});
router.post('/uploadpaste', upload.array(), function (req, res, next) {
  //1.获取客户端传来的src_str字符串=>判断是base64还是普通地址=>获取图片类型后缀(jpg/png etc)
  //=>如果是base64替换掉"前缀"("data:image\/png;base64," etc)
  //2.base64 转为 buffer对象 普通地址则先down下来
  //3.写入硬盘(后续可以将地址存入数据库)
  //4.返回picture地址
  var src_str = req.body.image,
    timestamp = new Date().getTime();
  if (src_str.match(/^data:image\/png;base64,|^data:image\/jpg;base64,|^data:image\/jpg;base64,|^data:image\/bmp;base64,/)) {
    //处理截图 src_str为base64字符串
    let pic_suffix = src_str.split(';', 1)[0].split('/', 2)[1],
      base64 = src_str.replace(/^data:image\/png;base64,|^data:image\/jpg;base64,|^data:image\/jpg;base64,|^data:image\/bmp;base64,/, ''),
      buf = new Buffer(base64, 'base64'),
      store_path = 'fileService/upload/test_' + timestamp + '.' + pic_suffix;
    fs.writeFile(store_path, buf, function (err) {
      if (err) {
        throw err;
      } else {
        res.json({ 'store_path': store_path });
      }
    });
  } else {// 处理非chrome的网页图片 src_str为图片地址
    var temp_array = src_str.split('.'),
      pic_suffix = temp_array[temp_array.length - 1],
      store_path = 'fileService/upload/test_' + timestamp + '.' + pic_suffix,
      wstream = fs.createWriteStream(store_path);

    request(src_str).pipe(wstream);
    wstream.on('finish', function (err) {
      if (err) {
        throw err;
      } else {
        res.json({ "store_path": store_path });
      }
    });
  }
});
router.post('/uploadpostcard', (req, res, next) => {
  //1.获取客户端传来的src_str字符串=>判断是base64还是普通地址=>获取图片类型后缀(jpg/png etc)
  //=>如果是base64替换掉"前缀"("data:image\/png;base64," etc)
  //2.base64 转为 buffer对象 普通地址则先down下来
  //3.写入硬盘(后续可以将地址存入数据库)
  //4.返回picture地址
  var src_str = req.body.postcard,
    timestamp = Date.now();
    //处理截图 src_str为base64字符串
    let pic_ext = src_str.split(';', 1)[0].split('/', 2)[1],
      base64 = src_str.replace(/^data:image\/png;base64,|^data:image\/jpg;base64,|^data:image\/jpg;base64,|^data:image\/bmp;base64,/, ''),
      byteLength = Buffer.byteLength(base64, 'base64'),
      buf = Buffer.alloc(byteLength, base64, 'base64');
      store_path = 'fileService/upload/test_' + timestamp + '.' + pic_ext;

    fs.writeFile(store_path, buf, function (err) {
      if (err) {
        throw err;
      } else {
        res.json({ 'store_path': store_path });
      }
    });  
});
router.get('/uploadpostcard', (req, res, next) => {
  // for ie
  var src_str = req.body.postcard,
    timestamp = Date.now();
  let pic_ext = src_str.split(';', 1)[0].split('/', 2)[1],
    base64 = src_str.replace(/^data:image\/png;base64,|^data:image\/jpg;base64,|^data:image\/jpg;base64,|^data:image\/bmp;base64,/, ''),
    byteLength = Buffer.byteLength(base64, 'base64'),
    buf = Buffer.alloc(byteLength, base64, 'base64');
    store_path = 'fileService/upload/test_' + timestamp + '.' + pic_ext;
  fs.writeFile(store_path, buf, function (err) {
    if (err) {
      throw err;
    } else {
      res.json({ 'store_path': store_path });
    }
  });
});
router.get('/downloadpostcard', function (req, res, next) {
  let filePath = req.query.postcard
  res.download(filePath, 'postcard.jpg')
});
module.exports = router;