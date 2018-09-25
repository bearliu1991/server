const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/deleteWord', function (req, res) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteWord, param)
})

router.post('/updateWordUsage', function (req, res) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateWordUsage, param)
})

router.post('/addWord', function (req, res) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addWord, param)
})

router.post('/getWordList', function (req, res) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getWordList, param)
})

router.post('/getWordInfo', function (req, res) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getWordInfo, param)
})

module.exports = router;