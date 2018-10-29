function getClientIp(req) {
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    if(/^::ffff:/.test(ip)) {
        return ip.replace(/^(::ffff:)/,'')
    } 
    return ip;
}

module.exports = getClientIp;
