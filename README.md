# hapi-reflux-todo

## DEPLOYMENT : 
#### Hapi has its api, but it serves the views statically via index.js, so you have to import a second library called inert which provides new handler methods for Hapi like a reply interface with a file method for serving file based resources.

#### In this case, we need to serve index.html from the /client/build folder, but we also need to serve the asset JS/CSS files that the index.html file depends on, which are in the /static folder.

### THIS IS WHAT THAT WOULD LOOK LIKE :
```
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
```
