var express = require('express');
var router = express.Router();
var ajaxData = require('../utils/request')
router.post('/api/xkdata-web/user/sessionId', function (req, res, next) {
    console.log(req)
  res.json({sessionId: '0MLCcM58HtbJ3fm3vWvr6e68UlCKxoYU'})
  // res.json({sessionId: req.sessionID})
})
router.post('/api/xkdata-web/*', function (req, res, next) {
  // An error occurred when uploading
  var config = {
    // url: 'http://192.168.0.240:8080' + req.path,
    url: 'http://xingke100.com' + req.path,
    method: 'POST',
    data: req.body
  }
  console.log(req.body)
  ajaxData(config)
   .then(function(response) {
    //  console.log(response)
     res.json(response.data)
   })
});
router.get('/api/mock/*', function(req, res,next) {
    var config = {
        url: 'https://www.easy-mock.com/' + req.path.substring(5),
        method: 'GET'
    }
    console.log(config.url)
    ajaxData(config)
        .then(function(response) {
            //  console.log(response)
            res.json(response.data)
        })
})

router.post('/api/mock/*', function(req, res, next) {
   //TODO
    res.json({
        msg: 'please implement this method'
    })
})

module.exports = router;