const appRouter = require('./routerobj');
const router = require('express').Router();
const PATH = appRouter.PATH
const POST = appRouter.POST
const GET = appRouter.GET
const UTILS = appRouter.UTILS
router.post('/queryAuthItem', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryAuthItem, param)
})

router.post('/deleteAuthItem', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteAuthItem, param)
})
router.post('/saveOrUpdateAuthItem', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    console.log(req.sessionID)
    POST(req, res, PATH.saveOrUpdateAuthItem, param)
})

router.post('/deleteAuthItemList', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteAuthItemList, param)
})

module.exports = router;