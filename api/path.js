const config = require('../config/dev.env')
const api = config.BASE_URL;
module.exports = {
    // cscs项目开始
    CSCS: api,
    contactRecord: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/contactRecord', // 常用联系人会话列表
    latestContact: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/latestContact', // 最近联系人列表
    searchType: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat0', // 固定搜索选项列表
    memberList: '/memberList', // 成员列表
    setMark: '/setMark', // 设置标签
    msgPortrait: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/msgPortrait', // 获取聊天者信息
    userPortrait: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/userPortrait', // 用户个人信息hover头像
    fansChatList: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/fansChatList', // 等待粉丝回复会话列表
    userInfo: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/userInfo', // 获取用户信息
    chat0: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat0', // 向上滑动获取更多
    chat1: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat1', // 获取用户信息
    chat2: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat2', // 获取用户信息
    chat3: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat3', // 获取用户信息
    chat4: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat4', // 获取用户信息
    chat5: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat5', // 获取用户信息
    chat6: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/chat6', // 获取用户信息
    searchUser: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/searchUser', // 搜索用户列表
    reorder: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/reorder', // 搜索用户列表
    videos: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/videos', // 视频列表
    audios: 'https://www.easy-mock.com/mock/5b2afb2dcabcb138f69e8c07/example/audios', // 音频列表
    // cscs项目结束
    LOGIN: api + '/user/loginNormal',
    REGISTER: api + '/user/registerUser',
    LOGOUT: api + '/user/logout',
    GET_SESSION: api + '/user/getSession'
}