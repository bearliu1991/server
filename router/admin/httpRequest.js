var express = require('express');
var qs = require('qs');
var PATH = require('../../api/managePath')
var Request = require('../../utils/request')
var UTILS = require('../../utils/util')
var router = express.Router();

var POST = (req, res, url, param) => {
    Request.post(url, param).then(_res => {
        res.json(_res.data);
    }).catch(err => {
        console.log(err)
    })
}

var GET = (req, res, url, param) => {
    Request.get(url, { params: param}).then(_res => {
        res.json(_res.data);
    }).catch(err => {
        console.log(err)
    })
}

var postOrGet = (url, path, fn) => {
    router.post(url, function (req, res, next) {
        let param = fn(req.body)
        param.sessionId = param.sessionId || req.sessionID
        POST(req, res, PATH[path], param)
    })

    router.get(url, function (req, res, next) {
        let param = fn(req.query)
        param.sessionId = param.sessionId || req.sessionID
        POST(req, res, PATH[path], param)
    })
    
    return router
}

module.exports = {
    router,
    PATH,
    Request,
    POST,
    GET,
    postOrGet,
    UTILS
}