const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
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
router.get('/saveSeat', function (req, res, next) {
  let params = req.query;
  // params.saveConditionalSeatForm = JSON.parse(params.saveConditionalSeatForm)
  if (params.eeId) {
    params.eeId = Number(params.eeId)
  }
  params.seatId = Number(params.seatId)
  for(var i = 0; i < params.appAccountIds.length; i++) {
    params.appAccountIds[i] = Number(params.appAccountIds[i])
  }
  for(var i = 0; i < params.saveConditionalSeatForm.length; i++) {
    params.saveConditionalSeatForm[i] = JSON.parse(params.saveConditionalSeatForm[i])
  }
  for(var i = 0; i < params.authIds.length; i++) {
    params.authIds[i] = Number(params.authIds[i])
  }
  console.log(params)
  delete params.timestamp
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
module.exports = router;