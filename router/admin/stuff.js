const appRouter = require('./httpRequest');
const router = require('express').Router();
var PATH = require('../../api/stuffPath');
const POST = appRouter.POST;

// 获取部门树
router.get('/getTree', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.getTree, params);
})
// 移动部门
router.get('/moveApart', function (req, res, next) {
  let params = req.query;
  delete params.timestamp
  POST(req, res, PATH.moveApart, params);
})
router.get('/creatApart', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.creatApart, params);
})
router.get('/delApart', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.delApart, params);
})
router.get('/formWecode', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.formWecode, params);
})
router.get('/isAddUserAvail', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.isAddUserAvail, params);
})
router.get('/modifyApart', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.modifyApart, params);
})
router.get('/processUser', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.processUser, params);
})
router.get('/unbindUser', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.unbindUser, params);
})
router.get('/addUser', function (req, res, next) {
  let params = req.query;
  params.deptId = params.deptId - 0
  params.sex = params.sex - 0
  params.addRoleIds = params.addRoleIds.map((item) => {
    return item - 0
  })
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.addUser, params);
})
router.get('/modifyUserDetail', function (req, res, next) {
  let params = req.query;
  params.eeId = params.eeId - 0
  params.sex = params.sex - 0
  delete params.timestamp
  POST(req, res, PATH.modifyUserDetail, params);
})
router.get('/userRightsList', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.userRightsList, params);
})
router.get('/userDetail', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.userDetail, params);
})
router.get('/modifyUserRole', function (req, res, next) {
  let params = req.query;
  params.eeId = params.eeId - 0
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.modifyUserRole, params);
})
router.get('/setUserZuoxi', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.setUserZuoxi, params);
})
router.get('/addRights', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.addRights, params);
})
router.get('/updateRole', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.updateRole, params);
})
router.get('/addMultiRights', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.addMultiRights, params);
})
router.get('/createCompany', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.createCompany, params);
})
router.get('/addApart', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.creatApart, params);
})
router.get('/getRightsList', function (req, res, next) {
  let params = req.query;
  params.platformType = params.platformType
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.getRightsList, params);
})
router.get('/searchOption', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.searchOption, params);
})
router.get('/zuoxiList', function (req, res, next) {
  let params = req.query;
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.zuoxiList, params);
})
// 获取员工
router.get('/getUsers', function (req, res, next) {
    let params = req.query;
    // console.error(params)
    // params.offset = Number(params.offset);
    // params.limit = Number(params.limit);
    delete params.timestamp
    POST(req, res, PATH.getUsers, params);
})
// 获取查询列表数据
router.get('/searchOption', function (req, res, next) {
  let params = req.query;
  // console.error(params)
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.searchOption, params);
})
// 获取坐席列表
router.get('/zuoxiList', function (req, res, next) {
  let params = req.query;
  // console.error(params)
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.zuoxiList, params);
})
router.get('/setTopUser', function (req, res, next) {
  let params = req.query;
  // console.error(params)
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.setTopUser, params);
})
router.get('/cancelTopUser', function (req, res, next) {
  let params = req.query;
  // console.error(params)
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.cancelTopUser, params);
})
router.get('/processUser', function (req, res, next) {
  let params = req.query;
  // console.error(params)
  // params.offset = Number(params.offset);
  // params.limit = Number(params.limit);
  delete params.timestamp
  POST(req, res, PATH.processUser, params);
})
module.exports = router;