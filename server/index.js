// import DB path for DB connect
const db = require('./database').db;
// import all dependencies
const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

// create server
const server = new Hapi.Server({
  connections: {
      routes: {
          files: {
              relativeTo: Path.join(__dirname, '../client/build')
          }
      }
  }
});

// invoke server
server.connection({ port: process.env.PORT });
// register inert middleware
server.register(Inert, () => {});

// path to root index.html file
// path: '/{path*}'
server.route({
  method: 'GET',
  path: '/',
  handler: {
      file: 'index.html'
  }
});

server.route({
    method: 'GET',
    path: '/static/css/main.286e6ea6.css',
    handler: {
        file: 'static/css/main.286e6ea6.css'
    }  
});

server.route({
    method: 'GET',
    path: '/static/js/main.8d4b333d.js',
    handler: {
        file: 'static/js/main.8d4b333d.js'
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

// const Hapi = require('hapi');
// const server = new Hapi.Server();
// server.connection({ port: 3001, host: 'localhost' });

// server.route({
//     method: 'GET',
//     path: '/api',
//     handler: function (request, reply) {
//         reply({'message': 'Hello, API!'});
//     }
// });

// const routes = require('./routes');
// server.route(routes);

// server.start((err) => {

//     if (err) {
//         throw err;
//     }
//     console.log(`Server running at: ${server.info.uri}`);
// });