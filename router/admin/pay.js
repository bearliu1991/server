const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const POST = appRouter.POST;


// 是否能上传凭证
router.get('/isCanPayVoucher', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.isCanPayVoucher, params);
})
// 是否存在待支付订单
router.get('/getExistOrder', function (req, res, next) {
  let params = req.query;
  params.corpId = Number(params.corpId);
  delete params.timestamp
  POST(req, res, PATH.isBuyPackage, params);
})
// 取消订单
router.get('/getCancelOrder', function (req, res, next) {
  let params = req.query;
  params.corpId = Number(params.corpId);
  delete params.timestamp
  POST(req, res, PATH.updateBatchStatusForA, params);
})
// 获取公司当前订购服务
router.get('/getCurOrderDetail', function (req, res, next) {
  let params = req.query;
  params.corpId = Number(params.corpId)
  delete params.timestamp
  POST(req, res, PATH.getCurOrderDetail, params);
})
// 保存订单
router.get('/saveOrderInfo', function (req, res, next) {
  let params = req.query;
  params.packageId = Number(params.packageId)
  params.orderPayprice = Number(params.orderPayprice)
  params.corpId = Number(params.corpId)
  params.packageValidDay = Number(params.packageValidDay)
  params.packageDiscountsPrice = Number(params.packageDiscountsPrice)
  delete params.timestamp
  params.corpId = Number(params.corpId)
  POST(req, res, PATH.saveOrderInfo, params);
})
// 保存创建公司并创建订单
router.get('/saveCorpCreateApplyForOrder', function (req, res, next) {
  let params = req.query;
  params.packId = Number(params.packId)
  params.orderPayprice = Number(params.orderPayprice)
  params.packageValidDay = Number(params.packageValidDay)
  params.packageDiscountsPrice = Number(params.packageDiscountsPrice)
  delete params.timestamp
  POST(req, res, PATH.saveCorpCreateApplyForOrder, params);
})
// 进入确认付款页,扫码支付后,轮询查询订单简单详情
router.get('/getSimpleDetail', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  params.corpId = Number(params.corpId)
  POST(req, res, PATH.getSimpleDetail, params);
})
// 订单详情(管理平台)
router.get('/getOrderDetail', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  params.corpId = Number(params.corpId)
  POST(req, res, PATH.getDetail, params);
})
// 付款凭证确认银行汇款
router.get('/savePayVoucherTradeOrder', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.savePayVoucherTradeOrder, params);
})
// 付款方名称账号确认银行汇款
router.get('/saveAccountTradeOrder', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.saveAccountTradeOrder, params);
})
module.exports = router;