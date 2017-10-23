import React, { Component } from 'react'
import Todo from './Todo'

class ActiveTodo extends Component {

  printTodos = arr => {
    return arr.map( todo => {
      return (
        <Todo 
          key={todo.id}
          todoId={todo.id}
          parent={todo.status}
          todoTask={todo.text}
        />
      )
    })
  }

  render() {
    const activeTodos = !this.props.todosArr ?
      ( <div className="col-sm-12 col-md-6 todos-center">
          <h3>There Are No Pending Todos</h3>
        </div> 
       ) :
      (
        <div className="col-sm-12 col-md-6 todos-center">
          <h3>Pending Todos</h3>
          { this.printTodos(this.props.todosArr) }
        </div>
      )
    return activeTodos
  }
}

export default ActiveTodo
