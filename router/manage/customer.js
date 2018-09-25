const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST
const GET = appRouter.GET

router.post('/getCustomerListByPage', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getCustomerListByPage, param)
})

router.post('/deleteCustomer', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteCustomer, param)
})

router.post('/updateCustomerStatus', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateCustomerStatus, param)
})
router.post('/updateCustomerRemarkr', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateCustomerRemarkr, param)
})

router.post('/selectCustomerInfo', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.selectCustomerInfo, param)
})

router.post('/saveCustomer', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveCustomer, param)
})

module.exports = router;