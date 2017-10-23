const Todo = require('./models');
module.exports = [
  {
    method: 'GET',
    path: '/api/todos',
    handler: (request, reply) => {
      Todo.find({}, {__v: 0})
        .then( todo => {
          reply(todo);
        }) 
        .catch( error => {
          console.error(error);
        });
    }
  }, 
  {
    method: 'POST',
    path: '/api/todos',
    handler: (request, reply) => {         
      const newTodo = new Todo(request.payload); 
      newTodo.save()
        .then( todo => {
          reply(todo);
        }) 
        .catch( error => {
          console.error(error);
        });
    }
  }, 
  {
    method: 'PUT',
    path: '/api/todos',
    handler: (request, reply) => {         
      Todo.findByIdAndUpdate( request.payload.id, {$set: request.payload}, {new:true})
        .then( todo => {
          reply(todo);
        }) 
        .catch( error => {
          console.error(error);
        });
    }
  }
];