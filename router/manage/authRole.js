const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/getAuthRoleItemByRoleId', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getAuthRoleItemByRoleId, param)
})

router.post('/saveOrUpdateAuthRoleItem', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveOrUpdateAuthRoleItem, param)
})
router.post('/deleteAuthRole', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteAuthRole, param)
})
router.post('/queryAuthRole', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryAuthRole, param)
})
router.post('/saveOrUpdateAuthRole', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.saveOrUpdateAuthRole, param)
})
router.post('/deleteAuthRoleByList', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.deleteAuthRoleByList, param)
})
router.post('/updateAuthRoleStatusByList', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateAuthRoleStatusByList, param)
})

router.post('/queryAuthRoleByBusiType', function (req, res, next) {
    //查询数据字典
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryAuthRoleByBusiType, param, (resData) => {
        try {
            if (param.limit >= 999) {
                resData.data.records = resData.data.records.map(item => {
                    return appRouter.UTILS.transformData(item, {
                        "roleId": 'roleId',
                        "roleName": "roleName"
                    })
                })
            }
            return resData;
        } catch (err) {
            return {err: 'transform err'}
        }        
    })
})

module.exports = router;