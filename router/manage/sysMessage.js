const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/getTSystemMessageListByPage', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getTSystemMessageListByPage, param)
})

router.post('/saveOrUpdateTSystemMessage', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveOrUpdateTSystemMessage, param)
})
router.post('/getTSystemMessageById', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getTSystemMessageById, param)
})
router.post('/delTSystemMessage', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.delTSystemMessage, param)
})

module.exports = router;