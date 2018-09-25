const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/getCorpListMultiByPager', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getCorpListMultiByPager, param)
})

router.post('/getCorpInfoMulti', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getCorpInfoMulti, param)
})
router.post('/updateCorpStatusByCorpId', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateCorpStatusByCorpId, param)
})
router.post('/updateCorpPackName', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateCorpPackName, param)
})

module.exports = router;