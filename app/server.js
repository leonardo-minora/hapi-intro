const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');


let config = {
  connection: {
    host: 'localhost',
    port: 8080
  },
  swagger: {
    info: {
      title: 'Test API Documentation',
      version: '1',
      description: 'Descrição da API',
      contact: {
        name: 'Minora',
        email: 'leonardo.minora@ifrn.edu.br'
      },
    },
    documentationPath: '/doc/'
  },
  routes: [
    {
      method: 'GET',
      path:'/',
      config: {
        tags: ['api'],
        handler: (request, reply) => {
          reply({info:'api exemplo'});
        }
      }
    }
  ]
};

const server = new Hapi.Server();

server.connection(config.connection);

server.route(config.routes);

server.register([
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': config.swagger
  }], (err) => {
    if (err) console.log(err);
  }
);


server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
