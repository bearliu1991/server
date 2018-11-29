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
  transformData: function (obj, rules = {}, reverse, subobj) {
    /**
     * obj: 数据 object / array 类型
     * rules：需要将相关将属性转换的规则；{ 当前属性名：改变后属性名}
     * subobj： 树的子节点属性名
     * reverse: 翻转将属性转换的规则
     */
    // obj 非Object、Array直接返回
    if (typeof obj !== 'object') {
      return obj
    }

    // obj 为Object、Array的情况下
    const reverseRules = {}
    if (reverse) {
      Object.entries(rules).forEach((item) => {
        reverseRules[item[1]] = item[0]
      })
      rules = reverseRules
    }
    const transform = function (_obj, _rules, _subobj) {
      const temp = {}
      Object.entries(_rules).forEach((item) => {
        const key = item[0]
        const value = item[1]
        if (key === _subobj && _obj[key]) {
          if (Array.isArray(_obj[key])) {
            temp[value] = []
            _obj[key].forEach((_item) => {
              temp[_rules[key]].push(transform(_item, _rules, _subobj))
            })
          } else {
            temp[_rules[key]] = transform(_obj[key], _rules, _subobj)
          }
        } else {
          temp[value] = _obj[key]
        }
      })
      return temp
    }
    if (Array.isArray(obj)) {
      return obj.map(item => transform(item, rules, subobj))
    }
    return transform(obj, rules, subobj)
  }
}