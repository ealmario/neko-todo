import React, { Component } from 'react'
import styles from './Todo.module.scss'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wouldEdit: false,
      task: this.props.task
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggleEdit() {
    this.setState( state => ({
      wouldEdit: !state.wouldEdit
    }))
  }

  handleArchive(todo) {
    this.props.archiveTodo(todo);
  }
  
  handleUpdate(e) {
    const { updateTodo, todo } = this.props; 
    e.preventDefault();

    updateTodo(todo.id, this.state.task);
    this.setState({
      wouldEdit: false
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { todo } = this.props
    const { wouldEdit, task } = this.state

    return (
      <li className="wrapper">
        <div className="checkbox"></div>
        { wouldEdit ? (
          <form onSubmit={this.handleUpdate}>
            <input 
              type="text" 
              id="task"
              name="task" 
              placeholder={todo.task}
              value={task}
              onChange={this.handleChange}
            />
            <button>Check</button>
          </form>
        ) : (
          <p className="todo-item">{todo.task}</p>
        )}
        <div className="btn-container">
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={()=>{this.handleArchive(todo)}}>Delete</button>
        </div>
      </li>
    )
  }
}
