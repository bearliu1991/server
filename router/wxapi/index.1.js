/**
 * 微信接口转换模块 
 */
const router = require('express').Router()
const Request = require('request')
const WX_API = require('../../config/dev.env.js').WX_API
const logger = require('../../utils/log.js')

const POST = (req, url, param, callback) => {
    Request.post({
        url: url,
        body: param,
        headers: req.headers
    }, (err, _res, body) => {
        if (!err && _res.statusCode == 200) {
            if (typeof callback === "function") {
                callback(body)
            }
        } else {
            logger.err(url + ' request error: ' + JSON.stringify(err))
        }
    })
}

const GET = (req, res, url, param) => {
    Request.get({
        url: url,
        headers: req.headers
    }, (err, _res, body) => {
        if (!err && _res.statusCode == 200) {
            res.send(body)
        } else {
            logger.err(url + ' request error: ' + JSON.stringify(err))
        }
    })
}

const getDataOrXML = (req, res, next) => {
    return new Promise((reslove, reject) => {
        if (req.is('application/json')) {
            reslove(req.body)
        } else {
            req.xml = ''
            req.on('data', function (chunk) {
                req.xml += chunk;
            })
            req.on('end', function () {
                reslove(req.xml)
            })
        }
    })
}
router.post('/xkdata-web/wechatNotify/msgNotify/*', function (req, res, next) {
    getDataOrXML(req, res, next).then(data => {
        let url = req.url
        let params = data
        POST(req, WX_API + url, params);
    })  
    res.send('')
})
router.get('/xkdata-web/wechatNotify/msgNotify/*', function (req, res, next) {
    let url = req.url
    GET(req, res, WX_API + url)
})

router.post('/xkdata-web/wechatNotify/componentNotify/', function (req, res, next) {
    getDataOrXML(req, res, next).then(data => {
        let url = req.url
        let params = data
        POST(req, WX_API + url, params, (_res) => {
            res.send(_res)
        });
    })
})

router.post('/xkdata-web/wechatNotify/msgPlatNotify/:appid', function (req, res, next) {
    let appid = req.params.appid
    if (/8ff8$/.test(appid) ){
        getDataOrXML(req, res, next).then(data => {
            let url = req.url
            let params = data
            POST(req, WX_API + url, params, (_res) => {
                res.send(_res)
            });
        })
    } else {
        res.send('')
        getDataOrXML(req, res, next).then(data => {
            let url = req.url
            let params = data
            POST(req, WX_API + url, params);
        })
    }    
})

router.post('/xkdata-web/wechatNotify/componentNotify/', function (req, res, next) {
    getDataOrXML(req, res, next).then(data => {
        let url = req.url
        let params = data
        POST(req, WX_API + url, params, (_res) => {
            res.send(_res)
        });
    })
})

router.post('/xkdata-web/wechatNotify/msgPlatNotify/:appid', function (req, res, next) {
    let appid = req.params.appid
    if (/8ff8$/.test(appid) ){
        getDataOrXML(req, res, next).then(data => {
            let url = req.url
            let params = data
            POST(req, WX_API + url, params, (_res) => {
                res.send(_res)
            });
        })
    } else {
        res.send('')
        getDataOrXML(req, res, next).then(data => {
            let url = req.url
            let params = data
            POST(req, WX_API + url, params);
        })
    }    
})

router.post('/xkdata-web/uPayOrder/updatePayOrderByWxNotify', function (req, res, next) {
    // wx支付返回接口    
    let url = req.url;
    let params = req.body;
    console.log(params);
    logger.info("wx支付返回接口数据" + " : " + JSON.stringify(params));
    POST(req, WX_API + url, params);
})

router.post('/xkdata-web/uPayOrder/updatePayOrderByAliPayNotify', function (req, res, next) {
    // ali 支付返回接口
    let url = req.url;
    let params = req.body;
    console.log(params);
    logger.info("ali支付返回接口数据" + " : " + JSON.stringify(params));
    POST(req, WX_API + url, params);
})

module.exports = router;
