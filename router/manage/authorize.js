const appRouter = require('./routerobj');
// const router = appRouter.router
const router = require('express').Router();
const PATH = appRouter.PATH
const Request = appRouter.Request
const POST = appRouter.POST

router.post('/pageauth', (req, res, next) => {
    let sid = req.sessionID;
    // 判断浏览器的cookie不存在或已过期
    if (!req.cookies.sessionId) {
        console.log('cookie bucunzai')
        res.json({
            valid: false
        })
    } else {
        var param = {
            url: PATH.GET_SESSION,
            method: 'POST',
            data: { sessionId: sid }
        }
        var validReq = Request.post(PATH.GET_SESSION, { sessionId: sid }).then(function (response) {
            // session有效
            let body = response.data
            if (body.code === 1) {
                console.log('session有效')
                res.json({
                    valid: true,
                    data: body.data
                })
            } else {
                console.log('session无效')
                res.json({
                    valid: false
                })
            }
        })
    }
})

router.get('/pageauth', (req, res, next) => {
    // console.log('/pageauth', req.query)
    let sid = req.query.sessionId
    // 判断浏览器的cookie不存在或已过期
    if (!sid) {
        console.log('cookie bucunzai')
        res.json({
            valid: false
        })
    } else {
        var param = {
            url: PATH.GET_SESSION,
            method: 'POST',
            data: { sessionId: sid }
        }
        var validReq = Request.post(PATH.GET_SESSION, { sessionId: sid }).then(function (response) {
            // session有效
            let body = response.data
            if (body.code === 1) {
                console.log('session有效')
                res.json({
                    valid: true,
                    data: body.data
                })
            } else {
                console.log('session无效')
                res.json({
                    valid: false
                })
            }
        })
    }
})

module.exports = router;
