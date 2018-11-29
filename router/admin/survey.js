const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const POST = appRouter.POST;
const transformData = appRouter.UTILS.transformData;
// 获得关键指标
router.get('/getKeyIndicators', function (req, res, next) {
  let params = req.query;
  params.time = Number(params.time)
  delete params.timestamp
  POST(req, res, PATH.getKeyIndicators, params);
})

// 进入公司信息
router.get('/saveloginCompany', function (req, res, next) {
  let params = req.query;
  params.corpId = Number(params.corpId)
  delete params.timestamp
  POST(req, res, PATH.saveloginCompany, params, data => {
    data.data = transformData(data.data, {
      area: "area",
      busiType: "busiType",
      city: "city",
      corpPack: "corpPack",
      contactName: "contactName",
      createId: "createId",
      createTime: "createTime",
      employeeData: "employeeData",
      id: "id",
      menuTree: "menuTree",
      packId: "packId",
      province: "province",
      status: "status",
      telephone: "telephone",
      corpName: "corpName"
    });
    return data;
  });
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
  params.reAuth = Number(params.reAuth)
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
router.get('/queryTItemValueByPager', function (req, res, next) {
  let params = req.query;
  params.limit = 50
  delete params.timestamp
  POST(req, res, PATH.queryTItemValueByPager, params);
})
module.exports = router;