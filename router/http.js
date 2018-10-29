var express = require('express');
var qs = require('qs');
var PATH = require('../api/path')
var Request = require('../utils/request')
var UTILS = require('../utils/util')
const logger = require("../utils/log.js");
var router = express.Router();

var POST = (req, res, url, param, fun) => {
    logger.info("CHAT->NODE >>>>>> " + req.url + ' request params: ' + JSON.stringify(param))
    Request.post(url, param).then(_res => {
        logger.info("NODE->CAHT >>>>>> " + url + " response data: " + JSON.stringify(_res.data)); 
        fun(_res.data);
    }).catch(err => {
        logger.err("NODE->CAHT >>>>>> " + url + " request error: " + JSON.stringify(err));
        res.json({code: 404, msg: err, data: null})
    })
}

var GET = (req, res, url, param, fun) => {
    logger.info("CHAT->NODE >>>>>> " + req.url + " request params: " + JSON.stringify(param));
    Request.get(url, param).then(_res => {
        logger.info("NODE->CAHT >>>>>> " + url + " response data: " + JSON.stringify(_res.data)); 
        fun(_res.data);
    }).catch(err => {
        logger.err("NODE->CAHT >>>>>> " + url + " request error: " + JSON.stringify(err));
        res.json({code: 404, msg: err, data: null})
    })
}




module.exports = {
    router,
    PATH,
    Request,
    POST,
    GET,
    UTILS
}