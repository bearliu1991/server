const appRouter = require("./routerobj");
const router = require("express").Router();
const PATH = appRouter.PATH;
const POST = appRouter.POST;
const transformData = appRouter.UTILS.transformData;

// 获取个人信息复合列表
router.post("/getUserDataMulti", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.getUserDataMulti, param);
});
// 获取个人信息复合详情
router.post("/getUserDataMultiDetail", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.getUserDataMultiDetail, param);
});
// 更新用户状态
router.post("/updateUserStatus", function(req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.updateUserStatus, param);
});

// 获取个人信息和菜单 2018-10-29 xuyuan
  router.post("/getUserAuthMenu", function(req, res, next) {
    let param = req.body;
    param["sessionId"] = req.sessionID;
    POST(req, res, PATH.getUserAuthMenu, param);
  });

/**
 * 运营平台的用户管理 （运营用户）
 * 20018-11-01
 * 徐远
 */
// 获取运营用户详情 2018-11-01 xuyuan  
router.post("/queryManageUserByUserId", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.queryManageUserByUserId, param);
});
// 批量启用禁用用户 2018-11-01 xuyuan 
router.post("/updateManageUserStatus", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.updateManageUserStatus, param);
});
// 删除运营用户 2018-11-01 xuyuan  
router.post("/deleteManageUser", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.deleteManageUser, param);
});
// 运营用户列表 2018-11-01 xuyuan  
router.post("/getUserDataOperateByPager", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.getUserDataOperateByPager, param);
});
// 运营用户新增 2018-11-01 xuyuan  
router.post("/saveOperateUser", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.saveOperateUser, param);
});
// 运营用户修改 2018-11-01 xuyuan  
router.post("/updateOperateUser", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.updateOperateUser, param);
});
// 运营用户修改 2018-11-02 xuyuan  
router.post("/updateManageUserRole", function (req, res, next) {
  let param = req.body;
  param["sessionId"] = req.sessionID;
  POST(req, res, PATH.updateManageUserRole, param);
});

module.exports = router;
