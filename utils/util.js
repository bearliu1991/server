module.exports = {
  //生成随机数
  genUUID: function (len) {
    len = len || 6;
    len = parseInt(len, 10);
    len = isNaN(len) ? 6 : len;
    var seed = "0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ";
    var seedLen = seed.length - 1;
    var uuid = "";
    while (len--) {
      uuid += seed[Math.round(Math.random() * seedLen)];
    }
    return uuid;
  },
  //深拷贝
  deepcopy: function (source) {
    if (!source) {
      return source;
    }
    let sourceCopy = source instanceof Array ? [] : {};
    for (let item in source) {
      sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item];
    }
    return sourceCopy;
  },
  //ajax错误处理
  catchError: function(error) {
    return Promise.reject(error)
  },
  //日期格式化
  dateFormat: function (source, ignore_minute) {
    var myDate;
    var separate = '-';
    var minute = '';
    if (source === void(0)) {
      source = new Date();
    }
    if (source) {
      if (source.split) {
        source = source.replace(/\-/g, '/');
      } else if (isNaN(parseInt(source))) {
        source = source.toString().replace(/\-/g, '/');
      } else {
        source = new Date(source);
      }
  
      if (new Date(source) && (new Date(source)).getDate) {
        myDate = new Date(source);
        if (!ignore_minute) {
          minute = (myDate.getHours() < 10 ? " 0" : " ") + myDate.getHours() + ":" + (myDate.getMinutes() < 10 ? "0" : "") + myDate.getMinutes();
        }
        return myDate.getFullYear() + separate + (myDate.getMonth() + 1) + separate + (myDate.getDate() < 10 ? '0' : '') + myDate.getDate() + minute;
      } else {
        return source.slice(0, 16);
      }
    } else {
      return source
    }
  },
  // sessionId反编码
  uncodeSid: function (params) {
    return params
  },
  transformData: function (obj, rules = {}, subobj, reverse) {
    const transform = function (obj, rules, subobj) {
      let temp = {};
      if (reverse) {
        for (let key in rules) {
          if (rules[key] === subobj && obj[rules[key]]) {
            temp[key] = transform(obj[rules[key]], rules, subobj)
          } else {
            temp[key] = obj[rules[key]]
          }
        }
      } else {
        for (let key in rules) {
          if (key === subobj && obj[key]) {
            temp[rules[key]] = transform(obj[key], rules, subobj)
          } else {
            temp[rules[key]] = obj[key]
          }
        }
      }
      return temp
    }
    return transform(obj, rules, subobj)
  }
}