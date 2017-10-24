const db = require('./database').db;
const Hapi = require('hapi');
const Path = require('path')

const plugins = [
    require('inert')
]

const server = new Hapi.Server();

server.register(plugins, err => {
    if (err) {
      throw err
    }
  
    server.connection({
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3001
    })
  
    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        directory: {
          path: Path.join(__dirname, 'build'),
          listing: false,
          index: true
        }
      }
    })
  
    server.start(err => {
      if (err) {
        throw err
      }
  
      console.log(`Server running at ${server.info.uri}`)
    })
  })