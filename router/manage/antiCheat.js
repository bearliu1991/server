const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/queryAntiCheatCfgByPager', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryAntiCheatCfgByPager, param)
})

router.post('/modAntiCheatCfg', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.modAntiCheatCfg, param)
})
router.post('/delAntiCheatCfg', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.delAntiCheatCfg, param)
})
router.post('/queryAntiCheatCfg', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryAntiCheatCfg, param)
})
router.post('/addAntiCheatCfg', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.addAntiCheatCfg, param)
})

module.exports = router;