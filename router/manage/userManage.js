const appRouter = require("./routerobj");
// const router = appRouter.router
const router = require("express").Router();
const PATH = appRouter.PATH;
const POST = appRouter.POST;
const UTILS = appRouter.UTILS;

router.post("/getCssWxUserByPager", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.getCssWxUserByPager, param);
});

router.post("/updateRemarkByOpenid", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.updateRemarkByOpenid, param);
});

router.post("/getUserInfoByOpenid", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH. getUserInfoByOpenid, param);
});

router.post("/updateBlackSubscribeByOpenids", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH. updateBlackSubscribeByOpenids, param);
});


module.exports = router;
