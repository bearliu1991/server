const router = require("express").Router();
const appRouter = require("./routerobj");
const transformData = appRouter.UTILS.transformData;
const PATH = appRouter.PATH;
const POST = appRouter.POST;
const GetClientIp = require("../../utils/getClientIp");
const https = require("../../https");


router.post('/xkdata-web/uPayOrder/updatePayOrderByWxNotify', function (req, res, next) {
    // wx支付返回接口    
    let url = req.url;
    let params = req.body;
    console.log(params);
    POST(req, res, PATH.baseurl + '/xkdata-web/uPayOrder/updatePayOrderByWxNotify', params, data => {
        console.log(data)
        if (data.code === 1) {
            var toursXml = '<xml>'+
            '<return_code><![CDATA[SUCCESS]]></return_code>'+
            '<return_msg><![CDATA[OK]]></return_msg>'+
            '</xml>';
            res.type('application/xml');
            return res.send(toursXml);
        }
        return data
    });
})

router.post('/xkdata-web/uPayOrder/updatePayOrderByAliPayNotify', function (req, res, next) {
    // ali 支付返回接口
    let params = transformData(req.body, {
      gmt_create: "gmt_create",
      charset: "charset",
      seller_email: "seller_email",
      subject: "subject",
      sign: "sign",
      buyer_id: "buyer_id",
      invoice_amount: "invoice_amount",
      notify_id: "notify_id",
      fund_bill_list: "fund_bill_list",
      notify_type: "notify_type",
      trade_status: "trade_status",
      receipt_amount: "receipt_amount",
      app_id: "app_id",
      buyer_pay_amount: "buyer_pay_amount",
      sign_type: "sign_type",
      seller_id: "seller_id",
      gmt_payment: "gmt_payment",
      notify_time: "notify_time",
      version: "version",
      out_trade_no: "out_trade_no",
      total_amount: "total_amount",
      trade_no: "trade_no",
      buyer_logon_id: "buyer_logon_id",
      point_amount: "point_amount"
    });
    POST(req, res, PATH.baseurl + '/xkdata-web/uPayOrder/updatePayOrderByAliPayNotify', params, data => {
        console.log(data)
        if (data.code === 1) {
           return res.send("success")
        }
        return data
    });
})

module.exports = router;
