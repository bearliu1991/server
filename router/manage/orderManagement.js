const appRouter = require('./routerobj');
const router = require('express').Router();
const transformData = appRouter.UTILS.transformData;
const PATH = appRouter.PATH;
const POST = appRouter.POST

// xuyuan 20018-10-19
router.post('/getOrderListByPageForM', function (req, res, next) {
  let param = req.body
  param['sessionId'] = req.sessionID
  POST(req, res, PATH.getOrderListByPageForM, param);
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
  POST(req, res, PATH.getOrderDetail, param);
})

module.exports = router;
