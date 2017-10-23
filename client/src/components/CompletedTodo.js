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

const CompletedTodos = ({ todosArr }) => {
  const completedTodos = !todosArr ?
    ( <div className="col-sm-12 col-md-6 todos-center">
        <h3>There Are No Completed Todos</h3>
      </div> 
      ) :
    (
      <div className="col-sm-12 col-md-6 todos-center">
        <h3>Completed Todos</h3>
        { printTodos(todosArr) }
      </div>
    )
  return completedTodos
}

export default CompletedTodos