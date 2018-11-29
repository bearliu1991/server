const router = require("express").Router();
const querystring = require("querystring");
const appRouter = require("./routerobj");
const PATH = appRouter.PATH;
const POST = appRouter.POST;
const GetClientIp = require("../../utils/getClientIp");
const https = require("../../https");
const wxSign = require("../../utils/wxSign");
const logger = require('../../utils/log.js')
router.post("/getOrderPayInfo", function(req, res, next) {
  let params = req.body;
  POST(req, res, PATH.getOrderPayInfo, params);
});
// 创建订单返回订单参数
router.post("/updatePayOrderReturnParam", function(req, res, next) {
  let params = req.body;
  if (params.type === 1) {
    params.type = 'ALI_PAY'
  } else if (params.type === 2) {
    params.type = 'WX_JSAPI_PAY'
  } else if (params.type === 3) {
    params.type = 'WX_H5_PAY'
  }
  POST(req, res, PATH.updatePayOrderReturnParam, params, (data) => {
    if(data.code === 1) {
      // 判断工单状态
      if ([1, 2, 3, 4, 5, 6].indexOf(data.data.orderStatus) > -1) {
        // 直接返回数据
        res.json(data)
      } else {
        // 返回参数
        let pageQuery = {
          orderId: data.data.orderId,
          userId: data.data.userId,
          type: data.data.type,
          outTradeNo: data.data.outTradeNo
        }
        const pageQueryStr = querystring.stringify(pageQuery)
        if (params.type === 'WX_H5_PAY') {
          // H5支付
          let _data = data.data.wxH5PayForm;  
          https.post({ host: "api.mch.weixin.qq.com", path: "/pay/unifiedorder" }, _data, res, (wxResponse) => {
            // 创建微信订单及返回mweb_url
            const responseData = {
              code : 1,
              data:wxResponse.data.xml,
              pageQuery: pageQueryStr
            }
            logger.info("node->MOBILE >>>>>> " + " response data: " + JSON.stringify(responseData));
            res.json(responseData)
          });
          // 根据mweb_url的地址，然后进行重定向
        } else if (params.type === 'WX_JSAPI_PAY') {
          // 微信公共号支付
          let _data = data.data.wxAppIdPayForm; // 支付表单参数
          https.post({ host: "api.mch.weixin.qq.com", path: "/pay/unifiedorder" }, _data, res, (wxResponse) => {
            // 创建微信订单及返回参数
            if (!wxResponse.data.xml.prepay_id) {
              res.json({
                code: 1,
                data: wxResponse.data.xml
              })
            } else {
              const signData = wxSign(wxResponse.data.xml.prepay_id)
              const responseData = {
                code : 1,
                data: signData,
                pageQuery: pageQueryStr
              }
              logger.info("node->MOBILE >>>>>> " + " response data: " + JSON.stringify(responseData));
              res.json(responseData)
            }
          });
        } else {
          // 支付宝支付
          logger.info("node->MOBILE >>>>>> " + " response data: " + JSON.stringify(data));
          res.json(data)  
        }
      }
    } else {
      logger.info("node->MOBILE >>>>>> " + " response data: " + JSON.stringify(data));
      res.json(data)
    } 
  });
});

router.post("/updatePayOrderByPayType", function (req, res, next) {
  let params = req.body; // 请求参数，交易单号，用户，支付类型
  if (params.type === 1) {
    params.type = 'WX_JSAPI_PAY'
  } else if (params.type === 2) {
    params.type = 'ALI_PAY'
  } else if (params.type === 3) {
    params.type = 'BANK_PAY'
  } else if (params.type === 4) {
    params.type = 'WX_H5_PAY'
  }
  POST(req, res, PATH.updatePayOrderByPayType, params);
});

router.post("/getPayOrderStatus", function (req, res, next) {
  let params = req.body; // 交易单号
  POST(req, res, PATH.getPayOrderStatus, params);
});

module.exports = router;
