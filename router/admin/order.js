const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/order');
const POST = appRouter.POST;

// 获取时间列表
router.get('/dateList', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.dateList, params);
})
// 获取套餐列表
router.get('/menuList', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.menuList, params);
})
// 获取订单列表
router.get('/recordsList', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.recordsList, params);
})
// 获取订单状态列表
router.get('/orderStatus', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.orderStatus, params);
})
// 获取订单详情
router.get('/orderDetail', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.orderDetail, params);
})
// 获取正在使用的套餐
router.get('/usingMenu', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.usingMenu, params);
})

module.exports = router;