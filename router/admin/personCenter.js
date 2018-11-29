const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const POST = appRouter.POST;
// 获取当前用户创建或加入（中） 与 审核通过的 公司列表
router.get('/getUserCorpAuthMulti', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.getUserCorpAuthMulti, params);
})
// 更新公司状态
router.get('/updateCorpStatusByCorpId', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.updateCorpStatusByCorpId, params);
})
// 修改企业名称
router.get('/updateCorpName', function (req, res, next) {
  let params = req.query;
  params.applyId = Number(params.applyId);
  delete params.timestamp
  POST(req, res, PATH.updateCorpName, params);
})
// 更新公司状态
router.get('/updataCorp', function (req, res, next) {
  let params = req.query;
  params.applyId = Number(params.applyId);
  delete params.timestamp
  POST(req, res, PATH.updataCorp, params);
})
// 离开公司
router.get('/savelogoutCompany', function (req, res, next) {
  let params = req.query;
  params.corpId = Number(params.corpId);
  delete params.timestamp
  POST(req, res, PATH.savelogoutCompany, params);
})
// 离开公司
router.get('/updateCorpStatusByCorpId', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.updateCorpStatusByCorpId, params);
})
// 个人信息修改
router.get('/editUser', function (req, res, next) {
  let params = req.query;
  params.userId = Number(params.userId)
  delete params.timestamp
  POST(req, res, PATH.editUser, params);
})
// 扫描二维码后,查看扫描结果
router.get('/getScanResult', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.getScanResult, params);
})
// 修改绑定手机号,同时校验验证码
router.get('/updateCorpMobileById', function (req, res, next) {
  let params = req.query;
  params.userId = Number(params.userId)
  params.applyId = Number(params.applyId)
  delete params.timestamp;
  POST(req, res, PATH.updateCorpMobileById, params);
})
// 获取个人信息
router.get('/getPersonalInfo', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.getPersonalInfo, params);
})
// 新建企业检查
router.get('/checkCreateCorpApply', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.checkCreateCorpApply, params);
})
// 退出
router.get('/logout', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.logout, params);
})
module.exports = router;