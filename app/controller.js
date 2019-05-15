'use strict';

var response = require('../app/res.js');
const superagent = require('superagent');
const svc1Config = require('./../config/svc1.json');

exports.get_laba = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.integra.protocol+'://'+svcConfig.integra.host+':'+svcConfig.integra.port+'/integra/laba')
	.query({
		startdate : req.query.startdate,
		enddate : req.query.enddate
	})
	.end((err, sres) => {
	  if (err) { console.log("API Gateway:"+err); }
	  response.ok(sres.body.values, res)
	});
};

exports.kamar_rekap_kunjungan = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/kamar/rekap/kunjungan')
	.query({
		startdate : req.query.startdate,
		enddate : req.query.enddate
	})
	.end((err, sres) => {
	  if (err) { console.log("API Gateway:"+err); }
	  response.ok(sres.body.values, res)
	});
};

exports.poli_rekap_kunjungan = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/poli/rekap/kunjungan')
	.query({
		startdate : req.query.startdate,
		enddate : req.query.enddate
	})
	.end((err, sres) => {
	  if (err) { console.log("API Gateway:"+err); }
	  response.ok(sres.body.values, res)
	});
};


exports.obat_tagihan_update = function(req, res){
	
	const svcConfig = svc1Config;
	
	let body = req.body ? req.body : '';
	superagent.post(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/obat/tagihan/update')
	.send(body)
	.end((err, sres) => {
	  if (err) { console.log("API Gateway:"+err); }
	  response.ok(sres.body.values, res)
	});
};


exports.get_list_pasien = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/pasien/list')
	.query({ 
		limit	: req.query.limit,
		page : req.query.page
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};


exports.bill_receiveClientMsg = function(req, res){
	
	const svcConfig = svc1Config;
	
	let client_id = req.headers.client_id;

	if(client_id == 'integra')
	{
		superagent.post(svcConfig.integra.protocol+'://'+svcConfig.integra.host+':'+svcConfig.integra.port+'/integra/p/update')
		.send(req.body)
		.end((err, sres) => {
		  if (err) { console.log(err); }
		  response.ok(sres.body.values, res)
		});	
	}
	else if(client_id == 'simrs')
	{
		superagent.post(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/simrs/poli/update')
		.send(req.body)
		.end((err, sres) => {
		  if (err) { console.log(err); }
		  response.ok(sres.body.values, res)
		});	
	}

	else{
		response.ok([], res)
	}
};


exports.bill_getTagihan = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.billing.protocol+'://'+svcConfig.billing.host+':'+svcConfig.billing.port+'/tagihan/get')
	.query({ 
		id	: req.query.id,
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.bill_listTagihan = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.post(svcConfig.billing.protocol+'://'+svcConfig.billing.host+':'+svcConfig.billing.port+'/tagihan/list')
	.send(req.body)
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.bill_updateTagihan = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.post(svcConfig.billing.protocol+'://'+svcConfig.billing.host+':'+svcConfig.billing.port+'/tagihan/update')
	.send(req.body)
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.bill_insertTagihan = function(req, res){
	
	const svcConfig = svc1Config;
	let body = req.body ? req.body : '';
	superagent.post(svcConfig.billing.protocol+'://'+svcConfig.billing.host+':'+svcConfig.billing.port+'/tagihan/insert')
	.send(body)
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.syncStokBarangDepartemen = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.post(svcConfig.integra.protocol+'://'+svcConfig.integra.host+':'+svcConfig.integra.port+'/integra/generate/stok')
	.send(req.body)
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.inputObatInap = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.post(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/p/obat/inap')
	.send(req.body)
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.listrekapdokter = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.dokter.protocol+'://'+svcConfig.dokter.host+':'+svcConfig.dokter.port+'/d/rekap')
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
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/pasien/nama')
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
	superagent.get(svcConfig.obat.protocol+'://'+svcConfig.obat.host+':'+svcConfig.obat.port+'/obat/like')
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
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/pasien/rm')
	.query({ 
		key: req.query.key
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchPasienDaftarRM = function(req, res){
	
	const svcConfig = svc1Config;

	if(req.query.jenis == 1){
		superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/p/daftar/rm')
		.query({ 
			key: req.query.key,
			// jenis : req.query.jenis,
		})
		.end((err, sres) => {
		  if (err) { console.log(err); }
		  response.ok(sres.body.values, res)
		});
	}

	else{
		superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/p/daftar/inap/rm')
		.query({ 
			key: req.query.key,
			// jenis : req.query.jenis,
		})
		.end((err, sres) => {
		  if (err) { console.log(err); }
		  response.ok(sres.body.values, res)
		});
	}
};

exports.searchPasienDaftar = function(req, res){
	
	const svcConfig = svc1Config;

	if(req.query.jenis == 1){
		superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/p/daftar')
		.query({ 
			key: req.query.key,
			// jenis : req.query.jenis,
		})
		.end((err, sres) => {
		  if (err) { console.log(err); }
		  response.ok(sres.body.values, res)
		});
	}

	else{
		superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/p/daftar/inap')
		.query({ 
			key: req.query.key,
			// jenis : req.query.jenis,
		})
		.end((err, sres) => {
		  if (err) { console.log(err); }
		  response.ok(sres.body.values, res)
		});
	}
};

exports.searchPasienDaftarInap = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/p/daftar/inap')
	.query({ 
		key: req.query.key,
		// jenis : req.query.jenis,
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchPasienDaftarInapRM = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.pasien.protocol+'://'+svcConfig.pasien.host+':'+svcConfig.pasien.port+'/p/daftar/inap/rm')
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
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.dokter.protocol+'://'+svcConfig.dokter.host+':'+svcConfig.dokter.port+'/d/nama')
	.query({ 
		key: req.query.key
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};

exports.searchRefUnit = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.unit.protocol+'://'+svcConfig.unit.host+':'+svcConfig.unit.port+'/m/unit')
	.query({ 
		key: req.query.key,
		tipe : req.query.tipe
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};


exports.searchAllRefUnit = function(req, res){
	
	const svcConfig = svc1Config;
	
	superagent.get(svcConfig.unit.protocol+'://'+svcConfig.unit.host+':'+svcConfig.unit.port+'/m/unit/list')
	.query({
		tipe : req.query.tipe
	})
	.end((err, sres) => {
	  if (err) { console.log(err); }
	  response.ok(sres.body.values, res)
	});
};