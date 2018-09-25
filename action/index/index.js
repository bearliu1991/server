/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 可选
 * @return {undefined}
 */
var request = require('../../widget/request/request.js');
var domain = require('../domain.js');
var requestList = [
	{
		id: 'data', 
		url: domain + '/api/data.json',
	}			
];


module.exports = function(req, res, next){
	var datas = {}
	arr = []  		
	requestList.forEach(function(item){ 
		arr[arr.length] = new Promise(function (resolve) { 
			request(item.url, req.headers,function(json, err){
				datas['list'] = json.data.list
				resolve();
			})
		});
	});

	Promise.all(arr).then(function (result) {  
		res.render('index/index.html', datas);
	});  
}