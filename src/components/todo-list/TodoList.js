import React, { Component } from 'react'

import Todo from './../todo/Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          task: 'Do this activity',
          isCompleted: false
        },
        {
          id: 2,
          task: 'Study more react',
          isCompleted: false
        }
      ]
    }
  }

  render() {
    const { todos } = this.state;
    const todoList = todos.map(todo => <li className="todo-item" key={todo.id}><Todo todo={todo}/></li>);

    return (
      <div>
        <form>
          <input type="text" placeholder="Add a todo" id="addTodoInit"/>
          <button>Add</button>
        </form>
        <ul>
          {todoList}
        </ul>
      </div>
    )
  }
}
