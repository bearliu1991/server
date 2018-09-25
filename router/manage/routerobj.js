const express = require('express');
const qs = require('qs');
const PATH = require('../../api/managePath')
const Request = require('../../utils/request')
const UTILS = require('../../utils/util')
const logger = require('../../utils/log.js');
const router = express.Router();

const POST = (req, res, url, param, fn) =>{
    logger.info(req.url + ' request params: ' + JSON.stringify(param) )
    Request.post(url, param).then(_res => {
        logger.info(req.url + ' response data: ' + JSON.stringify(_res.data))        
        console.log("post", req.url, _res.data)
        if (typeof fn === 'function') {
            let data = fn(_res.data)
            res.json(data);
        } else {
            res.json(_res.data);
        }
    }).catch(err => {
        logger.err(req.url + ' request error: ' + JSON.stringify(err))
        console.log(err)
        res.json(err);
    })
}

const GET = (req, res, url, param) => {
    Request.get(url, { params: param}).then(_res => {
        // console.log("get", _res.request.path)
        // console.log("get", _res.data)
        res.json(_res.data);
    }).catch(err => {
        console.log(err);
        res.json(err);
    })
}

const postOrGet = (url, path, fn) => {
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