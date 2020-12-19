import React, { Component } from 'react'

import Todo from './../todo/Todo';
import NewTodoForm from './../new-todo-form/NewTodoForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []}
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    const { todos } = this.state;
    const todoList = todos.map(todo => <li className="todo-item" key={todo.id}><Todo todo={todo}/></li>);

    return (
      <div>
        <NewTodoForm 
          addTodo={this.addTodo}
        />
        <ul>
          {todoList}
        </ul>
      </div>
    )
  }
}
