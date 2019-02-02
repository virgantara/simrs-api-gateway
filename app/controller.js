'use strict';

var response = require('../app/res.js');
const superagent = require('superagent');
const svc1Config = require('./../config/svc1.json');
const svc2Config = require('./../config/svc2.json');
const svc3Config = require('./../config/svc3.json');
const svc4Config = require('./../config/svc4.json');
const svc5Config = require('./../config/svc5.json');
const svc6Config = require('./../config/svc6.json');
const svc7Config = require('./../config/svc7.json');


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

exports.searchNama = function(req, res){
	
	const svcConfig = svc2Config;
	
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		key: req.query.key
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchObatLike = function(req, res){
	
	const svcConfig = svc3Config;
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		euid	: req.query.euid,
		key		: req.query.key
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};


exports.searchRM = function(req, res){
	
	const svcConfig = svc4Config;
	
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		key: req.query.key
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchPasienDaftar = function(req, res){
	
	const svcConfig = svc5Config;
	
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		key: req.query.key,
		// jenis : req.query.jenis,
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchNamaDokter = function(req, res){
	
	const svcConfig = svc6Config;
	
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		key: req.query.key
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchRefUnit = function(req, res){
	
	const svcConfig = svc7Config;
	
	superagent.get(svcConfig.protocol+'://'+svcConfig.host+':'+svcConfig.port+'/'+svcConfig.route)
	.query({ 
		key: req.query.key,
		tipe : req.query.tipe
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};