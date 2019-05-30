'use strict';
module.exports = function(app) {
  var todoList = require('../app/controller');

  app.route('/ok/rekap/operator')
    .get(todoList.getRekapOperator);

  app.route('/ok/upf/anastesi')
    .get(todoList.getRekapAnastesi);

  app.route('/ok/upf/citoelektif')
    .get(todoList.getCitoElektif);

  app.route('/ok/jasa/rs')
    .get(todoList.getOkJasaRS);

  app.route('/ok/rekap/bulanan')
    .get(todoList.getRekapTindakanOperasi);

  app.route('/p/penyakit/top')
    .get(todoList.getTopTenPenyakit);

  app.route('/kunjungan/golongan/count/lastfive')
    .get(todoList.countKunjunganGolongan5tahun);

  app.route('/p/gol/sexusia')
    .get(todoList.getSexUsiaGolTanggal);

  app.route('/kunjungan/golongan/count')
    .get(todoList.countKunjunganGolonganByKode);

  app.route('/integra/pembelian')
    .get(todoList.get_pembelian);

  app.route('/integra/penjualan')
    .get(todoList.get_penjualan);

  app.route('/integra/laba')
    .get(todoList.get_laba);

  app.route('/kamar/rekap/kunjungan')
    .get(todoList.kamar_rekap_kunjungan);

  app.route('/poli/kunjungan/golongan')
    .get(todoList.poli_kunjungan_golongan);

  app.route('/poli/rekap/kunjungan')
    .get(todoList.poli_rekap_kunjungan);

  app.route('/obat/tagihan/update')
    .post(todoList.obat_tagihan_update);

  app.route('/tagihan/receiveClientMsg')
    .post(todoList.bill_receiveClientMsg);

  app.route('/tagihan/get')
    .get(todoList.bill_getTagihan);

  app.route('/tagihan/list')
    .post(todoList.bill_listTagihan);

  app.route('/tagihan/update')
    .post(todoList.bill_updateTagihan);

  app.route('/tagihan/insert')
    .post(todoList.bill_insertTagihan);

  app.route('/integra/generate/stok')
    .post(todoList.syncStokBarangDepartemen);

  // todoList Routes
  app.route('/d/rekap')
    .get(todoList.listrekapdokter);
    // .post(todoList.create_a_task);

  app.route('/obat/like')
    .get(todoList.searchObatLike);

  app.route('/pasien/nama')
    .get(todoList.searchNama);

  app.route('/pasien/rm')
    .get(todoList.searchRM);

  app.route('/pasien/list')
    .get(todoList.get_list_pasien);

  app.route('/p/daftar')
    .get(todoList.searchPasienDaftar);

  app.route('/p/daftar/rm')
    .get(todoList.searchPasienDaftarRM);

  app.route('/p/daftar/inap/rm')
    .get(todoList.searchPasienDaftarInapRM);

  app.route('/d/nama')
    .get(todoList.searchNamaDokter);

  app.route('/m/unit')
    .get(todoList.searchRefUnit);

  app.route('/m/unit/list')
    .get(todoList.searchAllRefUnit);

  app.route('/p/golongan/list')
    .get(todoList.pasien_list_golongan);

  app.route('/p/unit/list')
    .get(todoList.pasien_list_unit);

  app.route('/p/golongan/list/five')
    .get(todoList.pasien_list_golongan_five);

  app.route('/p/obat/inap')
    .post(todoList.inputObatInap);


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};