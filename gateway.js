const config = require('config');
var appConfig = config.get('gateway');

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || appConfig.app.port;


app.listen(port);

console.log('API Gateway - SIMRS started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
});

var routes = require('./app/router'); //importing route
routes(app); //register the route