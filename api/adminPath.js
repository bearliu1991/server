const config = require('../config/dev.env')
const api = config.ADMIN_BASE_API;
module.exports = {
  // 验证Session,获取用户信息,企业信息等
  getSession: api + '/user/getSession',
  // 生成临时二维码
  getTmpQrcode: api + '/qrcode/getTmpQrcode',
  // 生成验证码
  resendCode: api + '/user/resendCode',
  // 用户绑定手机号,同时校验验证码
  bindUserEmailPhoneAndVerifyCode: api + '/user/bindUserEmailPhoneAndVerifyCode',
  // 加载系统配置内容树
  loadTConfigListTree: api + '/tconfig/loadTConfigListTree',
  // 分页查询系统字典明细表
  queryTItemValueByPager: api + '/tconfig/queryTItemValueByPager',
  // 保存创建公司申请
  saveCorpCreateApply: api + '/corp/saveCorpCreateApply',
  // 获取默认免费信息 套餐id 套餐角色id 官方appid对应的accountid
  getDefaultInfo: api + '/tSysCfg/getDefaultInfo',
  // 获取当前用户创建或加入（中） 与 审核通过的 公司列表
  getUserCorpAuthMulti: api + '/corp/getUserCorpAuthMulti',
  // 修改企业名称
  updateCorpName: api + '/corp/updateCorpName',
  // 更新公司状态
  updateCorpStatusByCorpId: api + '/corp/updateCorpStatusForA',
  // 个人信息修改
  editUser: api + '/user/editUser',
  // 退出企业
  savelogoutCompany: api + '/corp/savelogoutCompany',
  // 获取个人信息
  getPersonalInfo: api + '/user/getPersonalInfo',
  // 修改绑定手机
  updateCorpMobileById: api + '/corp/updateCorpMobileById',
  // 扫描二维码后,查看扫描结果
  getScanResult: api + '/qrcode/getScanResult',
  // 登出
  logout: api + '/user/logout',
  // 获得关键指标
  getKeyIndicators: api + '/cssCfg/getKeyIndicators',
  // 进入公司信息
  saveloginCompany: api + '/corp/saveloginCompany',
  // 获取公司统计信息
  getCorpStatisticsInfo: api + '/corp/getCorpStatisticsInfo',
  // 根据id查询公司套餐
  queryCorpPackageById: api + '/corp/queryCorpPackageById',
  // 查询公司套餐的权限列表
  queryCorpPackRoleList: api + '/corp/queryCorpPackRoleList',
  // 查询公司状态
  queryCompanyStats: api + '/corp/queryCompanyStats',
  // 获取公众号列表
  getPublicAccountList: api + '/wxPublicAccount/getPublicAccountList',
  // 判断是否可以添加公众号
  checkAppIdNum: api + '/wxPublicAccount/checkAppIdNum',
  // 删除微信公众号
  updateCssWxPublicAccountStatusToDelete: api + '/wxPublicAccount/updatePublicAccountStatusToDelete',
  // 操作解除授权按钮停用微信公众号
  updateCssWxPublicAccountToAuthBlockUp: api + '/wxPublicAccount/updatePublicAccountToUnAuthorization',
  // 操作停用按钮停用微信公众号
  updateCssWxPublicAccountToBlockUp: api + '/wxPublicAccount/updatePublicAccountToBlockUp',
  // 禁用微信公众号
  updateCssWxPublicAccountToDisabled: api + '/wxPublicAccount/updatePublicAccountToDisabled',
  // 启用微信公众号
  updateCssWxPublicAccountToActive: api + '/wxPublicAccount/updatePublicAccountToActive',
  // 公众号信息一键同步
  updateCssWxPublicAccountDataToDb: api + '/wxPublicAccount/updateCssWxPublicAccountDataToDb',
  // 用来生成第三方授权url
  getAuthUrl: api + '/thirdplat/getAuthUrl',
  // 新建企业检查
  checkCreateCorpApply: api + '/corp/checkCreateCorpApply',
  // 查看授权状态
  updateBindCorp: api + '/css/updateBindCorp',
  // 获得坐席列表
  getIntoSeatList: api + '/seat/getIntoSeatList',
  // 点击添加坐席生成坐席编号
  saveSeatNo: api + '/seat/saveSeatNo',
  // 保存坐席接口
  saveSeat: api + '/seat/saveSeat',
  // 修改坐席接口
  updateSeat: api + '/seat/updateSeat',
  // 获取坐席详情接口
  getSeatDetail: api + '/seat/getSeatDetail',
  // 查询坐席列表接口
  getSeatList: api + '/seat/getSeatList',
  // 批量为坐席修改公众号权限
  updateSeatAuthByBatch: api + '/seat/updateSeatAuthByBatch',
  // 解除授权/停用/批量停用/启用统一调用接口
  updateSeatStatus: api + '/seat/updateSeatStatus',
  // 修改坐席基本信息接口
  updateSeatBaseInfo: api + '/seat/updateSeatBaseInfo',
  // 修改坐席权限接口
  updateSeatAuth: api + '/seat/updateSeatAuth',
  // 修改个性化坐席接口
  updateConditionalSeat: api + '/seat/updateConditionalSeat',
  // 是否能上传凭证
  isCanPayVoucher: api + '/uPayOrder/isCanPayVoucher',
  // 银行汇款上传凭证,付款方名称账号上传
  saveAccountTradeOrder: api + '/uPayOrder/saveAccountTradeOrder',
  // 银行汇款上传凭证 ,付款凭证上传
  savePayVoucherTradeOrder: api + '/uPayOrder/savePayVoucherTradeOrder',
  // 是否存在待支付订单(管理平台)
  isBuyPackage: api + '/corp/isBuyPackage',
  // 获取公司当前订购服务(管理平台)
  getCurOrderDetail: api + '/corp/getCurOrderDetail',
  // 保存创建公司并创建订单
  saveCorpCreateApplyForOrder: api + '/corp/saveCorpCreateApplyForOrder',
  // 保存订单(重新订购)(管理平台)
  saveOrderInfo: api + '/order/saveOrderInfo',
  // 订单详情(管理平台)
  getDetail: api + '/order/getDetail',
  // 订单简单详情(管理平台
  getSimpleDetail: api + '/order/getSimpleDetail',
  // 取消订单(管理平台)
  updateBatchStatusForA: api + '/order/updateBatchStatusForA',
  // 修改公司logo
  updateCorpLogo: api + '/corp/updateCorpLogo',
  // 获取公司混合信息
  getCorpInfoMulti: api + '/corp/getCorpInfoMulti',
  // 查询公司，套餐，员工状态
  getCorpEmpPacStatus: api + '/corp/getCorpEmpPacStatus',
  // 修改公司省市区
  updateCorpAddress: api + '/corp/updateCorpAddress',
  // 修改管理员员工姓名
  updateAdminEmployeeName: api + '/employee/updateAdminEmployeeName',
  // 获取数据字典值
  queryTItemValueByPager: api + '/tconfig/queryTItemValueByPager'
}