var express = require('express');
var qs = require('qs');
var PATH = require('../api/path')
var Request = require('../utils/request')
var UTILS = require('../utils/util')
var router = express.Router();

var POST = (req, res, url, param, fun) => {
    Request.post(url, param).then(_res => {
        fun(_res.data);
    }).catch(err => {
        res.json({code: 404, msg: err, data: null})
    })
}

var GET = (req, res, url, param, fun) => {
    Request.get(url, param).then(_res => {
        fun(_res.data);
    }).catch(err => {
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