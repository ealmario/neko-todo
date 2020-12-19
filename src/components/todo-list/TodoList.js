import React, { Component } from 'react'

import Todo from './../todo/Todo';
import ArchivedTodo from './../achived-todo/ArchivedTodo';
import NewTodoForm from './../new-todo-form/NewTodoForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      window: 'ongoing'
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

  // Set Window 
  setWindow(window) {
    this.setState({...this.state, window: window})
  }

  render() {
    const { todos, window } = this.state;
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

    const date = new Date();
    const dateString = date.toDateString();

    const activeWindow = (window) => {
      switch (window) {
        case "ongoing" : 
          return (
            <div>
              <h6>To-Do <span>{dateString}</span></h6>
              <NewTodoForm 
                addTodo={this.add}
              />
              <ul>
                {todoList.length > 0 ? todoList: "No tasks for today"}
              </ul>
            </div>
          )
        case "completed" :
          return(
            <div>
              <h6>Completed</h6>
              <ul>
                {archivedList.length === 0 ? "No completed tasks" : archivedList}
              </ul>
            </div>
          )
        default:
          return (
            <div>
              <h6>To-Do <span>{dateString}</span></h6>
              <NewTodoForm 
                addTodo={this.add}
              />
              <ul>
                {todoList}
              </ul>
            </div>
          )
      }
    }

    return (
      <div>
        <div>
          <ul>
            <li onClick={()=>{this.setWindow("ongoing")}}>On-Going</li>
            <li onClick={()=>{this.setWindow("completed")}}>Completed</li>
          </ul>
        </div>
        {activeWindow(window)}
      </div>
    )
  }
}
