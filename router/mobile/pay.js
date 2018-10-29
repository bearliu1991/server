const router = require("express").Router();
const querystring = require("querystring");
const appRouter = require("./routerobj");
const PATH = appRouter.PATH;
const POST = appRouter.POST;
const GetClientIp = require("../../utils/getClientIp");
const https = require("../../https");
const wxSign = require("../../utils/wxSign");
router.post("/getOrderPayInfo", function(req, res, next) {
  let params = req.body;
  POST(req, res, PATH.getOrderPayInfo, params);
});
// 创建订单返回订单参数
router.post("/updatePayOrderReturnParam", function(req, res, next) {
  let params = req.body;
  // IP微信必传
  if(params.type !==1) {
    params.spbillCreateIp = GetClientIp(req);
  }
  POST(req, res, PATH.updatePayOrderReturnParam, params, (data) => {
    if(data.code === 1) {
      // 判断工单状态
      if ([1, 2, 3, 4, 5, 6].indexOf(data.data.orderStatus) > -1) {
        // 直接返回数据
        res.json(data)
      } else {
        if (params.type === 3) {
          // H5支付
          let _data = data.data.wxH5PayForm;  
          https.post({ host: "api.mch.weixin.qq.com", path: "/pay/unifiedorder" }, _data, res, (wxResponse) => {
            // 创建微信订单及返回mweb_url
            res.json({
              code : 1,
              data:wxResponse.data.xml
            })
          });
          // 根据mweb_url的地址，然后进行重定向
        } else if (params.type === 2) {
          // 微信公共号支付
          let _data = data.data.wxAppIdPayForm; // 支付表单参数
          let pageQuery = {
            orderId: data.data.orderId,
            userId: data.data.userId,
            type: data.data.type,
            outTradeNo: data.data.outTradeNo
          }
          const pageQueryStr = querystring.stringify(pageQuery)
          https.post({ host: "api.mch.weixin.qq.com", path: "/pay/unifiedorder" }, _data, res, (wxResponse) => {
            // 创建微信订单及返回参数
            if (wxResponse.data.xml.return_code === 'FAIL' || wxResponse.data.xml.result_code === 'FAIL') {
              res.json({
                code: 1,
                data: wxResponse.data.xml
              })
            } else {
              const signData = wxSign(wxResponse.data.xml.prepay_id)
              res.json({
                code : 1,
                data: signData,
                pageQuery: pageQueryStr
              })
            }
          });
        } else {
          // 支付宝支付
          res.json(data)
        }
      }
    } else {
      res.json(data)
    } 
  });
});

router.post("/updatePayOrderByPayType", function (req, res, next) {
  let params = req.body; // 请求参数，交易单号，用户，支付类型
  // const tradeNo = params['out_trade_no']
  // const userId= 
  // H5支付
  let data = {
    packageName: "biaozhun",
    orderPayPrice: "2800.00",
    type: 2
  };
  res.json({ code: 1, data: data })
  //   POST(req, res, PATH.updatePayOrderByPayType, params);
});

module.exports = router;
