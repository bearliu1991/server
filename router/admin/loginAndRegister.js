const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/adminPath');
const POST = appRouter.POST;
const transformData = appRouter.UTILS.transformData;
// 生成临时二维码
router.get('/getTmpQrcode', function (req, res, next) {  
  let params = req.query;
  params.platformType = Number(params.platformType)
  params.expireSeconds = Number(params.expireSeconds)
  if (params.corpId) {
    params.corpId = Number(params.corpId)
  }
  delete params.timestamp
  POST(req, res, PATH.getTmpQrcode, params);
})

router.get('/getSession', function (req, res, next) {
  let params = req.query;
  delete params.timestamp;
  POST(req, res, PATH.getSession, params, data => {
    data.data = transformData(data.data, {
      bindMobile: "bindMobile",
      mobileStatus: "mobileStatus",
      nickName: "nickName",
      picUrl: "picUrl",
      userId: "userId",
      sessionId: "sessionId"
    });
    return data;
  });
})

router.get('/resendCode', function (req, res, next) {
  let params = req.query;
  params.userId = Number(params.userId)
  params.validateCodeType = Number(params.validateCodeType)
  params.validateCodeLength = Number(params.validateCodeLength)
  delete params.timestamp;
  if (params.validateCode) {
    params.validateCode = Number(params.validateCode)
    POST(req, res, PATH.bindUserEmailPhoneAndVerifyCode, params);
  }else {
    POST(req, res, PATH.resendCode, params);
  }
})

router.get('/loadTConfigListTree', function (req, res, next) {
  let params = req.query;
  delete params.timestamp;
  POST(req, res, PATH.loadTConfigListTree, params);
})

router.get('/queryTItemValueByPager', function (req, res, next) {
  let params = req.query;
  delete params.timestamp;
  POST(req, res, PATH.queryTItemValueByPager, params);
})

router.get('/saveCorpCreateApply', function (req, res, next) {
  let params = req.query;
  params.userId = Number(params.userId);
  params.corpId = Number(params.corpId);
  delete params.timestamp;
  POST(req, res, PATH.saveCorpCreateApply, params);
})
router.get('/getDefaultInfo', function (req, res, next) {
  let params = req.query;
  delete params.timestamp;
  POST(req, res, PATH.getDefaultInfo, params);
})
module.exports = router;