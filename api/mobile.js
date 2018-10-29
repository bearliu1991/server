const config = require('../config/dev.env')
const api = config.ADMIN_BASE_API;
module.exports = {
  baseurl: config.BASE_All,
  joinCorp: api + "/employee/updateInviteEmployBind", // 绑定员工 与 微信信息
  verifyCode: api + "/user/resendCode", // 生成验证码
  getUserInfo: api + "/employee/getInviteEmployInfo", // 通过邀请码获取邀请员工信息
  getOrderPayInfo: api + "/uPayOrder/getOrderPayInfo", // 扫码获取支付信息接口
  updatePayOrderReturnParam: api + "/uPayOrder/updatePayOrderReturnParam", // 确认支付
  updatePayOrderByPayType: api + "/uPayOrder/updatePayOrderByPayType" // 支付查询接口
};
  