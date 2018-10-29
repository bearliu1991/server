const appRouter = require('./routerobj');
const router = require('express').Router();
const transformData = appRouter.UTILS.transformData;
const PATH = appRouter.PATH;
const POST = appRouter.POST;
const GET = appRouter.GET;

// 是否存在待支付订单 xuyuan 20018-10-19
router.post('/isBuyPackageForM', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  POST(req, res, PATH.isBuyPackageForM, param);
})

// 获取公司当前订购服务 xuyuan 20018-10-19
router.post('/getCurOrderDetailForM', function (req, res, next) {
  let param = req.body  
  param['sessionId'] = req.sessionID
  POST(req, res, PATH.getCurOrderDetailForM, param)
})

// 套餐列表 xuyuan 20018-10-22
router.post('/getTPackageListForM', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  POST(req, res, PATH.getTPackageListForM, param, data => {
    data.data = transformData(data.data, {
      id: "id",
      name: "name",
      authType: "authType",
      startTime: "startTime",
      endTime: "endTime",
      validDay: "validDay",
      price: "price",
      discountsPrice: "discountsPrice",
      usedNum: "usedNum",
      mostBuyNum: "mostBuyNum",
      leave: "leave",
      group: "group",
      openSell: "openSell",
      summary: "summary",
      recommend: "recommend",
      createTime: "createTime",
      corpPackageId: "corpPackageId",
      corpPackIdStartTime: "corpPackIdStartTime",
      corpPackIdEndTime: "corpPackIdEndTime",
      corpPackIdCreateTime: "corpPackIdCreateTime",
      corpPackIdGroup: "corpPackIdGroup",
      corpPackIdLeave: "corpPackIdLeave",
      freePackageSelect: "freePackageSelect",
      isFreeMenu: "isFreeMenu"
    });
    return data;
  });
})

// 订单简单详情(运营平台) xuyuan 20018-10-22
router.post('/getSimpleDetailForM', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  // res.json({
  //   code: 1,
  //   data: {
  //     goodsName: 2,
  //     orderPayprice: "134565",
  //     status: 1
  //   }
  // });
  // return
  POST(req, res, PATH.getSimpleDetailForM, param);
})
// xuyuan 20018-10-19
router.post("/saveOrderInfoForM", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  // data = {
  //   isBuy: 1,
  //   corpPackStatus: "ACTIVE",
  //   orderId: 123556,
  //   orderStatus: 0,
  //   corpId: 88,
  //   corpName: "xuyuan",
  //   orderPayprice: 800000,
  //   needInvoice: 1,
  //   goodsName: "zanshi",
  //   validDay: 365,
  //   buyNum: 1,
  //   orderCreateTime: "2018-10-22",
  //   curTime: "2018-10-22",
  //   orderHour: 48
  // };
  // res.json({
  //   code: 1,
  //   data: data
  // });
  // return;
  
  POST(req, res, PATH.saveOrderInfoForM, param);
});


// 是否能上传凭证(运营平台) xuyuan 20018-10-19
router.post('/isCanPayVoucher', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  // data = {
  //   data: true
  // }
  // res.json({
  //   code: 1,
  //   data: data
  // })
  // return
  POST(req, res, PATH.isCanPayVoucher, param);
})

// 银行汇款上传凭证,付款方名称账号上传 xuyuan 20018-10-19
router.post('/saveAccountTradeOrder', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  // data = {
  //   isBuy: 1,
  //   corpPackStatus: "ACTIVE",
  //   orderId: 123556,
  //   orderStatus: 0,
  //   corpId: 88,
  //   corpName: "xuyuan",
  //   orderPayprice: 800000,
  //   needInvoice: 1,
  //   goodsName: "zanshi",
  //   validDay: 365,
  //   buyNum: 1,
  //   orderCreateTime: '2018-10-22',
  //   curTime: "2018-10-22",
  //   orderHour: 48
  // }
  // res.json({
  //   code: 1,
  //   data: data
  // })
  // return
  POST(req, res, PATH.saveAccountTradeOrder, param);
})

// 银行汇款上传凭证 ,付款凭证上传 xuyuan 20018-10-19
router.post('/savePayVoucherTradeOrder', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  // data = {
  //   isBuy: 1,
  //   corpPackStatus: "ACTIVE",
  //   orderId: 123556,
  //   orderStatus: 0,
  //   corpId: 88,
  //   corpName: "xuyuan",
  //   orderPayprice: 800000,
  //   needInvoice: 1,
  //   goodsName: "zanshi",
  //   validDay: 365,
  //   buyNum: 1,
  //   orderCreateTime: '2018-10-22',
  //   curTime: "2018-10-22",
  //   orderHour: 48
  // }
  // res.json({
  //   code: 1,
  //   data: data
  // })
  // return
  POST(req, res, PATH.savePayVoucherTradeOrder, param);
})

module.exports = router;
