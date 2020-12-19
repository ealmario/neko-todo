import React, { Component } from 'react'

export default class ArchivedTodo extends Component {
  render() {
    const { todo, deleteTodo } = this.props;

    return (
      <li className="archived-wrapper">
        <p className="archived-todo-item">{todo.task}</p>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
      </li>
    )
  }
}
