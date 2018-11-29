const appRouter = require('./routerobj');
const router = require('express').Router();
const PATH = appRouter.PATH;
const POST = appRouter.POST
const transformData = appRouter.UTILS.transformData;

//  运营系统获得交易订单列表 xuyuan 20018-10-18
router.post("/getTradeOrderByOperation", function (req, res, next) {
    let param = req.body;
    param["sessionId"] = req.sessionID;
    POST(req, res, PATH.getTradeOrderByOperation, param, (data) => {
        data.data.records = transformData(data.data.records, {
          payOrderNo: "payOrderNo",
          orderId: "orderId",
          batchNo: "batchNo",
          packageName: "packageName",
          orderChannel: "orderChannel",
          corpName: "corpName",
          payStatus: "payStatus",
          authStatus: "authStatus",
          status: "status",
          payType: "payType",
          orderPrice: "orderPrice"
        });
        return data
    });
});

// 运营系统拒绝审批 xuyuan 20018-10-18
router.post("/updateTradeOrderApprovalRefuse", function (req, res, next) {
    let param = req.body;
    param["sessionId"] = req.sessionID;
    POST(req, res, PATH.updateTradeOrderApprovalRefuse, param)
});

// 运营系统审批通过 xuyuan 20018-10-18
router.post("/updateTradeOrderApprovalAdopt", function (req, res, next) {
    let param = req.body;
    param["sessionId"] = req.sessionID;
    POST(req, res, PATH.updateTradeOrderApprovalAdopt, param)
});

//  获取交易订单详情 xuyuan 20018-10-19
router.post("/getPayOrderDetailForM", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
    POST(req, res, PATH.getPayOrderDetailForM, param)
});

module.exports = router;