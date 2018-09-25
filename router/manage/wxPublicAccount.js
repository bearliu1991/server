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

router.post('/updatePublicAccountToActive', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountToActive, param)
})
router.post('/updatePublicAccountListToDisabled', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountListToDisabled, param)
})
router.post('/updatePublicAccountToBlockUp', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountToBlockUp, param)
})

router.post('/updatePublicAccountToUnAuthorization', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountToUnAuthorization, param)
})

router.post('/updatePublicAccountListStatusToDelete', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updatePublicAccountListStatusToDelete, param)
})

module.exports = router;