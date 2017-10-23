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
    this.state = { todos: null }
    this.listenables = Actions
  }

  getTodos() {
    fetchTodos()
      .then( todos => {
        if( Array.isArray(todos) )
        this.setState({ todos })
      })
  }

  markTodoDone(id) {
    const updatedTodos = [...this.state.todos].map( todo => {
      if ( todo.id === id ) { todo.completed = true; return todo }
      return todo;
    })
    this.setState({ todos: updatedTodos })
  }

  editTodo(id, todoObj) {
    const updatedTodos = [...this.state.todos].map( todo => {
      if( todo.id === id ) {
        return todoObj
      } else {
        return todo
      }
    })
    this.setState({ todos: updatedTodos })
  }

  removeTodo(id) {
    const updatedTodos = [...this.state.todos].filter( todo => todo.id !== id );
    this.setState({ todos: updatedTodos })
  }

  addTodo(todoObj) {
    const updatedTodos = [...this.state.todos, todoObj];
    this.setState({ todos: updatedTodos })
  }
}

export default TodoStore