const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');


let config = require('./config.json');

const server = new Hapi.Server();

server.connection(config.connection);

server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: config.swagger
  },
  {
    register: require('hapi-router'),
    options: {routes: config.routes}
  }
  ], (err) => {
    if (err) console.log(err);
  }
);

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Servidor executando [' + server.info.uri + ']');
});
