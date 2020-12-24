import React, { Component } from 'react';
import styles from './ArchivedTodo.module.scss';

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
      <li className={styles.archivedWrapper} onClick={this.handleArchive}>
        <strike className={styles.archivedTodoItem}>
          <p>{todo.task}</p>
        </strike>
      </li>
    )
  }
}
