const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const multer = require('multer')
const FdfsController = require('../../fileService/FdfsController')
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
const POST = appRouter.POST;
// 获得关键指标
router.get('/getIntoSeatList', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.getIntoSeatList, params);
})
// 点击添加坐席生成坐席编号
router.get('/saveSeatNo', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.saveSeatNo, params);
})
// 保存坐席接口
router.post('/saveSeat', function (req, res, next) {
  let params = req.body;
  if (params.eeId) {
    params.eeId = Number(params.eeId)
  }
  params.seatId = Number(params.seatId)
  // for(var i = 0; i < params.appAccountIds.length; i++) {
  //   params.appAccountIds[i] = Number(params.appAccountIds[i])
  // }
  // if (params.saveConditionalSeatForm) {
  //   for(var i = 0; i < params.saveConditionalSeatForm.length; i++) {
  //     params.saveConditionalSeatForm[i] = JSON.parse(params.saveConditionalSeatForm[i])
  //   }
  // }
  // for(var i = 0; i < params.authIds.length; i++) {
  //   params.authIds[i] = Number(params.authIds[i])
  // }
  // console.log(params)
  // delete params.timestamp
  // params = JSON.stringify(params)
  console.log(params)
  POST(req, res, PATH.saveSeat, params);
})
// 修改坐席接口
router.get('/updateSeat', function (req, res, next) {
  let params = req.query;
  if (params.eeId) {
    params.eeId = Number(params.eeId)
  }
  params.seatId = Number(params.seatId)
  if (params.updateConditionalSeats) {
    for(var i = 0; i < params.updateConditionalSeats.length; i++) {
      params.updateConditionalSeats[i] = JSON.parse(params.updateConditionalSeats[i])
    }
  }
  console.log(params)
  delete params.timestamp
  POST(req, res, PATH.updateSeat, params);
})
// 获取坐席详情接口
router.get('/getSeatDetail', function (req, res, next) {
  let params = req.query;
  params.id = Number(params.id)
  delete params.timestamp
  POST(req, res, PATH.getSeatDetail, params);
})
// 查询坐席列表接口
router.get('/getSeatList', function (req, res, next) {
  let params = req.query;
  params.status = Number(params.status)
  params.offset = Number(params.offset)
  params.limit = Number(params.limit)
  delete params.timestamp
  POST(req, res, PATH.getSeatList, params);
})
// 批量为坐席修改公众号权限
router.get('/updateSeatAuthByBatch', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateSeatAuthByBatch, params);
})
// 解除授权/停用/批量停用/启用统一调用接口
router.get('/updateSeatStatus', function (req, res, next) {
  let params = req.query;
  console.log(params)
  delete params.timestamp
  POST(req, res, PATH.updateSeatStatus, params);
})
// 修改坐席基本信息接口
router.get('/updateSeatBaseInfo', function (req, res, next) {
  let params = req.query;
  if (params.eeId) {
    params.eeId = Number(params.eeId)
  }
  console.log(params)
  params.seatId = Number(params.seatId)
  delete params.timestamp
  POST(req, res, PATH.updateSeatBaseInfo, params);
})
// 修改坐席权限接口
router.get('/updateSeatAuth', function (req, res, next) {
  let params = req.query;
  params.seatId = Number(params.seatId)
  for(var i = 0; i < params.appAccountIds.length; i++) {
    params.appAccountIds[i] = Number(params.appAccountIds[i])
  }
  for(var i = 0; i < params.authIds.length; i++) {
    params.authIds[i] = Number(params.authIds[i])
  }
  delete params.timestamp
  POST(req, res, PATH.updateSeatAuth, params);
})
// 修改个性化坐席接口
router.post('/updateConditionalSeat', function (req, res, next) {
  let params = req.body;
  console.log(params)
  // params = JSON.parse(params)
  // params.seatId = Number(params.seatId)
  // if (params.updateConditionalSeats) {
  //   for(var i = 0; i < params.updateConditionalSeats.length; i++) {
  //     params.updateConditionalSeats[i] = JSON.parse(params.updateConditionalSeats[i])
  //   }
  // } else {
  //   params.updateConditionalSeats = []
  // }
  POST(req, res, PATH.updateConditionalSeat, params);
})
module.exports = router;