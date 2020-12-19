import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './NewTodo.module.scss'

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      task: '',
      isCompleted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  handleSubmit(e){
    const { addTodo } = this.props;
    
    e.preventDefault();
    addTodo({...this.state, id: uuidv4()});
    this.setState({
      id: '',
      task: '',
      isCompleted: false
    })
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor="task" aria-label="Add a Todo"></label>
        <input
          tabIndex={0} 
          id="task"
          name="task" 
          type="text"
          placeholder="Add a todo"
          value={task}  
          onChange={this.handleChange}
          className={styles.input}
          />
        <button className={styles.btn}>Add</button>
      </form>
    )
  }
}
