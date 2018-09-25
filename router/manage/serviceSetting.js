const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST
const GET = appRouter.GET
const UTILS = appRouter.UTILS

router.post('/delTService', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.delTService, param)
})

router.post('/getTServiceById', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getTServiceById, param)
})

router.post('/getTServiceListByPage', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getTServiceListByPage, param)
})

router.post('/saveOrUpdateTService', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveOrUpdateTService, param)
})

module.exports = router;