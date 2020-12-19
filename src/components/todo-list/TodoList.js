import React, { Component } from 'react'

import Todo from './../todo/Todo';
import ArchivedTodo from './../achived-todo/ArchivedTodo';
import NewTodoForm from './../new-todo-form/NewTodoForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
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
  archive(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  } 

  // Delete the todo (Hard delete)
  delete(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
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
    const { todos } = this.state;
    const archived = todos.filter(todo => todo.isCompleted === true);
    const onGoing = todos.filter(todo => todo.isCompleted === false);
    const todoList = onGoing.map(todo => (
      <Todo 
        key={todo.id} 
        todo={todo} 
        archiveTodo={this.archive} 
        updateTodo={this.update}
        deleteTodo={this.delete}
    />));
    const archivedList = archived.map(todo => (
      <ArchivedTodo 
        key={todo.id} 
        todo={todo}
        archiveTodo={this.archive}  
        />
    ))
    console.log("todos are", todos);
    console.log("archived are:", archived);

    return (
      <div>
        <NewTodoForm 
          addTodo={this.add}
        />
        <h1>Ongoing tasks</h1>
        <ul>
          {todoList}
        </ul>
        <h1>Completed</h1>
        <ul>
          {archivedList}
        </ul>
      </div>
    )
  }
}
