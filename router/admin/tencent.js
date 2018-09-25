const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const POST = appRouter.POST;
// 获取公众号列表
router.get('/getPublicAccountList', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.getPublicAccountList, params);
})
// 判断是否可以添加公众号
router.get('/checkAppIdNum', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.checkAppIdNum, params);
})
// 删除微信公众号
router.get('/updateCssWxPublicAccountStatusToDelete', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateCssWxPublicAccountStatusToDelete, params);
})
// 操作解除授权按钮停用微信公众号
router.get('/updateCssWxPublicAccountToAuthBlockUp', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateCssWxPublicAccountToAuthBlockUp, params);
})
// 操作停用按钮停用微信公众号
router.get('/updateCssWxPublicAccountToBlockUp', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateCssWxPublicAccountToBlockUp, params);
})
// 禁用微信公众号
router.get('/updateCssWxPublicAccountToDisabled', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateCssWxPublicAccountToDisabled, params);
})
// 启用微信公众号
router.get('/updateCssWxPublicAccountToActive', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateCssWxPublicAccountToActive, params);
})
// 公众号信息一键同步
router.get('/updateCssWxPublicAccountDataToDb', function (req, res, next) {
  let params = req.query;
  params.appAccountId = Number(params.appAccountId)
  params.eeId = Number(params.eeId)
  delete params.timestamp
  POST(req, res, PATH.updateCssWxPublicAccountDataToDb, params);
})
module.exports = router;