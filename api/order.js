const config = require('../config/dev.env')
const api = config.ADMIN_BASE_API;
module.exports = {
  dateList: api + '/tconfig/queryTItemValueByPager', // 时间列表
  menuList: api + '/tPackage/getTPackageList', // 套餐列表
  recordsList: api + '/order/getOrderListByPage', // 订单列表
  orderStatus: api + '/tconfig/queryTItemValueByPager', // 订单状态列表
  orderDetail: api + '/order/getDetail', // 订单详情
  usingMenu: api + '/corp/getCurOrderDetail', // 正在使用的套餐
  ajaxUsingMenu: api + '/tconfig/queryTItemValueByPage', // 正在使用的套餐
  ajaxUsingMenu: api + '/tconfig/queryTItemValueByPage', // 正在使用的套餐
  ajaxUsingMenu: api + '/tconfig/queryTItemValueByPage', // 正在使用的套餐
  ajaxUsingMenu: api + '/tconfig/queryTItemValueByPage', // 正在使用的套餐
  ajaxUsingMenu: api + '/tconfig/queryTItemValueByPage' // 正在使用的套餐
}
  