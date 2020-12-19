import React, { Component } from 'react'

import Todo from './../todo/Todo';
import ArchivedTodo from './../achived-todo/ArchivedTodo';
import NewTodoForm from './../new-todo-form/NewTodoForm';

import styles from './TodoList.module.scss'
import neko from './../../assets/neko-bottom-border.png'
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
              <div className={styles.tlTasks}>
                <h6 className={styles.title}>To-Do <span>{dateString}</span></h6>
                <NewTodoForm 
                  addTodo={this.add}
                />
                <ul className={styles.tlList}>
                  {todoList.length > 0 ? todoList: <p className={styles.emptyText}>No tasks for today</p>}
                </ul>
                <figure className={styles.border}>
                  <img src={neko} alt="Neko Border"/>
                </figure>
              </div>
          )
        case "completed" :
          return(
            <div className={styles.tlTasks}>
              <h6 className={styles.title}>Completed</h6>
              <ul className={styles.tlCompleted}>
                {archivedList.length === 0 ? <p className={styles.emptyText}>No completed tasks yet</p> : archivedList}
              </ul>
              <figure className={styles.border}>
                <img src={neko} alt="Neko Border"/>
              </figure>
            </div>
          )
        default:
          return (
            <div className={styles.tlTasks}>
              <h6 className={styles.title}>To-Do <span>{dateString}</span></h6>
              <NewTodoForm 
                addTodo={this.add}
              />
              <ul className={styles.tlList}>
                {todoList}
              </ul>
              <figure className={styles.border}>
                <img src={neko} alt="Neko Border"/>
              </figure>
            </div>
          )
      }
    }

    return (
      <div className={styles.tlContainer}>
        <div className={styles.tlWindow}>
          <h6 className={styles.title}>Tasks</h6>
          <ul className={styles.tlWindowList}>
            <li 
              onClick={()=>{this.setWindow("ongoing")}} className={window === "ongoing" ? styles.selected : ""}>
              On-Going 
              {onGoing.length !== 0 ? 
              (<span className={styles.badge}>{onGoing.length}</span>) : ""}
            </li>
            <li 
              onClick={()=>{this.setWindow("completed")}}
              className={window === "completed" ? styles.selected : ""}
              >
              Completed
              {archived.length !== 0 ? 
              (<span className={styles.badge}>{archived.length}</span>) : ""}
            </li>
          </ul>
        </div>
        <div className={styles.tlTasksContainer}>
          {activeWindow(window)}
        </div>
      </div>
    )
  }
}
