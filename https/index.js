const https = require("https");
// const querystring = require('querystring');
const json_xml = require("json_xml");

module.exports={
  post(options, data, res, callBack) {
    var _data = data;
    let _options = Object.assign({
      host: "api.mch.weixin.qq.com",
      path: "/pay/unifiedorder",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }, options);
    const req = https.request(_options, _res => {
      console.log("statusCode:", _res.statusCode);
      console.log("headers:", _res.headers);
      _res.on("data", d => {
        console.log("" + d); 
        let b = String("" + d);
        if(b.includes('<xml>')){
          callBack({ code: 1, data: json_xml.xml2json(b) });
        } else {
          callBack({ code: 1, data: b });
        }        
      });
    });
    req.on('error', (e) => {
        res.json(e)
    });
    req.write(_data);
    req.end();
  },

  get(url, res) {
    console.log(res)
    // https.get(url, (_res) => {
    //   _res.on('data', (d) => {
    //     let b = String("" + d); 
    //     res.json({ code: 1, data: b });
    //   });
    // }).on('error', (e) => {
    //   res.json(e);
    // });
    
    https.get(url, function(_res) {
      var chunks = []; //用于保存网络请求不断加载传输的缓冲数据
      var size = 0; //保存缓冲数据的总长度
      _res.on("data", function(chunk) {
        chunks.push(chunk);
        size += chunk.length; //累加缓冲数据的长度
      });
      _res.on("end", function(err) {
        var data = Buffer.concat(chunks, size); //Buffer.concat将chunks数组中的缓冲数据拼接起来，返回一个新的Buffer对象赋值给data
        var b = data.toString(); //将Buffer对象转换为字符串并以base64编码格式显示
        res.json({ code: 1, data: b });
      });
    });
  }

};
