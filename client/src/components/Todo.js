import React from 'react'
import { Component } from 'reflux'
import { Link } from 'react-router-dom'
import Actions from '../Actions'

class Todo extends Component {

  render() {
    const { _id, completed, task } = this.props.todoData
    const buttons = !completed ?
    (
      <div>
        <Link to={`/edit/${_id}`}><span
        className="btn btn-primary button-spacing" 
          role="button">Edit</span></Link>
        <span
        className="btn btn-default button-spacing" 
          onClick={() => Actions.editTodo({
            _id, completed: true, task
          })}
          role="button">Done</span> 
      </div>
    ) : (
      <div>
        <span
        className="btn btn-primary button-spacing"
          onClick={() => Actions.removeTodo(_id)} 
          role="button">Remove</span>
      </div>
    )

    return (
      <div className="row todo-width">
        <div className="col-12">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.props.todoData.task}</h3>
                {buttons}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo
