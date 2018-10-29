var express = require('express');
var router = express.Router();
var https = require("https");
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
  FdfsController.upload(filepath, file.originalname, res)
});

router.get('/upload', upload.single('logo'), function (req, res, next) {
  // An error occurred when uploading
  var file = req.file;
  var filepath = path.join(__dirname, '../' + file.path)
  console.log(req.file)
  FdfsController.upload(filepath, file.originalname, res)
});

router.get("/download", function (req, res, next) {
  console.log(req.url)
  FdfsController.download(req, res);
});

router.get("/downloadcertificate", function(req, res, next) {
  FdfsController.downloadCertificate(req, res);
});

router.get("/overview", function(req, res, next) {
  FdfsController.overviewCertificate(req, res);
});

router.get("/deleteimg", function(req, res, next) {
  try {
      let filepath = path.join(__dirname, '../public/'+req.query.path)
        console.log(filepath)
        fs.unlinkSync(filepath);
        res.json({ code: 1, data: 'true' });
      } catch (e) {
        res.json({ code: 0, data: e, message: "文件不存在" });
  }  
});

router.post('/uploadqqq', upload.array(), function (req, res, next) {
  // An error occurred when uploading
  var file = req.file;
  var filepath = path.join(__dirname, '../'+file.path)
  console.log(req.file)
});

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

const getWXqrcode = (req, res, next) => {
  try{    
    let qrcodeSrc = req.body.qrcodeSrc;
    if (!qrcodeSrc) throw '二维码地址错误！';
    https.get(qrcodeSrc, function(_res) {
      var chunks = []; //用于保存网络请求不断加载传输的缓冲数据
      var size = 0; //保存缓冲数据的总长度
      _res.on("data", function(chunk) {
        chunks.push(chunk); 
        size += chunk.length; //累加缓冲数据的长度
      });
      _res.on("end", function(err) {
        var data = Buffer.concat(chunks, size); //Buffer.concat将chunks数组中的缓冲数据拼接起来，返回一个新的Buffer对象赋值给data
        var base64Img = data.toString("base64"); //将Buffer对象转换为字符串并以base64编码格式显示
        res.json({ base64: "data:image/jpeg;base64," + base64Img });
      });
    });
  } catch(err){
    res.json(err)
  }
};

const base64String = (req, res, next) => {
  var src_str = req.body.postcard,
    fileName = req.body.name;
  let pic_ext = src_str.split(';', 1)[0].split('/', 2)[1],
    base64 = src_str.replace(/^data:image\/png;base64,|^data:image\/jpg;base64,|^data:image\/jpg;base64,|^data:image\/bmp;base64,/, ''),
    byteLength = Buffer.byteLength(base64, 'base64'),
    buf = Buffer.alloc(byteLength, base64, 'base64');
  store_path = "uploadedfile/" + fileName + "." + pic_ext;
  fs.writeFile(store_path, buf, function (err) {
    if (err) {
      throw err;
    } else {
      res.json({ 'store_path': store_path });
    }
  });
};

// const base64String = (req, res, next) => { }
router.post('/uploadfile', (req, res, next) => {
  let type = req.body.type;
  if (type === "getWXqrcode") {
    getWXqrcode(req, res, next);
  } else if (type === "base64") {
    base64String(req, res, next);
  }
});

router.get("/downloadfile", function(req, res, next) {
  let fileName = req.query.name;
  res.download(fileName);
});

router.get("/deleteuploadfile", (req, res, next) => {
  FdfsController.del(req, res);
});

router.post("/checkuploadfile", (req, res, next) => {
  FdfsController.group(req, res);
});

router.post("/checkstorage", (req, res, next) => {
  FdfsController.listStorages(req, res);
});

module.exports = router;