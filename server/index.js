const Hapi = require('hapi')
const Path = require('path')

const server = new Hapi.Server()

const plugins = [
  require('inert')
]

server.register(plugins, err => {
  if (err) {
    throw err
  }

  server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5000
  })

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../client/build'),
        listing: false,
        index: true
      }
    }
  })

  const routes = require('./routes');
  server.route(routes);
  
  server.start(err => {
    if (err) {
      throw err
    }

    console.log(`Server running at ${server.info.uri}`)
  })
})