'use strict';

var response = require('../app/res.js');
const superagent = require('superagent');
const config = require('config');

exports.listdata = function(req, res){
	const appConfig = config.get('gateway');
	const svc1Config = appConfig.msvc_1;
	
	superagent.get(svc1Config.protocol+'://'+svc1Config.host+':'+svc1Config.port+'/'+svc1Config.route)
	.query({ 
		startdate: req.query.startdate, 
		enddate: req.query.enddate
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};