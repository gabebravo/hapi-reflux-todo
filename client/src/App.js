import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TodoContainer from './containers/TodoContainer'
import AddTodo from './containers/AddTodo'
import EditTodo from './containers/EditTodo'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={TodoContainer}/>
          <Route path='/add' component={AddTodo}/>
          <Route path='/edit/:id' component={EditTodo}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
