'use strict';

var response = require('../app/res.js');

exports.listdata = function(req, res){
  // if (err)
  //     res.send(err);

    response.ok("hello", res);
};