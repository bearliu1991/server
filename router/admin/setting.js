const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const POST = appRouter.POST;
const transformData = appRouter.UTILS.transformData;
// 修改公司logo
router.get('/updateCorpLogo', function (req, res, next) {
  let params = req.query;
  // params.time = Number(params.time)
  // params.appAccountId = Number(params.appAccountId)
  delete params.timestamp
  POST(req, res, PATH.updateCorpLogo, params);
})
// 获取公司混合信息
router.get('/getCorpInfoMulti', function (req, res, next) {
  let params = req.query;
  // params.time = Number(params.time)
  // params.appAccountId = Number(params.appAccountId)
  delete params.timestamp
  POST(req, res, PATH.getCorpInfoMulti, params);
})
// 查询公司，套餐，员工状态
router.get('/getCorpEmpPacStatus', function (req, res, next) {
  let params = req.query;
  // params.time = Number(params.time)
  // params.appAccountId = Number(params.appAccountId)
  delete params.timestamp
  POST(req, res, PATH.getCorpEmpPacStatus, params);
})
// 修改公司省市区
router.get('/updateCorpAddress', function (req, res, next) {
  let params = req.query;
  // params.time = Number(params.time)
  // params.appAccountId = Number(params.appAccountId)
  delete params.timestamp
  POST(req, res, PATH.updateCorpAddress, params);
})
// 修改管理员员工姓名
router.get('/updateAdminEmployeeName', function (req, res, next) {
  let params = req.query;
  // params.time = Number(params.time)
  // params.appAccountId = Number(params.appAccountId)
  delete params.timestamp
  POST(req, res, PATH.updateAdminEmployeeName, params);
})
module.exports = router;