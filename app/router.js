'use strict';
module.exports = function(app) {
  var todoList = require('../app/controller');

  // todoList Routes
  app.route('/dokter_listrekap')
    .get(todoList.listrekapdokter);
    // .post(todoList.create_a_task);
   
  app.route('/pasien/like')
    .get(todoList.searchLike);

  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};