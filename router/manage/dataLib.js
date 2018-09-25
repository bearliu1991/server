const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/queryTItemValueByPager', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTItemValueByPager, param)
})
router.post('/addTItemValue', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addTItemValue, param)
})

router.post('/queryTItemValue', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTItemValue, param)
})

router.post('/updateTItemDefine', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateTItemDefine, param)
})

router.post('/deleteTItemValue', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteTItemValue, param)
})
router.post('/addTItemDefine', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addTItemDefine, param)
})
router.post('/updateTItemValue', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateTItemValue, param)
})

router.post('/deleteTItemDefine', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteTItemDefine, param)
})


router.post('/queryTItemDefine', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTItemDefine, param)
})

router.post('/queryTItemDefineByPager', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTItemDefineByPager, param)
})

module.exports = router;