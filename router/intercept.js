var express = require('express');
var router = express.Router();
var PATH = require('../api/path')
const Request = require('../utils/request')
var request = require('./http')

router.post(/^\/(csws|cms|cscs|oms)([%/?#].*$|$)/, function (req, res, next) {
  var sess = req.sessionID;
  // req.session.time = Date.now()
  // 判断浏览器的cookie不存在或已过期
  if (!sess) {
    console.error('session不存在')
    res.json({
      noExist: true
    })
    // 需要根据web站点路由二级目录，根据约定好的权限去跳转，不需要权限，直接跳转到访问的页面，否则，直接到登陆页面
  } else {
    // session存在，判断session有效性
    // 请求Java接口判断接口有效性
    var param = {sessionId: sess}
    Request.post(PATH.GET_SESSION, param, function (resData) {
      var isValid
      if (resData.code === 1) {
        console.error('session有效')
        isValid = true
      } else {
        console.error('session无效')
        isValid = false
      }
      res.json({
        valid: isValid
      })
    })
    // var validReq = request(param).then(function (response) {
    //   console.error('res')
    //   console.error(sess)
    //     // session有效
    //   console.error(response)
    //   let body = response.data
    //   let isValid
    //   if (body.code === 1) {
    //     console.error('session有效')
    //     isValid = true
    //   } else {
    //     console.error('session无效')
    //     isValid = false
    //   }
    //   res.json({
    //     routeMap: routeMap,
    //     valid: isValid
    //   })
    // }).catch(function(err){
    //   console.error(err)
    // })
  }
})
module.exports = router;
