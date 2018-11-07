'use strict';

var response = require('../app/res.js');
const superagent = require('superagent');
const svc1Config = require('./../config/svc1.json');
const svc2Config = require('./../config/svc2.json');


exports.listrekapdokter = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		startdate: req.query.startdate, 
		enddate: req.query.enddate
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchLike = function(req, res){
	
	const svconfig = svc2Config;
	
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		key: req.query.key
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};