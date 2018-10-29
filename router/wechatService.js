const router = require("express").Router()
const qs = require('querystring')
const request = require("../utils/request")
const wxSdk = require("../utils/wxSdk")
const wxConfig = require('../config/wx.config')

// 获取微信SDK配置
router.post("/api/wechat/sdkConfig", async function(req, res, next) {
  const pageUrl = req.body.url.split('#')[0];
  const wxSdkConfig = await wxSdk.getSignPackage(pageUrl);
  res.json({
    code:1,
    data: wxSdkConfig
  })
})

// 验证是否存在openId并且获取OpendId
router.get("/api/wechat/auth", function(req, res, next) {
    const pageUrl = req.originalUrl.split("pageUrl=")[1];
    req.session.pageUrl = pageUrl  // 保存回调的页面
    // 判断openId是否存在获取openId
    if(req.session.openId) {
        res.json({code: 1, data: {openId: req.session.openId }})
    } else {
        res.json({code: 1010, msg: 'openId不存在'})
    }
})

// 授权获取OpenId
router.post("/api/wechat/enter", async function(req, res, next) {
  let { code } = req.body // code
  // 授权回调地址获取openId
  let reqUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?"
  let params = {
    appid: wxConfig.appId,
    secret: wxConfig.secret,
    code: code,
    grant_type: "authorization_code"
  }
  let url = reqUrl + qs.stringify(params)
  const openId = await request.get(url).then(response => {
    return response.data.openid
  })
  res.json({
    code: 1,
    data: {
      openId
    }
  })
})

module.exports = router
