const config = require('../config/dev.env')
const api = config.ADMIN_BASE_API;
module.exports = {
    joinCorp: api + '/employee/updateInviteEmployBind', // 绑定员工 与 微信信息
    verifyCode: api + '/user/resendCode', // 生成验证码
    getUserInfo: api + '/employee/getInviteEmployInfo', // 通过邀请码获取邀请员工信息
  }
  