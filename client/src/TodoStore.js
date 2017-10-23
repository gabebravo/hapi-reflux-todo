import { Store } from 'reflux'
import Actions from './Actions'
import axios from 'axios'

const fetchTodos = () => {
  return axios.get('/api/todos')
    .then( response => {
      return response.data;
    })
    .catch( response => {
      console.log(response.error)
    })
}

class TodoStore extends Store {
  constructor() {
    super();
    this.state = { todos: null, editTodo: null }
    this.listenables = Actions
  }

  getTodos() {
    fetchTodos()
      .then( todos => {
        if( Array.isArray(todos) )
        this.setState({ todos })
      })
  }

  editTodo(todoObj) {
    const filteredTodos = [...this.state.todos]
      .filter( todo => todo._id !== todoObj._id );
    axios.put('/api/todos', todoObj)
    .then( response => {
      const { data } = response;
      this.setState({ todos: [...filteredTodos, data ] })
    })
    .catch( response => {
      console.log(response.error)
    })
  }

  removeTodo(id) {
    axios.delete(`/api/todos/${id}`)
    .then( response => {
      this.setState({ todos: response.data })
    })
    .catch( response => {
      console.log(response.error)
    })
  }

  addTodo(todoObj) {
    axios.post('/api/todos', todoObj)
    .then( response => {
      console.log(response.data);
    })
    .catch( response => {
      console.log(response.error)
    })
  }
}

export default TodoStore