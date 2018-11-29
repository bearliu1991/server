const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST
const GET = appRouter.GET
const UTILS = appRouter.UTILS

router.post('/deleteTPackageById', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteTPackageById, param)
})

router.post('/getTPackageById', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getTPackageById, param)
})

router.post('/getTPackageListByPage', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getTPackageListByPage, param)
})

router.post('/updateTPackageStatusById', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateTPackageStatusById, param)
})

router.post('/addOrUpdateTPackage', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addOrUpdateTPackage, param)
})

module.exports = router;