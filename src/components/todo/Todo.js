import React, { Component } from 'react'
import styles from './Todo.module.scss'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wouldEdit: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
  }

  handleEdit() {
    this.setState( state => ({
      wouldEdit: !state.wouldEdit
    }))
  }

  handleArchive(todo) {
    const { archiveTodo } = this.props;
    archiveTodo(todo);
  }

  render() {
    const { todo } = this.props
    const { wouldEdit } = this.state

    return (
      <li className="wrapper">
        <div className="checkbox"></div>
        { wouldEdit ? (
          <form>
            <input type="text" id="editTodo" placeholder={todo.task}/>
            <button>Edit</button>
          </form>
        ) : (
          <p className="todo-item">{todo.task}</p>
        )}
        <div className="btn-container">
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={()=>{this.handleArchive(todo)}}>Delete</button>
        </div>
      </li>
    )
  }
}
