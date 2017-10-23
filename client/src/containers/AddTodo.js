import React from 'react'
import { Component } from 'reflux'
import Actions from '../Actions'
import Header from '../components/Header'

export class AddTodo extends Component {

  state = { 
    task: '',
    completed: false
  }

  handleInput = ev => {
    ev.preventDefault();  
    this.setState({
      task: ev.target.value
    })
  }

  resetForm = () => {
    this.setState({
      task: '',
      completed: false
    })
  }

  render() {
    return (
      <div>
        <Header linkTo="/" linkText="Home" />
        <div className="row col-xs-12 col-md-offset-3" style={{marginTop: '15%'}}>
          <div className="col-md-6">
            <div className="input-group">
              <input type="text" className="form-control" onChange={ this.handleInput }
                placeholder="Describe todo..." value={this.state.task} />
              <span className="input-group-btn" 
                onClick={()=>{ Actions.addTodo({
                  id: '123', completed: this.state.completed, task: this.state.task
                }); this.resetForm() }} >
                <button className="btn btn-default" type="button">Add Todo</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddTodo
