var express = require('express');
var Request = require('../../utils/request')
var UTILS = require('../../utils/util')
var logger = require('../../utils/log.js')
var router = express.Router();


const POST = (req, res, url, param, fn) => {
    logger.info("web->ADMIN >>>>>> " + req.url + ' request params: ' + JSON.stringify(param))
    Request.post(url, param).then(_res => {
        logger.info("java->ADMIN >>>>>> " + url + " response data: " + JSON.stringify(_res.data));
        if (typeof fn !== "function" || _res.data.code !== 1) {
            res.json(_res.data);
        } else if (typeof fn === 'function') {
            let data = fn(_res.data);
            if (!data) {
                return;
            } else {
                res.json(data);
            }
        }
    }).catch(err => {
        logger.err("ADMIN->java >>>>>> " + url + " request error: " + JSON.stringify(err));
        res.json(err);
    })
}

const GET = (req, res, url, param, fn) => {
    logger.info("web->ADMIN >>>>>> " + req.url + " request params: " + JSON.stringify(param));
    Request.get(url, { params: param }).then(_res => {
        logger.info("java->ADMIN >>>>>> " + url + " response data: " + JSON.stringify(_res.data));
        if (typeof fn !== "function" || _res.data.code !== 1) {
            res.json(_res.data);
        } else if (typeof fn === 'function') {
            let data = fn(_res.data);
            if (!data) {
                return;
            } else {
                res.json(data);
            }
        }
    }).catch(err => {
        logger.err("ADMIN->java >>>>>> " + url + " request error: " + JSON.stringify(err));
        res.json(err);
    })
}

module.exports = {
    router,
    Request,
    POST,
    GET,
    UTILS
}