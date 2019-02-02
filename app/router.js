'use strict';
module.exports = function(app) {
  var todoList = require('../app/controller');

  // todoList Routes
  app.route('/dokter_listrekap')
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

  app.route('/d/nama')
    .get(todoList.searchNamaDokter);

  app.route('/m/unit')
    .get(todoList.searchRefUnit);
  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};