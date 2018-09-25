const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST
const GET = appRouter.GET
const UTILS = appRouter.UTILS

router.post('/addTIdentity', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addTIdentity, param)
})

router.post('/deleteTIdentity', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteTIdentity, param)
})

router.post('/queryTIdentity', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTIdentity, param)
})

router.post('/addTIdentityService', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addTIdentityService, param)
})

router.post('/updateTIdentity', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateTIdentity, param)
})

router.post('/deleteTIdentityService', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteTIdentityService, param)
})

router.post('/queryIdentityByPager', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryIdentityByPager, param)
})

router.post('/queryTIdentityService', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryTIdentityService, param)
})

module.exports = router;