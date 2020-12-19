import React, { Component } from 'react'

import Todo from './../todo/Todo';
import ArchivedTodo from './../achived-todo/ArchivedTodo';
import NewTodoForm from './../new-todo-form/NewTodoForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      archived: []
    }
    this.add = this.add.bind(this);
    this.archive = this.archive.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }

  // Add a todo
  add(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  // Archive a todo
  archive(archivedTodo) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== archivedTodo.id),
      archived: [...this.state.archived, archivedTodo]
    })
  } 

  // Delete the todo (Hard delete)
  delete(id) {
    this.setState({
      archived: this.state.archived.filter(todo => todo.id !== id)
    })
  }

  // Update the todo
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, task: updatedTask}
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  render() {
    const { todos, archived } = this.state;
    const todoList = todos.map(todo => <Todo key={todo.id} todo={todo} archiveTodo={this.archive} updateTodo={this.update}/>);
    const archivedList = archived.map(todo => <ArchivedTodo key={todo.id} todo={todo} deleteTodo={this.delete}/>)
    console.log("todos are", todos);
    console.log("archived are:", archived);

    return (
      <div>
        <NewTodoForm 
          addTodo={this.add}
        />
        <ul>
          {todoList}
        </ul>
        <ul>
          {archivedList}
        </ul>
      </div>
    )
  }
}
