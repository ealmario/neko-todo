import React, { Component } from 'react'
import styles from './Todo.module.scss'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wouldEdit: false
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState( state => ({
      wouldEdit: !state.wouldEdit
    }))
  }

  render() {
    const { todo } = this.props
    const { wouldEdit } = this.state

    return (
      <div className="wrapper">
        <div className="checkbox"></div>
        { wouldEdit ? (
          <form>
            <label htmlFor="addTodo">{todo.task}</label>
            <input type="text" id="editTodo"/>
          </form>
        ) : (
          <p className="todo-item">{todo.task}</p>
        )}
        <div className="btn-container">
          <button onClick={this.handleEdit}>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}
