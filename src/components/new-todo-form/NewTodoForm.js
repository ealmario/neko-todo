import React, { Component } from 'react'

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
    addTodo(this.state);
    this.setState({
      id: '',
      task: '',
      isCompleted: false
    })
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task"></label>
        <input 
          id="task"
          name="task" 
          type="text"
          placeholder="Add a todo"
          value={task}  
          onChange={this.handleChange}
          />
        <button>Add</button>
      </form>
    )
  }
}
