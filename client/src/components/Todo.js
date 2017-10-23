import React from 'react'
import { Component } from 'reflux'
import { Link } from 'react-router-dom'
import Actions from '../Actions'

class Todo extends Component {

  render() {
    const buttons = !this.props.isComplete ?
    (
      <div>
        <Link to={`/edit/${this.props.todoId}`}><span
        className="btn btn-primary button-spacing" 
          role="button">Edit</span></Link>
        <span
        className="btn btn-default button-spacing" 
          onClick={() => Actions.markTodoDone(this.props.todoId)}
          role="button">Done</span> 
      </div>
    ) : (
      <div>
        <span
        className="btn btn-primary button-spacing"
          onClick={() => Actions.removeTodo(this.props.todoId)} 
          role="button">Remove</span>
      </div>
    )

    return (
      <div className="row todo-width">
        <div className="col-12">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.props.todoTask}</h3>
                {buttons}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo
