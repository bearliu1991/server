const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST
const GET = appRouter.GET
const UTILS = appRouter.UTILS

router.post('/deleteTJobCfg', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteTJobCfg, param)
})

router.post('/queryTJobCfg', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTJobCfg, param)
})

router.post('/addTJobCfg', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addTJobCfg, param)
})

router.post('/updateTJobCfg', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateTJobCfg, param)
})

router.post('/queryTJobCfgByPager', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTJobCfgByPager, param)
})

module.exports = router;