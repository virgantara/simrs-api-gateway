'use strict';
module.exports = function(app) {
  var todoList = require('../app/controller');

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

  app.route('/p/obat/inap')
    .post(todoList.inputObatInap);


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};