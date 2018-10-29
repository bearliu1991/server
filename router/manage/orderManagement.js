const appRouter = require('./routerobj');
const router = require('express').Router();
const transformData = appRouter.UTILS.transformData;
const PATH = appRouter.PATH;
const POST = appRouter.POST

// xuyuan 20018-10-19
router.post('/getOrderListByPage', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  POST(req, res, PATH.getOrderListByPageForM, param, data => {
    data.data.records = transformData(data.data.records, {
      corpId: "corpId",
      corpName: "corpName",
      orderChannel: "orderChannel",
      goodsName: "goodsName",
      validDay: "validDay",
      goodsPrice: "goodsPrice",
      goodsDiscountsPrice: "goodsDiscountsPrice",
      goodsNum: "goodsNum",
      goodsNumPrice: "goodsNumPrice",
      orderMobile: "orderMobile",
      orderNickname: "orderNickname",
      picUrl: "picUrl",
      orderPayprice: "orderPayprice",
      status: "status",
      payType: "payType",
      orderId: "orderId",
      orderPayPrice: "orderPayPrice",
      payOrderNo: "payOrderNo"
    });
    return data;
  });
})
// xuyuan 20018-10-19
router.post('/updateBatchStatusForM', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID  
  POST(req, res, PATH.updateBatchStatusForM, param)
})
// xuyuan 20018-10-19
router.post('/getOrderDetail', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID  
  POST(req, res, PATH.getOrderDetail, param, data => {
    data.data = transformData(data.data, {
        corpId:"corpId", 
        corpName:"corpName",
        goodsName:"goodsName", 
        validDay:"validDay", 
        goodsPrice:"goodsPrice", 
        goodsDiscountsPrice:"goodsDiscountsPrice", 
        goodsNum:"goodsNum", 
        goodsNumPrice:"goodsNumPrice", 
        orderMobile:"orderMobile", 
        orderNickname:"orderNickname", 
        picUrl:"picUrl", 
        orderPayprice:"orderPayprice", 
        needInvoice:"needInvoice", 
        status:"status", 
        orderId:"orderId", 
        authTime:"authTime", 
        authMisc:"authMisc", 
        channelAuthTime:"channelAuthTime", 
        orderUpdateTime:"orderUpdateTime", 
        orderCreateTime:"orderCreateTime", 
        curTime:"curTime", 
        orderHour:"orderHour", 
        payDetailList:"payDetailList"
    });
    return data;
  });
})

module.exports = router;
