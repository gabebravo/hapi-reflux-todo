import React from 'react'
import { Component } from 'reflux'
import Actions from '../Actions'
import Header from '../components/Header'

export class AddTodo extends Component {

  state = { 
    task: ''
  }

  handleInput = ev => {
    ev.preventDefault();  
    this.setState({
      task: ev.target.value
    })
  }

  resetForm = () => {
    this.setState({
      task: ''
    })
  }

  submitNewTodo = () => {
    if( this.state.task.length > 1 ) {
      Actions.addTodo({ task: this.state.task }); 
      this.resetForm();
    }
    this.resetForm();
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
                onClick={this.submitNewTodo} >
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
