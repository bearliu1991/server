const appRouter = require('../routerobj');
const router = require('express').Router();
const PATH = appRouter.PATH
const postOrGet = appRouter.postOrGet
const POST = appRouter.POST
const GetClientIp = require('../../utils/getClientIp')

router.post('/clientip', (req, res) => {
  res.send(GetClientIp(req))
})

router.post('/api/login', function (req, res, next) {
  let param = {
    identificationNumber: req.body.username,
    loginPassword: req.body.psw,
    sessionId: req.sessionID,
    platformType: req.body.platformType
  }
  POST(req, res, PATH.LOGIN, param)
})

router.post('/api/register', function (req, res, next) {
  let param = {
      identificationNumber: req.body.username,
      loginPassword: req.body.psw,
      sessionId: req.sessionID,
      registerType: req.body.regType,
      mobile: req.body.mobile,
      platformType: req.body.platformType,
      autoLogin: req.body.autoLogin
  }
  POST(req, res, PATH.REGISTER, param)
})

router.post('/api/logout', function (req, res, next) {
  let param = {
    sessionId: req.sessionID
  }
  POST(req, res, PATH.LOGOUT, param)
})


module.exports = router;