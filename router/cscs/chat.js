const http = require('../http');
const router = require('express').Router();
const PATH = http.PATH
const Request = http.Request
const POST = http.POST
const GET = http.GET
const RES = require('../../utils/res')
// 总会话列表
router.get('/contactRecord', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.records
    })
    // GET(req, res, PATH.contactRecord, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.records
    //     })
    // })
})
// 个人信息
router.post('/userDetail', function (req, res, next) {
    let id = req.body.id
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.userDetail[id]
    })
    // GET(req, res, PATH.contactRecord, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.records
    //     })
    // })
})
// 获取客服列表
router.post('/services', function (req, res, next) {
    let id = req.body.id
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.services
    })
    // GET(req, res, PATH.contactRecord, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.records
    //     })
    // })
})
// 获取客服列表
router.post('/groups', function (req, res, next) {
    let id = req.body.id
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.groups
    })
    // GET(req, res, PATH.contactRecord, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.records
    //     })
    // })
})
// 获取消息内容
router.post('/msgRecord', function (req, res, next) {
    var firstPageNum = 12
    var perPageNum = 7
    // let param = { id: req.body.id }
    let param = req.body
    let data = RES['chat' + param.id]
    let dataArr = []
    for (let key of Object.keys(data)) {
        dataArr.push(data[key])
    }
    let arr = []
    if (param.pageId) {
        if (dataArr.length > (param.pageId - 0) * perPageNum + firstPageNum) {
            arr = dataArr.slice((param.pageId - 1) * perPageNum + firstPageNum,  (param.pageId - 0 ) * perPageNum + firstPageNum)
        } else {
            arr = dataArr.slice((param.pageId - 1) * perPageNum + firstPageNum,  dataArr.length)
        }
    } else {
        arr = dataArr.slice(0, 12)
    }
    res.json({
        code: 1,
        msg: 'sucess',
        data: arr
    })
    // GET(req, res, PATH.latestContact, param, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 聊天内容翻译
router.post('/translate', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.translate
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 聊天内容翻译
router.post('/transText', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.transText
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 删除信息
router.post('/deleteMsg', function (req, res, next) {
    let id = req.body.id
    res.json({
        code: 1,
        msg: 'sucess',
        data: ''
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 删除信息
router.post('/delContact', function (req, res, next) {
    let id = req.body.id
    res.json({
        code: 1,
        msg: 'sucess',
        data: ''
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 模板消息
router.post('/models', function (req, res, next) {
    let id = req.body.id
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.models
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 模板消息
router.post('/modelData', function (req, res, next) {
    let id = req.body.data
    console.error(id)
    res.json({
        code: 1,
        msg: 'sucess',
        data: 'modelData'
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 获取表情图片
router.post('/emotions', function (req, res, next) {
    let id = req.body.id
    let emotions = id === 0 ? RES.emotions[0] : RES.emotions[1]
    res.json({
        code: 1,
        msg: 'sucess',
        data: emotions
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 获取资源信息
router.post('/files', function (req, res, next) {
    let id = req.body.id
    let files = RES['source' + id]
    res.json({
        code: 1,
        msg: 'sucess',
        data: files
    })
    // GET(req, res, PATH.latestContact, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.latestContact
    //     })
    // })
})
// 所有标签
router.get('/allMarks', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.allMarks
    })
})
// 最近联系人列表
router.get('/latestContact', function (req, res, next) {
    GET(req, res, PATH.latestContact, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.latestContact
        })
    })
})
// 搜索分类
router.get('/searchTypes', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.searchTypes
    })
    // GET(req, res, PATH.searchType, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.searchTypes
    //     })
    // })
})
// 搜索分类
router.post('/getStore', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.store
    })
    // GET(req, res, PATH.searchType, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.searchTypes
    //     })
    // })
})
// 成员列表
router.get('/memberList', function (req, res, next) {
    GET(req, res, PATH.memberList, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.memberList
        })
    })
})
// 设置标签
router.get('/setMark', function (req, res, next) {
    GET(req, res, PATH.setMark, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.setMark
        })
    })
})
// 添加收藏消息
router.post('/addStoreMsg', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 添加收藏分组
router.post('/addStoreGroup', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 删除收藏分组
router.post('/delStoreGroup', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 删除收藏消息
router.post('/delStoreMsg', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 全部标签
router.post('/allMarks', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.allMarks
    })
})
// 已选标签
router.post('/choosedMarks', function (req, res, next) {
    let id = req.body.id
    let mark = id < 3 ? RES.chooseMark[id] : RES.chooseMark[3]
    res.json({
        code: 1,
        msg: 'sucess',
        data: mark
    })
})
// 设置标签
router.post('/setMarks', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 取消标签
router.post('/cancelMarks', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 消息列表
router.get('/msgPortrait', function (req, res, next) {
    GET(req, res, PATH.msgPortrait, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.msgPortrait
        })
    })
})
// 用户头像部位信息
router.get('/userPortrait', function (req, res, next) {
    GET(req, res, PATH.userPortrait, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.userPortrait
        })
    })
})
// 粉丝会话列表
router.get('/fansChatList', function (req, res, next) {
    GET(req, res, PATH.fansChatList, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.fansChatList
        })
    })
})
// 用户信息
router.get('/userInfo', function (req, res, next) {
    GET(req, res, PATH.userInfo, {}, function(resData){
        // console.error(resData)
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.userInfo
        })
    })
})
// 搜索用户
router.post('/searchUser', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.searchUser
    })
    // POST(req, res, PATH.searchUser, {}, function(resData){
    //     res.json({
    //         code: 1,
    //         msg: 'sucess',
    //         data: RES.searchUser
    //     })
    // })
})
// 置顶
router.post('/reorder', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 取消置顶
router.post('/cancelReorder', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: null
    })
})
// 视频资源
router.get('/videos', function (req, res, next) {
    GET(req, res, PATH.videos, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.videos
        })
    })
})
// 音频资源
router.get('/audios', function (req, res, next) {
    GET(req, res, PATH.audios, {}, function(resData){
        res.json({
            code: 1,
            msg: 'sucess',
            data: RES.audios
        })
    })
})
// 图文链接
router.get('/picText', function (req, res, next) {
    res.json({
        code: 1,
        msg: 'sucess',
        data: RES.picText
    })
})

module.exports = router;