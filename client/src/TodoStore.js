import { Store } from 'reflux'
import Actions from './Actions'

const fetchTodos = () => [
  { id: '1', completed: false, task: 'Walk the dog' },
  { id: '2', completed: false, task: 'Cut the yard' },
  { id: '3', completed: true, task: 'Clean the pool' },
  { id: '4', completed: true, task: 'Trim the trees' }
]

class TodoStore extends Store {
  constructor() {
    super();
    this.state = { todos: null }
    this.listenables = Actions
  }

  getTodos() {
    const todos = fetchTodos();
    this.setState({ todos })
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