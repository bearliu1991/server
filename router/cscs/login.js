const http = require('../http');
const router = require('express').Router();
const PATH = http.PATH
const Request = http.Request
const POST = http.POST
const GET = http.GET

// 登陆
router.post('/login', function (req, res, next) {
    let param = {
        identificationNumber: req.body.username,
        loginPassword: req.body.psw,
        sessionId: req.sessionID,
        platformType: req.body.platformType
    }    
    POST(req, res, PATH.LOGIN, param, function (resData) {
        res.json(resData)
    })
})

router.post('/register', function (req, res) {
    let param = {
        identificationNumber: req.body.username,
        loginPassword: req.body.psw,
        sessionId: req.sessionID,
        registerType: req.body.regType,
        mobile: req.body.mobile,
        platformType: req.body.platformType,
        autoLogin: req.body.autoLogin
    }
    POST(req, res, PATH.REGISTER, param, function (resData) {
        res.json(resData)
    })
})

router.post('/logout', function (req, res) {
    // 输出 JSON 格式
    let param = {
        sessionId: req.sessionID,
    }
    POST(req, res, PATH.REGISTER, param, function (resData) {
        res.json(resData)
    })
})

module.exports = router;