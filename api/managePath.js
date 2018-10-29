const config = require('../config/dev.env')
const api = config.MANAGE_BASE_API;
module.exports = {
  baseurl: config.BASE_All,
  LOGIN: api + "/user/loginNormal",
  REGISTER: api + "/user/registerUser",
  LOGOUT: api + "/user/logout",
  GET_SESSION: api + "/user/getSession",
  //敏感词接口
  getWordList: api + "/sensitive/getWordList",
  getWordInfo: api + "/sensitive/getWordInfo",
  delWordUsage: api + "/sensitive/delWordUsage",
  addWordUsage: api + "/sensitive/addWordUsage",
  deleteWord: api + "/sensitive/deleteWord",
  addWord: api + "/sensitive/addWord",
  updateWordUsage: api + "/sensitive/updateWordUsage",
  //菜单
  getAuthMenuItemByMenuId: api + "/auth/getAuthMenuItemByMenuId",
  saveOrUpdateAuthMenuItem: api + "/auth/saveOrUpdateAuthMenuItem",
  deletAuthMenu: api + "/auth/deletAuthMenu",
  queryAuthMenuTreeBySubSystemAndBusiType:
    api + "/auth/queryAuthMenuTreeBySubSystemAndBusiType",
  saveOrUpdateAuthMenu: api + "/auth/saveOrUpdateAuthMenu",
  deleteAuthMenuItem: api + "/auth/deleteAuthMenuItem",
  saveMenuAuthItem: api + "/auth/saveMenuAuthItem",
  saveAuthMenuItem: api + "/auth/saveAuthMenuItem",
  //角色
  getAuthRoleItemByRoleId: api + "/auth/getAuthRoleItemByRoleId",
  saveOrUpdateAuthRoleItem: api + "/auth/saveOrUpdateAuthRoleItem",
  deleteAuthRole: api + "/auth/deleteAuthRole",
  queryAuthRole: api + "/auth/queryAuthRole",
  saveOrUpdateAuthRole: api + "/auth/saveOrUpdateAuthRole",
  queryAuthRoleByBusiType: api + "/auth/queryAuthRoleByBusiType",
  deleteAuthRoleByList: api + "/auth/deleteAuthRoleByList",
  updateAuthRoleStatusByList: api + "/auth/updateAuthRoleStatusByList",
  //权限
  deleteAuthItem: api + "/auth/deleteAuthItem",
  queryAuthItem: api + "/auth/queryAuthItem",
  saveOrUpdateAuthItem: api + "/auth/saveOrUpdateAuthItem",
  deleteAuthItemList: api + "/auth/deleteAuthItemList",
  //数据字典
  deleteTItemValue: api + "/tconfig/deleteTItemValue",
  updateTItemValue: api + "/tconfig/updateTItemValue",
  queryTItemValue: api + "/tconfig/queryTItemValue",
  addTItemValue: api + "/tconfig/addTItemValue",
  queryTItemValueByPager: api + "/tconfig/queryTItemValueByPager",
  updateTItemDefine: api + "/tconfig/updateTItemDefine",
  addTItemDefine: api + "/tconfig/addTItemDefine",
  deleteTItemDefine: api + "/tconfig/deleteTItemDefine",
  queryTItemDefine: api + "/tconfig/queryTItemDefine",
  queryTItemDefineByPager: api + "/tconfig/queryTItemDefineByPager",
  loadTConfigListTree: api + "/tconfig/loadTConfigListTree",
  //客户
  deleteCustomer: api + "/customer/deleteCustomer",
  updateCustomerStatus: api + "/customer/updateCustomerStatus",
  updateCustomerRemarkr: api + "/customer/updateCustomerRemarkr",
  selectCustomerInfo: api + "/customer/selectCustomerInfo",
  getCustomerListByPage: api + "/customer/getCustomerListByPage",
  saveCustomer: api + "/customer/saveCustomer",
  //系统配置、系统变量
  delSysCfg: api + "/tSysCfg/delSysCfg",
  getSysCfg: api + "/tSysCfg/getSysCfg",
  getSysCfgListPaging: api + "/tSysCfg/getSysCfgListPaging",
  updateSysCfg: api + "/tSysCfg/updateSysCfg",
  addSysCfg: api + "/tSysCfg/addSysCfg",
  // 套餐
  deleteTPackageRoleById: api + "/tPackage/deleteTPackageRoleById",
  getTPackageRoleById: api + "/tPackage/getTPackageRoleById",
  addTPackageRole: api + "/tPackage/addTPackageRole",
  deleteTPackageById: api + "/tPackage/deleteTPackageById",
  getTPackageById: api + "/tPackage/getTPackageById",
  getTPackageListByPage: api + "/tPackage/getTPackageListByPage",
  addOrUpdateTPackage: api + "/tPackage/addOrUpdateTPackage",
  updateTPackageStatusById: api + "/tPackage/updateTPackageStatusById",
  // 状态配置
  getTStatusListByPage: api + "/tStatus/getTStatusListByPage",
  getTStatusTableById: api + "/tStatus/getTStatusTableById",
  delTStatusTableById: api + "/tStatus/delTStatusTableById",
  saveTStatusTable: api + "/tStatus/saveTStatusTable",
  delTStatusById: api + "/tStatus/delTStatusById",
  getTStatusById: api + "/tStatus/getTStatusById",
  saveOrUpdateTStatus: api + "/tStatus/saveOrUpdateTStatus",
  // 服务配置
  delTService: api + "/tService/delTService",
  getTServiceById: api + "/tService/getTServiceById",
  getTServiceListByPage: api + "/tService/getTServiceListByPage",
  saveOrUpdateTService: api + "/tService/saveOrUpdateTService",
  // tJob
  deleteTJobCfg: api + "/tJob/deleteTJobCfg",
  queryTJobCfg: api + "/tJob/queryTJobCfg",
  addTJobCfg: api + "/tJob/addTJobCfg",
  updateTJobCfg: api + "/tJob/updateTJobCfg",
  queryTJobCfgByPager: api + "/tJob/queryTJobCfgByPager",
  // 用户身份定义
  addTIdentity: api + "/tconfig/addTIdentity",
  deleteTIdentity: api + "/tconfig/deleteTIdentity",
  queryTIdentity: api + "/tconfig/queryTIdentity",
  addTIdentityService: api + "/tconfig/addTIdentityService",
  updateTIdentity: api + "/tconfig/updateTIdentity",
  deleteTIdentityService: api + "/tconfig/deleteTIdentityService",
  queryIdentityByPager: api + "/tconfig/queryIdentityByPager",
  queryTIdentityService: api + "/tconfig/queryTIdentityService",
  // 防作弊刷票配置
  queryAntiCheatCfgByPager: api + "/tCheatConfig/queryAntiCheatCfgByPager",
  modAntiCheatCfg: api + "/tCheatConfig/modAntiCheatCfg",
  delAntiCheatCfg: api + "/tCheatConfig/delAntiCheatCfg",
  queryAntiCheatCfg: api + "/tCheatConfig/queryAntiCheatCfg",
  addAntiCheatCfg: api + "/tCheatConfig/addAntiCheatCfg",
  // APP应用注册表
  updateAppConfig: api + "/tAppConfig/updateAppConfig",
  queryTAppConfigByPager: api + "/tAppConfig/queryTAppConfigByPager",
  queryAppConfig: api + "/tAppConfig/queryAppConfig",
  deleteAppConfig: api + "/tAppConfig/deleteAppConfig",
  addAppConfig: api + "/tAppConfig/addAppConfig",
  // 系统消息
  getTSystemMessageListByPage:
    api + "/tSystemMessage/getTSystemMessageListByPage",
  saveOrUpdateTSystemMessage:
    api + "/tSystemMessage/saveOrUpdateTSystemMessage",
  getTSystemMessageById: api + "/tSystemMessage/getTSystemMessageById",
  delTSystemMessage: api + "/tSystemMessage/delTSystemMessage",
  // 系统消息
  getIsNewVersion: api + "/verCfg/getIsNewVersion",
  deleteVersion: api + "/verCfg/deleteVersion",
  updateVersion: api + "/verCfg/updateVersion",
  addVersion: api + "/verCfg/addVersion",
  queryTAppVersionByPager: api + "/verCfg/queryTAppVersionByPager",
  // company management
  getCorpListMultiByPager: api + "/corp/getCorpListMultiByPager",
  getCorpInfoMulti: api + "/corp/getCorpInfoMulti",
  updateCorpStatusByCorpId: api + "/corp/updateCorpStatusByCorpId",
  updateCorpPackName: api + "/corp/updateCorpPackName",
  queryCorpPackRoleList: api + "/corp/queryCorpPackRoleList", // 接口在企业管理平台员工模块内
  // 公众号
  getPublicAccountListByPage:
    api + "/wxPublicAccount/getPublicAccountListByPage", // 分页查询
  updatePublicAccountToActiveByOperation:
    api + "/wxPublicAccount/updatePublicAccountToActiveByOperation", // 启用
  updatePublicAccountListToDisabled:
    api + "/wxPublicAccount/updatePublicAccountListToDisabled", // 批量禁用
  updatePublicAccountToBlockUpByOperation:
    api + "/wxPublicAccount/updatePublicAccountToBlockUpByOperation", // 停用
  updatePublicAccountToUnAuthorizationByOperation:
    api + "/wxPublicAccount/updatePublicAccountToUnAuthorizationByOperation", // 解除授权
  updatePublicAccountListStatusToDelete:
    api + "/wxPublicAccount/updatePublicAccountListStatusToDelete", // 批量删除
  getPublicAccountList: api + "/wxPublicAccount/getPublicAccountList", // 接口在企业管理平台员工模块内
  // 用户信息
  getCssWxUserByPager: api + "/wechat/user/getCssWxUserByPager",
  updateRemarkByOpenid: api + "/wechat/user/updateRemarkByOpenid",
  getUserInfoByOpenid: api + "/wechat/user/getUserInfoByOpenid",
  updateBlackSubscribeByOpenids:
    api + "/wechat/user/updateBlackSubscribeByOpenids",
  // 坐席
  selectSeatByPagerOperate: api + "/seat/selectSeatByPagerOperate",
  getSeatDetailByOperation: api + "/seat/getSeatDetailByOperation",
  updateSeatListStatusByOperation:
    api + "/seat/updateSeatListStatusByOperation",
  // 6.5订单管理(运营平台)
  getOrderListByPageForM: api + "/order/getOrderListByPageForM", // 订单列表
  updateBatchStatusForM: api + "/order/updateBatchStatusForM", // 修改状态
  getOrderDetail: api + "/order/getDetailForM", // 订单详情
  // 交易订单
  getTradeOrderByOperation: api + "/uPayOrder/getTradeOrderByOperation", // 订单列表
  updateTradeOrderApprovalRefuse:
    api + "/uPayOrder/updateTradeOrderApprovalRefuse", // 运营系统拒绝审批
  updateTradeOrderApprovalAdopt:
    api + "/uPayOrder/updateTradeOrderApprovalAdopt", // 运营系统审批通过
  getPayOrderDetailForM: api + "/uPayOrder/getPayOrderDetailForM", // X详情
  // 购买套餐
  isBuyPackageForM: api + "/corp/isBuyPackageForM", // 是否存在待支付订单
  getCurOrderDetailForM: api + "/corp/getCurOrderDetailForM", // 获取公司当前订购服务
  getTPackageListForM: api + "/tPackage/getTPackageListForM", //套餐列表
  saveOrderInfoForM: api + "/order/saveOrderInfoForM", //保存订单
  getSimpleDetailForM: api + "/order/getSimpleDetailForM", // 订单简单详情(运营平台)
  // 上传凭证
  isCanPayVoucher: api + "/uPayOrder/isCanPayVoucher", // 是否能上传凭证(运营平台)
  saveAccountTradeOrder: api + "/uPayOrder/saveAccountTradeOrder", // 银行汇款上传凭证,付款方名称账号上传
  savePayVoucherTradeOrder: api + "/uPayOrder/savePayVoucherTradeOrder" // 银行汇款上传凭证 ,付款凭证上传
};