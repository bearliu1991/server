const express = require('express')
const router = express.Router()
const PATH = require('../../api/managePath')
const Request = require('../../utils/request')
const UTILS = require('../../utils/util')
const logger = require('../../utils/log.js')

const POST = (req, res, url, param, fn) =>{
    logger.info("web->MANAGE >>>>>> " + req.url + ' request params: ' + JSON.stringify(param) )
    Request.post(url, param).then(_res => {
        logger.info("java->MANAGE >>>>>> " + url + " response data: " + JSON.stringify(_res.data)); 
        if (typeof fn !== "function" || _res.data.code !== 1) {
          res.json(_res.data);
        } else if (typeof fn === "function") {
          let data = fn(_res.data);
          if (!data) {
            // 此步骤使用时需要在外层进行res到客户端
            return;
          } else {
            res.json(data);
          }
        }
    }).catch(err => {
        logger.err("MANAGE->java >>>>>> " + url + " request error: " + JSON.stringify(err));
        res.json(err);
    })
}

const GET = (req, res, url, param, fn) => {
    logger.info("web->MANAGE >>>>>> " + req.url + " request params: " + JSON.stringify(param));
    Request.get(url, { params: param}).then(_res => {
        logger.info("java->MANAGE >>>>>> " + url + " response data: " + JSON.stringify(_res.data));      
        if (typeof fn !== "function" || _res.data.code !== 1) {
          res.json(_res.data);
        } else if (typeof fn === "function") {
          let data = fn(_res.data);
          if (!data) {
            return;
          } else {
            res.json(data);
          }
        }
    }).catch(err => {
        logger.err("MANAGE->java >>>>>> " + url + " request error: " + JSON.stringify(err));
        res.json(err);
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