const Todo = require('./models');
module.exports = [
  {
      method: 'GET',
      path: '/api/todos',
      handler: function (request, reply) {
          Todo.find(function(error, todos) {
              if (error) {
                  console.error(error);
              }
              reply(todos);
          });
      }
  }
];