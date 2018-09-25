const router = require('express').Router();
// 生成sessionID
router.get('/getSessionId', function (req, res, next) {
  let data = {}
  data.sessionId = req.sessionID
  res.json(data)
})
module.exports = router;