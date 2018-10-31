const params = process.argv;

const host_key = params[2];
const host_value = params[3];
const port_key = params[4];
const port_value = params[5];

if(host_key == null || host_key != '-h'){
	console.log('Invalid host key param');
	return;
}

if(port_key == null || port_key != '-port'){
	console.log('Invalid port key param');
	return;
}

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || port_value;


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