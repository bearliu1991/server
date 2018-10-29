const router = require("express").Router();
const appRouter = require("./routerobj");
const PATH = appRouter.PATH;
const POST = appRouter.POST;

router.post('/getUserInfo', function (req, res, next) {
    let params = req.body;
    delete params.timestamp
    POST(req, res, PATH.getUserInfo, params);
})
router.post('/joinCorp', function (req, res, next) {
    let params = req.body;
    params.eeId = params.eeId - 0
    params.validateCodeType = params.validateCodeType - 0
    params.validateCodeLength = params.validateCodeLength - 0
    delete params.timestamp
    POST(req, res, PATH.joinCorp, params)
})
router.post('/verifyCode', function (req, res, next) {
    let params = req.body;
    params.userId = params.userId - 0
    params.validateCodeType = params.validateCodeType - 0
    params.validateCodeLength = params.validateCodeLength - 0
    delete params.timestamp
    POST(req, res, PATH.verifyCode, params);
})

module.exports = router;

