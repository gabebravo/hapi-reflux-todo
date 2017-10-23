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
      Todo.findByIdAndUpdate( request.payload._id, {$set: request.payload}, {new:true})
        .then( todo => {
          reply(todo);
        }) 
        .catch( error => {
          console.error(error);
        });
    }
  },
  {
    method: 'DELETE',
    path: '/api/todos/{id}',
    handler: (request, reply) => {       
      Todo.findByIdAndRemove( request.params.id )
        .then( todo => {
          Todo.find({}, {__v: 0})
            .then( todos => {
              reply(todos);
            })
        })
        .catch( error => {
          console.error(error);
        });
    }
  }
];