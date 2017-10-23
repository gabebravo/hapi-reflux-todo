import React from 'react'
import { Component } from 'reflux'
import Actions from '../Actions'
import Header from '../components/Header'

export class EditTodo extends Component {

  state = { 
    text: '',
    status: ''
  }

  handleInput = ev => {
    ev.preventDefault();  
    this.setState({
      text: ev.target.value,
      status: ev.target.id
    })
  }

  resetForm = () => {
    this.setState({
      text: '',
      status: ''
    })
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Header linkTo="/" linkText="Home" />
        <div className="row col-xs-12 col-md-offset-3" style={{marginTop: '15%'}}>
          <div className="col-md-6">
            <div className="input-group">
              <input type="text" className="form-control" id="active" onChange={ this.handleInput }
                  placeholder="Describe todo..." value={this.state.text} />
                <span className="input-group-btn" 
                  onClick={()=>{ Actions.editTodo(id, {
                    id, status: this.state.status, text: this.state.text
                  }); this.resetForm() }} >
                <button className="btn btn-default" type="button">Edit Todo</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditTodo
