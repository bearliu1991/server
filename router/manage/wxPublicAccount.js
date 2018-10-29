const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/getPublicAccountListByPage', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getPublicAccountListByPage, param)
})

router.post('/updatePublicAccountToActiveByOperation', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountToActiveByOperation, param)
})
router.post('/updatePublicAccountListToDisabled', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountListToDisabled, param)
})
router.post('/updatePublicAccountToBlockUpByOperation', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountToBlockUpByOperation, param)
})

router.post('/updatePublicAccountToUnAuthorizationByOperation', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountToUnAuthorizationByOperation, param)
})

router.post('/updatePublicAccountListStatusToDelete', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountListStatusToDelete, param)
})

router.post('/getPublicAccountList', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getPublicAccountList, param)
})
module.exports = router;