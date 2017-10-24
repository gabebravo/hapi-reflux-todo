  const db = require('./database').db;
  const Hapi = require('hapi');
  const server = new Hapi.Server();
  server.connection({ port: process.env.PORT, host: '../client/build' });
  
  server.route({
      method: 'GET',
      path: '/api',
      handler: function (request, reply) {
          reply({'message': 'Hello, API!'});
      }
  });
  
  const routes = require('./routes');
  server.route(routes);
  
  server.start((err) => {
  
      if (err) {
          throw err;
      }
      console.log(`Server running at: ${server.info.uri}`);
  });