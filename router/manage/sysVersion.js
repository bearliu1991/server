const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/getIsNewVersion', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getIsNewVersion, param)
})

router.post('/deleteVersion', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteVersion, param)
})
router.post('/updateVersion', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateVersion, param)
})
router.post('/addVersion', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addVersion, param)
})

router.post('/queryTAppVersionByPager', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTAppVersionByPager, param)
})

module.exports = router;