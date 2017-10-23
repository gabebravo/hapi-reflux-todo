import React from 'react'
import { Component } from 'reflux'
import Actions from '../Actions'
import TodoStore from '../TodoStore'
import Header from '../components/Header'

export class EditTodo extends Component {

  constructor(props){
    super(props);
    this.store = TodoStore;
    this.state = {
      currentTodo: {
        task: ''
      }
    }
  }

  componentDidMount(){
    if(Array.isArray( this.state.todos )) {
      const [singleTodo] = [...this.state.todos]
        .filter( todo => todo._id === this.props.match.params.id );
      this.setState({
        currentTodo: singleTodo
      })
    }
  }

  handleInput = ev => {
    ev.preventDefault();  
    let todoCopy = {...this.state.currentTodo}
    todoCopy.task = ev.target.value
    this.setState({
      currentTodo: todoCopy
    })
  }

  resetForm = () => {
    this.setState({
      currentTodo: {
        task: ''
      }
    })
  }

  submitTodoUpdate = () => {
    if( this.state.currentTodo.hasOwnProperty('_id') ) {
      Actions.editTodo(this.state.currentTodo);
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
                  placeholder="Describe todo..." value={this.state.currentTodo.task} />
                <span className="input-group-btn" 
                  onClick={this.submitTodoUpdate} >
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
