const appRouter = require("./routerobj");
const router = require("express").Router();
const PATH = appRouter.PATH;
const POST = appRouter.POST;
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

router.post('/checkUpdate', function (req, res) {
    // 输出 JSON 格式
    let param = {
        sessionId: req.sessionID,
    }
    res.json(
        {
            code: 1, 
            data: {
                "isUpdate": false,
                "hotUpdate": false,
                "installUpdate": true,
                "innerVersion": "2",
                "outerVersion": "2.10.1",
                "hotUpdateCont": {
                "innerV": "2",
                "processType": "cover",
                "downloadUrl": "",
                "serverRelativeUrl": ""
                },
                "updateUrl": "",
                "descripts": [
                "优化检测流程优化检测流优化检测流优化检测流优化检测流",
                "活动页更换",
                "bug修复",
                "小数点问题修复"
                ],
                "installDes": ""
            }
        }
    )
})

module.exports = router;