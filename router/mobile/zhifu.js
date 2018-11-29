const router = require("express").Router();
const json_xml = require("json_xml");
const appRouter = require("./routerobj");
const transformData = appRouter.UTILS.transformData;
const PATH = appRouter.PATH;
const POST = appRouter.POST;
const reqResXml = require('../../utils/reqResXml')


router.post('/xkdata-web/uPayOrder/updatePayOrderByWxNotify', function (req, res, next) {
    // wx支付返回接口    
    reqResXml.getDataOrXML(req,res, next).then(data => {
        const paramsJson = json_xml.xml2json(data).xml;
        let params = { params : JSON.stringify(paramsJson)}
        console.log('支付回调参数' + params)
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
})

router.post('/xkdata-web/uPayOrder/updatePayOrderByAliPayNotify', function (req, res, next) {
    // ali 支付返回接口
    let params = { params : JSON.stringify(req.body)}
    POST(req, res, PATH.baseurl + '/xkdata-web/uPayOrder/updatePayOrderByAliPayNotify', params, data => {
        console.log(data)
        if (data.code === 1) {
           return res.send("success")
        }
        return data
    });
})

module.exports = router;
