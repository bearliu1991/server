const Request = require('request')
const logger = require('../utils/log')

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

module.exports = {
    POST,
    getDataOrXML
}