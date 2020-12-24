import React, { Component } from 'react'

export default class ArchivedTodo extends Component {
  constructor(props) {
    super(props);
    this.handleArchive = this.handleArchive.bind(this);
  }

  handleArchive() {
    const {archiveTodo, todo} = this.props;
    archiveTodo(todo.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <li className="archived-wrapper" onClick={this.handleArchive}>
        <p className="archived-todo-item">{todo.task}</p>
      </li>
    )
  }
}
