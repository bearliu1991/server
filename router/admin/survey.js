const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const POST = appRouter.POST;
// 获得关键指标
router.get('/getKeyIndicators', function (req, res, next) {
  let params = req.query;
  params.time = Number(params.time)
  params.appAccountId = Number(params.appAccountId)
  delete params.timestamp
  POST(req, res, PATH.getKeyIndicators, params);
})

// 进入公司信息
router.get('/saveloginCompany', function (req, res, next) {
  let params = req.query;
  params.corpId = Number(params.corpId)
  delete params.timestamp
  POST(req, res, PATH.saveloginCompany, params);
})
router.get('/getCorpStatisticsInfo', function (req, res, next) {
  let params = req.query;
  params.corpId = Number(params.corpId)
  delete params.timestamp
  POST(req, res, PATH.getCorpStatisticsInfo, params);
})
router.get('/queryCorpPackageById', function (req, res, next) {
  let params = req.query;
  params.id = Number(params.id)
  delete params.timestamp
  POST(req, res, PATH.queryCorpPackageById, params);
})
router.get('/getAuthUrl', function (req, res, next) {
  let params = req.query;
  params.reqType = Number(params.reqType)
  params.authType = Number(params.authType)
  delete params.timestamp
  POST(req, res, PATH.getAuthUrl, params);
})
router.get('/updateBindCorp', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateBindCorp, params);
})
router.get('/queryCorpPackRoleList', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.queryCorpPackRoleList, params);
})
router.get('/queryCompanyStats', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.queryCompanyStats, params);
})
module.exports = router;