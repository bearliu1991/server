const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/getAuthMenuItemByMenuId', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getAuthMenuItemByMenuId, param)
})

router.post('/saveOrUpdateAuthMenuItem', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveOrUpdateAuthMenuItem, param)
})
router.post('/deletAuthMenu', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deletAuthMenu, param)
})
router.post('/queryAuthMenuTreeBySubSystemAndBusiType', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryAuthMenuTreeBySubSystemAndBusiType, param)
})
router.post('/saveOrUpdateAuthMenu', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveOrUpdateAuthMenu, param)
})
router.post('/deleteAuthMenuItem', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteAuthMenuItem, param)
})
router.post('/saveMenuAuthItem', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveMenuAuthItem, param)
})
router.post('/saveAuthMenuItem', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveAuthMenuItem, param)
})
module.exports = router;