import React from 'react'
import Todo from './Todo'

const printTodos = arr => {
  return arr.map( todo => {
    return (
      <Todo 
        key={todo._id}
        todoData={todo}
      />
    )
  })
}

const ActiveTodo = ({ todosArr }) => {
  const activeTodos = !todosArr ?
    ( <div className="col-sm-12 col-md-6 todos-center">
        <h3>There Are No Pending Todos</h3>
      </div> 
      ) :
    (
      <div className="col-sm-12 col-md-6 todos-center">
        <h3>Pending Todos</h3>
        { printTodos(todosArr) }
      </div>
    )
  return activeTodos
}

export default ActiveTodo
