import React from 'react'
import { Component } from 'reflux'
import TodoStore from '../TodoStore'
import Actions from '../Actions'

import Header from '../components/Header'
import ActiveTodos from '../components/ActiveTodo'
import CompletedTodos from '../components/CompletedTodo'

class TodoContainer extends Component {

  constructor(props){
    super(props);
    this.store = TodoStore;
  }

  componentDidMount(){
    Actions.getTodos();
  }

  render() {
    let activeTodos = <ActiveTodos todosArr={false} />
    let completedTodos = <CompletedTodos todosArr={false} />

    if( Array.isArray(this.state.todos) ) {
      const activeTodosArr = this.state.todos.filter( todo => !todo.completed );
      const completedTodosArr = this.state.todos.filter( todo => todo.completed );

      if( activeTodosArr.length > 0 ) {
        activeTodos = <ActiveTodos todosArr={activeTodosArr} />
      }
      if( completedTodosArr.length > 0 ) {
        completedTodos = <CompletedTodos todosArr={completedTodosArr} />
      }
    }
    
    return (
      <div>
        <Header linkTo="/add" linkText="Add Todos" />
        {activeTodos}
        {completedTodos}
      </div>
    )
  }
}

export default TodoContainer
