import React, { Component } from 'react'
import Todo from './Todo'

class CompletedTodo extends Component {

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
    const completedTodos = !this.props.todosArr ?
      ( <div className="col-sm-12 col-md-6 todos-center">
          <h3>There Are No Completed Todos</h3>
        </div> 
       ) :
      (
        <div className="col-sm-12 col-md-6 todos-center">
          <h3>Completed Todos</h3>
          { this.printTodos(this.props.todosArr) }
        </div>
      )
    return completedTodos
  }
}

export default CompletedTodo
