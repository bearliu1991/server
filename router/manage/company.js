const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/getCorpListMultiByPager', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getCorpListMultiByPager, param)
})

router.post('/getCorpInfoMulti', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.getCorpInfoMulti, param)
})
router.post('/updateCorpPackName', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.updateCorpPackName, param)
})

router.post('/queryCorpPackRoleList', function (req, res, next) {
    let param = req.body
    param['sessionId'] = req.sessionID
    POST(req, res, PATH.queryCorpPackRoleList, param)
})

router.post("/updateCorpStatusByCorpId", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
    POST(req, res, PATH.updateCorpStatusByCorpId, param);
});
// 新创建企业列表查询(运营平台) 2018-10-26 xuyuan
router.post("/getNewCorpApplyOrderForM", function (req, res, next) {
    let param = req.body;
    param["sessionId"] = req.sessionID;
    POST(req, res, PATH.getNewCorpApplyOrderForM, param);
});

// 运营端新创建企业详情 2018-10-26 xuyuan
router.post("/getCorpApplyDetail", function (req, res, next) {
    let param = req.body;
    param["sessionId"] = req.sessionID;
    POST(req, res, PATH.getCorpApplyDetail, param);
});

module.exports = router; 