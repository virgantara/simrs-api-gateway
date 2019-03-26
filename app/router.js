'use strict';
module.exports = function(app) {
  var todoList = require('../app/controller');


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

  app.route('/p/daftar')
    .get(todoList.searchPasienDaftar);

  app.route('/p/daftar/inap')
    .get(todoList.searchPasienDaftarInap);

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